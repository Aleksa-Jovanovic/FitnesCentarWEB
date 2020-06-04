<template>
  <div class="workout-home-page">{{workout.id}}</div>
</template>

<script>
export default {
  name: "WourkoutHomePage",
  props: ["workout"]
};
</script>