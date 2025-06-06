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
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monstersHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monstersHealth + "%" };
    },
    playerBarStyles() {
      if (this.playersHealth < 0) {
        return { width: "0%" };
      }
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
    startGame() {
      this.playersHealth = 100;
      this.monstersHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomvalue(5, 12);
      this.monstersHealth -= attackValue;
      this.addLogMessages("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomvalue(8, 15);
      this.playersHealth -= attackValue;
      this.addLogMessages("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomvalue(10, 25);
      this.monstersHealth -= attackValue;
      this.addLogMessages("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomvalue(8, 20);
      if (this.playersHealth + healValue > 100) {
        this.playersHealth = 100;
      } else {
        this.playersHealth += healValue;
      } // Prevent healing over 100
      this.addLogMessages("player", "heal", healValue);
      this.attackPlayer(); // Heal first, then monster attack
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessages(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
