<template>
  <div class="about">
    <h1>{{$t("about.name")}}</h1>
    <div class="current-path">{{$t('about.path')}}</div>
    <div class="about-content">
      <div class="about-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3730.9719740287314!2d-105.327498!3d20.75193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee15e840daef569!2sFitness%20Center%20Bucer%C3%ADas!5e0!3m2!1sen!2smx!4v1591552621916!5m2!1sen!2smx"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div class="about-text">
        <div class="about-text-holder">
          <p class="about-text-info-title">{{$t("about.location")}}</p>
          <span>México 200 #600, Plaza Riviera, 63733 Bucerías, Nay.</span>
        </div>
        <div class="about-text-holder">
          <p class="about-text-info-title">{{$t("about.contact")}}</p>
          <span>01 329 298 0048</span>
        </div>
      </div>
    </div>
    <div class="about-info">
      <p>{{$t("about.info1")}}</p>
      <p>{{$t("about.info2")}}</p>
    </div>
  </div>
</template>

<style>
.about {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.about h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;
}

.about-map {
  width: auto;
  padding-top: 10px;
}

.about-text-holder {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.about-text-holder span {
  font-size: 1.5rem;
  padding-bottom: 10px;
}
.about-text-info-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--var-navy);
}

.about-info {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--var-yellow);
  border-radius: 10px;
}

.about-info p {
  color: var(--var-navy);
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 20px;
  text-align: center;
}

@media (max-width: 900px) {
  .about-text-info-title {
    font-size: 1.5rem;
  }
  .about-text-holder span {
    font-size: 1.2rem;
  }
  .about-info p {
    font-size: 1.5;
  }
}
</style>
