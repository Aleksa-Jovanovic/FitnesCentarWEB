<template>
  <div class="workout-home-page">
    <div class="workout-home-page-image">
      <img :src="'/images/' + workout.imgs[0]" alt />
    </div>
    <div class="workout-home-page-text">
      <h3>{{workout.name}}</h3>
      <p>{{workout.description}}</p>

      <div id="workout-home-page-text-bottom">
        <router-link to="/" id="workout-home-page-details">{{$t('home.goToWorkout')}}</router-link>
        <span id="workout-home-page-rating">{{$t('home.workoutRating')}}{{workout.rate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WourkoutHomePage",
  props: ["workout"]
};
</script>

<style>
.workout-home-page {
  display: flex;
  width: 100%;
  border: solid 2px var(--var-navy);
  margin-bottom: 5px;
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
}

#workout-home-page-rating {
  color: var(--var-yellow);
  font-weight: lighter;
}

#workout-home-page-details {
  color: var(--var-yellow);
  font-weight: lighter;
}
</style>