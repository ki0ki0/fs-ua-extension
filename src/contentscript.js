(function() {
  'use strict';

  function injectScript() {
     var elem = document.createElement("script");
     var source = "(" + addMP4Links.toString() + ")();"
     elem.type = "text/javascript";
     elem.innerHTML = source;
     document.head.appendChild(elem);
  }

  function addMP4Links() {
      var player = document.getElementById("player");
      var width = player.style.width;
      var height = player.style.height;
      var playerContainer = player.parentNode;
      playerContainer.removeChild(player);
      var link = document.createElement("video");
      var source = document.createElement("source");
      var linkLoc = FS_FLOWPLAYER_CONFIG.playlist[0].url
      source.src = linkLoc;
      source.type = "video/mp4";
      link.style.width = width;
      link.style.height = height;
      link.controls = true;
      link.autoplay = true;
      link.appendChild(source);
      playerContainer.appendChild(link);
  }

  injectScript();

})();
