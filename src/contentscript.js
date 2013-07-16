(function() {
  'use strict';

  function injectScript(func) {
     var elem = document.createElement("script");
     var source = "(" + func.toString() + ")();"
     elem.type = "text/javascript";
     elem.innerHTML = source;
     document.head.appendChild(elem);
  }

  function inject() {

    var i = 0;
    var source;
    var video;

    function ended() {
      i++;
      if (i >= FS_FLOWPLAYER_CONFIG.playlist.length)
        return;

      var clip = FS_FLOWPLAYER_CONFIG.playlist[i];
      source.src = clip.url;
      video.load();
      var file = document.location.href.match("file=([0-9]*)");
      var fileId = clip.fsData.file_id;
      if ((file == null) || (file.length < 2) || (file[1] == fileId))
        return;
      var newUrl = document.location.href.replace(/file=[0-9]*/,"file="+fileId);
      history.replaceState(null, newUrl, newUrl);

      FS_FLOWPLAYER_CONFIG.player.options.clip.onStart(clip);
    }

    function addMP4Links() {
      var player = document.getElementById("player");
      var width = player.style.width;
      var height = player.style.height;
      var playerContainer = player.parentNode;
      playerContainer.removeChild(player);

      video = document.createElement("video");
      video.style.width = width;
      video.style.height = height;
      video.controls = true;
      video.autoplay = true;
      playerContainer.appendChild(video);

      source = document.createElement("source");
      source.src = FS_FLOWPLAYER_CONFIG.playlist[i].url;
      source.type = "video/mp4";
      video.appendChild(source);

      video.addEventListener("ended", ended, false);
    }

    addMP4Links();
  }
  injectScript(inject);

})();
