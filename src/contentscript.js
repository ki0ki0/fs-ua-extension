(function() {
  'use strict';

  function injectScript() {
     var elem = document.createElement("script");
     var scripts = [ShyPlayer, BetterFsPlayer];
     var source = scripts.join(";") + "; BetterFsPlayer();"
     elem.type = "text/javascript";
     elem.innerHTML = source;
     document.head.appendChild(elem);
  }

  injectScript();

})();
