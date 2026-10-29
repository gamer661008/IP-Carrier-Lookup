// ipinfo.io配置
const API_BASE_URL = 'https://ipinfo.io/';

// 國家代碼到英文全稱映射
const COUNTRY_MAP = {
    'AF': 'Afghanistan', 'AX': 'Aland Islands', 'AL': 'Albania', 'DZ': 'Algeria',
    'AS': 'American Samoa', 'AD': 'Andorra', 'AO': 'Angola', 'AI': 'Anguilla',
    'AQ': 'Antarctica', 'AG': 'Antigua and Barbuda', 'AR': 'Argentina', 'AM': 'Armenia',
    'AW': 'Aruba', 'AU': 'Australia', 'AT': 'Austria', 'AZ': 'Azerbaijan',
    'BS': 'Bahamas', 'BH': 'Bahrain', 'BD': 'Bangladesh', 'BB': 'Barbados',
    'BY': 'Belarus', 'BE': 'Belgium', 'BZ': 'Belize', 'BJ': 'Benin',
    'BM': 'Bermuda', 'BT': 'Bhutan', 'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana', 'BV': 'Bouvet Island', 'BR': 'Brazil', 'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei Darussalam', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi',
    'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada', 'CV': 'Cape Verde',
    'KY': 'Cayman Islands', 'CF': 'Central African Republic', 'TD': 'Chad', 'CL': 'Chile',
    'CN': 'China', 'CX': 'Christmas Island', 'CC': 'Cocos (Keeling) Islands', 'CO': 'Colombia',
    'KM': 'Comoros', 'CG': 'Congo', 'CD': 'Congo, Democratic Republic', 'CK': 'Cook Islands',
    'CR': 'Costa Rica', 'CI': 'Cote D\'Ivoire', 'HR': 'Croatia', 'CU': 'Cuba',
    'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark', 'DJ': 'Djibouti',
    'DM': 'Dominica', 'DO': 'Dominican Republic', 'EC': 'Ecuador', 'EG': 'Egypt',
    'SV': 'El Salvador', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea', 'EE': 'Estonia',
    'ET': 'Ethiopia', 'FK': 'Falkland Islands (Malvinas)', 'FO': 'Faroe Islands', 'FJ': 'Fiji',
    'FI': 'Finland', 'FR': 'France', 'GF': 'French Guiana', 'PF': 'French Polynesia',
    'TF': 'French Southern Territories', 'GA': 'Gabon', 'GM': 'Gambia', 'GE': 'Georgia',
    'DE': 'Germany', 'GH': 'Ghana', 'GI': 'Gibraltar', 'GR': 'Greece',
    'GL': 'Greenland', 'GD': 'Grenada', 'GP': 'Guadeloupe', 'GU': 'Guam',
    'GT': 'Guatemala', 'GG': 'Guernsey', 'GN': 'Guinea', 'GW': 'Guinea-Bissau',
    'GY': 'Guyana', 'HT': 'Haiti', 'HM': 'Heard Island and Mcdonald Islands', 'VA': 'Holy See (Vatican City State)',
    'HN': 'Honduras', 'HK': 'Hong Kong', 'HU': 'Hungary', 'IS': 'Iceland',
    'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran, Islamic Republic Of', 'IQ': 'Iraq',
    'IE': 'Ireland', 'IM': 'Isle of Man', 'IL': 'Israel', 'IT': 'Italy',
    'JM': 'Jamaica', 'JP': 'Japan', 'JE': 'Jersey', 'JO': 'Jordan',
    'KZ': 'Kazakhstan', 'KE': 'Kenya', 'KI': 'Kiribati', 'KP': 'Korea, Democratic People\'s Republic of',
    'KR': 'Korea, Republic of', 'KW': 'Kuwait', 'KG': 'Kyrgyzstan', 'LA': 'Lao People\'s Democratic Republic',
    'LV': 'Latvia', 'LB': 'Lebanon', 'LS': 'Lesotho', 'LR': 'Liberia',
    'LY': 'Libyan Arab Jamahiriya', 'LI': 'Liechtenstein', 'LT': 'Lithuania', 'LU': 'Luxembourg',
    'MO': 'Macao', 'MK': 'Macedonia, The Former Yugoslav Republic of', 'MG': 'Madagascar', 'MW': 'Malawi',
    'MY': 'Malaysia', 'MV': 'Maldives', 'ML': 'Mali', 'MT': 'Malta',
    'MH': 'Marshall Islands', 'MQ': 'Martinique', 'MR': 'Mauritania', 'MU': 'Mauritius',
    'YT': 'Mayotte', 'MX': 'Mexico', 'FM': 'Micronesia, Federated States of', 'MD': 'Moldova, Republic of',
    'MC': 'Monaco', 'MN': 'Mongolia', 'ME': 'Montenegro', 'MS': 'Montserrat',
    'MA': 'Morocco', 'MZ': 'Mozambique', 'MM': 'Myanmar', 'NA': 'Namibia',
    'NR': 'Nauru', 'NP': 'Nepal', 'NL': 'Netherlands', 'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia', 'NZ': 'New Zealand', 'NI': 'Nicaragua', 'NE': 'Niger',
    'NG': 'Nigeria', 'NU': 'Niue', 'NF': 'Norfolk Island', 'MP': 'Northern Mariana Islands',
    'NO': 'Norway', 'OM': 'Oman', 'PK': 'Pakistan', 'PW': 'Palau',
    'PS': 'Palestinian Territory, Occupied', 'PA': 'Panama', 'PG': 'Papua New Guinea', 'PY': 'Paraguay',
    'PE': 'Peru', 'PH': 'Philippines', 'PN': 'Pitcairn', 'PL': 'Poland',
    'PT': 'Portugal', 'PR': 'Puerto Rico', 'QA': 'Qatar', 'RE': 'Reunion',
    'RO': 'Romania', 'RU': 'Russian Federation', 'RW': 'Rwanda', 'BL': 'Saint Barthelemy',
    'SH': 'Saint Helena', 'KN': 'Saint Kitts and Nevis', 'LC': 'Saint Lucia', 'MF': 'Saint Martin',
    'PM': 'Saint Pierre and Miquelon', 'VC': 'Saint Vincent and the Grenadines', 'WS': 'Samoa', 'SM': 'San Marino',
    'ST': 'Sao Tome and Principe', 'SA': 'Saudi Arabia', 'SN': 'Senegal', 'RS': 'Serbia',
    'SC': 'Seychelles', 'SL': 'Sierra Leone', 'SG': 'Singapore', 'SK': 'Slovakia',
    'SI': 'Slovenia', 'SB': 'Solomon Islands', 'SO': 'Somalia', 'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands', 'ES': 'Spain', 'LK': 'Sri Lanka', 'SD': 'Sudan',
    'SR': 'Suriname', 'SJ': 'Svalbard and Jan Mayen', 'SZ': 'Swaziland', 'SE': 'Sweden',
    'CH': 'Switzerland', 'SY': 'Syrian Arab Republic', 'TW': 'Taiwan, Province of China', 'TJ': 'Tajikistan',
    'TZ': 'Tanzania, United Republic of', 'TH': 'Thailand', 'TL': 'Timor-Leste', 'TG': 'Togo',
    'TK': 'Tokelau', 'TO': 'Tonga', 'TT': 'Trinidad and Tobago', 'TN': 'Tunisia',
    'TR': 'Turkey', 'TM': 'Turkmenistan', 'TC': 'Turks and Caicos Islands', 'TV': 'Tuvalu',
    'UG': 'Uganda', 'UA': 'Ukraine', 'AE': 'United Arab Emirates', 'GB': 'United Kingdom',
    'US': 'United States', 'UM': 'United States Minor Outlying Islands', 'UY': 'Uruguay', 'UZ': 'Uzbekistan',
    'VU': 'Vanuatu', 'VE': 'Venezuela', 'VN': 'Viet Nam', 'VG': 'Virgin Islands, British',
    'VI': 'Virgin Islands, U.S.', 'WF': 'Wallis and Futuna', 'EH': 'Western Sahara', 'YE': 'Yemen',
    'ZM': 'Zambia', 'ZW': 'Zimbabwe'
};

