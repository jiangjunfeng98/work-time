export type ICountry = {
    countryRegion: string;
    timezone: string;
    utc:string;
    currentTime?: string;
    workStartTime: string;
    workEndTime: string;
    isWorking?: boolean
}
export const tableHeaders = [
    'countryRegion',
    'timezone',
    'currentTime',
    'workStartTime',
    'workEndTime',
    'workStatus',
    'remainingTime',
    'favorite'
];
export const countries: ICountry[] = [
    {
        countryRegion: 'United States',
        timezone: 'America/New_York',
        utc: 'UTC-5',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'China',
        timezone: 'Asia/Shanghai',
        utc: 'UTC+8',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Japan',
        timezone: 'Asia/Tokyo',
        utc: 'UTC+9',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Germany',
        timezone: 'Europe/Berlin',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'United Kingdom',
        timezone: 'Europe/London',
        utc: 'UTC+0',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'India',
        timezone: 'Asia/Kolkata',
        utc: 'UTC+5:30',
        workStartTime: '10:00',
        workEndTime: '18:00'
    },
    {
        countryRegion: 'France',
        timezone: 'Europe/Paris',
        utc: 'UTC+1',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Italy',
        timezone: 'Europe/Rome',
        utc: 'UTC+1',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Canada',
        timezone: 'America/Toronto',
        utc: 'UTC-5',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'South Korea',
        timezone: 'Asia/Seoul',
        utc: 'UTC+9',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Brazil',
        timezone: 'America/Sao_Paulo',
        utc: 'UTC-3',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Australia',
        timezone: 'Australia/Sydney',
        utc: 'UTC+11',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Mexico',
        timezone: 'America/Mexico_City',
        utc: 'UTC-6',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Indonesia',
        timezone: 'Asia/Jakarta',
        utc: 'UTC+7',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Netherlands',
        timezone: 'Europe/Amsterdam',
        utc: 'UTC+1',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Saudi Arabia',
        timezone: 'Asia/Riyadh',
        utc: 'UTC+3',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'Switzerland',
        timezone: 'Europe/Zurich',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Turkey',
        timezone: 'Europe/Istanbul',
        utc: 'UTC+3',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Spain',
        timezone: 'Europe/Madrid',
        utc: 'UTC+1',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Taiwan',
        timezone: 'Asia/Taipei',
        utc: 'UTC+8',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Poland',
        timezone: 'Europe/Warsaw',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Sweden',
        timezone: 'Europe/Stockholm',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'Belgium',
        timezone: 'Europe/Brussels',
        utc: 'UTC+1',
        workStartTime: '09:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Thailand',
        timezone: 'Asia/Bangkok',
        utc: 'UTC+7',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Ireland',
        timezone: 'Europe/Dublin',
        utc: 'UTC+0',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Austria',
        timezone: 'Europe/Vienna',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Norway',
        timezone: 'Europe/Oslo',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'Israel',
        timezone: 'Asia/Jerusalem',
        utc: 'UTC+2',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Singapore',
        timezone: 'Asia/Singapore',
        utc: 'UTC+8',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Nigeria',
        timezone: 'Africa/Lagos',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Malaysia',
        timezone: 'Asia/Kuala_Lumpur',
        utc: 'UTC+8',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Argentina',
        timezone: 'America/Argentina/Buenos_Aires',
        utc: 'UTC-3',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Philippines',
        timezone: 'Asia/Manila',
        utc: 'UTC+8',
        workStartTime: '08:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Denmark',
        timezone: 'Europe/Copenhagen',
        utc: 'UTC+1',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'South Africa',
        timezone: 'Africa/Johannesburg',
        utc: 'UTC+2',
        workStartTime: '08:00',
        workEndTime: '16:00'
    },
    {
        countryRegion: 'Egypt',
        timezone: 'Africa/Cairo',
        utc: 'UTC+2',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Hong Kong',
        timezone: 'Asia/Hong_Kong',
        utc: 'UTC+8',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'Pakistan',
        timezone: 'Asia/Karachi',
        utc: 'UTC+5',
        workStartTime: '09:00',
        workEndTime: '17:00'
    },
    {
        countryRegion: 'UAE',
        timezone: 'Asia/Dubai',
        utc: 'UTC+4',
        workStartTime: '08:00',
        workEndTime: '15:00'
    },
    {
        countryRegion: 'Vietnam',
        timezone: 'Asia/Ho_Chi_Minh',
        utc: 'UTC+7',
        workStartTime: '08:00',
        workEndTime: '17:00'
    }
];
