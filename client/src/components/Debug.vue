<template>
  <div class="Debug">
    <div class="DebugField">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        v-model="store.username"
        required
      />
    </div>
    <div class="DebugField">
      <label for="gameId">Game ID</label>
      <input type="text" id="gameId" v-model="store.gameId" />
    </div>
    <div class="DebugField">
      <label for="playerNum">PlayerNum</label>
      <input type="number" id="playerNum" v-model="store.playerNum" />
    </div>
    <div class="DebugField">
      <label for="myTurn">My Turn</label>
      <input type="checkbox" id="myTurn" v-model="store.myTurn" />
    </div>
    <div class="DebugField">
      <label for="prompt">Prompt</label>
      <input type="checkbox" id="prompt" v-model="store.prompt" />
    </div>
    <div class="DebugField">
      <label for="winPrompt">winPrompt</label>
      <input type="checkbox" id="winPrompt" v-model="store.winPrompt" />
    </div>
    <div class="DebugField">
      <label for="canChow">canChow</label>
      <input type="checkbox" id="canChow" v-model="store.canChow" />
    </div>
    <div class="DebugField">
      <label for="waitPong">waitPong</label>
      <input type="checkbox" id="waitPong" v-model="store.waitPong" />
    </div>
    <div class="DebugField">
      <label for="canPong">canPong</label>
      <input type="checkbox" id="canPong" v-model="store.canPong" />
    </div>
    <div class="DebugField">
      <label for="canGog">canGong</label>
      <input type="checkbox" id="canGong" v-model="store.canGong" />
    </div>
    <div class="DebugField">
      <label for="curWind">Wind</label>
      <input type="number" id="curWind" v-model="store.curWind" />
    </div>
    <div class="DebugField">
      <label for="dealerNum">Dealer</label>
      <input type="number" id="dealerNum" v-model="store.dealerNum" />
    </div>
    <div class="DebugField">
      <label for="dealerNum">ShownHands</label>
      <input type="text" id="shownHands" v-model="store.shownHands" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    store: function() {
      return this.$root.$data;
    }
  }
};
</script>

<style lang="scss">
.Debug {
  position: relative;
  left: -300px;
}
</style>