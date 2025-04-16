function getRandomvalue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playersHealth: 100,
      monstersHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monstersHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playersHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomvalue(5, 12);
      this.monstersHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomvalue(8, 15);
      this.playersHealth -= attackValue;
    },
  },
});

app.mount("#game");
