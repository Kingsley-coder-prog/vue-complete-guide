const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {},
});

app.mount("#user-goal");