// 國家代碼到中文全稱映射
const COUNTRY_MAP_ZH = {
    'AF': '阿富汗', 'AX': '奧蘭群島', 'AL': '阿爾巴尼亞', 'DZ': '阿爾及利亞',
    'AS': '美屬薩摩亞', 'AD': '安道爾', 'AO': '安哥拉', 'AI': '安圭拉',
    'AQ': '南極洲', 'AG': '安提瓜和巴布達', 'AR': '阿根廷', 'AM': '亞美尼亞',
    'AW': '阿魯巴', 'AU': '澳大利亞', 'AT': '奧地利', 'AZ': '阿塞拜疆',
    'BS': '巴哈馬', 'BH': '巴林', 'BD': '孟加拉國', 'BB': '巴巴多斯',
    'BY': '白俄羅斯', 'BE': '比利時', 'BZ': '伯利茲', 'BJ': '貝寧',
    'BM': '百慕大', 'BT': '不丹', 'BO': '玻利維亞', 'BA': '波斯尼亞和黑塞哥維那',
    'BW': '博茨瓦納', 'BV': '布維島', 'BR': '巴西', 'IO': '英屬印度洋領地',
    'BN': '文萊', 'BG': '保加利亞', 'BF': '布基納法索', 'BI': '布隆迪',
    'KH': '柬埔寨', 'CM': '喀麥隆', 'CA': '加拿大', 'CV': '佛得角',
    'KY': '開曼群島', 'CF': '中非共和國', 'TD': '乍得', 'CL': '智利',
    'CN': '中國', 'CX': '聖誕島', 'CC': '科科斯（基林）群島', 'CO': '哥倫比亞',
    'KM': '科摩羅', 'CG': '剛果', 'CD': '剛果民主共和國', 'CK': '庫克群島',
    'CR': '哥斯達黎加', 'CI': '科特迪瓦', 'HR': '克羅地亞', 'CU': '古巴',
    'CY': '塞浦路斯', 'CZ': '捷克', 'DK': '丹麥', 'DJ': '吉布提',
    'DM': '多米尼克', 'DO': '多米尼加共和國', 'EC': '厄瓜多爾', 'EG': '埃及',
    'SV': '薩爾瓦多', 'GQ': '赤道幾內亞', 'ER': '厄立特里亞', 'EE': '愛沙尼亞',
    'ET': '埃塞俄比亞', 'FK': '福克蘭群島', 'FO': '法羅群島', 'FJ': '斐濟',
    'FI': '芬蘭', 'FR': '法國', 'GF': '法屬圭亞那', 'PF': '法屬波利尼西亞',
    'TF': '法屬南部領地', 'GA': '加蓬', 'GM': '岡比亞', 'GE': '格魯吉亞',
    'DE': '德國', 'GH': '加納', 'GI': '直布羅陀', 'GR': '希臘',
    'GL': '格陵蘭', 'GD': '格林納達', 'GP': '瓜德羅普', 'GU': '關島',
    'GT': '危地馬拉', 'GG': '根西島', 'GN': '幾內亞', 'GW': '幾內亞比紹',
    'GY': '圭亞那', 'HT': '海地', 'HM': '赫德島和麥克唐納群島', 'VA': '梵蒂岡',
    'HN': '洪都拉斯', 'HK': '中國香港', 'HU': '匈牙利', 'IS': '冰島',
    'IN': '印度', 'ID': '印度尼西亞', 'IR': '伊朗', 'IQ': '伊拉克',
    'IE': '愛爾蘭', 'IM': '馬恩島', 'IL': '以色列', 'IT': '意大利',
    'JM': '牙買加', 'JP': '日本', 'JE': '澤西島', 'JO': '約旦',
    'KZ': '哈薩克斯坦', 'KE': '肯尼亞', 'KI': '基里巴斯', 'KP': '朝鮮',
    'KR': '韓國', 'KW': '科威特', 'KG': '吉爾吉斯斯坦', 'LA': '老撾',
    'LV': '拉脫維亞', 'LB': '黎巴嫩', 'LS': '萊索托', 'LR': '利比里亞',
    'LY': '利比亞', 'LI': '列支敦士登', 'LT': '立陶宛', 'LU': '盧森堡',
    'MO': '中國澳門', 'MK': '北馬其頓', 'MG': '馬達加斯加', 'MW': '馬拉維',
    'MY': '馬來西亞', 'MV': '馬爾代夫', 'ML': '馬里', 'MT': '馬耳他',
    'MH': '馬紹爾群島', 'MQ': '馬提尼克', 'MR': '毛里塔尼亞', 'MU': '毛里求斯',
    'YT': '馬約特', 'MX': '墨西哥', 'FM': '密克羅尼西亞', 'MD': '摩爾多瓦',
    'MC': '摩納哥', 'MN': '蒙古', 'ME': '黑山', 'MS': '蒙特塞拉特',
    'MA': '摩洛哥', 'MZ': '莫桑比克', 'MM': '緬甸', 'NA': '納米比亞',
    'NR': '瑙魯', 'NP': '尼泊爾', 'NL': '荷蘭', 'AN': '荷屬安的列斯',
    'NC': '新喀里多尼亞', 'NZ': '新西蘭', 'NI': '尼加拉瓜', 'NE': '尼日爾',
    'NG': '尼日利亞', 'NU': '紐埃', 'NF': '諾福克島', 'MP': '北馬里亞納群島',
    'NO': '挪威', 'OM': '阿曼', 'PK': '巴基斯坦', 'PW': '帕勞',
    'PS': '巴勒斯坦', 'PA': '巴拿馬', 'PG': '巴布亞新幾內亞', 'PY': '巴拉圭',
    'PE': '秘魯', 'PH': '菲律賓', 'PN': '皮特凱恩群島', 'PL': '波蘭',
    'PT': '葡萄牙', 'PR': '波多黎各', 'QA': '卡塔爾', 'RE': '留尼汪',
    'RO': '羅馬尼亞', 'RU': '俄羅斯', 'RW': '盧旺達', 'BL': '聖巴泰勒米',
    'SH': '聖赫勒拿', 'KN': '聖基茨和尼維斯', 'LC': '聖盧西亞', 'MF': '法屬聖馬丁',
    'PM': '聖皮埃爾和密克隆', 'VC': '聖文森特和格林納丁斯', 'WS': '薩摩亞', 'SM': '聖馬力諾',
    'ST': '聖多美和普林西比', 'SA': '沙特阿拉伯', 'SN': '塞內加爾', 'RS': '塞爾維亞',
    'SC': '塞舌爾', 'SL': '塞拉利昂', 'SG': '新加坡', 'SK': '斯洛伐克',
    'SI': '斯洛文尼亞', 'SB': '所羅門群島', 'SO': '索馬里', 'ZA': '南非',
    'GS': '南喬治亞和南桑威奇群島', 'ES': '西班牙', 'LK': '斯里蘭卡', 'SD': '蘇丹',
    'SR': '蘇里南', 'SJ': '斯瓦爾巴和揚馬延', 'SZ': '斯威士蘭', 'SE': '瑞典',
    'CH': '瑞士', 'SY': '敘利亞', 'TW': '台灣', 'TJ': '塔吉克斯坦',
    'TZ': '坦桑尼亞', 'TH': '泰國', 'TL': '東帝汶', 'TG': '多哥',
    'TK': '托克勞', 'TO': '湯加', 'TT': '特立尼達和多巴哥', 'TN': '突尼斯',
    'TR': '土耳其', 'TM': '土庫曼斯坦', 'TC': '特克斯和凱科斯群島', 'TV': '圖瓦盧',
    'UG': '烏幹達', 'UA': '烏克蘭', 'AE': '阿聯酋', 'GB': '英國',
    'US': '美國', 'UM': '美國本土外小島嶼', 'UY': '烏拉圭', 'UZ': '烏茲別克斯坦',
    'VU': '瓦努阿圖', 'VE': '委內瑞拉', 'VN': '越南', 'VG': '英屬維爾京群島',
    'VI': '美屬維爾京群島', 'WF': '瓦利斯和富圖納', 'EH': '西撒哈拉', 'YE': '也門',
    'ZM': '讚比亞', 'ZW': '津巴布韋'
};

