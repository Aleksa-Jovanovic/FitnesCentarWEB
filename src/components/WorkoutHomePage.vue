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
        <div class="workout-card-rateAndComment" @click="openModal()">
          <i class="fas fa-comment-alt"></i>
          /
          <i class="fas fa-star"></i>
        </div>
        <span id="workout-home-page-rating"
          >{{ $t("home.workoutRating") }}{{ workout.rate }}</span
        >
      </div>
    </div>
    <modal name="rateAndCommentModal">
      <div class="rate-and-comment-modal">
        <i
          id="close-rateAndCommentModal"
          class="fas fa-times-circle"
          @click="$modal.hide('rateAndCommentModal')"
        ></i>
        <div>
          <h3>Rate us:</h3>
          <i id="rateStar1" class="fas fa-star"></i>
          <i id="rateStar2" class="fas fa-star"></i>
          <i id="rateStar3" class="fas fa-star"></i>
          <i id="rateStar4" class="fas fa-star"></i>
          <i id="rateStar5" class="fas fa-star"></i>
        </div>

        <div>
          <hr />
          <div class="rate-and-comment-modal-comment-top">
            <h3>Comments</h3>
            <i class="fas fa-plus-circle"></i>
          </div>
          <div
            class="workout-modal-div-comment"
            v-for="comment in workout.comments"
            :key="comment.text"
          >
            <p>comment.text</p>
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
  methods: {
    openModal() {
      this.$modal.show("rateAndCommentModal");
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
  max-height: 300px;
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
}

.rate-and-comment-modal h3 {
  font-weight: 600;
}

.rate-and-comment-modal i {
  cursor: pointer;
}

#close-rateAndCommentModal {
  align-self: flex-end;
  color: var(--var-navy);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1%;
}
#close-rateAndCommentModal:hover {
  color: var(--var-red);
}

.rate-and-comment-modal-comment-top {
  position: relative;
}

.rate-and-comment-modal-comment-top h3 {
  display: inline-block;
}

.rate-and-comment-modal-comment-top i {
  position: absolute;
  display: inline-block;
  right: 2%;
  top: 50%;
  transform: translate(0%, -50%);
  font-size: 1.2rem;
}

.rate-and-comment-modal-comment-top i:hover {
  color: var(--var-yellow);
  font-weight: bold;
}

@media (max-width: 900px) {
  .workout-card-rateAndComment {
    font-size: 0.75rem;
  }
}
</style>
