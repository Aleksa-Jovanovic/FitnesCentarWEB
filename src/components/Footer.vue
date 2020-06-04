<template>
  <div class="footer">
    <p>Copyright 2020, Aleksa Jovanovic, Odsek za softversko inzenjerstvo Elektrotehnicki fakultet Univerzitet u Beogradu</p>
  </div>
</template>

<script >
export default {
  name: "Footer"
};
</script > 

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5%;
  display: flex;
  justify-content: center;
  background: var(--var-navy);
  color: var(--var-yellow);
  z-index: 5;
}

.footer p {
  position: absolute;
  margin: 0;
  font-size: 0.8rem;
  right: 0;
  bottom: 0;
  padding-right: 1%;
  font-weight: normal;
}
</style>