// 英文/拼音城市名到中文映射（常見城市）
const CITY_MAP_ZH = {
    // 中國主要城市（拼音）
    'Beijing': '北京', 'Shanghai': '上海', 'Guangzhou': '廣州', 'Shenzhen': '深圳',
    'Hangzhou': '杭州', 'Chengdu': '成都', 'Wuhan': '武漢', 'Xi\'an': '西安',
    'Nanjing': '南京', 'Chongqing': '重慶', 'Tianjin': '天津', 'Suzhou': '蘇州',
    'Zhengzhou': '鄭州', 'Changsha': '長沙', 'Qingdao': '青島', 'Dalian': '大連',
    'Xiamen': '廈門', 'Kunming': '昆明', 'Harbin': '哈爾濱', 'Shenyang': '沈陽',
    'Changchun': '長春', 'Fuzhou': '福州', 'Hefei': '合肥', 'Shijiazhuang': '石家莊',
    'Taiyuan': '太原', 'Jinan': '濟南', 'Nanning': '南寧', 'Guiyang': '貴陽',
    'Lanzhou': '蘭州', 'Haikou': '海口', 'Nanchang': '南昌', 'Urumqi': '烏魯木齊',
    'Lhasa': '拉薩', 'Hohhot': '呼和浩特', 'Yinchuan': '銀川', 'Xining': '西寧',
    // 港澳台
    'Hong Kong': '香港', 'Taipei': '台北', 'Macao': '澳門', 'Kaohsiung': '高雄',
    'Taichung': '台中', 'Tainan': '台南', 'Kowloon': '九龍', 'New Territories': '新界',
    // 亞洲主要城市
    'Singapore': '新加坡', 'Tokyo': '東京', 'Osaka': '大阪', 'Yokohama': '橫濱',
    'Nagoya': '名古屋', 'Sapporo': '劄幌', 'Fukuoka': '福岡', 'Kobe': '神戶',
    'Kyoto': '京都', 'Seoul': '首爾', 'Busan': '釜山', 'Incheon': '仁川',
    'Daegu': '大邱', 'Bangkok': '曼谷', 'Kuala Lumpur': '吉隆坡', 'Jakarta': '雅加達',
    'Manila': '馬尼拉', 'Hanoi': '河內', 'Ho Chi Minh City': '胡志明市', 'Phnom Penh': '金邊',
    'Yangon': '仰光', 'Dhaka': '達卡', 'Mumbai': '孟買', 'Delhi': '德里',
    'New Delhi': '新德里', 'Bangalore': '班加羅爾', 'Hyderabad': '海得拉巴', 'Chennai': '金奈',
    'Kolkata': '加爾各答', 'Pune': '浦那', 'Karachi': '卡拉奇', 'Lahore': '拉合爾',
    'Islamabad': '伊斯蘭堡', 'Colombo': '科倫坡', 'Kathmandu': '加德滿都', 'Thimphu': '廷布',
    'Male': '馬累', 'Ulaanbaatar': '烏蘭巴托', 'Astana': '阿斯塔納', 'Almaty': '阿拉木圖',
    'Tashkent': '塔什幹', 'Bishkek': '比什凱克', 'Dushanbe': '杜尚別', 'Ashgabat': '阿什哈巴德',
    'Tehran': '德黑蘭', 'Baghdad': '巴格達', 'Riyadh': '利雅得', 'Jeddah': '吉達',
    'Mecca': '麥加', 'Medina': '麥地那', 'Kuwait City': '科威特城', 'Doha': '多哈',
    'Manama': '麥納麥', 'Muscat': '馬斯喀特', 'Sanaa': '薩那', 'Damascus': '大馬士革',
    'Amman': '安曼', 'Beirut': '貝魯特', 'Jerusalem': '耶路撒冷', 'Tel Aviv': '特拉維夫',
    'Istanbul': '伊斯坦布爾', 'Ankara': '安卡拉', 'Izmir': '伊茲密爾', 'Baku': '巴庫',
    'Yerevan': '埃里溫', 'Tbilisi': '第比利斯',
    // 歐洲主要城市
    'Moscow': '莫斯科', 'Saint Petersburg': '聖彼得堡', 'Novosibirsk': '新西伯利亞',
    'Yekaterinburg': '葉卡捷琳堡', 'Kazan': '喀山', 'London': '倫敦', 'Manchester': '曼徹斯特',
    'Birmingham': '伯明翰', 'Liverpool': '利物浦', 'Glasgow': '格拉斯哥', 'Edinburgh': '愛丁堡',
    'Paris': '巴黎', 'Marseille': '馬賽', 'Lyon': '里昂', 'Nice': '尼斯',
    'Berlin': '柏林', 'Munich': '慕尼黑', 'Hamburg': '漢堡', 'Frankfurt': '法蘭克福',
    'Cologne': '科隆', 'Stuttgart': '斯圖加特', 'Rome': '羅馬', 'Milan': '米蘭',
    'Naples': '那不勒斯', 'Turin': '都靈', 'Madrid': '馬德里', 'Barcelona': '巴塞羅那',
    'Valencia': '瓦倫西亞', 'Seville': '塞維利亞', 'Lisbon': '里斯本', 'Porto': '波爾圖',
    'Amsterdam': '阿姆斯特丹', 'Rotterdam': '鹿特丹', 'Brussels': '布魯塞爾', 'Antwerp': '安特衛普',
    'Vienna': '維也納', 'Zurich': '蘇黎世', 'Geneva': '日內瓦', 'Stockholm': '斯德哥爾摩',
    'Oslo': '奧斯陸', 'Copenhagen': '哥本哈根', 'Helsinki': '赫爾辛基', 'Warsaw': '華沙',
    'Krakow': '克拉科夫', 'Prague': '布拉格', 'Budapest': '布達佩斯', 'Athens': '雅典',
    'Dublin': '都柏林', 'Bucharest': '布加勒斯特', 'Sofia': '索菲亞', 'Zagreb': '薩格勒布',
    'Belgrade': '貝爾格萊德', 'Sarajevo': '薩拉熱窩', 'Ljubljana': '盧布爾雅那', 'Bratislava': '布拉迪斯拉發',
    'Tallinn': '塔林', 'Riga': '里加', 'Vilnius': '維爾紐斯', 'Minsk': '明斯克',
    'Kiev': '基輔', 'Kharkiv': '哈爾科夫',
    // 北美主要城市
    'New York': '紐約', 'Los Angeles': '洛杉磯', 'Chicago': '芝加哥', 'Houston': '休斯頓',
    'Philadelphia': '費城', 'Phoenix': '菲尼克斯', 'San Antonio': '聖安東尼奧', 'San Diego': '聖地亞哥',
    'Dallas': '達拉斯', 'San Jose': '聖何塞', 'Austin': '奧斯汀', 'Jacksonville': '傑克遜維爾',
    'San Francisco': '舊金山', 'Columbus': '哥倫布', 'Charlotte': '夏洛特', 'Indianapolis': '印第安納波利斯',
    'Seattle': '西雅圖', 'Denver': '丹佛', 'Washington': '華盛頓', 'Boston': '波士頓',
    'Detroit': '底特律', 'Nashville': '納什維爾', 'Portland': '波特蘭', 'Oklahoma City': '俄克拉荷馬城',
    'Las Vegas': '拉斯維加斯', 'Louisville': '路易斯維爾', 'Baltimore': '巴爾的摩', 'Milwaukee': '密爾沃基',
    'Albuquerque': '阿爾伯克基', 'Tucson': '圖森', 'Fresno': '弗雷斯諾', 'Sacramento': '薩克拉門托',
    'Mesa': '梅薩', 'Kansas City': '堪薩斯城', 'Atlanta': '亞特蘭大', 'Miami': '邁阿密',
    'Tampa': '坦帕', 'Orlando': '奧蘭多', 'Cleveland': '克利夫蘭', 'Cincinnati': '辛辛那提',
    'Pittsburgh': '匹茲堡', 'St. Louis': '聖路易斯', 'Minneapolis': '明尼阿波利斯', 'New Orleans': '新奧爾良',
    'Honolulu': '檀香山', 'Anchorage': '安克雷奇', 'Salt Lake City': '鹽湖城', 'Toronto': '多倫多',
    'Vancouver': '溫哥華', 'Montreal': '蒙特利爾', 'Calgary': '卡爾加里', 'Ottawa': '渥太華',
    'Edmonton': '埃德蒙頓', 'Quebec': '魁北克', 'Winnipeg': '溫尼伯', 'Hamilton': '漢密爾頓',
    'Mexico City': '墨西哥城', 'Guadalajara': '瓜達拉哈拉', 'Monterrey': '蒙特雷',
    // 大洋洲
    'Sydney': '悉尼', 'Melbourne': '墨爾本', 'Brisbane': '布里斯班', 'Perth': '珀斯',
    'Adelaide': '阿德萊德', 'Canberra': '堪培拉', 'Auckland': '奧克蘭', 'Wellington': '惠靈頓',
    'Christchurch': '克賴斯特徹奇',
    // 南美洲
    'Sao Paulo': '聖保羅', 'Rio de Janeiro': '里約熱內盧', 'Brasilia': '巴西利亞', 'Buenos Aires': '布宜諾斯艾利斯',
    'Lima': '利馬', 'Bogota': '波哥大', 'Santiago': '聖地亞哥', 'Caracas': '加拉加斯',
    'Montevideo': '蒙得維的亞', 'Asuncion': '亞松森', 'La Paz': '拉巴斯', 'Quito': '基多',
    // 非洲
    'Cairo': '開羅', 'Alexandria': '亞歷山大', 'Lagos': '拉各斯', 'Kinshasa': '金沙薩',
    'Johannesburg': '約翰內斯堡', 'Cape Town': '開普敦', 'Durban': '德班', 'Nairobi': '內羅畢',
    'Addis Ababa': '亞的斯亞貝巴', 'Casablanca': '卡薩布蘭卡', 'Tunis': '突尼斯', 'Algiers': '阿爾及爾',
    'Tripoli': '的黎波里', 'Khartoum': '喀土穆', 'Accra': '阿克拉', 'Dakar': '達喀爾',
    'Luanda': '羅安達', 'Harare': '哈拉雷', 'Kampala': '坎帕拉', 'Dar es Salaam': '達累斯薩拉姆'
};

