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
      return ShyPlayer(newPlayerContainer, mp4links, width, height);
    }

    function replacePlayer() {
      var urlToClip = {};
      var mp4links = FS_FLOWPLAYER_CONFIG.playlist.map(function (el) {
        urlToClip[location.protocol + "//" + location.hostname + el.url] = el;
        return el.url;
      });
      var newPlayer = insertNewPlayer(mp4links);
      newPlayer.addEventListener('loadstart', function() {
        FS_FLOWPLAYER_CONFIG.player.options.clip.onStart(urlToClip[newPlayer.currentSrc]);
      });
      removeOldPlayer();
    }

    replacePlayer();
  }

  window.BetterFsPlayer = BetterFsPlayer;

})();
