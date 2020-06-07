<template>
  <div class="profile">
    <h1>{{$t("profile.name")}}</h1>
    <div class="current-path">{{$t('profile.path')}}</div>
    <div class="profile-logged-in" v-if="this.currentUser != null">
      <div class="profile-logged-in-info">
        <div class="profile-logged-in-info-image-holder">
          <img :src="'/images/' + currentUser.img" alt />
          <h4>{{currentUser.username}}</h4>
        </div>
        <div class="profile-logged-in-info-text-holder">
          <div>
            <p>{{$t('profile.firstName')}}</p>
            <span>{{currentUser.firstname}}</span>
          </div>

          <div>
            <p>{{$t('profile.lastName')}}</p>
            <span>{{currentUser.lastname}}</span>
          </div>

          <div>
            <p>{{$t('profile.sex')}}</p>
            <span>{{currentUser.sex}}</span>
          </div>
        </div>
        <div class="profile-logged-in-info-cnotrol-holder">
          <div>
            <p>{{$t('profile.changeUsername')}}</p>
            <p>{{$t('profile.changePassword')}}</p>
          </div>
          <p @click="signOut()">{{$t('profile.logOut')}}</p>
        </div>
      </div>
      <div class="profile-logged-in-data">
        <h3>{{$t('profile.scheduled')}}</h3>

        <div
          v-for="scheduleWorkout in this.currentUser.schedule"
          :key="scheduleWorkout.workout.id"
          class="profile-logged-in-data-holder"
        >
          <div class="profile-logged-in-data-cards-holder">
            <WorkoutHomePage :workout="scheduleWorkout.workout" />
          </div>
          <h4
            @click="cancelSchedule(scheduleWorkout)"
            class="profile-logged-in-data-cancel-holder"
          >{{$t("profile.cancelScheduled")}}</h4>
        </div>
      </div>
    </div>
    <div class="profile-logged-out" v-else>
      <div class="profile-logged-out-intro">
        <h4>{{$t("profile.notLoggedIn")}}</h4>
        <div class="profile-logged-out-intro-buttons">
          <p @click="openSignIn()">{{$t("profile.logIn")}}</p>
          <p @click="openCreateAccount()">{{$t("profile.makeAcc")}}</p>
        </div>
      </div>
      <div class="profile-logged-out-login hidden">
        <input type="text" :placeholder="$t('profile.username')" v-model="username" />
        <input type="text" :placeholder="$t('profile.password')" v-model="password" />
        <p @click="signIn()">{{$t("profile.logIn")}}</p>
      </div>

      <div class="profile-logged-out-register hidden">
        <input type="text" :placeholder="$t('profile.username')" v-model="username" />
        <input type="text" :placeholder="$t('profile.password')" v-model="password" />

        <input type="text" placeholder="Email..." v-model="email" />

        <input type="text" :placeholder="$t('profile.firstNameSignUp')" v-model="firstname" />
        <input type="text" :placeholder="$t('profile.lastNameSignUp')" v-model="lastname" />
        <div class="gender-selector-title">
          <span>{{$t("profile.sex")}}</span>
          <div class="gender-selector">
            <input type="radio" v-model="sex" value="male" />
            <label for="male">{{$t("profile.male")}}</label>
            <input type="radio" v-model="sex" value="female" />
            <label for="female">{{$t("profile.female")}}</label>
          </div>
        </div>

        <p @click="createAccount()">{{$t("profile.makeAcc")}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutHomePage from "@/components/WorkoutHomePage.vue";

export default {
  name: "Profile",
  components: {
    WorkoutHomePage
  },
  data() {
    return {
      currentUser: null,
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      sex: "",
      img: "",
      maleImg: "default_male_picture.png",
      femaleImg: "default_female_picture.png",
      id: null
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  },
  methods: {
    signOut() {
      this.currentUser = null;
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    },
    openSignIn() {
      this.setHidden();
      document
        .querySelector(".profile-logged-out-login")
        .classList.remove("hidden");
    },
    signIn() {
      let users = JSON.parse(localStorage.getItem("users"));
      //console.log(this.username);
      let foundUser = users.find(elem => elem.username == this.username);

      if (foundUser != null) {
        if (this.password == foundUser.password) {
          this.currentUser = foundUser;
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        } else {
          alert("Wrong password!");
        }
      } else {
        alert("Wrong username!");
      }

      this.password = "";
      this.username = "";
    },
    openCreateAccount() {
      this.setHidden();
      document
        .querySelector(".profile-logged-out-register")
        .classList.remove("hidden");
    },
    createAccount() {
      if (
        this.username != "" &&
        this.password != "" &&
        (this.email != "") & (this.firstname != "") &&
        this.lastname != "" &&
        this.sex != ""
      ) {
        let users = JSON.parse(localStorage.getItem("users"));
        this.id = users[users.length - 1].id + 1;
        this.img = this.sex == "male" ? this.maleImg : this.femaleImg;
        let newUser = {
          id: this.id,
          password: this.password,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          sex: this.sex,
          img: this.img,
          ratedWorkout: [],
          schedule: [],
          visitedWorkout: []
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      }

      this.username = this.password = this.email = this.firstname = this.lastname = this.sex =
        "";
    },
    cancelSchedule(workout) {
      let newScheduleArray = [];
      for (let i = 0; i < this.currentUser.schedule.length; i++) {
        if (workout.workout.id != this.currentUser.schedule[i].workout.id) {
          newScheduleArray.push(this.currentUser.schedule[i]);
        }
      }

      //Konfiguracija
      this.currentUser.schedule = newScheduleArray;
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));

      let allUsers = JSON.parse(localStorage.getItem("users"));
      let index = this.findIndex(allUsers, this.currentUser);
      allUsers[index] = this.currentUser;
      localStorage.setItem("users", JSON.stringify(allUsers));

      //Konfiguracija workout-a
      let allWorkouts = JSON.parse(localStorage.getItem("workouts"));
      index = this.findIndex(allWorkouts, workout.workout);
      allWorkouts[index].availableSpots[0]++;
      localStorage.setItem("workouts", JSON.stringify(allWorkouts));
    },
    setHidden() {
      document
        .querySelector(".profile-logged-out-login")
        .classList.add("hidden");
      document
        .querySelector(".profile-logged-out-register")
        .classList.add("hidden");
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
    }
  }
};
</script>

<style>
.profile {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.profile h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

/*Logged in*/
.profile-logged-in {
}

.profile-logged-in-info {
  display: flex;
  border: solid 3px var(--var-yellow);
}

.profile-logged-in-info-image-holder {
  max-width: 20%;
  min-width: 350px;
  background: var(--var-yellow);
  padding-top: 2%;
  padding-bottom: 1%;
}
.profile-logged-in-info-image-holder img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin: auto;
}
.profile-logged-in-info-image-holder h4 {
  font-size: 2.5rem;
  font-weight: bold;
}

.profile-logged-in-info-text-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: whitesmoke;
}
.profile-logged-in-info-text-holder p {
  display: inline-block;
  margin-right: 5px;
  padding-left: 2%;
  font-size: 3rem;
  color: var(--var-navy);
  font-weight: bold;
}
.profile-logged-in-info-text-holder span {
  color: var(--var-navy);
  font-size: 2.5rem;
  font-weight: 600;
}

