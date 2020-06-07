<template>
  <div class="workout-details">
    <h1>{{ $t("workoutDetails.name") }}</h1>
    <div class="current-path">{{ $t("workoutDetails.path") }}</div>
    <div class="workout-details-info">
      <div>
        <p>{{ $t("workoutDetails.workoutName") }}</p>
        <p>{{ workout.name }}</p>
      </div>
      <div>
        <p>{{ $t("workoutDetails.duration") }}</p>
        <p>{{ this.duration }}</p>
      </div>
      <div>
        <p>{{ $t("workoutDetails.level") }}</p>
        <p>{{ workout.difficulty }}</p>
      </div>
    </div>
    <h2>{{ $t("workoutDetails.gallery") }}</h2>
    <div class="details-gallery">
      <div class="details-img" v-for="img in workout.imgs" :key="img">
        <img :src="'/images/' + img" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkoutDetails",
  data() {
    return {
      workout: null,
      durationSec: null,
      durationMin: null,
      duration: null,
    };
  },
  methods: {
    findIndex(array, ratedWorkoutElem) {
      let i = 0;
      while (true) {
        if (array[i].id == ratedWorkoutElem.id) {
          break;
        }
        i++;
      }
      return i;
    },
  },
  created() {
    let workouts = JSON.parse(localStorage.getItem("workouts"));
    let id = Number(this.$route.params.id);
    this.workout = workouts.find((elem) => elem.id == id);
    //Dodaj ovaj workout u visited

    this.durationMin = this.workout.duration / 60;
    this.durationSec = this.workout.duration - this.durationMin * 60;
    this.duration = `${this.durationMin}m ${this.durationSec}s`;

    let currUser = JSON.parse(localStorage.getItem("currentUser"));

    if (
      currUser.visitedWorkout.find((elem) => elem == this.workout.id) != null
    ) {
      //alert("Alrady added to visitedWorkout");
    } else {
      //Change current user
      currUser.visitedWorkout.push(this.workout.id);
      localStorage.setItem("currentUser", JSON.stringify(currUser));
      //Change allUsers
      let allUsers = JSON.parse(localStorage.getItem("users"));
      let index = this.findIndex(allUsers, currUser);
      allUsers[index] = currUser;
      localStorage.setItem("users", JSON.stringify(allUsers));
    }
  },
};
</script>

<style>
.workout-details {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.workout-details h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

.workout-details-info {
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.workout-details-info p {
  color: var(--var-navy);
  font-size: 2rem;
  font-weight: 600;
  margin: 0px;
  display: inline;
}
.details-gallery {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.details-img {
  width: 10%;
  display: inline-block;
}
details-img img {
  max-width: 100px;
  max-height: 100px;
}
</style>
