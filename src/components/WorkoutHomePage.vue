<template>
  <div class="workout-home-page">
    <div class="workout-home-page-image">
      <img :src="'/images/' + workout.imgs[0]" alt />
    </div>
    <div class="workout-home-page-text">
      <h3>{{ workout.name }}</h3>
      <p>{{ workout.description }}</p>

      <div id="workout-home-page-text-bottom">
        <router-link
          :to="'/service/training/trainingDetails/'+workout.id"
          id="workout-home-page-details"
        >
          {{
          $t("home.goToWorkout")
          }}
        </router-link>
        <div
          class="workout-card-rateAndComment"
          @click="openModal(`rateAndCommentModal-${workout.id}`)"
        >
          <i class="fas fa-comment-alt"></i>
          /
          <i class="fas fa-star"></i>
        </div>
        <span id="workout-home-page-rating">{{ $t("home.workoutRating") }}{{ workout.rate }}</span>
      </div>
    </div>
    <modal :name="'rateAndCommentModal-' + workout.id" :height="750" :pivotY="0.7">
      <div
        class="rate-and-comment-modal"
        @mouseenter="loadModal(`rateAndCommentModal-${workout.id}`)"
      >
        <i
          id="close-rateAndCommentModal"
          class="fas fa-times-circle"
          @click="$modal.hide(`rateAndCommentModal-${workout.id}`)"
        ></i>
        <div>
          <h3>{{ $t("workout.rateCommentModal.rateUs") }}</h3>
          <div class="rate-and-comment-modal-stars">
            <i id="rateStar1" class="fas fa-star" @click="rateUs(1)"></i>
            <i id="rateStar2" class="fas fa-star" @click="rateUs(2)"></i>
            <i id="rateStar3" class="fas fa-star" @click="rateUs(3)"></i>
            <i id="rateStar4" class="fas fa-star" @click="rateUs(4)"></i>
            <i id="rateStar5" class="fas fa-star" @click="rateUs(5)"></i>
          </div>
        </div>

        <div>
          <hr />

          <h3>{{ $t("workout.rateCommentModal.comments") }}</h3>

          <div class="rate-and-comment-modal-add-comment">
            <input
              type="text"
              v-model="newComment"
              :placeholder="$t('workout.rateCommentModal.comment')"
            />
            <i class="fas fa-plus-circle" @click="addComment()"></i>
          </div>

          <div class="workout-modal-div-all-comments">
            <div
              class="workout-modal-div-comment"
              v-for="comment in workout.comments"
              :key="comment.id"
            >
              <div class="workout-modal-div-comment-user">
                <span>{{ $t("workout.rateCommentModal.user") }}</span>
                <span>{{ comment.user }}</span>
              </div>
              <p>{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "WourkoutHomePage",
  props: ["workout"],
  data() {
    return {
      newComment: "",
      currentWorkoutId: ""
    };
  },
  methods: {
    openModal(name) {
      this.$modal.show(name);
    },
    loadModal(name) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser != null) {
        let workoutId = name.split("-")[1];
        this.currentWorkoutId = workoutId;
        let rating = currentUser.ratedWorkout.find(
          elem => elem.id == workoutId
        );
        if (rating != null) {
          this.rateUs(rating.rate);
        }
      }
    },
    addComment() {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser == null || this.newComment === "") {
        console.log("Not logged in or no new comment");
        return;
      }

      let workouts = JSON.parse(localStorage.getItem("workouts"));

      let newId;
      if (this.workout.comments.length > 0) {
        let oldComment = this.workout.comments[
          this.workout.comments.length - 1
        ];
        newId = oldComment.id + 1;
      } else {
        newId = 1;
      }

      let newComment = {
        id: newId,
        user: currentUser.username,
        text: this.newComment
      };

      //let currentWorkout =
      this.workout.comments.push(newComment);
      workouts[this.workout.id - 1].comments.push(newComment);
      localStorage.setItem("workouts", JSON.stringify(workouts));

      this.newComment = "";
    },

    rateUs(stars) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser == null) {
        console.log("Not logged in");
        return;
      }

      let starsName = [
        "rateStar1",
        "rateStar2",
        "rateStar3",
        "rateStar4",
        "rateStar5"
      ];
      for (let i = 0; i < stars; i++) {
        let star = document.querySelector(`#${starsName[i]}`);
        star.classList.add("rate-and-comment-modal-stars-selected");
      }
      for (let i = stars; i < 5; i++) {
        let star = document.querySelector(`#${starsName[i]}`);
        star.classList.remove("rate-and-comment-modal-stars-selected");
      }

      let users = JSON.parse(localStorage.getItem("users"));
      let workouts = JSON.parse(localStorage.getItem("workouts"));
      let newRate = this.workout.rate * this.workout.timesRated + stars;

      //Check if I already rated this one -> just change the rating or just add
      let rating = currentUser.ratedWorkout.find(
        elem => elem.id == this.currentWorkoutId
      );
      if (rating != null) {
        //Already rated -> just change
        newRate -= rating.rate;
        let index = this.findIndex(currentUser.ratedWorkout, rating);
        currentUser.ratedWorkout[index] = { id: rating.id, rate: stars };
      } else {
        //Never rated before
        this.workout.timesRated++;
        workouts[this.workout.id - 1].timesRated++;
        currentUser.ratedWorkout.push({ id: this.workout.id, rate: stars });
      }
      newRate =
        Math.round((newRate / this.workout.timesRated + Number.EPSILON) * 100) /
        100;
      this.workout.rate = newRate;
      workouts[this.workout.id - 1].rate = newRate;
      users[currentUser.id - 1] = currentUser;

      console.log(users);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("workouts", JSON.stringify(workouts));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    },

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
  }
};
</script>