.profile-logged-in-info-cnotrol-holder {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--var-navy);
}
.profile-logged-in-info-cnotrol-holder p,
.profile-logged-out-intro-buttons p,
.profile-logged-out-login p,
.profile-logged-out-register p {
  background: var(--var-yellow);
  color: var(--var-red);
  padding: 10px;
  line-height: 1.5rem;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
}
.profile-logged-in-info-cnotrol-holder p:hover,
.profile-logged-out-intro-buttons p:hover,
.profile-logged-out-login p:hover,
.profile-logged-out-register p:hover {
  color: var(--var-yellow);
  background: var(--var-red);
}

.profile-logged-in-data {
  width: 100%;
}
.profile-logged-in-data h3 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  padding: 10px;
}

.profile-logged-in-data-holder {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.profile-logged-in-data-cards-holder {
  width: 80%;
}

.profile-logged-in-data-cancel-holder {
  background: var(--var-yellow);
  color: var(--var-red);
  padding: 10px;
  line-height: 1.8rem;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2.2rem;
  font-weight: 600;
}
.profile-logged-in-data-cancel-holder:hover {
  color: var(--var-yellow);
  background: var(--var-red);
}

/*Logged out*/
.profile-logged-out {
}

.hidden {
  display: none !important;
}

.profile-logged-out-intro {
  margin: 20px auto;
}

.profile-logged-out-intro h4 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--var-nevy);
}

.profile-logged-out-intro-buttons {
  width: 60%;
  margin: auto;
}

.profile-logged-out-login,
.profile-logged-out-register {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 45%;
  min-height: 300px;
  margin: auto;
  padding: 15px;
  border-radius: 15px;
  background: var(--var-navy);
}

.profile-logged-out-login input,
.profile-logged-out-register input {
  width: 60%;
  border-radius: 10px;
  padding: 10px;
  border: solid 1px var(--var-yellow);
}
.profile-logged-out-register input {
  margin: 12px;
}
.gender-selector-title {
  background: whitesmoke;
  border-radius: 10px;
  width: 50%;
  margin: 12px;
}
.gender-selector-title span {
  color: var(--var-navy);
  font-size: 1.2rem;
  width: 10%;
}
.gender-selector {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gender-selector input {
  width: 20px;
  margin: 0px;
  margin-left: 10px;
}

@media (max-width: 900px) {
  .profile h1 {
    font-size: 3rem;
  }
  .profile-logged-in-info-image-holder img {
    height: 150px;
    width: 150px;
  }
  .profile-logged-in-info-image-holder {
    width: 25%;
    min-width: 200px;
  }
  .profile-logged-in-info-image-holder h4,
  .profile-logged-out-intro h4 {
    font-size: 1.5rem;
  }
  .profile-logged-in-info-text-holder p {
    font-size: 2rem;
  }
  .profile-logged-in-info-text-holder span {
    font-size: 1.5rem;
  }
  .profile-logged-in-info-cnotrol-holder p,
  .profile-logged-out-intro-buttons p,
  .profile-logged-out-login p,
  .profile-logged-out-register p {
    font-size: 1.2rem;
    line-height: 1rem;
  }
  .profile-logged-in-data h3 {
    font-size: 2rem;
  }

  .profile-logged-in-data-cancel-holder {
    font-size: 2rem;
  }
}
</style>