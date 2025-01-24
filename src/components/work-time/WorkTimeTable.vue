<template>
  <div class="max-w-[1100px] mx-auto p-5 overflow-x-auto">
    <div class="text-center mb-5">
      <h1 class="text-2xl text-gray-800 dark:text-gray-200 mb-2.5">
        {{ translations[currentLang].header.currentTime }}
        <span class="inline-block min-w-[100px] font-mono text-center" id="current-time">{{ currentTime }}</span>
        {{ localTimezone }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 m-0">{{ translations[currentLang].header.description }}</p>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-4 space-y-1">
        <p>• {{ translations[currentLang].header.workTimeStandard.shortestWorkTime }}</p>
        <p>• {{ translations[currentLang].header.workTimeStandard.workStatusRule }}</p>
        <p>• {{ translations[currentLang].header.workTimeStandard.timezoneRule }}</p>
      </div>
    </div>

    <table class="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header" 
              class="bg-gray-50 dark:bg-gray-700 font-semibold text-gray-700 dark:text-gray-300 p-2 text-left whitespace-nowrap select-none"
              :class="{ 
                'hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer': header === 'countryRegion' || header === 'workStatus' || header === 'favorite',
                'cursor-default': header !== 'countryRegion' && header !== 'workStatus' && header !== 'favorite'
              }"
              @click="header === 'countryRegion' || header === 'workStatus' || header === 'favorite' ? toggleSort(header) : null">
            <div class="flex items-center gap-1">
              {{ translations[currentLang].table[header] }}
              <span v-if="header === 'countryRegion' || header === 'workStatus' || header === 'favorite'" 
                    class="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                ↕
              </span>
              <span v-if="(header === 'countryRegion' || header === 'workStatus' || header === 'favorite') && sortKey === header" 
                    class="text-gray-500 dark:text-gray-400">
                {{ sortOrder === 'asc' ? '↑' : '↓' }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in countriesList" :key="country.countryRegion" class="hover:bg-gray-50 dark:hover:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
          <td class="p-2">
            <div class="text-base text-gray-800 dark:text-gray-200 mb-1">{{ translations[currentLang].countries[country.countryRegion] }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <div>EN: {{ country.countryRegion }}</div>
              <div>中: {{ translations['zh'].countries[country.countryRegion] }}</div>
            </div>
          </td>
          <td class="p-2 text-gray-700 dark:text-gray-300">
            <div class="text-base">{{ country.utc }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ country.timezone }}</div>
          </td>
          <td class="p-2 text-gray-700 dark:text-gray-300">
            <div class="text-base">{{ country.workStatus.currentTime }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ country.workStatus.currentDate }}</div>
          </td>
          <td class="p-2 text-gray-700 dark:text-gray-300">{{ country.workStartTime }}</td>
          <td class="p-2 text-gray-700 dark:text-gray-300">{{ country.workEndTime }}</td>
          <td class="p-2" :class="{ 'text-green-500 dark:text-green-400 font-semibold': country.workStatus.isWorking, 'text-red-500 dark:text-red-400 font-semibold': !country.workStatus.isWorking }">
            {{ country.workStatus.isWorking ? translations[currentLang].table.working : translations[currentLang].table.notWorking }}
          </td>
          <td class="p-2" :class="{ 'text-yellow-500 dark:text-yellow-400': country.workStatus.isNearEndOfWork }">
            {{ country.workStatus.remainingTime }}
          </td>
          <td class="p-2">
            <button @click="toggleFavorite(country.countryRegion)" class="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-colors duration-200" :class="{
                'text-yellow-500 dark:text-yellow-400 fill-current': country.workStatus.isFavorite,
                'text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400': !country.workStatus.isFavorite
              }" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" :fill="country.workStatus.isFavorite ? 'currentColor' : 'none'" 
                :stroke="country.workStatus.isFavorite ? 'none' : 'currentColor'" stroke-width="1.5" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { translations } from '../../i18n/translations';
import useWorkTime from './useWorkTime';

const props = defineProps({
  currentLang: {
    type: String,
    required: true
  }
});
const { countriesList, toggleFavorite, localTimezone, currentTime, toggleSort, tableHeaders, sortKey, sortOrder } = useWorkTime(props);
</script>