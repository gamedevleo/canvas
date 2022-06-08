// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6ZneZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d11016f4f1ed9db5";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"15ljZ":[function(require,module,exports) {
var _datGui = require("dat.gui");
const gui = new _datGui.GUI();
const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const wave = {
    y: canvas.height / 2,
    length: 0.01,
    frequency: 0.01,
    amplitude: 0
};
const strokeColor = {
    h: 360,
    s: 100,
    l: 50
};
const backgroundColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.05
};
const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, canvas.height);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "frequency", -0.01, 1);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.open();
const strokeColorFolder = gui.addFolder("strokeColor");
strokeColorFolder.add(strokeColor, "h", 0, 360);
strokeColorFolder.add(strokeColor, "s", 0, 100);
strokeColorFolder.add(strokeColor, "l", 0, 100);
strokeColorFolder.open();
const backgroundColorFolder = gui.addFolder("backgroundColor");
backgroundColorFolder.add(backgroundColor, "r", 0, 255);
backgroundColorFolder.add(backgroundColor, "g", 0, 255);
backgroundColorFolder.add(backgroundColor, "b", 0, 255);
backgroundColorFolder.add(backgroundColor, "a", 0, 1);
backgroundColorFolder.open();
window.addEventListener("resize", ()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    animate();
});
const ctx = canvas.getContext("2d");
let increment = wave.frequency;
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    for(let i = 0; i < canvas.width; i++)ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment) * 10);
    ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))},${strokeColor.s}%, ${strokeColor.l}%)`;
    ctx.stroke();
    ctx.closePath();
    increment += wave.frequency * 100;
}
animate();

},{"dat.gui":"k3xQk"}],"k3xQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
parcelHelpers.export(exports, "controllers", ()=>controllers);
parcelHelpers.export(exports, "dom", ()=>dom$1);
parcelHelpers.export(exports, "gui", ()=>gui);
parcelHelpers.export(exports, "GUI", ()=>GUI$1);
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ function ___$insertStyle(css1) {
    if (!css1) return;
    if (typeof window === "undefined") return;
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css1;
    document.head.appendChild(style);
    return css1;
}
function colorToString(color1, forceCSSHex) {
    var colorFormat = color1.__state.conversionName.toString();
    var r = Math.round(color1.r);
    var g = Math.round(color1.g);
    var b = Math.round(color1.b);
    var a = color1.a;
    var h = Math.round(color1.h);
    var s = color1.s.toFixed(1);
    var v = color1.v.toFixed(1);
    if (forceCSSHex || colorFormat === "THREE_CHAR_HEX" || colorFormat === "SIX_CHAR_HEX") {
        var str = color1.hex.toString(16);
        while(str.length < 6)str = "0" + str;
        return "#" + str;
    } else if (colorFormat === "CSS_RGB") return "rgb(" + r + "," + g + "," + b + ")";
    else if (colorFormat === "CSS_RGBA") return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    else if (colorFormat === "HEX") return "0x" + color1.hex.toString(16);
    else if (colorFormat === "RGB_ARRAY") return "[" + r + "," + g + "," + b + "]";
    else if (colorFormat === "RGBA_ARRAY") return "[" + r + "," + g + "," + b + "," + a + "]";
    else if (colorFormat === "RGB_OBJ") return "{r:" + r + ",g:" + g + ",b:" + b + "}";
    else if (colorFormat === "RGBA_OBJ") return "{r:" + r + ",g:" + g + ",b:" + b + ",a:" + a + "}";
    else if (colorFormat === "HSV_OBJ") return "{h:" + h + ",s:" + s + ",v:" + v + "}";
    else if (colorFormat === "HSVA_OBJ") return "{h:" + h + ",s:" + s + ",v:" + v + ",a:" + a + "}";
    return "unknown format";
}
var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
    BREAK: {},
    extend: function extend(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
            var keys = this.isObject(obj) ? Object.keys(obj) : [];
            keys.forEach((function(key) {
                if (!this.isUndefined(obj[key])) target[key] = obj[key];
            }).bind(this));
        }, this);
        return target;
    },
    defaults: function defaults(target) {
        this.each(ARR_SLICE.call(arguments, 1), function(obj) {
            var keys = this.isObject(obj) ? Object.keys(obj) : [];
            keys.forEach((function(key) {
                if (this.isUndefined(target[key])) target[key] = obj[key];
            }).bind(this));
        }, this);
        return target;
    },
    compose: function compose() {
        var toCall = ARR_SLICE.call(arguments);
        return function() {
            var args = ARR_SLICE.call(arguments);
            for(var i = toCall.length - 1; i >= 0; i--)args = [
                toCall[i].apply(this, args)
            ];
            return args[0];
        };
    },
    each: function each(obj, itr, scope) {
        if (!obj) return;
        if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) obj.forEach(itr, scope);
        else if (obj.length === obj.length + 0) {
            var key = void 0;
            var l = void 0;
            for(key = 0, l = obj.length; key < l; key++){
                if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) return;
            }
        } else for(var _key in obj){
            if (itr.call(scope, obj[_key], _key) === this.BREAK) return;
        }
    },
    defer: function defer(fnc) {
        setTimeout(fnc, 0);
    },
    debounce: function debounce(func, threshold, callImmediately) {
        var timeout = void 0;
        return function() {
            var obj = this;
            var args = arguments;
            function delayed() {
                timeout = null;
                if (!callImmediately) func.apply(obj, args);
            }
            var callNow = callImmediately || !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(delayed, threshold);
            if (callNow) func.apply(obj, args);
        };
    },
    toArray: function toArray(obj) {
        if (obj.toArray) return obj.toArray();
        return ARR_SLICE.call(obj);
    },
    isUndefined: function isUndefined(obj) {
        return obj === undefined;
    },
    isNull: function isNull(obj) {
        return obj === null;
    },
    isNaN: function(_isNaN) {
        function isNaN(_x) {
            return _isNaN.apply(this, arguments);
        }
        isNaN.toString = function() {
            return _isNaN.toString();
        };
        return isNaN;
    }(function(obj) {
        return isNaN(obj);
    }),
    isArray: Array.isArray || function(obj) {
        return obj.constructor === Array;
    },
    isObject: function isObject(obj) {
        return obj === Object(obj);
    },
    isNumber: function isNumber(obj) {
        return obj === obj + 0;
    },
    isString: function isString(obj) {
        return obj === obj + "";
    },
    isBoolean: function isBoolean(obj) {
        return obj === false || obj === true;
    },
    isFunction: function isFunction(obj) {
        return obj instanceof Function;
    }
};
var INTERPRETATIONS = [
    {
        litmus: Common.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function read(original) {
                    var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    if (test === null) return false;
                    return {
                        space: "HEX",
                        hex: parseInt("0x" + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
                    };
                },
                write: colorToString
            },
            SIX_CHAR_HEX: {
                read: function read(original) {
                    var test = original.match(/^#([A-F0-9]{6})$/i);
                    if (test === null) return false;
                    return {
                        space: "HEX",
                        hex: parseInt("0x" + test[1].toString(), 0)
                    };
                },
                write: colorToString
            },
            CSS_RGB: {
                read: function read(original) {
                    var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    if (test === null) return false;
                    return {
                        space: "RGB",
                        r: parseFloat(test[1]),
                        g: parseFloat(test[2]),
                        b: parseFloat(test[3])
                    };
                },
                write: colorToString
            },
            CSS_RGBA: {
                read: function read(original) {
                    var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    if (test === null) return false;
                    return {
                        space: "RGB",
                        r: parseFloat(test[1]),
                        g: parseFloat(test[2]),
                        b: parseFloat(test[3]),
                        a: parseFloat(test[4])
                    };
                },
                write: colorToString
            }
        }
    },
    {
        litmus: Common.isNumber,
        conversions: {
            HEX: {
                read: function read(original) {
                    return {
                        space: "HEX",
                        hex: original,
                        conversionName: "HEX"
                    };
                },
                write: function write(color2) {
                    return color2.hex;
                }
            }
        }
    },
    {
        litmus: Common.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function read(original) {
                    if (original.length !== 3) return false;
                    return {
                        space: "RGB",
                        r: original[0],
                        g: original[1],
                        b: original[2]
                    };
                },
                write: function write(color3) {
                    return [
                        color3.r,
                        color3.g,
                        color3.b
                    ];
                }
            },
            RGBA_ARRAY: {
                read: function read(original) {
                    if (original.length !== 4) return false;
                    return {
                        space: "RGB",
                        r: original[0],
                        g: original[1],
                        b: original[2],
                        a: original[3]
                    };
                },
                write: function write(color4) {
                    return [
                        color4.r,
                        color4.g,
                        color4.b,
                        color4.a
                    ];
                }
            }
        }
    },
    {
        litmus: Common.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function read(original) {
                    if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) return {
                        space: "RGB",
                        r: original.r,
                        g: original.g,
                        b: original.b,
                        a: original.a
                    };
                    return false;
                },
                write: function write(color5) {
                    return {
                        r: color5.r,
                        g: color5.g,
                        b: color5.b,
                        a: color5.a
                    };
                }
            },
            RGB_OBJ: {
                read: function read(original) {
                    if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) return {
                        space: "RGB",
                        r: original.r,
                        g: original.g,
                        b: original.b
                    };
                    return false;
                },
                write: function write(color6) {
                    return {
                        r: color6.r,
                        g: color6.g,
                        b: color6.b
                    };
                }
            },
            HSVA_OBJ: {
                read: function read(original) {
                    if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) return {
                        space: "HSV",
                        h: original.h,
                        s: original.s,
                        v: original.v,
                        a: original.a
                    };
                    return false;
                },
                write: function write(color7) {
                    return {
                        h: color7.h,
                        s: color7.s,
                        v: color7.v,
                        a: color7.a
                    };
                }
            },
            HSV_OBJ: {
                read: function read(original) {
                    if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) return {
                        space: "HSV",
                        h: original.h,
                        s: original.s,
                        v: original.v
                    };
                    return false;
                },
                write: function write(color8) {
                    return {
                        h: color8.h,
                        s: color8.s,
                        v: color8.v
                    };
                }
            }
        }
    }
];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
    toReturn = false;
    var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
    Common.each(INTERPRETATIONS, function(family) {
        if (family.litmus(original)) {
            Common.each(family.conversions, function(conversion, conversionName) {
                result = conversion.read(original);
                if (toReturn === false && result !== false) {
                    toReturn = result;
                    result.conversionName = conversionName;
                    result.conversion = conversion;
                    return Common.BREAK;
                }
            });
            return Common.BREAK;
        }
    });
    return toReturn;
};
var tmpComponent = void 0;
var ColorMath = {
    hsv_to_rgb: function hsv_to_rgb(h, s, v) {
        var hi = Math.floor(h / 60) % 6;
        var f = h / 60 - Math.floor(h / 60);
        var p = v * (1.0 - s);
        var q = v * (1.0 - f * s);
        var t = v * (1.0 - (1.0 - f) * s);
        var c = [
            [
                v,
                t,
                p
            ],
            [
                q,
                v,
                p
            ],
            [
                p,
                v,
                t
            ],
            [
                p,
                q,
                v
            ],
            [
                t,
                p,
                v
            ],
            [
                v,
                p,
                q
            ]
        ][hi];
        return {
            r: c[0] * 255,
            g: c[1] * 255,
            b: c[2] * 255
        };
    },
    rgb_to_hsv: function rgb_to_hsv(r, g, b) {
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var h = void 0;
        var s = void 0;
        if (max !== 0) s = delta / max;
        else return {
            h: NaN,
            s: 0,
            v: 0
        };
        if (r === max) h = (g - b) / delta;
        else if (g === max) h = 2 + (b - r) / delta;
        else h = 4 + (r - g) / delta;
        h /= 6;
        if (h < 0) h += 1;
        return {
            h: h * 360,
            s: s,
            v: max / 255
        };
    },
    rgb_to_hex: function rgb_to_hex(r, g, b) {
        var hex = this.hex_with_component(0, 2, r);
        hex = this.hex_with_component(hex, 1, g);
        hex = this.hex_with_component(hex, 0, b);
        return hex;
    },
    component_from_hex: function component_from_hex(hex, componentIndex) {
        return hex >> componentIndex * 8 & 0xFF;
    },
    hex_with_component: function hex_with_component(hex, componentIndex, value) {
        return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
    }
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var get = function get1(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) return undefined;
        else return get1(parent, property, receiver);
    } else if ("value" in desc) return desc.value;
    else {
        var getter = desc.get;
        if (getter === undefined) return undefined;
        return getter.call(receiver);
    }
};
var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var Color = function() {
    function Color1() {
        classCallCheck(this, Color1);
        this.__state = interpret.apply(this, arguments);
        if (this.__state === false) throw new Error("Failed to interpret color arguments");
        this.__state.a = this.__state.a || 1;
    }
    createClass(Color1, [
        {
            key: "toString",
            value: function toString() {
                return colorToString(this);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return colorToString(this, true);
            }
        },
        {
            key: "toOriginal",
            value: function toOriginal() {
                return this.__state.conversion.write(this);
            }
        }
    ]);
    return Color1;
}();
function defineRGBComponent(target, component, componentHexIndex) {
    Object.defineProperty(target, component, {
        get: function get$$1() {
            if (this.__state.space === "RGB") return this.__state[component];
            Color.recalculateRGB(this, component, componentHexIndex);
            return this.__state[component];
        },
        set: function set$$1(v) {
            if (this.__state.space !== "RGB") {
                Color.recalculateRGB(this, component, componentHexIndex);
                this.__state.space = "RGB";
            }
            this.__state[component] = v;
        }
    });
}
function defineHSVComponent(target, component) {
    Object.defineProperty(target, component, {
        get: function get$$1() {
            if (this.__state.space === "HSV") return this.__state[component];
            Color.recalculateHSV(this);
            return this.__state[component];
        },
        set: function set$$1(v) {
            if (this.__state.space !== "HSV") {
                Color.recalculateHSV(this);
                this.__state.space = "HSV";
            }
            this.__state[component] = v;
        }
    });
}
Color.recalculateRGB = function(color9, component, componentHexIndex) {
    if (color9.__state.space === "HEX") color9.__state[component] = ColorMath.component_from_hex(color9.__state.hex, componentHexIndex);
    else if (color9.__state.space === "HSV") Common.extend(color9.__state, ColorMath.hsv_to_rgb(color9.__state.h, color9.__state.s, color9.__state.v));
    else throw new Error("Corrupted color state");
};
Color.recalculateHSV = function(color10) {
    var result1 = ColorMath.rgb_to_hsv(color10.r, color10.g, color10.b);
    Common.extend(color10.__state, {
        s: result1.s,
        v: result1.v
    });
    if (!Common.isNaN(result1.h)) color10.__state.h = result1.h;
    else if (Common.isUndefined(color10.__state.h)) color10.__state.h = 0;
};
Color.COMPONENTS = [
    "r",
    "g",
    "b",
    "h",
    "s",
    "v",
    "hex",
    "a"
];
defineRGBComponent(Color.prototype, "r", 2);
defineRGBComponent(Color.prototype, "g", 1);
defineRGBComponent(Color.prototype, "b", 0);
defineHSVComponent(Color.prototype, "h");
defineHSVComponent(Color.prototype, "s");
defineHSVComponent(Color.prototype, "v");
Object.defineProperty(Color.prototype, "a", {
    get: function get$$1() {
        return this.__state.a;
    },
    set: function set$$1(v) {
        this.__state.a = v;
    }
});
Object.defineProperty(Color.prototype, "hex", {
    get: function get$$1() {
        if (this.__state.space !== "HEX") {
            this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
            this.__state.space = "HEX";
        }
        return this.__state.hex;
    },
    set: function set$$1(v) {
        this.__state.space = "HEX";
        this.__state.hex = v;
    }
});
var Controller = function() {
    function Controller1(object, property) {
        classCallCheck(this, Controller1);
        this.initialValue = object[property];
        this.domElement = document.createElement("div");
        this.object = object;
        this.property = property;
        this.__onChange = undefined;
        this.__onFinishChange = undefined;
    }
    createClass(Controller1, [
        {
            key: "onChange",
            value: function onChange(fnc) {
                this.__onChange = fnc;
                return this;
            }
        },
        {
            key: "onFinishChange",
            value: function onFinishChange(fnc) {
                this.__onFinishChange = fnc;
                return this;
            }
        },
        {
            key: "setValue",
            value: function setValue(newValue) {
                this.object[this.property] = newValue;
                if (this.__onChange) this.__onChange.call(this, newValue);
                this.updateDisplay();
                return this;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.object[this.property];
            }
        },
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                return this;
            }
        },
        {
            key: "isModified",
            value: function isModified() {
                return this.initialValue !== this.getValue();
            }
        }
    ]);
    return Controller1;
}();
var EVENT_MAP = {
    HTMLEvents: [
        "change"
    ],
    MouseEvents: [
        "click",
        "mousemove",
        "mousedown",
        "mouseup",
        "mouseover"
    ],
    KeyboardEvents: [
        "keydown"
    ]
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function(v, k) {
    Common.each(v, function(e) {
        EVENT_MAP_INV[e] = k;
    });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
    if (val === "0" || Common.isUndefined(val)) return 0;
    var match = val.match(CSS_VALUE_PIXELS);
    if (!Common.isNull(match)) return parseFloat(match[1]);
    return 0;
}
var dom = {
    makeSelectable: function makeSelectable(elem, selectable) {
        if (elem === undefined || elem.style === undefined) return;
        elem.onselectstart = selectable ? function() {
            return false;
        } : function() {};
        elem.style.MozUserSelect = selectable ? "auto" : "none";
        elem.style.KhtmlUserSelect = selectable ? "auto" : "none";
        elem.unselectable = selectable ? "on" : "off";
    },
    makeFullscreen: function makeFullscreen(elem, hor, vert) {
        var vertical = vert;
        var horizontal = hor;
        if (Common.isUndefined(horizontal)) horizontal = true;
        if (Common.isUndefined(vertical)) vertical = true;
        elem.style.position = "absolute";
        if (horizontal) {
            elem.style.left = 0;
            elem.style.right = 0;
        }
        if (vertical) {
            elem.style.top = 0;
            elem.style.bottom = 0;
        }
    },
    fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
        var params = pars || {};
        var className = EVENT_MAP_INV[eventType];
        if (!className) throw new Error("Event type " + eventType + " not supported.");
        var evt = document.createEvent(className);
        switch(className){
            case "MouseEvents":
                var clientX = params.x || params.clientX || 0;
                var clientY = params.y || params.clientY || 0;
                evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, 0, clientX, clientY, false, false, false, false, 0, null);
                break;
            case "KeyboardEvents":
                var init = evt.initKeyboardEvent || evt.initKeyEvent;
                Common.defaults(params, {
                    cancelable: true,
                    ctrlKey: false,
                    altKey: false,
                    shiftKey: false,
                    metaKey: false,
                    keyCode: undefined,
                    charCode: undefined
                });
                init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
                break;
            default:
                evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
                break;
        }
        Common.defaults(evt, aux);
        elem.dispatchEvent(evt);
    },
    bind: function bind(elem, event, func, newBool) {
        var bool = newBool || false;
        if (elem.addEventListener) elem.addEventListener(event, func, bool);
        else if (elem.attachEvent) elem.attachEvent("on" + event, func);
        return dom;
    },
    unbind: function unbind(elem, event, func, newBool) {
        var bool = newBool || false;
        if (elem.removeEventListener) elem.removeEventListener(event, func, bool);
        else if (elem.detachEvent) elem.detachEvent("on" + event, func);
        return dom;
    },
    addClass: function addClass(elem, className) {
        if (elem.className === undefined) elem.className = className;
        else if (elem.className !== className) {
            var classes = elem.className.split(/ +/);
            if (classes.indexOf(className) === -1) {
                classes.push(className);
                elem.className = classes.join(" ").replace(/^\s+/, "").replace(/\s+$/, "");
            }
        }
        return dom;
    },
    removeClass: function removeClass(elem, className) {
        if (className) {
            if (elem.className === className) elem.removeAttribute("class");
            else {
                var classes = elem.className.split(/ +/);
                var index1 = classes.indexOf(className);
                if (index1 !== -1) {
                    classes.splice(index1, 1);
                    elem.className = classes.join(" ");
                }
            }
        } else elem.className = undefined;
        return dom;
    },
    hasClass: function hasClass(elem, className) {
        return new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)").test(elem.className) || false;
    },
    getWidth: function getWidth(elem) {
        var style = getComputedStyle(elem);
        return cssValueToPixels(style["border-left-width"]) + cssValueToPixels(style["border-right-width"]) + cssValueToPixels(style["padding-left"]) + cssValueToPixels(style["padding-right"]) + cssValueToPixels(style.width);
    },
    getHeight: function getHeight(elem) {
        var style = getComputedStyle(elem);
        return cssValueToPixels(style["border-top-width"]) + cssValueToPixels(style["border-bottom-width"]) + cssValueToPixels(style["padding-top"]) + cssValueToPixels(style["padding-bottom"]) + cssValueToPixels(style.height);
    },
    getOffset: function getOffset(el) {
        var elem = el;
        var offset = {
            left: 0,
            top: 0
        };
        if (elem.offsetParent) do {
            offset.left += elem.offsetLeft;
            offset.top += elem.offsetTop;
            elem = elem.offsetParent;
        }while (elem);
        return offset;
    },
    isActive: function isActive(elem) {
        return elem === document.activeElement && (elem.type || elem.href);
    }
};
var BooleanController = function(_Controller) {
    inherits(BooleanController1, _Controller);
    function BooleanController1(object, property) {
        classCallCheck(this, BooleanController1);
        var _this2 = possibleConstructorReturn(this, (BooleanController1.__proto__ || Object.getPrototypeOf(BooleanController1)).call(this, object, property));
        var _this = _this2;
        _this2.__prev = _this2.getValue();
        _this2.__checkbox = document.createElement("input");
        _this2.__checkbox.setAttribute("type", "checkbox");
        function onChange() {
            _this.setValue(!_this.__prev);
        }
        dom.bind(_this2.__checkbox, "change", onChange, false);
        _this2.domElement.appendChild(_this2.__checkbox);
        _this2.updateDisplay();
        return _this2;
    }
    createClass(BooleanController1, [
        {
            key: "setValue",
            value: function setValue(v) {
                var toReturn1 = get(BooleanController1.prototype.__proto__ || Object.getPrototypeOf(BooleanController1.prototype), "setValue", this).call(this, v);
                if (this.__onFinishChange) this.__onFinishChange.call(this, this.getValue());
                this.__prev = this.getValue();
                return toReturn1;
            }
        },
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                if (this.getValue() === true) {
                    this.__checkbox.setAttribute("checked", "checked");
                    this.__checkbox.checked = true;
                    this.__prev = true;
                } else {
                    this.__checkbox.checked = false;
                    this.__prev = false;
                }
                return get(BooleanController1.prototype.__proto__ || Object.getPrototypeOf(BooleanController1.prototype), "updateDisplay", this).call(this);
            }
        }
    ]);
    return BooleanController1;
}(Controller);
var OptionController = function(_Controller) {
    inherits(OptionController1, _Controller);
    function OptionController1(object, property, opts) {
        classCallCheck(this, OptionController1);
        var _this2 = possibleConstructorReturn(this, (OptionController1.__proto__ || Object.getPrototypeOf(OptionController1)).call(this, object, property));
        var options = opts;
        var _this = _this2;
        _this2.__select = document.createElement("select");
        if (Common.isArray(options)) {
            var map1 = {};
            Common.each(options, function(element) {
                map1[element] = element;
            });
            options = map1;
        }
        Common.each(options, function(value, key) {
            var opt = document.createElement("option");
            opt.innerHTML = key;
            opt.setAttribute("value", value);
            _this.__select.appendChild(opt);
        });
        _this2.updateDisplay();
        dom.bind(_this2.__select, "change", function() {
            var desiredValue = this.options[this.selectedIndex].value;
            _this.setValue(desiredValue);
        });
        _this2.domElement.appendChild(_this2.__select);
        return _this2;
    }
    createClass(OptionController1, [
        {
            key: "setValue",
            value: function setValue(v) {
                var toReturn2 = get(OptionController1.prototype.__proto__ || Object.getPrototypeOf(OptionController1.prototype), "setValue", this).call(this, v);
                if (this.__onFinishChange) this.__onFinishChange.call(this, this.getValue());
                return toReturn2;
            }
        },
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                if (dom.isActive(this.__select)) return this;
                this.__select.value = this.getValue();
                return get(OptionController1.prototype.__proto__ || Object.getPrototypeOf(OptionController1.prototype), "updateDisplay", this).call(this);
            }
        }
    ]);
    return OptionController1;
}(Controller);
var StringController = function(_Controller) {
    inherits(StringController1, _Controller);
    function StringController1(object, property) {
        classCallCheck(this, StringController1);
        var _this2 = possibleConstructorReturn(this, (StringController1.__proto__ || Object.getPrototypeOf(StringController1)).call(this, object, property));
        var _this = _this2;
        function onChange() {
            _this.setValue(_this.__input.value);
        }
        function onBlur() {
            if (_this.__onFinishChange) _this.__onFinishChange.call(_this, _this.getValue());
        }
        _this2.__input = document.createElement("input");
        _this2.__input.setAttribute("type", "text");
        dom.bind(_this2.__input, "keyup", onChange);
        dom.bind(_this2.__input, "change", onChange);
        dom.bind(_this2.__input, "blur", onBlur);
        dom.bind(_this2.__input, "keydown", function(e) {
            if (e.keyCode === 13) this.blur();
        });
        _this2.updateDisplay();
        _this2.domElement.appendChild(_this2.__input);
        return _this2;
    }
    createClass(StringController1, [
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                if (!dom.isActive(this.__input)) this.__input.value = this.getValue();
                return get(StringController1.prototype.__proto__ || Object.getPrototypeOf(StringController1.prototype), "updateDisplay", this).call(this);
            }
        }
    ]);
    return StringController1;
}(Controller);
function numDecimals(x) {
    var _x = x.toString();
    if (_x.indexOf(".") > -1) return _x.length - _x.indexOf(".") - 1;
    return 0;
}
var NumberController = function(_Controller) {
    inherits(NumberController1, _Controller);
    function NumberController1(object, property, params) {
        classCallCheck(this, NumberController1);
        var _this = possibleConstructorReturn(this, (NumberController1.__proto__ || Object.getPrototypeOf(NumberController1)).call(this, object, property));
        var _params = params || {};
        _this.__min = _params.min;
        _this.__max = _params.max;
        _this.__step = _params.step;
        if (Common.isUndefined(_this.__step)) {
            if (_this.initialValue === 0) _this.__impliedStep = 1;
            else _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
        } else _this.__impliedStep = _this.__step;
        _this.__precision = numDecimals(_this.__impliedStep);
        return _this;
    }
    createClass(NumberController1, [
        {
            key: "setValue",
            value: function setValue(v) {
                var _v = v;
                if (this.__min !== undefined && _v < this.__min) _v = this.__min;
                else if (this.__max !== undefined && _v > this.__max) _v = this.__max;
                if (this.__step !== undefined && _v % this.__step !== 0) _v = Math.round(_v / this.__step) * this.__step;
                return get(NumberController1.prototype.__proto__ || Object.getPrototypeOf(NumberController1.prototype), "setValue", this).call(this, _v);
            }
        },
        {
            key: "min",
            value: function min(minValue) {
                this.__min = minValue;
                return this;
            }
        },
        {
            key: "max",
            value: function max(maxValue) {
                this.__max = maxValue;
                return this;
            }
        },
        {
            key: "step",
            value: function step(stepValue) {
                this.__step = stepValue;
                this.__impliedStep = stepValue;
                this.__precision = numDecimals(stepValue);
                return this;
            }
        }
    ]);
    return NumberController1;
}(Controller);
function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function(_NumberController) {
    inherits(NumberControllerBox1, _NumberController);
    function NumberControllerBox1(object, property, params) {
        classCallCheck(this, NumberControllerBox1);
        var _this2 = possibleConstructorReturn(this, (NumberControllerBox1.__proto__ || Object.getPrototypeOf(NumberControllerBox1)).call(this, object, property, params));
        _this2.__truncationSuspended = false;
        var _this = _this2;
        var prevY = void 0;
        function onChange() {
            var attempted = parseFloat(_this.__input.value);
            if (!Common.isNaN(attempted)) _this.setValue(attempted);
        }
        function onFinish() {
            if (_this.__onFinishChange) _this.__onFinishChange.call(_this, _this.getValue());
        }
        function onBlur() {
            onFinish();
        }
        function onMouseDrag(e) {
            var diff = prevY - e.clientY;
            _this.setValue(_this.getValue() + diff * _this.__impliedStep);
            prevY = e.clientY;
        }
        function onMouseUp() {
            dom.unbind(window, "mousemove", onMouseDrag);
            dom.unbind(window, "mouseup", onMouseUp);
            onFinish();
        }
        function onMouseDown(e) {
            dom.bind(window, "mousemove", onMouseDrag);
            dom.bind(window, "mouseup", onMouseUp);
            prevY = e.clientY;
        }
        _this2.__input = document.createElement("input");
        _this2.__input.setAttribute("type", "text");
        dom.bind(_this2.__input, "change", onChange);
        dom.bind(_this2.__input, "blur", onBlur);
        dom.bind(_this2.__input, "mousedown", onMouseDown);
        dom.bind(_this2.__input, "keydown", function(e) {
            if (e.keyCode === 13) {
                _this.__truncationSuspended = true;
                this.blur();
                _this.__truncationSuspended = false;
                onFinish();
            }
        });
        _this2.updateDisplay();
        _this2.domElement.appendChild(_this2.__input);
        return _this2;
    }
    createClass(NumberControllerBox1, [
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
                return get(NumberControllerBox1.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox1.prototype), "updateDisplay", this).call(this);
            }
        }
    ]);
    return NumberControllerBox1;
}(NumberController);
function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function(_NumberController) {
    inherits(NumberControllerSlider1, _NumberController);
    function NumberControllerSlider1(object, property, min, max, step) {
        classCallCheck(this, NumberControllerSlider1);
        var _this2 = possibleConstructorReturn(this, (NumberControllerSlider1.__proto__ || Object.getPrototypeOf(NumberControllerSlider1)).call(this, object, property, {
            min: min,
            max: max,
            step: step
        }));
        var _this = _this2;
        _this2.__background = document.createElement("div");
        _this2.__foreground = document.createElement("div");
        dom.bind(_this2.__background, "mousedown", onMouseDown);
        dom.bind(_this2.__background, "touchstart", onTouchStart);
        dom.addClass(_this2.__background, "slider");
        dom.addClass(_this2.__foreground, "slider-fg");
        function onMouseDown(e) {
            document.activeElement.blur();
            dom.bind(window, "mousemove", onMouseDrag);
            dom.bind(window, "mouseup", onMouseUp);
            onMouseDrag(e);
        }
        function onMouseDrag(e) {
            e.preventDefault();
            var bgRect = _this.__background.getBoundingClientRect();
            _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
            return false;
        }
        function onMouseUp() {
            dom.unbind(window, "mousemove", onMouseDrag);
            dom.unbind(window, "mouseup", onMouseUp);
            if (_this.__onFinishChange) _this.__onFinishChange.call(_this, _this.getValue());
        }
        function onTouchStart(e) {
            if (e.touches.length !== 1) return;
            dom.bind(window, "touchmove", onTouchMove);
            dom.bind(window, "touchend", onTouchEnd);
            onTouchMove(e);
        }
        function onTouchMove(e) {
            var clientX = e.touches[0].clientX;
            var bgRect = _this.__background.getBoundingClientRect();
            _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
        }
        function onTouchEnd() {
            dom.unbind(window, "touchmove", onTouchMove);
            dom.unbind(window, "touchend", onTouchEnd);
            if (_this.__onFinishChange) _this.__onFinishChange.call(_this, _this.getValue());
        }
        _this2.updateDisplay();
        _this2.__background.appendChild(_this2.__foreground);
        _this2.domElement.appendChild(_this2.__background);
        return _this2;
    }
    createClass(NumberControllerSlider1, [
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
                this.__foreground.style.width = pct * 100 + "%";
                return get(NumberControllerSlider1.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider1.prototype), "updateDisplay", this).call(this);
            }
        }
    ]);
    return NumberControllerSlider1;
}(NumberController);
var FunctionController = function(_Controller) {
    inherits(FunctionController1, _Controller);
    function FunctionController1(object, property, text) {
        classCallCheck(this, FunctionController1);
        var _this2 = possibleConstructorReturn(this, (FunctionController1.__proto__ || Object.getPrototypeOf(FunctionController1)).call(this, object, property));
        var _this = _this2;
        _this2.__button = document.createElement("div");
        _this2.__button.innerHTML = text === undefined ? "Fire" : text;
        dom.bind(_this2.__button, "click", function(e) {
            e.preventDefault();
            _this.fire();
            return false;
        });
        dom.addClass(_this2.__button, "button");
        _this2.domElement.appendChild(_this2.__button);
        return _this2;
    }
    createClass(FunctionController1, [
        {
            key: "fire",
            value: function fire() {
                if (this.__onChange) this.__onChange.call(this);
                this.getValue().call(this.object);
                if (this.__onFinishChange) this.__onFinishChange.call(this, this.getValue());
            }
        }
    ]);
    return FunctionController1;
}(Controller);
var ColorController = function(_Controller) {
    inherits(ColorController1, _Controller);
    function ColorController1(object, property) {
        classCallCheck(this, ColorController1);
        var _this2 = possibleConstructorReturn(this, (ColorController1.__proto__ || Object.getPrototypeOf(ColorController1)).call(this, object, property));
        _this2.__color = new Color(_this2.getValue());
        _this2.__temp = new Color(0);
        var _this = _this2;
        _this2.domElement = document.createElement("div");
        dom.makeSelectable(_this2.domElement, false);
        _this2.__selector = document.createElement("div");
        _this2.__selector.className = "selector";
        _this2.__saturation_field = document.createElement("div");
        _this2.__saturation_field.className = "saturation-field";
        _this2.__field_knob = document.createElement("div");
        _this2.__field_knob.className = "field-knob";
        _this2.__field_knob_border = "2px solid ";
        _this2.__hue_knob = document.createElement("div");
        _this2.__hue_knob.className = "hue-knob";
        _this2.__hue_field = document.createElement("div");
        _this2.__hue_field.className = "hue-field";
        _this2.__input = document.createElement("input");
        _this2.__input.type = "text";
        _this2.__input_textShadow = "0 1px 1px ";
        dom.bind(_this2.__input, "keydown", function(e) {
            if (e.keyCode === 13) onBlur.call(this);
        });
        dom.bind(_this2.__input, "blur", onBlur);
        dom.bind(_this2.__selector, "mousedown", function() {
            dom.addClass(this, "drag").bind(window, "mouseup", function() {
                dom.removeClass(_this.__selector, "drag");
            });
        });
        dom.bind(_this2.__selector, "touchstart", function() {
            dom.addClass(this, "drag").bind(window, "touchend", function() {
                dom.removeClass(_this.__selector, "drag");
            });
        });
        var valueField = document.createElement("div");
        Common.extend(_this2.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        });
        Common.extend(_this2.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        });
        Common.extend(_this2.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        });
        Common.extend(_this2.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        });
        Common.extend(valueField.style, {
            width: "100%",
            height: "100%",
            background: "none"
        });
        linearGradient(valueField, "top", "rgba(0,0,0,0)", "#000");
        Common.extend(_this2.__hue_field.style, {
            width: "15px",
            height: "100px",
            border: "1px solid #555",
            cursor: "ns-resize",
            position: "absolute",
            top: "3px",
            right: "3px"
        });
        hueGradient(_this2.__hue_field);
        Common.extend(_this2.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: _this2.__input_textShadow + "rgba(0,0,0,0.7)"
        });
        dom.bind(_this2.__saturation_field, "mousedown", fieldDown);
        dom.bind(_this2.__saturation_field, "touchstart", fieldDown);
        dom.bind(_this2.__field_knob, "mousedown", fieldDown);
        dom.bind(_this2.__field_knob, "touchstart", fieldDown);
        dom.bind(_this2.__hue_field, "mousedown", fieldDownH);
        dom.bind(_this2.__hue_field, "touchstart", fieldDownH);
        function fieldDown(e) {
            setSV(e);
            dom.bind(window, "mousemove", setSV);
            dom.bind(window, "touchmove", setSV);
            dom.bind(window, "mouseup", fieldUpSV);
            dom.bind(window, "touchend", fieldUpSV);
        }
        function fieldDownH(e) {
            setH(e);
            dom.bind(window, "mousemove", setH);
            dom.bind(window, "touchmove", setH);
            dom.bind(window, "mouseup", fieldUpH);
            dom.bind(window, "touchend", fieldUpH);
        }
        function fieldUpSV() {
            dom.unbind(window, "mousemove", setSV);
            dom.unbind(window, "touchmove", setSV);
            dom.unbind(window, "mouseup", fieldUpSV);
            dom.unbind(window, "touchend", fieldUpSV);
            onFinish();
        }
        function fieldUpH() {
            dom.unbind(window, "mousemove", setH);
            dom.unbind(window, "touchmove", setH);
            dom.unbind(window, "mouseup", fieldUpH);
            dom.unbind(window, "touchend", fieldUpH);
            onFinish();
        }
        function onBlur() {
            var i = interpret(this.value);
            if (i !== false) {
                _this.__color.__state = i;
                _this.setValue(_this.__color.toOriginal());
            } else this.value = _this.__color.toString();
        }
        function onFinish() {
            if (_this.__onFinishChange) _this.__onFinishChange.call(_this, _this.__color.toOriginal());
        }
        _this2.__saturation_field.appendChild(valueField);
        _this2.__selector.appendChild(_this2.__field_knob);
        _this2.__selector.appendChild(_this2.__saturation_field);
        _this2.__selector.appendChild(_this2.__hue_field);
        _this2.__hue_field.appendChild(_this2.__hue_knob);
        _this2.domElement.appendChild(_this2.__input);
        _this2.domElement.appendChild(_this2.__selector);
        _this2.updateDisplay();
        function setSV(e) {
            if (e.type.indexOf("touch") === -1) e.preventDefault();
            var fieldRect = _this.__saturation_field.getBoundingClientRect();
            var _ref = e.touches && e.touches[0] || e, clientX = _ref.clientX, clientY = _ref.clientY;
            var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
            var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
            if (v > 1) v = 1;
            else if (v < 0) v = 0;
            if (s > 1) s = 1;
            else if (s < 0) s = 0;
            _this.__color.v = v;
            _this.__color.s = s;
            _this.setValue(_this.__color.toOriginal());
            return false;
        }
        function setH(e) {
            if (e.type.indexOf("touch") === -1) e.preventDefault();
            var fieldRect = _this.__hue_field.getBoundingClientRect();
            var _ref2 = e.touches && e.touches[0] || e, clientY = _ref2.clientY;
            var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
            if (h > 1) h = 1;
            else if (h < 0) h = 0;
            _this.__color.h = h * 360;
            _this.setValue(_this.__color.toOriginal());
            return false;
        }
        return _this2;
    }
    createClass(ColorController1, [
        {
            key: "updateDisplay",
            value: function updateDisplay() {
                var i = interpret(this.getValue());
                if (i !== false) {
                    var mismatch = false;
                    Common.each(Color.COMPONENTS, function(component) {
                        if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
                            mismatch = true;
                            return {};
                        }
                    }, this);
                    if (mismatch) Common.extend(this.__color.__state, i);
                }
                Common.extend(this.__temp.__state, this.__color.__state);
                this.__temp.a = 1;
                var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
                var _flip = 255 - flip;
                Common.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toHexString(),
                    border: this.__field_knob_border + "rgb(" + flip + "," + flip + "," + flip + ")"
                });
                this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px";
                this.__temp.s = 1;
                this.__temp.v = 1;
                linearGradient(this.__saturation_field, "left", "#fff", this.__temp.toHexString());
                this.__input.value = this.__color.toString();
                Common.extend(this.__input.style, {
                    backgroundColor: this.__color.toHexString(),
                    color: "rgb(" + flip + "," + flip + "," + flip + ")",
                    textShadow: this.__input_textShadow + "rgba(" + _flip + "," + _flip + "," + _flip + ",.7)"
                });
            }
        }
    ]);
    return ColorController1;
}(Controller);
var vendors = [
    "-moz-",
    "-o-",
    "-webkit-",
    "-ms-",
    ""
];
function linearGradient(elem, x, a, b) {
    elem.style.background = "";
    Common.each(vendors, function(vendor) {
        elem.style.cssText += "background: " + vendor + "linear-gradient(" + x + ", " + a + " 0%, " + b + " 100%); ";
    });
}
function hueGradient(elem) {
    elem.style.background = "";
    elem.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
    elem.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
    elem.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
    elem.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
    elem.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var css = {
    load: function load(url, indoc) {
        var doc = indoc || document;
        var link = doc.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        doc.getElementsByTagName("head")[0].appendChild(link);
    },
    inject: function inject(cssContent, indoc) {
        var doc = indoc || document;
        var injected = document.createElement("style");
        injected.type = "text/css";
        injected.innerHTML = cssContent;
        var head = doc.getElementsByTagName("head")[0];
        try {
            head.appendChild(injected);
        } catch (e) {}
    }
};
var saveDialogContents = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>';
var ControllerFactory = function ControllerFactory(object, property) {
    var initialValue = object[property];
    if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) return new OptionController(object, property, arguments[2]);
    if (Common.isNumber(initialValue)) {
        if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
            if (Common.isNumber(arguments[4])) return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
        }
        if (Common.isNumber(arguments[4])) return new NumberControllerBox(object, property, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4]
        });
        return new NumberControllerBox(object, property, {
            min: arguments[2],
            max: arguments[3]
        });
    }
    if (Common.isString(initialValue)) return new StringController(object, property);
    if (Common.isFunction(initialValue)) return new FunctionController(object, property, "");
    if (Common.isBoolean(initialValue)) return new BooleanController(object, property);
    return null;
};
function requestAnimationFrame(callback) {
    setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;
var CenteredDiv = function() {
    function CenteredDiv1() {
        classCallCheck(this, CenteredDiv1);
        this.backgroundElement = document.createElement("div");
        Common.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear",
            transition: "opacity 0.2s linear"
        });
        dom.makeFullscreen(this.backgroundElement);
        this.backgroundElement.style.position = "fixed";
        this.domElement = document.createElement("div");
        Common.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
            transition: "transform 0.2s ease-out, opacity 0.2s linear"
        });
        document.body.appendChild(this.backgroundElement);
        document.body.appendChild(this.domElement);
        var _this = this;
        dom.bind(this.backgroundElement, "click", function() {
            _this.hide();
        });
    }
    createClass(CenteredDiv1, [
        {
            key: "show",
            value: function show() {
                var _this = this;
                this.backgroundElement.style.display = "block";
                this.domElement.style.display = "block";
                this.domElement.style.opacity = 0;
                this.domElement.style.webkitTransform = "scale(1.1)";
                this.layout();
                Common.defer(function() {
                    _this.backgroundElement.style.opacity = 1;
                    _this.domElement.style.opacity = 1;
                    _this.domElement.style.webkitTransform = "scale(1)";
                });
            }
        },
        {
            key: "hide",
            value: function hide1() {
                var _this = this;
                var hide1 = function hide2() {
                    _this.domElement.style.display = "none";
                    _this.backgroundElement.style.display = "none";
                    dom.unbind(_this.domElement, "webkitTransitionEnd", hide2);
                    dom.unbind(_this.domElement, "transitionend", hide2);
                    dom.unbind(_this.domElement, "oTransitionEnd", hide2);
                };
                dom.bind(this.domElement, "webkitTransitionEnd", hide1);
                dom.bind(this.domElement, "transitionend", hide1);
                dom.bind(this.domElement, "oTransitionEnd", hide1);
                this.backgroundElement.style.opacity = 0;
                this.domElement.style.opacity = 0;
                this.domElement.style.webkitTransform = "scale(1.1)";
            }
        },
        {
            key: "layout",
            value: function layout() {
                this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + "px";
                this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + "px";
            }
        }
    ]);
    return CenteredDiv1;
}();
var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
css.inject(styleSheet);
var CSS_NAMESPACE = "dg";
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = "Default";
var SUPPORTS_LOCAL_STORAGE = function() {
    try {
        return !!window.localStorage;
    } catch (e) {
        return false;
    }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI1(pars) {
    var _this = this;
    var params = pars || {};
    this.domElement = document.createElement("div");
    this.__ul = document.createElement("ul");
    this.domElement.appendChild(this.__ul);
    dom.addClass(this.domElement, CSS_NAMESPACE);
    this.__folders = {};
    this.__controllers = [];
    this.__rememberedObjects = [];
    this.__rememberedObjectIndecesToControllers = [];
    this.__listening = [];
    params = Common.defaults(params, {
        closeOnTop: false,
        autoPlace: true,
        width: GUI1.DEFAULT_WIDTH
    });
    params = Common.defaults(params, {
        resizable: params.autoPlace,
        hideable: params.autoPlace
    });
    if (!Common.isUndefined(params.load)) {
        if (params.preset) params.load.preset = params.preset;
    } else params.load = {
        preset: DEFAULT_DEFAULT_PRESET_NAME
    };
    if (Common.isUndefined(params.parent) && params.hideable) hideableGuis.push(this);
    params.resizable = Common.isUndefined(params.parent) && params.resizable;
    if (params.autoPlace && Common.isUndefined(params.scrollable)) params.scrollable = true;
    var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, "isLocal")) === "true";
    var saveToLocalStorage = void 0;
    var titleRow = void 0;
    Object.defineProperties(this, {
        parent: {
            get: function get$$1() {
                return params.parent;
            }
        },
        scrollable: {
            get: function get$$1() {
                return params.scrollable;
            }
        },
        autoPlace: {
            get: function get$$1() {
                return params.autoPlace;
            }
        },
        closeOnTop: {
            get: function get$$1() {
                return params.closeOnTop;
            }
        },
        preset: {
            get: function get$$1() {
                if (_this.parent) return _this.getRoot().preset;
                return params.load.preset;
            },
            set: function set$$1(v) {
                if (_this.parent) _this.getRoot().preset = v;
                else params.load.preset = v;
                setPresetSelectIndex(this);
                _this.revert();
            }
        },
        width: {
            get: function get$$1() {
                return params.width;
            },
            set: function set$$1(v) {
                params.width = v;
                setWidth(_this, v);
            }
        },
        name: {
            get: function get$$1() {
                return params.name;
            },
            set: function set$$1(v) {
                params.name = v;
                if (titleRow) titleRow.innerHTML = params.name;
            }
        },
        closed: {
            get: function get$$1() {
                return params.closed;
            },
            set: function set$$1(v) {
                params.closed = v;
                if (params.closed) dom.addClass(_this.__ul, GUI1.CLASS_CLOSED);
                else dom.removeClass(_this.__ul, GUI1.CLASS_CLOSED);
                this.onResize();
                if (_this.__closeButton) _this.__closeButton.innerHTML = v ? GUI1.TEXT_OPEN : GUI1.TEXT_CLOSED;
            }
        },
        load: {
            get: function get$$1() {
                return params.load;
            }
        },
        useLocalStorage: {
            get: function get$$1() {
                return useLocalStorage;
            },
            set: function set$$1(bool) {
                if (SUPPORTS_LOCAL_STORAGE) {
                    useLocalStorage = bool;
                    if (bool) dom.bind(window, "unload", saveToLocalStorage);
                    else dom.unbind(window, "unload", saveToLocalStorage);
                    localStorage.setItem(getLocalStorageHash(_this, "isLocal"), bool);
                }
            }
        }
    });
    if (Common.isUndefined(params.parent)) {
        this.closed = params.closed || false;
        dom.addClass(this.domElement, GUI1.CLASS_MAIN);
        dom.makeSelectable(this.domElement, false);
        if (SUPPORTS_LOCAL_STORAGE) {
            if (useLocalStorage) {
                _this.useLocalStorage = true;
                var savedGui = localStorage.getItem(getLocalStorageHash(this, "gui"));
                if (savedGui) params.load = JSON.parse(savedGui);
            }
        }
        this.__closeButton = document.createElement("div");
        this.__closeButton.innerHTML = GUI1.TEXT_CLOSED;
        dom.addClass(this.__closeButton, GUI1.CLASS_CLOSE_BUTTON);
        if (params.closeOnTop) {
            dom.addClass(this.__closeButton, GUI1.CLASS_CLOSE_TOP);
            this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
        } else {
            dom.addClass(this.__closeButton, GUI1.CLASS_CLOSE_BOTTOM);
            this.domElement.appendChild(this.__closeButton);
        }
        dom.bind(this.__closeButton, "click", function() {
            _this.closed = !_this.closed;
        });
    } else {
        if (params.closed === undefined) params.closed = true;
        var titleRowName = document.createTextNode(params.name);
        dom.addClass(titleRowName, "controller-name");
        titleRow = addRow(_this, titleRowName);
        var onClickTitle = function onClickTitle(e) {
            e.preventDefault();
            _this.closed = !_this.closed;
            return false;
        };
        dom.addClass(this.__ul, GUI1.CLASS_CLOSED);
        dom.addClass(titleRow, "title");
        dom.bind(titleRow, "click", onClickTitle);
        if (!params.closed) this.closed = false;
    }
    if (params.autoPlace) {
        if (Common.isUndefined(params.parent)) {
            if (autoPlaceVirgin) {
                autoPlaceContainer = document.createElement("div");
                dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
                dom.addClass(autoPlaceContainer, GUI1.CLASS_AUTO_PLACE_CONTAINER);
                document.body.appendChild(autoPlaceContainer);
                autoPlaceVirgin = false;
            }
            autoPlaceContainer.appendChild(this.domElement);
            dom.addClass(this.domElement, GUI1.CLASS_AUTO_PLACE);
        }
        if (!this.parent) setWidth(_this, params.width);
    }
    this.__resizeHandler = function() {
        _this.onResizeDebounced();
    };
    dom.bind(window, "resize", this.__resizeHandler);
    dom.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler);
    dom.bind(this.__ul, "transitionend", this.__resizeHandler);
    dom.bind(this.__ul, "oTransitionEnd", this.__resizeHandler);
    this.onResize();
    if (params.resizable) addResizeHandle(this);
    saveToLocalStorage = function saveToLocalStorage() {
        if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, "isLocal")) === "true") localStorage.setItem(getLocalStorageHash(_this, "gui"), JSON.stringify(_this.getSaveObject()));
    };
    this.saveToLocalStorageIfPossible = saveToLocalStorage;
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        Common.defer(function() {
            root.width -= 1;
        });
    }
    if (!params.parent) resetWidth();
};
GUI.toggleHide = function() {
    hide = !hide;
    Common.each(hideableGuis, function(gui1) {
        gui1.domElement.style.display = hide ? "none" : "";
    });
};
GUI.CLASS_AUTO_PLACE = "a";
GUI.CLASS_AUTO_PLACE_CONTAINER = "ac";
GUI.CLASS_MAIN = "main";
GUI.CLASS_CONTROLLER_ROW = "cr";
GUI.CLASS_TOO_TALL = "taller-than-window";
GUI.CLASS_CLOSED = "closed";
GUI.CLASS_CLOSE_BUTTON = "close-button";
GUI.CLASS_CLOSE_TOP = "close-top";
GUI.CLASS_CLOSE_BOTTOM = "close-bottom";
GUI.CLASS_DRAG = "drag";
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = "Close Controls";
GUI.TEXT_OPEN = "Open Controls";
GUI._keydownHandler = function(e) {
    if (document.activeElement.type !== "text" && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) GUI.toggleHide();
};
dom.bind(window, "keydown", GUI._keydownHandler, false);
Common.extend(GUI.prototype, {
    add: function add(object, property) {
        return _add(this, object, property, {
            factoryArgs: Array.prototype.slice.call(arguments, 2)
        });
    },
    addColor: function addColor(object, property) {
        return _add(this, object, property, {
            color: true
        });
    },
    remove: function remove(controller) {
        this.__ul.removeChild(controller.__li);
        this.__controllers.splice(this.__controllers.indexOf(controller), 1);
        var _this = this;
        Common.defer(function() {
            _this.onResize();
        });
    },
    destroy: function destroy() {
        if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
        if (this.autoPlace) autoPlaceContainer.removeChild(this.domElement);
        var _this = this;
        Common.each(this.__folders, function(subfolder) {
            _this.removeFolder(subfolder);
        });
        dom.unbind(window, "keydown", GUI._keydownHandler, false);
        removeListeners(this);
    },
    addFolder: function addFolder(name) {
        if (this.__folders[name] !== undefined) throw new Error('You already have a folder in this GUI by the name "' + name + '"');
        var newGuiParams = {
            name: name,
            parent: this
        };
        newGuiParams.autoPlace = this.autoPlace;
        if (this.load && this.load.folders && this.load.folders[name]) {
            newGuiParams.closed = this.load.folders[name].closed;
            newGuiParams.load = this.load.folders[name];
        }
        var gui2 = new GUI(newGuiParams);
        this.__folders[name] = gui2;
        var li = addRow(this, gui2.domElement);
        dom.addClass(li, "folder");
        return gui2;
    },
    removeFolder: function removeFolder(folder) {
        this.__ul.removeChild(folder.domElement.parentElement);
        delete this.__folders[folder.name];
        if (this.load && this.load.folders && this.load.folders[folder.name]) delete this.load.folders[folder.name];
        removeListeners(folder);
        var _this = this;
        Common.each(folder.__folders, function(subfolder) {
            folder.removeFolder(subfolder);
        });
        Common.defer(function() {
            _this.onResize();
        });
    },
    open: function open() {
        this.closed = false;
    },
    close: function close() {
        this.closed = true;
    },
    hide: function hide() {
        this.domElement.style.display = "none";
    },
    show: function show() {
        this.domElement.style.display = "";
    },
    onResize: function onResize() {
        var root = this.getRoot();
        if (root.scrollable) {
            var top = dom.getOffset(root.__ul).top;
            var h = 0;
            Common.each(root.__ul.childNodes, function(node) {
                if (!(root.autoPlace && node === root.__save_row)) h += dom.getHeight(node);
            });
            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
                dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
                root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + "px";
            } else {
                dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
                root.__ul.style.height = "auto";
            }
        }
        if (root.__resize_handle) Common.defer(function() {
            root.__resize_handle.style.height = root.__ul.offsetHeight + "px";
        });
        if (root.__closeButton) root.__closeButton.style.width = root.width + "px";
    },
    onResizeDebounced: Common.debounce(function() {
        this.onResize();
    }, 50),
    remember: function remember() {
        if (Common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
        }
        if (this.parent) throw new Error("You can only call remember on a top level GUI.");
        var _this = this;
        Common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length === 0) addSaveMenu(_this);
            if (_this.__rememberedObjects.indexOf(object) === -1) _this.__rememberedObjects.push(object);
        });
        if (this.autoPlace) setWidth(this, this.width);
    },
    getRoot: function getRoot() {
        var gui3 = this;
        while(gui3.parent)gui3 = gui3.parent;
        return gui3;
    },
    getSaveObject: function getSaveObject() {
        var toReturn3 = this.load;
        toReturn3.closed = this.closed;
        if (this.__rememberedObjects.length > 0) {
            toReturn3.preset = this.preset;
            if (!toReturn3.remembered) toReturn3.remembered = {};
            toReturn3.remembered[this.preset] = getCurrentPreset(this);
        }
        toReturn3.folders = {};
        Common.each(this.__folders, function(element, key) {
            toReturn3.folders[key] = element.getSaveObject();
        });
        return toReturn3;
    },
    save: function save() {
        if (!this.load.remembered) this.load.remembered = {};
        this.load.remembered[this.preset] = getCurrentPreset(this);
        markPresetModified(this, false);
        this.saveToLocalStorageIfPossible();
    },
    saveAs: function saveAs(presetName) {
        if (!this.load.remembered) {
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
        }
        this.load.remembered[presetName] = getCurrentPreset(this);
        this.preset = presetName;
        addPresetOption(this, presetName, true);
        this.saveToLocalStorageIfPossible();
    },
    revert: function revert(gui4) {
        Common.each(this.__controllers, function(controller) {
            if (!this.getRoot().load.remembered) controller.setValue(controller.initialValue);
            else recallSavedValue(gui4 || this.getRoot(), controller);
            if (controller.__onFinishChange) controller.__onFinishChange.call(controller, controller.getValue());
        }, this);
        Common.each(this.__folders, function(folder) {
            folder.revert(folder);
        });
        if (!gui4) markPresetModified(this.getRoot(), false);
    },
    listen: function listen(controller) {
        var init = this.__listening.length === 0;
        this.__listening.push(controller);
        if (init) updateDisplays(this.__listening);
    },
    updateDisplay: function updateDisplay() {
        Common.each(this.__controllers, function(controller) {
            controller.updateDisplay();
        });
        Common.each(this.__folders, function(folder) {
            folder.updateDisplay();
        });
    }
});
function addRow(gui5, newDom, liBefore) {
    var li = document.createElement("li");
    if (newDom) li.appendChild(newDom);
    if (liBefore) gui5.__ul.insertBefore(li, liBefore);
    else gui5.__ul.appendChild(li);
    gui5.onResize();
    return li;
}
function removeListeners(gui6) {
    dom.unbind(window, "resize", gui6.__resizeHandler);
    if (gui6.saveToLocalStorageIfPossible) dom.unbind(window, "unload", gui6.saveToLocalStorageIfPossible);
}
function markPresetModified(gui7, modified) {
    var opt = gui7.__preset_select[gui7.__preset_select.selectedIndex];
    if (modified) opt.innerHTML = opt.value + "*";
    else opt.innerHTML = opt.value;
}
function augmentController(gui8, li, controller) {
    controller.__li = li;
    controller.__gui = gui8;
    Common.extend(controller, {
        options: function options(_options) {
            if (arguments.length > 1) {
                var nextSibling = controller.__li.nextElementSibling;
                controller.remove();
                return _add(gui8, controller.object, controller.property, {
                    before: nextSibling,
                    factoryArgs: [
                        Common.toArray(arguments)
                    ]
                });
            }
            if (Common.isArray(_options) || Common.isObject(_options)) {
                var _nextSibling = controller.__li.nextElementSibling;
                controller.remove();
                return _add(gui8, controller.object, controller.property, {
                    before: _nextSibling,
                    factoryArgs: [
                        _options
                    ]
                });
            }
        },
        name: function name(_name) {
            controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
            return controller;
        },
        listen: function listen() {
            controller.__gui.listen(controller);
            return controller;
        },
        remove: function remove() {
            controller.__gui.remove(controller);
            return controller;
        }
    });
    if (controller instanceof NumberControllerSlider) {
        var box = new NumberControllerBox(controller.object, controller.property, {
            min: controller.__min,
            max: controller.__max,
            step: controller.__step
        });
        Common.each([
            "updateDisplay",
            "onChange",
            "onFinishChange",
            "step",
            "min",
            "max"
        ], function(method) {
            var pc = controller[method];
            var pb = box[method];
            controller[method] = box[method] = function() {
                var args = Array.prototype.slice.call(arguments);
                pb.apply(box, args);
                return pc.apply(controller, args);
            };
        });
        dom.addClass(li, "has-slider");
        controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
    } else if (controller instanceof NumberControllerBox) {
        var r = function r(returned) {
            if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
                var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
                var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
                controller.remove();
                var newController = _add(gui8, controller.object, controller.property, {
                    before: controller.__li.nextElementSibling,
                    factoryArgs: [
                        controller.__min,
                        controller.__max,
                        controller.__step
                    ]
                });
                newController.name(oldName);
                if (wasListening) newController.listen();
                return newController;
            }
            return returned;
        };
        controller.min = Common.compose(r, controller.min);
        controller.max = Common.compose(r, controller.max);
    } else if (controller instanceof BooleanController) {
        dom.bind(li, "click", function() {
            dom.fakeEvent(controller.__checkbox, "click");
        });
        dom.bind(controller.__checkbox, "click", function(e) {
            e.stopPropagation();
        });
    } else if (controller instanceof FunctionController) {
        dom.bind(li, "click", function() {
            dom.fakeEvent(controller.__button, "click");
        });
        dom.bind(li, "mouseover", function() {
            dom.addClass(controller.__button, "hover");
        });
        dom.bind(li, "mouseout", function() {
            dom.removeClass(controller.__button, "hover");
        });
    } else if (controller instanceof ColorController) {
        dom.addClass(li, "color");
        controller.updateDisplay = Common.compose(function(val) {
            li.style.borderLeftColor = controller.__color.toString();
            return val;
        }, controller.updateDisplay);
        controller.updateDisplay();
    }
    controller.setValue = Common.compose(function(val) {
        if (gui8.getRoot().__preset_select && controller.isModified()) markPresetModified(gui8.getRoot(), true);
        return val;
    }, controller.setValue);
}
function recallSavedValue(gui9, controller) {
    var root = gui9.getRoot();
    var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
    if (matchedIndex !== -1) {
        var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
        if (controllerMap === undefined) {
            controllerMap = {};
            root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
        }
        controllerMap[controller.property] = controller;
        if (root.load && root.load.remembered) {
            var presetMap = root.load.remembered;
            var preset = void 0;
            if (presetMap[gui9.preset]) preset = presetMap[gui9.preset];
            else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
            else return;
            if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
                var value = preset[matchedIndex][controller.property];
                controller.initialValue = value;
                controller.setValue(value);
            }
        }
    }
}
function _add(gui10, object, property, params) {
    if (object[property] === undefined) throw new Error('Object "' + object + '" has no property "' + property + '"');
    var controller = void 0;
    if (params.color) controller = new ColorController(object, property);
    else {
        var factoryArgs = [
            object,
            property
        ].concat(params.factoryArgs);
        controller = ControllerFactory.apply(gui10, factoryArgs);
    }
    if (params.before instanceof Controller) params.before = params.before.__li;
    recallSavedValue(gui10, controller);
    dom.addClass(controller.domElement, "c");
    var name = document.createElement("span");
    dom.addClass(name, "property-name");
    name.innerHTML = controller.property;
    var container = document.createElement("div");
    container.appendChild(name);
    container.appendChild(controller.domElement);
    var li = addRow(gui10, container, params.before);
    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    if (controller instanceof ColorController) dom.addClass(li, "color");
    else dom.addClass(li, _typeof(controller.getValue()));
    augmentController(gui10, li, controller);
    gui10.__controllers.push(controller);
    return controller;
}
function getLocalStorageHash(gui, key) {
    return document.location.href + "." + key;
}
function addPresetOption(gui11, name, setSelected) {
    var opt = document.createElement("option");
    opt.innerHTML = name;
    opt.value = name;
    gui11.__preset_select.appendChild(opt);
    if (setSelected) gui11.__preset_select.selectedIndex = gui11.__preset_select.length - 1;
}
function showHideExplain(gui12, explain) {
    explain.style.display = gui12.useLocalStorage ? "block" : "none";
}
function addSaveMenu(gui13) {
    var div = gui13.__save_row = document.createElement("li");
    dom.addClass(gui13.domElement, "has-save");
    gui13.__ul.insertBefore(div, gui13.__ul.firstChild);
    dom.addClass(div, "save-row");
    var gears = document.createElement("span");
    gears.innerHTML = "&nbsp;";
    dom.addClass(gears, "button gears");
    var button = document.createElement("span");
    button.innerHTML = "Save";
    dom.addClass(button, "button");
    dom.addClass(button, "save");
    var button2 = document.createElement("span");
    button2.innerHTML = "New";
    dom.addClass(button2, "button");
    dom.addClass(button2, "save-as");
    var button3 = document.createElement("span");
    button3.innerHTML = "Revert";
    dom.addClass(button3, "button");
    dom.addClass(button3, "revert");
    var select = gui13.__preset_select = document.createElement("select");
    if (gui13.load && gui13.load.remembered) Common.each(gui13.load.remembered, function(value, key) {
        addPresetOption(gui13, key, key === gui13.preset);
    });
    else addPresetOption(gui13, DEFAULT_DEFAULT_PRESET_NAME, false);
    dom.bind(select, "change", function() {
        for(var index2 = 0; index2 < gui13.__preset_select.length; index2++)gui13.__preset_select[index2].innerHTML = gui13.__preset_select[index2].value;
        gui13.preset = this.value;
    });
    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);
    if (SUPPORTS_LOCAL_STORAGE) {
        var explain = document.getElementById("dg-local-explain");
        var localStorageCheckBox = document.getElementById("dg-local-storage");
        var saveLocally = document.getElementById("dg-save-locally");
        saveLocally.style.display = "block";
        if (localStorage.getItem(getLocalStorageHash(gui13, "isLocal")) === "true") localStorageCheckBox.setAttribute("checked", "checked");
        showHideExplain(gui13, explain);
        dom.bind(localStorageCheckBox, "change", function() {
            gui13.useLocalStorage = !gui13.useLocalStorage;
            showHideExplain(gui13, explain);
        });
    }
    var newConstructorTextArea = document.getElementById("dg-new-constructor");
    dom.bind(newConstructorTextArea, "keydown", function(e) {
        if (e.metaKey && (e.which === 67 || e.keyCode === 67)) SAVE_DIALOGUE.hide();
    });
    dom.bind(gears, "click", function() {
        newConstructorTextArea.innerHTML = JSON.stringify(gui13.getSaveObject(), undefined, 2);
        SAVE_DIALOGUE.show();
        newConstructorTextArea.focus();
        newConstructorTextArea.select();
    });
    dom.bind(button, "click", function() {
        gui13.save();
    });
    dom.bind(button2, "click", function() {
        var presetName = prompt("Enter a new preset name.");
        if (presetName) gui13.saveAs(presetName);
    });
    dom.bind(button3, "click", function() {
        gui13.revert();
    });
}
function addResizeHandle(gui14) {
    var pmouseX = void 0;
    gui14.__resize_handle = document.createElement("div");
    Common.extend(gui14.__resize_handle.style, {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
    });
    function drag(e) {
        e.preventDefault();
        gui14.width += pmouseX - e.clientX;
        gui14.onResize();
        pmouseX = e.clientX;
        return false;
    }
    function dragStop() {
        dom.removeClass(gui14.__closeButton, GUI.CLASS_DRAG);
        dom.unbind(window, "mousemove", drag);
        dom.unbind(window, "mouseup", dragStop);
    }
    function dragStart(e) {
        e.preventDefault();
        pmouseX = e.clientX;
        dom.addClass(gui14.__closeButton, GUI.CLASS_DRAG);
        dom.bind(window, "mousemove", drag);
        dom.bind(window, "mouseup", dragStop);
        return false;
    }
    dom.bind(gui14.__resize_handle, "mousedown", dragStart);
    dom.bind(gui14.__closeButton, "mousedown", dragStart);
    gui14.domElement.insertBefore(gui14.__resize_handle, gui14.domElement.firstElementChild);
}
function setWidth(gui15, w) {
    gui15.domElement.style.width = w + "px";
    if (gui15.__save_row && gui15.autoPlace) gui15.__save_row.style.width = w + "px";
    if (gui15.__closeButton) gui15.__closeButton.style.width = w + "px";
}
function getCurrentPreset(gui16, useInitialValues) {
    var toReturn4 = {};
    Common.each(gui16.__rememberedObjects, function(val, index3) {
        var savedValues = {};
        var controllerMap = gui16.__rememberedObjectIndecesToControllers[index3];
        Common.each(controllerMap, function(controller, property) {
            savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
        });
        toReturn4[index3] = savedValues;
    });
    return toReturn4;
}
function setPresetSelectIndex(gui17) {
    for(var index4 = 0; index4 < gui17.__preset_select.length; index4++)if (gui17.__preset_select[index4].value === gui17.preset) gui17.__preset_select.selectedIndex = index4;
}
function updateDisplays(controllerArray) {
    if (controllerArray.length !== 0) requestAnimationFrame$1.call(window, function() {
        updateDisplays(controllerArray);
    });
    Common.each(controllerArray, function(c) {
        c.updateDisplay();
    });
}
var color = {
    Color: Color,
    math: ColorMath,
    interpret: interpret
};
var controllers = {
    Controller: Controller,
    BooleanController: BooleanController,
    OptionController: OptionController,
    StringController: StringController,
    NumberController: NumberController,
    NumberControllerBox: NumberControllerBox,
    NumberControllerSlider: NumberControllerSlider,
    FunctionController: FunctionController,
    ColorController: ColorController
};
var dom$1 = {
    dom: dom
};
var gui = {
    GUI: GUI
};
var GUI$1 = GUI;
var index = {
    color: color,
    controllers: controllers,
    dom: dom$1,
    gui: gui,
    GUI: GUI$1
};
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["6ZneZ","15ljZ"], "15ljZ", "parcelRequire22c7")

//# sourceMappingURL=index.f1ed9db5.js.map
