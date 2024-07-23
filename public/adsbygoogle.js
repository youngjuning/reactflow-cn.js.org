(function(sttc) {
  'use strict';
  var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype)
          return a;
      a[b] = c.value;
      return a
  }
  ;
  function ba(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          if (c && c.Math == Math)
              return c
      }
      throw Error("Cannot find global object");
  }
  var ca = ba(this)
    , da = typeof Symbol === "function" && typeof Symbol("x") === "symbol"
    , ea = {}
    , fa = {};
  function ha(a, b, c) {
      if (!c || a != null) {
          c = fa[b];
          if (c == null)
              return a[b];
          c = a[c];
          return c !== void 0 ? c : a[b]
      }
  }
  function ia(a, b, c) {
      if (b)
          a: {
              var d = a.split(".");
              a = d.length === 1;
              var e = d[0], f;
              !a && e in ea ? f = ea : f = ca;
              for (e = 0; e < d.length - 1; e++) {
                  var g = d[e];
                  if (!(g in f))
                      break a;
                  f = f[g]
              }
              d = d[d.length - 1];
              c = da && c === "es6" ? f[d] : null;
              b = b(c);
              b != null && (a ? aa(ea, d, {
                  configurable: !0,
                  writable: !0,
                  value: b
              }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0,
              fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d),
              aa(f, fa[d], {
                  configurable: !0,
                  writable: !0,
                  value: b
              })))
          }
  }
  ia("Symbol.dispose", function(a) {
      return a ? a : Symbol("Symbol.dispose")
  }, "es_next");
  /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
  var p = this || self;
  function ja(a, b) {
      var c = ka("CLOSURE_FLAGS");
      a = c && c[a];
      return a != null ? a : b
  }
  function ka(a) {
      a = a.split(".");
      for (var b = p, c = 0; c < a.length; c++)
          if (b = b[a[c]],
          b == null)
              return null;
      return b
  }
  function la(a) {
      var b = typeof a;
      return b == "object" && a != null || b == "function"
  }
  function ma(a) {
      return Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)
  }
  var na = "closure_uid_" + (Math.random() * 1E9 >>> 0)
    , oa = 0;
  function pa(a, b, c) {
      return a.call.apply(a.bind, arguments)
  }
  function qa(a, b, c) {
      if (!a)
          throw Error();
      if (arguments.length > 2) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
              var e = Array.prototype.slice.call(arguments);
              Array.prototype.unshift.apply(e, d);
              return a.apply(b, e)
          }
      }
      return function() {
          return a.apply(b, arguments)
      }
  }
  function ra(a, b, c) {
      ra = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? pa : qa;
      return ra.apply(null, arguments)
  }
  function sa(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
          var d = c.slice();
          d.push.apply(d, arguments);
          return a.apply(this, d)
      }
  }
  function ta(a, b, c) {
      a = a.split(".");
      c = c || p;
      a[0]in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
          a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
  }
  function ua(a) {
      return a
  }
  ;let va = (new Date).getTime();
  function wa(a) {
      p.setTimeout(()=>{
          throw a;
      }
      , 0)
  }
  ;function xa(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  }
  function ya(a, b) {
      let c = 0;
      a = xa(String(a)).split(".");
      b = xa(String(b)).split(".");
      const d = Math.max(a.length, b.length);
      for (let g = 0; c == 0 && g < d; g++) {
          var e = a[g] || ""
            , f = b[g] || "";
          do {
              e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
              f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
              if (e[0].length == 0 && f[0].length == 0)
                  break;
              c = za(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || za(e[2].length == 0, f[2].length == 0) || za(e[2], f[2]);
              e = e[3];
              f = f[3]
          } while (c == 0)
      }
      return c
  }
  function za(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
  }
  ;const Aa = ja(1, !0);
  var Ba = ja(610401301, !1)
    , Ca = ja(188588736, !0)
    , Da = ja(645172343, Aa)
    , Ea = ja(653718497, Aa);
  function Fa() {
      var a = p.navigator;
      return a && (a = a.userAgent) ? a : ""
  }
  var Ga;
  const Ha = p.navigator;
  Ga = Ha ? Ha.userAgentData || null : null;
  function Ia(a) {
      return Ba ? Ga ? Ga.brands.some(({brand: b})=>b && b.indexOf(a) != -1) : !1 : !1
  }
  function r(a) {
      return Fa().indexOf(a) != -1
  }
  ;function Ja() {
      return Ba ? !!Ga && Ga.brands.length > 0 : !1
  }
  function Ka() {
      return Ja() ? !1 : r("Trident") || r("MSIE")
  }
  function La() {
      return Ja() ? Ia("Microsoft Edge") : r("Edg/")
  }
  function Ma() {
      !r("Safari") || Na() || (Ja() ? 0 : r("Coast")) || (Ja() ? 0 : r("Opera")) || (Ja() ? 0 : r("Edge")) || La() || Ja() && Ia("Opera")
  }
  function Na() {
      return Ja() ? Ia("Chromium") : (r("Chrome") || r("CriOS")) && !(Ja() ? 0 : r("Edge")) || r("Silk")
  }
  function Oa(a) {
      const b = {};
      a.forEach(c=>{
          b[c[0]] = c[1]
      }
      );
      return c=>b[c.find(d=>d in b)] || ""
  }
  function Pa() {
      var a = Fa();
      if (Ka()) {
          var b = /rv: *([\d\.]*)/.exec(a);
          if (b && b[1])
              a = b[1];
          else {
              b = "";
              var c = /MSIE +([\d\.]+)/.exec(a);
              if (c && c[1])
                  if (a = /Trident\/(\d.\d)/.exec(a),
                  c[1] == "7.0")
                      if (a && a[1])
                          switch (a[1]) {
                          case "4.0":
                              b = "8.0";
                              break;
                          case "5.0":
                              b = "9.0";
                              break;
                          case "6.0":
                              b = "10.0";
                              break;
                          case "7.0":
                              b = "11.0"
                          }
                      else
                          b = "7.0";
                  else
                      b = c[1];
              a = b
          }
          return a
      }
      c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
      b = [];
      let d;
      for (; d = c.exec(a); )
          b.push([d[1], d[2], d[3] || void 0]);
      a = Oa(b);
      return (Ja() ? 0 : r("Opera")) ? a(["Version", "Opera"]) : (Ja() ? 0 : r("Edge")) ? a(["Edge"]) : La() ? a(["Edg"]) : r("Silk") ? a(["Silk"]) : Na() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
  }
  ;function Qa(a, b) {
      if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
      for (let c = 0; c < a.length; c++)
          if (c in a && a[c] === b)
              return c;
      return -1
  }
  function Ra(a, b) {
      const c = a.length
        , d = [];
      let e = 0;
      const f = typeof a === "string" ? a.split("") : a;
      for (let g = 0; g < c; g++)
          if (g in f) {
              const h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h)
          }
      return d
  }
  function Sa(a, b) {
      const c = a.length
        , d = Array(c)
        , e = typeof a === "string" ? a.split("") : a;
      for (let f = 0; f < c; f++)
          f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d
  }
  function Ta(a, b) {
      const c = a.length
        , d = typeof a === "string" ? a.split("") : a;
      for (let e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a))
              return !0;
      return !1
  }
  function Ua(a, b) {
      a: {
          var c = a.length;
          const d = typeof a === "string" ? a.split("") : a;
          for (--c; c >= 0; c--)
              if (c in d && b.call(void 0, d[c], c, a)) {
                  b = c;
                  break a
              }
          b = -1
      }
      return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
  }
  function Va(a, b) {
      return Qa(a, b) >= 0
  }
  function Wa(a) {
      const b = a.length;
      if (b > 0) {
          const c = Array(b);
          for (let d = 0; d < b; d++)
              c[d] = a[d];
          return c
      }
      return []
  }
  ;function Xa(a) {
      Xa[" "](a);
      return a
  }
  Xa[" "] = function() {}
  ;
  var Za = Ka();
  !r("Android") || Na();
  Na();
  Ma();
  var $a = null;
  function ab(a) {
      var b = [];
      bb(a, function(c) {
          b.push(c)
      });
      return b
  }
  function bb(a, b) {
      function c(k) {
          for (; d < a.length; ) {
              var l = a.charAt(d++)
                , m = $a[l];
              if (m != null)
                  return m;
              if (!/^[\s\xa0]*$/.test(l))
                  throw Error("Unknown base64 encoding at char: " + l);
          }
          return k
      }
      cb();
      for (var d = 0; ; ) {
          var e = c(-1)
            , f = c(0)
            , g = c(64)
            , h = c(64);
          if (h === 64 && e === -1)
              break;
          b(e << 2 | f >> 4);
          g != 64 && (b(f << 4 & 240 | g >> 2),
          h != 64 && b(g << 6 & 192 | h))
      }
  }
  function cb() {
      if (!$a) {
          $a = {};
          for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++)
              for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                  var f = d[e];
                  $a[f] === void 0 && ($a[f] = e)
              }
      }
  }
  ;let db = 0
    , eb = 0;
  function fb(a) {
      const b = a >>> 0;
      db = b;
      eb = (a - b) / 4294967296 >>> 0
  }
  function hb(a) {
      if (a < 0) {
          fb(-a);
          a = db;
          var b = eb;
          b = ~b;
          a ? a = ~a + 1 : b += 1;
          const [c,d] = [a, b];
          db = c >>> 0;
          eb = d >>> 0
      } else
          fb(a)
  }
  function jb() {
      var a = db
        , b = eb;
      if (b & 2147483648)
          var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
      else
          b >>>= 0,
          a >>>= 0,
          b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
      return c
  }
  ;function kb(a) {
      return Array.prototype.slice.call(a)
  }
  ;var t = Symbol()
    , lb = Symbol()
    , mb = Symbol()
    , nb = Symbol()
    , ob = Symbol();
  function pb(a) {
      a[t] |= 32;
      return a
  }
  function qb(a, b) {
      b[t] = (a | 0) & -14591
  }
  function rb(a, b) {
      b[t] = (a | 34) & -14557
  }
  ;var sb = {}
    , tb = {};
  function ub(a) {
      return !(!a || typeof a !== "object" || a.g !== tb)
  }
  function vb(a) {
      return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
  }
  function wb(a, b, c) {
      if (!Array.isArray(a) || a.length)
          return !1;
      const d = a[t] | 0;
      if (d & 1)
          return !0;
      if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
          return !1;
      a[t] = d | 1;
      return !0
  }
  var xb;
  const yb = [];
  yb[t] = 55;
  xb = Object.freeze(yb);
  function zb(a) {
      if (a & 2)
          throw Error();
  }
  var Ab = Object.freeze({});
  Object.freeze({});
  var Bb = Object.freeze({});
  function Cb(a, b) {
      a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
      a.__closure__error__context__984382.severity = b
  }
  ;let Db, Eb;
  function Fb(a) {
      if (Eb)
          throw Error("");
      Eb = b=>{
          p.setTimeout(()=>{
              a(b)
          }
          , 0)
      }
  }
  function Gb(a) {
      if (Eb)
          try {
              Eb(a)
          } catch (b) {
              throw b.cause = a,
              b;
          }
  }
  function Hb() {
      const a = Error();
      Cb(a, "incident");
      Eb ? Gb(a) : wa(a)
  }
  function Ib(a) {
      a = Error(a);
      Cb(a, "warning");
      Gb(a);
      return a
  }
  ;function Jb(a) {
      if (a != null && typeof a !== "boolean") {
          var b = typeof a;
          throw Error(`Expected boolean but got ${b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"}: ${a}`);
      }
      return a
  }
  const Kb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Lb(a) {
      const b = typeof a;
      return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : Kb.test(a)
  }
  function w(a) {
      if (a != null) {
          if (!Number.isFinite(a))
              throw Ib("enum");
          a |= 0
      }
      return a
  }
  function Mb(a) {
      return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
  }
  function Nb(a) {
      if (typeof a !== "number")
          throw Ib("int32");
      if (!Number.isFinite(a))
          throw Ib("int32");
      return a | 0
  }
  function Ob(a) {
      return a == null ? a : Nb(a)
  }
  function Pb(a) {
      if (a == null)
          return a;
      if (typeof a === "string") {
          if (!a)
              return;
          a = +a
      }
      if (typeof a === "number")
          return Number.isFinite(a) ? a | 0 : void 0
  }
  function Qb(a) {
      if (a == null)
          return a;
      if (typeof a === "string") {
          if (!a)
              return;
          a = +a
      }
      if (typeof a === "number")
          return Number.isFinite(a) ? a >>> 0 : void 0
  }
  function Rb(a) {
      return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
  }
  function Sb(a) {
      a = Math.trunc(a);
      if (!Number.isSafeInteger(a)) {
          hb(a);
          var b = db
            , c = eb;
          if (a = c & 2147483648)
              b = ~b + 1 >>> 0,
              c = ~c >>> 0,
              b == 0 && (c = c + 1 >>> 0);
          b = c * 4294967296 + (b >>> 0);
          a = a ? -b : b
      }
      return a
  }
  function Tb(a) {
      a = Math.trunc(a);
      if (Number.isSafeInteger(a))
          a = String(a);
      else {
          {
              const b = String(a);
              Rb(b) ? a = b : (hb(a),
              a = jb())
          }
      }
      return a
  }
  function Ub(a) {
      var b = Math.trunc(Number(a));
      if (Number.isSafeInteger(b))
          return String(b);
      b = a.indexOf(".");
      b !== -1 && (a = a.substring(0, b));
      Rb(a) || (a.length < 16 ? hb(Number(a)) : (a = BigInt(a),
      db = Number(a & BigInt(4294967295)) >>> 0,
      eb = Number(a >> BigInt(32) & BigInt(4294967295))),
      a = jb());
      return a
  }
  function Vb(a) {
      if (typeof a !== "string")
          throw Error();
      return a
  }
  function Wb(a) {
      if (a != null && typeof a !== "string")
          throw Error();
      return a
  }
  function Xb(a) {
      return a == null || typeof a === "string" ? a : void 0
  }
  function Yb(a, b, c, d) {
      if (a != null && typeof a === "object" && a.qa === sb)
          return a;
      if (!Array.isArray(a))
          return c ? d & 2 ? $b(b) : new b : void 0;
      let e = c = a[t] | 0;
      e === 0 && (e |= d & 32);
      e |= d & 2;
      e !== c && (a[t] = e);
      return new b(a)
  }
  function $b(a) {
      var b = a[lb];
      if (b)
          return b;
      b = new a;
      var c = b.D;
      c[t] |= 34;
      return a[lb] = b
  }
  ;let ac;
  function bc(a, b) {
      ac = b;
      a = new a(b);
      ac = void 0;
      return a
  }
  ;function cc(a, b) {
      return dc(b)
  }
  function dc(a) {
      switch (typeof a) {
      case "number":
          return isFinite(a) ? a : String(a);
      case "boolean":
          return a ? 1 : 0;
      case "object":
          if (a)
              if (Array.isArray(a)) {
                  if (wb(a, void 0, 0))
                      return
              } else if (a != null && a instanceof Uint8Array) {
                  let b = ""
                    , c = 0;
                  const d = a.length - 10240;
                  for (; c < d; )
                      b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                  return btoa(b)
              }
      }
      return a
  }
  ;function ec(a, b, c) {
      a = kb(a);
      var d = a.length;
      const e = b & 256 ? a[d - 1] : void 0;
      d += e ? -1 : 0;
      for (b = b & 512 ? 1 : 0; b < d; b++)
          a[b] = c(a[b]);
      if (e) {
          b = a[b] = {};
          for (const f in e)
              Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
      }
      return a
  }
  function fc(a, b, c, d, e) {
      if (a != null) {
          if (Array.isArray(a))
              a = wb(a, void 0, 0) ? void 0 : e && (a[t] | 0) & 2 ? a : gc(a, b, c, d !== void 0, e);
          else if (vb(a)) {
              const f = {};
              for (let g in a)
                  Object.prototype.hasOwnProperty.call(a, g) && (f[g] = fc(a[g], b, c, d, e));
              a = f
          } else
              a = b(a, d);
          return a
      }
  }
  function gc(a, b, c, d, e) {
      const f = d || c ? a[t] | 0 : 0;
      d = d ? !!(f & 32) : void 0;
      a = kb(a);
      for (let g = 0; g < a.length; g++)
          a[g] = fc(a[g], b, c, d, e);
      c && c(f, a);
      return a
  }
  function hc(a) {
      return a.qa === sb ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
  }
  function ic(a) {
      return a.qa === sb ? a.toJSON() : dc(a)
  }
  var jc = typeof structuredClone != "undefined" ? structuredClone : a=>gc(a, hc, void 0, void 0, !1);
  function kc(a, b, c=rb) {
      if (a != null) {
          if (a instanceof Uint8Array)
              return b ? a : new Uint8Array(a);
          if (Array.isArray(a)) {
              var d = a[t] | 0;
              if (d & 2)
                  return a;
              b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
              return b ? (a[t] = (d | 34) & -12293,
              a) : gc(a, kc, d & 4 ? rb : c, !0, !0)
          }
          a.qa === sb && (c = a.D,
          d = c[t],
          a = d & 2 ? a : bc(a.constructor, lc(c, d, !0)));
          return a
      }
  }
  function lc(a, b, c) {
      const d = c || b & 2 ? rb : qb
        , e = !!(b & 32);
      a = ec(a, b, f=>kc(f, e, d));
      a[t] = a[t] | 32 | (c ? 2 : 0);
      return a
  }
  function mc(a) {
      const b = a.D
        , c = b[t];
      return c & 2 ? bc(a.constructor, lc(b, c, !1)) : a
  }
  ;function nc(a) {
      if (typeof Proxy !== "function")
          return a;
      let b = oc?.get(a);
      if (b)
          return b;
      b = new Proxy(a,{
          set(c, d, e) {
              pc();
              c[d] = e;
              return !0
          }
      });
      qc(a, b);
      return b
  }
  function pc() {
      Hb()
  }
  let oc = void 0
    , rc = void 0;
  function qc(a, b) {
      (oc || (oc = new WeakMap)).set(a, b);
      (rc || (rc = new WeakMap)).set(b, a)
  }
  ;function sc(a, b, c, d) {
      if (!(4 & b))
          return !0;
      if (c == null)
          return !1;
      !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[nb] = (a.constructor[nb] | 0) + 1) < 5 && Hb();
      return c === 0 ? !1 : !(c & b)
  }
  function tc(a, b) {
      a = a.D;
      return uc(a, a[t], b)
  }
  function vc(a, b, c, d) {
      b = d + (+!!(b & 512) - 1);
      if (!(b < 0 || b >= a.length || b >= c))
          return a[b]
  }
  function uc(a, b, c, d) {
      if (c === -1)
          return null;
      const e = b >> 14 & 1023 || 536870912;
      if (c >= e) {
          if (b & 256)
              return a[a.length - 1][c]
      } else {
          var f = a.length;
          return d && b & 256 && (d = a[f - 1][c],
          d != null) ? (vc(a, b, e, c) && mb != null && (a = Db ?? (Db = {}),
          b = a[mb] || 0,
          b >= 4 || (a[mb] = b + 1,
          Hb())),
          d) : vc(a, b, e, c)
      }
  }
  function y(a, b, c) {
      const d = a.D;
      let e = d[t];
      zb(e);
      z(d, e, b, c);
      return a
  }
  function z(a, b, c, d, e) {
      const f = b >> 14 & 1023 || 536870912;
      if (c >= f || e && !Da) {
          let g = b;
          if (b & 256)
              e = a[a.length - 1];
          else {
              if (d == null)
                  return g;
              e = a[f + (+!!(b & 512) - 1)] = {};
              g |= 256
          }
          e[c] = d;
          c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
          g !== b && (a[t] = g);
          return g
      }
      a[c + (+!!(b & 512) - 1)] = d;
      b & 256 && (a = a[a.length - 1],
      c in a && delete a[c]);
      return b
  }
  function wc(a, b, c) {
      return xc(a, b, c, !1) !== void 0
  }
  function A(a) {
      return a === Ab ? 2 : Ea ? 5 : 2
  }
  function yc(a, b, c, d) {
      const e = a.D;
      var f = e[t];
      const g = 2 & f ? 1 : d;
      d = zc(e, f, b);
      var h = d[t] | 0;
      if (sc(a, h, void 0, !1)) {
          if (4 & h || Object.isFrozen(d))
              d = kb(d),
              h = Ac(h, f),
              f = z(e, f, b, d);
          let l = a = 0;
          for (; a < d.length; a++) {
              const m = c(d[a]);
              m != null && (d[l++] = m)
          }
          l < a && (d.length = l);
          h = Bc(h, f);
          h = (h | 20) & -4097;
          h &= -8193;
          d[t] = h;
          2 & h && Object.freeze(d)
      }
      let k;
      g === 1 || g === 4 && 32 & h ? Cc(h) || (f = h,
      h |= 2,
      h !== f && (d[t] = h),
      Object.freeze(d)) : (c = g !== 5 ? !1 : !!(32 & h) || Cc(h) || !!oc?.get(d),
      (g === 2 || c) && Cc(h) && (d = kb(d),
      h = Ac(h, f),
      h = Dc(h, f, !1),
      d[t] = h,
      f = z(e, f, b, d)),
      Cc(h) || (b = h,
      h = Dc(h, f, !1),
      h !== b && (d[t] = h)),
      c && (k = nc(d)));
      return k || d
  }
  function zc(a, b, c) {
      a = uc(a, b, c);
      return Array.isArray(a) ? a : xb
  }
  function Bc(a, b) {
      a === 0 && (a = Ac(a, b));
      return a | 1
  }
  function Cc(a) {
      return !!(2 & a) && !!(4 & a) || !!(2048 & a)
  }
  function Ec(a, b, c, d) {
      const e = a.D;
      let f = e[t];
      zb(f);
      if (c == null)
          return z(e, f, b),
          a;
      c = rc?.get(c) || c;
      let g = c[t] | 0
        , h = g;
      var k = !!(2 & g) || Object.isFrozen(c);
      const l = !k && (void 0 === Bb || !1);
      if (sc(a, g))
          for (g = 21,
          k && (c = kb(c),
          h = 0,
          g = Ac(g, f),
          g = Dc(g, f, !0)),
          k = 0; k < c.length; k++)
              c[k] = d(c[k]);
      l && (c = kb(c),
      h = 0,
      g = Ac(g, f),
      g = Dc(g, f, !0));
      g !== h && (c[t] = g);
      z(e, f, b, c);
      return a
  }
  function B(a, b, c, d) {
      const e = a.D;
      let f = e[t];
      zb(f);
      z(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
      return a
  }
  function Fc(a, b) {
      var c = a.D
        , d = c[t] | 0;
      zb(a.D[t]);
      var e = d & 2;
      a = uc(c, d, 4, !1);
      Array.isArray(a) || (a = xb);
      const f = !!(d & 32);
      let g = a[t] | 0;
      g === 0 && f && !e ? (g |= 33,
      a[t] = g) : g & 1 || (g |= 1,
      a[t] = g);
      if (e)
          g & 2 || (a[t] |= 34),
          Object.freeze(a);
      else if (2 & g || 2048 & g)
          a = kb(a),
          e = 1,
          f && (e |= 32),
          a[t] = e,
          z(c, d, 4, a, !1);
      c = a;
      d = c[t] | 0;
      d = !!(4 & d) && !!(4096 & d);
      if (Array.isArray(b))
          for (var h = 0; h < b.length; h++)
              c.push(Vb(b[h], d));
      else
          for (h of b)
              c.push(Vb(h, d))
  }
  function Gc(a, b, c, d) {
      const e = a.D;
      var f = e[t];
      zb(f);
      if (d == null) {
          var g = Hc(e);
          if (Ic(g, e, f, c) === b)
              g.set(c, 0);
          else
              return a
      } else {
          g = Hc(e);
          const h = Ic(g, e, f, c);
          h !== b && (h && (f = z(e, f, h)),
          g.set(c, b))
      }
      z(e, f, b, d);
      return a
  }
  function Jc(a, b, c) {
      return Kc(a, b) === c ? c : -1
  }
  function Kc(a, b) {
      a = a.D;
      return Ic(Hc(a), a, a[t], b)
  }
  function Hc(a) {
      return a[ob] ?? (a[ob] = new Map)
  }
  function Ic(a, b, c, d) {
      let e = a.get(d);
      if (e != null)
          return e;
      e = 0;
      for (let f = 0; f < d.length; f++) {
          const g = d[f];
          uc(b, c, g) != null && (e !== 0 && (c = z(b, c, e)),
          e = g)
      }
      a.set(d, e);
      return e
  }
  function Lc(a, b, c) {
      a = a.D;
      let d = a[t];
      zb(d);
      const e = uc(a, d, c);
      b = mc(Yb(e, b, !0, d));
      e !== b && z(a, d, c, b);
      return b
  }
  function xc(a, b, c, d) {
      a = a.D;
      let e = a[t];
      const f = uc(a, e, c, d);
      b = Yb(f, b, !1, e);
      b !== f && b != null && z(a, e, c, b, d);
      return b
  }
  function Mc(a) {
      var b = Nc;
      return (a = xc(a, b, 4, !1)) ? a : $b(b)
  }
  function D(a, b, c) {
      b = xc(a, b, c, !1);
      if (b == null)
          return b;
      a = a.D;
      let d = a[t];
      if (!(d & 2)) {
          const e = mc(b);
          e !== b && (b = e,
          z(a, d, c, b, !1))
      }
      return b
  }
  function E(a, b, c, d) {
      const e = a.D;
      var f = e[t];
      a = f;
      var g = !(2 & f)
        , h = !!(2 & a);
      f = h ? 1 : d;
      g && (g = !h);
      d = zc(e, a, c);
      var k = d[t] | 0;
      h = !!(4 & k);
      if (!h) {
          k = Bc(k, a);
          var l = d
            , m = a;
          const q = !!(2 & k);
          q && (m |= 2);
          let v = !q
            , u = !0
            , x = 0
            , L = 0;
          for (; x < l.length; x++) {
              const C = Yb(l[x], b, !1, m);
              if (C instanceof b) {
                  if (!q) {
                      const gb = !!((C.D[t] | 0) & 2);
                      v && (v = !gb);
                      u && (u = gb)
                  }
                  l[L++] = C
              }
          }
          L < x && (l.length = L);
          k |= 4;
          k = u ? k | 16 : k & -17;
          k = v ? k | 8 : k & -9;
          l[t] = k;
          q && Object.freeze(l)
      }
      if (g && !(8 & k || !d.length && (f === 1 || f === 4 && 32 & k))) {
          Cc(k) && (d = kb(d),
          k = Ac(k, a),
          a = z(e, a, c, d));
          b = d;
          g = k;
          for (l = 0; l < b.length; l++)
              k = b[l],
              m = mc(k),
              k !== m && (b[l] = m);
          g |= 8;
          g = b.length ? g & -17 : g | 16;
          k = b[t] = g
      }
      let n;
      f === 1 || f === 4 && 32 & k ? Cc(k) || (c = k,
      k |= !d.length || 16 & k && (!h || 32 & k) ? 2 : 2048,
      k !== c && (d[t] = k),
      Object.freeze(d)) : (h = f !== 5 ? !1 : !!(32 & k) || Cc(k) || !!oc?.get(d),
      (f === 2 || h) && Cc(k) && (d = kb(d),
      k = Ac(k, a),
      k = Dc(k, a, !1),
      d[t] = k,
      a = z(e, a, c, d)),
      Cc(k) || (c = k,
      k = Dc(k, a, !1),
      k !== c && (d[t] = k)),
      h && (n = nc(d)));
      return n || d
  }
  function Oc(a, b, c) {
      c == null && (c = void 0);
      return y(a, b, c)
  }
  function Pc(a, b, c, d) {
      d == null && (d = void 0);
      return Gc(a, b, c, d)
  }
  function Qc(a, b, c) {
      const d = a.D;
      let e = d[t];
      zb(e);
      if (c == null)
          return z(d, e, b),
          a;
      c = rc?.get(c) || c;
      let f = c[t] | 0
        , g = f;
      const h = !!(2 & f) || !!(2048 & f)
        , k = h || Object.isFrozen(c)
        , l = !k && (void 0 === Bb || !1);
      let m = !0
        , n = !0;
      for (let v = 0; v < c.length; v++) {
          var q = c[v];
          h || (q = !!((q.D[t] | 0) & 2),
          m && (m = !q),
          n && (n = q))
      }
      h || (f |= 5,
      f = m ? f | 8 : f & -9,
      f = n ? f | 16 : f & -17);
      if (l || k && f !== g)
          c = kb(c),
          g = 0,
          f = Ac(f, e),
          f = Dc(f, e, !0);
      f !== g && (c[t] = f);
      z(d, e, b, c);
      return a
  }
  function Ac(a, b) {
      a = (2 & b ? a | 2 : a & -3) | 32;
      return a &= -2049
  }
  function Dc(a, b, c) {
      32 & b && c || (a &= -33);
      return a
  }
  function Rc(a, b) {
      a = tc(a, b);
      var c;
      a == null ? c = a : Lb(a) ? typeof a === "number" ? c = Sb(a) : c = Ub(a) : c = void 0;
      return c
  }
  function Sc(a, b) {
      return a ?? b
  }
  function Uc(a, b) {
      a = tc(a, b);
      return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
  }
  function Vc(a, b) {
      return Pb(tc(a, b))
  }
  function F(a, b) {
      return Xb(tc(a, b))
  }
  function G(a, b) {
      return Mb(tc(a, b))
  }
  function H(a, b, c=!1) {
      return Sc(Uc(a, b), c)
  }
  function Wc(a, b) {
      return Sc(Vc(a, b), 0)
  }
  function Xc(a, b) {
      return Sc(Rc(a, b), 0)
  }
  function Yc(a, b) {
      a = a.D;
      let c = a[t];
      const d = uc(a, c, b);
      var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
      e != null && e !== d && z(a, c, b, e);
      return e ?? 0
  }
  function I(a, b) {
      return Sc(F(a, b), "")
  }
  function J(a, b) {
      return Sc(G(a, b), 0)
  }
  function Zc(a, b, c) {
      return yc(a, b, Xb, c)
  }
  function $c(a, b, c) {
      return J(a, Jc(a, c, b))
  }
  function ad(a, b, c, d) {
      return D(a, b, Jc(a, d, c))
  }
  function K(a, b, c) {
      if (c != null) {
          var d = !!d;
          if (!Lb(c))
              throw Ib("int64");
          c = typeof c === "string" ? Ub(c) : d ? Tb(c) : Sb(c)
      }
      return B(a, b, c, "0")
  }
  function bd(a, b) {
      var c = performance.now();
      if (c != null && typeof c !== "number")
          throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
      B(a, b, c, 0)
  }
  function cd(a, b, c) {
      return B(a, b, Wb(c), "")
  }
  ;let dd;
  var M = class {
      constructor(a) {
          a: {
              a == null && (a = ac);
              ac = void 0;
              if (a == null) {
                  var b = 96;
                  a = []
              } else {
                  if (!Array.isArray(a))
                      throw Error("narr");
                  b = a[t] | 0;
                  if (b & 2048)
                      throw Error("farr");
                  if (b & 64)
                      break a;
                  var c = a;
                  b |= 64;
                  var d = c.length;
                  if (d && (--d,
                  vb(c[d]))) {
                      b |= 256;
                      c = d - (+!!(b & 512) - 1);
                      if (c >= 1024)
                          throw Error("pvtlmt");
                      b = b & -16760833 | (c & 1023) << 14
                  }
              }
              a[t] = b
          }
          this.D = a
      }
      toJSON() {
          return ed(this)
      }
  }
  ;
  M.prototype.qa = sb;
  function ed(a) {
      var b = dd ? a.D : gc(a.D, ic, void 0, void 0, !1);
      var c = !dd;
      var d = Ca ? void 0 : a.constructor.B;
      var e = (c ? a.D : b)[t];
      if (a = b.length) {
          var f = b[a - 1]
            , g = vb(f);
          g ? a-- : f = void 0;
          e = +!!(e & 512) - 1;
          var h = b;
          if (g) {
              b: {
                  var k = f;
                  var l = {};
                  g = !1;
                  if (k)
                      for (var m in k) {
                          if (!Object.prototype.hasOwnProperty.call(k, m))
                              continue;
                          if (isNaN(+m)) {
                              l[m] = k[m];
                              continue
                          }
                          let v = k[m];
                          Array.isArray(v) && (wb(v, d, +m) || ub(v) && v.size === 0) && (v = null);
                          v == null && (g = !0);
                          v != null && (l[m] = v)
                      }
                  if (g) {
                      for (var n in l)
                          break b;
                      l = null
                  } else
                      l = k
              }
              k = l == null ? f != null : l !== f
          }
          for (var q; a > 0; a--) {
              n = a - 1;
              m = h[n];
              n -= e;
              if (!(m == null || wb(m, d, n) || ub(m) && m.size === 0))
                  break;
              q = !0
          }
          if (h !== b || k || q) {
              if (!c)
                  h = Array.prototype.slice.call(h, 0, a);
              else if (q || k || l)
                  h.length = a;
              l && h.push(l)
          }
          b = h
      }
      return b
  }
  function fd(a, b) {
      if (b == null)
          return new a;
      if (!Array.isArray(b))
          throw Error("must be an array");
      if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
          throw Error("arrays passed to jspb constructors must be mutable");
      b[t] |= 128;
      return bc(a, pb(b))
  }
  ;function gd(a, b) {
      const c = hd;
      if (!b(a))
          throw b = (typeof c === "function" ? c() : c)?.concat("\n") ?? "",
          Error(b + String(a));
  }
  function id(a) {
      a.nc = !0;
      return a
  }
  let hd = void 0;
  const jd = id(a=>a !== null && a !== void 0);
  function kd(a) {
      return b=>{
          if (b == null || b == "")
              b = new a;
          else {
              b = JSON.parse(b);
              if (!Array.isArray(b))
                  throw Error("dnarr");
              b = bc(a, pb(b))
          }
          return b
      }
  }
  ;var ld = class extends M {
  }
  ;
  var md = class extends M {
  }
  ;
  md.B = [2, 3, 4];
  function nd(a) {
      return function() {
          return !a.apply(this, arguments)
      }
  }
  function od(a) {
      let b = !1, c;
      return function() {
          b || (c = a(),
          b = !0);
          return c
      }
  }
  function pd(a) {
      let b = a;
      return function() {
          if (b) {
              const c = b;
              b = null;
              c()
          }
      }
  }
  ;function qd(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1)
  }
  function rd(a, b, c) {
      return a.removeEventListener ? (a.removeEventListener(b, c, !1),
      !0) : !1
  }
  ;function sd(a, b) {
      const c = {};
      for (const d in a)
          b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c
  }
  function td(a, b) {
      for (const c in a)
          if (b.call(void 0, a[c], c, a))
              return !0;
      return !1
  }
  function ud(a) {
      const b = [];
      let c = 0;
      for (const d in a)
          b[c++] = a[d];
      return b
  }
  function vd(a) {
      const b = {};
      for (const c in a)
          b[c] = a[c];
      return b
  }
  ;var wd;
  var xd = class {
      constructor(a) {
          this.g = a
      }
      toString() {
          return this.g + ""
      }
  }
  ;
  function yd(a, b) {
      a = zd.exec(Ad(a).toString());
      const c = a[3] || "";
      return Bd(a[1] + Cd("?", a[2] || "", b) + Cd("#", c))
  }
  function Ad(a) {
      return a instanceof xd && a.constructor === xd ? a.g : "type_error:TrustedResourceUrl"
  }
  var zd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
    , Dd = {};
  function Bd(a) {
      if (wd === void 0) {
          var b = null;
          var c = p.trustedTypes;
          if (c && c.createPolicy) {
              try {
                  b = c.createPolicy("goog#html", {
                      createHTML: ua,
                      createScript: ua,
                      createScriptURL: ua
                  })
              } catch (d) {
                  p.console && p.console.error(d.message)
              }
              wd = b
          } else
              wd = b
      }
      a = (b = wd) ? b.createScriptURL(a) : a;
      return new xd(a,Dd)
  }
  function Cd(a, b, c) {
      if (c == null)
          return b;
      if (typeof c === "string")
          return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
          if (Object.prototype.hasOwnProperty.call(c, d)) {
              var e = c[d];
              e = Array.isArray(e) ? e : [e];
              for (var f = 0; f < e.length; f++) {
                  var g = e[f];
                  g != null && (b || (b = a),
                  b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
              }
          }
      return b
  }
  ;/*

SPDX-License-Identifier: Apache-2.0
*/
  function Ed(a, ...b) {
      if (b.length === 0)
          return Bd(a[0]);
      let c = a[0];
      for (let d = 0; d < b.length; d++)
          c += encodeURIComponent(b[d]) + a[d + 1];
      return Bd(c)
  }
  ;function Fd(a, b) {
      this.width = a;
      this.height = b
  }
  Fd.prototype.aspectRatio = function() {
      return this.width / this.height
  }
  ;
  Fd.prototype.isEmpty = function() {
      return !(this.width * this.height)
  }
  ;
  Fd.prototype.ceil = function() {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
  }
  ;
  Fd.prototype.floor = function() {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
  }
  ;
  Fd.prototype.round = function() {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
  }
  ;
  Fd.prototype.scale = function(a, b) {
      this.width *= a;
      this.height *= typeof b === "number" ? b : a;
      return this
  }
  ;
  function Gd(a, b=`unexpected value ${a}!`) {
      throw Error(b);
  }
  ;function Hd(a) {
      return String(a).replace(/\-([a-z])/g, function(b, c) {
          return c.toUpperCase()
      })
  }
  ;function Id(a, b) {
      b = String(b);
      a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
      return a.createElement(b)
  }
  function Jd(a) {
      this.g = a || p.document || document
  }
  Jd.prototype.contains = function(a, b) {
      if (!a || !b)
          return !1;
      if (a.contains && b.nodeType == 1)
          return a == b || a.contains(b);
      if (typeof a.compareDocumentPosition != "undefined")
          return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; )
          b = b.parentNode;
      return b == a
  }
  ;
  function Kd() {
      return Ba && Ga ? Ga.mobile : !Ld() && (r("iPod") || r("iPhone") || r("Android") || r("IEMobile"))
  }
  function Ld() {
      return Ba && Ga ? !Ga.mobile && (r("iPad") || r("Android") || r("Silk")) : r("iPad") || r("Android") && !r("Mobile") || r("Silk")
  }
  ;var Md = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
    , Nd = /#|$/;
  function Od(a, b) {
      var c = a.search(Nd);
      a: {
          var d = 0;
          for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
              var f = a.charCodeAt(d - 1);
              if (f == 38 || f == 63)
                  if (f = a.charCodeAt(d + e),
                  !f || f == 61 || f == 38 || f == 35)
                      break a;
              d += e + 1
          }
          d = -1
      }
      if (d < 0)
          return null;
      e = a.indexOf("&", d);
      if (e < 0 || e > c)
          e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
  }
  ;function Pd(a) {
      try {
          var b;
          if (b = !!a && a.location.href != null)
              a: {
                  try {
                      Xa(a.foo);
                      b = !0;
                      break a
                  } catch (c) {}
                  b = !1
              }
          return b
      } catch {
          return !1
      }
  }
  function Qd(a) {
      return Pd(a.top) ? a.top : null
  }
  function Rd(a, b) {
      const c = Sd("SCRIPT", a);
      c.src = Ad(b);
      (void 0)?.oc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
      return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
      c) : null
  }
  function Td(a, b) {
      return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
  }
  function Ud() {
      if (!globalThis.crypto)
          return Math.random();
      try {
          const a = new Uint32Array(1);
          globalThis.crypto.getRandomValues(a);
          return a[0] / 65536 / 65536
      } catch {
          return Math.random()
      }
  }
  function Vd(a, b) {
      if (a)
          for (const c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
  }
  function Wd(a) {
      const b = a.length;
      if (b == 0)
          return 0;
      let c = 305419896;
      for (let d = 0; d < b; d++)
          c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
      return c > 0 ? c : 4294967296 + c
  }
  var Xd = /^([0-9.]+)px$/
    , Yd = /^(-?[0-9.]{1,30})$/;
  function Zd(a) {
      if (!Yd.test(a))
          return null;
      a = Number(a);
      return isNaN(a) ? null : a
  }
  function $d(a) {
      return (a = Xd.exec(a)) ? +a[1] : null
  }
  var ae = od(()=>Kd() ? 2 : Ld() ? 1 : 0)
    , be = a=>{
      Vd({
          display: "none"
      }, (b,c)=>{
          a.style.setProperty(c, b, "important")
      }
      )
  }
  ;
  let ce = [];
  const de = ()=>{
      const a = ce;
      ce = [];
      for (const b of a)
          try {
              b()
          } catch {}
  }
  ;
  function ee() {
      var a = N(fe).A(ge.g, ge.defaultValue)
        , b = O.document;
      if (a.length && b.head)
          for (const c of a)
              c && b.head && (a = Sd("META"),
              b.head.appendChild(a),
              a.httpEquiv = "origin-trial",
              a.content = c)
  }
  var he = ()=>{
      var a = Math.random;
      return Math.floor(a() * 2 ** 52)
  }
    , ie = a=>{
      if (typeof a.goog_pvsid !== "number")
          try {
              Object.defineProperty(a, "goog_pvsid", {
                  value: he(),
                  configurable: !1
              })
          } catch (b) {}
      return Number(a.goog_pvsid) || -1
  }
    , ke = a=>{
      var b = je;
      b.readyState === "complete" || b.readyState === "interactive" ? (ce.push(a),
      ce.length == 1 && (window.Promise ? Promise.resolve().then(de) : window.setImmediate ? setImmediate(de) : setTimeout(de, 0))) : b.addEventListener("DOMContentLoaded", a)
  }
  ;
  function Sd(a, b=document) {
      return b.createElement(String(a).toLowerCase())
  }
  ;function le(a, b, c=null, d=!1, e=!1) {
      ne(a, b, c, d, e)
  }
  function ne(a, b, c, d, e=!1) {
      a.google_image_requests || (a.google_image_requests = []);
      const f = Sd("IMG", a.document);
      if (c || d) {
          const g = h=>{
              c && c(h);
              if (d) {
                  h = a.google_image_requests;
                  const k = Qa(h, f);
                  k >= 0 && Array.prototype.splice.call(h, k, 1)
              }
              rd(f, "load", g);
              rd(f, "error", g)
          }
          ;
          qd(f, "load", g);
          qd(f, "error", g)
      }
      e && (f.attributionSrc = "");
      f.src = b;
      a.google_image_requests.push(f)
  }
  var pe = (a,b)=>{
      let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
      Vd(a, (d,e)=>{
          if (d || d === 0)
              c += `&${e}=${encodeURIComponent("" + d)}`
      }
      );
      oe(c)
  }
    , oe = a=>{
      var b = window;
      b.fetch ? b.fetch(a, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
      }) : le(b, a, void 0, !1, !1)
  }
  ;
  var je = document
    , O = window;
  function qe(a) {
      this.g = a || {
          cookie: ""
      }
  }
  qe.prototype.set = function(a, b, c) {
      let d, e, f, g = !1, h;
      typeof c === "object" && (h = c.qc,
      g = c.sc || !1,
      f = c.domain || void 0,
      e = c.path || void 0,
      d = c.Bb);
      if (/[;=\s]/.test(a))
          throw Error('Invalid cookie name "' + a + '"');
      if (/[;\r\n]/.test(b))
          throw Error('Invalid cookie value "' + b + '"');
      d === void 0 && (d = -1);
      this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
  }
  ;
  qe.prototype.get = function(a, b) {
      const c = a + "="
        , d = (this.g.cookie || "").split(";");
      for (let e = 0, f; e < d.length; e++) {
          f = xa(d[e]);
          if (f.lastIndexOf(c, 0) == 0)
              return f.slice(c.length);
          if (f == a)
              return ""
      }
      return b
  }
  ;
  qe.prototype.isEmpty = function() {
      return !this.g.cookie
  }
  ;
  qe.prototype.clear = function() {
      var a = (this.g.cookie || "").split(";");
      const b = [];
      var c = [];
      let d, e;
      for (let f = 0; f < a.length; f++)
          e = xa(a[f]),
          d = e.indexOf("="),
          d == -1 ? (b.push(""),
          c.push(e)) : (b.push(e.substring(0, d)),
          c.push(e.substring(d + 1)));
      for (c = b.length - 1; c >= 0; c--)
          a = b[c],
          this.get(a),
          this.set(a, "", {
              Bb: 0,
              path: void 0,
              domain: void 0
          })
  }
  ;
  function re(a, b=window) {
      if (H(a, 5))
          try {
              return b.localStorage
          } catch {}
      return null
  }
  function se(a=window) {
      try {
          return a.localStorage
      } catch {
          return null
      }
  }
  ;let te = null;
  var ue = (a,b=[])=>{
      let c = !1;
      p.google_logging_queue || (c = !0,
      p.google_logging_queue = []);
      p.google_logging_queue.push([a, b]);
      if (a = c) {
          if (te == null) {
              te = !1;
              try {
                  const d = Qd(p);
                  d && d.location.hash.indexOf("google_logging") !== -1 && (te = !0);
                  se(p)?.getItem("google_logging") && (te = !0)
              } catch (d) {}
          }
          a = te
      }
      a && Rd(p.document, Ed`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
  }
  ;
  function ve(a=p) {
      let b = a.context || a.AMP_CONTEXT_DATA;
      if (!b)
          try {
              b = a.parent.context || a.parent.AMP_CONTEXT_DATA
          } catch {}
      return b?.pageViewId && b?.canonicalUrl ? b : null
  }
  function we(a=ve()) {
      return a ? Pd(a.master) ? a.master : null : null
  }
  ;var xe = a=>{
      a = we(ve(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
      return a.google_unique_id
  }
    , ye = a=>{
      a = a.google_unique_id;
      return typeof a === "number" ? a : 0
  }
    , ze = ()=>{
      if (!O)
          return !1;
      try {
          return !(!O.navigator.standalone && !O.top.navigator.standalone)
      } catch (a) {
          return !1
      }
  }
    , Ae = a=>{
      if (!a)
          return "";
      a = a.toLowerCase();
      a.substring(0, 3) != "ca-" && (a = "ca-" + a);
      return a
  }
  ;
  class Be {
      constructor(a, b) {
          this.error = a;
          this.context = b.context;
          this.msg = b.message || "";
          this.id = b.id || "jserror";
          this.meta = {}
      }
  }
  var Ce = a=>!!(a.error && a.meta && a.id);
  const De = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  var Ee = class {
      constructor(a, b) {
          this.g = a;
          this.i = b
      }
  }
    , Fe = class {
      constructor(a, b, c) {
          this.url = a;
          this.l = b;
          this.eb = !!c;
          this.depth = null
      }
  }
  ;
  let Ge = null;
  function He() {
      if (Ge === null) {
          Ge = "";
          try {
              let a = "";
              try {
                  a = p.top.location.hash
              } catch (b) {
                  a = p.location.hash
              }
              if (a) {
                  const b = a.match(/\bdeid=([\d,]+)/);
                  Ge = b ? b[1] : ""
              }
          } catch (a) {}
      }
      return Ge
  }
  ;function Ie() {
      const a = p.performance;
      return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
  }
  function Je() {
      const a = p.performance;
      return a && a.now ? a.now() : null
  }
  ;var Ke = class {
      constructor(a, b) {
          var c = Je() || Ie();
          this.label = a;
          this.type = b;
          this.value = c;
          this.duration = 0;
          this.taskId = this.slotId = void 0;
          this.uniqueId = Math.random()
      }
  }
  ;
  const Le = p.performance
    , Me = !!(Le && Le.mark && Le.measure && Le.clearMarks)
    , Ne = od(()=>{
      var a;
      if (a = Me)
          a = He(),
          a = !!a.indexOf && a.indexOf("1337") >= 0;
      return a
  }
  );
  function Oe(a) {
      a && Le && Ne() && (Le.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Le.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
  }
  function Pe(a) {
      a.g = !1;
      if (a.i != a.j.google_js_reporting_queue) {
          if (Ne()) {
              var b = a.i;
              const c = b.length;
              b = typeof b === "string" ? b.split("") : b;
              for (let d = 0; d < c; d++)
                  d in b && Oe.call(void 0, b[d])
          }
          a.i.length = 0
      }
  }
  class Qe {
      constructor(a) {
          this.i = [];
          this.j = a || p;
          let b = null;
          a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
          this.i = a.google_js_reporting_queue,
          b = a.google_measure_js_timing);
          this.g = Ne() || (b != null ? b : Math.random() < 1)
      }
      start(a, b) {
          if (!this.g)
              return null;
          a = new Ke(a,b);
          b = `goog_${a.label}_${a.uniqueId}_start`;
          Le && Ne() && Le.mark(b);
          return a
      }
      end(a) {
          if (this.g && typeof a.value === "number") {
              a.duration = (Je() || Ie()) - a.value;
              var b = `goog_${a.label}_${a.uniqueId}_end`;
              Le && Ne() && Le.mark(b);
              !this.g || this.i.length > 2048 || this.i.push(a)
          }
      }
  }
  ;function Re(a, b) {
      const c = {};
      c[a] = b;
      return [c]
  }
  function Se(a, b, c, d, e) {
      const f = [];
      Vd(a, function(g, h) {
          (g = Te(g, b, c, d, e)) && f.push(h + "=" + g)
      });
      return f.join(b)
  }
  function Te(a, b, c, d, e) {
      if (a == null)
          return "";
      b = b || "&";
      c = c || ",$";
      typeof c == "string" && (c = c.split(""));
      if (a instanceof Array) {
          if (d = d || 0,
          d < c.length) {
              const f = [];
              for (let g = 0; g < a.length; g++)
                  f.push(Te(a[g], b, c, d + 1, e));
              return f.join(c[d])
          }
      } else if (typeof a == "object")
          return e = e || 0,
          e < 2 ? encodeURIComponent(Se(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a))
  }
  function Ue(a) {
      let b = 1;
      for (const c in a.i)
          b = c.length > b ? c.length : b;
      return 3997 - b - a.j.length - 1
  }
  function Ve(a, b) {
      let c = "https://pagead2.googlesyndication.com" + b
        , d = Ue(a) - b.length;
      if (d < 0)
          return "";
      a.g.sort(function(f, g) {
          return f - g
      });
      b = null;
      let e = "";
      for (let f = 0; f < a.g.length; f++) {
          const g = a.g[f]
            , h = a.i[g];
          for (let k = 0; k < h.length; k++) {
              if (!d) {
                  b = b == null ? g : b;
                  break
              }
              let l = Se(h[k], a.j, ",$");
              if (l) {
                  l = e + l;
                  if (d >= l.length) {
                      d -= l.length;
                      c += l;
                      e = a.j;
                      break
                  }
                  b = b == null ? g : b
              }
          }
      }
      a = "";
      b != null && (a = e + "trn=" + b);
      return c + a
  }
  class We {
      constructor() {
          this.j = "&";
          this.i = {};
          this.u = 0;
          this.g = []
      }
  }
  ;function Xe(a) {
      let b = a.toString();
      a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
      a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
      if (a.stack)
          a: {
              a = a.stack;
              var c = b;
              try {
                  a.indexOf(c) == -1 && (a = c + "\n" + a);
                  let d;
                  for (; a != d; )
                      d = a,
                      a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                  b = a.replace(RegExp("\n *", "g"), "\n");
                  break a
              } catch (d) {
                  b = c;
                  break a
              }
              b = void 0
          }
      return b
  }
  var Ze = class {
      constructor(a, b, c=null) {
          this.C = a;
          this.F = b;
          this.i = c;
          this.g = null;
          this.j = !1;
          this.A = this.T
      }
      kb(a) {
          this.A = a
      }
      Ga(a) {
          this.g = a
      }
      u(a) {
          this.j = a
      }
      ha(a, b, c) {
          let d, e;
          try {
              this.i && this.i.g ? (e = this.i.start(a.toString(), 3),
              d = b(),
              this.i.end(e)) : d = b()
          } catch (f) {
              b = this.F;
              try {
                  Oe(e),
                  b = this.A(a, new Be(f,{
                      message: Xe(f)
                  }), void 0, c)
              } catch (g) {
                  this.T(217, g)
              }
              if (b)
                  window.console?.error?.(f);
              else
                  throw f;
          }
          return d
      }
      sa(a, b) {
          return (...c)=>this.ha(a, ()=>b.apply(void 0, c))
      }
      T(a, b, c, d, e) {
          e = e || "jserror";
          let f;
          try {
              const Ya = new We;
              var g = Ya;
              g.g.push(1);
              g.i[1] = Re("context", a);
              Ce(b) || (b = new Be(b,{
                  message: Xe(b)
              }));
              if (b.msg) {
                  g = Ya;
                  var h = b.msg.substring(0, 512);
                  g.g.push(2);
                  g.i[2] = Re("msg", h)
              }
              var k = b.meta || {};
              b = k;
              if (this.g)
                  try {
                      this.g(b)
                  } catch (ib) {}
              if (d)
                  try {
                      d(b)
                  } catch (ib) {}
              d = Ya;
              k = [k];
              d.g.push(3);
              d.i[3] = k;
              d = p;
              k = [];
              b = null;
              do {
                  var l = d;
                  if (Pd(l)) {
                      var m = l.location.href;
                      b = l.document && l.document.referrer || null
                  } else
                      m = b,
                      b = null;
                  k.push(new Fe(m || "",l));
                  try {
                      d = l.parent
                  } catch (ib) {
                      d = null
                  }
              } while (d && l != d);
              for (let ib = 0, Eg = k.length - 1; ib <= Eg; ++ib)
                  k[ib].depth = Eg - ib;
              l = p;
              if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                  for (m = 1; m < k.length; ++m) {
                      var n = k[m];
                      n.url || (n.url = l.location.ancestorOrigins[m - 1] || "",
                      n.eb = !0)
                  }
              var q = k;
              let Tc = new Fe(p.location.href,p,!1);
              l = null;
              const me = q.length - 1;
              for (n = me; n >= 0; --n) {
                  var v = q[n];
                  !l && De.test(v.url) && (l = v);
                  if (v.url && !v.eb) {
                      Tc = v;
                      break
                  }
              }
              v = null;
              const Ek = q.length && q[me].url;
              Tc.depth != 0 && Ek && (v = q[me]);
              f = new Ee(Tc,v);
              if (f.i) {
                  q = Ya;
                  var u = f.i.url || "";
                  q.g.push(4);
                  q.i[4] = Re("top", u)
              }
              var x = {
                  url: f.g.url || ""
              };
              if (f.g.url) {
                  var L = f.g.url.match(Md)
                    , C = L[1]
                    , gb = L[3]
                    , Zb = L[4];
                  u = "";
                  C && (u += C + ":");
                  gb && (u += "//",
                  u += gb,
                  Zb && (u += ":" + Zb));
                  var Fg = u
              } else
                  Fg = "";
              C = Ya;
              x = [x, {
                  url: Fg
              }];
              C.g.push(5);
              C.i[5] = x;
              Ye(this.C, e, Ya, this.j, c)
          } catch (Ya) {
              try {
                  Ye(this.C, e, {
                      context: "ecmserr",
                      rctx: a,
                      msg: Xe(Ya),
                      url: f && f.g.url
                  }, this.j, c)
              } catch (Tc) {}
          }
          return this.F
      }
      da(a, b) {
          b.catch(c=>{
              c = c ? c : "unknown rejection";
              this.T(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
          }
          )
      }
  }
  ;
  var $e = id(a=>typeof a === "string")
    , af = id(a=>a === void 0);
  var bf = class extends M {
      constructor() {
          super()
      }
  }
    , cf = [2, 3, 4];
  var df = class extends M {
  }
  ;
  df.B = [2, 8];
  var ef = [3, 4, 5]
    , ff = [6, 7];
  var gf = class extends M {
      constructor() {
          super()
      }
  }
    , hf = [4, 5];
  function jf(a, b) {
      var c = E(a, df, 2, A());
      if (!c.length)
          return kf(a, b);
      a = J(a, 1);
      if (a === 1)
          return c = jf(c[0], b),
          c.success ? {
              success: !0,
              value: !c.value
          } : c;
      c = Sa(c, d=>jf(d, b));
      switch (a) {
      case 2:
          return c.find(d=>d.success && !d.value) ?? c.find(d=>!d.success) ?? {
              success: !0,
              value: !0
          };
      case 3:
          return c.find(d=>d.success && d.value) ?? c.find(d=>!d.success) ?? {
              success: !0,
              value: !1
          };
      default:
          return {
              success: !1,
              O: 3
          }
      }
  }
  function kf(a, b) {
      var c = Kc(a, ef);
      a: {
          switch (c) {
          case 3:
              var d = $c(a, 3, ef);
              break a;
          case 4:
              d = $c(a, 4, ef);
              break a;
          case 5:
              d = $c(a, 5, ef);
              break a
          }
          d = void 0
      }
      if (!d)
          return {
              success: !1,
              O: 2
          };
      b = (b = b[c]) && b[d];
      if (!b)
          return {
              success: !1,
              property: d,
              ga: c,
              O: 1
          };
      let e;
      try {
          var f = Zc(a, 8, A());
          e = b(...f)
      } catch (g) {
          return {
              success: !1,
              property: d,
              ga: c,
              O: 2
          }
      }
      f = J(a, 1);
      if (f === 4)
          return {
              success: !0,
              value: !!e
          };
      if (f === 5)
          return {
              success: !0,
              value: e != null
          };
      if (f === 12)
          a = I(a, Jc(a, ff, 7));
      else
          a: {
              switch (c) {
              case 4:
                  a = Yc(a, Jc(a, ff, 6));
                  break a;
              case 5:
                  a = I(a, Jc(a, ff, 7));
                  break a
              }
              a = void 0
          }
      if (a == null)
          return {
              success: !1,
              property: d,
              ga: c,
              O: 3
          };
      if (f === 6)
          return {
              success: !0,
              value: e === a
          };
      if (f === 9)
          return {
              success: !0,
              value: e != null && ya(String(e), a) === 0
          };
      if (e == null)
          return {
              success: !1,
              property: d,
              ga: c,
              O: 4
          };
      switch (f) {
      case 7:
          c = e < a;
          break;
      case 8:
          c = e > a;
          break;
      case 12:
          c = $e(a) && $e(e) && (new RegExp(a)).test(e);
          break;
      case 10:
          c = e != null && ya(String(e), a) === -1;
          break;
      case 11:
          c = e != null && ya(String(e), a) === 1;
          break;
      default:
          return {
              success: !1,
              O: 3
          }
      }
      return {
          success: !0,
          value: c
      }
  }
  function lf(a, b) {
      return a ? b ? jf(a, b) : {
          success: !1,
          O: 1
      } : {
          success: !0,
          value: !0
      }
  }
  ;var Nc = class extends M {
  }
  ;
  Nc.B = [4];
  var mf = class extends M {
      getValue() {
          return D(this, Nc, 2)
      }
  }
  ;
  var nf = class extends M {
  }
    , of = kd(nf);
  nf.B = [5];
  var pf = [1, 2, 3, 6, 7, 8];
  var qf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  function rf(a, b) {
      try {
          const c = d=>[{
              [d.Ha]: d.Ea
          }];
          return JSON.stringify([a.filter(d=>d.pa).map(c), ed(b), a.filter(d=>!d.pa).map(c)])
      } catch (c) {
          return sf(c, b),
          ""
      }
  }
  function sf(a, b) {
      try {
          pe({
              m: Xe(a instanceof Error ? a : Error(String(a))),
              b: J(b, 1) || null,
              v: I(b, 2) || null
          }, "rcs_internal")
      } catch (c) {}
  }
  var tf = class {
      constructor(a, b) {
          var c = new qf;
          a = B(c, 1, w(a), 0);
          b = cd(a, 2, b);
          a = b.D;
          c = a[t];
          this.j = c & 2 ? b : bc(b.constructor, lc(a, c, !0))
      }
  }
  ;
  var uf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  uf.B = [2];
  var vf = class extends M {
      constructor() {
          super()
      }
      getValue() {
          return J(this, 1)
      }
  }
  ;
  var wf = class extends M {
      constructor() {
          super()
      }
      getWidth() {
          return Xc(this, 1)
      }
      getHeight() {
          return Xc(this, 2)
      }
  }
  ;
  var xf = class extends M {
      constructor() {
          super()
      }
      getContentUrl() {
          return I(this, 4)
      }
  }
  ;
  var yf = class extends M {
  }
  ;
  function zf(a) {
      return Lc(a, yf, 3)
  }
  var Af = class extends M {
  }
  ;
  function Bf(a, b) {
      return cd(a, 1, b)
  }
  var Cf = class extends M {
      constructor() {
          super()
      }
      getContentUrl() {
          return I(this, 1)
      }
  }
  ;
  var Df = class extends M {
  }
  ;
  function Ef(a) {
      var b = new Ff;
      return B(b, 1, w(a), 0)
  }
  var Ff = class extends M {
      constructor() {
          super()
      }
  }
  ;
  var Gf = class extends M {
      constructor() {
          super()
      }
  }
    , Hf = [4, 5, 6, 8, 9, 10, 11, 12, 13];
  var If = class extends M {
      constructor() {
          super()
      }
  }
  ;
  function Jf(a, b) {
      return B(a, 1, w(b), 0)
  }
  function Kf(a, b) {
      return B(a, 2, w(b), 0)
  }
  var Lf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  var Mf = class extends M {
      constructor() {
          super()
      }
  }
    , Nf = [1, 2];
  function Of(a, b) {
      return Oc(a, 1, b)
  }
  function Pf(a, b) {
      return Qc(a, 2, b)
  }
  function Qf(a, b) {
      return Ec(a, 4, b, Nb)
  }
  function Rf(a, b) {
      return Qc(a, 5, b)
  }
  function Sf(a, b) {
      return B(a, 6, w(b), 0)
  }
  var Tf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Tf.B = [2, 4, 5];
  var Uf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Uf.B = [5];
  var Vf = [1, 2, 3, 4, 6];
  var Wf = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Wf.B = [2, 3];
  function Xf(a) {
      var b = new Yf;
      return Pc(b, 4, Zf, a)
  }
  var Yf = class extends M {
      constructor() {
          super()
      }
      getTagSessionCorrelator() {
          return Xc(this, 2)
      }
  }
    , Zf = [4, 5, 7, 8, 9];
  var $f = class extends M {
      constructor() {
          super()
      }
  }
  ;
  var ag = class extends M {
      constructor() {
          super()
      }
  }
  ;
  ag.B = [4, 5];
  var bg = class extends M {
      constructor() {
          super()
      }
      getTagSessionCorrelator() {
          return Xc(this, 1)
      }
  }
  ;
  bg.B = [2];
  var cg = class extends M {
      constructor() {
          super()
      }
  }
    , dg = [4, 6];
  class eg extends tf {
      constructor() {
          super(...arguments)
      }
  }
  function fg(a, ...b) {
      gg(a, ...b.map(c=>({
          pa: !0,
          Ha: 3,
          Ea: ed(c)
      })))
  }
  function hg(a, ...b) {
      gg(a, ...b.map(c=>({
          pa: !0,
          Ha: 4,
          Ea: ed(c)
      })))
  }
  function ig(a, ...b) {
      gg(a, ...b.map(c=>({
          pa: !0,
          Ha: 7,
          Ea: ed(c)
      })))
  }
  var jg = class extends eg {
  }
  ;
  var kg = (a,b)=>{
      globalThis.fetch(a, {
          method: "POST",
          body: b,
          keepalive: b.length < 65536,
          credentials: "omit",
          mode: "no-cors",
          redirect: "follow"
      }).catch(()=>{}
      )
  }
  ;
  function gg(a, ...b) {
      try {
          a.F && rf(a.g.concat(b), a.j).length >= 65536 && lg(a),
          a.u && !a.A && (a.A = !0,
          mg(a.u, ()=>{
              lg(a)
          }
          )),
          a.g.push(...b),
          a.g.length >= a.C && lg(a),
          a.g.length && a.i === null && (a.i = setTimeout(()=>{
              lg(a)
          }
          , a.J))
      } catch (c) {
          sf(c, a.j)
      }
  }
  function lg(a) {
      a.i !== null && (clearTimeout(a.i),
      a.i = null);
      if (a.g.length) {
          var b = rf(a.g, a.j);
          a.I("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
          a.g = []
      }
  }
  var ng = class extends jg {
      constructor(a, b, c, d, e, f) {
          super(a, b);
          this.I = kg;
          this.J = c;
          this.C = d;
          this.F = e;
          this.u = f;
          this.g = [];
          this.i = null;
          this.A = !1
      }
  }
    , og = class extends ng {
      constructor(a, b, c=1E3, d=100, e=!1, f) {
          super(a, b, c, d, e && !0, f)
      }
  }
  ;
  function pg(a, b) {
      var c = Date.now();
      c = Number.isFinite(c) ? Math.round(c) : 0;
      b = K(b, 1, c);
      c = ie(window);
      b = K(b, 2, c);
      return K(b, 6, a.A)
  }
  function qg(a, b, c, d, e, f) {
      if (a.j) {
          var g = Kf(Jf(new Lf, b), c);
          b = Sf(Pf(Of(Rf(Qf(new Tf, d), e), g), a.g.slice()), f);
          b = Xf(b);
          hg(a.i, pg(a, b));
          if (f === 1 || f === 3 || f === 4 && !a.g.some(h=>J(h, 1) === J(g, 1) && J(h, 2) === c))
              a.g.push(g),
              a.g.length > 100 && a.g.shift()
      }
  }
  function rg(a, b, c, d) {
      if (a.j) {
          var e = new If;
          b = y(e, 1, Ob(b));
          c = y(b, 2, Ob(c));
          d = y(c, 3, w(d));
          c = new Yf;
          d = Pc(c, 8, Zf, d);
          hg(a.i, pg(a, d))
      }
  }
  function sg(a, b, c, d, e) {
      if (a.j) {
          var f = new gf;
          b = Oc(f, 1, b);
          c = y(b, 2, w(c));
          d = y(c, 3, Ob(d));
          if (e.ga === void 0)
              Gc(d, 4, hf, w(e.O));
          else
              switch (e.ga) {
              case 3:
                  c = new bf;
                  c = Gc(c, 2, cf, w(e.property));
                  e = y(c, 1, w(e.O));
                  Pc(d, 5, hf, e);
                  break;
              case 4:
                  c = new bf;
                  c = Gc(c, 3, cf, w(e.property));
                  e = y(c, 1, w(e.O));
                  Pc(d, 5, hf, e);
                  break;
              case 5:
                  c = new bf,
                  c = Gc(c, 4, cf, w(e.property)),
                  e = y(c, 1, w(e.O)),
                  Pc(d, 5, hf, e)
              }
          e = new Yf;
          e = Pc(e, 9, Zf, d);
          hg(a.i, pg(a, e))
      }
  }
  var tg = class {
      constructor(a, b, c, d=new og(6,"unknown",b)) {
          this.A = a;
          this.u = c;
          this.i = d;
          this.g = [];
          this.j = a > 0 && Ud() < 1 / a
      }
  }
  ;
  var N = a=>{
      var b = "Da";
      if (a.Da && a.hasOwnProperty(b))
          return a.Da;
      b = new a;
      return a.Da = b
  }
  ;
  var ug = class {
      constructor() {
          this.N = {
              [3]: {},
              [4]: {},
              [5]: {}
          }
      }
  }
  ;
  var vg = /^true$/.test("false");
  function wg(a, b) {
      switch (b) {
      case 1:
          return $c(a, 1, pf);
      case 2:
          return $c(a, 2, pf);
      case 3:
          return $c(a, 3, pf);
      case 6:
          return $c(a, 6, pf);
      case 8:
          return $c(a, 8, pf);
      default:
          return null
      }
  }
  function xg(a, b) {
      if (!a)
          return null;
      switch (b) {
      case 1:
          return H(a, 1);
      case 7:
          return I(a, 3);
      case 2:
          return Yc(a, 2);
      case 3:
          return I(a, 3);
      case 6:
          return Zc(a, 4, A());
      case 8:
          return Zc(a, 4, A());
      default:
          return null
      }
  }
  const yg = od(()=>{
      if (!vg)
          return {};
      try {
          var a = window;
          try {
              var b = a.sessionStorage
          } catch {
              b = null
          }
          if (b = b?.getItem("GGDFSSK"))
              return JSON.parse(b)
      } catch {}
      return {}
  }
  );
  function zg(a, b, c, d=0) {
      N(Ag).j[d] = N(Ag).j[d]?.add(b) ?? (new Set).add(b);
      const e = yg();
      if (e[b] != null)
          return e[b];
      b = Bg(d)[b];
      if (!b)
          return c;
      b = of(JSON.stringify(b));
      b = Cg(b);
      a = xg(b, a);
      return a != null ? a : c
  }
  function Cg(a) {
      const b = N(ug).N;
      if (b && Kc(a, pf) !== 8) {
          const c = Ua(E(a, mf, 5, A()), d=>{
              d = lf(D(d, df, 1), b);
              return d.success && d.value
          }
          );
          if (c)
              return c.getValue() ?? null
      }
      return D(a, Nc, 4) ?? null
  }
  class Ag {
      constructor() {
          this.i = {};
          this.u = [];
          this.j = {};
          this.g = new Map
      }
  }
  function Dg(a, b=!1, c) {
      return !!zg(1, a, b, c)
  }
  function Gg(a, b=0, c) {
      a = Number(zg(2, a, b, c));
      return isNaN(a) ? b : a
  }
  function Hg(a, b="", c) {
      a = zg(3, a, b, c);
      return typeof a === "string" ? a : b
  }
  function Ig(a, b=[], c) {
      a = zg(6, a, b, c);
      return Array.isArray(a) ? a : b
  }
  function Jg(a, b=[], c) {
      a = zg(8, a, b, c);
      return Array.isArray(a) ? a : b
  }
  function Bg(a) {
      return N(Ag).i[a] || (N(Ag).i[a] = {})
  }
  function Kg(a, b) {
      const c = Bg(b);
      Vd(a, (d,e)=>{
          if (c[e]) {
              const g = of(JSON.stringify(d));
              if (G(g, Jc(g, pf, 8)) != null) {
                  var f = of(JSON.stringify(c[e]));
                  d = Lc(g, Nc, 4);
                  f = Zc(Mc(f), 4, A());
                  Fc(d, f)
              }
              c[e] = ed(g)
          } else
              c[e] = d
      }
      )
  }
  function Lg(a, b, c, d, e=!1) {
      var f = []
        , g = [];
      for (const n of b) {
          b = Bg(n);
          for (const q of a) {
              var h = Kc(q, pf);
              const v = wg(q, h);
              if (v) {
                  a: {
                      var k = v;
                      var l = h
                        , m = N(Ag).g.get(n)?.get(v)?.slice(0) ?? [];
                      const u = new Uf;
                      switch (l) {
                      case 1:
                          Gc(u, 1, Vf, w(k));
                          break;
                      case 2:
                          Gc(u, 2, Vf, w(k));
                          break;
                      case 3:
                          Gc(u, 3, Vf, w(k));
                          break;
                      case 6:
                          Gc(u, 4, Vf, w(k));
                          break;
                      case 8:
                          Gc(u, 6, Vf, w(k));
                          break;
                      default:
                          k = void 0;
                          break a
                      }
                      Ec(u, 5, m, Nb);
                      k = u
                  }
                  k && N(Ag).j[n]?.has(v) && f.push(k);
                  h === 8 && b[v] ? (k = of(JSON.stringify(b[v])),
                  h = Lc(q, Nc, 4),
                  k = Zc(Mc(k), 4, A()),
                  Fc(h, k)) : k && N(Ag).g.get(n)?.has(v) && g.push(k);
                  e || (h = v,
                  k = n,
                  l = d,
                  m = N(Ag),
                  m.g.has(k) || m.g.set(k, new Map),
                  m.g.get(k).has(h) || m.g.get(k).set(h, []),
                  l && m.g.get(k).get(h).push(l));
                  b[v] = ed(q)
              }
          }
      }
      if (f.length || g.length)
          a = d ?? void 0,
          c.j && c.u && (d = new Wf,
          f = Qc(d, 2, f),
          g = Qc(f, 3, g),
          a && B(g, 1, Ob(a), 0),
          f = new Yf,
          g = Pc(f, 7, Zf, g),
          hg(c.i, pg(c, g)))
  }
  function Mg(a, b) {
      b = Bg(b);
      for (const c of a) {
          a = of(JSON.stringify(c));
          const d = Kc(a, pf);
          (a = wg(a, d)) && (b[a] || (b[a] = c))
      }
  }
  function Ng() {
      return Object.keys(N(Ag).i).map(a=>Number(a))
  }
  function Og(a) {
      N(Ag).u.includes(a) || Kg(Bg(4), a)
  }
  ;function P(a, b, c) {
      c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
          value: b
      })
  }
  function Pg(a, b, c) {
      return b[a] || c
  }
  function Qg(a) {
      P(5, Dg, a);
      P(6, Gg, a);
      P(7, Hg, a);
      P(8, Ig, a);
      P(17, Jg, a);
      P(13, Mg, a);
      P(15, Og, a)
  }
  function Rg(a) {
      P(4, b=>{
          N(ug).N = b
      }
      , a);
      P(9, (b,c)=>{
          var d = N(ug);
          d.N[3][b] == null && (d.N[3][b] = c)
      }
      , a);
      P(10, (b,c)=>{
          var d = N(ug);
          d.N[4][b] == null && (d.N[4][b] = c)
      }
      , a);
      P(11, (b,c)=>{
          var d = N(ug);
          d.N[5][b] == null && (d.N[5][b] = c)
      }
      , a);
      P(14, b=>{
          var c = N(ug);
          for (const d of [3, 4, 5])
              Object.assign(c.N[d], b[d])
      }
      , a)
  }
  function Sg(a) {
      a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
          value: !0
      })
  }
  ;function Tg(a, b, c) {
      a.j = Pg(1, b, ()=>{}
      );
      a.u = (d,e)=>Pg(2, b, ()=>[])(d, c, e);
      a.g = ()=>Pg(3, b, ()=>[])(c);
      a.i = d=>{
          Pg(16, b, ()=>{}
          )(d, c)
      }
  }
  class Ug {
      j() {}
      i() {}
      u() {
          return []
      }
      g() {
          return []
      }
  }
  ;function Ye(a, b, c, d=!1, e) {
      if ((d ? a.g : Math.random()) < (e || .01))
          try {
              let f;
              c instanceof We ? f = c : (f = new We,
              Vd(c, (h,k)=>{
                  var l = f;
                  const m = l.u++;
                  h = Re(k, h);
                  l.g.push(m);
                  l.i[m] = h
              }
              ));
              const g = Ve(f, "/pagead/gen_204?id=" + b + "&");
              g && le(p, g)
          } catch (f) {}
  }
  function Vg(a, b) {
      b >= 0 && b <= 1 && (a.g = b)
  }
  class Wg {
      constructor() {
          this.g = Math.random()
      }
  }
  ;let Xg, Yg;
  const Zg = new Qe(window);
  (a=>{
      Xg = a ?? new Wg;
      typeof window.google_srt !== "number" && (window.google_srt = Math.random());
      Vg(Xg, window.google_srt);
      Yg = new Ze(Xg,!0,Zg);
      Yg.Ga(()=>{}
      );
      Yg.u(!0);
      window.document.readyState == "complete" ? window.google_measure_js_timing || Pe(Zg) : Zg.g && qd(window, "load", ()=>{
          window.google_measure_js_timing || Pe(Zg)
      }
      )
  }
  )();
  var $g = {
      Wb: 0,
      Vb: 1,
      Sb: 2,
      Nb: 3,
      Tb: 4,
      Ob: 5,
      Ub: 6,
      Qb: 7,
      Rb: 8,
      Mb: 9,
      Pb: 10,
      Xb: 11
  };
  var ah = {
      Zb: 0,
      ac: 1,
      Yb: 2
  };
  function bh(a) {
      if (a.g != 0)
          throw Error("Already resolved/rejected.");
  }
  var eh = class {
      constructor() {
          this.i = new ch(this);
          this.g = 0
      }
      resolve(a) {
          bh(this);
          this.g = 1;
          this.u = a;
          dh(this.i)
      }
      reject(a) {
          bh(this);
          this.g = 2;
          this.j = a;
          dh(this.i)
      }
  }
  ;
  function dh(a) {
      switch (a.g.g) {
      case 0:
          break;
      case 1:
          a.i && a.i(a.g.u);
          break;
      case 2:
          a.j && a.j(a.g.j);
          break;
      default:
          throw Error("Unhandled deferred state.");
      }
  }
  var ch = class {
      constructor(a) {
          this.g = a
      }
      then(a, b) {
          if (this.i)
              throw Error("Then functions already set.");
          this.i = a;
          this.j = b;
          dh(this)
      }
  }
  ;
  const fh = class {
      constructor(a) {
          this.g = a.slice(0)
      }
      forEach(a) {
          this.g.forEach((b,c)=>void a(b, c, this))
      }
      filter(a) {
          return new fh(Ra(this.g, a))
      }
      apply(a) {
          return new fh(a(this.g.slice(0)))
      }
      get(a) {
          return this.g[a]
      }
      add(a) {
          const b = this.g.slice(0);
          b.push(a);
          return new fh(b)
      }
  }
  ;
  function gh(a, b) {
      for (var c = [], d = a.length, e = 0; e < d; e++)
          c.push(a[e]);
      c.forEach(b, void 0)
  }
  ;const ih = class {
      constructor() {
          this.g = {};
          this.i = {}
      }
      set(a, b) {
          const c = hh(a);
          this.g[c] = b;
          this.i[c] = a
      }
      get(a, b) {
          a = hh(a);
          return this.g[a] !== void 0 ? this.g[a] : b
      }
      clear() {
          this.g = {};
          this.i = {}
      }
  }
  ;
  function hh(a) {
      return a instanceof Object ? String(ma(a)) : a + ""
  }
  ;function jh(a) {
      return new kh({
          value: a
      },null)
  }
  function lh(a) {
      return new kh(null,a)
  }
  function mh(a) {
      try {
          return jh(a())
      } catch (b) {
          return lh(b)
      }
  }
  function nh(a) {
      return a.g != null ? a.getValue() : null
  }
  function oh(a, b) {
      a.g != null && b(a.getValue());
      return a
  }
  function ph(a, b) {
      a.g != null || b(a.i);
      return a
  }
  class kh {
      constructor(a, b) {
          this.g = a;
          this.i = b
      }
      getValue() {
          return this.g.value
      }
      map(a) {
          return this.g != null ? (a = a(this.getValue()),
          a instanceof kh ? a : jh(a)) : this
      }
  }
  ;const qh = class {
      constructor(a) {
          this.g = new ih;
          if (a)
              for (var b = 0; b < a.length; ++b)
                  this.add(a[b])
      }
      add(a) {
          this.g.set(a, !0)
      }
      contains(a) {
          return this.g.g[hh(a)] !== void 0
      }
  }
  ;
  class rh {
      constructor() {
          this.g = new ih
      }
      set(a, b) {
          let c = this.g.get(a);
          c || (c = new qh,
          this.g.set(a, c));
          c.add(b)
      }
  }
  ;var Q = class extends M {
      getId() {
          return F(this, 3)
      }
  }
  ;
  Q.B = [4];
  class sh {
      constructor({qb: a, bc: b, mc: c, Eb: d}) {
          this.g = b;
          this.u = new fh(a || []);
          this.j = d;
          this.i = c
      }
  }
  ;const uh = a=>{
      const b = []
        , c = a.u;
      c && c.g.length && b.push({
          ba: "a",
          fa: th(c)
      });
      a.g != null && b.push({
          ba: "as",
          fa: a.g
      });
      a.i != null && b.push({
          ba: "i",
          fa: String(a.i)
      });
      a.j != null && b.push({
          ba: "rp",
          fa: String(a.j)
      });
      b.sort(function(d, e) {
          return d.ba.localeCompare(e.ba)
      });
      b.unshift({
          ba: "t",
          fa: "aa"
      });
      return b
  }
    , th = a=>{
      a = a.g.slice(0).map(vh);
      a = JSON.stringify(a);
      return Wd(a)
  }
    , vh = a=>{
      const b = {};
      F(a, 7) != null && (b.q = F(a, 7));
      Vc(a, 2) != null && (b.o = Vc(a, 2));
      Vc(a, 5) != null && (b.p = Vc(a, 5));
      return b
  }
  ;
  var wh = class extends M {
      setLocation(a) {
          return y(this, 1, w(a))
      }
  }
  ;
  function xh(a) {
      const b = [].slice.call(arguments).filter(nd(e=>e === null));
      if (!b.length)
          return null;
      let c = []
        , d = {};
      b.forEach(e=>{
          c = c.concat(e.Za || []);
          d = Object.assign(d, e.jb)
      }
      );
      return new yh(c,d)
  }
  function zh(a) {
      switch (a) {
      case 1:
          return new yh(null,{
              google_ad_semantic_area: "mc"
          });
      case 2:
          return new yh(null,{
              google_ad_semantic_area: "h"
          });
      case 3:
          return new yh(null,{
              google_ad_semantic_area: "f"
          });
      case 4:
          return new yh(null,{
              google_ad_semantic_area: "s"
          });
      default:
          return null
      }
  }
  function Ah(a) {
      if (a == null)
          var b = null;
      else {
          var c = uh(a);
          a = [];
          for (b of c)
              c = String(b.fa),
              a.push(b.ba + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
          b = new yh(null,{
              google_placement_id: a.join("~")
          })
      }
      return b
  }
  class yh {
      constructor(a, b) {
          this.Za = a;
          this.jb = b
      }
  }
  ;const Bh = new yh(["google-auto-placed"],{
      google_reactive_ad_format: 40,
      google_tag_origin: "qs"
  });
  var Ch = kd(class extends M {
  }
  );
  var Dh = class extends M {
  }
  ;
  var Eh = class extends M {
  }
  ;
  var Fh = class extends M {
  }
  ;
  Fh.B = [6, 7, 9, 10, 11];
  var Gh = class extends M {
  }
  ;
  var Hh = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Hh.B = [1];
  function Ih(a) {
      if (a.nodeType != 1)
          var b = !1;
      else if (b = a.tagName == "INS")
          a: {
              b = ["adsbygoogle-placeholder"];
              a = a.className ? a.className.split(/\s+/) : [];
              for (var c = {}, d = 0; d < a.length; ++d)
                  c[a[d]] = !0;
              for (d = 0; d < b.length; ++d)
                  if (!c[b[d]]) {
                      b = !1;
                      break a
                  }
              b = !0
          }
      return b
  }
  ;var R = class {
      constructor(a, b=!1) {
          this.g = a;
          this.defaultValue = b
      }
  }
    , Jh = class {
      constructor(a, b=0) {
          this.g = a;
          this.defaultValue = b
      }
  }
    , Kh = class {
      constructor(a, b=[]) {
          this.g = a;
          this.defaultValue = b
      }
  }
  ;
  var Lh = new R(1333)
    , Mh = new Jh(1359)
    , Nh = new Jh(1358)
    , Oh = new R(1360)
    , Ph = new Jh(1357)
    , Qh = new R(1322,!0)
    , Rh = new R(1345)
    , Sh = new R(1355,!0)
    , Th = new R(1332)
    , Uh = new Jh(1130,100)
    , Vh = new Jh(1340,.2)
    , Wh = new Jh(1338,.3)
    , Xh = new Jh(1336,1.2)
    , Yh = new Jh(1339,.3)
    , Zh = new R(1337)
    , $h = new class {
      constructor(a, b="") {
          this.g = a;
          this.defaultValue = b
      }
  }
  (14)
    , ai = new R(1342)
    , bi = new R(1344)
    , ci = new Jh(1343,300)
    , di = new R(316)
    , ei = new R(1207,!0)
    , fi = new R(313)
    , gi = new R(369)
    , hi = new R(1318,!0)
    , ii = new R(217)
    , ji = new R(626390500)
    , ki = new Kh(627094447,"1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" "))
    , li = new Jh(643258048)
    , mi = new Jh(643258049)
    , ni = new Jh(579884443,.7)
    , oi = new Kh(641845510,["33"])
    , pi = new R(622128248,!0)
    , qi = new Kh(635821288,["30_19"])
    , ri = new Kh(636146137,["30_6"])
    , si = new R(579884441,!0)
    , ti = new Kh(627094446,"1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" "))
    , ui = new Jh(579884442,.7)
    , vi = new R(626062008)
    , wi = new R(643258050)
    , xi = new R(506914611)
    , yi = new R(626062007)
    , zi = new R(1120)
    , Ai = new R(652491597)
    , Bi = new R(45615403,!0)
    , Ci = new Jh(1079,5)
    , Di = new R(10009,!0)
    , Ei = new R(10013)
    , ge = new class {
      constructor(a, b=[]) {
          this.g = a;
          this.defaultValue = b
      }
  }
  (1934,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"])
    , Fi = new R(84);
  var fe = class {
      constructor() {
          const a = {};
          this.i = (b,c)=>a[b] != null ? a[b] : c;
          this.u = (b,c)=>a[b] != null ? a[b] : c;
          this.g = (b,c)=>a[b] != null ? a[b] : c;
          this.A = (b,c)=>a[b] != null ? a[b] : c;
          this.j = (b,c)=>a[b] != null ? c.concat(a[b]) : c;
          this.C = ()=>{}
      }
  }
  ;
  function S(a) {
      return N(fe).i(a.g, a.defaultValue)
  }
  function T(a) {
      return N(fe).u(a.g, a.defaultValue)
  }
  function Gi(a) {
      return N(fe).j(a.g, a.defaultValue)
  }
  ;function Hi(a, b, c) {
      switch (c) {
      case 0:
          b.parentNode && b.parentNode.insertBefore(a, b);
          break;
      case 3:
          if (c = b.parentNode) {
              var d = b.nextSibling;
              if (d && d.parentNode != c)
                  for (; d && d.nodeType == 8; )
                      d = d.nextSibling;
              c.insertBefore(a, d)
          }
          break;
      case 1:
          b.insertBefore(a, b.firstChild);
          break;
      case 2:
          b.appendChild(a)
      }
      Ih(b) && (b.setAttribute("data-init-display", b.style.display),
      b.style.display = "block")
  }
  ;function Ii(a, b) {
      const c = e=>{
          e = Ji(e);
          return e == null ? !1 : 0 < e
      }
        , d = e=>{
          e = Ji(e);
          return e == null ? !1 : 0 > e
      }
      ;
      switch (b) {
      case 0:
          return {
              init: Ki(a.previousSibling, c),
              la: e=>Ki(e.previousSibling, c),
              ra: 0
          };
      case 2:
          return {
              init: Ki(a.lastChild, c),
              la: e=>Ki(e.previousSibling, c),
              ra: 0
          };
      case 3:
          return {
              init: Ki(a.nextSibling, d),
              la: e=>Ki(e.nextSibling, d),
              ra: 3
          };
      case 1:
          return {
              init: Ki(a.firstChild, d),
              la: e=>Ki(e.nextSibling, d),
              ra: 3
          }
      }
      throw Error("Un-handled RelativePosition: " + b);
  }
  function Ji(a) {
      return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
  }
  function Ki(a, b) {
      return a && b(a) ? a : null
  }
  ;var Li = {
      rectangle: 1,
      horizontal: 2,
      vertical: 4
  };
  var Mi = {
      overlays: 1,
      interstitials: 2,
      vignettes: 2,
      inserts: 3,
      immersives: 4,
      list_view: 5,
      full_page: 6,
      side_rails: 7
  };
  function Ni(a) {
      a = a.document;
      let b = {};
      a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
      return b || {}
  }
  function U(a) {
      return Ni(a).clientWidth ?? void 0
  }
  ;function Oi(a, b) {
      do {
          const c = Td(a, b);
          if (c && c.position == "fixed")
              return !1
      } while (a = a.parentElement);
      return !0
  }
  ;function Pi(a, b) {
      var c = ["width", "height"];
      for (let e = 0; e < c.length; e++) {
          const f = "google_ad_" + c[e];
          if (!b.hasOwnProperty(f)) {
              var d = $d(a[c[e]]);
              d = d === null ? null : Math.round(d);
              d != null && (b[f] = d)
          }
      }
  }
  function Qi(a, b) {
      return !((Yd.test(b.google_ad_width) || Xd.test(a.style.width)) && (Yd.test(b.google_ad_height) || Xd.test(a.style.height)))
  }
  function Ri(a, b) {
      return (a = Si(a, b)) ? a.y : 0
  }
  function Si(a, b) {
      try {
          const c = b.document.documentElement.getBoundingClientRect()
            , d = a.getBoundingClientRect();
          return {
              x: d.left - c.left,
              y: d.top - c.top
          }
      } catch (c) {
          return null
      }
  }
  function Ti(a, b, c, d, e) {
      if (a !== a.top)
          return Qd(a) ? 3 : 16;
      if (!(U(a) < 488))
          return 4;
      if (!(a.innerHeight >= a.innerWidth))
          return 5;
      const f = U(a);
      if (!f || (f - c) / f > d)
          a = 6;
      else {
          if (c = e.google_full_width_responsive !== "true")
              a: {
                  c = b.parentElement;
                  for (b = U(a); c; c = c.parentElement)
                      if ((d = Td(c, a)) && (e = $d(d.width)) && !(e >= b) && d.overflow !== "visible") {
                          c = !0;
                          break a
                      }
                  c = !1
              }
          a = c ? 7 : !0
      }
      return a
  }
  function Ui(a, b, c, d) {
      const e = Ti(b, c, a, T(Yh), d);
      e !== !0 ? a = e : d.google_full_width_responsive === "true" || Oi(c, b) ? (b = U(b),
      a = b - a,
      a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
      return a
  }
  function Vi(a, b, c) {
      a = a.style;
      b === "rtl" ? a.marginRight = c : a.marginLeft = c
  }
  function Wi(a, b) {
      if (b.nodeType === 3)
          return /\S/.test(b.data);
      if (b.nodeType === 1) {
          if (/^(script|style)$/i.test(b.nodeName))
              return !1;
          let c;
          try {
              c = Td(b, a)
          } catch (d) {}
          return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
      }
      return !1
  }
  function Xi(a, b, c) {
      a = Si(b, a);
      return c === "rtl" ? -a.x : a.x
  }
  function Yi(a, b) {
      var c;
      c = (c = b.parentElement) ? (c = Td(c, a)) ? c.direction : "" : "";
      if (c) {
          var d = b.style;
          d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
          d.borderSpacing = d.padding = "0";
          Vi(b, c, "0px");
          d.width = `${U(a)}px`;
          if (Xi(a, b, c) !== 0) {
              Vi(b, c, "0px");
              var e = Xi(a, b, c);
              Vi(b, c, `${-1 * e}px`);
              a = Xi(a, b, c);
              a !== 0 && a !== e && Vi(b, c, `${e / (a - e) * e}px`)
          }
          d.zIndex = "30"
      }
  }
  ;var Zi = class {
      constructor(a, b) {
          this.aa = a;
          this.j = b
      }
      height() {
          return this.j
      }
      g(a) {
          return a > T(ci) && this.j > 300 ? this.aa : Math.min(1200, Math.round(a))
      }
      i() {}
  }
  ;
  var $i = (a,b,c)=>{
      let d;
      return a.style && !!a.style[c] && $d(a.style[c]) || (d = Td(a, b)) && !!d[c] && $d(d[c]) || null
  }
    , aj = (a,b)=>{
      let c;
      return a.style && a.style.zIndex || (c = Td(a, b)) && c.zIndex || null
  }
    , bj = a=>b=>b.aa <= a
    , ej = (a,b,c,d)=>{
      const e = a && cj(c, b)
        , f = dj(b, d);
      return g=>!(e && g.height() >= f)
  }
    , fj = a=>b=>b.height() <= a
    , cj = (a,b)=>Ri(a, b) < Ni(b).clientHeight - 100
    , gj = (a,b)=>{
      var c = $i(b, a, "height");
      if (c)
          return c;
      var d = b.style.height;
      b.style.height = "inherit";
      c = $i(b, a, "height");
      b.style.height = d;
      if (c)
          return c;
      c = Infinity;
      do
          (d = b.style && $d(b.style.height)) && (c = Math.min(c, d)),
          (d = $i(b, a, "maxHeight")) && (c = Math.min(c, d));
      while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
      return c
  }
  ;
  const dj = (a,b)=>{
      const c = ye(a) === 0;
      return b && c ? Math.max(250, 2 * Ni(a).clientHeight / 3) : 250
  }
  ;
  var hj = {
      google_ad_channel: !0,
      google_ad_client: !0,
      google_ad_host: !0,
      google_ad_host_channel: !0,
      google_adtest: !0,
      google_tag_for_child_directed_treatment: !0,
      google_tag_for_under_age_of_consent: !0,
      google_tag_partner: !0,
      google_restrict_data_processing: !0,
      google_page_url: !0,
      google_debug_params: !0,
      google_shadow_mode: !0,
      google_adbreak_test: !0,
      google_ad_frequency_hint: !0,
      google_admob_interstitial_slot: !0,
      google_admob_rewarded_slot: !0,
      google_admob_ads_only: !0,
      google_ad_start_delay_hint: !0,
      google_max_ad_content_rating: !0,
      google_traffic_source: !0,
      google_overlays: !0,
      google_privacy_treatments: !0,
      google_special_category_data: !0,
      google_ad_intent_query: !0,
      google_ad_intent_qetid: !0,
      google_ad_intent_eids: !0
  };
  const ij = RegExp("(^| )adsbygoogle($| )");
  function jj(a, b) {
      for (let c = 0; c < b.length; c++) {
          const d = b[c]
            , e = Hd(d.property);
          a[e] = d.value
      }
  }
  ;var kj = class extends M {
      g() {
          return Uc(this, 23)
      }
  }
  ;
  var lj = class extends M {
      g() {
          return Rc(this, 1)
      }
  }
  ;
  var mj = class extends M {
  }
  ;
  var nj = class extends M {
  }
  ;
  var oj = class extends M {
  }
  ;
  var pj = class extends M {
  }
  ;
  var qj = class extends M {
      getName() {
          return F(this, 4)
      }
  }
    , rj = [1, 2, 3];
  var sj = class extends M {
  }
  ;
  sj.B = [2, 5, 6, 11];
  var tj = class extends M {
  }
  ;
  var vj = class extends M {
      g() {
          return ad(this, tj, 2, uj)
      }
  }
    , uj = [1, 2];
  var wj = class extends M {
      g() {
          return D(this, vj, 3)
      }
  }
  ;
  wj.B = [1, 4];
  var xj = class extends M {
  }
    , yj = kd(xj);
  xj.B = [1, 2, 5, 7];
  function zj(a) {
      var b = [];
      gh(a.getElementsByTagName("p"), function(c) {
          Aj(c) >= 100 && b.push(c)
      });
      return b
  }
  function Aj(a) {
      if (a.nodeType == 3)
          return a.length;
      if (a.nodeType != 1 || a.tagName == "SCRIPT")
          return 0;
      var b = 0;
      gh(a.childNodes, function(c) {
          b += Aj(c)
      });
      return b
  }
  function Bj(a) {
      return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
  }
  function Cj(a, b) {
      if (a.g == null)
          return b;
      switch (a.g) {
      case 1:
          return b.slice(1);
      case 2:
          return b.slice(0, b.length - 1);
      case 3:
          return b.slice(1, b.length - 1);
      case 0:
          return b;
      default:
          throw Error("Unknown ignore mode: " + a.g);
      }
  }
  function Dj(a, b) {
      var c = [];
      try {
          c = b.querySelectorAll(a.u)
      } catch (g) {}
      if (!c.length)
          return [];
      b = Wa(c);
      b = Cj(a, b);
      typeof a.i === "number" && (c = a.i,
      c < 0 && (c += b.length),
      b = c >= 0 && c < b.length ? [b[c]] : []);
      if (typeof a.j === "number") {
          c = [];
          for (var d = 0; d < b.length; d++) {
              var e = zj(b[d])
                , f = a.j;
              f < 0 && (f += e.length);
              f >= 0 && f < e.length && c.push(e[f])
          }
          b = c
      }
      return b
  }
  const Ej = class {
      constructor(a, b, c, d) {
          this.u = a;
          this.i = b;
          this.j = c;
          this.g = d
      }
      toString() {
          return JSON.stringify({
              nativeQuery: this.u,
              occurrenceIndex: this.i,
              paragraphIndex: this.j,
              ignoreMode: this.g
          })
      }
  }
  ;
  class Fj {
      constructor() {
          var a = Ed`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
          this.g = null;
          this.j = !1;
          this.A = Math.random();
          this.i = this.T;
          this.C = a
      }
      Ga(a) {
          this.g = a
      }
      u(a) {
          this.j = a
      }
      kb(a) {
          this.i = a
      }
      T(a, b, c=.01, d, e="jserror") {
          if ((this.j ? this.A : Math.random()) > c)
              return !1;
          Ce(b) || (b = new Be(b,{
              context: a,
              id: e
          }));
          if (d || this.g)
              b.meta = {},
              this.g && this.g(b.meta),
              d && d(b.meta);
          p.google_js_errors = p.google_js_errors || [];
          p.google_js_errors.push(b);
          p.error_rep_loaded || (Rd(p.document, this.C),
          p.error_rep_loaded = !0);
          return !1
      }
      ha(a, b, c) {
          try {
              return b()
          } catch (d) {
              if (!this.i(a, d, .01, c, "jserror"))
                  throw d;
          }
      }
      sa(a, b) {
          return (...c)=>this.ha(a, ()=>b.apply(void 0, c))
      }
      da(a, b) {
          b.catch(c=>{
              c = c ? c : "unknown rejection";
              this.T(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
          }
          )
      }
  }
  ;const Gj = (a,b)=>{
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      b.length < 2048 && b.push(a)
  }
  ;
  var Hj = (a,b,c,d,e=!1)=>{
      const f = d || window
        , g = typeof queueMicrotask !== "undefined";
      return function() {
          e && g && queueMicrotask(()=>{
              f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
              f.google_rum_task_id_counter += 1
          }
          );
          const h = Je();
          let k, l = 3;
          try {
              k = b.apply(this, arguments)
          } catch (m) {
              l = 13;
              if (!c)
                  throw m;
              c(a, m)
          } finally {
              f.google_measure_js_timing && h && Gj({
                  label: a.toString(),
                  value: h,
                  duration: (Je() || 0) - h,
                  type: l,
                  ...(e && g && {
                      taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                  })
              }, f)
          }
          return k
      }
  }
    , Ij = (a,b)=>Hj(a, b, (c,d)=>{
      (new Fj).T(c, d)
  }
  , void 0, !1);
  function Jj(a, b, c) {
      return Hj(a, b, void 0, c, !0).apply()
  }
  function Kj(a) {
      if (!a)
          return null;
      var b = F(a, 7);
      if (F(a, 1) || a.getId() || Zc(a, 4, A()).length > 0) {
          var c = F(a, 3)
            , d = F(a, 1)
            , e = Zc(a, 4, A(Ab));
          b = Vc(a, 2);
          var f = Vc(a, 5);
          a = Lj(G(a, 6));
          var g = "";
          d && (g += d);
          c && (g += "#" + Bj(c));
          if (e)
              for (c = 0; c < e.length; c++)
                  g += "." + Bj(e[c]);
          b = (e = g) ? new Ej(e,b,f,a) : null
      } else
          b = b ? new Ej(b,Vc(a, 2),Vc(a, 5),Lj(G(a, 6))) : null;
      return b
  }
  var Mj = {
      1: 1,
      2: 2,
      3: 3,
      0: 0
  };
  function Lj(a) {
      return a == null ? a : Mj[a]
  }
  var Nj = {
      1: 0,
      2: 1,
      3: 2,
      4: 3
  };
  function Oj(a) {
      return a.google_ama_state = a.google_ama_state || {}
  }
  function Pj(a) {
      a = Oj(a);
      return a.optimization = a.optimization || {}
  }
  ;var Qj = a=>{
      switch (G(a, 8)) {
      case 1:
      case 2:
          if (a == null)
              var b = null;
          else
              b = D(a, Q, 1),
              b == null ? b = null : (a = G(a, 2),
              b = a == null ? null : new sh({
                  qb: [b],
                  Eb: a
              }));
          return b != null ? jh(b) : lh(Error("Missing dimension when creating placement id"));
      case 3:
          return lh(Error("Missing dimension when creating placement id"));
      default:
          return lh(Error("Invalid type: " + G(a, 8)))
      }
  }
  ;
  var Rj = (a,b)=>{
      const c = [];
      let d = a;
      for (a = ()=>{
          c.push({
              anchor: d.anchor,
              position: d.position
          });
          return d.anchor == b.anchor && d.position == b.position
      }
      ; d; ) {
          switch (d.position) {
          case 1:
              if (a())
                  return c;
              d.position = 2;
          case 2:
              if (a())
                  return c;
              if (d.anchor.firstChild) {
                  d = {
                      anchor: d.anchor.firstChild,
                      position: 1
                  };
                  continue
              } else
                  d.position = 3;
          case 3:
              if (a())
                  return c;
              d.position = 4;
          case 4:
              if (a())
                  return c
          }
          for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
              d = {
                  anchor: d.anchor.parentNode,
                  position: 3
              };
              if (a())
                  return c;
              d.position = 4;
              if (a())
                  return c
          }
          d && d.anchor.nextSibling ? d = {
              anchor: d.anchor.nextSibling,
              position: 1
          } : d = null
      }
      return c
  }
  ;
  function Sj(a, b) {
      const c = new rh
        , d = new qh;
      b.forEach(e=>{
          if (ad(e, oj, 1, rj)) {
              e = ad(e, oj, 1, rj);
              if (D(e, Dh, 1) && D(D(e, Dh, 1), Q, 1) && D(e, Dh, 2) && D(D(e, Dh, 2), Q, 1)) {
                  const g = Tj(a, D(D(e, Dh, 1), Q, 1))
                    , h = Tj(a, D(D(e, Dh, 2), Q, 1));
                  if (g && h)
                      for (var f of Rj({
                          anchor: g,
                          position: G(D(e, Dh, 1), 2)
                      }, {
                          anchor: h,
                          position: G(D(e, Dh, 2), 2)
                      }))
                          c.set(ma(f.anchor), f.position)
              }
              D(e, Dh, 3) && D(D(e, Dh, 3), Q, 1) && (f = Tj(a, D(D(e, Dh, 3), Q, 1))) && c.set(ma(f), G(D(e, Dh, 3), 2))
          } else
              ad(e, pj, 2, rj) ? Uj(a, ad(e, pj, 2, rj), c) : ad(e, nj, 3, rj) && Vj(a, ad(e, nj, 3, rj), d)
      }
      );
      return new Wj(c,d)
  }
  class Wj {
      constructor(a, b) {
          this.i = a;
          this.g = b
      }
  }
  const Uj = (a,b,c)=>{
      D(b, Dh, 2) ? (b = D(b, Dh, 2),
      (a = Tj(a, D(b, Q, 1))) && c.set(ma(a), G(b, 2))) : D(b, Q, 1) && (a = Xj(a, D(b, Q, 1))) && a.forEach(d=>{
          d = ma(d);
          c.set(d, 1);
          c.set(d, 4);
          c.set(d, 2);
          c.set(d, 3)
      }
      )
  }
    , Vj = (a,b,c)=>{
      D(b, Q, 1) && (a = Xj(a, D(b, Q, 1))) && a.forEach(d=>{
          c.add(ma(d))
      }
      )
  }
    , Tj = (a,b)=>(a = Xj(a, b)) && a.length > 0 ? a[0] : null
    , Xj = (a,b)=>(b = Kj(b)) ? Dj(b, a) : null;
  class V extends Error {
      constructor(a="") {
          super();
          this.name = "TagError";
          this.message = a ? "adsbygoogle.push() error: " + a : "";
          Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
      }
  }
  ;let Yj, W;
  const Zj = new Qe(p);
  var ak = a=>{
      a != null && (p.google_measure_js_timing = a);
      p.google_measure_js_timing || Pe(Zj)
  }
  ;
  ((a,b=!0)=>{
      Yj = a || new Wg;
      typeof p.google_srt !== "number" && (p.google_srt = Math.random());
      Vg(Yj, p.google_srt);
      W = new Ze(Yj,b,Zj);
      W.u(!0);
      p.document.readyState == "complete" ? ak() : Zj.g && qd(p, "load", ()=>{
          ak()
      }
      )
  }
  )();
  var bk = (a,b,c)=>W.ha(a, b, c)
    , ck = (a,b,c)=>{
      const d = N(Ug).g();
      !b.eid && d.length && (b.eid = d.toString());
      Ye(Yj, a, b, !0, c)
  }
    , dk = (a,b)=>{
      W.da(a, b)
  }
    , ek = (a,b,c,d)=>{
      let e;
      Ce(b) ? e = b.msg || Xe(b.error) : e = Xe(b);
      return e.indexOf("TagError") == 0 ? ((b instanceof Be ? b.error : b).pbr = !0,
      !1) : W.T(a, b, c, d)
  }
  ;
  var fk = class {
      constructor() {
          this.g = he();
          this.i = 0
      }
  }
  ;
  function gk(a, b, c) {
      switch (c) {
      case 2:
      case 3:
          break;
      case 1:
      case 4:
          b = b.parentElement;
          break;
      default:
          throw Error("Unknown RelativePosition: " + c);
      }
      for (c = []; b; ) {
          if (hk(b))
              return !0;
          if (a.g.has(b))
              break;
          c.push(b);
          b = b.parentElement
      }
      c.forEach(d=>a.g.add(d));
      return !1
  }
  function ik(a) {
      a = jk(a);
      return a.has("all") || a.has("after")
  }
  function kk(a) {
      a = jk(a);
      return a.has("all") || a.has("before")
  }
  function jk(a) {
      return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
  }
  function hk(a) {
      const b = jk(a);
      return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
  }
  var lk = class {
      constructor() {
          this.g = new Set;
          this.i = new fk
      }
  }
  ;
  function mk(a, b) {
      if (!a)
          return !1;
      a = Td(a, b);
      if (!a)
          return !1;
      a = a.cssFloat || a.styleFloat;
      return a == "left" || a == "right"
  }
  function nk(a) {
      for (a = a.previousSibling; a && a.nodeType != 1; )
          a = a.previousSibling;
      return a ? a : null
  }
  function ok(a) {
      return !!a.nextSibling || !!a.parentNode && ok(a.parentNode)
  }
  ;function pk(a=null) {
      ({googletag: a} = a ?? window);
      return a?.apiReady ? a : void 0
  }
  ;const qk = a=>{
      const b = pk(a);
      return b ? Ra(Sa(b.pubads().getSlots(), c=>a.document.getElementById(c.getSlotElementId())), c=>c != null) : null
  }
  ;
  var rk = a=>{
      const b = [];
      for (const c of a) {
          a = !0;
          for (let d = 0; d < b.length; d++) {
              const e = b[d];
              if (e.contains(c)) {
                  a = !1;
                  break
              }
              if (c.contains(e)) {
                  a = !1;
                  b[d] = c;
                  break
              }
          }
          a && b.push(c)
      }
      return b
  }
  ;
  function sk(a, b) {
      if (a.u)
          return !0;
      a.u = !0;
      const c = E(a.j, Fh, 1, A());
      a.i = 0;
      const d = tk(a.I);
      var e = a.g;
      var f;
      try {
          var g = (f = e.localStorage.getItem("google_ama_settings")) ? Ch(f) : null
      } catch (n) {
          g = null
      }
      f = g !== null && H(g, 2, !1);
      g = Oj(e);
      f && (g.eatf = !0,
      ue(7, [!0, 0, !1]));
      b: {
          var h = {
              yb: !1,
              zb: !1
          }
            , k = Wa(e.document.querySelectorAll(".google-auto-placed"));
          const n = Wa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"))
            , q = Wa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
          var l = (qk(e) || Wa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Wa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
          const v = Wa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"))
            , u = Wa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
            , x = Wa(e.document.querySelectorAll("div.googlepublisherpluginad"))
            , L = Wa(e.document.querySelectorAll("html > ins.adsbygoogle"));
          let C = [].concat(Wa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Wa(e.document.querySelectorAll("body ins.adsbygoogle")));
          f = [];
          for (const [gb,Zb] of [[h.hc, k], [h.yb, n], [h.kc, q], [h.ic, l], [h.lc, v], [h.fc, u], [h.jc, x], [h.zb, L]])
              gb === !1 ? f = f.concat(Zb) : C = C.concat(Zb);
          h = rk(C);
          f = rk(f);
          h = h.slice(0);
          for (m of f)
              for (f = 0; f < h.length; f++)
                  (m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
          var m = h;
          e = Ni(e).clientHeight;
          for (f = 0; f < m.length; f++)
              if (!(m[f].getBoundingClientRect().top > e)) {
                  e = !0;
                  break b
              }
          e = !1
      }
      e = e ? g.eatfAbg = !0 : !1;
      if (e)
          return !0;
      e = new qh([2]);
      for (g = 0; g < c.length; g++) {
          m = a;
          h = c[g];
          f = g;
          l = b;
          if (D(h, wh, 4) && e.contains(G(D(h, wh, 4), 1)) && G(h, 8) === 1 && uk(h, d)) {
              m.i++;
              if (l = vk(m, h, l, d))
                  k = Oj(m.g),
                  k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0),
                  D(h, Q, 1) && Vc(D(h, Q, 1), 5) != null && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ : k.numPostPlacementsPlaced = 1),
                  k.placed == null && (k.placed = []),
                  k.numAutoAdsPlaced++,
                  k.placed.push({
                      index: f,
                      element: l.ja
                  }),
                  ue(7, [!1, m.i, !0]);
              m = l
          } else
              m = null;
          if (m)
              return !0
      }
      ue(7, [!1, a.i, !1]);
      return !1
  }
  function vk(a, b, c, d) {
      if (!uk(b, d) || G(b, 8) != 1)
          return null;
      d = D(b, Q, 1);
      if (!d)
          return null;
      d = Kj(d);
      if (!d)
          return null;
      d = Dj(d, a.g.document);
      if (d.length == 0)
          return null;
      d = d[0];
      var e = G(b, 2);
      e = Nj[e];
      e = e === void 0 ? null : e;
      var f;
      if (!(f = e == null)) {
          a: {
              f = a.g;
              switch (e) {
              case 0:
                  f = mk(nk(d), f);
                  break a;
              case 3:
                  f = mk(d, f);
                  break a;
              case 2:
                  var g = d.lastChild;
                  f = mk(g ? g.nodeType == 1 ? g : nk(g) : null, f);
                  break a
              }
              f = !1
          }
          if (c = !f && !(!c && e == 2 && !ok(d)))
              c = e == 1 || e == 2 ? d : d.parentNode,
              c = !(c && !Ih(c) && c.offsetWidth <= 0);
          f = !c
      }
      if (!(c = f)) {
          c = a.C;
          f = G(b, 2);
          g = c.i;
          var h = ma(d);
          g = g.g.get(h);
          if (!(g = g ? g.contains(f) : !1))
              a: {
                  if (c.g.contains(ma(d)))
                      switch (f) {
                      case 2:
                      case 3:
                          g = !0;
                          break a;
                      default:
                          g = !1;
                          break a
                      }
                  for (f = d.parentElement; f; ) {
                      if (c.g.contains(ma(f))) {
                          g = !0;
                          break a
                      }
                      f = f.parentElement
                  }
                  g = !1
              }
          c = g
      }
      if (!c) {
          c = a.F;
          g = G(b, 2);
          a: switch (g) {
          case 1:
              f = ik(d.previousElementSibling) || kk(d);
              break a;
          case 4:
              f = ik(d) || kk(d.nextElementSibling);
              break a;
          case 2:
              f = kk(d.firstElementChild);
              break a;
          case 3:
              f = ik(d.lastElementChild);
              break a;
          default:
              throw Error("Unknown RelativePosition: " + g);
          }
          g = gk(c, d, g);
          c = c.i;
          ck("ama_exclusion_zone", {
              typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
              cor: c.g,
              num: c.i++,
              dvc: ae()
          }, .1);
          c = f || g
      }
      if (c)
          return null;
      f = D(b, Eh, 3);
      c = {};
      f && (c.nb = F(f, 1),
      c.Xa = F(f, 2),
      c.ub = !!Uc(f, 3));
      f = D(b, wh, 4) && G(D(b, wh, 4), 2) ? G(D(b, wh, 4), 2) : null;
      f = zh(f);
      g = Vc(b, 12) != null ? Vc(b, 12) : null;
      g = g == null ? null : new yh(null,{
          google_ml_rank: g
      });
      b = wk(a, b);
      b = xh(a.A, f, g, b);
      f = a.g;
      a = a.J;
      h = f.document;
      var k = c.ub || !1;
      g = Id((new Jd(h)).g, "DIV");
      const l = g.style;
      l.width = "100%";
      l.height = "auto";
      l.clear = k ? "both" : "none";
      k = g.style;
      k.textAlign = "center";
      c.Db && jj(k, c.Db);
      h = Id((new Jd(h)).g, "INS");
      k = h.style;
      k.display = "block";
      k.margin = "auto";
      k.backgroundColor = "transparent";
      c.nb && (k.marginTop = c.nb);
      c.Xa && (k.marginBottom = c.Xa);
      c.pb && jj(k, c.pb);
      g.appendChild(h);
      c = {
          Ba: g,
          ja: h
      };
      c.ja.setAttribute("data-ad-format", "auto");
      g = [];
      if (h = b && b.Za)
          c.Ba.className = h.join(" ");
      h = c.ja;
      h.className = "adsbygoogle";
      h.setAttribute("data-ad-client", a);
      g.length && h.setAttribute("data-ad-channel", g.join("+"));
      a: {
          try {
              var m = c.Ba;
              if (S(fi)) {
                  {
                      const x = Ii(d, e);
                      if (x.init) {
                          var n = x.init;
                          for (d = n; d = x.la(d); )
                              n = d;
                          var q = {
                              anchor: n,
                              position: x.ra
                          }
                      } else
                          q = {
                              anchor: d,
                              position: e
                          }
                  }
                  m["google-ama-order-assurance"] = 0;
                  Hi(m, q.anchor, q.position)
              } else
                  Hi(m, d, e);
              b: {
                  var v = c.ja;
                  v.dataset.adsbygoogleStatus = "reserved";
                  v.className += " adsbygoogle-noablate";
                  m = {
                      element: v
                  };
                  var u = b && b.jb;
                  if (v.hasAttribute("data-pub-vars")) {
                      try {
                          u = JSON.parse(v.getAttribute("data-pub-vars"))
                      } catch (x) {
                          break b
                      }
                      v.removeAttribute("data-pub-vars")
                  }
                  u && (m.params = u);
                  (f.adsbygoogle = f.adsbygoogle || []).push(m)
              }
          } catch (x) {
              (v = c.Ba) && v.parentNode && (u = v.parentNode,
              u.removeChild(v),
              Ih(u) && (u.style.display = u.getAttribute("data-init-display") || "none"));
              v = !1;
              break a
          }
          v = !0
      }
      return v ? c : null
  }
  function wk(a, b) {
      return nh(ph(Qj(b).map(Ah), c=>{
          Oj(a.g).exception = c
      }
      ))
  }
  const xk = class {
      constructor(a, b, c, d, e) {
          this.g = a;
          this.J = b;
          this.j = c;
          this.A = e || null;
          (this.I = d) ? (a = a.document,
          d = E(d, qj, 5, A(Ab)),
          d = Sj(a, d)) : d = Sj(a.document, []);
          this.C = d;
          this.F = new lk;
          this.i = 0;
          this.u = !1
      }
  }
  ;
  function tk(a) {
      const b = {};
      a && yc(a, 6, Mb, A()).forEach(c=>{
          b[c] = !0
      }
      );
      return b
  }
  function uk(a, b) {
      return a && wc(a, wh, 4) && b[G(D(a, wh, 4), 2)] ? !1 : !0
  }
  ;var yk = kd(class extends M {
  }
  );
  function zk(a) {
      try {
          var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
      } catch (d) {
          b = null
      }
      const c = b;
      return c ? mh(()=>yk(c)) : jh(null)
  }
  ;function Ak() {
      if (Bk)
          return Bk;
      var a = we() || window;
      const b = a.google_persistent_state_async;
      return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Bk = b : a.google_persistent_state_async = Bk = new Ck
  }
  function Dk(a, b, c) {
      b = Fk[b] || `google_ps_${b}`;
      a = a.S;
      const d = a[b];
      return d === void 0 ? (a[b] = c(),
      a[b]) : d
  }
  function Gk(a, b, c) {
      return Dk(a, b, ()=>c)
  }
  function Hk(a, b, c) {
      a.S[Fk[b] || `google_ps_${b}`] = c
  }
  function Ik(a, b) {
      Hk(a, 38, b)
  }
  var Ck = class {
      constructor() {
          this.S = {}
      }
  }
    , Bk = null;
  const Fk = {
      [8]: "google_prev_ad_formats_by_region",
      [9]: "google_prev_ad_slotnames_by_region"
  };
  function Jk(a) {
      var b = new Kk;
      return y(b, 5, Jb(a))
  }
  var Kk = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Kk.B = [10];
  function Lk() {
      this.A = this.A;
      this.i = this.i
  }
  Lk.prototype.A = !1;
  Lk.prototype.dispose = function() {
      this.A || (this.A = !0,
      this.F())
  }
  ;
  Lk.prototype[ha(Symbol, "dispose")] = function() {
      this.dispose()
  }
  ;
  function Mk(a, b) {
      a.A ? b() : (a.i || (a.i = []),
      a.i.push(b))
  }
  Lk.prototype.F = function() {
      if (this.i)
          for (; this.i.length; )
              this.i.shift()()
  }
  ;
  const Nk = a=>{
      a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
      return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
  }
  ;
  function Ok(a) {
      if (a.gdprApplies === !1)
          return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Nk(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (pe({
          e: String(a.internalErrorState)
      }, "tcfe"),
      !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
  }
  function Pk(a) {
      if (a.g)
          return a.g;
      a: {
          let d = a.j;
          for (let e = 0; e < 50; ++e) {
              try {
                  var b = !(!d.frames || !d.frames.__tcfapiLocator)
              } catch {
                  b = !1
              }
              if (b) {
                  b = d;
                  break a
              }
              b: {
                  try {
                      const f = d.parent;
                      if (f && f != d) {
                          var c = f;
                          break b
                      }
                  } catch {}
                  c = null
              }
              if (!(d = c))
                  break
          }
          b = null
      }
      a.g = b;
      return a.g
  }
  function Qk(a, b, c, d) {
      c || (c = ()=>{}
      );
      if (typeof a.j.__tcfapi === "function")
          a = a.j.__tcfapi,
          a(b, 2, c, d);
      else if (Pk(a)) {
          Rk(a);
          const e = ++a.X;
          a.C[e] = c;
          a.g && a.g.postMessage({
              __tcfapiCall: {
                  command: b,
                  version: 2,
                  callId: e,
                  parameter: d
              }
          }, "*")
      } else
          c({}, !1)
  }
  function Rk(a) {
      a.u || (a.u = b=>{
          try {
              var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
              a.C[c.callId](c.returnValue, c.success)
          } catch (d) {}
      }
      ,
      qd(a.j, "message", a.u))
  }
  class Sk extends Lk {
      constructor(a) {
          var b = {};
          super();
          this.j = a;
          this.g = null;
          this.C = {};
          this.X = 0;
          this.J = b.mb ?? 500;
          this.I = b.dc ?? !1;
          this.u = null
      }
      F() {
          this.C = {};
          this.u && (rd(this.j, "message", this.u),
          delete this.u);
          delete this.C;
          delete this.j;
          delete this.g;
          super.F()
      }
      addEventListener(a) {
          let b = {
              internalBlockOnErrors: this.I
          };
          const c = pd(()=>a(b));
          let d = 0;
          this.J !== -1 && (d = setTimeout(()=>{
              b.tcString = "tcunavailable";
              b.internalErrorState = 1;
              c()
          }
          , this.J));
          const e = (f,g)=>{
              clearTimeout(d);
              f ? (b = f,
              b.internalErrorState = Nk(b),
              b.internalBlockOnErrors = this.I,
              g && b.internalErrorState === 0 || (b.tcString = "tcunavailable",
              g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
              b.internalErrorState = 3);
              a(b)
          }
          ;
          try {
              Qk(this, "addEventListener", e)
          } catch (f) {
              b.tcString = "tcunavailable",
              b.internalErrorState = 3,
              d && (clearTimeout(d),
              d = 0),
              c()
          }
      }
      removeEventListener(a) {
          a && a.listenerId && Qk(this, "removeEventListener", null, a.listenerId)
      }
  }
  ;var Xk = ({l: a, Y: b, mb: c, tb: d, ma: e=!1, na: f=!1})=>{
      b = Tk({
          l: a,
          Y: b,
          ma: e,
          na: f
      });
      b.g != null || b.i.message != "tcunav" ? d(b) : Uk(a, c).then(g=>g.map(Vk)).then(g=>g.map(h=>Wk(a, h))).then(d)
  }
    , Tk = ({l: a, Y: b, ma: c=!1, na: d=!1})=>{
      if (!Yk({
          l: a,
          Y: b,
          ma: c,
          na: d
      }))
          return Wk(a, Jk(!0));
      b = Ak();
      return (b = Gk(b, 24)) ? Wk(a, Vk(b)) : lh(Error("tcunav"))
  }
  ;
  function Yk({l: a, Y: b, ma: c, na: d}) {
      if (d = !d)
          d = new Sk(a),
          d = typeof d.j.__tcfapi === "function" || Pk(d) != null;
      if (!d) {
          if (c = !c) {
              if (b) {
                  a = zk(a);
                  if (a.g != null)
                      if ((a = a.getValue()) && G(a, 1) != null)
                          b: switch (a = G(a, 1),
                          a) {
                          case 1:
                              a = !0;
                              break b;
                          default:
                              throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                          }
                      else
                          a = !1;
                  else
                      W.T(806, a.i, void 0, void 0),
                      a = !1;
                  b = !a
              }
              c = b
          }
          d = c
      }
      return d ? !0 : !1
  }
  function Uk(a, b) {
      return Promise.race([Zk(), $k(a, b)])
  }
  function Zk() {
      return (new Promise(a=>{
          var b = Ak();
          a = {
              resolve: a
          };
          const c = Gk(b, 25, []);
          c.push(a);
          Hk(b, 25, c)
      }
      )).then(al)
  }
  function $k(a, b) {
      return new Promise(c=>{
          a.setTimeout(c, b, lh(Error("tcto")))
      }
      )
  }
  function al(a) {
      return a ? jh(a) : lh(Error("tcnull"))
  }
  function Vk(a) {
      var b = {};
      if (Ok(a))
          if (a.gdprApplies === !1)
              a = !0;
          else if (a.tcString === "tcunavailable")
              a = !b.bb;
          else if ((b.bb || a.gdprApplies !== void 0 || b.ec) && (b.bb || typeof a.tcString === "string" && a.tcString.length)) {
              b: {
                  if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                  b !== void 0)) {
                      b = b["755"];
                      break b
                  }
                  b = void 0
              }
              b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents,
              (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents,
              b = !(!a || !a["1"])),
              a = b)) : a = !0
          } else
              a = !0;
      else
          a = !1;
      return Jk(a)
  }
  function Wk(a, b) {
      return (a = re(b, a)) ? jh(a) : lh(Error("unav"))
  }
  ;var bl = class extends M {
  }
  ;
  bl.B = [1, 2, 3];
  var cl = class extends M {
  }
  ;
  cl.B = [1, 2, 3];
  var dl = class extends M {
      g() {
          return D(this, bl, 2)
      }
      i() {
          return D(this, cl, 3)
      }
  }
  ;
  const el = class {
      constructor(a) {
          this.exception = a
      }
  }
  ;
  function fl(a, b) {
      try {
          var c = a.i
            , d = c.resolve
            , e = a.g;
          Oj(e.g);
          E(e.j, Fh, 1, A());
          d.call(c, new el(b))
      } catch (f) {
          a.i.reject(f)
      }
  }
  var gl = class {
      constructor(a, b, c) {
          this.j = a;
          this.g = b;
          this.i = c
      }
      start() {
          this.u()
      }
      u() {
          try {
              switch (this.j.document.readyState) {
              case "complete":
              case "interactive":
                  sk(this.g, !0);
                  fl(this);
                  break;
              default:
                  sk(this.g, !1) ? fl(this) : this.j.setTimeout(ra(this.u, this), 100)
              }
          } catch (a) {
              fl(this, a)
          }
      }
  }
  ;
  var hl = class extends M {
      constructor() {
          super()
      }
      getVersion() {
          return Wc(this, 2)
      }
  }
  ;
  hl.B = [3];
  function il(a) {
      return ab(a.length % 4 !== 0 ? a + "A" : a).map(b=>b.toString(2).padStart(8, "0")).join("")
  }
  function jl(a) {
      if (!/^[0-1]+$/.test(a))
          throw Error(`Invalid input [${a}] not a bit string.`);
      return parseInt(a, 2)
  }
  function kl(a) {
      if (!/^[0-1]+$/.test(a))
          throw Error(`Invalid input [${a}] not a bit string.`);
      const b = [1, 2, 3, 5];
      let c = 0;
      for (let d = 0; d < a.length - 1; d++)
          b.length <= d && b.push(b[d - 1] + b[d - 2]),
          c += parseInt(a[d], 2) * b[d];
      return c
  }
  ;function ll(a) {
      var b = il(a)
        , c = jl(b.slice(0, 6));
      a = jl(b.slice(6, 12));
      var d = new hl;
      c = B(d, 1, Ob(c), 0);
      a = B(c, 2, Ob(a), 0);
      b = b.slice(12);
      c = jl(b.slice(0, 12));
      d = [];
      let e = b.slice(12).replace(/0+$/, "");
      for (let k = 0; k < c; k++) {
          if (e.length === 0)
              throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
          var f = jl(e[0]) === 0;
          e = e.slice(1);
          var g = ml(e, b)
            , h = d.length === 0 ? 0 : d[d.length - 1];
          h = kl(g) + h;
          e = e.slice(g.length);
          if (f)
              d.push(h);
          else {
              f = ml(e, b);
              g = kl(f);
              for (let l = 0; l <= g; l++)
                  d.push(h + l);
              e = e.slice(f.length)
          }
      }
      if (e.length > 0)
          throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
      return Ec(a, 3, d, Nb)
  }
  function ml(a, b) {
      const c = a.indexOf("11");
      if (c === -1)
          throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
      return a.slice(0, c + 2)
  }
  ;var nl = "a".charCodeAt()
    , ol = ud($g)
    , pl = ud(ah);
  function ql() {
      var a = new rl;
      return K(a, 1, 0)
  }
  function sl(a) {
      var b = Number;
      var c = tc(a, 1);
      c = c == null ? c : Lb(c) ? typeof c === "string" ? Ub(c) : Tb(c) : void 0;
      b = b(c ?? "0");
      a = Wc(a, 2);
      return new Date(b * 1E3 + a / 1E6)
  }
  var rl = class extends M {
  }
  ;
  function tl(a, b) {
      if (a.g + b > a.i.length)
          throw Error("Requested length " + b + " is past end of string.");
      const c = a.i.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2)
  }
  function ul(a) {
      let b = tl(a, 12);
      const c = [];
      for (; b--; ) {
          var d = !!tl(a, 1) === !0
            , e = tl(a, 16);
          if (d)
              for (d = tl(a, 16); e <= d; e++)
                  c.push(e);
          else
              c.push(e)
      }
      c.sort((f,g)=>f - g);
      return c
  }
  function vl(a, b, c) {
      const d = [];
      for (let e = 0; e < b; e++)
          if (tl(a, 1)) {
              const f = e + 1;
              if (c && c.indexOf(f) === -1)
                  throw Error(`ID: ${f} is outside of allowed values!`);
              d.push(f)
          }
      return d
  }
  function wl(a) {
      const b = tl(a, 16);
      return !!tl(a, 1) === !0 ? (a = ul(a),
      a.forEach(c=>{
          if (c > b)
              throw Error(`ID ${c} is past MaxVendorId ${b}!`);
      }
      ),
      a) : vl(a, b)
  }
  class xl {
      constructor(a) {
          if (/[^01]/.test(a))
              throw Error(`Input bitstring ${a} is malformed!`);
          this.i = a;
          this.g = 0
      }
      skip(a) {
          this.g += a
      }
  }
  ;var zl = a=>{
      try {
          var b = ab(a.split(".")[0]).map(d=>d.toString(2).padStart(8, "0")).join("");
          const c = new xl(b);
          b = {};
          b.tcString = a;
          b.gdprApplies = !0;
          c.skip(78);
          b.cmpId = tl(c, 12);
          b.cmpVersion = tl(c, 12);
          c.skip(30);
          b.tcfPolicyVersion = tl(c, 6);
          b.isServiceSpecific = !!tl(c, 1);
          b.useNonStandardStacks = !!tl(c, 1);
          b.specialFeatureOptins = yl(vl(c, 12, pl), pl);
          b.purpose = {
              consents: yl(vl(c, 24, ol), ol),
              legitimateInterests: yl(vl(c, 24, ol), ol)
          };
          b.purposeOneTreatment = !!tl(c, 1);
          b.publisherCC = String.fromCharCode(nl + tl(c, 6)) + String.fromCharCode(nl + tl(c, 6));
          b.vendor = {
              consents: yl(wl(c), null),
              legitimateInterests: yl(wl(c), null)
          };
          return b
      } catch (c) {
          return null
      }
  }
  ;
  const yl = (a,b)=>{
      const c = {};
      if (Array.isArray(b) && b.length !== 0)
          for (const d of b)
              c[d] = a.indexOf(d) !== -1;
      else
          for (const d of a)
              c[d] = !0;
      delete c[0];
      return c
  }
  ;
  function Al() {
      return "m202407220101"
  }
  ;var Bl = new R(203);
  var Cl = class extends M {
      g() {
          return F(this, 2) != null
      }
  }
  ;
  var Dl = class extends M {
      g() {
          return F(this, 2) != null
      }
  }
  ;
  var El = class extends M {
  }
  ;
  var Fl = class extends M {
  }
    , Gl = kd(Fl);
  Fl.B = [7];
  function Hl(a) {
      a = Il(a);
      try {
          var b = a ? Gl(a) : null
      } catch (c) {
          b = null
      }
      return b ? D(b, El, 4) || null : null
  }
  function Il(a) {
      a = (new qe(a)).get("FCCDCF", "");
      if (a)
          if (a.startsWith("%"))
              try {
                  var b = decodeURIComponent(a)
              } catch (c) {
                  b = null
              }
          else
              b = a;
      else
          b = null;
      return b
  }
  ;ud($g).map(a=>Number(a));
  ud(ah).map(a=>Number(a));
  function Jl(a) {
      a.__tcfapiPostMessageReady || Kl(new Ll(a))
  }
  function Kl(a) {
      a.g = b=>{
          const c = typeof b.data === "string";
          let d;
          try {
              d = c ? JSON.parse(b.data) : b.data
          } catch (f) {
              return
          }
          const e = d.__tcfapiCall;
          e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0,
          a.l.__tcfapi)(e.command, e.version, (f,g)=>{
              const h = {};
              h.__tcfapiReturn = e.command === "removeEventListener" ? {
                  success: f,
                  callId: e.callId
              } : {
                  returnValue: f,
                  success: g,
                  callId: e.callId
              };
              f = c ? JSON.stringify(h) : h;
              b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
              return f
          }
          , e.parameter)
      }
      ;
      a.l.addEventListener("message", a.g);
      a.l.__tcfapiPostMessageReady = !0
  }
  var Ll = class {
      constructor(a) {
          this.l = a
      }
  }
  ;
  function Ml(a) {
      a.__uspapiPostMessageReady || Nl(new Ol(a))
  }
  function Nl(a) {
      a.g = b=>{
          const c = typeof b.data === "string";
          let d;
          try {
              d = c ? JSON.parse(b.data) : b.data
          } catch (f) {
              return
          }
          const e = d.__uspapiCall;
          e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f,g)=>{
              const h = {};
              h.__uspapiReturn = {
                  returnValue: f,
                  success: g,
                  callId: e.callId
              };
              f = c ? JSON.stringify(h) : h;
              b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
              return f
          }
          )
      }
      ;
      a.l.addEventListener("message", a.g);
      a.l.__uspapiPostMessageReady = !0
  }
  var Ol = class {
      constructor(a) {
          this.l = a;
          this.g = null
      }
  }
  ;
  var Pl = class extends M {
  }
  ;
  var Ql = class extends M {
      g() {
          return F(this, 1) != null
      }
  }
    , Rl = kd(Ql);
  Ql.B = [2];
  function Sl(a, b, c) {
      function d(n) {
          if (n.length < 10)
              return null;
          var q = h(n.slice(0, 4));
          q = k(q);
          n = h(n.slice(6, 10));
          n = l(n);
          return "1" + q + n + "N"
      }
      function e(n) {
          if (n.length < 10)
              return null;
          var q = h(n.slice(0, 6));
          q = k(q);
          n = h(n.slice(6, 10));
          n = l(n);
          return "1" + q + n + "N"
      }
      function f(n) {
          if (n.length < 12)
              return null;
          var q = h(n.slice(0, 6));
          q = k(q);
          n = h(n.slice(8, 12));
          n = l(n);
          return "1" + q + n + "N"
      }
      function g(n) {
          if (n.length < 18)
              return null;
          var q = h(n.slice(0, 8));
          q = k(q);
          n = h(n.slice(12, 18));
          n = l(n);
          return "1" + q + n + "N"
      }
      function h(n) {
          const q = [];
          let v = 0;
          for (let u = 0; u < n.length / 2; u++)
              q.push(jl(n.slice(v, v + 2))),
              v += 2;
          return q
      }
      function k(n) {
          return n.every(q=>q === 1) ? "Y" : "N"
      }
      function l(n) {
          return n.some(q=>q === 1) ? "Y" : "N"
      }
      if (a.length === 0)
          return null;
      a = a.split(".");
      if (a.length > 2)
          return null;
      a = il(a[0]);
      const m = jl(a.slice(0, 6));
      a = a.slice(6);
      if (m !== 1)
          return null;
      switch (b) {
      case 8:
          return d(a);
      case 10:
      case 12:
      case 9:
          return e(a);
      case 11:
          return f(a);
      case 7:
          return c ? g(a) : null;
      default:
          return null
      }
  }
  ;function Tl(a, b) {
      const c = a.document
        , d = ()=>{
          if (!a.frames[b])
              if (c.body) {
                  const e = Sd("IFRAME", c);
                  e.style.display = "none";
                  e.style.width = "0px";
                  e.style.height = "0px";
                  e.style.border = "none";
                  e.style.zIndex = "-1000";
                  e.style.left = "-1000px";
                  e.style.top = "-1000px";
                  e.name = b;
                  c.body.appendChild(e)
              } else
                  a.setTimeout(d, 5)
      }
      ;
      d()
  }
  ;function Ul() {
      var a = S(Sh);
      O !== O.top || O.__uspapi || O.frames.__uspapiLocator || (a = new Vl(a),
      Wl(a),
      Xl(a))
  }
  function Wl(a) {
      !a.i || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc",
      Tl(a.l, "__uspapiLocator"),
      ta("__uspapi", (b,c,d)=>{
          typeof d === "function" && b === "getUSPData" && d({
              version: 1,
              uspString: a.i
          }, !0)
      }
      , a.l),
      Ml(a.l))
  }
  function Xl(a) {
      !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc",
      Tl(a.l, "__tcfapiLocator"),
      a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [],
      ta("__tcfapi", (b,c,d,e)=>{
          if (typeof d === "function")
              if (c && (c > 2.2 || c <= 1))
                  d(null, !1);
              else
                  switch (c = a.l.__tcfapiEventListeners,
                  b) {
                  case "ping":
                      d({
                          gdprApplies: !0,
                          cmpLoaded: !0,
                          cmpStatus: "loaded",
                          displayStatus: "disabled",
                          apiVersion: "2.2",
                          cmpVersion: 2,
                          cmpId: 300
                      });
                      break;
                  case "addEventListener":
                      b = c.push(d) - 1;
                      a.tcString ? (e = zl(a.tcString),
                      e.addtlConsent = a.g != null ? a.g : void 0,
                      e.cmpStatus = "loaded",
                      e.eventStatus = "tcloaded",
                      b != null && (e.listenerId = b),
                      b = e) : b = null;
                      d(b, !0);
                      break;
                  case "removeEventListener":
                      e !== void 0 && c[e] ? (c[e] = null,
                      d(!0)) : d(!1);
                      break;
                  case "getInAppTCData":
                  case "getVendorList":
                      d(null, !1);
                      break;
                  case "getTCData":
                      d(null, !1)
                  }
      }
      , a.l),
      Jl(a.l))
  }
  function Yl(a, b) {
      if (!b?.g() || I(b, 1).length === 0 || E(b, Pl, 2, A()).length === 0)
          return null;
      const c = I(b, 1);
      let d;
      try {
          var e = ll(c.split("~")[0]);
          d = c.includes("~") ? c.split("~").slice(1) : []
      } catch (f) {
          return null
      }
      b = E(b, Pl, 2, A()).reduce((f,g)=>Xc(Zl(f), 1) > Xc(Zl(g), 1) ? f : g);
      e = yc(e, 3, Pb, A()).indexOf(Wc(b, 1));
      return e === -1 || e >= d.length ? null : {
          uspString: Sl(d[e], Wc(b, 1), a.j),
          Aa: sl(Zl(b))
      }
  }
  function $l(a) {
      a = a.find(b=>b && J(b, 1) === 13);
      if (a?.g())
          try {
              return Rl(I(a, 2))
          } catch (b) {}
      return null
  }
  function Zl(a) {
      return wc(a, rl, 2) ? D(a, rl, 2) : ql()
  }
  var Vl = class {
      constructor(a) {
          var b = O;
          this.l = b;
          this.j = a;
          a = Il(this.l.document);
          try {
              var c = a ? Gl(a) : null
          } catch (e) {
              c = null
          }
          (a = c) ? (c = D(a, Dl, 5) || null,
          a = E(a, Cl, 7, A()),
          a = $l(a ?? []),
          c = {
              Ya: c,
              ab: a
          }) : c = {
              Ya: null,
              ab: null
          };
          a = c;
          c = Yl(this, a.ab);
          a = a.Ya;
          if (a?.g() && I(a, 2).length !== 0) {
              var d = wc(a, rl, 1) ? D(a, rl, 1) : ql();
              a = {
                  uspString: I(a, 2),
                  Aa: sl(d)
              }
          } else
              a = null;
          this.i = a && c ? c.Aa > a.Aa ? c.uspString : a.uspString : a ? a.uspString : c ? c.uspString : null;
          this.tcString = (c = Hl(b.document)) && F(c, 1) != null ? I(c, 1) : null;
          this.g = (b = Hl(b.document)) && F(b, 2) != null ? I(b, 2) : null
      }
  }
  ;
  const am = {
      google_ad_channel: !0,
      google_ad_host: !0
  };
  function bm(a, b) {
      a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
      ck("ama", b, .01)
  }
  function cm(a) {
      const b = {};
      Vd(am, (c,d)=>{
          d in a && (b[d] = a[d])
      }
      );
      return b
  }
  ;function dm(a) {
      const b = /[a-zA-Z0-9._~-]/
        , c = /%[89a-zA-Z]./;
      return a.replace(/(%[a-zA-Z0-9]{2})/g, d=>{
          if (!d.match(c)) {
              const e = decodeURIComponent(d);
              if (e.match(b))
                  return e
          }
          return d.toUpperCase()
      }
      )
  }
  function em(a) {
      let b = "";
      const c = /[/%?&=]/;
      for (let d = 0; d < a.length; ++d) {
          const e = a[d];
          b = e.match(c) ? b + e : b + encodeURIComponent(e)
      }
      return b
  }
  ;function fm(a) {
      a = yc(a, 2, Mb, A());
      if (!a)
          return !1;
      for (let b = 0; b < a.length; b++)
          if (a[b] == 1)
              return !0;
      return !1
  }
  function gm(a, b) {
      a = em(dm(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
      const c = Wd(a)
        , d = hm(a);
      return b.find(e=>{
          if (wc(e, mj, 7)) {
              var f = D(e, mj, 7);
              f = Qb(tc(f, 1))
          } else
              f = Qb(tc(e, 1));
          e = wc(e, mj, 7) ? G(D(e, mj, 7), 2) : 2;
          if (typeof f !== "number")
              return !1;
          switch (e) {
          case 1:
              return f == c;
          case 2:
              return d[f] || !1
          }
          return !1
      }
      ) || null
  }
  function hm(a) {
      const b = {};
      for (; ; ) {
          b[Wd(a)] = !0;
          if (!a)
              return b;
          a = a.substring(0, a.lastIndexOf("/"))
      }
  }
  ;var im = class extends M {
      g() {
          return D(this, dl, 2)
      }
      i() {
          return H(this, 3)
      }
  }
  ;
  var jm = class extends M {
      g() {
          return Zc(this, 1, A())
      }
      i() {
          return D(this, im, 2)
      }
      j() {
          return I(this, 4)
      }
      u() {
          return J(this, 5)
      }
  }
  ;
  jm.B = [1];
  var km = class extends M {
      getId() {
          return Wc(this, 1)
      }
  }
  ;
  km.B = [2];
  function lm(a) {
      return E(a, km, 2, A())
  }
  var mm = class extends M {
  }
  ;
  mm.B = [2];
  var nm = class extends M {
  }
  ;
  nm.B = [2];
  var om = class extends M {
      g() {
          return Xc(this, 2)
      }
      i() {
          return Xc(this, 4)
      }
      j() {
          return H(this, 3)
      }
  }
  ;
  var pm = class extends M {
  }
  ;
  pm.B = [1, 4, 2, 3];
  var rm = class extends M {
      i() {
          return ad(this, im, 13, qm)
      }
      u() {
          return xc(this, im, Jc(this, qm, 13)) !== void 0
      }
      g() {
          return ad(this, jm, 14, qm)
      }
      j() {
          return xc(this, jm, Jc(this, qm, 14)) !== void 0
      }
  }
  ;
  rm.B = [19];
  var qm = [13, 14];
  let sm = void 0;
  function tm(a) {
      gd(sm, af);
      sm = a
  }
  ;function X(a) {
      return a.google_ad_modifications = a.google_ad_modifications || {}
  }
  function um(a) {
      a = X(a);
      const b = a.space_collapsing || "none";
      return a.remove_ads_by_default ? {
          Va: !0,
          Jb: b,
          ya: a.ablation_viewport_offset
      } : null
  }
  function vm(a) {
      a = X(a);
      a.had_ads_ablation = !0;
      a.remove_ads_by_default = !0;
      a.space_collapsing = "slot";
      a.ablation_viewport_offset = 1
  }
  function wm(a) {
      X(O).allow_second_reactive_tag = a
  }
  function xm() {
      const a = X(window);
      a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
      return a.afg_slotcar_vars
  }
  ;function ym(a) {
      return X(a)?.head_tag_slot_vars?.google_ad_host ?? zm(a)
  }
  function zm(a) {
      return a.document?.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null
  }
  ;const Am = [2, 7, 1];
  var Dm = (a,b,c="",d=null)=>b === 1 && Bm(c, d) ? !0 : Cm(a, c, e=>Ta(E(e, ld, 2, A()), f=>G(f, 1) === b))
    , Bm = (a,b)=>b ? b.u() ? H(b.i(), 1) : b.j() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? H(b.g().i(), 1) : !1 : !1
    , Em = (a,b)=>{
      b = Wc(b, 18);
      b !== -1 && (a.tmod = b)
  }
    , Gm = a=>{
      const b = Qd(O) || O;
      return Fm(b, a) ? !0 : Cm(O, "", c=>Ta(yc(c, 3, Mb, A()), d=>d === a))
  }
  ;
  function Fm(a, b) {
      a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
      return !!a && Va(a.split(","), b.toString())
  }
  function Cm(a, b, c) {
      a = Qd(a) || a;
      const d = Hm(a);
      b && (b = Ae(String(b)));
      return td(d, (e,f)=>Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
  }
  function Hm(a) {
      a = Im(a);
      const b = {};
      Vd(a, (c,d)=>{
          try {
              const e = new md(c);
              b[d] = e
          } catch (e) {}
      }
      );
      return b
  }
  var Im = a=>{
      gd(sm, jd);
      a = Tk({
          l: a,
          Y: sm
      });
      return a.g != null ? Jm(a.getValue()) : {}
  }
  ;
  function Jm(a) {
      try {
          const b = a.getItem("google_adsense_settings");
          if (!b)
              return {};
          const c = JSON.parse(b);
          return c !== Object(c) ? {} : sd(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
      } catch (b) {
          return {}
      }
  }
  function Km(a) {
      ck("atf_ad_settings_from_ppabg", {
          p_s: a
      }, .01)
  }
  const Lm = a=>{
      ck("overlay_settings_from_ppabg", {
          p_s: a
      }, .01)
  }
    , Mm = (a,b)=>{
      if (ym(p))
          return Am;
      if (b?.u()) {
          var c = I(b.i(), 9);
          b = b?.i()?.g()?.i();
          if (!a || c != a || !b)
              return Am;
          Lm(!1);
          return yc(b, 3, Mb, A(Ab))
      }
      if (b?.j()) {
          c = b?.g()?.g();
          if (!c || c.length !== 1 || !a || c[0] !== a || I(b, 17) != p.location.host)
              return Am;
          a = b?.g()?.i()?.g()?.i();
          if (!a)
              return Am;
          Lm(!0);
          return yc(a, 3, Mb, A(Ab))
      }
      return Am
  }
  ;
  var Nm = (a,b)=>{
      const c = [];
      a = Mm(a, b);
      a.includes(1) || c.push(1);
      a.includes(2) || c.push(2);
      a.includes(7) || c.push(7);
      return c
  }
  ;
  function Om(a, b, c, d) {
      Pm(new Qm(a,b,c,d))
  }
  function Pm(a) {
      ph(oh(Tk({
          l: a.l,
          Y: H(a.g, 6)
      }), b=>{
          Rm(a, b, !0)
      }
      ), ()=>{
          Sm(a)
      }
      )
  }
  function Rm(a, b, c) {
      ph(oh(Tm(b), d=>{
          Um("ok");
          a.i(d, {
              fromLocalStorage: !0
          })
      }
      ), ()=>{
          var d = a.l;
          try {
              b.removeItem("google_ama_config")
          } catch (e) {
              bm(d, {
                  lserr: 1
              })
          }
          c ? Sm(a) : a.i(null, null)
      }
      )
  }
  function Sm(a) {
      ph(oh(Vm(a), b=>{
          a.i(b, {
              fromPABGSettings: !0
          })
      }
      ), ()=>{
          Wm(a)
      }
      )
  }
  function Tm(a) {
      if (S(di))
          var b = null;
      else
          try {
              b = a.getItem("google_ama_config")
          } catch (d) {
              b = null
          }
      try {
          var c = b ? yj(b) : null
      } catch (d) {
          c = null
      }
      return (a = (a = c) ? (D(a, lj, 3)?.g() ?? 0) > Date.now() ? a : null : null) ? jh(a) : lh(Error("invlocst"))
  }
  function Vm(a) {
      if (ym(a.l) && !H(a.g, 22))
          return lh(Error("invtag"));
      a: {
          var b = a.l;
          var c = a.j;
          a = a.g;
          if (a?.u())
              (b = a?.i()?.g()?.g()) && (E(b, Fh, 1, A()).length > 0 || S(ei) && E(b, Gh, 3, A()).length > 0) ? Km(!1) : b = null;
          else {
              if (a?.j()) {
                  const d = a?.g()?.g()
                    , e = a?.g()?.i()?.g()?.g();
                  if (d && d.length === 1 && d[0] === c && e && (E(e, Fh, 1, A()).length > 0 || S(ei) && E(e, Gh, 3, A()).length > 0) && I(a, 17) === b.location.host) {
                      Km(!0);
                      b = e;
                      break a
                  }
              }
              b = null
          }
      }
      b ? (c = new xj,
      a = E(b, Fh, 1, A()),
      c = Qc(c, 1, a),
      a = E(b, sj, 2, A()),
      c = Qc(c, 7, a),
      S(ei) && E(b, Gh, 3, A()).length > 0 && (a = new Hh,
      b = E(b, Gh, 3, A()),
      b = Qc(a, 1, b),
      Oc(c, 6, b)),
      b = jh(c)) : b = lh(Error("invtag"));
      return b
  }
  function Wm(a) {
      Xk({
          l: a.l,
          Y: H(a.g, 6),
          mb: 50,
          tb: b=>{
              Xm(a, b)
          }
      })
  }
  function Xm(a, b) {
      ph(oh(b, c=>{
          Rm(a, c, !1)
      }
      ), c=>{
          Um(c.message);
          a.i(null, null)
      }
      )
  }
  function Um(a) {
      ck("abg::amalserr", {
          status: a,
          guarding: "true",
          timeout: 50,
          rate: .01
      }, .01)
  }
  class Qm {
      constructor(a, b, c, d) {
          this.l = a;
          this.g = b;
          this.j = c;
          this.i = d
      }
  }
  ;var $m = (a,b,c,d)=>{
      try {
          const e = gm(a, E(c, sj, 7, A()));
          if (e && fm(e)) {
              if (F(e, 4)) {
                  const g = new yh(null,{
                      google_package: F(e, 4)
                  });
                  d = xh(d, g)
              }
              const f = new xk(a,b,c,e,d);
              Jj(1E3, ()=>{
                  var g = new eh;
                  (new gl(a,f,g)).start();
                  return g.i
              }
              , a).then(sa(Ym, a), sa(Zm, a))
          }
      } catch (e) {
          bm(a, {
              atf: -1
          })
      }
  }
  ;
  const Ym = a=>{
      bm(a, {
          atf: 1
      })
  }
    , Zm = (a,b)=>{
      (a.google_ama_state = a.google_ama_state || {}).exception = b;
      bm(a, {
          atf: 0
      })
  }
  ;
  function an(a) {
      return a.length ? a.join("~") : void 0
  }
  ;function bn(a, b) {
      if (!a)
          return !1;
      a = a.hash;
      if (!a || !a.indexOf)
          return !1;
      if (a.indexOf(b) != -1)
          return !0;
      b = cn(b);
      return b != "go" && a.indexOf(b) != -1 ? !0 : !1
  }
  function cn(a) {
      let b = "";
      Vd(a.split("_"), c=>{
          b += c.substr(0, 2)
      }
      );
      return b
  }
  ;Za || Ma();
  class dn {
      constructor() {
          this.promise = new Promise((a,b)=>{
              this.resolve = a;
              this.reject = b
          }
          )
      }
  }
  ;function en() {
      const {promise: a, resolve: b} = new dn;
      return {
          promise: a,
          resolve: b
      }
  }
  ;function fn(a, b, c=()=>{}
  ) {
      b.google_llp || (b.google_llp = {});
      b = b.google_llp;
      let d = b[a];
      if (d)
          return d;
      d = en();
      b[a] = d;
      c();
      return d
  }
  function gn(a, b, c) {
      return fn(a, b, ()=>{
          Rd(b.document, c)
      }
      ).promise
  }
  ;function hn() {
      const a = {};
      N(fe).g($h.g, $h.defaultValue) && (a.bust = N(fe).g($h.g, $h.defaultValue));
      var b = Ak();
      b = Gk(b, 38, "");
      b !== "" && (a.sbust = b);
      return a
  }
  const jn = new Map([[2, 7], [3, 1], [4, 3], [5, 12]]);
  function kn(a, b, c) {
      c = yd(c, hn());
      if (a === 1)
          return {
              rc: Rd(b.document, c),
              Wa: new Promise(()=>{}
              )
          };
      if (jn.has(a))
          return {
              Wa: gn(jn.get(a), b, c)
          };
      throw Error(`Unexpected chunkId: ${a}`);
  }
  ;function ln(a) {
      a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
      a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
      a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new mn;
      return a.google_reactive_ads_global_state
  }
  class mn {
      constructor() {
          this.wasPlaTagProcessed = !1;
          this.wasReactiveAdConfigReceived = {};
          this.adCount = {};
          this.wasReactiveAdVisible = {};
          this.stateForType = {};
          this.reactiveTypeEnabledInAsfe = {};
          this.wasReactiveTagRequestSent = !1;
          this.reactiveTypeDisabledByPublisher = {};
          this.tagSpecificState = {};
          this.messageValidationEnabled = !1;
          this.floatingAdsStacking = new nn;
          this.sideRailProcessedFixedElements = new Set;
          this.sideRailAvailableSpace = new Map;
          this.sideRailPlasParam = new Map
      }
  }
  var nn = class {
      constructor() {
          this.maxZIndexRestrictions = {};
          this.nextRestrictionId = 0;
          this.maxZIndexListeners = []
      }
  }
  ;
  var on = a=>{
      if (p.google_apltlad || a.google_ad_intent_query)
          return null;
      var b = a.google_loader_used !== "sd" && S(hi) && (p.top == p ? 0 : Pd(p.top) ? 1 : 2) === 1;
      if (p !== p.top && !b || !a.google_ad_client)
          return null;
      p.google_apltlad = !0;
      b = {
          enable_page_level_ads: {
              pltais: !0
          },
          google_ad_client: a.google_ad_client
      };
      const c = b.enable_page_level_ads;
      Vd(a, (d,e)=>{
          hj[e] && e !== "google_ad_client" && (c[e] = d)
      }
      );
      c.google_pgb_reactive = 7;
      c.easpi = S(zi);
      c.asro = S(xi);
      c.aihb = S(ji);
      c.ailel = an(Gi(ti));
      c.aiael = an(Gi(ki));
      c.aifxl = an(Gi(qi));
      c.aiixl = an(Gi(ri));
      S(si) && (c.slmct = T(ui),
      c.samct = T(ni));
      S(pi) || (c.aiict = !0,
      c.aicel = an(Gi(oi)));
      S(vi) && (c.aipaq = !0);
      S(yi) && (c.aigda = !0);
      T(li) && (c.aiapm = T(li));
      T(mi) && (c.aiapmi = T(mi));
      S(wi) && (c.aiombap = !0);
      if ("google_ad_section"in a || "google_ad_region"in a)
          c.google_ad_section = a.google_ad_section || a.google_ad_region;
      return b
  }
  ;
  function pn(a, b) {
      X(O).ama_ran_on_page || Jj(1001, ()=>{
          qn(new rn(a,b))
      }
      , p)
  }
  function qn(a) {
      Om(a.l, a.i, a.g.google_ad_client || "", (b,c)=>{
          var d = a.l
            , e = a.g;
          X(O).ama_ran_on_page || b && sn(d, e, b, c)
      }
      )
  }
  class rn {
      constructor(a, b) {
          this.l = p;
          this.g = a;
          this.i = b
      }
  }
  function sn(a, b, c, d) {
      d && (Oj(a).configSourceInAbg = d);
      wc(c, wj, 24) && (d = Pj(a),
      d.availableAbg = !0,
      d.ablationFromStorage = !!D(c, wj, 24)?.g()?.g());
      if (la(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
          if (!gm(a, E(c, sj, 7, A()))) {
              ck("amaait", {
                  value: "true"
              });
              return
          }
          ck("amaait", {
              value: "false"
          })
      }
      X(O).ama_ran_on_page = !0;
      D(c, kj, 15)?.g() && (X(a).enable_overlap_observer = !0);
      D(c, wj, 24)?.g()?.g() && (Pj(a).ablatingThisPageview = !0,
      vm(a));
      ue(3, [ed(c)]);
      const e = b.google_ad_client || "";
      b = cm(la(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
      const f = xh(Bh, new yh(null,b));
      bk(782, ()=>{
          $m(a, e, c, f)
      }
      )
  }
  ;function tn(a, b) {
      a = a.document;
      for (var c = void 0, d = 0; !c || a.getElementById(c + "_host"); )
          c = "aswift_" + d++;
      a = c;
      c = Number(b.google_ad_width || 0);
      b = Number(b.google_ad_height || 0);
      d = document.createElement("div");
      d.id = a + "_host";
      const e = d.style;
      e.border = "none";
      e.height = `${b}px`;
      e.width = `${c}px`;
      e.margin = "0px";
      e.padding = "0px";
      e.position = "relative";
      e.visibility = "visible";
      e.backgroundColor = "transparent";
      e.display = "inline-block";
      return {
          xb: a,
          Lb: d
      }
  }
  ;function un({za: a, Fa: b}) {
      return a || (b === "dev" ? "dev" : "")
  }
  ;var vn = {
      google_analytics_domain_name: !0,
      google_analytics_uacct: !0,
      google_pause_ad_requests: !0,
      google_user_agent_client_hint: !0
  };
  function wn(a) {
      return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
  }
  function xn(a) {
      if (a = a.innerText || a.innerHTML)
          if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
          (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1]))
              return a[1];
      return null
  }
  function yn(a) {
      switch (a) {
      case "true":
          return !0;
      case "false":
          return !1;
      case "null":
          return null;
      case "undefined":
          break;
      default:
          try {
              const b = a.match(/^(?:'(.*)'|"(.*)")$/);
              if (b)
                  return b[1] || b[2] || "";
              if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                  const c = parseFloat(a);
                  return c === c ? c : void 0
              }
          } catch (b) {}
      }
  }
  ;function zn(a) {
      if (a.google_ad_client)
          var b = String(a.google_ad_client);
      else {
          if ((b = X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client")) == null)
              if (S(Ai))
                  b = "";
              else {
                  b: {
                      b = a.document.getElementsByTagName("script");
                      a = a.navigator && a.navigator.userAgent || "";
                      a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !ze() ? wn : xn;
                      for (var c = b.length - 1; c >= 0; c--) {
                          var d = b[c];
                          if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0,
                          d = a(d))) {
                              b = d;
                              break b
                          }
                      }
                      b = null
                  }
                  if (b) {
                      a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                      for (c = {}; d = a.exec(b); )
                          c[d[1]] = yn(d[2]);
                      b = c;
                      b = b.google_ad_client ? b.google_ad_client : ""
                  } else
                      b = ""
              }
          b = b ?? ""
      }
      return b
  }
  ;var An = {
      "120x90": !0,
      "160x90": !0,
      "180x90": !0,
      "200x90": !0,
      "468x15": !0,
      "728x15": !0
  };
  function Bn(a, b) {
      if (b == 15) {
          if (a >= 728)
              return 728;
          if (a >= 468)
              return 468
      } else if (b == 90) {
          if (a >= 200)
              return 200;
          if (a >= 180)
              return 180;
          if (a >= 160)
              return 160;
          if (a >= 120)
              return 120
      }
      return null
  }
  ;var Cn = class extends M {
      constructor() {
          super()
      }
      getVersion() {
          return I(this, 2)
      }
  }
  ;
  function Dn(a, b) {
      return y(a, 2, Wb(b))
  }
  function En(a, b) {
      return y(a, 3, Wb(b))
  }
  function Fn(a, b) {
      return y(a, 4, Wb(b))
  }
  function Gn(a, b) {
      return y(a, 5, Wb(b))
  }
  function Hn(a, b) {
      return y(a, 9, Wb(b))
  }
  function In(a, b) {
      return Qc(a, 10, b)
  }
  function Jn(a, b) {
      return y(a, 11, Jb(b))
  }
  function Kn(a, b) {
      return y(a, 1, Wb(b))
  }
  function Ln(a, b) {
      return y(a, 7, Jb(b))
  }
  var Mn = class extends M {
      constructor() {
          super()
      }
  }
  ;
  Mn.B = [10, 6];
  const Nn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function On() {
      var a = O;
      if (typeof a.navigator?.userAgentData?.getHighEntropyValues !== "function")
          return null;
      const b = a.google_tag_data ?? (a.google_tag_data = {});
      if (b.uach_promise)
          return b.uach_promise;
      a = a.navigator.userAgentData.getHighEntropyValues(Nn).then(c=>{
          b.uach ?? (b.uach = c);
          return c
      }
      );
      return b.uach_promise = a
  }
  function Pn(a) {
      return Jn(In(Gn(Dn(Kn(Fn(Ln(Hn(En(new Mn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b=>{
          var c = new Cn;
          c = y(c, 1, Wb(b.brand));
          return y(c, 2, Wb(b.version))
      }
      ) || []), a.wow64 || !1)
  }
  function Qn() {
      return On()?.then(a=>Pn(a)) ?? null
  }
  ;function Rn(a, b) {
      b.google_ad_host || (a = zm(a)) && (b.google_ad_host = a)
  }
  function Sn(a, b, c="") {
      O.google_sa_queue || (O.google_sa_queue = [],
      O.google_process_slots = W.sa(215, ()=>{
          Tn(O.google_sa_queue)
      }
      ),
      a = Un(c, a, b),
      kn(1, O, a))
  }
  function Tn(a) {
      const b = a.shift();
      typeof b === "function" && W.ha(216, b);
      a.length && p.setTimeout(W.sa(215, ()=>{
          Tn(a)
      }
      ), 0)
  }
  function Vn(a, b) {
      a.google_sa_queue = a.google_sa_queue || [];
      a.google_sa_impl ? b() : a.google_sa_queue.push(b)
  }
  function Un(a, b, c) {
      var d = O;
      b = H(c, 4) ? b.Fb : b.Gb;
      a: {
          if (H(c, 4)) {
              if (a = a || zn(d)) {
                  a = S(Qh) ? Ae(a) : a;
                  d = S(Bi) ? {
                      client: a,
                      plah: d.location.host,
                      aplac: S(Bi).toString()
                  } : {
                      client: a,
                      plah: d.location.host
                  };
                  break a
              }
              throw Error("PublisherCodeNotFoundForAma");
          }
          d = {}
      }
      return yd(b, d)
  }
  function Wn(a, b, c, d) {
      const {xb: e, Lb: f} = tn(a, b);
      c.appendChild(f);
      Xn(a, c, b);
      c = b.google_start_time ?? va;
      const g = (new Date).getTime();
      b.google_lrv = un({
          za: Al(),
          Fa: I(d, 2)
      });
      b.google_async_iframe_id = e;
      b.google_start_time = c;
      b.google_bpp = g > c ? g - c : 1;
      a.google_sv_map = a.google_sv_map || {};
      a.google_sv_map[e] = b;
      Vn(a, ()=>{
          var h = f;
          if (!h || !h.isConnected)
              if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"),
              h == null)
                  throw Error("no_div");
          (h = a.google_sa_impl({
              pubWin: a,
              vars: b,
              innerInsElement: h
          })) && W.da(911, h)
      }
      )
  }
  function Xn(a, b, c) {
      var d = c.google_ad_output
        , e = c.google_ad_format
        , f = c.google_ad_width || 0
        , g = c.google_ad_height || 0;
      e || d !== "html" && d != null || (e = `${f}x${g}`);
      S(Ei) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
      d = !c.google_ad_slot || c.google_override_format || !An[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
      e = e && d ? e.toLowerCase() : "";
      c.google_ad_format = e;
      if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
          e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
          d = [];
          f = 0;
          for (g = b; g && f < 25; g = g.parentNode,
          ++f)
              g.nodeType === 9 ? d.push("") : d.push(g.id);
          (d = d.join()) && e.push(d);
          c.google_ad_unit_key = Wd(e.join(":")).toString();
          e = [];
          for (d = 0; b && d < 25; ++d) {
              f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
              a: {
                  if (b && b.nodeName && b.parentElement) {
                      g = b.nodeName.toString().toLowerCase();
                      const h = b.parentElement.childNodes;
                      let k = 0;
                      for (let l = 0; l < h.length; ++l) {
                          const m = h[l];
                          if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                              if (b === m) {
                                  g = "." + k;
                                  break a
                              }
                              ++k
                          }
                      }
                  }
                  g = ""
              }
              e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
              b = b.parentElement
          }
          b = e.join() + ":";
          e = [];
          if (a)
              try {
                  let h = a.parent;
                  for (d = 0; h && h !== a && d < 25; ++d) {
                      const k = h.frames;
                      for (f = 0; f < k.length; ++f)
                          if (a === k[f]) {
                              e.push(f);
                              break
                          }
                      a = h;
                      h = a.parent
                  }
              } catch (h) {}
          c.google_ad_dom_fingerprint = Wd(b + e.join()).toString()
      }
  }
  function Yn() {
      var a = Qd(p);
      a && (a = ln(a),
      a.tagSpecificState[1] || (a.tagSpecificState[1] = {
          debugCard: null,
          debugCardRequested: !1
      }))
  }
  function Zn() {
      const a = Qn();
      a != null && a.then(b=>{
          try {
              dd = !0;
              var c = JSON.stringify(ed(b), cc)
          } finally {
              dd = !1
          }
          O.google_user_agent_client_hint = c
      }
      );
      ee()
  }
  ;function $n(a) {
      return b=>!!(b.ia & a)
  }
  class Y extends Zi {
      constructor(a, b, c, d=!1) {
          super(a, b);
          this.ia = c;
          this.u = d
      }
      ta() {
          return this.ia
      }
      i(a, b, c) {
          c.style.height = this.height() + "px";
          b.rpe = !0
      }
  }
  ;const ao = {
      image_stacked: 1 / 1.91,
      image_sidebyside: 1 / 3.82,
      mobile_banner_image_sidebyside: 1 / 3.82,
      pub_control_image_stacked: 1 / 1.91,
      pub_control_image_sidebyside: 1 / 3.82,
      pub_control_image_card_stacked: 1 / 1.91,
      pub_control_image_card_sidebyside: 1 / 3.74,
      pub_control_text: 0,
      pub_control_text_card: 0
  }
    , bo = {
      image_stacked: 80,
      image_sidebyside: 0,
      mobile_banner_image_sidebyside: 0,
      pub_control_image_stacked: 80,
      pub_control_image_sidebyside: 0,
      pub_control_image_card_stacked: 85,
      pub_control_image_card_sidebyside: 0,
      pub_control_text: 80,
      pub_control_text_card: 80
  }
    , co = {
      pub_control_image_stacked: 100,
      pub_control_image_sidebyside: 200,
      pub_control_image_card_stacked: 150,
      pub_control_image_card_sidebyside: 250,
      pub_control_text: 100,
      pub_control_text_card: 150
  };
  function eo(a) {
      var b = 0;
      a.P && b++;
      a.K && b++;
      a.L && b++;
      if (b < 3)
          return {
              W: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
          };
      b = a.P.split(",");
      const c = a.L.split(",");
      a = a.K.split(",");
      if (b.length !== c.length || b.length !== a.length)
          return {
              W: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
          };
      if (b.length > 2)
          return {
              W: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
          };
      const d = []
        , e = [];
      for (let g = 0; g < b.length; g++) {
          var f = Number(c[g]);
          if (Number.isNaN(f) || f === 0)
              return {
                  W: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
              };
          d.push(f);
          f = Number(a[g]);
          if (Number.isNaN(f) || f === 0)
              return {
                  W: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
              };
          e.push(f)
      }
      return {
          L: d,
          K: e,
          gb: b
      }
  }
  function fo(a) {
      return a >= 1200 ? {
          width: 1200,
          height: 600
      } : a >= 850 ? {
          width: a,
          height: Math.floor(a * .5)
      } : a >= 550 ? {
          width: a,
          height: Math.floor(a * .6)
      } : a >= 468 ? {
          width: a,
          height: Math.floor(a * .7)
      } : {
          width: a,
          height: Math.floor(a * 3.44)
      }
  }
  function go(a, b, c, d) {
      b = Math.floor(((a - 8 * b - 8) / b * ao[d] + bo[d]) * c + 8 * c + 8);
      return a > 1500 ? {
          width: 0,
          height: 0,
          Hb: `Calculated slot width is too large: ${a}`
      } : b > 1500 ? {
          width: 0,
          height: 0,
          Hb: `Calculated slot height is too large: ${b}`
      } : {
          width: a,
          height: b
      }
  }
  function ho(a, b) {
      const c = a - 8 - 8;
      --b;
      return {
          width: a,
          height: Math.floor(c / 1.91 + 70) + Math.floor((c * ao.mobile_banner_image_sidebyside + bo.mobile_banner_image_sidebyside) * b + 8 * b + 8)
      }
  }
  ;const io = Xa("script");
  class jo {
      constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, l=null, m=null, n=null) {
          this.C = a;
          this.ea = b;
          this.ia = c;
          this.g = d;
          this.X = e;
          this.i = f;
          this.j = g;
          this.F = h;
          this.I = k;
          this.u = l;
          this.A = m;
          this.J = n
      }
      size() {
          return this.ea
      }
  }
  ;const ko = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
  var lo = class extends Zi {
      g(a) {
          return Math.min(1200, Math.max(this.aa, Math.round(a)))
      }
  }
  ;
  function mo(a, b) {
      no(a, b);
      if (b.google_content_recommendation_ui_type === "pedestal")
          return new jo(9,new lo(a,Math.floor(a * b.google_phwr)));
      if (S(Oh)) {
          var c = Kd();
          var d = T(Ph);
          var e = T(Nh)
            , f = T(Mh);
          a < 468 ? c ? (a = ho(a, d),
          d = {
              V: a.width,
              U: a.height,
              K: 1,
              L: d,
              P: "mobile_banner_image_sidebyside"
          }) : (a = go(a, 1, d, "image_sidebyside"),
          d = {
              V: a.width,
              U: a.height,
              K: 1,
              L: d,
              P: "image_sidebyside"
          }) : (d = fo(a),
          e === 1 && (d.height = Math.floor(d.height * .5)),
          d = {
              V: d.width,
              U: d.height,
              K: f,
              L: e,
              P: "image_stacked"
          })
      } else
          d = Kd(),
          a < 468 ? d ? (d = ho(a, 12),
          d = {
              V: d.width,
              U: d.height,
              K: 1,
              L: 12,
              P: "mobile_banner_image_sidebyside"
          }) : (d = fo(a),
          d = {
              V: d.width,
              U: d.height,
              K: 1,
              L: 13,
              P: "image_sidebyside"
          }) : (d = fo(a),
          d = {
              V: d.width,
              U: d.height,
              K: 4,
              L: 2,
              P: "image_stacked"
          });
      oo(b, d);
      return new jo(9,new lo(d.V,d.U))
  }
  function po(a, b) {
      no(a, b);
      {
          const f = eo({
              L: b.google_content_recommendation_rows_num,
              K: b.google_content_recommendation_columns_num,
              P: b.google_content_recommendation_ui_type
          });
          if (f.W)
              a = {
                  V: 0,
                  U: 0,
                  K: 0,
                  L: 0,
                  P: "image_stacked",
                  W: f.W
              };
          else {
              var c = f.gb.length === 2 && a >= 468 ? 1 : 0;
              var d = f.gb[c];
              d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
              var e = co[d];
              let g = f.K[c];
              for (; a / g < e && g > 1; )
                  g--;
              e = g;
              c = f.L[c];
              a = go(a, e, c, d);
              a = {
                  V: a.width,
                  U: a.height,
                  K: e,
                  L: c,
                  P: d
              }
          }
      }
      if (a.W)
          throw new V(a.W);
      oo(b, a);
      return new jo(9,new lo(a.V,a.U))
  }
  function no(a, b) {
      if (a <= 0)
          throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
  }
  function oo(a, b) {
      a.google_content_recommendation_ui_type = b.P;
      a.google_content_recommendation_columns_num = b.K;
      a.google_content_recommendation_rows_num = b.L
  }
  ;var qo = class extends Zi {
      g() {
          return this.aa
      }
      i(a, b, c) {
          Yi(a, c);
          c.style.height = `${this.height()}px`;
          b.rpe = !0
      }
  }
  ;
  const ro = {
      "image-top": a=>a <= 600 ? 284 + (a - 250) * .414 : 429,
      "image-middle": a=>a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
      "image-side": a=>a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
      "text-only": a=>a <= 500 ? 187 - .228 * (a - 250) : 130,
      "in-article": a=>a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
  };
  var so = class extends Zi {
      g() {
          return Math.min(1200, this.aa)
      }
  }
  ;
  function to(a, b, c, d, e) {
      var f = e.google_ad_layout || "image-top";
      if (f === "in-article") {
          var g = a;
          if (e.google_full_width_responsive === "false")
              a = g;
          else if (a = Ti(b, c, g, T(Vh), e),
          a !== !0)
              e.gfwrnwer = a,
              a = g;
          else if (a = U(b))
              if (e.google_full_width_responsive_allowed = !0,
              c.parentElement) {
                  b: {
                      g = c;
                      for (let h = 0; h < 100 && g.parentElement; ++h) {
                          const k = g.parentElement.childNodes;
                          for (let l = 0; l < k.length; ++l) {
                              const m = k[l];
                              if (m !== g && Wi(b, m))
                                  break b
                          }
                          g = g.parentElement;
                          g.style.width = "100%";
                          g.style.height = "auto"
                      }
                  }
                  Yi(b, c)
              } else
                  a = g;
          else
              a = g
      }
      if (a < 250)
          throw new V("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
      a = Math.min(1200, Math.floor(a));
      if (d && f !== "in-article") {
          f = Math.ceil(d);
          if (f < 50)
              throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
          return new jo(11,new Zi(a,f))
      }
      if (f !== "in-article" && (d = e.google_ad_layout_key)) {
          f = `${d}`;
          c = Math.pow(10, 3);
          if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
              for (b = [],
              g = 0; g < e; g++)
                  b.push(parseInt(d[g], 36) / c);
          else
              b = null;
          if (!b)
              throw new V(`Invalid data-ad-layout-key value: ${f}`);
          f = (a + -725) / 1E3;
          c = 0;
          d = 1;
          e = b.length;
          for (g = 0; g < e; g++)
              c += b[g] * d,
              d *= f;
          f = Math.ceil(c * 1E3 - -725 + 10);
          if (isNaN(f))
              throw new V(`Invalid height: height=${f}`);
          if (f < 50)
              throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
          if (f > 1200)
              throw new V("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
          return new jo(11,new Zi(a,f))
      }
      d = ro[f];
      if (!d)
          throw new V("Invalid data-ad-layout value: " + f);
      c = cj(c, b);
      b = U(b);
      b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
      return new jo(11,f === "in-article" ? new so(a,b) : new Zi(a,b))
  }
  ;function uo(a) {
      return b=>{
          for (let c = a.length - 1; c >= 0; --c)
              if (!a[c](b))
                  return !1;
          return !0
      }
  }
  function vo(a, b) {
      var c = wo.slice(0);
      const d = c.length;
      let e = null;
      for (let f = 0; f < d; ++f) {
          const g = c[f];
          if (a(g)) {
              if (b == null || b(g))
                  return g;
              e === null && (e = g)
          }
      }
      return e
  }
  ;var Z = [new Y(970,90,2), new Y(728,90,2), new Y(468,60,2), new Y(336,280,1), new Y(320,100,2), new Y(320,50,2), new Y(300,600,4), new Y(300,250,1), new Y(250,250,1), new Y(234,60,2), new Y(200,200,1), new Y(180,150,1), new Y(160,600,4), new Y(125,125,1), new Y(120,600,4), new Y(120,240,4), new Y(120,120,1,!0)]
    , wo = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
  function xo(a, b, c, d, e) {
      e.google_full_width_responsive == "false" ? c = {
          G: a,
          H: 1
      } : b === "autorelaxed" && e.google_full_width_responsive || yo(b) || e.google_ad_resize ? (b = Ui(a, c, d, e),
      c = b !== !0 ? {
          G: a,
          H: b
      } : {
          G: U(c) || a,
          H: !0
      }) : c = {
          G: a,
          H: 2
      };
      const {G: f, H: g} = c;
      return g !== !0 ? {
          G: a,
          H: g
      } : d.parentElement ? {
          G: f,
          H: g
      } : {
          G: a,
          H: g
      }
  }
  function zo(a, b, c, d, e) {
      const {G: f, H: g} = bk(247, ()=>xo(a, b, c, d, e));
      var h = g === !0;
      const k = $d(d.style.width)
        , l = $d(d.style.height)
        , {ca: m, Z: n, ta: q, fb: v} = Ao(f, b, c, d, e, h);
      h = Bo(b, q);
      var u;
      const x = (u = $i(d, c, "marginLeft")) ? `${u}px` : ""
        , L = (u = $i(d, c, "marginRight")) ? `${u}px` : "";
      u = aj(d, c) || "";
      return new jo(h,m,q,null,v,g,n,x,L,l,k,u)
  }
  function yo(a) {
      return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
  }
  function Ao(a, b, c, d, e, f) {
      b = Co(c, a, b);
      let g;
      var h = !1;
      let k = !1;
      var l = U(c) < 488;
      if (l) {
          g = Oi(d, c);
          var m = cj(d, c);
          h = !m && g;
          k = m && g
      }
      m = [bj(a), $n(b)];
      S(ai) || m.push(ej(l, c, d, k));
      e.google_max_responsive_height != null && m.push(fj(e.google_max_responsive_height));
      l = [u=>!u.u];
      if (h || k)
          h = gj(c, d),
          l.push(fj(h));
      const n = vo(uo(m), uo(l));
      if (!n)
          throw new V(`No slot size for availableWidth=${a}`);
      const {ca: q, Z: v} = bk(248, ()=>{
          var u;
          a: if (f) {
              if (e.gfwrnh && (u = $d(e.gfwrnh))) {
                  u = {
                      ca: new qo(a,u),
                      Z: !0
                  };
                  break a
              }
              u = T(Xh);
              u = u > 0 ? a / u : a / 1.2;
              if (e.google_resizing_allowed || e.google_full_width_responsive == "true")
                  var x = Infinity;
              else {
                  x = d;
                  let C = Infinity;
                  do {
                      var L = $i(x, c, "height");
                      L && (C = Math.min(C, L));
                      (L = $i(x, c, "maxHeight")) && (C = Math.min(C, L))
                  } while (x.parentElement && (x = x.parentElement) && x.tagName !== "HTML");
                  x = C
              }
              !(S(Zh) && x <= u * 2) && (x = Math.min(u, x),
              x < u * .5 || x < 100) && (x = u);
              u = {
                  ca: new qo(a,Math.floor(x)),
                  Z: x < u ? 102 : !0
              }
          } else
              u = {
                  ca: n,
                  Z: 100
              };
          return u
      }
      );
      return e.google_ad_layout === "in-article" && Do(c) ? {
          ca: Eo(a, c, d, q, e),
          Z: !1,
          ta: b,
          fb: g
      } : {
          ca: q,
          Z: v,
          ta: b,
          fb: g
      }
  }
  function Bo(a, b) {
      if (a === "auto")
          return 1;
      switch (b) {
      case 2:
          return 2;
      case 1:
          return 3;
      case 4:
          return 4;
      case 3:
          return 5;
      case 6:
          return 6;
      case 5:
          return 7;
      case 7:
          return 8;
      default:
          throw Error("bad mask");
      }
  }
  function Co(a, b, c) {
      if (c === "auto")
          c = Math.min(1200, U(a)),
          b = b / c <= .25 ? 4 : 3;
      else {
          b = 0;
          for (const d in Li)
              c.indexOf(d) !== -1 && (b |= Li[d])
      }
      return b
  }
  function Eo(a, b, c, d, e) {
      const f = e.google_ad_height || $i(c, b, "height");
      b = to(a, b, c, f, e).size();
      return b.aa * b.height() > a * d.height() ? new Y(b.aa,b.height(),1) : d
  }
  function Do(a) {
      return S(Lh) || a.location && a.location.hash === "#hffwroe2etoq"
  }
  ;function Fo(a, b, c, d, e) {
      var f;
      (f = U(b)) ? U(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0,
      Yi(b, c),
      f = {
          G: f,
          H: !0
      }) : f = {
          G: a,
          H: 5
      } : f = {
          G: a,
          H: 4
      } : f = {
          G: a,
          H: 10
      };
      const {G: g, H: h} = f;
      if (h !== !0 || a === g)
          return new jo(12,new Zi(a,d),null,null,!0,h,100);
      const {ca: k, Z: l, ta: m} = Ao(g, "auto", b, c, e, !0);
      return new jo(1,k,m,2,!0,h,l)
  }
  ;var Ho = (a,b)=>{
      var c = b.google_ad_format;
      if (c === "autorelaxed") {
          a: {
              if (b.google_content_recommendation_ui_type !== "pedestal")
                  for (const d of ko)
                      if (b[d] != null) {
                          a = !0;
                          break a
                      }
              a = !1
          }
          return a ? 9 : 5
      }
      if (yo(c))
          return 1;
      if (c === "link")
          return 4;
      if (c === "fluid") {
          if (c = b.google_ad_layout === "in-article")
              c = S(Th) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
          return c ? (Go(b),
          1) : 8
      }
      if (b.google_reactive_ad_format === 27)
          return Go(b),
          1
  }
    , Jo = (a,b,c,d,e=!1)=>{
      var f = b.offsetWidth || (c.google_ad_resize || e) && $i(b, d, "width") || c.google_ad_width || 0;
      a === 4 && (c.google_ad_format = "auto",
      a = 1);
      e = (e = Io(a, f, b, c, d)) ? e : zo(f, c.google_ad_format, d, b, c);
      e.size().i(d, c, b);
      e.ia != null && (c.google_responsive_formats = e.ia);
      e.X != null && (c.google_safe_for_responsive_override = e.X);
      e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
      c.gfwrnwer = e.i));
      e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
      d = e.A || c.google_ad_width;
      d != null && (c.google_resizing_width = d);
      d = e.u || c.google_ad_height;
      d != null && (c.google_resizing_height = d);
      d = e.size().g(f);
      const g = e.size().height();
      c.google_ad_width = d;
      c.google_ad_height = g;
      var h = e.size();
      f = h.g(f) + "x" + h.height();
      c.google_ad_format = f;
      c.google_responsive_auto_format = e.C;
      e.g != null && (c.armr = e.g);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      e.i === !0 && (c.gfwrnh = e.size().height() + "px");
      e.F != null && (c.gfwroml = e.F);
      e.I != null && (c.gfwromr = e.I);
      e.u != null && (c.gfwroh = e.u);
      e.A != null && (c.gfwrow = e.A);
      e.J != null && (c.gfwroz = e.J);
      f = Qd(window) || window;
      bn(f.location, "google_responsive_dummy_ad") && (Va([1, 2, 3, 4, 5, 6, 7, 8], e.C) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
          googMsgType: "adpnt",
          key_value: [{
              key: "qid",
              value: "DUMMY_AD"
          }]
      }),
      c.dash = `<${io}>window.top.postMessage('${f}', '*');
        </${io}>
        <div id="dummyAd" style="width:${d}px;height:${g}px;
          background:#ddd;border:3px solid #f00;box-sizing:border-box;
          color:#000;">
          <p>Requested size:${d}x${g}</p>
          <p>Rendered size:${d}x${g}</p>
        </div>`);
      a != 1 && (a = e.size().height(),
      b.style.height = a + "px")
  }
  ;
  const Io = (a,b,c,d,e)=>{
      const f = d.google_ad_height || $i(c, e, "height");
      switch (a) {
      case 5:
          const {G: g, H: h} = bk(247, ()=>xo(b, d.google_ad_format, e, c, d));
          h === !0 && b != g && Yi(e, c);
          h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
          d.gfwrnwer = h);
          return mo(g, d);
      case 9:
          return po(b, d);
      case 8:
          return to(b, e, c, f, d);
      case 10:
          return Fo(b, e, c, f, d)
      }
  }
    , Go = a=>{
      a.google_ad_format = "auto";
      a.armr = 3
  }
  ;
  function Ko(a, b) {
      a.google_resizing_allowed = !0;
      a.ovlp = !0;
      a.google_ad_format = "auto";
      a.iaaso = !0;
      a.armr = b
  }
  ;function Lo(a, b) {
      var c = Qd(b);
      if (c) {
          c = U(c);
          const d = Td(a, b) || {}
            , e = d.direction;
          if (d.width === "0px" && d.cssFloat !== "none")
              return -1;
          if (e === "ltr" && c)
              return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
          if (e === "rtl" && c)
              return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right,
              Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
      }
      return -1
  }
  ;function Mo(a, b) {
      switch (a) {
      case "google_reactive_ad_format":
          return a = parseInt(b, 10),
          isNaN(a) ? 0 : a;
      default:
          return b
      }
  }
  function No(a, b) {
      if (a.getAttribute("src")) {
          var c = a.getAttribute("src") || ""
            , d = Od(c, "client");
          d && (b.google_ad_client = Mo("google_ad_client", d));
          (c = Od(c, "host")) && (b.google_ad_host = Mo("google_ad_host", c))
      }
      a = a.attributes;
      c = a.length;
      for (d = 0; d < c; d++) {
          var e = a[d];
          if (/data-/.test(e.name)) {
              const f = xa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
              b.hasOwnProperty(f) || (e = Mo(f, e.value),
              e !== null && (b[f] = e))
          }
      }
  }
  function Oo(a) {
      if (a = ve(a))
          switch (a.data && a.data.autoFormat) {
          case "rspv":
              return 13;
          case "mcrspv":
              return 15;
          default:
              return 14
          }
      else
          return 12
  }
  function Po(a, b, c, d) {
      No(a, b);
      if (c.document && c.document.body && !Ho(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
          var e = parseInt(a.style.width, 10)
            , f = Lo(a, c);
          if (f > 0 && e > f) {
              var g = parseInt(a.style.height, 10);
              e = !!An[e + "x" + g];
              let h = f;
              if (e) {
                  const k = Bn(f, g);
                  if (k)
                      h = k,
                      b.google_ad_format = k + "x" + g + "_0ads_al";
                  else
                      throw new V("No slot size for availableWidth=" + f);
              }
              b.google_ad_resize = !0;
              b.google_ad_width = h;
              e || (b.google_ad_format = null,
              b.google_override_format = !0);
              f = h;
              a.style.width = `${f}px`;
              Ko(b, 4)
          }
      }
      if (S(Rh) || U(c) < 488) {
          f = Qd(c) || c;
          g = a.offsetWidth || $i(a, c, "width") || b.google_ad_width || 0;
          e = b.google_ad_client;
          if (d = bn(f.location, "google_responsive_slot_preview") || S(ii) || Dm(f, 1, e, d))
              b: if (b.google_reactive_ad_format || b.google_ad_resize || Ho(c, b) || Qi(a, b))
                  d = !1;
              else {
                  for (d = a; d; d = d.parentElement) {
                      f = Td(d, c);
                      if (!f) {
                          b.gfwrnwer = 18;
                          d = !1;
                          break b
                      }
                      if (!Va(["static", "relative"], f.position)) {
                          b.gfwrnwer = 17;
                          d = !1;
                          break b
                      }
                  }
                  if (!S(bi) && (d = T(Wh),
                  d = Ti(c, a, g, d, b),
                  d !== !0)) {
                      b.gfwrnwer = d;
                      d = !1;
                      break b
                  }
                  d = c === c.top ? !0 : !1
              }
          d ? (Ko(b, 1),
          d = !0) : d = !1
      } else
          d = !1;
      if (g = Ho(c, b))
          Jo(g, a, b, c, d);
      else {
          if (Qi(a, b)) {
              if (d = Td(a, c))
                  a.style.width = d.width,
                  a.style.height = d.height,
                  Pi(d, b);
              b.google_ad_width || (b.google_ad_width = a.offsetWidth);
              b.google_ad_height || (b.google_ad_height = a.offsetHeight);
              b.google_loader_features_used = 256;
              b.google_responsive_auto_format = Oo(c)
          } else
              Pi(a.style, b);
          c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? Jo(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format === 12 && (a = Ui(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b),
          a !== !0 ? (b.efwr = !1,
          b.gfwrnwer = a) : b.efwr = !0)
      }
  }
  ;function Qo(a) {
      if (a === a.top)
          return 0;
      for (let b = a; b && b !== b.top && Pd(b); b = b.parent) {
          if (a.sf_)
              return 2;
          if (a.$sf)
              return 3;
          if (a.inGptIF)
              return 4;
          if (a.inDapIF)
              return 5
      }
      return 1
  }
  ;function mg(a, b, c=0) {
      a.g.size > 0 || Ro(a);
      c = Math.min(Math.max(0, c), 9);
      const d = a.g.get(c);
      d ? d.push(b) : a.g.set(c, [b])
  }
  function So(a, b, c, d) {
      qd(b, c, d);
      Mk(a, ()=>rd(b, c, d))
  }
  function To(a, b) {
      a.j !== 1 && (a.j = 1,
      a.g.size > 0 && Uo(a, b))
  }
  function Ro(a) {
      a.l.document.visibilityState ? So(a, a.l.document, "visibilitychange", b=>{
          a.l.document.visibilityState === "hidden" && To(a, b);
          a.l.document.visibilityState === "visible" && (a.j = 0)
      }
      ) : "onpagehide"in a.l ? (So(a, a.l, "pagehide", b=>{
          To(a, b)
      }
      ),
      So(a, a.l, "pageshow", ()=>{
          a.j = 0
      }
      )) : So(a, a.l, "beforeunload", b=>{
          To(a, b)
      }
      )
  }
  function Uo(a, b) {
      for (let c = 9; c >= 0; c--)
          a.g.get(c)?.forEach(d=>{
              d(b)
          }
          )
  }
  var Vo = class extends Lk {
      constructor(a) {
          super();
          this.l = a;
          this.j = 0;
          this.g = new Map
      }
  }
  ;
  async function Wo(a, b) {
      var c = 10;
      return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d,e)=>{
          const f = a.setInterval(()=>{
              --c ? b() && (a.clearInterval(f),
              d()) : (a.clearInterval(f),
              e(Error(`wfc timed out ${c}`)))
          }
          , 200)
      }
      )
  }
  ;function Xo(a) {
      const b = a.g.pc;
      return b !== null && b !== 0 ? b : a.g.pc = ie(a.l)
  }
  function Yo(a) {
      const b = a.g.wpc;
      return b !== null && b !== "" ? b : a.g.wpc = zn(a.l)
  }
  function Zo(a, b) {
      var c = new Gf;
      var d = Xo(a);
      c = K(c, 1, d);
      d = Yo(a);
      c = cd(c, 2, d);
      c = K(c, 3, a.g.sd);
      return K(c, 7, Math.round(b || a.l.performance.now()))
  }
  async function $o(a) {
      await Wo(a.l, ()=>!(!Xo(a) || !Yo(a)))
  }
  function ap(a) {
      var b = N(bp);
      if (b.j) {
          var c = b.C;
          a(c);
          b.g.psi = ed(c)
      }
  }
  function cp(a) {
      mg(a.u, ()=>{
          var b = Zo(a);
          b = Pc(b, 12, Hf, a.F);
          a.j && !a.g.le.includes(3) && (a.g.le.push(3),
          ig(a.i, b))
      }
      , 9)
  }
  function dp(a) {
      const b = Bf(new Cf, a.A);
      mg(a.u, ()=>{
          Oc(b, 2, a.C);
          K(b, 3, a.g.tar);
          var c = a.i;
          var d = Zo(a);
          d = Pc(d, 8, Hf, b);
          ig(c, d)
      }
      , 9)
  }
  async function ep(a) {
      var b = N(bp);
      if (b.j && !b.g.le.includes(1)) {
          b.g.le.push(1);
          var c = b.l.performance.now();
          await $o(b);
          var d = new xf;
          a = B(d, 5, Jb(a), !1);
          d = new wf;
          d = K(d, 1, Ni(b.l).scrollWidth);
          d = K(d, 2, Ni(b.l).scrollHeight);
          a = Oc(a, 2, d);
          d = new wf;
          var e = U(b.l);
          d = K(d, 1, e);
          d = K(d, 2, Ni(b.l).clientHeight);
          a = Oc(a, 1, d);
          a = cd(a, 4, b.A);
          d = Qo(b.l);
          d !== 0 && (e = new vf,
          d = y(e, 1, w(d)),
          Oc(a, 3, d));
          d = b.i;
          c = Zo(b, c);
          c = Pc(c, 4, Hf, a);
          ig(d, c);
          cp(b);
          dp(b)
      }
  }
  async function fp(a, b, c) {
      if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
          a.g.lgdp.push(Number(b));
          var d = a.l.performance.now();
          await $o(a);
          var e = a.i;
          a = Zo(a, d);
          d = new uf;
          b = B(d, 1, w(b), 0);
          c = Ec(b, 2, c, Nb);
          c = Pc(a, 9, Hf, c);
          ig(e, c)
      }
  }
  async function gp(a, b) {
      await $o(a);
      var c = a.i;
      a = Zo(a);
      a = K(a, 3, 1);
      b = Pc(a, 10, Hf, b);
      ig(c, b)
  }
  var bp = class {
      constructor(a, b) {
          this.l = we() || window;
          this.u = b ?? new Vo(this.l);
          this.i = a ?? new og(2,Al(),100,100,!0,this.u);
          this.g = Dk(Ak(), 33, ()=>{
              const c = T(Uh);
              return {
                  sd: c,
                  ssp: c > 0 && Ud() < 1 / c,
                  pc: null,
                  wpc: null,
                  cu: null,
                  le: [],
                  lgdp: [],
                  psi: null,
                  tar: 0,
                  cc: null
              }
          }
          )
      }
      get j() {
          return this.g.ssp
      }
      get A() {
          return this.g.cu
      }
      set A(a) {
          this.g.cu = a
      }
      get C() {
          return bk(1178, ()=>fd(Af, jc(this.g.psi || []))) || new Af
      }
      get F() {
          return bk(1227, ()=>fd(Df, jc(this.g.cc || []))) || new Df
      }
  }
  ;
  function hp() {
      var a = window;
      return p.google_adtest === "on" || p.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b) && b > 0) || [] : []
  }
  ;function ip(a, b) {
      return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
  }
  function jp(a) {
      var b = O.document;
      if (b.currentScript)
          return ip(b.currentScript, a);
      for (const c of b.scripts)
          if (ip(c, a) === 0)
              return 0;
      return 1
  }
  ;function kp(a, b) {
      return {
          [3]: {
              [55]: ()=>a === 0,
              [23]: c=>Dm(O, Number(c)),
              [24]: c=>Gm(Number(c)),
              [61]: ()=>H(b, 6),
              [63]: ()=>H(b, 6) || I(b, 8) === ".google.ch"
          },
          [4]: {},
          [5]: {
              [6]: ()=>I(b, 15)
          }
      }
  }
  ;function lp(a=p) {
      return a.ggeac || (a.ggeac = {})
  }
  ;function mp(a, b=document) {
      return !!b.featurePolicy?.features().includes(a)
  }
  function np(a, b=document) {
      return !!b.featurePolicy?.allowedFeatures().includes(a)
  }
  function op(a, b=navigator) {
      try {
          return !!b.protectedAudience?.queryFeatureSupport?.(a)
      } catch (c) {
          return !1
      }
  }
  ;function pp(a, b) {
      try {
          const d = a.split(".");
          a = p;
          let e = 0, f;
          for (; a != null && e < d.length; e++)
              f = a,
              a = a[d[e]],
              typeof a === "function" && (a = f[d[e]]());
          var c = a;
          if (typeof c === b)
              return c
      } catch {}
  }
  var qp = {
      [3]: {
          [8]: a=>{
              try {
                  return ka(a) != null
              } catch {}
          }
          ,
          [9]: a=>{
              try {
                  var b = ka(a)
              } catch {
                  return
              }
              if (a = typeof b === "function")
                  b = b && b.toString && b.toString(),
                  a = typeof b === "string" && b.indexOf("[native code]") != -1;
              return a
          }
          ,
          [10]: ()=>window === window.top,
          [6]: a=>Va(N(Ug).g(), Number(a)),
          [27]: a=>{
              a = pp(a, "boolean");
              return a !== void 0 ? a : void 0
          }
          ,
          [60]: a=>{
              try {
                  return !!p.document.querySelector(a)
              } catch {}
          }
          ,
          [80]: a=>{
              try {
                  return !!p.matchMedia(a).matches
              } catch {}
          }
          ,
          [69]: a=>mp(a, p.document),
          [70]: a=>np(a, p.document),
          [79]: a=>op(a, p.navigator)
      },
      [4]: {
          [3]: ()=>ae(),
          [6]: a=>{
              a = pp(a, "number");
              return a !== void 0 ? a : void 0
          }
      },
      [5]: {
          [2]: ()=>window.location.href,
          [3]: ()=>{
              try {
                  return window.top.location.hash
              } catch {
                  return ""
              }
          }
          ,
          [4]: a=>{
              a = pp(a, "string");
              return a !== void 0 ? a : void 0
          }
      }
  };
  function rp(a, b) {
      const c = new Map;
      for (const [f,g] of a[1].entries()) {
          var d = f
            , e = g;
          const {lb: h, hb: k, ib: l} = e[e.length - 1];
          c.set(d, h + k * l)
      }
      for (const f of b)
          for (const g of E(f, mm, 2, A()))
              if (lm(g).length !== 0) {
                  b = Sc(Qb(tc(g, 8)), 0);
                  J(g, 4) && !J(g, 13) && (b = c.get(J(g, 4)) ?? 0,
                  d = Sc(Qb(tc(g, 1)), 0) * lm(g).length,
                  c.set(J(g, 4), b + d));
                  d = [];
                  for (e = 0; e < lm(g).length; e++) {
                      const h = {
                          lb: b,
                          hb: Sc(Qb(tc(g, 1)), 0),
                          ib: lm(g).length,
                          Cb: e,
                          ka: J(f, 1),
                          ua: g,
                          R: lm(g)[e]
                      };
                      d.push(h)
                  }
                  sp(a[2], J(g, 10), d) || sp(a[1], J(g, 4), d) || sp(a[0], lm(g)[0].getId(), d)
              }
      return a
  }
  function sp(a, b, c) {
      if (!b)
          return !1;
      a.has(b) || a.set(b, []);
      a.get(b).push(...c);
      return !0
  }
  ;function tp(a=Ud()) {
      return b=>Wd(`${b} + ${a}`) % 1E3
  }
  ;const up = [12, 13, 20];
  function vp(a, b) {
      var c = N(ug).N;
      const d = lf(D(b.ua, df, 3), c);
      if (!d.success)
          return sg(a.M, D(b.ua, df, 3), b.ka, b.R.getId(), d),
          !1;
      if (!d.value)
          return !1;
      c = lf(D(b.R, df, 3), c);
      return c.success ? c.value ? !0 : !1 : (sg(a.M, D(b.R, df, 3), b.ka, b.R.getId(), c),
      !1)
  }
  function wp(a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      a.includes(b) || a.push(b)
  }
  function xp(a, b, c, d) {
      const e = [];
      var f;
      if (f = b !== 9)
          a.u[b] ? f = !0 : (a.u[b] = !0,
          f = !1);
      if (f)
          return qg(a.M, b, c, e, [], 4),
          e;
      f = up.includes(b);
      const g = []
        , h = [];
      for (const n of [0, 1, 2])
          for (const [q,v] of a.oa[n].entries()) {
              var k = q
                , l = v;
              const u = new Mf;
              var m = l.filter(x=>x.ka === b && a.i[x.R.getId()] && vp(a, x));
              if (m.length)
                  for (const x of m)
                      h.push(x.R);
              else if (!a.Ca && (n === 2 ? (m = d[1],
              Gc(u, 2, Nf, w(k))) : m = d[0],
              k = m?.(String(k)) ?? (n === 2 && J(l[0].ua, 11) === 1 ? void 0 : d[0](String(k))),
              k !== void 0)) {
                  for (const x of l) {
                      if (x.ka !== b)
                          continue;
                      l = k - x.lb;
                      m = x.hb;
                      const L = x.ib
                        , C = x.Cb;
                      l < 0 || l >= m * L || l % L !== C || !vp(a, x) || (l = J(x.ua, 13),
                      l !== 0 && l !== void 0 && (m = a.j[String(l)],
                      m !== void 0 && m !== x.R.getId() ? rg(a.M, a.j[String(l)], x.R.getId(), l) : a.j[String(l)] = x.R.getId()),
                      h.push(x.R))
                  }
                  Kc(u, Nf) !== 0 && (B(u, 3, Ob(k), 0),
                  g.push(u))
              }
          }
      for (const n of h)
          d = n.getId(),
          e.push(d),
          wp(a, d, f ? 4 : c),
          Lg(E(n, nf, 2, A()), f ? Ng() : [c], a.M, d);
      qg(a.M, b, c, e, g, 1);
      return e
  }
  function yp(a, b) {
      b = b.map(c=>new nm(c)).filter(c=>!up.includes(J(c, 1)));
      a.oa = rp(a.oa, b)
  }
  function zp(a, b) {
      P(1, c=>{
          a.i[c] = !0
      }
      , b);
      P(2, (c,d,e)=>xp(a, c, d, e), b);
      P(3, c=>(a.g[c] || []).concat(a.g[4]), b);
      P(12, c=>void yp(a, c), b);
      P(16, (c,d)=>void wp(a, c, d), b)
  }
  var Ap = class {
      constructor(a, b, c, {Ca: d=!1, tc: e=[]}={}) {
          this.oa = a;
          this.M = c;
          this.u = {};
          this.Ca = d;
          this.g = {
              [b]: [],
              [4]: []
          };
          this.i = {};
          this.j = {};
          if (a = He()) {
              a = a.split(",") || [];
              for (const f of a)
                  (a = Number(f)) && (this.i[a] = !0)
          }
          for (const f of e)
              this.i[f] = !0
      }
  }
  ;
  function Bp(a, b) {
      a.g = Pg(14, b, ()=>{}
      )
  }
  class Cp {
      constructor() {
          this.g = ()=>{}
      }
  }
  function Dp(a) {
      N(Cp).g(a)
  }
  ;function Ep({wb: a, N: b, config: c, rb: d=lp(), sb: e=0, M: f=new tg(D(a, om, 5)?.g() ?? 0,D(a, om, 5)?.i() ?? 0,D(a, om, 5)?.j() ?? !1), oa: g=rp({
      [0]: new Map,
      [1]: new Map,
      [2]: new Map
  }, E(a, nm, 2, A(Ab)))}) {
      d.hasOwnProperty("init-done") ? (Pg(12, d, ()=>{}
      )(E(a, nm, 2, A()).map(h=>ed(h))),
      Pg(13, d, ()=>{}
      )(E(a, nf, 1, A()).map(h=>ed(h)), e),
      b && Pg(14, d, ()=>{}
      )(b),
      Fp(e, d)) : (zp(new Ap(g,e,f,c), d),
      Qg(d),
      Rg(d),
      Sg(d),
      Fp(e, d),
      Lg(E(a, nf, 1, A(Ab)), [e], f, void 0, !0),
      vg = vg || !(!c || !c.Ab),
      Dp(qp),
      b && Dp(b))
  }
  function Fp(a, b=lp()) {
      Tg(N(Ug), b, a);
      Gp(b, a);
      Bp(N(Cp), b);
      N(fe).C()
  }
  function Gp(a, b) {
      const c = N(fe);
      c.i = (d,e)=>Pg(5, a, ()=>!1)(d, e, b);
      c.u = (d,e)=>Pg(6, a, ()=>0)(d, e, b);
      c.g = (d,e)=>Pg(7, a, ()=>"")(d, e, b);
      c.A = (d,e)=>Pg(8, a, ()=>[])(d, e, b);
      c.j = (d,e)=>Pg(17, a, ()=>[])(d, e, b);
      c.C = ()=>{
          Pg(15, a, ()=>{}
          )(b)
      }
  }
  ;function Hp(a, b) {
      b = {
          [0]: tp(ie(b).toString())
      };
      b = N(Ug).u(a, b);
      Yg.da(1085, fp(N(bp), a, b))
  }
  function Ip(a, b, c) {
      var d = X(a);
      if (d.plle)
          Fp(1, lp(a));
      else {
          d.plle = !0;
          d = D(b, pm, 12);
          var e = H(b, 9);
          Ep({
              wb: d,
              N: kp(c, b),
              config: {
                  Ca: e && !!a.google_disable_experiments,
                  Ab: e
              },
              rb: lp(a),
              sb: 1
          });
          if (c = I(b, 15))
              c = Number(c),
              N(Ug).j(c);
          for (const f of yc(b, 19, Pb, A()))
              N(Ug).i(f);
          Hp(12, a);
          Hp(10, a);
          a = Qd(a) || a;
          bn(a.location, "google_mc_lab") && N(Ug).i(44738307);
          bn(a.location, "google_auto_storify_swipeable") && N(Ug).i(44773747);
          bn(a.location, "google_auto_storify_scrollable") && N(Ug).i(44773746)
      }
  }
  ;function Jp(a, b) {
      a.Ga(c=>{
          c.shv = String(b);
          c.mjsv = un({
              za: Al(),
              Fa: b
          });
          const d = N(Ug).g()
            , e = hp();
          c.eid = d.concat(e).join(",")
      }
      )
  }
  ;function Kp(a) {
      var b = W;
      try {
          return gd(a, $e),
          new rm(JSON.parse(a))
      } catch (c) {
          b.T(838, c instanceof Error ? c : Error(String(c)))
      }
      return new rm
  }
  ;function Lp(a, b) {
      if (H(b, 22))
          return 7;
      if (H(b, 16))
          return 6;
      var c = b.g()?.j();
      const d = b.g()?.u() ?? 0;
      c = c === a;
      switch (d) {
      case 1:
          return c ? 9 : 8;
      case 2:
          return c ? 11 : 10;
      case 3:
          return c ? 13 : 12
      }
      b = b.g()?.g() ?? [];
      return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
  }
  function Mp(a, b, c) {
      b.google_loader_used !== "sd" && (b.abgtt = Lp(a, c))
  }
  ;var Np = ()=>{
      var a = O;
      try {
          var b = (a || window).document
            , c = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
          return (new Fd(c.clientWidth,c.clientHeight)).round()
      } catch (d) {
          return new Fd(-12245933,-12245933)
      }
  }
  ;
  var Op = a=>{
      qd(window, "message", b=>{
          let c;
          try {
              c = JSON.parse(b.data)
          } catch (d) {
              return
          }
          !c || c.googMsgType !== "sc-cnf" || a(c, b)
      }
      )
  }
  ;
  function Pp(a, b) {
      return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
  }
  function Qp(a, b) {
      return `&${a}=${b.toFixed(3)}`
  }
  function Rp() {
      const a = new Set
        , b = pk();
      try {
          if (!b)
              return a;
          const c = b.pubads();
          for (const d of c.getSlots())
              a.add(d.getSlotId().getDomId())
      } catch {}
      return a
  }
  function Sp(a) {
      a = a.id;
      return a != null && (Rp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
  }
  function Tp(a, b, c) {
      if (!a.sources)
          return !1;
      switch (Up(a)) {
      case 2:
          const d = Vp(a);
          if (d)
              return c.some(f=>Wp(d, f));
          break;
      case 1:
          const e = Xp(a);
          if (e)
              return b.some(f=>Wp(e, f))
      }
      return !1
  }
  function Up(a) {
      if (!a.sources)
          return 0;
      a = a.sources.filter(b=>b.previousRect && b.currentRect);
      if (a.length >= 1) {
          a = a[0];
          if (a.previousRect.top < a.currentRect.top)
              return 2;
          if (a.previousRect.top > a.currentRect.top)
              return 1
      }
      return 0
  }
  function Xp(a) {
      return Yp(a, b=>b.currentRect)
  }
  function Vp(a) {
      return Yp(a, b=>b.previousRect)
  }
  function Yp(a, b) {
      return a.sources.reduce((c,d)=>{
          d = b(d);
          return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
      }
      , null)
  }
  function Wp(a, b) {
      const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
  }
  function Zp() {
      const a = Array.from(document.getElementsByTagName("iframe")).filter(Sp)
        , b = [...Rp()].map(c=>document.getElementById(c)).filter(c=>c !== null);
      $p = window.scrollX;
      aq = window.scrollY;
      return bq = [...a, ...b].map(c=>c.getBoundingClientRect())
  }
  function cq() {
      var a = new dq;
      if (S(Bl)) {
          var b = window;
          if (!b.google_plmetrics && window.PerformanceObserver) {
              b.google_plmetrics = !0;
              b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
              a.ob.vb && b.push("event");
              for (const c of b)
                  b = {
                      type: c,
                      buffered: !0
                  },
                  c === "event" && (b.durationThreshold = 40),
                  eq(a).observe(b);
              fq(a)
          }
      }
  }
  function gq(a, b) {
      const c = $p !== window.scrollX || aq !== window.scrollY ? [] : bq
        , d = Zp();
      for (const e of b.getEntries())
          switch (b = e.entryType,
          b) {
          case "layout-shift":
              hq(a, e, c, d);
              break;
          case "largest-contentful-paint":
              b = e;
              a.Na = Math.floor(b.renderTime || b.loadTime);
              a.Ma = b.size;
              break;
          case "first-input":
              b = e;
              a.Ja = Number((b.processingStart - b.startTime).toFixed(3));
              a.Ka = !0;
              a.g.some(f=>f.entries.some(g=>e.duration === g.duration && e.startTime === g.startTime)) || iq(a, e);
              break;
          case "longtask":
              b = Math.max(0, e.duration - 50);
              a.C += b;
              a.J = Math.max(a.J, b);
              a.wa += 1;
              break;
          case "event":
              iq(a, e);
              break;
          default:
              Gd(b, void 0)
          }
  }
  function eq(a) {
      a.M || (a.M = new PerformanceObserver(Ij(640, b=>{
          gq(a, b)
      }
      )));
      return a.M
  }
  function fq(a) {
      const b = Ij(641, ()=>{
          var d = document;
          (d.prerendering ? 3 : {
              visible: 1,
              hidden: 2,
              prerender: 3,
              preview: 4,
              unloaded: 5
          }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && jq(a)
      }
      )
        , c = Ij(641, ()=>void jq(a));
      document.addEventListener("visibilitychange", b);
      document.addEventListener("pagehide", c);
      a.Ia = ()=>{
          document.removeEventListener("visibilitychange", b);
          document.removeEventListener("pagehide", c);
          eq(a).disconnect()
      }
  }
  function jq(a) {
      if (!a.Qa) {
          a.Qa = !0;
          eq(a).takeRecords();
          var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
          window.LayoutShift && (b += Qp("cls", a.F),
          b += Qp("mls", a.X),
          b += Pp("nls", a.va),
          window.LayoutShiftAttribution && (b += Qp("cas", a.A),
          b += Pp("nas", a.Pa),
          b += Qp("was", a.Ua)),
          b += Qp("wls", a.xa),
          b += Qp("tls", a.Ta));
          window.LargestContentfulPaint && (b += Pp("lcp", a.Na),
          b += Pp("lcps", a.Ma));
          window.PerformanceEventTiming && a.Ka && (b += Pp("fid", a.Ja));
          window.PerformanceLongTaskTiming && (b += Pp("cbt", a.C),
          b += Pp("mbt", a.J),
          b += Pp("nlt", a.wa));
          let d = 0;
          for (var c of document.getElementsByTagName("iframe"))
              Sp(c) && d++;
          b += Pp("nif", d);
          b += Pp("ifi", ye(window));
          c = N(Ug).g();
          b += `&${"eid"}=${encodeURIComponent(c.join())}`;
          b += `&${"top"}=${p === p.top ? 1 : 0}`;
          b += a.Sa ? `&${"qqid"}=${encodeURIComponent(a.Sa)}` : Pp("pvsid", ie(p));
          window.googletag && (b += "&gpt=1");
          c = Math.min(a.g.length - 1, Math.floor((a.M ? a.La : performance.interactionCount || 0) / 50));
          c >= 0 && (c = a.g[c].latency,
          c >= 0 && (b += Pp("inp", c)));
          window.fetch(b, {
              keepalive: !0,
              credentials: "include",
              redirect: "follow",
              method: "get",
              mode: "no-cors"
          });
          a.Ia()
      }
  }
  function hq(a, b, c, d) {
      if (!b.hadRecentInput) {
          a.F += Number(b.value);
          Number(b.value) > a.X && (a.X = Number(b.value));
          a.va += 1;
          if (c = Tp(b, c, d))
              a.A += b.value,
              a.Pa++;
          if (b.startTime - a.Oa > 5E3 || b.startTime - a.Ra > 1E3)
              a.Oa = b.startTime,
              a.i = 0,
              a.j = 0;
          a.Ra = b.startTime;
          a.i += b.value;
          c && (a.j += b.value);
          a.i > a.xa && (a.xa = a.i,
          a.Ua = a.j,
          a.Ta = b.startTime + b.duration)
      }
  }
  function iq(a, b) {
      kq(a, b);
      const c = a.g[a.g.length - 1]
        , d = a.I[b.interactionId];
      if (d || a.g.length < 10 || b.duration > c.latency)
          d ? (d.entries.push(b),
          d.latency = Math.max(d.latency, b.duration)) : (b = {
              id: b.interactionId,
              latency: b.duration,
              entries: [b]
          },
          a.I[b.id] = b,
          a.g.push(b)),
          a.g.sort((e,f)=>f.latency - e.latency),
          a.g.splice(10).forEach(e=>{
              delete a.I[e.id]
          }
          )
  }
  function kq(a, b) {
      b.interactionId && (a.ea = Math.min(a.ea, b.interactionId),
      a.u = Math.max(a.u, b.interactionId),
      a.La = a.u ? (a.u - a.ea) / 7 + 1 : 0)
  }
  var dq = class {
      constructor() {
          this.j = this.i = this.va = this.X = this.F = 0;
          this.Ra = this.Oa = Number.NEGATIVE_INFINITY;
          this.g = [];
          this.I = {};
          this.La = 0;
          this.ea = Infinity;
          this.Ja = this.Ma = this.Na = this.Pa = this.Ua = this.A = this.Ta = this.xa = this.u = 0;
          this.Ka = !1;
          this.wa = this.J = this.C = 0;
          this.M = null;
          this.Qa = !1;
          this.Ia = ()=>{}
          ;
          const a = document.querySelector("[data-google-query-id]");
          this.Sa = a ? a.getAttribute("data-google-query-id") : null;
          this.ob = {
              vb: !0
          }
      }
  }
  , $p, aq, bq = [];
  let lq = null;
  const mq = []
    , nq = new Map;
  let oq = -1;
  function pq(a) {
      return ij.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
  }
  function qq(a, b, c) {
      a.dataset.adsbygoogleStatus = "done";
      rq(a, b, c)
  }
  function rq(a, b, c) {
      var d = window;
      d.google_spfd || (d.google_spfd = Po);
      var e = b.google_reactive_ads_config;
      e || Po(a, b, d, c);
      Rn(d, b);
      if (!sq(a, b, d)) {
          if (e) {
              e = e.page_level_pubvars || {};
              if (X(O).page_contains_reactive_tag && !X(O).allow_second_reactive_tag) {
                  if (e.pltais) {
                      wm(!1);
                      return
                  }
                  throw new V("Only one 'enable_page_level_ads' allowed per page.");
              }
              X(O).page_contains_reactive_tag = !0;
              wm(e.google_pgb_reactive === 7)
          }
          b.google_unique_id = xe(d);
          Vd(vn, (f,g)=>{
              b[g] = b[g] || d[g]
          }
          );
          b.google_loader_used !== "sd" && (b.google_loader_used = "aa");
          b.google_reactive_tag_first = (X(O).first_tag_on_page || 0) === 1;
          bk(164, ()=>{
              Wn(d, b, a, c)
          }
          )
      }
  }
  function sq(a, b, c) {
      var d = b.google_reactive_ads_config
        , e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className)
        , f = um(c);
      if (f && f.Va && b.google_adtest !== "on" && !e) {
          e = Ri(a, c);
          const g = Ni(c).clientHeight;
          e = g === 0 ? null : e / g;
          if (!f.ya || f.ya && (e || 0) >= f.ya)
              return a.className += " adsbygoogle-ablated-ad-slot",
              c = c.google_sv_map = c.google_sv_map || {},
              d = ma(a),
              b.google_element_uid = d,
              c[b.google_element_uid] = b,
              a.setAttribute("google_element_uid", String(d)),
              f.Jb === "slot" && (Zd(a.getAttribute("width")) !== null && a.setAttribute("width", "0"),
              Zd(a.getAttribute("height")) !== null && a.setAttribute("height", "0"),
              a.style.width = "0px",
              a.style.height = "0px"),
              !0
      }
      if ((f = Td(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d))
          return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
          !0;
      a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
      return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !== 8 || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
      !0)
  }
  function tq(a) {
      var b = document.getElementsByTagName("INS");
      for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
          var c = e;
          if (pq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a))
              return e
      }
      return null
  }
  function uq(a, b, c) {
      if (a && "shift"in a) {
          ap(e=>{
              Yc(zf(e), 2) || (e = zf(e),
              bd(e, 2))
          }
          );
          for (var d = 20; a.length > 0 && d > 0; ) {
              try {
                  vq(a.shift(), b, c)
              } catch (e) {
                  setTimeout(()=>{
                      throw e;
                  }
                  )
              }
              --d
          }
      }
  }
  function wq() {
      const a = Sd("INS");
      a.className = "adsbygoogle";
      a.className += " adsbygoogle-noablate";
      be(a);
      return a
  }
  function xq(a, b) {
      const c = {}
        , d = Nm(a.google_ad_client, b);
      Vd(Mi, (g,h)=>{
          a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
      }
      );
      la(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
      const e = wq();
      je.body.appendChild(e);
      const f = {
          google_reactive_ads_config: c,
          google_ad_client: a.google_ad_client
      };
      f.google_pause_ad_requests = !!X(O).pause_ad_requests;
      Mp(yq(a) || zn(O), f, b);
      qq(e, f, b);
      ap(g=>{
          Yc(zf(g), 6) || (g = zf(g),
          bd(g, 6))
      }
      )
  }
  function zq(a, b) {
      ln(p).wasPlaTagProcessed = !0;
      const c = ()=>{
          xq(a, b)
      }
        , d = p.document;
      if (d.body || d.readyState === "complete" || d.readyState === "interactive")
          xq(a, b);
      else {
          const e = pd(W.sa(191, c));
          qd(d, "DOMContentLoaded", e);
          p.MutationObserver != null && (new p.MutationObserver((f,g)=>{
              d.body && (e(),
              g.disconnect())
          }
          )).observe(d, {
              childList: !0,
              subtree: !0
          })
      }
  }
  function vq(a, b, c) {
      const d = {};
      bk(165, ()=>{
          Aq(a, d, b, c)
      }
      , e=>{
          e.client = e.client || d.google_ad_client || a.google_ad_client;
          e.slotname = e.slotname || d.google_ad_slot;
          e.tag_origin = e.tag_origin || d.google_tag_origin
      }
      )
  }
  function Bq(a) {
      delete a.google_checked_head;
      Vd(a, (b,c)=>{
          hj[c] || (delete a[c],
          b = c.replace("google", "data").replace(/_/g, "-"),
          p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
      }
      )
  }
  function Cq(a, b) {
      var c = O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
      if (c) {
          c.setAttribute("data-checked-head", "true");
          var d = X(window);
          if (d.head_tag_slot_vars)
              Dq(c);
          else {
              ap(g=>{
                  g = zf(g);
                  B(g, 7, Jb(!0), !1)
              }
              );
              var e = {};
              No(c, e);
              Bq(e);
              var f = vd(e);
              d.head_tag_slot_vars = f;
              c = {
                  google_ad_client: e.google_ad_client,
                  enable_page_level_ads: e
              };
              e.google_ad_intent_query && (c.enable_ad_intent_display_ads = !0);
              e.google_overlays === "bottom" && (c.overlays = {
                  bottom: !0
              });
              delete e.google_overlays;
              O.adsbygoogle || (O.adsbygoogle = []);
              d = O.adsbygoogle;
              d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
              e.google_adbreak_test || b.i()?.i() ? Eq(f, a) : Op(()=>{
                  Eq(f, a)
              }
              )
          }
      }
  }
  function Dq(a) {
      const b = X(window).head_tag_slot_vars
        , c = a.getAttribute("src") || "";
      if ((a = Od(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client)
          throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
  }
  function Fq(a) {
      if (typeof a === "object" && a != null) {
          if (typeof a.type === "string")
              return 2;
          if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string")
              return 3
      }
      return 0
  }
  function Aq(a, b, c, d) {
      if (a == null)
          throw new V("push() called with no parameters.");
      ap(f=>{
          Yc(zf(f), 3) || (f = zf(f),
          bd(f, 3))
      }
      );
      d.j() && Gq(a, d.g().g(), I(d, 2));
      var e = Fq(a);
      if (e !== 0)
          if (d = xm(),
          d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(),
          d.adsbygoogle_execution_start_time = va),
          lq == null)
              Hq(a),
              mq.push(a);
          else if (e === 3) {
              const f = lq;
              bk(787, ()=>{
                  f.handleAdConfig(a)
              }
              )
          } else
              dk(730, lq.handleAdBreak(a));
      else {
          va = (new Date).getTime();
          Sn(c, d, yq(a));
          Iq();
          a: {
              if (!a.enable_ad_intent_display_ads && a.enable_page_level_ads != void 0) {
                  if (typeof a.google_ad_client === "string") {
                      e = !0;
                      break a
                  }
                  // throw new V("'google_ad_client' is missing from the tag config.");
              }
              e = !1
          }
          if (e)
              ap(f=>{
                  Yc(zf(f), 4) || (f = zf(f),
                  bd(f, 4))
              }
              ),
              Jq(a, d);
          else if ((e = a.params) && Vd(e, (f,g)=>{
              b[g] = f
          }
          ),
          b.google_ad_output === "js")
              console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
          else {
              Mp(yq(a) || zn(O), b, d);
              e = (c = !!b.google_wrap_fullscreen_ad) ? Kq() : Lq(a.element);
              c && (c = Np(),
              b.google_ad_height = c.height,
              b.google_ad_width = c.width,
              b.fsapi = !0);
              No(e, b);
              c = X(p).head_tag_slot_vars || {};
              Vd(c, (f,g)=>{
                  b.hasOwnProperty(g) || (b[g] = f)
              }
              );
              if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars)
                  throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
              if (!b.google_ad_client)
                  throw new V("Ad client is missing from the slot.");
              if (c = (X(O).first_tag_on_page || 0) === 0 && on(b))
                  ap(f=>{
                      Yc(zf(f), 5) || (f = zf(f),
                      bd(f, 5))
                  }
                  ),
                  Mq(c);
              (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 2);
              b.google_pause_ad_requests = !!X(O).pause_ad_requests;
              qq(e, b, d)
          }
      }
  }
  let Nq = !1;
  function Gq(a, b, c) {
      Nq || (Nq = !0,
      a = yq(a) || zn(O),
      ck("predictive_abg", {
          a_c: a,
          p_c: b.join(),
          b_v: c
      }, .01))
  }
  function yq(a) {
      return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
  }
  function Iq() {
      if (S(gi)) {
          const a = um(O);
          a && a.Va || vm(O)
      }
  }
  function Mq(a) {
      ke(()=>{
          ln(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
      }
      )
  }
  function Jq(a, b) {
      (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 1);
      if (a.tag_partner) {
          var c = a.tag_partner;
          const d = X(p);
          d.tag_partners = d.tag_partners || [];
          d.tag_partners.push(c)
      }
      pn(a, b);
      zq(a, b)
  }
  function Kq() {
      const a = wq();
      a.dataset.adsbygoogleStatus = "reserved";
      je.documentElement.appendChild(a);
      return a
  }
  function Lq(a) {
      if (a) {
          if (!pq(a) && (a.id ? a = tq(a.id) : a = null,
          !a))
              throw new V("'element' has already been filled.");
          if (!("innerHTML"in a))
              throw new V("'element' is not a good DOM element.");
      } else if (a = tq(),
      !a)
          throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
      return a
  }
  function Oq(a) {
      a = {
          value: `${H(a, 16)}`,
          host_v: `${H(a, 22)}`,
          frequency: .01
      };
      ck("new_abg_tag", a, .01)
  }
  function Pq(a) {
      var b = Ak();
      Hk(b, 26, !!Number(a))
  }
  function Qq(a) {
      Number(a) ? X(O).pause_ad_requests = !0 : (X(O).pause_ad_requests = !1,
      a = ()=>{
          if (!X(O).pause_ad_requests) {
              var b = {};
              let c;
              typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",b) : (c = document.createEvent("CustomEvent"),
              c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
              O.dispatchEvent(c)
          }
      }
      ,
      p.setTimeout(a, 0),
      p.setTimeout(a, 1E3))
  }
  function Rq(a) {
      a && a.call && typeof a === "function" && window.setTimeout(a, 0)
  }
  function Eq(a, b) {
      b = kn(2, p, b.Ib).Wa.then(c=>{
          lq == null && (c.init(a),
          lq = c,
          Sq(c))
      }
      );
      W.da(723, b);
      b.finally(()=>{
          mq.length = 0;
          ck("slotcar", {
              event: "api_ld",
              time: Date.now() - va,
              time_pr: Date.now() - oq
          });
          S(Di) && gp(N(bp), Ef(23))
      }
      )
  }
  function Sq(a) {
      for (const [c,d] of nq) {
          var b = c;
          const e = d;
          e !== -1 && (p.clearTimeout(e),
          nq.delete(b))
      }
      for (b = 0; b < mq.length; b++) {
          if (nq.has(b))
              continue;
          const c = mq[b]
            , d = Fq(c);
          bk(723, ()=>{
              if (d === 3)
                  a.handleAdConfig(c);
              else if (d === 2) {
                  var e = a.handleAdBreakBeforeReady(c);
                  W.da(730, e)
              }
          }
          )
      }
  }
  function Hq(a) {
      var b = mq.length;
      if (Fq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
          var c = a.adBreakDone;
          oq === -1 && (oq = Date.now());
          var d = p.setTimeout(()=>{
              try {
                  c({
                      breakType: "preroll",
                      breakName: a.name,
                      breakFormat: "preroll",
                      breakStatus: "timeout"
                  }),
                  nq.set(b, -1),
                  ck("slotcar", {
                      event: "pr_to",
                      source: "adsbygoogle"
                  }),
                  S(Di) && gp(N(bp), Ef(22))
              } catch (e) {
                  console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
              }
          }
          , T(Ci) * 1E3);
          nq.set(b, d)
      }
  }
  ;(function(a, b, c, d=()=>{}
  ) {
      W.kb(ek);
      bk(166, ()=>{
          const e = new og(2,a);
          try {
              Fb(m=>{
                  var n = new cg;
                  var q = new bg;
                  try {
                      var v = ie(window);
                      K(q, 1, v)
                  } catch (C) {}
                  try {
                      var u = N(Ug).g();
                      Ec(q, 2, u, Nb)
                  } catch (C) {}
                  try {
                      cd(q, 3, window.document.URL)
                  } catch (C) {}
                  n = Oc(n, 2, q);
                  q = new ag;
                  q = B(q, 1, w(1191), 0);
                  try {
                      var x = $e(m?.name) ? m.name : "Unknown error";
                      cd(q, 2, x)
                  } catch (C) {}
                  try {
                      var L = $e(m?.message) ? m.message : `Caught ${m}`;
                      cd(q, 3, L)
                  } catch (C) {}
                  try {
                      const C = $e(m?.stack) ? m.stack : Error().stack;
                      C && Ec(q, 4, C.split(/\n\s*/), Vb)
                  } catch (C) {}
                  m = Oc(n, 1, q);
                  x = new $f;
                  try {
                      cd(x, 1, Al())
                  } catch {}
                  Pc(m, 6, dg, x);
                  K(m, 5, 1);
                  fg(e, m)
              }
              )
          } catch (m) {}
          const f = Kp(b);
          Jp(W, I(f, 2));
          tm(H(f, 6));
          Ik(Ak(), I(f, 24));
          d();
          ue(16, [1, ed(f)]);
          var g = we(ve(O)) || O
            , h = un({
              za: a,
              Fa: I(f, 2)
          });
          const k = c(h, f);
          h = O.document.currentScript === null ? 1 : jp(k.Kb);
          Em(g, f);
          Ip(g, f, h);
          ap(m=>{
              var n = Wc(m, 1) + 1;
              B(m, 1, Ob(n), 0);
              O.top === O && (n = Wc(m, 2) + 1,
              B(m, 2, Ob(n), 0));
              Yc(zf(m), 1) || (m = zf(m),
              bd(m, 1))
          }
          );
          dk(1086, ep(h === 0));
          if (!Ka() || ya(Pa(), 11) >= 0) {
              ak(S(Fi));
              Zn();
              Ul();
              try {
                  cq()
              } catch {}
              Yn();
              Cq(k, f);
              g = window;
              h = g.adsbygoogle;
              if (!h || !h.loaded) {
                  Oq(f);
                  var l = {
                      push: m=>{
                          vq(m, k, f)
                      }
                      ,
                      loaded: !0
                  };
                  try {
                      Object.defineProperty(l, "requestNonPersonalizedAds", {
                          set: Pq
                      }),
                      Object.defineProperty(l, "pauseAdRequests", {
                          set: Qq
                      }),
                      Object.defineProperty(l, "onload", {
                          set: Rq
                      })
                  } catch {}
                  if (h)
                      for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"])
                          h[m] !== void 0 && (l[m] = h[m]);
                  uq(h, k, f);
                  g.adsbygoogle = l;
                  h && (l.onload = h.onload)
              }
          }
      }
      )
  }
  )(Al(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
      const c = Wc(b, 1) > 2012 ? `_fy${Wc(b, 1)}` : ""
        , d = I(b, 3);
      b = I(b, 2);
      Ed`data:text/javascript,//show_ads_impl_preview.js`;
      return {
          Ib: Ed`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
          Gb: Ed`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
          Fb: Ed`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
          uc: Ed`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
          Kb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
      }
  });
}
).call(this, "[2021,\"r20240718\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1321,null,null,[1]],[null,619278254,null,[null,10]],[1325,null,null,[1]],[1310,null,null,[1]],[1322,null,null,[1]],[1355,null,null,[1]],[1308,null,null,[1]],[1351,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[1331,null,null,[1]],[1352,null,null,[1]],[1330,null,null,[1]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[1320,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[1362,null,null,[1]],[null,1072,null,[null,0.75]],[null,1364,null,[null,300]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\"]],null,null,null,627094447],[null,579884443,null,[null,0.7]],[null,624950166,null,[null,15000]],[null,null,null,[null,null,null,[\"33\"]],null,null,null,641845510],[622128248,null,null,[1]],[null,null,null,[null,null,null,[\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"30_6\"]],null,null,null,636146137],[579884441,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\"]],null,null,null,627094446],[null,579884442,null,[null,0.7]],[613534001,null,null,[1]],[null,626062006,null,[null,670]],[649667950,null,null,[1]],[null,618163195,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,650548030,null,[null,5]],[null,650548032,null,[null,300]],[null,650548031,null,[null,2]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,60000]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[45621722,null,null,[1]],[570804360,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[10014,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[595827158,null,null,[1]],[45618987,null,null,[1]],[null,550718588,null,[null,250]],[null,629793592,null,[null,0.8]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0\/9AORwCSapUO\/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv\/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg\/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[50,[[31084867],[31084868,[[643056383,null,null,[1]]]]]],[1000,[[31085477,[[null,null,14,[null,null,\"31085477\"]]],[6,null,null,null,6,null,\"31085477\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085478,[[null,null,14,[null,null,\"31085478\"]]],[6,null,null,null,6,null,\"31085478\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31085512],[31085513,[[652479164,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[42532741],[42532742,[[1260,null,null,[1]],[null,1263,null,[null,16]],[null,1323,null,[null,50]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532743,[[1260,null,null,[1]],[null,1263,null,[null,13]],[null,1323,null,[null,180]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532744,[[1260,null,null,[1]],[null,1263,null,[null,11]],[null,1323,null,[null,350]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532745,[[1260,null,null,[1]],[null,1263,null,[null,10]],[null,1323,null,[null,420]],[1291,null,null,[1]],[1266,null,null,[1]]]]]],[null,[[42532746],[42532747],[42532748],[42532749],[42532750]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331687,[[null,null,null,[null,null,null,[\"95331691\"]],null,null,null,630330362]]],[95331688,[[566279275,null,null,[1]],[null,null,null,[null,null,null,[\"95331692\"]],null,null,null,630330362]]],[95331689,[[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95331693\"]],null,null,null,630330362]]],[95331690,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,561668774,null,[]],[null,null,null,[null,null,null,[\"95331694\"]],null,null,null,630330362]]]],[4,null,55]],[null,[[95331695,[[null,null,null,[null,null,null,[\"95331697\"]],null,null,null,630330362]]],[95331696,[[1120,null,null,[1]],[null,null,null,[null,null,null,[\"95331698\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|couponpac\\\\.com\/|darada\\\\.co\/|diggfun\\\\.co\/|dreamsnest\\\\.com\/|games2kings\\\\.com\/|gegen-hartz\\\\.de\/|indiaimagine\\\\.com\/|pepigame\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[166,[[95334524,[[null,null,null,[null,null,null,[\"95334530\"]],null,null,null,630330362]]],[95334525,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_15\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334531\"]],null,null,null,630330362]]],[95334526,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_9\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334532\"]],null,null,null,630330362]]],[95334527,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_8\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334533\"]],null,null,null,630330362]]],[95334528,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_4\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334534\"]],null,null,null,630330362]]],[95334529,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_14\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334535\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[333,[[95334828,[[null,null,null,[null,null,null,[\"95334831\"]],null,null,null,630330362]]],[95334829,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334832\"]],null,null,null,630330362]]],[95334830,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_7\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334833\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[50,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335249,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335254\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335249\",\"95335254\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95336911],[95336912],[95336913,[[1361,null,null,[1]]]],[95336914],[95336915,[[1361,null,null,[1]]]]]],[250,[[95337026,[[null,null,null,[null,null,null,[\"95337028\"]],null,null,null,630330362]]],[95337027,[[null,null,null,[null,null,null,[\"34\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"34\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337029\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95337056],[95337057,[[null,1359,null,[null,3]],[null,1358,null,[null,2]],[1360,null,null,[1]],[null,1357,null,[null,6]]]],[95337061,[[null,1359,null,[null,4]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,4]]]],[95337065,[[null,1359,null,[null,3]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,3]]]],[95337069,[[null,1359,null,[null,2]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,2]]]]]],[10,[[95337195],[95337196,[[1354,null,null,[1]]]]],null,126],[10,[[95337197,null,[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]],[95337198,[[1354,null,null,[1]]],[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]]],null,126],[10,[[95337273,[[null,null,null,[null,null,null,[\"95337276\"]],null,null,null,630330362]]],[95337274,[[622128248,null,null,[]],[636570127,null,null,[1]],[null,null,null,[null,null,null,[\"95337277\"]],null,null,null,630330362]]],[95337275,[[622128248,null,null,[]],[null,null,null,[null,null,null,[\"95337278\"]],null,null,null,630330362]]]],[4,null,55]],[10,[[95337496],[95337497,[[1356,null,null,[1]]]]]],[10,[[95337584],[95337585,[[1350,null,null,[1]]]]]],[10,[[95337586],[95337587]]],[333,[[95337868,[[null,null,null,[null,null,null,[\"95337871\"]],null,null,null,630330362]]],[95337869,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337872\"]],null,null,null,630330362]]],[95337870,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337873\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95337874],[95337875]]],[100,[[95338226,[[null,null,null,[null,null,null,[\"95338230\"]],null,null,null,630330362]]],[95338227,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338231\"]],null,null,null,630330362]]],[95338228,[[null,643258048,null,[null,0.41421]],[null,643258049,null,[null,0.44357]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338232\"]],null,null,null,630330362]]],[95338229,[[null,643258048,null,[null,0.46927]],[null,643258049,null,[null,0.48129]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338233\"]],null,null,null,630330362]]]],[4,null,55]],[10,[[95338242],[95338243,[[1318,null,null,[]]]]]],[50,[[95338246,[[null,null,null,[null,null,null,[\"95338266\"]],null,null,null,630330362]]],[95338247,[[null,508040914,null,[null,500]],[null,null,null,[null,null,null,[\"95338267\"]],null,null,null,630330362]]],[95338248,[[null,508040914,null,[null,300]],[null,null,null,[null,null,null,[\"95338268\"]],null,null,null,630330362]]],[95338249,[[null,508040914,null,[null,200]],[null,null,null,[null,null,null,[\"95338269\"]],null,null,null,630330362]]],[95338250,[[null,650548030,null,[null,1]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338270\"]],null,null,null,630330362]]],[95338251,[[null,508040914,null,[null,500]],[null,650548030,null,[null,1]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338271\"]],null,null,null,630330362]]],[95338252,[[null,650548030,null,[null,2]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338272\"]],null,null,null,630330362]]],[95338253,[[null,508040914,null,[null,500]],[null,650548030,null,[null,2]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338273\"]],null,null,null,630330362]]],[95338254,[[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338274\"]],null,null,null,630330362]]],[95338255,[[null,508040914,null,[null,500]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338275\"]],null,null,null,630330362]]],[95338256,[[null,650548030,null,[null,3]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338276\"]],null,null,null,630330362]]],[95338257,[[null,508040914,null,[null,500]],[null,650548030,null,[null,3]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338277\"]],null,null,null,630330362]]],[95338258,[[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338278\"]],null,null,null,630330362]]],[95338259,[[null,508040914,null,[null,500]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338279\"]],null,null,null,630330362]]],[95338260,[[null,650548030,null,[null,4]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338280\"]],null,null,null,630330362]]],[95338261,[[null,508040914,null,[null,500]],[null,650548030,null,[null,4]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338281\"]],null,null,null,630330362]]],[95338262,[[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338282\"]],null,null,null,630330362]]],[95338263,[[null,508040914,null,[null,500]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338283\"]],null,null,null,630330362]]],[95338264,[[null,650548030,null,[null,5]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338284\"]],null,null,null,630330362]]],[95338265,[[null,508040914,null,[null,500]],[null,650548030,null,[null,5]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338285\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]]]],[11,[[100,[[31084184,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,null,null,null,null,null,23],[100,[[31084185,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,200,null,null,null,null,23],[100,[[31084186,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,600,null,null,null,null,23],[100,[[31084187,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,800,null,null,null,null,23],[10,[[31084678],[31084679,[[45621722,null,null,[]]]]]],[50,[[95336521],[95336522,[[null,624290870,null,[null,50]]]]],null,120],[50,[[95337092],[95337093,[[null,624290870,null,[null,100]]]],[95337094,[[null,624290870,null,[null,150]]]]],null,120]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[50,[[95331953],[95331954,[[45618987,null,null,[]]]]],null,null,null,null,null,550,null,149],[200,[[95336266,[[null,null,null,[null,null,null,[\"95336268\"]],null,null,null,630330362]]],[95336267,[[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"95336269\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,173]]]],null,null,[null,1000,1,1000]],null,null,\"31085478\",null,null,1341017251,[44759875,44759926,44759842]]");
