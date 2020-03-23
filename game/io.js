const G = require('./gameplay');

function attachListeners(io, games) {

  io.on('connection', socket => {
    console.log('user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected')
    });

    // Login & Lobby
    socket.on('login', loginInfo => {
      let game;
      let id = loginInfo.gameId;
      if (!id || !(id in games)) {
        game = G.createGame(id);
        game.addPlayer(loginInfo.username);
        games[game.id] = game;
      } else {
        game = games[id];
        game.addPlayer(loginInfo.username);
      }
      io.emit('lobby update', {
        readyToStart: game.players.length == 4,
        players: game.players,
        numPlayers: game.players.length
      });
    });


    socket.on('join game', id => {
      let game = games[id];
      io.emit('start game', game);
      io.emit('update turn', game.curPlayer);
    })

    socket.on('update playerNum', info => {
      let game = games[info.gameId];
      io.emit('update playerNum', game.getPlayerNum(info.username));
    });


    // Game Information updates
    socket.on('update tiles', gameId => {
      let g = games[gameId];
      io.emit('update hand', g.hands);
      io.emit('update melds', g.melds);
      io.emit('update discards', g.discards);
    })

    socket.on('discard tile', info => {
      //console.log(info);
      let g = games[info.gameId];
      G.handleDiscard(g, info.playerNum, info.discard);
      io.emit('update hand', g.hands);
      io.emit('update discards', g.discards)

      // Should emit twice?
      G.progressGame(g);
      io.emit('update hand', g.hands);
      io.emit('update discards', g.discards);
      io.emit('update turn', g.curPlayer);
    })
  });
}

module.exports = attachListeners;