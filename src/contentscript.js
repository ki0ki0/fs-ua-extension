(function() {
  'use strict';

  function createNewPlayer(width, height, mp4link) {
    var newPlayer = document.createElement("video");
    var source = document.createElement("source");
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
    var newPlayer = createNewPlayer(width, height, mp4link);
    newPlayer.className = "playr_video";
    playerContainer.appendChild(newPlayer);
    return newPlayer;
  }

  function replacePlayer() {
    var mp4link = FS_FLOWPLAYER_CONFIG.playlist[0].url;
    var newPlayer = insertNewPlayer(mp4link);
    removeOldPlayer();
    var video_objects = [];
    video_objects.push(new Playr(0, newPlayer));
  }

  function injectScript() {
     var elem = document.createElement("script");
     var scripts = [Playr, replacePlayer, insertNewPlayer, removeOldPlayer,
                    getPlayer, createNewPlayer];
     var source = scripts.join(";") + "; var newPlayer = replacePlayer();"
     elem.type = "text/javascript";
     elem.innerHTML = source;
     document.head.appendChild(elem);
  }

  injectScript();

})();
