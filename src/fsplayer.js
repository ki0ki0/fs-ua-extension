(function() {
  'use strict';

  function BetterFsPlayer() {
    function createNewPlayer(width, height) {
      var newPlayer = document.createElement("div");
      source.src = mp4link;
      source.type = "video/mp4";
      newPlayer.style.width = width;
      newPlayer.style.height = height;
      newPlayer.controls = true;
      newPlayer.volume = 1;
      newPlayer.autoplay = true;
      newPlayer.appendChild(source);
      return newPlayer;
    }

    function getPlayer() {
      var player = document.getElementById("player");
      return player;
    }

    function removeOldPlayer() {
      var player = getPlayer();
      var playerContainer = player.parentNode;
      playerContainer.removeChild(player);
    }

    function insertNewPlayer(mp4link) {
      var player = getPlayer();
      var width = player.style.width;
      var height = player.style.height;
      var playerContainer = player.parentNode;
      var newPlayerContainer = document.createElement("div");
      playerContainer.appendChild(newPlayerContainer);
      ShyPlayer(newPlayerContainer, [mp4link], width, height);
    }

    function replacePlayer() {
      var mp4link = FS_FLOWPLAYER_CONFIG.playlist[0].url;
      insertNewPlayer(mp4link);
      removeOldPlayer();
    }

    replacePlayer();
  }

  window.BetterFsPlayer = BetterFsPlayer;

})();
