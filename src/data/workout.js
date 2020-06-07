import i18n from "@/i18n.js";

function workout() {
  return [
    //Yoga
    {
      id: 1,
      type: "yoga",
      name: "Hatha Yoga",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      timesRated: 3,
      availableSpots: [6, 10, 10, 5, 4, 6, 11],
      comments: [],
      imgs: ["hatha_yoga_1.jpg", "hatha_yoga_2.jpg", "hatha_yoga_3.jpg"],
      videos: [],
    },
    {
      id: 2,
      type: "yoga",
      name: "Vinyasa Yoga",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 1500,
      difficulty: 2,
      rate: 3.8,
      timesRated: 3,
      availableSpots: [2, 5, 5, 5, 3, 4, 6],
      comments: [],
      imgs: ["vinyasa_yoga_1.jpg", "vinyasa_yoga_2.jpg"],
      videos: [],
    },
    {
      id: 3,
      type: "yoga",
      name: "Iyengar Yoga",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 600,
      difficulty: 5,
      rate: 4.8,
      timesRated: 3,
      availableSpots: [0, 0, 5, 5, 2, 6, 8],
      comments: [],
      imgs: ["iyengar_yoga_1.jpg", "iyengar_yoga_2.jpg"],
      videos: [],
    },

    //Pilates
    {
      id: 4,
      type: "pilates",
      name: "Classical Pilates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 1000,
      difficulty: 3,
      rate: 4.0,
      timesRated: 3,
      availableSpots: [9, 5, 4, 5, 6, 6, 11],
      comments: [],
      imgs: ["classical_pilates_2.jpg", "classical_pilates_1.jpg"],
      videos: [],
    },
    {
      id: 5,
      type: "pilates",
      name: "Mat Pilates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      timesRated: 3,
      availableSpots: [3, 6, 3, 5, 4, 6, 4],
      comments: [],
      imgs: ["mat_pilates_1.jpg", "mat_pilates_2.jpg"],
      videos: [],
    },
    {
      id: 6,
      type: "pilates",
      name: "Reformer Pilates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 1200,
      difficulty: 2,
      rate: 3.5,
      timesRated: 3,
      availableSpots: [6, 3, 3, 5, 7, 6, 4],
      comments: [],
      imgs: ["reformer_pilates_1.jpg", "reformer_pilates_2.jpg"],
      videos: [],
    },

    //Core
    {
      id: 7,
      type: "core",
      name: "Plank",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 1300,
      difficulty: 5,
      rate: 4.3,
      timesRated: 3,
      availableSpots: [1, 4, 3, 5, 4, 6, 7],
      comments: [],
      imgs: ["core_plank_1.jpg", "core_plank_2.jpg"],
      videos: [],
    },
    {
      id: 8,
      type: "core",
      name: "Dead Bug",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 300,
      difficulty: 3,
      rate: 3.2,
      timesRated: 3,
      availableSpots: [6, 10, 10, 5, 4, 6, 11],
      comments: [],
      imgs: ["core_dead_bug_1.jpg", "core_dead_bug_2.jpg"],
      videos: [],
    },
    {
      id: 9,
      type: "core",
      name: "Butterfly Sit-up",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 1800,
      difficulty: 4,
      rate: 4.9,
      timesRated: 3,
      availableSpots: [4, 6, 6, 5, 4, 6, 2],
      comments: [
        {
          id: 1,
          user: "admin",
          text: "Odlican trening",
        },
        {
          id: 2,
          user: "admin",
          text: "Odlican trening",
        },
      ],
      imgs: ["core_butterfly_1.jpg", "core_butterfly_2.jpg"],
      videos: [],
    },

    //Cardio
    {
      id: 10,
      type: "cardio",
      name: "Boxing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      timesRated: 3,
      availableSpots: [0, 5, 0, 5, 4, 6, 2],
      comments: [],
      imgs: ["cardio_boxing_1.jpg", "cardio_boxing_2.jpg"],
      videos: [],
    },
    {
      id: 11,
      type: "cardio",
      name: "Swimming",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 900,
      difficulty: 4,
      rate: 4.2,
      timesRated: 3,
      availableSpots: [2, 1, 4, 3, 4, 6, 0],
      comments: [],
      imgs: ["cardio_swimming_1.jpg", "cardio_swimming_2.jpg"],
      videos: [],
    },
    {
      id: 12,
      type: "cardio",
      name: "Cycling",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      duration: 900,
      difficulty: 5,
      rate: 4.2,
      timesRated: 3,
      availableSpots: [0, 0, 0, 5, 6, 6, 4],
      comments: [],
      imgs: ["cardio_cycling_1.jpg", "cardio_cycling_2.jpg"],
      videos: [],
    },
  ];
}

export default workout;