// 英文/拼音地區名到中文映射（常見省份/州）
const REGION_MAP_ZH = {
    // 中國省份（拼音）
    'Beijing': '北京', 'Shanghai': '上海', 'Tianjin': '天津', 'Chongqing': '重慶',
    'Hebei': '河北', 'Shanxi': '山西', 'Liaoning': '遼寧', 'Jilin': '吉林',
    'Heilongjiang': '黑龍江', 'Jiangsu': '江蘇', 'Zhejiang': '浙江', 'Anhui': '安徽',
    'Fujian': '福建', 'Jiangxi': '江西', 'Shandong': '山東', 'Henan': '河南',
    'Hubei': '湖北', 'Hunan': '湖南', 'Guangdong': '廣東', 'Hainan': '海南',
    'Sichuan': '四川', 'Guizhou': '貴州', 'Yunnan': '雲南', 'Shaanxi': '陜西',
    'Gansu': '甘肅', 'Qinghai': '青海', 'Taiwan': '台灣', 'Nei Mongol': '內蒙古',
    'Inner Mongolia': '內蒙古', 'Guangxi': '廣西', 'Tibet': '西藏', 'Xizang': '西藏',
    'Ningxia': '寧夏', 'Xinjiang': '新疆',
    // 港澳台
    'Hong Kong': '香港', 'Macao': '澳門', 'Taipei': '台北',
    // 新加坡
    'Singapore': '新加坡',
    // 日本都道府縣
    'Tokyo': '東京', 'Osaka': '大阪', 'Kyoto': '京都', 'Hokkaido': '北海道',
    'Aichi': '愛知', 'Akita': '秋田', 'Aomori': '青森', 'Chiba': '千葉',
    'Ehime': '愛媛', 'Fukui': '福井', 'Fukuoka': '福岡', 'Fukushima': '福島',
    'Gifu': '岐阜', 'Gunma': '群馬', 'Hiroshima': '廣島', 'Hyogo': '兵庫',
    'Ibaraki': '茨城', 'Ishikawa': '石川', 'Iwate': '巖手', 'Kagawa': '香川',
    'Kagoshima': '鹿兒島', 'Kanagawa': '神奈川', 'Kochi': '高知', 'Kumamoto': '熊本',
    'Mie': '三重', 'Miyagi': '宮城', 'Miyazaki': '宮崎', 'Nagano': '長野',
    'Nagasaki': '長崎', 'Nara': '奈良', 'Niigata': '新潟', 'Oita': '大分',
    'Okayama': '岡山', 'Okinawa': '沖繩', 'Saga': '佐賀', 'Saitama': '埼玉',
    'Shiga': '滋賀', 'Shimane': '島根', 'Shizuoka': '靜岡', 'Tochigi': '栃木',
    'Tokushima': '德島', 'Tottori': '鳥取', 'Toyama': '富山', 'Wakayama': '和歌山',
    'Yamagata': '山形', 'Yamaguchi': '山口', 'Yamanashi': '山梨',
    // 韓國道/市
    'Seoul': '首爾', 'Busan': '釜山', 'Incheon': '仁川', 'Daegu': '大邱',
    'Gwangju': '光州', 'Daejeon': '大田', 'Ulsan': '蔚山', 'Gyeonggi-do': '京畿道',
    'Gangwon-do': '江原道', 'Chungcheongbuk-do': '忠清北道', 'Chungcheongnam-do': '忠清南道',
    'Jeollabuk-do': '全羅北道', 'Jeollanam-do': '全羅南道', 'Gyeongsangbuk-do': '慶尚北道',
    'Gyeongsangnam-do': '慶尚南道', 'Jeju-do': '濟州道',
    // 美國州
    'Alabama': '亞拉巴馬', 'Alaska': '阿拉斯加', 'Arizona': '亞利桑那', 'Arkansas': '阿肯色',
    'California': '加利福尼亞', 'Colorado': '科羅拉多', 'Connecticut': '康涅狄格', 'Delaware': '特拉華',
    'Florida': '佛羅里達', 'Georgia': '佐治亞', 'Hawaii': '夏威夷', 'Idaho': '愛達荷',
    'Illinois': '伊利諾伊', 'Indiana': '印第安納', 'Iowa': '艾奧瓦', 'Kansas': '堪薩斯',
    'Kentucky': '肯塔基', 'Louisiana': '路易斯安那', 'Maine': '緬因', 'Maryland': '馬里蘭',
    'Massachusetts': '馬薩諸塞', 'Michigan': '密歇根', 'Minnesota': '明尼蘇達', 'Mississippi': '密西西比',
    'Missouri': '密蘇里', 'Montana': '蒙大拿', 'Nebraska': '內布拉斯加', 'Nevada': '內華達',
    'New Hampshire': '新罕布什爾', 'New Jersey': '新澤西', 'New Mexico': '新墨西哥', 'New York': '紐約州',
    'North Carolina': '北卡羅來納', 'North Dakota': '北達科他', 'Ohio': '俄亥俄', 'Oklahoma': '俄克拉荷馬',
    'Oregon': '俄勒岡', 'Pennsylvania': '賓夕法尼亞', 'Rhode Island': '羅得島', 'South Carolina': '南卡羅來納',
    'South Dakota': '南達科他', 'Tennessee': '田納西', 'Texas': '得克薩斯', 'Utah': '猶他',
    'Vermont': '佛蒙特', 'Virginia': '弗吉尼亞', 'Washington': '華盛頓州', 'West Virginia': '西弗吉尼亞',
    'Wisconsin': '威斯康星', 'Wyoming': '懷俄明', 'District of Columbia': '華盛頓哥倫比亞特區',
    // 加拿大省
    'Alberta': '艾伯塔', 'British Columbia': '不列顛哥倫比亞', 'Manitoba': '馬尼托巴',
    'New Brunswick': '新不倫瑞克', 'Newfoundland and Labrador': '紐芬蘭與拉布拉多', 'Nova Scotia': '新斯科舍',
    'Ontario': '安大略', 'Prince Edward Island': '愛德華王子島', 'Quebec': '魁北克', 'Saskatchewan': '薩斯喀徹溫',
    // 澳大利亞州
    'New South Wales': '新南威爾士', 'Victoria': '維多利亞', 'Queensland': '昆士蘭',
    'Western Australia': '西澳大利亞', 'South Australia': '南澳大利亞', 'Tasmania': '塔斯馬尼亞',
    'Northern Territory': '北領地', 'Australian Capital Territory': '澳大利亞首都領地',
    // 英國
    'England': '英格蘭', 'Scotland': '蘇格蘭', 'Wales': '威爾士', 'Northern Ireland': '北愛爾蘭',
    // 印度邦
    'Maharashtra': '馬哈拉施特拉邦', 'Karnataka': '卡納塔克邦', 'Tamil Nadu': '泰米爾納德邦',
    'Uttar Pradesh': '北方邦', 'Gujarat': '古吉拉特邦', 'Rajasthan': '拉賈斯坦邦',
    'West Bengal': '西孟加拉邦', 'Kerala': '喀拉拉邦', 'Punjab': '旁遮普邦', 'Haryana': '哈里亞納邦',
    // 德國州
    'Bavaria': '巴伐利亞', 'North Rhine-Westphalia': '北萊茵-威斯特法倫', 'Baden-Wurttemberg': '巴登-符騰堡',
    'Lower Saxony': '下薩克森', 'Hesse': '黑森', 'Saxony': '薩克森', 'Rhineland-Palatinate': '萊茵蘭-普法爾茨',
    // 法國大區
    'Ile-de-France': '法蘭西島', 'Provence-Alpes-Cote d\'Azur': '普羅旺斯-阿爾卑斯-蔚藍海岸',
    'Auvergne-Rhone-Alpes': '奧弗涅-羅訥-阿爾卑斯', 'Occitanie': '奧克西塔尼',
    // 巴西州
    'Sao Paulo': '聖保羅州', 'Rio de Janeiro': '里約熱內盧州', 'Minas Gerais': '米納斯吉拉斯',
    'Bahia': '巴伊亞', 'Parana': '巴拉那', 'Rio Grande do Sul': '南里奧格蘭德',
    // 其他
    'Dubai': '迪拜', 'Abu Dhabi': '阿布紮比', 'Riyadh Region': '利雅得地區',
    'Mecca Region': '麥加地區', 'Eastern Province': '東部省'
};

// 運營商英文到中文映射（常見ISP）
const ISP_MAP_ZH = {
    'China Mobile': '中國移動',
    'China Mobile Communications Group Co., Ltd.': '中國移動通信集團',
    'China Telecom': '中國電信',
    'China Unicom': '中國聯通',
    'China United Network Communications': '中國聯通',
    'China Tietong': '中國鐵通',
    'China Broadcast Network': '中國廣電',
    'CERNET': '中國教育和科研計算機網',
    'China Education and Research Network': '中國教育和科研計算機網',
    'Great Wall Broadband': '長城寬帶',
    'Dr.Peng': '鵬博士',
    'Alibaba': '阿里巴巴',
    'Tencent': '騰訊',
    'Huawei': '華為',
    'Baidu': '百度',
    'JD.com': '京東',
    'UCloud': '優刻得',
    'QingCloud': '青雲',
    'ChinaCache': '藍汛',
    'Wangsu': '網宿科技',
    'BaishanCloud': '白山雲',
    'AWS': '亞馬遜雲',
    'Amazon': '亞馬遜',
    'Google': '谷歌',
    'Microsoft': '微軟',
    'Cloudflare': 'Cloudflare',
    'Oracle': '甲骨文',
    'DigitalOcean': 'DigitalOcean',
    'Linode': 'Linode',
    'Vultr': 'Vultr',
    'Hetzner': 'Hetzner',
    'OVH': 'OVH',
    'Tencent Cloud': '騰訊雲',
    'Alibaba Cloud': '阿里雲',
    'Huawei Cloud': '華為雲',
    'Baidu Cloud': '百度雲',
    'JD Cloud': '京東雲',
    'Ucloud': '優刻得',
    'China Telecom Guangdong': '中國電信廣東',
    'China Telecom Beijing': '中國電信北京',
    'China Telecom Shanghai': '中國電信上海',
    'China Unicom Beijing': '中國聯通北京',
    'China Mobile Guangdong': '中國移動廣東',
    'Chunghwa Telecom': '中華電信',
    'HKT': '香港電訊',
    'HKBN': '香港寬頻',
    'PCCW': '電訊盈科',
    'NTT': '日本電信電話',
    'KDDI': 'KDDI',
    'SoftBank': '軟銀',
    'SK Broadband': 'SK寬帶',
    'KT': '韓國電信',
    'LG Uplus': 'LG U+',
    'Rostelecom': '俄羅斯電信',
    'Beeline': 'Beeline',
    'MTS': 'MTS',
    'MegaFon': 'MegaFon',
    'Comcast': '康卡斯特',
    'AT&T': 'AT&T',
    'Verizon': '威瑞森',
    'Spectrum': 'Spectrum',
    'T-Mobile': 'T-Mobile',
    'Sprint': 'Sprint',
    'Charter': 'Charter',
    'Cox': 'Cox',
    'CenturyLink': 'CenturyLink',
    'Frontier': 'Frontier',
    'BT': '英國電信',
    'Virgin Media': '維珍傳媒',
    'TalkTalk': 'TalkTalk',
    'Sky Broadband': 'Sky寬帶',
    'Orange': 'Orange',
    'Free': 'Free',
    'SFR': 'SFR',
    'Bouygues Telecom': '布依格電信',
    'Deutsche Telekom': '德國電信',
    'Vodafone': '沃達豐',
    'O2': 'O2',
    'Telefonica': '西班牙電信',
    'TIM': '意大利電信',
    'Fastweb': 'Fastweb',
    'Wind Tre': 'Wind Tre',
    'Telstra': '澳洲電信',
    'Optus': 'Optus',
    'TPG': 'TPG',
    'SingTel': '新加坡電信',
    'StarHub': '星和',
    'M1': 'M1',
    'Reliance Jio': '信實Jio',
    'Airtel': 'Airtel',
    'BSNL': 'BSNL',
    'Viettel': 'Viettel',
    'FPT Telecom': 'FPT電信',
    'True Internet': 'True互聯網',
    'AIS': 'AIS',
    'DTAC': 'DTAC',
    'Telkom Indonesia': '印尼電信',
    'Indosat': 'Indosat',
    'XL Axiata': 'XL Axiata',
    'Maxis': 'Maxis',
    'Celcom': 'Celcom',
    'Digi': 'Digi',
    'U Mobile': 'U Mobile',
    'PLDT': 'PLDT',
    'Globe': 'Globe',
    'Smart': 'Smart',
    'TM': 'TM',
    'Axiata': 'Axiata',
    'Etisalat': 'Etisalat',
    'du': 'du',
    'STC': 'STC',
    'Zain': 'Zain',
    'Mobily': 'Mobily',
    'Turk Telekom': '土耳其電信',
    'Turkcell': 'Turkcell',
    'Vodafone Turkey': '沃達豐土耳其',
    'Bezeq': 'Bezeq',
    'Hot': 'Hot',
    'Partner': 'Partner',
    'Telecom Egypt': '埃及電信',
    'Vodafone Egypt': '沃達豐埃及',
    'Orange Egypt': 'Orange埃及',
    'Etisalat Egypt': 'Etisalat埃及',
    'Safaricom': 'Safaricom',
    'MTN': 'MTN',
    'Airtel Africa': 'Airtel非洲',
    'Telkom': 'Telkom',
    'Cell C': 'Cell C',
    'Rain': 'Rain',
    'Claro': 'Claro',
    'Vivo': 'Vivo',
    'Oi': 'Oi',
    'TIM Brazil': 'TIM巴西',
    'Movistar': 'Movistar',
    'Personal': 'Personal',
    'Claro Argentina': 'Claro阿根廷',
    'Entel': 'Entel',
    'Movistar Chile': 'Movistar智利',
    'Tigo': 'Tigo',
    'Movistar Colombia': 'Movistar哥倫比亞',
    'Claro Colombia': 'Claro哥倫比亞',
    'Telcel': 'Telcel',
    'AT&T Mexico': 'AT&T墨西哥',
    'Movistar Mexico': 'Movistar墨西哥'
};

