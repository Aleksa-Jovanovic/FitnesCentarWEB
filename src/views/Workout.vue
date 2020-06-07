<template>
  <div class="workouts">
    <h1>{{$t("workoutPage.name")}}</h1>
    <div class="current-path">{{$t('workoutPage.path')}}</div>
    <div class="workouts-main">
      <div class="workouts-main-type">
        <h3>{{$t("workoutPage.type")}}</h3>
        <h4>{{$t("workoutPage.yoga")}}</h4>
        <h4>{{$t("workoutPage.pilates")}}</h4>
        <h4>{{$t("workoutPage.core")}}</h4>
        <h4>{{$t("workoutPage.cardio")}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Workout"
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
  display: flex;
}

.workouts-main-type {
  position: fixed;
  width: 20%;
  height: 80%;
  background: var(--var-navy);
  color: var(--var-yellow);
}
</style>