(function() {
  'use strict';

  function BetterFsPlayer() {
    function getPlayer() {
      var player = document.getElementById("player");
      return player;
    }

    function removeOldPlayer() {
      var player = getPlayer();
      var playerContainer = player.parentNode;
      playerContainer.removeChild(player);
    }

    function insertNewPlayer(mp4links) {
      var player = getPlayer();
      var width = player.style.width;
      var height = player.style.height;
      var playerContainer = player.parentNode;
      var newPlayerContainer = document.createElement("div");
      playerContainer.appendChild(newPlayerContainer);
      ShyPlayer(newPlayerContainer, mp4links, width, height);
    }

    function replacePlayer() {
      var mp4links = FS_FLOWPLAYER_CONFIG.playlist.map(function (el) {
        return el.url;
      });
      insertNewPlayer(mp4links);
      removeOldPlayer();
    }

    replacePlayer();
  }

  window.BetterFsPlayer = BetterFsPlayer;

})();
