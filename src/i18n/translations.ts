interface Translation {
  header: {
    currentTime: string;
    description: string;
    workTimeStandard: {
      shortestWorkTime: string;
      workStatusRule: string;
      timezoneRule: string;
    };
  };
  table: {
    countryRegion: string;
    timezone: string;
    currentTime: string;
    workStartTime: string;
    workEndTime: string;
    workStatus: string;
    remainingTime: string;
    working: string;
    notWorking: string;
    favorite: string;
  };
  countries: {
    'United States': string;
    'China': string;
    'Japan': string;
    'Germany': string;
    'United Kingdom': string;
    'India': string;
    'France': string;
    'Italy': string;
    'Canada': string;
    'South Korea': string;
    'Brazil': string;
    'Australia': string;
    'Mexico': string;
    'Indonesia': string;
    'Netherlands': string;
    'Saudi Arabia': string;
    'Switzerland': string;
    'Turkey': string;
    'Spain': string;
    'Taiwan': string;
    'Poland': string;
    'Sweden': string;
    'Belgium': string;
    'Thailand': string;
    'Ireland': string;
    'Austria': string;
    'Norway': string;
    'Israel': string;
    'Singapore': string;
    'Nigeria': string;
    'Malaysia': string;
    'Argentina': string;
    'Philippines': string;
    'Denmark': string;
    'South Africa': string;
    'Egypt': string;
    'Hong Kong': string;
    'Pakistan': string;
    'UAE': string;
    'Vietnam': string;
  };
}

