<template>
  <div id="nav">
    <div class="nav-brand">
      <img id="logo" src="@/assets/fitneslogo.png" alt />
    </div>

    <!--LargeMenu-->
    <div class="large-menu">
      <router-link to="/">
        <i class="fas fa-home"></i>
        {{ $t("header.home") }}
      </router-link>

      <!--Service-->
      <div class="dropdown">
        <router-link to="/service">{{ $t("header.service") }}</router-link>
        <div class="dropdown-menu dropdown-component">
          <router-link to="/service/training" class="dropdown-item link-item">
            {{
            $t("header.training")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link
            to="/service/nutritionist"
            class="dropdown-item link-item"
          >{{ $t("header.nutritionist") }}</router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/service/massage" class="dropdown-item link-item">
            {{
            $t("header.massage")
            }}
          </router-link>
        </div>
      </div>
      <!--/Service-->

      <router-link to="/scheduling">{{ $t("header.scheduling") }}</router-link>
      <router-link to="/about">{{ $t("header.about") }}</router-link>
      <router-link to="/profile">{{ $t("header.profile") }}</router-link>

      <!--Language--
      <div class="dropdown">
        <button
          class="btn"
          type="menu"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i id="language" class="fas fa-language"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p class="dropdown-item language-item">SR</p>
          <div class="dropdown-divider"></div>
          <p class="dropdown-item language-item">EN</p>
        </div>
      </div>
      --/Language-->
      <Language />
    </div>
    <!--/LargeMenu-->

    <!--SmallMenu-->
    <div class="small-menu">
      <div class="dropdown">
        <i class="fas fa-bars"></i>
        <div class="dropdown-menu small-dropdown-component">
          <router-link to="/" class="dropdown-item link-item">
            {{
            $t("header.home")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/service" class="dropdown-item link-item">
            {{
            $t("header.service")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/scheduling" class="dropdown-item link-item">
            {{
            $t("header.scheduling")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/about" class="dropdown-item link-item">
            {{
            $t("header.about")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/profile" class="dropdown-item link-item">
            {{
            $t("header.profile")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <Language class="dropmenu" />
        </div>
      </div>
    </div>
    <!--/SmallMenu-->
  </div>
</template>

<script>
import Language from "@/components/Language.vue";

export default {
  name: "Header",
  components: { Language },
  data() {
    return {};
  }
};
</script>

<style>
#nav {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background: var(--var-navy);
  border-bottom: solid var(--var-yellow) 1px;
  border-left: solid var(--var-yellow) 7px;
}

.nav-brand {
  display: inline-block;
}
#logo {
  height: 70px;
}

.large-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.small-menu {
  display: none;
  font-size: 45px;
  align-self: center;
  color: var(--var-yellow);
}

.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu.dropdown-component {
  background: var(--var-navy) !important;
  /*border: solid white 1px;*/
}
.dropdown-menu.small-dropdown-component {
  left: -300%;
  background: var(--var-navy) !important;
}

a:hover.link-item {
  background: var(--var-navy) !important;
}
#nav a,
p {
  font-weight: normal;
  font-size: 24px;
  color: var(--var-yellow);
  margin-right: 1.5rem;
}
#nav a.router-link-exact-active {
  color: var(--var-red);
  background: var(--var-navy) !important;
}

/*.language-item {
  font-weight: bold !important;
  color: var(--var-navy) !important;
  margin: 0 !important;
  padding-left: 30% !important;
  cursor: pointer;
}
#language {
  position: relative;
  display: inline-block;
  margin-left: 1rem;
  font-size: 50px;
  color: var(--var-yellow);
}*/

@media (max-width: 1100px) {
  #nav a {
    font-weight: bold;
    font-size: 16px;
    color: var(--var-yellow);
    margin-right: 1.5rem;
  }
  #language {
    font-size: 30px;
  }
}

@media (max-width: 835px) {
  #nav a {
    font-size: 24px;
  }
  .large-menu {
    display: none;
  }
  .small-menu {
    display: inline-block;
  }
}
</style>
