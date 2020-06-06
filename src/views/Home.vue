<template>
  <div class="home">
    <h1>{{ $t("home.name") }}</h1>
    <div class="current-path">{{ $t("home.path") }}</div>
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
      <p>{{ $t("home.intro") }}</p>

      <h2>{{ $t("home.bestWorkout") }}</h2>
      <div class="home-workouts">
        <WorkoutHomePage
          v-for="bestWorkout in bestWorkouts"
          :key="bestWorkout.id"
          :workout="bestWorkout"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import workout from "@/data/workout.js";
import user from "@/data/user.js";
import WorkoutHomePage from "@/components/WorkoutHomePage.vue";

export default {
  name: "Home",
  components: {
    WorkoutHomePage
  },
  data() {
    return {
      workouts: null,
      users: null,
      bestWorkouts: []
    };
  },
  created() {
    //Import u localStorage i export ako vec postoji!
    if (localStorage.getItem("workouts") == null) {
      this.workouts = workout();
      localStorage.setItem("workouts", JSON.stringify(this.workouts));
    } else {
      this.workouts = JSON.parse(localStorage.getItem("workouts"));
    }
    if (localStorage.getItem("users") == null) {
      this.users = user;
      localStorage.setItem("users", JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
    }
    //Test
    localStorage.setItem("currentUser", JSON.stringify(this.users[1]));

    this.workouts.sort(function(a, b) {
      return b.rate - a.rate;
    });
    //Pusovanje najboljih workouta
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
  position: relative;
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

.home .container h2 {
  font-size: 2.5rem;
  padding: 5px;
  font-weight: 600;
}

@media (max-width: 900px) {
  .home h1 {
    font-size: 3rem;
  }
}
</style>
