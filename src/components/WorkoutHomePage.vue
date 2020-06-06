<template>
  <div class="workout-home-page">
    <div class="workout-home-page-image">
      <img :src="'/images/' + workout.imgs[0]" alt />
    </div>
    <div class="workout-home-page-text">
      <h3>{{ workout.name }}</h3>
      <p>{{ workout.description }}</p>

      <div id="workout-home-page-text-bottom">
        <router-link to="/" id="workout-home-page-details">{{
          $t("home.goToWorkout")
        }}</router-link>
        <div
          class="workout-card-rateAndComment"
          @click="openModal(`rateAndCommentModal${workout.id}`)"
        >
          <i class="fas fa-comment-alt"></i>
          /
          <i class="fas fa-star"></i>
        </div>
        <span id="workout-home-page-rating"
          >{{ $t("home.workoutRating") }}{{ workout.rate }}</span
        >
      </div>
    </div>
    <modal
      :name="'rateAndCommentModal' + workout.id"
      :height="750"
      :pivotY="0.7"
    >
      <div class="rate-and-comment-modal">
        <i
          id="close-rateAndCommentModal"
          class="fas fa-times-circle"
          @click="$modal.hide(`rateAndCommentModal${workout.id}`)"
        ></i>
        <div>
          <h3>{{ $t("workout.rateCommentModal.rateUs") }}</h3>
          <i id="rateStar1" class="fas fa-star"></i>
          <i id="rateStar2" class="fas fa-star"></i>
          <i id="rateStar3" class="fas fa-star"></i>
          <i id="rateStar4" class="fas fa-star"></i>
          <i id="rateStar5" class="fas fa-star"></i>
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
      //currentWorkout = this.w
    };
  },
  methods: {
    openModal(name) {
      this.$modal.show(name);
    },
    addComment() {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser == null || this.newComment === "") {
        console.log("Not logged in or no new comment");
        return;
      }

      let workouts = JSON.parse(localStorage.getItem("workouts"));

      let oldComment = this.workout.comments[this.workout.comments.length - 1];
      let newId = oldComment.id + 1;
      let newComment = {
        id: newId,
        user: currentUser.username,
        text: this.newComment,
      };

      this.workout.comments.push(newComment);
      workouts[this.workout.id - 1].comments.push(newComment);
      localStorage.setItem("workouts", JSON.stringify(workouts));

      this.newComment = "";
    },
  },
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

.rate-and-comment-modal {
  display: flex;
  flex-direction: column;
  background: whitesmoke;
}

.rate-and-comment-modal h3 {
  font-weight: 600;
}

.rate-and-comment-modal i,
add-comment-modal i {
  cursor: pointer;
}

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

/*
.add-comment-modal .workout-card-mdoal-button {
  width: 25%;
  align-self: center;
  margin: 10%;
  padding: 1%;
  background: var(--var-navy);
  color: var(--var-yellow);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
}
.add-comment-modal .workout-card-mdoal-button:hover {
  color: var(--var-navy);
  background: var(--var-yellow);
}
*/
@media (max-width: 900px) {
  .workout-card-rateAndComment {
    font-size: 0.75rem;
  }
}
</style>
