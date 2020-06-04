<template>
  <div class="services">
    <h1>{{$t("service.name")}}</h1>
    <div class="current-path">{{$t('service.path')}}</div>
    <div id="div-service-main">
      <img id="service_background_img" src="@/assets/img/service_background.jpeg" alt />
      <div class="service-text-intro">
        <p id="service-inspiration">{{$t('service.inspiration')}}</p>
        <p id="service-inspiration2">{{$t('service.inspiration2')}}</p>
        <p id="service-offers">{{$t('service.offers')}}</p>
        <div id="div-service-offers">
          <router-link to="/service/training">{{$t('service.workoutOffer')}}</router-link>
          <router-link to="/service/nutritionist">{{$t('service.nutritionistOffer')}}</router-link>
          <router-link to="/service/massage">{{$t('service.massageOffer')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

 <router-link to="/service" class="dropdown-item link-item">
            {{
            $t("header.service")
            }}
          </router-link>

<script>
export default {
  name: "Services"
};
</script>

<style>
.services {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.services h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

#div-service-main {
  position: relative;
}

#service_background_img {
  width: 100%;
  height: 800px;
}

.service-text-intro {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 5px 10px;
  width: 60%;
  background: whitesmoke;
  box-shadow: 5px 6px 25px -7px rgba(40, 51, 74, 1);
  z-index: 1;
}

#service-inspiration {
  color: var(--var-red);
  font-size: 2rem;
  font-weight: 600;
}

#service-inspiration2 {
  color: var(--var-navy);
  font-size: 1.5rem;
  font-weight: normal;
}

#service-offers {
  color: var(--var-navy);
  font-size: 2rem;
  font-weight: bold;
  padding-left: 4%;
  align-self: flex-start;
  margin-bottom: 0px;
}

#div-service-offers {
  display: flex;
  justify-content: space-evenly;
  margin: 2% 5%;
  background: var(--var-navy);
  border-radius: 8px;
}

#div-service-offers a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--var-red);
}

#div-service-offers a:hover {
  color: var(--var-yellow);
  cursor: pointer;
}

@media (max-width: 900px) {
  #service-inspiration {
    font-size: 1.5rem;
  }
  #service-inspiration2,
  #service-offers,
  #div-service-offers a {
    font-size: 1rem;
  }

  .service-text-intro {
    width: 80%;
  }

  .services h1 {
    font-size: 3rem;
  }
}
</style>