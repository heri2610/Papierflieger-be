const airportsData = [
  {
    id: 1,
    airportName: "Ngurah Rai International Airport",
    city: "Denpasar, Bali, Indonesia",
    cityCode: "DPS",
    createdAt: "2022-12-01T14:04:30.469Z",
    updatedAt: "2022-12-01T14:04:30.469Z"
  },
  {
    id: 2,
    airportName: "Pattimura",
    city: "Ambon, Maluku, Indonesia",
    cityCode: "AMQ",
    createdAt: "2022-12-01T14:13:14.223Z",
    updatedAt: "2022-12-01T14:13:14.223Z"
  },
  {
    id: 3,
    airportName: "Sultan Aji Muhammad Sulaiman",
    city: "Balikpapan, Kalimantan Timur, Indonesia",
    cityCode: "BPN",
    createdAt: "2022-12-01T14:15:05.645Z",
    updatedAt: "2022-12-01T14:15:05.645Z"
  },
  {
    id: 4,
    airportName: "Sultan Iskandar Muda",
    city: "Banda Aceh, Aceh, Indonesia",
    cityCode: "BTJ",
    createdAt: "2022-12-01T14:15:55.682Z",
    updatedAt: "2022-12-01T14:15:55.682Z"
  },
  {
    id: 5,
    airportName: "Husein Sastranegara",
    city: "Bandung, Jawa Barat, Indonesia",
    cityCode: "BDO",
    createdAt: "2022-12-01T14:16:59.289Z",
    updatedAt: "2022-12-01T14:16:59.289Z"
  },
  {
    id: 6,
    airportName: "Syamsuddin Noor",
    city: "Banjar Baru, Kalimantan Selatan, Indonesia",
    cityCode: "BDJ",
    createdAt: "2022-12-01T14:18:18.660Z",
    updatedAt: "2022-12-01T14:18:18.660Z"
  },
  {
    id: 7,
    airportName: "Hang Nadim",
    city: "Batam, Kepulauan Riau, Indonesia",
    cityCode: "BTH",
    createdAt: "2022-12-01T14:19:22.877Z",
    updatedAt: "2022-12-01T14:19:22.877Z"
  },
  {
    id: 8,
    airportName: "Fatmawati",
    city: "Bengkulu, Bengkulu, Indonesia",
    cityCode: "BKS",
    createdAt: "2022-12-01T14:21:05.850Z",
    updatedAt: "2022-12-01T14:21:05.850Z"
  },
  {
    id: 9,
    airportName: "Kalimarau",
    city: "Berau, Kalimantan Timur, Indonesia",
    cityCode: "BEJ",
    createdAt: "2022-12-01T14:22:07.566Z",
    updatedAt: "2022-12-01T14:22:07.566Z"
  },
  {
    id: 10,
    airportName: "Frans Kaisiepo",
    city: "Biak, Papua, Indonesia",
    cityCode: "BIK",
    createdAt: "2022-12-01T14:23:51.200Z",
    updatedAt: "2022-12-01T14:23:51.200Z"
  },
  {
    id: 11,
    airportName: "Jalaluddin",
    city: "Gorontalo, Gorontalo, Indonesia",
    cityCode: "GTO",
    createdAt: "2022-12-01T14:26:46.757Z",
    updatedAt: "2022-12-01T14:26:46.757Z"
  },
  {
    id: 12,
    airportName: "Soekarno Hatta International Airport",
    city: "Tangerang, Banten, Indonesia",
    cityCode: "CGK",
    createdAt: "2022-12-01T14:27:48.500Z",
    updatedAt: "2022-12-01T14:27:48.500Z"
  },
  {
    id: 13,
    airportName: "Sultan Thaha Syaifuddin",
    city: "Pasar Merah, Jambi, Indonesia",
    cityCode: "DJB",
    createdAt: "2022-12-01T14:28:53.447Z",
    updatedAt: "2022-12-01T14:28:53.447Z"
  },
  {
    id: 14,
    airportName: "Adi Sucipto",
    city: "Yogjakarta, Jawa Tengah, Indonesia",
    cityCode: "JOG",
    createdAt: "2022-12-01T14:29:54.103Z",
    updatedAt: "2022-12-01T14:29:54.103Z"
  },
  {
    id: 15,
    airportName: "Haluoleo",
    city: "Konawe Selatan, Sulaawesi Tenggara, Indonesia",
    cityCode: "KDI",
    createdAt: "2022-12-01T14:31:29.960Z",
    updatedAt: "2022-12-01T14:31:29.960Z"
  },
  {
    id: 16,
    airportName: "El Tari",
    city: "Kupang, Nusa Tenggara Timur, Indonesia",
    cityCode: "KOE",
    createdAt: "2022-12-01T14:33:16.878Z",
    updatedAt: "2022-12-01T14:33:16.878Z"
  },
  {
    id: 17,
    airportName: "Lombok International Airport",
    city: "Lombok, Nusa Tenggara Barat, Indonesia",
    cityCode: "LOP",
    createdAt: "2022-12-01T14:34:33.165Z",
    updatedAt: "2022-12-01T14:34:33.165Z"
  },
  {
    id: 18,
    airportName: "Abdul Rachman Saleh",
    city: "Malang, Jawa Timur, Indonesia",
    cityCode: "MLG",
    createdAt: "2022-12-01T14:35:23.705Z",
    updatedAt: "2022-12-01T14:35:23.705Z"
  },
  {
    id: 19,
    airportName: "Sam Ratulangi International Airport",
    city: "Manado, Sulawesi Utara, Indonesia",
    cityCode: "MDC",
    createdAt: "2022-12-01T14:37:06.036Z",
    updatedAt: "2022-12-01T14:37:06.036Z"
  },
  {
    id: 20,
    airportName: "Rendani",
    city: "Manokwari, Papua Barat, Indonesia",
    cityCode: "MKW",
    createdAt: "2022-12-01T14:38:15.496Z",
    updatedAt: "2022-12-01T14:38:15.496Z"
  },
  {
    id: 21,
    airportName: "Kuala Namu International Airport",
    city: "Medan, Sumatera Utara, Indonesia",
    cityCode: "KNO",
    createdAt: "2022-12-01T14:40:08.765Z",
    updatedAt: "2022-12-01T14:40:08.765Z"
  },
  {
    id: 22,
    airportName: "Minangkabau International Airport",
    city: "Padang, Sumatera Barat, Indonesia",
    cityCode: "PDG",
    createdAt: "2022-12-01T14:40:58.569Z",
    updatedAt: "2022-12-01T14:40:58.569Z"
  },
  {
    id: 23,
    airportName: "Tjilik Riwut",
    city: "Palangkaraya, Klaimantan Tengah, Indonesia",
    cityCode: "PKY",
    createdAt: "2022-12-01T14:42:09.123Z",
    updatedAt: "2022-12-01T14:42:09.123Z"
  },
  {
    id: 24,
    airportName: "Sultan Mahmud Badaruddin II",
    city: "Palembang, Sumatera Selatan, Indonesia",
    cityCode: "PLM",
    createdAt: "2022-12-01T14:43:27.387Z",
    updatedAt: "2022-12-01T14:43:27.387Z"
  },
  {
    id: 25,
    airportName: "Mutiara",
    city: "Palu, Sulawesi Tengah, Indonesia",
    cityCode: "PLW",
    createdAt: "2022-12-01T14:44:55.442Z",
    updatedAt: "2022-12-01T14:44:55.442Z"
  },
  {
    id: 26,
    airportName: "Depati Amir",
    city: "Pengkal Pinang, Kepulauan Bangka Belitung, Indonesia",
    cityCode: "PGK",
    createdAt: "2022-12-01T14:46:29.650Z",
    updatedAt: "2022-12-01T14:46:29.650Z"
  },
  {
    id: 27,
    airportName: "Sultan Syarif Kasin II",
    city: "Pekan Baru, Riau, Indonesia",
    cityCode: "PKU",
    createdAt: "2022-12-01T14:48:30.315Z",
    updatedAt: "2022-12-01T14:48:30.315Z"
  },
  {
    id: 28,
    airportName: "Supadio",
    city: "Kubu Raya, Kalimantan Barat, Indonesia",
    cityCode: "PNK",
    createdAt: "2022-12-01T14:49:57.753Z",
    updatedAt: "2022-12-01T14:49:57.753Z"
  },
  {
    id: 29,
    airportName: "Achmad Yani",
    city: "Semarang, Jawa Tengah, Indonesia",
    cityCode: "SRG",
    createdAt: "2022-12-01T14:52:31.588Z",
    updatedAt: "2022-12-01T14:52:31.588Z"
  },
  {
    id: 30,
    airportName: "Adi Sumarmo",
    city: "Solo, Jawa Tengah, Indonesia",
    cityCode: "SOC",
    createdAt: "2022-12-01T14:53:23.247Z",
    updatedAt: "2022-12-01T14:53:23.247Z"
  },
  {
    id: 31,
    airportName: "Domine Eduard Osok",
    city: "Sorong, Papua Barat, Indonesia",
    cityCode: "SOQ",
    createdAt: "2022-12-01T14:55:26.676Z",
    updatedAt: "2022-12-01T14:55:26.676Z"
  },
  {
    id: 32,
    airportName: "Juanda International Airport",
    city: "Surabaya, Jawa Timur, Indonesia",
    cityCode: "SUB",
    createdAt: "2022-12-01T14:56:22.894Z",
    updatedAt: "2022-12-01T14:56:22.894Z"
  },
  {
    id: 33,
    airportName: "Radin Inten",
    city: "Tanjung Karang, Sumatera Selatan, Indonesia",
    cityCode: "TKG",
    createdAt: "2022-12-01T14:58:23.631Z",
    updatedAt: "2022-12-01T14:58:23.631Z"
  },
  {
    id: 34,
    airportName: "H.A.S Hanandjoeddin",
    city: "Tanjung Pandan, Kepulauan Bangka Belitung, Indonesia",
    cityCode: "TJQ",
    createdAt: "2022-12-01T15:00:24.367Z",
    updatedAt: "2022-12-01T15:00:24.367Z"
  },
  {
    id: 35,
    airportName: "Raja Haji Fisabilillah",
    city: "Tanjung Pinang, Kepulauan Riau, Indonesia",
    cityCode: "TNJ",
    createdAt: "2022-12-01T15:01:22.493Z",
    updatedAt: "2022-12-01T15:01:22.493Z"
  },
  {
    id: 36,
    airportName: "Jalaluddin",
    city: "Gorontalo, Gorontalo, Indonesia",
    cityCode: "GTO",
    createdAt: "2022-12-01T15:03:12.247Z",
    updatedAt: "2022-12-01T15:03:12.247Z"
  },
  {
    id: 37,
    airportName: "Sultan Baabullah",
    city: "Ternate, Maluku, Indonesia",
    cityCode: "TTE",
    createdAt: "2022-12-01T15:04:17.084Z",
    updatedAt: "2022-12-01T15:04:17.084Z"
  },
  {
    id: 38,
    airportName: "Mozas Kilangin",
    city: "Timika, Papua, Indonesia",
    cityCode: "TIM",
    createdAt: "2022-12-01T15:05:02.712Z",
    updatedAt: "2022-12-01T15:05:02.712Z"
  },
  {
    id: 39,
    airportName: "Hasanuddin International Airport",
    city: "Ujung Pandang, Sulawesi Selatan, Indonesia",
    cityCode: "UPG",
    createdAt: "2022-12-01T15:06:53.770Z",
    updatedAt: "2022-12-01T15:06:53.770Z"
  },
  {
    id: 40,
    airportName: "Schippol International Airport",
    city: "Amsterdam, Belanda",
    cityCode: "AMS",
    createdAt: "2022-12-01T15:11:27.085Z",
    updatedAt: "2022-12-01T15:11:27.085Z"
  },
  {
    id: 41,
    airportName: "Suvarnabhumi International Airport",
    city: "Bangkok, Thailand",
    cityCode: "BKK",
    createdAt: "2022-12-01T15:12:29.753Z",
    updatedAt: "2022-12-01T15:12:29.753Z"
  },
  {
    id: 42,
    airportName: "Capital International Airport",
    city: "Beijing, China",
    cityCode: "PEK",
    createdAt: "2022-12-01T15:13:24.807Z",
    updatedAt: "2022-12-01T15:13:24.807Z"
  },
  {
    id: 43,
    airportName: "Brisbane International Airport",
    city: "Brisbane, Australia",
    cityCode: "BNE",
    createdAt: "2022-12-01T15:14:50.102Z",
    updatedAt: "2022-12-01T15:14:50.102Z"
  },
  {
    id: 44,
    airportName: "Baiyun International Airport",
    city: "Guangzhou, Tiongkok",
    cityCode: "CAN",
    createdAt: "2022-12-01T15:17:01.500Z",
    updatedAt: "2022-12-01T15:17:01.500Z"
  },
  {
    id: 45,
    airportName: "Hong Kong International Airport",
    city: "Hong Kong, Hong Kong",
    cityCode: "HKG",
    createdAt: "2022-12-01T15:18:51.166Z",
    updatedAt: "2022-12-01T15:18:51.166Z"
  },
  {
    id: 46,
    airportName: "King Abdul Azis International Airport",
    city: "Jeddah, Arab Saudi",
    cityCode: "JED",
    createdAt: "2022-12-01T15:19:57.329Z",
    updatedAt: "2022-12-01T15:19:57.329Z"
  },
  {
    id: 48,
    airportName: "Gatwick Internation Airport",
    city: "London, Inggris",
    cityCode: "LGW",
    createdAt: "2022-12-01T15:21:33.504Z",
    updatedAt: "2022-12-01T15:21:33.504Z"
  },
  {
    id: 50,
    airportName: "Kansai International Airport",
    city: "Osaka, Jepang",
    cityCode: "KIX",
    createdAt: "2022-12-01T15:23:56.464Z",
    updatedAt: "2022-12-01T15:23:56.464Z"
  },
  {
    id: 51,
    airportName: "Perth International Airport",
    city: "Perth, Australia",
    cityCode: "PER",
    createdAt: "2022-12-01T15:24:51.207Z",
    updatedAt: "2022-12-01T15:24:51.207Z"
  },
  {
    id: 52,
    airportName: "Incheon International Airport",
    city: "Seoul, Korea Selatan",
    cityCode: "ICN",
    createdAt: "2022-12-01T15:25:44.693Z",
    updatedAt: "2022-12-01T15:25:44.693Z"
  },
  {
    id: 53,
    airportName: "Pudong International Airport",
    city: "Shanghai, China",
    cityCode: "PVG",
    createdAt: "2022-12-01T15:28:39.951Z",
    updatedAt: "2022-12-01T15:28:39.951Z"
  },
  {
    id: 55,
    airportName: "Haneda International Airport",
    city: "Tokyo, Jepang",
    cityCode: "HND",
    createdAt: "2022-12-01T15:30:44.442Z",
    updatedAt: "2022-12-01T15:30:44.442Z"
  },
  {
    id: 56,
    airportName: "Narita International Airport",
    city: "Tokyo, Jepang",
    cityCode: "NRT",
    createdAt: "2022-12-01T15:31:11.108Z",
    updatedAt: "2022-12-01T15:31:11.108Z"
  },
  {
    id: 54,
    airportName: "Kingsford Smith International Airport",
    city: "Sydney, Australia",
    cityCode: "SYD",
    createdAt: "2022-12-01T15:30:06.431Z",
    updatedAt: "2022-12-01T15:34:08.787Z"
  },
  {
    id: 47,
    airportName: "Kuala Lumpur International Airport",
    city: "Kuala Lumpur, Malaysia",
    cityCode: "KUL",
    createdAt: "2022-12-01T15:20:46.354Z",
    updatedAt: "2022-12-03T15:46:54.341Z"
  },
  {
    id: 57,
    airportName: "Changi Singapore International Airport",
    city: "Singapore, Singapore",
    cityCode: "SIN",
    createdAt: "2022-12-03T16:00:30.902Z",
    updatedAt: "2022-12-03T16:00:30.902Z"
  },
  {
    id: 59,
    airportName: "Ninoy Aquino International Airport",
    city: "Manila, Filipina",
    cityCode: "MNL",
    createdAt: "2022-12-04T09:57:25.446Z",
    updatedAt: "2022-12-04T09:57:25.446Z"
  },
  {
    id: 60,
    airportName: "Dubai International Airport",
    city: "Dubai, Uni Emirat Arab",
    cityCode: "DXB",
    createdAt: "2022-12-04T11:38:02.841Z",
    updatedAt: "2022-12-04T11:38:02.841Z"
  },
  {
    id: 61,
    airportName: "Tan Son Nhat International Airport",
    city: "Ho Chi Minh, Vietnam",
    cityCode: "SGN",
    createdAt: "2022-12-04T11:45:32.541Z",
    updatedAt: "2022-12-04T11:45:32.541Z"
  },
  {
    id: 58,
    airportName: "Shuangliu Chengdu International Airport",
    city: "Sichuan, Tiongkok",
    cityCode: "CTU",
    createdAt: "2022-12-03T16:09:19.165Z",
    updatedAt: "2022-12-04T13:32:23.725Z"
  },
  {
    id: 49,
    airportName: "Tullamarine International Airport",
    city: "Melbourne, Australia",
    cityCode: "MEL",
    createdAt: "2022-12-01T15:22:32.571Z",
    updatedAt: "2022-12-04T13:34:34.321Z"
  },
  {
    id: 62,
    airportName: "Cairns",
    city: "Queensland, Australia",
    cityCode: "CNS",
    createdAt: "2022-12-04T13:44:57.052Z",
    updatedAt: "2022-12-04T13:44:57.052Z"
  },
  {
    id: 63,
    airportName: "Istanbul Airport",
    city: "Istanbul, Turki",
    cityCode: "IST",
    createdAt: "2022-12-04T15:29:30.302Z",
    updatedAt: "2022-12-04T15:29:30.302Z"
  },
  {
    id: 64,
    airportName: "Hamad International Airport",
    city: "Doha, Qatar",
    cityCode: "DOH",
    createdAt: "2022-12-04T15:46:14.949Z",
    updatedAt: "2022-12-04T15:46:14.949Z"
  },
  {
    id: 67,
    airportName: "Adelaide International Airport",
    city: "Adelaide, Australia",
    cityCode: "ADL",
    createdAt: "2022-12-04T16:24:52.239Z",
    updatedAt: "2022-12-04T16:24:52.239Z"
  },
  {
    id: 68,
    airportName: "Taoyuan International Airport",
    city: "Taoyuan, Taiwan",
    cityCode: "TPE",
    createdAt: "2022-12-04T19:38:20.852Z",
    updatedAt: "2022-12-04T19:38:20.852Z"
  }
];

module.exports = airportsData;