<style>
.workout-home-page {
  display: flex;
  width: 100%;
  border: solid 2px var(--var-navy);
  margin-bottom: 5px;
  max-height: 350px;
}

.workout-home-page-image {
  border: solid 2px var(--var-navy);
  flex-basis: 40%;
}

.workout-home-page-image img {
  width: 100%;
  height: 100%;
}

.workout-home-page-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  background: var(--var-navy);
  padding: 2%;
  padding-bottom: 5px;
}

.workout-home-page-text h3 {
  color: var(--var-red);
  font-size: 2rem;
}

.workout-home-page-text p {
  color: var(--var-red) !important;
}
#workout-home-page-text-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--var-yellow);
  margin-bottom: 10px;
}

#workout-home-page-rating {
  font-weight: lighter;
}

#workout-home-page-details {
  color: var(--var-yellow);
  font-weight: lighter;
}

#workout-home-page-details:hover {
  font-weight: 500;
}

.workout-card-rateAndComment {
  padding: 1%;
  margin-bottom: 0px;
  display: inline-block;
  width: 15%;
}

.workout-card-rateAndComment:hover {
  color: var(--var-navy);
  background: var(--var-yellow);
  border-radius: 5px;
  cursor: pointer;
}
/*Modal-------------------*/
.rate-and-comment-modal {
  display: flex;
  flex-direction: column;
  background: whitesmoke;
}

.rate-and-comment-modal h3 {
  font-weight: 600;
  font-size: 2rem !important;
  text-align: center !important;
}

.rate-and-comment-modal i {
  cursor: pointer;
}
/*X*/
#close-rateAndCommentModal {
  align-self: flex-end;
  color: var(--var-navy);
  font-size: 2rem;
  font-weight: bold;
  padding: 1%;
}

#close-rateAndCommentModal:hover {
  color: var(--var-red);
}

/*Rate us*/
.rate-and-comment-modal-stars {
  margin: auto;
  color: whitesmoke;
  background: var(--var-navy);
  width: 25%;
  padding: 5px 0px;
  border-radius: 10px;
}

.rate-and-comment-modal-stars-selected {
  color: var(--var-yellow);
}

.rate-and-comment-modal-stars i {
  margin: 2%;
}

.rate-and-comment-modal-stars:hover > i {
  color: var(--var-yellow);
}

.rate-and-comment-modal-stars i:hover ~ i {
  color: whitesmoke;
}

/*Comment part*/
.rate-and-comment-modal-add-comment {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0px;
}

.rate-and-comment-modal-add-comment i {
  font-size: 1.5rem;
  margin-right: 5%;
}

.rate-and-comment-modal-add-comment i:hover {
  color: var(--var-yellow);
  font-weight: bold;
}

.rate-and-comment-modal-add-comment input {
  width: 80%;
  margin: auto;
  justify-self: flex-start;
  border: solid 1px var(--var-navy);
  border-radius: 5px;
  padding: 1.5%;
}

.workout-modal-div-all-comments {
  overflow: scroll;
  min-height: 472px !important;
  max-height: 472px;
}

.workout-modal-div-comment {
  display: flex;
  flex-direction: column;
  margin: 2% 10%;
  width: 80%;
  box-shadow: 3px 3px 5px 0px rgba(40, 51, 74, 1);
}
.workout-modal-div-comment p {
  margin: 0px !important;
  color: var(--var-navy);
  text-align: left;
  padding-left: 10px;
}
.workout-modal-div-comment-user {
  align-self: flex-start;
  padding: 5px;
  padding-bottom: 0px;
}

.workout-modal-div-comment span {
  font-size: 1rem;
  font-weight: bold;
  color: var(--var-navy);
}

@media (max-width: 900px) {
  .workout-card-rateAndComment {
    font-size: 0.75rem;
  }
}
</style>
