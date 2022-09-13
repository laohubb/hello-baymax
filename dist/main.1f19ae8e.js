// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var str = " .container {\n            z-index: 10;position: absolute;width: 100%;height: 100%;top: 0;\n            animation: 1s ease-in-out arise;\n        }\n        .b-body {\n            position: absolute;bottom: -290rem;left: -200rem;height: 600rem;width: 800rem;\n            border-top-right-radius: 600rem;\n            border-bottom-right-radius: 100rem;\n            background: linear-gradient(99deg, white 80%, black 95%);rotate: -30deg; \n        }\n        .head {\n            position: absolute;\n            left: 444rem;\n            bottom: 61rem;\n            width: 300rem;\n            height: 300rem;\n            border-radius: 500rem;\n            transform: rotate(45deg) scale(1.5, 1);\n            background: radial-gradient(white 40%, black 90%);\n        }\n\n        .head-overlay {\n            position: absolute;\n            left: 444rem;\n            bottom: 61rem;\n            width: 300rem;\n            height: 300rem;\n            border-radius: 500rem;\n            transform: rotate(45deg) scale(1.5, 1);\n            background: linear-gradient(120deg, white 50%, transparent 77%);\n        }\n\n        .box-eye {\n            position: absolute;\n            bottom: 184rem;\n            left: 468rem;\n            width: 260rem;\n            height: 60rem;\n            transform: rotate(45deg);\n        }\n        [class^='eye'] {\n            position: absolute;\n            height: 60rem;\n            width: 60rem;\n            border: 1rem solid black;\n            border-radius: 30rem;\n            background-color: black;\n        }\n        .eye-left {\n            top: 0rem;\n            left: 0rem;\n        }\n        .eye-right {\n            top: 1rem;\n            right: 0rem;\n        }\n        .line {\n            position: absolute;\n            left: 35rem;\n            top: 27rem;\n            width: 200rem;\n            height: 7rem;\n            background: #000;\n        }\n        .hi {\n            position: absolute;\n            font-size: 50rem;\n            text-align: right;\n            color: white;\n            text-shadow: 5px 5px 10px rgba(131, 162, 195, 0.4);\n            animation: 1s word;\n            font-family: \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"\u5FAE\u8F6F\u96C5\u9ED1\", Arial, sans-serif;\n        }\n         @keyframes word {\n            0% {\n                color: transparent;\n            }\n            100% {\n                color: white;\n            }\n        }\n        @media screen and (max-width: 500px) { \n             @keyframes arise {0% {left: -553rem;}100% {left: -276rem;}}\n        }\n        \n        @media screen and (min-width: 500px) {\n            @keyframes arise {0% {left: -553rem;}100% {left: 0rem;}}\n        }\n  .hi{display: block;}       \n    ";
var _default = str;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = _css.default;
var player = {
  n: 0,
  time: 0,
  timer: undefined,
  domElements: {
    domText: document.querySelector('#text'),
    html: document.querySelector('#style')
  },
  buttons: {
    '#btnPlay': 'play',
    '#btnPause': 'pause',
    '#btnFast': 'fast',
    '#btnSlow': 'slow'
  },
  eventsBind: function eventsBind() {
    for (var i in player.buttons) {
      if (player.buttons.hasOwnProperty(i)) {
        var value = player.buttons[i];
        document.querySelector(i).onclick = player[value];
      }
    }
  },
  init: function init() {
    player.play();
    player.eventsBind();
  },
  run: function run() {
    player.n += 1;

    if (player.n > str.length) {
      window.clearInterval(player.timer);
    }

    player.domElements.domText.innerText = str.substring(0, player.n);
    player.domElements.html.innerHTML = str.substring(0, player.n);
    player.domElements.domText.scrollTop = player.domElements.domText.scrollHeight;
  },
  play: function play() {
    player.pause();
    player.timer = setInterval(player.run, player.time);
  },
  pause: function pause() {
    clearInterval(player.timer);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"../../.nvm/versions/node/v14.20.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56899" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v14.20.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map