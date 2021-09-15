/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) {
  "use strict";

  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }

  function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }

  function g(a, b, c) {
    var e;
    if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }

  function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
    return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);
      return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }

  function i(a, b, c) {
    var d,
        e = b.prototype;
    d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }

  function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }

  function k(a, b) {
    return _typeof(a) == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }

  function l(a, b) {
    return a === d ? b : a;
  }

  function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }

  function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }

  function o(a, b) {
    for (; a;) {
      if (a == b) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  function p(a, b) {
    return a.indexOf(b) > -1;
  }

  function q(a) {
    return a.trim().split(/\s+/g);
  }

  function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);

    for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;
      d++;
    }

    return -1;
  }

  function s(a) {
    return Array.prototype.slice.call(a, 0);
  }

  function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];
      r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }

    return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }

  function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if (c = ma[g], e = c ? c + f : b, e in a) return e;
      g++;
    }

    return d;
  }

  function v() {
    return ua++;
  }

  function w(b) {
    var c = b.ownerDocument || b;
    return c.defaultView || c.parentWindow || a;
  }

  function x(a, b) {
    var c = this;
    this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }

  function y(a) {
    var b,
        c = a.options.inputClass;
    return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }

  function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;
    c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }

  function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;
    c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
    var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);
    b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
    var j = F(b.deltaTime, b.deltaX, b.deltaY);
    b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
    var k = a.element;
    o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }

  function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
    b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
      x: f.deltaX || 0,
      y: f.deltaY || 0
    }, d = a.offsetDelta = {
      x: c.x,
      y: c.y
    }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }

  function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;

    if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);
      e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;

    b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }

  function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = {
        clientX: pa(a.pointers[c].clientX),
        clientY: pa(a.pointers[c].clientY)
      }, c++;
    }

    return {
      timeStamp: ra(),
      pointers: b,
      center: E(b),
      deltaX: a.deltaX,
      deltaY: a.deltaY
    };
  }

  function E(a) {
    var b = a.length;
    if (1 === b) return {
      x: pa(a[0].clientX),
      y: pa(a[0].clientY)
    };

    for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }

    return {
      x: pa(c / b),
      y: pa(d / b)
    };
  }

  function F(a, b, c) {
    return {
      x: b / a || 0,
      y: c / a || 0
    };
  }

  function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }

  function H(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
    return Math.sqrt(d * d + e * e);
  }

  function I(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
    return 180 * Math.atan2(e, d) / Math.PI;
  }

  function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }

  function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }

  function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }

  function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }

  function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }

  function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);
    return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }

  function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }

  function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;
    if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
    var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;
    if (f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }

    for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
    }

    return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }

  function R() {
    x.apply(this, arguments);
    var a = j(this.handler, this);
    this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }

  function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }

  function T(a) {
    var b = a.changedPointers[0];

    if (b.identifier === this.primaryTouch) {
      var c = {
        x: b.clientX,
        y: b.clientY
      };
      this.lastTouches.push(c);

      var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);
        a > -1 && d.splice(a, 1);
      };

      setTimeout(e, cb);
    }
  }

  function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);
      if (db >= f && db >= g) return !0;
    }

    return !1;
  }

  function V(a, b) {
    this.manager = a, this.set(b);
  }

  function W(a) {
    if (p(a, jb)) return jb;
    var b = p(a, kb),
        c = p(a, lb);
    return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }

  function X() {
    if (!fb) return !1;
    var b = {},
        c = a.CSS && a.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }

  function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }

  function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }

  function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }

  function _(a, b) {
    var c = b.manager;
    return c ? c.get(a) : a;
  }

  function aa() {
    Y.apply(this, arguments);
  }

  function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }

  function ca() {
    aa.apply(this, arguments);
  }

  function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }

  function ea() {
    aa.apply(this, arguments);
  }

  function fa() {
    aa.apply(this, arguments);
  }

  function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }

  function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }

  function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));
      a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }

  function ja(a, b) {
    var c = a.element;

    if (c.style) {
      var d;
      g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }

  function ka(a, c) {
    var d = b.createEvent("Event");
    d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }

  var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;
  la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");

    for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      if (e !== d && null !== e) for (var f in e) {
        e.hasOwnProperty(f) && (b[f] = e[f]);
      }
    }

    return b;
  } : Object.assign;
  var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }

    return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = ("ontouchstart" in a),
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];
  x.prototype = {
    handler: function handler() {},
    init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    },
    destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    }
  };
  var Sa = {
    mousedown: Ea,
    mousemove: Fa,
    mouseup: Ga
  },
      Ta = "mousedown",
      Ua = "mousemove mouseup";
  i(L, x, {
    handler: function handler(a) {
      var b = Sa[a.type];
      b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
        pointers: [a],
        changedPointers: [a],
        pointerType: Ba,
        srcEvent: a
      }));
    }
  });
  var Va = {
    pointerdown: Ea,
    pointermove: Fa,
    pointerup: Ga,
    pointercancel: Ha,
    pointerout: Ha
  },
      Wa = {
    2: za,
    3: Aa,
    4: Ba,
    5: Ca
  },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";
  a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
    handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");
      e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
        pointers: b,
        changedPointers: [a],
        pointerType: f,
        srcEvent: a
      }), c && b.splice(h, 1));
    }
  });
  var Za = {
    touchstart: Ea,
    touchmove: Fa,
    touchend: Ga,
    touchcancel: Ha
  },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";
  i(N, x, {
    handler: function handler(a) {
      var b = Za[a.type];

      if (b === Ea && (this.started = !0), this.started) {
        var c = O.call(this, a, b);
        b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: za,
          srcEvent: a
        });
      }
    }
  });
  var ab = {
    touchstart: Ea,
    touchmove: Fa,
    touchend: Ga,
    touchcancel: Ha
  },
      bb = "touchstart touchmove touchend touchcancel";
  i(P, x, {
    handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);
      c && this.callback(this.manager, b, {
        pointers: c[0],
        changedPointers: c[1],
        pointerType: za,
        srcEvent: a
      });
    }
  });
  var cb = 2500,
      db = 25;
  i(R, x, {
    handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;

      if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;
        this.callback(a, b, c);
      }
    },
    destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    }
  });
  var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();
  V.prototype = {
    set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    },
    update: function update() {
      this.set(this.manager.options.touchAction);
    },
    compute: function compute() {
      var a = [];
      return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    },
    preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;
      if (this.manager.session.prevented) return void b.preventDefault();
      var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];

      if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;
        if (h && i && j) return;
      }

      return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    },
    preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    }
  };
  var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;
  Y.prototype = {
    defaults: {},
    set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    },
    recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;
      var b = this.simultaneous;
      return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    },
    dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    },
    requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;
      var b = this.requireFail;
      return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    },
    dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;
      a = _(a, this);
      var b = r(this.requireFail, a);
      return b > -1 && this.requireFail.splice(b, 1), this;
    },
    hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    },
    emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }

      var c = this,
          d = this.state;
      qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    },
    tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    },
    canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;
        a++;
      }

      return !0;
    },
    recognize: function recognize(a) {
      var b = la({}, a);
      return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    },
    process: function process(a) {},
    getTouchAction: function getTouchAction() {},
    reset: function reset() {}
  }, i(aa, Y, {
    defaults: {
      pointers: 1
    },
    attrTest: function attrTest(a) {
      var b = this.options.pointers;
      return 0 === b || a.pointers.length === b;
    },
    process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);
      return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    }
  }), i(ba, aa, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: Pa
    },
    getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];
      return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    },
    directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;
      return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    },
    attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    },
    emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;
      var b = $(a.direction);
      b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    }
  }), i(ca, aa, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [jb];
    },
    attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    },
    emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";
        a.additionalEvent = this.options.event + b;
      }

      this._super.emit.call(this, a);
    }
  }), i(da, Y, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function getTouchAction() {
      return [hb];
    },
    process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;
      if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;
      return tb;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    }
  }), i(ea, aa, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [jb];
    },
    attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    }
  }), i(fa, aa, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: Na | Oa,
      pointers: 1
    },
    getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    },
    attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;
      return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    },
    emit: function emit(a) {
      var b = $(a.offsetDirection);
      b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    }
  }), i(ga, Y, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function getTouchAction() {
      return [ib];
    },
    process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;
      if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();

      if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();
        var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
        this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
        var i = this.count % b.taps;
        if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }

      return tb;
    },
    failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    }
  }), ha.VERSION = "2.0.8", ha.defaults = {
    domEvents: !1,
    touchAction: gb,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[ea, {
      enable: !1
    }], [ca, {
      enable: !1
    }, ["rotate"]], [fa, {
      direction: Na
    }], [ba, {
      direction: Na
    }, ["swipe"]], [ga], [ga, {
      event: "doubletap",
      taps: 2
    }, ["tap"]], [da]],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var ub = 1,
      vb = 2;
  ia.prototype = {
    set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    },
    stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    },
    recognize: function recognize(a) {
      var b = this.session;

      if (!b.stopped) {
        this.touchAction.preventDefaults(a);
        var c,
            d = this.recognizers,
            e = b.curRecognizer;
        (!e || e && e.state & rb) && (e = b.curRecognizer = null);

        for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
        }
      }
    },
    get: function get(a) {
      if (a instanceof Y) return a;

      for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }

      return null;
    },
    add: function add(a) {
      if (f(a, "add", this)) return this;
      var b = this.get(a.options.event);
      return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    },
    remove: function remove(a) {
      if (f(a, "remove", this)) return this;

      if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);
        -1 !== c && (b.splice(c, 1), this.touchAction.update());
      }

      return this;
    },
    on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;
        return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    },
    off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;
        return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    },
    emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);
      var c = this.handlers[a] && this.handlers[a].slice();

      if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };

        for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    },
    destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    }
  }, la(ha, {
    INPUT_START: Ea,
    INPUT_MOVE: Fa,
    INPUT_END: Ga,
    INPUT_CANCEL: Ha,
    STATE_POSSIBLE: nb,
    STATE_BEGAN: ob,
    STATE_CHANGED: pb,
    STATE_ENDED: qb,
    STATE_RECOGNIZED: rb,
    STATE_CANCELLED: sb,
    STATE_FAILED: tb,
    DIRECTION_NONE: Ia,
    DIRECTION_LEFT: Ja,
    DIRECTION_RIGHT: Ka,
    DIRECTION_UP: La,
    DIRECTION_DOWN: Ma,
    DIRECTION_HORIZONTAL: Na,
    DIRECTION_VERTICAL: Oa,
    DIRECTION_ALL: Pa,
    Manager: ia,
    Input: x,
    TouchAction: V,
    TouchInput: P,
    MouseInput: L,
    PointerEventInput: M,
    TouchMouseInput: R,
    SingleTouchInput: N,
    Recognizer: Y,
    AttrRecognizer: aa,
    Tap: ga,
    Pan: ba,
    Swipe: fa,
    Pinch: ca,
    Rotate: ea,
    Press: da,
    on: m,
    off: n,
    each: g,
    merge: ta,
    extend: sa,
    assign: la,
    inherit: i,
    bindFn: j,
    prefixed: u
  });
  var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  wb.Hammer = ha,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return ha;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, document, "Hammer");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

