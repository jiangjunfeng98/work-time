import { onMounted, onUnmounted, ref, shallowRef } from 'vue';
import { countries, tableHeaders, type ICountry } from './countries'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import isBetween from 'dayjs/plugin/isBetween.js'
import { translations } from '../../i18n/translations';
import { holidayList } from './holiday'

const useWorkTime = (props: any) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(isBetween)

    const currentTime = ref('');
    const localTimezone = ref();
    const showDetails = ref(false);
    const countriesList = ref<ICountry[]>([]);
    const intervalId = shallowRef();
    const sortKey = ref('');
    const sortOrder = ref('asc');

    let likeList = new Set()

    /**
     * 喜欢
     * @param countryRegion 
     */
    const toggleFavorite = (countryRegion: string) => {
        if (likeList.has(countryRegion)) {
            likeList.delete(countryRegion)
        } else {
            likeList.add(countryRegion)
        }
        localStorage.setItem('likeList', Array.from(likeList).join(';'))
        updateTime()
    }
    /**
     * 排序
     * @param key 
     */
    const toggleSort = (key: string) => {
        if (sortKey.value === key) {
            sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
        } else {
            sortKey.value = key;
            sortOrder.value = 'asc';
        }
        if (!sortKey.value) return;

        countriesList.value.sort((a, b) => {
            let aValue, bValue;
            if (sortKey.value === 'countryRegion') {
                aValue = translations[props.currentLang].countries[a.countryRegion];
                bValue = translations[props.currentLang].countries[b.countryRegion];
            } else if (sortKey.value === 'workStatus') {
                aValue = a.workStatus.isWorking ? 1 : 0;
                bValue = b.workStatus.isWorking ? 1 : 0;
            } else if (sortKey.value === 'favorite') {
                aValue = a.workStatus.isFavorite;
                bValue = b.workStatus.isFavorite;
            }
            if (aValue === bValue) return 0;
            if (sortOrder.value === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }
    /**
     * 工作时间判断
     * @param country 
     * @returns 
     */
    const calculateWorkStatus = (country: ICountry) => {
        const targetTime = dayjs().utc().tz(country.timezone);
        const currentDate = targetTime.format('YYYY-MM-DD')
        const currentTime = targetTime.format('HH:mm')
        const isFavorite = likeList.has(country.countryRegion)
        // 检查是否为周末（0表示周日，6表示周六）
        const dayOfWeek = targetTime.day();
        const isHoliday = holidayList[country.countryRegion]?.includes(currentDate);
        let remainingTime = '-';
        if (dayOfWeek === 0 || dayOfWeek === 6 || isHoliday) {
            return {
                isWorking: false,
                currentTime: currentTime,
                currentDate: currentDate,
                isNearEndOfWork: false,
                isFavorite: isFavorite,
                remainingTime:remainingTime
            };
        }
        const workStartTime = dayjs(`${currentDate} ${country.workStartTime}`).format('YYYY-MM-DD HH:mm');
        const workEndTime = dayjs(`${currentDate} ${country.workEndTime}`).format('YYYY-MM-DD HH:mm');
        let isWorking = dayjs(`${currentDate} ${currentTime}`).isBetween(workStartTime, workEndTime)


        let hours = 0;
        let minutes = 0;

        if (isWorking) {
            // 计算剩余时间
            const remaining = dayjs(workEndTime).diff(dayjs(`${currentDate} ${currentTime}`), 'minute');
            hours = Math.floor(remaining / 60);
            minutes = Math.floor(remaining % 60);
            if (hours === 0 && minutes === 0) {
                remainingTime = '-';
                isWorking = false;
            } else {
                remainingTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            }
        }

        const workStatus = {
            isWorking,
            remainingTime,
            currentTime: currentTime,
            currentDate: currentDate,
            isNearEndOfWork: isWorking && hours === 0 && minutes <= 59,
            isFavorite: isFavorite
        };

        return workStatus;
    };

    const updateTime = () => {
        currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
        countriesList.value = (sortKey.value ? countriesList.value : countries).map(country => ({
            ...country,
            workStatus: calculateWorkStatus(country)
        }));
    }
    /**
     * 初始化喜欢
     */
    const initLikeList = () => {
        const likeListStr = localStorage.getItem('likeList');
        if (likeListStr) {
            likeList = new Set(likeListStr.split(';'));
        }
    }
    /**
     * 获取时区
     * @returns 
     */
    const getLocalTimezone = () => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const date = new Date();
        const offset = -date.getTimezoneOffset();
        const hours = Math.abs(Math.floor(offset / 60));
        const minutes = Math.abs(offset % 60);
        const sign = offset >= 0 ? '+' : '-';
        const formattedOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        return `${timeZone} (UTC${formattedOffset})`;
    };

    onMounted(() => {
        localTimezone.value = getLocalTimezone();
        initLikeList()
        updateTime();
        intervalId.value = setInterval(updateTime, 1000);
    })

    onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId.value);
            intervalId.value = null
        }
    })
    return { countriesList, toggleFavorite, localTimezone, currentTime, toggleSort, tableHeaders, sortKey, sortOrder,showDetails }
}

export default useWorkTime