// 時區英文到中文映射（常見時區）
const TIMEZONE_MAP_ZH = {
    // 中國及周邊
    'Asia/Shanghai': '亞洲/上海（中國標準時間）',
    'Asia/Beijing': '亞洲/北京（中國標準時間）',
    'Asia/Chongqing': '亞洲/重慶（中國標準時間）',
    'Asia/Urumqi': '亞洲/烏魯木齊（中國標準時間）',
    'Asia/Hong_Kong': '亞洲/香港（香港時間）',
    'Asia/Macau': '亞洲/澳門（澳門時間）',
    'Asia/Taipei': '亞洲/台北（台灣時間）',
    // 東亞
    'Asia/Tokyo': '亞洲/東京（日本標準時間）',
    'Asia/Osaka': '亞洲/大阪（日本標準時間）',
    'Asia/Seoul': '亞洲/首爾（韓國標準時間）',
    'Asia/Pyongyang': '亞洲/平壤（朝鮮時間）',
    // 東南亞
    'Asia/Singapore': '亞洲/新加坡（新加坡時間）',
    'Asia/Kuala_Lumpur': '亞洲/吉隆坡（馬來西亞時間）',
    'Asia/Bangkok': '亞洲/曼谷（中南半島時間）',
    'Asia/Ho_Chi_Minh': '亞洲/胡志明市（中南半島時間）',
    'Asia/Jakarta': '亞洲/雅加達（印尼西部時間）',
    'Asia/Makassar': '亞洲/望加錫（印尼中部時間）',
    'Asia/Jayapura': '亞洲/查亞普拉（印尼東部時間）',
    'Asia/Manila': '亞洲/馬尼拉（菲律賓時間）',
    'Asia/Hanoi': '亞洲/河內（中南半島時間）',
    'Asia/Yangon': '亞洲/仰光（緬甸時間）',
    'Asia/Phnom_Penh': '亞洲/金邊（中南半島時間）',
    'Asia/Vientiane': '亞洲/萬象（中南半島時間）',
    'Asia/Brunei': '亞洲/文萊（文萊時間）',
    'Asia/Dili': '亞洲/帝力（東帝汶時間）',
    // 南亞
    'Asia/Kolkata': '亞洲/加爾各答（印度標準時間）',
    'Asia/Delhi': '亞洲/德里（印度標準時間）',
    'Asia/Mumbai': '亞洲/孟買（印度標準時間）',
    'Asia/Karachi': '亞洲/卡拉奇（巴基斯坦時間）',
    'Asia/Dhaka': '亞洲/達卡（孟加拉國時間）',
    'Asia/Colombo': '亞洲/科倫坡（斯里蘭卡時間）',
    'Asia/Kathmandu': '亞洲/加德滿都（尼泊爾時間）',
    'Asia/Thimphu': '亞洲/廷布（不丹時間）',
    'Asia/Male': '亞洲/馬累（馬爾代夫時間）',
    // 中亞
    'Asia/Tashkent': '亞洲/塔什幹（烏茲別克斯坦時間）',
    'Asia/Almaty': '亞洲/阿拉木圖（哈薩克斯坦時間）',
    'Asia/Aqtau': '亞洲/阿克套（哈薩克斯坦時間）',
    'Asia/Aqtobe': '亞洲/阿克托別（哈薩克斯坦時間）',
    'Asia/Atyrau': '亞洲/阿特勞（哈薩克斯坦時間）',
    'Asia/Oral': '亞洲/烏拉爾（哈薩克斯坦時間）',
    'Asia/Qyzylorda': '亞洲/克孜勒奧爾達（哈薩克斯坦時間）',
    'Asia/Qostanay': '亞洲/庫斯塔奈（哈薩克斯坦時間）',
    'Asia/Dushanbe': '亞洲/杜尚別（塔吉克斯坦時間）',
    'Asia/Ashgabat': '亞洲/阿什哈巴德（土庫曼斯坦時間）',
    'Asia/Bishkek': '亞洲/比什凱克（吉爾吉斯斯坦時間）',
    // 西亞/中東
    'Asia/Dubai': '亞洲/迪拜（海灣標準時間）',
    'Asia/Abu_Dhabi': '亞洲/阿布紮比（海灣標準時間）',
    'Asia/Riyadh': '亞洲/利雅得（阿拉伯標準時間）',
    'Asia/Tehran': '亞洲/德黑蘭（伊朗時間）',
    'Asia/Baghdad': '亞洲/巴格達（阿拉伯標準時間）',
    'Asia/Kuwait': '亞洲/科威特（阿拉伯標準時間）',
    'Asia/Qatar': '亞洲/卡塔爾（海灣標準時間）',
    'Asia/Bahrain': '亞洲/巴林（海灣標準時間）',
    'Asia/Muscat': '亞洲/馬斯喀特（海灣標準時間）',
    'Asia/Jerusalem': '亞洲/耶路撒冷（以色列時間）',
    'Asia/Amman': '亞洲/安曼（東歐時間）',
    'Asia/Damascus': '亞洲/大馬士革（東歐時間）',
    'Asia/Beirut': '亞洲/貝魯特（東歐時間）',
    'Asia/Istanbul': '亞洲/伊斯坦布爾（土耳其時間）',
    'Asia/Ankara': '亞洲/安卡拉（土耳其時間）',
    'Asia/Tbilisi': '亞洲/第比利斯（格魯吉亞時間）',
    'Asia/Yerevan': '亞洲/埃里溫（亞美尼亞時間）',
    'Asia/Baku': '亞洲/巴庫（阿塞拜疆時間）',
    'Asia/Kabul': '亞洲/喀布爾（阿富汗時間）',
    // 歐洲
    'Europe/London': '歐洲/倫敦（格林尼治時間）',
    'Europe/Paris': '歐洲/巴黎（中歐時間）',
    'Europe/Berlin': '歐洲/柏林（中歐時間）',
    'Europe/Madrid': '歐洲/馬德里（中歐時間）',
    'Europe/Rome': '歐洲/羅馬（中歐時間）',
    'Europe/Amsterdam': '歐洲/阿姆斯特丹（中歐時間）',
    'Europe/Brussels': '歐洲/布魯塞爾（中歐時間）',
    'Europe/Vienna': '歐洲/維也納（中歐時間）',
    'Europe/Zurich': '歐洲/蘇黎世（中歐時間）',
    'Europe/Stockholm': '歐洲/斯德哥爾摩（中歐時間）',
    'Europe/Oslo': '歐洲/奧斯陸（中歐時間）',
    'Europe/Copenhagen': '歐洲/哥本哈根（中歐時間）',
    'Europe/Helsinki': '歐洲/赫爾辛基（東歐時間）',
    'Europe/Moscow': '歐洲/莫斯科（莫斯科時間）',
    'Europe/St_Petersburg': '歐洲/聖彼得堡（莫斯科時間）',
    'Europe/Kiev': '歐洲/基輔（東歐時間）',
    'Europe/Kyiv': '歐洲/基輔（東歐時間）',
    'Europe/Warsaw': '歐洲/華沙（中歐時間）',
    'Europe/Prague': '歐洲/布拉格（中歐時間）',
    'Europe/Budapest': '歐洲/布達佩斯（中歐時間）',
    'Europe/Bucharest': '歐洲/布加勒斯特（東歐時間）',
    'Europe/Sofia': '歐洲/索非亞（東歐時間）',
    'Europe/Athens': '歐洲/雅典（東歐時間）',
    'Europe/Dublin': '歐洲/都柏林（格林尼治時間）',
    'Europe/Lisbon': '歐洲/里斯本（西歐時間）',
    'Europe/Minsk': '歐洲/明斯克（莫斯科時間）',
    'Europe/Riga': '歐洲/里加（東歐時間）',
    'Europe/Tallinn': '歐洲/塔林（東歐時間）',
    'Europe/Vilnius': '歐洲/維爾紐斯（東歐時間）',
    'Europe/Istanbul': '歐洲/伊斯坦布爾（土耳其時間）',
    'Europe/Belgrade': '歐洲/貝爾格萊德（中歐時間）',
    'Europe/Zagreb': '歐洲/薩格勒布（中歐時間）',
    'Europe/Sarajevo': '歐洲/薩拉熱窩（中歐時間）',
    'Europe/Skopje': '歐洲/斯科普里（中歐時間）',
    'Europe/Tirane': '歐洲/地拉那（中歐時間）',
    'Europe/Podgorica': '歐洲/波德戈里察（中歐時間）',
    'Europe/Ljubljana': '歐洲/盧布爾雅那（中歐時間）',
    'Europe/Bratislava': '歐洲/布拉迪斯拉發（中歐時間）',
    'Europe/Chisinau': '歐洲/基希訥烏（東歐時間）',
    'Europe/Tiraspol': '歐洲/蒂拉斯波爾（東歐時間）',
    'Europe/Kaliningrad': '歐洲/加里寧格勒（加里寧格勒時間）',
    'Europe/Samara': '歐洲/薩馬拉（薩馬拉時間）',
    'Europe/Volgograd': '歐洲/伏爾加格勒（莫斯科時間）',
    'Europe/Yekaterinburg': '歐洲/葉卡捷琳堡（葉卡捷琳堡時間）',
    'Europe/Omsk': '歐洲/鄂木斯克（鄂木斯克時間）',
    'Europe/Novosibirsk': '歐洲/新西伯利亞（新西伯利亞時間）',
    'Europe/Krasnoyarsk': '歐洲/克拉斯諾亞爾斯克（克拉斯諾亞爾斯克時間）',
    'Europe/Irkutsk': '歐洲/伊爾庫茨克（伊爾庫茨克時間）',
    'Europe/Yakutsk': '歐洲/雅庫茨克（雅庫茨克時間）',
    'Europe/Vladivostok': '歐洲/符拉迪沃斯托克（海參崴時間）',
    'Europe/Magadan': '歐洲/馬加丹（馬加丹時間）',
    'Europe/Sakhalin': '歐洲/庫頁島（庫頁島時間）',
    'Europe/Kamchatka': '歐洲/堪察加（堪察加時間）',
    'Europe/Andorra': '歐洲/安道爾（中歐時間）',
    'Europe/Monaco': '歐洲/摩納哥（中歐時間）',
    'Europe/Vatican': '歐洲/梵蒂岡（中歐時間）',
    'Europe/San_Marino': '歐洲/聖馬力諾（中歐時間）',
    'Europe/Luxembourg': '歐洲/盧森堡（中歐時間）',
    'Europe/Malta': '歐洲/馬耳他（中歐時間）',
    'Europe/Nicosia': '歐洲/尼科西亞（東歐時間）',
    'Europe/Gibraltar': '歐洲/直布羅陀（中歐時間）',
    // 美洲
    'America/New_York': '美洲/紐約（北美東部時間）',
    'America/Los_Angeles': '美洲/洛杉磯（北美太平洋時間）',
    'America/Chicago': '美洲/芝加哥（北美中部時間）',
    'America/Denver': '美洲/丹佛（北美山地時間）',
    'America/Phoenix': '美洲/鳳凰城（北美山地時間）',
    'America/Anchorage': '美洲/安克雷奇（阿拉斯加時間）',
    'America/Honolulu': '美洲/火奴魯魯（夏威夷時間）',
    'America/Toronto': '美洲/多倫多（北美東部時間）',
    'America/Vancouver': '美洲/溫哥華（北美太平洋時間）',
    'America/Montreal': '美洲/蒙特利爾（北美東部時間）',
    'America/Edmonton': '美洲/埃德蒙頓（北美山地時間）',
    'America/Winnipeg': '美洲/溫尼伯（北美中部時間）',
    'America/Halifax': '美洲/哈利法克斯（大西洋時間）',
    'America/St_Johns': '美洲/聖約翰斯（紐芬蘭時間）',
    'America/Mexico_City': '美洲/墨西哥城（墨西哥中部時間）',
    'America/Guadalajara': '美洲/瓜達拉哈拉（墨西哥中部時間）',
    'America/Monterrey': '美洲/蒙特雷（墨西哥中部時間）',
    'America/Tijuana': '美洲/蒂華納（北美太平洋時間）',
    'America/Cancun': '美洲/坎昆（北美東部時間）',
    'America/Bogota': '美洲/波哥大（哥倫比亞時間）',
    'America/Lima': '美洲/利馬（秘魯時間）',
    'America/Quito': '美洲/基多（厄瓜多爾時間）',
    'America/Caracas': '美洲/加拉加斯（委內瑞拉時間）',
    'America/La_Paz': '美洲/拉巴斯（玻利維亞時間）',
    'America/Santiago': '美洲/聖地亞哥（智利時間）',
    'America/Asuncion': '美洲/亞松森（巴拉圭時間）',
    'America/Montevideo': '美洲/蒙得維的亞（烏拉圭時間）',
    'America/Buenos_Aires': '美洲/布宜諾斯艾利斯（阿根廷時間）',
    'America/Cordoba': '美洲/科爾多瓦（阿根廷時間）',
    'America/Rosario': '美洲/羅薩里奧（阿根廷時間）',
    'America/Sao_Paulo': '美洲/聖保羅（巴西利亞時間）',
    'America/Rio_de_Janeiro': '美洲/里約熱內盧（巴西利亞時間）',
    'America/Recife': '美洲/累西腓（巴西利亞時間）',
    'America/Fortaleza': '美洲/福塔雷薩（巴西利亞時間）',
    'America/Salvador': '美洲/薩爾瓦多（巴西利亞時間）',
    'America/Bahia': '美洲/巴伊亞（巴西利亞時間）',
    'America/Campo_Grande': '美洲/大坎普（亞馬遜時間）',
    'America/Cuiaba': '美洲/庫亞巴（亞馬遜時間）',
    'America/Manaus': '美洲/馬瑙斯（亞馬遜時間）',
    'America/Belem': '美洲/貝倫（巴西利亞時間）',
    'America/Porto_Velho': '美洲/韋柳港（亞馬遜時間）',
    'America/Boa_Vista': '美洲/博阿維斯塔（亞馬遜時間）',
    'America/Araguaina': '美洲/阿拉瓜伊納（巴西利亞時間）',
    'America/Maceio': '美洲/馬塞約（巴西利亞時間）',
    'America/Noronha': '美洲/費爾南多-迪諾羅尼亞（費爾南多時間）',
    'America/Havana': '美洲/哈瓦那（古巴時間）',
    'America/Jamaica': '美洲/牙買加（北美東部時間）',
    'America/Port_of_Spain': '美洲/西班牙港（大西洋時間）',
    'America/Barbados': '美洲/巴巴多斯（大西洋時間）',
    'America/Puerto_Rico': '美洲/波多黎各（大西洋時間）',
    'America/Santo_Domingo': '美洲/聖多明各（大西洋時間）',
    'America/Guatemala': '美洲/危地馬拉（北美中部時間）',
    'America/Tegucigalpa': '美洲/特古西加爾巴（北美中部時間）',
    'America/Managua': '美洲/馬那瓜（北美中部時間）',
    'America/San_Jose': '美洲/聖何塞（北美中部時間）',
    'America/Panama': '美洲/巴拿馬（北美東部時間）',
    // 大洋洲
    'Australia/Sydney': '大洋洲/悉尼（澳大利亞東部時間）',
    'Australia/Melbourne': '大洋洲/墨爾本（澳大利亞東部時間）',
    'Australia/Brisbane': '大洋洲/布里斯班（澳大利亞東部時間）',
    'Australia/Perth': '大洋洲/珀斯（澳大利亞西部時間）',
    'Australia/Adelaide': '大洋洲/阿德萊德（澳大利亞中部時間）',
    'Australia/Darwin': '大洋洲/達爾文（澳大利亞中部時間）',
    'Australia/Hobart': '大洋洲/霍巴特（澳大利亞東部時間）',
    'Australia/Canberra': '大洋洲/堪培拉（澳大利亞東部時間）',
    'Australia/Lord_Howe': '大洋洲/豪勳爵島（豪勳爵島時間）',
    'Pacific/Auckland': '太平洋/奧克蘭（新西蘭時間）',
    'Pacific/Wellington': '太平洋/惠靈頓（新西蘭時間）',
    'Pacific/Chatham': '太平洋/查塔姆（查塔姆時間）',
    'Pacific/Fiji': '太平洋/斐濟（斐濟時間）',
    'Pacific/Guam': '太平洋/關島（查莫羅時間）',
    'Pacific/Honolulu': '太平洋/火奴魯魯（夏威夷時間）',
    'Pacific/Midway': '太平洋/中途島（中途島時間）',
    'Pacific/Noumea': '太平洋/努美阿（新喀里多尼亞時間）',
    'Pacific/Port_Moresby': '太平洋/莫爾茲比港（巴布亞新幾內亞時間）',
    'Pacific/Tahiti': '太平洋/塔希提（塔希提時間）',
    'Pacific/Samoa': '太平洋/薩摩亞（薩摩亞時間）',
    'Pacific/Tongatapu': '太平洋/湯加塔布（湯加時間）',
    // 非洲
    'Africa/Cairo': '非洲/開羅（東歐時間）',
    'Africa/Johannesburg': '非洲/約翰內斯堡（南非標準時間）',
    'Africa/Lagos': '非洲/拉各斯（西非時間）',
    'Africa/Nairobi': '非洲/內羅畢（東非時間）',
    'Africa/Casablanca': '非洲/卡薩布蘭卡（西歐時間）',
    'Africa/Tunis': '非洲/突尼斯（中歐時間）',
    'Africa/Algiers': '非洲/阿爾及爾（中歐時間）',
    'Africa/Tripoli': '非洲/的黎波里（東歐時間）',
    'Africa/Khartoum': '非洲/喀土穆（中非時間）',
    'Africa/Addis_Ababa': '非洲/亞的斯亞貝巴（東非時間）',
    'Africa/Dar_es_Salaam': '非洲/達累斯薩拉姆（東非時間）',
    'Africa/Kampala': '非洲/坎帕拉（東非時間）',
    'Africa/Kigali': '非洲/基加利（東非時間）',
    'Africa/Bujumbura': '非洲/布瓊布拉（東非時間）',
    'Africa/Djibouti': '非洲/吉布提（東非時間）',
    'Africa/Mogadishu': '非洲/摩加迪沙（東非時間）',
    'Africa/Accra': '非洲/阿克拉（格林尼治時間）',
    'Africa/Dakar': '非洲/達喀爾（格林尼治時間）',
    'Africa/Abidjan': '非洲/阿比讓（格林尼治時間）',
    'Africa/Lome': '非洲/洛美（格林尼治時間）',
    'Africa/Nouakchott': '非洲/努瓦克肖特（格林尼治時間）',
    'Africa/Bamako': '非洲/巴馬科（格林尼治時間）',
    'Africa/Ouagadougou': '非洲/瓦加杜古（格林尼治時間）',
    'Africa/Conakry': '非洲/科納克里（格林尼治時間）',
    'Africa/Freetown': '非洲/弗里敦（格林尼治時間）',
    'Africa/Monrovia': '非洲/蒙羅維亞（格林尼治時間）',
    'Africa/Banjul': '非洲/班珠爾（格林尼治時間）',
    'Africa/Bissau': '非洲/比紹（格林尼治時間）',
    'Africa/Luanda': '非洲/羅安達（西非時間）',
    'Africa/Kinshasa': '非洲/金沙薩（西非時間）',
    'Africa/Brazzaville': '非洲/布拉柴維爾（西非時間）',
    'Africa/Libreville': '非洲/利伯維爾（西非時間）',
    'Africa/Malabo': '非洲/馬拉博（西非時間）',
    'Africa/Niamey': '非洲/尼亞美（西非時間）',
    'Africa/Lagos': '非洲/拉各斯（西非時間）',
    'Africa/Porto-Novo': '非洲/波多諾伏（西非時間）',
    'Africa/Lome': '非洲/洛美（西非時間）',
    'Africa/Windhoek': '非洲/溫得和克（中非時間）',
    'Africa/Gaborone': '非洲/哈博羅內（中非時間）',
    'Africa/Harare': '非洲/哈拉雷（中非時間）',
    'Africa/Lusaka': '非洲/盧薩卡（中非時間）',
    'Africa/Maputo': '非洲/馬普托（中非時間）',
    'Africa/Blantyre': '非洲/布蘭太爾（中非時間）',
    'Africa/Kigali': '非洲/基加利（中非時間）',
    // 格林尼治/UTC
    'UTC': '協調世界時（UTC）',
    'Etc/UTC': '協調世界時（UTC）',
    'Etc/GMT': '格林尼治時間（GMT）',
    'GMT': '格林尼治時間（GMT）',
    'Greenwich': '格林尼治時間（GMT）',
    // 其他
    'Atlantic/Reykjavik': '大西洋/雷克雅未克（格林尼治時間）',
    'Atlantic/Azores': '大西洋/亞速爾（亞速爾時間）',
    'Atlantic/Cape_Verde': '大西洋/佛得角（佛得角時間）',
    'Atlantic/South_Georgia': '大西洋/南喬治亞（南喬治亞時間）',
    'Indian/Maldives': '印度洋/馬爾代夫（馬爾代夫時間）',
    'Indian/Mauritius': '印度洋/毛里求斯（毛里求斯時間）',
    'Indian/Reunion': '印度洋/留尼汪（留尼汪時間）',
    'Indian/Mahe': '印度洋/馬埃（塞舌爾時間）'
};

