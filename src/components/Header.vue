<template>
  <div id="nav">
    <div class="nav-brand">
      <img id="logo" src="@/assets/fitneslogo.png" alt />
    </div>

    <!--LargeMenu-->
    <div class="large-menu">
      <router-link to="/" class="nav-link-hover">
        <i class="fas fa-home"></i>
        {{ $t("header.home") }}
      </router-link>

      <!--Service-->
      <div class="dropdown">
        <router-link to="/service" class="nav-link-hover">{{ $t("header.service") }}</router-link>
        <div class="dropdown-menu dropdown-component">
          <router-link to="/service/training" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.training")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link
            to="/service/nutritionist"
            class="dropdown-item link-item nav-link-hover"
          >{{ $t("header.nutritionist") }}</router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/service/massage" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.massage")
            }}
          </router-link>
        </div>
      </div>
      <!--/Service-->

      <router-link to="/scheduling" class="nav-link-hover">{{ $t("header.scheduling") }}</router-link>
      <router-link to="/about" class="nav-link-hover">{{ $t("header.about") }}</router-link>
      <router-link to="/profile" class="nav-link-hover">{{ $t("header.profile") }}</router-link>

      <Language />
    </div>
    <!--/LargeMenu-->

    <!--SmallMenu-->
    <div class="small-menu">
      <div class="dropdown">
        <i class="fas fa-bars"></i>
        <div class="dropdown-menu small-dropdown-component">
          <router-link to="/" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.home")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/service" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.service")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/scheduling" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.scheduling")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/about" class="dropdown-item link-item nav-link-hover">
            {{
            $t("header.about")
            }}
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="/profile" class="dropdown-item link-item nav-link-hover">
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
  user-select: none !important;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background: var(--var-navy);
  border-bottom: solid var(--var-yellow) 1px;
  border-left: solid var(--var-yellow) 7px;
  z-index: 5;
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

.nav-link-hover:hover {
  font-weight: bold !important;
}

#nav a.router-link-exact-active {
  color: var(--var-red);
  background: var(--var-navy) !important;
}

@media (max-width: 900px) {
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

/*@media (max-width: 835px) {
  #nav a {
    font-size: 24px;
  }
  .large-menu {
    display: none;
  }
  .small-menu {
    display: inline-block;
  }
}*/
</style>
