<template>
  <li
    :class="['Tile', canHover && store.myTurn ? 'canHover' : '']"
    @click="canClick && store.myTurn ?
            onTileClick(tile, store) : () => {}"
  >
    <img v-if="show" :src="tile.url" :alt="getSuit(tile.suit) + ':' + tile.rank"/>
    <img v-else :src="tile.downUrl" alt="Facedown tile"/>
  </li>
</template>

<script>
export default {
  props: ['tile', 'canHover', 'show', 'canClick'],
  methods: {
    onTileClick: (tile, store) => {
      if (tile.suit >= 5){ // 5 is FLOWER
        return;
      }
      store.myTurn = false;
      store.socket.emit('discard tile', {
        gameId: store.gameId,
        playerNum: store.playerNum,
        discard: tile,
      });
    },
    getSuit: suit => {
      switch(suit){
        case 0:
          return 'bamboo';
        case 1:
          return 'man';
        case 2:
          return 'pin';
        case 3:
          return 'wind';
        case 4:
          return 'dragon';
        case 5:
          return 'flower';
        case 6:
          return 'season';
      }
    }
  },
  computed: {
    store: function() {
      return this.$root.$data;
    }
  }
}
</script>

<style lang="scss">
.Tile{
  user-select: none;
  display: inline-block;
  width: $t-width;
  max-width: $t-max-width;
  height: $t-height;
  img {
    max-width: 100%;
  }
  &.canHover:hover{
    cursor: pointer;
    position: relative;
    top: -5px;
  }
  &.canHover:active{
    top: -10px;
  }
}

</style>