// 多語言翻譯配置
const TRANSLATIONS = {
    zh: {
        title: 'IP歸屬地查詢工具 - 快速查詢IP地址歸屬地信息',
        desc: '免費在線IP歸屬地查詢工具，支持查詢任意IP地址的國家、地區、城市、運營商等詳細信息。',
        h1: 'IP歸屬地查詢',
        subtitle: '查詢IP地址的詳細歸屬地信息',
        placeholder: '請輸入IP地址（如：8.8.8.8）',
        searchBtn: '查詢',
        myIPBtn: '查詢我的IP',
        loading: '正在查詢IP信息...',
        inputError: '請輸入IP地址',
        formatError: '請輸入有效的IP地址格式（如：8.8.8.8）',
        networkError: '網絡請求失敗或IP地址無效',
        bogonError: '查詢失敗，請檢查IP地址是否正確',
        queryFailed: '查詢失敗',
        privateIP: '內網IP',
        publicIP: '公網IP',
        country: '國家/地區',
        region: '省份/州',
        city: '城市',
        zip: '郵編',
        isp: '運營商',
        org: '組織',
        location: '經緯度',
        timezone: '時區',
        mapTitle: '地理位置',
        mapView: '在地圖上查看：',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: '暫無地理位置信息',
        instructionsTitle: '使用說明',
        instructions: [
            '在輸入框中輸入要查詢的IP地址（支持IPv4格式）',
            '點擊"查詢"按鈕獲取該IP的歸屬地信息',
            '點擊"查詢我的IP"按鈕可以快速查詢您當前的IP地址信息',
            '查詢結果包括：國家、地區、城市、運營商、經緯度、時區等詳細信息',
            '支持查看IP地理位置的地圖鏈接'
        ],
        apiNotice: '本工具使用免費API服務，查詢結果僅供參考。',
        dataSource: '數據來源',
        footer: 'IP歸屬地查詢工具',
        about: '關於我們',
        privacy: '隱私政策',
        home: '首頁',
        aboutPage: '關於',
        cookieTitle: 'Cookie 使用聲明',
        cookieText: '我們使用 Cookie 和類似技術來改善您的瀏覽體驗、分析網站流量並投放個性化廣告。繼續使用本網站即表示您同意我們的',
        cookiePrivacy: '隱私政策',
        cookieAccept: '同意',
        adLabel: 'Advertisement'
    },
    en: {
        title: 'IP Lookup Tool - Check IP Address Location Instantly',
        desc: 'Free online IP geolocation lookup tool. Find country, region, city, ISP and more for any IP address.',
        h1: 'IP Geolocation Lookup',
        subtitle: 'Check detailed location information for any IP address',
        placeholder: 'Enter IP address (e.g. 8.8.8.8)',
        searchBtn: 'Lookup',
        myIPBtn: 'My IP Address',
        loading: 'Looking up IP information...',
        inputError: 'Please enter an IP address',
        formatError: 'Please enter a valid IPv4 address (e.g. 8.8.8.8)',
        networkError: 'Network request failed or invalid IP address',
        bogonError: 'Lookup failed, please check the IP address',
        queryFailed: 'Lookup failed',
        privateIP: 'Private IP',
        publicIP: 'Public IP',
        country: 'Country / Region',
        region: 'Region / State',
        city: 'City',
        zip: 'Postal Code',
        isp: 'ISP',
        org: 'Organization',
        location: 'Coordinates',
        timezone: 'Timezone',
        mapTitle: 'Geolocation',
        mapView: 'View on map:',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: 'No location data available',
        instructionsTitle: 'How to Use',
        instructions: [
            'Enter an IP address in the input field (IPv4 format supported)',
            'Click the "Lookup" button to get geolocation details',
            'Click "My IP Address" to quickly check your current public IP',
            'Results include: country, region, city, ISP, coordinates, timezone and more',
            'Map links to Google Maps and OpenStreetMap are provided'
        ],
        apiNotice: 'This tool uses a free API service. Results are for reference only.',
        dataSource: 'Data source',
        footer: 'IP Geolocation Lookup Tool',
        about: 'About Us',
        privacy: 'Privacy Policy',
        home: 'Home',
        aboutPage: 'About',
        cookieTitle: 'Cookie Consent',
        cookieText: 'We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and serve personalized advertisements. By continuing to use this site, you agree to our',
        cookiePrivacy: 'Privacy Policy',
        cookieAccept: 'Accept',
        adLabel: 'Advertisement'
    },
    ja: {
        title: 'IPアドレス照會ツール - IPの位置情報を即座に確認',
        desc: '無料のオンラインIPジオロケーション照會ツール。任意のIPアドレスの國、地域、都市、ISPなどを検索できます。',
        h1: 'IP位置情報照會',
        subtitle: 'IPアドレスの詳細な位置情報を確認',
        placeholder: 'IPアドレスを入力（例: 8.8.8.8）',
        searchBtn: '照會',
        myIPBtn: '自分のIP',
        loading: 'IP情報を照會中...',
        inputError: 'IPアドレスを入力してください',
        formatError: '有効なIPv4アドレスを入力してください（例: 8.8.8.8）',
        networkError: 'ネットワーク要求が失敗しました、または無効なIPアドレスです',
        bogonError: '照會に失敗しました。IPアドレスを確認してください',
        queryFailed: '照會に失敗しました',
        privateIP: 'プライベートIP',
        publicIP: 'パブリックIP',
        country: '國 / 地域',
        region: '地域 / 州',
        city: '都市',
        zip: '郵便番號',
        isp: 'ISP',
        org: '組織',
        location: '座標',
        timezone: 'タイムゾーン',
        mapTitle: '位置情報',
        mapView: '地図で見る:',
        googleMaps: 'Google マップ',
        openStreetMap: 'OpenStreetMap',
        noLocation: '位置情報がありません',
        instructionsTitle: '使い方',
        instructions: [
            '検索フィールドにIPアドレスを入力してください（IPv4形式対応）',
            '「照會」ボタンをクリックして位置情報を取得',
            '「自分のIP」をクリックして現在のパブリックIPを確認',
            '結果には: 國、地域、都市、ISP、座標、タイムゾーンなどが含まれます',
            'GoogleマップとOpenStreetMapへのリンクを提供'
        ],
        apiNotice: 'このツールは無料APIサービスを使用しています。結果は參考用です。',
        dataSource: 'データ提供元',
        footer: 'IP位置情報照會ツール',
        about: '概要',
        privacy: 'プライバシーポリシー',
        home: 'ホーム',
        aboutPage: '概要',
        cookieTitle: 'Cookie の同意',
        cookieText: '當社は、閲覧體験の向上、サイトトラフィックの分析、パーソナライズされた広告の配信のために、Cookieおよび類似の技術を使用しています。このサイトを引き続き使用することにより、當社の',
        cookiePrivacy: 'プライバシーポリシー',
        cookieAccept: '同意する',
        adLabel: '広告'
    },
    ko: {
        title: 'IP 주소 조회 도구 - IP 위치 정보를 즉시 확인',
        desc: '무료 온라인 IP 지리 위치 조회 도구. 모든 IP 주소의 국가, 지역, 도시, ISP 등을 찾아보세요.',
        h1: 'IP 지리 위치 조회',
        subtitle: '모든 IP 주소의 상세 위치 정보 확인',
        placeholder: 'IP 주소 입력 (예: 8.8.8.8)',
        searchBtn: '조회',
        myIPBtn: '내 IP 주소',
        loading: 'IP 정보 조회 중...',
        inputError: 'IP 주소를 입력하세요',
        formatError: '유효한 IPv4 주소를 입력하세요 (예: 8.8.8.8)',
        networkError: '네트워크 요청 실패 또는 잘못된 IP 주소',
        bogonError: '조회에 실패했습니다. IP 주소를 확인하세요',
        queryFailed: '조회 실패',
        privateIP: '사설 IP',
        publicIP: '공인 IP',
        country: '국가 / 지역',
        region: '지역 / 주',
        city: '도시',
        zip: '우편번호',
        isp: 'ISP',
        org: '조직',
        location: '좌표',
        timezone: '시간대',
        mapTitle: '위치 정보',
        mapView: '지도에서 보기:',
        googleMaps: 'Google 지도',
        openStreetMap: 'OpenStreetMap',
        noLocation: '위치 데이터가 없습니다',
        instructionsTitle: '사용 방법',
        instructions: [
            '입력 필드에 IP 주소를 입력하세요 (IPv4 형식 지원)',
            '「조회」 버튼을 클릭하여 위치 정보를 가져오세요',
            '「내 IP 주소」를 클릭하여 현재 공인 IP를 빠르게 확인하세요',
            '결과에는 국가, 지역, 도시, ISP, 좌표, 시간대 등이 포함됩니다',
            'Google 지도 및 OpenStreetMap 링크가 제공됩니다'
        ],
        apiNotice: '이 도구는 무료 API 서비스를 사용합니다. 결과는 참고용입니다.',
        dataSource: '데이터 출처',
        footer: 'IP 지리 위치 조회 도구',
        about: '소개',
        privacy: '개인정보처리방침',
        home: '홈',
        aboutPage: '소개',
        cookieTitle: '쿠키 동의',
        cookieText: '당사는 귀하의 브라우징 경험을 개선하고, 사이트 트래픽을 분석하며, 맞춤형 광고를 제공하기 위해 쿠키 및 유사 기술을 사용합니다. 이 사이트를 계속 사용함으로써 귀하는 당사의',
        cookiePrivacy: '개인정보처리방침',
        cookieAccept: '동의',
        adLabel: '광고'
    },
    ru: {
        title: 'Инструмент поиска IP - Проверка местоположения IP-адреса',
        desc: 'Бесплатный онлайн-инструмент геолокации IP. Найдите страну, регион, город, провайдера и многое другое для любого IP-адреса.',
        h1: 'Поиск геолокации IP',
        subtitle: 'Проверьте подробную информацию о местоположении любого IP-адреса',
        placeholder: 'Введите IP-адрес (например, 8.8.8.8)',
        searchBtn: 'Поиск',
        myIPBtn: 'Мой IP-адрес',
        loading: 'Поиск информации об IP...',
        inputError: 'Введите IP-адрес',
        formatError: 'Введите действительный IPv4-адрес (например, 8.8.8.8)',
        networkError: 'Сетевой запрос не выполнен или неверный IP-адрес',
        bogonError: 'Поиск не удался, проверьте IP-адрес',
        queryFailed: 'Поиск не удался',
        privateIP: 'Частный IP',
        publicIP: 'Публичный IP',
        country: 'Страна / Регион',
        region: 'Регион / Штат',
        city: 'Город',
        zip: 'Почтовый индекс',
        isp: 'ISP',
        org: 'Организация',
        location: 'Координаты',
        timezone: 'Часовой пояс',
        mapTitle: 'Геолокация',
        mapView: 'Посмотреть на карте:',
        googleMaps: 'Google Maps',
        openStreetMap: 'OpenStreetMap',
        noLocation: 'Данные о местоположении отсутствуют',
        instructionsTitle: 'Как использовать',
        instructions: [
            'Введите IP-адрес в поле ввода (поддерживается формат IPv4)',
            'Нажмите кнопку "Поиск", чтобы получить данные о геолокации',
            'Нажмите "Мой IP-адрес", чтобы быстро проверить текущий публичный IP',
            'Результаты включают: страну, регион, город, провайдера, координаты, часовой пояс и многое другое',
            'Предоставлены ссылки на Google Maps и OpenStreetMap'
        ],
        apiNotice: 'Этот инструмент использует бесплатный API-сервис. Результаты предназначены только для справки.',
        dataSource: 'Источник данных',
        footer: 'Инструмент поиска геолокации IP',
        about: 'О нас',
        privacy: 'Политика конфиденциальности',
        home: 'Главная',
        aboutPage: 'О нас',
        cookieTitle: 'Согласие на использование Cookie',
        cookieText: 'Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта просмотра, анализа трафика сайта и показа персонализированной рекламы. Продолжая использовать этот сайт, вы соглашаетесь с нашей',
        cookiePrivacy: 'Политикой конфиденциальности',
        cookieAccept: 'Принять',
        adLabel: 'Реклама'
    }
};

