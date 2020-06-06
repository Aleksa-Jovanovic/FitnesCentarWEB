<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
@import "./assets/styles/global.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  beforeCreate() {
    //Da ocisti stare localStorage
    //localStorage.clear();
  },
};
</script>
