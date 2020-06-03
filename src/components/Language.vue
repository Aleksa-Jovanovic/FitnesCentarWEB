<template>
  <div class="dropdown language-dropdown">
    <i class="btn">
      <i id="language-logo" class="fas fa-language"></i>
    </i>
    <div class="dropdown-menu dropdown-menu">
      <p class="dropdown-item language-item" v-on:click="setLocale('sr')">SR</p>
      <div class="dropdown-divider"></div>
      <p class="dropdown-item language-item" v-on:click="setLocale('en')">EN</p>
    </div>
  </div>
</template>

<script>
//import i18n from "../i18n";

export default {
  name: "Language",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
.language-dropdown .dropdown-menu {
  display: none !important;
}
.language-dropdown:hover .dropdown-menu {
  display: block !important;
}

.language-item {
  font-weight: bold !important;
  color: var(--var-navy) !important;
  margin: 0 !important;
  padding-left: 30% !important;
  cursor: pointer;
}
#language-logo {
  margin-left: 1rem;
  font-size: 50px;
  color: var(--var-yellow);
}
</style>