// 頁面元素
const elements = {
    ipInput: null,
    loading: null,
    error: null,
    ipInfo: null,
    searchBtn: null
};

// 獲取當前頁面語言
function getPageLang() {
    const htmlLang = document.documentElement.lang || 'zh';
    const supported = ['zh', 'en', 'ja', 'ko', 'ru'];
    return supported.includes(htmlLang) ? htmlLang : 'zh';
}

// 獲取翻譯文本
function t(key) {
    const lang = getPageLang();
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
}

// 頁面加載完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    // 獲取頁面元素
    elements.ipInput = document.getElementById('ipInput');
    elements.loading = document.getElementById('loading');
    elements.error = document.getElementById('error');
    elements.ipInfo = document.getElementById('ipInfo');
    elements.searchBtn = document.getElementById('searchBtn');

    // 綁定回車鍵事件
    elements.ipInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            queryIP();
        }
    });

    // 自動查詢當前IP
    queryMyIP();

    // 初始化Cookie橫幅
    initCookieBanner();
});

// 顯示加載狀態
function showLoading() {
    elements.loading.style.display = 'block';
    elements.error.style.display = 'none';
    elements.ipInfo.style.display = 'none';
}

// 隱藏加載狀態
function hideLoading() {
    elements.loading.style.display = 'none';
}

