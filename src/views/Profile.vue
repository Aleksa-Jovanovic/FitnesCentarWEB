<template>
  <div class="profile">
    <h1>{{$t("profile.name")}}</h1>
    <div class="current-path">{{$t('profile.path')}}</div>
    <div class="profile-logged-in" v-if="this.currentUser != null">Radi</div>
    <div class="profile-logged-out" v-else>NE radi</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  },
  signOut() {},
  singIn() {}
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
</style>