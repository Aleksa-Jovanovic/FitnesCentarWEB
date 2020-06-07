<template>
  <div class="schedule">
    <h1>{{ $t("schedule.name") }}</h1>
    <div class="current-path">{{ $t("schedule.path") }}</div>
    <form action="">
      <div class="pdf-form">
        <div>
          <label for="">{{ $t("schedule.mobileNumber") }}</label>
          <input type="tel" v-model="number" />
        </div>
        <div>
          <label for="">{{ $t("schedule.date") }}</label>
          <input type="date" v-model="date" />
        </div>
        <div>
          <label for="">{{ $t("schedule.for") }}</label>
          <select v-model="scheduleFor">
            <option disabled value="">{{
              $t("schedule.disabledValue")
            }}</option>
            <option>{{ $t("schedule.nutrition") }}</option>
            <option>{{ $t("schedule.massage") }}</option>
          </select>
        </div>
        <textarea
          :placeholder="$t('schedule.info')"
          v-model="description"
        ></textarea>
        <p @click="savePDF()">{{ $t("schedule.submit") }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  name: "Schedule",
  data() {
    return {
      number: null,
      date: null,
      scheduleFor: "",
      description: "",
    };
  },
  methods: {
    test() {
      console.log(this.scheduleFor);
    },
    clearFields() {
      this.number = "";
      this.date = "";
      this.scheduleFor = "";
      this.description = "";
    },
    savePDF() {
      //console.log(this.$i18n.locale); Get locale
      let currUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currUser == null) {
        alert("You are not signed in");
        return;
      }

      let data;
      if (this.$i18n.locale == "en") {
        data =
          "Schedule for: " +
          this.scheduleFor +
          "\nFull name: " +
          currUser.firstname +
          " " +
          currUser.lastname +
          "\nE-mail: " +
          currUser.email +
          "\nPhone number: " +
          this.number +
          "\nDate: " +
          this.date +
          "\nDescription: " +
          this.description;
      } else {
        //On Serbian
        data =
          "Zakazivanje za: " +
          this.scheduleFor +
          "\nIme: " +
          currUser.firstname +
          " " +
          currUser.lastname +
          "\nE-posta: " +
          currUser.email +
          "\nBroj telefona: " +
          this.number +
          "\nDatum: " +
          this.date +
          "\nOpis: " +
          this.description;
      }

      let pdf = new jsPDF();
      let imgData =
        "data:image/png;base64,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";
      pdf.setFontSize(25);
      pdf.addImage(imgData, "PNG", 10, 10, 20, 20);
      pdf.text(data, 40, 40);
      pdf.save("test.pdf");
      this.clearFields();
    },
  },
};
</script>

<style>
.schedule {
  position: relative;
  padding-top: 90px;
  user-select: none !important;
}

.schedule h1 {
  background: var(--var-navy);
  color: var(--var-yellow);
  font-size: 4rem;
  font-weight: bold;
  margin: 0px;
  padding-top: 1%;
}

.pdf-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: var(--var-navy);
  color: var(--var-yellow);
  border-radius: 20px;
  width: 60%;
  margin: auto;
  min-height: 400px;
  margin-top: 50px;
}

.pdf-form input,
.pdf-form textarea,
.pdf-form select,
.pdf-form option {
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
}

.pdf-form label {
  font-size: 1.5rem;
  color: var(--var-yellow);
  font-weight: 600;
  margin-right: 20px;
}

.pdf-form p {
  background: var(--var-yellow);
  color: var(--var-red);
  padding: 10px;
  line-height: 1.5rem;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
}

.pdf-form p:hover {
  color: var(--var-yellow);
  background: var(--var-red);
}
</style>