export const translations: { [key: string]: Translation } = {
  ar: {
    header: {
      currentTime: "الوقت الحالي",
      description: "تحقق سريع مما إذا كانت البلدان حول العالم تعمل حاليًا.",
      workTimeStandard: {
        shortestWorkTime: "يتم استخدام الحد الأدنى لساعات العمل في كل بلد، عادةً 8 ساعات في اليوم، مع اعتبار عطلة نهاية الأسبوع (السبت والأحد) أيام غير عمل",
        workStatusRule: "يتم تحديد حالة العمل بناءً على التوقيت المحلي، وتظهر كحالة عدم العمل خارج ساعات العمل",
        timezoneRule: "يعتمد حساب المنطقة الزمنية على التوقيت العالمي المنسق (UTC/GMT)، مع المعالجة التلقائية للتوقيت الصيفي وتغييرات المنطقة الزمنية"
      }
    },
    table: {
      countryRegion: "البلد/المنطقة",
      timezone: "المنطقة الزمنية",
      currentTime: "الوقت الحالي",
      workStartTime: "بداية العمل",
      workEndTime: "نهاية العمل",
      workStatus: "حالة العمل",
      remainingTime: "الوقت المتبقي",
      working: "يعمل",
      notWorking: "لا يعمل",
      favorite: "المفضلة"
    },
    countries: {
      'United States': "الولايات المتحدة",
      'China': "الصين",
      'Japan': "اليابان",
      'Germany': "ألمانيا",
      'United Kingdom': "المملكة المتحدة",
      'India': "الهند",
      'France': "فرنسا",
      'Italy': "إيطاليا",
      'Canada': "كندا",
      'South Korea': "كوريا الجنوبية",
      'Brazil': "البرازيل",
      'Australia': "أستراليا",
      'Mexico': "المكسيك",
      'Indonesia': "إندونيسيا",
      'Netherlands': "هولندا",
      'Saudi Arabia': "المملكة العربية السعودية",
      'Switzerland': "سويسرا",
      'Turkey': "تركيا",
      'Spain': "إسبانيا",
      'Taiwan': "تايوان",
      'Poland': "بولندا",
      'Sweden': "السويد",
      'Belgium': "بلجيكا",
      'Thailand': "تايلاند",
      'Ireland': "أيرلندا",
      'Austria': "النمسا",
      'Norway': "النرويج",
      'Israel': "إسرائيل",
      'Singapore': "سنغافورة",
      'Nigeria': "نيجيريا",
      'Malaysia': "ماليزيا",
      'Argentina': "الأرجنتين",
      'Philippines': "الفلبين",
      'Denmark': "الدنمارك",
      'South Africa': "جنوب أفريقيا",
      'Egypt': "مصر",
      'Hong Kong': "هونغ كونغ",
      'Pakistan': "باكستان",
      'UAE': "الإمارات العربية المتحدة",
      'Vietnam': "فيتنام"
    }
  },
  es: {
    header: {
      currentTime: "Hora Actual",
      description: "Compruebe rápidamente si los países de todo el mundo están trabajando actualmente.",
      workTimeStandard: {
        shortestWorkTime: "Se utiliza el horario laboral mínimo de cada país, generalmente 8 horas por día, considerando los fines de semana (sábado y domingo) como días no laborables",
        workStatusRule: "El estado laboral se determina según la hora local, mostrándose como no laboral fuera del horario de trabajo",
        timezoneRule: "La conversión de zona horaria se basa en UTC/GMT, con ajuste automático para horario de verano y cambios de zona horaria"
      }
    },
    table: {
      countryRegion: "País/Región",
      timezone: "Zona Horaria",
      currentTime: "Hora Actual",
      workStartTime: "Inicio de Trabajo",
      workEndTime: "Fin de Trabajo",
      workStatus: "Estado de Trabajo",
      remainingTime: "Tiempo Restante",
      working: "Trabajando",
      notWorking: "No Trabajando",
      favorite: "Favorito"
    },
    countries: {
      'United States': "Estados Unidos",
      'China': "China",
      'Japan': "Japón",
      'Germany': "Alemania",
      'United Kingdom': "Reino Unido",
      'India': "India",
      'France': "Francia",
      'Italy': "Italia",
      'Canada': "Canadá",
      'South Korea': "Corea del Sur",
      'Brazil': "Brasil",
      'Australia': "Australia",
      'Mexico': "México",
      'Indonesia': "Indonesia",
      'Netherlands': "Países Bajos",
      'Saudi Arabia': "Arabia Saudita",
      'Switzerland': "Suiza",
      'Turkey': "Turquía",
      'Spain': "España",
      'Taiwan': "Taiwán",
      'Poland': "Polonia",
      'Sweden': "Suecia",
      'Belgium': "Bélgica",
      'Thailand': "Tailandia",
      'Ireland': "Irlanda",
      'Austria': "Austria",
      'Norway': "Noruega",
      'Israel': "Israel",
      'Singapore': "Singapur",
      'Nigeria': "Nigeria",
      'Malaysia': "Malasia",
      'Argentina': "Argentina",
      'Philippines': "Filipinas",
      'Denmark': "Dinamarca",
      'South Africa': "Sudáfrica",
      'Egypt': "Egipto",
      'Hong Kong': "Hong Kong",
      'Pakistan': "Pakistán",
      'UAE': "Emiratos Árabes Unidos",
      'Vietnam': "Vietnam"
    }
  },
  hi: {
    header: {
      currentTime: "वर्तमान समय",
      description: "जल्दी से जांचें कि क्या दुनिया भर के देश वर्तमान में काम कर रहे हैं।",
      workTimeStandard: {
        shortestWorkTime: "प्रत्येक देश के न्यूनतम कार्य घंटों का उपयोग किया जाता है, आमतौर पर प्रति दिन 8 घंटे, शनिवार और रविवार को छुट्टी के दिन माना जाता है",
        workStatusRule: "कार्य स्थिति स्थानीय समय के आधार पर निर्धारित की जाती है, कार्य घंटों के बाहर गैर-कार्य के रूप में दिखाई देती है",
        timezoneRule: "समय क्षेत्र रूपांतरण UTC/GMT पर आधारित है, डेलाइट सेविंग टाइम और समय क्षेत्र परिवर्तनों की स्वचालित हैंडलिंग के साथ"
      }
    },
    table: {
      countryRegion: "देश/क्षेत्र",
      timezone: "समय क्षेत्र",
      currentTime: "वर्तमान समय",
      workStartTime: "कार्य प्रारंभ",
      workEndTime: "कार्य समाप्ति",
      workStatus: "कार्य स्थिति",
      remainingTime: "शेष समय",
      working: "कार्यरत",
      notWorking: "कार्यरत नहीं",
      favorite: "पसंदीदा"
    },
    countries: {
      'United States': "संयुक्त राज्य अमेरिका",
      'China': "चीन",
      'Japan': "जापान",
      'Germany': "जर्मनी",
      'United Kingdom': "यूनाइटेड किंगडम",
      'India': "भारत",
      'France': "फ्रांस",
      'Italy': "इटली",
      'Canada': "कनाडा",
      'South Korea': "दक्षिण कोरिया",
      'Brazil': "ब्राज़ील",
      'Australia': "ऑस्ट्रेलिया",
      'Mexico': "मेक्सिको",
      'Indonesia': "इंडोनेशिया",
      'Netherlands': "नीदरलैंड",
      'Saudi Arabia': "सऊदी अरब",
      'Switzerland': "स्विट्जरलैंड",
      'Turkey': "तुर्की",
      'Spain': "स्पेन",
      'Taiwan': "ताइवान",
      'Poland': "पोलैंड",
      'Sweden': "स्वीडन",
      'Belgium': "बेल्जियम",
      'Thailand': "थाईलैंड",
      'Ireland': "आयरलैंड",
      'Austria': "ऑस्ट्रिया",
      'Norway': "नॉर्वे",
      'Israel': "इज़राइल",
      'Singapore': "सिंगापुर",
      'Nigeria': "नाइजीरिया",
      'Malaysia': "मलेशिया",
      'Argentina': "अर्जेंटीना",
      'Philippines': "फिलीपींस",
      'Denmark': "डेनमार्क",
      'South Africa': "दक्षिण अफ्रीका",
      'Egypt': "मिस्र",
      'Hong Kong': "हांगकांग",
      'Pakistan': "पाकिस्तान",
      'UAE': "संयुक्त अरब अमीरात",
      'Vietnam': "वियतनाम"
    }
  },
  en: {
    header: {
      currentTime: "Current Time",
      description: "Quick check if countries around the world are currently working.",
      workTimeStandard: {
        shortestWorkTime: "The minimum working hours of each country are used, typically 8 hours per day, with weekends (Saturday and Sunday) being non-working days",
        workStatusRule: "Work status is determined based on local time, showing as non-working outside work hours",
        timezoneRule: "Timezone conversion is based on UTC/GMT, with automatic handling of daylight saving time and timezone changes"
      }
    },
    table: {
      countryRegion: "Country/Region",
      timezone: "Timezone",
      currentTime: "Current Time",
      workStartTime: "Work Start",
      workEndTime: "Work End",
      workStatus: "Work Status",
      remainingTime: "Remaining Time",
      working: "Working",
      notWorking: "Not Working",
      favorite: "Favorite"
    },
    countries: {
      'United States': "United States",
      'China': "China",
      'Japan': "Japan",
      'Germany': "Germany",
      'United Kingdom': "United Kingdom",
      'India': "India",
      'France': "France",
      'Italy': "Italy",
      'Canada': "Canada",
      'South Korea': "South Korea",
      'Brazil': "Brazil",
      'Australia': "Australia",
      'Mexico': "Mexico",
      'Indonesia': "Indonesia",
      'Netherlands': "Netherlands",
      'Saudi Arabia': "Saudi Arabia",
      'Switzerland': "Switzerland",
      'Turkey': "Turkey",
      'Spain': "Spain",
      'Taiwan': "Taiwan",
      'Poland': "Poland",
      'Sweden': "Sweden",
      'Belgium': "Belgium",
      'Thailand': "Thailand",
      'Ireland': "Ireland",
      'Austria': "Austria",
      'Norway': "Norway",
      'Israel': "Israel",
      'Singapore': "Singapore",
      'Nigeria': "Nigeria",
      'Malaysia': "Malaysia",
      'Argentina': "Argentina",
      'Philippines': "Philippines",
      'Denmark': "Denmark",
      'South Africa': "South Africa",
      'Egypt': "Egypt",
      'Hong Kong': "Hong Kong",
      'Pakistan': "Pakistan",
      'UAE': "UAE",
      'Vietnam': "Vietnam"
    }
  },
  zh: {
    header: {
      currentTime: "当前时间",
      description: "快速查询世界各国当前是否正在工作。",
      workTimeStandard: {
        shortestWorkTime: "采用各国最短工作时间标准，通常为每天8小时，周六和周日为非工作日",
        workStatusRule: "工作状态根据当地时间判定，超出工作时间范围则显示为非工作状态",
        timezoneRule: "时区换算基于标准时区(UTC/GMT)，自动处理夏令时等时差变化"
      }
    },
    table: {
      countryRegion: "国家/地区",
      timezone: "时区",
      currentTime: "当前时间",
      workStartTime: "上班时间",
      workEndTime: "下班时间",
      workStatus: "工作状态",
      remainingTime: "剩余时间",
      working: "工作中",
      notWorking: "未工作",
      favorite: "关注"
    },
    countries: {
      'United States': "美国",
      'China': "中国",
      'Japan': "日本",
      'Germany': "德国",
      'United Kingdom': "英国",
      'India': "印度",
      'France': "法国",
      'Italy': "意大利",
      'Canada': "加拿大",
      'South Korea': "韩国",
      'Brazil': "巴西",
      'Australia': "澳大利亚",
      'Mexico': "墨西哥",
      'Indonesia': "印度尼西亚",
      'Netherlands': "荷兰",
      'Saudi Arabia': "沙特阿拉伯",
      'Switzerland': "瑞士",
      'Turkey': "土耳其",
      'Spain': "西班牙",
      'Taiwan': "台湾",
      'Poland': "波兰",
      'Sweden': "瑞典",
      'Belgium': "比利时",
      'Thailand': "泰国",
      'Ireland': "爱尔兰",
      'Austria': "奥地利",
      'Norway': "挪威",
      'Israel': "以色列",
      'Singapore': "新加坡",
      'Nigeria': "尼日利亚",
      'Malaysia': "马来西亚",
      'Argentina': "阿根廷",
      'Philippines': "菲律宾",
      'Denmark': "丹麦",
      'South Africa': "南非",
      'Egypt': "埃及",
      'Hong Kong': "香港",
      'Pakistan': "巴基斯坦",
      'UAE': "阿联酋",
      'Vietnam': "越南"
    }
  },
  ru: {
    header: {
      currentTime: "Текущее время",
      description: "Быстрая проверка рабочего времени стран по всему миру.",
      workTimeStandard: {
        shortestWorkTime: "Используется минимальное рабочее время каждой страны, обычно 8 часов в день, выходные (суббота и воскресенье) являются нерабочими днями",
        workStatusRule: "Рабочий статус определяется по местному времени, вне рабочего времени отображается как нерабочий",
        timezoneRule: "Преобразование часовых поясов основано на UTC/GMT с автоматической обработкой летнего времени и изменений часовых поясов"
      }
    },
    table: {
      countryRegion: "Страна/Регион",
      timezone: "Часовой пояс",
      currentTime: "Текущее время",
      workStartTime: "Начало работы",
      workEndTime: "Конец работы",
      workStatus: "Рабочий статус",
      remainingTime: "Оставшееся время",
      working: "Работает",
      notWorking: "Не работает",
      favorite: "Избранное"
    },
    countries: {
      'United States': "Соединенные Штаты",
      'China': "Китай",
      'Japan': "Япония",
      'Germany': "Германия",
      'United Kingdom': "Великобритания",
      'India': "Индия",
      'France': "Франция",
      'Italy': "Италия",
      'Canada': "Канада",
      'South Korea': "Южная Корея",
      'Brazil': "Бразилия",
      'Australia': "Австралия",
      'Mexico': "Мексика",
      'Indonesia': "Индонезия",
      'Netherlands': "Нидерланды",
      'Saudi Arabia': "Саудовская Аравия",
      'Switzerland': "Швейцария",
      'Turkey': "Турция",
      'Spain': "Испания",
      'Taiwan': "Тайвань",
      'Poland': "Польша",
      'Sweden': "Швеция",
      'Belgium': "Бельгия",
      'Thailand': "Таиланд",
      'Ireland': "Ирландия",
      'Austria': "Австрия",
      'Norway': "Норвегия",
      'Israel': "Израиль",
      'Singapore': "Сингапур",
      'Nigeria': "Нигерия",
      'Malaysia': "Малайзия",
      'Argentina': "Аргентина",
      'Philippines': "Филиппины",
      'Denmark': "Дания",
      'South Africa': "Южная Африка",
      'Egypt': "Египет",
      'Hong Kong': "Гонконг",
      'Pakistan': "Пакистан",
      'UAE': "ОАЭ",
      'Vietnam': "Вьетнам"
    }
  }
};