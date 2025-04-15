const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    // confirmInput() {
    //   this.confirmedName = this.name;
    // },
    // submitForm() {
    //   alert("Submitted");
    // },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kingsley";
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