// 顯示錯誤信息
function showError(message) {
    elements.error.textContent = message;
    elements.error.style.display = 'block';
    elements.ipInfo.style.display = 'none';
}

// 驗證IP地址格式
function validateIP(ip) {
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ip)) {
        return false;
    }

    const parts = ip.split('.');
    return parts.every(part => {
        const num = parseInt(part, 10);
        return num >= 0 && num <= 255;
    });
}

// 查詢IP地址
async function queryIP() {
    const ip = elements.ipInput.value.trim();

    if (!ip) {
        showError('⚠️ ' + t('inputError'));
        return;
    }

    if (!validateIP(ip)) {
        showError('⚠️ ' + t('formatError'));
        return;
    }

    await fetchIPInfo(ip);
}

// 查詢當前用戶的IP
async function queryMyIP() {
    await fetchIPInfo('');
}

// 獲取IP信息
async function fetchIPInfo(ip) {
    showLoading();

    try {
        const url = ip ? `${API_BASE_URL}${ip}/json` : `${API_BASE_URL}json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(t('networkError'));
        }

        const data = await response.json();

        // ipinfo.io 使用 bogon 字段表示無效IP
        if (data.bogon) {
            throw new Error(t('bogonError'));
        }

        displayIPInfo(data);

        // 如果是查詢當前IP，自動填入輸入框
        if (!ip) {
            elements.ipInput.value = data.ip;
        }

    } catch (error) {
        console.error('Query IP failed:', error);
        showError(`❌ ${t('queryFailed')}: ${error.message}`);
    } finally {
        hideLoading();
    }
}

// 獲取國家名稱（根據當前語言）
function getCountryName(code) {
    if (!code) return '-';
    const lang = getPageLang();
    if (lang === 'zh') {
        return COUNTRY_MAP_ZH[code.toUpperCase()] || COUNTRY_MAP[code.toUpperCase()] || code;
    }
    return COUNTRY_MAP[code.toUpperCase()] || code;
}

// 將英文地名翻譯為中文（用於城市和省份）
function translateToZh(text, type) {
    if (!text || text === '-') return text;
    if (getPageLang() !== 'zh') return text;
    if (type === 'city') {
        return CITY_MAP_ZH[text] || text;
    }
    if (type === 'region') {
        return REGION_MAP_ZH[text] || text;
    }
    if (type === 'isp') {
        // 嘗試完整匹配，如果沒有則嘗試部分匹配
        if (ISP_MAP_ZH[text]) {
            return ISP_MAP_ZH[text];
        }
        // 部分匹配：如果ISP名稱包含映射表中的關鍵字
        for (const [key, value] of Object.entries(ISP_MAP_ZH)) {
            if (text.includes(key)) {
                return value;
            }
        }
        return text;
    }
    if (type === 'timezone') {
        return TIMEZONE_MAP_ZH[text] || text;
    }
    return text;
}

// 顯示IP信息
function displayIPInfo(data) {
    // 更新IP地址
    document.getElementById('ipAddress').textContent = data.ip;

    // 更新IP類型（根據是否為內網IP判斷）
    const ipType = isPrivateIP(data.ip) ? t('privateIP') : t('publicIP');
    document.getElementById('ipType').textContent = ipType;

    // 解析經緯度
    let lat = null, lon = null;
    if (data.loc) {
        const [latitude, longitude] = data.loc.split(',');
        lat = parseFloat(latitude);
        lon = parseFloat(longitude);
    }

    // 解析組織和ISP信息
    let ispName = data.org || '-';
    let orgName = data.org || '-';

    if (data.org && data.org.includes(' ')) {
        const parts = data.org.split(' ');
        orgName = parts[0];
        ispName = parts.slice(1).join(' ');
    }

    // 更新各項信息 - 中文頁面優先顯示中文地名
    document.getElementById('country').textContent = getCountryName(data.country);
    document.getElementById('region').textContent = translateToZh(data.region, 'region') || '-';
    document.getElementById('city').textContent = translateToZh(data.city, 'city') || '-';
    document.getElementById('zip').textContent = data.postal || '-';
    document.getElementById('isp').textContent = translateToZh(ispName, 'isp') || '-';
    document.getElementById('org').textContent = orgName;
    document.getElementById('location').textContent =
        lat && lon ? `${lat}, ${lon}` : '-';
    document.getElementById('timezone').textContent = translateToZh(data.timezone, 'timezone') || '-';

    // 更新地圖鏈接
    const mapLink = document.getElementById('mapLink');
    if (lat && lon) {
        mapLink.innerHTML = `
            <p>📌 ${t('mapView')}</p>
            <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank" rel="noopener noreferrer">
                ${t('googleMaps')}
            </a>
            &nbsp;|&nbsp;
            <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=12" target="_blank" rel="noopener noreferrer">
                ${t('openStreetMap')}
            </a>
        `;
    } else {
        mapLink.innerHTML = `<p>${t('noLocation')}</p>`;
    }

    // 顯示結果
    elements.error.style.display = 'none';
    elements.ipInfo.style.display = 'block';
}

// 判斷是否為內網IP
function isPrivateIP(ip) {
    const parts = ip.split('.').map(Number);
    if (parts[0] === 10) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 127) return true;
    return false;
}

// Cookie同意橫幅
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    if (!banner || !acceptBtn) return;

    // 檢查是否已經同意
    if (localStorage.getItem('cookieConsent')) {
        banner.style.display = 'none';
        // 如果已同意，可以加載廣告腳本
        loadAdScripts();
    } else {
        banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
        loadAdScripts();
    });
}

// 加載廣告腳本（用戶同意Cookie後調用）
function loadAdScripts() {
    // Google AdSense 代碼占位 - 替換 ca-pub-XXXXXXXXXXXXXXXX 為你的發布商ID
    // 示例：
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
    // script.crossOrigin = 'anonymous';
    // document.head.appendChild(script);
    https://araplhn.org/4/71ac2cfb6393a198691c9b7ac60f81f2
}