!function (y, t) {
  "use strict";

  var i = "imagesCompare",
      u = {
    initVisibleRatio: .5,
    interactionMode: "drag",
    animationDuration: 400,
    animationEasing: "swing",
    addSeparator: !0,
    addDragHandle: !0,
    precision: 4
  };

  function n(m, p) {
    var a, e;
    m = y(m), (p = y.extend({}, u, p)).roundFactor = parseInt("1" + (a = "0", e = p.precision, String.prototype.repeat ? a.repeat(e) : (e = e || 1, new Array(e + 1).join(a)))), this._name = i;
    var g,
        n,
        f,
        h,
        l = 1,
        v = {
      width: 0,
      height: 0,
      maxWidth: 0,
      maxHeight: 0
    },
        w = {
      initialised: "imagesCompare:initialised",
      changed: "imagesCompare:changed",
      resized: "imagesCompare:resized"
    };

    function r() {
      y(t).on("resize", function (a) {
        g.css("clip", ""), d(), c(l), m.trigger({
          type: w.resized,
          originalEvent: a
        });
      });
    }

    function o() {
      var a;
      "undefined" == typeof Hammer && console.error("Please include the hammerjs library for drag support"), (a = new Hammer(m[0])).get("pan").set({
        direction: Hammer.DIRECTION_HORIZONTAL
      }), a.on("pan", function (a) {
        var e = s(a.srcEvent.pageX);
        c(e);
      }), r();
    }

    function d() {
      var a = n.find("img").first();
      !function (a, e, t, i) {
        void 0 !== a && (n = a, v.width = n);
        var n;
        void 0 !== e && (r = e, v.height = r);
        var r;
        void 0 !== t && (o = t, v.maxWidth = o);
        var o;
        void 0 !== i && (d = i, v.maxHeight = d);
        var d;
      }(a.width(), a.height(), a.naturalWidth(), a.naturalHeight()), m.css("max-width", v.maxWidth + "px"), m.css("max-height", v.maxHeight + "px"), g.width(v.width), g.height(v.height);
    }

    function s(a) {
      return function (a) {
        1 < (a = Math.round(a * p.roundFactor) / p.roundFactor) && (a = 1);
        a < 0 && (a = 0);
        return a;
      }((a - m.offset().left) / g.width());
    }

    function x(a) {
      return a = Math.round(a * p.roundFactor) / p.roundFactor, Math.round(g.width() * a);
    }

    function c(a, e, t, i) {
      void 0 === e && (e = !1);
      var n,
          r,
          o,
          d,
          s = x(a);

      if (e) {
        var c = t || p.animationDuration,
            u = i || p.animationEasing;
        return n = l, r = a, o = c, d = u, y(g).attr("ratio", n).animate({
          ratio: n
        }, {
          duration: 0
        }), y(g).stop().attr("ratio", n).animate({
          ratio: r
        }, {
          duration: o,
          easing: d,
          step: function step(a) {
            var e = x(a);
            l = a, g.attr("ratio", a).css("clip", "rect(0, " + e + "px, " + v.height + "px, 0)"), p.addSeparator && f.css("left", e + "px"), p.addDragHandle && h.css("left", e + "px");
          },
          done: function done(a, e) {
            var t = y(g).attr("ratio");
            m.trigger({
              type: w.changed,
              ratio: t,
              value: x(t),
              animate: !0,
              animation: a,
              jumpedToEnd: e
            });
          }
        }), void (l != a && m.trigger({
          type: w.changed,
          ratio: l,
          value: s,
          animate: e
        }));
      }

      g.stop().css("clip", "rect(0, " + s + "px, " + v.height + "px, 0)"), p.addSeparator && y(f).stop().css("left", s + "px"), p.addDragHandle && h.css("left", s + "px"), l != a && m.trigger({
        type: w.changed,
        ratio: a,
        value: s,
        animate: e
      }), l = a;
    }

    return function () {
      var a = m.find("img"),
          e = a.length,
          t = 0;

      function i() {
        e <= t && (m.addClass("images-compare-container"), m.css("display", "inline-block"), g = m.find("> *:nth-child(1)"), n = m.find("> *:nth-child(2)"), g.addClass("images-compare-before"), g.css("display", "block"), n.addClass("images-compare-after"), n.css("display", "block"), p.addDragHandle && (m.prepend("<div class='images-compare-handle'></div>"), (h = m.find(".images-compare-handle")).append("<span class='images-compare-left-arrow'></span>"), h.append("<span class='images-compare-right-arrow'></span>")), p.addSeparator && (m.prepend("<div class='images-compare-separator'></div>"), f = m.find(".images-compare-separator")), d(), function () {
          switch (p.interactionMode = p.interactionMode.toLowerCase(), "drag" != p.interactionMode && "mousemove" != p.interactionMode && "click" != p.interactionMode && console.warn('No valid interactionMode found, valid values are "drag", "mousemove", "click"'), p.interactionMode) {
            case "drag":
              o();
              break;

            case "mousemove":
              i = 0, m.on("mousemove", function (a) {
                a.preventDefault();
                var e = Date.now();

                if (i + 1 < e) {
                  i = e;
                  var t = s(a.pageX);
                  c(t);
                }
              }), m.on("mouseout", function (a) {
                var e = s(a.pageX);
                c(e);
              }), r();
              break;

            case "click":
              m.on("click", function (a) {
                var e = s(a.pageX);
                c(e);
              }), r();
              break;

            default:
              o();
          }

          var i;
        }(), y(g).attr("ratio", p.initVisibleRatio), c(p.initVisibleRatio), m.trigger({
          type: w.initialised
        }));
      }

      a.each(function () {
        y(this)[0].complete ? (e--, i()) : (y(this).on("load", function () {
          t++, i();
        }), y(this).on("error", function () {
          t++, i();
        }));
      });
    }(), {
      setValue: function setValue(a, e, t, i) {
        return c(a, e, t, i), m;
      },
      getValue: function getValue() {
        return l;
      },
      on: function on(a, e) {
        return m.on(a, e), m;
      },
      off: function off(a, e) {
        return m.off(a, e), m;
      },
      events: function events() {
        return w;
      }
    };
  }

  y.fn.imagesCompare = function (a) {
    var e = y.extend(u, a);
    return this.each(function () {
      y.data(this, i) || y.data(this, i, new n(this, e));
    });
  };
}(jQuery, window, document), function (e) {
  var a,
      t,
      i = ["Width", "Height"];
  t = i.length;

  for (var n = 0; n < t; n++) {
    !function (a, i) {
      e.fn[a] = a in document.createElement("img") ? function () {
        return this[0][a];
      } : function () {
        var a,
            e = this[0],
            t = 0;
        return "img" === e.tagName.toLowerCase() && ((a = document.createElement("img")).src = e.src, t = a[i]), t;
      };
    }("natural" + (a = i[n]), a.toLowerCase());
  }
}(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./hammer.js
var hammer = __webpack_require__(0);

// EXTERNAL MODULE: ./jquery.images-compare.min.js
var jquery_images_compare_min = __webpack_require__(1);

// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/_rollupPluginBabelHelpers-74ba0139.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _rollupPluginBabelHelpers_74ba0139_set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    _rollupPluginBabelHelpers_74ba0139_set = Reflect.set;
  } else {
    _rollupPluginBabelHelpers_74ba0139_set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return _rollupPluginBabelHelpers_74ba0139_set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = _rollupPluginBabelHelpers_74ba0139_set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/core/utils.js


/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/core/action-details.js



/** Provides details of changing input */

var action_details_ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  _createClass(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/core/change-details.js


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var change_details_ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    _classCallCheck(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  _createClass(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/core/continuous-tail-details.js


/** Provides details of continuous extracted tail */
var continuous_tail_details_ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  _createClass(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/core/holder.js
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/base.js






/** Supported mask type */

/** Provides common masking stuff */
var base_Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    _classCallCheck(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  _createClass(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new continuous_tail_details_ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new continuous_tail_details_ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new change_details_ChangeDetails();
      this._value += ch;
      return new change_details_ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new change_details_ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new change_details_ChangeDetails();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      var details = new change_details_ChangeDetails();
      var checkTail = isString(tail) ? new continuous_tail_details_ContinuousTailDetails(String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new change_details_ChangeDetails();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new change_details_ChangeDetails({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }]);

  return Masked;
}();
base_Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
IMask.Masked = base_Masked;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/factory.js




/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

  if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

  if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return IMask.MaskedFunction; // $FlowFixMe

  if (mask instanceof IMask.Masked) return mask.constructor;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return IMask.Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (IMask.Masked && opts instanceof IMask.Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (IMask.Masked && mask instanceof IMask.Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
IMask.createMask = createMask;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/pattern/input-definition.js






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var input_definition_PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    _classCallCheck(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = _objectWithoutProperties(opts, _excluded);

    this.masked = createMask({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  _createClass(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new change_details_ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new change_details_ChangeDetails();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new change_details_ChangeDetails();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/pattern/fixed-definition.js





var fixed_definition_PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    _classCallCheck(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  _createClass(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new change_details_ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;

        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new change_details_ChangeDetails();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new change_details_ChangeDetails();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new continuous_tail_details_ContinuousTailDetails('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new continuous_tail_details_ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/pattern/chunk-tail-details.js






var chunk_tail_details_excluded = ["chunks"];

var chunk_tail_details_ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  _createClass(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (isString(tailChunk)) tailChunk = new continuous_tail_details_ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof continuous_tail_details_ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new continuous_tail_details_ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }

      var details = new change_details_ChangeDetails();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = _objectWithoutProperties(state, chunk_tail_details_excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new continuous_tail_details_ContinuousTailDetails(); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/regexp.js







/** Masking by RegExp */

var regexp_MaskedRegExp = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedRegExp, _Masked);

  var _super = _createSuper(MaskedRegExp);

  function MaskedRegExp() {
    _classCallCheck(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  _createClass(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(base_Masked);
IMask.MaskedRegExp = regexp_MaskedRegExp;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/pattern.js












var pattern_excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var pattern_MaskedPattern = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedPattern, _Masked);

  var _super = _createSuper(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  _createClass(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new input_definition_PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new fixed_definition_PatternFixedDefinition({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = _objectWithoutProperties(state, pattern_excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new change_details_ChangeDetails();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new chunk_tail_details_ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof chunk_tail_details_ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new change_details_ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === DIRECTION.NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === DIRECTION.LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(base_Masked);
pattern_MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
pattern_MaskedPattern.STOP_CHAR = '`';
pattern_MaskedPattern.ESCAPE_CHAR = '\\';
pattern_MaskedPattern.InputDefinition = input_definition_PatternInputDefinition;
pattern_MaskedPattern.FixedDefinition = fixed_definition_PatternFixedDefinition;

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
}

IMask.MaskedPattern = pattern_MaskedPattern;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/range.js













/** Pattern which accepts ranges */

var range_MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedRange, _MaskedPattern);

  var _super = _createSuper(MaskedRange);

  function MaskedRange() {
    _classCallCheck(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  _createClass(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(pattern_MaskedPattern);
IMask.MaskedRange = range_MaskedRange;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/date.js














/** Date mask */

var date_MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedDate, _MaskedPattern);

  var _super = _createSuper(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    _classCallCheck(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  _createClass(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);

  return MaskedDate;
}(pattern_MaskedPattern);
date_MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

date_MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: range_MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: range_MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: range_MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};

IMask.MaskedDate = date_MaskedDate;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/controls/mask-element.js



/**
  Generic element API to use with mask
  @interface
*/
var mask_element_MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    _classCallCheck(this, MaskElement);
  }

  _createClass(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
IMask.MaskElement = mask_element_MaskElement;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/controls/html-mask-element.js




/** Bridge between HTMLElement and {@link Masked} */

var html_mask_element_HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  _inherits(HTMLMaskElement, _MaskElement);

  var _super = _createSuper(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    _classCallCheck(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  _createClass(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(mask_element_MaskElement);
html_mask_element_HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
IMask.HTMLMaskElement = html_mask_element_HTMLMaskElement;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/controls/html-contenteditable-mask-element.js





var html_contenteditable_mask_element_HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = _createSuper(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    _classCallCheck(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  _createClass(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(html_mask_element_HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = html_contenteditable_mask_element_HTMLContenteditableMaskElement;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/controls/input.js



















var input_excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var input_InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    _classCallCheck(this, InputMask);

    this.el = el instanceof mask_element_MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new html_contenteditable_mask_element_HTMLContenteditableMaskElement(el) : new html_mask_element_HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  _createClass(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = createMask({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof date_MaskedDate;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = _objectWithoutProperties(opts, input_excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new action_details_ActionDetails( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
IMask.InputMask = input_InputMask;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/enum.js













/** Pattern which validates enum values */

var enum_MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedEnum, _MaskedPattern);

  var _super = _createSuper(MaskedEnum);

  function MaskedEnum() {
    _classCallCheck(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  _createClass(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(pattern_MaskedPattern);
IMask.MaskedEnum = enum_MaskedEnum;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/number.js







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var number_MaskedNumber = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedNumber, _Masked);

  var _super = _createSuper(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    _classCallCheck(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  _createClass(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new change_details_ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(base_Masked);
number_MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
IMask.MaskedNumber = number_MaskedNumber;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/function.js







/** Masking by custom Function */

var function_MaskedFunction = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedFunction, _Masked);

  var _super = _createSuper(MaskedFunction);

  function MaskedFunction() {
    _classCallCheck(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  _createClass(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(base_Masked);
IMask.MaskedFunction = function_MaskedFunction;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/dynamic.js








var dynamic_excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var dynamic_MaskedDynamic = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedDynamic, _Masked);

  var _super = _createSuper(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    _classCallCheck(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  _createClass(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return createMask(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new change_details_ChangeDetails();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new change_details_ChangeDetails();

      if (this.currentMask) {
        var _this$currentMask2;

        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutProperties(state, dynamic_excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;

      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(base_Masked);
dynamic_MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = dynamic_MaskedDynamic;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/masked/pipe.js





/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;



// CONCATENATED MODULE: G:/freelance/kotupodhvost/node_modules/imask/esm/index.js


























try {
  globalThis.IMask = IMask;
} catch (e) {}

// CONCATENATED MODULE: ./animate.js
/* harmony default export */ var animate = ({
  duration: {
    timeout: 2500,
    effect: 500,
    enter: 250,
    leave: 200,
    micro: 100
  },
  easing: {
    linear: 'cubicBezier(0, 0, 1, 1)',
    standard: 'cubicBezier(0.4, 0, 0.2, 1)',
    deceleration: 'cubicBezier(0, 0, 0.2, 1)',
    acceleration: 'cubicBezier(0.4, 0, 1, 1)'
  }
});
// CONCATENATED MODULE: ./main.js
/* global $ */




$(document).ready(function () {
  /* Is in view */
  var watchedElements = [];
  var doc = document.documentElement;
  var currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  $(".in-view-watcher").each(function (i, v) {
    watchedElements.push($(v));
  });
  $.fn.extend({
    inViewWatcher: function inViewWatcher() {
      watchedElements.push(this);
      return this;
    }
  });

  function checkWatchedElements() {
    currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var clientHeight = $(window).height();
    var newWatchedElementsList = [];
    $.each(watchedElements, function (_, obj) {
      if (typeof obj === "undefined") {
        return;
      }

      var topOfElement = obj.offset().top;
      var bottomOfElement = obj.offset().top + obj.height();

      if (topOfElement > currentYScroll && topOfElement < currentYScroll + clientHeight || bottomOfElement > currentYScroll && bottomOfElement < currentYScroll + clientHeight) {
        obj.addClass("is-in-view");
        obj.trigger("in-view");
      } else {
        newWatchedElementsList.push(obj);
      }
    });
    watchedElements = newWatchedElementsList;
  }

  $(window).on("scroll", checkWatchedElements);
  $(window).on("load", checkWatchedElements);
  checkWatchedElements();
  /* Compare slider */

  $(".js-img-compare").imagesCompare();
  /* Mobile nav */

  $(".js-nav-btn").click(function () {
    $(this).toggleClass("active");
    $(".js-nav-body").toggleClass("active");
    $("body").toggleClass("locked");
  });
  /* Tabs */

  $('.js-tab-btn').click(function (e) {
    e.preventDefault();
    var $btn = $(e.currentTarget);
    $('.js-tab-btn').removeClass('active');
    $('.js-tab-content').removeClass('active');
    var $contentId = $btn.attr('id');
    $btn.addClass('active');
    $("[data-content-tab='" + $contentId + "']").addClass('active');
  });
  /* Slider */

  new Swiper(".js-slider", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    breakpoints: {
      960: {
        spaceBetween: 24
      }
    }
  });
  /* Phone mask */

  $(".js-phone-field").each(function (i, el) {
    new IMask(el, {
      mask: "+{7}-(000)-000-00-00"
    });
  });
  /* Form */

  $('.js-submit').click(function (e) {
    e.preventDefault();
    $('.js-form-box').addClass('hidden');
    $('.js-form-message-box').removeClass('hidden');
  });
  /* Scroll to */

  $("body").on("click", "[data-scroll]", function (e) {
    e.preventDefault();
    var $link = $(e.currentTarget);
    var index = $link.data("scrollIndex");

    if (index === undefined) {
      index = 0;
    }

    $(".js-nav-btn").removeClass("active");
    $(".js-nav-body").removeClass("active");
    $("body").removeClass("locked");
    var $el = $($link.data('scroll')).eq(index);
    $('html, body').animate({
      scrollTop: $el.offset().top - $(window).height() * 10 / 100
    }, {
      duration: animate.duration.effect
    });
  });
  /* Map */

  if ($(".map").length) {
    var place = [53.235687, 50.181100];
    ymaps.ready(function () {
      // Создание экземпляра карты и его привязка к созданному контейнеру.
      var map = new ymaps.Map('map', {
        center: [53.235059, 50.181564],
        zoom: 15,
        controls: []
      }, {
        suppressMapOpenBlock: true
      }),
          // Создание макета балуна на основе Twitter Bootstrap.
      MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="map-popover top">' + '<div class="arrow"></div>' + '<div class="map-popover__inner">' + '<div>443011, г.Самара, ул.Советской Армии, д. 238А, к. 22</div>' + '<div class="map-popover__links">' + '<a href="tel:88004585855">8 800 458 58 55</a>' + '<div class="map-popover__divider"></div>' + '<a href="mailto:kotupodkhvost@mail.ru">kotupodkhvost@mail.ru</a>' + '</div>' + '</div>' + '</div>', {
        build: function build() {
          this.constructor.superclass.build.call(this);
          this._$element = $('.map-popover', this.getParentElement());
          this.applyElementOffset();
        },
        clear: function clear() {
          this.constructor.superclass.clear.call(this);
        },
        onSublayoutSizeChange: function onSublayoutSizeChange() {
          MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

          if (!this._isElement(this._$element)) {
            return;
          }

          this.applyElementOffset();
          this.events.fire('shapechange');
        },
        applyElementOffset: function applyElementOffset() {
          this._$element.css({
            left: -(this._$element[0].offsetWidth / 2),
            top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
          });
        },
        getShape: function getShape() {
          if (!this._isElement(this._$element)) {
            return MyBalloonLayout.superclass.getShape.call(this);
          }

          var position = this._$element.position();

          return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight]]));
        },
        _isElement: function _isElement(element) {
          return element && element[0] && element.find('.arrow')[0];
        }
      }),
          MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(),
          myPlacemark = window.myPlacemark = new ymaps.Placemark([53.235687, 50.181100], {
        balloonHeader: 'Заголовок балуна',
        balloonContent: 'Контент балуна'
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/pin.png",
        iconImageSize: [72, 72],
        balloonShadow: false,
        balloonLayout: MyBalloonLayout,
        balloonContentLayout: MyBalloonContentLayout,
        balloonPanelMaxMapArea: 0,
        hideIconOnBalloonOpen: false
      });
      map.controls.remove("routeButtonControl");
      map.controls.remove("zoomControl");
      map.controls.remove("geolocationControl");
      map.controls.remove("searchControl");
      map.controls.remove("trafficControl");
      map.controls.remove("typeSelector");
      map.controls.remove("fullscreenControl");
      map.controls.remove("rulerControl");
      map.behaviors.disable(["scrollZoom"]);
      map.geoObjects.add(myPlacemark);
      myPlacemark.balloon.open();
    });
  }
});

/***/ })
/******/ ]);