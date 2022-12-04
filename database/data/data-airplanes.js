const airplanesData = [
  {
    id: 1,
    airplaneName: "Boeing G7792",
    airplaneCode: "AP-345",
    class: "Business",
    createdAt: "2022-12-01T14:04:09.528Z",
    updatedAt: "2022-12-01T14:04:09.528Z"
  },
  {
    id: 3,
    airplaneName: "Boeing G2292",
    airplaneCode: "AP-225",
    class: "Business",
    createdAt: "2022-12-01T14:18:18.667Z",
    updatedAt: "2022-12-01T14:18:18.667Z"
  },
  {
    id: 5,
    airplaneName: "Airbus PF2215",
    airplaneCode: "AP-152",
    class: "Business",
    createdAt: "2022-12-01T14:22:52.353Z",
    updatedAt: "2022-12-01T14:22:52.353Z"
  },
  {
    id: 6,
    airplaneName: "Boeing PF151",
    airplaneCode: "PF-876",
    class: "Economy",
    createdAt: "2022-12-01T14:34:01.864Z",
    updatedAt: "2022-12-01T14:34:01.864Z"
  },
  {
    id: 7,
    airplaneName: "Airbus PF546",
    airplaneCode: "PF-678",
    class: "Economy",
    createdAt: "2022-12-01T14:38:50.026Z",
    updatedAt: "2022-12-01T14:38:50.026Z"
  },
  {
    id: 8,
    airplaneName: "Airbus PF654",
    airplaneCode: "PF-788",
    class: "Business",
    createdAt: "2022-12-01T14:40:25.060Z",
    updatedAt: "2022-12-01T14:40:25.060Z"
  },
  {
    id: 9,
    airplaneName: "Boeing PF546",
    airplaneCode: "PF-567",
    class: "Business",
    createdAt: "2022-12-01T14:40:53.718Z",
    updatedAt: "2022-12-01T14:40:53.718Z"
  },
  {
    id: 10,
    airplaneName: "Boeing PF543",
    airplaneCode: "PF-357",
    class: "Business",
    createdAt: "2022-12-01T14:41:29.378Z",
    updatedAt: "2022-12-01T14:41:29.378Z"
  },
  {
    id: 11,
    airplaneName: "Airbus PF5680",
    airplaneCode: "PF-456",
    class: "Economy",
    createdAt: "2022-12-01T14:42:18.885Z",
    updatedAt: "2022-12-01T14:42:18.885Z"
  },
  {
    id: 12,
    airplaneName: "Airbus PF096",
    airplaneCode: "PF-347",
    class: "Economy",
    createdAt: "2022-12-01T14:42:51.672Z",
    updatedAt: "2022-12-01T14:42:51.672Z"
  },
  {
    id: 13,
    airplaneName: "Airbus PF245",
    airplaneCode: "PF-786",
    class: "Economy",
    createdAt: "2022-12-01T14:43:12.376Z",
    updatedAt: "2022-12-01T14:43:12.376Z"
  },
  {
    id: 14,
    airplaneName: "Boeing PF592",
    airplaneCode: "PF-457",
    class: "Business",
    createdAt: "2022-12-01T16:05:43.981Z",
    updatedAt: "2022-12-01T16:05:43.981Z"
  },
  {
    id: 15,
    airplaneName: "Boeing PF375",
    airplaneCode: "PF-476",
    class: "Business",
    createdAt: "2022-12-01T16:09:34.036Z",
    updatedAt: "2022-12-01T16:09:34.036Z"
  },
  {
    id: 16,
    airplaneName: "Boeing PF389",
    airplaneCode: "PF-385",
    class: "Business",
    createdAt: "2022-12-01T16:10:04.340Z",
    updatedAt: "2022-12-01T16:10:04.340Z"
  },
  {
    id: 17,
    airplaneName: "Boeing PF759",
    airplaneCode: "PF-395",
    class: "Economy",
    createdAt: "2022-12-01T16:40:23.242Z",
    updatedAt: "2022-12-01T16:40:23.242Z"
  },
  {
    id: 18,
    airplaneName: "Boeing PF307",
    airplaneCode: "PF-386",
    class: "Economy",
    createdAt: "2022-12-01T16:41:15.456Z",
    updatedAt: "2022-12-01T16:41:15.456Z"
  },
  {
    id: 19,
    airplaneName: "Boeing PF636",
    airplaneCode: "PF-546",
    class: "Economy",
    createdAt: "2022-12-01T16:41:50.658Z",
    updatedAt: "2022-12-01T16:41:50.658Z"
  },
  {
    id: 22,
    airplaneName: "Boeing PF664",
    airplaneCode: "PF-638",
    class: "Economy",
    createdAt: "2022-12-01T16:43:24.815Z",
    updatedAt: "2022-12-01T16:43:24.815Z"
  },
  {
    id: 23,
    airplaneName: "Airbus PF369",
    airplaneCode: "PF-395",
    class: "Economy",
    createdAt: "2022-12-01T16:43:58.636Z",
    updatedAt: "2022-12-01T16:43:58.636Z"
  },
  {
    id: 24,
    airplaneName: "Airbus PF938",
    airplaneCode: "PF-593",
    class: "Economy",
    createdAt: "2022-12-01T16:44:43.080Z",
    updatedAt: "2022-12-01T16:44:43.080Z"
  },
  {
    id: 25,
    airplaneName: "Airbus PF938",
    airplaneCode: "PF-593",
    class: "Economy",
    createdAt: "2022-12-01T16:45:00.028Z",
    updatedAt: "2022-12-01T16:45:00.028Z"
  },
  {
    id: 26,
    airplaneName: "Airbus PF354",
    airplaneCode: "PF-598",
    class: "Economy",
    createdAt: "2022-12-01T16:45:43.728Z",
    updatedAt: "2022-12-01T16:45:43.728Z"
  },
  {
    id: 27,
    airplaneName: "Airbus PF385",
    airplaneCode: "PF-847",
    class: "Economy",
    createdAt: "2022-12-01T16:46:23.321Z",
    updatedAt: "2022-12-01T16:46:23.321Z"
  },
  {
    id: 28,
    airplaneName: "Airbus PF579",
    airplaneCode: "PF-370",
    class: "Economy",
    createdAt: "2022-12-01T16:47:08.484Z",
    updatedAt: "2022-12-01T16:47:08.484Z"
  },
  {
    id: 29,
    airplaneName: "Airbus PF846",
    airplaneCode: "PF-848",
    class: "Economy",
    createdAt: "2022-12-01T16:47:46.077Z",
    updatedAt: "2022-12-01T16:47:46.077Z"
  },
  {
    id: 30,
    airplaneName: "Airbus PF855",
    airplaneCode: "PF-847",
    class: "Economy",
    createdAt: "2022-12-01T16:48:11.351Z",
    updatedAt: "2022-12-01T16:48:11.351Z"
  },
  {
    id: 31,
    airplaneName: "Airbus PF538",
    airplaneCode: "PF-289",
    class: "Economy",
    createdAt: "2022-12-01T17:49:17.285Z",
    updatedAt: "2022-12-01T17:49:17.285Z"
  },
  {
    id: 32,
    airplaneName: "Boeing PF457",
    airplaneCode: "PF-538",
    class: "Business",
    createdAt: "2022-12-01T17:50:26.618Z",
    updatedAt: "2022-12-01T17:50:26.618Z"
  },
  {
    id: 34,
    airplaneName: "Boeing PF234",
    airplaneCode: "PF-759",
    class: "Business",
    createdAt: "2022-12-01T17:52:47.355Z",
    updatedAt: "2022-12-01T17:52:47.355Z"
  },
  {
    id: 35,
    airplaneName: "Boeing PF482",
    airplaneCode: "PF-474",
    class: "Business",
    createdAt: "2022-12-01T17:53:09.422Z",
    updatedAt: "2022-12-01T17:53:09.422Z"
  },
  {
    id: 36,
    airplaneName: "Boeing PF348",
    airplaneCode: "PF-464",
    class: "Economy",
    createdAt: "2022-12-01T17:54:07.045Z",
    updatedAt: "2022-12-01T17:54:07.045Z"
  },
  {
    id: 37,
    airplaneName: "Boeing PF576",
    airplaneCode: "PF-908",
    class: "Economy",
    createdAt: "2022-12-01T17:54:39.912Z",
    updatedAt: "2022-12-01T17:54:39.912Z"
  },
  {
    id: 38,
    airplaneName: "Boeing PF689",
    airplaneCode: "PF-265",
    class: "Economy",
    createdAt: "2022-12-01T17:56:17.419Z",
    updatedAt: "2022-12-01T17:56:17.419Z"
  },
  {
    id: 39,
    airplaneName: "Boeing PF356",
    airplaneCode: "PF-686",
    class: "Economy",
    createdAt: "2022-12-01T17:56:37.127Z",
    updatedAt: "2022-12-01T17:56:37.127Z"
  },
  {
    id: 40,
    airplaneName: "Boeing PF778",
    airplaneCode: "PF-568",
    class: "Economy",
    createdAt: "2022-12-01T18:14:41.137Z",
    updatedAt: "2022-12-01T18:14:41.137Z"
  },
  {
    id: 41,
    airplaneName: "Boeing PF358",
    airplaneCode: "PF-479",
    class: "Business",
    createdAt: "2022-12-01T18:15:27.557Z",
    updatedAt: "2022-12-01T18:15:27.557Z"
  },
  {
    id: 42,
    airplaneName: "Boeing PF274",
    airplaneCode: "PF-452",
    class: "Business",
    createdAt: "2022-12-01T18:15:49.419Z",
    updatedAt: "2022-12-01T18:15:49.419Z"
  },
  {
    id: 43,
    airplaneName: "Boeing PF274",
    airplaneCode: "PF-253",
    class: "Business",
    createdAt: "2022-12-01T18:16:10.056Z",
    updatedAt: "2022-12-01T18:16:10.056Z"
  },
  {
    id: 44,
    airplaneName: "Boeing PF475",
    airplaneCode: "PF-174",
    class: "Business",
    createdAt: "2022-12-01T18:16:31.178Z",
    updatedAt: "2022-12-01T18:16:31.178Z"
  },
  {
    id: 45,
    airplaneName: "Boeing PF264",
    airplaneCode: "PF-174",
    class: "Business",
    createdAt: "2022-12-01T18:16:51.246Z",
    updatedAt: "2022-12-01T18:16:51.246Z"
  }
];

module.exports = airplanesData;