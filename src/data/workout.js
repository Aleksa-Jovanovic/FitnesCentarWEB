import i18n from "@/i18n.js";

function workout() {
  return [
    //Yoga
    {
      id: 1,
      type: "yoga",
      name: "Hatha Yoga",
      description: "",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 2,
      type: "yoga",
      name: "Vinyasa Yoga",
      description: "",
      duration: 1500,
      difficulty: 2,
      rate: 3.8,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 3,
      type: "yoga",
      name: "Iyengar Yoga",
      description: "",
      duration: 600,
      difficulty: 5,
      rate: 4.8,
      comments: [],
      imgs: [],
      videos: [],
    },

    //Pilates
    {
      id: 4,
      type: "pilates",
      name: "",
      description: "",
      duration: 1000,
      difficulty: 3,
      rate: 4.0,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 5,
      type: "pilates",
      name: "",
      description: "",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 6,
      type: "pilates",
      name: "",
      description: "",
      duration: 1200,
      difficulty: 2,
      rate: 3.5,
      comments: [],
      imgs: [],
      videos: [],
    },

    //Core
    {
      id: 7,
      type: "core",
      name: "",
      description: "",
      duration: 1300,
      difficulty: 5,
      rate: 4.3,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 8,
      type: "core",
      name: "",
      description: "",
      duration: 300,
      difficulty: 3,
      rate: 3.2,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 9,
      type: "core",
      name: "",
      description: i18n.tc("workout.core.description"),
      duration: 1800,
      difficulty: 4,
      rate: 4.9,
      comments: [],
      imgs: [],
      videos: [],
    },

    //Cardio
    {
      id: 10,
      type: "cardio",
      name: "",
      description: "",
      duration: 900,
      difficulty: 3,
      rate: 4.2,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 11,
      type: "cardio",
      name: "",
      description: "",
      duration: 900,
      difficulty: 4,
      rate: 4.2,
      comments: [],
      imgs: [],
      videos: [],
    },
    {
      id: 12,
      type: "cardio",
      name: "",
      description: "",
      duration: 900,
      difficulty: 5,
      rate: 4.2,
      comments: [],
      imgs: [],
      videos: [],
    },
  ];
}

export default workout;
