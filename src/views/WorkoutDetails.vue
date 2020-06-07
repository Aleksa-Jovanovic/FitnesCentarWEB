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
  created() {
    let workouts = JSON.parse(localStorage.getItem("workouts"));
    let id = Number(this.$route.params.id);
    this.workout = workouts.find(elem => elem.id == id);
    //Dodaj ovaj workout u visited
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