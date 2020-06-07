<template>
  <div class="workout-details">acjoasbci</div>
</template>

<script>
export default {
  name: "WorkoutDetails",
  data() {
    return {
      workout: null
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
    }
  },
  created() {
    let workouts = JSON.parse(localStorage.getItem("workouts"));
    let id = Number(this.$route.params.id);
    this.workout = workouts.find(elem => elem.id == id);
    //Dodaj ovaj workout u visited

    let currUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currUser.visitedWorkout.find(elem => elem == this.workout.id) != null) {
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
  }
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
</style>