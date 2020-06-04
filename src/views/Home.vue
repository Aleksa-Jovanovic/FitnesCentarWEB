<template>
  <div class="home">
    <h1>{{$t("home.name")}}</h1>

    <div class="home-pictures">
      <div class="home-picture">
        <img src="@/assets/img/home_gym.png" alt />
      </div>
      <div class="home-picture">
        <img src="@/assets/img/home_nutritional.png" alt />
      </div>
      <div class="home-picture">
        <img src="@/assets/img/home_massage.jpg" alt />
      </div>
    </div>

    <div class="container">
      <p>{{$t("home.intro")}}</p>

      <h2>{{$t("home.bestWorkout")}}</h2>
      <div class="home-workouts">
        <WorkoutHomePage
          v-for="bestWorkout in bestWorkouts"
          :key="bestWorkout.id"
          :workout="bestWorkout"
        />
      </div>
      <p id="test-p">{{workouts[0].description}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import workout from "@/data/workout.js";
import WorkoutHomePage from "@/components/WorkoutHomePage.vue";

export default {
  name: "Home",
  components: {
    WorkoutHomePage
  },
  data() {
    return {
      workouts: null,
      bestWorkouts: []
    };
  },
  created() {
    this.workouts = workout();
    this.workouts.sort(function(a, b) {
      return b.rate - a.rate;
    });
    this.bestWorkouts.push(this.workouts[0]);
    this.bestWorkouts.push(this.workouts[1]);
    this.bestWorkouts.push(this.workouts[2]);
  },
  mounted() {
    //this.workouts = workout;
    //document.querySelector("#test-p").innerHTML = workout[0].description;
  }
};
</script>

<style>
.home {
  padding-top: 90px;
}
.home p {
  margin: 80px 0px;
  color: var(--var-navy);
}

.home h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 2%;
}

.home-pictures {
  display: flex;
  padding: 2% 0px;
  justify-content: space-around;
  background: var(--var-navy);
  /*border: solid 2px var(--var-red);*/
}
.home-picture {
  width: 32%;
}
.home-picture img {
  width: 100%;
  height: 100%;
}
</style>
