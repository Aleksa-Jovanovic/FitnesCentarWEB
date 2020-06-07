const user = [
  {
    id: 1,
    firstname: "milos",
    lastname: "petrovic",
    sex: "male",
    username: "miki96",
    password: "qwerty96",
    email: "milos96@gmail.com",
    visitedWorkout: [],
    ratedWorkout: [],
    schedule: [],
    img: "default_male_picture.png",
  },
  {
    id: 2,
    firstname: "tom",
    lastname: "symons",
    sex: "male",
    username: "tommy",
    password: "tommy95",
    email: "tom.95@gmail.com",
    visitedWorkout: [],
    ratedWorkout: [
      {
        id: 9,
        rate: 4,
      },
    ],
    schedule: [],
    img: "default_male_picture.png",
  },
];

export default user;
