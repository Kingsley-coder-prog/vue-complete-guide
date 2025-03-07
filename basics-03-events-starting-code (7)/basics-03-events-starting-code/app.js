const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kingsley";
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
