<template>
  <div class="workouts">
    <h1>{{$t("workoutPage.name")}}</h1>
    <div class="current-path">{{$t('workoutPage.path')}}</div>
    <div class="workouts-main">
      <div class="workouts-main-type">
        <h3>{{$t("workoutPage.type")}}</h3>
        <h4 @click="pickType('all')">{{$t("workoutPage.all")}}</h4>
        <h4 @click="pickType('yoga')">{{$t("workoutPage.yoga")}}</h4>
        <h4 @click="pickType('pilates')">{{$t("workoutPage.pilates")}}</h4>
        <h4 @click="pickType('core')">{{$t("workoutPage.core")}}</h4>
        <h4 @click="pickType('cardio')">{{$t("workoutPage.cardio")}}</h4>
        <br />
        <h3>{{$t("workoutPage.sort")}}</h3>
        <h4 @click="sort('name')">{{$t("workoutPage.byName")}}</h4>
        <h4 @click="sort('duration')">{{$t("workoutPage.byDuration")}}</h4>
        <h4 @click="sort('level')">{{$t("workoutPage.byLevel")}}</h4>
      </div>
      <div class="workouts-main-content">
        <div v-for="workout in this.workouts" :key="workout.id" class="workouts-main-content-cards">
          <div class="workouts-main-cards-holder">
            <WorkoutHomePage :workout="workout" />
          </div>
          <h4
            @click="schedule(workout)"
            v-if="workout.availableSpots[0]>0"
          >{{$t("workoutPage.schedule")}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutHomePage from "@/components/WorkoutHomePage.vue";
export default {
  name: "Workout",
  components: {
    WorkoutHomePage
  },
  data() {
    return {
      workouts: null,
      pickTypeValue: "all",
      sortType: ""
    };
  },
  methods: {
    pickType(type) {
      this.pickTypeValue = type;
      this.workouts = JSON.parse(localStorage.getItem("workouts"));
      if (type == "all") {
        return;
      }
      let selectedWorkouts = [];
      this.workouts.forEach(currWorkout => {
        if (currWorkout.type == type) {
          selectedWorkouts.push(currWorkout);
        }
      });
      this.workouts = selectedWorkouts;
    },
    sort(sortType) {
      this.sortType = sortType;
      switch (sortType) {
        case "name":
          this.workouts.sort(this.compare);
          break;
        case "duration":
          this.workouts.sort(function(a, b) {
            return b.duration - a.duration;
          });
          break;
        case "level":
          this.workouts.sort(function(a, b) {
            return b.difficulty - a.difficulty;
          });
          break;
        default:
          break;
      }
    },
    schedule(scheduleWorkout) {
      let currUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currUser != null) {
        let exit = false;
        for (let i = 0; i < currUser.schedule.length; i++) {
          if (scheduleWorkout.id == currUser.schedule[i].workout.id) {
            exit = true;
            alert("Already scheduled!");
            break;
          }
        }

        if (exit) {
          return;
        }

        scheduleWorkout.availableSpots[0]--;

        this.workouts = JSON.parse(localStorage.getItem("workouts"));
        let index = this.findIndex(this.workouts, scheduleWorkout);
        this.workouts[index] = scheduleWorkout;
        localStorage.setItem("workouts", JSON.stringify(this.workouts));

        this.pickType(this.pickTypeValue);
        this.sort(this.sortType);

        //Sad ide deo sa korisnikom
        currUser.schedule.push({
          workout: scheduleWorkout,
          date: ""
        });
        console.log(currUser);
        localStorage.setItem("currentUser", JSON.stringify(currUser));

        let allUsers = JSON.parse(localStorage.getItem("users"));
        index = this.findIndex(allUsers, currUser);
        allUsers[index] = currUser;
        localStorage.setItem("users", JSON.stringify(allUsers));
      } else {
        alert("You are not logged in!");
      }
    },
    findIndex(array, elem) {
      let i = 0;
      while (true) {
        if (array[i].id == elem.id) {
          break;
        }
        i++;
      }
      return i;
    },
    compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const workoutA = a.name.toUpperCase();
      const workoutB = b.name.toUpperCase();

      let comparison = 0;
      if (workoutA > workoutB) {
        comparison = 1;
      } else if (workoutA < workoutB) {
        comparison = -1;
      }
      return comparison;
    }
  },
  created() {
    this.workouts = JSON.parse(localStorage.getItem("workouts"));
    this.pickTypeValue = "all";
    this.sortType = "";
  }
};
</script>

<style>
.workouts {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.workouts h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

.workouts-main {
}

/*Type*/
.workouts-main-type {
  position: fixed;
  top: 90px;
  width: 20%;
  max-width: 200px;
  height: 100%;
  padding-top: 4%;
  background: var(--var-navy);
  color: var(--var-yellow);
}
.workouts-main-type h3 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 10px;
  background: var(--var-yellow);
  color: var(--var-red);
}
.workouts-main-type h4 {
  font-size: 1.6rem;
  font-weight: 600;
  background: var(--var-yellow);
  color: var(--var-navy);
  padding: 5px;
  margin-top: 20px;
  cursor: pointer;
}
.workouts-main-type h4:hover {
  font-weight: bold;
}

/*Content*/
.workouts-main-content {
  width: 80%;
  float: right;
}

.workouts-main-content-cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.workouts-main-content-cards h4 {
  width: 15%;
  background: var(--var-yellow);
  color: var(--var-red);
  padding: 10px;
  line-height: 1.5rem;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
}

.workouts-main-content-cards h4:hover {
  color: var(--var-yellow);
  background: var(--var-red);
}

.workouts-main-cards-holder {
  padding: 10px;
  width: 80%;
}

@media (max-width: 900px) {
  .workouts h1 {
    font-size: 3rem;
  }
  .workouts-main-type h3 {
    font-size: 1.5rem;
  }
  .workouts-main-content-cards h4 {
    font-size: 1.2rem;
    line-height: 1rem;
  }
  .workouts-main-type h4 {
    font-size: 1rem;
  }
}
</style>