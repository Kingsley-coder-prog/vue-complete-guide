function getRandomvalue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playersHealth: 100,
      monstersHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monstersHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playersHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playersHealth(value) {
      if (value <= 0 && this.monstersHealth <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Player lost
        this.winner = "monster";
      }
    },
    monstersHealth(value) {
      if (value <= 0 && this.playersHealth <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Monster lost
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomvalue(5, 12);
      this.monstersHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomvalue(8, 15);
      this.playersHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomvalue(10, 25);
      this.monstersHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomvalue(8, 20);
      if (this.playersHealth + healValue > 100) {
        this.playersHealth = 100;
      } else {
        this.playersHealth += healValue;
      }
      this.attackPlayer();
    },
  },
});

app.mount("#game");
