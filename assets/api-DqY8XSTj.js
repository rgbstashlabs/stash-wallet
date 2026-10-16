var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Xh, qh, Jm, Vg, Im, $s, Ch, V, Um, km, nm, qm, Gm, Ra, dh, Br, ep, $m, Ze, wm, Bh, dc, Je, Zn, Th, mm, Yh, et, Y, ua, um, Dm, Rm, Em, le, Vm, hm, vm, Qr, Qh, tp, Wh, fa, $a, bm, Tl, ym, Pm, jm, _m, Km, E0, El, Zm, Xm, pm, Mh, $h, el, dm, fm, Zh, xm, Am, zm, Kh, Nm, Hh, Fm, Tm, eu, xh, Lm, In, oi, Yr, jh, Lh, Gh, Om, fe, Lt, A0, Mg, ot, ic, rm, Jh, Vh, mo, Dd, vl, Ke, Sm, Ym, ee, Oe, De, Qt, Ar, at, re, si, ln, zt, uc, ha, kr, Hm, Cm, Bm, Wm, Mm, ou, Uh;
let __tla = (async () => {
  var _c2;
  fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
  dc = function(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  };
  function pu(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
      var r = function a() {
        return this instanceof a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
      };
      r.prototype = e.prototype;
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
      value: true
    }), Object.keys(t).forEach(function(a) {
      var o = Object.getOwnPropertyDescriptor(t, a);
      Object.defineProperty(r, a, o.get ? o : {
        enumerable: true,
        get: function() {
          return t[a];
        }
      });
    }), r;
  }
  var La = {}, Qa = {};
  Qa.byteLength = xu;
  Qa.toByteArray = bu;
  Qa.fromByteArray = Eu;
  var kt = [], ut = [], gu = typeof Uint8Array < "u" ? Uint8Array : Array, xo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var _r = 0, mu = xo.length; _r < mu; ++_r) kt[_r] = xo[_r], ut[xo.charCodeAt(_r)] = _r;
  ut[45] = 62;
  ut[95] = 63;
  function fc(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    r === -1 && (r = e);
    var a = r === e ? 0 : 4 - r % 4;
    return [
      r,
      a
    ];
  }
  function xu(t) {
    var e = fc(t), r = e[0], a = e[1];
    return (r + a) * 3 / 4 - a;
  }
  function vu(t, e, r) {
    return (e + r) * 3 / 4 - r;
  }
  function bu(t) {
    var e, r = fc(t), a = r[0], o = r[1], n = new gu(vu(t, a, o)), s = 0, i = o > 0 ? a - 4 : a, l;
    for (l = 0; l < i; l += 4) e = ut[t.charCodeAt(l)] << 18 | ut[t.charCodeAt(l + 1)] << 12 | ut[t.charCodeAt(l + 2)] << 6 | ut[t.charCodeAt(l + 3)], n[s++] = e >> 16 & 255, n[s++] = e >> 8 & 255, n[s++] = e & 255;
    return o === 2 && (e = ut[t.charCodeAt(l)] << 2 | ut[t.charCodeAt(l + 1)] >> 4, n[s++] = e & 255), o === 1 && (e = ut[t.charCodeAt(l)] << 10 | ut[t.charCodeAt(l + 1)] << 4 | ut[t.charCodeAt(l + 2)] >> 2, n[s++] = e >> 8 & 255, n[s++] = e & 255), n;
  }
  function wu(t) {
    return kt[t >> 18 & 63] + kt[t >> 12 & 63] + kt[t >> 6 & 63] + kt[t & 63];
  }
  function yu(t, e, r) {
    for (var a, o = [], n = e; n < r; n += 3) a = (t[n] << 16 & 16711680) + (t[n + 1] << 8 & 65280) + (t[n + 2] & 255), o.push(wu(a));
    return o.join("");
  }
  function Eu(t) {
    for (var e, r = t.length, a = r % 3, o = [], n = 16383, s = 0, i = r - a; s < i; s += n) o.push(yu(t, s, s + n > i ? i : s + n));
    return a === 1 ? (e = t[r - 1], o.push(kt[e >> 2] + kt[e << 4 & 63] + "==")) : a === 2 && (e = (t[r - 2] << 8) + t[r - 1], o.push(kt[e >> 10] + kt[e >> 4 & 63] + kt[e << 2 & 63] + "=")), o.join("");
  }
  var Ln = {};
  Ln.read = function(t, e, r, a, o) {
    var n, s, i = o * 8 - a - 1, l = (1 << i) - 1, c = l >> 1, d = -7, h = r ? o - 1 : 0, p = r ? -1 : 1, g = t[e + h];
    for (h += p, n = g & (1 << -d) - 1, g >>= -d, d += i; d > 0; n = n * 256 + t[e + h], h += p, d -= 8) ;
    for (s = n & (1 << -d) - 1, n >>= -d, d += a; d > 0; s = s * 256 + t[e + h], h += p, d -= 8) ;
    if (n === 0) n = 1 - c;
    else {
      if (n === l) return s ? NaN : (g ? -1 : 1) * (1 / 0);
      s = s + Math.pow(2, a), n = n - c;
    }
    return (g ? -1 : 1) * s * Math.pow(2, n - a);
  };
  Ln.write = function(t, e, r, a, o, n) {
    var s, i, l, c = n * 8 - o - 1, d = (1 << c) - 1, h = d >> 1, p = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = a ? 0 : n - 1, m = a ? 1 : -1, b = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (i = isNaN(e) ? 1 : 0, s = d) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + h >= 1 ? e += p / l : e += p * Math.pow(2, 1 - h), e * l >= 2 && (s++, l /= 2), s + h >= d ? (i = 0, s = d) : s + h >= 1 ? (i = (e * l - 1) * Math.pow(2, o), s = s + h) : (i = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + g] = i & 255, g += m, i /= 256, o -= 8) ;
    for (s = s << o | i, c += o; c > 0; t[r + g] = s & 255, g += m, s /= 256, c -= 8) ;
    t[r + g - m] |= b * 128;
  };
  (function(t) {
    const e = Qa, r = Ln, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = i, t.SlowBuffer = y, t.INSPECT_MAX_BYTES = 50;
    const o = 2147483647;
    t.kMaxLength = o, i.TYPED_ARRAY_SUPPORT = n(), !i.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function n() {
      try {
        const v = new Uint8Array(1), u = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(v, u), v.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(i.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (i.isBuffer(this)) return this.buffer;
      }
    }), Object.defineProperty(i.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (i.isBuffer(this)) return this.byteOffset;
      }
    });
    function s(v) {
      if (v > o) throw new RangeError('The value "' + v + '" is invalid for option "size"');
      const u = new Uint8Array(v);
      return Object.setPrototypeOf(u, i.prototype), u;
    }
    function i(v, u, f) {
      if (typeof v == "number") {
        if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return h(v);
      }
      return l(v, u, f);
    }
    i.poolSize = 8192;
    function l(v, u, f) {
      if (typeof v == "string") return p(v, u);
      if (ArrayBuffer.isView(v)) return m(v);
      if (v == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v);
      if (Be(v, ArrayBuffer) || v && Be(v.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Be(v, SharedArrayBuffer) || v && Be(v.buffer, SharedArrayBuffer))) return b(v, u, f);
      if (typeof v == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      const A = v.valueOf && v.valueOf();
      if (A != null && A !== v) return i.from(A, u, f);
      const I = x(v);
      if (I) return I;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof v[Symbol.toPrimitive] == "function") return i.from(v[Symbol.toPrimitive]("string"), u, f);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof v);
    }
    i.from = function(v, u, f) {
      return l(v, u, f);
    }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array);
    function c(v) {
      if (typeof v != "number") throw new TypeError('"size" argument must be of type number');
      if (v < 0) throw new RangeError('The value "' + v + '" is invalid for option "size"');
    }
    function d(v, u, f) {
      return c(v), v <= 0 ? s(v) : u !== void 0 ? typeof f == "string" ? s(v).fill(u, f) : s(v).fill(u) : s(v);
    }
    i.alloc = function(v, u, f) {
      return d(v, u, f);
    };
    function h(v) {
      return c(v), s(v < 0 ? 0 : _(v) | 0);
    }
    i.allocUnsafe = function(v) {
      return h(v);
    }, i.allocUnsafeSlow = function(v) {
      return h(v);
    };
    function p(v, u) {
      if ((typeof u != "string" || u === "") && (u = "utf8"), !i.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
      const f = w(v, u) | 0;
      let A = s(f);
      const I = A.write(v, u);
      return I !== f && (A = A.slice(0, I)), A;
    }
    function g(v) {
      const u = v.length < 0 ? 0 : _(v.length) | 0, f = s(u);
      for (let A = 0; A < u; A += 1) f[A] = v[A] & 255;
      return f;
    }
    function m(v) {
      if (Be(v, Uint8Array)) {
        const u = new Uint8Array(v);
        return b(u.buffer, u.byteOffset, u.byteLength);
      }
      return g(v);
    }
    function b(v, u, f) {
      if (u < 0 || v.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds');
      if (v.byteLength < u + (f || 0)) throw new RangeError('"length" is outside of buffer bounds');
      let A;
      return u === void 0 && f === void 0 ? A = new Uint8Array(v) : f === void 0 ? A = new Uint8Array(v, u) : A = new Uint8Array(v, u, f), Object.setPrototypeOf(A, i.prototype), A;
    }
    function x(v) {
      if (i.isBuffer(v)) {
        const u = _(v.length) | 0, f = s(u);
        return f.length === 0 || v.copy(f, 0, 0, u), f;
      }
      if (v.length !== void 0) return typeof v.length != "number" || lt(v.length) ? s(0) : g(v);
      if (v.type === "Buffer" && Array.isArray(v.data)) return g(v.data);
    }
    function _(v) {
      if (v >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
      return v | 0;
    }
    function y(v) {
      return +v != v && (v = 0), i.alloc(+v);
    }
    i.isBuffer = function(u) {
      return u != null && u._isBuffer === true && u !== i.prototype;
    }, i.compare = function(u, f) {
      if (Be(u, Uint8Array) && (u = i.from(u, u.offset, u.byteLength)), Be(f, Uint8Array) && (f = i.from(f, f.offset, f.byteLength)), !i.isBuffer(u) || !i.isBuffer(f)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (u === f) return 0;
      let A = u.length, I = f.length;
      for (let P = 0, q = Math.min(A, I); P < q; ++P) if (u[P] !== f[P]) {
        A = u[P], I = f[P];
        break;
      }
      return A < I ? -1 : I < A ? 1 : 0;
    }, i.isEncoding = function(u) {
      switch (String(u).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, i.concat = function(u, f) {
      if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (u.length === 0) return i.alloc(0);
      let A;
      if (f === void 0) for (f = 0, A = 0; A < u.length; ++A) f += u[A].length;
      const I = i.allocUnsafe(f);
      let P = 0;
      for (A = 0; A < u.length; ++A) {
        let q = u[A];
        if (Be(q, Uint8Array)) P + q.length > I.length ? (i.isBuffer(q) || (q = i.from(q)), q.copy(I, P)) : Uint8Array.prototype.set.call(I, q, P);
        else if (i.isBuffer(q)) q.copy(I, P);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        P += q.length;
      }
      return I;
    };
    function w(v, u) {
      if (i.isBuffer(v)) return v.length;
      if (ArrayBuffer.isView(v) || Be(v, ArrayBuffer)) return v.byteLength;
      if (typeof v != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof v);
      const f = v.length, A = arguments.length > 2 && arguments[2] === true;
      if (!A && f === 0) return 0;
      let I = false;
      for (; ; ) switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return ct(v).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return vt(v).length;
        default:
          if (I) return A ? -1 : ct(v).length;
          u = ("" + u).toLowerCase(), I = true;
      }
    }
    i.byteLength = w;
    function k(v, u, f) {
      let A = false;
      if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u)) return "";
      for (v || (v = "utf8"); ; ) switch (v) {
        case "hex":
          return O(this, u, f);
        case "utf8":
        case "utf-8":
          return M(this, u, f);
        case "ascii":
          return Z(this, u, f);
        case "latin1":
        case "binary":
          return ae(this, u, f);
        case "base64":
          return U(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return L(this, u, f);
        default:
          if (A) throw new TypeError("Unknown encoding: " + v);
          v = (v + "").toLowerCase(), A = true;
      }
    }
    i.prototype._isBuffer = true;
    function D(v, u, f) {
      const A = v[u];
      v[u] = v[f], v[f] = A;
    }
    i.prototype.swap16 = function() {
      const u = this.length;
      if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let f = 0; f < u; f += 2) D(this, f, f + 1);
      return this;
    }, i.prototype.swap32 = function() {
      const u = this.length;
      if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let f = 0; f < u; f += 4) D(this, f, f + 3), D(this, f + 1, f + 2);
      return this;
    }, i.prototype.swap64 = function() {
      const u = this.length;
      if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let f = 0; f < u; f += 8) D(this, f, f + 7), D(this, f + 1, f + 6), D(this, f + 2, f + 5), D(this, f + 3, f + 4);
      return this;
    }, i.prototype.toString = function() {
      const u = this.length;
      return u === 0 ? "" : arguments.length === 0 ? M(this, 0, u) : k.apply(this, arguments);
    }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(u) {
      if (!i.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
      return this === u ? true : i.compare(this, u) === 0;
    }, i.prototype.inspect = function() {
      let u = "";
      const f = t.INSPECT_MAX_BYTES;
      return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
    }, a && (i.prototype[a] = i.prototype.inspect), i.prototype.compare = function(u, f, A, I, P) {
      if (Be(u, Uint8Array) && (u = i.from(u, u.offset, u.byteLength)), !i.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
      if (f === void 0 && (f = 0), A === void 0 && (A = u ? u.length : 0), I === void 0 && (I = 0), P === void 0 && (P = this.length), f < 0 || A > u.length || I < 0 || P > this.length) throw new RangeError("out of range index");
      if (I >= P && f >= A) return 0;
      if (I >= P) return -1;
      if (f >= A) return 1;
      if (f >>>= 0, A >>>= 0, I >>>= 0, P >>>= 0, this === u) return 0;
      let q = P - I, se = A - f;
      const Ce = Math.min(q, se), Ae = this.slice(I, P), Se = u.slice(f, A);
      for (let ve = 0; ve < Ce; ++ve) if (Ae[ve] !== Se[ve]) {
        q = Ae[ve], se = Se[ve];
        break;
      }
      return q < se ? -1 : se < q ? 1 : 0;
    };
    function S(v, u, f, A, I) {
      if (v.length === 0) return -1;
      if (typeof f == "string" ? (A = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, lt(f) && (f = I ? 0 : v.length - 1), f < 0 && (f = v.length + f), f >= v.length) {
        if (I) return -1;
        f = v.length - 1;
      } else if (f < 0) if (I) f = 0;
      else return -1;
      if (typeof u == "string" && (u = i.from(u, A)), i.isBuffer(u)) return u.length === 0 ? -1 : F(v, u, f, A, I);
      if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? I ? Uint8Array.prototype.indexOf.call(v, u, f) : Uint8Array.prototype.lastIndexOf.call(v, u, f) : F(v, [
        u
      ], f, A, I);
      throw new TypeError("val must be string, number or Buffer");
    }
    function F(v, u, f, A, I) {
      let P = 1, q = v.length, se = u.length;
      if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
        if (v.length < 2 || u.length < 2) return -1;
        P = 2, q /= 2, se /= 2, f /= 2;
      }
      function Ce(Se, ve) {
        return P === 1 ? Se[ve] : Se.readUInt16BE(ve * P);
      }
      let Ae;
      if (I) {
        let Se = -1;
        for (Ae = f; Ae < q; Ae++) if (Ce(v, Ae) === Ce(u, Se === -1 ? 0 : Ae - Se)) {
          if (Se === -1 && (Se = Ae), Ae - Se + 1 === se) return Se * P;
        } else Se !== -1 && (Ae -= Ae - Se), Se = -1;
      } else for (f + se > q && (f = q - se), Ae = f; Ae >= 0; Ae--) {
        let Se = true;
        for (let ve = 0; ve < se; ve++) if (Ce(v, Ae + ve) !== Ce(u, ve)) {
          Se = false;
          break;
        }
        if (Se) return Ae;
      }
      return -1;
    }
    i.prototype.includes = function(u, f, A) {
      return this.indexOf(u, f, A) !== -1;
    }, i.prototype.indexOf = function(u, f, A) {
      return S(this, u, f, A, true);
    }, i.prototype.lastIndexOf = function(u, f, A) {
      return S(this, u, f, A, false);
    };
    function R(v, u, f, A) {
      f = Number(f) || 0;
      const I = v.length - f;
      A ? (A = Number(A), A > I && (A = I)) : A = I;
      const P = u.length;
      A > P / 2 && (A = P / 2);
      let q;
      for (q = 0; q < A; ++q) {
        const se = parseInt(u.substr(q * 2, 2), 16);
        if (lt(se)) return q;
        v[f + q] = se;
      }
      return q;
    }
    function j(v, u, f, A) {
      return Te(ct(u, v.length - f), v, f, A);
    }
    function C(v, u, f, A) {
      return Te(xt(u), v, f, A);
    }
    function T(v, u, f, A) {
      return Te(vt(u), v, f, A);
    }
    function H(v, u, f, A) {
      return Te(ht(u, v.length - f), v, f, A);
    }
    i.prototype.write = function(u, f, A, I) {
      if (f === void 0) I = "utf8", A = this.length, f = 0;
      else if (A === void 0 && typeof f == "string") I = f, A = this.length, f = 0;
      else if (isFinite(f)) f = f >>> 0, isFinite(A) ? (A = A >>> 0, I === void 0 && (I = "utf8")) : (I = A, A = void 0);
      else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      const P = this.length - f;
      if ((A === void 0 || A > P) && (A = P), u.length > 0 && (A < 0 || f < 0) || f > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      I || (I = "utf8");
      let q = false;
      for (; ; ) switch (I) {
        case "hex":
          return R(this, u, f, A);
        case "utf8":
        case "utf-8":
          return j(this, u, f, A);
        case "ascii":
        case "latin1":
        case "binary":
          return C(this, u, f, A);
        case "base64":
          return T(this, u, f, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, u, f, A);
        default:
          if (q) throw new TypeError("Unknown encoding: " + I);
          I = ("" + I).toLowerCase(), q = true;
      }
    }, i.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function U(v, u, f) {
      return u === 0 && f === v.length ? e.fromByteArray(v) : e.fromByteArray(v.slice(u, f));
    }
    function M(v, u, f) {
      f = Math.min(v.length, f);
      const A = [];
      let I = u;
      for (; I < f; ) {
        const P = v[I];
        let q = null, se = P > 239 ? 4 : P > 223 ? 3 : P > 191 ? 2 : 1;
        if (I + se <= f) {
          let Ce, Ae, Se, ve;
          switch (se) {
            case 1:
              P < 128 && (q = P);
              break;
            case 2:
              Ce = v[I + 1], (Ce & 192) === 128 && (ve = (P & 31) << 6 | Ce & 63, ve > 127 && (q = ve));
              break;
            case 3:
              Ce = v[I + 1], Ae = v[I + 2], (Ce & 192) === 128 && (Ae & 192) === 128 && (ve = (P & 15) << 12 | (Ce & 63) << 6 | Ae & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (q = ve));
              break;
            case 4:
              Ce = v[I + 1], Ae = v[I + 2], Se = v[I + 3], (Ce & 192) === 128 && (Ae & 192) === 128 && (Se & 192) === 128 && (ve = (P & 15) << 18 | (Ce & 63) << 12 | (Ae & 63) << 6 | Se & 63, ve > 65535 && ve < 1114112 && (q = ve));
          }
        }
        q === null ? (q = 65533, se = 1) : q > 65535 && (q -= 65536, A.push(q >>> 10 & 1023 | 55296), q = 56320 | q & 1023), A.push(q), I += se;
      }
      return J(A);
    }
    const G = 4096;
    function J(v) {
      const u = v.length;
      if (u <= G) return String.fromCharCode.apply(String, v);
      let f = "", A = 0;
      for (; A < u; ) f += String.fromCharCode.apply(String, v.slice(A, A += G));
      return f;
    }
    function Z(v, u, f) {
      let A = "";
      f = Math.min(v.length, f);
      for (let I = u; I < f; ++I) A += String.fromCharCode(v[I] & 127);
      return A;
    }
    function ae(v, u, f) {
      let A = "";
      f = Math.min(v.length, f);
      for (let I = u; I < f; ++I) A += String.fromCharCode(v[I]);
      return A;
    }
    function O(v, u, f) {
      const A = v.length;
      (!u || u < 0) && (u = 0), (!f || f < 0 || f > A) && (f = A);
      let I = "";
      for (let P = u; P < f; ++P) I += Er[v[P]];
      return I;
    }
    function L(v, u, f) {
      const A = v.slice(u, f);
      let I = "";
      for (let P = 0; P < A.length - 1; P += 2) I += String.fromCharCode(A[P] + A[P + 1] * 256);
      return I;
    }
    i.prototype.slice = function(u, f) {
      const A = this.length;
      u = ~~u, f = f === void 0 ? A : ~~f, u < 0 ? (u += A, u < 0 && (u = 0)) : u > A && (u = A), f < 0 ? (f += A, f < 0 && (f = 0)) : f > A && (f = A), f < u && (f = u);
      const I = this.subarray(u, f);
      return Object.setPrototypeOf(I, i.prototype), I;
    };
    function E(v, u, f) {
      if (v % 1 !== 0 || v < 0) throw new RangeError("offset is not uint");
      if (v + u > f) throw new RangeError("Trying to access beyond buffer length");
    }
    i.prototype.readUintLE = i.prototype.readUIntLE = function(u, f, A) {
      u = u >>> 0, f = f >>> 0, A || E(u, f, this.length);
      let I = this[u], P = 1, q = 0;
      for (; ++q < f && (P *= 256); ) I += this[u + q] * P;
      return I;
    }, i.prototype.readUintBE = i.prototype.readUIntBE = function(u, f, A) {
      u = u >>> 0, f = f >>> 0, A || E(u, f, this.length);
      let I = this[u + --f], P = 1;
      for (; f > 0 && (P *= 256); ) I += this[u + --f] * P;
      return I;
    }, i.prototype.readUint8 = i.prototype.readUInt8 = function(u, f) {
      return u = u >>> 0, f || E(u, 1, this.length), this[u];
    }, i.prototype.readUint16LE = i.prototype.readUInt16LE = function(u, f) {
      return u = u >>> 0, f || E(u, 2, this.length), this[u] | this[u + 1] << 8;
    }, i.prototype.readUint16BE = i.prototype.readUInt16BE = function(u, f) {
      return u = u >>> 0, f || E(u, 2, this.length), this[u] << 8 | this[u + 1];
    }, i.prototype.readUint32LE = i.prototype.readUInt32LE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
    }, i.prototype.readUint32BE = i.prototype.readUInt32BE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
    }, i.prototype.readBigUInt64LE = pt(function(u) {
      u = u >>> 0, de(u, "offset");
      const f = this[u], A = this[u + 7];
      (f === void 0 || A === void 0) && me(u, this.length - 8);
      const I = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, P = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + A * 2 ** 24;
      return BigInt(I) + (BigInt(P) << BigInt(32));
    }), i.prototype.readBigUInt64BE = pt(function(u) {
      u = u >>> 0, de(u, "offset");
      const f = this[u], A = this[u + 7];
      (f === void 0 || A === void 0) && me(u, this.length - 8);
      const I = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], P = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + A;
      return (BigInt(I) << BigInt(32)) + BigInt(P);
    }), i.prototype.readIntLE = function(u, f, A) {
      u = u >>> 0, f = f >>> 0, A || E(u, f, this.length);
      let I = this[u], P = 1, q = 0;
      for (; ++q < f && (P *= 256); ) I += this[u + q] * P;
      return P *= 128, I >= P && (I -= Math.pow(2, 8 * f)), I;
    }, i.prototype.readIntBE = function(u, f, A) {
      u = u >>> 0, f = f >>> 0, A || E(u, f, this.length);
      let I = f, P = 1, q = this[u + --I];
      for (; I > 0 && (P *= 256); ) q += this[u + --I] * P;
      return P *= 128, q >= P && (q -= Math.pow(2, 8 * f)), q;
    }, i.prototype.readInt8 = function(u, f) {
      return u = u >>> 0, f || E(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
    }, i.prototype.readInt16LE = function(u, f) {
      u = u >>> 0, f || E(u, 2, this.length);
      const A = this[u] | this[u + 1] << 8;
      return A & 32768 ? A | 4294901760 : A;
    }, i.prototype.readInt16BE = function(u, f) {
      u = u >>> 0, f || E(u, 2, this.length);
      const A = this[u + 1] | this[u] << 8;
      return A & 32768 ? A | 4294901760 : A;
    }, i.prototype.readInt32LE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
    }, i.prototype.readInt32BE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
    }, i.prototype.readBigInt64LE = pt(function(u) {
      u = u >>> 0, de(u, "offset");
      const f = this[u], A = this[u + 7];
      (f === void 0 || A === void 0) && me(u, this.length - 8);
      const I = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (A << 24);
      return (BigInt(I) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
    }), i.prototype.readBigInt64BE = pt(function(u) {
      u = u >>> 0, de(u, "offset");
      const f = this[u], A = this[u + 7];
      (f === void 0 || A === void 0) && me(u, this.length - 8);
      const I = (f << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
      return (BigInt(I) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + A);
    }), i.prototype.readFloatLE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), r.read(this, u, true, 23, 4);
    }, i.prototype.readFloatBE = function(u, f) {
      return u = u >>> 0, f || E(u, 4, this.length), r.read(this, u, false, 23, 4);
    }, i.prototype.readDoubleLE = function(u, f) {
      return u = u >>> 0, f || E(u, 8, this.length), r.read(this, u, true, 52, 8);
    }, i.prototype.readDoubleBE = function(u, f) {
      return u = u >>> 0, f || E(u, 8, this.length), r.read(this, u, false, 52, 8);
    };
    function B(v, u, f, A, I, P) {
      if (!i.isBuffer(v)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (u > I || u < P) throw new RangeError('"value" argument is out of bounds');
      if (f + A > v.length) throw new RangeError("Index out of range");
    }
    i.prototype.writeUintLE = i.prototype.writeUIntLE = function(u, f, A, I) {
      if (u = +u, f = f >>> 0, A = A >>> 0, !I) {
        const se = Math.pow(2, 8 * A) - 1;
        B(this, u, f, A, se, 0);
      }
      let P = 1, q = 0;
      for (this[f] = u & 255; ++q < A && (P *= 256); ) this[f + q] = u / P & 255;
      return f + A;
    }, i.prototype.writeUintBE = i.prototype.writeUIntBE = function(u, f, A, I) {
      if (u = +u, f = f >>> 0, A = A >>> 0, !I) {
        const se = Math.pow(2, 8 * A) - 1;
        B(this, u, f, A, se, 0);
      }
      let P = A - 1, q = 1;
      for (this[f + P] = u & 255; --P >= 0 && (q *= 256); ) this[f + P] = u / q & 255;
      return f + A;
    }, i.prototype.writeUint8 = i.prototype.writeUInt8 = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
    }, i.prototype.writeUint16LE = i.prototype.writeUInt16LE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
    }, i.prototype.writeUint16BE = i.prototype.writeUInt16BE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
    }, i.prototype.writeUint32LE = i.prototype.writeUInt32LE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
    }, i.prototype.writeUint32BE = i.prototype.writeUInt32BE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
    };
    function z(v, u, f, A, I) {
      ge(u, A, I, v, f, 7);
      let P = Number(u & BigInt(4294967295));
      v[f++] = P, P = P >> 8, v[f++] = P, P = P >> 8, v[f++] = P, P = P >> 8, v[f++] = P;
      let q = Number(u >> BigInt(32) & BigInt(4294967295));
      return v[f++] = q, q = q >> 8, v[f++] = q, q = q >> 8, v[f++] = q, q = q >> 8, v[f++] = q, f;
    }
    function N(v, u, f, A, I) {
      ge(u, A, I, v, f, 7);
      let P = Number(u & BigInt(4294967295));
      v[f + 7] = P, P = P >> 8, v[f + 6] = P, P = P >> 8, v[f + 5] = P, P = P >> 8, v[f + 4] = P;
      let q = Number(u >> BigInt(32) & BigInt(4294967295));
      return v[f + 3] = q, q = q >> 8, v[f + 2] = q, q = q >> 8, v[f + 1] = q, q = q >> 8, v[f] = q, f + 8;
    }
    i.prototype.writeBigUInt64LE = pt(function(u, f = 0) {
      return z(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
    }), i.prototype.writeBigUInt64BE = pt(function(u, f = 0) {
      return N(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
    }), i.prototype.writeIntLE = function(u, f, A, I) {
      if (u = +u, f = f >>> 0, !I) {
        const Ce = Math.pow(2, 8 * A - 1);
        B(this, u, f, A, Ce - 1, -Ce);
      }
      let P = 0, q = 1, se = 0;
      for (this[f] = u & 255; ++P < A && (q *= 256); ) u < 0 && se === 0 && this[f + P - 1] !== 0 && (se = 1), this[f + P] = (u / q >> 0) - se & 255;
      return f + A;
    }, i.prototype.writeIntBE = function(u, f, A, I) {
      if (u = +u, f = f >>> 0, !I) {
        const Ce = Math.pow(2, 8 * A - 1);
        B(this, u, f, A, Ce - 1, -Ce);
      }
      let P = A - 1, q = 1, se = 0;
      for (this[f + P] = u & 255; --P >= 0 && (q *= 256); ) u < 0 && se === 0 && this[f + P + 1] !== 0 && (se = 1), this[f + P] = (u / q >> 0) - se & 255;
      return f + A;
    }, i.prototype.writeInt8 = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
    }, i.prototype.writeInt16LE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
    }, i.prototype.writeInt16BE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
    }, i.prototype.writeInt32LE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
    }, i.prototype.writeInt32BE = function(u, f, A) {
      return u = +u, f = f >>> 0, A || B(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
    }, i.prototype.writeBigInt64LE = pt(function(u, f = 0) {
      return z(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), i.prototype.writeBigInt64BE = pt(function(u, f = 0) {
      return N(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function K(v, u, f, A, I, P) {
      if (f + A > v.length) throw new RangeError("Index out of range");
      if (f < 0) throw new RangeError("Index out of range");
    }
    function W(v, u, f, A, I) {
      return u = +u, f = f >>> 0, I || K(v, u, f, 4), r.write(v, u, f, A, 23, 4), f + 4;
    }
    i.prototype.writeFloatLE = function(u, f, A) {
      return W(this, u, f, true, A);
    }, i.prototype.writeFloatBE = function(u, f, A) {
      return W(this, u, f, false, A);
    };
    function X(v, u, f, A, I) {
      return u = +u, f = f >>> 0, I || K(v, u, f, 8), r.write(v, u, f, A, 52, 8), f + 8;
    }
    i.prototype.writeDoubleLE = function(u, f, A) {
      return X(this, u, f, true, A);
    }, i.prototype.writeDoubleBE = function(u, f, A) {
      return X(this, u, f, false, A);
    }, i.prototype.copy = function(u, f, A, I) {
      if (!i.isBuffer(u)) throw new TypeError("argument should be a Buffer");
      if (A || (A = 0), !I && I !== 0 && (I = this.length), f >= u.length && (f = u.length), f || (f = 0), I > 0 && I < A && (I = A), I === A || u.length === 0 || this.length === 0) return 0;
      if (f < 0) throw new RangeError("targetStart out of bounds");
      if (A < 0 || A >= this.length) throw new RangeError("Index out of range");
      if (I < 0) throw new RangeError("sourceEnd out of bounds");
      I > this.length && (I = this.length), u.length - f < I - A && (I = u.length - f + A);
      const P = I - A;
      return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, A, I) : Uint8Array.prototype.set.call(u, this.subarray(A, I), f), P;
    }, i.prototype.fill = function(u, f, A, I) {
      if (typeof u == "string") {
        if (typeof f == "string" ? (I = f, f = 0, A = this.length) : typeof A == "string" && (I = A, A = this.length), I !== void 0 && typeof I != "string") throw new TypeError("encoding must be a string");
        if (typeof I == "string" && !i.isEncoding(I)) throw new TypeError("Unknown encoding: " + I);
        if (u.length === 1) {
          const q = u.charCodeAt(0);
          (I === "utf8" && q < 128 || I === "latin1") && (u = q);
        }
      } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
      if (f < 0 || this.length < f || this.length < A) throw new RangeError("Out of range index");
      if (A <= f) return this;
      f = f >>> 0, A = A === void 0 ? this.length : A >>> 0, u || (u = 0);
      let P;
      if (typeof u == "number") for (P = f; P < A; ++P) this[P] = u;
      else {
        const q = i.isBuffer(u) ? u : i.from(u, I), se = q.length;
        if (se === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
        for (P = 0; P < A - f; ++P) this[P + f] = q[P % se];
      }
      return this;
    };
    const $ = {};
    function ie(v, u, f) {
      $[v] = class extends f {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: u.apply(this, arguments),
            writable: true,
            configurable: true
          }), this.name = `${this.name} [${v}]`, this.stack, delete this.name;
        }
        get code() {
          return v;
        }
        set code(I) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: I,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${v}]: ${this.message}`;
        }
      };
    }
    ie("ERR_BUFFER_OUT_OF_BOUNDS", function(v) {
      return v ? `${v} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), ie("ERR_INVALID_ARG_TYPE", function(v, u) {
      return `The "${v}" argument must be of type number. Received type ${typeof u}`;
    }, TypeError), ie("ERR_OUT_OF_RANGE", function(v, u, f) {
      let A = `The value of "${v}" is out of range.`, I = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? I = oe(String(f)) : typeof f == "bigint" && (I = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (I = oe(I)), I += "n"), A += ` It must be ${u}. Received ${I}`, A;
    }, RangeError);
    function oe(v) {
      let u = "", f = v.length;
      const A = v[0] === "-" ? 1 : 0;
      for (; f >= A + 4; f -= 3) u = `_${v.slice(f - 3, f)}${u}`;
      return `${v.slice(0, f)}${u}`;
    }
    function ye(v, u, f) {
      de(u, "offset"), (v[u] === void 0 || v[u + f] === void 0) && me(u, v.length - (f + 1));
    }
    function ge(v, u, f, A, I, P) {
      if (v > f || v < u) {
        const q = typeof u == "bigint" ? "n" : "";
        let se;
        throw u === 0 || u === BigInt(0) ? se = `>= 0${q} and < 2${q} ** ${(P + 1) * 8}${q}` : se = `>= -(2${q} ** ${(P + 1) * 8 - 1}${q}) and < 2 ** ${(P + 1) * 8 - 1}${q}`, new $.ERR_OUT_OF_RANGE("value", se, v);
      }
      ye(A, I, P);
    }
    function de(v, u) {
      if (typeof v != "number") throw new $.ERR_INVALID_ARG_TYPE(u, "number", v);
    }
    function me(v, u, f) {
      throw Math.floor(v) !== v ? (de(v, f), new $.ERR_OUT_OF_RANGE("offset", "an integer", v)) : u < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, v);
    }
    const xe = /[^+/0-9A-Za-z-_]/g;
    function be(v) {
      if (v = v.split("=")[0], v = v.trim().replace(xe, ""), v.length < 2) return "";
      for (; v.length % 4 !== 0; ) v = v + "=";
      return v;
    }
    function ct(v, u) {
      u = u || 1 / 0;
      let f;
      const A = v.length;
      let I = null;
      const P = [];
      for (let q = 0; q < A; ++q) {
        if (f = v.charCodeAt(q), f > 55295 && f < 57344) {
          if (!I) {
            if (f > 56319) {
              (u -= 3) > -1 && P.push(239, 191, 189);
              continue;
            } else if (q + 1 === A) {
              (u -= 3) > -1 && P.push(239, 191, 189);
              continue;
            }
            I = f;
            continue;
          }
          if (f < 56320) {
            (u -= 3) > -1 && P.push(239, 191, 189), I = f;
            continue;
          }
          f = (I - 55296 << 10 | f - 56320) + 65536;
        } else I && (u -= 3) > -1 && P.push(239, 191, 189);
        if (I = null, f < 128) {
          if ((u -= 1) < 0) break;
          P.push(f);
        } else if (f < 2048) {
          if ((u -= 2) < 0) break;
          P.push(f >> 6 | 192, f & 63 | 128);
        } else if (f < 65536) {
          if ((u -= 3) < 0) break;
          P.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
        } else if (f < 1114112) {
          if ((u -= 4) < 0) break;
          P.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return P;
    }
    function xt(v) {
      const u = [];
      for (let f = 0; f < v.length; ++f) u.push(v.charCodeAt(f) & 255);
      return u;
    }
    function ht(v, u) {
      let f, A, I;
      const P = [];
      for (let q = 0; q < v.length && !((u -= 2) < 0); ++q) f = v.charCodeAt(q), A = f >> 8, I = f % 256, P.push(I), P.push(A);
      return P;
    }
    function vt(v) {
      return e.toByteArray(be(v));
    }
    function Te(v, u, f, A) {
      let I;
      for (I = 0; I < A && !(I + f >= u.length || I >= v.length); ++I) u[I + f] = v[I];
      return I;
    }
    function Be(v, u) {
      return v instanceof u || v != null && v.constructor != null && v.constructor.name != null && v.constructor.name === u.name;
    }
    function lt(v) {
      return v !== v;
    }
    const Er = function() {
      const v = "0123456789abcdef", u = new Array(256);
      for (let f = 0; f < 16; ++f) {
        const A = f * 16;
        for (let I = 0; I < 16; ++I) u[A + I] = v[f] + v[I];
      }
      return u;
    }();
    function pt(v) {
      return typeof BigInt > "u" ? Mt : v;
    }
    function Mt() {
      throw new Error("BigInt not supported");
    }
  })(La);
  var hc = {
    exports: {}
  }, Fe = hc.exports = {}, _t, At;
  function mn() {
    throw new Error("setTimeout has not been defined");
  }
  function xn() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? _t = setTimeout : _t = mn;
    } catch {
      _t = mn;
    }
    try {
      typeof clearTimeout == "function" ? At = clearTimeout : At = xn;
    } catch {
      At = xn;
    }
  })();
  function pc(t) {
    if (_t === setTimeout) return setTimeout(t, 0);
    if ((_t === mn || !_t) && setTimeout) return _t = setTimeout, setTimeout(t, 0);
    try {
      return _t(t, 0);
    } catch {
      try {
        return _t.call(null, t, 0);
      } catch {
        return _t.call(this, t, 0);
      }
    }
  }
  function _u(t) {
    if (At === clearTimeout) return clearTimeout(t);
    if ((At === xn || !At) && clearTimeout) return At = clearTimeout, clearTimeout(t);
    try {
      return At(t);
    } catch {
      try {
        return At.call(null, t);
      } catch {
        return At.call(this, t);
      }
    }
  }
  var Ot = [], Sr = false, dr, Ia = -1;
  function Au() {
    !Sr || !dr || (Sr = false, dr.length ? Ot = dr.concat(Ot) : Ia = -1, Ot.length && gc());
  }
  function gc() {
    if (!Sr) {
      var t = pc(Au);
      Sr = true;
      for (var e = Ot.length; e; ) {
        for (dr = Ot, Ot = []; ++Ia < e; ) dr && dr[Ia].run();
        Ia = -1, e = Ot.length;
      }
      dr = null, Sr = false, _u(t);
    }
  }
  Fe.nextTick = function(t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    Ot.push(new mc(t, e)), Ot.length === 1 && !Sr && pc(gc);
  };
  function mc(t, e) {
    this.fun = t, this.array = e;
  }
  mc.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  Fe.title = "browser";
  Fe.browser = true;
  Fe.env = {};
  Fe.argv = [];
  Fe.version = "";
  Fe.versions = {};
  function qt() {
  }
  Fe.on = qt;
  Fe.addListener = qt;
  Fe.once = qt;
  Fe.off = qt;
  Fe.removeListener = qt;
  Fe.removeAllListeners = qt;
  Fe.emit = qt;
  Fe.prependListener = qt;
  Fe.prependOnceListener = qt;
  Fe.listeners = function(t) {
    return [];
  };
  Fe.binding = function(t) {
    throw new Error("process.binding is not supported");
  };
  Fe.cwd = function() {
    return "/";
  };
  Fe.chdir = function(t) {
    throw new Error("process.chdir is not supported");
  };
  Fe.umask = function() {
    return 0;
  };
  var ku = hc.exports;
  const Jr = dc(ku);
  var Pn = {
    exports: {}
  }, Dr = typeof Reflect == "object" ? Reflect : null, Di = Dr && typeof Dr.apply == "function" ? Dr.apply : function(e, r, a) {
    return Function.prototype.apply.call(e, r, a);
  }, Fa;
  Dr && typeof Dr.ownKeys == "function" ? Fa = Dr.ownKeys : Object.getOwnPropertySymbols ? Fa = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Fa = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  function Bu(t) {
    console && console.warn && console.warn(t);
  }
  var xc = Number.isNaN || function(e) {
    return e !== e;
  };
  function we() {
    we.init.call(this);
  }
  Pn.exports = we;
  Pn.exports.once = Iu;
  we.EventEmitter = we;
  we.prototype._events = void 0;
  we.prototype._eventsCount = 0;
  we.prototype._maxListeners = void 0;
  var Ii = 10;
  function eo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
  }
  Object.defineProperty(we, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return Ii;
    },
    set: function(t) {
      if (typeof t != "number" || t < 0 || xc(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
      Ii = t;
    }
  });
  we.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  we.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || xc(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  function vc(t) {
    return t._maxListeners === void 0 ? we.defaultMaxListeners : t._maxListeners;
  }
  we.prototype.getMaxListeners = function() {
    return vc(this);
  };
  we.prototype.emit = function(e) {
    for (var r = [], a = 1; a < arguments.length; a++) r.push(arguments[a]);
    var o = e === "error", n = this._events;
    if (n !== void 0) o = o && n.error === void 0;
    else if (!o) return false;
    if (o) {
      var s;
      if (r.length > 0 && (s = r[0]), s instanceof Error) throw s;
      var i = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw i.context = s, i;
    }
    var l = n[e];
    if (l === void 0) return false;
    if (typeof l == "function") Di(l, this, r);
    else for (var c = l.length, d = _c(l, c), a = 0; a < c; ++a) Di(d[a], this, r);
    return true;
  };
  function bc(t, e, r, a) {
    var o, n, s;
    if (eo(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), n = t._events), s = n[e]), s === void 0) s = n[e] = r, ++t._eventsCount;
    else if (typeof s == "function" ? s = n[e] = a ? [
      r,
      s
    ] : [
      s,
      r
    ] : a ? s.unshift(r) : s.push(r), o = vc(t), o > 0 && s.length > o && !s.warned) {
      s.warned = true;
      var i = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      i.name = "MaxListenersExceededWarning", i.emitter = t, i.type = e, i.count = s.length, Bu(i);
    }
    return t;
  }
  we.prototype.addListener = function(e, r) {
    return bc(this, e, r, false);
  };
  we.prototype.on = we.prototype.addListener;
  we.prototype.prependListener = function(e, r) {
    return bc(this, e, r, true);
  };
  function Cu() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function wc(t, e, r) {
    var a = {
      fired: false,
      wrapFn: void 0,
      target: t,
      type: e,
      listener: r
    }, o = Cu.bind(a);
    return o.listener = r, a.wrapFn = o, o;
  }
  we.prototype.once = function(e, r) {
    return eo(r), this.on(e, wc(this, e, r)), this;
  };
  we.prototype.prependOnceListener = function(e, r) {
    return eo(r), this.prependListener(e, wc(this, e, r)), this;
  };
  we.prototype.removeListener = function(e, r) {
    var a, o, n, s, i;
    if (eo(r), o = this._events, o === void 0) return this;
    if (a = o[e], a === void 0) return this;
    if (a === r || a.listener === r) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, a.listener || r));
    else if (typeof a != "function") {
      for (n = -1, s = a.length - 1; s >= 0; s--) if (a[s] === r || a[s].listener === r) {
        i = a[s].listener, n = s;
        break;
      }
      if (n < 0) return this;
      n === 0 ? a.shift() : Su(a, n), a.length === 1 && (o[e] = a[0]), o.removeListener !== void 0 && this.emit("removeListener", e, i || r);
    }
    return this;
  };
  we.prototype.off = we.prototype.removeListener;
  we.prototype.removeAllListeners = function(e) {
    var r, a, o;
    if (a = this._events, a === void 0) return this;
    if (a.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : a[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete a[e]), this;
    if (arguments.length === 0) {
      var n = Object.keys(a), s;
      for (o = 0; o < n.length; ++o) s = n[o], s !== "removeListener" && this.removeAllListeners(s);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (r = a[e], typeof r == "function") this.removeListener(e, r);
    else if (r !== void 0) for (o = r.length - 1; o >= 0; o--) this.removeListener(e, r[o]);
    return this;
  };
  function yc(t, e, r) {
    var a = t._events;
    if (a === void 0) return [];
    var o = a[e];
    return o === void 0 ? [] : typeof o == "function" ? r ? [
      o.listener || o
    ] : [
      o
    ] : r ? Du(o) : _c(o, o.length);
  }
  we.prototype.listeners = function(e) {
    return yc(this, e, true);
  };
  we.prototype.rawListeners = function(e) {
    return yc(this, e, false);
  };
  we.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ec.call(t, e);
  };
  we.prototype.listenerCount = Ec;
  function Ec(t) {
    var e = this._events;
    if (e !== void 0) {
      var r = e[t];
      if (typeof r == "function") return 1;
      if (r !== void 0) return r.length;
    }
    return 0;
  }
  we.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Fa(this._events) : [];
  };
  function _c(t, e) {
    for (var r = new Array(e), a = 0; a < e; ++a) r[a] = t[a];
    return r;
  }
  function Su(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop();
  }
  function Du(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
    return e;
  }
  function Iu(t, e) {
    return new Promise(function(r, a) {
      function o(s) {
        t.removeListener(e, n), a(s);
      }
      function n() {
        typeof t.removeListener == "function" && t.removeListener("error", o), r([].slice.call(arguments));
      }
      Ac(t, e, n, {
        once: true
      }), e !== "error" && Fu(t, o, {
        once: true
      });
    });
  }
  function Fu(t, e, r) {
    typeof t.on == "function" && Ac(t, "error", e, r);
  }
  function Ac(t, e, r, a) {
    if (typeof t.on == "function") a.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function o(n) {
      a.once && t.removeEventListener(e, o), r(n);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
  }
  var Fi = Pn.exports;
  typeof window < "u" ? (window.Buffer = La.Buffer, window.process = Jr, window.global = window, window.EventEmitter = Fi.EventEmitter) : (globalThis.window = globalThis, globalThis.Buffer = La.Buffer, globalThis.process = Jr, globalThis.global = globalThis, globalThis.EventEmitter = Fi.EventEmitter);
  Jr.env || (Jr.env = {});
  Jr.browser = true;
  let zu, Ru, zi, Tu, Nu;
  zu = function() {
    const e = typeof document < "u" && document.createElement("link").relList;
    return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload";
  }();
  Ru = function(t, e) {
    return new URL(t, e).href;
  };
  zi = {};
  et = function(e, r, a) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      const s = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.allSettled(r.map((c) => {
        if (c = Ru(c, a), c in zi) return;
        zi[c] = true;
        const d = c.endsWith(".css"), h = d ? '[rel="stylesheet"]' : "";
        if (!!a) for (let m = s.length - 1; m >= 0; m--) {
          const b = s[m];
          if (b.href === c && (!d || b.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${h}`)) return;
        const g = document.createElement("link");
        if (g.rel = d ? "stylesheet" : zu, d || (g.as = "script"), g.crossOrigin = "", g.href = c, l && g.setAttribute("nonce", l), document.head.appendChild(g), d) return new Promise((m, b) => {
          g.addEventListener("load", m), g.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function n(s) {
      const i = new Event("vite:preloadError", {
        cancelable: true
      });
      if (i.payload = s, window.dispatchEvent(i), !i.defaultPrevented) throw s;
    }
    return o.then((s) => {
      for (const i of s || []) i.status === "rejected" && n(i.reason);
      return e().catch(n);
    });
  };
  Tu = (t) => t / 2 ** 32 | 0;
  Nu = (t) => t >>> 0;
  function Ou(t, e, r, a) {
    const o = Tu(r), n = Nu(r);
    t.setUint32(e, a ? n : o, a), t.setUint32(e + 4, a ? o : n, a);
  }
  function vn(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in t && t.BYTES_PER_ELEMENT === 1;
  }
  const bn = (t) => t ? `"${t}" ` : "";
  function Pt(t, e = "") {
    if (typeof t != "number") throw new TypeError(bn(e) + "expected number, got " + typeof t);
    if (!Number.isSafeInteger(t) || t < 0) throw new RangeError(bn(e) + "expected integer >= 0, got " + t);
    return t;
  }
  function Ut(t, e, r = "") {
    if (vn(t) && (e === void 0 || t.length === e)) return t;
    e !== void 0 && Pt(e, "length");
    const a = vn(t), o = e !== void 0 ? ` of length ${e}` : "", n = a ? `length=${t.length}` : `type=${typeof t}`, s = bn(r) + "expected Uint8Array" + o + ", got " + n;
    throw a ? new RangeError(s) : new TypeError(s);
  }
  function to(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new TypeError("expected hash wrapped by utils.createHasher");
    if (Pt(t.outputLen), Pt(t.blockLen), t.outputLen < 1 || t.blockLen < 1) throw new Error("hash blockLen / outputLen must be >= 1");
  }
  const Lu = (t, e) => {
    if (t === null || typeof t != "object" || Array.isArray(t)) throw new TypeError((e === "object" ? "" : `"${e}" `) + "expected object, got type=" + typeof t);
  }, Ri = (t, e) => {
    Lu(t, e);
    const r = Object.getPrototypeOf(t);
    if (r !== Object.prototype && r !== null) throw new TypeError(`"${e}" expected plain object`);
    if (Object.hasOwn(t, "__proto__")) throw new TypeError(`"${e}.__proto__" is not allowed`);
  };
  function Pa(t, e = true) {
    if (t.destroyed) throw new Error("hash was destroyed");
    if (e && t.finished) throw new Error("digest() was already called");
  }
  function kc(t, e) {
    Ut(t, void 0, "output");
    const r = e.outputLen;
    if (!(t.length >= r)) throw new RangeError('"output" expected length >= ' + r);
  }
  function fr(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function vo(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function bt(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Bc = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Pu = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function Un(t) {
    if (Ut(t), Bc) return t.toHex();
    let e = "";
    for (let r = 0; r < t.length; r++) e += Pu[t[r]];
    return e;
  }
  function Ti(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : void 0;
  }
  function Cc(t) {
    if (typeof t != "string") throw new TypeError("hex string expected, got " + typeof t);
    if (Bc) try {
      return Uint8Array.fromHex(t);
    } catch (o) {
      throw o instanceof SyntaxError ? new RangeError(o.message) : o;
    }
    const e = t.length, r = e / 2;
    if (e % 2) throw new RangeError("hex string expected, got unpadded hex of length " + e);
    const a = new Uint8Array(r);
    for (let o = 0, n = 0; o < r; o++, n += 2) {
      const s = Ti(t.charCodeAt(n)), i = Ti(t.charCodeAt(n + 1));
      if (s === void 0 || i === void 0) {
        const l = t[n] + t[n + 1];
        throw new RangeError('hex string expected, got non-hex character "' + l + '" at index ' + n);
      }
      a[o] = s * 16 + i;
    }
    return a;
  }
  function Uu(...t) {
    let e = 0;
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      Ut(o), e += o.length;
    }
    const r = new Uint8Array(e);
    for (let a = 0, o = 0; a < t.length; a++) {
      const n = t[a];
      r.set(n, o), o += n.length;
    }
    return r;
  }
  function ju(t, e, r = "opts") {
    return Ri(t, "defaults"), e !== void 0 && Ri(e, r), Object.assign(/* @__PURE__ */ Object.create(null), t, e);
  }
  function Hu(t, e = {}) {
    if (typeof t != "function") throw new TypeError('"hashCons" expected function, got type=' + typeof t);
    e = ju({}, e, "info");
    const r = (o, n) => t(n).update(o).digest(), a = t(void 0);
    return r.outputLen = a.outputLen, r.blockLen = a.blockLen, r.canXOF = a.canXOF, r.create = (o) => t(o), Object.assign(r, e), Object.freeze(r);
  }
  function qu(t = 32) {
    Pt(t, "bytesLength");
    const e = typeof globalThis == "object" ? globalThis.crypto : null;
    if (typeof (e == null ? void 0 : e.getRandomValues) != "function") throw new Error("crypto.getRandomValues must be defined");
    if (t > 65536) throw new RangeError(`"bytesLength" expected <= 65536, got ${t}`);
    return e.getRandomValues(new Uint8Array(t));
  }
  const $u = (t) => ({
    oid: Uint8Array.from([
      6,
      9,
      96,
      134,
      72,
      1,
      101,
      3,
      4,
      2,
      t
    ])
  });
  function Mu(t, e, r) {
    return t & e ^ ~t & r;
  }
  function Wu(t, e, r) {
    return t & e ^ t & r ^ e & r;
  }
  let Vu = class {
    constructor(e, r, a, o) {
      __publicField(this, "blockLen");
      __publicField(this, "outputLen");
      __publicField(this, "canXOF", false);
      __publicField(this, "padOffset");
      __publicField(this, "isLE");
      __publicField(this, "buffer");
      __publicField(this, "view");
      __publicField(this, "finished", false);
      __publicField(this, "length", 0);
      __publicField(this, "pos", 0);
      __publicField(this, "destroyed", false);
      this.blockLen = e, this.outputLen = r, this.padOffset = a, this.isLE = o, this.buffer = new Uint8Array(e), this.view = vo(this.buffer);
    }
    update(e) {
      Pa(this), Ut(e);
      const { view: r, buffer: a, blockLen: o } = this, n = e.length;
      let s = false;
      for (let i = 0; i < n; ) {
        const l = Math.min(o - this.pos, n - i);
        if (l === o) {
          const c = vo(e);
          for (; o <= n - i; i += o) this.process(c, i);
          s = true;
          continue;
        }
        a.set(i === 0 && l === n ? e : e.subarray(i, i + l), this.pos), this.pos += l, i += l, this.pos === o && (this.process(r, 0), this.pos = 0, s = true);
      }
      return this.length += e.length, s && this.roundClean(), this;
    }
    digestInto(e) {
      Pa(this), kc(e, this), this.finished = true;
      const { buffer: r, view: a, blockLen: o, isLE: n } = this;
      let { pos: s } = this;
      r[s++] = 128, r.fill(0, s), this.padOffset > o - s && (this.process(a, 0), r.fill(0)), Ou(a, o - 8, this.length * 8, n), this.process(a, 0), this.roundClean();
      const i = e === r ? a : vo(e), l = this.outputLen, c = l / 4, d = this.get();
      if (l % 4 || c > d.length) throw new Error("invalid outputLen");
      for (let h = 0; h < c; h++) i.setUint32(4 * h, d[h], n);
    }
    digest() {
      const { buffer: e, outputLen: r } = this;
      this.digestInto(e);
      const a = e.slice(0, r);
      return this.destroy(), a;
    }
    _cloneIntoMeta(e) {
      const { buffer: r, length: a, finished: o, destroyed: n, pos: s } = this;
      return e.destroyed = n, e.finished = o, e.length = a, e.pos = s, s && e.buffer.set(r), e;
    }
    clone() {
      return this._cloneInto();
    }
  };
  const Ku = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), Gu = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), Vt = new Uint32Array(64);
  class Yu extends Vu {
    constructor(e, r) {
      super(64, e, 8, false);
      __publicField(this, "A", 0);
      __publicField(this, "B", 0);
      __publicField(this, "C", 0);
      __publicField(this, "D", 0);
      __publicField(this, "E", 0);
      __publicField(this, "F", 0);
      __publicField(this, "G", 0);
      __publicField(this, "H", 0);
      this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0, this.E = r[4] | 0, this.F = r[5] | 0, this.G = r[6] | 0, this.H = r[7] | 0;
    }
    get() {
      const { A: e, B: r, C: a, D: o, E: n, F: s, G: i, H: l } = this;
      return [
        e,
        r,
        a,
        o,
        n,
        s,
        i,
        l
      ];
    }
    set(e, r, a, o, n, s, i, l) {
      this.A = e | 0, this.B = r | 0, this.C = a | 0, this.D = o | 0, this.E = n | 0, this.F = s | 0, this.G = i | 0, this.H = l | 0;
    }
    _cloneInto(e) {
      return (e || (e = new this.constructor())).set(...this.get()), this._cloneIntoMeta(e);
    }
    process(e, r) {
      for (let h = 0; h < 16; h++, r += 4) Vt[h] = e.getUint32(r, false);
      for (let h = 16; h < 64; h++) {
        const p = Vt[h - 15], g = Vt[h - 2], m = bt(p, 7) ^ bt(p, 18) ^ p >>> 3, b = bt(g, 17) ^ bt(g, 19) ^ g >>> 10;
        Vt[h] = b + Vt[h - 7] + m + Vt[h - 16] | 0;
      }
      let { A: a, B: o, C: n, D: s, E: i, F: l, G: c, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const p = bt(i, 6) ^ bt(i, 11) ^ bt(i, 25), g = d + p + Mu(i, l, c) + Gu[h] + Vt[h] | 0, b = (bt(a, 2) ^ bt(a, 13) ^ bt(a, 22)) + Wu(a, o, n) | 0;
        d = c, c = l, l = i, i = s + g | 0, s = n, n = o, o = a, a = g + b | 0;
      }
      a = a + this.A | 0, o = o + this.B | 0, n = n + this.C | 0, s = s + this.D | 0, i = i + this.E | 0, l = l + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(a, o, n, s, i, l, c, d);
    }
    roundClean() {
      fr(Vt);
    }
    destroy() {
      this.destroyed = true, this.set(0, 0, 0, 0, 0, 0, 0, 0), fr(this.buffer);
    }
  }
  class Xu extends Yu {
    constructor() {
      super(32, Ku);
    }
  }
  let Zu;
  Ke = Hu(() => new Xu(), $u(1));
  Zu = (t) => Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
  function Sc(t) {
    try {
      const e = new URL(t), r = e.pathname.replace(/\/+$/, "");
      return `${e.protocol}//${e.host}${r === "/" ? "" : r}`;
    } catch {
      return t.replace(/\/+$/, "");
    }
  }
  function Dc(t) {
    return t.mode === "managed" ? t.v3AuthMode === "direct-token" ? "cloud-direct" : "cloud-delegated" : t.mode === "self-hosted" ? "self-hosted" : t.nodeKey && /stashcloud\.net/i.test(t.nodeKey) ? "cloud-delegated" : t.nodeKey ? "self-hosted" : "unknown";
  }
  function la(t) {
    return t === "cloud-delegated" || t === "cloud-direct";
  }
  function wn(t) {
    return Zu(Ke(new TextEncoder().encode(JSON.stringify(t))));
  }
  function jn(t) {
    const e = Sc(t.nodeKey);
    return {
      network: t.network,
      connectionMode: Dc({
        mode: t.mode,
        v3NodeId: t.nodeId,
        v3AuthMode: t.v3AuthMode,
        nodeKey: e
      }),
      nodeKey: e,
      nodeId: t.nodeId ?? "",
      credentialFingerprint: t.credentialFingerprint
    };
  }
  function jt(t) {
    return [
      "v1",
      t.connectionMode,
      t.network,
      t.nodeKey,
      t.nodeId,
      t.credentialFingerprint.slice(0, 32)
    ].join("|");
  }
  function Ic(t) {
    const e = t.lastIndexOf("|");
    return e <= 0 ? {
      nodeKey: t,
      network: ""
    } : {
      nodeKey: t.slice(0, e),
      network: t.slice(e + 1)
    };
  }
  function Fc(t, e = "legacy-unbound") {
    const { nodeKey: r, network: a } = Ic(t);
    return jn({
      network: a || "unknown",
      nodeKey: r,
      credentialFingerprint: e
    });
  }
  let or = 0, yn = new AbortController();
  class Ir extends Error {
    constructor() {
      super("node GET paused during mutation"), this.name = "NodeIoPausedError";
    }
  }
  Qr = function() {
    return or > 0;
  };
  um = function(t) {
    return t instanceof Ir || t instanceof DOMException && t.name === "AbortError" ? true : t instanceof Error && t.name === "AbortError";
  };
  function Ju() {
    or += 1, or === 1 && (yn.abort(), yn = new AbortController());
  }
  function Qu() {
    or = Math.max(0, or - 1), or === 0 && typeof window < "u" && window.dispatchEvent(new Event("wallet-node-mutation-settled"));
  }
  function bo() {
    if (or > 0) throw new Ir();
  }
  function Ni() {
    if (or > 0) {
      const t = new AbortController();
      return t.abort(), t.signal;
    }
    return yn.signal;
  }
  Je = function() {
    return ua() ? false : typeof chrome < "u" && typeof chrome.runtime < "u" && typeof chrome.runtime.id == "string" && chrome.runtime.id.length > 0;
  };
  ua = function() {
    var _a2;
    return typeof window > "u" ? false : !!((_a2 = window.Capacitor) == null ? void 0 : _a2.isNativePlatform());
  };
  dm = function() {
    return ua() && window.Capacitor.getPlatform() === "ios";
  };
  fm = function() {
    return ua() && window.Capacitor.getPlatform() === "android";
  };
  hm = function() {
    return Je() ? chrome.runtime.getURL("/") : "/";
  };
  const ed = "stash_webcrypto_keys", td = 1, Tr = "keys", En = "secure_idb_master_key", tr = "_stash_idb_mk";
  function zc() {
    return new Promise((t, e) => {
      const r = indexedDB.open(ed, td);
      r.onupgradeneeded = () => {
        r.result.objectStoreNames.contains(Tr) || r.result.createObjectStore(Tr);
      }, r.onsuccess = () => t(r.result), r.onerror = () => e(r.error);
    });
  }
  async function Oi() {
    const t = await zc();
    return new Promise((e, r) => {
      const o = t.transaction(Tr, "readonly").objectStore(Tr).get(En);
      o.onsuccess = () => {
        t.close(), e(o.result);
      }, o.onerror = () => {
        t.close(), r(o.error);
      };
    });
  }
  async function Rc() {
    var _a2;
    if (ua()) try {
      const { Preferences: t } = await et(async () => {
        const { Preferences: r } = await import("./index-CTOvEu-B.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          Preferences: r
        };
      }, [], import.meta.url), { value: e } = await t.get({
        key: tr
      });
      return e;
    } catch {
      return null;
    }
    return Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.local) ? (await chrome.storage.local.get(tr))[tr] ?? null : localStorage.getItem(tr);
  }
  async function rd() {
    var _a2;
    if (ua()) {
      try {
        const { Preferences: t } = await et(async () => {
          const { Preferences: e } = await import("./index-CTOvEu-B.js").then(async (m) => {
            await m.__tla;
            return m;
          });
          return {
            Preferences: e
          };
        }, [], import.meta.url);
        await t.remove({
          key: tr
        });
      } catch {
      }
      try {
        localStorage.removeItem(tr);
      } catch {
      }
      return;
    }
    if (Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.local)) {
      await chrome.storage.local.remove(tr);
      return;
    }
    localStorage.removeItem(tr);
  }
  let $r;
  async function Tc() {
    return $r || ($r = (async () => {
      const t = await Oi();
      if (t) return t;
      const e = await crypto.subtle.generateKey({
        name: "AES-GCM",
        length: 256
      }, false, [
        "encrypt",
        "decrypt"
      ]), r = await zc();
      try {
        await new Promise((o, n) => {
          const s = r.transaction(Tr, "readwrite"), i = s.objectStore(Tr), l = i.get(En);
          l.onsuccess = () => {
            l.result || i.put(e, En);
          }, l.onerror = () => n(l.error), s.oncomplete = () => o(), s.onabort = () => n(s.error ?? new Error("Secure IDB key transaction aborted")), s.onerror = () => n(s.error);
        });
      } finally {
        r.close();
      }
      const a = await Oi();
      if (!a) throw new Error("Secure IDB master key unavailable");
      return a;
    })().finally(() => {
      $r = void 0;
    }), $r);
  }
  function ad(t) {
    let e = "";
    for (let r = 0; r < t.byteLength; r++) e += String.fromCharCode(t[r]);
    return btoa(e);
  }
  function od(t) {
    const e = atob(t), r = new Uint8Array(e.length);
    for (let a = 0; a < e.length; a++) r[a] = e.charCodeAt(a);
    return r;
  }
  async function Nc(t) {
    const e = await Tc(), r = crypto.getRandomValues(new Uint8Array(12)), a = new TextEncoder().encode(t), o = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: r
    }, e, a), n = new Uint8Array(r.byteLength + o.byteLength);
    return n.set(r, 0), n.set(new Uint8Array(o), r.byteLength), `v2:${ad(n)}`;
  }
  async function Oc(t) {
    if (!t.startsWith("v2:")) return null;
    try {
      const e = await Tc(), r = od(t.slice(3));
      if (r.byteLength < 13) return null;
      const a = r.slice(0, 12), o = r.slice(12), n = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: a
      }, e, o);
      return new TextDecoder().decode(n);
    } catch {
      return null;
    }
  }
  const Hn = 6e4, vr = 1e4, Lc = 24 * 60 * 60 * 1e3, Pc = 60 * 60 * 1e3, qn = 1, ue = {
    balances: "balances",
    contracts: "contracts",
    payments: "payments",
    utxos: "utxos",
    channels: "channels",
    address: "address",
    node: "node",
    all: "all"
  }, nd = "stash_wallet_cache_v1", id = 1, dt = "entries", He = "revisions", Nr = "security", _n = "stash_cache_notify_v1";
  function sd() {
    return new Promise((t, e) => {
      if (typeof indexedDB > "u") {
        e(new Error("IndexedDB unavailable"));
        return;
      }
      const r = indexedDB.open(nd, id);
      r.onupgradeneeded = () => {
        const a = r.result;
        a.objectStoreNames.contains(dt) || a.createObjectStore(dt), a.objectStoreNames.contains(He) || a.createObjectStore(He);
      }, r.onsuccess = () => t(r.result), r.onerror = () => e(r.error), r.onblocked = () => e(new Error("Cache database upgrade blocked"));
    });
  }
  function sr(t) {
    return new Promise((e, r) => {
      t.oncomplete = () => e(), t.onabort = () => r(t.error ?? new Error("Cache transaction aborted")), t.onerror = () => r(t.error);
    });
  }
  async function cr(t) {
    const e = await sd();
    try {
      return await t(e);
    } finally {
      e.close();
    }
  }
  async function Ua(t) {
    return cr(async (e) => {
      const r = e.transaction(He, "readonly"), a = r.objectStore(He), o = a.get(Nr), n = a.get(t);
      return await sr(r), {
        security: typeof o.result == "number" ? o.result : 0,
        data: typeof n.result == "number" ? n.result : 0
      };
    });
  }
  async function $n() {
    return cr(async (t) => {
      const e = t.transaction(He, "readwrite"), r = e.objectStore(He), a = r.get(Nr);
      return await new Promise((n, s) => {
        a.onsuccess = () => {
          const i = (typeof a.result == "number" ? a.result : 0) + 1;
          r.put(i, Nr), n();
        }, a.onerror = () => s(a.error);
      }), await sr(e), (await Ua("unused")).security;
    });
  }
  async function cd(t) {
    return cr(async (e) => {
      const r = e.transaction(He, "readwrite"), a = r.objectStore(He);
      let o = 1;
      const n = a.get(t);
      return await new Promise((s, i) => {
        n.onsuccess = () => {
          o = (typeof n.result == "number" ? n.result : 0) + 1, a.put(o, t), s();
        }, n.onerror = () => i(n.error);
      }), await sr(r), o;
    });
  }
  function ja(t, e) {
    return `${t}::${e}`;
  }
  async function Mn(t, e) {
    return cr(async (r) => {
      const a = r.transaction([
        dt,
        He
      ], "readonly"), o = a.objectStore(dt).get(ja(t, e)), n = a.objectStore(He).get(Nr), s = a.objectStore(He).get(t);
      await sr(a);
      const i = {
        security: typeof n.result == "number" ? n.result : 0,
        data: typeof s.result == "number" ? s.result : 0
      }, l = o.result;
      return !l || l.schema !== qn || l.revision !== i.data || l.securityRevision !== i.security ? null : {
        entry: l,
        revisions: i
      };
    });
  }
  async function Wn(t) {
    const e = await Oc(t.ciphertext);
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  async function Uc(t, e, r, a, o, n) {
    const s = await Nc(JSON.stringify(r));
    return cr(async (i) => {
      const l = i.transaction([
        dt,
        He
      ], "readwrite"), c = l.objectStore(He), d = l.objectStore(dt);
      let h = false;
      const p = c.get(t), g = c.get(Nr);
      return await new Promise((m, b) => {
        let x = 2, _ = 0, y = 0;
        const w = () => {
          if (x -= 1, x > 0) return;
          if (_ !== o) {
            m();
            return;
          }
          if (n !== void 0 && y !== n) {
            m();
            return;
          }
          const k = {
            schema: qn,
            namespace: t,
            name: e,
            fetchedAt: a,
            ciphertext: s,
            revision: o,
            securityRevision: y
          };
          d.put(k, ja(t, e)), h = true, m();
        };
        p.onsuccess = () => {
          _ = typeof p.result == "number" ? p.result : 0, w();
        }, g.onsuccess = () => {
          y = typeof g.result == "number" ? g.result : 0, w();
        }, p.onerror = () => b(p.error), g.onerror = () => b(g.error);
      }), await sr(l), h;
    });
  }
  async function ld(t) {
    await cr(async (e) => {
      const r = e.transaction(dt, "readwrite"), a = r.objectStore(dt), o = a.getAllKeys();
      await new Promise((n, s) => {
        o.onsuccess = () => {
          for (const i of o.result) typeof i == "string" && i.startsWith(t) && a.delete(i);
          n();
        }, o.onerror = () => s(o.error);
      }), await sr(r);
    });
  }
  async function ud() {
    await cr(async (t) => {
      const e = t.transaction([
        dt,
        He
      ], "readwrite");
      e.objectStore(dt).clear(), e.objectStore(He).clear(), await sr(e);
    });
  }
  async function dd(t, e, r, a) {
    return cr(async (o) => {
      const n = o.transaction([
        dt,
        He
      ], "readwrite"), s = sr(n), i = n.objectStore(dt), l = n.objectStore(He), c = i.get(ja(t, e)), d = l.get(Nr), h = l.get(t);
      let p = false;
      return await new Promise((g, m) => {
        let b = 3;
        const x = () => {
          if (--b) return;
          const _ = c.result;
          _ && (d.result ?? 0) === a.security && (h.result ?? 0) === a.data && _.securityRevision === a.security && _.revision === a.data && (i.put({
            ..._,
            lastCheckedAt: r
          }, ja(t, e)), p = true), g();
        };
        for (const _ of [
          c,
          d,
          h
        ]) _.onsuccess = x, _.onerror = () => m(_.error);
      }), await s, p;
    });
  }
  const Ha = /* @__PURE__ */ new Set();
  let wa = null, Li = false, Vn = 0;
  function jc() {
    return typeof BroadcastChannel > "u" ? null : (wa || (wa = new BroadcastChannel("stash-wallet-cache-v1"), wa.onmessage = (t) => {
      const e = t.data;
      if (!(!e || typeof e.stamp != "number") && e.stamp !== Vn) for (const r of Ha) r(e);
    }), wa);
  }
  function fd() {
    var _a2;
    if (!Li) {
      try {
        if (!Je() || typeof chrome > "u" || !((_a2 = chrome.storage) == null ? void 0 : _a2.onChanged)) return;
      } catch {
        return;
      }
      Li = true, chrome.storage.onChanged.addListener((t, e) => {
        if (e !== "local" || !t[_n]) return;
        const r = t[_n].newValue;
        if (!(!r || typeof r.stamp != "number") && r.stamp !== Vn) for (const a of Ha) a(r);
      });
    }
  }
  function Hc(t) {
    return Ha.add(t), jc(), fd(), () => {
      Ha.delete(t);
    };
  }
  async function Hr(t) {
    var _a2, _b;
    const e = {
      ...t,
      stamp: t.stamp ?? Date.now()
    };
    Vn = e.stamp, (_a2 = jc()) == null ? void 0 : _a2.postMessage(e);
    try {
      Je() && typeof chrome < "u" && ((_b = chrome.storage) == null ? void 0 : _b.local) && await chrome.storage.local.set({
        [_n]: e
      });
    } catch {
    }
  }
  const ke = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Set();
  let Pe = 0, Or = 0;
  function mt() {
    return Or;
  }
  let da = "security";
  function hd() {
    return da;
  }
  let kn = null, ft = false;
  const pd = "__display_home_balance__";
  function qc(t, e, r) {
    return r ? `${t}|${e}|${r}` : `${t}|${e}`;
  }
  function Ct() {
    for (const t of An) t();
  }
  function yt(t, e, r, a, o, n = "fresh") {
    return {
      data: t,
      fetchedAt: e,
      updatedAt: e,
      source: r,
      fromCache: a,
      verification: o,
      freshness: n
    };
  }
  async function qa(t, e) {
    if (!la(e)) return null;
    if (!kn) throw new Error("Cloud authority resolver unavailable");
    return kn(t);
  }
  async function Pi(t, e) {
    var _a2;
    return (_a2 = await qa(t, e.connectionMode)) == null ? void 0 : _a2.binding;
  }
  function Kn(t, e) {
    return e ?? Fc(t);
  }
  function Bn(t) {
    kn = t;
  }
  function $c(t) {
    return An.add(t), () => {
      An.delete(t);
    };
  }
  function ea() {
    da = "security", Pe += 1, Or += 1, ke.clear(), Ue.clear(), Ct();
  }
  async function gd(t, e) {
    da = "mutation";
    for (const r of [
      ...ke.keys()
    ]) r.startsWith(`${t}|`) && ke.delete(r);
    for (const r of [
      ...Ue.keys()
    ]) r.startsWith(`${t}|`) && Ue.delete(r);
    Pe += 1, Or += 1;
    try {
      await cd(t), await ld(`${t}::`);
    } catch {
      ft = true;
    }
    Ct(), await Hr({
      reason: "node-data",
      namespace: t,
      nodeKey: e
    });
  }
  Hc((t) => {
    if (t.reason === "authority") {
      Pe += 1, ke.clear(), Ue.clear(), Ct();
      return;
    }
    if (da = t.reason === "mutation" || t.reason === "node-data" ? "mutation" : "security", t.reason === "security" || t.reason === "clear") {
      ea();
      return;
    }
    if (t.namespace) {
      for (const e of [
        ...ke.keys()
      ]) e.startsWith(`${t.namespace}|`) && ke.delete(e);
      for (const e of [
        ...Ue.keys()
      ]) e.startsWith(`${t.namespace}|`) && Ue.delete(e);
      Pe += 1, Or += 1, Ct();
      return;
    }
    if (t.nodeKey) {
      const e = t.nodeKey.replace(/\/+$/, "");
      for (const r of [
        ...ke.keys()
      ]) r.includes(e) && ke.delete(r);
      for (const r of [
        ...Ue.keys()
      ]) r.includes(e) && Ue.delete(r);
      Pe += 1, Or += 1, Ct();
      return;
    }
    ea();
  });
  async function Gn(t, e, r, a = {}, o) {
    if ((a.mode ?? "authorized") === "transaction") {
      if (Qr()) throw new Ir();
      const S = await r();
      return yt(S, Date.now(), "network", false, "none");
    }
    const s = Kn(t, o), i = jt(s), l = la(s.connectionMode), c = l ? Math.min(a.ttlMs ?? vr, vr) : a.ttlMs ?? Hn, d = a.force === true, h = Pe;
    let p = null;
    if (l && (p = await qa(t, s.connectionMode), h !== Pe)) throw new Error("Cache context changed");
    const g = qc(i, e, p == null ? void 0 : p.binding), m = async (S, F) => {
      try {
        const R = await S.promise;
        if (h !== Pe || p && S.binding !== p.binding) throw new Error(l ? "Cloud cache context changed" : "Cache context changed");
        const j = ke.get(g);
        return yt(R, (j == null ? void 0 : j.fetchedAt) ?? Date.now(), "network", false, "authorized");
      } catch (R) {
        if (!l && F) return yt(F.data, F.fetchedAt, F.source, true, "authorized", "stale");
        throw R;
      }
    }, b = Ue.get(g);
    if (b) return m(b, null);
    let x = null;
    const _ = ke.get(g);
    _ && (!p || _.binding === p.binding && Date.now() < (_.expiresAt ?? 0)) ? x = {
      data: _.data,
      fetchedAt: _.fetchedAt,
      source: "memory"
    } : l || (x = await Mc(i, e, g, p, l));
    const y = x && Date.now() - x.fetchedAt < c && (!p || Date.now() < p.expiresAt);
    if (Qr()) {
      if (l) {
        if (y && x) return yt(x.data, x.fetchedAt, x.source, true, "authorized");
        throw new Ir();
      }
      if (x) return yt(x.data, x.fetchedAt, x.source, true, "authorized", "stale");
      throw new Ir();
    }
    if (!d && y && x) return yt(x.data, x.fetchedAt, x.source, true, "authorized");
    const w = Ue.get(g);
    if (w) return m(w, x);
    const k = Ui(i), D = Promise.resolve().then(async () => {
      const S = await k;
      if (h !== Pe) throw new Error(l ? "Cloud cache context changed" : "Cache context changed");
      const F = await r();
      if (h !== Pe) throw new Error(l ? "Cloud cache context changed" : "Cache context changed");
      if (l) {
        const C = await qa(t, s.connectionMode);
        if (!C || C.binding !== (p == null ? void 0 : p.binding) || Date.now() >= C.expiresAt) throw new Error("Cloud cache context changed");
        const T = Date.now();
        return ke.set(g, {
          data: F,
          fetchedAt: T,
          binding: C.binding,
          expiresAt: C.expiresAt,
          namespace: i,
          securityRevision: S.security,
          dataRevision: S.data
        }), md(), Ct(), F;
      }
      const R = await Ui(i);
      if (R.security !== S.security || R.data !== S.data) throw new Error("Cache context changed");
      const j = Date.now();
      if (ke.set(g, {
        data: F,
        fetchedAt: j,
        namespace: i,
        securityRevision: S.security,
        dataRevision: S.data
      }), !ft) try {
        await Uc(i, e, F, j, S.data, S.security);
      } catch {
        ft = true;
      }
      return Ct(), F;
    }).catch(async (S) => {
      throw l && h === Pe && (ke.delete(g), Ct()), S;
    }).finally(() => {
      var _a2;
      ((_a2 = Ue.get(g)) == null ? void 0 : _a2.promise) === D && Ue.delete(g);
    });
    Ue.set(g, {
      promise: D,
      securityRevision: 0,
      dataRevision: 0,
      binding: p == null ? void 0 : p.binding
    });
    try {
      const S = await D;
      if (h !== Pe) throw new Error(l ? "Cloud cache context changed" : "Cache context changed");
      const F = ke.get(g);
      return yt(S, (F == null ? void 0 : F.fetchedAt) ?? Date.now(), "network", false, "authorized");
    } catch (S) {
      if (l || h !== Pe) throw S;
      if (x) return yt(x.data, x.fetchedAt, x.source, true, "authorized", "stale");
      throw S;
    }
  }
  async function Ui(t) {
    try {
      return await Ua(t);
    } catch {
      return ft = true, {
        security: Pe,
        data: Pe
      };
    }
  }
  async function Mc(t, e, r, a, o) {
    const n = ke.get(r);
    if (n) if (a && (n.binding !== a.binding || Date.now() >= (n.expiresAt ?? 0))) ke.delete(r);
    else return {
      data: n.data,
      fetchedAt: n.fetchedAt,
      source: "memory"
    };
    if (o || ft) return null;
    try {
      const s = await Mn(t, e);
      if (!s) return null;
      const i = await Wn(s.entry);
      return i == null ? null : (ke.set(r, {
        data: i,
        fetchedAt: s.entry.fetchedAt,
        namespace: t,
        securityRevision: s.revisions.security,
        dataRevision: s.revisions.data
      }), {
        data: i,
        fetchedAt: s.entry.fetchedAt,
        source: "storage"
      });
    } catch {
      return ft = true, null;
    }
  }
  function md() {
    const t = Date.now();
    for (const [e, r] of ke) r.binding && t - r.fetchedAt >= vr && ke.delete(e);
    ke.size >= 128 && ke.delete(ke.keys().next().value);
  }
  async function Wc(t, e, r) {
    const a = Kn(t, r), o = jt(a), n = la(a.connectionMode);
    let s = null;
    if (n) try {
      s = await qa(t, a.connectionMode);
    } catch {
      return null;
    }
    const i = qc(o, e, s == null ? void 0 : s.binding), l = await Mc(o, e, i, s, n);
    return !l || n && !(Date.now() - l.fetchedAt < vr && s && Date.now() < s.expiresAt) ? null : yt(l.data, l.fetchedAt, l.source, true, "authorized");
  }
  async function Vc(t, e) {
    const r = Kn(t, e);
    la(r.connectionMode) && await Yn(), await gd(jt(r), r.nodeKey);
  }
  async function Kc(t) {
    da = "mutation";
    const e = t.replace(/\/+$/, "");
    for (const r of [
      ...ke.keys()
    ]) r.includes(e) && ke.delete(r);
    for (const r of [
      ...Ue.keys()
    ]) r.includes(e) && Ue.delete(r);
    Pe += 1, Or += 1;
    try {
      await $n();
    } catch {
      ft = true;
    }
    Ct(), await Hr({
      reason: "mutation",
      nodeKey: e
    });
  }
  async function Yn() {
    Pe += 1;
    for (const [t, e] of ke) e.binding && ke.delete(t);
    for (const [t, e] of Ue) e.binding && Ue.delete(t);
    Ct(), await Hr({
      reason: "authority"
    });
  }
  fa = async function() {
    ea();
    try {
      await $n(), await ud(), ft = false;
    } catch {
      ft = true;
    }
    await Hr({
      reason: "clear"
    });
  };
  function Gc() {
    Yn();
  }
  function xd(t) {
    if (!t || typeof t != "object") return false;
    const e = t;
    return [
      e.lightningSats,
      e.spendableSats,
      e.rgbLockedSats
    ].every((r) => Number.isSafeInteger(r) && r >= 0) && Number.isSafeInteger(e.updatedAt) && e.updatedAt > 0 && e.updatedAt <= Date.now() && Date.now() - e.updatedAt <= Pc;
  }
  async function Yc(t) {
    if (ft) return null;
    const e = jt(t);
    try {
      const r = await Mn(e, pd);
      if (!r) return null;
      const a = await Wn(r.entry);
      return xd(a) ? yt(a, a.updatedAt, "historical-display", true, "local-identity", "stale") : null;
    } catch {
      return null;
    }
  }
  $a = function() {
    ea(), (async () => {
      try {
        await $n(), ft = false;
      } catch {
        ft = true;
      }
      await Hr({
        reason: "security"
      });
    })();
  };
  const vd = {
    ttlMs: Hn,
    cloudTtlMs: vr,
    persistence: "encrypted",
    invalidateTags: [
      ue.all
    ]
  }, qe = {
    ...vd,
    persistence: "memory",
    dropOnForcedFailure: true
  }, Xc = {
    balances: {
      ...qe,
      invalidateTags: [
        ue.balances,
        ue.all
      ]
    },
    contracts: {
      ...qe,
      invalidateTags: [
        ue.contracts,
        ue.all
      ]
    },
    spendableSats: {
      ...qe,
      invalidateTags: [
        ue.balances,
        ue.utxos,
        ue.all
      ]
    },
    rgbLockedSats: {
      ...qe,
      invalidateTags: [
        ue.balances,
        ue.utxos,
        ue.all
      ]
    },
    rgbBalanceBreakdown: {
      ...qe,
      invalidateTags: [
        ue.balances,
        ue.utxos,
        ue.all
      ]
    },
    payments: {
      ...qe,
      invalidateTags: [
        ue.payments,
        ue.all
      ]
    },
    address: {
      ...qe,
      invalidateTags: [
        ue.address,
        ue.all
      ]
    },
    descriptor: {
      ...qe,
      invalidateTags: [
        ue.node,
        ue.all
      ]
    },
    readyz: {
      ...qe,
      ttlMs: 15e3,
      invalidateTags: [
        ue.node,
        ue.all
      ]
    },
    channels: {
      ...qe,
      invalidateTags: [
        ue.channels,
        ue.all
      ]
    },
    channelsClosing: {
      ...qe,
      invalidateTags: [
        ue.channels,
        ue.all
      ]
    },
    peers: {
      ...qe,
      invalidateTags: [
        ue.node,
        ue.all
      ]
    },
    nodeId: {
      ttlMs: Lc,
      cloudTtlMs: vr,
      persistence: "encrypted",
      invalidateTags: [
        ue.node,
        ue.all
      ]
    },
    rgbUtxosSummary: {
      ...qe,
      invalidateTags: [
        ue.utxos,
        ue.all
      ]
    },
    rgbUtxosDetail: {
      ...qe,
      invalidateTags: [
        ue.utxos,
        ue.all
      ]
    },
    walletUtxos: {
      ...qe,
      invalidateTags: [
        ue.utxos,
        ue.all
      ]
    },
    rgbOnchainPayments: {
      ...qe,
      invalidateTags: [
        ue.payments,
        ue.all
      ]
    }
  }, Zc = 60 * 6e4, Ma = 6e4;
  class za extends Error {
    constructor() {
      super("Display commit rejected");
    }
  }
  const nr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map();
  let Cn = false, Sn, er, ji = mt();
  function Jc(t) {
    return t in Xc || t.startsWith("contractBalance_");
  }
  const ro = (t, e) => `${jt(t)}::${e}`;
  function Qc(t, e) {
    return {
      data: t.data,
      fetchedAt: t.dataUpdatedAt,
      updatedAt: t.dataUpdatedAt,
      dataUpdatedAt: t.dataUpdatedAt,
      lastCheckedAt: t.lastCheckedAt,
      source: e,
      verification: "local-identity",
      freshness: "stale",
      fromCache: e !== "network"
    };
  }
  function bd() {
    typeof window < "u" && window.dispatchEvent(new Event("wallet-display-cache-updated"));
  }
  $c(() => {
    const t = mt();
    t !== ji && (ji = t, nr.clear(), Lr.clear(), er && clearTimeout(er), er = void 0, typeof window < "u" && window.dispatchEvent(new CustomEvent("wallet-display-cache-invalidated", {
      detail: {
        reason: hd()
      }
    })));
  });
  async function Xn(t, e) {
    const r = mt(), a = ro(t, e);
    let o;
    try {
      const n = await Mn(jt(t), `display:${e}`);
      n || nr.delete(a), n && (o = await Wn(n.entry) ?? void 0, o && n.entry.lastCheckedAt && (o = {
        ...o,
        lastCheckedAt: n.entry.lastCheckedAt
      }));
    } catch {
    }
    return r !== mt() ? null : !o || !Number.isFinite(o.lastCheckedAt) || o.lastCheckedAt > Date.now() || Date.now() - o.lastCheckedAt >= Zc ? (nr.delete(a), null) : (nr.set(a, o), Qc(o, "historical-display"));
  }
  function ao() {
    if (er && clearTimeout(er), er = void 0, !Cn) return;
    const t = [
      ...Lr.values()
    ].filter((r) => r.name !== "address" && !r.running && (!Sn || Sn.has(r.name)));
    if (!t.length) return;
    const e = Math.min(...t.map((r) => r.nextCheck));
    er = setTimeout(() => {
      if (er = void 0, !!Cn) {
        for (const r of t) r.nextCheck <= Date.now() && Lr.get(ro(r.identity, r.name)) === r && tl(r).catch(() => {
        });
        ao();
      }
    }, Math.max(1, e - Date.now()));
  }
  el = function(t, e) {
    Cn = t, Sn = e ? new Set(e) : void 0, ao();
  };
  async function tl(t) {
    if (t.running) return t.running;
    const e = mt(), r = ro(t.identity, t.name), a = (async () => {
      if (Qr()) throw new Ir();
      const o = await Ua(jt(t.identity)), n = await Pi(t.scope, t.identity);
      if (e !== mt()) throw new Error("Display context changed");
      const s = await Gn(t.scope, t.name, t.fetcher, {
        mode: "transaction"
      }, t.identity), i = await Pi(t.scope, t.identity);
      if (n !== i || e !== mt()) throw new za();
      const l = nr.get(r), c = l && JSON.stringify(l.data) === JSON.stringify(s.data), d = Date.now(), h = {
        data: c ? l.data : s.data,
        dataUpdatedAt: c ? l.dataUpdatedAt : d,
        lastCheckedAt: d
      }, p = jt(t.identity), g = c ? await dd(p, `display:${t.name}`, d, o) : await Uc(p, `display:${t.name}`, h, h.dataUpdatedAt, o.data, o.security), m = await Ua(p);
      if (!g || m.security !== o.security || m.data !== o.data || e !== mt()) throw new za();
      return nr.set(r, h), t.failures = 0, t.nextCheck = d + Ma, c || bd(), Qc(h, "network");
    })().catch(async (o) => {
      o instanceof za && nr.delete(r);
      const n = o && typeof o == "object" && "status" in o ? o.status : void 0;
      throw (n === 401 || n === 403 || n === 410) && await fa(), t.failures += 1, t.nextCheck = Date.now() + Math.min(Ma * 2 ** t.failures, 15 * 6e4), o;
    }).finally(() => {
      t.running = void 0, ao();
    });
    return t.running = a, a;
  }
  async function rl(t, e, r, a, o = false) {
    if (!Jc(e)) throw new Error("Resource is not a display projection");
    const n = mt(), s = await Xn(r, e);
    if (n !== mt()) throw new Error("Display context changed");
    const i = ro(r, e);
    let l = Lr.get(i);
    if (l ? l.fetcher = a : (l = {
      scope: t,
      name: e,
      identity: r,
      fetcher: a,
      failures: 0,
      nextCheck: (s == null ? void 0 : s.lastCheckedAt) ? s.lastCheckedAt + Ma : Date.now()
    }, Lr.set(i, l)), s && !o) return ao(), s;
    try {
      return await tl(l);
    } catch (c) {
      if (n !== mt() || !s || c instanceof za) throw c;
      return {
        ...s,
        error: c
      };
    }
  }
  function wd() {
    ea(), el(false), nr.clear(), Lr.clear();
  }
  const yd = Object.freeze(Object.defineProperty({
    __proto__: null,
    DISPLAY_MAX_AGE_MS: Zc,
    DISPLAY_REFRESH_MS: Ma,
    isDisplayResource: Jc,
    peekDisplay: Xn,
    readDisplay: rl,
    setDisplayRefreshActive: el,
    suspendDisplayCache: wd
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var Pr;
  (function(t) {
    t.Unimplemented = "UNIMPLEMENTED", t.Unavailable = "UNAVAILABLE";
  })(Pr || (Pr = {}));
  class wo extends Error {
    constructor(e, r, a) {
      super(e), this.message = e, this.code = r, this.data = a;
    }
  }
  let Ed, _d, Ad;
  Ed = (t) => {
    var e, r;
    return (t == null ? void 0 : t.androidBridge) ? "android" : !((r = (e = t == null ? void 0 : t.webkit) === null || e === void 0 ? void 0 : e.messageHandlers) === null || r === void 0) && r.bridge ? "ios" : "web";
  };
  _d = (t) => {
    const e = t.CapacitorCustomPlatform || null, r = t.Capacitor || {}, a = r.Plugins = r.Plugins || {}, o = () => e !== null ? e.name : Ed(t), n = () => o() !== "web", s = (h) => {
      const p = c.get(h);
      return !!((p == null ? void 0 : p.platforms.has(o())) || i(h));
    }, i = (h) => {
      var p;
      return (p = r.PluginHeaders) === null || p === void 0 ? void 0 : p.find((g) => g.name === h);
    }, l = (h) => t.console.error(h), c = /* @__PURE__ */ new Map(), d = (h, p = {}) => {
      const g = c.get(h);
      if (g) return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`), g.proxy;
      const m = o(), b = i(h);
      let x;
      const _ = async () => (!x && m in p ? x = typeof p[m] == "function" ? x = await p[m]() : x = p[m] : e !== null && !x && "web" in p && (x = typeof p.web == "function" ? x = await p.web() : x = p.web), x), y = (R, j) => {
        var C, T;
        if (b) {
          const H = b == null ? void 0 : b.methods.find((U) => j === U.name);
          if (H) return H.rtype === "promise" ? (U) => r.nativePromise(h, j.toString(), U) : (U, M) => r.nativeCallback(h, j.toString(), U, M);
          if (R) return (C = R[j]) === null || C === void 0 ? void 0 : C.bind(R);
        } else {
          if (R) return (T = R[j]) === null || T === void 0 ? void 0 : T.bind(R);
          throw new wo(`"${h}" plugin is not implemented on ${m}`, Pr.Unimplemented);
        }
      }, w = (R) => {
        let j;
        const C = (...T) => {
          const H = _().then((U) => {
            const M = y(U, R);
            if (M) {
              const G = M(...T);
              return j = G == null ? void 0 : G.remove, G;
            } else throw new wo(`"${h}.${R}()" is not implemented on ${m}`, Pr.Unimplemented);
          });
          return R === "addListener" && (H.remove = async () => j()), H;
        };
        return C.toString = () => `${R.toString()}() { [capacitor code] }`, Object.defineProperty(C, "name", {
          value: R,
          writable: false,
          configurable: false
        }), C;
      }, k = w("addListener"), D = w("removeListener"), S = (R, j) => {
        const C = k({
          eventName: R
        }, j), T = async () => {
          const U = await C;
          D({
            eventName: R,
            callbackId: U
          }, j);
        }, H = new Promise((U) => C.then(() => U({
          remove: T
        })));
        return H.remove = async () => {
          console.warn("Using addListener() without 'await' is deprecated."), await T();
        }, H;
      }, F = new Proxy({}, {
        get(R, j) {
          switch (j) {
            case "$$typeof":
              return;
            case "toJSON":
              return () => ({});
            case "addListener":
              return b ? S : k;
            case "removeListener":
              return D;
            default:
              return w(j);
          }
        }
      });
      return a[h] = F, c.set(h, {
        name: h,
        proxy: F,
        platforms: /* @__PURE__ */ new Set([
          ...Object.keys(p),
          ...b ? [
            m
          ] : []
        ])
      }), F;
    };
    return r.convertFileSrc || (r.convertFileSrc = (h) => h), r.getPlatform = o, r.handleError = l, r.isNativePlatform = n, r.isPluginAvailable = s, r.registerPlugin = d, r.Exception = wo, r.DEBUG = !!r.DEBUG, r.isLoggingEnabled = !!r.isLoggingEnabled, r;
  };
  Ad = (t) => t.Capacitor = _d(t);
  Lt = Ad(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {});
  ha = Lt.registerPlugin;
  Zn = class {
    constructor() {
      this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {};
    }
    addListener(e, r) {
      let a = false;
      this.listeners[e] || (this.listeners[e] = [], a = true), this.listeners[e].push(r);
      const n = this.windowListeners[e];
      n && !n.registered && this.addWindowListener(n), a && this.sendRetainedArgumentsForEvent(e);
      const s = async () => this.removeListener(e, r);
      return Promise.resolve({
        remove: s
      });
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const e in this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
      this.windowListeners = {};
    }
    notifyListeners(e, r, a) {
      const o = this.listeners[e];
      if (!o) {
        if (a) {
          let n = this.retainedEventArguments[e];
          n || (n = []), n.push(r), this.retainedEventArguments[e] = n;
        }
        return;
      }
      o.forEach((n) => n(r));
    }
    hasListeners(e) {
      var r;
      return !!(!((r = this.listeners[e]) === null || r === void 0) && r.length);
    }
    registerWindowListener(e, r) {
      this.windowListeners[r] = {
        registered: false,
        windowEventName: e,
        pluginEventName: r,
        handler: (a) => {
          this.notifyListeners(r, a);
        }
      };
    }
    unimplemented(e = "not implemented") {
      return new Lt.Exception(e, Pr.Unimplemented);
    }
    unavailable(e = "not available") {
      return new Lt.Exception(e, Pr.Unavailable);
    }
    async removeListener(e, r) {
      const a = this.listeners[e];
      if (!a) return;
      const o = a.indexOf(r);
      this.listeners[e].splice(o, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e]);
    }
    addWindowListener(e) {
      window.addEventListener(e.windowEventName, e.handler), e.registered = true;
    }
    removeWindowListener(e) {
      e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = false);
    }
    sendRetainedArgumentsForEvent(e) {
      const r = this.retainedEventArguments[e];
      r && (delete this.retainedEventArguments[e], r.forEach((a) => {
        this.notifyListeners(e, a);
      }));
    }
  };
  const Hi = (t) => encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), qi = (t) => t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  class kd extends Zn {
    async getCookies() {
      const e = document.cookie, r = {};
      return e.split(";").forEach((a) => {
        if (a.length <= 0) return;
        let [o, n] = a.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        o = qi(o).trim(), n = qi(n).trim(), r[o] = n;
      }), r;
    }
    async setCookie(e) {
      try {
        const r = Hi(e.key), a = Hi(e.value), o = e.expires ? `; expires=${e.expires.replace("expires=", "")}` : "", n = (e.path || "/").replace("path=", ""), s = e.url != null && e.url.length > 0 ? `domain=${e.url}` : "";
        document.cookie = `${r}=${a || ""}${o}; path=${n}; ${s};`;
      } catch (r) {
        return Promise.reject(r);
      }
    }
    async deleteCookie(e) {
      try {
        document.cookie = `${e.key}=; Max-Age=0`;
      } catch (r) {
        return Promise.reject(r);
      }
    }
    async clearCookies() {
      try {
        const e = document.cookie.split(";") || [];
        for (const r of e) document.cookie = r.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    async clearAllCookies() {
      try {
        await this.clearCookies();
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
  ha("CapacitorCookies", {
    web: () => new kd()
  });
  let Bd, Cd, Sd;
  Bd = async (t) => new Promise((e, r) => {
    const a = new FileReader();
    a.onload = () => {
      const o = a.result;
      e(o.indexOf(",") >= 0 ? o.split(",")[1] : o);
    }, a.onerror = (o) => r(o), a.readAsDataURL(t);
  });
  Cd = (t = {}) => {
    const e = Object.keys(t);
    return Object.keys(t).map((o) => o.toLocaleLowerCase()).reduce((o, n, s) => (o[n] = t[e[s]], o), {});
  };
  Sd = (t, e = true) => t ? Object.entries(t).reduce((a, o) => {
    const [n, s] = o;
    let i, l;
    return Array.isArray(s) ? (l = "", s.forEach((c) => {
      i = e ? encodeURIComponent(c) : c, l += `${n}=${i}&`;
    }), l.slice(0, -1)) : (i = e ? encodeURIComponent(s) : s, l = `${n}=${i}`), `${a}&${l}`;
  }, "").substr(1) : null;
  Dd = (t, e = {}) => {
    const r = Object.assign({
      method: t.method || "GET",
      headers: t.headers
    }, e), o = Cd(t.headers)["content-type"] || "";
    if (typeof t.data == "string") r.body = t.data;
    else if (o.includes("application/x-www-form-urlencoded")) {
      const n = new URLSearchParams();
      for (const [s, i] of Object.entries(t.data || {})) n.set(s, i);
      r.body = n.toString();
    } else if (o.includes("multipart/form-data") || t.data instanceof FormData) {
      const n = new FormData();
      if (t.data instanceof FormData) t.data.forEach((i, l) => {
        n.append(l, i);
      });
      else for (const i of Object.keys(t.data)) n.append(i, t.data[i]);
      r.body = n;
      const s = new Headers(r.headers);
      s.delete("content-type"), r.headers = s;
    } else (o.includes("application/json") || typeof t.data == "object") && (r.body = JSON.stringify(t.data));
    return r;
  };
  class Id extends Zn {
    async request(e) {
      const r = Dd(e, e.webFetchExtra), a = Sd(e.params, e.shouldEncodeUrlParams), o = a ? `${e.url}?${a}` : e.url, n = await fetch(o, r), s = n.headers.get("content-type") || "";
      let { responseType: i = "text" } = n.ok ? e : {};
      s.includes("application/json") && (i = "json");
      let l, c;
      switch (i) {
        case "arraybuffer":
        case "blob":
          c = await n.blob(), l = await Bd(c);
          break;
        case "json":
          l = await n.json();
          break;
        case "document":
        case "text":
        default:
          l = await n.text();
      }
      const d = {};
      return n.headers.forEach((h, p) => {
        d[p] = h;
      }), {
        data: l,
        headers: d,
        status: n.status,
        url: n.url
      };
    }
    async get(e) {
      return this.request(Object.assign(Object.assign({}, e), {
        method: "GET"
      }));
    }
    async post(e) {
      return this.request(Object.assign(Object.assign({}, e), {
        method: "POST"
      }));
    }
    async put(e) {
      return this.request(Object.assign(Object.assign({}, e), {
        method: "PUT"
      }));
    }
    async patch(e) {
      return this.request(Object.assign(Object.assign({}, e), {
        method: "PATCH"
      }));
    }
    async delete(e) {
      return this.request(Object.assign(Object.assign({}, e), {
        method: "DELETE"
      }));
    }
  }
  pm = ha("CapacitorHttp", {
    web: () => new Id()
  });
  var $i;
  (function(t) {
    t.Dark = "DARK", t.Light = "LIGHT", t.Default = "DEFAULT";
  })($i || ($i = {}));
  var Mi;
  (function(t) {
    t.StatusBar = "StatusBar", t.NavigationBar = "NavigationBar";
  })(Mi || (Mi = {}));
  class Fd extends Zn {
    async setStyle() {
      this.unavailable("not available for web");
    }
    async setAnimation() {
      this.unavailable("not available for web");
    }
    async show() {
      this.unavailable("not available for web");
    }
    async hide() {
      this.unavailable("not available for web");
    }
  }
  ha("SystemBars", {
    web: () => new Fd()
  });
  const al = "0123456789abcdefABCDEF";
  al.split("").map((t) => t.codePointAt(0));
  Array(256).fill(true).map((t, e) => {
    const r = String.fromCodePoint(e), a = al.indexOf(r);
    return a < 0 ? void 0 : a < 16 ? a : a - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  const ol = 0, nl = 1, il = 2, sl = 3, zd = 4, Rd = 5, Td = 6, Nd = 7, Od = {
    [ol.toString()]: "Expected Private",
    [nl.toString()]: "Expected Point",
    [il.toString()]: "Expected Tweak",
    [sl.toString()]: "Expected Hash",
    [zd.toString()]: "Expected Signature",
    [Rd.toString()]: "Expected Extra Data (32 bytes)",
    [Td.toString()]: "Expected Parity (1 | 0)",
    [Nd.toString()]: "Bad Recovery Id"
  };
  function pa(t) {
    const e = Od[t.toString()] || `Unknow error code: ${t}`;
    throw new TypeError(e);
  }
  const cl = 32, ll = 33, Jn = 65, Qn = 32, ul = 32, dl = 32, Ld = 32, fl = 64, Pd = new Uint8Array(32), hl = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]);
  function oo(t) {
    return t instanceof Uint8Array;
  }
  function Dn(t, e) {
    for (let r = 0; r < 32; ++r) if (t[r] !== e[r]) return t[r] < e[r] ? -1 : 1;
    return 0;
  }
  function pl(t) {
    return oo(t) && t.length === cl && Dn(t, Pd) > 0 && Dn(t, hl) < 0;
  }
  function Ud(t) {
    return oo(t) && (t.length === ll || t.length === Jn || t.length === Qn);
  }
  function jd(t) {
    return oo(t) && t.length === ul && Dn(t, hl) < 0;
  }
  function Hd(t) {
    return oo(t) && t.length === dl;
  }
  function gl(t) {
    pl(t) || pa(ol);
  }
  function qd(t) {
    Ud(t) || pa(nl);
  }
  function $d(t) {
    jd(t) || pa(il);
  }
  function Md(t) {
    Hd(t) || pa(sl);
  }
  const Wd = "" + new URL("secp256k1-2IQOMy_D.wasm", import.meta.url).href, Vd = async (t = {}, e) => {
    let r;
    if (e.startsWith("data:")) {
      const a = e.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(a, "base64");
      else if (typeof atob == "function") {
        const n = atob(a);
        o = new Uint8Array(n.length);
        for (let s = 0; s < n.length; s++) o[s] = n.charCodeAt(s);
      } else throw new Error("Cannot decode base64-encoded data URL");
      r = await WebAssembly.instantiate(o, t);
    } else {
      const a = await fetch(e), o = a.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(a, t);
      else {
        const n = await a.arrayBuffer();
        r = await WebAssembly.instantiate(n, t);
      }
    }
    return r.instance.exports;
  };
  function Kd() {
    const t = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(t), t;
  }
  function Gd() {
    const t = Kd();
    return (t[0] << 3 * 8) + (t[1] << 2 * 8) + (t[2] << 1 * 8) + t[3];
  }
  URL = globalThis.URL;
  const pe = await Vd({
    "./rand.js": {
      generateInt32: Gd
    },
    "./validate_error.js": {
      throwError: pa
    }
  }, Wd), Yd = pe.memory, Xd = pe.initializeContext, Zd = pe.isPoint, Jd = pe.PUBLIC_KEY_INPUT, Qd = pe.pointAdd, ef = pe.PUBLIC_KEY_INPUT2, tf = pe.pointAddScalar, rf = pe.TWEAK_INPUT, af = pe.xOnlyPointAddTweak, of = pe.X_ONLY_PUBLIC_KEY_INPUT, nf = pe.xOnlyPointAddTweakCheck, sf = pe.X_ONLY_PUBLIC_KEY_INPUT2, cf = pe.pointCompress, lf = pe.pointFromScalar, uf = pe.PRIVATE_INPUT, df = pe.xOnlyPointFromScalar, ff = pe.xOnlyPointFromPoint, hf = pe.pointMultiply, pf = pe.privateAdd, gf = pe.privateSub, mf = pe.privateNegate, xf = pe.sign, vf = pe.HASH_INPUT, bf = pe.EXTRA_DATA_INPUT, wf = pe.SIGNATURE_INPUT, yf = pe.signRecoverable, Ef = pe.signSchnorr, _f = pe.verify, Af = pe.recover, kf = pe.verifySchnorr, Bf = pe.rustsecp256k1_v0_8_1_default_error_callback_fn, Cf = pe.rustsecp256k1_v0_8_1_default_illegal_callback_fn, Sf = pe.__data_end, Df = pe.__heap_base, st = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: bf,
    HASH_INPUT: vf,
    PRIVATE_INPUT: uf,
    PUBLIC_KEY_INPUT: Jd,
    PUBLIC_KEY_INPUT2: ef,
    SIGNATURE_INPUT: wf,
    TWEAK_INPUT: rf,
    X_ONLY_PUBLIC_KEY_INPUT: of,
    X_ONLY_PUBLIC_KEY_INPUT2: sf,
    __data_end: Sf,
    __heap_base: Df,
    initializeContext: Xd,
    isPoint: Zd,
    memory: Yd,
    pointAdd: Qd,
    pointAddScalar: tf,
    pointCompress: cf,
    pointFromScalar: lf,
    pointMultiply: hf,
    privateAdd: pf,
    privateNegate: mf,
    privateSub: gf,
    recover: Af,
    rustsecp256k1_v0_8_1_default_error_callback_fn: Bf,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: Cf,
    sign: xf,
    signRecoverable: yf,
    signSchnorr: Ef,
    verify: _f,
    verifySchnorr: kf,
    xOnlyPointAddTweak: af,
    xOnlyPointAddTweakCheck: nf,
    xOnlyPointFromPoint: ff,
    xOnlyPointFromScalar: df
  }, Symbol.toStringTag, {
    value: "Module"
  })), $t = new Uint8Array(st.memory.buffer), Wi = st.PRIVATE_INPUT.value, Vi = st.PUBLIC_KEY_INPUT.value, Ki = st.PUBLIC_KEY_INPUT2.value, Gi = st.X_ONLY_PUBLIC_KEY_INPUT.value, Yi = st.X_ONLY_PUBLIC_KEY_INPUT2.value, Xi = st.TWEAK_INPUT.value, Zi = st.HASH_INPUT.value, Ji = st.EXTRA_DATA_INPUT.value, Qi = st.SIGNATURE_INPUT.value, Wa = $t.subarray(Wi, Wi + cl), Gr = $t.subarray(Vi, Vi + Jn);
  $t.subarray(Ki, Ki + Jn);
  $t.subarray(Gi, Gi + Qn);
  $t.subarray(Yi, Yi + Qn);
  const es = $t.subarray(Xi, Xi + ul), ts = $t.subarray(Zi, Zi + dl), gm = $t.subarray(Ji, Ji + Ld), rs = $t.subarray(Qi, Qi + fl);
  function ml(t, e) {
    return ll;
  }
  function xl(t) {
    return pl(t);
  }
  zt = function(t, e) {
    gl(t);
    const r = ml();
    try {
      return Wa.set(t), st.pointFromScalar(r) === 1 ? Gr.slice(0, r) : null;
    } finally {
      Wa.fill(0), Gr.fill(0);
    }
  };
  function If(t, e, r) {
    qd(t), $d(e);
    const a = ml();
    try {
      return Gr.set(t), es.set(e), st.pointMultiply(t.length, a) === 1 ? Gr.slice(0, a) : null;
    } finally {
      Gr.fill(0), es.fill(0);
    }
  }
  vl = function(t, e, r) {
    Md(t), gl(e);
    try {
      return ts.set(t), Wa.set(e), st.sign(r === void 0 ? 0 : 1), rs.slice(0, fl);
    } finally {
      ts.fill(0), Wa.fill(0), rs.fill(0);
    }
  };
  var bl = {
    exports: {}
  };
  function Ff(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var yo = {
    exports: {}
  };
  const zf = {}, Rf = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zf
  }, Symbol.toStringTag, {
    value: "Module"
  })), Tf = pu(Rf);
  var as;
  function he() {
    return as || (as = 1, function(t, e) {
      (function(r, a) {
        t.exports = a();
      })(fe, function() {
        var r = r || function(a, o) {
          var n;
          if (typeof window < "u" && window.crypto && (n = window.crypto), typeof self < "u" && self.crypto && (n = self.crypto), typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof window < "u" && window.msCrypto && (n = window.msCrypto), !n && typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof Ff == "function") try {
            n = Tf;
          } catch {
          }
          var s = function() {
            if (n) {
              if (typeof n.getRandomValues == "function") try {
                return n.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
              if (typeof n.randomBytes == "function") try {
                return n.randomBytes(4).readInt32LE();
              } catch {
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          }, i = Object.create || /* @__PURE__ */ function() {
            function y() {
            }
            return function(w) {
              var k;
              return y.prototype = w, k = new y(), y.prototype = null, k;
            };
          }(), l = {}, c = l.lib = {}, d = c.Base = /* @__PURE__ */ function() {
            return {
              extend: function(y) {
                var w = i(this);
                return y && w.mixIn(y), (!w.hasOwnProperty("init") || this.init === w.init) && (w.init = function() {
                  w.$super.init.apply(this, arguments);
                }), w.init.prototype = w, w.$super = this, w;
              },
              create: function() {
                var y = this.extend();
                return y.init.apply(y, arguments), y;
              },
              init: function() {
              },
              mixIn: function(y) {
                for (var w in y) y.hasOwnProperty(w) && (this[w] = y[w]);
                y.hasOwnProperty("toString") && (this.toString = y.toString);
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }(), h = c.WordArray = d.extend({
            init: function(y, w) {
              y = this.words = y || [], w != o ? this.sigBytes = w : this.sigBytes = y.length * 4;
            },
            toString: function(y) {
              return (y || g).stringify(this);
            },
            concat: function(y) {
              var w = this.words, k = y.words, D = this.sigBytes, S = y.sigBytes;
              if (this.clamp(), D % 4) for (var F = 0; F < S; F++) {
                var R = k[F >>> 2] >>> 24 - F % 4 * 8 & 255;
                w[D + F >>> 2] |= R << 24 - (D + F) % 4 * 8;
              }
              else for (var j = 0; j < S; j += 4) w[D + j >>> 2] = k[j >>> 2];
              return this.sigBytes += S, this;
            },
            clamp: function() {
              var y = this.words, w = this.sigBytes;
              y[w >>> 2] &= 4294967295 << 32 - w % 4 * 8, y.length = a.ceil(w / 4);
            },
            clone: function() {
              var y = d.clone.call(this);
              return y.words = this.words.slice(0), y;
            },
            random: function(y) {
              for (var w = [], k = 0; k < y; k += 4) w.push(s());
              return new h.init(w, y);
            }
          }), p = l.enc = {}, g = p.Hex = {
            stringify: function(y) {
              for (var w = y.words, k = y.sigBytes, D = [], S = 0; S < k; S++) {
                var F = w[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                D.push((F >>> 4).toString(16)), D.push((F & 15).toString(16));
              }
              return D.join("");
            },
            parse: function(y) {
              for (var w = y.length, k = [], D = 0; D < w; D += 2) k[D >>> 3] |= parseInt(y.substr(D, 2), 16) << 24 - D % 8 * 4;
              return new h.init(k, w / 2);
            }
          }, m = p.Latin1 = {
            stringify: function(y) {
              for (var w = y.words, k = y.sigBytes, D = [], S = 0; S < k; S++) {
                var F = w[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                D.push(String.fromCharCode(F));
              }
              return D.join("");
            },
            parse: function(y) {
              for (var w = y.length, k = [], D = 0; D < w; D++) k[D >>> 2] |= (y.charCodeAt(D) & 255) << 24 - D % 4 * 8;
              return new h.init(k, w);
            }
          }, b = p.Utf8 = {
            stringify: function(y) {
              try {
                return decodeURIComponent(escape(m.stringify(y)));
              } catch {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function(y) {
              return m.parse(unescape(encodeURIComponent(y)));
            }
          }, x = c.BufferedBlockAlgorithm = d.extend({
            reset: function() {
              this._data = new h.init(), this._nDataBytes = 0;
            },
            _append: function(y) {
              typeof y == "string" && (y = b.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes;
            },
            _process: function(y) {
              var w, k = this._data, D = k.words, S = k.sigBytes, F = this.blockSize, R = F * 4, j = S / R;
              y ? j = a.ceil(j) : j = a.max((j | 0) - this._minBufferSize, 0);
              var C = j * F, T = a.min(C * 4, S);
              if (C) {
                for (var H = 0; H < C; H += F) this._doProcessBlock(D, H);
                w = D.splice(0, C), k.sigBytes -= T;
              }
              return new h.init(w, T);
            },
            clone: function() {
              var y = d.clone.call(this);
              return y._data = this._data.clone(), y;
            },
            _minBufferSize: 0
          });
          c.Hasher = x.extend({
            cfg: d.extend(),
            init: function(y) {
              this.cfg = this.cfg.extend(y), this.reset();
            },
            reset: function() {
              x.reset.call(this), this._doReset();
            },
            update: function(y) {
              return this._append(y), this._process(), this;
            },
            finalize: function(y) {
              y && this._append(y);
              var w = this._doFinalize();
              return w;
            },
            blockSize: 16,
            _createHelper: function(y) {
              return function(w, k) {
                return new y.init(k).finalize(w);
              };
            },
            _createHmacHelper: function(y) {
              return function(w, k) {
                return new _.HMAC.init(y, k).finalize(w);
              };
            }
          });
          var _ = l.algo = {};
          return l;
        }(Math);
        return r;
      });
    }(yo)), yo.exports;
  }
  var Eo = {
    exports: {}
  }, os;
  function no() {
    return os || (os = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.Base, i = n.WordArray, l = o.x64 = {};
          l.Word = s.extend({
            init: function(c, d) {
              this.high = c, this.low = d;
            }
          }), l.WordArray = s.extend({
            init: function(c, d) {
              c = this.words = c || [], d != a ? this.sigBytes = d : this.sigBytes = c.length * 8;
            },
            toX32: function() {
              for (var c = this.words, d = c.length, h = [], p = 0; p < d; p++) {
                var g = c[p];
                h.push(g.high), h.push(g.low);
              }
              return i.create(h, this.sigBytes);
            },
            clone: function() {
              for (var c = s.clone.call(this), d = c.words = this.words.slice(0), h = d.length, p = 0; p < h; p++) d[p] = d[p].clone();
              return c;
            }
          });
        }(), r;
      });
    }(Eo)), Eo.exports;
  }
  var _o = {
    exports: {}
  }, ns;
  function Nf() {
    return ns || (ns = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function() {
          if (typeof ArrayBuffer == "function") {
            var a = r, o = a.lib, n = o.WordArray, s = n.init, i = n.init = function(l) {
              if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
                for (var c = l.byteLength, d = [], h = 0; h < c; h++) d[h >>> 2] |= l[h] << 24 - h % 4 * 8;
                s.call(this, d, c);
              } else s.apply(this, arguments);
            };
            i.prototype = n;
          }
        }(), r.lib.WordArray;
      });
    }(_o)), _o.exports;
  }
  var Ao = {
    exports: {}
  }, is;
  function Of() {
    return is || (is = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = a.enc;
          s.Utf16 = s.Utf16BE = {
            stringify: function(l) {
              for (var c = l.words, d = l.sigBytes, h = [], p = 0; p < d; p += 2) {
                var g = c[p >>> 2] >>> 16 - p % 4 * 8 & 65535;
                h.push(String.fromCharCode(g));
              }
              return h.join("");
            },
            parse: function(l) {
              for (var c = l.length, d = [], h = 0; h < c; h++) d[h >>> 1] |= l.charCodeAt(h) << 16 - h % 2 * 16;
              return n.create(d, c * 2);
            }
          }, s.Utf16LE = {
            stringify: function(l) {
              for (var c = l.words, d = l.sigBytes, h = [], p = 0; p < d; p += 2) {
                var g = i(c[p >>> 2] >>> 16 - p % 4 * 8 & 65535);
                h.push(String.fromCharCode(g));
              }
              return h.join("");
            },
            parse: function(l) {
              for (var c = l.length, d = [], h = 0; h < c; h++) d[h >>> 1] |= i(l.charCodeAt(h) << 16 - h % 2 * 16);
              return n.create(d, c * 2);
            }
          };
          function i(l) {
            return l << 8 & 4278255360 | l >>> 8 & 16711935;
          }
        }(), r.enc.Utf16;
      });
    }(Ao)), Ao.exports;
  }
  var ko = {
    exports: {}
  }, ss;
  function wr() {
    return ss || (ss = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = a.enc;
          s.Base64 = {
            stringify: function(l) {
              var c = l.words, d = l.sigBytes, h = this._map;
              l.clamp();
              for (var p = [], g = 0; g < d; g += 3) for (var m = c[g >>> 2] >>> 24 - g % 4 * 8 & 255, b = c[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, x = c[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, _ = m << 16 | b << 8 | x, y = 0; y < 4 && g + y * 0.75 < d; y++) p.push(h.charAt(_ >>> 6 * (3 - y) & 63));
              var w = h.charAt(64);
              if (w) for (; p.length % 4; ) p.push(w);
              return p.join("");
            },
            parse: function(l) {
              var c = l.length, d = this._map, h = this._reverseMap;
              if (!h) {
                h = this._reverseMap = [];
                for (var p = 0; p < d.length; p++) h[d.charCodeAt(p)] = p;
              }
              var g = d.charAt(64);
              if (g) {
                var m = l.indexOf(g);
                m !== -1 && (c = m);
              }
              return i(l, c, h);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          function i(l, c, d) {
            for (var h = [], p = 0, g = 0; g < c; g++) if (g % 4) {
              var m = d[l.charCodeAt(g - 1)] << g % 4 * 2, b = d[l.charCodeAt(g)] >>> 6 - g % 4 * 2, x = m | b;
              h[p >>> 2] |= x << 24 - p % 4 * 8, p++;
            }
            return n.create(h, p);
          }
        }(), r.enc.Base64;
      });
    }(ko)), ko.exports;
  }
  var Bo = {
    exports: {}
  }, cs;
  function Lf() {
    return cs || (cs = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = a.enc;
          s.Base64url = {
            stringify: function(l, c) {
              c === void 0 && (c = true);
              var d = l.words, h = l.sigBytes, p = c ? this._safe_map : this._map;
              l.clamp();
              for (var g = [], m = 0; m < h; m += 3) for (var b = d[m >>> 2] >>> 24 - m % 4 * 8 & 255, x = d[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, _ = d[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, y = b << 16 | x << 8 | _, w = 0; w < 4 && m + w * 0.75 < h; w++) g.push(p.charAt(y >>> 6 * (3 - w) & 63));
              var k = p.charAt(64);
              if (k) for (; g.length % 4; ) g.push(k);
              return g.join("");
            },
            parse: function(l, c) {
              c === void 0 && (c = true);
              var d = l.length, h = c ? this._safe_map : this._map, p = this._reverseMap;
              if (!p) {
                p = this._reverseMap = [];
                for (var g = 0; g < h.length; g++) p[h.charCodeAt(g)] = g;
              }
              var m = h.charAt(64);
              if (m) {
                var b = l.indexOf(m);
                b !== -1 && (d = b);
              }
              return i(l, d, p);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          };
          function i(l, c, d) {
            for (var h = [], p = 0, g = 0; g < c; g++) if (g % 4) {
              var m = d[l.charCodeAt(g - 1)] << g % 4 * 2, b = d[l.charCodeAt(g)] >>> 6 - g % 4 * 2, x = m | b;
              h[p >>> 2] |= x << 24 - p % 4 * 8, p++;
            }
            return n.create(h, p);
          }
        }(), r.enc.Base64url;
      });
    }(Bo)), Bo.exports;
  }
  var Co = {
    exports: {}
  }, ls;
  function yr() {
    return ls || (ls = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.WordArray, i = n.Hasher, l = o.algo, c = [];
          (function() {
            for (var b = 0; b < 64; b++) c[b] = a.abs(a.sin(b + 1)) * 4294967296 | 0;
          })();
          var d = l.MD5 = i.extend({
            _doReset: function() {
              this._hash = new s.init([
                1732584193,
                4023233417,
                2562383102,
                271733878
              ]);
            },
            _doProcessBlock: function(b, x) {
              for (var _ = 0; _ < 16; _++) {
                var y = x + _, w = b[y];
                b[y] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
              }
              var k = this._hash.words, D = b[x + 0], S = b[x + 1], F = b[x + 2], R = b[x + 3], j = b[x + 4], C = b[x + 5], T = b[x + 6], H = b[x + 7], U = b[x + 8], M = b[x + 9], G = b[x + 10], J = b[x + 11], Z = b[x + 12], ae = b[x + 13], O = b[x + 14], L = b[x + 15], E = k[0], B = k[1], z = k[2], N = k[3];
              E = h(E, B, z, N, D, 7, c[0]), N = h(N, E, B, z, S, 12, c[1]), z = h(z, N, E, B, F, 17, c[2]), B = h(B, z, N, E, R, 22, c[3]), E = h(E, B, z, N, j, 7, c[4]), N = h(N, E, B, z, C, 12, c[5]), z = h(z, N, E, B, T, 17, c[6]), B = h(B, z, N, E, H, 22, c[7]), E = h(E, B, z, N, U, 7, c[8]), N = h(N, E, B, z, M, 12, c[9]), z = h(z, N, E, B, G, 17, c[10]), B = h(B, z, N, E, J, 22, c[11]), E = h(E, B, z, N, Z, 7, c[12]), N = h(N, E, B, z, ae, 12, c[13]), z = h(z, N, E, B, O, 17, c[14]), B = h(B, z, N, E, L, 22, c[15]), E = p(E, B, z, N, S, 5, c[16]), N = p(N, E, B, z, T, 9, c[17]), z = p(z, N, E, B, J, 14, c[18]), B = p(B, z, N, E, D, 20, c[19]), E = p(E, B, z, N, C, 5, c[20]), N = p(N, E, B, z, G, 9, c[21]), z = p(z, N, E, B, L, 14, c[22]), B = p(B, z, N, E, j, 20, c[23]), E = p(E, B, z, N, M, 5, c[24]), N = p(N, E, B, z, O, 9, c[25]), z = p(z, N, E, B, R, 14, c[26]), B = p(B, z, N, E, U, 20, c[27]), E = p(E, B, z, N, ae, 5, c[28]), N = p(N, E, B, z, F, 9, c[29]), z = p(z, N, E, B, H, 14, c[30]), B = p(B, z, N, E, Z, 20, c[31]), E = g(E, B, z, N, C, 4, c[32]), N = g(N, E, B, z, U, 11, c[33]), z = g(z, N, E, B, J, 16, c[34]), B = g(B, z, N, E, O, 23, c[35]), E = g(E, B, z, N, S, 4, c[36]), N = g(N, E, B, z, j, 11, c[37]), z = g(z, N, E, B, H, 16, c[38]), B = g(B, z, N, E, G, 23, c[39]), E = g(E, B, z, N, ae, 4, c[40]), N = g(N, E, B, z, D, 11, c[41]), z = g(z, N, E, B, R, 16, c[42]), B = g(B, z, N, E, T, 23, c[43]), E = g(E, B, z, N, M, 4, c[44]), N = g(N, E, B, z, Z, 11, c[45]), z = g(z, N, E, B, L, 16, c[46]), B = g(B, z, N, E, F, 23, c[47]), E = m(E, B, z, N, D, 6, c[48]), N = m(N, E, B, z, H, 10, c[49]), z = m(z, N, E, B, O, 15, c[50]), B = m(B, z, N, E, C, 21, c[51]), E = m(E, B, z, N, Z, 6, c[52]), N = m(N, E, B, z, R, 10, c[53]), z = m(z, N, E, B, G, 15, c[54]), B = m(B, z, N, E, S, 21, c[55]), E = m(E, B, z, N, U, 6, c[56]), N = m(N, E, B, z, L, 10, c[57]), z = m(z, N, E, B, T, 15, c[58]), B = m(B, z, N, E, ae, 21, c[59]), E = m(E, B, z, N, j, 6, c[60]), N = m(N, E, B, z, J, 10, c[61]), z = m(z, N, E, B, F, 15, c[62]), B = m(B, z, N, E, M, 21, c[63]), k[0] = k[0] + E | 0, k[1] = k[1] + B | 0, k[2] = k[2] + z | 0, k[3] = k[3] + N | 0;
            },
            _doFinalize: function() {
              var b = this._data, x = b.words, _ = this._nDataBytes * 8, y = b.sigBytes * 8;
              x[y >>> 5] |= 128 << 24 - y % 32;
              var w = a.floor(_ / 4294967296), k = _;
              x[(y + 64 >>> 9 << 4) + 15] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, x[(y + 64 >>> 9 << 4) + 14] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, b.sigBytes = (x.length + 1) * 4, this._process();
              for (var D = this._hash, S = D.words, F = 0; F < 4; F++) {
                var R = S[F];
                S[F] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
              }
              return D;
            },
            clone: function() {
              var b = i.clone.call(this);
              return b._hash = this._hash.clone(), b;
            }
          });
          function h(b, x, _, y, w, k, D) {
            var S = b + (x & _ | ~x & y) + w + D;
            return (S << k | S >>> 32 - k) + x;
          }
          function p(b, x, _, y, w, k, D) {
            var S = b + (x & y | _ & ~y) + w + D;
            return (S << k | S >>> 32 - k) + x;
          }
          function g(b, x, _, y, w, k, D) {
            var S = b + (x ^ _ ^ y) + w + D;
            return (S << k | S >>> 32 - k) + x;
          }
          function m(b, x, _, y, w, k, D) {
            var S = b + (_ ^ (x | ~y)) + w + D;
            return (S << k | S >>> 32 - k) + x;
          }
          o.MD5 = i._createHelper(d), o.HmacMD5 = i._createHmacHelper(d);
        }(Math), r.MD5;
      });
    }(Co)), Co.exports;
  }
  var So = {
    exports: {}
  }, us;
  function wl() {
    return us || (us = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = o.Hasher, i = a.algo, l = [], c = i.SHA1 = s.extend({
            _doReset: function() {
              this._hash = new n.init([
                1732584193,
                4023233417,
                2562383102,
                271733878,
                3285377520
              ]);
            },
            _doProcessBlock: function(d, h) {
              for (var p = this._hash.words, g = p[0], m = p[1], b = p[2], x = p[3], _ = p[4], y = 0; y < 80; y++) {
                if (y < 16) l[y] = d[h + y] | 0;
                else {
                  var w = l[y - 3] ^ l[y - 8] ^ l[y - 14] ^ l[y - 16];
                  l[y] = w << 1 | w >>> 31;
                }
                var k = (g << 5 | g >>> 27) + _ + l[y];
                y < 20 ? k += (m & b | ~m & x) + 1518500249 : y < 40 ? k += (m ^ b ^ x) + 1859775393 : y < 60 ? k += (m & b | m & x | b & x) - 1894007588 : k += (m ^ b ^ x) - 899497514, _ = x, x = b, b = m << 30 | m >>> 2, m = g, g = k;
              }
              p[0] = p[0] + g | 0, p[1] = p[1] + m | 0, p[2] = p[2] + b | 0, p[3] = p[3] + x | 0, p[4] = p[4] + _ | 0;
            },
            _doFinalize: function() {
              var d = this._data, h = d.words, p = this._nDataBytes * 8, g = d.sigBytes * 8;
              return h[g >>> 5] |= 128 << 24 - g % 32, h[(g + 64 >>> 9 << 4) + 14] = Math.floor(p / 4294967296), h[(g + 64 >>> 9 << 4) + 15] = p, d.sigBytes = h.length * 4, this._process(), this._hash;
            },
            clone: function() {
              var d = s.clone.call(this);
              return d._hash = this._hash.clone(), d;
            }
          });
          a.SHA1 = s._createHelper(c), a.HmacSHA1 = s._createHmacHelper(c);
        }(), r.SHA1;
      });
    }(So)), So.exports;
  }
  var Do = {
    exports: {}
  }, ds;
  function ei() {
    return ds || (ds = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.WordArray, i = n.Hasher, l = o.algo, c = [], d = [];
          (function() {
            function g(_) {
              for (var y = a.sqrt(_), w = 2; w <= y; w++) if (!(_ % w)) return false;
              return true;
            }
            function m(_) {
              return (_ - (_ | 0)) * 4294967296 | 0;
            }
            for (var b = 2, x = 0; x < 64; ) g(b) && (x < 8 && (c[x] = m(a.pow(b, 1 / 2))), d[x] = m(a.pow(b, 1 / 3)), x++), b++;
          })();
          var h = [], p = l.SHA256 = i.extend({
            _doReset: function() {
              this._hash = new s.init(c.slice(0));
            },
            _doProcessBlock: function(g, m) {
              for (var b = this._hash.words, x = b[0], _ = b[1], y = b[2], w = b[3], k = b[4], D = b[5], S = b[6], F = b[7], R = 0; R < 64; R++) {
                if (R < 16) h[R] = g[m + R] | 0;
                else {
                  var j = h[R - 15], C = (j << 25 | j >>> 7) ^ (j << 14 | j >>> 18) ^ j >>> 3, T = h[R - 2], H = (T << 15 | T >>> 17) ^ (T << 13 | T >>> 19) ^ T >>> 10;
                  h[R] = C + h[R - 7] + H + h[R - 16];
                }
                var U = k & D ^ ~k & S, M = x & _ ^ x & y ^ _ & y, G = (x << 30 | x >>> 2) ^ (x << 19 | x >>> 13) ^ (x << 10 | x >>> 22), J = (k << 26 | k >>> 6) ^ (k << 21 | k >>> 11) ^ (k << 7 | k >>> 25), Z = F + J + U + d[R] + h[R], ae = G + M;
                F = S, S = D, D = k, k = w + Z | 0, w = y, y = _, _ = x, x = Z + ae | 0;
              }
              b[0] = b[0] + x | 0, b[1] = b[1] + _ | 0, b[2] = b[2] + y | 0, b[3] = b[3] + w | 0, b[4] = b[4] + k | 0, b[5] = b[5] + D | 0, b[6] = b[6] + S | 0, b[7] = b[7] + F | 0;
            },
            _doFinalize: function() {
              var g = this._data, m = g.words, b = this._nDataBytes * 8, x = g.sigBytes * 8;
              return m[x >>> 5] |= 128 << 24 - x % 32, m[(x + 64 >>> 9 << 4) + 14] = a.floor(b / 4294967296), m[(x + 64 >>> 9 << 4) + 15] = b, g.sigBytes = m.length * 4, this._process(), this._hash;
            },
            clone: function() {
              var g = i.clone.call(this);
              return g._hash = this._hash.clone(), g;
            }
          });
          o.SHA256 = i._createHelper(p), o.HmacSHA256 = i._createHmacHelper(p);
        }(Math), r.SHA256;
      });
    }(Do)), Do.exports;
  }
  var Io = {
    exports: {}
  }, fs;
  function Pf() {
    return fs || (fs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), ei());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = a.algo, i = s.SHA256, l = s.SHA224 = i.extend({
            _doReset: function() {
              this._hash = new n.init([
                3238371032,
                914150663,
                812702999,
                4144912697,
                4290775857,
                1750603025,
                1694076839,
                3204075428
              ]);
            },
            _doFinalize: function() {
              var c = i._doFinalize.call(this);
              return c.sigBytes -= 4, c;
            }
          });
          a.SHA224 = i._createHelper(l), a.HmacSHA224 = i._createHmacHelper(l);
        }(), r.SHA224;
      });
    }(Io)), Io.exports;
  }
  var Fo = {
    exports: {}
  }, hs;
  function yl() {
    return hs || (hs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), no());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.Hasher, s = a.x64, i = s.Word, l = s.WordArray, c = a.algo;
          function d() {
            return i.create.apply(i, arguments);
          }
          var h = [
            d(1116352408, 3609767458),
            d(1899447441, 602891725),
            d(3049323471, 3964484399),
            d(3921009573, 2173295548),
            d(961987163, 4081628472),
            d(1508970993, 3053834265),
            d(2453635748, 2937671579),
            d(2870763221, 3664609560),
            d(3624381080, 2734883394),
            d(310598401, 1164996542),
            d(607225278, 1323610764),
            d(1426881987, 3590304994),
            d(1925078388, 4068182383),
            d(2162078206, 991336113),
            d(2614888103, 633803317),
            d(3248222580, 3479774868),
            d(3835390401, 2666613458),
            d(4022224774, 944711139),
            d(264347078, 2341262773),
            d(604807628, 2007800933),
            d(770255983, 1495990901),
            d(1249150122, 1856431235),
            d(1555081692, 3175218132),
            d(1996064986, 2198950837),
            d(2554220882, 3999719339),
            d(2821834349, 766784016),
            d(2952996808, 2566594879),
            d(3210313671, 3203337956),
            d(3336571891, 1034457026),
            d(3584528711, 2466948901),
            d(113926993, 3758326383),
            d(338241895, 168717936),
            d(666307205, 1188179964),
            d(773529912, 1546045734),
            d(1294757372, 1522805485),
            d(1396182291, 2643833823),
            d(1695183700, 2343527390),
            d(1986661051, 1014477480),
            d(2177026350, 1206759142),
            d(2456956037, 344077627),
            d(2730485921, 1290863460),
            d(2820302411, 3158454273),
            d(3259730800, 3505952657),
            d(3345764771, 106217008),
            d(3516065817, 3606008344),
            d(3600352804, 1432725776),
            d(4094571909, 1467031594),
            d(275423344, 851169720),
            d(430227734, 3100823752),
            d(506948616, 1363258195),
            d(659060556, 3750685593),
            d(883997877, 3785050280),
            d(958139571, 3318307427),
            d(1322822218, 3812723403),
            d(1537002063, 2003034995),
            d(1747873779, 3602036899),
            d(1955562222, 1575990012),
            d(2024104815, 1125592928),
            d(2227730452, 2716904306),
            d(2361852424, 442776044),
            d(2428436474, 593698344),
            d(2756734187, 3733110249),
            d(3204031479, 2999351573),
            d(3329325298, 3815920427),
            d(3391569614, 3928383900),
            d(3515267271, 566280711),
            d(3940187606, 3454069534),
            d(4118630271, 4000239992),
            d(116418474, 1914138554),
            d(174292421, 2731055270),
            d(289380356, 3203993006),
            d(460393269, 320620315),
            d(685471733, 587496836),
            d(852142971, 1086792851),
            d(1017036298, 365543100),
            d(1126000580, 2618297676),
            d(1288033470, 3409855158),
            d(1501505948, 4234509866),
            d(1607167915, 987167468),
            d(1816402316, 1246189591)
          ], p = [];
          (function() {
            for (var m = 0; m < 80; m++) p[m] = d();
          })();
          var g = c.SHA512 = n.extend({
            _doReset: function() {
              this._hash = new l.init([
                new i.init(1779033703, 4089235720),
                new i.init(3144134277, 2227873595),
                new i.init(1013904242, 4271175723),
                new i.init(2773480762, 1595750129),
                new i.init(1359893119, 2917565137),
                new i.init(2600822924, 725511199),
                new i.init(528734635, 4215389547),
                new i.init(1541459225, 327033209)
              ]);
            },
            _doProcessBlock: function(m, b) {
              for (var x = this._hash.words, _ = x[0], y = x[1], w = x[2], k = x[3], D = x[4], S = x[5], F = x[6], R = x[7], j = _.high, C = _.low, T = y.high, H = y.low, U = w.high, M = w.low, G = k.high, J = k.low, Z = D.high, ae = D.low, O = S.high, L = S.low, E = F.high, B = F.low, z = R.high, N = R.low, K = j, W = C, X = T, $ = H, ie = U, oe = M, ye = G, ge = J, de = Z, me = ae, xe = O, be = L, ct = E, xt = B, ht = z, vt = N, Te = 0; Te < 80; Te++) {
                var Be, lt, Er = p[Te];
                if (Te < 16) lt = Er.high = m[b + Te * 2] | 0, Be = Er.low = m[b + Te * 2 + 1] | 0;
                else {
                  var pt = p[Te - 15], Mt = pt.high, v = pt.low, u = (Mt >>> 1 | v << 31) ^ (Mt >>> 8 | v << 24) ^ Mt >>> 7, f = (v >>> 1 | Mt << 31) ^ (v >>> 8 | Mt << 24) ^ (v >>> 7 | Mt << 25), A = p[Te - 2], I = A.high, P = A.low, q = (I >>> 19 | P << 13) ^ (I << 3 | P >>> 29) ^ I >>> 6, se = (P >>> 19 | I << 13) ^ (P << 3 | I >>> 29) ^ (P >>> 6 | I << 26), Ce = p[Te - 7], Ae = Ce.high, Se = Ce.low, ve = p[Te - 16], nu = ve.high, _i = ve.low;
                  Be = f + Se, lt = u + Ae + (Be >>> 0 < f >>> 0 ? 1 : 0), Be = Be + se, lt = lt + q + (Be >>> 0 < se >>> 0 ? 1 : 0), Be = Be + _i, lt = lt + nu + (Be >>> 0 < _i >>> 0 ? 1 : 0), Er.high = lt, Er.low = Be;
                }
                var iu = de & xe ^ ~de & ct, Ai = me & be ^ ~me & xt, su = K & X ^ K & ie ^ X & ie, cu = W & $ ^ W & oe ^ $ & oe, lu = (K >>> 28 | W << 4) ^ (K << 30 | W >>> 2) ^ (K << 25 | W >>> 7), ki = (W >>> 28 | K << 4) ^ (W << 30 | K >>> 2) ^ (W << 25 | K >>> 7), uu = (de >>> 14 | me << 18) ^ (de >>> 18 | me << 14) ^ (de << 23 | me >>> 9), du = (me >>> 14 | de << 18) ^ (me >>> 18 | de << 14) ^ (me << 23 | de >>> 9), Bi = h[Te], fu = Bi.high, Ci = Bi.low, tt = vt + du, Wt = ht + uu + (tt >>> 0 < vt >>> 0 ? 1 : 0), tt = tt + Ai, Wt = Wt + iu + (tt >>> 0 < Ai >>> 0 ? 1 : 0), tt = tt + Ci, Wt = Wt + fu + (tt >>> 0 < Ci >>> 0 ? 1 : 0), tt = tt + Be, Wt = Wt + lt + (tt >>> 0 < Be >>> 0 ? 1 : 0), Si = ki + cu, hu = lu + su + (Si >>> 0 < ki >>> 0 ? 1 : 0);
                ht = ct, vt = xt, ct = xe, xt = be, xe = de, be = me, me = ge + tt | 0, de = ye + Wt + (me >>> 0 < ge >>> 0 ? 1 : 0) | 0, ye = ie, ge = oe, ie = X, oe = $, X = K, $ = W, W = tt + Si | 0, K = Wt + hu + (W >>> 0 < tt >>> 0 ? 1 : 0) | 0;
              }
              C = _.low = C + W, _.high = j + K + (C >>> 0 < W >>> 0 ? 1 : 0), H = y.low = H + $, y.high = T + X + (H >>> 0 < $ >>> 0 ? 1 : 0), M = w.low = M + oe, w.high = U + ie + (M >>> 0 < oe >>> 0 ? 1 : 0), J = k.low = J + ge, k.high = G + ye + (J >>> 0 < ge >>> 0 ? 1 : 0), ae = D.low = ae + me, D.high = Z + de + (ae >>> 0 < me >>> 0 ? 1 : 0), L = S.low = L + be, S.high = O + xe + (L >>> 0 < be >>> 0 ? 1 : 0), B = F.low = B + xt, F.high = E + ct + (B >>> 0 < xt >>> 0 ? 1 : 0), N = R.low = N + vt, R.high = z + ht + (N >>> 0 < vt >>> 0 ? 1 : 0);
            },
            _doFinalize: function() {
              var m = this._data, b = m.words, x = this._nDataBytes * 8, _ = m.sigBytes * 8;
              b[_ >>> 5] |= 128 << 24 - _ % 32, b[(_ + 128 >>> 10 << 5) + 30] = Math.floor(x / 4294967296), b[(_ + 128 >>> 10 << 5) + 31] = x, m.sigBytes = b.length * 4, this._process();
              var y = this._hash.toX32();
              return y;
            },
            clone: function() {
              var m = n.clone.call(this);
              return m._hash = this._hash.clone(), m;
            },
            blockSize: 1024 / 32
          });
          a.SHA512 = n._createHelper(g), a.HmacSHA512 = n._createHmacHelper(g);
        }(), r.SHA512;
      });
    }(Fo)), Fo.exports;
  }
  var zo = {
    exports: {}
  }, ps;
  function Uf() {
    return ps || (ps = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), no(), yl());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.x64, n = o.Word, s = o.WordArray, i = a.algo, l = i.SHA512, c = i.SHA384 = l.extend({
            _doReset: function() {
              this._hash = new s.init([
                new n.init(3418070365, 3238371032),
                new n.init(1654270250, 914150663),
                new n.init(2438529370, 812702999),
                new n.init(355462360, 4144912697),
                new n.init(1731405415, 4290775857),
                new n.init(2394180231, 1750603025),
                new n.init(3675008525, 1694076839),
                new n.init(1203062813, 3204075428)
              ]);
            },
            _doFinalize: function() {
              var d = l._doFinalize.call(this);
              return d.sigBytes -= 16, d;
            }
          });
          a.SHA384 = l._createHelper(c), a.HmacSHA384 = l._createHmacHelper(c);
        }(), r.SHA384;
      });
    }(zo)), zo.exports;
  }
  var Ro = {
    exports: {}
  }, gs;
  function jf() {
    return gs || (gs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), no());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.WordArray, i = n.Hasher, l = o.x64, c = l.Word, d = o.algo, h = [], p = [], g = [];
          (function() {
            for (var x = 1, _ = 0, y = 0; y < 24; y++) {
              h[x + 5 * _] = (y + 1) * (y + 2) / 2 % 64;
              var w = _ % 5, k = (2 * x + 3 * _) % 5;
              x = w, _ = k;
            }
            for (var x = 0; x < 5; x++) for (var _ = 0; _ < 5; _++) p[x + 5 * _] = _ + (2 * x + 3 * _) % 5 * 5;
            for (var D = 1, S = 0; S < 24; S++) {
              for (var F = 0, R = 0, j = 0; j < 7; j++) {
                if (D & 1) {
                  var C = (1 << j) - 1;
                  C < 32 ? R ^= 1 << C : F ^= 1 << C - 32;
                }
                D & 128 ? D = D << 1 ^ 113 : D <<= 1;
              }
              g[S] = c.create(F, R);
            }
          })();
          var m = [];
          (function() {
            for (var x = 0; x < 25; x++) m[x] = c.create();
          })();
          var b = d.SHA3 = i.extend({
            cfg: i.cfg.extend({
              outputLength: 512
            }),
            _doReset: function() {
              for (var x = this._state = [], _ = 0; _ < 25; _++) x[_] = new c.init();
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function(x, _) {
              for (var y = this._state, w = this.blockSize / 2, k = 0; k < w; k++) {
                var D = x[_ + 2 * k], S = x[_ + 2 * k + 1];
                D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
                var F = y[k];
                F.high ^= S, F.low ^= D;
              }
              for (var R = 0; R < 24; R++) {
                for (var j = 0; j < 5; j++) {
                  for (var C = 0, T = 0, H = 0; H < 5; H++) {
                    var F = y[j + 5 * H];
                    C ^= F.high, T ^= F.low;
                  }
                  var U = m[j];
                  U.high = C, U.low = T;
                }
                for (var j = 0; j < 5; j++) for (var M = m[(j + 4) % 5], G = m[(j + 1) % 5], J = G.high, Z = G.low, C = M.high ^ (J << 1 | Z >>> 31), T = M.low ^ (Z << 1 | J >>> 31), H = 0; H < 5; H++) {
                  var F = y[j + 5 * H];
                  F.high ^= C, F.low ^= T;
                }
                for (var ae = 1; ae < 25; ae++) {
                  var C, T, F = y[ae], O = F.high, L = F.low, E = h[ae];
                  E < 32 ? (C = O << E | L >>> 32 - E, T = L << E | O >>> 32 - E) : (C = L << E - 32 | O >>> 64 - E, T = O << E - 32 | L >>> 64 - E);
                  var B = m[p[ae]];
                  B.high = C, B.low = T;
                }
                var z = m[0], N = y[0];
                z.high = N.high, z.low = N.low;
                for (var j = 0; j < 5; j++) for (var H = 0; H < 5; H++) {
                  var ae = j + 5 * H, F = y[ae], K = m[ae], W = m[(j + 1) % 5 + 5 * H], X = m[(j + 2) % 5 + 5 * H];
                  F.high = K.high ^ ~W.high & X.high, F.low = K.low ^ ~W.low & X.low;
                }
                var F = y[0], $ = g[R];
                F.high ^= $.high, F.low ^= $.low;
              }
            },
            _doFinalize: function() {
              var x = this._data, _ = x.words;
              this._nDataBytes * 8;
              var y = x.sigBytes * 8, w = this.blockSize * 32;
              _[y >>> 5] |= 1 << 24 - y % 32, _[(a.ceil((y + 1) / w) * w >>> 5) - 1] |= 128, x.sigBytes = _.length * 4, this._process();
              for (var k = this._state, D = this.cfg.outputLength / 8, S = D / 8, F = [], R = 0; R < S; R++) {
                var j = k[R], C = j.high, T = j.low;
                C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, F.push(T), F.push(C);
              }
              return new s.init(F, D);
            },
            clone: function() {
              for (var x = i.clone.call(this), _ = x._state = this._state.slice(0), y = 0; y < 25; y++) _[y] = _[y].clone();
              return x;
            }
          });
          o.SHA3 = i._createHelper(b), o.HmacSHA3 = i._createHmacHelper(b);
        }(Math), r.SHA3;
      });
    }(Ro)), Ro.exports;
  }
  var To = {
    exports: {}
  }, ms;
  function Hf() {
    return ms || (ms = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.WordArray, i = n.Hasher, l = o.algo, c = s.create([
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
          ]), d = s.create([
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
          ]), h = s.create([
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
          ]), p = s.create([
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
          ]), g = s.create([
            0,
            1518500249,
            1859775393,
            2400959708,
            2840853838
          ]), m = s.create([
            1352829926,
            1548603684,
            1836072691,
            2053994217,
            0
          ]), b = l.RIPEMD160 = i.extend({
            _doReset: function() {
              this._hash = s.create([
                1732584193,
                4023233417,
                2562383102,
                271733878,
                3285377520
              ]);
            },
            _doProcessBlock: function(S, F) {
              for (var R = 0; R < 16; R++) {
                var j = F + R, C = S[j];
                S[j] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
              }
              var T = this._hash.words, H = g.words, U = m.words, M = c.words, G = d.words, J = h.words, Z = p.words, ae, O, L, E, B, z, N, K, W, X;
              z = ae = T[0], N = O = T[1], K = L = T[2], W = E = T[3], X = B = T[4];
              for (var $, R = 0; R < 80; R += 1) $ = ae + S[F + M[R]] | 0, R < 16 ? $ += x(O, L, E) + H[0] : R < 32 ? $ += _(O, L, E) + H[1] : R < 48 ? $ += y(O, L, E) + H[2] : R < 64 ? $ += w(O, L, E) + H[3] : $ += k(O, L, E) + H[4], $ = $ | 0, $ = D($, J[R]), $ = $ + B | 0, ae = B, B = E, E = D(L, 10), L = O, O = $, $ = z + S[F + G[R]] | 0, R < 16 ? $ += k(N, K, W) + U[0] : R < 32 ? $ += w(N, K, W) + U[1] : R < 48 ? $ += y(N, K, W) + U[2] : R < 64 ? $ += _(N, K, W) + U[3] : $ += x(N, K, W) + U[4], $ = $ | 0, $ = D($, Z[R]), $ = $ + X | 0, z = X, X = W, W = D(K, 10), K = N, N = $;
              $ = T[1] + L + W | 0, T[1] = T[2] + E + X | 0, T[2] = T[3] + B + z | 0, T[3] = T[4] + ae + N | 0, T[4] = T[0] + O + K | 0, T[0] = $;
            },
            _doFinalize: function() {
              var S = this._data, F = S.words, R = this._nDataBytes * 8, j = S.sigBytes * 8;
              F[j >>> 5] |= 128 << 24 - j % 32, F[(j + 64 >>> 9 << 4) + 14] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360, S.sigBytes = (F.length + 1) * 4, this._process();
              for (var C = this._hash, T = C.words, H = 0; H < 5; H++) {
                var U = T[H];
                T[H] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360;
              }
              return C;
            },
            clone: function() {
              var S = i.clone.call(this);
              return S._hash = this._hash.clone(), S;
            }
          });
          function x(S, F, R) {
            return S ^ F ^ R;
          }
          function _(S, F, R) {
            return S & F | ~S & R;
          }
          function y(S, F, R) {
            return (S | ~F) ^ R;
          }
          function w(S, F, R) {
            return S & R | F & ~R;
          }
          function k(S, F, R) {
            return S ^ (F | ~R);
          }
          function D(S, F) {
            return S << F | S >>> 32 - F;
          }
          o.RIPEMD160 = i._createHelper(b), o.HmacRIPEMD160 = i._createHmacHelper(b);
        }(), r.RIPEMD160;
      });
    }(To)), To.exports;
  }
  var No = {
    exports: {}
  }, xs;
  function ti() {
    return xs || (xs = 1, function(t, e) {
      (function(r, a) {
        t.exports = a(he());
      })(fe, function(r) {
        (function() {
          var a = r, o = a.lib, n = o.Base, s = a.enc, i = s.Utf8, l = a.algo;
          l.HMAC = n.extend({
            init: function(c, d) {
              c = this._hasher = new c.init(), typeof d == "string" && (d = i.parse(d));
              var h = c.blockSize, p = h * 4;
              d.sigBytes > p && (d = c.finalize(d)), d.clamp();
              for (var g = this._oKey = d.clone(), m = this._iKey = d.clone(), b = g.words, x = m.words, _ = 0; _ < h; _++) b[_] ^= 1549556828, x[_] ^= 909522486;
              g.sigBytes = m.sigBytes = p, this.reset();
            },
            reset: function() {
              var c = this._hasher;
              c.reset(), c.update(this._iKey);
            },
            update: function(c) {
              return this._hasher.update(c), this;
            },
            finalize: function(c) {
              var d = this._hasher, h = d.finalize(c);
              d.reset();
              var p = d.finalize(this._oKey.clone().concat(h));
              return p;
            }
          });
        })();
      });
    }(No)), No.exports;
  }
  var Oo = {
    exports: {}
  }, vs;
  function qf() {
    return vs || (vs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), ei(), ti());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.Base, s = o.WordArray, i = a.algo, l = i.SHA256, c = i.HMAC, d = i.PBKDF2 = n.extend({
            cfg: n.extend({
              keySize: 128 / 32,
              hasher: l,
              iterations: 25e4
            }),
            init: function(h) {
              this.cfg = this.cfg.extend(h);
            },
            compute: function(h, p) {
              for (var g = this.cfg, m = c.create(g.hasher, h), b = s.create(), x = s.create([
                1
              ]), _ = b.words, y = x.words, w = g.keySize, k = g.iterations; _.length < w; ) {
                var D = m.update(p).finalize(x);
                m.reset();
                for (var S = D.words, F = S.length, R = D, j = 1; j < k; j++) {
                  R = m.finalize(R), m.reset();
                  for (var C = R.words, T = 0; T < F; T++) S[T] ^= C[T];
                }
                b.concat(D), y[0]++;
              }
              return b.sigBytes = w * 4, b;
            }
          });
          a.PBKDF2 = function(h, p, g) {
            return d.create(g).compute(h, p);
          };
        }(), r.PBKDF2;
      });
    }(Oo)), Oo.exports;
  }
  var Lo = {
    exports: {}
  }, bs;
  function lr() {
    return bs || (bs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wl(), ti());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.Base, s = o.WordArray, i = a.algo, l = i.MD5, c = i.EvpKDF = n.extend({
            cfg: n.extend({
              keySize: 128 / 32,
              hasher: l,
              iterations: 1
            }),
            init: function(d) {
              this.cfg = this.cfg.extend(d);
            },
            compute: function(d, h) {
              for (var p, g = this.cfg, m = g.hasher.create(), b = s.create(), x = b.words, _ = g.keySize, y = g.iterations; x.length < _; ) {
                p && m.update(p), p = m.update(d).finalize(h), m.reset();
                for (var w = 1; w < y; w++) p = m.finalize(p), m.reset();
                b.concat(p);
              }
              return b.sigBytes = _ * 4, b;
            }
          });
          a.EvpKDF = function(d, h, p) {
            return c.create(p).compute(d, h);
          };
        }(), r.EvpKDF;
      });
    }(Lo)), Lo.exports;
  }
  var Po = {
    exports: {}
  }, ws;
  function Le() {
    return ws || (ws = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), lr());
      })(fe, function(r) {
        r.lib.Cipher || function(a) {
          var o = r, n = o.lib, s = n.Base, i = n.WordArray, l = n.BufferedBlockAlgorithm, c = o.enc;
          c.Utf8;
          var d = c.Base64, h = o.algo, p = h.EvpKDF, g = n.Cipher = l.extend({
            cfg: s.extend(),
            createEncryptor: function(C, T) {
              return this.create(this._ENC_XFORM_MODE, C, T);
            },
            createDecryptor: function(C, T) {
              return this.create(this._DEC_XFORM_MODE, C, T);
            },
            init: function(C, T, H) {
              this.cfg = this.cfg.extend(H), this._xformMode = C, this._key = T, this.reset();
            },
            reset: function() {
              l.reset.call(this), this._doReset();
            },
            process: function(C) {
              return this._append(C), this._process();
            },
            finalize: function(C) {
              C && this._append(C);
              var T = this._doFinalize();
              return T;
            },
            keySize: 128 / 32,
            ivSize: 128 / 32,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: /* @__PURE__ */ function() {
              function C(T) {
                return typeof T == "string" ? j : S;
              }
              return function(T) {
                return {
                  encrypt: function(H, U, M) {
                    return C(U).encrypt(T, H, U, M);
                  },
                  decrypt: function(H, U, M) {
                    return C(U).decrypt(T, H, U, M);
                  }
                };
              };
            }()
          });
          n.StreamCipher = g.extend({
            _doFinalize: function() {
              var C = this._process(true);
              return C;
            },
            blockSize: 1
          });
          var m = o.mode = {}, b = n.BlockCipherMode = s.extend({
            createEncryptor: function(C, T) {
              return this.Encryptor.create(C, T);
            },
            createDecryptor: function(C, T) {
              return this.Decryptor.create(C, T);
            },
            init: function(C, T) {
              this._cipher = C, this._iv = T;
            }
          }), x = m.CBC = function() {
            var C = b.extend();
            C.Encryptor = C.extend({
              processBlock: function(H, U) {
                var M = this._cipher, G = M.blockSize;
                T.call(this, H, U, G), M.encryptBlock(H, U), this._prevBlock = H.slice(U, U + G);
              }
            }), C.Decryptor = C.extend({
              processBlock: function(H, U) {
                var M = this._cipher, G = M.blockSize, J = H.slice(U, U + G);
                M.decryptBlock(H, U), T.call(this, H, U, G), this._prevBlock = J;
              }
            });
            function T(H, U, M) {
              var G, J = this._iv;
              J ? (G = J, this._iv = a) : G = this._prevBlock;
              for (var Z = 0; Z < M; Z++) H[U + Z] ^= G[Z];
            }
            return C;
          }(), _ = o.pad = {}, y = _.Pkcs7 = {
            pad: function(C, T) {
              for (var H = T * 4, U = H - C.sigBytes % H, M = U << 24 | U << 16 | U << 8 | U, G = [], J = 0; J < U; J += 4) G.push(M);
              var Z = i.create(G, U);
              C.concat(Z);
            },
            unpad: function(C) {
              var T = C.words[C.sigBytes - 1 >>> 2] & 255;
              C.sigBytes -= T;
            }
          };
          n.BlockCipher = g.extend({
            cfg: g.cfg.extend({
              mode: x,
              padding: y
            }),
            reset: function() {
              var C;
              g.reset.call(this);
              var T = this.cfg, H = T.iv, U = T.mode;
              this._xformMode == this._ENC_XFORM_MODE ? C = U.createEncryptor : (C = U.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, H && H.words) : (this._mode = C.call(U, this, H && H.words), this._mode.__creator = C);
            },
            _doProcessBlock: function(C, T) {
              this._mode.processBlock(C, T);
            },
            _doFinalize: function() {
              var C, T = this.cfg.padding;
              return this._xformMode == this._ENC_XFORM_MODE ? (T.pad(this._data, this.blockSize), C = this._process(true)) : (C = this._process(true), T.unpad(C)), C;
            },
            blockSize: 128 / 32
          });
          var w = n.CipherParams = s.extend({
            init: function(C) {
              this.mixIn(C);
            },
            toString: function(C) {
              return (C || this.formatter).stringify(this);
            }
          }), k = o.format = {}, D = k.OpenSSL = {
            stringify: function(C) {
              var T, H = C.ciphertext, U = C.salt;
              return U ? T = i.create([
                1398893684,
                1701076831
              ]).concat(U).concat(H) : T = H, T.toString(d);
            },
            parse: function(C) {
              var T, H = d.parse(C), U = H.words;
              return U[0] == 1398893684 && U[1] == 1701076831 && (T = i.create(U.slice(2, 4)), U.splice(0, 4), H.sigBytes -= 16), w.create({
                ciphertext: H,
                salt: T
              });
            }
          }, S = n.SerializableCipher = s.extend({
            cfg: s.extend({
              format: D
            }),
            encrypt: function(C, T, H, U) {
              U = this.cfg.extend(U);
              var M = C.createEncryptor(H, U), G = M.finalize(T), J = M.cfg;
              return w.create({
                ciphertext: G,
                key: H,
                iv: J.iv,
                algorithm: C,
                mode: J.mode,
                padding: J.padding,
                blockSize: C.blockSize,
                formatter: U.format
              });
            },
            decrypt: function(C, T, H, U) {
              U = this.cfg.extend(U), T = this._parse(T, U.format);
              var M = C.createDecryptor(H, U).finalize(T.ciphertext);
              return M;
            },
            _parse: function(C, T) {
              return typeof C == "string" ? T.parse(C, this) : C;
            }
          }), F = o.kdf = {}, R = F.OpenSSL = {
            execute: function(C, T, H, U, M) {
              if (U || (U = i.random(64 / 8)), M) var G = p.create({
                keySize: T + H,
                hasher: M
              }).compute(C, U);
              else var G = p.create({
                keySize: T + H
              }).compute(C, U);
              var J = i.create(G.words.slice(T), H * 4);
              return G.sigBytes = T * 4, w.create({
                key: G,
                iv: J,
                salt: U
              });
            }
          }, j = n.PasswordBasedCipher = S.extend({
            cfg: S.cfg.extend({
              kdf: R
            }),
            encrypt: function(C, T, H, U) {
              U = this.cfg.extend(U);
              var M = U.kdf.execute(H, C.keySize, C.ivSize, U.salt, U.hasher);
              U.iv = M.iv;
              var G = S.encrypt.call(this, C, T, M.key, U);
              return G.mixIn(M), G;
            },
            decrypt: function(C, T, H, U) {
              U = this.cfg.extend(U), T = this._parse(T, U.format);
              var M = U.kdf.execute(H, C.keySize, C.ivSize, T.salt, U.hasher);
              U.iv = M.iv;
              var G = S.decrypt.call(this, C, T, M.key, U);
              return G;
            }
          });
        }();
      });
    }(Po)), Po.exports;
  }
  var Uo = {
    exports: {}
  }, ys;
  function $f() {
    return ys || (ys = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.mode.CFB = function() {
          var a = r.lib.BlockCipherMode.extend();
          a.Encryptor = a.extend({
            processBlock: function(n, s) {
              var i = this._cipher, l = i.blockSize;
              o.call(this, n, s, l, i), this._prevBlock = n.slice(s, s + l);
            }
          }), a.Decryptor = a.extend({
            processBlock: function(n, s) {
              var i = this._cipher, l = i.blockSize, c = n.slice(s, s + l);
              o.call(this, n, s, l, i), this._prevBlock = c;
            }
          });
          function o(n, s, i, l) {
            var c, d = this._iv;
            d ? (c = d.slice(0), this._iv = void 0) : c = this._prevBlock, l.encryptBlock(c, 0);
            for (var h = 0; h < i; h++) n[s + h] ^= c[h];
          }
          return a;
        }(), r.mode.CFB;
      });
    }(Uo)), Uo.exports;
  }
  var jo = {
    exports: {}
  }, Es;
  function Mf() {
    return Es || (Es = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.mode.CTR = function() {
          var a = r.lib.BlockCipherMode.extend(), o = a.Encryptor = a.extend({
            processBlock: function(n, s) {
              var i = this._cipher, l = i.blockSize, c = this._iv, d = this._counter;
              c && (d = this._counter = c.slice(0), this._iv = void 0);
              var h = d.slice(0);
              i.encryptBlock(h, 0), d[l - 1] = d[l - 1] + 1 | 0;
              for (var p = 0; p < l; p++) n[s + p] ^= h[p];
            }
          });
          return a.Decryptor = o, a;
        }(), r.mode.CTR;
      });
    }(jo)), jo.exports;
  }
  var Ho = {
    exports: {}
  }, _s;
  function Wf() {
    return _s || (_s = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.mode.CTRGladman = function() {
          var a = r.lib.BlockCipherMode.extend();
          function o(i) {
            if ((i >> 24 & 255) === 255) {
              var l = i >> 16 & 255, c = i >> 8 & 255, d = i & 255;
              l === 255 ? (l = 0, c === 255 ? (c = 0, d === 255 ? d = 0 : ++d) : ++c) : ++l, i = 0, i += l << 16, i += c << 8, i += d;
            } else i += 1 << 24;
            return i;
          }
          function n(i) {
            return (i[0] = o(i[0])) === 0 && (i[1] = o(i[1])), i;
          }
          var s = a.Encryptor = a.extend({
            processBlock: function(i, l) {
              var c = this._cipher, d = c.blockSize, h = this._iv, p = this._counter;
              h && (p = this._counter = h.slice(0), this._iv = void 0), n(p);
              var g = p.slice(0);
              c.encryptBlock(g, 0);
              for (var m = 0; m < d; m++) i[l + m] ^= g[m];
            }
          });
          return a.Decryptor = s, a;
        }(), r.mode.CTRGladman;
      });
    }(Ho)), Ho.exports;
  }
  var qo = {
    exports: {}
  }, As;
  function Vf() {
    return As || (As = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.mode.OFB = function() {
          var a = r.lib.BlockCipherMode.extend(), o = a.Encryptor = a.extend({
            processBlock: function(n, s) {
              var i = this._cipher, l = i.blockSize, c = this._iv, d = this._keystream;
              c && (d = this._keystream = c.slice(0), this._iv = void 0), i.encryptBlock(d, 0);
              for (var h = 0; h < l; h++) n[s + h] ^= d[h];
            }
          });
          return a.Decryptor = o, a;
        }(), r.mode.OFB;
      });
    }(qo)), qo.exports;
  }
  var $o = {
    exports: {}
  }, ks;
  function Kf() {
    return ks || (ks = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.mode.ECB = function() {
          var a = r.lib.BlockCipherMode.extend();
          return a.Encryptor = a.extend({
            processBlock: function(o, n) {
              this._cipher.encryptBlock(o, n);
            }
          }), a.Decryptor = a.extend({
            processBlock: function(o, n) {
              this._cipher.decryptBlock(o, n);
            }
          }), a;
        }(), r.mode.ECB;
      });
    }($o)), $o.exports;
  }
  var Mo = {
    exports: {}
  }, Bs;
  function Gf() {
    return Bs || (Bs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.pad.AnsiX923 = {
          pad: function(a, o) {
            var n = a.sigBytes, s = o * 4, i = s - n % s, l = n + i - 1;
            a.clamp(), a.words[l >>> 2] |= i << 24 - l % 4 * 8, a.sigBytes += i;
          },
          unpad: function(a) {
            var o = a.words[a.sigBytes - 1 >>> 2] & 255;
            a.sigBytes -= o;
          }
        }, r.pad.Ansix923;
      });
    }(Mo)), Mo.exports;
  }
  var Wo = {
    exports: {}
  }, Cs;
  function Yf() {
    return Cs || (Cs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.pad.Iso10126 = {
          pad: function(a, o) {
            var n = o * 4, s = n - a.sigBytes % n;
            a.concat(r.lib.WordArray.random(s - 1)).concat(r.lib.WordArray.create([
              s << 24
            ], 1));
          },
          unpad: function(a) {
            var o = a.words[a.sigBytes - 1 >>> 2] & 255;
            a.sigBytes -= o;
          }
        }, r.pad.Iso10126;
      });
    }(Wo)), Wo.exports;
  }
  var Vo = {
    exports: {}
  }, Ss;
  function Xf() {
    return Ss || (Ss = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.pad.Iso97971 = {
          pad: function(a, o) {
            a.concat(r.lib.WordArray.create([
              2147483648
            ], 1)), r.pad.ZeroPadding.pad(a, o);
          },
          unpad: function(a) {
            r.pad.ZeroPadding.unpad(a), a.sigBytes--;
          }
        }, r.pad.Iso97971;
      });
    }(Vo)), Vo.exports;
  }
  var Ko = {
    exports: {}
  }, Ds;
  function Zf() {
    return Ds || (Ds = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.pad.ZeroPadding = {
          pad: function(a, o) {
            var n = o * 4;
            a.clamp(), a.sigBytes += n - (a.sigBytes % n || n);
          },
          unpad: function(a) {
            for (var o = a.words, n = a.sigBytes - 1, n = a.sigBytes - 1; n >= 0; n--) if (o[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
              a.sigBytes = n + 1;
              break;
            }
          }
        }, r.pad.ZeroPadding;
      });
    }(Ko)), Ko.exports;
  }
  var Go = {
    exports: {}
  }, Is;
  function Jf() {
    return Is || (Is = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return r.pad.NoPadding = {
          pad: function() {
          },
          unpad: function() {
          }
        }, r.pad.NoPadding;
      });
    }(Go)), Go.exports;
  }
  var Yo = {
    exports: {}
  }, Fs;
  function Qf() {
    return Fs || (Fs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), Le());
      })(fe, function(r) {
        return function(a) {
          var o = r, n = o.lib, s = n.CipherParams, i = o.enc, l = i.Hex, c = o.format;
          c.Hex = {
            stringify: function(d) {
              return d.ciphertext.toString(l);
            },
            parse: function(d) {
              var h = l.parse(d);
              return s.create({
                ciphertext: h
              });
            }
          };
        }(), r.format.Hex;
      });
    }(Yo)), Yo.exports;
  }
  var Xo = {
    exports: {}
  }, zs;
  function eh() {
    return zs || (zs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.BlockCipher, s = a.algo, i = [], l = [], c = [], d = [], h = [], p = [], g = [], m = [], b = [], x = [];
          (function() {
            for (var w = [], k = 0; k < 256; k++) k < 128 ? w[k] = k << 1 : w[k] = k << 1 ^ 283;
            for (var D = 0, S = 0, k = 0; k < 256; k++) {
              var F = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
              F = F >>> 8 ^ F & 255 ^ 99, i[D] = F, l[F] = D;
              var R = w[D], j = w[R], C = w[j], T = w[F] * 257 ^ F * 16843008;
              c[D] = T << 24 | T >>> 8, d[D] = T << 16 | T >>> 16, h[D] = T << 8 | T >>> 24, p[D] = T;
              var T = C * 16843009 ^ j * 65537 ^ R * 257 ^ D * 16843008;
              g[F] = T << 24 | T >>> 8, m[F] = T << 16 | T >>> 16, b[F] = T << 8 | T >>> 24, x[F] = T, D ? (D = R ^ w[w[w[C ^ R]]], S ^= w[w[S]]) : D = S = 1;
            }
          })();
          var _ = [
            0,
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54
          ], y = s.AES = n.extend({
            _doReset: function() {
              var w;
              if (!(this._nRounds && this._keyPriorReset === this._key)) {
                for (var k = this._keyPriorReset = this._key, D = k.words, S = k.sigBytes / 4, F = this._nRounds = S + 6, R = (F + 1) * 4, j = this._keySchedule = [], C = 0; C < R; C++) C < S ? j[C] = D[C] : (w = j[C - 1], C % S ? S > 6 && C % S == 4 && (w = i[w >>> 24] << 24 | i[w >>> 16 & 255] << 16 | i[w >>> 8 & 255] << 8 | i[w & 255]) : (w = w << 8 | w >>> 24, w = i[w >>> 24] << 24 | i[w >>> 16 & 255] << 16 | i[w >>> 8 & 255] << 8 | i[w & 255], w ^= _[C / S | 0] << 24), j[C] = j[C - S] ^ w);
                for (var T = this._invKeySchedule = [], H = 0; H < R; H++) {
                  var C = R - H;
                  if (H % 4) var w = j[C];
                  else var w = j[C - 4];
                  H < 4 || C <= 4 ? T[H] = w : T[H] = g[i[w >>> 24]] ^ m[i[w >>> 16 & 255]] ^ b[i[w >>> 8 & 255]] ^ x[i[w & 255]];
                }
              }
            },
            encryptBlock: function(w, k) {
              this._doCryptBlock(w, k, this._keySchedule, c, d, h, p, i);
            },
            decryptBlock: function(w, k) {
              var D = w[k + 1];
              w[k + 1] = w[k + 3], w[k + 3] = D, this._doCryptBlock(w, k, this._invKeySchedule, g, m, b, x, l);
              var D = w[k + 1];
              w[k + 1] = w[k + 3], w[k + 3] = D;
            },
            _doCryptBlock: function(w, k, D, S, F, R, j, C) {
              for (var T = this._nRounds, H = w[k] ^ D[0], U = w[k + 1] ^ D[1], M = w[k + 2] ^ D[2], G = w[k + 3] ^ D[3], J = 4, Z = 1; Z < T; Z++) {
                var ae = S[H >>> 24] ^ F[U >>> 16 & 255] ^ R[M >>> 8 & 255] ^ j[G & 255] ^ D[J++], O = S[U >>> 24] ^ F[M >>> 16 & 255] ^ R[G >>> 8 & 255] ^ j[H & 255] ^ D[J++], L = S[M >>> 24] ^ F[G >>> 16 & 255] ^ R[H >>> 8 & 255] ^ j[U & 255] ^ D[J++], E = S[G >>> 24] ^ F[H >>> 16 & 255] ^ R[U >>> 8 & 255] ^ j[M & 255] ^ D[J++];
                H = ae, U = O, M = L, G = E;
              }
              var ae = (C[H >>> 24] << 24 | C[U >>> 16 & 255] << 16 | C[M >>> 8 & 255] << 8 | C[G & 255]) ^ D[J++], O = (C[U >>> 24] << 24 | C[M >>> 16 & 255] << 16 | C[G >>> 8 & 255] << 8 | C[H & 255]) ^ D[J++], L = (C[M >>> 24] << 24 | C[G >>> 16 & 255] << 16 | C[H >>> 8 & 255] << 8 | C[U & 255]) ^ D[J++], E = (C[G >>> 24] << 24 | C[H >>> 16 & 255] << 16 | C[U >>> 8 & 255] << 8 | C[M & 255]) ^ D[J++];
              w[k] = ae, w[k + 1] = O, w[k + 2] = L, w[k + 3] = E;
            },
            keySize: 256 / 32
          });
          a.AES = n._createHelper(y);
        }(), r.AES;
      });
    }(Xo)), Xo.exports;
  }
  var Zo = {
    exports: {}
  }, Rs;
  function th() {
    return Rs || (Rs = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.WordArray, s = o.BlockCipher, i = a.algo, l = [
            57,
            49,
            41,
            33,
            25,
            17,
            9,
            1,
            58,
            50,
            42,
            34,
            26,
            18,
            10,
            2,
            59,
            51,
            43,
            35,
            27,
            19,
            11,
            3,
            60,
            52,
            44,
            36,
            63,
            55,
            47,
            39,
            31,
            23,
            15,
            7,
            62,
            54,
            46,
            38,
            30,
            22,
            14,
            6,
            61,
            53,
            45,
            37,
            29,
            21,
            13,
            5,
            28,
            20,
            12,
            4
          ], c = [
            14,
            17,
            11,
            24,
            1,
            5,
            3,
            28,
            15,
            6,
            21,
            10,
            23,
            19,
            12,
            4,
            26,
            8,
            16,
            7,
            27,
            20,
            13,
            2,
            41,
            52,
            31,
            37,
            47,
            55,
            30,
            40,
            51,
            45,
            33,
            48,
            44,
            49,
            39,
            56,
            34,
            53,
            46,
            42,
            50,
            36,
            29,
            32
          ], d = [
            1,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            15,
            17,
            19,
            21,
            23,
            25,
            27,
            28
          ], h = [
            {
              0: 8421888,
              268435456: 32768,
              536870912: 8421378,
              805306368: 2,
              1073741824: 512,
              1342177280: 8421890,
              1610612736: 8389122,
              1879048192: 8388608,
              2147483648: 514,
              2415919104: 8389120,
              2684354560: 33280,
              2952790016: 8421376,
              3221225472: 32770,
              3489660928: 8388610,
              3758096384: 0,
              4026531840: 33282,
              134217728: 0,
              402653184: 8421890,
              671088640: 33282,
              939524096: 32768,
              1207959552: 8421888,
              1476395008: 512,
              1744830464: 8421378,
              2013265920: 2,
              2281701376: 8389120,
              2550136832: 33280,
              2818572288: 8421376,
              3087007744: 8389122,
              3355443200: 8388610,
              3623878656: 32770,
              3892314112: 514,
              4160749568: 8388608,
              1: 32768,
              268435457: 2,
              536870913: 8421888,
              805306369: 8388608,
              1073741825: 8421378,
              1342177281: 33280,
              1610612737: 512,
              1879048193: 8389122,
              2147483649: 8421890,
              2415919105: 8421376,
              2684354561: 8388610,
              2952790017: 33282,
              3221225473: 514,
              3489660929: 8389120,
              3758096385: 32770,
              4026531841: 0,
              134217729: 8421890,
              402653185: 8421376,
              671088641: 8388608,
              939524097: 512,
              1207959553: 32768,
              1476395009: 8388610,
              1744830465: 2,
              2013265921: 33282,
              2281701377: 32770,
              2550136833: 8389122,
              2818572289: 514,
              3087007745: 8421888,
              3355443201: 8389120,
              3623878657: 0,
              3892314113: 33280,
              4160749569: 8421378
            },
            {
              0: 1074282512,
              16777216: 16384,
              33554432: 524288,
              50331648: 1074266128,
              67108864: 1073741840,
              83886080: 1074282496,
              100663296: 1073758208,
              117440512: 16,
              134217728: 540672,
              150994944: 1073758224,
              167772160: 1073741824,
              184549376: 540688,
              201326592: 524304,
              218103808: 0,
              234881024: 16400,
              251658240: 1074266112,
              8388608: 1073758208,
              25165824: 540688,
              41943040: 16,
              58720256: 1073758224,
              75497472: 1074282512,
              92274688: 1073741824,
              109051904: 524288,
              125829120: 1074266128,
              142606336: 524304,
              159383552: 0,
              176160768: 16384,
              192937984: 1074266112,
              209715200: 1073741840,
              226492416: 540672,
              243269632: 1074282496,
              260046848: 16400,
              268435456: 0,
              285212672: 1074266128,
              301989888: 1073758224,
              318767104: 1074282496,
              335544320: 1074266112,
              352321536: 16,
              369098752: 540688,
              385875968: 16384,
              402653184: 16400,
              419430400: 524288,
              436207616: 524304,
              452984832: 1073741840,
              469762048: 540672,
              486539264: 1073758208,
              503316480: 1073741824,
              520093696: 1074282512,
              276824064: 540688,
              293601280: 524288,
              310378496: 1074266112,
              327155712: 16384,
              343932928: 1073758208,
              360710144: 1074282512,
              377487360: 16,
              394264576: 1073741824,
              411041792: 1074282496,
              427819008: 1073741840,
              444596224: 1073758224,
              461373440: 524304,
              478150656: 0,
              494927872: 16400,
              511705088: 1074266128,
              528482304: 540672
            },
            {
              0: 260,
              1048576: 0,
              2097152: 67109120,
              3145728: 65796,
              4194304: 65540,
              5242880: 67108868,
              6291456: 67174660,
              7340032: 67174400,
              8388608: 67108864,
              9437184: 67174656,
              10485760: 65792,
              11534336: 67174404,
              12582912: 67109124,
              13631488: 65536,
              14680064: 4,
              15728640: 256,
              524288: 67174656,
              1572864: 67174404,
              2621440: 0,
              3670016: 67109120,
              4718592: 67108868,
              5767168: 65536,
              6815744: 65540,
              7864320: 260,
              8912896: 4,
              9961472: 256,
              11010048: 67174400,
              12058624: 65796,
              13107200: 65792,
              14155776: 67109124,
              15204352: 67174660,
              16252928: 67108864,
              16777216: 67174656,
              17825792: 65540,
              18874368: 65536,
              19922944: 67109120,
              20971520: 256,
              22020096: 67174660,
              23068672: 67108868,
              24117248: 0,
              25165824: 67109124,
              26214400: 67108864,
              27262976: 4,
              28311552: 65792,
              29360128: 67174400,
              30408704: 260,
              31457280: 65796,
              32505856: 67174404,
              17301504: 67108864,
              18350080: 260,
              19398656: 67174656,
              20447232: 0,
              21495808: 65540,
              22544384: 67109120,
              23592960: 256,
              24641536: 67174404,
              25690112: 65536,
              26738688: 67174660,
              27787264: 65796,
              28835840: 67108868,
              29884416: 67109124,
              30932992: 67174400,
              31981568: 4,
              33030144: 65792
            },
            {
              0: 2151682048,
              65536: 2147487808,
              131072: 4198464,
              196608: 2151677952,
              262144: 0,
              327680: 4198400,
              393216: 2147483712,
              458752: 4194368,
              524288: 2147483648,
              589824: 4194304,
              655360: 64,
              720896: 2147487744,
              786432: 2151678016,
              851968: 4160,
              917504: 4096,
              983040: 2151682112,
              32768: 2147487808,
              98304: 64,
              163840: 2151678016,
              229376: 2147487744,
              294912: 4198400,
              360448: 2151682112,
              425984: 0,
              491520: 2151677952,
              557056: 4096,
              622592: 2151682048,
              688128: 4194304,
              753664: 4160,
              819200: 2147483648,
              884736: 4194368,
              950272: 4198464,
              1015808: 2147483712,
              1048576: 4194368,
              1114112: 4198400,
              1179648: 2147483712,
              1245184: 0,
              1310720: 4160,
              1376256: 2151678016,
              1441792: 2151682048,
              1507328: 2147487808,
              1572864: 2151682112,
              1638400: 2147483648,
              1703936: 2151677952,
              1769472: 4198464,
              1835008: 2147487744,
              1900544: 4194304,
              1966080: 64,
              2031616: 4096,
              1081344: 2151677952,
              1146880: 2151682112,
              1212416: 0,
              1277952: 4198400,
              1343488: 4194368,
              1409024: 2147483648,
              1474560: 2147487808,
              1540096: 64,
              1605632: 2147483712,
              1671168: 4096,
              1736704: 2147487744,
              1802240: 2151678016,
              1867776: 4160,
              1933312: 2151682048,
              1998848: 4194304,
              2064384: 4198464
            },
            {
              0: 128,
              4096: 17039360,
              8192: 262144,
              12288: 536870912,
              16384: 537133184,
              20480: 16777344,
              24576: 553648256,
              28672: 262272,
              32768: 16777216,
              36864: 537133056,
              40960: 536871040,
              45056: 553910400,
              49152: 553910272,
              53248: 0,
              57344: 17039488,
              61440: 553648128,
              2048: 17039488,
              6144: 553648256,
              10240: 128,
              14336: 17039360,
              18432: 262144,
              22528: 537133184,
              26624: 553910272,
              30720: 536870912,
              34816: 537133056,
              38912: 0,
              43008: 553910400,
              47104: 16777344,
              51200: 536871040,
              55296: 553648128,
              59392: 16777216,
              63488: 262272,
              65536: 262144,
              69632: 128,
              73728: 536870912,
              77824: 553648256,
              81920: 16777344,
              86016: 553910272,
              90112: 537133184,
              94208: 16777216,
              98304: 553910400,
              102400: 553648128,
              106496: 17039360,
              110592: 537133056,
              114688: 262272,
              118784: 536871040,
              122880: 0,
              126976: 17039488,
              67584: 553648256,
              71680: 16777216,
              75776: 17039360,
              79872: 537133184,
              83968: 536870912,
              88064: 17039488,
              92160: 128,
              96256: 553910272,
              100352: 262272,
              104448: 553910400,
              108544: 0,
              112640: 553648128,
              116736: 16777344,
              120832: 262144,
              124928: 537133056,
              129024: 536871040
            },
            {
              0: 268435464,
              256: 8192,
              512: 270532608,
              768: 270540808,
              1024: 268443648,
              1280: 2097152,
              1536: 2097160,
              1792: 268435456,
              2048: 0,
              2304: 268443656,
              2560: 2105344,
              2816: 8,
              3072: 270532616,
              3328: 2105352,
              3584: 8200,
              3840: 270540800,
              128: 270532608,
              384: 270540808,
              640: 8,
              896: 2097152,
              1152: 2105352,
              1408: 268435464,
              1664: 268443648,
              1920: 8200,
              2176: 2097160,
              2432: 8192,
              2688: 268443656,
              2944: 270532616,
              3200: 0,
              3456: 270540800,
              3712: 2105344,
              3968: 268435456,
              4096: 268443648,
              4352: 270532616,
              4608: 270540808,
              4864: 8200,
              5120: 2097152,
              5376: 268435456,
              5632: 268435464,
              5888: 2105344,
              6144: 2105352,
              6400: 0,
              6656: 8,
              6912: 270532608,
              7168: 8192,
              7424: 268443656,
              7680: 270540800,
              7936: 2097160,
              4224: 8,
              4480: 2105344,
              4736: 2097152,
              4992: 268435464,
              5248: 268443648,
              5504: 8200,
              5760: 270540808,
              6016: 270532608,
              6272: 270540800,
              6528: 270532616,
              6784: 8192,
              7040: 2105352,
              7296: 2097160,
              7552: 0,
              7808: 268435456,
              8064: 268443656
            },
            {
              0: 1048576,
              16: 33555457,
              32: 1024,
              48: 1049601,
              64: 34604033,
              80: 0,
              96: 1,
              112: 34603009,
              128: 33555456,
              144: 1048577,
              160: 33554433,
              176: 34604032,
              192: 34603008,
              208: 1025,
              224: 1049600,
              240: 33554432,
              8: 34603009,
              24: 0,
              40: 33555457,
              56: 34604032,
              72: 1048576,
              88: 33554433,
              104: 33554432,
              120: 1025,
              136: 1049601,
              152: 33555456,
              168: 34603008,
              184: 1048577,
              200: 1024,
              216: 34604033,
              232: 1,
              248: 1049600,
              256: 33554432,
              272: 1048576,
              288: 33555457,
              304: 34603009,
              320: 1048577,
              336: 33555456,
              352: 34604032,
              368: 1049601,
              384: 1025,
              400: 34604033,
              416: 1049600,
              432: 1,
              448: 0,
              464: 34603008,
              480: 33554433,
              496: 1024,
              264: 1049600,
              280: 33555457,
              296: 34603009,
              312: 1,
              328: 33554432,
              344: 1048576,
              360: 1025,
              376: 34604032,
              392: 33554433,
              408: 34603008,
              424: 0,
              440: 34604033,
              456: 1049601,
              472: 1024,
              488: 33555456,
              504: 1048577
            },
            {
              0: 134219808,
              1: 131072,
              2: 134217728,
              3: 32,
              4: 131104,
              5: 134350880,
              6: 134350848,
              7: 2048,
              8: 134348800,
              9: 134219776,
              10: 133120,
              11: 134348832,
              12: 2080,
              13: 0,
              14: 134217760,
              15: 133152,
              2147483648: 2048,
              2147483649: 134350880,
              2147483650: 134219808,
              2147483651: 134217728,
              2147483652: 134348800,
              2147483653: 133120,
              2147483654: 133152,
              2147483655: 32,
              2147483656: 134217760,
              2147483657: 2080,
              2147483658: 131104,
              2147483659: 134350848,
              2147483660: 0,
              2147483661: 134348832,
              2147483662: 134219776,
              2147483663: 131072,
              16: 133152,
              17: 134350848,
              18: 32,
              19: 2048,
              20: 134219776,
              21: 134217760,
              22: 134348832,
              23: 131072,
              24: 0,
              25: 131104,
              26: 134348800,
              27: 134219808,
              28: 134350880,
              29: 133120,
              30: 2080,
              31: 134217728,
              2147483664: 131072,
              2147483665: 2048,
              2147483666: 134348832,
              2147483667: 133152,
              2147483668: 32,
              2147483669: 134348800,
              2147483670: 134217728,
              2147483671: 134219808,
              2147483672: 134350880,
              2147483673: 134217760,
              2147483674: 134219776,
              2147483675: 0,
              2147483676: 133120,
              2147483677: 2080,
              2147483678: 131104,
              2147483679: 134350848
            }
          ], p = [
            4160749569,
            528482304,
            33030144,
            2064384,
            129024,
            8064,
            504,
            2147483679
          ], g = i.DES = s.extend({
            _doReset: function() {
              for (var _ = this._key, y = _.words, w = [], k = 0; k < 56; k++) {
                var D = l[k] - 1;
                w[k] = y[D >>> 5] >>> 31 - D % 32 & 1;
              }
              for (var S = this._subKeys = [], F = 0; F < 16; F++) {
                for (var R = S[F] = [], j = d[F], k = 0; k < 24; k++) R[k / 6 | 0] |= w[(c[k] - 1 + j) % 28] << 31 - k % 6, R[4 + (k / 6 | 0)] |= w[28 + (c[k + 24] - 1 + j) % 28] << 31 - k % 6;
                R[0] = R[0] << 1 | R[0] >>> 31;
                for (var k = 1; k < 7; k++) R[k] = R[k] >>> (k - 1) * 4 + 3;
                R[7] = R[7] << 5 | R[7] >>> 27;
              }
              for (var C = this._invSubKeys = [], k = 0; k < 16; k++) C[k] = S[15 - k];
            },
            encryptBlock: function(_, y) {
              this._doCryptBlock(_, y, this._subKeys);
            },
            decryptBlock: function(_, y) {
              this._doCryptBlock(_, y, this._invSubKeys);
            },
            _doCryptBlock: function(_, y, w) {
              this._lBlock = _[y], this._rBlock = _[y + 1], m.call(this, 4, 252645135), m.call(this, 16, 65535), b.call(this, 2, 858993459), b.call(this, 8, 16711935), m.call(this, 1, 1431655765);
              for (var k = 0; k < 16; k++) {
                for (var D = w[k], S = this._lBlock, F = this._rBlock, R = 0, j = 0; j < 8; j++) R |= h[j][((F ^ D[j]) & p[j]) >>> 0];
                this._lBlock = F, this._rBlock = S ^ R;
              }
              var C = this._lBlock;
              this._lBlock = this._rBlock, this._rBlock = C, m.call(this, 1, 1431655765), b.call(this, 8, 16711935), b.call(this, 2, 858993459), m.call(this, 16, 65535), m.call(this, 4, 252645135), _[y] = this._lBlock, _[y + 1] = this._rBlock;
            },
            keySize: 64 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          function m(_, y) {
            var w = (this._lBlock >>> _ ^ this._rBlock) & y;
            this._rBlock ^= w, this._lBlock ^= w << _;
          }
          function b(_, y) {
            var w = (this._rBlock >>> _ ^ this._lBlock) & y;
            this._lBlock ^= w, this._rBlock ^= w << _;
          }
          a.DES = s._createHelper(g);
          var x = i.TripleDES = s.extend({
            _doReset: function() {
              var _ = this._key, y = _.words;
              if (y.length !== 2 && y.length !== 4 && y.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
              var w = y.slice(0, 2), k = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4), D = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
              this._des1 = g.createEncryptor(n.create(w)), this._des2 = g.createEncryptor(n.create(k)), this._des3 = g.createEncryptor(n.create(D));
            },
            encryptBlock: function(_, y) {
              this._des1.encryptBlock(_, y), this._des2.decryptBlock(_, y), this._des3.encryptBlock(_, y);
            },
            decryptBlock: function(_, y) {
              this._des3.decryptBlock(_, y), this._des2.encryptBlock(_, y), this._des1.decryptBlock(_, y);
            },
            keySize: 192 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          a.TripleDES = s._createHelper(x);
        }(), r.TripleDES;
      });
    }(Zo)), Zo.exports;
  }
  var Jo = {
    exports: {}
  }, Ts;
  function rh() {
    return Ts || (Ts = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.StreamCipher, s = a.algo, i = s.RC4 = n.extend({
            _doReset: function() {
              for (var d = this._key, h = d.words, p = d.sigBytes, g = this._S = [], m = 0; m < 256; m++) g[m] = m;
              for (var m = 0, b = 0; m < 256; m++) {
                var x = m % p, _ = h[x >>> 2] >>> 24 - x % 4 * 8 & 255;
                b = (b + g[m] + _) % 256;
                var y = g[m];
                g[m] = g[b], g[b] = y;
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function(d, h) {
              d[h] ^= l.call(this);
            },
            keySize: 256 / 32,
            ivSize: 0
          });
          function l() {
            for (var d = this._S, h = this._i, p = this._j, g = 0, m = 0; m < 4; m++) {
              h = (h + 1) % 256, p = (p + d[h]) % 256;
              var b = d[h];
              d[h] = d[p], d[p] = b, g |= d[(d[h] + d[p]) % 256] << 24 - m * 8;
            }
            return this._i = h, this._j = p, g;
          }
          a.RC4 = n._createHelper(i);
          var c = s.RC4Drop = i.extend({
            cfg: i.cfg.extend({
              drop: 192
            }),
            _doReset: function() {
              i._doReset.call(this);
              for (var d = this.cfg.drop; d > 0; d--) l.call(this);
            }
          });
          a.RC4Drop = n._createHelper(c);
        }(), r.RC4;
      });
    }(Jo)), Jo.exports;
  }
  var Qo = {
    exports: {}
  }, Ns;
  function ah() {
    return Ns || (Ns = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.StreamCipher, s = a.algo, i = [], l = [], c = [], d = s.Rabbit = n.extend({
            _doReset: function() {
              for (var p = this._key.words, g = this.cfg.iv, m = 0; m < 4; m++) p[m] = (p[m] << 8 | p[m] >>> 24) & 16711935 | (p[m] << 24 | p[m] >>> 8) & 4278255360;
              var b = this._X = [
                p[0],
                p[3] << 16 | p[2] >>> 16,
                p[1],
                p[0] << 16 | p[3] >>> 16,
                p[2],
                p[1] << 16 | p[0] >>> 16,
                p[3],
                p[2] << 16 | p[1] >>> 16
              ], x = this._C = [
                p[2] << 16 | p[2] >>> 16,
                p[0] & 4294901760 | p[1] & 65535,
                p[3] << 16 | p[3] >>> 16,
                p[1] & 4294901760 | p[2] & 65535,
                p[0] << 16 | p[0] >>> 16,
                p[2] & 4294901760 | p[3] & 65535,
                p[1] << 16 | p[1] >>> 16,
                p[3] & 4294901760 | p[0] & 65535
              ];
              this._b = 0;
              for (var m = 0; m < 4; m++) h.call(this);
              for (var m = 0; m < 8; m++) x[m] ^= b[m + 4 & 7];
              if (g) {
                var _ = g.words, y = _[0], w = _[1], k = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, D = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, S = k >>> 16 | D & 4294901760, F = D << 16 | k & 65535;
                x[0] ^= k, x[1] ^= S, x[2] ^= D, x[3] ^= F, x[4] ^= k, x[5] ^= S, x[6] ^= D, x[7] ^= F;
                for (var m = 0; m < 4; m++) h.call(this);
              }
            },
            _doProcessBlock: function(p, g) {
              var m = this._X;
              h.call(this), i[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16, i[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16, i[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16, i[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
              for (var b = 0; b < 4; b++) i[b] = (i[b] << 8 | i[b] >>> 24) & 16711935 | (i[b] << 24 | i[b] >>> 8) & 4278255360, p[g + b] ^= i[b];
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function h() {
            for (var p = this._X, g = this._C, m = 0; m < 8; m++) l[m] = g[m];
            g[0] = g[0] + 1295307597 + this._b | 0, g[1] = g[1] + 3545052371 + (g[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, g[2] = g[2] + 886263092 + (g[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, g[3] = g[3] + 1295307597 + (g[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, g[4] = g[4] + 3545052371 + (g[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, g[5] = g[5] + 886263092 + (g[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, g[6] = g[6] + 1295307597 + (g[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, g[7] = g[7] + 3545052371 + (g[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = g[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
            for (var m = 0; m < 8; m++) {
              var b = p[m] + g[m], x = b & 65535, _ = b >>> 16, y = ((x * x >>> 17) + x * _ >>> 15) + _ * _, w = ((b & 4294901760) * b | 0) + ((b & 65535) * b | 0);
              c[m] = y ^ w;
            }
            p[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, p[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, p[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, p[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, p[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, p[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, p[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, p[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
          }
          a.Rabbit = n._createHelper(d);
        }(), r.Rabbit;
      });
    }(Qo)), Qo.exports;
  }
  var en = {
    exports: {}
  }, Os;
  function oh() {
    return Os || (Os = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.StreamCipher, s = a.algo, i = [], l = [], c = [], d = s.RabbitLegacy = n.extend({
            _doReset: function() {
              var p = this._key.words, g = this.cfg.iv, m = this._X = [
                p[0],
                p[3] << 16 | p[2] >>> 16,
                p[1],
                p[0] << 16 | p[3] >>> 16,
                p[2],
                p[1] << 16 | p[0] >>> 16,
                p[3],
                p[2] << 16 | p[1] >>> 16
              ], b = this._C = [
                p[2] << 16 | p[2] >>> 16,
                p[0] & 4294901760 | p[1] & 65535,
                p[3] << 16 | p[3] >>> 16,
                p[1] & 4294901760 | p[2] & 65535,
                p[0] << 16 | p[0] >>> 16,
                p[2] & 4294901760 | p[3] & 65535,
                p[1] << 16 | p[1] >>> 16,
                p[3] & 4294901760 | p[0] & 65535
              ];
              this._b = 0;
              for (var x = 0; x < 4; x++) h.call(this);
              for (var x = 0; x < 8; x++) b[x] ^= m[x + 4 & 7];
              if (g) {
                var _ = g.words, y = _[0], w = _[1], k = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, D = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, S = k >>> 16 | D & 4294901760, F = D << 16 | k & 65535;
                b[0] ^= k, b[1] ^= S, b[2] ^= D, b[3] ^= F, b[4] ^= k, b[5] ^= S, b[6] ^= D, b[7] ^= F;
                for (var x = 0; x < 4; x++) h.call(this);
              }
            },
            _doProcessBlock: function(p, g) {
              var m = this._X;
              h.call(this), i[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16, i[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16, i[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16, i[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
              for (var b = 0; b < 4; b++) i[b] = (i[b] << 8 | i[b] >>> 24) & 16711935 | (i[b] << 24 | i[b] >>> 8) & 4278255360, p[g + b] ^= i[b];
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function h() {
            for (var p = this._X, g = this._C, m = 0; m < 8; m++) l[m] = g[m];
            g[0] = g[0] + 1295307597 + this._b | 0, g[1] = g[1] + 3545052371 + (g[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, g[2] = g[2] + 886263092 + (g[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, g[3] = g[3] + 1295307597 + (g[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, g[4] = g[4] + 3545052371 + (g[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, g[5] = g[5] + 886263092 + (g[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, g[6] = g[6] + 1295307597 + (g[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, g[7] = g[7] + 3545052371 + (g[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = g[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
            for (var m = 0; m < 8; m++) {
              var b = p[m] + g[m], x = b & 65535, _ = b >>> 16, y = ((x * x >>> 17) + x * _ >>> 15) + _ * _, w = ((b & 4294901760) * b | 0) + ((b & 65535) * b | 0);
              c[m] = y ^ w;
            }
            p[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, p[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, p[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, p[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, p[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, p[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, p[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, p[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
          }
          a.RabbitLegacy = n._createHelper(d);
        }(), r.RabbitLegacy;
      });
    }(en)), en.exports;
  }
  var tn = {
    exports: {}
  }, Ls;
  function nh() {
    return Ls || (Ls = 1, function(t, e) {
      (function(r, a, o) {
        t.exports = a(he(), wr(), yr(), lr(), Le());
      })(fe, function(r) {
        return function() {
          var a = r, o = a.lib, n = o.BlockCipher, s = a.algo;
          const i = 16, l = [
            608135816,
            2242054355,
            320440878,
            57701188,
            2752067618,
            698298832,
            137296536,
            3964562569,
            1160258022,
            953160567,
            3193202383,
            887688300,
            3232508343,
            3380367581,
            1065670069,
            3041331479,
            2450970073,
            2306472731
          ], c = [
            [
              3509652390,
              2564797868,
              805139163,
              3491422135,
              3101798381,
              1780907670,
              3128725573,
              4046225305,
              614570311,
              3012652279,
              134345442,
              2240740374,
              1667834072,
              1901547113,
              2757295779,
              4103290238,
              227898511,
              1921955416,
              1904987480,
              2182433518,
              2069144605,
              3260701109,
              2620446009,
              720527379,
              3318853667,
              677414384,
              3393288472,
              3101374703,
              2390351024,
              1614419982,
              1822297739,
              2954791486,
              3608508353,
              3174124327,
              2024746970,
              1432378464,
              3864339955,
              2857741204,
              1464375394,
              1676153920,
              1439316330,
              715854006,
              3033291828,
              289532110,
              2706671279,
              2087905683,
              3018724369,
              1668267050,
              732546397,
              1947742710,
              3462151702,
              2609353502,
              2950085171,
              1814351708,
              2050118529,
              680887927,
              999245976,
              1800124847,
              3300911131,
              1713906067,
              1641548236,
              4213287313,
              1216130144,
              1575780402,
              4018429277,
              3917837745,
              3693486850,
              3949271944,
              596196993,
              3549867205,
              258830323,
              2213823033,
              772490370,
              2760122372,
              1774776394,
              2652871518,
              566650946,
              4142492826,
              1728879713,
              2882767088,
              1783734482,
              3629395816,
              2517608232,
              2874225571,
              1861159788,
              326777828,
              3124490320,
              2130389656,
              2716951837,
              967770486,
              1724537150,
              2185432712,
              2364442137,
              1164943284,
              2105845187,
              998989502,
              3765401048,
              2244026483,
              1075463327,
              1455516326,
              1322494562,
              910128902,
              469688178,
              1117454909,
              936433444,
              3490320968,
              3675253459,
              1240580251,
              122909385,
              2157517691,
              634681816,
              4142456567,
              3825094682,
              3061402683,
              2540495037,
              79693498,
              3249098678,
              1084186820,
              1583128258,
              426386531,
              1761308591,
              1047286709,
              322548459,
              995290223,
              1845252383,
              2603652396,
              3431023940,
              2942221577,
              3202600964,
              3727903485,
              1712269319,
              422464435,
              3234572375,
              1170764815,
              3523960633,
              3117677531,
              1434042557,
              442511882,
              3600875718,
              1076654713,
              1738483198,
              4213154764,
              2393238008,
              3677496056,
              1014306527,
              4251020053,
              793779912,
              2902807211,
              842905082,
              4246964064,
              1395751752,
              1040244610,
              2656851899,
              3396308128,
              445077038,
              3742853595,
              3577915638,
              679411651,
              2892444358,
              2354009459,
              1767581616,
              3150600392,
              3791627101,
              3102740896,
              284835224,
              4246832056,
              1258075500,
              768725851,
              2589189241,
              3069724005,
              3532540348,
              1274779536,
              3789419226,
              2764799539,
              1660621633,
              3471099624,
              4011903706,
              913787905,
              3497959166,
              737222580,
              2514213453,
              2928710040,
              3937242737,
              1804850592,
              3499020752,
              2949064160,
              2386320175,
              2390070455,
              2415321851,
              4061277028,
              2290661394,
              2416832540,
              1336762016,
              1754252060,
              3520065937,
              3014181293,
              791618072,
              3188594551,
              3933548030,
              2332172193,
              3852520463,
              3043980520,
              413987798,
              3465142937,
              3030929376,
              4245938359,
              2093235073,
              3534596313,
              375366246,
              2157278981,
              2479649556,
              555357303,
              3870105701,
              2008414854,
              3344188149,
              4221384143,
              3956125452,
              2067696032,
              3594591187,
              2921233993,
              2428461,
              544322398,
              577241275,
              1471733935,
              610547355,
              4027169054,
              1432588573,
              1507829418,
              2025931657,
              3646575487,
              545086370,
              48609733,
              2200306550,
              1653985193,
              298326376,
              1316178497,
              3007786442,
              2064951626,
              458293330,
              2589141269,
              3591329599,
              3164325604,
              727753846,
              2179363840,
              146436021,
              1461446943,
              4069977195,
              705550613,
              3059967265,
              3887724982,
              4281599278,
              3313849956,
              1404054877,
              2845806497,
              146425753,
              1854211946
            ],
            [
              1266315497,
              3048417604,
              3681880366,
              3289982499,
              290971e4,
              1235738493,
              2632868024,
              2414719590,
              3970600049,
              1771706367,
              1449415276,
              3266420449,
              422970021,
              1963543593,
              2690192192,
              3826793022,
              1062508698,
              1531092325,
              1804592342,
              2583117782,
              2714934279,
              4024971509,
              1294809318,
              4028980673,
              1289560198,
              2221992742,
              1669523910,
              35572830,
              157838143,
              1052438473,
              1016535060,
              1802137761,
              1753167236,
              1386275462,
              3080475397,
              2857371447,
              1040679964,
              2145300060,
              2390574316,
              1461121720,
              2956646967,
              4031777805,
              4028374788,
              33600511,
              2920084762,
              1018524850,
              629373528,
              3691585981,
              3515945977,
              2091462646,
              2486323059,
              586499841,
              988145025,
              935516892,
              3367335476,
              2599673255,
              2839830854,
              265290510,
              3972581182,
              2759138881,
              3795373465,
              1005194799,
              847297441,
              406762289,
              1314163512,
              1332590856,
              1866599683,
              4127851711,
              750260880,
              613907577,
              1450815602,
              3165620655,
              3734664991,
              3650291728,
              3012275730,
              3704569646,
              1427272223,
              778793252,
              1343938022,
              2676280711,
              2052605720,
              1946737175,
              3164576444,
              3914038668,
              3967478842,
              3682934266,
              1661551462,
              3294938066,
              4011595847,
              840292616,
              3712170807,
              616741398,
              312560963,
              711312465,
              1351876610,
              322626781,
              1910503582,
              271666773,
              2175563734,
              1594956187,
              70604529,
              3617834859,
              1007753275,
              1495573769,
              4069517037,
              2549218298,
              2663038764,
              504708206,
              2263041392,
              3941167025,
              2249088522,
              1514023603,
              1998579484,
              1312622330,
              694541497,
              2582060303,
              2151582166,
              1382467621,
              776784248,
              2618340202,
              3323268794,
              2497899128,
              2784771155,
              503983604,
              4076293799,
              907881277,
              423175695,
              432175456,
              1378068232,
              4145222326,
              3954048622,
              3938656102,
              3820766613,
              2793130115,
              2977904593,
              26017576,
              3274890735,
              3194772133,
              1700274565,
              1756076034,
              4006520079,
              3677328699,
              720338349,
              1533947780,
              354530856,
              688349552,
              3973924725,
              1637815568,
              332179504,
              3949051286,
              53804574,
              2852348879,
              3044236432,
              1282449977,
              3583942155,
              3416972820,
              4006381244,
              1617046695,
              2628476075,
              3002303598,
              1686838959,
              431878346,
              2686675385,
              1700445008,
              1080580658,
              1009431731,
              832498133,
              3223435511,
              2605976345,
              2271191193,
              2516031870,
              1648197032,
              4164389018,
              2548247927,
              300782431,
              375919233,
              238389289,
              3353747414,
              2531188641,
              2019080857,
              1475708069,
              455242339,
              2609103871,
              448939670,
              3451063019,
              1395535956,
              2413381860,
              1841049896,
              1491858159,
              885456874,
              4264095073,
              4001119347,
              1565136089,
              3898914787,
              1108368660,
              540939232,
              1173283510,
              2745871338,
              3681308437,
              4207628240,
              3343053890,
              4016749493,
              1699691293,
              1103962373,
              3625875870,
              2256883143,
              3830138730,
              1031889488,
              3479347698,
              1535977030,
              4236805024,
              3251091107,
              2132092099,
              1774941330,
              1199868427,
              1452454533,
              157007616,
              2904115357,
              342012276,
              595725824,
              1480756522,
              206960106,
              497939518,
              591360097,
              863170706,
              2375253569,
              3596610801,
              1814182875,
              2094937945,
              3421402208,
              1082520231,
              3463918190,
              2785509508,
              435703966,
              3908032597,
              1641649973,
              2842273706,
              3305899714,
              1510255612,
              2148256476,
              2655287854,
              3276092548,
              4258621189,
              236887753,
              3681803219,
              274041037,
              1734335097,
              3815195456,
              3317970021,
              1899903192,
              1026095262,
              4050517792,
              356393447,
              2410691914,
              3873677099,
              3682840055
            ],
            [
              3913112168,
              2491498743,
              4132185628,
              2489919796,
              1091903735,
              1979897079,
              3170134830,
              3567386728,
              3557303409,
              857797738,
              1136121015,
              1342202287,
              507115054,
              2535736646,
              337727348,
              3213592640,
              1301675037,
              2528481711,
              1895095763,
              1721773893,
              3216771564,
              62756741,
              2142006736,
              835421444,
              2531993523,
              1442658625,
              3659876326,
              2882144922,
              676362277,
              1392781812,
              170690266,
              3921047035,
              1759253602,
              3611846912,
              1745797284,
              664899054,
              1329594018,
              3901205900,
              3045908486,
              2062866102,
              2865634940,
              3543621612,
              3464012697,
              1080764994,
              553557557,
              3656615353,
              3996768171,
              991055499,
              499776247,
              1265440854,
              648242737,
              3940784050,
              980351604,
              3713745714,
              1749149687,
              3396870395,
              4211799374,
              3640570775,
              1161844396,
              3125318951,
              1431517754,
              545492359,
              4268468663,
              3499529547,
              1437099964,
              2702547544,
              3433638243,
              2581715763,
              2787789398,
              1060185593,
              1593081372,
              2418618748,
              4260947970,
              69676912,
              2159744348,
              86519011,
              2512459080,
              3838209314,
              1220612927,
              3339683548,
              133810670,
              1090789135,
              1078426020,
              1569222167,
              845107691,
              3583754449,
              4072456591,
              1091646820,
              628848692,
              1613405280,
              3757631651,
              526609435,
              236106946,
              48312990,
              2942717905,
              3402727701,
              1797494240,
              859738849,
              992217954,
              4005476642,
              2243076622,
              3870952857,
              3732016268,
              765654824,
              3490871365,
              2511836413,
              1685915746,
              3888969200,
              1414112111,
              2273134842,
              3281911079,
              4080962846,
              172450625,
              2569994100,
              980381355,
              4109958455,
              2819808352,
              2716589560,
              2568741196,
              3681446669,
              3329971472,
              1835478071,
              660984891,
              3704678404,
              4045999559,
              3422617507,
              3040415634,
              1762651403,
              1719377915,
              3470491036,
              2693910283,
              3642056355,
              3138596744,
              1364962596,
              2073328063,
              1983633131,
              926494387,
              3423689081,
              2150032023,
              4096667949,
              1749200295,
              3328846651,
              309677260,
              2016342300,
              1779581495,
              3079819751,
              111262694,
              1274766160,
              443224088,
              298511866,
              1025883608,
              3806446537,
              1145181785,
              168956806,
              3641502830,
              3584813610,
              1689216846,
              3666258015,
              3200248200,
              1692713982,
              2646376535,
              4042768518,
              1618508792,
              1610833997,
              3523052358,
              4130873264,
              2001055236,
              3610705100,
              2202168115,
              4028541809,
              2961195399,
              1006657119,
              2006996926,
              3186142756,
              1430667929,
              3210227297,
              1314452623,
              4074634658,
              4101304120,
              2273951170,
              1399257539,
              3367210612,
              3027628629,
              1190975929,
              2062231137,
              2333990788,
              2221543033,
              2438960610,
              1181637006,
              548689776,
              2362791313,
              3372408396,
              3104550113,
              3145860560,
              296247880,
              1970579870,
              3078560182,
              3769228297,
              1714227617,
              3291629107,
              3898220290,
              166772364,
              1251581989,
              493813264,
              448347421,
              195405023,
              2709975567,
              677966185,
              3703036547,
              1463355134,
              2715995803,
              1338867538,
              1343315457,
              2802222074,
              2684532164,
              233230375,
              2599980071,
              2000651841,
              3277868038,
              1638401717,
              4028070440,
              3237316320,
              6314154,
              819756386,
              300326615,
              590932579,
              1405279636,
              3267499572,
              3150704214,
              2428286686,
              3959192993,
              3461946742,
              1862657033,
              1266418056,
              963775037,
              2089974820,
              2263052895,
              1917689273,
              448879540,
              3550394620,
              3981727096,
              150775221,
              3627908307,
              1303187396,
              508620638,
              2975983352,
              2726630617,
              1817252668,
              1876281319,
              1457606340,
              908771278,
              3720792119,
              3617206836,
              2455994898,
              1729034894,
              1080033504
            ],
            [
              976866871,
              3556439503,
              2881648439,
              1522871579,
              1555064734,
              1336096578,
              3548522304,
              2579274686,
              3574697629,
              3205460757,
              3593280638,
              3338716283,
              3079412587,
              564236357,
              2993598910,
              1781952180,
              1464380207,
              3163844217,
              3332601554,
              1699332808,
              1393555694,
              1183702653,
              3581086237,
              1288719814,
              691649499,
              2847557200,
              2895455976,
              3193889540,
              2717570544,
              1781354906,
              1676643554,
              2592534050,
              3230253752,
              1126444790,
              2770207658,
              2633158820,
              2210423226,
              2615765581,
              2414155088,
              3127139286,
              673620729,
              2805611233,
              1269405062,
              4015350505,
              3341807571,
              4149409754,
              1057255273,
              2012875353,
              2162469141,
              2276492801,
              2601117357,
              993977747,
              3918593370,
              2654263191,
              753973209,
              36408145,
              2530585658,
              25011837,
              3520020182,
              2088578344,
              530523599,
              2918365339,
              1524020338,
              1518925132,
              3760827505,
              3759777254,
              1202760957,
              3985898139,
              3906192525,
              674977740,
              4174734889,
              2031300136,
              2019492241,
              3983892565,
              4153806404,
              3822280332,
              352677332,
              2297720250,
              60907813,
              90501309,
              3286998549,
              1016092578,
              2535922412,
              2839152426,
              457141659,
              509813237,
              4120667899,
              652014361,
              1966332200,
              2975202805,
              55981186,
              2327461051,
              676427537,
              3255491064,
              2882294119,
              3433927263,
              1307055953,
              942726286,
              933058658,
              2468411793,
              3933900994,
              4215176142,
              1361170020,
              2001714738,
              2830558078,
              3274259782,
              1222529897,
              1679025792,
              2729314320,
              3714953764,
              1770335741,
              151462246,
              3013232138,
              1682292957,
              1483529935,
              471910574,
              1539241949,
              458788160,
              3436315007,
              1807016891,
              3718408830,
              978976581,
              1043663428,
              3165965781,
              1927990952,
              4200891579,
              2372276910,
              3208408903,
              3533431907,
              1412390302,
              2931980059,
              4132332400,
              1947078029,
              3881505623,
              4168226417,
              2941484381,
              1077988104,
              1320477388,
              886195818,
              18198404,
              3786409e3,
              2509781533,
              112762804,
              3463356488,
              1866414978,
              891333506,
              18488651,
              661792760,
              1628790961,
              3885187036,
              3141171499,
              876946877,
              2693282273,
              1372485963,
              791857591,
              2686433993,
              3759982718,
              3167212022,
              3472953795,
              2716379847,
              445679433,
              3561995674,
              3504004811,
              3574258232,
              54117162,
              3331405415,
              2381918588,
              3769707343,
              4154350007,
              1140177722,
              4074052095,
              668550556,
              3214352940,
              367459370,
              261225585,
              2610173221,
              4209349473,
              3468074219,
              3265815641,
              314222801,
              3066103646,
              3808782860,
              282218597,
              3406013506,
              3773591054,
              379116347,
              1285071038,
              846784868,
              2669647154,
              3771962079,
              3550491691,
              2305946142,
              453669953,
              1268987020,
              3317592352,
              3279303384,
              3744833421,
              2610507566,
              3859509063,
              266596637,
              3847019092,
              517658769,
              3462560207,
              3443424879,
              370717030,
              4247526661,
              2224018117,
              4143653529,
              4112773975,
              2788324899,
              2477274417,
              1456262402,
              2901442914,
              1517677493,
              1846949527,
              2295493580,
              3734397586,
              2176403920,
              1280348187,
              1908823572,
              3871786941,
              846861322,
              1172426758,
              3287448474,
              3383383037,
              1655181056,
              3139813346,
              901632758,
              1897031941,
              2986607138,
              3066810236,
              3447102507,
              1393639104,
              373351379,
              950779232,
              625454576,
              3124240540,
              4148612726,
              2007998917,
              544563296,
              2244738638,
              2330496472,
              2058025392,
              1291430526,
              424198748,
              50039436,
              29584100,
              3605783033,
              2429876329,
              2791104160,
              1057563949,
              3255363231,
              3075367218,
              3463963227,
              1469046755,
              985887462
            ]
          ];
          var d = {
            pbox: [],
            sbox: []
          };
          function h(x, _) {
            let y = _ >> 24 & 255, w = _ >> 16 & 255, k = _ >> 8 & 255, D = _ & 255, S = x.sbox[0][y] + x.sbox[1][w];
            return S = S ^ x.sbox[2][k], S = S + x.sbox[3][D], S;
          }
          function p(x, _, y) {
            let w = _, k = y, D;
            for (let S = 0; S < i; ++S) w = w ^ x.pbox[S], k = h(x, w) ^ k, D = w, w = k, k = D;
            return D = w, w = k, k = D, k = k ^ x.pbox[i], w = w ^ x.pbox[i + 1], {
              left: w,
              right: k
            };
          }
          function g(x, _, y) {
            let w = _, k = y, D;
            for (let S = i + 1; S > 1; --S) w = w ^ x.pbox[S], k = h(x, w) ^ k, D = w, w = k, k = D;
            return D = w, w = k, k = D, k = k ^ x.pbox[1], w = w ^ x.pbox[0], {
              left: w,
              right: k
            };
          }
          function m(x, _, y) {
            for (let F = 0; F < 4; F++) {
              x.sbox[F] = [];
              for (let R = 0; R < 256; R++) x.sbox[F][R] = c[F][R];
            }
            let w = 0;
            for (let F = 0; F < i + 2; F++) x.pbox[F] = l[F] ^ _[w], w++, w >= y && (w = 0);
            let k = 0, D = 0, S = 0;
            for (let F = 0; F < i + 2; F += 2) S = p(x, k, D), k = S.left, D = S.right, x.pbox[F] = k, x.pbox[F + 1] = D;
            for (let F = 0; F < 4; F++) for (let R = 0; R < 256; R += 2) S = p(x, k, D), k = S.left, D = S.right, x.sbox[F][R] = k, x.sbox[F][R + 1] = D;
            return true;
          }
          var b = s.Blowfish = n.extend({
            _doReset: function() {
              if (this._keyPriorReset !== this._key) {
                var x = this._keyPriorReset = this._key, _ = x.words, y = x.sigBytes / 4;
                m(d, _, y);
              }
            },
            encryptBlock: function(x, _) {
              var y = p(d, x[_], x[_ + 1]);
              x[_] = y.left, x[_ + 1] = y.right;
            },
            decryptBlock: function(x, _) {
              var y = g(d, x[_], x[_ + 1]);
              x[_] = y.left, x[_ + 1] = y.right;
            },
            blockSize: 64 / 32,
            keySize: 128 / 32,
            ivSize: 64 / 32
          });
          a.Blowfish = n._createHelper(b);
        }(), r.Blowfish;
      });
    }(tn)), tn.exports;
  }
  (function(t, e) {
    (function(r, a, o) {
      t.exports = a(he(), no(), Nf(), Of(), wr(), Lf(), yr(), wl(), ei(), Pf(), yl(), Uf(), jf(), Hf(), ti(), qf(), lr(), Le(), $f(), Mf(), Wf(), Vf(), Kf(), Gf(), Yf(), Xf(), Zf(), Jf(), Qf(), eh(), th(), rh(), ah(), oh(), nh());
    })(fe, function(r) {
      return r;
    });
  })(bl);
  var ih = bl.exports;
  const Va = dc(ih), sh = "V1", ch = `RGBS-AUTH-${sh}`, lh = "RGBS-AUTH-IDENTITY-V1", uh = 6e5, Ps = 32;
  mm = function(t, e, r, a) {
    return `${ch}|${t}|${e}|${r}|${a}`;
  };
  El = function(t) {
    if (t.signature_version !== 2 || t.purpose !== "login" || [
      t.challenge_id,
      t.nonce,
      t.origin,
      t.network,
      t.wallet_type,
      t.client_id
    ].some((e) => typeof e != "string" || !e || e.includes("|")) || !Number.isSafeInteger(t.timestamp) || !Number.isSafeInteger(t.expires_at) || t.timestamp <= 0 || t.expires_at <= t.timestamp) throw new Error("INVALID_PARAMETER");
    return `RGBS-AUTH-V2|${t.challenge_id}|${t.nonce}|${t.origin}|${t.network}|${t.wallet_type}|${t.client_id}|${t.purpose}|${t.timestamp}|${t.expires_at}`;
  };
  dh = function(t, e) {
    if (El(t), !/^[a-f0-9]{32}$/.test(t.challenge_id) || !/^[a-f0-9]{64}$/.test(t.nonce) || t.origin !== e || new URL(e).origin !== e && !/^chrome-extension:\/\/[a-p]{32}$/.test(e) || t.expires_at - t.timestamp > 120 || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(t.client_id)) throw new Error("INVALID_PARAMETER");
  };
  const Ka = "v2:", fh = 6e5, Tt = 16, Fr = 12;
  async function _l(t, e) {
    const r = await crypto.subtle.importKey("raw", new TextEncoder().encode(t), "PBKDF2", false, [
      "deriveKey"
    ]);
    return crypto.subtle.deriveKey({
      name: "PBKDF2",
      salt: e,
      iterations: fh,
      hash: "SHA-256"
    }, r, {
      name: "AES-GCM",
      length: 256
    }, false, [
      "encrypt",
      "decrypt"
    ]);
  }
  async function ri(t, e) {
    const r = crypto.getRandomValues(new Uint8Array(Tt)), a = crypto.getRandomValues(new Uint8Array(Fr)), o = await _l(e, r), n = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: a
    }, o, new TextEncoder().encode(t)), s = new Uint8Array(Tt + Fr + n.byteLength);
    return s.set(r, 0), s.set(a, Tt), s.set(new Uint8Array(n), Tt + Fr), Ka + gh(s);
  }
  function Al(t) {
    return !t.startsWith(Ka);
  }
  const ya = /* @__PURE__ */ new Map();
  function ga(t, e) {
    let r = ya.get(t);
    r || (r = /* @__PURE__ */ new Map(), ya.set(t, r));
    const a = r.get(e);
    if (a) return a;
    const o = r, n = hh(t, e).finally(() => {
      o.get(e) === n && o.delete(e), o.size === 0 && ya.get(t) === o && ya.delete(t);
    });
    return o.set(e, n), n;
  }
  async function hh(t, e) {
    if (!t.startsWith(Ka)) return ph(t, e);
    try {
      const r = mh(t.slice(Ka.length));
      if (r.byteLength <= Tt + Fr) throw new Error("ciphertext too short");
      const a = await _l(e, r.slice(0, Tt)), o = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: r.slice(Tt, Tt + Fr)
      }, a, r.slice(Tt + Fr));
      return new TextDecoder().decode(o);
    } catch {
      throw new Error("Invalid password or corrupted data");
    }
  }
  function ph(t, e) {
    try {
      const r = Va.AES.decrypt(t, e).toString(Va.enc.Utf8);
      if (!r) throw new Error("Decryption failed");
      return r;
    } catch {
      throw new Error("Invalid password or corrupted data");
    }
  }
  function gh(t) {
    let e = "";
    for (let r = 0; r < t.byteLength; r++) e += String.fromCharCode(t[r]);
    return btoa(e);
  }
  function mh(t) {
    const e = atob(t), r = new Uint8Array(e.length);
    for (let a = 0; a < e.length; a++) r[a] = e.charCodeAt(a);
    return r;
  }
  xh = function(t, e = 8) {
    return t ? t.length < e ? {
      valid: false,
      error: `Password must be at least ${e} characters`
    } : [
      /[a-z]/,
      /[A-Z]/,
      /[0-9]/,
      /[^a-zA-Z0-9]/
    ].filter((a) => a.test(t)).length < 2 ? {
      valid: false,
      error: "Password must mix at least two of: lowercase, uppercase, digits, symbols"
    } : {
      valid: true
    } : {
      valid: false,
      error: "Password is required"
    };
  };
  Ra = async function(t) {
    const e = await crypto.subtle.importKey("raw", new TextEncoder().encode(t), "PBKDF2", false, [
      "deriveBits"
    ]), r = await crypto.subtle.deriveBits({
      name: "PBKDF2",
      salt: new TextEncoder().encode(lh),
      iterations: uh,
      hash: "SHA-256"
    }, e, Ps * 8), a = new Uint8Array(r);
    let o = 0;
    for (; !xl(a); ) {
      if (++o > 256) throw new Error("deriveAuthKey: failed to derive valid secp256k1 key");
      for (let i = Ps - 1; i >= 0 && ++a[i] === 0; i--) ;
    }
    const n = zt(a), s = Array.from(n).map((i) => i.toString(16).padStart(2, "0")).join("");
    return {
      privkeyBytes: a,
      pubkeyHex: s
    };
  };
  let vh, bh, Ur, kl;
  xm = Object.freeze(Object.defineProperty({
    __proto__: null,
    decrypt: ga,
    deriveAuthKey: Ra,
    encrypt: ri,
    isLegacyCiphertext: Al,
    validatePassword: xh
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  vh = "stash_webcrypto_keys";
  bh = 1;
  Ur = "keys";
  kl = "device_password_enc_key";
  function Bl() {
    return new Promise((t, e) => {
      const r = indexedDB.open(vh, bh);
      r.onupgradeneeded = () => {
        r.result.objectStoreNames.contains(Ur) || r.result.createObjectStore(Ur);
      }, r.onsuccess = () => t(r.result), r.onerror = () => e(r.error);
    });
  }
  async function wh() {
    const t = await Bl();
    return new Promise((e, r) => {
      const o = t.transaction(Ur, "readonly").objectStore(Ur).get(kl);
      o.onsuccess = () => {
        t.close(), e(o.result);
      }, o.onerror = () => {
        t.close(), r(o.error);
      };
    });
  }
  async function yh(t) {
    const e = await Bl();
    return new Promise((r, a) => {
      const o = e.transaction(Ur, "readwrite");
      o.objectStore(Ur).put(t, kl), o.oncomplete = () => {
        e.close(), r();
      }, o.onerror = () => {
        e.close(), a(o.error);
      };
    });
  }
  async function Cl() {
    const t = await wh();
    if (t) return t;
    const e = await crypto.subtle.generateKey({
      name: "AES-GCM",
      length: 256
    }, false, [
      "encrypt",
      "decrypt"
    ]);
    return await yh(e), e;
  }
  async function Sl(t) {
    const e = await Cl(), r = crypto.getRandomValues(new Uint8Array(12)), a = new TextEncoder().encode(t), o = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: r
    }, e, a), n = new Uint8Array(r.byteLength + o.byteLength);
    return n.set(r, 0), n.set(new Uint8Array(o), r.byteLength), _h(n);
  }
  async function Eh(t) {
    try {
      const e = await Cl(), r = Ah(t);
      if (r.byteLength < 13) return null;
      const a = r.slice(0, 12), o = r.slice(12), n = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: a
      }, e, o);
      return new TextDecoder().decode(n);
    } catch {
      return null;
    }
  }
  function _h(t) {
    let e = "";
    for (let r = 0; r < t.byteLength; r++) e += String.fromCharCode(t[r]);
    return btoa(e);
  }
  function Ah(t) {
    const e = atob(t), r = new Uint8Array(e.length);
    for (let a = 0; a < e.length; a++) r[a] = e.charCodeAt(a);
    return r;
  }
  let Us, kh, te, Ve, Ga, Dl, Sh, Dh, Ih, Fh, St;
  Us = {
    mainnet: "https://blockstream.info/api",
    testnet4: "https://mempool.space/testnet/api",
    regtest: "https://mempool.space/signet/api"
  };
  kh = (t) => {
    const e = Us[t];
    return e || (console.error(`No API URL configured for network: ${t}`), Us.regtest);
  };
  vm = {
    mainnet: "Mainnet",
    testnet4: "Testnet",
    regtest: "Regtest"
  };
  bm = {
    mainnet: {
      bg: "bg-okx-green",
      text: "text-okx-green",
      border: "border-okx-green"
    },
    testnet4: {
      bg: "bg-okx-orange",
      text: "text-okx-orange",
      border: "border-okx-orange"
    },
    regtest: {
      bg: "bg-green-600",
      text: "text-green-400",
      border: "border-green-400"
    }
  };
  te = {
    WALLET_DATA: "stash_wallet_data",
    NETWORK: "stash_network",
    IS_LOCKED: "stash_is_locked",
    NODE_STATUS: "stash_wallet_status",
    NODE_CONFIG: "stash_wallet_config",
    LANGUAGE: "stash_language",
    LSP_IDENTITY: "stash_lsp_identity",
    PASSWORD_ENC_KEY: "stash_password_enc_key",
    ENCRYPTED_PASSWORD: "stash_encrypted_password",
    UPDATE_MODE: "stash_update_mode",
    SIDE_PANEL_ENABLED: "stash_side_panel_enabled",
    MOBILE_MODE_ENABLED: "stash_mobile_mode_enabled"
  };
  Ve = (t) => `stash_wallet_config_${t}`;
  Ga = (t) => `stash_wallet_status_${t}`;
  Bh = (t) => `btcAddress_${t}`;
  wm = (t, e) => `btcAddress_${t}:${e.replace(/\/+$/, "")}`;
  ym = (t, e) => `rgbTopUpPending_${t}:${e.replace(/\/+$/, "")}`;
  Ch = (t) => `autoAcceptedPayments_${t}`;
  Dl = "stash_rlsp_identity";
  Sh = (t) => `${Dl}_${t}`;
  Dh = (t) => `stash_lsp_identity_${t}`;
  Em = 1e8;
  _m = 2e4;
  Ih = "stash_secure_store";
  Fh = 1;
  St = "encrypted_data";
  function io() {
    return new Promise((t, e) => {
      const r = indexedDB.open(Ih, Fh);
      r.onupgradeneeded = () => {
        r.result.objectStoreNames.contains(St) || r.result.createObjectStore(St);
      }, r.onsuccess = () => t(r.result), r.onerror = () => e(r.error);
    });
  }
  async function zh(t) {
    const e = await Rc();
    if (!e) return null;
    try {
      return Va.AES.decrypt(t, e).toString(Va.enc.Utf8) || null;
    } catch {
      return null;
    }
  }
  async function Rh(t) {
    return t.startsWith("v2:") ? Oc(t) : zh(t);
  }
  async function nt(t, e) {
    const r = await Nc(JSON.stringify(e)), a = await io();
    return new Promise((o, n) => {
      const s = a.transaction(St, "readwrite");
      s.objectStore(St).put(r, t), s.oncomplete = () => {
        a.close(), o();
      }, s.onerror = () => {
        a.close(), n(s.error);
      };
    });
  }
  async function ir(t) {
    const e = await io(), r = await new Promise((o, n) => {
      const i = e.transaction(St, "readonly").objectStore(St).get(t);
      i.onsuccess = () => {
        e.close(), o(i.result);
      }, i.onerror = () => {
        e.close(), n(i.error);
      };
    });
    if (!r) return null;
    let a = await Rh(r);
    if (!a) return null;
    r.startsWith("v2:") || (await nt(t, JSON.parse(a)), await Rc() && await rd());
    try {
      return JSON.parse(a);
    } catch {
      return null;
    }
  }
  async function ta(t) {
    const e = await io();
    return new Promise((r, a) => {
      const o = e.transaction(St, "readwrite");
      o.objectStore(St).delete(t), o.oncomplete = () => {
        e.close(), r();
      }, o.onerror = () => {
        e.close(), a(o.error);
      };
    });
  }
  async function js(t) {
    const e = await io();
    return new Promise((r, a) => {
      const n = e.transaction(St, "readonly").objectStore(St).getAllKeys();
      n.onsuccess = () => {
        e.close();
        const s = n.result.filter((i) => typeof i == "string" && i.startsWith(t));
        r(s);
      }, n.onerror = () => {
        e.close(), a(n.error);
      };
    });
  }
  const Il = [
    "httpToken",
    "controlHttpToken",
    "keystorePassphrase",
    "nodeMnemonic",
    "cloudNodeMnemonics",
    "cloudAccountMnemonic"
  ];
  function Qe(t) {
    const e = {
      ...t
    };
    for (const r of Il) delete e[r];
    return e;
  }
  function Hs(t, e) {
    return t.mode !== "self-hosted" ? Qe(t) : {
      ...Qe(t),
      name: e.name,
      url: e.url,
      controlUrl: e.controlUrl,
      httpToken: e.httpToken,
      controlHttpToken: e.controlHttpToken,
      keystorePassphrase: e.keystorePassphrase,
      ...e.nodeMnemonic ? {
        nodeMnemonic: e.nodeMnemonic
      } : {}
    };
  }
  function Fl(t) {
    return Il.some((e) => !!t[e]);
  }
  const Ya = "regtest", zl = true;
  let ai = Ya;
  Th = function() {
    return ai;
  };
  V = {
    async get(t) {
      if (Je()) return (await chrome.storage.local.get(t))[t] || null;
      {
        const e = await ir(t);
        if (e !== null) return e;
        const r = localStorage.getItem(t);
        if (r) try {
          const a = JSON.parse(r);
          return await nt(t, a), localStorage.removeItem(t), a;
        } catch {
        }
        return null;
      }
    },
    async set(t, e) {
      Je() ? await chrome.storage.local.set({
        [t]: e
      }) : await nt(t, e);
    },
    async remove(t) {
      Je() ? await chrome.storage.local.remove(t) : await ta(t);
    }
  };
  Y = {
    async get(t) {
      var _a2;
      if (Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.session)) return (await chrome.storage.session.get(t))[t] ?? null;
      try {
        const e = sessionStorage.getItem(t);
        return e ? JSON.parse(e) : null;
      } catch {
        return null;
      }
    },
    async getMultiple(t) {
      var _a2;
      if (Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.session)) return chrome.storage.session.get(t);
      const e = {};
      for (const r of t) try {
        const a = sessionStorage.getItem(r);
        a !== null && (e[r] = JSON.parse(a));
      } catch {
      }
      return e;
    },
    async set(t, e) {
      var _a2;
      if (Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.session)) {
        await chrome.storage.session.set({
          [t]: e
        });
        return;
      }
      try {
        sessionStorage.setItem(t, JSON.stringify(e));
      } catch {
      }
    },
    async remove(t) {
      var _a2;
      if (Je() && ((_a2 = chrome.storage) == null ? void 0 : _a2.session)) {
        await chrome.storage.session.remove(t);
        return;
      }
      try {
        sessionStorage.removeItem(t);
      } catch {
      }
    }
  };
  async function Nh(t, e, r) {
    try {
      const a = await ri(JSON.stringify(t), e), o = await V.get(te.WALLET_DATA);
      if (!o) return;
      o.encryptedNodeConfigs = o.encryptedNodeConfigs ?? {}, o.encryptedNodeConfigs[r] = a, r === o.network && o.encryptedNodeConfig && delete o.encryptedNodeConfig, await V.set(te.WALLET_DATA, o);
    } catch (a) {
      console.error("Node entry migration to AES-GCM failed (old data intact):", a);
    }
  }
  async function Oh(t) {
    var _a2;
    const e = await V.get(te.WALLET_DATA);
    return e ? !!(((_a2 = e.encryptedNodeConfigs) == null ? void 0 : _a2[t]) ?? (t === e.network ? e.encryptedNodeConfig : void 0)) : false;
  }
  oi = async function(t, e, r = Ya) {
    try {
      if ((!t.nodeMnemonic || !t.cloudNodeMnemonics || !t.cloudAccountMnemonic) && await Oh(r)) {
        let l;
        try {
          l = await at(e, r);
        } catch {
          throw new Error("saveNode aborted: existing node record could not be decrypted, refusing to overwrite and risk losing the node mnemonic");
        }
        !t.nodeMnemonic && l.nodeMnemonic && (t = {
          ...t,
          nodeMnemonic: l.nodeMnemonic
        }), !t.cloudAccountMnemonic && l.cloudAccountMnemonic && (t = {
          ...t,
          cloudAccountMnemonic: l.cloudAccountMnemonic
        }), !t.cloudNodeMnemonics && l.cloudNodeMnemonics && (t = {
          ...t,
          cloudNodeMnemonics: l.cloudNodeMnemonics
        });
      }
      const a = await ri(JSON.stringify(t), e), n = await V.get(te.WALLET_DATA) ?? {
        encryptedNodeConfigs: {},
        network: r,
        isLocked: false,
        createdAt: Date.now()
      };
      n.encryptedNodeConfigs || (n.encryptedNodeConfigs = {}), n.encryptedNodeConfigs[r] = a, n.network = r, n.isLocked = false, await V.set(te.WALLET_DATA, n);
      const s = await ir(Ve(r));
      if (s && s.mode === "managed") {
        const i = Qe({
          ...s
        });
        await nt(Ve(r), i);
      } else if (!s && zl) {
        const i = Qe({
          ...s ?? {
            mode: "managed"
          },
          mode: "managed"
        });
        await nt(Ve(r), i);
      } else {
        const i = Qe({
          mode: "self-hosted",
          name: t.name,
          url: t.url,
          controlUrl: t.controlUrl
        });
        await nt(Ve(r), i);
      }
    } catch (a) {
      throw console.error("Error saving node:", a), new Error("Failed to save node");
    }
  };
  at = async function(t, e) {
    var _a2;
    const r = await V.get(te.WALLET_DATA);
    if (!r) throw new Error("No node found");
    const a = e ?? await ee(), o = ((_a2 = r.encryptedNodeConfigs) == null ? void 0 : _a2[a]) ?? (a === r.network ? r.encryptedNodeConfig : void 0);
    if (!o) throw new Error(`No node configured for network: ${a}`);
    try {
      const n = await ga(o, t), s = JSON.parse(n);
      Al(o) && await Nh(s, t, a);
      const i = await ir(Ve(a));
      if (i && i.mode === "managed") {
        const l = Qe({
          ...i
        });
        await nt(Ve(a), l);
      } else if (!i && zl) i || await nt(Ve(a), {
        mode: "managed"
      });
      else {
        const l = Qe({
          mode: "self-hosted",
          name: s.name,
          url: s.url,
          controlUrl: s.controlUrl
        });
        await nt(Ve(a), l);
      }
      return s;
    } catch {
      throw new Error("Invalid password");
    }
  };
  In = async function(t) {
    var _a2;
    try {
      const e = await V.get(te.WALLET_DATA);
      if (!e) return false;
      if (t === void 0) {
        const r = Object.values(e.encryptedNodeConfigs ?? {}).some(Boolean), a = !!e.encryptedNodeConfig;
        return r || a;
      }
      return !!(((_a2 = e.encryptedNodeConfigs) == null ? void 0 : _a2[t]) ?? (t === e.network ? e.encryptedNodeConfig : void 0));
    } catch (e) {
      return console.error("Error checking node existence:", e), false;
    }
  };
  async function Rl(t) {
    try {
      if (Je()) return;
      const e = await Sl(t);
      await V.set(te.ENCRYPTED_PASSWORD, e);
    } catch (e) {
      console.error("Error persisting encrypted password:", e);
    }
  }
  Lh = async function() {
    try {
      const t = await V.get(te.ENCRYPTED_PASSWORD);
      if (!t) return null;
      const e = await Eh(t);
      if (e) return e;
      const r = await V.get(te.PASSWORD_ENC_KEY);
      if (r) try {
        const a = await ga(t, r);
        if (a) {
          const o = await Sl(a);
          return await V.set(te.ENCRYPTED_PASSWORD, o), await V.remove(te.PASSWORD_ENC_KEY), a;
        }
      } catch {
      }
      return null;
    } catch {
      return null;
    }
  };
  async function Ph() {
    try {
      await V.remove(te.ENCRYPTED_PASSWORD);
    } catch (t) {
      console.error("Error clearing persisted password:", t);
    }
  }
  Uh = async function() {
    const { suspendDisplayCache: t } = await et(async () => {
      const { suspendDisplayCache: e } = await Promise.resolve().then(() => yd);
      return {
        suspendDisplayCache: e
      };
    }, void 0, import.meta.url);
    t();
    try {
      const e = await V.get(te.WALLET_DATA);
      e && (e.isLocked = true, await V.set(te.WALLET_DATA, e)), await Y.remove("walletPassword");
      const { managedV3Wallet: r } = await et(async () => {
        const { managedV3Wallet: o } = await Promise.resolve().then(() => ba);
        return {
          managedV3Wallet: o
        };
      }, void 0, import.meta.url);
      r.clearSession(true);
      const { clearCloudMemory: a } = await et(async () => {
        const { clearCloudMemory: o } = await Promise.resolve().then(() => ci);
        return {
          clearCloudMemory: o
        };
      }, void 0, import.meta.url);
      await a(), await Ph();
    } catch (e) {
      throw console.error("Error locking node:", e), e;
    }
  };
  jh = async function(t) {
    try {
      await at(t);
      const e = await V.get(te.WALLET_DATA);
      return e ? (e.isLocked = false, e.lastActivityAt = Date.now(), await V.set(te.WALLET_DATA, e), await Y.set("walletPassword", t), await Y.set("lastActivityAt", Date.now()), await Rl(t), true) : false;
    } catch (e) {
      return console.error("Error unlocking node:", e), false;
    }
  };
  De = async function() {
    var _a2;
    try {
      return ((_a2 = await V.get(te.WALLET_DATA)) == null ? void 0 : _a2.isLocked) ?? true;
    } catch (t) {
      return console.error("Error checking lock status:", t), true;
    }
  };
  ee = async function() {
    try {
      const t = await V.get(te.WALLET_DATA), e = (t == null ? void 0 : t.network) === "regtest" ? t.network : Ya;
      return ai = e, e;
    } catch (t) {
      return console.error("Error getting network:", t), Ya;
    }
  };
  Hh = async function(t) {
    try {
      if (t !== "regtest") throw new Error(`Unsupported network: ${t}`);
      const e = await V.get(te.WALLET_DATA);
      e && (e.network = t, await V.set(te.WALLET_DATA, e)), ai = t;
      const { managedV3Wallet: r } = await et(async () => {
        const { managedV3Wallet: o } = await Promise.resolve().then(() => ba);
        return {
          managedV3Wallet: o
        };
      }, void 0, import.meta.url);
      r.clearSession();
      const { clearDataCache: a } = await et(async () => {
        const { clearDataCache: o } = await Promise.resolve().then(() => ci);
        return {
          clearDataCache: o
        };
      }, void 0, import.meta.url);
      await a();
    } catch (e) {
      throw console.error("Error setting network:", e), e;
    }
  };
  qh = async function() {
    var _a2;
    try {
      return ((_a2 = await V.get(te.WALLET_DATA)) == null ? void 0 : _a2.autoLockTimeout) ?? 15 * 60 * 1e3;
    } catch (t) {
      return console.error("Error getting auto-lock timeout:", t), 15 * 60 * 1e3;
    }
  };
  $h = async function() {
    var _a2;
    try {
      return ((_a2 = await V.get(te.WALLET_DATA)) == null ? void 0 : _a2.lastActivityAt) ?? null;
    } catch {
      return null;
    }
  };
  Mh = async function() {
    try {
      const t = await V.get(te.WALLET_DATA);
      t && (t.lastActivityAt = Date.now(), await V.set(te.WALLET_DATA, t));
    } catch (t) {
      console.error("Error updating last activity:", t);
    }
  };
  Wh = async function(t) {
    try {
      const e = await V.get(te.WALLET_DATA);
      e && (e.autoLockTimeout = t, await V.set(te.WALLET_DATA, e));
    } catch (e) {
      throw console.error("Error setting auto-lock timeout:", e), e;
    }
  };
  Vh = async function(t) {
    try {
      const e = t ?? await ee(), r = await V.get(Ga(e));
      if (r !== null) return r;
      const a = await V.get(te.NODE_STATUS);
      return a ? (await V.set(Ga(e), a), await V.remove(te.NODE_STATUS), a) : "NONE";
    } catch {
      return "NONE";
    }
  };
  Kh = async function(t, e) {
    try {
      const r = e ?? await ee();
      await V.set(Ga(r), t);
    } catch (r) {
      console.error("Error setting node status:", r);
    }
  };
  Oe = async function(t) {
    try {
      const e = t ?? await ee();
      let r = await ir(Ve(e));
      if (r === null) {
        const a = await ir(te.NODE_CONFIG);
        a && (r = a, Fl(a) || (await nt(Ve(e), Qe(a)), await ta(te.NODE_CONFIG)));
      }
      return Qe(r ?? {
        mode: "managed"
      });
    } catch {
      return {
        mode: "managed"
      };
    }
  };
  Br = async function(t) {
    try {
      const e = t ?? await ee();
      let r = await ir(Ve(e));
      if (r === null) {
        const n = await ir(te.NODE_CONFIG);
        n && (r = n, await nt(Ve(e), Qe(n)), await ta(te.NODE_CONFIG));
      }
      const a = r ?? {
        mode: "managed"
      };
      if (Fl(a)) {
        const n = await Y.get("walletPassword");
        if (n) try {
          const s = await at(n, e);
          return await nt(Ve(e), Qe(a)), Hs(Qe(a), s);
        } catch {
        }
        return Qe(a);
      }
      const o = await Y.get("walletPassword");
      if (o) try {
        const n = await at(o, e);
        return Hs(a, n);
      } catch {
        return a;
      }
      return a;
    } catch {
      return {
        mode: "managed"
      };
    }
  };
  Yr = async function(t, e) {
    try {
      const r = e ?? await ee(), a = await ir(Ve(r)), o = Qe(t);
      if (await nt(Ve(r), o), JSON.stringify(a) !== JSON.stringify(o)) {
        const { managedV3Wallet: n } = await et(async () => {
          const { managedV3Wallet: s } = await Promise.resolve().then(() => ba);
          return {
            managedV3Wallet: s
          };
        }, void 0, import.meta.url);
        n.clearSession();
      }
      typeof window < "u" && JSON.stringify(a) !== JSON.stringify(o) && window.dispatchEvent(new Event("wallet-node-context-changed"));
    } catch (r) {
      throw console.error("Error saving node config:", r), r;
    }
  };
  Gh = async function() {
    try {
      await Y.remove("walletPassword");
      const { managedV3Wallet: t } = await et(async () => {
        const { managedV3Wallet: a } = await Promise.resolve().then(() => ba);
        return {
          managedV3Wallet: a
        };
      }, void 0, import.meta.url);
      t.clearSession(), await V.remove(te.WALLET_DATA);
      const e = [
        "mainnet",
        "testnet4",
        "regtest"
      ];
      await Promise.all([
        ...e.map((a) => ta(Ve(a))),
        ...e.map((a) => V.remove(Ga(a))),
        ...e.map((a) => V.remove(Bh(a))),
        ...e.map((a) => V.remove(Ch(a))),
        ...e.map((a) => V.remove(Dh(a))),
        ...e.map((a) => V.remove(Sh(a))),
        V.remove(Dl),
        V.remove("btcAddress"),
        V.remove("autoAcceptedPayments"),
        V.remove(te.LSP_IDENTITY),
        ta(te.NODE_CONFIG),
        V.remove(te.NODE_STATUS),
        V.remove(te.ENCRYPTED_PASSWORD),
        V.remove(te.PASSWORD_ENC_KEY),
        V.remove("authorized_sites")
      ]);
      const { clearDataCache: r } = await et(async () => {
        const { clearDataCache: a } = await Promise.resolve().then(() => ci);
        return {
          clearDataCache: a
        };
      }, void 0, import.meta.url);
      await r();
    } catch (t) {
      throw console.error("Error clearing node data:", t), t;
    }
  };
  Yh = async function() {
    try {
      return await V.get(te.LANGUAGE) ?? "en";
    } catch {
      return "en";
    }
  };
  Xh = async function(t) {
    try {
      await V.set(te.LANGUAGE, t);
    } catch (e) {
      console.error("Error saving language:", e);
    }
  };
  Zh = async function() {
    try {
      return await V.get(te.UPDATE_MODE) === "auto" ? "auto" : "manual";
    } catch {
      return "manual";
    }
  };
  Jh = async function() {
    return await V.get(te.MOBILE_MODE_ENABLED) === true;
  };
  Qh = async function(t) {
    await V.set(te.MOBILE_MODE_ENABLED, t);
  };
  ep = async function() {
    try {
      return await V.get(te.SIDE_PANEL_ENABLED) === true;
    } catch {
      return false;
    }
  };
  tp = async function(t) {
    try {
      await V.set(te.SIDE_PANEL_ENABLED, t);
    } catch (e) {
      console.error("Error saving side panel preference:", e);
    }
  };
  let Cr;
  Am = Object.freeze(Object.defineProperty({
    __proto__: null,
    clearWallet: Gh,
    getAutoLockTimeout: qh,
    getLanguage: Yh,
    getLastActivityAt: $h,
    getMobileModeEnabled: Jh,
    getNetwork: ee,
    getNetworkSync: Th,
    getNodeConfig: Br,
    getNodeConfigMetadata: Oe,
    getNodeStatus: Vh,
    getSidePanelEnabled: ep,
    getUpdateMode: Zh,
    isWalletExists: In,
    isWalletLocked: De,
    loadNode: at,
    lockWallet: Uh,
    persistEncryptedPassword: Rl,
    retrievePersistedPassword: Lh,
    saveNode: oi,
    sessionStore: Y,
    setAutoLockTimeout: Wh,
    setLanguage: Xh,
    setMobileModeEnabled: Qh,
    setNetwork: Hh,
    setNodeConfig: Yr,
    setNodeStatus: Kh,
    setSidePanelEnabled: tp,
    storage: V,
    unlockWallet: jh,
    updateLastActivity: Mh
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Cr = "stash-wallet";
  Tl = function(t) {
    var _a2;
    const e = new URL(t, (_a2 = globalThis.location) == null ? void 0 : _a2.origin);
    if (e.username || e.password || e.search || e.hash || e.protocol !== "https:" && !(e.protocol === "http:" && [
      "localhost",
      "127.0.0.1"
    ].includes(e.hostname))) throw new Error("Invalid cloud URL");
    return e.toString().replace(/\/$/, "");
  };
  const rp = (t, e) => typeof t == "string" || t instanceof URL ? fetch(String(t), e) : fetch(t, e);
  var Dt = {}, Bt = {}, Ee = {}, Ge = {}, qr = {}, so = {};
  Object.defineProperty(so, "__esModule", {
    value: true
  });
  so.crypto = void 0;
  so.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: true
    }), t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.Hash = t.nextTick = t.swap32IfBE = t.byteSwapIfBE = t.swap8IfBE = t.isLE = void 0, t.isBytes = r, t.anumber = a, t.abytes = o, t.ahash = n, t.aexists = s, t.aoutput = i, t.u8 = l, t.u32 = c, t.clean = d, t.createView = h, t.rotr = p, t.rotl = g, t.byteSwap = m, t.byteSwap32 = b, t.bytesToHex = y, t.hexToBytes = D, t.asyncLoop = F, t.utf8ToBytes = R, t.bytesToUtf8 = j, t.toBytes = C, t.kdfInputToBytes = T, t.concatBytes = H, t.checkOpts = U, t.createHasher = G, t.createOptHasher = J, t.createXOFer = Z, t.randomBytes = ae;
    const e = so;
    function r(O) {
      return O instanceof Uint8Array || ArrayBuffer.isView(O) && O.constructor.name === "Uint8Array";
    }
    function a(O) {
      if (!Number.isSafeInteger(O) || O < 0) throw new Error("positive integer expected, got " + O);
    }
    function o(O, ...L) {
      if (!r(O)) throw new Error("Uint8Array expected");
      if (L.length > 0 && !L.includes(O.length)) throw new Error("Uint8Array expected of length " + L + ", got length=" + O.length);
    }
    function n(O) {
      if (typeof O != "function" || typeof O.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
      a(O.outputLen), a(O.blockLen);
    }
    function s(O, L = true) {
      if (O.destroyed) throw new Error("Hash instance has been destroyed");
      if (L && O.finished) throw new Error("Hash#digest() has already been called");
    }
    function i(O, L) {
      o(O);
      const E = L.outputLen;
      if (O.length < E) throw new Error("digestInto() expects output buffer of length at least " + E);
    }
    function l(O) {
      return new Uint8Array(O.buffer, O.byteOffset, O.byteLength);
    }
    function c(O) {
      return new Uint32Array(O.buffer, O.byteOffset, Math.floor(O.byteLength / 4));
    }
    function d(...O) {
      for (let L = 0; L < O.length; L++) O[L].fill(0);
    }
    function h(O) {
      return new DataView(O.buffer, O.byteOffset, O.byteLength);
    }
    function p(O, L) {
      return O << 32 - L | O >>> L;
    }
    function g(O, L) {
      return O << L | O >>> 32 - L >>> 0;
    }
    t.isLE = new Uint8Array(new Uint32Array([
      287454020
    ]).buffer)[0] === 68;
    function m(O) {
      return O << 24 & 4278190080 | O << 8 & 16711680 | O >>> 8 & 65280 | O >>> 24 & 255;
    }
    t.swap8IfBE = t.isLE ? (O) => O : (O) => m(O), t.byteSwapIfBE = t.swap8IfBE;
    function b(O) {
      for (let L = 0; L < O.length; L++) O[L] = m(O[L]);
      return O;
    }
    t.swap32IfBE = t.isLE ? (O) => O : b;
    const x = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", _ = Array.from({
      length: 256
    }, (O, L) => L.toString(16).padStart(2, "0"));
    function y(O) {
      if (o(O), x) return O.toHex();
      let L = "";
      for (let E = 0; E < O.length; E++) L += _[O[E]];
      return L;
    }
    const w = {
      _0: 48,
      _9: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
    function k(O) {
      if (O >= w._0 && O <= w._9) return O - w._0;
      if (O >= w.A && O <= w.F) return O - (w.A - 10);
      if (O >= w.a && O <= w.f) return O - (w.a - 10);
    }
    function D(O) {
      if (typeof O != "string") throw new Error("hex string expected, got " + typeof O);
      if (x) return Uint8Array.fromHex(O);
      const L = O.length, E = L / 2;
      if (L % 2) throw new Error("hex string expected, got unpadded hex of length " + L);
      const B = new Uint8Array(E);
      for (let z = 0, N = 0; z < E; z++, N += 2) {
        const K = k(O.charCodeAt(N)), W = k(O.charCodeAt(N + 1));
        if (K === void 0 || W === void 0) {
          const X = O[N] + O[N + 1];
          throw new Error('hex string expected, got non-hex character "' + X + '" at index ' + N);
        }
        B[z] = K * 16 + W;
      }
      return B;
    }
    const S = async () => {
    };
    t.nextTick = S;
    async function F(O, L, E) {
      let B = Date.now();
      for (let z = 0; z < O; z++) {
        E(z);
        const N = Date.now() - B;
        N >= 0 && N < L || (await (0, t.nextTick)(), B += N);
      }
    }
    function R(O) {
      if (typeof O != "string") throw new Error("string expected");
      return new Uint8Array(new TextEncoder().encode(O));
    }
    function j(O) {
      return new TextDecoder().decode(O);
    }
    function C(O) {
      return typeof O == "string" && (O = R(O)), o(O), O;
    }
    function T(O) {
      return typeof O == "string" && (O = R(O)), o(O), O;
    }
    function H(...O) {
      let L = 0;
      for (let B = 0; B < O.length; B++) {
        const z = O[B];
        o(z), L += z.length;
      }
      const E = new Uint8Array(L);
      for (let B = 0, z = 0; B < O.length; B++) {
        const N = O[B];
        E.set(N, z), z += N.length;
      }
      return E;
    }
    function U(O, L) {
      if (L !== void 0 && {}.toString.call(L) !== "[object Object]") throw new Error("options should be object or undefined");
      return Object.assign(O, L);
    }
    class M {
    }
    t.Hash = M;
    function G(O) {
      const L = (B) => O().update(C(B)).digest(), E = O();
      return L.outputLen = E.outputLen, L.blockLen = E.blockLen, L.create = () => O(), L;
    }
    function J(O) {
      const L = (B, z) => O(z).update(C(B)).digest(), E = O({});
      return L.outputLen = E.outputLen, L.blockLen = E.blockLen, L.create = (B) => O(B), L;
    }
    function Z(O) {
      const L = (B, z) => O(z).update(C(B)).digest(), E = O({});
      return L.outputLen = E.outputLen, L.blockLen = E.blockLen, L.create = (B) => O(B), L;
    }
    t.wrapConstructor = G, t.wrapConstructorWithOpts = J, t.wrapXOFConstructorWithOpts = Z;
    function ae(O = 32) {
      if (e.crypto && typeof e.crypto.getRandomValues == "function") return e.crypto.getRandomValues(new Uint8Array(O));
      if (e.crypto && typeof e.crypto.randomBytes == "function") return Uint8Array.from(e.crypto.randomBytes(O));
      throw new Error("crypto.getRandomValues must be defined");
    }
  })(qr);
  Object.defineProperty(Ge, "__esModule", {
    value: true
  });
  Ge.SHA512_IV = Ge.SHA384_IV = Ge.SHA224_IV = Ge.SHA256_IV = Ge.HashMD = void 0;
  Ge.setBigUint64 = Nl;
  Ge.Chi = ap;
  Ge.Maj = op;
  const wt = qr;
  function Nl(t, e, r, a) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, a);
    const o = BigInt(32), n = BigInt(4294967295), s = Number(r >> o & n), i = Number(r & n), l = a ? 4 : 0, c = a ? 0 : 4;
    t.setUint32(e + l, s, a), t.setUint32(e + c, i, a);
  }
  function ap(t, e, r) {
    return t & e ^ ~t & r;
  }
  function op(t, e, r) {
    return t & e ^ t & r ^ e & r;
  }
  class np extends wt.Hash {
    constructor(e, r, a, o) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = r, this.padOffset = a, this.isLE = o, this.buffer = new Uint8Array(e), this.view = (0, wt.createView)(this.buffer);
    }
    update(e) {
      (0, wt.aexists)(this), e = (0, wt.toBytes)(e), (0, wt.abytes)(e);
      const { view: r, buffer: a, blockLen: o } = this, n = e.length;
      for (let s = 0; s < n; ) {
        const i = Math.min(o - this.pos, n - s);
        if (i === o) {
          const l = (0, wt.createView)(e);
          for (; o <= n - s; s += o) this.process(l, s);
          continue;
        }
        a.set(e.subarray(s, s + i), this.pos), this.pos += i, s += i, this.pos === o && (this.process(r, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      (0, wt.aexists)(this), (0, wt.aoutput)(e, this), this.finished = true;
      const { buffer: r, view: a, blockLen: o, isLE: n } = this;
      let { pos: s } = this;
      r[s++] = 128, (0, wt.clean)(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(a, 0), s = 0);
      for (let h = s; h < o; h++) r[h] = 0;
      Nl(a, o - 8, BigInt(this.length * 8), n), this.process(a, 0);
      const i = (0, wt.createView)(e), l = this.outputLen;
      if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const c = l / 4, d = this.get();
      if (c > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < c; h++) i.setUint32(4 * h, d[h], n);
    }
    digest() {
      const { buffer: e, outputLen: r } = this;
      this.digestInto(e);
      const a = e.slice(0, r);
      return this.destroy(), a;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: r, buffer: a, length: o, finished: n, destroyed: s, pos: i } = this;
      return e.destroyed = s, e.finished = n, e.length = o, e.pos = i, o % r && e.buffer.set(a), e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  Ge.HashMD = np;
  Ge.SHA256_IV = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  Ge.SHA224_IV = Uint32Array.from([
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ]);
  Ge.SHA384_IV = Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]);
  Ge.SHA512_IV = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]);
  var ne = {};
  Object.defineProperty(ne, "__esModule", {
    value: true
  });
  ne.toBig = ne.shrSL = ne.shrSH = ne.rotrSL = ne.rotrSH = ne.rotrBL = ne.rotrBH = ne.rotr32L = ne.rotr32H = ne.rotlSL = ne.rotlSH = ne.rotlBL = ne.rotlBH = ne.add5L = ne.add5H = ne.add4L = ne.add4H = ne.add3L = ne.add3H = void 0;
  ne.add = Xl;
  ne.fromBig = ni;
  ne.split = Ol;
  const Ea = BigInt(2 ** 32 - 1), Fn = BigInt(32);
  function ni(t, e = false) {
    return e ? {
      h: Number(t & Ea),
      l: Number(t >> Fn & Ea)
    } : {
      h: Number(t >> Fn & Ea) | 0,
      l: Number(t & Ea) | 0
    };
  }
  function Ol(t, e = false) {
    const r = t.length;
    let a = new Uint32Array(r), o = new Uint32Array(r);
    for (let n = 0; n < r; n++) {
      const { h: s, l: i } = ni(t[n], e);
      [a[n], o[n]] = [
        s,
        i
      ];
    }
    return [
      a,
      o
    ];
  }
  const Ll = (t, e) => BigInt(t >>> 0) << Fn | BigInt(e >>> 0);
  ne.toBig = Ll;
  const Pl = (t, e, r) => t >>> r;
  ne.shrSH = Pl;
  const Ul = (t, e, r) => t << 32 - r | e >>> r;
  ne.shrSL = Ul;
  const jl = (t, e, r) => t >>> r | e << 32 - r;
  ne.rotrSH = jl;
  const Hl = (t, e, r) => t << 32 - r | e >>> r;
  ne.rotrSL = Hl;
  const ql = (t, e, r) => t << 64 - r | e >>> r - 32;
  ne.rotrBH = ql;
  const $l = (t, e, r) => t >>> r - 32 | e << 64 - r;
  ne.rotrBL = $l;
  const Ml = (t, e) => e;
  ne.rotr32H = Ml;
  const Wl = (t, e) => t;
  ne.rotr32L = Wl;
  const Vl = (t, e, r) => t << r | e >>> 32 - r;
  ne.rotlSH = Vl;
  const Kl = (t, e, r) => e << r | t >>> 32 - r;
  ne.rotlSL = Kl;
  const Gl = (t, e, r) => e << r - 32 | t >>> 64 - r;
  ne.rotlBH = Gl;
  const Yl = (t, e, r) => t << r - 32 | e >>> 64 - r;
  ne.rotlBL = Yl;
  function Xl(t, e, r, a) {
    const o = (e >>> 0) + (a >>> 0);
    return {
      h: t + r + (o / 2 ** 32 | 0) | 0,
      l: o | 0
    };
  }
  const Zl = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
  ne.add3L = Zl;
  const Jl = (t, e, r, a) => e + r + a + (t / 2 ** 32 | 0) | 0;
  ne.add3H = Jl;
  const Ql = (t, e, r, a) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (a >>> 0);
  ne.add4L = Ql;
  const e0 = (t, e, r, a, o) => e + r + a + o + (t / 2 ** 32 | 0) | 0;
  ne.add4H = e0;
  const t0 = (t, e, r, a, o) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (a >>> 0) + (o >>> 0);
  ne.add5L = t0;
  const r0 = (t, e, r, a, o, n) => e + r + a + o + n + (t / 2 ** 32 | 0) | 0;
  ne.add5H = r0;
  const ip = {
    fromBig: ni,
    split: Ol,
    toBig: Ll,
    shrSH: Pl,
    shrSL: Ul,
    rotrSH: jl,
    rotrSL: Hl,
    rotrBH: ql,
    rotrBL: $l,
    rotr32H: Ml,
    rotr32L: Wl,
    rotlSH: Vl,
    rotlSL: Kl,
    rotlBH: Gl,
    rotlBL: Yl,
    add: Xl,
    add3L: Zl,
    add3H: Jl,
    add4L: Ql,
    add4H: e0,
    add5H: r0,
    add5L: t0
  };
  ne.default = ip;
  Object.defineProperty(Ee, "__esModule", {
    value: true
  });
  Ee.sha512_224 = Ee.sha512_256 = Ee.sha384 = Ee.sha512 = Ee.sha224 = Ee.sha256 = Ee.SHA512_256 = Ee.SHA512_224 = Ee.SHA384 = Ee.SHA512 = Ee.SHA224 = Ee.SHA256 = void 0;
  const Q = Ge, ce = ne, ze = qr, sp = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), Kt = new Uint32Array(64);
  class ii extends Q.HashMD {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = Q.SHA256_IV[0] | 0, this.B = Q.SHA256_IV[1] | 0, this.C = Q.SHA256_IV[2] | 0, this.D = Q.SHA256_IV[3] | 0, this.E = Q.SHA256_IV[4] | 0, this.F = Q.SHA256_IV[5] | 0, this.G = Q.SHA256_IV[6] | 0, this.H = Q.SHA256_IV[7] | 0;
    }
    get() {
      const { A: e, B: r, C: a, D: o, E: n, F: s, G: i, H: l } = this;
      return [
        e,
        r,
        a,
        o,
        n,
        s,
        i,
        l
      ];
    }
    set(e, r, a, o, n, s, i, l) {
      this.A = e | 0, this.B = r | 0, this.C = a | 0, this.D = o | 0, this.E = n | 0, this.F = s | 0, this.G = i | 0, this.H = l | 0;
    }
    process(e, r) {
      for (let h = 0; h < 16; h++, r += 4) Kt[h] = e.getUint32(r, false);
      for (let h = 16; h < 64; h++) {
        const p = Kt[h - 15], g = Kt[h - 2], m = (0, ze.rotr)(p, 7) ^ (0, ze.rotr)(p, 18) ^ p >>> 3, b = (0, ze.rotr)(g, 17) ^ (0, ze.rotr)(g, 19) ^ g >>> 10;
        Kt[h] = b + Kt[h - 7] + m + Kt[h - 16] | 0;
      }
      let { A: a, B: o, C: n, D: s, E: i, F: l, G: c, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const p = (0, ze.rotr)(i, 6) ^ (0, ze.rotr)(i, 11) ^ (0, ze.rotr)(i, 25), g = d + p + (0, Q.Chi)(i, l, c) + sp[h] + Kt[h] | 0, b = ((0, ze.rotr)(a, 2) ^ (0, ze.rotr)(a, 13) ^ (0, ze.rotr)(a, 22)) + (0, Q.Maj)(a, o, n) | 0;
        d = c, c = l, l = i, i = s + g | 0, s = n, n = o, o = a, a = g + b | 0;
      }
      a = a + this.A | 0, o = o + this.B | 0, n = n + this.C | 0, s = s + this.D | 0, i = i + this.E | 0, l = l + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(a, o, n, s, i, l, c, d);
    }
    roundClean() {
      (0, ze.clean)(Kt);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, ze.clean)(this.buffer);
    }
  }
  Ee.SHA256 = ii;
  class a0 extends ii {
    constructor() {
      super(28), this.A = Q.SHA224_IV[0] | 0, this.B = Q.SHA224_IV[1] | 0, this.C = Q.SHA224_IV[2] | 0, this.D = Q.SHA224_IV[3] | 0, this.E = Q.SHA224_IV[4] | 0, this.F = Q.SHA224_IV[5] | 0, this.G = Q.SHA224_IV[6] | 0, this.H = Q.SHA224_IV[7] | 0;
    }
  }
  Ee.SHA224 = a0;
  const o0 = ce.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((t) => BigInt(t))), cp = o0[0], lp = o0[1], Gt = new Uint32Array(80), Yt = new Uint32Array(80);
  class ma extends Q.HashMD {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = Q.SHA512_IV[0] | 0, this.Al = Q.SHA512_IV[1] | 0, this.Bh = Q.SHA512_IV[2] | 0, this.Bl = Q.SHA512_IV[3] | 0, this.Ch = Q.SHA512_IV[4] | 0, this.Cl = Q.SHA512_IV[5] | 0, this.Dh = Q.SHA512_IV[6] | 0, this.Dl = Q.SHA512_IV[7] | 0, this.Eh = Q.SHA512_IV[8] | 0, this.El = Q.SHA512_IV[9] | 0, this.Fh = Q.SHA512_IV[10] | 0, this.Fl = Q.SHA512_IV[11] | 0, this.Gh = Q.SHA512_IV[12] | 0, this.Gl = Q.SHA512_IV[13] | 0, this.Hh = Q.SHA512_IV[14] | 0, this.Hl = Q.SHA512_IV[15] | 0;
    }
    get() {
      const { Ah: e, Al: r, Bh: a, Bl: o, Ch: n, Cl: s, Dh: i, Dl: l, Eh: c, El: d, Fh: h, Fl: p, Gh: g, Gl: m, Hh: b, Hl: x } = this;
      return [
        e,
        r,
        a,
        o,
        n,
        s,
        i,
        l,
        c,
        d,
        h,
        p,
        g,
        m,
        b,
        x
      ];
    }
    set(e, r, a, o, n, s, i, l, c, d, h, p, g, m, b, x) {
      this.Ah = e | 0, this.Al = r | 0, this.Bh = a | 0, this.Bl = o | 0, this.Ch = n | 0, this.Cl = s | 0, this.Dh = i | 0, this.Dl = l | 0, this.Eh = c | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = p | 0, this.Gh = g | 0, this.Gl = m | 0, this.Hh = b | 0, this.Hl = x | 0;
    }
    process(e, r) {
      for (let w = 0; w < 16; w++, r += 4) Gt[w] = e.getUint32(r), Yt[w] = e.getUint32(r += 4);
      for (let w = 16; w < 80; w++) {
        const k = Gt[w - 15] | 0, D = Yt[w - 15] | 0, S = ce.rotrSH(k, D, 1) ^ ce.rotrSH(k, D, 8) ^ ce.shrSH(k, D, 7), F = ce.rotrSL(k, D, 1) ^ ce.rotrSL(k, D, 8) ^ ce.shrSL(k, D, 7), R = Gt[w - 2] | 0, j = Yt[w - 2] | 0, C = ce.rotrSH(R, j, 19) ^ ce.rotrBH(R, j, 61) ^ ce.shrSH(R, j, 6), T = ce.rotrSL(R, j, 19) ^ ce.rotrBL(R, j, 61) ^ ce.shrSL(R, j, 6), H = ce.add4L(F, T, Yt[w - 7], Yt[w - 16]), U = ce.add4H(H, S, C, Gt[w - 7], Gt[w - 16]);
        Gt[w] = U | 0, Yt[w] = H | 0;
      }
      let { Ah: a, Al: o, Bh: n, Bl: s, Ch: i, Cl: l, Dh: c, Dl: d, Eh: h, El: p, Fh: g, Fl: m, Gh: b, Gl: x, Hh: _, Hl: y } = this;
      for (let w = 0; w < 80; w++) {
        const k = ce.rotrSH(h, p, 14) ^ ce.rotrSH(h, p, 18) ^ ce.rotrBH(h, p, 41), D = ce.rotrSL(h, p, 14) ^ ce.rotrSL(h, p, 18) ^ ce.rotrBL(h, p, 41), S = h & g ^ ~h & b, F = p & m ^ ~p & x, R = ce.add5L(y, D, F, lp[w], Yt[w]), j = ce.add5H(R, _, k, S, cp[w], Gt[w]), C = R | 0, T = ce.rotrSH(a, o, 28) ^ ce.rotrBH(a, o, 34) ^ ce.rotrBH(a, o, 39), H = ce.rotrSL(a, o, 28) ^ ce.rotrBL(a, o, 34) ^ ce.rotrBL(a, o, 39), U = a & n ^ a & i ^ n & i, M = o & s ^ o & l ^ s & l;
        _ = b | 0, y = x | 0, b = g | 0, x = m | 0, g = h | 0, m = p | 0, { h, l: p } = ce.add(c | 0, d | 0, j | 0, C | 0), c = i | 0, d = l | 0, i = n | 0, l = s | 0, n = a | 0, s = o | 0;
        const G = ce.add3L(C, H, M);
        a = ce.add3H(G, j, T, U), o = G | 0;
      }
      ({ h: a, l: o } = ce.add(this.Ah | 0, this.Al | 0, a | 0, o | 0)), { h: n, l: s } = ce.add(this.Bh | 0, this.Bl | 0, n | 0, s | 0), { h: i, l } = ce.add(this.Ch | 0, this.Cl | 0, i | 0, l | 0), { h: c, l: d } = ce.add(this.Dh | 0, this.Dl | 0, c | 0, d | 0), { h, l: p } = ce.add(this.Eh | 0, this.El | 0, h | 0, p | 0), { h: g, l: m } = ce.add(this.Fh | 0, this.Fl | 0, g | 0, m | 0), { h: b, l: x } = ce.add(this.Gh | 0, this.Gl | 0, b | 0, x | 0), { h: _, l: y } = ce.add(this.Hh | 0, this.Hl | 0, _ | 0, y | 0), this.set(a, o, n, s, i, l, c, d, h, p, g, m, b, x, _, y);
    }
    roundClean() {
      (0, ze.clean)(Gt, Yt);
    }
    destroy() {
      (0, ze.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  Ee.SHA512 = ma;
  class n0 extends ma {
    constructor() {
      super(48), this.Ah = Q.SHA384_IV[0] | 0, this.Al = Q.SHA384_IV[1] | 0, this.Bh = Q.SHA384_IV[2] | 0, this.Bl = Q.SHA384_IV[3] | 0, this.Ch = Q.SHA384_IV[4] | 0, this.Cl = Q.SHA384_IV[5] | 0, this.Dh = Q.SHA384_IV[6] | 0, this.Dl = Q.SHA384_IV[7] | 0, this.Eh = Q.SHA384_IV[8] | 0, this.El = Q.SHA384_IV[9] | 0, this.Fh = Q.SHA384_IV[10] | 0, this.Fl = Q.SHA384_IV[11] | 0, this.Gh = Q.SHA384_IV[12] | 0, this.Gl = Q.SHA384_IV[13] | 0, this.Hh = Q.SHA384_IV[14] | 0, this.Hl = Q.SHA384_IV[15] | 0;
    }
  }
  Ee.SHA384 = n0;
  const $e = Uint32Array.from([
    2352822216,
    424955298,
    1944164710,
    2312950998,
    502970286,
    855612546,
    1738396948,
    1479516111,
    258812777,
    2077511080,
    2011393907,
    79989058,
    1067287976,
    1780299464,
    286451373,
    2446758561
  ]), Me = Uint32Array.from([
    573645204,
    4230739756,
    2673172387,
    3360449730,
    596883563,
    1867755857,
    2520282905,
    1497426621,
    2519219938,
    2827943907,
    3193839141,
    1401305490,
    721525244,
    746961066,
    246885852,
    2177182882
  ]);
  class i0 extends ma {
    constructor() {
      super(28), this.Ah = $e[0] | 0, this.Al = $e[1] | 0, this.Bh = $e[2] | 0, this.Bl = $e[3] | 0, this.Ch = $e[4] | 0, this.Cl = $e[5] | 0, this.Dh = $e[6] | 0, this.Dl = $e[7] | 0, this.Eh = $e[8] | 0, this.El = $e[9] | 0, this.Fh = $e[10] | 0, this.Fl = $e[11] | 0, this.Gh = $e[12] | 0, this.Gl = $e[13] | 0, this.Hh = $e[14] | 0, this.Hl = $e[15] | 0;
    }
  }
  Ee.SHA512_224 = i0;
  class s0 extends ma {
    constructor() {
      super(32), this.Ah = Me[0] | 0, this.Al = Me[1] | 0, this.Bh = Me[2] | 0, this.Bl = Me[3] | 0, this.Ch = Me[4] | 0, this.Cl = Me[5] | 0, this.Dh = Me[6] | 0, this.Dl = Me[7] | 0, this.Eh = Me[8] | 0, this.El = Me[9] | 0, this.Fh = Me[10] | 0, this.Fl = Me[11] | 0, this.Gh = Me[12] | 0, this.Gl = Me[13] | 0, this.Hh = Me[14] | 0, this.Hl = Me[15] | 0;
    }
  }
  Ee.SHA512_256 = s0;
  Ee.sha256 = (0, ze.createHasher)(() => new ii());
  Ee.sha224 = (0, ze.createHasher)(() => new a0());
  Ee.sha512 = (0, ze.createHasher)(() => new ma());
  Ee.sha384 = (0, ze.createHasher)(() => new n0());
  Ee.sha512_256 = (0, ze.createHasher)(() => new s0());
  Ee.sha512_224 = (0, ze.createHasher)(() => new i0());
  Object.defineProperty(Bt, "__esModule", {
    value: true
  });
  Bt.sha224 = Bt.SHA224 = Bt.sha256 = Bt.SHA256 = void 0;
  const co = Ee;
  Bt.SHA256 = co.SHA256;
  Bt.sha256 = co.sha256;
  Bt.SHA224 = co.SHA224;
  Bt.sha224 = co.sha224;
  var Ne = {};
  Object.defineProperty(Ne, "__esModule", {
    value: true
  });
  Ne.sha512_256 = Ne.SHA512_256 = Ne.sha512_224 = Ne.SHA512_224 = Ne.sha384 = Ne.SHA384 = Ne.sha512 = Ne.SHA512 = void 0;
  const ur = Ee;
  Ne.SHA512 = ur.SHA512;
  Ne.sha512 = ur.sha512;
  Ne.SHA384 = ur.SHA384;
  Ne.sha384 = ur.sha384;
  Ne.SHA512_224 = ur.SHA512_224;
  Ne.sha512_224 = ur.sha512_224;
  Ne.SHA512_256 = ur.SHA512_256;
  Ne.sha512_256 = ur.sha512_256;
  var lo = {}, c0 = {};
  (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: true
    }), t.hmac = t.HMAC = void 0;
    const e = qr;
    class r extends e.Hash {
      constructor(n, s) {
        super(), this.finished = false, this.destroyed = false, (0, e.ahash)(n);
        const i = (0, e.toBytes)(s);
        if (this.iHash = n.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const l = this.blockLen, c = new Uint8Array(l);
        c.set(i.length > l ? n.create().update(i).digest() : i);
        for (let d = 0; d < c.length; d++) c[d] ^= 54;
        this.iHash.update(c), this.oHash = n.create();
        for (let d = 0; d < c.length; d++) c[d] ^= 106;
        this.oHash.update(c), (0, e.clean)(c);
      }
      update(n) {
        return (0, e.aexists)(this), this.iHash.update(n), this;
      }
      digestInto(n) {
        (0, e.aexists)(this), (0, e.abytes)(n, this.outputLen), this.finished = true, this.iHash.digestInto(n), this.oHash.update(n), this.oHash.digestInto(n), this.destroy();
      }
      digest() {
        const n = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(n), n;
      }
      _cloneInto(n) {
        n || (n = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash: s, iHash: i, finished: l, destroyed: c, blockLen: d, outputLen: h } = this;
        return n = n, n.finished = l, n.destroyed = c, n.blockLen = d, n.outputLen = h, n.oHash = s._cloneInto(n.oHash), n.iHash = i._cloneInto(n.iHash), n;
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
      }
    }
    t.HMAC = r;
    const a = (o, n, s) => new r(o, n).update(s).digest();
    t.hmac = a, t.hmac.create = (o, n) => new r(o, n);
  })(c0);
  Object.defineProperty(lo, "__esModule", {
    value: true
  });
  lo.pbkdf2 = dp;
  lo.pbkdf2Async = fp;
  const up = c0, gt = qr;
  function l0(t, e, r, a) {
    (0, gt.ahash)(t);
    const o = (0, gt.checkOpts)({
      dkLen: 32,
      asyncTick: 10
    }, a), { c: n, dkLen: s, asyncTick: i } = o;
    if ((0, gt.anumber)(n), (0, gt.anumber)(s), (0, gt.anumber)(i), n < 1) throw new Error("iterations (c) should be >= 1");
    const l = (0, gt.kdfInputToBytes)(e), c = (0, gt.kdfInputToBytes)(r), d = new Uint8Array(s), h = up.hmac.create(t, l), p = h._cloneInto().update(c);
    return {
      c: n,
      dkLen: s,
      asyncTick: i,
      DK: d,
      PRF: h,
      PRFSalt: p
    };
  }
  function u0(t, e, r, a, o) {
    return t.destroy(), e.destroy(), a && a.destroy(), (0, gt.clean)(o), r;
  }
  function dp(t, e, r, a) {
    const { c: o, dkLen: n, DK: s, PRF: i, PRFSalt: l } = l0(t, e, r, a);
    let c;
    const d = new Uint8Array(4), h = (0, gt.createView)(d), p = new Uint8Array(i.outputLen);
    for (let g = 1, m = 0; m < n; g++, m += i.outputLen) {
      const b = s.subarray(m, m + i.outputLen);
      h.setInt32(0, g, false), (c = l._cloneInto(c)).update(d).digestInto(p), b.set(p.subarray(0, b.length));
      for (let x = 1; x < o; x++) {
        i._cloneInto(c).update(p).digestInto(p);
        for (let _ = 0; _ < b.length; _++) b[_] ^= p[_];
      }
    }
    return u0(i, l, s, c, p);
  }
  async function fp(t, e, r, a) {
    const { c: o, dkLen: n, asyncTick: s, DK: i, PRF: l, PRFSalt: c } = l0(t, e, r, a);
    let d;
    const h = new Uint8Array(4), p = (0, gt.createView)(h), g = new Uint8Array(l.outputLen);
    for (let m = 1, b = 0; b < n; m++, b += l.outputLen) {
      const x = i.subarray(b, b + l.outputLen);
      p.setInt32(0, m, false), (d = c._cloneInto(d)).update(h).digestInto(g), x.set(g.subarray(0, x.length)), await (0, gt.asyncLoop)(o - 1, s, () => {
        l._cloneInto(d).update(g).digestInto(g);
        for (let _ = 0; _ < x.length; _++) x[_] ^= g[_];
      });
    }
    return u0(l, c, i, d, g);
  }
  var Ye = {};
  const hp = [
    "abdikace",
    "abeceda",
    "adresa",
    "agrese",
    "akce",
    "aktovka",
    "alej",
    "alkohol",
    "amputace",
    "ananas",
    "andulka",
    "anekdota",
    "anketa",
    "antika",
    "anulovat",
    "archa",
    "arogance",
    "asfalt",
    "asistent",
    "aspirace",
    "astma",
    "astronom",
    "atlas",
    "atletika",
    "atol",
    "autobus",
    "azyl",
    "babka",
    "bachor",
    "bacil",
    "baculka",
    "badatel",
    "bageta",
    "bagr",
    "bahno",
    "bakterie",
    "balada",
    "baletka",
    "balkon",
    "balonek",
    "balvan",
    "balza",
    "bambus",
    "bankomat",
    "barbar",
    "baret",
    "barman",
    "baroko",
    "barva",
    "baterka",
    "batoh",
    "bavlna",
    "bazalka",
    "bazilika",
    "bazuka",
    "bedna",
    "beran",
    "beseda",
    "bestie",
    "beton",
    "bezinka",
    "bezmoc",
    "beztak",
    "bicykl",
    "bidlo",
    "biftek",
    "bikiny",
    "bilance",
    "biograf",
    "biolog",
    "bitva",
    "bizon",
    "blahobyt",
    "blatouch",
    "blecha",
    "bledule",
    "blesk",
    "blikat",
    "blizna",
    "blokovat",
    "bloudit",
    "blud",
    "bobek",
    "bobr",
    "bodlina",
    "bodnout",
    "bohatost",
    "bojkot",
    "bojovat",
    "bokorys",
    "bolest",
    "borec",
    "borovice",
    "bota",
    "boubel",
    "bouchat",
    "bouda",
    "boule",
    "bourat",
    "boxer",
    "bradavka",
    "brambora",
    "branka",
    "bratr",
    "brepta",
    "briketa",
    "brko",
    "brloh",
    "bronz",
    "broskev",
    "brunetka",
    "brusinka",
    "brzda",
    "brzy",
    "bublina",
    "bubnovat",
    "buchta",
    "buditel",
    "budka",
    "budova",
    "bufet",
    "bujarost",
    "bukvice",
    "buldok",
    "bulva",
    "bunda",
    "bunkr",
    "burza",
    "butik",
    "buvol",
    "buzola",
    "bydlet",
    "bylina",
    "bytovka",
    "bzukot",
    "capart",
    "carevna",
    "cedr",
    "cedule",
    "cejch",
    "cejn",
    "cela",
    "celer",
    "celkem",
    "celnice",
    "cenina",
    "cennost",
    "cenovka",
    "centrum",
    "cenzor",
    "cestopis",
    "cetka",
    "chalupa",
    "chapadlo",
    "charita",
    "chata",
    "chechtat",
    "chemie",
    "chichot",
    "chirurg",
    "chlad",
    "chleba",
    "chlubit",
    "chmel",
    "chmura",
    "chobot",
    "chochol",
    "chodba",
    "cholera",
    "chomout",
    "chopit",
    "choroba",
    "chov",
    "chrapot",
    "chrlit",
    "chrt",
    "chrup",
    "chtivost",
    "chudina",
    "chutnat",
    "chvat",
    "chvilka",
    "chvost",
    "chyba",
    "chystat",
    "chytit",
    "cibule",
    "cigareta",
    "cihelna",
    "cihla",
    "cinkot",
    "cirkus",
    "cisterna",
    "citace",
    "citrus",
    "cizinec",
    "cizost",
    "clona",
    "cokoliv",
    "couvat",
    "ctitel",
    "ctnost",
    "cudnost",
    "cuketa",
    "cukr",
    "cupot",
    "cvaknout",
    "cval",
    "cvik",
    "cvrkot",
    "cyklista",
    "daleko",
    "dareba",
    "datel",
    "datum",
    "dcera",
    "debata",
    "dechovka",
    "decibel",
    "deficit",
    "deflace",
    "dekl",
    "dekret",
    "demokrat",
    "deprese",
    "derby",
    "deska",
    "detektiv",
    "dikobraz",
    "diktovat",
    "dioda",
    "diplom",
    "disk",
    "displej",
    "divadlo",
    "divoch",
    "dlaha",
    "dlouho",
    "dluhopis",
    "dnes",
    "dobro",
    "dobytek",
    "docent",
    "dochutit",
    "dodnes",
    "dohled",
    "dohoda",
    "dohra",
    "dojem",
    "dojnice",
    "doklad",
    "dokola",
    "doktor",
    "dokument",
    "dolar",
    "doleva",
    "dolina",
    "doma",
    "dominant",
    "domluvit",
    "domov",
    "donutit",
    "dopad",
    "dopis",
    "doplnit",
    "doposud",
    "doprovod",
    "dopustit",
    "dorazit",
    "dorost",
    "dort",
    "dosah",
    "doslov",
    "dostatek",
    "dosud",
    "dosyta",
    "dotaz",
    "dotek",
    "dotknout",
    "doufat",
    "doutnat",
    "dovozce",
    "dozadu",
    "doznat",
    "dozorce",
    "drahota",
    "drak",
    "dramatik",
    "dravec",
    "draze",
    "drdol",
    "drobnost",
    "drogerie",
    "drozd",
    "drsnost",
    "drtit",
    "drzost",
    "duben",
    "duchovno",
    "dudek",
    "duha",
    "duhovka",
    "dusit",
    "dusno",
    "dutost",
    "dvojice",
    "dvorec",
    "dynamit",
    "ekolog",
    "ekonomie",
    "elektron",
    "elipsa",
    "email",
    "emise",
    "emoce",
    "empatie",
    "epizoda",
    "epocha",
    "epopej",
    "epos",
    "esej",
    "esence",
    "eskorta",
    "eskymo",
    "etiketa",
    "euforie",
    "evoluce",
    "exekuce",
    "exkurze",
    "expedice",
    "exploze",
    "export",
    "extrakt",
    "facka",
    "fajfka",
    "fakulta",
    "fanatik",
    "fantazie",
    "farmacie",
    "favorit",
    "fazole",
    "federace",
    "fejeton",
    "fenka",
    "fialka",
    "figurant",
    "filozof",
    "filtr",
    "finance",
    "finta",
    "fixace",
    "fjord",
    "flanel",
    "flirt",
    "flotila",
    "fond",
    "fosfor",
    "fotbal",
    "fotka",
    "foton",
    "frakce",
    "freska",
    "fronta",
    "fukar",
    "funkce",
    "fyzika",
    "galeje",
    "garant",
    "genetika",
    "geolog",
    "gilotina",
    "glazura",
    "glejt",
    "golem",
    "golfista",
    "gotika",
    "graf",
    "gramofon",
    "granule",
    "grep",
    "gril",
    "grog",
    "groteska",
    "guma",
    "hadice",
    "hadr",
    "hala",
    "halenka",
    "hanba",
    "hanopis",
    "harfa",
    "harpuna",
    "havran",
    "hebkost",
    "hejkal",
    "hejno",
    "hejtman",
    "hektar",
    "helma",
    "hematom",
    "herec",
    "herna",
    "heslo",
    "hezky",
    "historik",
    "hladovka",
    "hlasivky",
    "hlava",
    "hledat",
    "hlen",
    "hlodavec",
    "hloh",
    "hloupost",
    "hltat",
    "hlubina",
    "hluchota",
    "hmat",
    "hmota",
    "hmyz",
    "hnis",
    "hnojivo",
    "hnout",
    "hoblina",
    "hoboj",
    "hoch",
    "hodiny",
    "hodlat",
    "hodnota",
    "hodovat",
    "hojnost",
    "hokej",
    "holinka",
    "holka",
    "holub",
    "homole",
    "honitba",
    "honorace",
    "horal",
    "horda",
    "horizont",
    "horko",
    "horlivec",
    "hormon",
    "hornina",
    "horoskop",
    "horstvo",
    "hospoda",
    "hostina",
    "hotovost",
    "houba",
    "houf",
    "houpat",
    "houska",
    "hovor",
    "hradba",
    "hranice",
    "hravost",
    "hrazda",
    "hrbolek",
    "hrdina",
    "hrdlo",
    "hrdost",
    "hrnek",
    "hrobka",
    "hromada",
    "hrot",
    "hrouda",
    "hrozen",
    "hrstka",
    "hrubost",
    "hryzat",
    "hubenost",
    "hubnout",
    "hudba",
    "hukot",
    "humr",
    "husita",
    "hustota",
    "hvozd",
    "hybnost",
    "hydrant",
    "hygiena",
    "hymna",
    "hysterik",
    "idylka",
    "ihned",
    "ikona",
    "iluze",
    "imunita",
    "infekce",
    "inflace",
    "inkaso",
    "inovace",
    "inspekce",
    "internet",
    "invalida",
    "investor",
    "inzerce",
    "ironie",
    "jablko",
    "jachta",
    "jahoda",
    "jakmile",
    "jakost",
    "jalovec",
    "jantar",
    "jarmark",
    "jaro",
    "jasan",
    "jasno",
    "jatka",
    "javor",
    "jazyk",
    "jedinec",
    "jedle",
    "jednatel",
    "jehlan",
    "jekot",
    "jelen",
    "jelito",
    "jemnost",
    "jenom",
    "jepice",
    "jeseter",
    "jevit",
    "jezdec",
    "jezero",
    "jinak",
    "jindy",
    "jinoch",
    "jiskra",
    "jistota",
    "jitrnice",
    "jizva",
    "jmenovat",
    "jogurt",
    "jurta",
    "kabaret",
    "kabel",
    "kabinet",
    "kachna",
    "kadet",
    "kadidlo",
    "kahan",
    "kajak",
    "kajuta",
    "kakao",
    "kaktus",
    "kalamita",
    "kalhoty",
    "kalibr",
    "kalnost",
    "kamera",
    "kamkoliv",
    "kamna",
    "kanibal",
    "kanoe",
    "kantor",
    "kapalina",
    "kapela",
    "kapitola",
    "kapka",
    "kaple",
    "kapota",
    "kapr",
    "kapusta",
    "kapybara",
    "karamel",
    "karotka",
    "karton",
    "kasa",
    "katalog",
    "katedra",
    "kauce",
    "kauza",
    "kavalec",
    "kazajka",
    "kazeta",
    "kazivost",
    "kdekoliv",
    "kdesi",
    "kedluben",
    "kemp",
    "keramika",
    "kino",
    "klacek",
    "kladivo",
    "klam",
    "klapot",
    "klasika",
    "klaun",
    "klec",
    "klenba",
    "klepat",
    "klesnout",
    "klid",
    "klima",
    "klisna",
    "klobouk",
    "klokan",
    "klopa",
    "kloub",
    "klubovna",
    "klusat",
    "kluzkost",
    "kmen",
    "kmitat",
    "kmotr",
    "kniha",
    "knot",
    "koalice",
    "koberec",
    "kobka",
    "kobliha",
    "kobyla",
    "kocour",
    "kohout",
    "kojenec",
    "kokos",
    "koktejl",
    "kolaps",
    "koleda",
    "kolize",
    "kolo",
    "komando",
    "kometa",
    "komik",
    "komnata",
    "komora",
    "kompas",
    "komunita",
    "konat",
    "koncept",
    "kondice",
    "konec",
    "konfese",
    "kongres",
    "konina",
    "konkurs",
    "kontakt",
    "konzerva",
    "kopanec",
    "kopie",
    "kopnout",
    "koprovka",
    "korbel",
    "korektor",
    "kormidlo",
    "koroptev",
    "korpus",
    "koruna",
    "koryto",
    "korzet",
    "kosatec",
    "kostka",
    "kotel",
    "kotleta",
    "kotoul",
    "koukat",
    "koupelna",
    "kousek",
    "kouzlo",
    "kovboj",
    "koza",
    "kozoroh",
    "krabice",
    "krach",
    "krajina",
    "kralovat",
    "krasopis",
    "kravata",
    "kredit",
    "krejcar",
    "kresba",
    "kreveta",
    "kriket",
    "kritik",
    "krize",
    "krkavec",
    "krmelec",
    "krmivo",
    "krocan",
    "krok",
    "kronika",
    "kropit",
    "kroupa",
    "krovka",
    "krtek",
    "kruhadlo",
    "krupice",
    "krutost",
    "krvinka",
    "krychle",
    "krypta",
    "krystal",
    "kryt",
    "kudlanka",
    "kufr",
    "kujnost",
    "kukla",
    "kulajda",
    "kulich",
    "kulka",
    "kulomet",
    "kultura",
    "kuna",
    "kupodivu",
    "kurt",
    "kurzor",
    "kutil",
    "kvalita",
    "kvasinka",
    "kvestor",
    "kynolog",
    "kyselina",
    "kytara",
    "kytice",
    "kytka",
    "kytovec",
    "kyvadlo",
    "labrador",
    "lachtan",
    "ladnost",
    "laik",
    "lakomec",
    "lamela",
    "lampa",
    "lanovka",
    "lasice",
    "laso",
    "lastura",
    "latinka",
    "lavina",
    "lebka",
    "leckdy",
    "leden",
    "lednice",
    "ledovka",
    "ledvina",
    "legenda",
    "legie",
    "legrace",
    "lehce",
    "lehkost",
    "lehnout",
    "lektvar",
    "lenochod",
    "lentilka",
    "lepenka",
    "lepidlo",
    "letadlo",
    "letec",
    "letmo",
    "letokruh",
    "levhart",
    "levitace",
    "levobok",
    "libra",
    "lichotka",
    "lidojed",
    "lidskost",
    "lihovina",
    "lijavec",
    "lilek",
    "limetka",
    "linie",
    "linka",
    "linoleum",
    "listopad",
    "litina",
    "litovat",
    "lobista",
    "lodivod",
    "logika",
    "logoped",
    "lokalita",
    "loket",
    "lomcovat",
    "lopata",
    "lopuch",
    "lord",
    "losos",
    "lotr",
    "loudal",
    "louh",
    "louka",
    "louskat",
    "lovec",
    "lstivost",
    "lucerna",
    "lucifer",
    "lump",
    "lusk",
    "lustrace",
    "lvice",
    "lyra",
    "lyrika",
    "lysina",
    "madam",
    "madlo",
    "magistr",
    "mahagon",
    "majetek",
    "majitel",
    "majorita",
    "makak",
    "makovice",
    "makrela",
    "malba",
    "malina",
    "malovat",
    "malvice",
    "maminka",
    "mandle",
    "manko",
    "marnost",
    "masakr",
    "maskot",
    "masopust",
    "matice",
    "matrika",
    "maturita",
    "mazanec",
    "mazivo",
    "mazlit",
    "mazurka",
    "mdloba",
    "mechanik",
    "meditace",
    "medovina",
    "melasa",
    "meloun",
    "mentolka",
    "metla",
    "metoda",
    "metr",
    "mezera",
    "migrace",
    "mihnout",
    "mihule",
    "mikina",
    "mikrofon",
    "milenec",
    "milimetr",
    "milost",
    "mimika",
    "mincovna",
    "minibar",
    "minomet",
    "minulost",
    "miska",
    "mistr",
    "mixovat",
    "mladost",
    "mlha",
    "mlhovina",
    "mlok",
    "mlsat",
    "mluvit",
    "mnich",
    "mnohem",
    "mobil",
    "mocnost",
    "modelka",
    "modlitba",
    "mohyla",
    "mokro",
    "molekula",
    "momentka",
    "monarcha",
    "monokl",
    "monstrum",
    "montovat",
    "monzun",
    "mosaz",
    "moskyt",
    "most",
    "motivace",
    "motorka",
    "motyka",
    "moucha",
    "moudrost",
    "mozaika",
    "mozek",
    "mozol",
    "mramor",
    "mravenec",
    "mrkev",
    "mrtvola",
    "mrzet",
    "mrzutost",
    "mstitel",
    "mudrc",
    "muflon",
    "mulat",
    "mumie",
    "munice",
    "muset",
    "mutace",
    "muzeum",
    "muzikant",
    "myslivec",
    "mzda",
    "nabourat",
    "nachytat",
    "nadace",
    "nadbytek",
    "nadhoz",
    "nadobro",
    "nadpis",
    "nahlas",
    "nahnat",
    "nahodile",
    "nahradit",
    "naivita",
    "najednou",
    "najisto",
    "najmout",
    "naklonit",
    "nakonec",
    "nakrmit",
    "nalevo",
    "namazat",
    "namluvit",
    "nanometr",
    "naoko",
    "naopak",
    "naostro",
    "napadat",
    "napevno",
    "naplnit",
    "napnout",
    "naposled",
    "naprosto",
    "narodit",
    "naruby",
    "narychlo",
    "nasadit",
    "nasekat",
    "naslepo",
    "nastat",
    "natolik",
    "navenek",
    "navrch",
    "navzdory",
    "nazvat",
    "nebe",
    "nechat",
    "necky",
    "nedaleko",
    "nedbat",
    "neduh",
    "negace",
    "nehet",
    "nehoda",
    "nejen",
    "nejprve",
    "neklid",
    "nelibost",
    "nemilost",
    "nemoc",
    "neochota",
    "neonka",
    "nepokoj",
    "nerost",
    "nerv",
    "nesmysl",
    "nesoulad",
    "netvor",
    "neuron",
    "nevina",
    "nezvykle",
    "nicota",
    "nijak",
    "nikam",
    "nikdy",
    "nikl",
    "nikterak",
    "nitro",
    "nocleh",
    "nohavice",
    "nominace",
    "nora",
    "norek",
    "nositel",
    "nosnost",
    "nouze",
    "noviny",
    "novota",
    "nozdra",
    "nuda",
    "nudle",
    "nuget",
    "nutit",
    "nutnost",
    "nutrie",
    "nymfa",
    "obal",
    "obarvit",
    "obava",
    "obdiv",
    "obec",
    "obehnat",
    "obejmout",
    "obezita",
    "obhajoba",
    "obilnice",
    "objasnit",
    "objekt",
    "obklopit",
    "oblast",
    "oblek",
    "obliba",
    "obloha",
    "obluda",
    "obnos",
    "obohatit",
    "obojek",
    "obout",
    "obrazec",
    "obrna",
    "obruba",
    "obrys",
    "obsah",
    "obsluha",
    "obstarat",
    "obuv",
    "obvaz",
    "obvinit",
    "obvod",
    "obvykle",
    "obyvatel",
    "obzor",
    "ocas",
    "ocel",
    "ocenit",
    "ochladit",
    "ochota",
    "ochrana",
    "ocitnout",
    "odboj",
    "odbyt",
    "odchod",
    "odcizit",
    "odebrat",
    "odeslat",
    "odevzdat",
    "odezva",
    "odhadce",
    "odhodit",
    "odjet",
    "odjinud",
    "odkaz",
    "odkoupit",
    "odliv",
    "odluka",
    "odmlka",
    "odolnost",
    "odpad",
    "odpis",
    "odplout",
    "odpor",
    "odpustit",
    "odpykat",
    "odrazka",
    "odsoudit",
    "odstup",
    "odsun",
    "odtok",
    "odtud",
    "odvaha",
    "odveta",
    "odvolat",
    "odvracet",
    "odznak",
    "ofina",
    "ofsajd",
    "ohlas",
    "ohnisko",
    "ohrada",
    "ohrozit",
    "ohryzek",
    "okap",
    "okenice",
    "oklika",
    "okno",
    "okouzlit",
    "okovy",
    "okrasa",
    "okres",
    "okrsek",
    "okruh",
    "okupant",
    "okurka",
    "okusit",
    "olejnina",
    "olizovat",
    "omak",
    "omeleta",
    "omezit",
    "omladina",
    "omlouvat",
    "omluva",
    "omyl",
    "onehdy",
    "opakovat",
    "opasek",
    "operace",
    "opice",
    "opilost",
    "opisovat",
    "opora",
    "opozice",
    "opravdu",
    "oproti",
    "orbital",
    "orchestr",
    "orgie",
    "orlice",
    "orloj",
    "ortel",
    "osada",
    "oschnout",
    "osika",
    "osivo",
    "oslava",
    "oslepit",
    "oslnit",
    "oslovit",
    "osnova",
    "osoba",
    "osolit",
    "ospalec",
    "osten",
    "ostraha",
    "ostuda",
    "ostych",
    "osvojit",
    "oteplit",
    "otisk",
    "otop",
    "otrhat",
    "otrlost",
    "otrok",
    "otruby",
    "otvor",
    "ovanout",
    "ovar",
    "oves",
    "ovlivnit",
    "ovoce",
    "oxid",
    "ozdoba",
    "pachatel",
    "pacient",
    "padouch",
    "pahorek",
    "pakt",
    "palanda",
    "palec",
    "palivo",
    "paluba",
    "pamflet",
    "pamlsek",
    "panenka",
    "panika",
    "panna",
    "panovat",
    "panstvo",
    "pantofle",
    "paprika",
    "parketa",
    "parodie",
    "parta",
    "paruka",
    "paryba",
    "paseka",
    "pasivita",
    "pastelka",
    "patent",
    "patrona",
    "pavouk",
    "pazneht",
    "pazourek",
    "pecka",
    "pedagog",
    "pejsek",
    "peklo",
    "peloton",
    "penalta",
    "pendrek",
    "penze",
    "periskop",
    "pero",
    "pestrost",
    "petarda",
    "petice",
    "petrolej",
    "pevnina",
    "pexeso",
    "pianista",
    "piha",
    "pijavice",
    "pikle",
    "piknik",
    "pilina",
    "pilnost",
    "pilulka",
    "pinzeta",
    "pipeta",
    "pisatel",
    "pistole",
    "pitevna",
    "pivnice",
    "pivovar",
    "placenta",
    "plakat",
    "plamen",
    "planeta",
    "plastika",
    "platit",
    "plavidlo",
    "plaz",
    "plech",
    "plemeno",
    "plenta",
    "ples",
    "pletivo",
    "plevel",
    "plivat",
    "plnit",
    "plno",
    "plocha",
    "plodina",
    "plomba",
    "plout",
    "pluk",
    "plyn",
    "pobavit",
    "pobyt",
    "pochod",
    "pocit",
    "poctivec",
    "podat",
    "podcenit",
    "podepsat",
    "podhled",
    "podivit",
    "podklad",
    "podmanit",
    "podnik",
    "podoba",
    "podpora",
    "podraz",
    "podstata",
    "podvod",
    "podzim",
    "poezie",
    "pohanka",
    "pohnutka",
    "pohovor",
    "pohroma",
    "pohyb",
    "pointa",
    "pojistka",
    "pojmout",
    "pokazit",
    "pokles",
    "pokoj",
    "pokrok",
    "pokuta",
    "pokyn",
    "poledne",
    "polibek",
    "polknout",
    "poloha",
    "polynom",
    "pomalu",
    "pominout",
    "pomlka",
    "pomoc",
    "pomsta",
    "pomyslet",
    "ponechat",
    "ponorka",
    "ponurost",
    "popadat",
    "popel",
    "popisek",
    "poplach",
    "poprosit",
    "popsat",
    "popud",
    "poradce",
    "porce",
    "porod",
    "porucha",
    "poryv",
    "posadit",
    "posed",
    "posila",
    "poskok",
    "poslanec",
    "posoudit",
    "pospolu",
    "postava",
    "posudek",
    "posyp",
    "potah",
    "potkan",
    "potlesk",
    "potomek",
    "potrava",
    "potupa",
    "potvora",
    "poukaz",
    "pouto",
    "pouzdro",
    "povaha",
    "povidla",
    "povlak",
    "povoz",
    "povrch",
    "povstat",
    "povyk",
    "povzdech",
    "pozdrav",
    "pozemek",
    "poznatek",
    "pozor",
    "pozvat",
    "pracovat",
    "prahory",
    "praktika",
    "prales",
    "praotec",
    "praporek",
    "prase",
    "pravda",
    "princip",
    "prkno",
    "probudit",
    "procento",
    "prodej",
    "profese",
    "prohra",
    "projekt",
    "prolomit",
    "promile",
    "pronikat",
    "propad",
    "prorok",
    "prosba",
    "proton",
    "proutek",
    "provaz",
    "prskavka",
    "prsten",
    "prudkost",
    "prut",
    "prvek",
    "prvohory",
    "psanec",
    "psovod",
    "pstruh",
    "ptactvo",
    "puberta",
    "puch",
    "pudl",
    "pukavec",
    "puklina",
    "pukrle",
    "pult",
    "pumpa",
    "punc",
    "pupen",
    "pusa",
    "pusinka",
    "pustina",
    "putovat",
    "putyka",
    "pyramida",
    "pysk",
    "pytel",
    "racek",
    "rachot",
    "radiace",
    "radnice",
    "radon",
    "raft",
    "ragby",
    "raketa",
    "rakovina",
    "rameno",
    "rampouch",
    "rande",
    "rarach",
    "rarita",
    "rasovna",
    "rastr",
    "ratolest",
    "razance",
    "razidlo",
    "reagovat",
    "reakce",
    "recept",
    "redaktor",
    "referent",
    "reflex",
    "rejnok",
    "reklama",
    "rekord",
    "rekrut",
    "rektor",
    "reputace",
    "revize",
    "revma",
    "revolver",
    "rezerva",
    "riskovat",
    "riziko",
    "robotika",
    "rodokmen",
    "rohovka",
    "rokle",
    "rokoko",
    "romaneto",
    "ropovod",
    "ropucha",
    "rorejs",
    "rosol",
    "rostlina",
    "rotmistr",
    "rotoped",
    "rotunda",
    "roubenka",
    "roucho",
    "roup",
    "roura",
    "rovina",
    "rovnice",
    "rozbor",
    "rozchod",
    "rozdat",
    "rozeznat",
    "rozhodce",
    "rozinka",
    "rozjezd",
    "rozkaz",
    "rozloha",
    "rozmar",
    "rozpad",
    "rozruch",
    "rozsah",
    "roztok",
    "rozum",
    "rozvod",
    "rubrika",
    "ruchadlo",
    "rukavice",
    "rukopis",
    "ryba",
    "rybolov",
    "rychlost",
    "rydlo",
    "rypadlo",
    "rytina",
    "ryzost",
    "sadista",
    "sahat",
    "sako",
    "samec",
    "samizdat",
    "samota",
    "sanitka",
    "sardinka",
    "sasanka",
    "satelit",
    "sazba",
    "sazenice",
    "sbor",
    "schovat",
    "sebranka",
    "secese",
    "sedadlo",
    "sediment",
    "sedlo",
    "sehnat",
    "sejmout",
    "sekera",
    "sekta",
    "sekunda",
    "sekvoje",
    "semeno",
    "seno",
    "servis",
    "sesadit",
    "seshora",
    "seskok",
    "seslat",
    "sestra",
    "sesuv",
    "sesypat",
    "setba",
    "setina",
    "setkat",
    "setnout",
    "setrvat",
    "sever",
    "seznam",
    "shoda",
    "shrnout",
    "sifon",
    "silnice",
    "sirka",
    "sirotek",
    "sirup",
    "situace",
    "skafandr",
    "skalisko",
    "skanzen",
    "skaut",
    "skeptik",
    "skica",
    "skladba",
    "sklenice",
    "sklo",
    "skluz",
    "skoba",
    "skokan",
    "skoro",
    "skripta",
    "skrz",
    "skupina",
    "skvost",
    "skvrna",
    "slabika",
    "sladidlo",
    "slanina",
    "slast",
    "slavnost",
    "sledovat",
    "slepec",
    "sleva",
    "slezina",
    "slib",
    "slina",
    "sliznice",
    "slon",
    "sloupek",
    "slovo",
    "sluch",
    "sluha",
    "slunce",
    "slupka",
    "slza",
    "smaragd",
    "smetana",
    "smilstvo",
    "smlouva",
    "smog",
    "smrad",
    "smrk",
    "smrtka",
    "smutek",
    "smysl",
    "snad",
    "snaha",
    "snob",
    "sobota",
    "socha",
    "sodovka",
    "sokol",
    "sopka",
    "sotva",
    "souboj",
    "soucit",
    "soudce",
    "souhlas",
    "soulad",
    "soumrak",
    "souprava",
    "soused",
    "soutok",
    "souviset",
    "spalovna",
    "spasitel",
    "spis",
    "splav",
    "spodek",
    "spojenec",
    "spolu",
    "sponzor",
    "spornost",
    "spousta",
    "sprcha",
    "spustit",
    "sranda",
    "sraz",
    "srdce",
    "srna",
    "srnec",
    "srovnat",
    "srpen",
    "srst",
    "srub",
    "stanice",
    "starosta",
    "statika",
    "stavba",
    "stehno",
    "stezka",
    "stodola",
    "stolek",
    "stopa",
    "storno",
    "stoupat",
    "strach",
    "stres",
    "strhnout",
    "strom",
    "struna",
    "studna",
    "stupnice",
    "stvol",
    "styk",
    "subjekt",
    "subtropy",
    "suchar",
    "sudost",
    "sukno",
    "sundat",
    "sunout",
    "surikata",
    "surovina",
    "svah",
    "svalstvo",
    "svetr",
    "svatba",
    "svazek",
    "svisle",
    "svitek",
    "svoboda",
    "svodidlo",
    "svorka",
    "svrab",
    "sykavka",
    "sykot",
    "synek",
    "synovec",
    "sypat",
    "sypkost",
    "syrovost",
    "sysel",
    "sytost",
    "tabletka",
    "tabule",
    "tahoun",
    "tajemno",
    "tajfun",
    "tajga",
    "tajit",
    "tajnost",
    "taktika",
    "tamhle",
    "tampon",
    "tancovat",
    "tanec",
    "tanker",
    "tapeta",
    "tavenina",
    "tazatel",
    "technika",
    "tehdy",
    "tekutina",
    "telefon",
    "temnota",
    "tendence",
    "tenista",
    "tenor",
    "teplota",
    "tepna",
    "teprve",
    "terapie",
    "termoska",
    "textil",
    "ticho",
    "tiskopis",
    "titulek",
    "tkadlec",
    "tkanina",
    "tlapka",
    "tleskat",
    "tlukot",
    "tlupa",
    "tmel",
    "toaleta",
    "topinka",
    "topol",
    "torzo",
    "touha",
    "toulec",
    "tradice",
    "traktor",
    "tramp",
    "trasa",
    "traverza",
    "trefit",
    "trest",
    "trezor",
    "trhavina",
    "trhlina",
    "trochu",
    "trojice",
    "troska",
    "trouba",
    "trpce",
    "trpitel",
    "trpkost",
    "trubec",
    "truchlit",
    "truhlice",
    "trus",
    "trvat",
    "tudy",
    "tuhnout",
    "tuhost",
    "tundra",
    "turista",
    "turnaj",
    "tuzemsko",
    "tvaroh",
    "tvorba",
    "tvrdost",
    "tvrz",
    "tygr",
    "tykev",
    "ubohost",
    "uboze",
    "ubrat",
    "ubrousek",
    "ubrus",
    "ubytovna",
    "ucho",
    "uctivost",
    "udivit",
    "uhradit",
    "ujednat",
    "ujistit",
    "ujmout",
    "ukazatel",
    "uklidnit",
    "uklonit",
    "ukotvit",
    "ukrojit",
    "ulice",
    "ulita",
    "ulovit",
    "umyvadlo",
    "unavit",
    "uniforma",
    "uniknout",
    "upadnout",
    "uplatnit",
    "uplynout",
    "upoutat",
    "upravit",
    "uran",
    "urazit",
    "usednout",
    "usilovat",
    "usmrtit",
    "usnadnit",
    "usnout",
    "usoudit",
    "ustlat",
    "ustrnout",
    "utahovat",
    "utkat",
    "utlumit",
    "utonout",
    "utopenec",
    "utrousit",
    "uvalit",
    "uvolnit",
    "uvozovka",
    "uzdravit",
    "uzel",
    "uzenina",
    "uzlina",
    "uznat",
    "vagon",
    "valcha",
    "valoun",
    "vana",
    "vandal",
    "vanilka",
    "varan",
    "varhany",
    "varovat",
    "vcelku",
    "vchod",
    "vdova",
    "vedro",
    "vegetace",
    "vejce",
    "velbloud",
    "veletrh",
    "velitel",
    "velmoc",
    "velryba",
    "venkov",
    "veranda",
    "verze",
    "veselka",
    "veskrze",
    "vesnice",
    "vespodu",
    "vesta",
    "veterina",
    "veverka",
    "vibrace",
    "vichr",
    "videohra",
    "vidina",
    "vidle",
    "vila",
    "vinice",
    "viset",
    "vitalita",
    "vize",
    "vizitka",
    "vjezd",
    "vklad",
    "vkus",
    "vlajka",
    "vlak",
    "vlasec",
    "vlevo",
    "vlhkost",
    "vliv",
    "vlnovka",
    "vloupat",
    "vnucovat",
    "vnuk",
    "voda",
    "vodivost",
    "vodoznak",
    "vodstvo",
    "vojensky",
    "vojna",
    "vojsko",
    "volant",
    "volba",
    "volit",
    "volno",
    "voskovka",
    "vozidlo",
    "vozovna",
    "vpravo",
    "vrabec",
    "vracet",
    "vrah",
    "vrata",
    "vrba",
    "vrcholek",
    "vrhat",
    "vrstva",
    "vrtule",
    "vsadit",
    "vstoupit",
    "vstup",
    "vtip",
    "vybavit",
    "vybrat",
    "vychovat",
    "vydat",
    "vydra",
    "vyfotit",
    "vyhledat",
    "vyhnout",
    "vyhodit",
    "vyhradit",
    "vyhubit",
    "vyjasnit",
    "vyjet",
    "vyjmout",
    "vyklopit",
    "vykonat",
    "vylekat",
    "vymazat",
    "vymezit",
    "vymizet",
    "vymyslet",
    "vynechat",
    "vynikat",
    "vynutit",
    "vypadat",
    "vyplatit",
    "vypravit",
    "vypustit",
    "vyrazit",
    "vyrovnat",
    "vyrvat",
    "vyslovit",
    "vysoko",
    "vystavit",
    "vysunout",
    "vysypat",
    "vytasit",
    "vytesat",
    "vytratit",
    "vyvinout",
    "vyvolat",
    "vyvrhel",
    "vyzdobit",
    "vyznat",
    "vzadu",
    "vzbudit",
    "vzchopit",
    "vzdor",
    "vzduch",
    "vzdychat",
    "vzestup",
    "vzhledem",
    "vzkaz",
    "vzlykat",
    "vznik",
    "vzorek",
    "vzpoura",
    "vztah",
    "vztek",
    "xylofon",
    "zabrat",
    "zabydlet",
    "zachovat",
    "zadarmo",
    "zadusit",
    "zafoukat",
    "zahltit",
    "zahodit",
    "zahrada",
    "zahynout",
    "zajatec",
    "zajet",
    "zajistit",
    "zaklepat",
    "zakoupit",
    "zalepit",
    "zamezit",
    "zamotat",
    "zamyslet",
    "zanechat",
    "zanikat",
    "zaplatit",
    "zapojit",
    "zapsat",
    "zarazit",
    "zastavit",
    "zasunout",
    "zatajit",
    "zatemnit",
    "zatknout",
    "zaujmout",
    "zavalit",
    "zavelet",
    "zavinit",
    "zavolat",
    "zavrtat",
    "zazvonit",
    "zbavit",
    "zbrusu",
    "zbudovat",
    "zbytek",
    "zdaleka",
    "zdarma",
    "zdatnost",
    "zdivo",
    "zdobit",
    "zdroj",
    "zdvih",
    "zdymadlo",
    "zelenina",
    "zeman",
    "zemina",
    "zeptat",
    "zezadu",
    "zezdola",
    "zhatit",
    "zhltnout",
    "zhluboka",
    "zhotovit",
    "zhruba",
    "zima",
    "zimnice",
    "zjemnit",
    "zklamat",
    "zkoumat",
    "zkratka",
    "zkumavka",
    "zlato",
    "zlehka",
    "zloba",
    "zlom",
    "zlost",
    "zlozvyk",
    "zmapovat",
    "zmar",
    "zmatek",
    "zmije",
    "zmizet",
    "zmocnit",
    "zmodrat",
    "zmrzlina",
    "zmutovat",
    "znak",
    "znalost",
    "znamenat",
    "znovu",
    "zobrazit",
    "zotavit",
    "zoubek",
    "zoufale",
    "zplodit",
    "zpomalit",
    "zprava",
    "zprostit",
    "zprudka",
    "zprvu",
    "zrada",
    "zranit",
    "zrcadlo",
    "zrnitost",
    "zrno",
    "zrovna",
    "zrychlit",
    "zrzavost",
    "zticha",
    "ztratit",
    "zubovina",
    "zubr",
    "zvednout",
    "zvenku",
    "zvesela",
    "zvon",
    "zvrat",
    "zvukovod",
    "zvyk"
  ], pp = [
    "\u7684",
    "\u4E00",
    "\u662F",
    "\u5728",
    "\u4E0D",
    "\u4E86",
    "\u6709",
    "\u548C",
    "\u4EBA",
    "\u8FD9",
    "\u4E2D",
    "\u5927",
    "\u4E3A",
    "\u4E0A",
    "\u4E2A",
    "\u56FD",
    "\u6211",
    "\u4EE5",
    "\u8981",
    "\u4ED6",
    "\u65F6",
    "\u6765",
    "\u7528",
    "\u4EEC",
    "\u751F",
    "\u5230",
    "\u4F5C",
    "\u5730",
    "\u4E8E",
    "\u51FA",
    "\u5C31",
    "\u5206",
    "\u5BF9",
    "\u6210",
    "\u4F1A",
    "\u53EF",
    "\u4E3B",
    "\u53D1",
    "\u5E74",
    "\u52A8",
    "\u540C",
    "\u5DE5",
    "\u4E5F",
    "\u80FD",
    "\u4E0B",
    "\u8FC7",
    "\u5B50",
    "\u8BF4",
    "\u4EA7",
    "\u79CD",
    "\u9762",
    "\u800C",
    "\u65B9",
    "\u540E",
    "\u591A",
    "\u5B9A",
    "\u884C",
    "\u5B66",
    "\u6CD5",
    "\u6240",
    "\u6C11",
    "\u5F97",
    "\u7ECF",
    "\u5341",
    "\u4E09",
    "\u4E4B",
    "\u8FDB",
    "\u7740",
    "\u7B49",
    "\u90E8",
    "\u5EA6",
    "\u5BB6",
    "\u7535",
    "\u529B",
    "\u91CC",
    "\u5982",
    "\u6C34",
    "\u5316",
    "\u9AD8",
    "\u81EA",
    "\u4E8C",
    "\u7406",
    "\u8D77",
    "\u5C0F",
    "\u7269",
    "\u73B0",
    "\u5B9E",
    "\u52A0",
    "\u91CF",
    "\u90FD",
    "\u4E24",
    "\u4F53",
    "\u5236",
    "\u673A",
    "\u5F53",
    "\u4F7F",
    "\u70B9",
    "\u4ECE",
    "\u4E1A",
    "\u672C",
    "\u53BB",
    "\u628A",
    "\u6027",
    "\u597D",
    "\u5E94",
    "\u5F00",
    "\u5B83",
    "\u5408",
    "\u8FD8",
    "\u56E0",
    "\u7531",
    "\u5176",
    "\u4E9B",
    "\u7136",
    "\u524D",
    "\u5916",
    "\u5929",
    "\u653F",
    "\u56DB",
    "\u65E5",
    "\u90A3",
    "\u793E",
    "\u4E49",
    "\u4E8B",
    "\u5E73",
    "\u5F62",
    "\u76F8",
    "\u5168",
    "\u8868",
    "\u95F4",
    "\u6837",
    "\u4E0E",
    "\u5173",
    "\u5404",
    "\u91CD",
    "\u65B0",
    "\u7EBF",
    "\u5185",
    "\u6570",
    "\u6B63",
    "\u5FC3",
    "\u53CD",
    "\u4F60",
    "\u660E",
    "\u770B",
    "\u539F",
    "\u53C8",
    "\u4E48",
    "\u5229",
    "\u6BD4",
    "\u6216",
    "\u4F46",
    "\u8D28",
    "\u6C14",
    "\u7B2C",
    "\u5411",
    "\u9053",
    "\u547D",
    "\u6B64",
    "\u53D8",
    "\u6761",
    "\u53EA",
    "\u6CA1",
    "\u7ED3",
    "\u89E3",
    "\u95EE",
    "\u610F",
    "\u5EFA",
    "\u6708",
    "\u516C",
    "\u65E0",
    "\u7CFB",
    "\u519B",
    "\u5F88",
    "\u60C5",
    "\u8005",
    "\u6700",
    "\u7ACB",
    "\u4EE3",
    "\u60F3",
    "\u5DF2",
    "\u901A",
    "\u5E76",
    "\u63D0",
    "\u76F4",
    "\u9898",
    "\u515A",
    "\u7A0B",
    "\u5C55",
    "\u4E94",
    "\u679C",
    "\u6599",
    "\u8C61",
    "\u5458",
    "\u9769",
    "\u4F4D",
    "\u5165",
    "\u5E38",
    "\u6587",
    "\u603B",
    "\u6B21",
    "\u54C1",
    "\u5F0F",
    "\u6D3B",
    "\u8BBE",
    "\u53CA",
    "\u7BA1",
    "\u7279",
    "\u4EF6",
    "\u957F",
    "\u6C42",
    "\u8001",
    "\u5934",
    "\u57FA",
    "\u8D44",
    "\u8FB9",
    "\u6D41",
    "\u8DEF",
    "\u7EA7",
    "\u5C11",
    "\u56FE",
    "\u5C71",
    "\u7EDF",
    "\u63A5",
    "\u77E5",
    "\u8F83",
    "\u5C06",
    "\u7EC4",
    "\u89C1",
    "\u8BA1",
    "\u522B",
    "\u5979",
    "\u624B",
    "\u89D2",
    "\u671F",
    "\u6839",
    "\u8BBA",
    "\u8FD0",
    "\u519C",
    "\u6307",
    "\u51E0",
    "\u4E5D",
    "\u533A",
    "\u5F3A",
    "\u653E",
    "\u51B3",
    "\u897F",
    "\u88AB",
    "\u5E72",
    "\u505A",
    "\u5FC5",
    "\u6218",
    "\u5148",
    "\u56DE",
    "\u5219",
    "\u4EFB",
    "\u53D6",
    "\u636E",
    "\u5904",
    "\u961F",
    "\u5357",
    "\u7ED9",
    "\u8272",
    "\u5149",
    "\u95E8",
    "\u5373",
    "\u4FDD",
    "\u6CBB",
    "\u5317",
    "\u9020",
    "\u767E",
    "\u89C4",
    "\u70ED",
    "\u9886",
    "\u4E03",
    "\u6D77",
    "\u53E3",
    "\u4E1C",
    "\u5BFC",
    "\u5668",
    "\u538B",
    "\u5FD7",
    "\u4E16",
    "\u91D1",
    "\u589E",
    "\u4E89",
    "\u6D4E",
    "\u9636",
    "\u6CB9",
    "\u601D",
    "\u672F",
    "\u6781",
    "\u4EA4",
    "\u53D7",
    "\u8054",
    "\u4EC0",
    "\u8BA4",
    "\u516D",
    "\u5171",
    "\u6743",
    "\u6536",
    "\u8BC1",
    "\u6539",
    "\u6E05",
    "\u7F8E",
    "\u518D",
    "\u91C7",
    "\u8F6C",
    "\u66F4",
    "\u5355",
    "\u98CE",
    "\u5207",
    "\u6253",
    "\u767D",
    "\u6559",
    "\u901F",
    "\u82B1",
    "\u5E26",
    "\u5B89",
    "\u573A",
    "\u8EAB",
    "\u8F66",
    "\u4F8B",
    "\u771F",
    "\u52A1",
    "\u5177",
    "\u4E07",
    "\u6BCF",
    "\u76EE",
    "\u81F3",
    "\u8FBE",
    "\u8D70",
    "\u79EF",
    "\u793A",
    "\u8BAE",
    "\u58F0",
    "\u62A5",
    "\u6597",
    "\u5B8C",
    "\u7C7B",
    "\u516B",
    "\u79BB",
    "\u534E",
    "\u540D",
    "\u786E",
    "\u624D",
    "\u79D1",
    "\u5F20",
    "\u4FE1",
    "\u9A6C",
    "\u8282",
    "\u8BDD",
    "\u7C73",
    "\u6574",
    "\u7A7A",
    "\u5143",
    "\u51B5",
    "\u4ECA",
    "\u96C6",
    "\u6E29",
    "\u4F20",
    "\u571F",
    "\u8BB8",
    "\u6B65",
    "\u7FA4",
    "\u5E7F",
    "\u77F3",
    "\u8BB0",
    "\u9700",
    "\u6BB5",
    "\u7814",
    "\u754C",
    "\u62C9",
    "\u6797",
    "\u5F8B",
    "\u53EB",
    "\u4E14",
    "\u7A76",
    "\u89C2",
    "\u8D8A",
    "\u7EC7",
    "\u88C5",
    "\u5F71",
    "\u7B97",
    "\u4F4E",
    "\u6301",
    "\u97F3",
    "\u4F17",
    "\u4E66",
    "\u5E03",
    "\u590D",
    "\u5BB9",
    "\u513F",
    "\u987B",
    "\u9645",
    "\u5546",
    "\u975E",
    "\u9A8C",
    "\u8FDE",
    "\u65AD",
    "\u6DF1",
    "\u96BE",
    "\u8FD1",
    "\u77FF",
    "\u5343",
    "\u5468",
    "\u59D4",
    "\u7D20",
    "\u6280",
    "\u5907",
    "\u534A",
    "\u529E",
    "\u9752",
    "\u7701",
    "\u5217",
    "\u4E60",
    "\u54CD",
    "\u7EA6",
    "\u652F",
    "\u822C",
    "\u53F2",
    "\u611F",
    "\u52B3",
    "\u4FBF",
    "\u56E2",
    "\u5F80",
    "\u9178",
    "\u5386",
    "\u5E02",
    "\u514B",
    "\u4F55",
    "\u9664",
    "\u6D88",
    "\u6784",
    "\u5E9C",
    "\u79F0",
    "\u592A",
    "\u51C6",
    "\u7CBE",
    "\u503C",
    "\u53F7",
    "\u7387",
    "\u65CF",
    "\u7EF4",
    "\u5212",
    "\u9009",
    "\u6807",
    "\u5199",
    "\u5B58",
    "\u5019",
    "\u6BDB",
    "\u4EB2",
    "\u5FEB",
    "\u6548",
    "\u65AF",
    "\u9662",
    "\u67E5",
    "\u6C5F",
    "\u578B",
    "\u773C",
    "\u738B",
    "\u6309",
    "\u683C",
    "\u517B",
    "\u6613",
    "\u7F6E",
    "\u6D3E",
    "\u5C42",
    "\u7247",
    "\u59CB",
    "\u5374",
    "\u4E13",
    "\u72B6",
    "\u80B2",
    "\u5382",
    "\u4EAC",
    "\u8BC6",
    "\u9002",
    "\u5C5E",
    "\u5706",
    "\u5305",
    "\u706B",
    "\u4F4F",
    "\u8C03",
    "\u6EE1",
    "\u53BF",
    "\u5C40",
    "\u7167",
    "\u53C2",
    "\u7EA2",
    "\u7EC6",
    "\u5F15",
    "\u542C",
    "\u8BE5",
    "\u94C1",
    "\u4EF7",
    "\u4E25",
    "\u9996",
    "\u5E95",
    "\u6DB2",
    "\u5B98",
    "\u5FB7",
    "\u968F",
    "\u75C5",
    "\u82CF",
    "\u5931",
    "\u5C14",
    "\u6B7B",
    "\u8BB2",
    "\u914D",
    "\u5973",
    "\u9EC4",
    "\u63A8",
    "\u663E",
    "\u8C08",
    "\u7F6A",
    "\u795E",
    "\u827A",
    "\u5462",
    "\u5E2D",
    "\u542B",
    "\u4F01",
    "\u671B",
    "\u5BC6",
    "\u6279",
    "\u8425",
    "\u9879",
    "\u9632",
    "\u4E3E",
    "\u7403",
    "\u82F1",
    "\u6C27",
    "\u52BF",
    "\u544A",
    "\u674E",
    "\u53F0",
    "\u843D",
    "\u6728",
    "\u5E2E",
    "\u8F6E",
    "\u7834",
    "\u4E9A",
    "\u5E08",
    "\u56F4",
    "\u6CE8",
    "\u8FDC",
    "\u5B57",
    "\u6750",
    "\u6392",
    "\u4F9B",
    "\u6CB3",
    "\u6001",
    "\u5C01",
    "\u53E6",
    "\u65BD",
    "\u51CF",
    "\u6811",
    "\u6EB6",
    "\u600E",
    "\u6B62",
    "\u6848",
    "\u8A00",
    "\u58EB",
    "\u5747",
    "\u6B66",
    "\u56FA",
    "\u53F6",
    "\u9C7C",
    "\u6CE2",
    "\u89C6",
    "\u4EC5",
    "\u8D39",
    "\u7D27",
    "\u7231",
    "\u5DE6",
    "\u7AE0",
    "\u65E9",
    "\u671D",
    "\u5BB3",
    "\u7EED",
    "\u8F7B",
    "\u670D",
    "\u8BD5",
    "\u98DF",
    "\u5145",
    "\u5175",
    "\u6E90",
    "\u5224",
    "\u62A4",
    "\u53F8",
    "\u8DB3",
    "\u67D0",
    "\u7EC3",
    "\u5DEE",
    "\u81F4",
    "\u677F",
    "\u7530",
    "\u964D",
    "\u9ED1",
    "\u72AF",
    "\u8D1F",
    "\u51FB",
    "\u8303",
    "\u7EE7",
    "\u5174",
    "\u4F3C",
    "\u4F59",
    "\u575A",
    "\u66F2",
    "\u8F93",
    "\u4FEE",
    "\u6545",
    "\u57CE",
    "\u592B",
    "\u591F",
    "\u9001",
    "\u7B14",
    "\u8239",
    "\u5360",
    "\u53F3",
    "\u8D22",
    "\u5403",
    "\u5BCC",
    "\u6625",
    "\u804C",
    "\u89C9",
    "\u6C49",
    "\u753B",
    "\u529F",
    "\u5DF4",
    "\u8DDF",
    "\u867D",
    "\u6742",
    "\u98DE",
    "\u68C0",
    "\u5438",
    "\u52A9",
    "\u5347",
    "\u9633",
    "\u4E92",
    "\u521D",
    "\u521B",
    "\u6297",
    "\u8003",
    "\u6295",
    "\u574F",
    "\u7B56",
    "\u53E4",
    "\u5F84",
    "\u6362",
    "\u672A",
    "\u8DD1",
    "\u7559",
    "\u94A2",
    "\u66FE",
    "\u7AEF",
    "\u8D23",
    "\u7AD9",
    "\u7B80",
    "\u8FF0",
    "\u94B1",
    "\u526F",
    "\u5C3D",
    "\u5E1D",
    "\u5C04",
    "\u8349",
    "\u51B2",
    "\u627F",
    "\u72EC",
    "\u4EE4",
    "\u9650",
    "\u963F",
    "\u5BA3",
    "\u73AF",
    "\u53CC",
    "\u8BF7",
    "\u8D85",
    "\u5FAE",
    "\u8BA9",
    "\u63A7",
    "\u5DDE",
    "\u826F",
    "\u8F74",
    "\u627E",
    "\u5426",
    "\u7EAA",
    "\u76CA",
    "\u4F9D",
    "\u4F18",
    "\u9876",
    "\u7840",
    "\u8F7D",
    "\u5012",
    "\u623F",
    "\u7A81",
    "\u5750",
    "\u7C89",
    "\u654C",
    "\u7565",
    "\u5BA2",
    "\u8881",
    "\u51B7",
    "\u80DC",
    "\u7EDD",
    "\u6790",
    "\u5757",
    "\u5242",
    "\u6D4B",
    "\u4E1D",
    "\u534F",
    "\u8BC9",
    "\u5FF5",
    "\u9648",
    "\u4ECD",
    "\u7F57",
    "\u76D0",
    "\u53CB",
    "\u6D0B",
    "\u9519",
    "\u82E6",
    "\u591C",
    "\u5211",
    "\u79FB",
    "\u9891",
    "\u9010",
    "\u9760",
    "\u6DF7",
    "\u6BCD",
    "\u77ED",
    "\u76AE",
    "\u7EC8",
    "\u805A",
    "\u6C7D",
    "\u6751",
    "\u4E91",
    "\u54EA",
    "\u65E2",
    "\u8DDD",
    "\u536B",
    "\u505C",
    "\u70C8",
    "\u592E",
    "\u5BDF",
    "\u70E7",
    "\u8FC5",
    "\u5883",
    "\u82E5",
    "\u5370",
    "\u6D32",
    "\u523B",
    "\u62EC",
    "\u6FC0",
    "\u5B54",
    "\u641E",
    "\u751A",
    "\u5BA4",
    "\u5F85",
    "\u6838",
    "\u6821",
    "\u6563",
    "\u4FB5",
    "\u5427",
    "\u7532",
    "\u6E38",
    "\u4E45",
    "\u83DC",
    "\u5473",
    "\u65E7",
    "\u6A21",
    "\u6E56",
    "\u8D27",
    "\u635F",
    "\u9884",
    "\u963B",
    "\u6BEB",
    "\u666E",
    "\u7A33",
    "\u4E59",
    "\u5988",
    "\u690D",
    "\u606F",
    "\u6269",
    "\u94F6",
    "\u8BED",
    "\u6325",
    "\u9152",
    "\u5B88",
    "\u62FF",
    "\u5E8F",
    "\u7EB8",
    "\u533B",
    "\u7F3A",
    "\u96E8",
    "\u5417",
    "\u9488",
    "\u5218",
    "\u554A",
    "\u6025",
    "\u5531",
    "\u8BEF",
    "\u8BAD",
    "\u613F",
    "\u5BA1",
    "\u9644",
    "\u83B7",
    "\u8336",
    "\u9C9C",
    "\u7CAE",
    "\u65A4",
    "\u5B69",
    "\u8131",
    "\u786B",
    "\u80A5",
    "\u5584",
    "\u9F99",
    "\u6F14",
    "\u7236",
    "\u6E10",
    "\u8840",
    "\u6B22",
    "\u68B0",
    "\u638C",
    "\u6B4C",
    "\u6C99",
    "\u521A",
    "\u653B",
    "\u8C13",
    "\u76FE",
    "\u8BA8",
    "\u665A",
    "\u7C92",
    "\u4E71",
    "\u71C3",
    "\u77DB",
    "\u4E4E",
    "\u6740",
    "\u836F",
    "\u5B81",
    "\u9C81",
    "\u8D35",
    "\u949F",
    "\u7164",
    "\u8BFB",
    "\u73ED",
    "\u4F2F",
    "\u9999",
    "\u4ECB",
    "\u8FEB",
    "\u53E5",
    "\u4E30",
    "\u57F9",
    "\u63E1",
    "\u5170",
    "\u62C5",
    "\u5F26",
    "\u86CB",
    "\u6C89",
    "\u5047",
    "\u7A7F",
    "\u6267",
    "\u7B54",
    "\u4E50",
    "\u8C01",
    "\u987A",
    "\u70DF",
    "\u7F29",
    "\u5F81",
    "\u8138",
    "\u559C",
    "\u677E",
    "\u811A",
    "\u56F0",
    "\u5F02",
    "\u514D",
    "\u80CC",
    "\u661F",
    "\u798F",
    "\u4E70",
    "\u67D3",
    "\u4E95",
    "\u6982",
    "\u6162",
    "\u6015",
    "\u78C1",
    "\u500D",
    "\u7956",
    "\u7687",
    "\u4FC3",
    "\u9759",
    "\u8865",
    "\u8BC4",
    "\u7FFB",
    "\u8089",
    "\u8DF5",
    "\u5C3C",
    "\u8863",
    "\u5BBD",
    "\u626C",
    "\u68C9",
    "\u5E0C",
    "\u4F24",
    "\u64CD",
    "\u5782",
    "\u79CB",
    "\u5B9C",
    "\u6C22",
    "\u5957",
    "\u7763",
    "\u632F",
    "\u67B6",
    "\u4EAE",
    "\u672B",
    "\u5BAA",
    "\u5E86",
    "\u7F16",
    "\u725B",
    "\u89E6",
    "\u6620",
    "\u96F7",
    "\u9500",
    "\u8BD7",
    "\u5EA7",
    "\u5C45",
    "\u6293",
    "\u88C2",
    "\u80DE",
    "\u547C",
    "\u5A18",
    "\u666F",
    "\u5A01",
    "\u7EFF",
    "\u6676",
    "\u539A",
    "\u76DF",
    "\u8861",
    "\u9E21",
    "\u5B59",
    "\u5EF6",
    "\u5371",
    "\u80F6",
    "\u5C4B",
    "\u4E61",
    "\u4E34",
    "\u9646",
    "\u987E",
    "\u6389",
    "\u5440",
    "\u706F",
    "\u5C81",
    "\u63AA",
    "\u675F",
    "\u8010",
    "\u5267",
    "\u7389",
    "\u8D75",
    "\u8DF3",
    "\u54E5",
    "\u5B63",
    "\u8BFE",
    "\u51EF",
    "\u80E1",
    "\u989D",
    "\u6B3E",
    "\u7ECD",
    "\u5377",
    "\u9F50",
    "\u4F1F",
    "\u84B8",
    "\u6B96",
    "\u6C38",
    "\u5B97",
    "\u82D7",
    "\u5DDD",
    "\u7089",
    "\u5CA9",
    "\u5F31",
    "\u96F6",
    "\u6768",
    "\u594F",
    "\u6CBF",
    "\u9732",
    "\u6746",
    "\u63A2",
    "\u6ED1",
    "\u9547",
    "\u996D",
    "\u6D53",
    "\u822A",
    "\u6000",
    "\u8D76",
    "\u5E93",
    "\u593A",
    "\u4F0A",
    "\u7075",
    "\u7A0E",
    "\u9014",
    "\u706D",
    "\u8D5B",
    "\u5F52",
    "\u53EC",
    "\u9F13",
    "\u64AD",
    "\u76D8",
    "\u88C1",
    "\u9669",
    "\u5EB7",
    "\u552F",
    "\u5F55",
    "\u83CC",
    "\u7EAF",
    "\u501F",
    "\u7CD6",
    "\u76D6",
    "\u6A2A",
    "\u7B26",
    "\u79C1",
    "\u52AA",
    "\u5802",
    "\u57DF",
    "\u67AA",
    "\u6DA6",
    "\u5E45",
    "\u54C8",
    "\u7ADF",
    "\u719F",
    "\u866B",
    "\u6CFD",
    "\u8111",
    "\u58E4",
    "\u78B3",
    "\u6B27",
    "\u904D",
    "\u4FA7",
    "\u5BE8",
    "\u6562",
    "\u5F7B",
    "\u8651",
    "\u659C",
    "\u8584",
    "\u5EAD",
    "\u7EB3",
    "\u5F39",
    "\u9972",
    "\u4F38",
    "\u6298",
    "\u9EA6",
    "\u6E7F",
    "\u6697",
    "\u8377",
    "\u74E6",
    "\u585E",
    "\u5E8A",
    "\u7B51",
    "\u6076",
    "\u6237",
    "\u8BBF",
    "\u5854",
    "\u5947",
    "\u900F",
    "\u6881",
    "\u5200",
    "\u65CB",
    "\u8FF9",
    "\u5361",
    "\u6C2F",
    "\u9047",
    "\u4EFD",
    "\u6BD2",
    "\u6CE5",
    "\u9000",
    "\u6D17",
    "\u6446",
    "\u7070",
    "\u5F69",
    "\u5356",
    "\u8017",
    "\u590F",
    "\u62E9",
    "\u5FD9",
    "\u94DC",
    "\u732E",
    "\u786C",
    "\u4E88",
    "\u7E41",
    "\u5708",
    "\u96EA",
    "\u51FD",
    "\u4EA6",
    "\u62BD",
    "\u7BC7",
    "\u9635",
    "\u9634",
    "\u4E01",
    "\u5C3A",
    "\u8FFD",
    "\u5806",
    "\u96C4",
    "\u8FCE",
    "\u6CDB",
    "\u7238",
    "\u697C",
    "\u907F",
    "\u8C0B",
    "\u5428",
    "\u91CE",
    "\u732A",
    "\u65D7",
    "\u7D2F",
    "\u504F",
    "\u5178",
    "\u9986",
    "\u7D22",
    "\u79E6",
    "\u8102",
    "\u6F6E",
    "\u7237",
    "\u8C46",
    "\u5FFD",
    "\u6258",
    "\u60CA",
    "\u5851",
    "\u9057",
    "\u6108",
    "\u6731",
    "\u66FF",
    "\u7EA4",
    "\u7C97",
    "\u503E",
    "\u5C1A",
    "\u75DB",
    "\u695A",
    "\u8C22",
    "\u594B",
    "\u8D2D",
    "\u78E8",
    "\u541B",
    "\u6C60",
    "\u65C1",
    "\u788E",
    "\u9AA8",
    "\u76D1",
    "\u6355",
    "\u5F1F",
    "\u66B4",
    "\u5272",
    "\u8D2F",
    "\u6B8A",
    "\u91CA",
    "\u8BCD",
    "\u4EA1",
    "\u58C1",
    "\u987F",
    "\u5B9D",
    "\u5348",
    "\u5C18",
    "\u95FB",
    "\u63ED",
    "\u70AE",
    "\u6B8B",
    "\u51AC",
    "\u6865",
    "\u5987",
    "\u8B66",
    "\u7EFC",
    "\u62DB",
    "\u5434",
    "\u4ED8",
    "\u6D6E",
    "\u906D",
    "\u5F90",
    "\u60A8",
    "\u6447",
    "\u8C37",
    "\u8D5E",
    "\u7BB1",
    "\u9694",
    "\u8BA2",
    "\u7537",
    "\u5439",
    "\u56ED",
    "\u7EB7",
    "\u5510",
    "\u8D25",
    "\u5B8B",
    "\u73BB",
    "\u5DE8",
    "\u8015",
    "\u5766",
    "\u8363",
    "\u95ED",
    "\u6E7E",
    "\u952E",
    "\u51E1",
    "\u9A7B",
    "\u9505",
    "\u6551",
    "\u6069",
    "\u5265",
    "\u51DD",
    "\u78B1",
    "\u9F7F",
    "\u622A",
    "\u70BC",
    "\u9EBB",
    "\u7EBA",
    "\u7981",
    "\u5E9F",
    "\u76DB",
    "\u7248",
    "\u7F13",
    "\u51C0",
    "\u775B",
    "\u660C",
    "\u5A5A",
    "\u6D89",
    "\u7B52",
    "\u5634",
    "\u63D2",
    "\u5CB8",
    "\u6717",
    "\u5E84",
    "\u8857",
    "\u85CF",
    "\u59D1",
    "\u8D38",
    "\u8150",
    "\u5974",
    "\u5566",
    "\u60EF",
    "\u4E58",
    "\u4F19",
    "\u6062",
    "\u5300",
    "\u7EB1",
    "\u624E",
    "\u8FA9",
    "\u8033",
    "\u5F6A",
    "\u81E3",
    "\u4EBF",
    "\u7483",
    "\u62B5",
    "\u8109",
    "\u79C0",
    "\u8428",
    "\u4FC4",
    "\u7F51",
    "\u821E",
    "\u5E97",
    "\u55B7",
    "\u7EB5",
    "\u5BF8",
    "\u6C57",
    "\u6302",
    "\u6D2A",
    "\u8D3A",
    "\u95EA",
    "\u67EC",
    "\u7206",
    "\u70EF",
    "\u6D25",
    "\u7A3B",
    "\u5899",
    "\u8F6F",
    "\u52C7",
    "\u50CF",
    "\u6EDA",
    "\u5398",
    "\u8499",
    "\u82B3",
    "\u80AF",
    "\u5761",
    "\u67F1",
    "\u8361",
    "\u817F",
    "\u4EEA",
    "\u65C5",
    "\u5C3E",
    "\u8F67",
    "\u51B0",
    "\u8D21",
    "\u767B",
    "\u9ECE",
    "\u524A",
    "\u94BB",
    "\u52D2",
    "\u9003",
    "\u969C",
    "\u6C28",
    "\u90ED",
    "\u5CF0",
    "\u5E01",
    "\u6E2F",
    "\u4F0F",
    "\u8F68",
    "\u4EA9",
    "\u6BD5",
    "\u64E6",
    "\u83AB",
    "\u523A",
    "\u6D6A",
    "\u79D8",
    "\u63F4",
    "\u682A",
    "\u5065",
    "\u552E",
    "\u80A1",
    "\u5C9B",
    "\u7518",
    "\u6CE1",
    "\u7761",
    "\u7AE5",
    "\u94F8",
    "\u6C64",
    "\u9600",
    "\u4F11",
    "\u6C47",
    "\u820D",
    "\u7267",
    "\u7ED5",
    "\u70B8",
    "\u54F2",
    "\u78F7",
    "\u7EE9",
    "\u670B",
    "\u6DE1",
    "\u5C16",
    "\u542F",
    "\u9677",
    "\u67F4",
    "\u5448",
    "\u5F92",
    "\u989C",
    "\u6CEA",
    "\u7A0D",
    "\u5FD8",
    "\u6CF5",
    "\u84DD",
    "\u62D6",
    "\u6D1E",
    "\u6388",
    "\u955C",
    "\u8F9B",
    "\u58EE",
    "\u950B",
    "\u8D2B",
    "\u865A",
    "\u5F2F",
    "\u6469",
    "\u6CF0",
    "\u5E7C",
    "\u5EF7",
    "\u5C0A",
    "\u7A97",
    "\u7EB2",
    "\u5F04",
    "\u96B6",
    "\u7591",
    "\u6C0F",
    "\u5BAB",
    "\u59D0",
    "\u9707",
    "\u745E",
    "\u602A",
    "\u5C24",
    "\u7434",
    "\u5FAA",
    "\u63CF",
    "\u819C",
    "\u8FDD",
    "\u5939",
    "\u8170",
    "\u7F18",
    "\u73E0",
    "\u7A77",
    "\u68EE",
    "\u679D",
    "\u7AF9",
    "\u6C9F",
    "\u50AC",
    "\u7EF3",
    "\u5FC6",
    "\u90A6",
    "\u5269",
    "\u5E78",
    "\u6D46",
    "\u680F",
    "\u62E5",
    "\u7259",
    "\u8D2E",
    "\u793C",
    "\u6EE4",
    "\u94A0",
    "\u7EB9",
    "\u7F62",
    "\u62CD",
    "\u54B1",
    "\u558A",
    "\u8896",
    "\u57C3",
    "\u52E4",
    "\u7F5A",
    "\u7126",
    "\u6F5C",
    "\u4F0D",
    "\u58A8",
    "\u6B32",
    "\u7F1D",
    "\u59D3",
    "\u520A",
    "\u9971",
    "\u4EFF",
    "\u5956",
    "\u94DD",
    "\u9B3C",
    "\u4E3D",
    "\u8DE8",
    "\u9ED8",
    "\u6316",
    "\u94FE",
    "\u626B",
    "\u559D",
    "\u888B",
    "\u70AD",
    "\u6C61",
    "\u5E55",
    "\u8BF8",
    "\u5F27",
    "\u52B1",
    "\u6885",
    "\u5976",
    "\u6D01",
    "\u707E",
    "\u821F",
    "\u9274",
    "\u82EF",
    "\u8BBC",
    "\u62B1",
    "\u6BC1",
    "\u61C2",
    "\u5BD2",
    "\u667A",
    "\u57D4",
    "\u5BC4",
    "\u5C4A",
    "\u8DC3",
    "\u6E21",
    "\u6311",
    "\u4E39",
    "\u8270",
    "\u8D1D",
    "\u78B0",
    "\u62D4",
    "\u7239",
    "\u6234",
    "\u7801",
    "\u68A6",
    "\u82BD",
    "\u7194",
    "\u8D64",
    "\u6E14",
    "\u54ED",
    "\u656C",
    "\u9897",
    "\u5954",
    "\u94C5",
    "\u4EF2",
    "\u864E",
    "\u7A00",
    "\u59B9",
    "\u4E4F",
    "\u73CD",
    "\u7533",
    "\u684C",
    "\u9075",
    "\u5141",
    "\u9686",
    "\u87BA",
    "\u4ED3",
    "\u9B4F",
    "\u9510",
    "\u6653",
    "\u6C2E",
    "\u517C",
    "\u9690",
    "\u788D",
    "\u8D6B",
    "\u62E8",
    "\u5FE0",
    "\u8083",
    "\u7F38",
    "\u7275",
    "\u62A2",
    "\u535A",
    "\u5DE7",
    "\u58F3",
    "\u5144",
    "\u675C",
    "\u8BAF",
    "\u8BDA",
    "\u78A7",
    "\u7965",
    "\u67EF",
    "\u9875",
    "\u5DE1",
    "\u77E9",
    "\u60B2",
    "\u704C",
    "\u9F84",
    "\u4F26",
    "\u7968",
    "\u5BFB",
    "\u6842",
    "\u94FA",
    "\u5723",
    "\u6050",
    "\u6070",
    "\u90D1",
    "\u8DA3",
    "\u62AC",
    "\u8352",
    "\u817E",
    "\u8D34",
    "\u67D4",
    "\u6EF4",
    "\u731B",
    "\u9614",
    "\u8F86",
    "\u59BB",
    "\u586B",
    "\u64A4",
    "\u50A8",
    "\u7B7E",
    "\u95F9",
    "\u6270",
    "\u7D2B",
    "\u7802",
    "\u9012",
    "\u620F",
    "\u540A",
    "\u9676",
    "\u4F10",
    "\u5582",
    "\u7597",
    "\u74F6",
    "\u5A46",
    "\u629A",
    "\u81C2",
    "\u6478",
    "\u5FCD",
    "\u867E",
    "\u8721",
    "\u90BB",
    "\u80F8",
    "\u5DE9",
    "\u6324",
    "\u5076",
    "\u5F03",
    "\u69FD",
    "\u52B2",
    "\u4E73",
    "\u9093",
    "\u5409",
    "\u4EC1",
    "\u70C2",
    "\u7816",
    "\u79DF",
    "\u4E4C",
    "\u8230",
    "\u4F34",
    "\u74DC",
    "\u6D45",
    "\u4E19",
    "\u6682",
    "\u71E5",
    "\u6A61",
    "\u67F3",
    "\u8FF7",
    "\u6696",
    "\u724C",
    "\u79E7",
    "\u80C6",
    "\u8BE6",
    "\u7C27",
    "\u8E0F",
    "\u74F7",
    "\u8C31",
    "\u5446",
    "\u5BBE",
    "\u7CCA",
    "\u6D1B",
    "\u8F89",
    "\u6124",
    "\u7ADE",
    "\u9699",
    "\u6012",
    "\u7C98",
    "\u4E43",
    "\u7EEA",
    "\u80A9",
    "\u7C4D",
    "\u654F",
    "\u6D82",
    "\u7199",
    "\u7686",
    "\u4FA6",
    "\u60AC",
    "\u6398",
    "\u4EAB",
    "\u7EA0",
    "\u9192",
    "\u72C2",
    "\u9501",
    "\u6DC0",
    "\u6068",
    "\u7272",
    "\u9738",
    "\u722C",
    "\u8D4F",
    "\u9006",
    "\u73A9",
    "\u9675",
    "\u795D",
    "\u79D2",
    "\u6D59",
    "\u8C8C",
    "\u5F79",
    "\u5F7C",
    "\u6089",
    "\u9E2D",
    "\u8D8B",
    "\u51E4",
    "\u6668",
    "\u755C",
    "\u8F88",
    "\u79E9",
    "\u5375",
    "\u7F72",
    "\u68AF",
    "\u708E",
    "\u6EE9",
    "\u68CB",
    "\u9A71",
    "\u7B5B",
    "\u5CE1",
    "\u5192",
    "\u5565",
    "\u5BFF",
    "\u8BD1",
    "\u6D78",
    "\u6CC9",
    "\u5E3D",
    "\u8FDF",
    "\u7845",
    "\u7586",
    "\u8D37",
    "\u6F0F",
    "\u7A3F",
    "\u51A0",
    "\u5AE9",
    "\u80C1",
    "\u82AF",
    "\u7262",
    "\u53DB",
    "\u8680",
    "\u5965",
    "\u9E23",
    "\u5CAD",
    "\u7F8A",
    "\u51ED",
    "\u4E32",
    "\u5858",
    "\u7ED8",
    "\u9175",
    "\u878D",
    "\u76C6",
    "\u9521",
    "\u5E99",
    "\u7B79",
    "\u51BB",
    "\u8F85",
    "\u6444",
    "\u88AD",
    "\u7B4B",
    "\u62D2",
    "\u50DA",
    "\u65F1",
    "\u94BE",
    "\u9E1F",
    "\u6F06",
    "\u6C88",
    "\u7709",
    "\u758F",
    "\u6DFB",
    "\u68D2",
    "\u7A57",
    "\u785D",
    "\u97E9",
    "\u903C",
    "\u626D",
    "\u4FA8",
    "\u51C9",
    "\u633A",
    "\u7897",
    "\u683D",
    "\u7092",
    "\u676F",
    "\u60A3",
    "\u998F",
    "\u529D",
    "\u8C6A",
    "\u8FBD",
    "\u52C3",
    "\u9E3F",
    "\u65E6",
    "\u540F",
    "\u62DC",
    "\u72D7",
    "\u57CB",
    "\u8F8A",
    "\u63A9",
    "\u996E",
    "\u642C",
    "\u9A82",
    "\u8F9E",
    "\u52FE",
    "\u6263",
    "\u4F30",
    "\u848B",
    "\u7ED2",
    "\u96FE",
    "\u4E08",
    "\u6735",
    "\u59C6",
    "\u62DF",
    "\u5B87",
    "\u8F91",
    "\u9655",
    "\u96D5",
    "\u507F",
    "\u84C4",
    "\u5D07",
    "\u526A",
    "\u5021",
    "\u5385",
    "\u54AC",
    "\u9A76",
    "\u85AF",
    "\u5237",
    "\u65A5",
    "\u756A",
    "\u8D4B",
    "\u5949",
    "\u4F5B",
    "\u6D47",
    "\u6F2B",
    "\u66FC",
    "\u6247",
    "\u9499",
    "\u6843",
    "\u6276",
    "\u4ED4",
    "\u8FD4",
    "\u4FD7",
    "\u4E8F",
    "\u8154",
    "\u978B",
    "\u68F1",
    "\u8986",
    "\u6846",
    "\u6084",
    "\u53D4",
    "\u649E",
    "\u9A97",
    "\u52D8",
    "\u65FA",
    "\u6CB8",
    "\u5B64",
    "\u5410",
    "\u5B5F",
    "\u6E20",
    "\u5C48",
    "\u75BE",
    "\u5999",
    "\u60DC",
    "\u4EF0",
    "\u72E0",
    "\u80C0",
    "\u8C10",
    "\u629B",
    "\u9709",
    "\u6851",
    "\u5C97",
    "\u561B",
    "\u8870",
    "\u76D7",
    "\u6E17",
    "\u810F",
    "\u8D56",
    "\u6D8C",
    "\u751C",
    "\u66F9",
    "\u9605",
    "\u808C",
    "\u54E9",
    "\u5389",
    "\u70C3",
    "\u7EAC",
    "\u6BC5",
    "\u6628",
    "\u4F2A",
    "\u75C7",
    "\u716E",
    "\u53F9",
    "\u9489",
    "\u642D",
    "\u830E",
    "\u7B3C",
    "\u9177",
    "\u5077",
    "\u5F13",
    "\u9525",
    "\u6052",
    "\u6770",
    "\u5751",
    "\u9F3B",
    "\u7FFC",
    "\u7EB6",
    "\u53D9",
    "\u72F1",
    "\u902E",
    "\u7F50",
    "\u7EDC",
    "\u68DA",
    "\u6291",
    "\u81A8",
    "\u852C",
    "\u5BFA",
    "\u9AA4",
    "\u7A46",
    "\u51B6",
    "\u67AF",
    "\u518C",
    "\u5C38",
    "\u51F8",
    "\u7EC5",
    "\u576F",
    "\u727A",
    "\u7130",
    "\u8F70",
    "\u6B23",
    "\u664B",
    "\u7626",
    "\u5FA1",
    "\u952D",
    "\u9526",
    "\u4E27",
    "\u65EC",
    "\u953B",
    "\u5784",
    "\u641C",
    "\u6251",
    "\u9080",
    "\u4EAD",
    "\u916F",
    "\u8FC8",
    "\u8212",
    "\u8106",
    "\u9176",
    "\u95F2",
    "\u5FE7",
    "\u915A",
    "\u987D",
    "\u7FBD",
    "\u6DA8",
    "\u5378",
    "\u4ED7",
    "\u966A",
    "\u8F9F",
    "\u60E9",
    "\u676D",
    "\u59DA",
    "\u809A",
    "\u6349",
    "\u98D8",
    "\u6F02",
    "\u6606",
    "\u6B3A",
    "\u543E",
    "\u90CE",
    "\u70F7",
    "\u6C41",
    "\u5475",
    "\u9970",
    "\u8427",
    "\u96C5",
    "\u90AE",
    "\u8FC1",
    "\u71D5",
    "\u6492",
    "\u59FB",
    "\u8D74",
    "\u5BB4",
    "\u70E6",
    "\u503A",
    "\u5E10",
    "\u6591",
    "\u94C3",
    "\u65E8",
    "\u9187",
    "\u8463",
    "\u997C",
    "\u96CF",
    "\u59FF",
    "\u62CC",
    "\u5085",
    "\u8179",
    "\u59A5",
    "\u63C9",
    "\u8D24",
    "\u62C6",
    "\u6B6A",
    "\u8461",
    "\u80FA",
    "\u4E22",
    "\u6D69",
    "\u5FBD",
    "\u6602",
    "\u57AB",
    "\u6321",
    "\u89C8",
    "\u8D2A",
    "\u6170",
    "\u7F34",
    "\u6C6A",
    "\u614C",
    "\u51AF",
    "\u8BFA",
    "\u59DC",
    "\u8C0A",
    "\u51F6",
    "\u52A3",
    "\u8BEC",
    "\u8000",
    "\u660F",
    "\u8EBA",
    "\u76C8",
    "\u9A91",
    "\u4E54",
    "\u6EAA",
    "\u4E1B",
    "\u5362",
    "\u62B9",
    "\u95F7",
    "\u54A8",
    "\u522E",
    "\u9A7E",
    "\u7F06",
    "\u609F",
    "\u6458",
    "\u94D2",
    "\u63B7",
    "\u9887",
    "\u5E7B",
    "\u67C4",
    "\u60E0",
    "\u60E8",
    "\u4F73",
    "\u4EC7",
    "\u814A",
    "\u7A9D",
    "\u6DA4",
    "\u5251",
    "\u77A7",
    "\u5821",
    "\u6CFC",
    "\u8471",
    "\u7F69",
    "\u970D",
    "\u635E",
    "\u80CE",
    "\u82CD",
    "\u6EE8",
    "\u4FE9",
    "\u6345",
    "\u6E58",
    "\u780D",
    "\u971E",
    "\u90B5",
    "\u8404",
    "\u75AF",
    "\u6DEE",
    "\u9042",
    "\u718A",
    "\u7CAA",
    "\u70D8",
    "\u5BBF",
    "\u6863",
    "\u6208",
    "\u9A73",
    "\u5AC2",
    "\u88D5",
    "\u5F99",
    "\u7BAD",
    "\u6350",
    "\u80A0",
    "\u6491",
    "\u6652",
    "\u8FA8",
    "\u6BBF",
    "\u83B2",
    "\u644A",
    "\u6405",
    "\u9171",
    "\u5C4F",
    "\u75AB",
    "\u54C0",
    "\u8521",
    "\u5835",
    "\u6CAB",
    "\u76B1",
    "\u7545",
    "\u53E0",
    "\u9601",
    "\u83B1",
    "\u6572",
    "\u8F96",
    "\u94A9",
    "\u75D5",
    "\u575D",
    "\u5DF7",
    "\u997F",
    "\u7978",
    "\u4E18",
    "\u7384",
    "\u6E9C",
    "\u66F0",
    "\u903B",
    "\u5F6D",
    "\u5C1D",
    "\u537F",
    "\u59A8",
    "\u8247",
    "\u541E",
    "\u97E6",
    "\u6028",
    "\u77EE",
    "\u6B47"
  ], gp = [
    "\u7684",
    "\u4E00",
    "\u662F",
    "\u5728",
    "\u4E0D",
    "\u4E86",
    "\u6709",
    "\u548C",
    "\u4EBA",
    "\u9019",
    "\u4E2D",
    "\u5927",
    "\u70BA",
    "\u4E0A",
    "\u500B",
    "\u570B",
    "\u6211",
    "\u4EE5",
    "\u8981",
    "\u4ED6",
    "\u6642",
    "\u4F86",
    "\u7528",
    "\u5011",
    "\u751F",
    "\u5230",
    "\u4F5C",
    "\u5730",
    "\u65BC",
    "\u51FA",
    "\u5C31",
    "\u5206",
    "\u5C0D",
    "\u6210",
    "\u6703",
    "\u53EF",
    "\u4E3B",
    "\u767C",
    "\u5E74",
    "\u52D5",
    "\u540C",
    "\u5DE5",
    "\u4E5F",
    "\u80FD",
    "\u4E0B",
    "\u904E",
    "\u5B50",
    "\u8AAA",
    "\u7522",
    "\u7A2E",
    "\u9762",
    "\u800C",
    "\u65B9",
    "\u5F8C",
    "\u591A",
    "\u5B9A",
    "\u884C",
    "\u5B78",
    "\u6CD5",
    "\u6240",
    "\u6C11",
    "\u5F97",
    "\u7D93",
    "\u5341",
    "\u4E09",
    "\u4E4B",
    "\u9032",
    "\u8457",
    "\u7B49",
    "\u90E8",
    "\u5EA6",
    "\u5BB6",
    "\u96FB",
    "\u529B",
    "\u88E1",
    "\u5982",
    "\u6C34",
    "\u5316",
    "\u9AD8",
    "\u81EA",
    "\u4E8C",
    "\u7406",
    "\u8D77",
    "\u5C0F",
    "\u7269",
    "\u73FE",
    "\u5BE6",
    "\u52A0",
    "\u91CF",
    "\u90FD",
    "\u5169",
    "\u9AD4",
    "\u5236",
    "\u6A5F",
    "\u7576",
    "\u4F7F",
    "\u9EDE",
    "\u5F9E",
    "\u696D",
    "\u672C",
    "\u53BB",
    "\u628A",
    "\u6027",
    "\u597D",
    "\u61C9",
    "\u958B",
    "\u5B83",
    "\u5408",
    "\u9084",
    "\u56E0",
    "\u7531",
    "\u5176",
    "\u4E9B",
    "\u7136",
    "\u524D",
    "\u5916",
    "\u5929",
    "\u653F",
    "\u56DB",
    "\u65E5",
    "\u90A3",
    "\u793E",
    "\u7FA9",
    "\u4E8B",
    "\u5E73",
    "\u5F62",
    "\u76F8",
    "\u5168",
    "\u8868",
    "\u9593",
    "\u6A23",
    "\u8207",
    "\u95DC",
    "\u5404",
    "\u91CD",
    "\u65B0",
    "\u7DDA",
    "\u5167",
    "\u6578",
    "\u6B63",
    "\u5FC3",
    "\u53CD",
    "\u4F60",
    "\u660E",
    "\u770B",
    "\u539F",
    "\u53C8",
    "\u9EBC",
    "\u5229",
    "\u6BD4",
    "\u6216",
    "\u4F46",
    "\u8CEA",
    "\u6C23",
    "\u7B2C",
    "\u5411",
    "\u9053",
    "\u547D",
    "\u6B64",
    "\u8B8A",
    "\u689D",
    "\u53EA",
    "\u6C92",
    "\u7D50",
    "\u89E3",
    "\u554F",
    "\u610F",
    "\u5EFA",
    "\u6708",
    "\u516C",
    "\u7121",
    "\u7CFB",
    "\u8ECD",
    "\u5F88",
    "\u60C5",
    "\u8005",
    "\u6700",
    "\u7ACB",
    "\u4EE3",
    "\u60F3",
    "\u5DF2",
    "\u901A",
    "\u4E26",
    "\u63D0",
    "\u76F4",
    "\u984C",
    "\u9EE8",
    "\u7A0B",
    "\u5C55",
    "\u4E94",
    "\u679C",
    "\u6599",
    "\u8C61",
    "\u54E1",
    "\u9769",
    "\u4F4D",
    "\u5165",
    "\u5E38",
    "\u6587",
    "\u7E3D",
    "\u6B21",
    "\u54C1",
    "\u5F0F",
    "\u6D3B",
    "\u8A2D",
    "\u53CA",
    "\u7BA1",
    "\u7279",
    "\u4EF6",
    "\u9577",
    "\u6C42",
    "\u8001",
    "\u982D",
    "\u57FA",
    "\u8CC7",
    "\u908A",
    "\u6D41",
    "\u8DEF",
    "\u7D1A",
    "\u5C11",
    "\u5716",
    "\u5C71",
    "\u7D71",
    "\u63A5",
    "\u77E5",
    "\u8F03",
    "\u5C07",
    "\u7D44",
    "\u898B",
    "\u8A08",
    "\u5225",
    "\u5979",
    "\u624B",
    "\u89D2",
    "\u671F",
    "\u6839",
    "\u8AD6",
    "\u904B",
    "\u8FB2",
    "\u6307",
    "\u5E7E",
    "\u4E5D",
    "\u5340",
    "\u5F37",
    "\u653E",
    "\u6C7A",
    "\u897F",
    "\u88AB",
    "\u5E79",
    "\u505A",
    "\u5FC5",
    "\u6230",
    "\u5148",
    "\u56DE",
    "\u5247",
    "\u4EFB",
    "\u53D6",
    "\u64DA",
    "\u8655",
    "\u968A",
    "\u5357",
    "\u7D66",
    "\u8272",
    "\u5149",
    "\u9580",
    "\u5373",
    "\u4FDD",
    "\u6CBB",
    "\u5317",
    "\u9020",
    "\u767E",
    "\u898F",
    "\u71B1",
    "\u9818",
    "\u4E03",
    "\u6D77",
    "\u53E3",
    "\u6771",
    "\u5C0E",
    "\u5668",
    "\u58D3",
    "\u5FD7",
    "\u4E16",
    "\u91D1",
    "\u589E",
    "\u722D",
    "\u6FDF",
    "\u968E",
    "\u6CB9",
    "\u601D",
    "\u8853",
    "\u6975",
    "\u4EA4",
    "\u53D7",
    "\u806F",
    "\u4EC0",
    "\u8A8D",
    "\u516D",
    "\u5171",
    "\u6B0A",
    "\u6536",
    "\u8B49",
    "\u6539",
    "\u6E05",
    "\u7F8E",
    "\u518D",
    "\u63A1",
    "\u8F49",
    "\u66F4",
    "\u55AE",
    "\u98A8",
    "\u5207",
    "\u6253",
    "\u767D",
    "\u6559",
    "\u901F",
    "\u82B1",
    "\u5E36",
    "\u5B89",
    "\u5834",
    "\u8EAB",
    "\u8ECA",
    "\u4F8B",
    "\u771F",
    "\u52D9",
    "\u5177",
    "\u842C",
    "\u6BCF",
    "\u76EE",
    "\u81F3",
    "\u9054",
    "\u8D70",
    "\u7A4D",
    "\u793A",
    "\u8B70",
    "\u8072",
    "\u5831",
    "\u9B25",
    "\u5B8C",
    "\u985E",
    "\u516B",
    "\u96E2",
    "\u83EF",
    "\u540D",
    "\u78BA",
    "\u624D",
    "\u79D1",
    "\u5F35",
    "\u4FE1",
    "\u99AC",
    "\u7BC0",
    "\u8A71",
    "\u7C73",
    "\u6574",
    "\u7A7A",
    "\u5143",
    "\u6CC1",
    "\u4ECA",
    "\u96C6",
    "\u6EAB",
    "\u50B3",
    "\u571F",
    "\u8A31",
    "\u6B65",
    "\u7FA4",
    "\u5EE3",
    "\u77F3",
    "\u8A18",
    "\u9700",
    "\u6BB5",
    "\u7814",
    "\u754C",
    "\u62C9",
    "\u6797",
    "\u5F8B",
    "\u53EB",
    "\u4E14",
    "\u7A76",
    "\u89C0",
    "\u8D8A",
    "\u7E54",
    "\u88DD",
    "\u5F71",
    "\u7B97",
    "\u4F4E",
    "\u6301",
    "\u97F3",
    "\u773E",
    "\u66F8",
    "\u5E03",
    "\u590D",
    "\u5BB9",
    "\u5152",
    "\u9808",
    "\u969B",
    "\u5546",
    "\u975E",
    "\u9A57",
    "\u9023",
    "\u65B7",
    "\u6DF1",
    "\u96E3",
    "\u8FD1",
    "\u7926",
    "\u5343",
    "\u9031",
    "\u59D4",
    "\u7D20",
    "\u6280",
    "\u5099",
    "\u534A",
    "\u8FA6",
    "\u9752",
    "\u7701",
    "\u5217",
    "\u7FD2",
    "\u97FF",
    "\u7D04",
    "\u652F",
    "\u822C",
    "\u53F2",
    "\u611F",
    "\u52DE",
    "\u4FBF",
    "\u5718",
    "\u5F80",
    "\u9178",
    "\u6B77",
    "\u5E02",
    "\u514B",
    "\u4F55",
    "\u9664",
    "\u6D88",
    "\u69CB",
    "\u5E9C",
    "\u7A31",
    "\u592A",
    "\u6E96",
    "\u7CBE",
    "\u503C",
    "\u865F",
    "\u7387",
    "\u65CF",
    "\u7DAD",
    "\u5283",
    "\u9078",
    "\u6A19",
    "\u5BEB",
    "\u5B58",
    "\u5019",
    "\u6BDB",
    "\u89AA",
    "\u5FEB",
    "\u6548",
    "\u65AF",
    "\u9662",
    "\u67E5",
    "\u6C5F",
    "\u578B",
    "\u773C",
    "\u738B",
    "\u6309",
    "\u683C",
    "\u990A",
    "\u6613",
    "\u7F6E",
    "\u6D3E",
    "\u5C64",
    "\u7247",
    "\u59CB",
    "\u537B",
    "\u5C08",
    "\u72C0",
    "\u80B2",
    "\u5EE0",
    "\u4EAC",
    "\u8B58",
    "\u9069",
    "\u5C6C",
    "\u5713",
    "\u5305",
    "\u706B",
    "\u4F4F",
    "\u8ABF",
    "\u6EFF",
    "\u7E23",
    "\u5C40",
    "\u7167",
    "\u53C3",
    "\u7D05",
    "\u7D30",
    "\u5F15",
    "\u807D",
    "\u8A72",
    "\u9435",
    "\u50F9",
    "\u56B4",
    "\u9996",
    "\u5E95",
    "\u6DB2",
    "\u5B98",
    "\u5FB7",
    "\u96A8",
    "\u75C5",
    "\u8607",
    "\u5931",
    "\u723E",
    "\u6B7B",
    "\u8B1B",
    "\u914D",
    "\u5973",
    "\u9EC3",
    "\u63A8",
    "\u986F",
    "\u8AC7",
    "\u7F6A",
    "\u795E",
    "\u85DD",
    "\u5462",
    "\u5E2D",
    "\u542B",
    "\u4F01",
    "\u671B",
    "\u5BC6",
    "\u6279",
    "\u71DF",
    "\u9805",
    "\u9632",
    "\u8209",
    "\u7403",
    "\u82F1",
    "\u6C27",
    "\u52E2",
    "\u544A",
    "\u674E",
    "\u53F0",
    "\u843D",
    "\u6728",
    "\u5E6B",
    "\u8F2A",
    "\u7834",
    "\u4E9E",
    "\u5E2B",
    "\u570D",
    "\u6CE8",
    "\u9060",
    "\u5B57",
    "\u6750",
    "\u6392",
    "\u4F9B",
    "\u6CB3",
    "\u614B",
    "\u5C01",
    "\u53E6",
    "\u65BD",
    "\u6E1B",
    "\u6A39",
    "\u6EB6",
    "\u600E",
    "\u6B62",
    "\u6848",
    "\u8A00",
    "\u58EB",
    "\u5747",
    "\u6B66",
    "\u56FA",
    "\u8449",
    "\u9B5A",
    "\u6CE2",
    "\u8996",
    "\u50C5",
    "\u8CBB",
    "\u7DCA",
    "\u611B",
    "\u5DE6",
    "\u7AE0",
    "\u65E9",
    "\u671D",
    "\u5BB3",
    "\u7E8C",
    "\u8F15",
    "\u670D",
    "\u8A66",
    "\u98DF",
    "\u5145",
    "\u5175",
    "\u6E90",
    "\u5224",
    "\u8B77",
    "\u53F8",
    "\u8DB3",
    "\u67D0",
    "\u7DF4",
    "\u5DEE",
    "\u81F4",
    "\u677F",
    "\u7530",
    "\u964D",
    "\u9ED1",
    "\u72AF",
    "\u8CA0",
    "\u64CA",
    "\u8303",
    "\u7E7C",
    "\u8208",
    "\u4F3C",
    "\u9918",
    "\u5805",
    "\u66F2",
    "\u8F38",
    "\u4FEE",
    "\u6545",
    "\u57CE",
    "\u592B",
    "\u5920",
    "\u9001",
    "\u7B46",
    "\u8239",
    "\u4F54",
    "\u53F3",
    "\u8CA1",
    "\u5403",
    "\u5BCC",
    "\u6625",
    "\u8077",
    "\u89BA",
    "\u6F22",
    "\u756B",
    "\u529F",
    "\u5DF4",
    "\u8DDF",
    "\u96D6",
    "\u96DC",
    "\u98DB",
    "\u6AA2",
    "\u5438",
    "\u52A9",
    "\u6607",
    "\u967D",
    "\u4E92",
    "\u521D",
    "\u5275",
    "\u6297",
    "\u8003",
    "\u6295",
    "\u58DE",
    "\u7B56",
    "\u53E4",
    "\u5F91",
    "\u63DB",
    "\u672A",
    "\u8DD1",
    "\u7559",
    "\u92FC",
    "\u66FE",
    "\u7AEF",
    "\u8CAC",
    "\u7AD9",
    "\u7C21",
    "\u8FF0",
    "\u9322",
    "\u526F",
    "\u76E1",
    "\u5E1D",
    "\u5C04",
    "\u8349",
    "\u885D",
    "\u627F",
    "\u7368",
    "\u4EE4",
    "\u9650",
    "\u963F",
    "\u5BA3",
    "\u74B0",
    "\u96D9",
    "\u8ACB",
    "\u8D85",
    "\u5FAE",
    "\u8B93",
    "\u63A7",
    "\u5DDE",
    "\u826F",
    "\u8EF8",
    "\u627E",
    "\u5426",
    "\u7D00",
    "\u76CA",
    "\u4F9D",
    "\u512A",
    "\u9802",
    "\u790E",
    "\u8F09",
    "\u5012",
    "\u623F",
    "\u7A81",
    "\u5750",
    "\u7C89",
    "\u6575",
    "\u7565",
    "\u5BA2",
    "\u8881",
    "\u51B7",
    "\u52DD",
    "\u7D55",
    "\u6790",
    "\u584A",
    "\u5291",
    "\u6E2C",
    "\u7D72",
    "\u5354",
    "\u8A34",
    "\u5FF5",
    "\u9673",
    "\u4ECD",
    "\u7F85",
    "\u9E7D",
    "\u53CB",
    "\u6D0B",
    "\u932F",
    "\u82E6",
    "\u591C",
    "\u5211",
    "\u79FB",
    "\u983B",
    "\u9010",
    "\u9760",
    "\u6DF7",
    "\u6BCD",
    "\u77ED",
    "\u76AE",
    "\u7D42",
    "\u805A",
    "\u6C7D",
    "\u6751",
    "\u96F2",
    "\u54EA",
    "\u65E2",
    "\u8DDD",
    "\u885B",
    "\u505C",
    "\u70C8",
    "\u592E",
    "\u5BDF",
    "\u71D2",
    "\u8FC5",
    "\u5883",
    "\u82E5",
    "\u5370",
    "\u6D32",
    "\u523B",
    "\u62EC",
    "\u6FC0",
    "\u5B54",
    "\u641E",
    "\u751A",
    "\u5BA4",
    "\u5F85",
    "\u6838",
    "\u6821",
    "\u6563",
    "\u4FB5",
    "\u5427",
    "\u7532",
    "\u904A",
    "\u4E45",
    "\u83DC",
    "\u5473",
    "\u820A",
    "\u6A21",
    "\u6E56",
    "\u8CA8",
    "\u640D",
    "\u9810",
    "\u963B",
    "\u6BEB",
    "\u666E",
    "\u7A69",
    "\u4E59",
    "\u5ABD",
    "\u690D",
    "\u606F",
    "\u64F4",
    "\u9280",
    "\u8A9E",
    "\u63EE",
    "\u9152",
    "\u5B88",
    "\u62FF",
    "\u5E8F",
    "\u7D19",
    "\u91AB",
    "\u7F3A",
    "\u96E8",
    "\u55CE",
    "\u91DD",
    "\u5289",
    "\u554A",
    "\u6025",
    "\u5531",
    "\u8AA4",
    "\u8A13",
    "\u9858",
    "\u5BE9",
    "\u9644",
    "\u7372",
    "\u8336",
    "\u9BAE",
    "\u7CE7",
    "\u65A4",
    "\u5B69",
    "\u812B",
    "\u786B",
    "\u80A5",
    "\u5584",
    "\u9F8D",
    "\u6F14",
    "\u7236",
    "\u6F38",
    "\u8840",
    "\u6B61",
    "\u68B0",
    "\u638C",
    "\u6B4C",
    "\u6C99",
    "\u525B",
    "\u653B",
    "\u8B02",
    "\u76FE",
    "\u8A0E",
    "\u665A",
    "\u7C92",
    "\u4E82",
    "\u71C3",
    "\u77DB",
    "\u4E4E",
    "\u6BBA",
    "\u85E5",
    "\u5BE7",
    "\u9B6F",
    "\u8CB4",
    "\u9418",
    "\u7164",
    "\u8B80",
    "\u73ED",
    "\u4F2F",
    "\u9999",
    "\u4ECB",
    "\u8FEB",
    "\u53E5",
    "\u8C50",
    "\u57F9",
    "\u63E1",
    "\u862D",
    "\u64D4",
    "\u5F26",
    "\u86CB",
    "\u6C89",
    "\u5047",
    "\u7A7F",
    "\u57F7",
    "\u7B54",
    "\u6A02",
    "\u8AB0",
    "\u9806",
    "\u7159",
    "\u7E2E",
    "\u5FB5",
    "\u81C9",
    "\u559C",
    "\u677E",
    "\u8173",
    "\u56F0",
    "\u7570",
    "\u514D",
    "\u80CC",
    "\u661F",
    "\u798F",
    "\u8CB7",
    "\u67D3",
    "\u4E95",
    "\u6982",
    "\u6162",
    "\u6015",
    "\u78C1",
    "\u500D",
    "\u7956",
    "\u7687",
    "\u4FC3",
    "\u975C",
    "\u88DC",
    "\u8A55",
    "\u7FFB",
    "\u8089",
    "\u8E10",
    "\u5C3C",
    "\u8863",
    "\u5BEC",
    "\u63DA",
    "\u68C9",
    "\u5E0C",
    "\u50B7",
    "\u64CD",
    "\u5782",
    "\u79CB",
    "\u5B9C",
    "\u6C2B",
    "\u5957",
    "\u7763",
    "\u632F",
    "\u67B6",
    "\u4EAE",
    "\u672B",
    "\u61B2",
    "\u6176",
    "\u7DE8",
    "\u725B",
    "\u89F8",
    "\u6620",
    "\u96F7",
    "\u92B7",
    "\u8A69",
    "\u5EA7",
    "\u5C45",
    "\u6293",
    "\u88C2",
    "\u80DE",
    "\u547C",
    "\u5A18",
    "\u666F",
    "\u5A01",
    "\u7DA0",
    "\u6676",
    "\u539A",
    "\u76DF",
    "\u8861",
    "\u96DE",
    "\u5B6B",
    "\u5EF6",
    "\u5371",
    "\u81A0",
    "\u5C4B",
    "\u9109",
    "\u81E8",
    "\u9678",
    "\u9867",
    "\u6389",
    "\u5440",
    "\u71C8",
    "\u6B72",
    "\u63AA",
    "\u675F",
    "\u8010",
    "\u5287",
    "\u7389",
    "\u8D99",
    "\u8DF3",
    "\u54E5",
    "\u5B63",
    "\u8AB2",
    "\u51F1",
    "\u80E1",
    "\u984D",
    "\u6B3E",
    "\u7D39",
    "\u5377",
    "\u9F4A",
    "\u5049",
    "\u84B8",
    "\u6B96",
    "\u6C38",
    "\u5B97",
    "\u82D7",
    "\u5DDD",
    "\u7210",
    "\u5CA9",
    "\u5F31",
    "\u96F6",
    "\u694A",
    "\u594F",
    "\u6CBF",
    "\u9732",
    "\u687F",
    "\u63A2",
    "\u6ED1",
    "\u93AE",
    "\u98EF",
    "\u6FC3",
    "\u822A",
    "\u61F7",
    "\u8D95",
    "\u5EAB",
    "\u596A",
    "\u4F0A",
    "\u9748",
    "\u7A05",
    "\u9014",
    "\u6EC5",
    "\u8CFD",
    "\u6B78",
    "\u53EC",
    "\u9F13",
    "\u64AD",
    "\u76E4",
    "\u88C1",
    "\u96AA",
    "\u5EB7",
    "\u552F",
    "\u9304",
    "\u83CC",
    "\u7D14",
    "\u501F",
    "\u7CD6",
    "\u84CB",
    "\u6A6B",
    "\u7B26",
    "\u79C1",
    "\u52AA",
    "\u5802",
    "\u57DF",
    "\u69CD",
    "\u6F64",
    "\u5E45",
    "\u54C8",
    "\u7ADF",
    "\u719F",
    "\u87F2",
    "\u6FA4",
    "\u8166",
    "\u58E4",
    "\u78B3",
    "\u6B50",
    "\u904D",
    "\u5074",
    "\u5BE8",
    "\u6562",
    "\u5FB9",
    "\u616E",
    "\u659C",
    "\u8584",
    "\u5EAD",
    "\u7D0D",
    "\u5F48",
    "\u98FC",
    "\u4F38",
    "\u6298",
    "\u9EA5",
    "\u6FD5",
    "\u6697",
    "\u8377",
    "\u74E6",
    "\u585E",
    "\u5E8A",
    "\u7BC9",
    "\u60E1",
    "\u6236",
    "\u8A2A",
    "\u5854",
    "\u5947",
    "\u900F",
    "\u6881",
    "\u5200",
    "\u65CB",
    "\u8DE1",
    "\u5361",
    "\u6C2F",
    "\u9047",
    "\u4EFD",
    "\u6BD2",
    "\u6CE5",
    "\u9000",
    "\u6D17",
    "\u64FA",
    "\u7070",
    "\u5F69",
    "\u8CE3",
    "\u8017",
    "\u590F",
    "\u64C7",
    "\u5FD9",
    "\u9285",
    "\u737B",
    "\u786C",
    "\u4E88",
    "\u7E41",
    "\u5708",
    "\u96EA",
    "\u51FD",
    "\u4EA6",
    "\u62BD",
    "\u7BC7",
    "\u9663",
    "\u9670",
    "\u4E01",
    "\u5C3A",
    "\u8FFD",
    "\u5806",
    "\u96C4",
    "\u8FCE",
    "\u6CDB",
    "\u7238",
    "\u6A13",
    "\u907F",
    "\u8B00",
    "\u5678",
    "\u91CE",
    "\u8C6C",
    "\u65D7",
    "\u7D2F",
    "\u504F",
    "\u5178",
    "\u9928",
    "\u7D22",
    "\u79E6",
    "\u8102",
    "\u6F6E",
    "\u723A",
    "\u8C46",
    "\u5FFD",
    "\u6258",
    "\u9A5A",
    "\u5851",
    "\u907A",
    "\u6108",
    "\u6731",
    "\u66FF",
    "\u7E96",
    "\u7C97",
    "\u50BE",
    "\u5C1A",
    "\u75DB",
    "\u695A",
    "\u8B1D",
    "\u596E",
    "\u8CFC",
    "\u78E8",
    "\u541B",
    "\u6C60",
    "\u65C1",
    "\u788E",
    "\u9AA8",
    "\u76E3",
    "\u6355",
    "\u5F1F",
    "\u66B4",
    "\u5272",
    "\u8CAB",
    "\u6B8A",
    "\u91CB",
    "\u8A5E",
    "\u4EA1",
    "\u58C1",
    "\u9813",
    "\u5BF6",
    "\u5348",
    "\u5875",
    "\u805E",
    "\u63ED",
    "\u70AE",
    "\u6B98",
    "\u51AC",
    "\u6A4B",
    "\u5A66",
    "\u8B66",
    "\u7D9C",
    "\u62DB",
    "\u5433",
    "\u4ED8",
    "\u6D6E",
    "\u906D",
    "\u5F90",
    "\u60A8",
    "\u6416",
    "\u8C37",
    "\u8D0A",
    "\u7BB1",
    "\u9694",
    "\u8A02",
    "\u7537",
    "\u5439",
    "\u5712",
    "\u7D1B",
    "\u5510",
    "\u6557",
    "\u5B8B",
    "\u73BB",
    "\u5DE8",
    "\u8015",
    "\u5766",
    "\u69AE",
    "\u9589",
    "\u7063",
    "\u9375",
    "\u51E1",
    "\u99D0",
    "\u934B",
    "\u6551",
    "\u6069",
    "\u525D",
    "\u51DD",
    "\u9E7C",
    "\u9F52",
    "\u622A",
    "\u7149",
    "\u9EBB",
    "\u7D21",
    "\u7981",
    "\u5EE2",
    "\u76DB",
    "\u7248",
    "\u7DE9",
    "\u6DE8",
    "\u775B",
    "\u660C",
    "\u5A5A",
    "\u6D89",
    "\u7B52",
    "\u5634",
    "\u63D2",
    "\u5CB8",
    "\u6717",
    "\u838A",
    "\u8857",
    "\u85CF",
    "\u59D1",
    "\u8CBF",
    "\u8150",
    "\u5974",
    "\u5566",
    "\u6163",
    "\u4E58",
    "\u5925",
    "\u6062",
    "\u52FB",
    "\u7D17",
    "\u624E",
    "\u8FAF",
    "\u8033",
    "\u5F6A",
    "\u81E3",
    "\u5104",
    "\u7483",
    "\u62B5",
    "\u8108",
    "\u79C0",
    "\u85A9",
    "\u4FC4",
    "\u7DB2",
    "\u821E",
    "\u5E97",
    "\u5674",
    "\u7E31",
    "\u5BF8",
    "\u6C57",
    "\u639B",
    "\u6D2A",
    "\u8CC0",
    "\u9583",
    "\u67EC",
    "\u7206",
    "\u70EF",
    "\u6D25",
    "\u7A3B",
    "\u7246",
    "\u8EDF",
    "\u52C7",
    "\u50CF",
    "\u6EFE",
    "\u5398",
    "\u8499",
    "\u82B3",
    "\u80AF",
    "\u5761",
    "\u67F1",
    "\u76EA",
    "\u817F",
    "\u5100",
    "\u65C5",
    "\u5C3E",
    "\u8ECB",
    "\u51B0",
    "\u8CA2",
    "\u767B",
    "\u9ECE",
    "\u524A",
    "\u947D",
    "\u52D2",
    "\u9003",
    "\u969C",
    "\u6C28",
    "\u90ED",
    "\u5CF0",
    "\u5E63",
    "\u6E2F",
    "\u4F0F",
    "\u8ECC",
    "\u755D",
    "\u7562",
    "\u64E6",
    "\u83AB",
    "\u523A",
    "\u6D6A",
    "\u79D8",
    "\u63F4",
    "\u682A",
    "\u5065",
    "\u552E",
    "\u80A1",
    "\u5CF6",
    "\u7518",
    "\u6CE1",
    "\u7761",
    "\u7AE5",
    "\u9444",
    "\u6E6F",
    "\u95A5",
    "\u4F11",
    "\u532F",
    "\u820D",
    "\u7267",
    "\u7E5E",
    "\u70B8",
    "\u54F2",
    "\u78F7",
    "\u7E3E",
    "\u670B",
    "\u6DE1",
    "\u5C16",
    "\u555F",
    "\u9677",
    "\u67F4",
    "\u5448",
    "\u5F92",
    "\u984F",
    "\u6DDA",
    "\u7A0D",
    "\u5FD8",
    "\u6CF5",
    "\u85CD",
    "\u62D6",
    "\u6D1E",
    "\u6388",
    "\u93E1",
    "\u8F9B",
    "\u58EF",
    "\u92D2",
    "\u8CA7",
    "\u865B",
    "\u5F4E",
    "\u6469",
    "\u6CF0",
    "\u5E7C",
    "\u5EF7",
    "\u5C0A",
    "\u7A97",
    "\u7DB1",
    "\u5F04",
    "\u96B8",
    "\u7591",
    "\u6C0F",
    "\u5BAE",
    "\u59D0",
    "\u9707",
    "\u745E",
    "\u602A",
    "\u5C24",
    "\u7434",
    "\u5FAA",
    "\u63CF",
    "\u819C",
    "\u9055",
    "\u593E",
    "\u8170",
    "\u7DE3",
    "\u73E0",
    "\u7AAE",
    "\u68EE",
    "\u679D",
    "\u7AF9",
    "\u6E9D",
    "\u50AC",
    "\u7E69",
    "\u61B6",
    "\u90A6",
    "\u5269",
    "\u5E78",
    "\u6F3F",
    "\u6B04",
    "\u64C1",
    "\u7259",
    "\u8CAF",
    "\u79AE",
    "\u6FFE",
    "\u9209",
    "\u7D0B",
    "\u7F77",
    "\u62CD",
    "\u54B1",
    "\u558A",
    "\u8896",
    "\u57C3",
    "\u52E4",
    "\u7F70",
    "\u7126",
    "\u6F5B",
    "\u4F0D",
    "\u58A8",
    "\u6B32",
    "\u7E2B",
    "\u59D3",
    "\u520A",
    "\u98FD",
    "\u4EFF",
    "\u734E",
    "\u92C1",
    "\u9B3C",
    "\u9E97",
    "\u8DE8",
    "\u9ED8",
    "\u6316",
    "\u93C8",
    "\u6383",
    "\u559D",
    "\u888B",
    "\u70AD",
    "\u6C61",
    "\u5E55",
    "\u8AF8",
    "\u5F27",
    "\u52F5",
    "\u6885",
    "\u5976",
    "\u6F54",
    "\u707D",
    "\u821F",
    "\u9451",
    "\u82EF",
    "\u8A1F",
    "\u62B1",
    "\u6BC0",
    "\u61C2",
    "\u5BD2",
    "\u667A",
    "\u57D4",
    "\u5BC4",
    "\u5C46",
    "\u8E8D",
    "\u6E21",
    "\u6311",
    "\u4E39",
    "\u8271",
    "\u8C9D",
    "\u78B0",
    "\u62D4",
    "\u7239",
    "\u6234",
    "\u78BC",
    "\u5922",
    "\u82BD",
    "\u7194",
    "\u8D64",
    "\u6F01",
    "\u54ED",
    "\u656C",
    "\u9846",
    "\u5954",
    "\u925B",
    "\u4EF2",
    "\u864E",
    "\u7A00",
    "\u59B9",
    "\u4E4F",
    "\u73CD",
    "\u7533",
    "\u684C",
    "\u9075",
    "\u5141",
    "\u9686",
    "\u87BA",
    "\u5009",
    "\u9B4F",
    "\u92B3",
    "\u66C9",
    "\u6C2E",
    "\u517C",
    "\u96B1",
    "\u7919",
    "\u8D6B",
    "\u64A5",
    "\u5FE0",
    "\u8085",
    "\u7F38",
    "\u727D",
    "\u6436",
    "\u535A",
    "\u5DE7",
    "\u6BBC",
    "\u5144",
    "\u675C",
    "\u8A0A",
    "\u8AA0",
    "\u78A7",
    "\u7965",
    "\u67EF",
    "\u9801",
    "\u5DE1",
    "\u77E9",
    "\u60B2",
    "\u704C",
    "\u9F61",
    "\u502B",
    "\u7968",
    "\u5C0B",
    "\u6842",
    "\u92EA",
    "\u8056",
    "\u6050",
    "\u6070",
    "\u912D",
    "\u8DA3",
    "\u62AC",
    "\u8352",
    "\u9A30",
    "\u8CBC",
    "\u67D4",
    "\u6EF4",
    "\u731B",
    "\u95CA",
    "\u8F1B",
    "\u59BB",
    "\u586B",
    "\u64A4",
    "\u5132",
    "\u7C3D",
    "\u9B27",
    "\u64FE",
    "\u7D2B",
    "\u7802",
    "\u905E",
    "\u6232",
    "\u540A",
    "\u9676",
    "\u4F10",
    "\u9935",
    "\u7642",
    "\u74F6",
    "\u5A46",
    "\u64AB",
    "\u81C2",
    "\u6478",
    "\u5FCD",
    "\u8766",
    "\u881F",
    "\u9130",
    "\u80F8",
    "\u978F",
    "\u64E0",
    "\u5076",
    "\u68C4",
    "\u69FD",
    "\u52C1",
    "\u4E73",
    "\u9127",
    "\u5409",
    "\u4EC1",
    "\u721B",
    "\u78DA",
    "\u79DF",
    "\u70CF",
    "\u8266",
    "\u4F34",
    "\u74DC",
    "\u6DFA",
    "\u4E19",
    "\u66AB",
    "\u71E5",
    "\u6A61",
    "\u67F3",
    "\u8FF7",
    "\u6696",
    "\u724C",
    "\u79E7",
    "\u81BD",
    "\u8A73",
    "\u7C27",
    "\u8E0F",
    "\u74F7",
    "\u8B5C",
    "\u5446",
    "\u8CD3",
    "\u7CCA",
    "\u6D1B",
    "\u8F1D",
    "\u61A4",
    "\u7AF6",
    "\u9699",
    "\u6012",
    "\u7C98",
    "\u4E43",
    "\u7DD2",
    "\u80A9",
    "\u7C4D",
    "\u654F",
    "\u5857",
    "\u7199",
    "\u7686",
    "\u5075",
    "\u61F8",
    "\u6398",
    "\u4EAB",
    "\u7CFE",
    "\u9192",
    "\u72C2",
    "\u9396",
    "\u6DC0",
    "\u6068",
    "\u7272",
    "\u9738",
    "\u722C",
    "\u8CDE",
    "\u9006",
    "\u73A9",
    "\u9675",
    "\u795D",
    "\u79D2",
    "\u6D59",
    "\u8C8C",
    "\u5F79",
    "\u5F7C",
    "\u6089",
    "\u9D28",
    "\u8DA8",
    "\u9CF3",
    "\u6668",
    "\u755C",
    "\u8F29",
    "\u79E9",
    "\u5375",
    "\u7F72",
    "\u68AF",
    "\u708E",
    "\u7058",
    "\u68CB",
    "\u9A45",
    "\u7BE9",
    "\u5CFD",
    "\u5192",
    "\u5565",
    "\u58FD",
    "\u8B6F",
    "\u6D78",
    "\u6CC9",
    "\u5E3D",
    "\u9072",
    "\u77FD",
    "\u7586",
    "\u8CB8",
    "\u6F0F",
    "\u7A3F",
    "\u51A0",
    "\u5AE9",
    "\u8105",
    "\u82AF",
    "\u7262",
    "\u53DB",
    "\u8755",
    "\u5967",
    "\u9CF4",
    "\u5DBA",
    "\u7F8A",
    "\u6191",
    "\u4E32",
    "\u5858",
    "\u7E6A",
    "\u9175",
    "\u878D",
    "\u76C6",
    "\u932B",
    "\u5EDF",
    "\u7C4C",
    "\u51CD",
    "\u8F14",
    "\u651D",
    "\u8972",
    "\u7B4B",
    "\u62D2",
    "\u50DA",
    "\u65F1",
    "\u9240",
    "\u9CE5",
    "\u6F06",
    "\u6C88",
    "\u7709",
    "\u758F",
    "\u6DFB",
    "\u68D2",
    "\u7A57",
    "\u785D",
    "\u97D3",
    "\u903C",
    "\u626D",
    "\u50D1",
    "\u6DBC",
    "\u633A",
    "\u7897",
    "\u683D",
    "\u7092",
    "\u676F",
    "\u60A3",
    "\u993E",
    "\u52F8",
    "\u8C6A",
    "\u907C",
    "\u52C3",
    "\u9D3B",
    "\u65E6",
    "\u540F",
    "\u62DC",
    "\u72D7",
    "\u57CB",
    "\u8F25",
    "\u63A9",
    "\u98F2",
    "\u642C",
    "\u7F75",
    "\u8FAD",
    "\u52FE",
    "\u6263",
    "\u4F30",
    "\u8523",
    "\u7D68",
    "\u9727",
    "\u4E08",
    "\u6735",
    "\u59C6",
    "\u64EC",
    "\u5B87",
    "\u8F2F",
    "\u965D",
    "\u96D5",
    "\u511F",
    "\u84C4",
    "\u5D07",
    "\u526A",
    "\u5021",
    "\u5EF3",
    "\u54AC",
    "\u99DB",
    "\u85AF",
    "\u5237",
    "\u65A5",
    "\u756A",
    "\u8CE6",
    "\u5949",
    "\u4F5B",
    "\u6F86",
    "\u6F2B",
    "\u66FC",
    "\u6247",
    "\u9223",
    "\u6843",
    "\u6276",
    "\u4ED4",
    "\u8FD4",
    "\u4FD7",
    "\u8667",
    "\u8154",
    "\u978B",
    "\u68F1",
    "\u8986",
    "\u6846",
    "\u6084",
    "\u53D4",
    "\u649E",
    "\u9A19",
    "\u52D8",
    "\u65FA",
    "\u6CB8",
    "\u5B64",
    "\u5410",
    "\u5B5F",
    "\u6E20",
    "\u5C48",
    "\u75BE",
    "\u5999",
    "\u60DC",
    "\u4EF0",
    "\u72E0",
    "\u8139",
    "\u8AE7",
    "\u62CB",
    "\u9EF4",
    "\u6851",
    "\u5D17",
    "\u561B",
    "\u8870",
    "\u76DC",
    "\u6EF2",
    "\u81DF",
    "\u8CF4",
    "\u6E67",
    "\u751C",
    "\u66F9",
    "\u95B1",
    "\u808C",
    "\u54E9",
    "\u53B2",
    "\u70F4",
    "\u7DEF",
    "\u6BC5",
    "\u6628",
    "\u507D",
    "\u75C7",
    "\u716E",
    "\u5606",
    "\u91D8",
    "\u642D",
    "\u8396",
    "\u7C60",
    "\u9177",
    "\u5077",
    "\u5F13",
    "\u9310",
    "\u6046",
    "\u5091",
    "\u5751",
    "\u9F3B",
    "\u7FFC",
    "\u7DB8",
    "\u6558",
    "\u7344",
    "\u902E",
    "\u7F50",
    "\u7D61",
    "\u68DA",
    "\u6291",
    "\u81A8",
    "\u852C",
    "\u5BFA",
    "\u9A5F",
    "\u7A46",
    "\u51B6",
    "\u67AF",
    "\u518A",
    "\u5C4D",
    "\u51F8",
    "\u7D33",
    "\u576F",
    "\u72A7",
    "\u7130",
    "\u8F5F",
    "\u6B23",
    "\u6649",
    "\u7626",
    "\u79A6",
    "\u9320",
    "\u9326",
    "\u55AA",
    "\u65EC",
    "\u935B",
    "\u58DF",
    "\u641C",
    "\u64B2",
    "\u9080",
    "\u4EAD",
    "\u916F",
    "\u9081",
    "\u8212",
    "\u8106",
    "\u9176",
    "\u9592",
    "\u6182",
    "\u915A",
    "\u9811",
    "\u7FBD",
    "\u6F32",
    "\u5378",
    "\u4ED7",
    "\u966A",
    "\u95E2",
    "\u61F2",
    "\u676D",
    "\u59DA",
    "\u809A",
    "\u6349",
    "\u98C4",
    "\u6F02",
    "\u6606",
    "\u6B3A",
    "\u543E",
    "\u90CE",
    "\u70F7",
    "\u6C41",
    "\u5475",
    "\u98FE",
    "\u856D",
    "\u96C5",
    "\u90F5",
    "\u9077",
    "\u71D5",
    "\u6492",
    "\u59FB",
    "\u8D74",
    "\u5BB4",
    "\u7169",
    "\u50B5",
    "\u5E33",
    "\u6591",
    "\u9234",
    "\u65E8",
    "\u9187",
    "\u8463",
    "\u9905",
    "\u96DB",
    "\u59FF",
    "\u62CC",
    "\u5085",
    "\u8179",
    "\u59A5",
    "\u63C9",
    "\u8CE2",
    "\u62C6",
    "\u6B6A",
    "\u8461",
    "\u80FA",
    "\u4E1F",
    "\u6D69",
    "\u5FBD",
    "\u6602",
    "\u588A",
    "\u64CB",
    "\u89BD",
    "\u8CAA",
    "\u6170",
    "\u7E73",
    "\u6C6A",
    "\u614C",
    "\u99AE",
    "\u8AFE",
    "\u59DC",
    "\u8ABC",
    "\u5147",
    "\u52A3",
    "\u8AA3",
    "\u8000",
    "\u660F",
    "\u8EBA",
    "\u76C8",
    "\u9A0E",
    "\u55AC",
    "\u6EAA",
    "\u53E2",
    "\u76E7",
    "\u62B9",
    "\u60B6",
    "\u8AEE",
    "\u522E",
    "\u99D5",
    "\u7E9C",
    "\u609F",
    "\u6458",
    "\u927A",
    "\u64F2",
    "\u9817",
    "\u5E7B",
    "\u67C4",
    "\u60E0",
    "\u6158",
    "\u4F73",
    "\u4EC7",
    "\u81D8",
    "\u7AA9",
    "\u6ECC",
    "\u528D",
    "\u77A7",
    "\u5821",
    "\u6F51",
    "\u8525",
    "\u7F69",
    "\u970D",
    "\u6488",
    "\u80CE",
    "\u84BC",
    "\u6FF1",
    "\u5006",
    "\u6345",
    "\u6E58",
    "\u780D",
    "\u971E",
    "\u90B5",
    "\u8404",
    "\u760B",
    "\u6DEE",
    "\u9042",
    "\u718A",
    "\u7CDE",
    "\u70D8",
    "\u5BBF",
    "\u6A94",
    "\u6208",
    "\u99C1",
    "\u5AC2",
    "\u88D5",
    "\u5F99",
    "\u7BAD",
    "\u6350",
    "\u8178",
    "\u6490",
    "\u66EC",
    "\u8FA8",
    "\u6BBF",
    "\u84EE",
    "\u6524",
    "\u652A",
    "\u91AC",
    "\u5C4F",
    "\u75AB",
    "\u54C0",
    "\u8521",
    "\u5835",
    "\u6CAB",
    "\u76BA",
    "\u66A2",
    "\u758A",
    "\u95A3",
    "\u840A",
    "\u6572",
    "\u8F44",
    "\u9264",
    "\u75D5",
    "\u58E9",
    "\u5DF7",
    "\u9913",
    "\u798D",
    "\u4E18",
    "\u7384",
    "\u6E9C",
    "\u66F0",
    "\u908F",
    "\u5F6D",
    "\u5617",
    "\u537F",
    "\u59A8",
    "\u8247",
    "\u541E",
    "\u97CB",
    "\u6028",
    "\u77EE",
    "\u6B47"
  ], mp = [
    "\u1100\u1161\u1100\u1167\u11A8",
    "\u1100\u1161\u1101\u1173\u11B7",
    "\u1100\u1161\u1102\u1161\u11AB",
    "\u1100\u1161\u1102\u1173\u11BC",
    "\u1100\u1161\u1103\u1173\u11A8",
    "\u1100\u1161\u1105\u1173\u110E\u1175\u11B7",
    "\u1100\u1161\u1106\u116E\u11B7",
    "\u1100\u1161\u1107\u1161\u11BC",
    "\u1100\u1161\u1109\u1161\u11BC",
    "\u1100\u1161\u1109\u1173\u11B7",
    "\u1100\u1161\u110B\u116E\u11AB\u1103\u1166",
    "\u1100\u1161\u110B\u1173\u11AF",
    "\u1100\u1161\u110B\u1175\u1103\u1173",
    "\u1100\u1161\u110B\u1175\u11B8",
    "\u1100\u1161\u110C\u1161\u11BC",
    "\u1100\u1161\u110C\u1165\u11BC",
    "\u1100\u1161\u110C\u1169\u11A8",
    "\u1100\u1161\u110C\u116E\u11A8",
    "\u1100\u1161\u11A8\u110B\u1169",
    "\u1100\u1161\u11A8\u110C\u1161",
    "\u1100\u1161\u11AB\u1100\u1167\u11A8",
    "\u1100\u1161\u11AB\u1107\u116E",
    "\u1100\u1161\u11AB\u1109\u1165\u11B8",
    "\u1100\u1161\u11AB\u110C\u1161\u11BC",
    "\u1100\u1161\u11AB\u110C\u1165\u11B8",
    "\u1100\u1161\u11AB\u1111\u1161\u11AB",
    "\u1100\u1161\u11AF\u1103\u1173\u11BC",
    "\u1100\u1161\u11AF\u1107\u1175",
    "\u1100\u1161\u11AF\u1109\u1162\u11A8",
    "\u1100\u1161\u11AF\u110C\u1173\u11BC",
    "\u1100\u1161\u11B7\u1100\u1161\u11A8",
    "\u1100\u1161\u11B7\u1100\u1175",
    "\u1100\u1161\u11B7\u1109\u1169",
    "\u1100\u1161\u11B7\u1109\u116E\u1109\u1165\u11BC",
    "\u1100\u1161\u11B7\u110C\u1161",
    "\u1100\u1161\u11B7\u110C\u1165\u11BC",
    "\u1100\u1161\u11B8\u110C\u1161\u1100\u1175",
    "\u1100\u1161\u11BC\u1102\u1161\u11B7",
    "\u1100\u1161\u11BC\u1103\u1161\u11BC",
    "\u1100\u1161\u11BC\u1103\u1169",
    "\u1100\u1161\u11BC\u1105\u1167\u11A8\u1112\u1175",
    "\u1100\u1161\u11BC\u1107\u1167\u11AB",
    "\u1100\u1161\u11BC\u1107\u116E\u11A8",
    "\u1100\u1161\u11BC\u1109\u1161",
    "\u1100\u1161\u11BC\u1109\u116E\u1105\u1163\u11BC",
    "\u1100\u1161\u11BC\u110B\u1161\u110C\u1175",
    "\u1100\u1161\u11BC\u110B\u116F\u11AB\u1103\u1169",
    "\u1100\u1161\u11BC\u110B\u1174",
    "\u1100\u1161\u11BC\u110C\u1166",
    "\u1100\u1161\u11BC\u110C\u1169",
    "\u1100\u1161\u11C0\u110B\u1175",
    "\u1100\u1162\u1100\u116E\u1105\u1175",
    "\u1100\u1162\u1102\u1161\u1105\u1175",
    "\u1100\u1162\u1107\u1161\u11BC",
    "\u1100\u1162\u1107\u1167\u11AF",
    "\u1100\u1162\u1109\u1165\u11AB",
    "\u1100\u1162\u1109\u1165\u11BC",
    "\u1100\u1162\u110B\u1175\u11AB",
    "\u1100\u1162\u11A8\u1100\u116A\u11AB\u110C\u1165\u11A8",
    "\u1100\u1165\u1109\u1175\u11AF",
    "\u1100\u1165\u110B\u1162\u11A8",
    "\u1100\u1165\u110B\u116E\u11AF",
    "\u1100\u1165\u110C\u1175\u11BA",
    "\u1100\u1165\u1111\u116E\u11B7",
    "\u1100\u1165\u11A8\u110C\u1165\u11BC",
    "\u1100\u1165\u11AB\u1100\u1161\u11BC",
    "\u1100\u1165\u11AB\u1106\u116E\u11AF",
    "\u1100\u1165\u11AB\u1109\u1165\u11AF",
    "\u1100\u1165\u11AB\u110C\u1169",
    "\u1100\u1165\u11AB\u110E\u116E\u11A8",
    "\u1100\u1165\u11AF\u110B\u1173\u11B7",
    "\u1100\u1165\u11B7\u1109\u1161",
    "\u1100\u1165\u11B7\u1110\u1169",
    "\u1100\u1166\u1109\u1175\u1111\u1161\u11AB",
    "\u1100\u1166\u110B\u1175\u11B7",
    "\u1100\u1167\u110B\u116E\u11AF",
    "\u1100\u1167\u11AB\u1112\u1162",
    "\u1100\u1167\u11AF\u1100\u116A",
    "\u1100\u1167\u11AF\u1100\u116E\u11A8",
    "\u1100\u1167\u11AF\u1105\u1169\u11AB",
    "\u1100\u1167\u11AF\u1109\u1165\u11A8",
    "\u1100\u1167\u11AF\u1109\u1173\u11BC",
    "\u1100\u1167\u11AF\u1109\u1175\u11B7",
    "\u1100\u1167\u11AF\u110C\u1165\u11BC",
    "\u1100\u1167\u11AF\u1112\u1169\u11AB",
    "\u1100\u1167\u11BC\u1100\u1168",
    "\u1100\u1167\u11BC\u1100\u1169",
    "\u1100\u1167\u11BC\u1100\u1175",
    "\u1100\u1167\u11BC\u1105\u1167\u11A8",
    "\u1100\u1167\u11BC\u1107\u1169\u11A8\u1100\u116E\u11BC",
    "\u1100\u1167\u11BC\u1107\u1175",
    "\u1100\u1167\u11BC\u1109\u1161\u11BC\u1103\u1169",
    "\u1100\u1167\u11BC\u110B\u1167\u11BC",
    "\u1100\u1167\u11BC\u110B\u116E",
    "\u1100\u1167\u11BC\u110C\u1162\u11BC",
    "\u1100\u1167\u11BC\u110C\u1166",
    "\u1100\u1167\u11BC\u110C\u116E",
    "\u1100\u1167\u11BC\u110E\u1161\u11AF",
    "\u1100\u1167\u11BC\u110E\u1175",
    "\u1100\u1167\u11BC\u1112\u1163\u11BC",
    "\u1100\u1167\u11BC\u1112\u1165\u11B7",
    "\u1100\u1168\u1100\u1169\u11A8",
    "\u1100\u1168\u1103\u1161\u11AB",
    "\u1100\u1168\u1105\u1161\u11AB",
    "\u1100\u1168\u1109\u1161\u11AB",
    "\u1100\u1168\u1109\u1169\u11A8",
    "\u1100\u1168\u110B\u1163\u11A8",
    "\u1100\u1168\u110C\u1165\u11AF",
    "\u1100\u1168\u110E\u1173\u11BC",
    "\u1100\u1168\u1112\u116C\u11A8",
    "\u1100\u1169\u1100\u1162\u11A8",
    "\u1100\u1169\u1100\u116E\u1105\u1167",
    "\u1100\u1169\u1100\u116E\u11BC",
    "\u1100\u1169\u1100\u1173\u11B8",
    "\u1100\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC",
    "\u1100\u1169\u1106\u116E\u1109\u1175\u11AB",
    "\u1100\u1169\u1106\u1175\u11AB",
    "\u1100\u1169\u110B\u1163\u11BC\u110B\u1175",
    "\u1100\u1169\u110C\u1161\u11BC",
    "\u1100\u1169\u110C\u1165\u11AB",
    "\u1100\u1169\u110C\u1175\u11B8",
    "\u1100\u1169\u110E\u116E\u11BA\u1100\u1161\u1105\u116E",
    "\u1100\u1169\u1110\u1169\u11BC",
    "\u1100\u1169\u1112\u1163\u11BC",
    "\u1100\u1169\u11A8\u1109\u1175\u11A8",
    "\u1100\u1169\u11AF\u1106\u1169\u11A8",
    "\u1100\u1169\u11AF\u110D\u1161\u1100\u1175",
    "\u1100\u1169\u11AF\u1111\u1173",
    "\u1100\u1169\u11BC\u1100\u1161\u11AB",
    "\u1100\u1169\u11BC\u1100\u1162",
    "\u1100\u1169\u11BC\u1100\u1167\u11A8",
    "\u1100\u1169\u11BC\u1100\u116E\u11AB",
    "\u1100\u1169\u11BC\u1100\u1173\u11B8",
    "\u1100\u1169\u11BC\u1100\u1175",
    "\u1100\u1169\u11BC\u1103\u1169\u11BC",
    "\u1100\u1169\u11BC\u1106\u116E\u110B\u116F\u11AB",
    "\u1100\u1169\u11BC\u1107\u116E",
    "\u1100\u1169\u11BC\u1109\u1161",
    "\u1100\u1169\u11BC\u1109\u1175\u11A8",
    "\u1100\u1169\u11BC\u110B\u1165\u11B8",
    "\u1100\u1169\u11BC\u110B\u1167\u11AB",
    "\u1100\u1169\u11BC\u110B\u116F\u11AB",
    "\u1100\u1169\u11BC\u110C\u1161\u11BC",
    "\u1100\u1169\u11BC\u110D\u1161",
    "\u1100\u1169\u11BC\u110E\u1162\u11A8",
    "\u1100\u1169\u11BC\u1110\u1169\u11BC",
    "\u1100\u1169\u11BC\u1111\u1169",
    "\u1100\u1169\u11BC\u1112\u1161\u11BC",
    "\u1100\u1169\u11BC\u1112\u1172\u110B\u1175\u11AF",
    "\u1100\u116A\u1106\u1169\u11A8",
    "\u1100\u116A\u110B\u1175\u11AF",
    "\u1100\u116A\u110C\u1161\u11BC",
    "\u1100\u116A\u110C\u1165\u11BC",
    "\u1100\u116A\u1112\u1161\u11A8",
    "\u1100\u116A\u11AB\u1100\u1162\u11A8",
    "\u1100\u116A\u11AB\u1100\u1168",
    "\u1100\u116A\u11AB\u1100\u116A\u11BC",
    "\u1100\u116A\u11AB\u1102\u1167\u11B7",
    "\u1100\u116A\u11AB\u1105\u1161\u11B7",
    "\u1100\u116A\u11AB\u1105\u1167\u11AB",
    "\u1100\u116A\u11AB\u1105\u1175",
    "\u1100\u116A\u11AB\u1109\u1173\u11B8",
    "\u1100\u116A\u11AB\u1109\u1175\u11B7",
    "\u1100\u116A\u11AB\u110C\u1165\u11B7",
    "\u1100\u116A\u11AB\u110E\u1161\u11AF",
    "\u1100\u116A\u11BC\u1100\u1167\u11BC",
    "\u1100\u116A\u11BC\u1100\u1169",
    "\u1100\u116A\u11BC\u110C\u1161\u11BC",
    "\u1100\u116A\u11BC\u110C\u116E",
    "\u1100\u116C\u1105\u1169\u110B\u116E\u11B7",
    "\u1100\u116C\u11BC\u110C\u1161\u11BC\u1112\u1175",
    "\u1100\u116D\u1100\u116A\u1109\u1165",
    "\u1100\u116D\u1106\u116E\u11AB",
    "\u1100\u116D\u1107\u1169\u11A8",
    "\u1100\u116D\u1109\u1175\u11AF",
    "\u1100\u116D\u110B\u1163\u11BC",
    "\u1100\u116D\u110B\u1172\u11A8",
    "\u1100\u116D\u110C\u1161\u11BC",
    "\u1100\u116D\u110C\u1175\u11A8",
    "\u1100\u116D\u1110\u1169\u11BC",
    "\u1100\u116D\u1112\u116A\u11AB",
    "\u1100\u116D\u1112\u116E\u11AB",
    "\u1100\u116E\u1100\u1167\u11BC",
    "\u1100\u116E\u1105\u1173\u11B7",
    "\u1100\u116E\u1106\u1165\u11BC",
    "\u1100\u116E\u1107\u1167\u11AF",
    "\u1100\u116E\u1107\u116E\u11AB",
    "\u1100\u116E\u1109\u1165\u11A8",
    "\u1100\u116E\u1109\u1165\u11BC",
    "\u1100\u116E\u1109\u1169\u11A8",
    "\u1100\u116E\u110B\u1167\u11A8",
    "\u1100\u116E\u110B\u1175\u11B8",
    "\u1100\u116E\u110E\u1165\u11BC",
    "\u1100\u116E\u110E\u1166\u110C\u1165\u11A8",
    "\u1100\u116E\u11A8\u1100\u1161",
    "\u1100\u116E\u11A8\u1100\u1175",
    "\u1100\u116E\u11A8\u1102\u1162",
    "\u1100\u116E\u11A8\u1105\u1175\u11B8",
    "\u1100\u116E\u11A8\u1106\u116E\u11AF",
    "\u1100\u116E\u11A8\u1106\u1175\u11AB",
    "\u1100\u116E\u11A8\u1109\u116E",
    "\u1100\u116E\u11A8\u110B\u1165",
    "\u1100\u116E\u11A8\u110B\u116A\u11BC",
    "\u1100\u116E\u11A8\u110C\u1165\u11A8",
    "\u1100\u116E\u11A8\u110C\u1166",
    "\u1100\u116E\u11A8\u1112\u116C",
    "\u1100\u116E\u11AB\u1103\u1162",
    "\u1100\u116E\u11AB\u1109\u1161",
    "\u1100\u116E\u11AB\u110B\u1175\u11AB",
    "\u1100\u116E\u11BC\u1100\u1173\u11A8\u110C\u1165\u11A8",
    "\u1100\u116F\u11AB\u1105\u1175",
    "\u1100\u116F\u11AB\u110B\u1171",
    "\u1100\u116F\u11AB\u1110\u116E",
    "\u1100\u1171\u1100\u116E\u11A8",
    "\u1100\u1171\u1109\u1175\u11AB",
    "\u1100\u1172\u110C\u1165\u11BC",
    "\u1100\u1172\u110E\u1175\u11A8",
    "\u1100\u1172\u11AB\u1112\u1167\u11BC",
    "\u1100\u1173\u1102\u1161\u11AF",
    "\u1100\u1173\u1102\u1163\u11BC",
    "\u1100\u1173\u1102\u1173\u11AF",
    "\u1100\u1173\u1105\u1165\u1102\u1161",
    "\u1100\u1173\u1105\u116E\u11B8",
    "\u1100\u1173\u1105\u1173\u11BA",
    "\u1100\u1173\u1105\u1175\u11B7",
    "\u1100\u1173\u110C\u1166\u1109\u1165\u110B\u1163",
    "\u1100\u1173\u1110\u1169\u1105\u1169\u11A8",
    "\u1100\u1173\u11A8\u1107\u1169\u11A8",
    "\u1100\u1173\u11A8\u1112\u1175",
    "\u1100\u1173\u11AB\u1100\u1165",
    "\u1100\u1173\u11AB\u1100\u116D",
    "\u1100\u1173\u11AB\u1105\u1162",
    "\u1100\u1173\u11AB\u1105\u1169",
    "\u1100\u1173\u11AB\u1106\u116E",
    "\u1100\u1173\u11AB\u1107\u1169\u11AB",
    "\u1100\u1173\u11AB\u110B\u116F\u11AB",
    "\u1100\u1173\u11AB\u110B\u1172\u11A8",
    "\u1100\u1173\u11AB\u110E\u1165",
    "\u1100\u1173\u11AF\u110A\u1175",
    "\u1100\u1173\u11AF\u110C\u1161",
    "\u1100\u1173\u11B7\u1100\u1161\u11BC\u1109\u1161\u11AB",
    "\u1100\u1173\u11B7\u1100\u1169",
    "\u1100\u1173\u11B7\u1102\u1167\u11AB",
    "\u1100\u1173\u11B7\u1106\u1166\u1103\u1161\u11AF",
    "\u1100\u1173\u11B7\u110B\u1162\u11A8",
    "\u1100\u1173\u11B7\u110B\u1167\u11AB",
    "\u1100\u1173\u11B7\u110B\u116D\u110B\u1175\u11AF",
    "\u1100\u1173\u11B7\u110C\u1175",
    "\u1100\u1173\u11BC\u110C\u1165\u11BC\u110C\u1165\u11A8",
    "\u1100\u1175\u1100\u1161\u11AB",
    "\u1100\u1175\u1100\u116A\u11AB",
    "\u1100\u1175\u1102\u1167\u11B7",
    "\u1100\u1175\u1102\u1173\u11BC",
    "\u1100\u1175\u1103\u1169\u11A8\u1100\u116D",
    "\u1100\u1175\u1103\u116E\u11BC",
    "\u1100\u1175\u1105\u1169\u11A8",
    "\u1100\u1175\u1105\u1173\u11B7",
    "\u1100\u1175\u1107\u1165\u11B8",
    "\u1100\u1175\u1107\u1169\u11AB",
    "\u1100\u1175\u1107\u116E\u11AB",
    "\u1100\u1175\u1108\u1173\u11B7",
    "\u1100\u1175\u1109\u116E\u11A8\u1109\u1161",
    "\u1100\u1175\u1109\u116E\u11AF",
    "\u1100\u1175\u110B\u1165\u11A8",
    "\u1100\u1175\u110B\u1165\u11B8",
    "\u1100\u1175\u110B\u1169\u11AB",
    "\u1100\u1175\u110B\u116E\u11AB",
    "\u1100\u1175\u110B\u116F\u11AB",
    "\u1100\u1175\u110C\u1165\u11A8",
    "\u1100\u1175\u110C\u116E\u11AB",
    "\u1100\u1175\u110E\u1175\u11B7",
    "\u1100\u1175\u1112\u1169\u11AB",
    "\u1100\u1175\u1112\u116C\u11A8",
    "\u1100\u1175\u11AB\u1100\u1173\u11B8",
    "\u1100\u1175\u11AB\u110C\u1161\u11BC",
    "\u1100\u1175\u11AF\u110B\u1175",
    "\u1100\u1175\u11B7\u1107\u1161\u11B8",
    "\u1100\u1175\u11B7\u110E\u1175",
    "\u1100\u1175\u11B7\u1111\u1169\u1100\u1169\u11BC\u1112\u1161\u11BC",
    "\u1101\u1161\u11A8\u1103\u116E\u1100\u1175",
    "\u1101\u1161\u11B7\u1108\u1161\u11A8",
    "\u1101\u1162\u1103\u1161\u11AF\u110B\u1173\u11B7",
    "\u1101\u1162\u1109\u1169\u1100\u1173\u11B7",
    "\u1101\u1165\u11B8\u110C\u1175\u11AF",
    "\u1101\u1169\u11A8\u1103\u1162\u1100\u1175",
    "\u1101\u1169\u11BE\u110B\u1175\u11C1",
    "\u1102\u1161\u1103\u1173\u11AF\u110B\u1175",
    "\u1102\u1161\u1105\u1161\u11AB\u1112\u1175",
    "\u1102\u1161\u1106\u1165\u110C\u1175",
    "\u1102\u1161\u1106\u116E\u11AF",
    "\u1102\u1161\u110E\u1175\u11B7\u1107\u1161\u11AB",
    "\u1102\u1161\u1112\u1173\u11AF",
    "\u1102\u1161\u11A8\u110B\u1167\u11B8",
    "\u1102\u1161\u11AB\u1107\u1161\u11BC",
    "\u1102\u1161\u11AF\u1100\u1162",
    "\u1102\u1161\u11AF\u110A\u1175",
    "\u1102\u1161\u11AF\u110D\u1161",
    "\u1102\u1161\u11B7\u1102\u1167",
    "\u1102\u1161\u11B7\u1103\u1162\u1106\u116E\u11AB",
    "\u1102\u1161\u11B7\u1106\u1162",
    "\u1102\u1161\u11B7\u1109\u1161\u11AB",
    "\u1102\u1161\u11B7\u110C\u1161",
    "\u1102\u1161\u11B7\u1111\u1167\u11AB",
    "\u1102\u1161\u11B7\u1112\u1161\u11A8\u1109\u1162\u11BC",
    "\u1102\u1161\u11BC\u1107\u1175",
    "\u1102\u1161\u11C0\u1106\u1161\u11AF",
    "\u1102\u1162\u1102\u1167\u11AB",
    "\u1102\u1162\u110B\u116D\u11BC",
    "\u1102\u1162\u110B\u1175\u11AF",
    "\u1102\u1162\u11B7\u1107\u1175",
    "\u1102\u1162\u11B7\u1109\u1162",
    "\u1102\u1162\u11BA\u1106\u116E\u11AF",
    "\u1102\u1162\u11BC\u1103\u1169\u11BC",
    "\u1102\u1162\u11BC\u1106\u1167\u11AB",
    "\u1102\u1162\u11BC\u1107\u1161\u11BC",
    "\u1102\u1162\u11BC\u110C\u1161\u11BC\u1100\u1169",
    "\u1102\u1166\u11A8\u1110\u1161\u110B\u1175",
    "\u1102\u1166\u11BA\u110D\u1162",
    "\u1102\u1169\u1103\u1169\u11BC",
    "\u1102\u1169\u1105\u1161\u11AB\u1109\u1162\u11A8",
    "\u1102\u1169\u1105\u1167\u11A8",
    "\u1102\u1169\u110B\u1175\u11AB",
    "\u1102\u1169\u11A8\u110B\u1173\u11B7",
    "\u1102\u1169\u11A8\u110E\u1161",
    "\u1102\u1169\u11A8\u1112\u116A",
    "\u1102\u1169\u11AB\u1105\u1175",
    "\u1102\u1169\u11AB\u1106\u116E\u11AB",
    "\u1102\u1169\u11AB\u110C\u1162\u11BC",
    "\u1102\u1169\u11AF\u110B\u1175",
    "\u1102\u1169\u11BC\u1100\u116E",
    "\u1102\u1169\u11BC\u1103\u1161\u11B7",
    "\u1102\u1169\u11BC\u1106\u1175\u11AB",
    "\u1102\u1169\u11BC\u1107\u116E",
    "\u1102\u1169\u11BC\u110B\u1165\u11B8",
    "\u1102\u1169\u11BC\u110C\u1161\u11BC",
    "\u1102\u1169\u11BC\u110E\u1169\u11AB",
    "\u1102\u1169\u11C1\u110B\u1175",
    "\u1102\u116E\u11AB\u1103\u1169\u11BC\u110C\u1161",
    "\u1102\u116E\u11AB\u1106\u116E\u11AF",
    "\u1102\u116E\u11AB\u110A\u1165\u11B8",
    "\u1102\u1172\u110B\u116D\u11A8",
    "\u1102\u1173\u1101\u1175\u11B7",
    "\u1102\u1173\u11A8\u1103\u1162",
    "\u1102\u1173\u11BC\u1103\u1169\u11BC\u110C\u1165\u11A8",
    "\u1102\u1173\u11BC\u1105\u1167\u11A8",
    "\u1103\u1161\u1107\u1161\u11BC",
    "\u1103\u1161\u110B\u1163\u11BC\u1109\u1165\u11BC",
    "\u1103\u1161\u110B\u1173\u11B7",
    "\u1103\u1161\u110B\u1175\u110B\u1165\u1110\u1173",
    "\u1103\u1161\u1112\u1162\u11BC",
    "\u1103\u1161\u11AB\u1100\u1168",
    "\u1103\u1161\u11AB\u1100\u1169\u11AF",
    "\u1103\u1161\u11AB\u1103\u1169\u11A8",
    "\u1103\u1161\u11AB\u1106\u1161\u11BA",
    "\u1103\u1161\u11AB\u1109\u116E\u11AB",
    "\u1103\u1161\u11AB\u110B\u1165",
    "\u1103\u1161\u11AB\u110B\u1171",
    "\u1103\u1161\u11AB\u110C\u1165\u11B7",
    "\u1103\u1161\u11AB\u110E\u1166",
    "\u1103\u1161\u11AB\u110E\u116E",
    "\u1103\u1161\u11AB\u1111\u1167\u11AB",
    "\u1103\u1161\u11AB\u1111\u116E\u11BC",
    "\u1103\u1161\u11AF\u1100\u1163\u11AF",
    "\u1103\u1161\u11AF\u1105\u1165",
    "\u1103\u1161\u11AF\u1105\u1167\u11A8",
    "\u1103\u1161\u11AF\u1105\u1175",
    "\u1103\u1161\u11B0\u1100\u1169\u1100\u1175",
    "\u1103\u1161\u11B7\u1103\u1161\u11BC",
    "\u1103\u1161\u11B7\u1107\u1162",
    "\u1103\u1161\u11B7\u110B\u116D",
    "\u1103\u1161\u11B7\u110B\u1175\u11B7",
    "\u1103\u1161\u11B8\u1107\u1167\u11AB",
    "\u1103\u1161\u11B8\u110C\u1161\u11BC",
    "\u1103\u1161\u11BC\u1100\u1173\u11AB",
    "\u1103\u1161\u11BC\u1107\u116E\u11AB\u1100\u1161\u11AB",
    "\u1103\u1161\u11BC\u110B\u1167\u11AB\u1112\u1175",
    "\u1103\u1161\u11BC\u110C\u1161\u11BC",
    "\u1103\u1162\u1100\u1172\u1106\u1169",
    "\u1103\u1162\u1102\u1161\u11BD",
    "\u1103\u1162\u1103\u1161\u11AB\u1112\u1175",
    "\u1103\u1162\u1103\u1161\u11B8",
    "\u1103\u1162\u1103\u1169\u1109\u1175",
    "\u1103\u1162\u1105\u1163\u11A8",
    "\u1103\u1162\u1105\u1163\u11BC",
    "\u1103\u1162\u1105\u1172\u11A8",
    "\u1103\u1162\u1106\u116E\u11AB",
    "\u1103\u1162\u1107\u116E\u1107\u116E\u11AB",
    "\u1103\u1162\u1109\u1175\u11AB",
    "\u1103\u1162\u110B\u1173\u11BC",
    "\u1103\u1162\u110C\u1161\u11BC",
    "\u1103\u1162\u110C\u1165\u11AB",
    "\u1103\u1162\u110C\u1165\u11B8",
    "\u1103\u1162\u110C\u116E\u11BC",
    "\u1103\u1162\u110E\u1162\u11A8",
    "\u1103\u1162\u110E\u116E\u11AF",
    "\u1103\u1162\u110E\u116E\u11BC",
    "\u1103\u1162\u1110\u1169\u11BC\u1105\u1167\u11BC",
    "\u1103\u1162\u1112\u1161\u11A8",
    "\u1103\u1162\u1112\u1161\u11AB\u1106\u1175\u11AB\u1100\u116E\u11A8",
    "\u1103\u1162\u1112\u1161\u11B8\u1109\u1175\u11AF",
    "\u1103\u1162\u1112\u1167\u11BC",
    "\u1103\u1165\u11BC\u110B\u1165\u1105\u1175",
    "\u1103\u1166\u110B\u1175\u1110\u1173",
    "\u1103\u1169\u1103\u1162\u110E\u1166",
    "\u1103\u1169\u1103\u1165\u11A8",
    "\u1103\u1169\u1103\u116E\u11A8",
    "\u1103\u1169\u1106\u1161\u11BC",
    "\u1103\u1169\u1109\u1165\u1100\u116A\u11AB",
    "\u1103\u1169\u1109\u1175\u11B7",
    "\u1103\u1169\u110B\u116E\u11B7",
    "\u1103\u1169\u110B\u1175\u11B8",
    "\u1103\u1169\u110C\u1161\u1100\u1175",
    "\u1103\u1169\u110C\u1165\u1112\u1175",
    "\u1103\u1169\u110C\u1165\u11AB",
    "\u1103\u1169\u110C\u116E\u11BC",
    "\u1103\u1169\u110E\u1161\u11A8",
    "\u1103\u1169\u11A8\u1100\u1161\u11B7",
    "\u1103\u1169\u11A8\u1105\u1175\u11B8",
    "\u1103\u1169\u11A8\u1109\u1165",
    "\u1103\u1169\u11A8\u110B\u1175\u11AF",
    "\u1103\u1169\u11A8\u110E\u1161\u11BC\u110C\u1165\u11A8",
    "\u1103\u1169\u11BC\u1112\u116A\u110E\u1162\u11A8",
    "\u1103\u1171\u11BA\u1106\u1169\u1109\u1173\u11B8",
    "\u1103\u1171\u11BA\u1109\u1161\u11AB",
    "\u1104\u1161\u11AF\u110B\u1161\u110B\u1175",
    "\u1106\u1161\u1102\u116E\u1105\u1161",
    "\u1106\u1161\u1102\u1173\u11AF",
    "\u1106\u1161\u1103\u1161\u11BC",
    "\u1106\u1161\u1105\u1161\u1110\u1169\u11AB",
    "\u1106\u1161\u1105\u1167\u11AB",
    "\u1106\u1161\u1106\u116E\u1105\u1175",
    "\u1106\u1161\u1109\u1161\u110C\u1175",
    "\u1106\u1161\u110B\u1163\u11A8",
    "\u1106\u1161\u110B\u116D\u1102\u1166\u110C\u1173",
    "\u1106\u1161\u110B\u1173\u11AF",
    "\u1106\u1161\u110B\u1173\u11B7",
    "\u1106\u1161\u110B\u1175\u110F\u1173",
    "\u1106\u1161\u110C\u116E\u11BC",
    "\u1106\u1161\u110C\u1175\u1106\u1161\u11A8",
    "\u1106\u1161\u110E\u1161\u11AB\u1100\u1161\u110C\u1175",
    "\u1106\u1161\u110E\u1161\u11AF",
    "\u1106\u1161\u1112\u1173\u11AB",
    "\u1106\u1161\u11A8\u1100\u1165\u11AF\u1105\u1175",
    "\u1106\u1161\u11A8\u1102\u1162",
    "\u1106\u1161\u11A8\u1109\u1161\u11BC",
    "\u1106\u1161\u11AB\u1102\u1161\u11B7",
    "\u1106\u1161\u11AB\u1103\u116E",
    "\u1106\u1161\u11AB\u1109\u1166",
    "\u1106\u1161\u11AB\u110B\u1163\u11A8",
    "\u1106\u1161\u11AB\u110B\u1175\u11AF",
    "\u1106\u1161\u11AB\u110C\u1165\u11B7",
    "\u1106\u1161\u11AB\u110C\u1169\u11A8",
    "\u1106\u1161\u11AB\u1112\u116A",
    "\u1106\u1161\u11AD\u110B\u1175",
    "\u1106\u1161\u11AF\u1100\u1175",
    "\u1106\u1161\u11AF\u110A\u1173\u11B7",
    "\u1106\u1161\u11AF\u1110\u116E",
    "\u1106\u1161\u11B7\u1103\u1162\u1105\u1169",
    "\u1106\u1161\u11BC\u110B\u116F\u11AB\u1100\u1167\u11BC",
    "\u1106\u1162\u1102\u1167\u11AB",
    "\u1106\u1162\u1103\u1161\u11AF",
    "\u1106\u1162\u1105\u1167\u11A8",
    "\u1106\u1162\u1107\u1165\u11AB",
    "\u1106\u1162\u1109\u1173\u110F\u1165\u11B7",
    "\u1106\u1162\u110B\u1175\u11AF",
    "\u1106\u1162\u110C\u1161\u11BC",
    "\u1106\u1162\u11A8\u110C\u116E",
    "\u1106\u1165\u11A8\u110B\u1175",
    "\u1106\u1165\u11AB\u110C\u1165",
    "\u1106\u1165\u11AB\u110C\u1175",
    "\u1106\u1165\u11AF\u1105\u1175",
    "\u1106\u1166\u110B\u1175\u11AF",
    "\u1106\u1167\u1102\u1173\u1105\u1175",
    "\u1106\u1167\u110E\u1175\u11AF",
    "\u1106\u1167\u11AB\u1103\u1161\u11B7",
    "\u1106\u1167\u11AF\u110E\u1175",
    "\u1106\u1167\u11BC\u1103\u1161\u11AB",
    "\u1106\u1167\u11BC\u1105\u1167\u11BC",
    "\u1106\u1167\u11BC\u110B\u1168",
    "\u1106\u1167\u11BC\u110B\u1174",
    "\u1106\u1167\u11BC\u110C\u1165\u11AF",
    "\u1106\u1167\u11BC\u110E\u1175\u11BC",
    "\u1106\u1167\u11BC\u1112\u1161\u11B7",
    "\u1106\u1169\u1100\u1173\u11B7",
    "\u1106\u1169\u1102\u1175\u1110\u1165",
    "\u1106\u1169\u1103\u1166\u11AF",
    "\u1106\u1169\u1103\u1173\u11AB",
    "\u1106\u1169\u1107\u1165\u11B7",
    "\u1106\u1169\u1109\u1173\u11B8",
    "\u1106\u1169\u110B\u1163\u11BC",
    "\u1106\u1169\u110B\u1175\u11B7",
    "\u1106\u1169\u110C\u1169\u1105\u1175",
    "\u1106\u1169\u110C\u1175\u11B8",
    "\u1106\u1169\u1110\u116E\u11BC\u110B\u1175",
    "\u1106\u1169\u11A8\u1100\u1165\u11AF\u110B\u1175",
    "\u1106\u1169\u11A8\u1105\u1169\u11A8",
    "\u1106\u1169\u11A8\u1109\u1161",
    "\u1106\u1169\u11A8\u1109\u1169\u1105\u1175",
    "\u1106\u1169\u11A8\u1109\u116E\u11B7",
    "\u1106\u1169\u11A8\u110C\u1165\u11A8",
    "\u1106\u1169\u11A8\u1111\u116D",
    "\u1106\u1169\u11AF\u1105\u1162",
    "\u1106\u1169\u11B7\u1106\u1162",
    "\u1106\u1169\u11B7\u1106\u116E\u1100\u1166",
    "\u1106\u1169\u11B7\u1109\u1161\u11AF",
    "\u1106\u1169\u11B7\u1109\u1169\u11A8",
    "\u1106\u1169\u11B7\u110C\u1175\u11BA",
    "\u1106\u1169\u11B7\u1110\u1169\u11BC",
    "\u1106\u1169\u11B8\u1109\u1175",
    "\u1106\u116E\u1100\u116A\u11AB\u1109\u1175\u11B7",
    "\u1106\u116E\u1100\u116E\u11BC\u1112\u116A",
    "\u1106\u116E\u1103\u1165\u110B\u1171",
    "\u1106\u116E\u1103\u1165\u11B7",
    "\u1106\u116E\u1105\u1173\u11C1",
    "\u1106\u116E\u1109\u1173\u11AB",
    "\u1106\u116E\u110B\u1165\u11BA",
    "\u1106\u116E\u110B\u1167\u11A8",
    "\u1106\u116E\u110B\u116D\u11BC",
    "\u1106\u116E\u110C\u1169\u1100\u1165\u11AB",
    "\u1106\u116E\u110C\u1175\u1100\u1162",
    "\u1106\u116E\u110E\u1165\u11A8",
    "\u1106\u116E\u11AB\u1100\u116E",
    "\u1106\u116E\u11AB\u1103\u1173\u11A8",
    "\u1106\u116E\u11AB\u1107\u1165\u11B8",
    "\u1106\u116E\u11AB\u1109\u1165",
    "\u1106\u116E\u11AB\u110C\u1166",
    "\u1106\u116E\u11AB\u1112\u1161\u11A8",
    "\u1106\u116E\u11AB\u1112\u116A",
    "\u1106\u116E\u11AF\u1100\u1161",
    "\u1106\u116E\u11AF\u1100\u1165\u11AB",
    "\u1106\u116E\u11AF\u1100\u1167\u11AF",
    "\u1106\u116E\u11AF\u1100\u1169\u1100\u1175",
    "\u1106\u116E\u11AF\u1105\u1169\u11AB",
    "\u1106\u116E\u11AF\u1105\u1175\u1112\u1161\u11A8",
    "\u1106\u116E\u11AF\u110B\u1173\u11B7",
    "\u1106\u116E\u11AF\u110C\u1175\u11AF",
    "\u1106\u116E\u11AF\u110E\u1166",
    "\u1106\u1175\u1100\u116E\u11A8",
    "\u1106\u1175\u1103\u1175\u110B\u1165",
    "\u1106\u1175\u1109\u1161\u110B\u1175\u11AF",
    "\u1106\u1175\u1109\u116E\u11AF",
    "\u1106\u1175\u110B\u1167\u11A8",
    "\u1106\u1175\u110B\u116D\u11BC\u1109\u1175\u11AF",
    "\u1106\u1175\u110B\u116E\u11B7",
    "\u1106\u1175\u110B\u1175\u11AB",
    "\u1106\u1175\u1110\u1175\u11BC",
    "\u1106\u1175\u1112\u1169\u11AB",
    "\u1106\u1175\u11AB\u1100\u1161\u11AB",
    "\u1106\u1175\u11AB\u110C\u1169\u11A8",
    "\u1106\u1175\u11AB\u110C\u116E",
    "\u1106\u1175\u11AE\u110B\u1173\u11B7",
    "\u1106\u1175\u11AF\u1100\u1161\u1105\u116E",
    "\u1106\u1175\u11AF\u1105\u1175\u1106\u1175\u1110\u1165",
    "\u1106\u1175\u11C0\u1107\u1161\u1103\u1161\u11A8",
    "\u1107\u1161\u1100\u1161\u110C\u1175",
    "\u1107\u1161\u1100\u116E\u1102\u1175",
    "\u1107\u1161\u1102\u1161\u1102\u1161",
    "\u1107\u1161\u1102\u1173\u11AF",
    "\u1107\u1161\u1103\u1161\u11A8",
    "\u1107\u1161\u1103\u1161\u11BA\u1100\u1161",
    "\u1107\u1161\u1105\u1161\u11B7",
    "\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173",
    "\u1107\u1161\u1110\u1161\u11BC",
    "\u1107\u1161\u11A8\u1106\u116E\u11AF\u1100\u116A\u11AB",
    "\u1107\u1161\u11A8\u1109\u1161",
    "\u1107\u1161\u11A8\u1109\u116E",
    "\u1107\u1161\u11AB\u1103\u1162",
    "\u1107\u1161\u11AB\u1103\u1173\u1109\u1175",
    "\u1107\u1161\u11AB\u1106\u1161\u11AF",
    "\u1107\u1161\u11AB\u1107\u1161\u11AF",
    "\u1107\u1161\u11AB\u1109\u1165\u11BC",
    "\u1107\u1161\u11AB\u110B\u1173\u11BC",
    "\u1107\u1161\u11AB\u110C\u1161\u11BC",
    "\u1107\u1161\u11AB\u110C\u116E\u11A8",
    "\u1107\u1161\u11AB\u110C\u1175",
    "\u1107\u1161\u11AB\u110E\u1161\u11AB",
    "\u1107\u1161\u11AE\u110E\u1175\u11B7",
    "\u1107\u1161\u11AF\u1100\u1161\u1105\u1161\u11A8",
    "\u1107\u1161\u11AF\u1100\u1165\u11AF\u110B\u1173\u11B7",
    "\u1107\u1161\u11AF\u1100\u1167\u11AB",
    "\u1107\u1161\u11AF\u1103\u1161\u11AF",
    "\u1107\u1161\u11AF\u1105\u1166",
    "\u1107\u1161\u11AF\u1106\u1169\u11A8",
    "\u1107\u1161\u11AF\u1107\u1161\u1103\u1161\u11A8",
    "\u1107\u1161\u11AF\u1109\u1162\u11BC",
    "\u1107\u1161\u11AF\u110B\u1173\u11B7",
    "\u1107\u1161\u11AF\u110C\u1161\u1100\u116E\u11A8",
    "\u1107\u1161\u11AF\u110C\u1165\u11AB",
    "\u1107\u1161\u11AF\u1110\u1169\u11B8",
    "\u1107\u1161\u11AF\u1111\u116D",
    "\u1107\u1161\u11B7\u1112\u1161\u1102\u1173\u11AF",
    "\u1107\u1161\u11B8\u1100\u1173\u1105\u1173\u11BA",
    "\u1107\u1161\u11B8\u1106\u1161\u11BA",
    "\u1107\u1161\u11B8\u1109\u1161\u11BC",
    "\u1107\u1161\u11B8\u1109\u1169\u11C0",
    "\u1107\u1161\u11BC\u1100\u1173\u11B7",
    "\u1107\u1161\u11BC\u1106\u1167\u11AB",
    "\u1107\u1161\u11BC\u1106\u116E\u11AB",
    "\u1107\u1161\u11BC\u1107\u1161\u1103\u1161\u11A8",
    "\u1107\u1161\u11BC\u1107\u1165\u11B8",
    "\u1107\u1161\u11BC\u1109\u1169\u11BC",
    "\u1107\u1161\u11BC\u1109\u1175\u11A8",
    "\u1107\u1161\u11BC\u110B\u1161\u11AB",
    "\u1107\u1161\u11BC\u110B\u116E\u11AF",
    "\u1107\u1161\u11BC\u110C\u1175",
    "\u1107\u1161\u11BC\u1112\u1161\u11A8",
    "\u1107\u1161\u11BC\u1112\u1162",
    "\u1107\u1161\u11BC\u1112\u1163\u11BC",
    "\u1107\u1162\u1100\u1167\u11BC",
    "\u1107\u1162\u1101\u1169\u11B8",
    "\u1107\u1162\u1103\u1161\u11AF",
    "\u1107\u1162\u1103\u1173\u1106\u1175\u11AB\u1110\u1165\u11AB",
    "\u1107\u1162\u11A8\u1103\u116E\u1109\u1161\u11AB",
    "\u1107\u1162\u11A8\u1109\u1162\u11A8",
    "\u1107\u1162\u11A8\u1109\u1165\u11BC",
    "\u1107\u1162\u11A8\u110B\u1175\u11AB",
    "\u1107\u1162\u11A8\u110C\u1166",
    "\u1107\u1162\u11A8\u1112\u116A\u110C\u1165\u11B7",
    "\u1107\u1165\u1105\u1173\u11BA",
    "\u1107\u1165\u1109\u1165\u11BA",
    "\u1107\u1165\u1110\u1173\u11AB",
    "\u1107\u1165\u11AB\u1100\u1162",
    "\u1107\u1165\u11AB\u110B\u1167\u11A8",
    "\u1107\u1165\u11AB\u110C\u1175",
    "\u1107\u1165\u11AB\u1112\u1169",
    "\u1107\u1165\u11AF\u1100\u1173\u11B7",
    "\u1107\u1165\u11AF\u1105\u1166",
    "\u1107\u1165\u11AF\u110A\u1165",
    "\u1107\u1165\u11B7\u110B\u1171",
    "\u1107\u1165\u11B7\u110B\u1175\u11AB",
    "\u1107\u1165\u11B7\u110C\u116C",
    "\u1107\u1165\u11B8\u1105\u1172\u11AF",
    "\u1107\u1165\u11B8\u110B\u116F\u11AB",
    "\u1107\u1165\u11B8\u110C\u1165\u11A8",
    "\u1107\u1165\u11B8\u110E\u1175\u11A8",
    "\u1107\u1166\u110B\u1175\u110C\u1175\u11BC",
    "\u1107\u1166\u11AF\u1110\u1173",
    "\u1107\u1167\u11AB\u1100\u1167\u11BC",
    "\u1107\u1167\u11AB\u1103\u1169\u11BC",
    "\u1107\u1167\u11AB\u1106\u1167\u11BC",
    "\u1107\u1167\u11AB\u1109\u1175\u11AB",
    "\u1107\u1167\u11AB\u1112\u1169\u1109\u1161",
    "\u1107\u1167\u11AB\u1112\u116A",
    "\u1107\u1167\u11AF\u1103\u1169",
    "\u1107\u1167\u11AF\u1106\u1167\u11BC",
    "\u1107\u1167\u11AF\u110B\u1175\u11AF",
    "\u1107\u1167\u11BC\u1109\u1175\u11AF",
    "\u1107\u1167\u11BC\u110B\u1161\u1105\u1175",
    "\u1107\u1167\u11BC\u110B\u116F\u11AB",
    "\u1107\u1169\u1100\u116A\u11AB",
    "\u1107\u1169\u1102\u1165\u1109\u1173",
    "\u1107\u1169\u1105\u1161\u1109\u1162\u11A8",
    "\u1107\u1169\u1105\u1161\u11B7",
    "\u1107\u1169\u1105\u1173\u11B7",
    "\u1107\u1169\u1109\u1161\u11BC",
    "\u1107\u1169\u110B\u1161\u11AB",
    "\u1107\u1169\u110C\u1161\u1100\u1175",
    "\u1107\u1169\u110C\u1161\u11BC",
    "\u1107\u1169\u110C\u1165\u11AB",
    "\u1107\u1169\u110C\u1169\u11AB",
    "\u1107\u1169\u1110\u1169\u11BC",
    "\u1107\u1169\u1111\u1167\u11AB\u110C\u1165\u11A8",
    "\u1107\u1169\u1112\u1165\u11B7",
    "\u1107\u1169\u11A8\u1103\u1169",
    "\u1107\u1169\u11A8\u1109\u1161",
    "\u1107\u1169\u11A8\u1109\u116E\u11BC\u110B\u1161",
    "\u1107\u1169\u11A8\u1109\u1173\u11B8",
    "\u1107\u1169\u11A9\u110B\u1173\u11B7",
    "\u1107\u1169\u11AB\u1100\u1167\u11A8\u110C\u1165\u11A8",
    "\u1107\u1169\u11AB\u1105\u1162",
    "\u1107\u1169\u11AB\u1107\u116E",
    "\u1107\u1169\u11AB\u1109\u1161",
    "\u1107\u1169\u11AB\u1109\u1165\u11BC",
    "\u1107\u1169\u11AB\u110B\u1175\u11AB",
    "\u1107\u1169\u11AB\u110C\u1175\u11AF",
    "\u1107\u1169\u11AF\u1111\u1166\u11AB",
    "\u1107\u1169\u11BC\u1109\u1161",
    "\u1107\u1169\u11BC\u110C\u1175",
    "\u1107\u1169\u11BC\u1110\u116E",
    "\u1107\u116E\u1100\u1173\u11AB",
    "\u1107\u116E\u1101\u1173\u1105\u1165\u110B\u116E\u11B7",
    "\u1107\u116E\u1103\u1161\u11B7",
    "\u1107\u116E\u1103\u1169\u11BC\u1109\u1161\u11AB",
    "\u1107\u116E\u1106\u116E\u11AB",
    "\u1107\u116E\u1107\u116E\u11AB",
    "\u1107\u116E\u1109\u1161\u11AB",
    "\u1107\u116E\u1109\u1161\u11BC",
    "\u1107\u116E\u110B\u1165\u11BF",
    "\u1107\u116E\u110B\u1175\u11AB",
    "\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC",
    "\u1107\u116E\u110C\u1161\u11BC",
    "\u1107\u116E\u110C\u1165\u11BC",
    "\u1107\u116E\u110C\u1169\u11A8",
    "\u1107\u116E\u110C\u1175\u1105\u1165\u11AB\u1112\u1175",
    "\u1107\u116E\u110E\u1175\u11AB",
    "\u1107\u116E\u1110\u1161\u11A8",
    "\u1107\u116E\u1111\u116E\u11B7",
    "\u1107\u116E\u1112\u116C\u110C\u1161\u11BC",
    "\u1107\u116E\u11A8\u1107\u116E",
    "\u1107\u116E\u11A8\u1112\u1161\u11AB",
    "\u1107\u116E\u11AB\u1102\u1169",
    "\u1107\u116E\u11AB\u1105\u1163\u11BC",
    "\u1107\u116E\u11AB\u1105\u1175",
    "\u1107\u116E\u11AB\u1106\u1167\u11BC",
    "\u1107\u116E\u11AB\u1109\u1165\u11A8",
    "\u1107\u116E\u11AB\u110B\u1163",
    "\u1107\u116E\u11AB\u110B\u1171\u1100\u1175",
    "\u1107\u116E\u11AB\u1111\u1175\u11AF",
    "\u1107\u116E\u11AB\u1112\u1169\u11BC\u1109\u1162\u11A8",
    "\u1107\u116E\u11AF\u1100\u1169\u1100\u1175",
    "\u1107\u116E\u11AF\u1100\u116A",
    "\u1107\u116E\u11AF\u1100\u116D",
    "\u1107\u116E\u11AF\u1101\u1169\u11BE",
    "\u1107\u116E\u11AF\u1106\u1161\u11AB",
    "\u1107\u116E\u11AF\u1107\u1165\u11B8",
    "\u1107\u116E\u11AF\u1107\u1175\u11BE",
    "\u1107\u116E\u11AF\u110B\u1161\u11AB",
    "\u1107\u116E\u11AF\u110B\u1175\u110B\u1175\u11A8",
    "\u1107\u116E\u11AF\u1112\u1162\u11BC",
    "\u1107\u1173\u1105\u1162\u11AB\u1103\u1173",
    "\u1107\u1175\u1100\u1173\u11A8",
    "\u1107\u1175\u1102\u1161\u11AB",
    "\u1107\u1175\u1102\u1175\u11AF",
    "\u1107\u1175\u1103\u116E\u11AF\u1100\u1175",
    "\u1107\u1175\u1103\u1175\u110B\u1169",
    "\u1107\u1175\u1105\u1169\u1109\u1169",
    "\u1107\u1175\u1106\u1161\u11AB",
    "\u1107\u1175\u1106\u1167\u11BC",
    "\u1107\u1175\u1106\u1175\u11AF",
    "\u1107\u1175\u1107\u1161\u1105\u1161\u11B7",
    "\u1107\u1175\u1107\u1175\u11B7\u1107\u1161\u11B8",
    "\u1107\u1175\u1109\u1161\u11BC",
    "\u1107\u1175\u110B\u116D\u11BC",
    "\u1107\u1175\u110B\u1172\u11AF",
    "\u1107\u1175\u110C\u116E\u11BC",
    "\u1107\u1175\u1110\u1161\u1106\u1175\u11AB",
    "\u1107\u1175\u1111\u1161\u11AB",
    "\u1107\u1175\u11AF\u1103\u1175\u11BC",
    "\u1107\u1175\u11BA\u1106\u116E\u11AF",
    "\u1107\u1175\u11BA\u1107\u1161\u11BC\u110B\u116E\u11AF",
    "\u1107\u1175\u11BA\u110C\u116E\u11AF\u1100\u1175",
    "\u1107\u1175\u11BE\u1101\u1161\u11AF",
    "\u1108\u1161\u11AF\u1100\u1161\u11AB\u1109\u1162\u11A8",
    "\u1108\u1161\u11AF\u1105\u1162",
    "\u1108\u1161\u11AF\u1105\u1175",
    "\u1109\u1161\u1100\u1165\u11AB",
    "\u1109\u1161\u1100\u1168\u110C\u1165\u11AF",
    "\u1109\u1161\u1102\u1161\u110B\u1175",
    "\u1109\u1161\u1102\u1163\u11BC",
    "\u1109\u1161\u1105\u1161\u11B7",
    "\u1109\u1161\u1105\u1161\u11BC",
    "\u1109\u1161\u1105\u1175\u11B8",
    "\u1109\u1161\u1106\u1169\u1102\u1175\u11B7",
    "\u1109\u1161\u1106\u116E\u11AF",
    "\u1109\u1161\u1107\u1161\u11BC",
    "\u1109\u1161\u1109\u1161\u11BC",
    "\u1109\u1161\u1109\u1162\u11BC\u1112\u116A\u11AF",
    "\u1109\u1161\u1109\u1165\u11AF",
    "\u1109\u1161\u1109\u1173\u11B7",
    "\u1109\u1161\u1109\u1175\u11AF",
    "\u1109\u1161\u110B\u1165\u11B8",
    "\u1109\u1161\u110B\u116D\u11BC",
    "\u1109\u1161\u110B\u116F\u11AF",
    "\u1109\u1161\u110C\u1161\u11BC",
    "\u1109\u1161\u110C\u1165\u11AB",
    "\u1109\u1161\u110C\u1175\u11AB",
    "\u1109\u1161\u110E\u1169\u11AB",
    "\u1109\u1161\u110E\u116E\u11AB\u1100\u1175",
    "\u1109\u1161\u1110\u1161\u11BC",
    "\u1109\u1161\u1110\u116E\u1105\u1175",
    "\u1109\u1161\u1112\u1173\u11AF",
    "\u1109\u1161\u11AB\u1100\u1175\u11AF",
    "\u1109\u1161\u11AB\u1107\u116E\u110B\u1175\u11AB\u1100\u116A",
    "\u1109\u1161\u11AB\u110B\u1165\u11B8",
    "\u1109\u1161\u11AB\u110E\u1162\u11A8",
    "\u1109\u1161\u11AF\u1105\u1175\u11B7",
    "\u1109\u1161\u11AF\u110B\u1175\u11AB",
    "\u1109\u1161\u11AF\u110D\u1161\u11A8",
    "\u1109\u1161\u11B7\u1100\u1168\u1110\u1161\u11BC",
    "\u1109\u1161\u11B7\u1100\u116E\u11A8",
    "\u1109\u1161\u11B7\u1109\u1175\u11B8",
    "\u1109\u1161\u11B7\u110B\u116F\u11AF",
    "\u1109\u1161\u11B7\u110E\u1169\u11AB",
    "\u1109\u1161\u11BC\u1100\u116A\u11AB",
    "\u1109\u1161\u11BC\u1100\u1173\u11B7",
    "\u1109\u1161\u11BC\u1103\u1162",
    "\u1109\u1161\u11BC\u1105\u1172",
    "\u1109\u1161\u11BC\u1107\u1161\u11AB\u1100\u1175",
    "\u1109\u1161\u11BC\u1109\u1161\u11BC",
    "\u1109\u1161\u11BC\u1109\u1175\u11A8",
    "\u1109\u1161\u11BC\u110B\u1165\u11B8",
    "\u1109\u1161\u11BC\u110B\u1175\u11AB",
    "\u1109\u1161\u11BC\u110C\u1161",
    "\u1109\u1161\u11BC\u110C\u1165\u11B7",
    "\u1109\u1161\u11BC\u110E\u1165",
    "\u1109\u1161\u11BC\u110E\u116E",
    "\u1109\u1161\u11BC\u1110\u1162",
    "\u1109\u1161\u11BC\u1111\u116D",
    "\u1109\u1161\u11BC\u1111\u116E\u11B7",
    "\u1109\u1161\u11BC\u1112\u116A\u11BC",
    "\u1109\u1162\u1107\u1167\u11A8",
    "\u1109\u1162\u11A8\u1101\u1161\u11AF",
    "\u1109\u1162\u11A8\u110B\u1167\u11AB\u1111\u1175\u11AF",
    "\u1109\u1162\u11BC\u1100\u1161\u11A8",
    "\u1109\u1162\u11BC\u1106\u1167\u11BC",
    "\u1109\u1162\u11BC\u1106\u116E\u11AF",
    "\u1109\u1162\u11BC\u1107\u1161\u11BC\u1109\u1169\u11BC",
    "\u1109\u1162\u11BC\u1109\u1161\u11AB",
    "\u1109\u1162\u11BC\u1109\u1165\u11AB",
    "\u1109\u1162\u11BC\u1109\u1175\u11AB",
    "\u1109\u1162\u11BC\u110B\u1175\u11AF",
    "\u1109\u1162\u11BC\u1112\u116A\u11AF",
    "\u1109\u1165\u1105\u1161\u11B8",
    "\u1109\u1165\u1105\u1173\u11AB",
    "\u1109\u1165\u1106\u1167\u11BC",
    "\u1109\u1165\u1106\u1175\u11AB",
    "\u1109\u1165\u1107\u1175\u1109\u1173",
    "\u1109\u1165\u110B\u1163\u11BC",
    "\u1109\u1165\u110B\u116E\u11AF",
    "\u1109\u1165\u110C\u1165\u11A8",
    "\u1109\u1165\u110C\u1165\u11B7",
    "\u1109\u1165\u110D\u1169\u11A8",
    "\u1109\u1165\u110F\u1173\u11AF",
    "\u1109\u1165\u11A8\u1109\u1161",
    "\u1109\u1165\u11A8\u110B\u1172",
    "\u1109\u1165\u11AB\u1100\u1165",
    "\u1109\u1165\u11AB\u1106\u116E\u11AF",
    "\u1109\u1165\u11AB\u1107\u1162",
    "\u1109\u1165\u11AB\u1109\u1162\u11BC",
    "\u1109\u1165\u11AB\u1109\u116E",
    "\u1109\u1165\u11AB\u110B\u116F\u11AB",
    "\u1109\u1165\u11AB\u110C\u1161\u11BC",
    "\u1109\u1165\u11AB\u110C\u1165\u11AB",
    "\u1109\u1165\u11AB\u1110\u1162\u11A8",
    "\u1109\u1165\u11AB\u1111\u116E\u11BC\u1100\u1175",
    "\u1109\u1165\u11AF\u1100\u1165\u110C\u1175",
    "\u1109\u1165\u11AF\u1102\u1161\u11AF",
    "\u1109\u1165\u11AF\u1105\u1165\u11BC\u1110\u1161\u11BC",
    "\u1109\u1165\u11AF\u1106\u1167\u11BC",
    "\u1109\u1165\u11AF\u1106\u116E\u11AB",
    "\u1109\u1165\u11AF\u1109\u1161",
    "\u1109\u1165\u11AF\u110B\u1161\u11A8\u1109\u1161\u11AB",
    "\u1109\u1165\u11AF\u110E\u1175",
    "\u1109\u1165\u11AF\u1110\u1161\u11BC",
    "\u1109\u1165\u11B8\u110A\u1175",
    "\u1109\u1165\u11BC\u1100\u1169\u11BC",
    "\u1109\u1165\u11BC\u1103\u1161\u11BC",
    "\u1109\u1165\u11BC\u1106\u1167\u11BC",
    "\u1109\u1165\u11BC\u1107\u1167\u11AF",
    "\u1109\u1165\u11BC\u110B\u1175\u11AB",
    "\u1109\u1165\u11BC\u110C\u1161\u11BC",
    "\u1109\u1165\u11BC\u110C\u1165\u11A8",
    "\u1109\u1165\u11BC\u110C\u1175\u11AF",
    "\u1109\u1165\u11BC\u1112\u1161\u11B7",
    "\u1109\u1166\u1100\u1173\u11B7",
    "\u1109\u1166\u1106\u1175\u1102\u1161",
    "\u1109\u1166\u1109\u1161\u11BC",
    "\u1109\u1166\u110B\u116F\u11AF",
    "\u1109\u1166\u110C\u1169\u11BC\u1103\u1162\u110B\u116A\u11BC",
    "\u1109\u1166\u1110\u1161\u11A8",
    "\u1109\u1166\u11AB\u1110\u1165",
    "\u1109\u1166\u11AB\u1110\u1175\u1106\u1175\u1110\u1165",
    "\u1109\u1166\u11BA\u110D\u1162",
    "\u1109\u1169\u1100\u1172\u1106\u1169",
    "\u1109\u1169\u1100\u1173\u11A8\u110C\u1165\u11A8",
    "\u1109\u1169\u1100\u1173\u11B7",
    "\u1109\u1169\u1102\u1161\u1100\u1175",
    "\u1109\u1169\u1102\u1167\u11AB",
    "\u1109\u1169\u1103\u1173\u11A8",
    "\u1109\u1169\u1106\u1161\u11BC",
    "\u1109\u1169\u1106\u116E\u11AB",
    "\u1109\u1169\u1109\u1165\u11AF",
    "\u1109\u1169\u1109\u1169\u11A8",
    "\u1109\u1169\u110B\u1161\u1100\u116A",
    "\u1109\u1169\u110B\u116D\u11BC",
    "\u1109\u1169\u110B\u116F\u11AB",
    "\u1109\u1169\u110B\u1173\u11B7",
    "\u1109\u1169\u110C\u116E\u11BC\u1112\u1175",
    "\u1109\u1169\u110C\u1175\u1111\u116E\u11B7",
    "\u1109\u1169\u110C\u1175\u11AF",
    "\u1109\u1169\u1111\u116E\u11BC",
    "\u1109\u1169\u1112\u1167\u11BC",
    "\u1109\u1169\u11A8\u1103\u1161\u11B7",
    "\u1109\u1169\u11A8\u1103\u1169",
    "\u1109\u1169\u11A8\u110B\u1169\u11BA",
    "\u1109\u1169\u11AB\u1100\u1161\u1105\u1161\u11A8",
    "\u1109\u1169\u11AB\u1100\u1175\u11AF",
    "\u1109\u1169\u11AB\u1102\u1167",
    "\u1109\u1169\u11AB\u1102\u1175\u11B7",
    "\u1109\u1169\u11AB\u1103\u1173\u11BC",
    "\u1109\u1169\u11AB\u1106\u1169\u11A8",
    "\u1109\u1169\u11AB\u1108\u1167\u11A8",
    "\u1109\u1169\u11AB\u1109\u1175\u11AF",
    "\u1109\u1169\u11AB\u110C\u1175\u11AF",
    "\u1109\u1169\u11AB\u1110\u1169\u11B8",
    "\u1109\u1169\u11AB\u1112\u1162",
    "\u1109\u1169\u11AF\u110C\u1175\u11A8\u1112\u1175",
    "\u1109\u1169\u11B7\u110A\u1175",
    "\u1109\u1169\u11BC\u110B\u1161\u110C\u1175",
    "\u1109\u1169\u11BC\u110B\u1175",
    "\u1109\u1169\u11BC\u1111\u1167\u11AB",
    "\u1109\u116C\u1100\u1169\u1100\u1175",
    "\u1109\u116D\u1111\u1175\u11BC",
    "\u1109\u116E\u1100\u1165\u11AB",
    "\u1109\u116E\u1102\u1167\u11AB",
    "\u1109\u116E\u1103\u1161\u11AB",
    "\u1109\u116E\u1103\u1169\u11BA\u1106\u116E\u11AF",
    "\u1109\u116E\u1103\u1169\u11BC\u110C\u1165\u11A8",
    "\u1109\u116E\u1106\u1167\u11AB",
    "\u1109\u116E\u1106\u1167\u11BC",
    "\u1109\u116E\u1107\u1161\u11A8",
    "\u1109\u116E\u1109\u1161\u11BC",
    "\u1109\u116E\u1109\u1165\u11A8",
    "\u1109\u116E\u1109\u116E\u11AF",
    "\u1109\u116E\u1109\u1175\u1105\u1169",
    "\u1109\u116E\u110B\u1165\u11B8",
    "\u1109\u116E\u110B\u1167\u11B7",
    "\u1109\u116E\u110B\u1167\u11BC",
    "\u1109\u116E\u110B\u1175\u11B8",
    "\u1109\u116E\u110C\u116E\u11AB",
    "\u1109\u116E\u110C\u1175\u11B8",
    "\u1109\u116E\u110E\u116E\u11AF",
    "\u1109\u116E\u110F\u1165\u11BA",
    "\u1109\u116E\u1111\u1175\u11AF",
    "\u1109\u116E\u1112\u1161\u11A8",
    "\u1109\u116E\u1112\u1165\u11B7\u1109\u1162\u11BC",
    "\u1109\u116E\u1112\u116A\u1100\u1175",
    "\u1109\u116E\u11A8\u1102\u1167",
    "\u1109\u116E\u11A8\u1109\u1169",
    "\u1109\u116E\u11A8\u110C\u1166",
    "\u1109\u116E\u11AB\u1100\u1161\u11AB",
    "\u1109\u116E\u11AB\u1109\u1165",
    "\u1109\u116E\u11AB\u1109\u116E",
    "\u1109\u116E\u11AB\u1109\u1175\u11A8\u1100\u1161\u11AB",
    "\u1109\u116E\u11AB\u110B\u1171",
    "\u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8",
    "\u1109\u116E\u11AF\u1107\u1167\u11BC",
    "\u1109\u116E\u11AF\u110C\u1175\u11B8",
    "\u1109\u116E\u11BA\u110C\u1161",
    "\u1109\u1173\u1102\u1175\u11B7",
    "\u1109\u1173\u1106\u116E\u11AF",
    "\u1109\u1173\u1109\u1173\u1105\u1169",
    "\u1109\u1173\u1109\u1173\u11BC",
    "\u1109\u1173\u110B\u1170\u1110\u1165",
    "\u1109\u1173\u110B\u1171\u110E\u1175",
    "\u1109\u1173\u110F\u1166\u110B\u1175\u1110\u1173",
    "\u1109\u1173\u1110\u1172\u1103\u1175\u110B\u1169",
    "\u1109\u1173\u1110\u1173\u1105\u1166\u1109\u1173",
    "\u1109\u1173\u1111\u1169\u110E\u1173",
    "\u1109\u1173\u11AF\u110D\u1165\u11A8",
    "\u1109\u1173\u11AF\u1111\u1173\u11B7",
    "\u1109\u1173\u11B8\u1100\u116A\u11AB",
    "\u1109\u1173\u11B8\u1100\u1175",
    "\u1109\u1173\u11BC\u1100\u1162\u11A8",
    "\u1109\u1173\u11BC\u1105\u1175",
    "\u1109\u1173\u11BC\u1107\u116E",
    "\u1109\u1173\u11BC\u110B\u116D\u11BC\u110E\u1161",
    "\u1109\u1173\u11BC\u110C\u1175\u11AB",
    "\u1109\u1175\u1100\u1161\u11A8",
    "\u1109\u1175\u1100\u1161\u11AB",
    "\u1109\u1175\u1100\u1169\u11AF",
    "\u1109\u1175\u1100\u1173\u11B7\u110E\u1175",
    "\u1109\u1175\u1102\u1161\u1105\u1175\u110B\u1169",
    "\u1109\u1175\u1103\u1162\u11A8",
    "\u1109\u1175\u1105\u1175\u110C\u1173",
    "\u1109\u1175\u1106\u1166\u11AB\u1110\u1173",
    "\u1109\u1175\u1106\u1175\u11AB",
    "\u1109\u1175\u1107\u116E\u1106\u1169",
    "\u1109\u1175\u1109\u1165\u11AB",
    "\u1109\u1175\u1109\u1165\u11AF",
    "\u1109\u1175\u1109\u1173\u1110\u1166\u11B7",
    "\u1109\u1175\u110B\u1161\u1107\u1165\u110C\u1175",
    "\u1109\u1175\u110B\u1165\u1106\u1165\u1102\u1175",
    "\u1109\u1175\u110B\u116F\u11AF",
    "\u1109\u1175\u110B\u1175\u11AB",
    "\u1109\u1175\u110B\u1175\u11AF",
    "\u1109\u1175\u110C\u1161\u11A8",
    "\u1109\u1175\u110C\u1161\u11BC",
    "\u1109\u1175\u110C\u1165\u11AF",
    "\u1109\u1175\u110C\u1165\u11B7",
    "\u1109\u1175\u110C\u116E\u11BC",
    "\u1109\u1175\u110C\u1173\u11AB",
    "\u1109\u1175\u110C\u1175\u11B8",
    "\u1109\u1175\u110E\u1165\u11BC",
    "\u1109\u1175\u1112\u1161\u11B8",
    "\u1109\u1175\u1112\u1165\u11B7",
    "\u1109\u1175\u11A8\u1100\u116E",
    "\u1109\u1175\u11A8\u1100\u1175",
    "\u1109\u1175\u11A8\u1103\u1161\u11BC",
    "\u1109\u1175\u11A8\u1105\u1163\u11BC",
    "\u1109\u1175\u11A8\u1105\u116D\u1111\u116E\u11B7",
    "\u1109\u1175\u11A8\u1106\u116E\u11AF",
    "\u1109\u1175\u11A8\u1108\u1161\u11BC",
    "\u1109\u1175\u11A8\u1109\u1161",
    "\u1109\u1175\u11A8\u1109\u1162\u11BC\u1112\u116A\u11AF",
    "\u1109\u1175\u11A8\u110E\u1169",
    "\u1109\u1175\u11A8\u1110\u1161\u11A8",
    "\u1109\u1175\u11A8\u1111\u116E\u11B7",
    "\u1109\u1175\u11AB\u1100\u1169",
    "\u1109\u1175\u11AB\u1100\u1172",
    "\u1109\u1175\u11AB\u1102\u1167\u11B7",
    "\u1109\u1175\u11AB\u1106\u116E\u11AB",
    "\u1109\u1175\u11AB\u1107\u1161\u11AF",
    "\u1109\u1175\u11AB\u1107\u1175",
    "\u1109\u1175\u11AB\u1109\u1161",
    "\u1109\u1175\u11AB\u1109\u1166",
    "\u1109\u1175\u11AB\u110B\u116D\u11BC",
    "\u1109\u1175\u11AB\u110C\u1166\u1111\u116E\u11B7",
    "\u1109\u1175\u11AB\u110E\u1165\u11BC",
    "\u1109\u1175\u11AB\u110E\u1166",
    "\u1109\u1175\u11AB\u1112\u116A",
    "\u1109\u1175\u11AF\u1100\u1161\u11B7",
    "\u1109\u1175\u11AF\u1102\u1162",
    "\u1109\u1175\u11AF\u1105\u1167\u11A8",
    "\u1109\u1175\u11AF\u1105\u1168",
    "\u1109\u1175\u11AF\u1106\u1161\u11BC",
    "\u1109\u1175\u11AF\u1109\u116E",
    "\u1109\u1175\u11AF\u1109\u1173\u11B8",
    "\u1109\u1175\u11AF\u1109\u1175",
    "\u1109\u1175\u11AF\u110C\u1161\u11BC",
    "\u1109\u1175\u11AF\u110C\u1165\u11BC",
    "\u1109\u1175\u11AF\u110C\u1175\u11AF\u110C\u1165\u11A8",
    "\u1109\u1175\u11AF\u110E\u1165\u11AB",
    "\u1109\u1175\u11AF\u110E\u1166",
    "\u1109\u1175\u11AF\u110F\u1165\u11BA",
    "\u1109\u1175\u11AF\u1110\u1162",
    "\u1109\u1175\u11AF\u1111\u1162",
    "\u1109\u1175\u11AF\u1112\u1165\u11B7",
    "\u1109\u1175\u11AF\u1112\u1167\u11AB",
    "\u1109\u1175\u11B7\u1105\u1175",
    "\u1109\u1175\u11B7\u1107\u116E\u1105\u1173\u11B7",
    "\u1109\u1175\u11B7\u1109\u1161",
    "\u1109\u1175\u11B7\u110C\u1161\u11BC",
    "\u1109\u1175\u11B7\u110C\u1165\u11BC",
    "\u1109\u1175\u11B7\u1111\u1161\u11AB",
    "\u110A\u1161\u11BC\u1103\u116E\u11BC\u110B\u1175",
    "\u110A\u1175\u1105\u1173\u11B7",
    "\u110A\u1175\u110B\u1161\u11BA",
    "\u110B\u1161\u1100\u1161\u110A\u1175",
    "\u110B\u1161\u1102\u1161\u110B\u116E\u11AB\u1109\u1165",
    "\u110B\u1161\u1103\u1173\u1102\u1175\u11B7",
    "\u110B\u1161\u1103\u1173\u11AF",
    "\u110B\u1161\u1109\u1171\u110B\u116E\u11B7",
    "\u110B\u1161\u1109\u1173\u1111\u1161\u11AF\u1110\u1173",
    "\u110B\u1161\u1109\u1175\u110B\u1161",
    "\u110B\u1161\u110B\u116E\u11AF\u1105\u1165",
    "\u110B\u1161\u110C\u1165\u110A\u1175",
    "\u110B\u1161\u110C\u116E\u11B7\u1106\u1161",
    "\u110B\u1161\u110C\u1175\u11A8",
    "\u110B\u1161\u110E\u1175\u11B7",
    "\u110B\u1161\u1111\u1161\u1110\u1173",
    "\u110B\u1161\u1111\u1173\u1105\u1175\u110F\u1161",
    "\u110B\u1161\u1111\u1173\u11B7",
    "\u110B\u1161\u1112\u1169\u11B8",
    "\u110B\u1161\u1112\u1173\u11AB",
    "\u110B\u1161\u11A8\u1100\u1175",
    "\u110B\u1161\u11A8\u1106\u1169\u11BC",
    "\u110B\u1161\u11A8\u1109\u116E",
    "\u110B\u1161\u11AB\u1100\u1162",
    "\u110B\u1161\u11AB\u1100\u1167\u11BC",
    "\u110B\u1161\u11AB\u1100\u116A",
    "\u110B\u1161\u11AB\u1102\u1162",
    "\u110B\u1161\u11AB\u1102\u1167\u11BC",
    "\u110B\u1161\u11AB\u1103\u1169\u11BC",
    "\u110B\u1161\u11AB\u1107\u1161\u11BC",
    "\u110B\u1161\u11AB\u1107\u116E",
    "\u110B\u1161\u11AB\u110C\u116E",
    "\u110B\u1161\u11AF\u1105\u116E\u1106\u1175\u1102\u1172\u11B7",
    "\u110B\u1161\u11AF\u110F\u1169\u110B\u1169\u11AF",
    "\u110B\u1161\u11B7\u1109\u1175",
    "\u110B\u1161\u11B7\u110F\u1165\u11BA",
    "\u110B\u1161\u11B8\u1105\u1167\u11A8",
    "\u110B\u1161\u11C1\u1102\u1161\u11AF",
    "\u110B\u1161\u11C1\u1106\u116E\u11AB",
    "\u110B\u1162\u110B\u1175\u11AB",
    "\u110B\u1162\u110C\u1165\u11BC",
    "\u110B\u1162\u11A8\u1109\u116E",
    "\u110B\u1162\u11AF\u1107\u1165\u11B7",
    "\u110B\u1163\u1100\u1161\u11AB",
    "\u110B\u1163\u1103\u1161\u11AB",
    "\u110B\u1163\u110B\u1169\u11BC",
    "\u110B\u1163\u11A8\u1100\u1161\u11AB",
    "\u110B\u1163\u11A8\u1100\u116E\u11A8",
    "\u110B\u1163\u11A8\u1109\u1169\u11A8",
    "\u110B\u1163\u11A8\u1109\u116E",
    "\u110B\u1163\u11A8\u110C\u1165\u11B7",
    "\u110B\u1163\u11A8\u1111\u116E\u11B7",
    "\u110B\u1163\u11A8\u1112\u1169\u11AB\u1102\u1167",
    "\u110B\u1163\u11BC\u1102\u1167\u11B7",
    "\u110B\u1163\u11BC\u1105\u1167\u11A8",
    "\u110B\u1163\u11BC\u1106\u1161\u11AF",
    "\u110B\u1163\u11BC\u1107\u1162\u110E\u116E",
    "\u110B\u1163\u11BC\u110C\u116E",
    "\u110B\u1163\u11BC\u1111\u1161",
    "\u110B\u1165\u1103\u116E\u11B7",
    "\u110B\u1165\u1105\u1167\u110B\u116E\u11B7",
    "\u110B\u1165\u1105\u1173\u11AB",
    "\u110B\u1165\u110C\u1166\u11BA\u1107\u1161\u11B7",
    "\u110B\u1165\u110D\u1162\u11BB\u1103\u1173\u11AB",
    "\u110B\u1165\u110D\u1165\u1103\u1161\u1100\u1161",
    "\u110B\u1165\u110D\u1165\u11AB\u110C\u1175",
    "\u110B\u1165\u11AB\u1102\u1175",
    "\u110B\u1165\u11AB\u1103\u1165\u11A8",
    "\u110B\u1165\u11AB\u1105\u1169\u11AB",
    "\u110B\u1165\u11AB\u110B\u1165",
    "\u110B\u1165\u11AF\u1100\u116E\u11AF",
    "\u110B\u1165\u11AF\u1105\u1173\u11AB",
    "\u110B\u1165\u11AF\u110B\u1173\u11B7",
    "\u110B\u1165\u11AF\u1111\u1175\u11BA",
    "\u110B\u1165\u11B7\u1106\u1161",
    "\u110B\u1165\u11B8\u1106\u116E",
    "\u110B\u1165\u11B8\u110C\u1169\u11BC",
    "\u110B\u1165\u11B8\u110E\u1166",
    "\u110B\u1165\u11BC\u1103\u1165\u11BC\u110B\u1175",
    "\u110B\u1165\u11BC\u1106\u1161\u11BC",
    "\u110B\u1165\u11BC\u1110\u1165\u1105\u1175",
    "\u110B\u1165\u11BD\u1100\u1173\u110C\u1166",
    "\u110B\u1166\u1102\u1165\u110C\u1175",
    "\u110B\u1166\u110B\u1165\u110F\u1165\u11AB",
    "\u110B\u1166\u11AB\u110C\u1175\u11AB",
    "\u110B\u1167\u1100\u1165\u11AB",
    "\u110B\u1167\u1100\u1169\u1109\u1162\u11BC",
    "\u110B\u1167\u1100\u116A\u11AB",
    "\u110B\u1167\u1100\u116E\u11AB",
    "\u110B\u1167\u1100\u116F\u11AB",
    "\u110B\u1167\u1103\u1162\u1109\u1162\u11BC",
    "\u110B\u1167\u1103\u1165\u11B2",
    "\u110B\u1167\u1103\u1169\u11BC\u1109\u1162\u11BC",
    "\u110B\u1167\u1103\u1173\u11AB",
    "\u110B\u1167\u1105\u1169\u11AB",
    "\u110B\u1167\u1105\u1173\u11B7",
    "\u110B\u1167\u1109\u1165\u11BA",
    "\u110B\u1167\u1109\u1165\u11BC",
    "\u110B\u1167\u110B\u116A\u11BC",
    "\u110B\u1167\u110B\u1175\u11AB",
    "\u110B\u1167\u110C\u1165\u11AB\u1112\u1175",
    "\u110B\u1167\u110C\u1175\u11A8\u110B\u116F\u11AB",
    "\u110B\u1167\u1112\u1161\u11A8\u1109\u1162\u11BC",
    "\u110B\u1167\u1112\u1162\u11BC",
    "\u110B\u1167\u11A8\u1109\u1161",
    "\u110B\u1167\u11A8\u1109\u1175",
    "\u110B\u1167\u11A8\u1112\u1161\u11AF",
    "\u110B\u1167\u11AB\u1100\u1167\u11AF",
    "\u110B\u1167\u11AB\u1100\u116E",
    "\u110B\u1167\u11AB\u1100\u1173\u11A8",
    "\u110B\u1167\u11AB\u1100\u1175",
    "\u110B\u1167\u11AB\u1105\u1161\u11A8",
    "\u110B\u1167\u11AB\u1109\u1165\u11AF",
    "\u110B\u1167\u11AB\u1109\u1166",
    "\u110B\u1167\u11AB\u1109\u1169\u11A8",
    "\u110B\u1167\u11AB\u1109\u1173\u11B8",
    "\u110B\u1167\u11AB\u110B\u1162",
    "\u110B\u1167\u11AB\u110B\u1168\u110B\u1175\u11AB",
    "\u110B\u1167\u11AB\u110B\u1175\u11AB",
    "\u110B\u1167\u11AB\u110C\u1161\u11BC",
    "\u110B\u1167\u11AB\u110C\u116E",
    "\u110B\u1167\u11AB\u110E\u116E\u11AF",
    "\u110B\u1167\u11AB\u1111\u1175\u11AF",
    "\u110B\u1167\u11AB\u1112\u1161\u11B8",
    "\u110B\u1167\u11AB\u1112\u1172",
    "\u110B\u1167\u11AF\u1100\u1175",
    "\u110B\u1167\u11AF\u1106\u1162",
    "\u110B\u1167\u11AF\u1109\u116C",
    "\u110B\u1167\u11AF\u1109\u1175\u11B7\u1112\u1175",
    "\u110B\u1167\u11AF\u110C\u1165\u11BC",
    "\u110B\u1167\u11AF\u110E\u1161",
    "\u110B\u1167\u11AF\u1112\u1173\u11AF",
    "\u110B\u1167\u11B7\u1105\u1167",
    "\u110B\u1167\u11B8\u1109\u1165",
    "\u110B\u1167\u11BC\u1100\u116E\u11A8",
    "\u110B\u1167\u11BC\u1102\u1161\u11B7",
    "\u110B\u1167\u11BC\u1109\u1161\u11BC",
    "\u110B\u1167\u11BC\u110B\u1163\u11BC",
    "\u110B\u1167\u11BC\u110B\u1167\u11A8",
    "\u110B\u1167\u11BC\u110B\u116E\u11BC",
    "\u110B\u1167\u11BC\u110B\u116F\u11AB\u1112\u1175",
    "\u110B\u1167\u11BC\u1112\u1161",
    "\u110B\u1167\u11BC\u1112\u1163\u11BC",
    "\u110B\u1167\u11BC\u1112\u1169\u11AB",
    "\u110B\u1167\u11BC\u1112\u116A",
    "\u110B\u1167\u11C1\u1100\u116E\u1105\u1175",
    "\u110B\u1167\u11C1\u1107\u1161\u11BC",
    "\u110B\u1167\u11C1\u110C\u1175\u11B8",
    "\u110B\u1168\u1100\u1161\u11B7",
    "\u110B\u1168\u1100\u1173\u11B7",
    "\u110B\u1168\u1107\u1161\u11BC",
    "\u110B\u1168\u1109\u1161\u11AB",
    "\u110B\u1168\u1109\u1161\u11BC",
    "\u110B\u1168\u1109\u1165\u11AB",
    "\u110B\u1168\u1109\u116E\u11AF",
    "\u110B\u1168\u1109\u1173\u11B8",
    "\u110B\u1168\u1109\u1175\u11A8\u110C\u1161\u11BC",
    "\u110B\u1168\u110B\u1163\u11A8",
    "\u110B\u1168\u110C\u1165\u11AB",
    "\u110B\u1168\u110C\u1165\u11AF",
    "\u110B\u1168\u110C\u1165\u11BC",
    "\u110B\u1168\u110F\u1165\u11AB\u1103\u1162",
    "\u110B\u1168\u11BA\u1102\u1161\u11AF",
    "\u110B\u1169\u1102\u1173\u11AF",
    "\u110B\u1169\u1105\u1161\u11A8",
    "\u110B\u1169\u1105\u1162\u11BA\u1103\u1169\u11BC\u110B\u1161\u11AB",
    "\u110B\u1169\u1105\u1166\u11AB\u110C\u1175",
    "\u110B\u1169\u1105\u1169\u110C\u1175",
    "\u110B\u1169\u1105\u1173\u11AB\u1107\u1161\u11AF",
    "\u110B\u1169\u1107\u1173\u11AB",
    "\u110B\u1169\u1109\u1175\u11B8",
    "\u110B\u1169\u110B\u1167\u11B7",
    "\u110B\u1169\u110B\u116F\u11AF",
    "\u110B\u1169\u110C\u1165\u11AB",
    "\u110B\u1169\u110C\u1175\u11A8",
    "\u110B\u1169\u110C\u1175\u11BC\u110B\u1165",
    "\u110B\u1169\u1111\u1166\u1105\u1161",
    "\u110B\u1169\u1111\u1175\u1109\u1173\u1110\u1166\u11AF",
    "\u110B\u1169\u1112\u1175\u1105\u1167",
    "\u110B\u1169\u11A8\u1109\u1161\u11BC",
    "\u110B\u1169\u11A8\u1109\u116E\u1109\u116E",
    "\u110B\u1169\u11AB\u1100\u1161\u11BD",
    "\u110B\u1169\u11AB\u1105\u1161\u110B\u1175\u11AB",
    "\u110B\u1169\u11AB\u1106\u1169\u11B7",
    "\u110B\u1169\u11AB\u110C\u1169\u11BC\u110B\u1175\u11AF",
    "\u110B\u1169\u11AB\u1110\u1169\u11BC",
    "\u110B\u1169\u11AF\u1100\u1161\u110B\u1173\u11AF",
    "\u110B\u1169\u11AF\u1105\u1175\u11B7\u1111\u1175\u11A8",
    "\u110B\u1169\u11AF\u1112\u1162",
    "\u110B\u1169\u11BA\u110E\u1161\u1105\u1175\u11B7",
    "\u110B\u116A\u110B\u1175\u1109\u1167\u110E\u1173",
    "\u110B\u116A\u110B\u1175\u11AB",
    "\u110B\u116A\u11AB\u1109\u1165\u11BC",
    "\u110B\u116A\u11AB\u110C\u1165\u11AB",
    "\u110B\u116A\u11BC\u1107\u1175",
    "\u110B\u116A\u11BC\u110C\u1161",
    "\u110B\u116B\u1102\u1163\u1112\u1161\u1106\u1167\u11AB",
    "\u110B\u116B\u11AB\u110C\u1175",
    "\u110B\u116C\u1100\u1161\u11BA\u110C\u1175\u11B8",
    "\u110B\u116C\u1100\u116E\u11A8",
    "\u110B\u116C\u1105\u1169\u110B\u116E\u11B7",
    "\u110B\u116C\u1109\u1161\u11B7\u110E\u1169\u11AB",
    "\u110B\u116C\u110E\u116E\u11AF",
    "\u110B\u116C\u110E\u1175\u11B7",
    "\u110B\u116C\u1112\u1161\u11AF\u1106\u1165\u1102\u1175",
    "\u110B\u116C\u11AB\u1107\u1161\u11AF",
    "\u110B\u116C\u11AB\u1109\u1169\u11AB",
    "\u110B\u116C\u11AB\u110D\u1169\u11A8",
    "\u110B\u116D\u1100\u1173\u11B7",
    "\u110B\u116D\u110B\u1175\u11AF",
    "\u110B\u116D\u110C\u1173\u11B7",
    "\u110B\u116D\u110E\u1165\u11BC",
    "\u110B\u116D\u11BC\u1100\u1175",
    "\u110B\u116D\u11BC\u1109\u1165",
    "\u110B\u116D\u11BC\u110B\u1165",
    "\u110B\u116E\u1109\u1161\u11AB",
    "\u110B\u116E\u1109\u1165\u11AB",
    "\u110B\u116E\u1109\u1173\u11BC",
    "\u110B\u116E\u110B\u1167\u11AB\u1112\u1175",
    "\u110B\u116E\u110C\u1165\u11BC",
    "\u110B\u116E\u110E\u1166\u1100\u116E\u11A8",
    "\u110B\u116E\u1111\u1167\u11AB",
    "\u110B\u116E\u11AB\u1103\u1169\u11BC",
    "\u110B\u116E\u11AB\u1106\u1167\u11BC",
    "\u110B\u116E\u11AB\u1107\u1161\u11AB",
    "\u110B\u116E\u11AB\u110C\u1165\u11AB",
    "\u110B\u116E\u11AB\u1112\u1162\u11BC",
    "\u110B\u116E\u11AF\u1109\u1161\u11AB",
    "\u110B\u116E\u11AF\u110B\u1173\u11B7",
    "\u110B\u116E\u11B7\u110C\u1175\u11A8\u110B\u1175\u11B7",
    "\u110B\u116E\u11BA\u110B\u1165\u1105\u1173\u11AB",
    "\u110B\u116E\u11BA\u110B\u1173\u11B7",
    "\u110B\u116F\u1102\u1161\u11A8",
    "\u110B\u116F\u11AB\u1100\u1169",
    "\u110B\u116F\u11AB\u1105\u1162",
    "\u110B\u116F\u11AB\u1109\u1165",
    "\u110B\u116F\u11AB\u1109\u116E\u11BC\u110B\u1175",
    "\u110B\u116F\u11AB\u110B\u1175\u11AB",
    "\u110B\u116F\u11AB\u110C\u1161\u11BC",
    "\u110B\u116F\u11AB\u1111\u1175\u1109\u1173",
    "\u110B\u116F\u11AF\u1100\u1173\u11B8",
    "\u110B\u116F\u11AF\u1103\u1173\u110F\u1165\u11B8",
    "\u110B\u116F\u11AF\u1109\u1166",
    "\u110B\u116F\u11AF\u110B\u116D\u110B\u1175\u11AF",
    "\u110B\u1170\u110B\u1175\u1110\u1165",
    "\u110B\u1171\u1107\u1161\u11AB",
    "\u110B\u1171\u1107\u1165\u11B8",
    "\u110B\u1171\u1109\u1165\u11BC",
    "\u110B\u1171\u110B\u116F\u11AB",
    "\u110B\u1171\u1112\u1165\u11B7",
    "\u110B\u1171\u1112\u1167\u11B8",
    "\u110B\u1171\u11BA\u1109\u1161\u1105\u1161\u11B7",
    "\u110B\u1172\u1102\u1161\u11AB\u1112\u1175",
    "\u110B\u1172\u1105\u1165\u11B8",
    "\u110B\u1172\u1106\u1167\u11BC",
    "\u110B\u1172\u1106\u116E\u11AF",
    "\u110B\u1172\u1109\u1161\u11AB",
    "\u110B\u1172\u110C\u1165\u11A8",
    "\u110B\u1172\u110E\u1175\u110B\u116F\u11AB",
    "\u110B\u1172\u1112\u1161\u11A8",
    "\u110B\u1172\u1112\u1162\u11BC",
    "\u110B\u1172\u1112\u1167\u11BC",
    "\u110B\u1172\u11A8\u1100\u116E\u11AB",
    "\u110B\u1172\u11A8\u1109\u1161\u11BC",
    "\u110B\u1172\u11A8\u1109\u1175\u11B8",
    "\u110B\u1172\u11A8\u110E\u1166",
    "\u110B\u1173\u11AB\u1112\u1162\u11BC",
    "\u110B\u1173\u11B7\u1105\u1167\u11A8",
    "\u110B\u1173\u11B7\u1105\u116D",
    "\u110B\u1173\u11B7\u1107\u1161\u11AB",
    "\u110B\u1173\u11B7\u1109\u1165\u11BC",
    "\u110B\u1173\u11B7\u1109\u1175\u11A8",
    "\u110B\u1173\u11B7\u110B\u1161\u11A8",
    "\u110B\u1173\u11B7\u110C\u116E",
    "\u110B\u1174\u1100\u1167\u11AB",
    "\u110B\u1174\u1102\u1169\u11AB",
    "\u110B\u1174\u1106\u116E\u11AB",
    "\u110B\u1174\u1107\u1169\u11A8",
    "\u110B\u1174\u1109\u1175\u11A8",
    "\u110B\u1174\u1109\u1175\u11B7",
    "\u110B\u1174\u110B\u116C\u1105\u1169",
    "\u110B\u1174\u110B\u116D\u11A8",
    "\u110B\u1174\u110B\u116F\u11AB",
    "\u110B\u1174\u1112\u1161\u11A8",
    "\u110B\u1175\u1100\u1165\u11BA",
    "\u110B\u1175\u1100\u1169\u11BA",
    "\u110B\u1175\u1102\u1167\u11B7",
    "\u110B\u1175\u1102\u1169\u11B7",
    "\u110B\u1175\u1103\u1161\u11AF",
    "\u110B\u1175\u1103\u1162\u1105\u1169",
    "\u110B\u1175\u1103\u1169\u11BC",
    "\u110B\u1175\u1105\u1165\u11C2\u1100\u1166",
    "\u110B\u1175\u1105\u1167\u11A8\u1109\u1165",
    "\u110B\u1175\u1105\u1169\u11AB\u110C\u1165\u11A8",
    "\u110B\u1175\u1105\u1173\u11B7",
    "\u110B\u1175\u1106\u1175\u11AB",
    "\u110B\u1175\u1107\u1161\u11AF\u1109\u1169",
    "\u110B\u1175\u1107\u1167\u11AF",
    "\u110B\u1175\u1107\u116E\u11AF",
    "\u110B\u1175\u1108\u1161\u11AF",
    "\u110B\u1175\u1109\u1161\u11BC",
    "\u110B\u1175\u1109\u1165\u11BC",
    "\u110B\u1175\u1109\u1173\u11AF",
    "\u110B\u1175\u110B\u1163\u1100\u1175",
    "\u110B\u1175\u110B\u116D\u11BC",
    "\u110B\u1175\u110B\u116E\u11BA",
    "\u110B\u1175\u110B\u116F\u11AF",
    "\u110B\u1175\u110B\u1173\u11A8\u1100\u1169",
    "\u110B\u1175\u110B\u1175\u11A8",
    "\u110B\u1175\u110C\u1165\u11AB",
    "\u110B\u1175\u110C\u116E\u11BC",
    "\u110B\u1175\u1110\u1173\u11AE\u1102\u1161\u11AF",
    "\u110B\u1175\u1110\u1173\u11AF",
    "\u110B\u1175\u1112\u1169\u11AB",
    "\u110B\u1175\u11AB\u1100\u1161\u11AB",
    "\u110B\u1175\u11AB\u1100\u1167\u11A8",
    "\u110B\u1175\u11AB\u1100\u1169\u11BC",
    "\u110B\u1175\u11AB\u1100\u116E",
    "\u110B\u1175\u11AB\u1100\u1173\u11AB",
    "\u110B\u1175\u11AB\u1100\u1175",
    "\u110B\u1175\u11AB\u1103\u1169",
    "\u110B\u1175\u11AB\u1105\u1172",
    "\u110B\u1175\u11AB\u1106\u116E\u11AF",
    "\u110B\u1175\u11AB\u1109\u1162\u11BC",
    "\u110B\u1175\u11AB\u1109\u116B",
    "\u110B\u1175\u11AB\u110B\u1167\u11AB",
    "\u110B\u1175\u11AB\u110B\u116F\u11AB",
    "\u110B\u1175\u11AB\u110C\u1162",
    "\u110B\u1175\u11AB\u110C\u1169\u11BC",
    "\u110B\u1175\u11AB\u110E\u1165\u11AB",
    "\u110B\u1175\u11AB\u110E\u1166",
    "\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA",
    "\u110B\u1175\u11AB\u1112\u1161",
    "\u110B\u1175\u11AB\u1112\u1167\u11BC",
    "\u110B\u1175\u11AF\u1100\u1169\u11B8",
    "\u110B\u1175\u11AF\u1100\u1175",
    "\u110B\u1175\u11AF\u1103\u1161\u11AB",
    "\u110B\u1175\u11AF\u1103\u1162",
    "\u110B\u1175\u11AF\u1103\u1173\u11BC",
    "\u110B\u1175\u11AF\u1107\u1161\u11AB",
    "\u110B\u1175\u11AF\u1107\u1169\u11AB",
    "\u110B\u1175\u11AF\u1107\u116E",
    "\u110B\u1175\u11AF\u1109\u1161\u11BC",
    "\u110B\u1175\u11AF\u1109\u1162\u11BC",
    "\u110B\u1175\u11AF\u1109\u1169\u11AB",
    "\u110B\u1175\u11AF\u110B\u116D\u110B\u1175\u11AF",
    "\u110B\u1175\u11AF\u110B\u116F\u11AF",
    "\u110B\u1175\u11AF\u110C\u1165\u11BC",
    "\u110B\u1175\u11AF\u110C\u1169\u11BC",
    "\u110B\u1175\u11AF\u110C\u116E\u110B\u1175\u11AF",
    "\u110B\u1175\u11AF\u110D\u1175\u11A8",
    "\u110B\u1175\u11AF\u110E\u1166",
    "\u110B\u1175\u11AF\u110E\u1175",
    "\u110B\u1175\u11AF\u1112\u1162\u11BC",
    "\u110B\u1175\u11AF\u1112\u116C\u110B\u116D\u11BC",
    "\u110B\u1175\u11B7\u1100\u1173\u11B7",
    "\u110B\u1175\u11B7\u1106\u116E",
    "\u110B\u1175\u11B8\u1103\u1162",
    "\u110B\u1175\u11B8\u1105\u1167\u11A8",
    "\u110B\u1175\u11B8\u1106\u1161\u11BA",
    "\u110B\u1175\u11B8\u1109\u1161",
    "\u110B\u1175\u11B8\u1109\u116E\u11AF",
    "\u110B\u1175\u11B8\u1109\u1175",
    "\u110B\u1175\u11B8\u110B\u116F\u11AB",
    "\u110B\u1175\u11B8\u110C\u1161\u11BC",
    "\u110B\u1175\u11B8\u1112\u1161\u11A8",
    "\u110C\u1161\u1100\u1161\u110B\u116D\u11BC",
    "\u110C\u1161\u1100\u1167\u11A8",
    "\u110C\u1161\u1100\u1173\u11A8",
    "\u110C\u1161\u1103\u1169\u11BC",
    "\u110C\u1161\u1105\u1161\u11BC",
    "\u110C\u1161\u1107\u116E\u1109\u1175\u11B7",
    "\u110C\u1161\u1109\u1175\u11A8",
    "\u110C\u1161\u1109\u1175\u11AB",
    "\u110C\u1161\u110B\u1167\u11AB",
    "\u110C\u1161\u110B\u116F\u11AB",
    "\u110C\u1161\u110B\u1172\u11AF",
    "\u110C\u1161\u110C\u1165\u11AB\u1100\u1165",
    "\u110C\u1161\u110C\u1165\u11BC",
    "\u110C\u1161\u110C\u1169\u11AB\u1109\u1175\u11B7",
    "\u110C\u1161\u1111\u1161\u11AB",
    "\u110C\u1161\u11A8\u1100\u1161",
    "\u110C\u1161\u11A8\u1102\u1167\u11AB",
    "\u110C\u1161\u11A8\u1109\u1165\u11BC",
    "\u110C\u1161\u11A8\u110B\u1165\u11B8",
    "\u110C\u1161\u11A8\u110B\u116D\u11BC",
    "\u110C\u1161\u11A8\u110B\u1173\u11AB\u1104\u1161\u11AF",
    "\u110C\u1161\u11A8\u1111\u116E\u11B7",
    "\u110C\u1161\u11AB\u1103\u1175",
    "\u110C\u1161\u11AB\u1104\u1173\u11A8",
    "\u110C\u1161\u11AB\u110E\u1175",
    "\u110C\u1161\u11AF\u1106\u1169\u11BA",
    "\u110C\u1161\u11B7\u1101\u1161\u11AB",
    "\u110C\u1161\u11B7\u1109\u116E\u1112\u1161\u11B7",
    "\u110C\u1161\u11B7\u1109\u1175",
    "\u110C\u1161\u11B7\u110B\u1169\u11BA",
    "\u110C\u1161\u11B7\u110C\u1161\u1105\u1175",
    "\u110C\u1161\u11B8\u110C\u1175",
    "\u110C\u1161\u11BC\u1100\u116A\u11AB",
    "\u110C\u1161\u11BC\u1100\u116E\u11AB",
    "\u110C\u1161\u11BC\u1100\u1175\u1100\u1161\u11AB",
    "\u110C\u1161\u11BC\u1105\u1162",
    "\u110C\u1161\u11BC\u1105\u1168",
    "\u110C\u1161\u11BC\u1105\u1173",
    "\u110C\u1161\u11BC\u1106\u1161",
    "\u110C\u1161\u11BC\u1106\u1167\u11AB",
    "\u110C\u1161\u11BC\u1106\u1169",
    "\u110C\u1161\u11BC\u1106\u1175",
    "\u110C\u1161\u11BC\u1107\u1175",
    "\u110C\u1161\u11BC\u1109\u1161",
    "\u110C\u1161\u11BC\u1109\u1169",
    "\u110C\u1161\u11BC\u1109\u1175\u11A8",
    "\u110C\u1161\u11BC\u110B\u1162\u110B\u1175\u11AB",
    "\u110C\u1161\u11BC\u110B\u1175\u11AB",
    "\u110C\u1161\u11BC\u110C\u1165\u11B7",
    "\u110C\u1161\u11BC\u110E\u1161",
    "\u110C\u1161\u11BC\u1112\u1161\u11A8\u1100\u1173\u11B7",
    "\u110C\u1162\u1102\u1173\u11BC",
    "\u110C\u1162\u1108\u1161\u11AF\u1105\u1175",
    "\u110C\u1162\u1109\u1161\u11AB",
    "\u110C\u1162\u1109\u1162\u11BC",
    "\u110C\u1162\u110C\u1161\u11A8\u1102\u1167\u11AB",
    "\u110C\u1162\u110C\u1165\u11BC",
    "\u110C\u1162\u110E\u1162\u1100\u1175",
    "\u110C\u1162\u1111\u1161\u11AB",
    "\u110C\u1162\u1112\u1161\u11A8",
    "\u110C\u1162\u1112\u116A\u11AF\u110B\u116D\u11BC",
    "\u110C\u1165\u1100\u1165\u11BA",
    "\u110C\u1165\u1100\u1169\u1105\u1175",
    "\u110C\u1165\u1100\u1169\u11BA",
    "\u110C\u1165\u1102\u1167\u11A8",
    "\u110C\u1165\u1105\u1165\u11AB",
    "\u110C\u1165\u1105\u1165\u11C2\u1100\u1166",
    "\u110C\u1165\u1107\u1165\u11AB",
    "\u110C\u1165\u110B\u116E\u11AF",
    "\u110C\u1165\u110C\u1165\u11AF\u1105\u1169",
    "\u110C\u1165\u110E\u116E\u11A8",
    "\u110C\u1165\u11A8\u1100\u1173\u11A8",
    "\u110C\u1165\u11A8\u1103\u1161\u11BC\u1112\u1175",
    "\u110C\u1165\u11A8\u1109\u1165\u11BC",
    "\u110C\u1165\u11A8\u110B\u116D\u11BC",
    "\u110C\u1165\u11A8\u110B\u1173\u11BC",
    "\u110C\u1165\u11AB\u1100\u1162",
    "\u110C\u1165\u11AB\u1100\u1169\u11BC",
    "\u110C\u1165\u11AB\u1100\u1175",
    "\u110C\u1165\u11AB\u1103\u1161\u11AF",
    "\u110C\u1165\u11AB\u1105\u1161\u1103\u1169",
    "\u110C\u1165\u11AB\u1106\u1161\u11BC",
    "\u110C\u1165\u11AB\u1106\u116E\u11AB",
    "\u110C\u1165\u11AB\u1107\u1161\u11AB",
    "\u110C\u1165\u11AB\u1107\u116E",
    "\u110C\u1165\u11AB\u1109\u1166",
    "\u110C\u1165\u11AB\u1109\u1175",
    "\u110C\u1165\u11AB\u110B\u116D\u11BC",
    "\u110C\u1165\u11AB\u110C\u1161",
    "\u110C\u1165\u11AB\u110C\u1162\u11BC",
    "\u110C\u1165\u11AB\u110C\u116E",
    "\u110C\u1165\u11AB\u110E\u1165\u11AF",
    "\u110C\u1165\u11AB\u110E\u1166",
    "\u110C\u1165\u11AB\u1110\u1169\u11BC",
    "\u110C\u1165\u11AB\u1112\u1167",
    "\u110C\u1165\u11AB\u1112\u116E",
    "\u110C\u1165\u11AF\u1103\u1162",
    "\u110C\u1165\u11AF\u1106\u1161\u11BC",
    "\u110C\u1165\u11AF\u1107\u1161\u11AB",
    "\u110C\u1165\u11AF\u110B\u1163\u11A8",
    "\u110C\u1165\u11AF\u110E\u1161",
    "\u110C\u1165\u11B7\u1100\u1165\u11B7",
    "\u110C\u1165\u11B7\u1109\u116E",
    "\u110C\u1165\u11B7\u1109\u1175\u11B7",
    "\u110C\u1165\u11B7\u110B\u116F\u11AB",
    "\u110C\u1165\u11B7\u110C\u1165\u11B7",
    "\u110C\u1165\u11B7\u110E\u1161",
    "\u110C\u1165\u11B8\u1100\u1173\u11AB",
    "\u110C\u1165\u11B8\u1109\u1175",
    "\u110C\u1165\u11B8\u110E\u1169\u11A8",
    "\u110C\u1165\u11BA\u1100\u1161\u1105\u1161\u11A8",
    "\u110C\u1165\u11BC\u1100\u1165\u110C\u1161\u11BC",
    "\u110C\u1165\u11BC\u1103\u1169",
    "\u110C\u1165\u11BC\u1105\u1172\u110C\u1161\u11BC",
    "\u110C\u1165\u11BC\u1105\u1175",
    "\u110C\u1165\u11BC\u1106\u1161\u11AF",
    "\u110C\u1165\u11BC\u1106\u1167\u11AB",
    "\u110C\u1165\u11BC\u1106\u116E\u11AB",
    "\u110C\u1165\u11BC\u1107\u1161\u11AB\u1103\u1162",
    "\u110C\u1165\u11BC\u1107\u1169",
    "\u110C\u1165\u11BC\u1107\u116E",
    "\u110C\u1165\u11BC\u1107\u1175",
    "\u110C\u1165\u11BC\u1109\u1161\u11BC",
    "\u110C\u1165\u11BC\u1109\u1165\u11BC",
    "\u110C\u1165\u11BC\u110B\u1169",
    "\u110C\u1165\u11BC\u110B\u116F\u11AB",
    "\u110C\u1165\u11BC\u110C\u1161\u11BC",
    "\u110C\u1165\u11BC\u110C\u1175",
    "\u110C\u1165\u11BC\u110E\u1175",
    "\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1175",
    "\u110C\u1166\u1100\u1169\u11BC",
    "\u110C\u1166\u1100\u116A\u110C\u1165\u11B7",
    "\u110C\u1166\u1103\u1162\u1105\u1169",
    "\u110C\u1166\u1106\u1169\u11A8",
    "\u110C\u1166\u1107\u1161\u11AF",
    "\u110C\u1166\u1107\u1165\u11B8",
    "\u110C\u1166\u1109\u1161\u11BA\u1102\u1161\u11AF",
    "\u110C\u1166\u110B\u1161\u11AB",
    "\u110C\u1166\u110B\u1175\u11AF",
    "\u110C\u1166\u110C\u1161\u11A8",
    "\u110C\u1166\u110C\u116E\u1103\u1169",
    "\u110C\u1166\u110E\u116E\u11AF",
    "\u110C\u1166\u1111\u116E\u11B7",
    "\u110C\u1166\u1112\u1161\u11AB",
    "\u110C\u1169\u1100\u1161\u11A8",
    "\u110C\u1169\u1100\u1165\u11AB",
    "\u110C\u1169\u1100\u1173\u11B7",
    "\u110C\u1169\u1100\u1175\u11BC",
    "\u110C\u1169\u1106\u1167\u11BC",
    "\u110C\u1169\u1106\u1175\u1105\u116D",
    "\u110C\u1169\u1109\u1161\u11BC",
    "\u110C\u1169\u1109\u1165\u11AB",
    "\u110C\u1169\u110B\u116D\u11BC\u1112\u1175",
    "\u110C\u1169\u110C\u1165\u11AF",
    "\u110C\u1169\u110C\u1165\u11BC",
    "\u110C\u1169\u110C\u1175\u11A8",
    "\u110C\u1169\u11AB\u1103\u1162\u11BA\u1106\u1161\u11AF",
    "\u110C\u1169\u11AB\u110C\u1162",
    "\u110C\u1169\u11AF\u110B\u1165\u11B8",
    "\u110C\u1169\u11AF\u110B\u1173\u11B7",
    "\u110C\u1169\u11BC\u1100\u116D",
    "\u110C\u1169\u11BC\u1105\u1169",
    "\u110C\u1169\u11BC\u1105\u1172",
    "\u110C\u1169\u11BC\u1109\u1169\u1105\u1175",
    "\u110C\u1169\u11BC\u110B\u1165\u11B8\u110B\u116F\u11AB",
    "\u110C\u1169\u11BC\u110C\u1169\u11BC",
    "\u110C\u1169\u11BC\u1112\u1161\u11B8",
    "\u110C\u116A\u1109\u1165\u11A8",
    "\u110C\u116C\u110B\u1175\u11AB",
    "\u110C\u116E\u1100\u116A\u11AB\u110C\u1165\u11A8",
    "\u110C\u116E\u1105\u1173\u11B7",
    "\u110C\u116E\u1106\u1161\u11AF",
    "\u110C\u116E\u1106\u1165\u1102\u1175",
    "\u110C\u116E\u1106\u1165\u11A8",
    "\u110C\u116E\u1106\u116E\u11AB",
    "\u110C\u116E\u1106\u1175\u11AB",
    "\u110C\u116E\u1107\u1161\u11BC",
    "\u110C\u116E\u1107\u1167\u11AB",
    "\u110C\u116E\u1109\u1175\u11A8",
    "\u110C\u116E\u110B\u1175\u11AB",
    "\u110C\u116E\u110B\u1175\u11AF",
    "\u110C\u116E\u110C\u1161\u11BC",
    "\u110C\u116E\u110C\u1165\u11AB\u110C\u1161",
    "\u110C\u116E\u1110\u1162\u11A8",
    "\u110C\u116E\u11AB\u1107\u1175",
    "\u110C\u116E\u11AF\u1100\u1165\u1105\u1175",
    "\u110C\u116E\u11AF\u1100\u1175",
    "\u110C\u116E\u11AF\u1106\u116E\u1102\u1174",
    "\u110C\u116E\u11BC\u1100\u1161\u11AB",
    "\u110C\u116E\u11BC\u1100\u1168\u1107\u1161\u11BC\u1109\u1169\u11BC",
    "\u110C\u116E\u11BC\u1100\u116E\u11A8",
    "\u110C\u116E\u11BC\u1102\u1167\u11AB",
    "\u110C\u116E\u11BC\u1103\u1161\u11AB",
    "\u110C\u116E\u11BC\u1103\u1169\u11A8",
    "\u110C\u116E\u11BC\u1107\u1161\u11AB",
    "\u110C\u116E\u11BC\u1107\u116E",
    "\u110C\u116E\u11BC\u1109\u1166",
    "\u110C\u116E\u11BC\u1109\u1169\u1100\u1175\u110B\u1165\u11B8",
    "\u110C\u116E\u11BC\u1109\u116E\u11AB",
    "\u110C\u116E\u11BC\u110B\u1161\u11BC",
    "\u110C\u116E\u11BC\u110B\u116D",
    "\u110C\u116E\u11BC\u1112\u1161\u11A8\u1100\u116D",
    "\u110C\u1173\u11A8\u1109\u1165\u11A8",
    "\u110C\u1173\u11A8\u1109\u1175",
    "\u110C\u1173\u11AF\u1100\u1165\u110B\u116E\u11B7",
    "\u110C\u1173\u11BC\u1100\u1161",
    "\u110C\u1173\u11BC\u1100\u1165",
    "\u110C\u1173\u11BC\u1100\u116F\u11AB",
    "\u110C\u1173\u11BC\u1109\u1161\u11BC",
    "\u110C\u1173\u11BC\u1109\u1166",
    "\u110C\u1175\u1100\u1161\u11A8",
    "\u110C\u1175\u1100\u1161\u11B8",
    "\u110C\u1175\u1100\u1167\u11BC",
    "\u110C\u1175\u1100\u1173\u11A8\u1112\u1175",
    "\u110C\u1175\u1100\u1173\u11B7",
    "\u110C\u1175\u1100\u1173\u11B8",
    "\u110C\u1175\u1102\u1173\u11BC",
    "\u110C\u1175\u1105\u1173\u11B7\u1100\u1175\u11AF",
    "\u110C\u1175\u1105\u1175\u1109\u1161\u11AB",
    "\u110C\u1175\u1107\u1161\u11BC",
    "\u110C\u1175\u1107\u116E\u11BC",
    "\u110C\u1175\u1109\u1175\u11A8",
    "\u110C\u1175\u110B\u1167\u11A8",
    "\u110C\u1175\u110B\u116E\u1100\u1162",
    "\u110C\u1175\u110B\u116F\u11AB",
    "\u110C\u1175\u110C\u1165\u11A8",
    "\u110C\u1175\u110C\u1165\u11B7",
    "\u110C\u1175\u110C\u1175\u11AB",
    "\u110C\u1175\u110E\u116E\u11AF",
    "\u110C\u1175\u11A8\u1109\u1165\u11AB",
    "\u110C\u1175\u11A8\u110B\u1165\u11B8",
    "\u110C\u1175\u11A8\u110B\u116F\u11AB",
    "\u110C\u1175\u11A8\u110C\u1161\u11BC",
    "\u110C\u1175\u11AB\u1100\u1173\u11B8",
    "\u110C\u1175\u11AB\u1103\u1169\u11BC",
    "\u110C\u1175\u11AB\u1105\u1169",
    "\u110C\u1175\u11AB\u1105\u116D",
    "\u110C\u1175\u11AB\u1105\u1175",
    "\u110C\u1175\u11AB\u110D\u1161",
    "\u110C\u1175\u11AB\u110E\u1161\u11AF",
    "\u110C\u1175\u11AB\u110E\u116E\u11AF",
    "\u110C\u1175\u11AB\u1110\u1169\u11BC",
    "\u110C\u1175\u11AB\u1112\u1162\u11BC",
    "\u110C\u1175\u11AF\u1106\u116E\u11AB",
    "\u110C\u1175\u11AF\u1107\u1167\u11BC",
    "\u110C\u1175\u11AF\u1109\u1165",
    "\u110C\u1175\u11B7\u110C\u1161\u11A8",
    "\u110C\u1175\u11B8\u1103\u1161\u11AB",
    "\u110C\u1175\u11B8\u110B\u1161\u11AB",
    "\u110C\u1175\u11B8\u110C\u116E\u11BC",
    "\u110D\u1161\u110C\u1173\u11BC",
    "\u110D\u1175\u1101\u1165\u1100\u1175",
    "\u110E\u1161\u1102\u1161\u11B7",
    "\u110E\u1161\u1105\u1161\u1105\u1175",
    "\u110E\u1161\u1105\u1163\u11BC",
    "\u110E\u1161\u1105\u1175\u11B7",
    "\u110E\u1161\u1107\u1167\u11AF",
    "\u110E\u1161\u1109\u1165\u11AB",
    "\u110E\u1161\u110E\u1173\u11B7",
    "\u110E\u1161\u11A8\u1100\u1161\u11A8",
    "\u110E\u1161\u11AB\u1106\u116E\u11AF",
    "\u110E\u1161\u11AB\u1109\u1165\u11BC",
    "\u110E\u1161\u11B7\u1100\u1161",
    "\u110E\u1161\u11B7\u1100\u1175\u1105\u1173\u11B7",
    "\u110E\u1161\u11B7\u1109\u1162",
    "\u110E\u1161\u11B7\u1109\u1165\u11A8",
    "\u110E\u1161\u11B7\u110B\u1167",
    "\u110E\u1161\u11B7\u110B\u116C",
    "\u110E\u1161\u11B7\u110C\u1169",
    "\u110E\u1161\u11BA\u110C\u1161\u11AB",
    "\u110E\u1161\u11BC\u1100\u1161",
    "\u110E\u1161\u11BC\u1100\u1169",
    "\u110E\u1161\u11BC\u1100\u116E",
    "\u110E\u1161\u11BC\u1106\u116E\u11AB",
    "\u110E\u1161\u11BC\u1107\u1161\u11A9",
    "\u110E\u1161\u11BC\u110C\u1161\u11A8",
    "\u110E\u1161\u11BC\u110C\u1169",
    "\u110E\u1162\u1102\u1165\u11AF",
    "\u110E\u1162\u110C\u1165\u11B7",
    "\u110E\u1162\u11A8\u1100\u1161\u1107\u1161\u11BC",
    "\u110E\u1162\u11A8\u1107\u1161\u11BC",
    "\u110E\u1162\u11A8\u1109\u1161\u11BC",
    "\u110E\u1162\u11A8\u110B\u1175\u11B7",
    "\u110E\u1162\u11B7\u1111\u1175\u110B\u1165\u11AB",
    "\u110E\u1165\u1107\u1165\u11AF",
    "\u110E\u1165\u110B\u1173\u11B7",
    "\u110E\u1165\u11AB\u1100\u116E\u11A8",
    "\u110E\u1165\u11AB\u1103\u116E\u11BC",
    "\u110E\u1165\u11AB\u110C\u1161\u11BC",
    "\u110E\u1165\u11AB\u110C\u1162",
    "\u110E\u1165\u11AB\u110E\u1165\u11AB\u1112\u1175",
    "\u110E\u1165\u11AF\u1103\u1169",
    "\u110E\u1165\u11AF\u110C\u1165\u1112\u1175",
    "\u110E\u1165\u11AF\u1112\u1161\u11A8",
    "\u110E\u1165\u11BA\u1102\u1161\u11AF",
    "\u110E\u1165\u11BA\u110D\u1162",
    "\u110E\u1165\u11BC\u1102\u1167\u11AB",
    "\u110E\u1165\u11BC\u1107\u1161\u110C\u1175",
    "\u110E\u1165\u11BC\u1109\u1169",
    "\u110E\u1165\u11BC\u110E\u116E\u11AB",
    "\u110E\u1166\u1100\u1168",
    "\u110E\u1166\u1105\u1167\u11A8",
    "\u110E\u1166\u110B\u1169\u11AB",
    "\u110E\u1166\u110B\u1172\u11A8",
    "\u110E\u1166\u110C\u116E\u11BC",
    "\u110E\u1166\u1112\u1165\u11B7",
    "\u110E\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC",
    "\u110E\u1169\u1107\u1161\u11AB",
    "\u110E\u1169\u1107\u1161\u11B8",
    "\u110E\u1169\u1109\u1161\u11BC\u1112\u116A",
    "\u110E\u1169\u1109\u116E\u11AB",
    "\u110E\u1169\u110B\u1167\u1105\u1173\u11B7",
    "\u110E\u1169\u110B\u116F\u11AB",
    "\u110E\u1169\u110C\u1165\u1102\u1167\u11A8",
    "\u110E\u1169\u110C\u1165\u11B7",
    "\u110E\u1169\u110E\u1165\u11BC",
    "\u110E\u1169\u110F\u1169\u11AF\u1105\u1175\u11BA",
    "\u110E\u1169\u11BA\u1107\u116E\u11AF",
    "\u110E\u1169\u11BC\u1100\u1161\u11A8",
    "\u110E\u1169\u11BC\u1105\u1175",
    "\u110E\u1169\u11BC\u110C\u1161\u11BC",
    "\u110E\u116A\u11AF\u110B\u1167\u11BC",
    "\u110E\u116C\u1100\u1173\u11AB",
    "\u110E\u116C\u1109\u1161\u11BC",
    "\u110E\u116C\u1109\u1165\u11AB",
    "\u110E\u116C\u1109\u1175\u11AB",
    "\u110E\u116C\u110B\u1161\u11A8",
    "\u110E\u116C\u110C\u1169\u11BC",
    "\u110E\u116E\u1109\u1165\u11A8",
    "\u110E\u116E\u110B\u1165\u11A8",
    "\u110E\u116E\u110C\u1175\u11AB",
    "\u110E\u116E\u110E\u1165\u11AB",
    "\u110E\u116E\u110E\u1173\u11A8",
    "\u110E\u116E\u11A8\u1100\u116E",
    "\u110E\u116E\u11A8\u1109\u1169",
    "\u110E\u116E\u11A8\u110C\u1166",
    "\u110E\u116E\u11A8\u1112\u1161",
    "\u110E\u116E\u11AF\u1100\u1173\u11AB",
    "\u110E\u116E\u11AF\u1107\u1161\u11AF",
    "\u110E\u116E\u11AF\u1109\u1161\u11AB",
    "\u110E\u116E\u11AF\u1109\u1175\u11AB",
    "\u110E\u116E\u11AF\u110B\u1167\u11AB",
    "\u110E\u116E\u11AF\u110B\u1175\u11B8",
    "\u110E\u116E\u11AF\u110C\u1161\u11BC",
    "\u110E\u116E\u11AF\u1111\u1161\u11AB",
    "\u110E\u116E\u11BC\u1100\u1167\u11A8",
    "\u110E\u116E\u11BC\u1100\u1169",
    "\u110E\u116E\u11BC\u1103\u1169\u11AF",
    "\u110E\u116E\u11BC\u1107\u116E\u11AB\u1112\u1175",
    "\u110E\u116E\u11BC\u110E\u1165\u11BC\u1103\u1169",
    "\u110E\u1171\u110B\u1165\u11B8",
    "\u110E\u1171\u110C\u1175\u11A8",
    "\u110E\u1171\u1112\u1163\u11BC",
    "\u110E\u1175\u110B\u1163\u11A8",
    "\u110E\u1175\u11AB\u1100\u116E",
    "\u110E\u1175\u11AB\u110E\u1165\u11A8",
    "\u110E\u1175\u11AF\u1109\u1175\u11B8",
    "\u110E\u1175\u11AF\u110B\u116F\u11AF",
    "\u110E\u1175\u11AF\u1111\u1161\u11AB",
    "\u110E\u1175\u11B7\u1103\u1162",
    "\u110E\u1175\u11B7\u1106\u116E\u11A8",
    "\u110E\u1175\u11B7\u1109\u1175\u11AF",
    "\u110E\u1175\u11BA\u1109\u1169\u11AF",
    "\u110E\u1175\u11BC\u110E\u1161\u11AB",
    "\u110F\u1161\u1106\u1166\u1105\u1161",
    "\u110F\u1161\u110B\u116E\u11AB\u1110\u1165",
    "\u110F\u1161\u11AF\u1100\u116E\u11A8\u1109\u116E",
    "\u110F\u1162\u1105\u1175\u11A8\u1110\u1165",
    "\u110F\u1162\u11B7\u1111\u1165\u1109\u1173",
    "\u110F\u1162\u11B7\u1111\u1166\u110B\u1175\u11AB",
    "\u110F\u1165\u1110\u1173\u11AB",
    "\u110F\u1165\u11AB\u1103\u1175\u1109\u1167\u11AB",
    "\u110F\u1165\u11AF\u1105\u1165",
    "\u110F\u1165\u11B7\u1111\u1172\u1110\u1165",
    "\u110F\u1169\u1101\u1175\u1105\u1175",
    "\u110F\u1169\u1106\u1175\u1103\u1175",
    "\u110F\u1169\u11AB\u1109\u1165\u1110\u1173",
    "\u110F\u1169\u11AF\u1105\u1161",
    "\u110F\u1169\u11B7\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173",
    "\u110F\u1169\u11BC\u1102\u1161\u1106\u116E\u11AF",
    "\u110F\u116B\u1100\u1161\u11B7",
    "\u110F\u116E\u1103\u1166\u1110\u1161",
    "\u110F\u1173\u1105\u1175\u11B7",
    "\u110F\u1173\u11AB\u1100\u1175\u11AF",
    "\u110F\u1173\u11AB\u1104\u1161\u11AF",
    "\u110F\u1173\u11AB\u1109\u1169\u1105\u1175",
    "\u110F\u1173\u11AB\u110B\u1161\u1103\u1173\u11AF",
    "\u110F\u1173\u11AB\u110B\u1165\u1106\u1165\u1102\u1175",
    "\u110F\u1173\u11AB\u110B\u1175\u11AF",
    "\u110F\u1173\u11AB\u110C\u1165\u11AF",
    "\u110F\u1173\u11AF\u1105\u1162\u1109\u1175\u11A8",
    "\u110F\u1173\u11AF\u1105\u1165\u11B8",
    "\u110F\u1175\u11AF\u1105\u1169",
    "\u1110\u1161\u110B\u1175\u11B8",
    "\u1110\u1161\u110C\u1161\u1100\u1175",
    "\u1110\u1161\u11A8\u1100\u116E",
    "\u1110\u1161\u11A8\u110C\u1161",
    "\u1110\u1161\u11AB\u1109\u1162\u11BC",
    "\u1110\u1162\u1100\u116F\u11AB\u1103\u1169",
    "\u1110\u1162\u110B\u1163\u11BC",
    "\u1110\u1162\u1111\u116E\u11BC",
    "\u1110\u1162\u11A8\u1109\u1175",
    "\u1110\u1162\u11AF\u1105\u1165\u11AB\u1110\u1173",
    "\u1110\u1165\u1102\u1165\u11AF",
    "\u1110\u1165\u1106\u1175\u1102\u1165\u11AF",
    "\u1110\u1166\u1102\u1175\u1109\u1173",
    "\u1110\u1166\u1109\u1173\u1110\u1173",
    "\u1110\u1166\u110B\u1175\u1107\u1173\u11AF",
    "\u1110\u1166\u11AF\u1105\u1166\u1107\u1175\u110C\u1165\u11AB",
    "\u1110\u1169\u1105\u1169\u11AB",
    "\u1110\u1169\u1106\u1161\u1110\u1169",
    "\u1110\u1169\u110B\u116D\u110B\u1175\u11AF",
    "\u1110\u1169\u11BC\u1100\u1168",
    "\u1110\u1169\u11BC\u1100\u116A",
    "\u1110\u1169\u11BC\u1105\u1169",
    "\u1110\u1169\u11BC\u1109\u1175\u11AB",
    "\u1110\u1169\u11BC\u110B\u1167\u11A8",
    "\u1110\u1169\u11BC\u110B\u1175\u11AF",
    "\u1110\u1169\u11BC\u110C\u1161\u11BC",
    "\u1110\u1169\u11BC\u110C\u1166",
    "\u1110\u1169\u11BC\u110C\u1173\u11BC",
    "\u1110\u1169\u11BC\u1112\u1161\u11B8",
    "\u1110\u1169\u11BC\u1112\u116A",
    "\u1110\u116C\u1100\u1173\u11AB",
    "\u1110\u116C\u110B\u116F\u11AB",
    "\u1110\u116C\u110C\u1175\u11A8\u1100\u1173\u11B7",
    "\u1110\u1171\u1100\u1175\u11B7",
    "\u1110\u1173\u1105\u1165\u11A8",
    "\u1110\u1173\u11A8\u1100\u1173\u11B8",
    "\u1110\u1173\u11A8\u1107\u1167\u11AF",
    "\u1110\u1173\u11A8\u1109\u1165\u11BC",
    "\u1110\u1173\u11A8\u1109\u116E",
    "\u1110\u1173\u11A8\u110C\u1175\u11BC",
    "\u1110\u1173\u11A8\u1112\u1175",
    "\u1110\u1173\u11AB\u1110\u1173\u11AB\u1112\u1175",
    "\u1110\u1175\u1109\u1167\u110E\u1173",
    "\u1111\u1161\u1105\u1161\u11AB\u1109\u1162\u11A8",
    "\u1111\u1161\u110B\u1175\u11AF",
    "\u1111\u1161\u110E\u116E\u11AF\u1109\u1169",
    "\u1111\u1161\u11AB\u1100\u1167\u11AF",
    "\u1111\u1161\u11AB\u1103\u1161\u11AB",
    "\u1111\u1161\u11AB\u1106\u1162",
    "\u1111\u1161\u11AB\u1109\u1161",
    "\u1111\u1161\u11AF\u1109\u1175\u11B8",
    "\u1111\u1161\u11AF\u110B\u116F\u11AF",
    "\u1111\u1161\u11B8\u1109\u1169\u11BC",
    "\u1111\u1162\u1109\u1167\u11AB",
    "\u1111\u1162\u11A8\u1109\u1173",
    "\u1111\u1162\u11A8\u1109\u1175\u1106\u1175\u11AF\u1105\u1175",
    "\u1111\u1162\u11AB\u1110\u1175",
    "\u1111\u1165\u1109\u1166\u11AB\u1110\u1173",
    "\u1111\u1166\u110B\u1175\u11AB\u1110\u1173",
    "\u1111\u1167\u11AB\u1100\u1167\u11AB",
    "\u1111\u1167\u11AB\u110B\u1174",
    "\u1111\u1167\u11AB\u110C\u1175",
    "\u1111\u1167\u11AB\u1112\u1175",
    "\u1111\u1167\u11BC\u1100\u1161",
    "\u1111\u1167\u11BC\u1100\u1172\u11AB",
    "\u1111\u1167\u11BC\u1109\u1162\u11BC",
    "\u1111\u1167\u11BC\u1109\u1169",
    "\u1111\u1167\u11BC\u110B\u1163\u11BC",
    "\u1111\u1167\u11BC\u110B\u1175\u11AF",
    "\u1111\u1167\u11BC\u1112\u116A",
    "\u1111\u1169\u1109\u1173\u1110\u1165",
    "\u1111\u1169\u110B\u1175\u11AB\u1110\u1173",
    "\u1111\u1169\u110C\u1161\u11BC",
    "\u1111\u1169\u1112\u1161\u11B7",
    "\u1111\u116D\u1106\u1167\u11AB",
    "\u1111\u116D\u110C\u1165\u11BC",
    "\u1111\u116D\u110C\u116E\u11AB",
    "\u1111\u116D\u1112\u1167\u11AB",
    "\u1111\u116E\u11B7\u1106\u1169\u11A8",
    "\u1111\u116E\u11B7\u110C\u1175\u11AF",
    "\u1111\u116E\u11BC\u1100\u1167\u11BC",
    "\u1111\u116E\u11BC\u1109\u1169\u11A8",
    "\u1111\u116E\u11BC\u1109\u1173\u11B8",
    "\u1111\u1173\u1105\u1161\u11BC\u1109\u1173",
    "\u1111\u1173\u1105\u1175\u11AB\u1110\u1165",
    "\u1111\u1173\u11AF\u1105\u1161\u1109\u1173\u1110\u1175\u11A8",
    "\u1111\u1175\u1100\u1169\u11AB",
    "\u1111\u1175\u1106\u1161\u11BC",
    "\u1111\u1175\u110B\u1161\u1102\u1169",
    "\u1111\u1175\u11AF\u1105\u1173\u11B7",
    "\u1111\u1175\u11AF\u1109\u116E",
    "\u1111\u1175\u11AF\u110B\u116D",
    "\u1111\u1175\u11AF\u110C\u1161",
    "\u1111\u1175\u11AF\u1110\u1169\u11BC",
    "\u1111\u1175\u11BC\u1100\u1168",
    "\u1112\u1161\u1102\u1173\u1102\u1175\u11B7",
    "\u1112\u1161\u1102\u1173\u11AF",
    "\u1112\u1161\u1103\u1173\u110B\u1170\u110B\u1165",
    "\u1112\u1161\u1105\u116E\u11BA\u1107\u1161\u11B7",
    "\u1112\u1161\u1107\u1161\u11AB\u1100\u1175",
    "\u1112\u1161\u1109\u116E\u11A8\u110C\u1175\u11B8",
    "\u1112\u1161\u1109\u116E\u11AB",
    "\u1112\u1161\u110B\u1167\u1110\u1173\u11AB",
    "\u1112\u1161\u110C\u1175\u1106\u1161\u11AB",
    "\u1112\u1161\u110E\u1165\u11AB",
    "\u1112\u1161\u1111\u116E\u11B7",
    "\u1112\u1161\u1111\u1175\u11AF",
    "\u1112\u1161\u11A8\u1100\u116A",
    "\u1112\u1161\u11A8\u1100\u116D",
    "\u1112\u1161\u11A8\u1100\u1173\u11B8",
    "\u1112\u1161\u11A8\u1100\u1175",
    "\u1112\u1161\u11A8\u1102\u1167\u11AB",
    "\u1112\u1161\u11A8\u1105\u1167\u11A8",
    "\u1112\u1161\u11A8\u1107\u1165\u11AB",
    "\u1112\u1161\u11A8\u1107\u116E\u1106\u1169",
    "\u1112\u1161\u11A8\u1107\u1175",
    "\u1112\u1161\u11A8\u1109\u1162\u11BC",
    "\u1112\u1161\u11A8\u1109\u116E\u11AF",
    "\u1112\u1161\u11A8\u1109\u1173\u11B8",
    "\u1112\u1161\u11A8\u110B\u116D\u11BC\u1111\u116E\u11B7",
    "\u1112\u1161\u11A8\u110B\u116F\u11AB",
    "\u1112\u1161\u11A8\u110B\u1171",
    "\u1112\u1161\u11A8\u110C\u1161",
    "\u1112\u1161\u11A8\u110C\u1165\u11B7",
    "\u1112\u1161\u11AB\u1100\u1168",
    "\u1112\u1161\u11AB\u1100\u1173\u11AF",
    "\u1112\u1161\u11AB\u1101\u1165\u1107\u1165\u11AB\u110B\u1166",
    "\u1112\u1161\u11AB\u1102\u1161\u11BD",
    "\u1112\u1161\u11AB\u1102\u116E\u11AB",
    "\u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB",
    "\u1112\u1161\u11AB\u1104\u1162",
    "\u1112\u1161\u11AB\u1105\u1161\u1109\u1161\u11AB",
    "\u1112\u1161\u11AB\u1106\u1161\u1103\u1175",
    "\u1112\u1161\u11AB\u1106\u116E\u11AB",
    "\u1112\u1161\u11AB\u1107\u1165\u11AB",
    "\u1112\u1161\u11AB\u1107\u1169\u11A8",
    "\u1112\u1161\u11AB\u1109\u1175\u11A8",
    "\u1112\u1161\u11AB\u110B\u1167\u1105\u1173\u11B7",
    "\u1112\u1161\u11AB\u110D\u1169\u11A8",
    "\u1112\u1161\u11AF\u1106\u1165\u1102\u1175",
    "\u1112\u1161\u11AF\u110B\u1161\u1107\u1165\u110C\u1175",
    "\u1112\u1161\u11AF\u110B\u1175\u11AB",
    "\u1112\u1161\u11B7\u1101\u1166",
    "\u1112\u1161\u11B7\u1107\u116E\u1105\u1169",
    "\u1112\u1161\u11B8\u1100\u1167\u11A8",
    "\u1112\u1161\u11B8\u1105\u1175\u110C\u1165\u11A8",
    "\u1112\u1161\u11BC\u1100\u1169\u11BC",
    "\u1112\u1161\u11BC\u1100\u116E",
    "\u1112\u1161\u11BC\u1109\u1161\u11BC",
    "\u1112\u1161\u11BC\u110B\u1174",
    "\u1112\u1162\u1100\u1167\u11AF",
    "\u1112\u1162\u1100\u116E\u11AB",
    "\u1112\u1162\u1103\u1161\u11B8",
    "\u1112\u1162\u1103\u1161\u11BC",
    "\u1112\u1162\u1106\u116E\u11AF",
    "\u1112\u1162\u1109\u1165\u11A8",
    "\u1112\u1162\u1109\u1165\u11AF",
    "\u1112\u1162\u1109\u116E\u110B\u116D\u11A8\u110C\u1161\u11BC",
    "\u1112\u1162\u110B\u1161\u11AB",
    "\u1112\u1162\u11A8\u1109\u1175\u11B7",
    "\u1112\u1162\u11AB\u1103\u1173\u1107\u1162\u11A8",
    "\u1112\u1162\u11B7\u1107\u1165\u1100\u1165",
    "\u1112\u1162\u11BA\u1107\u1167\u11C0",
    "\u1112\u1162\u11BA\u1109\u1161\u11AF",
    "\u1112\u1162\u11BC\u1103\u1169\u11BC",
    "\u1112\u1162\u11BC\u1107\u1169\u11A8",
    "\u1112\u1162\u11BC\u1109\u1161",
    "\u1112\u1162\u11BC\u110B\u116E\u11AB",
    "\u1112\u1162\u11BC\u110B\u1171",
    "\u1112\u1163\u11BC\u1100\u1175",
    "\u1112\u1163\u11BC\u1109\u1161\u11BC",
    "\u1112\u1163\u11BC\u1109\u116E",
    "\u1112\u1165\u1105\u1161\u11A8",
    "\u1112\u1165\u110B\u116D\u11BC",
    "\u1112\u1166\u11AF\u1100\u1175",
    "\u1112\u1167\u11AB\u1100\u116A\u11AB",
    "\u1112\u1167\u11AB\u1100\u1173\u11B7",
    "\u1112\u1167\u11AB\u1103\u1162",
    "\u1112\u1167\u11AB\u1109\u1161\u11BC",
    "\u1112\u1167\u11AB\u1109\u1175\u11AF",
    "\u1112\u1167\u11AB\u110C\u1161\u11BC",
    "\u1112\u1167\u11AB\u110C\u1162",
    "\u1112\u1167\u11AB\u110C\u1175",
    "\u1112\u1167\u11AF\u110B\u1162\u11A8",
    "\u1112\u1167\u11B8\u1105\u1167\u11A8",
    "\u1112\u1167\u11BC\u1107\u116E",
    "\u1112\u1167\u11BC\u1109\u1161",
    "\u1112\u1167\u11BC\u1109\u116E",
    "\u1112\u1167\u11BC\u1109\u1175\u11A8",
    "\u1112\u1167\u11BC\u110C\u1166",
    "\u1112\u1167\u11BC\u1110\u1162",
    "\u1112\u1167\u11BC\u1111\u1167\u11AB",
    "\u1112\u1168\u1110\u1162\u11A8",
    "\u1112\u1169\u1100\u1175\u1109\u1175\u11B7",
    "\u1112\u1169\u1102\u1161\u11B7",
    "\u1112\u1169\u1105\u1161\u11BC\u110B\u1175",
    "\u1112\u1169\u1107\u1161\u11A8",
    "\u1112\u1169\u1110\u1166\u11AF",
    "\u1112\u1169\u1112\u1173\u11B8",
    "\u1112\u1169\u11A8\u1109\u1175",
    "\u1112\u1169\u11AF\u1105\u1169",
    "\u1112\u1169\u11B7\u1111\u1166\u110B\u1175\u110C\u1175",
    "\u1112\u1169\u11BC\u1107\u1169",
    "\u1112\u1169\u11BC\u1109\u116E",
    "\u1112\u1169\u11BC\u110E\u1161",
    "\u1112\u116A\u1106\u1167\u11AB",
    "\u1112\u116A\u1107\u116E\u11AB",
    "\u1112\u116A\u1109\u1161\u11AF",
    "\u1112\u116A\u110B\u116D\u110B\u1175\u11AF",
    "\u1112\u116A\u110C\u1161\u11BC",
    "\u1112\u116A\u1112\u1161\u11A8",
    "\u1112\u116A\u11A8\u1107\u1169",
    "\u1112\u116A\u11A8\u110B\u1175\u11AB",
    "\u1112\u116A\u11A8\u110C\u1161\u11BC",
    "\u1112\u116A\u11A8\u110C\u1165\u11BC",
    "\u1112\u116A\u11AB\u1100\u1161\u11B8",
    "\u1112\u116A\u11AB\u1100\u1167\u11BC",
    "\u1112\u116A\u11AB\u110B\u1167\u11BC",
    "\u1112\u116A\u11AB\u110B\u1172\u11AF",
    "\u1112\u116A\u11AB\u110C\u1161",
    "\u1112\u116A\u11AF\u1100\u1175",
    "\u1112\u116A\u11AF\u1103\u1169\u11BC",
    "\u1112\u116A\u11AF\u1107\u1161\u11AF\u1112\u1175",
    "\u1112\u116A\u11AF\u110B\u116D\u11BC",
    "\u1112\u116A\u11AF\u110D\u1161\u11A8",
    "\u1112\u116C\u1100\u1167\u11AB",
    "\u1112\u116C\u1100\u116A\u11AB",
    "\u1112\u116C\u1107\u1169\u11A8",
    "\u1112\u116C\u1109\u1162\u11A8",
    "\u1112\u116C\u110B\u116F\u11AB",
    "\u1112\u116C\u110C\u1161\u11BC",
    "\u1112\u116C\u110C\u1165\u11AB",
    "\u1112\u116C\u11BA\u1109\u116E",
    "\u1112\u116C\u11BC\u1103\u1161\u11AB\u1107\u1169\u1103\u1169",
    "\u1112\u116D\u110B\u1172\u11AF\u110C\u1165\u11A8",
    "\u1112\u116E\u1107\u1161\u11AB",
    "\u1112\u116E\u110E\u116E\u11BA\u1100\u1161\u1105\u116E",
    "\u1112\u116E\u11AB\u1105\u1167\u11AB",
    "\u1112\u116F\u11AF\u110A\u1175\u11AB",
    "\u1112\u1172\u1109\u1175\u11A8",
    "\u1112\u1172\u110B\u1175\u11AF",
    "\u1112\u1172\u11BC\u1102\u1162",
    "\u1112\u1173\u1105\u1173\u11B7",
    "\u1112\u1173\u11A8\u1107\u1162\u11A8",
    "\u1112\u1173\u11A8\u110B\u1175\u11AB",
    "\u1112\u1173\u11AB\u110C\u1165\u11A8",
    "\u1112\u1173\u11AB\u1112\u1175",
    "\u1112\u1173\u11BC\u1106\u1175",
    "\u1112\u1173\u11BC\u1107\u116E\u11AB",
    "\u1112\u1174\u1100\u1169\u11A8",
    "\u1112\u1174\u1106\u1161\u11BC",
    "\u1112\u1174\u1109\u1162\u11BC",
    "\u1112\u1174\u11AB\u1109\u1162\u11A8",
    "\u1112\u1175\u11B7\u1101\u1165\u11BA"
  ], xp = [
    "abaisser",
    "abandon",
    "abdiquer",
    "abeille",
    "abolir",
    "aborder",
    "aboutir",
    "aboyer",
    "abrasif",
    "abreuver",
    "abriter",
    "abroger",
    "abrupt",
    "absence",
    "absolu",
    "absurde",
    "abusif",
    "abyssal",
    "acade\u0301mie",
    "acajou",
    "acarien",
    "accabler",
    "accepter",
    "acclamer",
    "accolade",
    "accroche",
    "accuser",
    "acerbe",
    "achat",
    "acheter",
    "aciduler",
    "acier",
    "acompte",
    "acque\u0301rir",
    "acronyme",
    "acteur",
    "actif",
    "actuel",
    "adepte",
    "ade\u0301quat",
    "adhe\u0301sif",
    "adjectif",
    "adjuger",
    "admettre",
    "admirer",
    "adopter",
    "adorer",
    "adoucir",
    "adresse",
    "adroit",
    "adulte",
    "adverbe",
    "ae\u0301rer",
    "ae\u0301ronef",
    "affaire",
    "affecter",
    "affiche",
    "affreux",
    "affubler",
    "agacer",
    "agencer",
    "agile",
    "agiter",
    "agrafer",
    "agre\u0301able",
    "agrume",
    "aider",
    "aiguille",
    "ailier",
    "aimable",
    "aisance",
    "ajouter",
    "ajuster",
    "alarmer",
    "alchimie",
    "alerte",
    "alge\u0300bre",
    "algue",
    "alie\u0301ner",
    "aliment",
    "alle\u0301ger",
    "alliage",
    "allouer",
    "allumer",
    "alourdir",
    "alpaga",
    "altesse",
    "alve\u0301ole",
    "amateur",
    "ambigu",
    "ambre",
    "ame\u0301nager",
    "amertume",
    "amidon",
    "amiral",
    "amorcer",
    "amour",
    "amovible",
    "amphibie",
    "ampleur",
    "amusant",
    "analyse",
    "anaphore",
    "anarchie",
    "anatomie",
    "ancien",
    "ane\u0301antir",
    "angle",
    "angoisse",
    "anguleux",
    "animal",
    "annexer",
    "annonce",
    "annuel",
    "anodin",
    "anomalie",
    "anonyme",
    "anormal",
    "antenne",
    "antidote",
    "anxieux",
    "apaiser",
    "ape\u0301ritif",
    "aplanir",
    "apologie",
    "appareil",
    "appeler",
    "apporter",
    "appuyer",
    "aquarium",
    "aqueduc",
    "arbitre",
    "arbuste",
    "ardeur",
    "ardoise",
    "argent",
    "arlequin",
    "armature",
    "armement",
    "armoire",
    "armure",
    "arpenter",
    "arracher",
    "arriver",
    "arroser",
    "arsenic",
    "arte\u0301riel",
    "article",
    "aspect",
    "asphalte",
    "aspirer",
    "assaut",
    "asservir",
    "assiette",
    "associer",
    "assurer",
    "asticot",
    "astre",
    "astuce",
    "atelier",
    "atome",
    "atrium",
    "atroce",
    "attaque",
    "attentif",
    "attirer",
    "attraper",
    "aubaine",
    "auberge",
    "audace",
    "audible",
    "augurer",
    "aurore",
    "automne",
    "autruche",
    "avaler",
    "avancer",
    "avarice",
    "avenir",
    "averse",
    "aveugle",
    "aviateur",
    "avide",
    "avion",
    "aviser",
    "avoine",
    "avouer",
    "avril",
    "axial",
    "axiome",
    "badge",
    "bafouer",
    "bagage",
    "baguette",
    "baignade",
    "balancer",
    "balcon",
    "baleine",
    "balisage",
    "bambin",
    "bancaire",
    "bandage",
    "banlieue",
    "bannie\u0300re",
    "banquier",
    "barbier",
    "baril",
    "baron",
    "barque",
    "barrage",
    "bassin",
    "bastion",
    "bataille",
    "bateau",
    "batterie",
    "baudrier",
    "bavarder",
    "belette",
    "be\u0301lier",
    "belote",
    "be\u0301ne\u0301fice",
    "berceau",
    "berger",
    "berline",
    "bermuda",
    "besace",
    "besogne",
    "be\u0301tail",
    "beurre",
    "biberon",
    "bicycle",
    "bidule",
    "bijou",
    "bilan",
    "bilingue",
    "billard",
    "binaire",
    "biologie",
    "biopsie",
    "biotype",
    "biscuit",
    "bison",
    "bistouri",
    "bitume",
    "bizarre",
    "blafard",
    "blague",
    "blanchir",
    "blessant",
    "blinder",
    "blond",
    "bloquer",
    "blouson",
    "bobard",
    "bobine",
    "boire",
    "boiser",
    "bolide",
    "bonbon",
    "bondir",
    "bonheur",
    "bonifier",
    "bonus",
    "bordure",
    "borne",
    "botte",
    "boucle",
    "boueux",
    "bougie",
    "boulon",
    "bouquin",
    "bourse",
    "boussole",
    "boutique",
    "boxeur",
    "branche",
    "brasier",
    "brave",
    "brebis",
    "bre\u0300che",
    "breuvage",
    "bricoler",
    "brigade",
    "brillant",
    "brioche",
    "brique",
    "brochure",
    "broder",
    "bronzer",
    "brousse",
    "broyeur",
    "brume",
    "brusque",
    "brutal",
    "bruyant",
    "buffle",
    "buisson",
    "bulletin",
    "bureau",
    "burin",
    "bustier",
    "butiner",
    "butoir",
    "buvable",
    "buvette",
    "cabanon",
    "cabine",
    "cachette",
    "cadeau",
    "cadre",
    "cafe\u0301ine",
    "caillou",
    "caisson",
    "calculer",
    "calepin",
    "calibre",
    "calmer",
    "calomnie",
    "calvaire",
    "camarade",
    "came\u0301ra",
    "camion",
    "campagne",
    "canal",
    "caneton",
    "canon",
    "cantine",
    "canular",
    "capable",
    "caporal",
    "caprice",
    "capsule",
    "capter",
    "capuche",
    "carabine",
    "carbone",
    "caresser",
    "caribou",
    "carnage",
    "carotte",
    "carreau",
    "carton",
    "cascade",
    "casier",
    "casque",
    "cassure",
    "causer",
    "caution",
    "cavalier",
    "caverne",
    "caviar",
    "ce\u0301dille",
    "ceinture",
    "ce\u0301leste",
    "cellule",
    "cendrier",
    "censurer",
    "central",
    "cercle",
    "ce\u0301re\u0301bral",
    "cerise",
    "cerner",
    "cerveau",
    "cesser",
    "chagrin",
    "chaise",
    "chaleur",
    "chambre",
    "chance",
    "chapitre",
    "charbon",
    "chasseur",
    "chaton",
    "chausson",
    "chavirer",
    "chemise",
    "chenille",
    "che\u0301quier",
    "chercher",
    "cheval",
    "chien",
    "chiffre",
    "chignon",
    "chime\u0300re",
    "chiot",
    "chlorure",
    "chocolat",
    "choisir",
    "chose",
    "chouette",
    "chrome",
    "chute",
    "cigare",
    "cigogne",
    "cimenter",
    "cine\u0301ma",
    "cintrer",
    "circuler",
    "cirer",
    "cirque",
    "citerne",
    "citoyen",
    "citron",
    "civil",
    "clairon",
    "clameur",
    "claquer",
    "classe",
    "clavier",
    "client",
    "cligner",
    "climat",
    "clivage",
    "cloche",
    "clonage",
    "cloporte",
    "cobalt",
    "cobra",
    "cocasse",
    "cocotier",
    "coder",
    "codifier",
    "coffre",
    "cogner",
    "cohe\u0301sion",
    "coiffer",
    "coincer",
    "cole\u0300re",
    "colibri",
    "colline",
    "colmater",
    "colonel",
    "combat",
    "come\u0301die",
    "commande",
    "compact",
    "concert",
    "conduire",
    "confier",
    "congeler",
    "connoter",
    "consonne",
    "contact",
    "convexe",
    "copain",
    "copie",
    "corail",
    "corbeau",
    "cordage",
    "corniche",
    "corpus",
    "correct",
    "corte\u0300ge",
    "cosmique",
    "costume",
    "coton",
    "coude",
    "coupure",
    "courage",
    "couteau",
    "couvrir",
    "coyote",
    "crabe",
    "crainte",
    "cravate",
    "crayon",
    "cre\u0301ature",
    "cre\u0301diter",
    "cre\u0301meux",
    "creuser",
    "crevette",
    "cribler",
    "crier",
    "cristal",
    "crite\u0300re",
    "croire",
    "croquer",
    "crotale",
    "crucial",
    "cruel",
    "crypter",
    "cubique",
    "cueillir",
    "cuille\u0300re",
    "cuisine",
    "cuivre",
    "culminer",
    "cultiver",
    "cumuler",
    "cupide",
    "curatif",
    "curseur",
    "cyanure",
    "cycle",
    "cylindre",
    "cynique",
    "daigner",
    "damier",
    "danger",
    "danseur",
    "dauphin",
    "de\u0301battre",
    "de\u0301biter",
    "de\u0301border",
    "de\u0301brider",
    "de\u0301butant",
    "de\u0301caler",
    "de\u0301cembre",
    "de\u0301chirer",
    "de\u0301cider",
    "de\u0301clarer",
    "de\u0301corer",
    "de\u0301crire",
    "de\u0301cupler",
    "de\u0301dale",
    "de\u0301ductif",
    "de\u0301esse",
    "de\u0301fensif",
    "de\u0301filer",
    "de\u0301frayer",
    "de\u0301gager",
    "de\u0301givrer",
    "de\u0301glutir",
    "de\u0301grafer",
    "de\u0301jeuner",
    "de\u0301lice",
    "de\u0301loger",
    "demander",
    "demeurer",
    "de\u0301molir",
    "de\u0301nicher",
    "de\u0301nouer",
    "dentelle",
    "de\u0301nuder",
    "de\u0301part",
    "de\u0301penser",
    "de\u0301phaser",
    "de\u0301placer",
    "de\u0301poser",
    "de\u0301ranger",
    "de\u0301rober",
    "de\u0301sastre",
    "descente",
    "de\u0301sert",
    "de\u0301signer",
    "de\u0301sobe\u0301ir",
    "dessiner",
    "destrier",
    "de\u0301tacher",
    "de\u0301tester",
    "de\u0301tourer",
    "de\u0301tresse",
    "devancer",
    "devenir",
    "deviner",
    "devoir",
    "diable",
    "dialogue",
    "diamant",
    "dicter",
    "diffe\u0301rer",
    "dige\u0301rer",
    "digital",
    "digne",
    "diluer",
    "dimanche",
    "diminuer",
    "dioxyde",
    "directif",
    "diriger",
    "discuter",
    "disposer",
    "dissiper",
    "distance",
    "divertir",
    "diviser",
    "docile",
    "docteur",
    "dogme",
    "doigt",
    "domaine",
    "domicile",
    "dompter",
    "donateur",
    "donjon",
    "donner",
    "dopamine",
    "dortoir",
    "dorure",
    "dosage",
    "doseur",
    "dossier",
    "dotation",
    "douanier",
    "double",
    "douceur",
    "douter",
    "doyen",
    "dragon",
    "draper",
    "dresser",
    "dribbler",
    "droiture",
    "duperie",
    "duplexe",
    "durable",
    "durcir",
    "dynastie",
    "e\u0301blouir",
    "e\u0301carter",
    "e\u0301charpe",
    "e\u0301chelle",
    "e\u0301clairer",
    "e\u0301clipse",
    "e\u0301clore",
    "e\u0301cluse",
    "e\u0301cole",
    "e\u0301conomie",
    "e\u0301corce",
    "e\u0301couter",
    "e\u0301craser",
    "e\u0301cre\u0301mer",
    "e\u0301crivain",
    "e\u0301crou",
    "e\u0301cume",
    "e\u0301cureuil",
    "e\u0301difier",
    "e\u0301duquer",
    "effacer",
    "effectif",
    "effigie",
    "effort",
    "effrayer",
    "effusion",
    "e\u0301galiser",
    "e\u0301garer",
    "e\u0301jecter",
    "e\u0301laborer",
    "e\u0301largir",
    "e\u0301lectron",
    "e\u0301le\u0301gant",
    "e\u0301le\u0301phant",
    "e\u0301le\u0300ve",
    "e\u0301ligible",
    "e\u0301litisme",
    "e\u0301loge",
    "e\u0301lucider",
    "e\u0301luder",
    "emballer",
    "embellir",
    "embryon",
    "e\u0301meraude",
    "e\u0301mission",
    "emmener",
    "e\u0301motion",
    "e\u0301mouvoir",
    "empereur",
    "employer",
    "emporter",
    "emprise",
    "e\u0301mulsion",
    "encadrer",
    "enche\u0300re",
    "enclave",
    "encoche",
    "endiguer",
    "endosser",
    "endroit",
    "enduire",
    "e\u0301nergie",
    "enfance",
    "enfermer",
    "enfouir",
    "engager",
    "engin",
    "englober",
    "e\u0301nigme",
    "enjamber",
    "enjeu",
    "enlever",
    "ennemi",
    "ennuyeux",
    "enrichir",
    "enrobage",
    "enseigne",
    "entasser",
    "entendre",
    "entier",
    "entourer",
    "entraver",
    "e\u0301nume\u0301rer",
    "envahir",
    "enviable",
    "envoyer",
    "enzyme",
    "e\u0301olien",
    "e\u0301paissir",
    "e\u0301pargne",
    "e\u0301patant",
    "e\u0301paule",
    "e\u0301picerie",
    "e\u0301pide\u0301mie",
    "e\u0301pier",
    "e\u0301pilogue",
    "e\u0301pine",
    "e\u0301pisode",
    "e\u0301pitaphe",
    "e\u0301poque",
    "e\u0301preuve",
    "e\u0301prouver",
    "e\u0301puisant",
    "e\u0301querre",
    "e\u0301quipe",
    "e\u0301riger",
    "e\u0301rosion",
    "erreur",
    "e\u0301ruption",
    "escalier",
    "espadon",
    "espe\u0300ce",
    "espie\u0300gle",
    "espoir",
    "esprit",
    "esquiver",
    "essayer",
    "essence",
    "essieu",
    "essorer",
    "estime",
    "estomac",
    "estrade",
    "e\u0301tage\u0300re",
    "e\u0301taler",
    "e\u0301tanche",
    "e\u0301tatique",
    "e\u0301teindre",
    "e\u0301tendoir",
    "e\u0301ternel",
    "e\u0301thanol",
    "e\u0301thique",
    "ethnie",
    "e\u0301tirer",
    "e\u0301toffer",
    "e\u0301toile",
    "e\u0301tonnant",
    "e\u0301tourdir",
    "e\u0301trange",
    "e\u0301troit",
    "e\u0301tude",
    "euphorie",
    "e\u0301valuer",
    "e\u0301vasion",
    "e\u0301ventail",
    "e\u0301vidence",
    "e\u0301viter",
    "e\u0301volutif",
    "e\u0301voquer",
    "exact",
    "exage\u0301rer",
    "exaucer",
    "exceller",
    "excitant",
    "exclusif",
    "excuse",
    "exe\u0301cuter",
    "exemple",
    "exercer",
    "exhaler",
    "exhorter",
    "exigence",
    "exiler",
    "exister",
    "exotique",
    "expe\u0301dier",
    "explorer",
    "exposer",
    "exprimer",
    "exquis",
    "extensif",
    "extraire",
    "exulter",
    "fable",
    "fabuleux",
    "facette",
    "facile",
    "facture",
    "faiblir",
    "falaise",
    "fameux",
    "famille",
    "farceur",
    "farfelu",
    "farine",
    "farouche",
    "fasciner",
    "fatal",
    "fatigue",
    "faucon",
    "fautif",
    "faveur",
    "favori",
    "fe\u0301brile",
    "fe\u0301conder",
    "fe\u0301de\u0301rer",
    "fe\u0301lin",
    "femme",
    "fe\u0301mur",
    "fendoir",
    "fe\u0301odal",
    "fermer",
    "fe\u0301roce",
    "ferveur",
    "festival",
    "feuille",
    "feutre",
    "fe\u0301vrier",
    "fiasco",
    "ficeler",
    "fictif",
    "fide\u0300le",
    "figure",
    "filature",
    "filetage",
    "filie\u0300re",
    "filleul",
    "filmer",
    "filou",
    "filtrer",
    "financer",
    "finir",
    "fiole",
    "firme",
    "fissure",
    "fixer",
    "flairer",
    "flamme",
    "flasque",
    "flatteur",
    "fle\u0301au",
    "fle\u0300che",
    "fleur",
    "flexion",
    "flocon",
    "flore",
    "fluctuer",
    "fluide",
    "fluvial",
    "folie",
    "fonderie",
    "fongible",
    "fontaine",
    "forcer",
    "forgeron",
    "formuler",
    "fortune",
    "fossile",
    "foudre",
    "fouge\u0300re",
    "fouiller",
    "foulure",
    "fourmi",
    "fragile",
    "fraise",
    "franchir",
    "frapper",
    "frayeur",
    "fre\u0301gate",
    "freiner",
    "frelon",
    "fre\u0301mir",
    "fre\u0301ne\u0301sie",
    "fre\u0300re",
    "friable",
    "friction",
    "frisson",
    "frivole",
    "froid",
    "fromage",
    "frontal",
    "frotter",
    "fruit",
    "fugitif",
    "fuite",
    "fureur",
    "furieux",
    "furtif",
    "fusion",
    "futur",
    "gagner",
    "galaxie",
    "galerie",
    "gambader",
    "garantir",
    "gardien",
    "garnir",
    "garrigue",
    "gazelle",
    "gazon",
    "ge\u0301ant",
    "ge\u0301latine",
    "ge\u0301lule",
    "gendarme",
    "ge\u0301ne\u0301ral",
    "ge\u0301nie",
    "genou",
    "gentil",
    "ge\u0301ologie",
    "ge\u0301ome\u0300tre",
    "ge\u0301ranium",
    "germe",
    "gestuel",
    "geyser",
    "gibier",
    "gicler",
    "girafe",
    "givre",
    "glace",
    "glaive",
    "glisser",
    "globe",
    "gloire",
    "glorieux",
    "golfeur",
    "gomme",
    "gonfler",
    "gorge",
    "gorille",
    "goudron",
    "gouffre",
    "goulot",
    "goupille",
    "gourmand",
    "goutte",
    "graduel",
    "graffiti",
    "graine",
    "grand",
    "grappin",
    "gratuit",
    "gravir",
    "grenat",
    "griffure",
    "griller",
    "grimper",
    "grogner",
    "gronder",
    "grotte",
    "groupe",
    "gruger",
    "grutier",
    "gruye\u0300re",
    "gue\u0301pard",
    "guerrier",
    "guide",
    "guimauve",
    "guitare",
    "gustatif",
    "gymnaste",
    "gyrostat",
    "habitude",
    "hachoir",
    "halte",
    "hameau",
    "hangar",
    "hanneton",
    "haricot",
    "harmonie",
    "harpon",
    "hasard",
    "he\u0301lium",
    "he\u0301matome",
    "herbe",
    "he\u0301risson",
    "hermine",
    "he\u0301ron",
    "he\u0301siter",
    "heureux",
    "hiberner",
    "hibou",
    "hilarant",
    "histoire",
    "hiver",
    "homard",
    "hommage",
    "homoge\u0300ne",
    "honneur",
    "honorer",
    "honteux",
    "horde",
    "horizon",
    "horloge",
    "hormone",
    "horrible",
    "houleux",
    "housse",
    "hublot",
    "huileux",
    "humain",
    "humble",
    "humide",
    "humour",
    "hurler",
    "hydromel",
    "hygie\u0300ne",
    "hymne",
    "hypnose",
    "idylle",
    "ignorer",
    "iguane",
    "illicite",
    "illusion",
    "image",
    "imbiber",
    "imiter",
    "immense",
    "immobile",
    "immuable",
    "impact",
    "impe\u0301rial",
    "implorer",
    "imposer",
    "imprimer",
    "imputer",
    "incarner",
    "incendie",
    "incident",
    "incliner",
    "incolore",
    "indexer",
    "indice",
    "inductif",
    "ine\u0301dit",
    "ineptie",
    "inexact",
    "infini",
    "infliger",
    "informer",
    "infusion",
    "inge\u0301rer",
    "inhaler",
    "inhiber",
    "injecter",
    "injure",
    "innocent",
    "inoculer",
    "inonder",
    "inscrire",
    "insecte",
    "insigne",
    "insolite",
    "inspirer",
    "instinct",
    "insulter",
    "intact",
    "intense",
    "intime",
    "intrigue",
    "intuitif",
    "inutile",
    "invasion",
    "inventer",
    "inviter",
    "invoquer",
    "ironique",
    "irradier",
    "irre\u0301el",
    "irriter",
    "isoler",
    "ivoire",
    "ivresse",
    "jaguar",
    "jaillir",
    "jambe",
    "janvier",
    "jardin",
    "jauger",
    "jaune",
    "javelot",
    "jetable",
    "jeton",
    "jeudi",
    "jeunesse",
    "joindre",
    "joncher",
    "jongler",
    "joueur",
    "jouissif",
    "journal",
    "jovial",
    "joyau",
    "joyeux",
    "jubiler",
    "jugement",
    "junior",
    "jupon",
    "juriste",
    "justice",
    "juteux",
    "juve\u0301nile",
    "kayak",
    "kimono",
    "kiosque",
    "label",
    "labial",
    "labourer",
    "lace\u0301rer",
    "lactose",
    "lagune",
    "laine",
    "laisser",
    "laitier",
    "lambeau",
    "lamelle",
    "lampe",
    "lanceur",
    "langage",
    "lanterne",
    "lapin",
    "largeur",
    "larme",
    "laurier",
    "lavabo",
    "lavoir",
    "lecture",
    "le\u0301gal",
    "le\u0301ger",
    "le\u0301gume",
    "lessive",
    "lettre",
    "levier",
    "lexique",
    "le\u0301zard",
    "liasse",
    "libe\u0301rer",
    "libre",
    "licence",
    "licorne",
    "lie\u0300ge",
    "lie\u0300vre",
    "ligature",
    "ligoter",
    "ligue",
    "limer",
    "limite",
    "limonade",
    "limpide",
    "line\u0301aire",
    "lingot",
    "lionceau",
    "liquide",
    "lisie\u0300re",
    "lister",
    "lithium",
    "litige",
    "littoral",
    "livreur",
    "logique",
    "lointain",
    "loisir",
    "lombric",
    "loterie",
    "louer",
    "lourd",
    "loutre",
    "louve",
    "loyal",
    "lubie",
    "lucide",
    "lucratif",
    "lueur",
    "lugubre",
    "luisant",
    "lumie\u0300re",
    "lunaire",
    "lundi",
    "luron",
    "lutter",
    "luxueux",
    "machine",
    "magasin",
    "magenta",
    "magique",
    "maigre",
    "maillon",
    "maintien",
    "mairie",
    "maison",
    "majorer",
    "malaxer",
    "male\u0301fice",
    "malheur",
    "malice",
    "mallette",
    "mammouth",
    "mandater",
    "maniable",
    "manquant",
    "manteau",
    "manuel",
    "marathon",
    "marbre",
    "marchand",
    "mardi",
    "maritime",
    "marqueur",
    "marron",
    "marteler",
    "mascotte",
    "massif",
    "mate\u0301riel",
    "matie\u0300re",
    "matraque",
    "maudire",
    "maussade",
    "mauve",
    "maximal",
    "me\u0301chant",
    "me\u0301connu",
    "me\u0301daille",
    "me\u0301decin",
    "me\u0301diter",
    "me\u0301duse",
    "meilleur",
    "me\u0301lange",
    "me\u0301lodie",
    "membre",
    "me\u0301moire",
    "menacer",
    "mener",
    "menhir",
    "mensonge",
    "mentor",
    "mercredi",
    "me\u0301rite",
    "merle",
    "messager",
    "mesure",
    "me\u0301tal",
    "me\u0301te\u0301ore",
    "me\u0301thode",
    "me\u0301tier",
    "meuble",
    "miauler",
    "microbe",
    "miette",
    "mignon",
    "migrer",
    "milieu",
    "million",
    "mimique",
    "mince",
    "mine\u0301ral",
    "minimal",
    "minorer",
    "minute",
    "miracle",
    "miroiter",
    "missile",
    "mixte",
    "mobile",
    "moderne",
    "moelleux",
    "mondial",
    "moniteur",
    "monnaie",
    "monotone",
    "monstre",
    "montagne",
    "monument",
    "moqueur",
    "morceau",
    "morsure",
    "mortier",
    "moteur",
    "motif",
    "mouche",
    "moufle",
    "moulin",
    "mousson",
    "mouton",
    "mouvant",
    "multiple",
    "munition",
    "muraille",
    "mure\u0300ne",
    "murmure",
    "muscle",
    "muse\u0301um",
    "musicien",
    "mutation",
    "muter",
    "mutuel",
    "myriade",
    "myrtille",
    "myste\u0300re",
    "mythique",
    "nageur",
    "nappe",
    "narquois",
    "narrer",
    "natation",
    "nation",
    "nature",
    "naufrage",
    "nautique",
    "navire",
    "ne\u0301buleux",
    "nectar",
    "ne\u0301faste",
    "ne\u0301gation",
    "ne\u0301gliger",
    "ne\u0301gocier",
    "neige",
    "nerveux",
    "nettoyer",
    "neurone",
    "neutron",
    "neveu",
    "niche",
    "nickel",
    "nitrate",
    "niveau",
    "noble",
    "nocif",
    "nocturne",
    "noirceur",
    "noisette",
    "nomade",
    "nombreux",
    "nommer",
    "normatif",
    "notable",
    "notifier",
    "notoire",
    "nourrir",
    "nouveau",
    "novateur",
    "novembre",
    "novice",
    "nuage",
    "nuancer",
    "nuire",
    "nuisible",
    "nume\u0301ro",
    "nuptial",
    "nuque",
    "nutritif",
    "obe\u0301ir",
    "objectif",
    "obliger",
    "obscur",
    "observer",
    "obstacle",
    "obtenir",
    "obturer",
    "occasion",
    "occuper",
    "oce\u0301an",
    "octobre",
    "octroyer",
    "octupler",
    "oculaire",
    "odeur",
    "odorant",
    "offenser",
    "officier",
    "offrir",
    "ogive",
    "oiseau",
    "oisillon",
    "olfactif",
    "olivier",
    "ombrage",
    "omettre",
    "onctueux",
    "onduler",
    "one\u0301reux",
    "onirique",
    "opale",
    "opaque",
    "ope\u0301rer",
    "opinion",
    "opportun",
    "opprimer",
    "opter",
    "optique",
    "orageux",
    "orange",
    "orbite",
    "ordonner",
    "oreille",
    "organe",
    "orgueil",
    "orifice",
    "ornement",
    "orque",
    "ortie",
    "osciller",
    "osmose",
    "ossature",
    "otarie",
    "ouragan",
    "ourson",
    "outil",
    "outrager",
    "ouvrage",
    "ovation",
    "oxyde",
    "oxyge\u0300ne",
    "ozone",
    "paisible",
    "palace",
    "palmare\u0300s",
    "palourde",
    "palper",
    "panache",
    "panda",
    "pangolin",
    "paniquer",
    "panneau",
    "panorama",
    "pantalon",
    "papaye",
    "papier",
    "papoter",
    "papyrus",
    "paradoxe",
    "parcelle",
    "paresse",
    "parfumer",
    "parler",
    "parole",
    "parrain",
    "parsemer",
    "partager",
    "parure",
    "parvenir",
    "passion",
    "paste\u0300que",
    "paternel",
    "patience",
    "patron",
    "pavillon",
    "pavoiser",
    "payer",
    "paysage",
    "peigne",
    "peintre",
    "pelage",
    "pe\u0301lican",
    "pelle",
    "pelouse",
    "peluche",
    "pendule",
    "pe\u0301ne\u0301trer",
    "pe\u0301nible",
    "pensif",
    "pe\u0301nurie",
    "pe\u0301pite",
    "pe\u0301plum",
    "perdrix",
    "perforer",
    "pe\u0301riode",
    "permuter",
    "perplexe",
    "persil",
    "perte",
    "peser",
    "pe\u0301tale",
    "petit",
    "pe\u0301trir",
    "peuple",
    "pharaon",
    "phobie",
    "phoque",
    "photon",
    "phrase",
    "physique",
    "piano",
    "pictural",
    "pie\u0300ce",
    "pierre",
    "pieuvre",
    "pilote",
    "pinceau",
    "pipette",
    "piquer",
    "pirogue",
    "piscine",
    "piston",
    "pivoter",
    "pixel",
    "pizza",
    "placard",
    "plafond",
    "plaisir",
    "planer",
    "plaque",
    "plastron",
    "plateau",
    "pleurer",
    "plexus",
    "pliage",
    "plomb",
    "plonger",
    "pluie",
    "plumage",
    "pochette",
    "poe\u0301sie",
    "poe\u0300te",
    "pointe",
    "poirier",
    "poisson",
    "poivre",
    "polaire",
    "policier",
    "pollen",
    "polygone",
    "pommade",
    "pompier",
    "ponctuel",
    "ponde\u0301rer",
    "poney",
    "portique",
    "position",
    "posse\u0301der",
    "posture",
    "potager",
    "poteau",
    "potion",
    "pouce",
    "poulain",
    "poumon",
    "pourpre",
    "poussin",
    "pouvoir",
    "prairie",
    "pratique",
    "pre\u0301cieux",
    "pre\u0301dire",
    "pre\u0301fixe",
    "pre\u0301lude",
    "pre\u0301nom",
    "pre\u0301sence",
    "pre\u0301texte",
    "pre\u0301voir",
    "primitif",
    "prince",
    "prison",
    "priver",
    "proble\u0300me",
    "proce\u0301der",
    "prodige",
    "profond",
    "progre\u0300s",
    "proie",
    "projeter",
    "prologue",
    "promener",
    "propre",
    "prospe\u0300re",
    "prote\u0301ger",
    "prouesse",
    "proverbe",
    "prudence",
    "pruneau",
    "psychose",
    "public",
    "puceron",
    "puiser",
    "pulpe",
    "pulsar",
    "punaise",
    "punitif",
    "pupitre",
    "purifier",
    "puzzle",
    "pyramide",
    "quasar",
    "querelle",
    "question",
    "quie\u0301tude",
    "quitter",
    "quotient",
    "racine",
    "raconter",
    "radieux",
    "ragondin",
    "raideur",
    "raisin",
    "ralentir",
    "rallonge",
    "ramasser",
    "rapide",
    "rasage",
    "ratisser",
    "ravager",
    "ravin",
    "rayonner",
    "re\u0301actif",
    "re\u0301agir",
    "re\u0301aliser",
    "re\u0301animer",
    "recevoir",
    "re\u0301citer",
    "re\u0301clamer",
    "re\u0301colter",
    "recruter",
    "reculer",
    "recycler",
    "re\u0301diger",
    "redouter",
    "refaire",
    "re\u0301flexe",
    "re\u0301former",
    "refrain",
    "refuge",
    "re\u0301galien",
    "re\u0301gion",
    "re\u0301glage",
    "re\u0301gulier",
    "re\u0301ite\u0301rer",
    "rejeter",
    "rejouer",
    "relatif",
    "relever",
    "relief",
    "remarque",
    "reme\u0300de",
    "remise",
    "remonter",
    "remplir",
    "remuer",
    "renard",
    "renfort",
    "renifler",
    "renoncer",
    "rentrer",
    "renvoi",
    "replier",
    "reporter",
    "reprise",
    "reptile",
    "requin",
    "re\u0301serve",
    "re\u0301sineux",
    "re\u0301soudre",
    "respect",
    "rester",
    "re\u0301sultat",
    "re\u0301tablir",
    "retenir",
    "re\u0301ticule",
    "retomber",
    "retracer",
    "re\u0301union",
    "re\u0301ussir",
    "revanche",
    "revivre",
    "re\u0301volte",
    "re\u0301vulsif",
    "richesse",
    "rideau",
    "rieur",
    "rigide",
    "rigoler",
    "rincer",
    "riposter",
    "risible",
    "risque",
    "rituel",
    "rival",
    "rivie\u0300re",
    "rocheux",
    "romance",
    "rompre",
    "ronce",
    "rondin",
    "roseau",
    "rosier",
    "rotatif",
    "rotor",
    "rotule",
    "rouge",
    "rouille",
    "rouleau",
    "routine",
    "royaume",
    "ruban",
    "rubis",
    "ruche",
    "ruelle",
    "rugueux",
    "ruiner",
    "ruisseau",
    "ruser",
    "rustique",
    "rythme",
    "sabler",
    "saboter",
    "sabre",
    "sacoche",
    "safari",
    "sagesse",
    "saisir",
    "salade",
    "salive",
    "salon",
    "saluer",
    "samedi",
    "sanction",
    "sanglier",
    "sarcasme",
    "sardine",
    "saturer",
    "saugrenu",
    "saumon",
    "sauter",
    "sauvage",
    "savant",
    "savonner",
    "scalpel",
    "scandale",
    "sce\u0301le\u0301rat",
    "sce\u0301nario",
    "sceptre",
    "sche\u0301ma",
    "science",
    "scinder",
    "score",
    "scrutin",
    "sculpter",
    "se\u0301ance",
    "se\u0301cable",
    "se\u0301cher",
    "secouer",
    "se\u0301cre\u0301ter",
    "se\u0301datif",
    "se\u0301duire",
    "seigneur",
    "se\u0301jour",
    "se\u0301lectif",
    "semaine",
    "sembler",
    "semence",
    "se\u0301minal",
    "se\u0301nateur",
    "sensible",
    "sentence",
    "se\u0301parer",
    "se\u0301quence",
    "serein",
    "sergent",
    "se\u0301rieux",
    "serrure",
    "se\u0301rum",
    "service",
    "se\u0301same",
    "se\u0301vir",
    "sevrage",
    "sextuple",
    "side\u0301ral",
    "sie\u0300cle",
    "sie\u0301ger",
    "siffler",
    "sigle",
    "signal",
    "silence",
    "silicium",
    "simple",
    "since\u0300re",
    "sinistre",
    "siphon",
    "sirop",
    "sismique",
    "situer",
    "skier",
    "social",
    "socle",
    "sodium",
    "soigneux",
    "soldat",
    "soleil",
    "solitude",
    "soluble",
    "sombre",
    "sommeil",
    "somnoler",
    "sonde",
    "songeur",
    "sonnette",
    "sonore",
    "sorcier",
    "sortir",
    "sosie",
    "sottise",
    "soucieux",
    "soudure",
    "souffle",
    "soulever",
    "soupape",
    "source",
    "soutirer",
    "souvenir",
    "spacieux",
    "spatial",
    "spe\u0301cial",
    "sphe\u0300re",
    "spiral",
    "stable",
    "station",
    "sternum",
    "stimulus",
    "stipuler",
    "strict",
    "studieux",
    "stupeur",
    "styliste",
    "sublime",
    "substrat",
    "subtil",
    "subvenir",
    "succe\u0300s",
    "sucre",
    "suffixe",
    "sugge\u0301rer",
    "suiveur",
    "sulfate",
    "superbe",
    "supplier",
    "surface",
    "suricate",
    "surmener",
    "surprise",
    "sursaut",
    "survie",
    "suspect",
    "syllabe",
    "symbole",
    "syme\u0301trie",
    "synapse",
    "syntaxe",
    "syste\u0300me",
    "tabac",
    "tablier",
    "tactile",
    "tailler",
    "talent",
    "talisman",
    "talonner",
    "tambour",
    "tamiser",
    "tangible",
    "tapis",
    "taquiner",
    "tarder",
    "tarif",
    "tartine",
    "tasse",
    "tatami",
    "tatouage",
    "taupe",
    "taureau",
    "taxer",
    "te\u0301moin",
    "temporel",
    "tenaille",
    "tendre",
    "teneur",
    "tenir",
    "tension",
    "terminer",
    "terne",
    "terrible",
    "te\u0301tine",
    "texte",
    "the\u0300me",
    "the\u0301orie",
    "the\u0301rapie",
    "thorax",
    "tibia",
    "tie\u0300de",
    "timide",
    "tirelire",
    "tiroir",
    "tissu",
    "titane",
    "titre",
    "tituber",
    "toboggan",
    "tole\u0301rant",
    "tomate",
    "tonique",
    "tonneau",
    "toponyme",
    "torche",
    "tordre",
    "tornade",
    "torpille",
    "torrent",
    "torse",
    "tortue",
    "totem",
    "toucher",
    "tournage",
    "tousser",
    "toxine",
    "traction",
    "trafic",
    "tragique",
    "trahir",
    "train",
    "trancher",
    "travail",
    "tre\u0300fle",
    "tremper",
    "tre\u0301sor",
    "treuil",
    "triage",
    "tribunal",
    "tricoter",
    "trilogie",
    "triomphe",
    "tripler",
    "triturer",
    "trivial",
    "trombone",
    "tronc",
    "tropical",
    "troupeau",
    "tuile",
    "tulipe",
    "tumulte",
    "tunnel",
    "turbine",
    "tuteur",
    "tutoyer",
    "tuyau",
    "tympan",
    "typhon",
    "typique",
    "tyran",
    "ubuesque",
    "ultime",
    "ultrason",
    "unanime",
    "unifier",
    "union",
    "unique",
    "unitaire",
    "univers",
    "uranium",
    "urbain",
    "urticant",
    "usage",
    "usine",
    "usuel",
    "usure",
    "utile",
    "utopie",
    "vacarme",
    "vaccin",
    "vagabond",
    "vague",
    "vaillant",
    "vaincre",
    "vaisseau",
    "valable",
    "valise",
    "vallon",
    "valve",
    "vampire",
    "vanille",
    "vapeur",
    "varier",
    "vaseux",
    "vassal",
    "vaste",
    "vecteur",
    "vedette",
    "ve\u0301ge\u0301tal",
    "ve\u0301hicule",
    "veinard",
    "ve\u0301loce",
    "vendredi",
    "ve\u0301ne\u0301rer",
    "venger",
    "venimeux",
    "ventouse",
    "verdure",
    "ve\u0301rin",
    "vernir",
    "verrou",
    "verser",
    "vertu",
    "veston",
    "ve\u0301te\u0301ran",
    "ve\u0301tuste",
    "vexant",
    "vexer",
    "viaduc",
    "viande",
    "victoire",
    "vidange",
    "vide\u0301o",
    "vignette",
    "vigueur",
    "vilain",
    "village",
    "vinaigre",
    "violon",
    "vipe\u0300re",
    "virement",
    "virtuose",
    "virus",
    "visage",
    "viseur",
    "vision",
    "visqueux",
    "visuel",
    "vital",
    "vitesse",
    "viticole",
    "vitrine",
    "vivace",
    "vivipare",
    "vocation",
    "voguer",
    "voile",
    "voisin",
    "voiture",
    "volaille",
    "volcan",
    "voltiger",
    "volume",
    "vorace",
    "vortex",
    "voter",
    "vouloir",
    "voyage",
    "voyelle",
    "wagon",
    "xe\u0301non",
    "yacht",
    "ze\u0300bre",
    "ze\u0301nith",
    "zeste",
    "zoologie"
  ], vp = [
    "abaco",
    "abbaglio",
    "abbinato",
    "abete",
    "abisso",
    "abolire",
    "abrasivo",
    "abrogato",
    "accadere",
    "accenno",
    "accusato",
    "acetone",
    "achille",
    "acido",
    "acqua",
    "acre",
    "acrilico",
    "acrobata",
    "acuto",
    "adagio",
    "addebito",
    "addome",
    "adeguato",
    "aderire",
    "adipe",
    "adottare",
    "adulare",
    "affabile",
    "affetto",
    "affisso",
    "affranto",
    "aforisma",
    "afoso",
    "africano",
    "agave",
    "agente",
    "agevole",
    "aggancio",
    "agire",
    "agitare",
    "agonismo",
    "agricolo",
    "agrumeto",
    "aguzzo",
    "alabarda",
    "alato",
    "albatro",
    "alberato",
    "albo",
    "albume",
    "alce",
    "alcolico",
    "alettone",
    "alfa",
    "algebra",
    "aliante",
    "alibi",
    "alimento",
    "allagato",
    "allegro",
    "allievo",
    "allodola",
    "allusivo",
    "almeno",
    "alogeno",
    "alpaca",
    "alpestre",
    "altalena",
    "alterno",
    "alticcio",
    "altrove",
    "alunno",
    "alveolo",
    "alzare",
    "amalgama",
    "amanita",
    "amarena",
    "ambito",
    "ambrato",
    "ameba",
    "america",
    "ametista",
    "amico",
    "ammasso",
    "ammenda",
    "ammirare",
    "ammonito",
    "amore",
    "ampio",
    "ampliare",
    "amuleto",
    "anacardo",
    "anagrafe",
    "analista",
    "anarchia",
    "anatra",
    "anca",
    "ancella",
    "ancora",
    "andare",
    "andrea",
    "anello",
    "angelo",
    "angolare",
    "angusto",
    "anima",
    "annegare",
    "annidato",
    "anno",
    "annuncio",
    "anonimo",
    "anticipo",
    "anzi",
    "apatico",
    "apertura",
    "apode",
    "apparire",
    "appetito",
    "appoggio",
    "approdo",
    "appunto",
    "aprile",
    "arabica",
    "arachide",
    "aragosta",
    "araldica",
    "arancio",
    "aratura",
    "arazzo",
    "arbitro",
    "archivio",
    "ardito",
    "arenile",
    "argento",
    "argine",
    "arguto",
    "aria",
    "armonia",
    "arnese",
    "arredato",
    "arringa",
    "arrosto",
    "arsenico",
    "arso",
    "artefice",
    "arzillo",
    "asciutto",
    "ascolto",
    "asepsi",
    "asettico",
    "asfalto",
    "asino",
    "asola",
    "aspirato",
    "aspro",
    "assaggio",
    "asse",
    "assoluto",
    "assurdo",
    "asta",
    "astenuto",
    "astice",
    "astratto",
    "atavico",
    "ateismo",
    "atomico",
    "atono",
    "attesa",
    "attivare",
    "attorno",
    "attrito",
    "attuale",
    "ausilio",
    "austria",
    "autista",
    "autonomo",
    "autunno",
    "avanzato",
    "avere",
    "avvenire",
    "avviso",
    "avvolgere",
    "azione",
    "azoto",
    "azzimo",
    "azzurro",
    "babele",
    "baccano",
    "bacino",
    "baco",
    "badessa",
    "badilata",
    "bagnato",
    "baita",
    "balcone",
    "baldo",
    "balena",
    "ballata",
    "balzano",
    "bambino",
    "bandire",
    "baraonda",
    "barbaro",
    "barca",
    "baritono",
    "barlume",
    "barocco",
    "basilico",
    "basso",
    "batosta",
    "battuto",
    "baule",
    "bava",
    "bavosa",
    "becco",
    "beffa",
    "belgio",
    "belva",
    "benda",
    "benevole",
    "benigno",
    "benzina",
    "bere",
    "berlina",
    "beta",
    "bibita",
    "bici",
    "bidone",
    "bifido",
    "biga",
    "bilancia",
    "bimbo",
    "binocolo",
    "biologo",
    "bipede",
    "bipolare",
    "birbante",
    "birra",
    "biscotto",
    "bisesto",
    "bisnonno",
    "bisonte",
    "bisturi",
    "bizzarro",
    "blando",
    "blatta",
    "bollito",
    "bonifico",
    "bordo",
    "bosco",
    "botanico",
    "bottino",
    "bozzolo",
    "braccio",
    "bradipo",
    "brama",
    "branca",
    "bravura",
    "bretella",
    "brevetto",
    "brezza",
    "briglia",
    "brillante",
    "brindare",
    "broccolo",
    "brodo",
    "bronzina",
    "brullo",
    "bruno",
    "bubbone",
    "buca",
    "budino",
    "buffone",
    "buio",
    "bulbo",
    "buono",
    "burlone",
    "burrasca",
    "bussola",
    "busta",
    "cadetto",
    "caduco",
    "calamaro",
    "calcolo",
    "calesse",
    "calibro",
    "calmo",
    "caloria",
    "cambusa",
    "camerata",
    "camicia",
    "cammino",
    "camola",
    "campale",
    "canapa",
    "candela",
    "cane",
    "canino",
    "canotto",
    "cantina",
    "capace",
    "capello",
    "capitolo",
    "capogiro",
    "cappero",
    "capra",
    "capsula",
    "carapace",
    "carcassa",
    "cardo",
    "carisma",
    "carovana",
    "carretto",
    "cartolina",
    "casaccio",
    "cascata",
    "caserma",
    "caso",
    "cassone",
    "castello",
    "casuale",
    "catasta",
    "catena",
    "catrame",
    "cauto",
    "cavillo",
    "cedibile",
    "cedrata",
    "cefalo",
    "celebre",
    "cellulare",
    "cena",
    "cenone",
    "centesimo",
    "ceramica",
    "cercare",
    "certo",
    "cerume",
    "cervello",
    "cesoia",
    "cespo",
    "ceto",
    "chela",
    "chiaro",
    "chicca",
    "chiedere",
    "chimera",
    "china",
    "chirurgo",
    "chitarra",
    "ciao",
    "ciclismo",
    "cifrare",
    "cigno",
    "cilindro",
    "ciottolo",
    "circa",
    "cirrosi",
    "citrico",
    "cittadino",
    "ciuffo",
    "civetta",
    "civile",
    "classico",
    "clinica",
    "cloro",
    "cocco",
    "codardo",
    "codice",
    "coerente",
    "cognome",
    "collare",
    "colmato",
    "colore",
    "colposo",
    "coltivato",
    "colza",
    "coma",
    "cometa",
    "commando",
    "comodo",
    "computer",
    "comune",
    "conciso",
    "condurre",
    "conferma",
    "congelare",
    "coniuge",
    "connesso",
    "conoscere",
    "consumo",
    "continuo",
    "convegno",
    "coperto",
    "copione",
    "coppia",
    "copricapo",
    "corazza",
    "cordata",
    "coricato",
    "cornice",
    "corolla",
    "corpo",
    "corredo",
    "corsia",
    "cortese",
    "cosmico",
    "costante",
    "cottura",
    "covato",
    "cratere",
    "cravatta",
    "creato",
    "credere",
    "cremoso",
    "crescita",
    "creta",
    "criceto",
    "crinale",
    "crisi",
    "critico",
    "croce",
    "cronaca",
    "crostata",
    "cruciale",
    "crusca",
    "cucire",
    "cuculo",
    "cugino",
    "cullato",
    "cupola",
    "curatore",
    "cursore",
    "curvo",
    "cuscino",
    "custode",
    "dado",
    "daino",
    "dalmata",
    "damerino",
    "daniela",
    "dannoso",
    "danzare",
    "datato",
    "davanti",
    "davvero",
    "debutto",
    "decennio",
    "deciso",
    "declino",
    "decollo",
    "decreto",
    "dedicato",
    "definito",
    "deforme",
    "degno",
    "delegare",
    "delfino",
    "delirio",
    "delta",
    "demenza",
    "denotato",
    "dentro",
    "deposito",
    "derapata",
    "derivare",
    "deroga",
    "descritto",
    "deserto",
    "desiderio",
    "desumere",
    "detersivo",
    "devoto",
    "diametro",
    "dicembre",
    "diedro",
    "difeso",
    "diffuso",
    "digerire",
    "digitale",
    "diluvio",
    "dinamico",
    "dinnanzi",
    "dipinto",
    "diploma",
    "dipolo",
    "diradare",
    "dire",
    "dirotto",
    "dirupo",
    "disagio",
    "discreto",
    "disfare",
    "disgelo",
    "disposto",
    "distanza",
    "disumano",
    "dito",
    "divano",
    "divelto",
    "dividere",
    "divorato",
    "doblone",
    "docente",
    "doganale",
    "dogma",
    "dolce",
    "domato",
    "domenica",
    "dominare",
    "dondolo",
    "dono",
    "dormire",
    "dote",
    "dottore",
    "dovuto",
    "dozzina",
    "drago",
    "druido",
    "dubbio",
    "dubitare",
    "ducale",
    "duna",
    "duomo",
    "duplice",
    "duraturo",
    "ebano",
    "eccesso",
    "ecco",
    "eclissi",
    "economia",
    "edera",
    "edicola",
    "edile",
    "editoria",
    "educare",
    "egemonia",
    "egli",
    "egoismo",
    "egregio",
    "elaborato",
    "elargire",
    "elegante",
    "elencato",
    "eletto",
    "elevare",
    "elfico",
    "elica",
    "elmo",
    "elsa",
    "eluso",
    "emanato",
    "emblema",
    "emesso",
    "emiro",
    "emotivo",
    "emozione",
    "empirico",
    "emulo",
    "endemico",
    "enduro",
    "energia",
    "enfasi",
    "enoteca",
    "entrare",
    "enzima",
    "epatite",
    "epilogo",
    "episodio",
    "epocale",
    "eppure",
    "equatore",
    "erario",
    "erba",
    "erboso",
    "erede",
    "eremita",
    "erigere",
    "ermetico",
    "eroe",
    "erosivo",
    "errante",
    "esagono",
    "esame",
    "esanime",
    "esaudire",
    "esca",
    "esempio",
    "esercito",
    "esibito",
    "esigente",
    "esistere",
    "esito",
    "esofago",
    "esortato",
    "esoso",
    "espanso",
    "espresso",
    "essenza",
    "esso",
    "esteso",
    "estimare",
    "estonia",
    "estroso",
    "esultare",
    "etilico",
    "etnico",
    "etrusco",
    "etto",
    "euclideo",
    "europa",
    "evaso",
    "evidenza",
    "evitato",
    "evoluto",
    "evviva",
    "fabbrica",
    "faccenda",
    "fachiro",
    "falco",
    "famiglia",
    "fanale",
    "fanfara",
    "fango",
    "fantasma",
    "fare",
    "farfalla",
    "farinoso",
    "farmaco",
    "fascia",
    "fastoso",
    "fasullo",
    "faticare",
    "fato",
    "favoloso",
    "febbre",
    "fecola",
    "fede",
    "fegato",
    "felpa",
    "feltro",
    "femmina",
    "fendere",
    "fenomeno",
    "fermento",
    "ferro",
    "fertile",
    "fessura",
    "festivo",
    "fetta",
    "feudo",
    "fiaba",
    "fiducia",
    "fifa",
    "figurato",
    "filo",
    "finanza",
    "finestra",
    "finire",
    "fiore",
    "fiscale",
    "fisico",
    "fiume",
    "flacone",
    "flamenco",
    "flebo",
    "flemma",
    "florido",
    "fluente",
    "fluoro",
    "fobico",
    "focaccia",
    "focoso",
    "foderato",
    "foglio",
    "folata",
    "folclore",
    "folgore",
    "fondente",
    "fonetico",
    "fonia",
    "fontana",
    "forbito",
    "forchetta",
    "foresta",
    "formica",
    "fornaio",
    "foro",
    "fortezza",
    "forzare",
    "fosfato",
    "fosso",
    "fracasso",
    "frana",
    "frassino",
    "fratello",
    "freccetta",
    "frenata",
    "fresco",
    "frigo",
    "frollino",
    "fronde",
    "frugale",
    "frutta",
    "fucilata",
    "fucsia",
    "fuggente",
    "fulmine",
    "fulvo",
    "fumante",
    "fumetto",
    "fumoso",
    "fune",
    "funzione",
    "fuoco",
    "furbo",
    "furgone",
    "furore",
    "fuso",
    "futile",
    "gabbiano",
    "gaffe",
    "galateo",
    "gallina",
    "galoppo",
    "gambero",
    "gamma",
    "garanzia",
    "garbo",
    "garofano",
    "garzone",
    "gasdotto",
    "gasolio",
    "gastrico",
    "gatto",
    "gaudio",
    "gazebo",
    "gazzella",
    "geco",
    "gelatina",
    "gelso",
    "gemello",
    "gemmato",
    "gene",
    "genitore",
    "gennaio",
    "genotipo",
    "gergo",
    "ghepardo",
    "ghiaccio",
    "ghisa",
    "giallo",
    "gilda",
    "ginepro",
    "giocare",
    "gioiello",
    "giorno",
    "giove",
    "girato",
    "girone",
    "gittata",
    "giudizio",
    "giurato",
    "giusto",
    "globulo",
    "glutine",
    "gnomo",
    "gobba",
    "golf",
    "gomito",
    "gommone",
    "gonfio",
    "gonna",
    "governo",
    "gracile",
    "grado",
    "grafico",
    "grammo",
    "grande",
    "grattare",
    "gravoso",
    "grazia",
    "greca",
    "gregge",
    "grifone",
    "grigio",
    "grinza",
    "grotta",
    "gruppo",
    "guadagno",
    "guaio",
    "guanto",
    "guardare",
    "gufo",
    "guidare",
    "ibernato",
    "icona",
    "identico",
    "idillio",
    "idolo",
    "idra",
    "idrico",
    "idrogeno",
    "igiene",
    "ignaro",
    "ignorato",
    "ilare",
    "illeso",
    "illogico",
    "illudere",
    "imballo",
    "imbevuto",
    "imbocco",
    "imbuto",
    "immane",
    "immerso",
    "immolato",
    "impacco",
    "impeto",
    "impiego",
    "importo",
    "impronta",
    "inalare",
    "inarcare",
    "inattivo",
    "incanto",
    "incendio",
    "inchino",
    "incisivo",
    "incluso",
    "incontro",
    "incrocio",
    "incubo",
    "indagine",
    "india",
    "indole",
    "inedito",
    "infatti",
    "infilare",
    "inflitto",
    "ingaggio",
    "ingegno",
    "inglese",
    "ingordo",
    "ingrosso",
    "innesco",
    "inodore",
    "inoltrare",
    "inondato",
    "insano",
    "insetto",
    "insieme",
    "insonnia",
    "insulina",
    "intasato",
    "intero",
    "intonaco",
    "intuito",
    "inumidire",
    "invalido",
    "invece",
    "invito",
    "iperbole",
    "ipnotico",
    "ipotesi",
    "ippica",
    "iride",
    "irlanda",
    "ironico",
    "irrigato",
    "irrorare",
    "isolato",
    "isotopo",
    "isterico",
    "istituto",
    "istrice",
    "italia",
    "iterare",
    "labbro",
    "labirinto",
    "lacca",
    "lacerato",
    "lacrima",
    "lacuna",
    "laddove",
    "lago",
    "lampo",
    "lancetta",
    "lanterna",
    "lardoso",
    "larga",
    "laringe",
    "lastra",
    "latenza",
    "latino",
    "lattuga",
    "lavagna",
    "lavoro",
    "legale",
    "leggero",
    "lembo",
    "lentezza",
    "lenza",
    "leone",
    "lepre",
    "lesivo",
    "lessato",
    "lesto",
    "letterale",
    "leva",
    "levigato",
    "libero",
    "lido",
    "lievito",
    "lilla",
    "limatura",
    "limitare",
    "limpido",
    "lineare",
    "lingua",
    "liquido",
    "lira",
    "lirica",
    "lisca",
    "lite",
    "litigio",
    "livrea",
    "locanda",
    "lode",
    "logica",
    "lombare",
    "londra",
    "longevo",
    "loquace",
    "lorenzo",
    "loto",
    "lotteria",
    "luce",
    "lucidato",
    "lumaca",
    "luminoso",
    "lungo",
    "lupo",
    "luppolo",
    "lusinga",
    "lusso",
    "lutto",
    "macabro",
    "macchina",
    "macero",
    "macinato",
    "madama",
    "magico",
    "maglia",
    "magnete",
    "magro",
    "maiolica",
    "malafede",
    "malgrado",
    "malinteso",
    "malsano",
    "malto",
    "malumore",
    "mana",
    "mancia",
    "mandorla",
    "mangiare",
    "manifesto",
    "mannaro",
    "manovra",
    "mansarda",
    "mantide",
    "manubrio",
    "mappa",
    "maratona",
    "marcire",
    "maretta",
    "marmo",
    "marsupio",
    "maschera",
    "massaia",
    "mastino",
    "materasso",
    "matricola",
    "mattone",
    "maturo",
    "mazurca",
    "meandro",
    "meccanico",
    "mecenate",
    "medesimo",
    "meditare",
    "mega",
    "melassa",
    "melis",
    "melodia",
    "meninge",
    "meno",
    "mensola",
    "mercurio",
    "merenda",
    "merlo",
    "meschino",
    "mese",
    "messere",
    "mestolo",
    "metallo",
    "metodo",
    "mettere",
    "miagolare",
    "mica",
    "micelio",
    "michele",
    "microbo",
    "midollo",
    "miele",
    "migliore",
    "milano",
    "milite",
    "mimosa",
    "minerale",
    "mini",
    "minore",
    "mirino",
    "mirtillo",
    "miscela",
    "missiva",
    "misto",
    "misurare",
    "mitezza",
    "mitigare",
    "mitra",
    "mittente",
    "mnemonico",
    "modello",
    "modifica",
    "modulo",
    "mogano",
    "mogio",
    "mole",
    "molosso",
    "monastero",
    "monco",
    "mondina",
    "monetario",
    "monile",
    "monotono",
    "monsone",
    "montato",
    "monviso",
    "mora",
    "mordere",
    "morsicato",
    "mostro",
    "motivato",
    "motosega",
    "motto",
    "movenza",
    "movimento",
    "mozzo",
    "mucca",
    "mucosa",
    "muffa",
    "mughetto",
    "mugnaio",
    "mulatto",
    "mulinello",
    "multiplo",
    "mummia",
    "munto",
    "muovere",
    "murale",
    "musa",
    "muscolo",
    "musica",
    "mutevole",
    "muto",
    "nababbo",
    "nafta",
    "nanometro",
    "narciso",
    "narice",
    "narrato",
    "nascere",
    "nastrare",
    "naturale",
    "nautica",
    "naviglio",
    "nebulosa",
    "necrosi",
    "negativo",
    "negozio",
    "nemmeno",
    "neofita",
    "neretto",
    "nervo",
    "nessuno",
    "nettuno",
    "neutrale",
    "neve",
    "nevrotico",
    "nicchia",
    "ninfa",
    "nitido",
    "nobile",
    "nocivo",
    "nodo",
    "nome",
    "nomina",
    "nordico",
    "normale",
    "norvegese",
    "nostrano",
    "notare",
    "notizia",
    "notturno",
    "novella",
    "nucleo",
    "nulla",
    "numero",
    "nuovo",
    "nutrire",
    "nuvola",
    "nuziale",
    "oasi",
    "obbedire",
    "obbligo",
    "obelisco",
    "oblio",
    "obolo",
    "obsoleto",
    "occasione",
    "occhio",
    "occidente",
    "occorrere",
    "occultare",
    "ocra",
    "oculato",
    "odierno",
    "odorare",
    "offerta",
    "offrire",
    "offuscato",
    "oggetto",
    "oggi",
    "ognuno",
    "olandese",
    "olfatto",
    "oliato",
    "oliva",
    "ologramma",
    "oltre",
    "omaggio",
    "ombelico",
    "ombra",
    "omega",
    "omissione",
    "ondoso",
    "onere",
    "onice",
    "onnivoro",
    "onorevole",
    "onta",
    "operato",
    "opinione",
    "opposto",
    "oracolo",
    "orafo",
    "ordine",
    "orecchino",
    "orefice",
    "orfano",
    "organico",
    "origine",
    "orizzonte",
    "orma",
    "ormeggio",
    "ornativo",
    "orologio",
    "orrendo",
    "orribile",
    "ortensia",
    "ortica",
    "orzata",
    "orzo",
    "osare",
    "oscurare",
    "osmosi",
    "ospedale",
    "ospite",
    "ossa",
    "ossidare",
    "ostacolo",
    "oste",
    "otite",
    "otre",
    "ottagono",
    "ottimo",
    "ottobre",
    "ovale",
    "ovest",
    "ovino",
    "oviparo",
    "ovocito",
    "ovunque",
    "ovviare",
    "ozio",
    "pacchetto",
    "pace",
    "pacifico",
    "padella",
    "padrone",
    "paese",
    "paga",
    "pagina",
    "palazzina",
    "palesare",
    "pallido",
    "palo",
    "palude",
    "pandoro",
    "pannello",
    "paolo",
    "paonazzo",
    "paprica",
    "parabola",
    "parcella",
    "parere",
    "pargolo",
    "pari",
    "parlato",
    "parola",
    "partire",
    "parvenza",
    "parziale",
    "passivo",
    "pasticca",
    "patacca",
    "patologia",
    "pattume",
    "pavone",
    "peccato",
    "pedalare",
    "pedonale",
    "peggio",
    "peloso",
    "penare",
    "pendice",
    "penisola",
    "pennuto",
    "penombra",
    "pensare",
    "pentola",
    "pepe",
    "pepita",
    "perbene",
    "percorso",
    "perdonato",
    "perforare",
    "pergamena",
    "periodo",
    "permesso",
    "perno",
    "perplesso",
    "persuaso",
    "pertugio",
    "pervaso",
    "pesatore",
    "pesista",
    "peso",
    "pestifero",
    "petalo",
    "pettine",
    "petulante",
    "pezzo",
    "piacere",
    "pianta",
    "piattino",
    "piccino",
    "picozza",
    "piega",
    "pietra",
    "piffero",
    "pigiama",
    "pigolio",
    "pigro",
    "pila",
    "pilifero",
    "pillola",
    "pilota",
    "pimpante",
    "pineta",
    "pinna",
    "pinolo",
    "pioggia",
    "piombo",
    "piramide",
    "piretico",
    "pirite",
    "pirolisi",
    "pitone",
    "pizzico",
    "placebo",
    "planare",
    "plasma",
    "platano",
    "plenario",
    "pochezza",
    "poderoso",
    "podismo",
    "poesia",
    "poggiare",
    "polenta",
    "poligono",
    "pollice",
    "polmonite",
    "polpetta",
    "polso",
    "poltrona",
    "polvere",
    "pomice",
    "pomodoro",
    "ponte",
    "popoloso",
    "porfido",
    "poroso",
    "porpora",
    "porre",
    "portata",
    "posa",
    "positivo",
    "possesso",
    "postulato",
    "potassio",
    "potere",
    "pranzo",
    "prassi",
    "pratica",
    "precluso",
    "predica",
    "prefisso",
    "pregiato",
    "prelievo",
    "premere",
    "prenotare",
    "preparato",
    "presenza",
    "pretesto",
    "prevalso",
    "prima",
    "principe",
    "privato",
    "problema",
    "procura",
    "produrre",
    "profumo",
    "progetto",
    "prolunga",
    "promessa",
    "pronome",
    "proposta",
    "proroga",
    "proteso",
    "prova",
    "prudente",
    "prugna",
    "prurito",
    "psiche",
    "pubblico",
    "pudica",
    "pugilato",
    "pugno",
    "pulce",
    "pulito",
    "pulsante",
    "puntare",
    "pupazzo",
    "pupilla",
    "puro",
    "quadro",
    "qualcosa",
    "quasi",
    "querela",
    "quota",
    "raccolto",
    "raddoppio",
    "radicale",
    "radunato",
    "raffica",
    "ragazzo",
    "ragione",
    "ragno",
    "ramarro",
    "ramingo",
    "ramo",
    "randagio",
    "rantolare",
    "rapato",
    "rapina",
    "rappreso",
    "rasatura",
    "raschiato",
    "rasente",
    "rassegna",
    "rastrello",
    "rata",
    "ravveduto",
    "reale",
    "recepire",
    "recinto",
    "recluta",
    "recondito",
    "recupero",
    "reddito",
    "redimere",
    "regalato",
    "registro",
    "regola",
    "regresso",
    "relazione",
    "remare",
    "remoto",
    "renna",
    "replica",
    "reprimere",
    "reputare",
    "resa",
    "residente",
    "responso",
    "restauro",
    "rete",
    "retina",
    "retorica",
    "rettifica",
    "revocato",
    "riassunto",
    "ribadire",
    "ribelle",
    "ribrezzo",
    "ricarica",
    "ricco",
    "ricevere",
    "riciclato",
    "ricordo",
    "ricreduto",
    "ridicolo",
    "ridurre",
    "rifasare",
    "riflesso",
    "riforma",
    "rifugio",
    "rigare",
    "rigettato",
    "righello",
    "rilassato",
    "rilevato",
    "rimanere",
    "rimbalzo",
    "rimedio",
    "rimorchio",
    "rinascita",
    "rincaro",
    "rinforzo",
    "rinnovo",
    "rinomato",
    "rinsavito",
    "rintocco",
    "rinuncia",
    "rinvenire",
    "riparato",
    "ripetuto",
    "ripieno",
    "riportare",
    "ripresa",
    "ripulire",
    "risata",
    "rischio",
    "riserva",
    "risibile",
    "riso",
    "rispetto",
    "ristoro",
    "risultato",
    "risvolto",
    "ritardo",
    "ritegno",
    "ritmico",
    "ritrovo",
    "riunione",
    "riva",
    "riverso",
    "rivincita",
    "rivolto",
    "rizoma",
    "roba",
    "robotico",
    "robusto",
    "roccia",
    "roco",
    "rodaggio",
    "rodere",
    "roditore",
    "rogito",
    "rollio",
    "romantico",
    "rompere",
    "ronzio",
    "rosolare",
    "rospo",
    "rotante",
    "rotondo",
    "rotula",
    "rovescio",
    "rubizzo",
    "rubrica",
    "ruga",
    "rullino",
    "rumine",
    "rumoroso",
    "ruolo",
    "rupe",
    "russare",
    "rustico",
    "sabato",
    "sabbiare",
    "sabotato",
    "sagoma",
    "salasso",
    "saldatura",
    "salgemma",
    "salivare",
    "salmone",
    "salone",
    "saltare",
    "saluto",
    "salvo",
    "sapere",
    "sapido",
    "saporito",
    "saraceno",
    "sarcasmo",
    "sarto",
    "sassoso",
    "satellite",
    "satira",
    "satollo",
    "saturno",
    "savana",
    "savio",
    "saziato",
    "sbadiglio",
    "sbalzo",
    "sbancato",
    "sbarra",
    "sbattere",
    "sbavare",
    "sbendare",
    "sbirciare",
    "sbloccato",
    "sbocciato",
    "sbrinare",
    "sbruffone",
    "sbuffare",
    "scabroso",
    "scadenza",
    "scala",
    "scambiare",
    "scandalo",
    "scapola",
    "scarso",
    "scatenare",
    "scavato",
    "scelto",
    "scenico",
    "scettro",
    "scheda",
    "schiena",
    "sciarpa",
    "scienza",
    "scindere",
    "scippo",
    "sciroppo",
    "scivolo",
    "sclerare",
    "scodella",
    "scolpito",
    "scomparto",
    "sconforto",
    "scoprire",
    "scorta",
    "scossone",
    "scozzese",
    "scriba",
    "scrollare",
    "scrutinio",
    "scuderia",
    "scultore",
    "scuola",
    "scuro",
    "scusare",
    "sdebitare",
    "sdoganare",
    "seccatura",
    "secondo",
    "sedano",
    "seggiola",
    "segnalato",
    "segregato",
    "seguito",
    "selciato",
    "selettivo",
    "sella",
    "selvaggio",
    "semaforo",
    "sembrare",
    "seme",
    "seminato",
    "sempre",
    "senso",
    "sentire",
    "sepolto",
    "sequenza",
    "serata",
    "serbato",
    "sereno",
    "serio",
    "serpente",
    "serraglio",
    "servire",
    "sestina",
    "setola",
    "settimana",
    "sfacelo",
    "sfaldare",
    "sfamato",
    "sfarzoso",
    "sfaticato",
    "sfera",
    "sfida",
    "sfilato",
    "sfinge",
    "sfocato",
    "sfoderare",
    "sfogo",
    "sfoltire",
    "sforzato",
    "sfratto",
    "sfruttato",
    "sfuggito",
    "sfumare",
    "sfuso",
    "sgabello",
    "sgarbato",
    "sgonfiare",
    "sgorbio",
    "sgrassato",
    "sguardo",
    "sibilo",
    "siccome",
    "sierra",
    "sigla",
    "signore",
    "silenzio",
    "sillaba",
    "simbolo",
    "simpatico",
    "simulato",
    "sinfonia",
    "singolo",
    "sinistro",
    "sino",
    "sintesi",
    "sinusoide",
    "sipario",
    "sisma",
    "sistole",
    "situato",
    "slitta",
    "slogatura",
    "sloveno",
    "smarrito",
    "smemorato",
    "smentito",
    "smeraldo",
    "smilzo",
    "smontare",
    "smottato",
    "smussato",
    "snellire",
    "snervato",
    "snodo",
    "sobbalzo",
    "sobrio",
    "soccorso",
    "sociale",
    "sodale",
    "soffitto",
    "sogno",
    "soldato",
    "solenne",
    "solido",
    "sollazzo",
    "solo",
    "solubile",
    "solvente",
    "somatico",
    "somma",
    "sonda",
    "sonetto",
    "sonnifero",
    "sopire",
    "soppeso",
    "sopra",
    "sorgere",
    "sorpasso",
    "sorriso",
    "sorso",
    "sorteggio",
    "sorvolato",
    "sospiro",
    "sosta",
    "sottile",
    "spada",
    "spalla",
    "spargere",
    "spatola",
    "spavento",
    "spazzola",
    "specie",
    "spedire",
    "spegnere",
    "spelatura",
    "speranza",
    "spessore",
    "spettrale",
    "spezzato",
    "spia",
    "spigoloso",
    "spillato",
    "spinoso",
    "spirale",
    "splendido",
    "sportivo",
    "sposo",
    "spranga",
    "sprecare",
    "spronato",
    "spruzzo",
    "spuntino",
    "squillo",
    "sradicare",
    "srotolato",
    "stabile",
    "stacco",
    "staffa",
    "stagnare",
    "stampato",
    "stantio",
    "starnuto",
    "stasera",
    "statuto",
    "stelo",
    "steppa",
    "sterzo",
    "stiletto",
    "stima",
    "stirpe",
    "stivale",
    "stizzoso",
    "stonato",
    "storico",
    "strappo",
    "stregato",
    "stridulo",
    "strozzare",
    "strutto",
    "stuccare",
    "stufo",
    "stupendo",
    "subentro",
    "succoso",
    "sudore",
    "suggerito",
    "sugo",
    "sultano",
    "suonare",
    "superbo",
    "supporto",
    "surgelato",
    "surrogato",
    "sussurro",
    "sutura",
    "svagare",
    "svedese",
    "sveglio",
    "svelare",
    "svenuto",
    "svezia",
    "sviluppo",
    "svista",
    "svizzera",
    "svolta",
    "svuotare",
    "tabacco",
    "tabulato",
    "tacciare",
    "taciturno",
    "tale",
    "talismano",
    "tampone",
    "tannino",
    "tara",
    "tardivo",
    "targato",
    "tariffa",
    "tarpare",
    "tartaruga",
    "tasto",
    "tattico",
    "taverna",
    "tavolata",
    "tazza",
    "teca",
    "tecnico",
    "telefono",
    "temerario",
    "tempo",
    "temuto",
    "tendone",
    "tenero",
    "tensione",
    "tentacolo",
    "teorema",
    "terme",
    "terrazzo",
    "terzetto",
    "tesi",
    "tesserato",
    "testato",
    "tetro",
    "tettoia",
    "tifare",
    "tigella",
    "timbro",
    "tinto",
    "tipico",
    "tipografo",
    "tiraggio",
    "tiro",
    "titanio",
    "titolo",
    "titubante",
    "tizio",
    "tizzone",
    "toccare",
    "tollerare",
    "tolto",
    "tombola",
    "tomo",
    "tonfo",
    "tonsilla",
    "topazio",
    "topologia",
    "toppa",
    "torba",
    "tornare",
    "torrone",
    "tortora",
    "toscano",
    "tossire",
    "tostatura",
    "totano",
    "trabocco",
    "trachea",
    "trafila",
    "tragedia",
    "tralcio",
    "tramonto",
    "transito",
    "trapano",
    "trarre",
    "trasloco",
    "trattato",
    "trave",
    "treccia",
    "tremolio",
    "trespolo",
    "tributo",
    "tricheco",
    "trifoglio",
    "trillo",
    "trincea",
    "trio",
    "tristezza",
    "triturato",
    "trivella",
    "tromba",
    "trono",
    "troppo",
    "trottola",
    "trovare",
    "truccato",
    "tubatura",
    "tuffato",
    "tulipano",
    "tumulto",
    "tunisia",
    "turbare",
    "turchino",
    "tuta",
    "tutela",
    "ubicato",
    "uccello",
    "uccisore",
    "udire",
    "uditivo",
    "uffa",
    "ufficio",
    "uguale",
    "ulisse",
    "ultimato",
    "umano",
    "umile",
    "umorismo",
    "uncinetto",
    "ungere",
    "ungherese",
    "unicorno",
    "unificato",
    "unisono",
    "unitario",
    "unte",
    "uovo",
    "upupa",
    "uragano",
    "urgenza",
    "urlo",
    "usanza",
    "usato",
    "uscito",
    "usignolo",
    "usuraio",
    "utensile",
    "utilizzo",
    "utopia",
    "vacante",
    "vaccinato",
    "vagabondo",
    "vagliato",
    "valanga",
    "valgo",
    "valico",
    "valletta",
    "valoroso",
    "valutare",
    "valvola",
    "vampata",
    "vangare",
    "vanitoso",
    "vano",
    "vantaggio",
    "vanvera",
    "vapore",
    "varano",
    "varcato",
    "variante",
    "vasca",
    "vedetta",
    "vedova",
    "veduto",
    "vegetale",
    "veicolo",
    "velcro",
    "velina",
    "velluto",
    "veloce",
    "venato",
    "vendemmia",
    "vento",
    "verace",
    "verbale",
    "vergogna",
    "verifica",
    "vero",
    "verruca",
    "verticale",
    "vescica",
    "vessillo",
    "vestale",
    "veterano",
    "vetrina",
    "vetusto",
    "viandante",
    "vibrante",
    "vicenda",
    "vichingo",
    "vicinanza",
    "vidimare",
    "vigilia",
    "vigneto",
    "vigore",
    "vile",
    "villano",
    "vimini",
    "vincitore",
    "viola",
    "vipera",
    "virgola",
    "virologo",
    "virulento",
    "viscoso",
    "visione",
    "vispo",
    "vissuto",
    "visura",
    "vita",
    "vitello",
    "vittima",
    "vivanda",
    "vivido",
    "viziare",
    "voce",
    "voga",
    "volatile",
    "volere",
    "volpe",
    "voragine",
    "vulcano",
    "zampogna",
    "zanna",
    "zappato",
    "zattera",
    "zavorra",
    "zefiro",
    "zelante",
    "zelo",
    "zenzero",
    "zerbino",
    "zibetto",
    "zinco",
    "zircone",
    "zitto",
    "zolla",
    "zotico",
    "zucchero",
    "zufolo",
    "zulu",
    "zuppa"
  ], bp = [
    "a\u0301baco",
    "abdomen",
    "abeja",
    "abierto",
    "abogado",
    "abono",
    "aborto",
    "abrazo",
    "abrir",
    "abuelo",
    "abuso",
    "acabar",
    "academia",
    "acceso",
    "accio\u0301n",
    "aceite",
    "acelga",
    "acento",
    "aceptar",
    "a\u0301cido",
    "aclarar",
    "acne\u0301",
    "acoger",
    "acoso",
    "activo",
    "acto",
    "actriz",
    "actuar",
    "acudir",
    "acuerdo",
    "acusar",
    "adicto",
    "admitir",
    "adoptar",
    "adorno",
    "aduana",
    "adulto",
    "ae\u0301reo",
    "afectar",
    "aficio\u0301n",
    "afinar",
    "afirmar",
    "a\u0301gil",
    "agitar",
    "agoni\u0301a",
    "agosto",
    "agotar",
    "agregar",
    "agrio",
    "agua",
    "agudo",
    "a\u0301guila",
    "aguja",
    "ahogo",
    "ahorro",
    "aire",
    "aislar",
    "ajedrez",
    "ajeno",
    "ajuste",
    "alacra\u0301n",
    "alambre",
    "alarma",
    "alba",
    "a\u0301lbum",
    "alcalde",
    "aldea",
    "alegre",
    "alejar",
    "alerta",
    "aleta",
    "alfiler",
    "alga",
    "algodo\u0301n",
    "aliado",
    "aliento",
    "alivio",
    "alma",
    "almeja",
    "almi\u0301bar",
    "altar",
    "alteza",
    "altivo",
    "alto",
    "altura",
    "alumno",
    "alzar",
    "amable",
    "amante",
    "amapola",
    "amargo",
    "amasar",
    "a\u0301mbar",
    "a\u0301mbito",
    "ameno",
    "amigo",
    "amistad",
    "amor",
    "amparo",
    "amplio",
    "ancho",
    "anciano",
    "ancla",
    "andar",
    "ande\u0301n",
    "anemia",
    "a\u0301ngulo",
    "anillo",
    "a\u0301nimo",
    "ani\u0301s",
    "anotar",
    "antena",
    "antiguo",
    "antojo",
    "anual",
    "anular",
    "anuncio",
    "an\u0303adir",
    "an\u0303ejo",
    "an\u0303o",
    "apagar",
    "aparato",
    "apetito",
    "apio",
    "aplicar",
    "apodo",
    "aporte",
    "apoyo",
    "aprender",
    "aprobar",
    "apuesta",
    "apuro",
    "arado",
    "aran\u0303a",
    "arar",
    "a\u0301rbitro",
    "a\u0301rbol",
    "arbusto",
    "archivo",
    "arco",
    "arder",
    "ardilla",
    "arduo",
    "a\u0301rea",
    "a\u0301rido",
    "aries",
    "armoni\u0301a",
    "arne\u0301s",
    "aroma",
    "arpa",
    "arpo\u0301n",
    "arreglo",
    "arroz",
    "arruga",
    "arte",
    "artista",
    "asa",
    "asado",
    "asalto",
    "ascenso",
    "asegurar",
    "aseo",
    "asesor",
    "asiento",
    "asilo",
    "asistir",
    "asno",
    "asombro",
    "a\u0301spero",
    "astilla",
    "astro",
    "astuto",
    "asumir",
    "asunto",
    "atajo",
    "ataque",
    "atar",
    "atento",
    "ateo",
    "a\u0301tico",
    "atleta",
    "a\u0301tomo",
    "atraer",
    "atroz",
    "atu\u0301n",
    "audaz",
    "audio",
    "auge",
    "aula",
    "aumento",
    "ausente",
    "autor",
    "aval",
    "avance",
    "avaro",
    "ave",
    "avellana",
    "avena",
    "avestruz",
    "avio\u0301n",
    "aviso",
    "ayer",
    "ayuda",
    "ayuno",
    "azafra\u0301n",
    "azar",
    "azote",
    "azu\u0301car",
    "azufre",
    "azul",
    "baba",
    "babor",
    "bache",
    "bahi\u0301a",
    "baile",
    "bajar",
    "balanza",
    "balco\u0301n",
    "balde",
    "bambu\u0301",
    "banco",
    "banda",
    "ban\u0303o",
    "barba",
    "barco",
    "barniz",
    "barro",
    "ba\u0301scula",
    "basto\u0301n",
    "basura",
    "batalla",
    "bateri\u0301a",
    "batir",
    "batuta",
    "bau\u0301l",
    "bazar",
    "bebe\u0301",
    "bebida",
    "bello",
    "besar",
    "beso",
    "bestia",
    "bicho",
    "bien",
    "bingo",
    "blanco",
    "bloque",
    "blusa",
    "boa",
    "bobina",
    "bobo",
    "boca",
    "bocina",
    "boda",
    "bodega",
    "boina",
    "bola",
    "bolero",
    "bolsa",
    "bomba",
    "bondad",
    "bonito",
    "bono",
    "bonsa\u0301i",
    "borde",
    "borrar",
    "bosque",
    "bote",
    "boti\u0301n",
    "bo\u0301veda",
    "bozal",
    "bravo",
    "brazo",
    "brecha",
    "breve",
    "brillo",
    "brinco",
    "brisa",
    "broca",
    "broma",
    "bronce",
    "brote",
    "bruja",
    "brusco",
    "bruto",
    "buceo",
    "bucle",
    "bueno",
    "buey",
    "bufanda",
    "bufo\u0301n",
    "bu\u0301ho",
    "buitre",
    "bulto",
    "burbuja",
    "burla",
    "burro",
    "buscar",
    "butaca",
    "buzo\u0301n",
    "caballo",
    "cabeza",
    "cabina",
    "cabra",
    "cacao",
    "cada\u0301ver",
    "cadena",
    "caer",
    "cafe\u0301",
    "cai\u0301da",
    "caima\u0301n",
    "caja",
    "cajo\u0301n",
    "cal",
    "calamar",
    "calcio",
    "caldo",
    "calidad",
    "calle",
    "calma",
    "calor",
    "calvo",
    "cama",
    "cambio",
    "camello",
    "camino",
    "campo",
    "ca\u0301ncer",
    "candil",
    "canela",
    "canguro",
    "canica",
    "canto",
    "can\u0303a",
    "can\u0303o\u0301n",
    "caoba",
    "caos",
    "capaz",
    "capita\u0301n",
    "capote",
    "captar",
    "capucha",
    "cara",
    "carbo\u0301n",
    "ca\u0301rcel",
    "careta",
    "carga",
    "carin\u0303o",
    "carne",
    "carpeta",
    "carro",
    "carta",
    "casa",
    "casco",
    "casero",
    "caspa",
    "castor",
    "catorce",
    "catre",
    "caudal",
    "causa",
    "cazo",
    "cebolla",
    "ceder",
    "cedro",
    "celda",
    "ce\u0301lebre",
    "celoso",
    "ce\u0301lula",
    "cemento",
    "ceniza",
    "centro",
    "cerca",
    "cerdo",
    "cereza",
    "cero",
    "cerrar",
    "certeza",
    "ce\u0301sped",
    "cetro",
    "chacal",
    "chaleco",
    "champu\u0301",
    "chancla",
    "chapa",
    "charla",
    "chico",
    "chiste",
    "chivo",
    "choque",
    "choza",
    "chuleta",
    "chupar",
    "ciclo\u0301n",
    "ciego",
    "cielo",
    "cien",
    "cierto",
    "cifra",
    "cigarro",
    "cima",
    "cinco",
    "cine",
    "cinta",
    "cipre\u0301s",
    "circo",
    "ciruela",
    "cisne",
    "cita",
    "ciudad",
    "clamor",
    "clan",
    "claro",
    "clase",
    "clave",
    "cliente",
    "clima",
    "cli\u0301nica",
    "cobre",
    "coccio\u0301n",
    "cochino",
    "cocina",
    "coco",
    "co\u0301digo",
    "codo",
    "cofre",
    "coger",
    "cohete",
    "coji\u0301n",
    "cojo",
    "cola",
    "colcha",
    "colegio",
    "colgar",
    "colina",
    "collar",
    "colmo",
    "columna",
    "combate",
    "comer",
    "comida",
    "co\u0301modo",
    "compra",
    "conde",
    "conejo",
    "conga",
    "conocer",
    "consejo",
    "contar",
    "copa",
    "copia",
    "corazo\u0301n",
    "corbata",
    "corcho",
    "cordo\u0301n",
    "corona",
    "correr",
    "coser",
    "cosmos",
    "costa",
    "cra\u0301neo",
    "cra\u0301ter",
    "crear",
    "crecer",
    "crei\u0301do",
    "crema",
    "cri\u0301a",
    "crimen",
    "cripta",
    "crisis",
    "cromo",
    "cro\u0301nica",
    "croqueta",
    "crudo",
    "cruz",
    "cuadro",
    "cuarto",
    "cuatro",
    "cubo",
    "cubrir",
    "cuchara",
    "cuello",
    "cuento",
    "cuerda",
    "cuesta",
    "cueva",
    "cuidar",
    "culebra",
    "culpa",
    "culto",
    "cumbre",
    "cumplir",
    "cuna",
    "cuneta",
    "cuota",
    "cupo\u0301n",
    "cu\u0301pula",
    "curar",
    "curioso",
    "curso",
    "curva",
    "cutis",
    "dama",
    "danza",
    "dar",
    "dardo",
    "da\u0301til",
    "deber",
    "de\u0301bil",
    "de\u0301cada",
    "decir",
    "dedo",
    "defensa",
    "definir",
    "dejar",
    "delfi\u0301n",
    "delgado",
    "delito",
    "demora",
    "denso",
    "dental",
    "deporte",
    "derecho",
    "derrota",
    "desayuno",
    "deseo",
    "desfile",
    "desnudo",
    "destino",
    "desvi\u0301o",
    "detalle",
    "detener",
    "deuda",
    "di\u0301a",
    "diablo",
    "diadema",
    "diamante",
    "diana",
    "diario",
    "dibujo",
    "dictar",
    "diente",
    "dieta",
    "diez",
    "difi\u0301cil",
    "digno",
    "dilema",
    "diluir",
    "dinero",
    "directo",
    "dirigir",
    "disco",
    "disen\u0303o",
    "disfraz",
    "diva",
    "divino",
    "doble",
    "doce",
    "dolor",
    "domingo",
    "don",
    "donar",
    "dorado",
    "dormir",
    "dorso",
    "dos",
    "dosis",
    "drago\u0301n",
    "droga",
    "ducha",
    "duda",
    "duelo",
    "duen\u0303o",
    "dulce",
    "du\u0301o",
    "duque",
    "durar",
    "dureza",
    "duro",
    "e\u0301bano",
    "ebrio",
    "echar",
    "eco",
    "ecuador",
    "edad",
    "edicio\u0301n",
    "edificio",
    "editor",
    "educar",
    "efecto",
    "eficaz",
    "eje",
    "ejemplo",
    "elefante",
    "elegir",
    "elemento",
    "elevar",
    "elipse",
    "e\u0301lite",
    "elixir",
    "elogio",
    "eludir",
    "embudo",
    "emitir",
    "emocio\u0301n",
    "empate",
    "empen\u0303o",
    "empleo",
    "empresa",
    "enano",
    "encargo",
    "enchufe",
    "enci\u0301a",
    "enemigo",
    "enero",
    "enfado",
    "enfermo",
    "engan\u0303o",
    "enigma",
    "enlace",
    "enorme",
    "enredo",
    "ensayo",
    "ensen\u0303ar",
    "entero",
    "entrar",
    "envase",
    "envi\u0301o",
    "e\u0301poca",
    "equipo",
    "erizo",
    "escala",
    "escena",
    "escolar",
    "escribir",
    "escudo",
    "esencia",
    "esfera",
    "esfuerzo",
    "espada",
    "espejo",
    "espi\u0301a",
    "esposa",
    "espuma",
    "esqui\u0301",
    "estar",
    "este",
    "estilo",
    "estufa",
    "etapa",
    "eterno",
    "e\u0301tica",
    "etnia",
    "evadir",
    "evaluar",
    "evento",
    "evitar",
    "exacto",
    "examen",
    "exceso",
    "excusa",
    "exento",
    "exigir",
    "exilio",
    "existir",
    "e\u0301xito",
    "experto",
    "explicar",
    "exponer",
    "extremo",
    "fa\u0301brica",
    "fa\u0301bula",
    "fachada",
    "fa\u0301cil",
    "factor",
    "faena",
    "faja",
    "falda",
    "fallo",
    "falso",
    "faltar",
    "fama",
    "familia",
    "famoso",
    "farao\u0301n",
    "farmacia",
    "farol",
    "farsa",
    "fase",
    "fatiga",
    "fauna",
    "favor",
    "fax",
    "febrero",
    "fecha",
    "feliz",
    "feo",
    "feria",
    "feroz",
    "fe\u0301rtil",
    "fervor",
    "festi\u0301n",
    "fiable",
    "fianza",
    "fiar",
    "fibra",
    "ficcio\u0301n",
    "ficha",
    "fideo",
    "fiebre",
    "fiel",
    "fiera",
    "fiesta",
    "figura",
    "fijar",
    "fijo",
    "fila",
    "filete",
    "filial",
    "filtro",
    "fin",
    "finca",
    "fingir",
    "finito",
    "firma",
    "flaco",
    "flauta",
    "flecha",
    "flor",
    "flota",
    "fluir",
    "flujo",
    "flu\u0301or",
    "fobia",
    "foca",
    "fogata",
    "fogo\u0301n",
    "folio",
    "folleto",
    "fondo",
    "forma",
    "forro",
    "fortuna",
    "forzar",
    "fosa",
    "foto",
    "fracaso",
    "fra\u0301gil",
    "franja",
    "frase",
    "fraude",
    "frei\u0301r",
    "freno",
    "fresa",
    "fri\u0301o",
    "frito",
    "fruta",
    "fuego",
    "fuente",
    "fuerza",
    "fuga",
    "fumar",
    "funcio\u0301n",
    "funda",
    "furgo\u0301n",
    "furia",
    "fusil",
    "fu\u0301tbol",
    "futuro",
    "gacela",
    "gafas",
    "gaita",
    "gajo",
    "gala",
    "galeri\u0301a",
    "gallo",
    "gamba",
    "ganar",
    "gancho",
    "ganga",
    "ganso",
    "garaje",
    "garza",
    "gasolina",
    "gastar",
    "gato",
    "gavila\u0301n",
    "gemelo",
    "gemir",
    "gen",
    "ge\u0301nero",
    "genio",
    "gente",
    "geranio",
    "gerente",
    "germen",
    "gesto",
    "gigante",
    "gimnasio",
    "girar",
    "giro",
    "glaciar",
    "globo",
    "gloria",
    "gol",
    "golfo",
    "goloso",
    "golpe",
    "goma",
    "gordo",
    "gorila",
    "gorra",
    "gota",
    "goteo",
    "gozar",
    "grada",
    "gra\u0301fico",
    "grano",
    "grasa",
    "gratis",
    "grave",
    "grieta",
    "grillo",
    "gripe",
    "gris",
    "grito",
    "grosor",
    "gru\u0301a",
    "grueso",
    "grumo",
    "grupo",
    "guante",
    "guapo",
    "guardia",
    "guerra",
    "gui\u0301a",
    "guin\u0303o",
    "guion",
    "guiso",
    "guitarra",
    "gusano",
    "gustar",
    "haber",
    "ha\u0301bil",
    "hablar",
    "hacer",
    "hacha",
    "hada",
    "hallar",
    "hamaca",
    "harina",
    "haz",
    "hazan\u0303a",
    "hebilla",
    "hebra",
    "hecho",
    "helado",
    "helio",
    "hembra",
    "herir",
    "hermano",
    "he\u0301roe",
    "hervir",
    "hielo",
    "hierro",
    "hi\u0301gado",
    "higiene",
    "hijo",
    "himno",
    "historia",
    "hocico",
    "hogar",
    "hoguera",
    "hoja",
    "hombre",
    "hongo",
    "honor",
    "honra",
    "hora",
    "hormiga",
    "horno",
    "hostil",
    "hoyo",
    "hueco",
    "huelga",
    "huerta",
    "hueso",
    "huevo",
    "huida",
    "huir",
    "humano",
    "hu\u0301medo",
    "humilde",
    "humo",
    "hundir",
    "huraca\u0301n",
    "hurto",
    "icono",
    "ideal",
    "idioma",
    "i\u0301dolo",
    "iglesia",
    "iglu\u0301",
    "igual",
    "ilegal",
    "ilusio\u0301n",
    "imagen",
    "ima\u0301n",
    "imitar",
    "impar",
    "imperio",
    "imponer",
    "impulso",
    "incapaz",
    "i\u0301ndice",
    "inerte",
    "infiel",
    "informe",
    "ingenio",
    "inicio",
    "inmenso",
    "inmune",
    "innato",
    "insecto",
    "instante",
    "intere\u0301s",
    "i\u0301ntimo",
    "intuir",
    "inu\u0301til",
    "invierno",
    "ira",
    "iris",
    "ironi\u0301a",
    "isla",
    "islote",
    "jabali\u0301",
    "jabo\u0301n",
    "jamo\u0301n",
    "jarabe",
    "jardi\u0301n",
    "jarra",
    "jaula",
    "jazmi\u0301n",
    "jefe",
    "jeringa",
    "jinete",
    "jornada",
    "joroba",
    "joven",
    "joya",
    "juerga",
    "jueves",
    "juez",
    "jugador",
    "jugo",
    "juguete",
    "juicio",
    "junco",
    "jungla",
    "junio",
    "juntar",
    "ju\u0301piter",
    "jurar",
    "justo",
    "juvenil",
    "juzgar",
    "kilo",
    "koala",
    "labio",
    "lacio",
    "lacra",
    "lado",
    "ladro\u0301n",
    "lagarto",
    "la\u0301grima",
    "laguna",
    "laico",
    "lamer",
    "la\u0301mina",
    "la\u0301mpara",
    "lana",
    "lancha",
    "langosta",
    "lanza",
    "la\u0301piz",
    "largo",
    "larva",
    "la\u0301stima",
    "lata",
    "la\u0301tex",
    "latir",
    "laurel",
    "lavar",
    "lazo",
    "leal",
    "leccio\u0301n",
    "leche",
    "lector",
    "leer",
    "legio\u0301n",
    "legumbre",
    "lejano",
    "lengua",
    "lento",
    "len\u0303a",
    "leo\u0301n",
    "leopardo",
    "lesio\u0301n",
    "letal",
    "letra",
    "leve",
    "leyenda",
    "libertad",
    "libro",
    "licor",
    "li\u0301der",
    "lidiar",
    "lienzo",
    "liga",
    "ligero",
    "lima",
    "li\u0301mite",
    "limo\u0301n",
    "limpio",
    "lince",
    "lindo",
    "li\u0301nea",
    "lingote",
    "lino",
    "linterna",
    "li\u0301quido",
    "liso",
    "lista",
    "litera",
    "litio",
    "litro",
    "llaga",
    "llama",
    "llanto",
    "llave",
    "llegar",
    "llenar",
    "llevar",
    "llorar",
    "llover",
    "lluvia",
    "lobo",
    "locio\u0301n",
    "loco",
    "locura",
    "lo\u0301gica",
    "logro",
    "lombriz",
    "lomo",
    "lonja",
    "lote",
    "lucha",
    "lucir",
    "lugar",
    "lujo",
    "luna",
    "lunes",
    "lupa",
    "lustro",
    "luto",
    "luz",
    "maceta",
    "macho",
    "madera",
    "madre",
    "maduro",
    "maestro",
    "mafia",
    "magia",
    "mago",
    "mai\u0301z",
    "maldad",
    "maleta",
    "malla",
    "malo",
    "mama\u0301",
    "mambo",
    "mamut",
    "manco",
    "mando",
    "manejar",
    "manga",
    "maniqui\u0301",
    "manjar",
    "mano",
    "manso",
    "manta",
    "man\u0303ana",
    "mapa",
    "ma\u0301quina",
    "mar",
    "marco",
    "marea",
    "marfil",
    "margen",
    "marido",
    "ma\u0301rmol",
    "marro\u0301n",
    "martes",
    "marzo",
    "masa",
    "ma\u0301scara",
    "masivo",
    "matar",
    "materia",
    "matiz",
    "matriz",
    "ma\u0301ximo",
    "mayor",
    "mazorca",
    "mecha",
    "medalla",
    "medio",
    "me\u0301dula",
    "mejilla",
    "mejor",
    "melena",
    "melo\u0301n",
    "memoria",
    "menor",
    "mensaje",
    "mente",
    "menu\u0301",
    "mercado",
    "merengue",
    "me\u0301rito",
    "mes",
    "meso\u0301n",
    "meta",
    "meter",
    "me\u0301todo",
    "metro",
    "mezcla",
    "miedo",
    "miel",
    "miembro",
    "miga",
    "mil",
    "milagro",
    "militar",
    "millo\u0301n",
    "mimo",
    "mina",
    "minero",
    "mi\u0301nimo",
    "minuto",
    "miope",
    "mirar",
    "misa",
    "miseria",
    "misil",
    "mismo",
    "mitad",
    "mito",
    "mochila",
    "mocio\u0301n",
    "moda",
    "modelo",
    "moho",
    "mojar",
    "molde",
    "moler",
    "molino",
    "momento",
    "momia",
    "monarca",
    "moneda",
    "monja",
    "monto",
    "mon\u0303o",
    "morada",
    "morder",
    "moreno",
    "morir",
    "morro",
    "morsa",
    "mortal",
    "mosca",
    "mostrar",
    "motivo",
    "mover",
    "mo\u0301vil",
    "mozo",
    "mucho",
    "mudar",
    "mueble",
    "muela",
    "muerte",
    "muestra",
    "mugre",
    "mujer",
    "mula",
    "muleta",
    "multa",
    "mundo",
    "mun\u0303eca",
    "mural",
    "muro",
    "mu\u0301sculo",
    "museo",
    "musgo",
    "mu\u0301sica",
    "muslo",
    "na\u0301car",
    "nacio\u0301n",
    "nadar",
    "naipe",
    "naranja",
    "nariz",
    "narrar",
    "nasal",
    "natal",
    "nativo",
    "natural",
    "na\u0301usea",
    "naval",
    "nave",
    "navidad",
    "necio",
    "ne\u0301ctar",
    "negar",
    "negocio",
    "negro",
    "neo\u0301n",
    "nervio",
    "neto",
    "neutro",
    "nevar",
    "nevera",
    "nicho",
    "nido",
    "niebla",
    "nieto",
    "nin\u0303ez",
    "nin\u0303o",
    "ni\u0301tido",
    "nivel",
    "nobleza",
    "noche",
    "no\u0301mina",
    "noria",
    "norma",
    "norte",
    "nota",
    "noticia",
    "novato",
    "novela",
    "novio",
    "nube",
    "nuca",
    "nu\u0301cleo",
    "nudillo",
    "nudo",
    "nuera",
    "nueve",
    "nuez",
    "nulo",
    "nu\u0301mero",
    "nutria",
    "oasis",
    "obeso",
    "obispo",
    "objeto",
    "obra",
    "obrero",
    "observar",
    "obtener",
    "obvio",
    "oca",
    "ocaso",
    "oce\u0301ano",
    "ochenta",
    "ocho",
    "ocio",
    "ocre",
    "octavo",
    "octubre",
    "oculto",
    "ocupar",
    "ocurrir",
    "odiar",
    "odio",
    "odisea",
    "oeste",
    "ofensa",
    "oferta",
    "oficio",
    "ofrecer",
    "ogro",
    "oi\u0301do",
    "oi\u0301r",
    "ojo",
    "ola",
    "oleada",
    "olfato",
    "olivo",
    "olla",
    "olmo",
    "olor",
    "olvido",
    "ombligo",
    "onda",
    "onza",
    "opaco",
    "opcio\u0301n",
    "o\u0301pera",
    "opinar",
    "oponer",
    "optar",
    "o\u0301ptica",
    "opuesto",
    "oracio\u0301n",
    "orador",
    "oral",
    "o\u0301rbita",
    "orca",
    "orden",
    "oreja",
    "o\u0301rgano",
    "orgi\u0301a",
    "orgullo",
    "oriente",
    "origen",
    "orilla",
    "oro",
    "orquesta",
    "oruga",
    "osadi\u0301a",
    "oscuro",
    "osezno",
    "oso",
    "ostra",
    "oton\u0303o",
    "otro",
    "oveja",
    "o\u0301vulo",
    "o\u0301xido",
    "oxi\u0301geno",
    "oyente",
    "ozono",
    "pacto",
    "padre",
    "paella",
    "pa\u0301gina",
    "pago",
    "pai\u0301s",
    "pa\u0301jaro",
    "palabra",
    "palco",
    "paleta",
    "pa\u0301lido",
    "palma",
    "paloma",
    "palpar",
    "pan",
    "panal",
    "pa\u0301nico",
    "pantera",
    "pan\u0303uelo",
    "papa\u0301",
    "papel",
    "papilla",
    "paquete",
    "parar",
    "parcela",
    "pared",
    "parir",
    "paro",
    "pa\u0301rpado",
    "parque",
    "pa\u0301rrafo",
    "parte",
    "pasar",
    "paseo",
    "pasio\u0301n",
    "paso",
    "pasta",
    "pata",
    "patio",
    "patria",
    "pausa",
    "pauta",
    "pavo",
    "payaso",
    "peato\u0301n",
    "pecado",
    "pecera",
    "pecho",
    "pedal",
    "pedir",
    "pegar",
    "peine",
    "pelar",
    "peldan\u0303o",
    "pelea",
    "peligro",
    "pellejo",
    "pelo",
    "peluca",
    "pena",
    "pensar",
    "pen\u0303o\u0301n",
    "peo\u0301n",
    "peor",
    "pepino",
    "pequen\u0303o",
    "pera",
    "percha",
    "perder",
    "pereza",
    "perfil",
    "perico",
    "perla",
    "permiso",
    "perro",
    "persona",
    "pesa",
    "pesca",
    "pe\u0301simo",
    "pestan\u0303a",
    "pe\u0301talo",
    "petro\u0301leo",
    "pez",
    "pezun\u0303a",
    "picar",
    "picho\u0301n",
    "pie",
    "piedra",
    "pierna",
    "pieza",
    "pijama",
    "pilar",
    "piloto",
    "pimienta",
    "pino",
    "pintor",
    "pinza",
    "pin\u0303a",
    "piojo",
    "pipa",
    "pirata",
    "pisar",
    "piscina",
    "piso",
    "pista",
    "pito\u0301n",
    "pizca",
    "placa",
    "plan",
    "plata",
    "playa",
    "plaza",
    "pleito",
    "pleno",
    "plomo",
    "pluma",
    "plural",
    "pobre",
    "poco",
    "poder",
    "podio",
    "poema",
    "poesi\u0301a",
    "poeta",
    "polen",
    "polici\u0301a",
    "pollo",
    "polvo",
    "pomada",
    "pomelo",
    "pomo",
    "pompa",
    "poner",
    "porcio\u0301n",
    "portal",
    "posada",
    "poseer",
    "posible",
    "poste",
    "potencia",
    "potro",
    "pozo",
    "prado",
    "precoz",
    "pregunta",
    "premio",
    "prensa",
    "preso",
    "previo",
    "primo",
    "pri\u0301ncipe",
    "prisio\u0301n",
    "privar",
    "proa",
    "probar",
    "proceso",
    "producto",
    "proeza",
    "profesor",
    "programa",
    "prole",
    "promesa",
    "pronto",
    "propio",
    "pro\u0301ximo",
    "prueba",
    "pu\u0301blico",
    "puchero",
    "pudor",
    "pueblo",
    "puerta",
    "puesto",
    "pulga",
    "pulir",
    "pulmo\u0301n",
    "pulpo",
    "pulso",
    "puma",
    "punto",
    "pun\u0303al",
    "pun\u0303o",
    "pupa",
    "pupila",
    "pure\u0301",
    "quedar",
    "queja",
    "quemar",
    "querer",
    "queso",
    "quieto",
    "qui\u0301mica",
    "quince",
    "quitar",
    "ra\u0301bano",
    "rabia",
    "rabo",
    "racio\u0301n",
    "radical",
    "rai\u0301z",
    "rama",
    "rampa",
    "rancho",
    "rango",
    "rapaz",
    "ra\u0301pido",
    "rapto",
    "rasgo",
    "raspa",
    "rato",
    "rayo",
    "raza",
    "razo\u0301n",
    "reaccio\u0301n",
    "realidad",
    "reban\u0303o",
    "rebote",
    "recaer",
    "receta",
    "rechazo",
    "recoger",
    "recreo",
    "recto",
    "recurso",
    "red",
    "redondo",
    "reducir",
    "reflejo",
    "reforma",
    "refra\u0301n",
    "refugio",
    "regalo",
    "regir",
    "regla",
    "regreso",
    "rehe\u0301n",
    "reino",
    "rei\u0301r",
    "reja",
    "relato",
    "relevo",
    "relieve",
    "relleno",
    "reloj",
    "remar",
    "remedio",
    "remo",
    "rencor",
    "rendir",
    "renta",
    "reparto",
    "repetir",
    "reposo",
    "reptil",
    "res",
    "rescate",
    "resina",
    "respeto",
    "resto",
    "resumen",
    "retiro",
    "retorno",
    "retrato",
    "reunir",
    "reve\u0301s",
    "revista",
    "rey",
    "rezar",
    "rico",
    "riego",
    "rienda",
    "riesgo",
    "rifa",
    "ri\u0301gido",
    "rigor",
    "rinco\u0301n",
    "rin\u0303o\u0301n",
    "ri\u0301o",
    "riqueza",
    "risa",
    "ritmo",
    "rito",
    "rizo",
    "roble",
    "roce",
    "rociar",
    "rodar",
    "rodeo",
    "rodilla",
    "roer",
    "rojizo",
    "rojo",
    "romero",
    "romper",
    "ron",
    "ronco",
    "ronda",
    "ropa",
    "ropero",
    "rosa",
    "rosca",
    "rostro",
    "rotar",
    "rubi\u0301",
    "rubor",
    "rudo",
    "rueda",
    "rugir",
    "ruido",
    "ruina",
    "ruleta",
    "rulo",
    "rumbo",
    "rumor",
    "ruptura",
    "ruta",
    "rutina",
    "sa\u0301bado",
    "saber",
    "sabio",
    "sable",
    "sacar",
    "sagaz",
    "sagrado",
    "sala",
    "saldo",
    "salero",
    "salir",
    "salmo\u0301n",
    "salo\u0301n",
    "salsa",
    "salto",
    "salud",
    "salvar",
    "samba",
    "sancio\u0301n",
    "sandi\u0301a",
    "sanear",
    "sangre",
    "sanidad",
    "sano",
    "santo",
    "sapo",
    "saque",
    "sardina",
    "sarte\u0301n",
    "sastre",
    "sata\u0301n",
    "sauna",
    "saxofo\u0301n",
    "seccio\u0301n",
    "seco",
    "secreto",
    "secta",
    "sed",
    "seguir",
    "seis",
    "sello",
    "selva",
    "semana",
    "semilla",
    "senda",
    "sensor",
    "sen\u0303al",
    "sen\u0303or",
    "separar",
    "sepia",
    "sequi\u0301a",
    "ser",
    "serie",
    "sermo\u0301n",
    "servir",
    "sesenta",
    "sesio\u0301n",
    "seta",
    "setenta",
    "severo",
    "sexo",
    "sexto",
    "sidra",
    "siesta",
    "siete",
    "siglo",
    "signo",
    "si\u0301laba",
    "silbar",
    "silencio",
    "silla",
    "si\u0301mbolo",
    "simio",
    "sirena",
    "sistema",
    "sitio",
    "situar",
    "sobre",
    "socio",
    "sodio",
    "sol",
    "solapa",
    "soldado",
    "soledad",
    "so\u0301lido",
    "soltar",
    "solucio\u0301n",
    "sombra",
    "sondeo",
    "sonido",
    "sonoro",
    "sonrisa",
    "sopa",
    "soplar",
    "soporte",
    "sordo",
    "sorpresa",
    "sorteo",
    "soste\u0301n",
    "so\u0301tano",
    "suave",
    "subir",
    "suceso",
    "sudor",
    "suegra",
    "suelo",
    "suen\u0303o",
    "suerte",
    "sufrir",
    "sujeto",
    "sulta\u0301n",
    "sumar",
    "superar",
    "suplir",
    "suponer",
    "supremo",
    "sur",
    "surco",
    "suren\u0303o",
    "surgir",
    "susto",
    "sutil",
    "tabaco",
    "tabique",
    "tabla",
    "tabu\u0301",
    "taco",
    "tacto",
    "tajo",
    "talar",
    "talco",
    "talento",
    "talla",
    "talo\u0301n",
    "taman\u0303o",
    "tambor",
    "tango",
    "tanque",
    "tapa",
    "tapete",
    "tapia",
    "tapo\u0301n",
    "taquilla",
    "tarde",
    "tarea",
    "tarifa",
    "tarjeta",
    "tarot",
    "tarro",
    "tarta",
    "tatuaje",
    "tauro",
    "taza",
    "tazo\u0301n",
    "teatro",
    "techo",
    "tecla",
    "te\u0301cnica",
    "tejado",
    "tejer",
    "tejido",
    "tela",
    "tele\u0301fono",
    "tema",
    "temor",
    "templo",
    "tenaz",
    "tender",
    "tener",
    "tenis",
    "tenso",
    "teori\u0301a",
    "terapia",
    "terco",
    "te\u0301rmino",
    "ternura",
    "terror",
    "tesis",
    "tesoro",
    "testigo",
    "tetera",
    "texto",
    "tez",
    "tibio",
    "tiburo\u0301n",
    "tiempo",
    "tienda",
    "tierra",
    "tieso",
    "tigre",
    "tijera",
    "tilde",
    "timbre",
    "ti\u0301mido",
    "timo",
    "tinta",
    "ti\u0301o",
    "ti\u0301pico",
    "tipo",
    "tira",
    "tiro\u0301n",
    "tita\u0301n",
    "ti\u0301tere",
    "ti\u0301tulo",
    "tiza",
    "toalla",
    "tobillo",
    "tocar",
    "tocino",
    "todo",
    "toga",
    "toldo",
    "tomar",
    "tono",
    "tonto",
    "topar",
    "tope",
    "toque",
    "to\u0301rax",
    "torero",
    "tormenta",
    "torneo",
    "toro",
    "torpedo",
    "torre",
    "torso",
    "tortuga",
    "tos",
    "tosco",
    "toser",
    "to\u0301xico",
    "trabajo",
    "tractor",
    "traer",
    "tra\u0301fico",
    "trago",
    "traje",
    "tramo",
    "trance",
    "trato",
    "trauma",
    "trazar",
    "tre\u0301bol",
    "tregua",
    "treinta",
    "tren",
    "trepar",
    "tres",
    "tribu",
    "trigo",
    "tripa",
    "triste",
    "triunfo",
    "trofeo",
    "trompa",
    "tronco",
    "tropa",
    "trote",
    "trozo",
    "truco",
    "trueno",
    "trufa",
    "tuberi\u0301a",
    "tubo",
    "tuerto",
    "tumba",
    "tumor",
    "tu\u0301nel",
    "tu\u0301nica",
    "turbina",
    "turismo",
    "turno",
    "tutor",
    "ubicar",
    "u\u0301lcera",
    "umbral",
    "unidad",
    "unir",
    "universo",
    "uno",
    "untar",
    "un\u0303a",
    "urbano",
    "urbe",
    "urgente",
    "urna",
    "usar",
    "usuario",
    "u\u0301til",
    "utopi\u0301a",
    "uva",
    "vaca",
    "vaci\u0301o",
    "vacuna",
    "vagar",
    "vago",
    "vaina",
    "vajilla",
    "vale",
    "va\u0301lido",
    "valle",
    "valor",
    "va\u0301lvula",
    "vampiro",
    "vara",
    "variar",
    "varo\u0301n",
    "vaso",
    "vecino",
    "vector",
    "vehi\u0301culo",
    "veinte",
    "vejez",
    "vela",
    "velero",
    "veloz",
    "vena",
    "vencer",
    "venda",
    "veneno",
    "vengar",
    "venir",
    "venta",
    "venus",
    "ver",
    "verano",
    "verbo",
    "verde",
    "vereda",
    "verja",
    "verso",
    "verter",
    "vi\u0301a",
    "viaje",
    "vibrar",
    "vicio",
    "vi\u0301ctima",
    "vida",
    "vi\u0301deo",
    "vidrio",
    "viejo",
    "viernes",
    "vigor",
    "vil",
    "villa",
    "vinagre",
    "vino",
    "vin\u0303edo",
    "violi\u0301n",
    "viral",
    "virgo",
    "virtud",
    "visor",
    "vi\u0301spera",
    "vista",
    "vitamina",
    "viudo",
    "vivaz",
    "vivero",
    "vivir",
    "vivo",
    "volca\u0301n",
    "volumen",
    "volver",
    "voraz",
    "votar",
    "voto",
    "voz",
    "vuelo",
    "vulgar",
    "yacer",
    "yate",
    "yegua",
    "yema",
    "yerno",
    "yeso",
    "yodo",
    "yoga",
    "yogur",
    "zafiro",
    "zanja",
    "zapato",
    "zarza",
    "zona",
    "zorro",
    "zumo",
    "zurdo"
  ], wp = [
    "\u3042\u3044\u3053\u304F\u3057\u3093",
    "\u3042\u3044\u3055\u3064",
    "\u3042\u3044\u305F\u3099",
    "\u3042\u304A\u305D\u3099\u3089",
    "\u3042\u304B\u3061\u3083\u3093",
    "\u3042\u304D\u308B",
    "\u3042\u3051\u304B\u3099\u305F",
    "\u3042\u3051\u308B",
    "\u3042\u3053\u304B\u3099\u308C\u308B",
    "\u3042\u3055\u3044",
    "\u3042\u3055\u3072",
    "\u3042\u3057\u3042\u3068",
    "\u3042\u3057\u3099\u308F\u3046",
    "\u3042\u3059\u3099\u304B\u308B",
    "\u3042\u3059\u3099\u304D",
    "\u3042\u305D\u3075\u3099",
    "\u3042\u305F\u3048\u308B",
    "\u3042\u305F\u305F\u3081\u308B",
    "\u3042\u305F\u308A\u307E\u3048",
    "\u3042\u305F\u308B",
    "\u3042\u3064\u3044",
    "\u3042\u3064\u304B\u3046",
    "\u3042\u3063\u3057\u3085\u304F",
    "\u3042\u3064\u307E\u308A",
    "\u3042\u3064\u3081\u308B",
    "\u3042\u3066\u306A",
    "\u3042\u3066\u306F\u307E\u308B",
    "\u3042\u3072\u308B",
    "\u3042\u3075\u3099\u3089",
    "\u3042\u3075\u3099\u308B",
    "\u3042\u3075\u308C\u308B",
    "\u3042\u307E\u3044",
    "\u3042\u307E\u3068\u3099",
    "\u3042\u307E\u3084\u304B\u3059",
    "\u3042\u307E\u308A",
    "\u3042\u307F\u3082\u306E",
    "\u3042\u3081\u308A\u304B",
    "\u3042\u3084\u307E\u308B",
    "\u3042\u3086\u3080",
    "\u3042\u3089\u3044\u304F\u3099\u307E",
    "\u3042\u3089\u3057",
    "\u3042\u3089\u3059\u3057\u3099",
    "\u3042\u3089\u305F\u3081\u308B",
    "\u3042\u3089\u3086\u308B",
    "\u3042\u3089\u308F\u3059",
    "\u3042\u308A\u304B\u3099\u3068\u3046",
    "\u3042\u308F\u305B\u308B",
    "\u3042\u308F\u3066\u308B",
    "\u3042\u3093\u3044",
    "\u3042\u3093\u304B\u3099\u3044",
    "\u3042\u3093\u3053",
    "\u3042\u3093\u305B\u3099\u3093",
    "\u3042\u3093\u3066\u3044",
    "\u3042\u3093\u306A\u3044",
    "\u3042\u3093\u307E\u308A",
    "\u3044\u3044\u305F\u3099\u3059",
    "\u3044\u304A\u3093",
    "\u3044\u304B\u3099\u3044",
    "\u3044\u304B\u3099\u304F",
    "\u3044\u304D\u304A\u3044",
    "\u3044\u304D\u306A\u308A",
    "\u3044\u304D\u3082\u306E",
    "\u3044\u304D\u308B",
    "\u3044\u304F\u3057\u3099",
    "\u3044\u304F\u3075\u3099\u3093",
    "\u3044\u3051\u306F\u3099\u306A",
    "\u3044\u3051\u3093",
    "\u3044\u3053\u3046",
    "\u3044\u3053\u304F",
    "\u3044\u3053\u3064",
    "\u3044\u3055\u307E\u3057\u3044",
    "\u3044\u3055\u3093",
    "\u3044\u3057\u304D",
    "\u3044\u3057\u3099\u3085\u3046",
    "\u3044\u3057\u3099\u3087\u3046",
    "\u3044\u3057\u3099\u308F\u308B",
    "\u3044\u3059\u3099\u307F",
    "\u3044\u3059\u3099\u308C",
    "\u3044\u305B\u3044",
    "\u3044\u305B\u3048\u3072\u3099",
    "\u3044\u305B\u304B\u3044",
    "\u3044\u305B\u304D",
    "\u3044\u305B\u3099\u3093",
    "\u3044\u305D\u3046\u308D\u3046",
    "\u3044\u305D\u304B\u3099\u3057\u3044",
    "\u3044\u305F\u3099\u3044",
    "\u3044\u305F\u3099\u304F",
    "\u3044\u305F\u3059\u3099\u3089",
    "\u3044\u305F\u307F",
    "\u3044\u305F\u308A\u3042",
    "\u3044\u3061\u304A\u3046",
    "\u3044\u3061\u3057\u3099",
    "\u3044\u3061\u3068\u3099",
    "\u3044\u3061\u306F\u3099",
    "\u3044\u3061\u3075\u3099",
    "\u3044\u3061\u308A\u3085\u3046",
    "\u3044\u3064\u304B",
    "\u3044\u3063\u3057\u3085\u3093",
    "\u3044\u3063\u305B\u3044",
    "\u3044\u3063\u305D\u3046",
    "\u3044\u3063\u305F\u3093",
    "\u3044\u3063\u3061",
    "\u3044\u3063\u3066\u3044",
    "\u3044\u3063\u307B\u309A\u3046",
    "\u3044\u3066\u3055\u3099",
    "\u3044\u3066\u3093",
    "\u3044\u3068\u3099\u3046",
    "\u3044\u3068\u3053",
    "\u3044\u306A\u3044",
    "\u3044\u306A\u304B",
    "\u3044\u306D\u3080\u308A",
    "\u3044\u306E\u3061",
    "\u3044\u306E\u308B",
    "\u3044\u306F\u3064",
    "\u3044\u306F\u3099\u308B",
    "\u3044\u306F\u3093",
    "\u3044\u3072\u3099\u304D",
    "\u3044\u3072\u3093",
    "\u3044\u3075\u304F",
    "\u3044\u3078\u3093",
    "\u3044\u307B\u3046",
    "\u3044\u307F\u3093",
    "\u3044\u3082\u3046\u3068",
    "\u3044\u3082\u305F\u308C",
    "\u3044\u3082\u308A",
    "\u3044\u3084\u304B\u3099\u308B",
    "\u3044\u3084\u3059",
    "\u3044\u3088\u304B\u3093",
    "\u3044\u3088\u304F",
    "\u3044\u3089\u3044",
    "\u3044\u3089\u3059\u3068",
    "\u3044\u308A\u304F\u3099\u3061",
    "\u3044\u308A\u3087\u3046",
    "\u3044\u308C\u3044",
    "\u3044\u308C\u3082\u306E",
    "\u3044\u308C\u308B",
    "\u3044\u308D\u3048\u3093\u3072\u309A\u3064",
    "\u3044\u308F\u3044",
    "\u3044\u308F\u3046",
    "\u3044\u308F\u304B\u3093",
    "\u3044\u308F\u306F\u3099",
    "\u3044\u308F\u3086\u308B",
    "\u3044\u3093\u3051\u3099\u3093\u307E\u3081",
    "\u3044\u3093\u3055\u3064",
    "\u3044\u3093\u3057\u3087\u3046",
    "\u3044\u3093\u3088\u3046",
    "\u3046\u3048\u304D",
    "\u3046\u3048\u308B",
    "\u3046\u304A\u3055\u3099",
    "\u3046\u304B\u3099\u3044",
    "\u3046\u304B\u3075\u3099",
    "\u3046\u304B\u3078\u3099\u308B",
    "\u3046\u304D\u308F",
    "\u3046\u304F\u3089\u3044\u306A",
    "\u3046\u304F\u308C\u308C",
    "\u3046\u3051\u305F\u307E\u308F\u308B",
    "\u3046\u3051\u3064\u3051",
    "\u3046\u3051\u3068\u308B",
    "\u3046\u3051\u3082\u3064",
    "\u3046\u3051\u308B",
    "\u3046\u3053\u3099\u304B\u3059",
    "\u3046\u3053\u3099\u304F",
    "\u3046\u3053\u3093",
    "\u3046\u3055\u304D\u3099",
    "\u3046\u3057\u306A\u3046",
    "\u3046\u3057\u308D\u304B\u3099\u307F",
    "\u3046\u3059\u3044",
    "\u3046\u3059\u304D\u3099",
    "\u3046\u3059\u304F\u3099\u3089\u3044",
    "\u3046\u3059\u3081\u308B",
    "\u3046\u305B\u3064",
    "\u3046\u3061\u3042\u308F\u305B",
    "\u3046\u3061\u304B\u3099\u308F",
    "\u3046\u3061\u304D",
    "\u3046\u3061\u3085\u3046",
    "\u3046\u3063\u304B\u308A",
    "\u3046\u3064\u304F\u3057\u3044",
    "\u3046\u3063\u305F\u3048\u308B",
    "\u3046\u3064\u308B",
    "\u3046\u3068\u3099\u3093",
    "\u3046\u306A\u304D\u3099",
    "\u3046\u306A\u3057\u3099",
    "\u3046\u306A\u3059\u3099\u304F",
    "\u3046\u306A\u308B",
    "\u3046\u306D\u308B",
    "\u3046\u306E\u3046",
    "\u3046\u3075\u3099\u3051\u3099",
    "\u3046\u3075\u3099\u3053\u3099\u3048",
    "\u3046\u307E\u308C\u308B",
    "\u3046\u3081\u308B",
    "\u3046\u3082\u3046",
    "\u3046\u3084\u307E\u3046",
    "\u3046\u3088\u304F",
    "\u3046\u3089\u304B\u3099\u3048\u3059",
    "\u3046\u3089\u304F\u3099\u3061",
    "\u3046\u3089\u306A\u3044",
    "\u3046\u308A\u3042\u3051\u3099",
    "\u3046\u308A\u304D\u308C",
    "\u3046\u308B\u3055\u3044",
    "\u3046\u308C\u3057\u3044",
    "\u3046\u308C\u3086\u304D",
    "\u3046\u308C\u308B",
    "\u3046\u308D\u3053",
    "\u3046\u308F\u304D",
    "\u3046\u308F\u3055",
    "\u3046\u3093\u3053\u3046",
    "\u3046\u3093\u3061\u3093",
    "\u3046\u3093\u3066\u3093",
    "\u3046\u3093\u3068\u3099\u3046",
    "\u3048\u3044\u3048\u3093",
    "\u3048\u3044\u304B\u3099",
    "\u3048\u3044\u304D\u3087\u3046",
    "\u3048\u3044\u3053\u3099",
    "\u3048\u3044\u305B\u3044",
    "\u3048\u3044\u3075\u3099\u3093",
    "\u3048\u3044\u3088\u3046",
    "\u3048\u3044\u308F",
    "\u3048\u304A\u308A",
    "\u3048\u304B\u3099\u304A",
    "\u3048\u304B\u3099\u304F",
    "\u3048\u304D\u305F\u3044",
    "\u3048\u304F\u305B\u308B",
    "\u3048\u3057\u3083\u304F",
    "\u3048\u3059\u3066",
    "\u3048\u3064\u3089\u3093",
    "\u3048\u306E\u304F\u3099",
    "\u3048\u307B\u3046\u307E\u304D",
    "\u3048\u307B\u3093",
    "\u3048\u307E\u304D",
    "\u3048\u3082\u3057\u3099",
    "\u3048\u3082\u306E",
    "\u3048\u3089\u3044",
    "\u3048\u3089\u3075\u3099",
    "\u3048\u308A\u3042",
    "\u3048\u3093\u3048\u3093",
    "\u3048\u3093\u304B\u3044",
    "\u3048\u3093\u304D\u3099",
    "\u3048\u3093\u3051\u3099\u304D",
    "\u3048\u3093\u3057\u3085\u3046",
    "\u3048\u3093\u305B\u3099\u3064",
    "\u3048\u3093\u305D\u304F",
    "\u3048\u3093\u3061\u3087\u3046",
    "\u3048\u3093\u3068\u3064",
    "\u304A\u3044\u304B\u3051\u308B",
    "\u304A\u3044\u3053\u3059",
    "\u304A\u3044\u3057\u3044",
    "\u304A\u3044\u3064\u304F",
    "\u304A\u3046\u3048\u3093",
    "\u304A\u3046\u3055\u307E",
    "\u304A\u3046\u3057\u3099",
    "\u304A\u3046\u305B\u3064",
    "\u304A\u3046\u305F\u3044",
    "\u304A\u3046\u3075\u304F",
    "\u304A\u3046\u3078\u3099\u3044",
    "\u304A\u3046\u3088\u3046",
    "\u304A\u3048\u308B",
    "\u304A\u304A\u3044",
    "\u304A\u304A\u3046",
    "\u304A\u304A\u3068\u3099\u304A\u308A",
    "\u304A\u304A\u3084",
    "\u304A\u304A\u3088\u305D",
    "\u304A\u304B\u3048\u308A",
    "\u304A\u304B\u3059\u3099",
    "\u304A\u304B\u3099\u3080",
    "\u304A\u304B\u308F\u308A",
    "\u304A\u304D\u3099\u306A\u3046",
    "\u304A\u304D\u308B",
    "\u304A\u304F\u3055\u307E",
    "\u304A\u304F\u3057\u3099\u3087\u3046",
    "\u304A\u304F\u308A\u304B\u3099\u306A",
    "\u304A\u304F\u308B",
    "\u304A\u304F\u308C\u308B",
    "\u304A\u3053\u3059",
    "\u304A\u3053\u306A\u3046",
    "\u304A\u3053\u308B",
    "\u304A\u3055\u3048\u308B",
    "\u304A\u3055\u306A\u3044",
    "\u304A\u3055\u3081\u308B",
    "\u304A\u3057\u3044\u308C",
    "\u304A\u3057\u3048\u308B",
    "\u304A\u3057\u3099\u304D\u3099",
    "\u304A\u3057\u3099\u3055\u3093",
    "\u304A\u3057\u3083\u308C",
    "\u304A\u305D\u3089\u304F",
    "\u304A\u305D\u308F\u308B",
    "\u304A\u305F\u304B\u3099\u3044",
    "\u304A\u305F\u304F",
    "\u304A\u305F\u3099\u3084\u304B",
    "\u304A\u3061\u3064\u304F",
    "\u304A\u3063\u3068",
    "\u304A\u3064\u308A",
    "\u304A\u3066\u3099\u304B\u3051",
    "\u304A\u3068\u3057\u3082\u306E",
    "\u304A\u3068\u306A\u3057\u3044",
    "\u304A\u3068\u3099\u308A",
    "\u304A\u3068\u3099\u308D\u304B\u3059",
    "\u304A\u306F\u3099\u3055\u3093",
    "\u304A\u307E\u3044\u308A",
    "\u304A\u3081\u3066\u3099\u3068\u3046",
    "\u304A\u3082\u3044\u3066\u3099",
    "\u304A\u3082\u3046",
    "\u304A\u3082\u305F\u3044",
    "\u304A\u3082\u3061\u3083",
    "\u304A\u3084\u3064",
    "\u304A\u3084\u3086\u3072\u3099",
    "\u304A\u3088\u307B\u3099\u3059",
    "\u304A\u3089\u3093\u305F\u3099",
    "\u304A\u308D\u3059",
    "\u304A\u3093\u304B\u3099\u304F",
    "\u304A\u3093\u3051\u3044",
    "\u304A\u3093\u3057\u3083",
    "\u304A\u3093\u305B\u3093",
    "\u304A\u3093\u305F\u3099\u3093",
    "\u304A\u3093\u3061\u3085\u3046",
    "\u304A\u3093\u3068\u3099\u3051\u3044",
    "\u304B\u3042\u3064",
    "\u304B\u3044\u304B\u3099",
    "\u304B\u3099\u3044\u304D",
    "\u304B\u3099\u3044\u3051\u3093",
    "\u304B\u3099\u3044\u3053\u3046",
    "\u304B\u3044\u3055\u3064",
    "\u304B\u3044\u3057\u3083",
    "\u304B\u3044\u3059\u3044\u3088\u304F",
    "\u304B\u3044\u305B\u3099\u3093",
    "\u304B\u3044\u305D\u3099\u3046\u3068\u3099",
    "\u304B\u3044\u3064\u3046",
    "\u304B\u3044\u3066\u3093",
    "\u304B\u3044\u3068\u3046",
    "\u304B\u3044\u3075\u304F",
    "\u304B\u3099\u3044\u3078\u304D",
    "\u304B\u3044\u307B\u3046",
    "\u304B\u3044\u3088\u3046",
    "\u304B\u3099\u3044\u3089\u3044",
    "\u304B\u3044\u308F",
    "\u304B\u3048\u308B",
    "\u304B\u304A\u308A",
    "\u304B\u304B\u3048\u308B",
    "\u304B\u304B\u3099\u304F",
    "\u304B\u304B\u3099\u3057",
    "\u304B\u304B\u3099\u307F",
    "\u304B\u304F\u3053\u3099",
    "\u304B\u304F\u3068\u304F",
    "\u304B\u3055\u3099\u308B",
    "\u304B\u3099\u305D\u3099\u3046",
    "\u304B\u305F\u3044",
    "\u304B\u305F\u3061",
    "\u304B\u3099\u3061\u3087\u3046",
    "\u304B\u3099\u3063\u304D\u3085\u3046",
    "\u304B\u3099\u3063\u3053\u3046",
    "\u304B\u3099\u3063\u3055\u3093",
    "\u304B\u3099\u3063\u3057\u3087\u3046",
    "\u304B\u306A\u3055\u3099\u308F\u3057",
    "\u304B\u306E\u3046",
    "\u304B\u3099\u306F\u304F",
    "\u304B\u3075\u3099\u304B",
    "\u304B\u307B\u3046",
    "\u304B\u307B\u3053\u3099",
    "\u304B\u307E\u3046",
    "\u304B\u307E\u307B\u3099\u3053",
    "\u304B\u3081\u308C\u304A\u3093",
    "\u304B\u3086\u3044",
    "\u304B\u3088\u3046\u3072\u3099",
    "\u304B\u3089\u3044",
    "\u304B\u308B\u3044",
    "\u304B\u308D\u3046",
    "\u304B\u308F\u304F",
    "\u304B\u308F\u3089",
    "\u304B\u3099\u3093\u304B",
    "\u304B\u3093\u3051\u3044",
    "\u304B\u3093\u3053\u3046",
    "\u304B\u3093\u3057\u3083",
    "\u304B\u3093\u305D\u3046",
    "\u304B\u3093\u305F\u3093",
    "\u304B\u3093\u3061",
    "\u304B\u3099\u3093\u306F\u3099\u308B",
    "\u304D\u3042\u3044",
    "\u304D\u3042\u3064",
    "\u304D\u3044\u308D",
    "\u304D\u3099\u3044\u3093",
    "\u304D\u3046\u3044",
    "\u304D\u3046\u3093",
    "\u304D\u3048\u308B",
    "\u304D\u304A\u3046",
    "\u304D\u304A\u304F",
    "\u304D\u304A\u3061",
    "\u304D\u304A\u3093",
    "\u304D\u304B\u3044",
    "\u304D\u304B\u304F",
    "\u304D\u304B\u3093\u3057\u3083",
    "\u304D\u304D\u3066",
    "\u304D\u304F\u306F\u3099\u308A",
    "\u304D\u304F\u3089\u3051\u3099",
    "\u304D\u3051\u3093\u305B\u3044",
    "\u304D\u3053\u3046",
    "\u304D\u3053\u3048\u308B",
    "\u304D\u3053\u304F",
    "\u304D\u3055\u3044",
    "\u304D\u3055\u304F",
    "\u304D\u3055\u307E",
    "\u304D\u3055\u3089\u304D\u3099",
    "\u304D\u3099\u3057\u3099\u304B\u304B\u3099\u304F",
    "\u304D\u3099\u3057\u304D",
    "\u304D\u3099\u3057\u3099\u305F\u3044\u3051\u3093",
    "\u304D\u3099\u3057\u3099\u306B\u3063\u3066\u3044",
    "\u304D\u3099\u3057\u3099\u3085\u3064\u3057\u3083",
    "\u304D\u3059\u3046",
    "\u304D\u305B\u3044",
    "\u304D\u305B\u304D",
    "\u304D\u305B\u3064",
    "\u304D\u305D\u3046",
    "\u304D\u305D\u3099\u304F",
    "\u304D\u305D\u3099\u3093",
    "\u304D\u305F\u3048\u308B",
    "\u304D\u3061\u3087\u3046",
    "\u304D\u3064\u3048\u3093",
    "\u304D\u3099\u3063\u3061\u308A",
    "\u304D\u3064\u3064\u304D",
    "\u304D\u3064\u306D",
    "\u304D\u3066\u3044",
    "\u304D\u3068\u3099\u3046",
    "\u304D\u3068\u3099\u304F",
    "\u304D\u306A\u3044",
    "\u304D\u306A\u304B\u3099",
    "\u304D\u306A\u3053",
    "\u304D\u306C\u3053\u3099\u3057",
    "\u304D\u306D\u3093",
    "\u304D\u306E\u3046",
    "\u304D\u306E\u3057\u305F",
    "\u304D\u306F\u304F",
    "\u304D\u3072\u3099\u3057\u3044",
    "\u304D\u3072\u3093",
    "\u304D\u3075\u304F",
    "\u304D\u3075\u3099\u3093",
    "\u304D\u307B\u3099\u3046",
    "\u304D\u307B\u3093",
    "\u304D\u307E\u308B",
    "\u304D\u307F\u3064",
    "\u304D\u3080\u3059\u3099\u304B\u3057\u3044",
    "\u304D\u3081\u308B",
    "\u304D\u3082\u305F\u3099\u3081\u3057",
    "\u304D\u3082\u3061",
    "\u304D\u3082\u306E",
    "\u304D\u3083\u304F",
    "\u304D\u3084\u304F",
    "\u304D\u3099\u3085\u3046\u306B\u304F",
    "\u304D\u3088\u3046",
    "\u304D\u3087\u3046\u308A\u3085\u3046",
    "\u304D\u3089\u3044",
    "\u304D\u3089\u304F",
    "\u304D\u308A\u3093",
    "\u304D\u308C\u3044",
    "\u304D\u308C\u3064",
    "\u304D\u308D\u304F",
    "\u304D\u3099\u308D\u3093",
    "\u304D\u308F\u3081\u308B",
    "\u304D\u3099\u3093\u3044\u308D",
    "\u304D\u3093\u304B\u304F\u3057\u3099",
    "\u304D\u3093\u3057\u3099\u3087",
    "\u304D\u3093\u3088\u3046\u3072\u3099",
    "\u304F\u3099\u3042\u3044",
    "\u304F\u3044\u3059\u3099",
    "\u304F\u3046\u304B\u3093",
    "\u304F\u3046\u304D",
    "\u304F\u3046\u304F\u3099\u3093",
    "\u304F\u3046\u3053\u3046",
    "\u304F\u3099\u3046\u305B\u3044",
    "\u304F\u3046\u305D\u3046",
    "\u304F\u3099\u3046\u305F\u3089",
    "\u304F\u3046\u3075\u304F",
    "\u304F\u3046\u307B\u3099",
    "\u304F\u304B\u3093",
    "\u304F\u304D\u3087\u3046",
    "\u304F\u3051\u3099\u3093",
    "\u304F\u3099\u3053\u3046",
    "\u304F\u3055\u3044",
    "\u304F\u3055\u304D",
    "\u304F\u3055\u306F\u3099\u306A",
    "\u304F\u3055\u308B",
    "\u304F\u3057\u3083\u307F",
    "\u304F\u3057\u3087\u3046",
    "\u304F\u3059\u306E\u304D",
    "\u304F\u3059\u308A\u3086\u3072\u3099",
    "\u304F\u305B\u3051\u3099",
    "\u304F\u305B\u3093",
    "\u304F\u3099\u305F\u3044\u3066\u304D",
    "\u304F\u305F\u3099\u3055\u308B",
    "\u304F\u305F\u3072\u3099\u308C\u308B",
    "\u304F\u3061\u3053\u307F",
    "\u304F\u3061\u3055\u304D",
    "\u304F\u3064\u3057\u305F",
    "\u304F\u3099\u3063\u3059\u308A",
    "\u304F\u3064\u308D\u304F\u3099",
    "\u304F\u3068\u3046\u3066\u3093",
    "\u304F\u3068\u3099\u304F",
    "\u304F\u306A\u3093",
    "\u304F\u306D\u304F\u306D",
    "\u304F\u306E\u3046",
    "\u304F\u3075\u3046",
    "\u304F\u307F\u3042\u308F\u305B",
    "\u304F\u307F\u305F\u3066\u308B",
    "\u304F\u3081\u308B",
    "\u304F\u3084\u304F\u3057\u3087",
    "\u304F\u3089\u3059",
    "\u304F\u3089\u3078\u3099\u308B",
    "\u304F\u308B\u307E",
    "\u304F\u308C\u308B",
    "\u304F\u308D\u3046",
    "\u304F\u308F\u3057\u3044",
    "\u304F\u3099\u3093\u304B\u3093",
    "\u304F\u3099\u3093\u3057\u3087\u304F",
    "\u304F\u3099\u3093\u305F\u3044",
    "\u304F\u3099\u3093\u3066",
    "\u3051\u3042\u306A",
    "\u3051\u3044\u304B\u304F",
    "\u3051\u3044\u3051\u3093",
    "\u3051\u3044\u3053",
    "\u3051\u3044\u3055\u3064",
    "\u3051\u3099\u3044\u3057\u3099\u3085\u3064",
    "\u3051\u3044\u305F\u3044",
    "\u3051\u3099\u3044\u306E\u3046\u3057\u3099\u3093",
    "\u3051\u3044\u308C\u304D",
    "\u3051\u3044\u308D",
    "\u3051\u304A\u3068\u3059",
    "\u3051\u304A\u308A\u3082\u306E",
    "\u3051\u3099\u304D\u304B",
    "\u3051\u3099\u304D\u3051\u3099\u3093",
    "\u3051\u3099\u304D\u305F\u3099\u3093",
    "\u3051\u3099\u304D\u3061\u3093",
    "\u3051\u3099\u304D\u3068\u3064",
    "\u3051\u3099\u304D\u306F",
    "\u3051\u3099\u304D\u3084\u304F",
    "\u3051\u3099\u3053\u3046",
    "\u3051\u3099\u3053\u304F\u3057\u3099\u3087\u3046",
    "\u3051\u3099\u3055\u3099\u3044",
    "\u3051\u3055\u304D",
    "\u3051\u3099\u3055\u3099\u3093",
    "\u3051\u3057\u304D",
    "\u3051\u3057\u3053\u3099\u3080",
    "\u3051\u3057\u3087\u3046",
    "\u3051\u3099\u3059\u3068",
    "\u3051\u305F\u306F\u3099",
    "\u3051\u3061\u3083\u3063\u3075\u309A",
    "\u3051\u3061\u3089\u3059",
    "\u3051\u3064\u3042\u3064",
    "\u3051\u3064\u3044",
    "\u3051\u3064\u3048\u304D",
    "\u3051\u3063\u3053\u3093",
    "\u3051\u3064\u3057\u3099\u3087",
    "\u3051\u3063\u305B\u304D",
    "\u3051\u3063\u3066\u3044",
    "\u3051\u3064\u307E\u3064",
    "\u3051\u3099\u3064\u3088\u3046\u3072\u3099",
    "\u3051\u3099\u3064\u308C\u3044",
    "\u3051\u3064\u308D\u3093",
    "\u3051\u3099\u3068\u3099\u304F",
    "\u3051\u3068\u306F\u3099\u3059",
    "\u3051\u3068\u308B",
    "\u3051\u306A\u3051\u3099",
    "\u3051\u306A\u3059",
    "\u3051\u306A\u307F",
    "\u3051\u306C\u304D",
    "\u3051\u3099\u306D\u3064",
    "\u3051\u306D\u3093",
    "\u3051\u306F\u3044",
    "\u3051\u3099\u3072\u3093",
    "\u3051\u3075\u3099\u304B\u3044",
    "\u3051\u3099\u307B\u3099\u304F",
    "\u3051\u307E\u308A",
    "\u3051\u307F\u304B\u308B",
    "\u3051\u3080\u3057",
    "\u3051\u3080\u308A",
    "\u3051\u3082\u306E",
    "\u3051\u3089\u3044",
    "\u3051\u308D\u3051\u308D",
    "\u3051\u308F\u3057\u3044",
    "\u3051\u3093\u3044",
    "\u3051\u3093\u3048\u3064",
    "\u3051\u3093\u304A",
    "\u3051\u3093\u304B",
    "\u3051\u3099\u3093\u304D",
    "\u3051\u3093\u3051\u3099\u3093",
    "\u3051\u3093\u3053\u3046",
    "\u3051\u3093\u3055\u304F",
    "\u3051\u3093\u3057\u3085\u3046",
    "\u3051\u3093\u3059\u3046",
    "\u3051\u3099\u3093\u305D\u3046",
    "\u3051\u3093\u3061\u304F",
    "\u3051\u3093\u3066\u3044",
    "\u3051\u3093\u3068\u3046",
    "\u3051\u3093\u306A\u3044",
    "\u3051\u3093\u306B\u3093",
    "\u3051\u3099\u3093\u3075\u3099\u3064",
    "\u3051\u3093\u307E",
    "\u3051\u3093\u307F\u3093",
    "\u3051\u3093\u3081\u3044",
    "\u3051\u3093\u3089\u3093",
    "\u3051\u3093\u308A",
    "\u3053\u3042\u304F\u307E",
    "\u3053\u3044\u306C",
    "\u3053\u3044\u3072\u3099\u3068",
    "\u3053\u3099\u3046\u3044",
    "\u3053\u3046\u3048\u3093",
    "\u3053\u3046\u304A\u3093",
    "\u3053\u3046\u304B\u3093",
    "\u3053\u3099\u3046\u304D\u3085\u3046",
    "\u3053\u3099\u3046\u3051\u3044",
    "\u3053\u3046\u3053\u3046",
    "\u3053\u3046\u3055\u3044",
    "\u3053\u3046\u3057\u3099",
    "\u3053\u3046\u3059\u3044",
    "\u3053\u3099\u3046\u305B\u3044",
    "\u3053\u3046\u305D\u304F",
    "\u3053\u3046\u305F\u3044",
    "\u3053\u3046\u3061\u3083",
    "\u3053\u3046\u3064\u3046",
    "\u3053\u3046\u3066\u3044",
    "\u3053\u3046\u3068\u3099\u3046",
    "\u3053\u3046\u306A\u3044",
    "\u3053\u3046\u306F\u3044",
    "\u3053\u3099\u3046\u307B\u3046",
    "\u3053\u3099\u3046\u307E\u3093",
    "\u3053\u3046\u3082\u304F",
    "\u3053\u3046\u308A\u3064",
    "\u3053\u3048\u308B",
    "\u3053\u304A\u308A",
    "\u3053\u3099\u304B\u3044",
    "\u3053\u3099\u304B\u3099\u3064",
    "\u3053\u3099\u304B\u3093",
    "\u3053\u304F\u3053\u3099",
    "\u3053\u304F\u3055\u3044",
    "\u3053\u304F\u3068\u3046",
    "\u3053\u304F\u306A\u3044",
    "\u3053\u304F\u306F\u304F",
    "\u3053\u304F\u3099\u307E",
    "\u3053\u3051\u3044",
    "\u3053\u3051\u308B",
    "\u3053\u3053\u306E\u304B",
    "\u3053\u3053\u308D",
    "\u3053\u3055\u3081",
    "\u3053\u3057\u3064",
    "\u3053\u3059\u3046",
    "\u3053\u305B\u3044",
    "\u3053\u305B\u304D",
    "\u3053\u305B\u3099\u3093",
    "\u3053\u305D\u305F\u3099\u3066",
    "\u3053\u305F\u3044",
    "\u3053\u305F\u3048\u308B",
    "\u3053\u305F\u3064",
    "\u3053\u3061\u3087\u3046",
    "\u3053\u3063\u304B",
    "\u3053\u3064\u3053\u3064",
    "\u3053\u3064\u306F\u3099\u3093",
    "\u3053\u3064\u3075\u3099",
    "\u3053\u3066\u3044",
    "\u3053\u3066\u3093",
    "\u3053\u3068\u304B\u3099\u3089",
    "\u3053\u3068\u3057",
    "\u3053\u3068\u306F\u3099",
    "\u3053\u3068\u308A",
    "\u3053\u306A\u3053\u3099\u306A",
    "\u3053\u306D\u3053\u306D",
    "\u3053\u306E\u307E\u307E",
    "\u3053\u306E\u307F",
    "\u3053\u306E\u3088",
    "\u3053\u3099\u306F\u3093",
    "\u3053\u3072\u3064\u3057\u3099",
    "\u3053\u3075\u3046",
    "\u3053\u3075\u3093",
    "\u3053\u307B\u3099\u308C\u308B",
    "\u3053\u3099\u307E\u3042\u3075\u3099\u3089",
    "\u3053\u307E\u304B\u3044",
    "\u3053\u3099\u307E\u3059\u308A",
    "\u3053\u307E\u3064\u306A",
    "\u3053\u307E\u308B",
    "\u3053\u3080\u304D\u3099\u3053",
    "\u3053\u3082\u3057\u3099",
    "\u3053\u3082\u3061",
    "\u3053\u3082\u306E",
    "\u3053\u3082\u3093",
    "\u3053\u3084\u304F",
    "\u3053\u3084\u307E",
    "\u3053\u3086\u3046",
    "\u3053\u3086\u3072\u3099",
    "\u3053\u3088\u3044",
    "\u3053\u3088\u3046",
    "\u3053\u308A\u308B",
    "\u3053\u308C\u304F\u3057\u3087\u3093",
    "\u3053\u308D\u3063\u3051",
    "\u3053\u308F\u3082\u3066",
    "\u3053\u308F\u308C\u308B",
    "\u3053\u3093\u3044\u3093",
    "\u3053\u3093\u304B\u3044",
    "\u3053\u3093\u304D",
    "\u3053\u3093\u3057\u3085\u3046",
    "\u3053\u3093\u3059\u3044",
    "\u3053\u3093\u305F\u3099\u3066",
    "\u3053\u3093\u3068\u3093",
    "\u3053\u3093\u306A\u3093",
    "\u3053\u3093\u3072\u3099\u306B",
    "\u3053\u3093\u307B\u309A\u3093",
    "\u3053\u3093\u307E\u3051",
    "\u3053\u3093\u3084",
    "\u3053\u3093\u308C\u3044",
    "\u3053\u3093\u308F\u304F",
    "\u3055\u3099\u3044\u3048\u304D",
    "\u3055\u3044\u304B\u3044",
    "\u3055\u3044\u304D\u3093",
    "\u3055\u3099\u3044\u3051\u3099\u3093",
    "\u3055\u3099\u3044\u3053",
    "\u3055\u3044\u3057\u3087",
    "\u3055\u3044\u305B\u3044",
    "\u3055\u3099\u3044\u305F\u304F",
    "\u3055\u3099\u3044\u3061\u3085\u3046",
    "\u3055\u3044\u3066\u304D",
    "\u3055\u3099\u3044\u308A\u3087\u3046",
    "\u3055\u3046\u306A",
    "\u3055\u304B\u3044\u3057",
    "\u3055\u304B\u3099\u3059",
    "\u3055\u304B\u306A",
    "\u3055\u304B\u307F\u3061",
    "\u3055\u304B\u3099\u308B",
    "\u3055\u304D\u3099\u3087\u3046",
    "\u3055\u304F\u3057",
    "\u3055\u304F\u3072\u3093",
    "\u3055\u304F\u3089",
    "\u3055\u3053\u304F",
    "\u3055\u3053\u3064",
    "\u3055\u3059\u3099\u304B\u308B",
    "\u3055\u3099\u305B\u304D",
    "\u3055\u305F\u3093",
    "\u3055\u3064\u3048\u3044",
    "\u3055\u3099\u3064\u304A\u3093",
    "\u3055\u3099\u3063\u304B",
    "\u3055\u3099\u3064\u304B\u3099\u304F",
    "\u3055\u3063\u304D\u3087\u304F",
    "\u3055\u3099\u3063\u3057",
    "\u3055\u3064\u3057\u3099\u3093",
    "\u3055\u3099\u3063\u305D\u3046",
    "\u3055\u3064\u305F\u306F\u3099",
    "\u3055\u3064\u307E\u3044\u3082",
    "\u3055\u3066\u3044",
    "\u3055\u3068\u3044\u3082",
    "\u3055\u3068\u3046",
    "\u3055\u3068\u304A\u3084",
    "\u3055\u3068\u3057",
    "\u3055\u3068\u308B",
    "\u3055\u306E\u3046",
    "\u3055\u306F\u3099\u304F",
    "\u3055\u3072\u3099\u3057\u3044",
    "\u3055\u3078\u3099\u3064",
    "\u3055\u307B\u3046",
    "\u3055\u307B\u3068\u3099",
    "\u3055\u307E\u3059",
    "\u3055\u307F\u3057\u3044",
    "\u3055\u307F\u305F\u3099\u308C",
    "\u3055\u3080\u3051",
    "\u3055\u3081\u308B",
    "\u3055\u3084\u3048\u3093\u3068\u3099\u3046",
    "\u3055\u3086\u3046",
    "\u3055\u3088\u3046",
    "\u3055\u3088\u304F",
    "\u3055\u3089\u305F\u3099",
    "\u3055\u3099\u308B\u305D\u306F\u3099",
    "\u3055\u308F\u3084\u304B",
    "\u3055\u308F\u308B",
    "\u3055\u3093\u3044\u3093",
    "\u3055\u3093\u304B",
    "\u3055\u3093\u304D\u3083\u304F",
    "\u3055\u3093\u3053\u3046",
    "\u3055\u3093\u3055\u3044",
    "\u3055\u3099\u3093\u3057\u3087",
    "\u3055\u3093\u3059\u3046",
    "\u3055\u3093\u305B\u3044",
    "\u3055\u3093\u305D",
    "\u3055\u3093\u3061",
    "\u3055\u3093\u307E",
    "\u3055\u3093\u307F",
    "\u3055\u3093\u3089\u3093",
    "\u3057\u3042\u3044",
    "\u3057\u3042\u3051\u3099",
    "\u3057\u3042\u3055\u3063\u3066",
    "\u3057\u3042\u308F\u305B",
    "\u3057\u3044\u304F",
    "\u3057\u3044\u3093",
    "\u3057\u3046\u3061",
    "\u3057\u3048\u3044",
    "\u3057\u304A\u3051",
    "\u3057\u304B\u3044",
    "\u3057\u304B\u304F",
    "\u3057\u3099\u304B\u3093",
    "\u3057\u3053\u3099\u3068",
    "\u3057\u3059\u3046",
    "\u3057\u3099\u305F\u3099\u3044",
    "\u3057\u305F\u3046\u3051",
    "\u3057\u305F\u304D\u3099",
    "\u3057\u305F\u3066",
    "\u3057\u305F\u307F",
    "\u3057\u3061\u3087\u3046",
    "\u3057\u3061\u308A\u3093",
    "\u3057\u3063\u304B\u308A",
    "\u3057\u3064\u3057\u3099",
    "\u3057\u3064\u3082\u3093",
    "\u3057\u3066\u3044",
    "\u3057\u3066\u304D",
    "\u3057\u3066\u3064",
    "\u3057\u3099\u3066\u3093",
    "\u3057\u3099\u3068\u3099\u3046",
    "\u3057\u306A\u304D\u3099\u308C",
    "\u3057\u306A\u3082\u306E",
    "\u3057\u306A\u3093",
    "\u3057\u306D\u307E",
    "\u3057\u306D\u3093",
    "\u3057\u306E\u304F\u3099",
    "\u3057\u306E\u3075\u3099",
    "\u3057\u306F\u3044",
    "\u3057\u306F\u3099\u304B\u308A",
    "\u3057\u306F\u3064",
    "\u3057\u306F\u3089\u3044",
    "\u3057\u306F\u3093",
    "\u3057\u3072\u3087\u3046",
    "\u3057\u3075\u304F",
    "\u3057\u3099\u3075\u3099\u3093",
    "\u3057\u3078\u3044",
    "\u3057\u307B\u3046",
    "\u3057\u307B\u3093",
    "\u3057\u307E\u3046",
    "\u3057\u307E\u308B",
    "\u3057\u307F\u3093",
    "\u3057\u3080\u3051\u308B",
    "\u3057\u3099\u3080\u3057\u3087",
    "\u3057\u3081\u3044",
    "\u3057\u3081\u308B",
    "\u3057\u3082\u3093",
    "\u3057\u3083\u3044\u3093",
    "\u3057\u3083\u3046\u3093",
    "\u3057\u3083\u304A\u3093",
    "\u3057\u3099\u3083\u304B\u3099\u3044\u3082",
    "\u3057\u3084\u304F\u3057\u3087",
    "\u3057\u3083\u304F\u307B\u3046",
    "\u3057\u3083\u3051\u3093",
    "\u3057\u3083\u3053",
    "\u3057\u3083\u3055\u3099\u3044",
    "\u3057\u3083\u3057\u3093",
    "\u3057\u3083\u305B\u3093",
    "\u3057\u3083\u305D\u3046",
    "\u3057\u3083\u305F\u3044",
    "\u3057\u3083\u3061\u3087\u3046",
    "\u3057\u3083\u3063\u304D\u3093",
    "\u3057\u3099\u3083\u307E",
    "\u3057\u3083\u308A\u3093",
    "\u3057\u3083\u308C\u3044",
    "\u3057\u3099\u3086\u3046",
    "\u3057\u3099\u3085\u3046\u3057\u3087",
    "\u3057\u3085\u304F\u306F\u304F",
    "\u3057\u3099\u3085\u3057\u3093",
    "\u3057\u3085\u3063\u305B\u304D",
    "\u3057\u3085\u307F",
    "\u3057\u3085\u3089\u306F\u3099",
    "\u3057\u3099\u3085\u3093\u306F\u3099\u3093",
    "\u3057\u3087\u3046\u304B\u3044",
    "\u3057\u3087\u304F\u305F\u304F",
    "\u3057\u3087\u3063\u3051\u3093",
    "\u3057\u3087\u3068\u3099\u3046",
    "\u3057\u3087\u3082\u3064",
    "\u3057\u3089\u305B\u308B",
    "\u3057\u3089\u3078\u3099\u308B",
    "\u3057\u3093\u304B",
    "\u3057\u3093\u3053\u3046",
    "\u3057\u3099\u3093\u3057\u3099\u3083",
    "\u3057\u3093\u305B\u3044\u3057\u3099",
    "\u3057\u3093\u3061\u304F",
    "\u3057\u3093\u308A\u3093",
    "\u3059\u3042\u3051\u3099",
    "\u3059\u3042\u3057",
    "\u3059\u3042\u306A",
    "\u3059\u3099\u3042\u3093",
    "\u3059\u3044\u3048\u3044",
    "\u3059\u3044\u304B",
    "\u3059\u3044\u3068\u3046",
    "\u3059\u3099\u3044\u3075\u3099\u3093",
    "\u3059\u3044\u3088\u3046\u3072\u3099",
    "\u3059\u3046\u304B\u3099\u304F",
    "\u3059\u3046\u3057\u3099\u3064",
    "\u3059\u3046\u305B\u3093",
    "\u3059\u304A\u3068\u3099\u308A",
    "\u3059\u304D\u307E",
    "\u3059\u304F\u3046",
    "\u3059\u304F\u306A\u3044",
    "\u3059\u3051\u308B",
    "\u3059\u3053\u3099\u3044",
    "\u3059\u3053\u3057",
    "\u3059\u3099\u3055\u3093",
    "\u3059\u3059\u3099\u3057\u3044",
    "\u3059\u3059\u3080",
    "\u3059\u3059\u3081\u308B",
    "\u3059\u3063\u304B\u308A",
    "\u3059\u3099\u3063\u3057\u308A",
    "\u3059\u3099\u3063\u3068",
    "\u3059\u3066\u304D",
    "\u3059\u3066\u308B",
    "\u3059\u306D\u308B",
    "\u3059\u306E\u3053",
    "\u3059\u306F\u305F\u3099",
    "\u3059\u306F\u3099\u3089\u3057\u3044",
    "\u3059\u3099\u3072\u3087\u3046",
    "\u3059\u3099\u3075\u3099\u306C\u308C",
    "\u3059\u3075\u3099\u308A",
    "\u3059\u3075\u308C",
    "\u3059\u3078\u3099\u3066",
    "\u3059\u3078\u3099\u308B",
    "\u3059\u3099\u307B\u3046",
    "\u3059\u307B\u3099\u3093",
    "\u3059\u307E\u3044",
    "\u3059\u3081\u3057",
    "\u3059\u3082\u3046",
    "\u3059\u3084\u304D",
    "\u3059\u3089\u3059\u3089",
    "\u3059\u308B\u3081",
    "\u3059\u308C\u3061\u304B\u3099\u3046",
    "\u3059\u308D\u3063\u3068",
    "\u3059\u308F\u308B",
    "\u3059\u3093\u305B\u3099\u3093",
    "\u3059\u3093\u307B\u309A\u3046",
    "\u305B\u3042\u3075\u3099\u3089",
    "\u305B\u3044\u304B\u3064",
    "\u305B\u3044\u3051\u3099\u3093",
    "\u305B\u3044\u3057\u3099",
    "\u305B\u3044\u3088\u3046",
    "\u305B\u304A\u3046",
    "\u305B\u304B\u3044\u304B\u3093",
    "\u305B\u304D\u306B\u3093",
    "\u305B\u304D\u3080",
    "\u305B\u304D\u3086",
    "\u305B\u304D\u3089\u3093\u3046\u3093",
    "\u305B\u3051\u3093",
    "\u305B\u3053\u3046",
    "\u305B\u3059\u3057\u3099",
    "\u305B\u305F\u3044",
    "\u305B\u305F\u3051",
    "\u305B\u3063\u304B\u304F",
    "\u305B\u3063\u304D\u3083\u304F",
    "\u305B\u3099\u3063\u304F",
    "\u305B\u3063\u3051\u3093",
    "\u305B\u3063\u3053\u3064",
    "\u305B\u3063\u3055\u305F\u304F\u307E",
    "\u305B\u3064\u305D\u3099\u304F",
    "\u305B\u3064\u305F\u3099\u3093",
    "\u305B\u3064\u3066\u3099\u3093",
    "\u305B\u3063\u306F\u309A\u3093",
    "\u305B\u3064\u3072\u3099",
    "\u305B\u3064\u3075\u3099\u3093",
    "\u305B\u3064\u3081\u3044",
    "\u305B\u3064\u308A\u3064",
    "\u305B\u306A\u304B",
    "\u305B\u306E\u3072\u3099",
    "\u305B\u306F\u306F\u3099",
    "\u305B\u3072\u3099\u308D",
    "\u305B\u307B\u3099\u306D",
    "\u305B\u307E\u3044",
    "\u305B\u307E\u308B",
    "\u305B\u3081\u308B",
    "\u305B\u3082\u305F\u308C",
    "\u305B\u308A\u3075",
    "\u305B\u3099\u3093\u3042\u304F",
    "\u305B\u3093\u3044",
    "\u305B\u3093\u3048\u3044",
    "\u305B\u3093\u304B",
    "\u305B\u3093\u304D\u3087",
    "\u305B\u3093\u304F",
    "\u305B\u3093\u3051\u3099\u3093",
    "\u305B\u3099\u3093\u3053\u3099",
    "\u305B\u3093\u3055\u3044",
    "\u305B\u3093\u3057\u3085",
    "\u305B\u3093\u3059\u3044",
    "\u305B\u3093\u305B\u3044",
    "\u305B\u3093\u305D\u3099",
    "\u305B\u3093\u305F\u304F",
    "\u305B\u3093\u3061\u3087\u3046",
    "\u305B\u3093\u3066\u3044",
    "\u305B\u3093\u3068\u3046",
    "\u305B\u3093\u306C\u304D",
    "\u305B\u3093\u306D\u3093",
    "\u305B\u3093\u306F\u309A\u3044",
    "\u305B\u3099\u3093\u3075\u3099",
    "\u305B\u3099\u3093\u307B\u309A\u3046",
    "\u305B\u3093\u3080",
    "\u305B\u3093\u3081\u3093\u3057\u3099\u3087",
    "\u305B\u3093\u3082\u3093",
    "\u305B\u3093\u3084\u304F",
    "\u305B\u3093\u3086\u3046",
    "\u305B\u3093\u3088\u3046",
    "\u305B\u3099\u3093\u3089",
    "\u305B\u3099\u3093\u308A\u3083\u304F",
    "\u305B\u3093\u308C\u3044",
    "\u305B\u3093\u308D",
    "\u305D\u3042\u304F",
    "\u305D\u3044\u3068\u3051\u3099\u308B",
    "\u305D\u3044\u306D",
    "\u305D\u3046\u304B\u3099\u3093\u304D\u3087\u3046",
    "\u305D\u3046\u304D",
    "\u305D\u3046\u3053\u3099",
    "\u305D\u3046\u3057\u3093",
    "\u305D\u3046\u305F\u3099\u3093",
    "\u305D\u3046\u306A\u3093",
    "\u305D\u3046\u3072\u3099",
    "\u305D\u3046\u3081\u3093",
    "\u305D\u3046\u308A",
    "\u305D\u3048\u3082\u306E",
    "\u305D\u3048\u3093",
    "\u305D\u304B\u3099\u3044",
    "\u305D\u3051\u3099\u304D",
    "\u305D\u3053\u3046",
    "\u305D\u3053\u305D\u3053",
    "\u305D\u3055\u3099\u3044",
    "\u305D\u3057\u306A",
    "\u305D\u305B\u3044",
    "\u305D\u305B\u3093",
    "\u305D\u305D\u304F\u3099",
    "\u305D\u305F\u3099\u3066\u308B",
    "\u305D\u3064\u3046",
    "\u305D\u3064\u3048\u3093",
    "\u305D\u3063\u304B\u3093",
    "\u305D\u3064\u304D\u3099\u3087\u3046",
    "\u305D\u3063\u3051\u3064",
    "\u305D\u3063\u3053\u3046",
    "\u305D\u3063\u305B\u3093",
    "\u305D\u3063\u3068",
    "\u305D\u3068\u304B\u3099\u308F",
    "\u305D\u3068\u3064\u3099\u3089",
    "\u305D\u306A\u3048\u308B",
    "\u305D\u306A\u305F",
    "\u305D\u3075\u307B\u3099",
    "\u305D\u307B\u3099\u304F",
    "\u305D\u307B\u3099\u308D",
    "\u305D\u307E\u3064",
    "\u305D\u307E\u308B",
    "\u305D\u3080\u304F",
    "\u305D\u3080\u308A\u3048",
    "\u305D\u3081\u308B",
    "\u305D\u3082\u305D\u3082",
    "\u305D\u3088\u304B\u305B\u3099",
    "\u305D\u3089\u307E\u3081",
    "\u305D\u308D\u3046",
    "\u305D\u3093\u304B\u3044",
    "\u305D\u3093\u3051\u3044",
    "\u305D\u3093\u3055\u3099\u3044",
    "\u305D\u3093\u3057\u3064",
    "\u305D\u3093\u305D\u3099\u304F",
    "\u305D\u3093\u3061\u3087\u3046",
    "\u305D\u3099\u3093\u3072\u3099",
    "\u305D\u3099\u3093\u3075\u3099\u3093",
    "\u305D\u3093\u307F\u3093",
    "\u305F\u3042\u3044",
    "\u305F\u3044\u3044\u3093",
    "\u305F\u3044\u3046\u3093",
    "\u305F\u3044\u3048\u304D",
    "\u305F\u3044\u304A\u3046",
    "\u305F\u3099\u3044\u304B\u3099\u304F",
    "\u305F\u3044\u304D",
    "\u305F\u3044\u304F\u3099\u3046",
    "\u305F\u3044\u3051\u3093",
    "\u305F\u3044\u3053",
    "\u305F\u3044\u3055\u3099\u3044",
    "\u305F\u3099\u3044\u3057\u3099\u3087\u3046\u3075\u3099",
    "\u305F\u3099\u3044\u3059\u304D",
    "\u305F\u3044\u305B\u3064",
    "\u305F\u3044\u305D\u3046",
    "\u305F\u3099\u3044\u305F\u3044",
    "\u305F\u3044\u3061\u3087\u3046",
    "\u305F\u3044\u3066\u3044",
    "\u305F\u3099\u3044\u3068\u3099\u3053\u308D",
    "\u305F\u3044\u306A\u3044",
    "\u305F\u3044\u306D\u3064",
    "\u305F\u3044\u306E\u3046",
    "\u305F\u3044\u306F\u3093",
    "\u305F\u3099\u3044\u3072\u3087\u3046",
    "\u305F\u3044\u3075\u3046",
    "\u305F\u3044\u3078\u3093",
    "\u305F\u3044\u307B",
    "\u305F\u3044\u307E\u3064\u306F\u3099\u306A",
    "\u305F\u3044\u307F\u3093\u304F\u3099",
    "\u305F\u3044\u3080",
    "\u305F\u3044\u3081\u3093",
    "\u305F\u3044\u3084\u304D",
    "\u305F\u3044\u3088\u3046",
    "\u305F\u3044\u3089",
    "\u305F\u3044\u308A\u3087\u304F",
    "\u305F\u3044\u308B",
    "\u305F\u3044\u308F\u3093",
    "\u305F\u3046\u3048",
    "\u305F\u3048\u308B",
    "\u305F\u304A\u3059",
    "\u305F\u304A\u308B",
    "\u305F\u304A\u308C\u308B",
    "\u305F\u304B\u3044",
    "\u305F\u304B\u306D",
    "\u305F\u304D\u3072\u3099",
    "\u305F\u304F\u3055\u3093",
    "\u305F\u3053\u304F",
    "\u305F\u3053\u3084\u304D",
    "\u305F\u3055\u3044",
    "\u305F\u3057\u3055\u3099\u3093",
    "\u305F\u3099\u3057\u3099\u3083\u308C",
    "\u305F\u3059\u3051\u308B",
    "\u305F\u3059\u3099\u3055\u308F\u308B",
    "\u305F\u305D\u304B\u3099\u308C",
    "\u305F\u305F\u304B\u3046",
    "\u305F\u305F\u304F",
    "\u305F\u305F\u3099\u3057\u3044",
    "\u305F\u305F\u307F",
    "\u305F\u3061\u306F\u3099\u306A",
    "\u305F\u3099\u3063\u304B\u3044",
    "\u305F\u3099\u3063\u304D\u3083\u304F",
    "\u305F\u3099\u3063\u3053",
    "\u305F\u3099\u3063\u3057\u3085\u3064",
    "\u305F\u3099\u3063\u305F\u3044",
    "\u305F\u3066\u308B",
    "\u305F\u3068\u3048\u308B",
    "\u305F\u306A\u306F\u3099\u305F",
    "\u305F\u306B\u3093",
    "\u305F\u306C\u304D",
    "\u305F\u306E\u3057\u307F",
    "\u305F\u306F\u3064",
    "\u305F\u3075\u3099\u3093",
    "\u305F\u3078\u3099\u308B",
    "\u305F\u307B\u3099\u3046",
    "\u305F\u307E\u3053\u3099",
    "\u305F\u307E\u308B",
    "\u305F\u3099\u3080\u308B",
    "\u305F\u3081\u3044\u304D",
    "\u305F\u3081\u3059",
    "\u305F\u3081\u308B",
    "\u305F\u3082\u3064",
    "\u305F\u3084\u3059\u3044",
    "\u305F\u3088\u308B",
    "\u305F\u3089\u3059",
    "\u305F\u308A\u304D\u307B\u3093\u304B\u3099\u3093",
    "\u305F\u308A\u3087\u3046",
    "\u305F\u308A\u308B",
    "\u305F\u308B\u3068",
    "\u305F\u308C\u308B",
    "\u305F\u308C\u3093\u3068",
    "\u305F\u308D\u3063\u3068",
    "\u305F\u308F\u3080\u308C\u308B",
    "\u305F\u3099\u3093\u3042\u3064",
    "\u305F\u3093\u3044",
    "\u305F\u3093\u304A\u3093",
    "\u305F\u3093\u304B",
    "\u305F\u3093\u304D",
    "\u305F\u3093\u3051\u3093",
    "\u305F\u3093\u3053\u3099",
    "\u305F\u3093\u3055\u3093",
    "\u305F\u3093\u3057\u3099\u3087\u3046\u3072\u3099",
    "\u305F\u3099\u3093\u305B\u3044",
    "\u305F\u3093\u305D\u304F",
    "\u305F\u3093\u305F\u3044",
    "\u305F\u3099\u3093\u3061",
    "\u305F\u3093\u3066\u3044",
    "\u305F\u3093\u3068\u3046",
    "\u305F\u3099\u3093\u306A",
    "\u305F\u3093\u306B\u3093",
    "\u305F\u3099\u3093\u306D\u3064",
    "\u305F\u3093\u306E\u3046",
    "\u305F\u3093\u3072\u309A\u3093",
    "\u305F\u3099\u3093\u307B\u3099\u3046",
    "\u305F\u3093\u307E\u3064",
    "\u305F\u3093\u3081\u3044",
    "\u305F\u3099\u3093\u308C\u3064",
    "\u305F\u3099\u3093\u308D",
    "\u305F\u3099\u3093\u308F",
    "\u3061\u3042\u3044",
    "\u3061\u3042\u3093",
    "\u3061\u3044\u304D",
    "\u3061\u3044\u3055\u3044",
    "\u3061\u3048\u3093",
    "\u3061\u304B\u3044",
    "\u3061\u304B\u3089",
    "\u3061\u304D\u3085\u3046",
    "\u3061\u304D\u3093",
    "\u3061\u3051\u3044\u3059\u3099",
    "\u3061\u3051\u3093",
    "\u3061\u3053\u304F",
    "\u3061\u3055\u3044",
    "\u3061\u3057\u304D",
    "\u3061\u3057\u308A\u3087\u3046",
    "\u3061\u305B\u3044",
    "\u3061\u305D\u3046",
    "\u3061\u305F\u3044",
    "\u3061\u305F\u3093",
    "\u3061\u3061\u304A\u3084",
    "\u3061\u3064\u3057\u3099\u3087",
    "\u3061\u3066\u304D",
    "\u3061\u3066\u3093",
    "\u3061\u306C\u304D",
    "\u3061\u306C\u308A",
    "\u3061\u306E\u3046",
    "\u3061\u3072\u3087\u3046",
    "\u3061\u3078\u3044\u305B\u3093",
    "\u3061\u307B\u3046",
    "\u3061\u307E\u305F",
    "\u3061\u307F\u3064",
    "\u3061\u307F\u3068\u3099\u308D",
    "\u3061\u3081\u3044\u3068\u3099",
    "\u3061\u3083\u3093\u3053\u306A\u3078\u3099",
    "\u3061\u3085\u3046\u3044",
    "\u3061\u3086\u308A\u3087\u304F",
    "\u3061\u3087\u3046\u3057",
    "\u3061\u3087\u3055\u304F\u3051\u3093",
    "\u3061\u3089\u3057",
    "\u3061\u3089\u307F",
    "\u3061\u308A\u304B\u3099\u307F",
    "\u3061\u308A\u3087\u3046",
    "\u3061\u308B\u3068\u3099",
    "\u3061\u308F\u308F",
    "\u3061\u3093\u305F\u3044",
    "\u3061\u3093\u3082\u304F",
    "\u3064\u3044\u304B",
    "\u3064\u3044\u305F\u3061",
    "\u3064\u3046\u304B",
    "\u3064\u3046\u3057\u3099\u3087\u3046",
    "\u3064\u3046\u306F\u3093",
    "\u3064\u3046\u308F",
    "\u3064\u304B\u3046",
    "\u3064\u304B\u308C\u308B",
    "\u3064\u304F\u306D",
    "\u3064\u304F\u308B",
    "\u3064\u3051\u306D",
    "\u3064\u3051\u308B",
    "\u3064\u3053\u3099\u3046",
    "\u3064\u305F\u3048\u308B",
    "\u3064\u3064\u3099\u304F",
    "\u3064\u3064\u3057\u3099",
    "\u3064\u3064\u3080",
    "\u3064\u3068\u3081\u308B",
    "\u3064\u306A\u304B\u3099\u308B",
    "\u3064\u306A\u307F",
    "\u3064\u306D\u3064\u3099\u306D",
    "\u3064\u306E\u308B",
    "\u3064\u3075\u3099\u3059",
    "\u3064\u307E\u3089\u306A\u3044",
    "\u3064\u307E\u308B",
    "\u3064\u307F\u304D",
    "\u3064\u3081\u305F\u3044",
    "\u3064\u3082\u308A",
    "\u3064\u3082\u308B",
    "\u3064\u3088\u3044",
    "\u3064\u308B\u307B\u3099",
    "\u3064\u308B\u307F\u304F",
    "\u3064\u308F\u3082\u306E",
    "\u3064\u308F\u308A",
    "\u3066\u3042\u3057",
    "\u3066\u3042\u3066",
    "\u3066\u3042\u307F",
    "\u3066\u3044\u304A\u3093",
    "\u3066\u3044\u304B",
    "\u3066\u3044\u304D",
    "\u3066\u3044\u3051\u3044",
    "\u3066\u3044\u3053\u304F",
    "\u3066\u3044\u3055\u3064",
    "\u3066\u3044\u3057",
    "\u3066\u3044\u305B\u3044",
    "\u3066\u3044\u305F\u3044",
    "\u3066\u3044\u3068\u3099",
    "\u3066\u3044\u306D\u3044",
    "\u3066\u3044\u3072\u3087\u3046",
    "\u3066\u3044\u3078\u3093",
    "\u3066\u3044\u307B\u3099\u3046",
    "\u3066\u3046\u3061",
    "\u3066\u304A\u304F\u308C",
    "\u3066\u304D\u3068\u3046",
    "\u3066\u304F\u3072\u3099",
    "\u3066\u3099\u3053\u307B\u3099\u3053",
    "\u3066\u3055\u304D\u3099\u3087\u3046",
    "\u3066\u3055\u3051\u3099",
    "\u3066\u3059\u308A",
    "\u3066\u305D\u3046",
    "\u3066\u3061\u304B\u3099\u3044",
    "\u3066\u3061\u3087\u3046",
    "\u3066\u3064\u304B\u3099\u304F",
    "\u3066\u3064\u3064\u3099\u304D",
    "\u3066\u3099\u3063\u306F\u309A",
    "\u3066\u3064\u307B\u3099\u3046",
    "\u3066\u3064\u3084",
    "\u3066\u3099\u306C\u304B\u3048",
    "\u3066\u306C\u304D",
    "\u3066\u306C\u304F\u3099\u3044",
    "\u3066\u306E\u3072\u3089",
    "\u3066\u306F\u3044",
    "\u3066\u3075\u3099\u304F\u308D",
    "\u3066\u3075\u305F\u3099",
    "\u3066\u307B\u3068\u3099\u304D",
    "\u3066\u307B\u3093",
    "\u3066\u307E\u3048",
    "\u3066\u307E\u304D\u3059\u3099\u3057",
    "\u3066\u307F\u3057\u3099\u304B",
    "\u3066\u307F\u3084\u3051\u3099",
    "\u3066\u3089\u3059",
    "\u3066\u308C\u3072\u3099",
    "\u3066\u308F\u3051",
    "\u3066\u308F\u305F\u3057",
    "\u3066\u3099\u3093\u3042\u3064",
    "\u3066\u3093\u3044\u3093",
    "\u3066\u3093\u304B\u3044",
    "\u3066\u3093\u304D",
    "\u3066\u3093\u304F\u3099",
    "\u3066\u3093\u3051\u3093",
    "\u3066\u3093\u3053\u3099\u304F",
    "\u3066\u3093\u3055\u3044",
    "\u3066\u3093\u3057",
    "\u3066\u3093\u3059\u3046",
    "\u3066\u3099\u3093\u3061",
    "\u3066\u3093\u3066\u304D",
    "\u3066\u3093\u3068\u3046",
    "\u3066\u3093\u306A\u3044",
    "\u3066\u3093\u3075\u309A\u3089",
    "\u3066\u3093\u307B\u3099\u3046\u305F\u3099\u3044",
    "\u3066\u3093\u3081\u3064",
    "\u3066\u3093\u3089\u3093\u304B\u3044",
    "\u3066\u3099\u3093\u308A\u3087\u304F",
    "\u3066\u3099\u3093\u308F",
    "\u3068\u3099\u3042\u3044",
    "\u3068\u3044\u308C",
    "\u3068\u3099\u3046\u304B\u3093",
    "\u3068\u3046\u304D\u3085\u3046",
    "\u3068\u3099\u3046\u304F\u3099",
    "\u3068\u3046\u3057",
    "\u3068\u3046\u3080\u304D\u3099",
    "\u3068\u304A\u3044",
    "\u3068\u304A\u304B",
    "\u3068\u304A\u304F",
    "\u3068\u304A\u3059",
    "\u3068\u304A\u308B",
    "\u3068\u304B\u3044",
    "\u3068\u304B\u3059",
    "\u3068\u304D\u304A\u308A",
    "\u3068\u304D\u3068\u3099\u304D",
    "\u3068\u304F\u3044",
    "\u3068\u304F\u3057\u3085\u3046",
    "\u3068\u304F\u3066\u3093",
    "\u3068\u304F\u306B",
    "\u3068\u304F\u3078\u3099\u3064",
    "\u3068\u3051\u3044",
    "\u3068\u3051\u308B",
    "\u3068\u3053\u3084",
    "\u3068\u3055\u304B",
    "\u3068\u3057\u3087\u304B\u3093",
    "\u3068\u305D\u3046",
    "\u3068\u305F\u3093",
    "\u3068\u3061\u3085\u3046",
    "\u3068\u3063\u304D\u3085\u3046",
    "\u3068\u3063\u304F\u3093",
    "\u3068\u3064\u305B\u3099\u3093",
    "\u3068\u3064\u306B\u3085\u3046",
    "\u3068\u3068\u3099\u3051\u308B",
    "\u3068\u3068\u306E\u3048\u308B",
    "\u3068\u306A\u3044",
    "\u3068\u306A\u3048\u308B",
    "\u3068\u306A\u308A",
    "\u3068\u306E\u3055\u307E",
    "\u3068\u306F\u3099\u3059",
    "\u3068\u3099\u3075\u3099\u304B\u3099\u308F",
    "\u3068\u307B\u3046",
    "\u3068\u307E\u308B",
    "\u3068\u3081\u308B",
    "\u3068\u3082\u305F\u3099\u3061",
    "\u3068\u3082\u308B",
    "\u3068\u3099\u3088\u3046\u3072\u3099",
    "\u3068\u3089\u3048\u308B",
    "\u3068\u3093\u304B\u3064",
    "\u3068\u3099\u3093\u3075\u3099\u308A",
    "\u306A\u3044\u304B\u304F",
    "\u306A\u3044\u3053\u3046",
    "\u306A\u3044\u3057\u3087",
    "\u306A\u3044\u3059",
    "\u306A\u3044\u305B\u3093",
    "\u306A\u3044\u305D\u3046",
    "\u306A\u304A\u3059",
    "\u306A\u304B\u3099\u3044",
    "\u306A\u304F\u3059",
    "\u306A\u3051\u3099\u308B",
    "\u306A\u3053\u3046\u3068\u3099",
    "\u306A\u3055\u3051",
    "\u306A\u305F\u3066\u3099\u3053\u3053",
    "\u306A\u3063\u3068\u3046",
    "\u306A\u3064\u3084\u3059\u307F",
    "\u306A\u306A\u304A\u3057",
    "\u306A\u306B\u3053\u3099\u3068",
    "\u306A\u306B\u3082\u306E",
    "\u306A\u306B\u308F",
    "\u306A\u306E\u304B",
    "\u306A\u3075\u305F\u3099",
    "\u306A\u307E\u3044\u304D",
    "\u306A\u307E\u3048",
    "\u306A\u307E\u307F",
    "\u306A\u307F\u305F\u3099",
    "\u306A\u3081\u3089\u304B",
    "\u306A\u3081\u308B",
    "\u306A\u3084\u3080",
    "\u306A\u3089\u3046",
    "\u306A\u3089\u3072\u3099",
    "\u306A\u3089\u3075\u3099",
    "\u306A\u308C\u308B",
    "\u306A\u308F\u3068\u3072\u3099",
    "\u306A\u308F\u306F\u3099\u308A",
    "\u306B\u3042\u3046",
    "\u306B\u3044\u304B\u3099\u305F",
    "\u306B\u3046\u3051",
    "\u306B\u304A\u3044",
    "\u306B\u304B\u3044",
    "\u306B\u304B\u3099\u3066",
    "\u306B\u304D\u3072\u3099",
    "\u306B\u304F\u3057\u307F",
    "\u306B\u304F\u307E\u3093",
    "\u306B\u3051\u3099\u308B",
    "\u306B\u3055\u3093\u304B\u305F\u3093\u305D",
    "\u306B\u3057\u304D",
    "\u306B\u305B\u3082\u306E",
    "\u306B\u3061\u3057\u3099\u3087\u3046",
    "\u306B\u3061\u3088\u3046\u3072\u3099",
    "\u306B\u3063\u304B",
    "\u306B\u3063\u304D",
    "\u306B\u3063\u3051\u3044",
    "\u306B\u3063\u3053\u3046",
    "\u306B\u3063\u3055\u3093",
    "\u306B\u3063\u3057\u3087\u304F",
    "\u306B\u3063\u3059\u3046",
    "\u306B\u3063\u305B\u304D",
    "\u306B\u3063\u3066\u3044",
    "\u306B\u306A\u3046",
    "\u306B\u307B\u3093",
    "\u306B\u307E\u3081",
    "\u306B\u3082\u3064",
    "\u306B\u3084\u308A",
    "\u306B\u3085\u3046\u3044\u3093",
    "\u306B\u308A\u3093\u3057\u3083",
    "\u306B\u308F\u3068\u308A",
    "\u306B\u3093\u3044",
    "\u306B\u3093\u304B",
    "\u306B\u3093\u304D",
    "\u306B\u3093\u3051\u3099\u3093",
    "\u306B\u3093\u3057\u304D",
    "\u306B\u3093\u3059\u3099\u3046",
    "\u306B\u3093\u305D\u3046",
    "\u306B\u3093\u305F\u3044",
    "\u306B\u3093\u3061",
    "\u306B\u3093\u3066\u3044",
    "\u306B\u3093\u306B\u304F",
    "\u306B\u3093\u3075\u309A",
    "\u306B\u3093\u307E\u308A",
    "\u306B\u3093\u3080",
    "\u306B\u3093\u3081\u3044",
    "\u306B\u3093\u3088\u3046",
    "\u306C\u3044\u304F\u304D\u3099",
    "\u306C\u304B\u3059",
    "\u306C\u304F\u3099\u3044\u3068\u308B",
    "\u306C\u304F\u3099\u3046",
    "\u306C\u304F\u3082\u308A",
    "\u306C\u3059\u3080",
    "\u306C\u307E\u3048\u3072\u3099",
    "\u306C\u3081\u308A",
    "\u306C\u3089\u3059",
    "\u306C\u3093\u3061\u3083\u304F",
    "\u306D\u3042\u3051\u3099",
    "\u306D\u3044\u304D",
    "\u306D\u3044\u308B",
    "\u306D\u3044\u308D",
    "\u306D\u304F\u3099\u305B",
    "\u306D\u304F\u305F\u3044",
    "\u306D\u304F\u3089",
    "\u306D\u3053\u305B\u3099",
    "\u306D\u3053\u3080",
    "\u306D\u3055\u3051\u3099",
    "\u306D\u3059\u3053\u3099\u3059",
    "\u306D\u305D\u3078\u3099\u308B",
    "\u306D\u305F\u3099\u3093",
    "\u306D\u3064\u3044",
    "\u306D\u3063\u3057\u3093",
    "\u306D\u3064\u305D\u3099\u3046",
    "\u306D\u3063\u305F\u3044\u304D\u3099\u3087",
    "\u306D\u3075\u3099\u305D\u304F",
    "\u306D\u3075\u305F\u3099",
    "\u306D\u307B\u3099\u3046",
    "\u306D\u307B\u308A\u306F\u307B\u308A",
    "\u306D\u307E\u304D",
    "\u306D\u307E\u308F\u3057",
    "\u306D\u307F\u307F",
    "\u306D\u3080\u3044",
    "\u306D\u3080\u305F\u3044",
    "\u306D\u3082\u3068",
    "\u306D\u3089\u3046",
    "\u306D\u308F\u3055\u3099",
    "\u306D\u3093\u3044\u308A",
    "\u306D\u3093\u304A\u3057",
    "\u306D\u3093\u304B\u3093",
    "\u306D\u3093\u304D\u3093",
    "\u306D\u3093\u304F\u3099",
    "\u306D\u3093\u3055\u3099",
    "\u306D\u3093\u3057",
    "\u306D\u3093\u3061\u3083\u304F",
    "\u306D\u3093\u3068\u3099",
    "\u306D\u3093\u3072\u309A",
    "\u306D\u3093\u3075\u3099\u3064",
    "\u306D\u3093\u307E\u3064",
    "\u306D\u3093\u308A\u3087\u3046",
    "\u306D\u3093\u308C\u3044",
    "\u306E\u3044\u3059\u3099",
    "\u306E\u304A\u3064\u3099\u307E",
    "\u306E\u304B\u3099\u3059",
    "\u306E\u304D\u306A\u307F",
    "\u306E\u3053\u304D\u3099\u308A",
    "\u306E\u3053\u3059",
    "\u306E\u3053\u308B",
    "\u306E\u305B\u308B",
    "\u306E\u305D\u3099\u304F",
    "\u306E\u305D\u3099\u3080",
    "\u306E\u305F\u307E\u3046",
    "\u306E\u3061\u307B\u3068\u3099",
    "\u306E\u3063\u304F",
    "\u306E\u306F\u3099\u3059",
    "\u306E\u306F\u3089",
    "\u306E\u3078\u3099\u308B",
    "\u306E\u307B\u3099\u308B",
    "\u306E\u307F\u3082\u306E",
    "\u306E\u3084\u307E",
    "\u306E\u3089\u3044\u306C",
    "\u306E\u3089\u306D\u3053",
    "\u306E\u308A\u3082\u306E",
    "\u306E\u308A\u3086\u304D",
    "\u306E\u308C\u3093",
    "\u306E\u3093\u304D",
    "\u306F\u3099\u3042\u3044",
    "\u306F\u3042\u304F",
    "\u306F\u3099\u3042\u3055\u3093",
    "\u306F\u3099\u3044\u304B",
    "\u306F\u3099\u3044\u304F",
    "\u306F\u3044\u3051\u3093",
    "\u306F\u3044\u3053\u3099",
    "\u306F\u3044\u3057\u3093",
    "\u306F\u3044\u3059\u3044",
    "\u306F\u3044\u305B\u3093",
    "\u306F\u3044\u305D\u3046",
    "\u306F\u3044\u3061",
    "\u306F\u3099\u3044\u306F\u3099\u3044",
    "\u306F\u3044\u308C\u3064",
    "\u306F\u3048\u308B",
    "\u306F\u304A\u308B",
    "\u306F\u304B\u3044",
    "\u306F\u3099\u304B\u308A",
    "\u306F\u304B\u308B",
    "\u306F\u304F\u3057\u3085",
    "\u306F\u3051\u3093",
    "\u306F\u3053\u3075\u3099",
    "\u306F\u3055\u307F",
    "\u306F\u3055\u3093",
    "\u306F\u3057\u3053\u3099",
    "\u306F\u3099\u3057\u3087",
    "\u306F\u3057\u308B",
    "\u306F\u305B\u308B",
    "\u306F\u309A\u305D\u3053\u3093",
    "\u306F\u305D\u3093",
    "\u306F\u305F\u3093",
    "\u306F\u3061\u307F\u3064",
    "\u306F\u3064\u304A\u3093",
    "\u306F\u3063\u304B\u304F",
    "\u306F\u3064\u3099\u304D",
    "\u306F\u3063\u304D\u308A",
    "\u306F\u3063\u304F\u3064",
    "\u306F\u3063\u3051\u3093",
    "\u306F\u3063\u3053\u3046",
    "\u306F\u3063\u3055\u3093",
    "\u306F\u3063\u3057\u3093",
    "\u306F\u3063\u305F\u3064",
    "\u306F\u3063\u3061\u3085\u3046",
    "\u306F\u3063\u3066\u3093",
    "\u306F\u3063\u3072\u309A\u3087\u3046",
    "\u306F\u3063\u307B\u309A\u3046",
    "\u306F\u306A\u3059",
    "\u306F\u306A\u3072\u3099",
    "\u306F\u306B\u304B\u3080",
    "\u306F\u3075\u3099\u3089\u3057",
    "\u306F\u307F\u304B\u3099\u304D",
    "\u306F\u3080\u304B\u3046",
    "\u306F\u3081\u3064",
    "\u306F\u3084\u3044",
    "\u306F\u3084\u3057",
    "\u306F\u3089\u3046",
    "\u306F\u308D\u3046\u3043\u3093",
    "\u306F\u308F\u3044",
    "\u306F\u3093\u3044",
    "\u306F\u3093\u3048\u3044",
    "\u306F\u3093\u304A\u3093",
    "\u306F\u3093\u304B\u304F",
    "\u306F\u3093\u304D\u3087\u3046",
    "\u306F\u3099\u3093\u304F\u3099\u307F",
    "\u306F\u3093\u3053",
    "\u306F\u3093\u3057\u3083",
    "\u306F\u3093\u3059\u3046",
    "\u306F\u3093\u305F\u3099\u3093",
    "\u306F\u309A\u3093\u3061",
    "\u306F\u309A\u3093\u3064",
    "\u306F\u3093\u3066\u3044",
    "\u306F\u3093\u3068\u3057",
    "\u306F\u3093\u306E\u3046",
    "\u306F\u3093\u306F\u309A",
    "\u306F\u3093\u3075\u3099\u3093",
    "\u306F\u3093\u3078\u309A\u3093",
    "\u306F\u3093\u307B\u3099\u3046\u304D",
    "\u306F\u3093\u3081\u3044",
    "\u306F\u3093\u3089\u3093",
    "\u306F\u3093\u308D\u3093",
    "\u3072\u3044\u304D",
    "\u3072\u3046\u3093",
    "\u3072\u3048\u308B",
    "\u3072\u304B\u304F",
    "\u3072\u304B\u308A",
    "\u3072\u304B\u308B",
    "\u3072\u304B\u3093",
    "\u3072\u304F\u3044",
    "\u3072\u3051\u3064",
    "\u3072\u3053\u3046\u304D",
    "\u3072\u3053\u304F",
    "\u3072\u3055\u3044",
    "\u3072\u3055\u3057\u3075\u3099\u308A",
    "\u3072\u3055\u3093",
    "\u3072\u3099\u3057\u3099\u3085\u3064\u304B\u3093",
    "\u3072\u3057\u3087",
    "\u3072\u305D\u304B",
    "\u3072\u305D\u3080",
    "\u3072\u305F\u3080\u304D",
    "\u3072\u305F\u3099\u308A",
    "\u3072\u305F\u308B",
    "\u3072\u3064\u304D\u3099",
    "\u3072\u3063\u3053\u3057",
    "\u3072\u3063\u3057",
    "\u3072\u3064\u3057\u3099\u3085\u3072\u3093",
    "\u3072\u3063\u3059",
    "\u3072\u3064\u305B\u3099\u3093",
    "\u3072\u309A\u3063\u305F\u308A",
    "\u3072\u309A\u3063\u3061\u308A",
    "\u3072\u3064\u3088\u3046",
    "\u3072\u3066\u3044",
    "\u3072\u3068\u3053\u3099\u307F",
    "\u3072\u306A\u307E\u3064\u308A",
    "\u3072\u306A\u3093",
    "\u3072\u306D\u308B",
    "\u3072\u306F\u3093",
    "\u3072\u3072\u3099\u304F",
    "\u3072\u3072\u3087\u3046",
    "\u3072\u307B\u3046",
    "\u3072\u307E\u308F\u308A",
    "\u3072\u307E\u3093",
    "\u3072\u307F\u3064",
    "\u3072\u3081\u3044",
    "\u3072\u3081\u3057\u3099\u3057",
    "\u3072\u3084\u3051",
    "\u3072\u3084\u3059",
    "\u3072\u3088\u3046",
    "\u3072\u3099\u3087\u3046\u304D",
    "\u3072\u3089\u304B\u3099\u306A",
    "\u3072\u3089\u304F",
    "\u3072\u308A\u3064",
    "\u3072\u308A\u3087\u3046",
    "\u3072\u308B\u307E",
    "\u3072\u308B\u3084\u3059\u307F",
    "\u3072\u308C\u3044",
    "\u3072\u308D\u3044",
    "\u3072\u308D\u3046",
    "\u3072\u308D\u304D",
    "\u3072\u308D\u3086\u304D",
    "\u3072\u3093\u304B\u304F",
    "\u3072\u3093\u3051\u3064",
    "\u3072\u3093\u3053\u3093",
    "\u3072\u3093\u3057\u3085",
    "\u3072\u3093\u305D\u3046",
    "\u3072\u309A\u3093\u3061",
    "\u3072\u3093\u306F\u309A\u3093",
    "\u3072\u3099\u3093\u307B\u3099\u3046",
    "\u3075\u3042\u3093",
    "\u3075\u3044\u3046\u3061",
    "\u3075\u3046\u3051\u3044",
    "\u3075\u3046\u305B\u3093",
    "\u3075\u309A\u3046\u305F\u308D\u3046",
    "\u3075\u3046\u3068\u3046",
    "\u3075\u3046\u3075",
    "\u3075\u3048\u308B",
    "\u3075\u304A\u3093",
    "\u3075\u304B\u3044",
    "\u3075\u304D\u3093",
    "\u3075\u304F\u3055\u3099\u3064",
    "\u3075\u304F\u3075\u3099\u304F\u308D",
    "\u3075\u3053\u3046",
    "\u3075\u3055\u3044",
    "\u3075\u3057\u304D\u3099",
    "\u3075\u3057\u3099\u307F",
    "\u3075\u3059\u307E",
    "\u3075\u305B\u3044",
    "\u3075\u305B\u304F\u3099",
    "\u3075\u305D\u304F",
    "\u3075\u3099\u305F\u306B\u304F",
    "\u3075\u305F\u3093",
    "\u3075\u3061\u3087\u3046",
    "\u3075\u3064\u3046",
    "\u3075\u3064\u304B",
    "\u3075\u3063\u304B\u3064",
    "\u3075\u3063\u304D",
    "\u3075\u3063\u3053\u304F",
    "\u3075\u3099\u3068\u3099\u3046",
    "\u3075\u3068\u308B",
    "\u3075\u3068\u3093",
    "\u3075\u306E\u3046",
    "\u3075\u306F\u3044",
    "\u3075\u3072\u3087\u3046",
    "\u3075\u3078\u3093",
    "\u3075\u307E\u3093",
    "\u3075\u307F\u3093",
    "\u3075\u3081\u3064",
    "\u3075\u3081\u3093",
    "\u3075\u3088\u3046",
    "\u3075\u308A\u3053",
    "\u3075\u308A\u308B",
    "\u3075\u308B\u3044",
    "\u3075\u3093\u3044\u304D",
    "\u3075\u3099\u3093\u304B\u3099\u304F",
    "\u3075\u3099\u3093\u304F\u3099",
    "\u3075\u3093\u3057\u3064",
    "\u3075\u3099\u3093\u305B\u304D",
    "\u3075\u3093\u305D\u3046",
    "\u3075\u3099\u3093\u307B\u309A\u3046",
    "\u3078\u3044\u3042\u3093",
    "\u3078\u3044\u304A\u3093",
    "\u3078\u3044\u304B\u3099\u3044",
    "\u3078\u3044\u304D",
    "\u3078\u3044\u3051\u3099\u3093",
    "\u3078\u3044\u3053\u3046",
    "\u3078\u3044\u3055",
    "\u3078\u3044\u3057\u3083",
    "\u3078\u3044\u305B\u3064",
    "\u3078\u3044\u305D",
    "\u3078\u3044\u305F\u304F",
    "\u3078\u3044\u3066\u3093",
    "\u3078\u3044\u306D\u3064",
    "\u3078\u3044\u308F",
    "\u3078\u304D\u304B\u3099",
    "\u3078\u3053\u3080",
    "\u3078\u3099\u306B\u3044\u308D",
    "\u3078\u3099\u306B\u3057\u3087\u3046\u304B\u3099",
    "\u3078\u3089\u3059",
    "\u3078\u3093\u304B\u3093",
    "\u3078\u3099\u3093\u304D\u3087\u3046",
    "\u3078\u3099\u3093\u3053\u3099\u3057",
    "\u3078\u3093\u3055\u3044",
    "\u3078\u3093\u305F\u3044",
    "\u3078\u3099\u3093\u308A",
    "\u307B\u3042\u3093",
    "\u307B\u3044\u304F",
    "\u307B\u3099\u3046\u304D\u3099\u3087",
    "\u307B\u3046\u3053\u304F",
    "\u307B\u3046\u305D\u3046",
    "\u307B\u3046\u307B\u3046",
    "\u307B\u3046\u3082\u3093",
    "\u307B\u3046\u308A\u3064",
    "\u307B\u3048\u308B",
    "\u307B\u304A\u3093",
    "\u307B\u304B\u3093",
    "\u307B\u304D\u3087\u3046",
    "\u307B\u3099\u304D\u3093",
    "\u307B\u304F\u308D",
    "\u307B\u3051\u3064",
    "\u307B\u3051\u3093",
    "\u307B\u3053\u3046",
    "\u307B\u3053\u308B",
    "\u307B\u3057\u3044",
    "\u307B\u3057\u3064",
    "\u307B\u3057\u3085",
    "\u307B\u3057\u3087\u3046",
    "\u307B\u305B\u3044",
    "\u307B\u305D\u3044",
    "\u307B\u305D\u304F",
    "\u307B\u305F\u3066",
    "\u307B\u305F\u308B",
    "\u307B\u309A\u3061\u3075\u3099\u304F\u308D",
    "\u307B\u3063\u304D\u3087\u304F",
    "\u307B\u3063\u3055",
    "\u307B\u3063\u305F\u3093",
    "\u307B\u3068\u3093\u3068\u3099",
    "\u307B\u3081\u308B",
    "\u307B\u3093\u3044",
    "\u307B\u3093\u304D",
    "\u307B\u3093\u3051",
    "\u307B\u3093\u3057\u3064",
    "\u307B\u3093\u3084\u304F",
    "\u307E\u3044\u306B\u3061",
    "\u307E\u304B\u3044",
    "\u307E\u304B\u305B\u308B",
    "\u307E\u304B\u3099\u308B",
    "\u307E\u3051\u308B",
    "\u307E\u3053\u3068",
    "\u307E\u3055\u3064",
    "\u307E\u3057\u3099\u3081",
    "\u307E\u3059\u304F",
    "\u307E\u305B\u3099\u308B",
    "\u307E\u3064\u308A",
    "\u307E\u3068\u3081",
    "\u307E\u306A\u3075\u3099",
    "\u307E\u306C\u3051",
    "\u307E\u306D\u304F",
    "\u307E\u307B\u3046",
    "\u307E\u3082\u308B",
    "\u307E\u3086\u3051\u3099",
    "\u307E\u3088\u3046",
    "\u307E\u308D\u3084\u304B",
    "\u307E\u308F\u3059",
    "\u307E\u308F\u308A",
    "\u307E\u308F\u308B",
    "\u307E\u3093\u304B\u3099",
    "\u307E\u3093\u304D\u3064",
    "\u307E\u3093\u305D\u3099\u304F",
    "\u307E\u3093\u306A\u304B",
    "\u307F\u3044\u3089",
    "\u307F\u3046\u3061",
    "\u307F\u3048\u308B",
    "\u307F\u304B\u3099\u304F",
    "\u307F\u304B\u305F",
    "\u307F\u304B\u3093",
    "\u307F\u3051\u3093",
    "\u307F\u3053\u3093",
    "\u307F\u3057\u3099\u304B\u3044",
    "\u307F\u3059\u3044",
    "\u307F\u3059\u3048\u308B",
    "\u307F\u305B\u308B",
    "\u307F\u3063\u304B",
    "\u307F\u3064\u304B\u308B",
    "\u307F\u3064\u3051\u308B",
    "\u307F\u3066\u3044",
    "\u307F\u3068\u3081\u308B",
    "\u307F\u306A\u3068",
    "\u307F\u306A\u307F\u304B\u3055\u3044",
    "\u307F\u306D\u3089\u308B",
    "\u307F\u306E\u3046",
    "\u307F\u306E\u304B\u3099\u3059",
    "\u307F\u307B\u3093",
    "\u307F\u3082\u3068",
    "\u307F\u3084\u3051\u3099",
    "\u307F\u3089\u3044",
    "\u307F\u308A\u3087\u304F",
    "\u307F\u308F\u304F",
    "\u307F\u3093\u304B",
    "\u307F\u3093\u305D\u3099\u304F",
    "\u3080\u3044\u304B",
    "\u3080\u3048\u304D",
    "\u3080\u3048\u3093",
    "\u3080\u304B\u3044",
    "\u3080\u304B\u3046",
    "\u3080\u304B\u3048",
    "\u3080\u304B\u3057",
    "\u3080\u304D\u3099\u3061\u3083",
    "\u3080\u3051\u308B",
    "\u3080\u3051\u3099\u3093",
    "\u3080\u3055\u307B\u3099\u308B",
    "\u3080\u3057\u3042\u3064\u3044",
    "\u3080\u3057\u306F\u3099",
    "\u3080\u3057\u3099\u3085\u3093",
    "\u3080\u3057\u308D",
    "\u3080\u3059\u3046",
    "\u3080\u3059\u3053",
    "\u3080\u3059\u3075\u3099",
    "\u3080\u3059\u3081",
    "\u3080\u305B\u308B",
    "\u3080\u305B\u3093",
    "\u3080\u3061\u3085\u3046",
    "\u3080\u306A\u3057\u3044",
    "\u3080\u306E\u3046",
    "\u3080\u3084\u307F",
    "\u3080\u3088\u3046",
    "\u3080\u3089\u3055\u304D",
    "\u3080\u308A\u3087\u3046",
    "\u3080\u308D\u3093",
    "\u3081\u3044\u3042\u3093",
    "\u3081\u3044\u3046\u3093",
    "\u3081\u3044\u3048\u3093",
    "\u3081\u3044\u304B\u304F",
    "\u3081\u3044\u304D\u3087\u304F",
    "\u3081\u3044\u3055\u3044",
    "\u3081\u3044\u3057",
    "\u3081\u3044\u305D\u3046",
    "\u3081\u3044\u3075\u3099\u3064",
    "\u3081\u3044\u308C\u3044",
    "\u3081\u3044\u308F\u304F",
    "\u3081\u304F\u3099\u307E\u308C\u308B",
    "\u3081\u3055\u3099\u3059",
    "\u3081\u3057\u305F",
    "\u3081\u3059\u3099\u3089\u3057\u3044",
    "\u3081\u305F\u3099\u3064",
    "\u3081\u307E\u3044",
    "\u3081\u3084\u3059",
    "\u3081\u3093\u304D\u3087",
    "\u3081\u3093\u305B\u304D",
    "\u3081\u3093\u3068\u3099\u3046",
    "\u3082\u3046\u3057\u3042\u3051\u3099\u308B",
    "\u3082\u3046\u3068\u3099\u3046\u3051\u3093",
    "\u3082\u3048\u308B",
    "\u3082\u304F\u3057",
    "\u3082\u304F\u3066\u304D",
    "\u3082\u304F\u3088\u3046\u3072\u3099",
    "\u3082\u3061\u308D\u3093",
    "\u3082\u3068\u3099\u308B",
    "\u3082\u3089\u3046",
    "\u3082\u3093\u304F",
    "\u3082\u3093\u305F\u3099\u3044",
    "\u3084\u304A\u3084",
    "\u3084\u3051\u308B",
    "\u3084\u3055\u3044",
    "\u3084\u3055\u3057\u3044",
    "\u3084\u3059\u3044",
    "\u3084\u3059\u305F\u308D\u3046",
    "\u3084\u3059\u307F",
    "\u3084\u305B\u308B",
    "\u3084\u305D\u3046",
    "\u3084\u305F\u3044",
    "\u3084\u3061\u3093",
    "\u3084\u3063\u3068",
    "\u3084\u3063\u306F\u309A\u308A",
    "\u3084\u3075\u3099\u308B",
    "\u3084\u3081\u308B",
    "\u3084\u3084\u3053\u3057\u3044",
    "\u3084\u3088\u3044",
    "\u3084\u308F\u3089\u304B\u3044",
    "\u3086\u3046\u304D",
    "\u3086\u3046\u3072\u3099\u3093\u304D\u3087\u304F",
    "\u3086\u3046\u3078\u3099",
    "\u3086\u3046\u3081\u3044",
    "\u3086\u3051\u3064",
    "\u3086\u3057\u3085\u3064",
    "\u3086\u305B\u3093",
    "\u3086\u305D\u3046",
    "\u3086\u305F\u304B",
    "\u3086\u3061\u3083\u304F",
    "\u3086\u3066\u3099\u308B",
    "\u3086\u306B\u3085\u3046",
    "\u3086\u3072\u3099\u308F",
    "\u3086\u3089\u3044",
    "\u3086\u308C\u308B",
    "\u3088\u3046\u3044",
    "\u3088\u3046\u304B",
    "\u3088\u3046\u304D\u3085\u3046",
    "\u3088\u3046\u3057\u3099",
    "\u3088\u3046\u3059",
    "\u3088\u3046\u3061\u3048\u3093",
    "\u3088\u304B\u305B\u3099",
    "\u3088\u304B\u3093",
    "\u3088\u304D\u3093",
    "\u3088\u304F\u305B\u3044",
    "\u3088\u304F\u307B\u3099\u3046",
    "\u3088\u3051\u3044",
    "\u3088\u3053\u3099\u308C\u308B",
    "\u3088\u3055\u3093",
    "\u3088\u3057\u3085\u3046",
    "\u3088\u305D\u3046",
    "\u3088\u305D\u304F",
    "\u3088\u3063\u304B",
    "\u3088\u3066\u3044",
    "\u3088\u3068\u3099\u304B\u3099\u308F\u304F",
    "\u3088\u306D\u3064",
    "\u3088\u3084\u304F",
    "\u3088\u3086\u3046",
    "\u3088\u308D\u3053\u3075\u3099",
    "\u3088\u308D\u3057\u3044",
    "\u3089\u3044\u3046",
    "\u3089\u304F\u304B\u3099\u304D",
    "\u3089\u304F\u3053\u3099",
    "\u3089\u304F\u3055\u3064",
    "\u3089\u304F\u305F\u3099",
    "\u3089\u3057\u3093\u306F\u3099\u3093",
    "\u3089\u305B\u3093",
    "\u3089\u305D\u3099\u304F",
    "\u3089\u305F\u3044",
    "\u3089\u3063\u304B",
    "\u3089\u308C\u3064",
    "\u308A\u3048\u304D",
    "\u308A\u304B\u3044",
    "\u308A\u304D\u3055\u304F",
    "\u308A\u304D\u305B\u3064",
    "\u308A\u304F\u304F\u3099\u3093",
    "\u308A\u304F\u3064",
    "\u308A\u3051\u3093",
    "\u308A\u3053\u3046",
    "\u308A\u305B\u3044",
    "\u308A\u305D\u3046",
    "\u308A\u305D\u304F",
    "\u308A\u3066\u3093",
    "\u308A\u306D\u3093",
    "\u308A\u3086\u3046",
    "\u308A\u3085\u3046\u304B\u3099\u304F",
    "\u308A\u3088\u3046",
    "\u308A\u3087\u3046\u308A",
    "\u308A\u3087\u304B\u3093",
    "\u308A\u3087\u304F\u3061\u3083",
    "\u308A\u3087\u3053\u3046",
    "\u308A\u308A\u304F",
    "\u308A\u308C\u304D",
    "\u308A\u308D\u3093",
    "\u308A\u3093\u3053\u3099",
    "\u308B\u3044\u3051\u3044",
    "\u308B\u3044\u3055\u3044",
    "\u308B\u3044\u3057\u3099",
    "\u308B\u3044\u305B\u304D",
    "\u308B\u3059\u306F\u3099\u3093",
    "\u308B\u308A\u304B\u3099\u308F\u3089",
    "\u308C\u3044\u304B\u3093",
    "\u308C\u3044\u304D\u3099",
    "\u308C\u3044\u305B\u3044",
    "\u308C\u3044\u305D\u3099\u3046\u3053",
    "\u308C\u3044\u3068\u3046",
    "\u308C\u3044\u307B\u3099\u3046",
    "\u308C\u304D\u3057",
    "\u308C\u304D\u305F\u3099\u3044",
    "\u308C\u3093\u3042\u3044",
    "\u308C\u3093\u3051\u3044",
    "\u308C\u3093\u3053\u3093",
    "\u308C\u3093\u3055\u3044",
    "\u308C\u3093\u3057\u3085\u3046",
    "\u308C\u3093\u305D\u3099\u304F",
    "\u308C\u3093\u3089\u304F",
    "\u308D\u3046\u304B",
    "\u308D\u3046\u3053\u3099",
    "\u308D\u3046\u3057\u3099\u3093",
    "\u308D\u3046\u305D\u304F",
    "\u308D\u304F\u304B\u3099",
    "\u308D\u3053\u3064",
    "\u308D\u3057\u3099\u3046\u3089",
    "\u308D\u3057\u3085\u3064",
    "\u308D\u305B\u3093",
    "\u308D\u3066\u3093",
    "\u308D\u3081\u3093",
    "\u308D\u308C\u3064",
    "\u308D\u3093\u304D\u3099",
    "\u308D\u3093\u306F\u309A",
    "\u308D\u3093\u3075\u3099\u3093",
    "\u308D\u3093\u308A",
    "\u308F\u304B\u3059",
    "\u308F\u304B\u3081",
    "\u308F\u304B\u3084\u307E",
    "\u308F\u304B\u308C\u308B",
    "\u308F\u3057\u3064",
    "\u308F\u3057\u3099\u307E\u3057",
    "\u308F\u3059\u308C\u3082\u306E",
    "\u308F\u3089\u3046",
    "\u308F\u308C\u308B"
  ], yp = [
    "abacate",
    "abaixo",
    "abalar",
    "abater",
    "abduzir",
    "abelha",
    "aberto",
    "abismo",
    "abotoar",
    "abranger",
    "abreviar",
    "abrigar",
    "abrupto",
    "absinto",
    "absoluto",
    "absurdo",
    "abutre",
    "acabado",
    "acalmar",
    "acampar",
    "acanhar",
    "acaso",
    "aceitar",
    "acelerar",
    "acenar",
    "acervo",
    "acessar",
    "acetona",
    "achatar",
    "acidez",
    "acima",
    "acionado",
    "acirrar",
    "aclamar",
    "aclive",
    "acolhida",
    "acomodar",
    "acoplar",
    "acordar",
    "acumular",
    "acusador",
    "adaptar",
    "adega",
    "adentro",
    "adepto",
    "adequar",
    "aderente",
    "adesivo",
    "adeus",
    "adiante",
    "aditivo",
    "adjetivo",
    "adjunto",
    "admirar",
    "adorar",
    "adquirir",
    "adubo",
    "adverso",
    "advogado",
    "aeronave",
    "afastar",
    "aferir",
    "afetivo",
    "afinador",
    "afivelar",
    "aflito",
    "afluente",
    "afrontar",
    "agachar",
    "agarrar",
    "agasalho",
    "agenciar",
    "agilizar",
    "agiota",
    "agitado",
    "agora",
    "agradar",
    "agreste",
    "agrupar",
    "aguardar",
    "agulha",
    "ajoelhar",
    "ajudar",
    "ajustar",
    "alameda",
    "alarme",
    "alastrar",
    "alavanca",
    "albergue",
    "albino",
    "alcatra",
    "aldeia",
    "alecrim",
    "alegria",
    "alertar",
    "alface",
    "alfinete",
    "algum",
    "alheio",
    "aliar",
    "alicate",
    "alienar",
    "alinhar",
    "aliviar",
    "almofada",
    "alocar",
    "alpiste",
    "alterar",
    "altitude",
    "alucinar",
    "alugar",
    "aluno",
    "alusivo",
    "alvo",
    "amaciar",
    "amador",
    "amarelo",
    "amassar",
    "ambas",
    "ambiente",
    "ameixa",
    "amenizar",
    "amido",
    "amistoso",
    "amizade",
    "amolador",
    "amontoar",
    "amoroso",
    "amostra",
    "amparar",
    "ampliar",
    "ampola",
    "anagrama",
    "analisar",
    "anarquia",
    "anatomia",
    "andaime",
    "anel",
    "anexo",
    "angular",
    "animar",
    "anjo",
    "anomalia",
    "anotado",
    "ansioso",
    "anterior",
    "anuidade",
    "anunciar",
    "anzol",
    "apagador",
    "apalpar",
    "apanhado",
    "apego",
    "apelido",
    "apertada",
    "apesar",
    "apetite",
    "apito",
    "aplauso",
    "aplicada",
    "apoio",
    "apontar",
    "aposta",
    "aprendiz",
    "aprovar",
    "aquecer",
    "arame",
    "aranha",
    "arara",
    "arcada",
    "ardente",
    "areia",
    "arejar",
    "arenito",
    "aresta",
    "argiloso",
    "argola",
    "arma",
    "arquivo",
    "arraial",
    "arrebate",
    "arriscar",
    "arroba",
    "arrumar",
    "arsenal",
    "arterial",
    "artigo",
    "arvoredo",
    "asfaltar",
    "asilado",
    "aspirar",
    "assador",
    "assinar",
    "assoalho",
    "assunto",
    "astral",
    "atacado",
    "atadura",
    "atalho",
    "atarefar",
    "atear",
    "atender",
    "aterro",
    "ateu",
    "atingir",
    "atirador",
    "ativo",
    "atoleiro",
    "atracar",
    "atrevido",
    "atriz",
    "atual",
    "atum",
    "auditor",
    "aumentar",
    "aura",
    "aurora",
    "autismo",
    "autoria",
    "autuar",
    "avaliar",
    "avante",
    "avaria",
    "avental",
    "avesso",
    "aviador",
    "avisar",
    "avulso",
    "axila",
    "azarar",
    "azedo",
    "azeite",
    "azulejo",
    "babar",
    "babosa",
    "bacalhau",
    "bacharel",
    "bacia",
    "bagagem",
    "baiano",
    "bailar",
    "baioneta",
    "bairro",
    "baixista",
    "bajular",
    "baleia",
    "baliza",
    "balsa",
    "banal",
    "bandeira",
    "banho",
    "banir",
    "banquete",
    "barato",
    "barbado",
    "baronesa",
    "barraca",
    "barulho",
    "baseado",
    "bastante",
    "batata",
    "batedor",
    "batida",
    "batom",
    "batucar",
    "baunilha",
    "beber",
    "beijo",
    "beirada",
    "beisebol",
    "beldade",
    "beleza",
    "belga",
    "beliscar",
    "bendito",
    "bengala",
    "benzer",
    "berimbau",
    "berlinda",
    "berro",
    "besouro",
    "bexiga",
    "bezerro",
    "bico",
    "bicudo",
    "bienal",
    "bifocal",
    "bifurcar",
    "bigorna",
    "bilhete",
    "bimestre",
    "bimotor",
    "biologia",
    "biombo",
    "biosfera",
    "bipolar",
    "birrento",
    "biscoito",
    "bisneto",
    "bispo",
    "bissexto",
    "bitola",
    "bizarro",
    "blindado",
    "bloco",
    "bloquear",
    "boato",
    "bobagem",
    "bocado",
    "bocejo",
    "bochecha",
    "boicotar",
    "bolada",
    "boletim",
    "bolha",
    "bolo",
    "bombeiro",
    "bonde",
    "boneco",
    "bonita",
    "borbulha",
    "borda",
    "boreal",
    "borracha",
    "bovino",
    "boxeador",
    "branco",
    "brasa",
    "braveza",
    "breu",
    "briga",
    "brilho",
    "brincar",
    "broa",
    "brochura",
    "bronzear",
    "broto",
    "bruxo",
    "bucha",
    "budismo",
    "bufar",
    "bule",
    "buraco",
    "busca",
    "busto",
    "buzina",
    "cabana",
    "cabelo",
    "cabide",
    "cabo",
    "cabrito",
    "cacau",
    "cacetada",
    "cachorro",
    "cacique",
    "cadastro",
    "cadeado",
    "cafezal",
    "caiaque",
    "caipira",
    "caixote",
    "cajado",
    "caju",
    "calafrio",
    "calcular",
    "caldeira",
    "calibrar",
    "calmante",
    "calota",
    "camada",
    "cambista",
    "camisa",
    "camomila",
    "campanha",
    "camuflar",
    "canavial",
    "cancelar",
    "caneta",
    "canguru",
    "canhoto",
    "canivete",
    "canoa",
    "cansado",
    "cantar",
    "canudo",
    "capacho",
    "capela",
    "capinar",
    "capotar",
    "capricho",
    "captador",
    "capuz",
    "caracol",
    "carbono",
    "cardeal",
    "careca",
    "carimbar",
    "carneiro",
    "carpete",
    "carreira",
    "cartaz",
    "carvalho",
    "casaco",
    "casca",
    "casebre",
    "castelo",
    "casulo",
    "catarata",
    "cativar",
    "caule",
    "causador",
    "cautelar",
    "cavalo",
    "caverna",
    "cebola",
    "cedilha",
    "cegonha",
    "celebrar",
    "celular",
    "cenoura",
    "censo",
    "centeio",
    "cercar",
    "cerrado",
    "certeiro",
    "cerveja",
    "cetim",
    "cevada",
    "chacota",
    "chaleira",
    "chamado",
    "chapada",
    "charme",
    "chatice",
    "chave",
    "chefe",
    "chegada",
    "cheiro",
    "cheque",
    "chicote",
    "chifre",
    "chinelo",
    "chocalho",
    "chover",
    "chumbo",
    "chutar",
    "chuva",
    "cicatriz",
    "ciclone",
    "cidade",
    "cidreira",
    "ciente",
    "cigana",
    "cimento",
    "cinto",
    "cinza",
    "ciranda",
    "circuito",
    "cirurgia",
    "citar",
    "clareza",
    "clero",
    "clicar",
    "clone",
    "clube",
    "coado",
    "coagir",
    "cobaia",
    "cobertor",
    "cobrar",
    "cocada",
    "coelho",
    "coentro",
    "coeso",
    "cogumelo",
    "coibir",
    "coifa",
    "coiote",
    "colar",
    "coleira",
    "colher",
    "colidir",
    "colmeia",
    "colono",
    "coluna",
    "comando",
    "combinar",
    "comentar",
    "comitiva",
    "comover",
    "complexo",
    "comum",
    "concha",
    "condor",
    "conectar",
    "confuso",
    "congelar",
    "conhecer",
    "conjugar",
    "consumir",
    "contrato",
    "convite",
    "cooperar",
    "copeiro",
    "copiador",
    "copo",
    "coquetel",
    "coragem",
    "cordial",
    "corneta",
    "coronha",
    "corporal",
    "correio",
    "cortejo",
    "coruja",
    "corvo",
    "cosseno",
    "costela",
    "cotonete",
    "couro",
    "couve",
    "covil",
    "cozinha",
    "cratera",
    "cravo",
    "creche",
    "credor",
    "creme",
    "crer",
    "crespo",
    "criada",
    "criminal",
    "crioulo",
    "crise",
    "criticar",
    "crosta",
    "crua",
    "cruzeiro",
    "cubano",
    "cueca",
    "cuidado",
    "cujo",
    "culatra",
    "culminar",
    "culpar",
    "cultura",
    "cumprir",
    "cunhado",
    "cupido",
    "curativo",
    "curral",
    "cursar",
    "curto",
    "cuspir",
    "custear",
    "cutelo",
    "damasco",
    "datar",
    "debater",
    "debitar",
    "deboche",
    "debulhar",
    "decalque",
    "decimal",
    "declive",
    "decote",
    "decretar",
    "dedal",
    "dedicado",
    "deduzir",
    "defesa",
    "defumar",
    "degelo",
    "degrau",
    "degustar",
    "deitado",
    "deixar",
    "delator",
    "delegado",
    "delinear",
    "delonga",
    "demanda",
    "demitir",
    "demolido",
    "dentista",
    "depenado",
    "depilar",
    "depois",
    "depressa",
    "depurar",
    "deriva",
    "derramar",
    "desafio",
    "desbotar",
    "descanso",
    "desenho",
    "desfiado",
    "desgaste",
    "desigual",
    "deslize",
    "desmamar",
    "desova",
    "despesa",
    "destaque",
    "desviar",
    "detalhar",
    "detentor",
    "detonar",
    "detrito",
    "deusa",
    "dever",
    "devido",
    "devotado",
    "dezena",
    "diagrama",
    "dialeto",
    "didata",
    "difuso",
    "digitar",
    "dilatado",
    "diluente",
    "diminuir",
    "dinastia",
    "dinheiro",
    "diocese",
    "direto",
    "discreta",
    "disfarce",
    "disparo",
    "disquete",
    "dissipar",
    "distante",
    "ditador",
    "diurno",
    "diverso",
    "divisor",
    "divulgar",
    "dizer",
    "dobrador",
    "dolorido",
    "domador",
    "dominado",
    "donativo",
    "donzela",
    "dormente",
    "dorsal",
    "dosagem",
    "dourado",
    "doutor",
    "drenagem",
    "drible",
    "drogaria",
    "duelar",
    "duende",
    "dueto",
    "duplo",
    "duquesa",
    "durante",
    "duvidoso",
    "eclodir",
    "ecoar",
    "ecologia",
    "edificar",
    "edital",
    "educado",
    "efeito",
    "efetivar",
    "ejetar",
    "elaborar",
    "eleger",
    "eleitor",
    "elenco",
    "elevador",
    "eliminar",
    "elogiar",
    "embargo",
    "embolado",
    "embrulho",
    "embutido",
    "emenda",
    "emergir",
    "emissor",
    "empatia",
    "empenho",
    "empinado",
    "empolgar",
    "emprego",
    "empurrar",
    "emulador",
    "encaixe",
    "encenado",
    "enchente",
    "encontro",
    "endeusar",
    "endossar",
    "enfaixar",
    "enfeite",
    "enfim",
    "engajado",
    "engenho",
    "englobar",
    "engomado",
    "engraxar",
    "enguia",
    "enjoar",
    "enlatar",
    "enquanto",
    "enraizar",
    "enrolado",
    "enrugar",
    "ensaio",
    "enseada",
    "ensino",
    "ensopado",
    "entanto",
    "enteado",
    "entidade",
    "entortar",
    "entrada",
    "entulho",
    "envergar",
    "enviado",
    "envolver",
    "enxame",
    "enxerto",
    "enxofre",
    "enxuto",
    "epiderme",
    "equipar",
    "ereto",
    "erguido",
    "errata",
    "erva",
    "ervilha",
    "esbanjar",
    "esbelto",
    "escama",
    "escola",
    "escrita",
    "escuta",
    "esfinge",
    "esfolar",
    "esfregar",
    "esfumado",
    "esgrima",
    "esmalte",
    "espanto",
    "espelho",
    "espiga",
    "esponja",
    "espreita",
    "espumar",
    "esquerda",
    "estaca",
    "esteira",
    "esticar",
    "estofado",
    "estrela",
    "estudo",
    "esvaziar",
    "etanol",
    "etiqueta",
    "euforia",
    "europeu",
    "evacuar",
    "evaporar",
    "evasivo",
    "eventual",
    "evidente",
    "evoluir",
    "exagero",
    "exalar",
    "examinar",
    "exato",
    "exausto",
    "excesso",
    "excitar",
    "exclamar",
    "executar",
    "exemplo",
    "exibir",
    "exigente",
    "exonerar",
    "expandir",
    "expelir",
    "expirar",
    "explanar",
    "exposto",
    "expresso",
    "expulsar",
    "externo",
    "extinto",
    "extrato",
    "fabricar",
    "fabuloso",
    "faceta",
    "facial",
    "fada",
    "fadiga",
    "faixa",
    "falar",
    "falta",
    "familiar",
    "fandango",
    "fanfarra",
    "fantoche",
    "fardado",
    "farelo",
    "farinha",
    "farofa",
    "farpa",
    "fartura",
    "fatia",
    "fator",
    "favorita",
    "faxina",
    "fazenda",
    "fechado",
    "feijoada",
    "feirante",
    "felino",
    "feminino",
    "fenda",
    "feno",
    "fera",
    "feriado",
    "ferrugem",
    "ferver",
    "festejar",
    "fetal",
    "feudal",
    "fiapo",
    "fibrose",
    "ficar",
    "ficheiro",
    "figurado",
    "fileira",
    "filho",
    "filme",
    "filtrar",
    "firmeza",
    "fisgada",
    "fissura",
    "fita",
    "fivela",
    "fixador",
    "fixo",
    "flacidez",
    "flamingo",
    "flanela",
    "flechada",
    "flora",
    "flutuar",
    "fluxo",
    "focal",
    "focinho",
    "fofocar",
    "fogo",
    "foguete",
    "foice",
    "folgado",
    "folheto",
    "forjar",
    "formiga",
    "forno",
    "forte",
    "fosco",
    "fossa",
    "fragata",
    "fralda",
    "frango",
    "frasco",
    "fraterno",
    "freira",
    "frente",
    "fretar",
    "frieza",
    "friso",
    "fritura",
    "fronha",
    "frustrar",
    "fruteira",
    "fugir",
    "fulano",
    "fuligem",
    "fundar",
    "fungo",
    "funil",
    "furador",
    "furioso",
    "futebol",
    "gabarito",
    "gabinete",
    "gado",
    "gaiato",
    "gaiola",
    "gaivota",
    "galega",
    "galho",
    "galinha",
    "galocha",
    "ganhar",
    "garagem",
    "garfo",
    "gargalo",
    "garimpo",
    "garoupa",
    "garrafa",
    "gasoduto",
    "gasto",
    "gata",
    "gatilho",
    "gaveta",
    "gazela",
    "gelado",
    "geleia",
    "gelo",
    "gemada",
    "gemer",
    "gemido",
    "generoso",
    "gengiva",
    "genial",
    "genoma",
    "genro",
    "geologia",
    "gerador",
    "germinar",
    "gesso",
    "gestor",
    "ginasta",
    "gincana",
    "gingado",
    "girafa",
    "girino",
    "glacial",
    "glicose",
    "global",
    "glorioso",
    "goela",
    "goiaba",
    "golfe",
    "golpear",
    "gordura",
    "gorjeta",
    "gorro",
    "gostoso",
    "goteira",
    "governar",
    "gracejo",
    "gradual",
    "grafite",
    "gralha",
    "grampo",
    "granada",
    "gratuito",
    "graveto",
    "graxa",
    "grego",
    "grelhar",
    "greve",
    "grilo",
    "grisalho",
    "gritaria",
    "grosso",
    "grotesco",
    "grudado",
    "grunhido",
    "gruta",
    "guache",
    "guarani",
    "guaxinim",
    "guerrear",
    "guiar",
    "guincho",
    "guisado",
    "gula",
    "guloso",
    "guru",
    "habitar",
    "harmonia",
    "haste",
    "haver",
    "hectare",
    "herdar",
    "heresia",
    "hesitar",
    "hiato",
    "hibernar",
    "hidratar",
    "hiena",
    "hino",
    "hipismo",
    "hipnose",
    "hipoteca",
    "hoje",
    "holofote",
    "homem",
    "honesto",
    "honrado",
    "hormonal",
    "hospedar",
    "humorado",
    "iate",
    "ideia",
    "idoso",
    "ignorado",
    "igreja",
    "iguana",
    "ileso",
    "ilha",
    "iludido",
    "iluminar",
    "ilustrar",
    "imagem",
    "imediato",
    "imenso",
    "imersivo",
    "iminente",
    "imitador",
    "imortal",
    "impacto",
    "impedir",
    "implante",
    "impor",
    "imprensa",
    "impune",
    "imunizar",
    "inalador",
    "inapto",
    "inativo",
    "incenso",
    "inchar",
    "incidir",
    "incluir",
    "incolor",
    "indeciso",
    "indireto",
    "indutor",
    "ineficaz",
    "inerente",
    "infantil",
    "infestar",
    "infinito",
    "inflamar",
    "informal",
    "infrator",
    "ingerir",
    "inibido",
    "inicial",
    "inimigo",
    "injetar",
    "inocente",
    "inodoro",
    "inovador",
    "inox",
    "inquieto",
    "inscrito",
    "inseto",
    "insistir",
    "inspetor",
    "instalar",
    "insulto",
    "intacto",
    "integral",
    "intimar",
    "intocado",
    "intriga",
    "invasor",
    "inverno",
    "invicto",
    "invocar",
    "iogurte",
    "iraniano",
    "ironizar",
    "irreal",
    "irritado",
    "isca",
    "isento",
    "isolado",
    "isqueiro",
    "italiano",
    "janeiro",
    "jangada",
    "janta",
    "jararaca",
    "jardim",
    "jarro",
    "jasmim",
    "jato",
    "javali",
    "jazida",
    "jejum",
    "joaninha",
    "joelhada",
    "jogador",
    "joia",
    "jornal",
    "jorrar",
    "jovem",
    "juba",
    "judeu",
    "judoca",
    "juiz",
    "julgador",
    "julho",
    "jurado",
    "jurista",
    "juro",
    "justa",
    "labareda",
    "laboral",
    "lacre",
    "lactante",
    "ladrilho",
    "lagarta",
    "lagoa",
    "laje",
    "lamber",
    "lamentar",
    "laminar",
    "lampejo",
    "lanche",
    "lapidar",
    "lapso",
    "laranja",
    "lareira",
    "largura",
    "lasanha",
    "lastro",
    "lateral",
    "latido",
    "lavanda",
    "lavoura",
    "lavrador",
    "laxante",
    "lazer",
    "lealdade",
    "lebre",
    "legado",
    "legendar",
    "legista",
    "leigo",
    "leiloar",
    "leitura",
    "lembrete",
    "leme",
    "lenhador",
    "lentilha",
    "leoa",
    "lesma",
    "leste",
    "letivo",
    "letreiro",
    "levar",
    "leveza",
    "levitar",
    "liberal",
    "libido",
    "liderar",
    "ligar",
    "ligeiro",
    "limitar",
    "limoeiro",
    "limpador",
    "linda",
    "linear",
    "linhagem",
    "liquidez",
    "listagem",
    "lisura",
    "litoral",
    "livro",
    "lixa",
    "lixeira",
    "locador",
    "locutor",
    "lojista",
    "lombo",
    "lona",
    "longe",
    "lontra",
    "lorde",
    "lotado",
    "loteria",
    "loucura",
    "lousa",
    "louvar",
    "luar",
    "lucidez",
    "lucro",
    "luneta",
    "lustre",
    "lutador",
    "luva",
    "macaco",
    "macete",
    "machado",
    "macio",
    "madeira",
    "madrinha",
    "magnata",
    "magreza",
    "maior",
    "mais",
    "malandro",
    "malha",
    "malote",
    "maluco",
    "mamilo",
    "mamoeiro",
    "mamute",
    "manada",
    "mancha",
    "mandato",
    "manequim",
    "manhoso",
    "manivela",
    "manobrar",
    "mansa",
    "manter",
    "manusear",
    "mapeado",
    "maquinar",
    "marcador",
    "maresia",
    "marfim",
    "margem",
    "marinho",
    "marmita",
    "maroto",
    "marquise",
    "marreco",
    "martelo",
    "marujo",
    "mascote",
    "masmorra",
    "massagem",
    "mastigar",
    "matagal",
    "materno",
    "matinal",
    "matutar",
    "maxilar",
    "medalha",
    "medida",
    "medusa",
    "megafone",
    "meiga",
    "melancia",
    "melhor",
    "membro",
    "memorial",
    "menino",
    "menos",
    "mensagem",
    "mental",
    "merecer",
    "mergulho",
    "mesada",
    "mesclar",
    "mesmo",
    "mesquita",
    "mestre",
    "metade",
    "meteoro",
    "metragem",
    "mexer",
    "mexicano",
    "micro",
    "migalha",
    "migrar",
    "milagre",
    "milenar",
    "milhar",
    "mimado",
    "minerar",
    "minhoca",
    "ministro",
    "minoria",
    "miolo",
    "mirante",
    "mirtilo",
    "misturar",
    "mocidade",
    "moderno",
    "modular",
    "moeda",
    "moer",
    "moinho",
    "moita",
    "moldura",
    "moleza",
    "molho",
    "molinete",
    "molusco",
    "montanha",
    "moqueca",
    "morango",
    "morcego",
    "mordomo",
    "morena",
    "mosaico",
    "mosquete",
    "mostarda",
    "motel",
    "motim",
    "moto",
    "motriz",
    "muda",
    "muito",
    "mulata",
    "mulher",
    "multar",
    "mundial",
    "munido",
    "muralha",
    "murcho",
    "muscular",
    "museu",
    "musical",
    "nacional",
    "nadador",
    "naja",
    "namoro",
    "narina",
    "narrado",
    "nascer",
    "nativa",
    "natureza",
    "navalha",
    "navegar",
    "navio",
    "neblina",
    "nebuloso",
    "negativa",
    "negociar",
    "negrito",
    "nervoso",
    "neta",
    "neural",
    "nevasca",
    "nevoeiro",
    "ninar",
    "ninho",
    "nitidez",
    "nivelar",
    "nobreza",
    "noite",
    "noiva",
    "nomear",
    "nominal",
    "nordeste",
    "nortear",
    "notar",
    "noticiar",
    "noturno",
    "novelo",
    "novilho",
    "novo",
    "nublado",
    "nudez",
    "numeral",
    "nupcial",
    "nutrir",
    "nuvem",
    "obcecado",
    "obedecer",
    "objetivo",
    "obrigado",
    "obscuro",
    "obstetra",
    "obter",
    "obturar",
    "ocidente",
    "ocioso",
    "ocorrer",
    "oculista",
    "ocupado",
    "ofegante",
    "ofensiva",
    "oferenda",
    "oficina",
    "ofuscado",
    "ogiva",
    "olaria",
    "oleoso",
    "olhar",
    "oliveira",
    "ombro",
    "omelete",
    "omisso",
    "omitir",
    "ondulado",
    "oneroso",
    "ontem",
    "opcional",
    "operador",
    "oponente",
    "oportuno",
    "oposto",
    "orar",
    "orbitar",
    "ordem",
    "ordinal",
    "orfanato",
    "orgasmo",
    "orgulho",
    "oriental",
    "origem",
    "oriundo",
    "orla",
    "ortodoxo",
    "orvalho",
    "oscilar",
    "ossada",
    "osso",
    "ostentar",
    "otimismo",
    "ousadia",
    "outono",
    "outubro",
    "ouvido",
    "ovelha",
    "ovular",
    "oxidar",
    "oxigenar",
    "pacato",
    "paciente",
    "pacote",
    "pactuar",
    "padaria",
    "padrinho",
    "pagar",
    "pagode",
    "painel",
    "pairar",
    "paisagem",
    "palavra",
    "palestra",
    "palheta",
    "palito",
    "palmada",
    "palpitar",
    "pancada",
    "panela",
    "panfleto",
    "panqueca",
    "pantanal",
    "papagaio",
    "papelada",
    "papiro",
    "parafina",
    "parcial",
    "pardal",
    "parede",
    "partida",
    "pasmo",
    "passado",
    "pastel",
    "patamar",
    "patente",
    "patinar",
    "patrono",
    "paulada",
    "pausar",
    "peculiar",
    "pedalar",
    "pedestre",
    "pediatra",
    "pedra",
    "pegada",
    "peitoral",
    "peixe",
    "pele",
    "pelicano",
    "penca",
    "pendurar",
    "peneira",
    "penhasco",
    "pensador",
    "pente",
    "perceber",
    "perfeito",
    "pergunta",
    "perito",
    "permitir",
    "perna",
    "perplexo",
    "persiana",
    "pertence",
    "peruca",
    "pescado",
    "pesquisa",
    "pessoa",
    "petiscar",
    "piada",
    "picado",
    "piedade",
    "pigmento",
    "pilastra",
    "pilhado",
    "pilotar",
    "pimenta",
    "pincel",
    "pinguim",
    "pinha",
    "pinote",
    "pintar",
    "pioneiro",
    "pipoca",
    "piquete",
    "piranha",
    "pires",
    "pirueta",
    "piscar",
    "pistola",
    "pitanga",
    "pivete",
    "planta",
    "plaqueta",
    "platina",
    "plebeu",
    "plumagem",
    "pluvial",
    "pneu",
    "poda",
    "poeira",
    "poetisa",
    "polegada",
    "policiar",
    "poluente",
    "polvilho",
    "pomar",
    "pomba",
    "ponderar",
    "pontaria",
    "populoso",
    "porta",
    "possuir",
    "postal",
    "pote",
    "poupar",
    "pouso",
    "povoar",
    "praia",
    "prancha",
    "prato",
    "praxe",
    "prece",
    "predador",
    "prefeito",
    "premiar",
    "prensar",
    "preparar",
    "presilha",
    "pretexto",
    "prevenir",
    "prezar",
    "primata",
    "princesa",
    "prisma",
    "privado",
    "processo",
    "produto",
    "profeta",
    "proibido",
    "projeto",
    "prometer",
    "propagar",
    "prosa",
    "protetor",
    "provador",
    "publicar",
    "pudim",
    "pular",
    "pulmonar",
    "pulseira",
    "punhal",
    "punir",
    "pupilo",
    "pureza",
    "puxador",
    "quadra",
    "quantia",
    "quarto",
    "quase",
    "quebrar",
    "queda",
    "queijo",
    "quente",
    "querido",
    "quimono",
    "quina",
    "quiosque",
    "rabanada",
    "rabisco",
    "rachar",
    "racionar",
    "radial",
    "raiar",
    "rainha",
    "raio",
    "raiva",
    "rajada",
    "ralado",
    "ramal",
    "ranger",
    "ranhura",
    "rapadura",
    "rapel",
    "rapidez",
    "raposa",
    "raquete",
    "raridade",
    "rasante",
    "rascunho",
    "rasgar",
    "raspador",
    "rasteira",
    "rasurar",
    "ratazana",
    "ratoeira",
    "realeza",
    "reanimar",
    "reaver",
    "rebaixar",
    "rebelde",
    "rebolar",
    "recado",
    "recente",
    "recheio",
    "recibo",
    "recordar",
    "recrutar",
    "recuar",
    "rede",
    "redimir",
    "redonda",
    "reduzida",
    "reenvio",
    "refinar",
    "refletir",
    "refogar",
    "refresco",
    "refugiar",
    "regalia",
    "regime",
    "regra",
    "reinado",
    "reitor",
    "rejeitar",
    "relativo",
    "remador",
    "remendo",
    "remorso",
    "renovado",
    "reparo",
    "repelir",
    "repleto",
    "repolho",
    "represa",
    "repudiar",
    "requerer",
    "resenha",
    "resfriar",
    "resgatar",
    "residir",
    "resolver",
    "respeito",
    "ressaca",
    "restante",
    "resumir",
    "retalho",
    "reter",
    "retirar",
    "retomada",
    "retratar",
    "revelar",
    "revisor",
    "revolta",
    "riacho",
    "rica",
    "rigidez",
    "rigoroso",
    "rimar",
    "ringue",
    "risada",
    "risco",
    "risonho",
    "robalo",
    "rochedo",
    "rodada",
    "rodeio",
    "rodovia",
    "roedor",
    "roleta",
    "romano",
    "roncar",
    "rosado",
    "roseira",
    "rosto",
    "rota",
    "roteiro",
    "rotina",
    "rotular",
    "rouco",
    "roupa",
    "roxo",
    "rubro",
    "rugido",
    "rugoso",
    "ruivo",
    "rumo",
    "rupestre",
    "russo",
    "sabor",
    "saciar",
    "sacola",
    "sacudir",
    "sadio",
    "safira",
    "saga",
    "sagrada",
    "saibro",
    "salada",
    "saleiro",
    "salgado",
    "saliva",
    "salpicar",
    "salsicha",
    "saltar",
    "salvador",
    "sambar",
    "samurai",
    "sanar",
    "sanfona",
    "sangue",
    "sanidade",
    "sapato",
    "sarda",
    "sargento",
    "sarjeta",
    "saturar",
    "saudade",
    "saxofone",
    "sazonal",
    "secar",
    "secular",
    "seda",
    "sedento",
    "sediado",
    "sedoso",
    "sedutor",
    "segmento",
    "segredo",
    "segundo",
    "seiva",
    "seleto",
    "selvagem",
    "semanal",
    "semente",
    "senador",
    "senhor",
    "sensual",
    "sentado",
    "separado",
    "sereia",
    "seringa",
    "serra",
    "servo",
    "setembro",
    "setor",
    "sigilo",
    "silhueta",
    "silicone",
    "simetria",
    "simpatia",
    "simular",
    "sinal",
    "sincero",
    "singular",
    "sinopse",
    "sintonia",
    "sirene",
    "siri",
    "situado",
    "soberano",
    "sobra",
    "socorro",
    "sogro",
    "soja",
    "solda",
    "soletrar",
    "solteiro",
    "sombrio",
    "sonata",
    "sondar",
    "sonegar",
    "sonhador",
    "sono",
    "soprano",
    "soquete",
    "sorrir",
    "sorteio",
    "sossego",
    "sotaque",
    "soterrar",
    "sovado",
    "sozinho",
    "suavizar",
    "subida",
    "submerso",
    "subsolo",
    "subtrair",
    "sucata",
    "sucesso",
    "suco",
    "sudeste",
    "sufixo",
    "sugador",
    "sugerir",
    "sujeito",
    "sulfato",
    "sumir",
    "suor",
    "superior",
    "suplicar",
    "suposto",
    "suprimir",
    "surdina",
    "surfista",
    "surpresa",
    "surreal",
    "surtir",
    "suspiro",
    "sustento",
    "tabela",
    "tablete",
    "tabuada",
    "tacho",
    "tagarela",
    "talher",
    "talo",
    "talvez",
    "tamanho",
    "tamborim",
    "tampa",
    "tangente",
    "tanto",
    "tapar",
    "tapioca",
    "tardio",
    "tarefa",
    "tarja",
    "tarraxa",
    "tatuagem",
    "taurino",
    "taxativo",
    "taxista",
    "teatral",
    "tecer",
    "tecido",
    "teclado",
    "tedioso",
    "teia",
    "teimar",
    "telefone",
    "telhado",
    "tempero",
    "tenente",
    "tensor",
    "tentar",
    "termal",
    "terno",
    "terreno",
    "tese",
    "tesoura",
    "testado",
    "teto",
    "textura",
    "texugo",
    "tiara",
    "tigela",
    "tijolo",
    "timbrar",
    "timidez",
    "tingido",
    "tinteiro",
    "tiragem",
    "titular",
    "toalha",
    "tocha",
    "tolerar",
    "tolice",
    "tomada",
    "tomilho",
    "tonel",
    "tontura",
    "topete",
    "tora",
    "torcido",
    "torneio",
    "torque",
    "torrada",
    "torto",
    "tostar",
    "touca",
    "toupeira",
    "toxina",
    "trabalho",
    "tracejar",
    "tradutor",
    "trafegar",
    "trajeto",
    "trama",
    "trancar",
    "trapo",
    "traseiro",
    "tratador",
    "travar",
    "treino",
    "tremer",
    "trepidar",
    "trevo",
    "triagem",
    "tribo",
    "triciclo",
    "tridente",
    "trilogia",
    "trindade",
    "triplo",
    "triturar",
    "triunfal",
    "trocar",
    "trombeta",
    "trova",
    "trunfo",
    "truque",
    "tubular",
    "tucano",
    "tudo",
    "tulipa",
    "tupi",
    "turbo",
    "turma",
    "turquesa",
    "tutelar",
    "tutorial",
    "uivar",
    "umbigo",
    "unha",
    "unidade",
    "uniforme",
    "urologia",
    "urso",
    "urtiga",
    "urubu",
    "usado",
    "usina",
    "usufruir",
    "vacina",
    "vadiar",
    "vagaroso",
    "vaidoso",
    "vala",
    "valente",
    "validade",
    "valores",
    "vantagem",
    "vaqueiro",
    "varanda",
    "vareta",
    "varrer",
    "vascular",
    "vasilha",
    "vassoura",
    "vazar",
    "vazio",
    "veado",
    "vedar",
    "vegetar",
    "veicular",
    "veleiro",
    "velhice",
    "veludo",
    "vencedor",
    "vendaval",
    "venerar",
    "ventre",
    "verbal",
    "verdade",
    "vereador",
    "vergonha",
    "vermelho",
    "verniz",
    "versar",
    "vertente",
    "vespa",
    "vestido",
    "vetorial",
    "viaduto",
    "viagem",
    "viajar",
    "viatura",
    "vibrador",
    "videira",
    "vidraria",
    "viela",
    "viga",
    "vigente",
    "vigiar",
    "vigorar",
    "vilarejo",
    "vinco",
    "vinheta",
    "vinil",
    "violeta",
    "virada",
    "virtude",
    "visitar",
    "visto",
    "vitral",
    "viveiro",
    "vizinho",
    "voador",
    "voar",
    "vogal",
    "volante",
    "voleibol",
    "voltagem",
    "volumoso",
    "vontade",
    "vulto",
    "vuvuzela",
    "xadrez",
    "xarope",
    "xeque",
    "xeretar",
    "xerife",
    "xingar",
    "zangado",
    "zarpar",
    "zebu",
    "zelador",
    "zombar",
    "zoologia",
    "zumbido"
  ], Ep = [
    "abandon",
    "ability",
    "able",
    "about",
    "above",
    "absent",
    "absorb",
    "abstract",
    "absurd",
    "abuse",
    "access",
    "accident",
    "account",
    "accuse",
    "achieve",
    "acid",
    "acoustic",
    "acquire",
    "across",
    "act",
    "action",
    "actor",
    "actress",
    "actual",
    "adapt",
    "add",
    "addict",
    "address",
    "adjust",
    "admit",
    "adult",
    "advance",
    "advice",
    "aerobic",
    "affair",
    "afford",
    "afraid",
    "again",
    "age",
    "agent",
    "agree",
    "ahead",
    "aim",
    "air",
    "airport",
    "aisle",
    "alarm",
    "album",
    "alcohol",
    "alert",
    "alien",
    "all",
    "alley",
    "allow",
    "almost",
    "alone",
    "alpha",
    "already",
    "also",
    "alter",
    "always",
    "amateur",
    "amazing",
    "among",
    "amount",
    "amused",
    "analyst",
    "anchor",
    "ancient",
    "anger",
    "angle",
    "angry",
    "animal",
    "ankle",
    "announce",
    "annual",
    "another",
    "answer",
    "antenna",
    "antique",
    "anxiety",
    "any",
    "apart",
    "apology",
    "appear",
    "apple",
    "approve",
    "april",
    "arch",
    "arctic",
    "area",
    "arena",
    "argue",
    "arm",
    "armed",
    "armor",
    "army",
    "around",
    "arrange",
    "arrest",
    "arrive",
    "arrow",
    "art",
    "artefact",
    "artist",
    "artwork",
    "ask",
    "aspect",
    "assault",
    "asset",
    "assist",
    "assume",
    "asthma",
    "athlete",
    "atom",
    "attack",
    "attend",
    "attitude",
    "attract",
    "auction",
    "audit",
    "august",
    "aunt",
    "author",
    "auto",
    "autumn",
    "average",
    "avocado",
    "avoid",
    "awake",
    "aware",
    "away",
    "awesome",
    "awful",
    "awkward",
    "axis",
    "baby",
    "bachelor",
    "bacon",
    "badge",
    "bag",
    "balance",
    "balcony",
    "ball",
    "bamboo",
    "banana",
    "banner",
    "bar",
    "barely",
    "bargain",
    "barrel",
    "base",
    "basic",
    "basket",
    "battle",
    "beach",
    "bean",
    "beauty",
    "because",
    "become",
    "beef",
    "before",
    "begin",
    "behave",
    "behind",
    "believe",
    "below",
    "belt",
    "bench",
    "benefit",
    "best",
    "betray",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bid",
    "bike",
    "bind",
    "biology",
    "bird",
    "birth",
    "bitter",
    "black",
    "blade",
    "blame",
    "blanket",
    "blast",
    "bleak",
    "bless",
    "blind",
    "blood",
    "blossom",
    "blouse",
    "blue",
    "blur",
    "blush",
    "board",
    "boat",
    "body",
    "boil",
    "bomb",
    "bone",
    "bonus",
    "book",
    "boost",
    "border",
    "boring",
    "borrow",
    "boss",
    "bottom",
    "bounce",
    "box",
    "boy",
    "bracket",
    "brain",
    "brand",
    "brass",
    "brave",
    "bread",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "brisk",
    "broccoli",
    "broken",
    "bronze",
    "broom",
    "brother",
    "brown",
    "brush",
    "bubble",
    "buddy",
    "budget",
    "buffalo",
    "build",
    "bulb",
    "bulk",
    "bullet",
    "bundle",
    "bunker",
    "burden",
    "burger",
    "burst",
    "bus",
    "business",
    "busy",
    "butter",
    "buyer",
    "buzz",
    "cabbage",
    "cabin",
    "cable",
    "cactus",
    "cage",
    "cake",
    "call",
    "calm",
    "camera",
    "camp",
    "can",
    "canal",
    "cancel",
    "candy",
    "cannon",
    "canoe",
    "canvas",
    "canyon",
    "capable",
    "capital",
    "captain",
    "car",
    "carbon",
    "card",
    "cargo",
    "carpet",
    "carry",
    "cart",
    "case",
    "cash",
    "casino",
    "castle",
    "casual",
    "cat",
    "catalog",
    "catch",
    "category",
    "cattle",
    "caught",
    "cause",
    "caution",
    "cave",
    "ceiling",
    "celery",
    "cement",
    "census",
    "century",
    "cereal",
    "certain",
    "chair",
    "chalk",
    "champion",
    "change",
    "chaos",
    "chapter",
    "charge",
    "chase",
    "chat",
    "cheap",
    "check",
    "cheese",
    "chef",
    "cherry",
    "chest",
    "chicken",
    "chief",
    "child",
    "chimney",
    "choice",
    "choose",
    "chronic",
    "chuckle",
    "chunk",
    "churn",
    "cigar",
    "cinnamon",
    "circle",
    "citizen",
    "city",
    "civil",
    "claim",
    "clap",
    "clarify",
    "claw",
    "clay",
    "clean",
    "clerk",
    "clever",
    "click",
    "client",
    "cliff",
    "climb",
    "clinic",
    "clip",
    "clock",
    "clog",
    "close",
    "cloth",
    "cloud",
    "clown",
    "club",
    "clump",
    "cluster",
    "clutch",
    "coach",
    "coast",
    "coconut",
    "code",
    "coffee",
    "coil",
    "coin",
    "collect",
    "color",
    "column",
    "combine",
    "come",
    "comfort",
    "comic",
    "common",
    "company",
    "concert",
    "conduct",
    "confirm",
    "congress",
    "connect",
    "consider",
    "control",
    "convince",
    "cook",
    "cool",
    "copper",
    "copy",
    "coral",
    "core",
    "corn",
    "correct",
    "cost",
    "cotton",
    "couch",
    "country",
    "couple",
    "course",
    "cousin",
    "cover",
    "coyote",
    "crack",
    "cradle",
    "craft",
    "cram",
    "crane",
    "crash",
    "crater",
    "crawl",
    "crazy",
    "cream",
    "credit",
    "creek",
    "crew",
    "cricket",
    "crime",
    "crisp",
    "critic",
    "crop",
    "cross",
    "crouch",
    "crowd",
    "crucial",
    "cruel",
    "cruise",
    "crumble",
    "crunch",
    "crush",
    "cry",
    "crystal",
    "cube",
    "culture",
    "cup",
    "cupboard",
    "curious",
    "current",
    "curtain",
    "curve",
    "cushion",
    "custom",
    "cute",
    "cycle",
    "dad",
    "damage",
    "damp",
    "dance",
    "danger",
    "daring",
    "dash",
    "daughter",
    "dawn",
    "day",
    "deal",
    "debate",
    "debris",
    "decade",
    "december",
    "decide",
    "decline",
    "decorate",
    "decrease",
    "deer",
    "defense",
    "define",
    "defy",
    "degree",
    "delay",
    "deliver",
    "demand",
    "demise",
    "denial",
    "dentist",
    "deny",
    "depart",
    "depend",
    "deposit",
    "depth",
    "deputy",
    "derive",
    "describe",
    "desert",
    "design",
    "desk",
    "despair",
    "destroy",
    "detail",
    "detect",
    "develop",
    "device",
    "devote",
    "diagram",
    "dial",
    "diamond",
    "diary",
    "dice",
    "diesel",
    "diet",
    "differ",
    "digital",
    "dignity",
    "dilemma",
    "dinner",
    "dinosaur",
    "direct",
    "dirt",
    "disagree",
    "discover",
    "disease",
    "dish",
    "dismiss",
    "disorder",
    "display",
    "distance",
    "divert",
    "divide",
    "divorce",
    "dizzy",
    "doctor",
    "document",
    "dog",
    "doll",
    "dolphin",
    "domain",
    "donate",
    "donkey",
    "donor",
    "door",
    "dose",
    "double",
    "dove",
    "draft",
    "dragon",
    "drama",
    "drastic",
    "draw",
    "dream",
    "dress",
    "drift",
    "drill",
    "drink",
    "drip",
    "drive",
    "drop",
    "drum",
    "dry",
    "duck",
    "dumb",
    "dune",
    "during",
    "dust",
    "dutch",
    "duty",
    "dwarf",
    "dynamic",
    "eager",
    "eagle",
    "early",
    "earn",
    "earth",
    "easily",
    "east",
    "easy",
    "echo",
    "ecology",
    "economy",
    "edge",
    "edit",
    "educate",
    "effort",
    "egg",
    "eight",
    "either",
    "elbow",
    "elder",
    "electric",
    "elegant",
    "element",
    "elephant",
    "elevator",
    "elite",
    "else",
    "embark",
    "embody",
    "embrace",
    "emerge",
    "emotion",
    "employ",
    "empower",
    "empty",
    "enable",
    "enact",
    "end",
    "endless",
    "endorse",
    "enemy",
    "energy",
    "enforce",
    "engage",
    "engine",
    "enhance",
    "enjoy",
    "enlist",
    "enough",
    "enrich",
    "enroll",
    "ensure",
    "enter",
    "entire",
    "entry",
    "envelope",
    "episode",
    "equal",
    "equip",
    "era",
    "erase",
    "erode",
    "erosion",
    "error",
    "erupt",
    "escape",
    "essay",
    "essence",
    "estate",
    "eternal",
    "ethics",
    "evidence",
    "evil",
    "evoke",
    "evolve",
    "exact",
    "example",
    "excess",
    "exchange",
    "excite",
    "exclude",
    "excuse",
    "execute",
    "exercise",
    "exhaust",
    "exhibit",
    "exile",
    "exist",
    "exit",
    "exotic",
    "expand",
    "expect",
    "expire",
    "explain",
    "expose",
    "express",
    "extend",
    "extra",
    "eye",
    "eyebrow",
    "fabric",
    "face",
    "faculty",
    "fade",
    "faint",
    "faith",
    "fall",
    "false",
    "fame",
    "family",
    "famous",
    "fan",
    "fancy",
    "fantasy",
    "farm",
    "fashion",
    "fat",
    "fatal",
    "father",
    "fatigue",
    "fault",
    "favorite",
    "feature",
    "february",
    "federal",
    "fee",
    "feed",
    "feel",
    "female",
    "fence",
    "festival",
    "fetch",
    "fever",
    "few",
    "fiber",
    "fiction",
    "field",
    "figure",
    "file",
    "film",
    "filter",
    "final",
    "find",
    "fine",
    "finger",
    "finish",
    "fire",
    "firm",
    "first",
    "fiscal",
    "fish",
    "fit",
    "fitness",
    "fix",
    "flag",
    "flame",
    "flash",
    "flat",
    "flavor",
    "flee",
    "flight",
    "flip",
    "float",
    "flock",
    "floor",
    "flower",
    "fluid",
    "flush",
    "fly",
    "foam",
    "focus",
    "fog",
    "foil",
    "fold",
    "follow",
    "food",
    "foot",
    "force",
    "forest",
    "forget",
    "fork",
    "fortune",
    "forum",
    "forward",
    "fossil",
    "foster",
    "found",
    "fox",
    "fragile",
    "frame",
    "frequent",
    "fresh",
    "friend",
    "fringe",
    "frog",
    "front",
    "frost",
    "frown",
    "frozen",
    "fruit",
    "fuel",
    "fun",
    "funny",
    "furnace",
    "fury",
    "future",
    "gadget",
    "gain",
    "galaxy",
    "gallery",
    "game",
    "gap",
    "garage",
    "garbage",
    "garden",
    "garlic",
    "garment",
    "gas",
    "gasp",
    "gate",
    "gather",
    "gauge",
    "gaze",
    "general",
    "genius",
    "genre",
    "gentle",
    "genuine",
    "gesture",
    "ghost",
    "giant",
    "gift",
    "giggle",
    "ginger",
    "giraffe",
    "girl",
    "give",
    "glad",
    "glance",
    "glare",
    "glass",
    "glide",
    "glimpse",
    "globe",
    "gloom",
    "glory",
    "glove",
    "glow",
    "glue",
    "goat",
    "goddess",
    "gold",
    "good",
    "goose",
    "gorilla",
    "gospel",
    "gossip",
    "govern",
    "gown",
    "grab",
    "grace",
    "grain",
    "grant",
    "grape",
    "grass",
    "gravity",
    "great",
    "green",
    "grid",
    "grief",
    "grit",
    "grocery",
    "group",
    "grow",
    "grunt",
    "guard",
    "guess",
    "guide",
    "guilt",
    "guitar",
    "gun",
    "gym",
    "habit",
    "hair",
    "half",
    "hammer",
    "hamster",
    "hand",
    "happy",
    "harbor",
    "hard",
    "harsh",
    "harvest",
    "hat",
    "have",
    "hawk",
    "hazard",
    "head",
    "health",
    "heart",
    "heavy",
    "hedgehog",
    "height",
    "hello",
    "helmet",
    "help",
    "hen",
    "hero",
    "hidden",
    "high",
    "hill",
    "hint",
    "hip",
    "hire",
    "history",
    "hobby",
    "hockey",
    "hold",
    "hole",
    "holiday",
    "hollow",
    "home",
    "honey",
    "hood",
    "hope",
    "horn",
    "horror",
    "horse",
    "hospital",
    "host",
    "hotel",
    "hour",
    "hover",
    "hub",
    "huge",
    "human",
    "humble",
    "humor",
    "hundred",
    "hungry",
    "hunt",
    "hurdle",
    "hurry",
    "hurt",
    "husband",
    "hybrid",
    "ice",
    "icon",
    "idea",
    "identify",
    "idle",
    "ignore",
    "ill",
    "illegal",
    "illness",
    "image",
    "imitate",
    "immense",
    "immune",
    "impact",
    "impose",
    "improve",
    "impulse",
    "inch",
    "include",
    "income",
    "increase",
    "index",
    "indicate",
    "indoor",
    "industry",
    "infant",
    "inflict",
    "inform",
    "inhale",
    "inherit",
    "initial",
    "inject",
    "injury",
    "inmate",
    "inner",
    "innocent",
    "input",
    "inquiry",
    "insane",
    "insect",
    "inside",
    "inspire",
    "install",
    "intact",
    "interest",
    "into",
    "invest",
    "invite",
    "involve",
    "iron",
    "island",
    "isolate",
    "issue",
    "item",
    "ivory",
    "jacket",
    "jaguar",
    "jar",
    "jazz",
    "jealous",
    "jeans",
    "jelly",
    "jewel",
    "job",
    "join",
    "joke",
    "journey",
    "joy",
    "judge",
    "juice",
    "jump",
    "jungle",
    "junior",
    "junk",
    "just",
    "kangaroo",
    "keen",
    "keep",
    "ketchup",
    "key",
    "kick",
    "kid",
    "kidney",
    "kind",
    "kingdom",
    "kiss",
    "kit",
    "kitchen",
    "kite",
    "kitten",
    "kiwi",
    "knee",
    "knife",
    "knock",
    "know",
    "lab",
    "label",
    "labor",
    "ladder",
    "lady",
    "lake",
    "lamp",
    "language",
    "laptop",
    "large",
    "later",
    "latin",
    "laugh",
    "laundry",
    "lava",
    "law",
    "lawn",
    "lawsuit",
    "layer",
    "lazy",
    "leader",
    "leaf",
    "learn",
    "leave",
    "lecture",
    "left",
    "leg",
    "legal",
    "legend",
    "leisure",
    "lemon",
    "lend",
    "length",
    "lens",
    "leopard",
    "lesson",
    "letter",
    "level",
    "liar",
    "liberty",
    "library",
    "license",
    "life",
    "lift",
    "light",
    "like",
    "limb",
    "limit",
    "link",
    "lion",
    "liquid",
    "list",
    "little",
    "live",
    "lizard",
    "load",
    "loan",
    "lobster",
    "local",
    "lock",
    "logic",
    "lonely",
    "long",
    "loop",
    "lottery",
    "loud",
    "lounge",
    "love",
    "loyal",
    "lucky",
    "luggage",
    "lumber",
    "lunar",
    "lunch",
    "luxury",
    "lyrics",
    "machine",
    "mad",
    "magic",
    "magnet",
    "maid",
    "mail",
    "main",
    "major",
    "make",
    "mammal",
    "man",
    "manage",
    "mandate",
    "mango",
    "mansion",
    "manual",
    "maple",
    "marble",
    "march",
    "margin",
    "marine",
    "market",
    "marriage",
    "mask",
    "mass",
    "master",
    "match",
    "material",
    "math",
    "matrix",
    "matter",
    "maximum",
    "maze",
    "meadow",
    "mean",
    "measure",
    "meat",
    "mechanic",
    "medal",
    "media",
    "melody",
    "melt",
    "member",
    "memory",
    "mention",
    "menu",
    "mercy",
    "merge",
    "merit",
    "merry",
    "mesh",
    "message",
    "metal",
    "method",
    "middle",
    "midnight",
    "milk",
    "million",
    "mimic",
    "mind",
    "minimum",
    "minor",
    "minute",
    "miracle",
    "mirror",
    "misery",
    "miss",
    "mistake",
    "mix",
    "mixed",
    "mixture",
    "mobile",
    "model",
    "modify",
    "mom",
    "moment",
    "monitor",
    "monkey",
    "monster",
    "month",
    "moon",
    "moral",
    "more",
    "morning",
    "mosquito",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "move",
    "movie",
    "much",
    "muffin",
    "mule",
    "multiply",
    "muscle",
    "museum",
    "mushroom",
    "music",
    "must",
    "mutual",
    "myself",
    "mystery",
    "myth",
    "naive",
    "name",
    "napkin",
    "narrow",
    "nasty",
    "nation",
    "nature",
    "near",
    "neck",
    "need",
    "negative",
    "neglect",
    "neither",
    "nephew",
    "nerve",
    "nest",
    "net",
    "network",
    "neutral",
    "never",
    "news",
    "next",
    "nice",
    "night",
    "noble",
    "noise",
    "nominee",
    "noodle",
    "normal",
    "north",
    "nose",
    "notable",
    "note",
    "nothing",
    "notice",
    "novel",
    "now",
    "nuclear",
    "number",
    "nurse",
    "nut",
    "oak",
    "obey",
    "object",
    "oblige",
    "obscure",
    "observe",
    "obtain",
    "obvious",
    "occur",
    "ocean",
    "october",
    "odor",
    "off",
    "offer",
    "office",
    "often",
    "oil",
    "okay",
    "old",
    "olive",
    "olympic",
    "omit",
    "once",
    "one",
    "onion",
    "online",
    "only",
    "open",
    "opera",
    "opinion",
    "oppose",
    "option",
    "orange",
    "orbit",
    "orchard",
    "order",
    "ordinary",
    "organ",
    "orient",
    "original",
    "orphan",
    "ostrich",
    "other",
    "outdoor",
    "outer",
    "output",
    "outside",
    "oval",
    "oven",
    "over",
    "own",
    "owner",
    "oxygen",
    "oyster",
    "ozone",
    "pact",
    "paddle",
    "page",
    "pair",
    "palace",
    "palm",
    "panda",
    "panel",
    "panic",
    "panther",
    "paper",
    "parade",
    "parent",
    "park",
    "parrot",
    "party",
    "pass",
    "patch",
    "path",
    "patient",
    "patrol",
    "pattern",
    "pause",
    "pave",
    "payment",
    "peace",
    "peanut",
    "pear",
    "peasant",
    "pelican",
    "pen",
    "penalty",
    "pencil",
    "people",
    "pepper",
    "perfect",
    "permit",
    "person",
    "pet",
    "phone",
    "photo",
    "phrase",
    "physical",
    "piano",
    "picnic",
    "picture",
    "piece",
    "pig",
    "pigeon",
    "pill",
    "pilot",
    "pink",
    "pioneer",
    "pipe",
    "pistol",
    "pitch",
    "pizza",
    "place",
    "planet",
    "plastic",
    "plate",
    "play",
    "please",
    "pledge",
    "pluck",
    "plug",
    "plunge",
    "poem",
    "poet",
    "point",
    "polar",
    "pole",
    "police",
    "pond",
    "pony",
    "pool",
    "popular",
    "portion",
    "position",
    "possible",
    "post",
    "potato",
    "pottery",
    "poverty",
    "powder",
    "power",
    "practice",
    "praise",
    "predict",
    "prefer",
    "prepare",
    "present",
    "pretty",
    "prevent",
    "price",
    "pride",
    "primary",
    "print",
    "priority",
    "prison",
    "private",
    "prize",
    "problem",
    "process",
    "produce",
    "profit",
    "program",
    "project",
    "promote",
    "proof",
    "property",
    "prosper",
    "protect",
    "proud",
    "provide",
    "public",
    "pudding",
    "pull",
    "pulp",
    "pulse",
    "pumpkin",
    "punch",
    "pupil",
    "puppy",
    "purchase",
    "purity",
    "purpose",
    "purse",
    "push",
    "put",
    "puzzle",
    "pyramid",
    "quality",
    "quantum",
    "quarter",
    "question",
    "quick",
    "quit",
    "quiz",
    "quote",
    "rabbit",
    "raccoon",
    "race",
    "rack",
    "radar",
    "radio",
    "rail",
    "rain",
    "raise",
    "rally",
    "ramp",
    "ranch",
    "random",
    "range",
    "rapid",
    "rare",
    "rate",
    "rather",
    "raven",
    "raw",
    "razor",
    "ready",
    "real",
    "reason",
    "rebel",
    "rebuild",
    "recall",
    "receive",
    "recipe",
    "record",
    "recycle",
    "reduce",
    "reflect",
    "reform",
    "refuse",
    "region",
    "regret",
    "regular",
    "reject",
    "relax",
    "release",
    "relief",
    "rely",
    "remain",
    "remember",
    "remind",
    "remove",
    "render",
    "renew",
    "rent",
    "reopen",
    "repair",
    "repeat",
    "replace",
    "report",
    "require",
    "rescue",
    "resemble",
    "resist",
    "resource",
    "response",
    "result",
    "retire",
    "retreat",
    "return",
    "reunion",
    "reveal",
    "review",
    "reward",
    "rhythm",
    "rib",
    "ribbon",
    "rice",
    "rich",
    "ride",
    "ridge",
    "rifle",
    "right",
    "rigid",
    "ring",
    "riot",
    "ripple",
    "risk",
    "ritual",
    "rival",
    "river",
    "road",
    "roast",
    "robot",
    "robust",
    "rocket",
    "romance",
    "roof",
    "rookie",
    "room",
    "rose",
    "rotate",
    "rough",
    "round",
    "route",
    "royal",
    "rubber",
    "rude",
    "rug",
    "rule",
    "run",
    "runway",
    "rural",
    "sad",
    "saddle",
    "sadness",
    "safe",
    "sail",
    "salad",
    "salmon",
    "salon",
    "salt",
    "salute",
    "same",
    "sample",
    "sand",
    "satisfy",
    "satoshi",
    "sauce",
    "sausage",
    "save",
    "say",
    "scale",
    "scan",
    "scare",
    "scatter",
    "scene",
    "scheme",
    "school",
    "science",
    "scissors",
    "scorpion",
    "scout",
    "scrap",
    "screen",
    "script",
    "scrub",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "security",
    "seed",
    "seek",
    "segment",
    "select",
    "sell",
    "seminar",
    "senior",
    "sense",
    "sentence",
    "series",
    "service",
    "session",
    "settle",
    "setup",
    "seven",
    "shadow",
    "shaft",
    "shallow",
    "share",
    "shed",
    "shell",
    "sheriff",
    "shield",
    "shift",
    "shine",
    "ship",
    "shiver",
    "shock",
    "shoe",
    "shoot",
    "shop",
    "short",
    "shoulder",
    "shove",
    "shrimp",
    "shrug",
    "shuffle",
    "shy",
    "sibling",
    "sick",
    "side",
    "siege",
    "sight",
    "sign",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "since",
    "sing",
    "siren",
    "sister",
    "situate",
    "six",
    "size",
    "skate",
    "sketch",
    "ski",
    "skill",
    "skin",
    "skirt",
    "skull",
    "slab",
    "slam",
    "sleep",
    "slender",
    "slice",
    "slide",
    "slight",
    "slim",
    "slogan",
    "slot",
    "slow",
    "slush",
    "small",
    "smart",
    "smile",
    "smoke",
    "smooth",
    "snack",
    "snake",
    "snap",
    "sniff",
    "snow",
    "soap",
    "soccer",
    "social",
    "sock",
    "soda",
    "soft",
    "solar",
    "soldier",
    "solid",
    "solution",
    "solve",
    "someone",
    "song",
    "soon",
    "sorry",
    "sort",
    "soul",
    "sound",
    "soup",
    "source",
    "south",
    "space",
    "spare",
    "spatial",
    "spawn",
    "speak",
    "special",
    "speed",
    "spell",
    "spend",
    "sphere",
    "spice",
    "spider",
    "spike",
    "spin",
    "spirit",
    "split",
    "spoil",
    "sponsor",
    "spoon",
    "sport",
    "spot",
    "spray",
    "spread",
    "spring",
    "spy",
    "square",
    "squeeze",
    "squirrel",
    "stable",
    "stadium",
    "staff",
    "stage",
    "stairs",
    "stamp",
    "stand",
    "start",
    "state",
    "stay",
    "steak",
    "steel",
    "stem",
    "step",
    "stereo",
    "stick",
    "still",
    "sting",
    "stock",
    "stomach",
    "stone",
    "stool",
    "story",
    "stove",
    "strategy",
    "street",
    "strike",
    "strong",
    "struggle",
    "student",
    "stuff",
    "stumble",
    "style",
    "subject",
    "submit",
    "subway",
    "success",
    "such",
    "sudden",
    "suffer",
    "sugar",
    "suggest",
    "suit",
    "summer",
    "sun",
    "sunny",
    "sunset",
    "super",
    "supply",
    "supreme",
    "sure",
    "surface",
    "surge",
    "surprise",
    "surround",
    "survey",
    "suspect",
    "sustain",
    "swallow",
    "swamp",
    "swap",
    "swarm",
    "swear",
    "sweet",
    "swift",
    "swim",
    "swing",
    "switch",
    "sword",
    "symbol",
    "symptom",
    "syrup",
    "system",
    "table",
    "tackle",
    "tag",
    "tail",
    "talent",
    "talk",
    "tank",
    "tape",
    "target",
    "task",
    "taste",
    "tattoo",
    "taxi",
    "teach",
    "team",
    "tell",
    "ten",
    "tenant",
    "tennis",
    "tent",
    "term",
    "test",
    "text",
    "thank",
    "that",
    "theme",
    "then",
    "theory",
    "there",
    "they",
    "thing",
    "this",
    "thought",
    "three",
    "thrive",
    "throw",
    "thumb",
    "thunder",
    "ticket",
    "tide",
    "tiger",
    "tilt",
    "timber",
    "time",
    "tiny",
    "tip",
    "tired",
    "tissue",
    "title",
    "toast",
    "tobacco",
    "today",
    "toddler",
    "toe",
    "together",
    "toilet",
    "token",
    "tomato",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "tool",
    "tooth",
    "top",
    "topic",
    "topple",
    "torch",
    "tornado",
    "tortoise",
    "toss",
    "total",
    "tourist",
    "toward",
    "tower",
    "town",
    "toy",
    "track",
    "trade",
    "traffic",
    "tragic",
    "train",
    "transfer",
    "trap",
    "trash",
    "travel",
    "tray",
    "treat",
    "tree",
    "trend",
    "trial",
    "tribe",
    "trick",
    "trigger",
    "trim",
    "trip",
    "trophy",
    "trouble",
    "truck",
    "true",
    "truly",
    "trumpet",
    "trust",
    "truth",
    "try",
    "tube",
    "tuition",
    "tumble",
    "tuna",
    "tunnel",
    "turkey",
    "turn",
    "turtle",
    "twelve",
    "twenty",
    "twice",
    "twin",
    "twist",
    "two",
    "type",
    "typical",
    "ugly",
    "umbrella",
    "unable",
    "unaware",
    "uncle",
    "uncover",
    "under",
    "undo",
    "unfair",
    "unfold",
    "unhappy",
    "uniform",
    "unique",
    "unit",
    "universe",
    "unknown",
    "unlock",
    "until",
    "unusual",
    "unveil",
    "update",
    "upgrade",
    "uphold",
    "upon",
    "upper",
    "upset",
    "urban",
    "urge",
    "usage",
    "use",
    "used",
    "useful",
    "useless",
    "usual",
    "utility",
    "vacant",
    "vacuum",
    "vague",
    "valid",
    "valley",
    "valve",
    "van",
    "vanish",
    "vapor",
    "various",
    "vast",
    "vault",
    "vehicle",
    "velvet",
    "vendor",
    "venture",
    "venue",
    "verb",
    "verify",
    "version",
    "very",
    "vessel",
    "veteran",
    "viable",
    "vibrant",
    "vicious",
    "victory",
    "video",
    "view",
    "village",
    "vintage",
    "violin",
    "virtual",
    "virus",
    "visa",
    "visit",
    "visual",
    "vital",
    "vivid",
    "vocal",
    "voice",
    "void",
    "volcano",
    "volume",
    "vote",
    "voyage",
    "wage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "walnut",
    "want",
    "warfare",
    "warm",
    "warrior",
    "wash",
    "wasp",
    "waste",
    "water",
    "wave",
    "way",
    "wealth",
    "weapon",
    "wear",
    "weasel",
    "weather",
    "web",
    "wedding",
    "weekend",
    "weird",
    "welcome",
    "west",
    "wet",
    "whale",
    "what",
    "wheat",
    "wheel",
    "when",
    "where",
    "whip",
    "whisper",
    "wide",
    "width",
    "wife",
    "wild",
    "will",
    "win",
    "window",
    "wine",
    "wing",
    "wink",
    "winner",
    "winter",
    "wire",
    "wisdom",
    "wise",
    "wish",
    "witness",
    "wolf",
    "woman",
    "wonder",
    "wood",
    "wool",
    "word",
    "work",
    "world",
    "worry",
    "worth",
    "wrap",
    "wreck",
    "wrestle",
    "wrist",
    "write",
    "wrong",
    "yard",
    "year",
    "yellow",
    "you",
    "young",
    "youth",
    "zebra",
    "zero",
    "zone",
    "zoo"
  ];
  Object.defineProperty(Ye, "__esModule", {
    value: true
  });
  const it = {};
  Ye.wordlists = it;
  let Ie;
  var It = Ye._default = Ie;
  try {
    It = Ye._default = Ie = hp, it.czech = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = pp, it.chinese_simplified = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = gp, it.chinese_traditional = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = mp, it.korean = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = xp, it.french = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = vp, it.italian = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = bp, it.spanish = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = wp, it.japanese = Ie, it.JA = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = yp, it.portuguese = Ie;
  } catch {
  }
  try {
    It = Ye._default = Ie = Ep, it.english = Ie, it.EN = Ie;
  } catch {
  }
  Object.defineProperty(Dt, "__esModule", {
    value: true
  });
  const _p = Bt, d0 = Ne, f0 = lo, Ap = qr, Xa = Ye;
  let ra = Xa._default;
  const qs = "Invalid mnemonic", gr = "Invalid entropy", kp = "Invalid mnemonic checksum", h0 = `A wordlist is required but a default could not be found.
Please pass a 2048 word array explicitly.`;
  function aa(t) {
    return (t || "").normalize("NFKD");
  }
  function p0(t, e, r) {
    for (; t.length < r; ) t = e + t;
    return t;
  }
  function g0(t) {
    return parseInt(t, 2);
  }
  function m0(t) {
    return t.map((e) => p0(e.toString(2), "0", 8)).join("");
  }
  function x0(t) {
    const r = t.length * 8 / 32, a = _p.sha256(Uint8Array.from(t));
    return m0(Array.from(a)).slice(0, r);
  }
  function v0(t) {
    return "mnemonic" + (t || "");
  }
  function Bp(t, e) {
    const r = Uint8Array.from(Buffer.from(aa(t), "utf8")), a = Uint8Array.from(Buffer.from(v0(aa(e)), "utf8")), o = f0.pbkdf2(d0.sha512, r, a, {
      c: 2048,
      dkLen: 64
    });
    return Buffer.from(o);
  }
  Dt.mnemonicToSeedSync = Bp;
  function Cp(t, e) {
    const r = Uint8Array.from(Buffer.from(aa(t), "utf8")), a = Uint8Array.from(Buffer.from(v0(aa(e)), "utf8"));
    return f0.pbkdf2Async(d0.sha512, r, a, {
      c: 2048,
      dkLen: 64
    }).then((o) => Buffer.from(o));
  }
  var Sp = Dt.mnemonicToSeed = Cp;
  function b0(t, e) {
    if (e = e || ra, !e) throw new Error(h0);
    const r = aa(t).split(" ");
    if (r.length % 3 !== 0) throw new Error(qs);
    const a = r.map((d) => {
      const h = e.indexOf(d);
      if (h === -1) throw new Error(qs);
      return p0(h.toString(2), "0", 11);
    }).join(""), o = Math.floor(a.length / 33) * 32, n = a.slice(0, o), s = a.slice(o), i = n.match(/(.{1,8})/g).map(g0);
    if (i.length < 16) throw new Error(gr);
    if (i.length > 32) throw new Error(gr);
    if (i.length % 4 !== 0) throw new Error(gr);
    const l = Buffer.from(i);
    if (x0(l) !== s) throw new Error(kp);
    return l.toString("hex");
  }
  Dt.mnemonicToEntropy = b0;
  function w0(t, e) {
    if (Buffer.isBuffer(t) || (t = Buffer.from(t, "hex")), e = e || ra, !e) throw new Error(h0);
    if (t.length < 16) throw new TypeError(gr);
    if (t.length > 32) throw new TypeError(gr);
    if (t.length % 4 !== 0) throw new TypeError(gr);
    const r = m0(Array.from(t)), a = x0(t), s = (r + a).match(/(.{1,11})/g).map((i) => {
      const l = g0(i);
      return e[l];
    });
    return e[0] === "\u3042\u3044\u3053\u304F\u3057\u3093" ? s.join("\u3000") : s.join(" ");
  }
  Dt.entropyToMnemonic = w0;
  function Dp(t, e, r) {
    if (t = t || 128, t % 32 !== 0) throw new TypeError(gr);
    return e = e || ((a) => Buffer.from(Ap.randomBytes(a))), w0(e(t / 8), r);
  }
  var Ip = Dt.generateMnemonic = Dp;
  function Fp(t, e) {
    try {
      b0(t, e);
    } catch {
      return false;
    }
    return true;
  }
  var uo = Dt.validateMnemonic = Fp;
  function zp(t) {
    const e = Xa.wordlists[t];
    if (e) ra = e;
    else throw new Error('Could not find wordlist for language "' + t + '"');
  }
  Dt.setDefaultWordlist = zp;
  function Rp() {
    if (!ra) throw new Error("No Default Wordlist set");
    return Object.keys(Xa.wordlists).filter((t) => t === "JA" || t === "EN" ? false : Xa.wordlists[t].every((e, r) => e === ra[r]))[0];
  }
  Dt.getDefaultWordlist = Rp;
  var Tp = Ye;
  Dt.wordlists = Tp.wordlists;
  const Et = () => new Error("Encrypted mnemonic delivery failed or cancelled"), y0 = (t) => btoa(String.fromCharCode(...t));
  function _a(t, e) {
    if (typeof t != "string" || t.length > 8192 || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)) throw Et();
    const r = Uint8Array.from(atob(t), (a) => a.charCodeAt(0));
    if (y0(r) !== t || e !== void 0 && r.length !== e) throw Et();
    return r;
  }
  async function Np(t, e, r, a) {
    let o, n, s;
    const i = () => {
      if (a == null ? void 0 : a.aborted) throw Et();
    };
    try {
      if (i(), !/^[a-z0-9][a-z0-9-]{0,63}$/.test(t) || ![
        "regtest",
        "testnet",
        "mainnet"
      ].includes(e)) throw Et();
      const l = await crypto.subtle.generateKey({
        name: "ECDH",
        namedCurve: "P-256"
      }, false, [
        "deriveBits"
      ]), c = y0(new Uint8Array(await crypto.subtle.exportKey("raw", l.publicKey))), d = crypto.randomUUID();
      i();
      const h = await r({
        recipient_public_key: c,
        request_id: d
      });
      if (i(), !h || typeof h != "object" || Array.isArray(h)) throw Et();
      const p = h;
      if (Object.keys(p).sort().join(",") !== "algorithm,ciphertext,ephemeral_public_key,network,node_id,nonce,recipient_public_key,request_id" || p.algorithm !== "P256-SHA256-AES256GCM-V1" || p.node_id !== t || p.network !== e || p.request_id !== d || p.recipient_public_key !== c) throw Et();
      const g = _a(p.ephemeral_public_key, 65);
      if (g[0] !== 4) throw Et();
      _a(p.recipient_public_key, 65);
      const m = _a(p.nonce, 12), b = _a(p.ciphertext);
      if (b.length <= 16) throw Et();
      const x = await crypto.subtle.importKey("raw", g, {
        name: "ECDH",
        namedCurve: "P-256"
      }, false, []);
      o = new Uint8Array(await crypto.subtle.deriveBits({
        name: "ECDH",
        public: x
      }, l.privateKey, 256)), n = new Uint8Array(await crypto.subtle.digest("SHA-256", o));
      const _ = await crypto.subtle.importKey("raw", n, {
        name: "AES-GCM"
      }, false, [
        "decrypt"
      ]);
      s = new Uint8Array(await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: m,
        tagLength: 128,
        additionalData: new TextEncoder().encode(`STASH-MNEMONIC-V1|${e}|${t}|${d}|${c}`)
      }, _, b)), i();
      const y = new TextDecoder("utf-8", {
        fatal: true
      }).decode(s);
      if (!uo(y)) throw Et();
      return y;
    } catch {
      throw Et();
    } finally {
      o == null ? void 0 : o.fill(0), n == null ? void 0 : n.fill(0), s == null ? void 0 : s.fill(0);
    }
  }
  si = function(t) {
    try {
      const e = new URL(t);
      return [
        "http:",
        "https:"
      ].includes(e.protocol) && e.origin === t && !e.username && !e.password && !e.search && !e.hash;
    } catch {
      return false;
    }
  };
  function Op(t) {
    try {
      const e = new URL(t);
      return e.hostname === "localhost" || e.hostname === "127.0.0.1" || e.hostname === "[::1]";
    } catch {
      return false;
    }
  }
  km = function(t, e) {
    if (!si(t)) return false;
    try {
      const r = new URL(t);
      return !!(r.protocol === "https:" || r.protocol === "http:" && e.allowLoopback && Op(t));
    } catch {
      return false;
    }
  };
  E0 = function(t) {
    return /^chrome-extension:\/\/[a-p]{32}$/.test(t);
  };
  Bm = function(t, e, r) {
    if (r ? t.id !== e || !t.tab : t.id) throw new Error("ORIGIN_NOT_ALLOWED");
    let a;
    if (t.url) try {
      a = new URL(t.url).origin;
    } catch {
      throw new Error("ORIGIN_NOT_ALLOWED");
    }
    const o = t.origin ?? a;
    if (!o || !si(o) || a !== void 0 && a !== o) throw new Error("ORIGIN_NOT_ALLOWED");
    return o;
  };
  Cm = function(t, e) {
    const r = `chrome-extension://${e}`;
    return E0(r) && t.id === e && !t.tab && (t.origin === void 0 || t.origin === r) && [
      `${r}/public/popup.html`,
      `${r}/public/sidepanel.html`
    ].includes((t.url ?? "").split(/[?#]/)[0]);
  };
  function Lp() {
    var _a2;
    const t = (_a2 = globalThis.location) == null ? void 0 : _a2.origin, e = typeof chrome < "u" ? chrome.runtime : void 0;
    if (e == null ? void 0 : e.id) {
      const r = `chrome-extension://${e.id}`;
      if (!E0(r) || t !== r || e.getURL("") !== `${r}/`) throw new Error("Cloud login origin unavailable");
      return r;
    }
    if (!t || !si(t)) throw new Error("Cloud login origin unavailable");
    return t;
  }
  const ci = Object.freeze(Object.defineProperty({
    __proto__: null,
    CACHE_SCHEMA_VERSION: qn,
    CLOUD_CACHE_TTL_MS: vr,
    DEFAULT_CACHE_TTL_MS: Hn,
    HOME_BALANCE_MAX_AGE_MS: Pc,
    INVALIDATION_TAGS: ue,
    NODE_ID_TTL_MS: Lc,
    RESOURCE_POLICIES: Xc,
    buildCredentialFingerprint: wn,
    buildStableIdentity: jn,
    cachedRead: Gn,
    clearCloudDataCache: Gc,
    clearCloudMemory: Yn,
    clearDataCache: fa,
    clearHomeBalanceSnapshot: $a,
    detectConnectionMode: Dc,
    identityFromScope: Fc,
    identityNamespace: jt,
    invalidateNode: Kc,
    invalidateScope: Vc,
    isAuthorizedMemoryOnly: la,
    normalizeNodeKey: Sc,
    parseScope: Ic,
    peekCache: Wc,
    publishCacheNotify: Hr,
    readHomeBalanceProjection: Yc,
    setAuthorityResolver: Bn,
    subscribeCache: $c,
    subscribeCacheNotify: Hc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Pp(t) {
    t.CapacitorUtils.Synapse = new Proxy({}, {
      get(e, r) {
        return new Proxy({}, {
          get(a, o) {
            return (n, s, i) => {
              const l = t.Capacitor.Plugins[r];
              if (l === void 0) {
                i(new Error(`Capacitor plugin ${r} not found`));
                return;
              }
              if (typeof l[o] != "function") {
                i(new Error(`Method ${o} not found in Capacitor plugin ${r}`));
                return;
              }
              (async () => {
                try {
                  const c = await l[o](n);
                  s(c);
                } catch (c) {
                  i(c);
                }
              })();
            };
          }
        });
      }
    });
  }
  function Up(t) {
    t.CapacitorUtils.Synapse = new Proxy({}, {
      get(e, r) {
        return t.cordova.plugins[r];
      }
    });
  }
  function jp(t = false) {
    typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? Pp(window) : window.cordova !== void 0 && Up(window));
  }
  var Xr;
  (function(t) {
    t.Documents = "DOCUMENTS", t.Data = "DATA", t.Library = "LIBRARY", t.Cache = "CACHE", t.External = "EXTERNAL", t.ExternalStorage = "EXTERNAL_STORAGE", t.ExternalCache = "EXTERNAL_CACHE", t.LibraryNoCloud = "LIBRARY_NO_CLOUD", t.Temporary = "TEMPORARY";
  })(Xr || (Xr = {}));
  (function(t) {
    t.UTF8 = "utf8", t.ASCII = "ascii", t.UTF16 = "utf16";
  })($s || ($s = {}));
  const rn = ha("Filesystem", {
    web: () => et(() => import("./web-D67rMZgo.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((t) => new t.FilesystemWeb())
  });
  jp();
  const Ms = ha("Share", {
    web: () => et(() => import("./web-DpYzEygg.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((t) => new t.ShareWeb())
  }), _0 = "stash-cloud-export.tar", Hp = 6e4, qp = 5 * 6e4, Ws = 768 * 1024;
  A0 = function() {
    return Lt.isNativePlatform() ? [
      "ios",
      "android"
    ].includes(Lt.getPlatform()) && Lt.isPluginAvailable("Filesystem") && Lt.isPluginAvailable("Share") : typeof document < "u" && !!document.body && typeof URL.createObjectURL == "function";
  };
  async function $p(t) {
    if (!(await Ms.canShare()).value) throw new Error("Native archive sharing is unavailable");
    const e = `stash-cloud-export-${crypto.randomUUID()}`, r = `${e}/${_0}`;
    let a = false;
    try {
      let o = "";
      for (let n = 0; n < t.size; n += Ws) {
        const s = await t.slice(n, n + Ws).arrayBuffer(), i = La.Buffer.from(s).toString("base64");
        n === 0 ? { uri: o } = await rn.writeFile({
          path: r,
          data: i,
          directory: Xr.Cache,
          recursive: true
        }) : await rn.appendFile({
          path: r,
          data: i,
          directory: Xr.Cache
        });
      }
      if (!o.startsWith("file://")) throw new Error("Local archive file is unavailable");
      await Ms.share({
        files: [
          o
        ]
      }), a = true;
    } finally {
      const o = () => rn.rmdir({
        path: e,
        directory: Xr.Cache,
        recursive: true
      });
      a && Lt.getPlatform() === "android" ? setTimeout(() => {
        o().catch(() => {
        });
      }, qp) : await o().catch(() => {
      });
    }
  }
  async function Mp(t) {
    if (!A0()) throw new Error("Export archive saving is unavailable");
    if (t.size === 0) throw new Error("Export archive is empty");
    if (Lt.isNativePlatform()) {
      await $p(t);
      return;
    }
    const e = URL.createObjectURL(t), r = document.createElement("a");
    try {
      r.href = e, r.download = _0, r.rel = "noreferrer", document.body.appendChild(r), r.click();
    } finally {
      r.remove(), setTimeout(() => URL.revokeObjectURL(e), Hp);
    }
  }
  function k0(t, e, r = () => {
  }) {
    if (!Array.isArray(t)) throw new TypeError(`"${e}" expected array, got type=${typeof t}`);
    for (let a = 0; a < t.length; a++) r(t[a], `${e}[${a}]`);
    return t;
  }
  const We = (t, e, r) => Ut(t, e, r), B0 = Pt;
  function Wp(t, e = "") {
    if (typeof t != "string") {
      const r = e && `"${e}" `;
      throw new TypeError(r + "expected string, got type=" + typeof t);
    }
    return t;
  }
  function zr(t, e = "object") {
    if (t === null || typeof t != "object" || Array.isArray(t)) throw new TypeError(e === "object" ? "expected valid options object" : `"${e}" expected object, got type=${typeof t}`);
    return t;
  }
  function Zr(t, e) {
    if (typeof t != "function") throw new TypeError(`"${e}" is invalid: expected function, got ${typeof t}`);
    return t;
  }
  const C0 = Un, rr = (...t) => Uu(...t), zn = (t) => Cc(t), fo = vn, li = (t) => qu(t), Za = BigInt(0), Vs = BigInt(1), Vp = (t) => t ? `"${t}" ` : "";
  function br(t, e = "") {
    if (typeof t != "boolean") throw new TypeError(Vp(e) + "expected boolean, got type=" + typeof t);
    return t;
  }
  function ui(t) {
    if (typeof t == "bigint") {
      if (!mr(t)) throw new RangeError("positive bigint expected, got " + t);
    } else B0(t);
    return t;
  }
  function oa(t, e = "") {
    if (typeof t != "number") {
      const r = e && `"${e}" `;
      throw new TypeError(r + "expected number, got type=" + typeof t);
    }
    if (!Number.isSafeInteger(t)) {
      const r = e && `"${e}" `;
      throw new RangeError(r + "expected safe integer, got " + t);
    }
  }
  function Aa(t) {
    const e = ui(t).toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function S0(t) {
    if (typeof t != "string") throw new TypeError("hex string expected, got " + typeof t);
    return t === "" ? Za : BigInt("0x" + t);
  }
  function jr(t) {
    return S0(Un(t));
  }
  function D0(t) {
    return S0(Un(Kp(Ut(t)).reverse()));
  }
  function di(t, e) {
    if (Pt(e), e === 0) throw new Error("zero output length is invalid");
    t = ui(t);
    const r = e * 2, a = t.toString(16);
    if (a.length > r) throw new RangeError("number is too large");
    return Cc(a.padStart(r, "0"));
  }
  function I0(t, e) {
    return di(t, e).reverse();
  }
  function Kp(t) {
    return Uint8Array.from(We(t));
  }
  function mr(t) {
    return typeof t == "bigint" && Za <= t;
  }
  function F0(t, e, r) {
    return mr(t) && mr(e) && mr(r) && e <= t && t < r;
  }
  function z0(t, e, r, a) {
    if (!F0(e, r, a)) throw new RangeError("expected valid " + t + ": " + r + " <= n < " + a + ", got " + e);
  }
  function fi(t) {
    if (t < Za) throw new Error("expected non-negative bigint, got " + t);
    return t === Za ? 0 : t.toString(2).length;
  }
  const hi = (t) => (oa(t, "n"), (Vs << BigInt(t)) - Vs);
  function Gp(t, e, r) {
    if (Pt(t, "hashLen"), Pt(e, "qByteLen"), typeof r != "function") throw new TypeError("hmacFn must be a function");
    const a = (x) => new Uint8Array(x), o = Uint8Array.of(), n = Uint8Array.of(0), s = Uint8Array.of(1), i = 1e3;
    let l = a(t), c = a(t), d = 0;
    const h = () => {
      l.fill(1), c.fill(0), d = 0;
    }, p = (...x) => r(c, rr(l, ...x)), g = (x = o) => {
      c = p(n, x), l = p(), x.length !== 0 && (c = p(s, x), l = p());
    }, m = () => {
      if (d++ >= i) throw new Error("drbg: tried max amount of iterations");
      let x = 0;
      const _ = [];
      for (; x < e; ) {
        l = p();
        const y = l.slice();
        _.push(y), x += l.length;
      }
      return rr(..._);
    };
    return (x, _) => {
      h(), g(x);
      let y;
      for (; (y = _(m())) === void 0; ) g();
      return h(), y;
    };
  }
  function xa(t, e = {}, r = {}, a = "object") {
    zr(t, a), zr(e, "fields"), zr(r, "optFields");
    function o(s, i, l) {
      const c = a === "object" ? `param "${String(s)}"` : `"${a}.${String(s)}"`, d = t[s];
      if (!Object.hasOwn(t, s) && (l ? d !== void 0 : i !== "function")) throw new TypeError(`${c} is invalid: expected own property`);
      if (l && d === void 0) return;
      const h = typeof d;
      if (h !== i || d === null) throw new TypeError(`${c} is invalid: expected ${i}, got ${h}`);
    }
    const n = (s, i) => Object.entries(s).forEach(([l, c]) => o(l, c, i));
    n(e, false), n(r, true);
  }
  const je = BigInt(0), _e = BigInt(1), ar = BigInt(2), R0 = BigInt(3), pi = BigInt(4), T0 = BigInt(5), Yp = BigInt(7), N0 = BigInt(8), Xp = BigInt(9), Zp = BigInt(15), O0 = BigInt(16), Jp = BigInt("0x10000000000000000");
  function rt(t, e) {
    if (e <= je) throw new Error("mod: expected positive modulus, got " + e);
    const r = t % e;
    return r >= je ? r : e + r;
  }
  function L0(t, e, r) {
    if (r <= _e) throw new Error("pow: expected modulus > 1, got " + r);
    if (typeof e != "bigint") throw new TypeError("invalid exponent: expected bigint, got " + typeof e);
    if (e < je) throw new Error("invalid exponent, negatives unsupported");
    if (e === je) return _e;
    if (e === _e) return t;
    let a = t % r;
    if (a < je && (a += r), e < Jp) {
      let i = _e;
      for (; e > je; ) e & _e && (i = i * a % r), a = a * a % r, e >>= _e;
      return i;
    }
    const o = [];
    for (; e > je; ) o.push(Number(e & Zp)), e >>= pi;
    const n = new Array(16);
    n[0] = _e, n[1] = a;
    for (let i = 2; i < 16; i++) n[i] = n[i - 1] * a % r;
    let s = n[o[o.length - 1]];
    for (let i = o.length - 2; i >= 0; i--) {
      s = s * s % r, s = s * s % r, s = s * s % r, s = s * s % r;
      const l = o[i];
      l !== 0 && (s = s * n[l] % r);
    }
    return s;
  }
  function Ks(t, e) {
    if (t === je) throw new Error("invert: expected non-zero number");
    if (e <= _e) throw new Error("invert: expected modulus > 1, got " + e);
    let r = rt(t, e), a = e, o = je, n = _e;
    for (; r !== je; ) {
      const i = a / r, l = a - r * i, c = o - n * i;
      a = r, r = l, o = n, n = c;
    }
    if (a !== _e) throw new Error("invert: does not exist");
    return rt(o, e);
  }
  function Qp(t, e) {
    if (e <= _e) throw new Error("invertCt: expected prime modulus > 1, got " + e);
    const r = rt(t, e);
    if (r === je) throw new Error("invertCt: expected non-zero number");
    const a = L0(r, e - ar, e);
    if (rt(r * a, e) !== _e) throw new Error("invertCt: does not exist");
    return a;
  }
  function gi(t, e, r) {
    const a = t;
    if (!a.eql(a.sqr(e), r)) throw new Error("Cannot find square root");
  }
  function mi(t, e) {
    if ((t & _e) === je) throw new Error(e + ": expected odd modulus, got " + t);
  }
  function P0(t, e) {
    const r = t, a = (r.ORDER + _e) / pi, o = r.pow(e, a);
    return gi(r, o, e), o;
  }
  function eg(t, e) {
    const r = t, a = (r.ORDER - T0) / N0, o = r.mul(e, ar), n = r.pow(o, a), s = r.mul(e, n), i = r.mul(r.mul(s, ar), n), l = r.mul(s, r.sub(i, r.ONE));
    return gi(r, l, e), l;
  }
  function tg(t) {
    const e = xi(t), r = U0(t), a = r(e, e.neg(e.ONE)), o = r(e, a), n = r(e, e.neg(a)), s = (t + Yp) / O0;
    return (i, l) => {
      const c = i;
      let d = c.pow(l, s), h = c.mul(d, a);
      const p = c.mul(d, o), g = c.mul(d, n), m = c.eql(c.sqr(h), l), b = c.eql(c.sqr(p), l);
      d = c.cmov(d, h, m), h = c.cmov(g, p, b);
      const x = c.eql(c.sqr(h), l), _ = c.cmov(d, h, x);
      return gi(c, _, l), _;
    };
  }
  function U0(t) {
    if (t < R0) throw new Error("sqrt is not defined for small field");
    mi(t, "tonelliShanks");
    let e = t - _e, r = 0;
    for (; e % ar === je; ) e /= ar, r++;
    let a = ar;
    const o = xi(t);
    for (; Gs(o, a) === 1; ) if (a++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (r === 1) return P0;
    let n = o.pow(a, e);
    const s = (e + _e) / ar;
    return function(l, c) {
      const d = l;
      if (d.is0(c)) return c;
      if (Gs(d, c) !== 1) throw new Error("Cannot find square root");
      let h = r, p = d.mul(d.ONE, n), g = d.pow(c, e), m = d.pow(c, s);
      for (; !d.eql(g, d.ONE); ) {
        if (d.is0(g)) throw new Error("Cannot find square root: probably non-prime P");
        let b = 1, x = d.sqr(g);
        for (; !d.eql(x, d.ONE); ) if (b++, x = d.sqr(x), b === h) throw new Error("Cannot find square root");
        const _ = _e << BigInt(h - b - 1), y = d.pow(p, _);
        h = b, p = d.sqr(y), g = d.mul(g, p), m = d.mul(m, y);
      }
      return m;
    };
  }
  function rg(t) {
    return mi(t, "Fp.sqrt"), t % pi === R0 ? P0 : t % N0 === T0 ? eg : t % O0 === Xp ? tg(t) : U0(t);
  }
  const ag = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function na(t) {
    if (zr(t, "field"), typeof t.ORDER != "bigint") throw new TypeError('param "ORDER" is invalid: expected bigint, got ' + typeof t.ORDER);
    oa(t.BYTES, "BYTES"), oa(t.BITS, "BITS");
    for (const e of ag) Zr(t[e], "field." + e);
    if (t.BYTES < 1 || t.BITS < 1) throw new Error("invalid field: expected BYTES/BITS > 0");
    if (t.ORDER <= _e) throw new Error("invalid field: expected ORDER > 1, got " + t.ORDER);
    return t;
  }
  function j0(t, e, r = false) {
    na(t), k0(e, "nums"), br(r, "passZero");
    const a = t, o = new Array(e.length).fill(r ? a.ZERO : void 0), n = e.reduce((i, l, c) => a.is0(l) ? i : (o[c] = i, a.mul(i, l)), a.ONE), s = a.inv(n);
    return e.reduceRight((i, l, c) => a.is0(l) ? i : (o[c] = a.mul(i, o[c]), a.mul(i, l)), s), o;
  }
  function Gs(t, e) {
    na(t);
    const r = t;
    mi(r.ORDER, "FpLegendre");
    const a = (r.ORDER - _e) / ar, o = r.pow(e, a), n = r.eql(o, r.ONE), s = r.eql(o, r.ZERO), i = r.eql(o, r.neg(r.ONE));
    if (!n && !s && !i) throw new Error("invalid Legendre symbol result");
    return n ? 1 : s ? 0 : -1;
  }
  function og(t, e) {
    if (e !== void 0 && B0(e), t <= je) throw new Error("invalid n length: expected positive n, got " + t);
    if (e !== void 0 && e < 1) throw new Error("invalid n length: expected positive bit length, got " + e);
    const r = fi(t);
    if (e !== void 0 && e < r) throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${r})`);
    const a = e !== void 0 ? e : r, o = Math.ceil(a / 8);
    return {
      nBitLength: a,
      nByteLength: o
    };
  }
  const Ys = /* @__PURE__ */ new WeakMap();
  class Xs {
    constructor(e, r = {}) {
      __publicField(this, "ORDER");
      __publicField(this, "BITS");
      __publicField(this, "BYTES");
      __publicField(this, "isLE");
      __publicField(this, "ZERO", je);
      __publicField(this, "ONE", _e);
      __publicField(this, "_lengths");
      __publicField(this, "_mod");
      if (e <= _e) throw new Error("invalid field: expected ORDER > 1, got " + e);
      let a;
      this.isLE = false, r != null && typeof r == "object" && (typeof r.BITS == "number" && (a = r.BITS), typeof r.sqrt == "function" && Object.defineProperty(this, "sqrt", {
        value: r.sqrt,
        enumerable: true
      }), typeof r.isLE == "boolean" && (this.isLE = r.isLE), r.allowedLengths && (this._lengths = Object.freeze(r.allowedLengths.slice())), typeof r.modFromBytes == "boolean" && (this._mod = r.modFromBytes));
      const { nBitLength: o, nByteLength: n } = og(e, a);
      if (n > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
      this.ORDER = e, this.BITS = o, this.BYTES = n, Object.freeze(this);
    }
    create(e) {
      return rt(e, this.ORDER);
    }
    isValid(e) {
      if (typeof e != "bigint") throw new TypeError("invalid field element: expected bigint, got " + typeof e);
      return je <= e && e < this.ORDER;
    }
    is0(e) {
      return e === je;
    }
    isValidNot0(e) {
      return !this.is0(e) && this.isValid(e);
    }
    isOdd(e) {
      return (e & _e) === _e;
    }
    neg(e) {
      return rt(-e, this.ORDER);
    }
    eql(e, r) {
      return e === r;
    }
    sqr(e) {
      return rt(e * e, this.ORDER);
    }
    add(e, r) {
      return rt(e + r, this.ORDER);
    }
    sub(e, r) {
      return rt(e - r, this.ORDER);
    }
    mul(e, r) {
      return rt(e * r, this.ORDER);
    }
    pow(e, r) {
      return L0(e, r, this.ORDER);
    }
    div(e, r) {
      return rt(e * Ks(r, this.ORDER), this.ORDER);
    }
    sqrN(e) {
      return e * e;
    }
    addN(e, r) {
      return e + r;
    }
    subN(e, r) {
      return e - r;
    }
    mulN(e, r) {
      return e * r;
    }
    inv(e) {
      return Ks(e, this.ORDER);
    }
    sqrt(e) {
      let r = Ys.get(this);
      return r || Ys.set(this, r = rg(this.ORDER)), r(this, e);
    }
    toBytes(e) {
      return this.isLE ? I0(e, this.BYTES) : di(e, this.BYTES);
    }
    fromBytes(e, r = false) {
      We(e);
      const { _lengths: a, BYTES: o, isLE: n, ORDER: s, _mod: i } = this;
      if (a) {
        if (e.length < 1 || !a.includes(e.length) || e.length > o) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + e.length);
        const c = new Uint8Array(o);
        c.set(e, n ? 0 : c.length - e.length), e = c;
      }
      if (e.length !== o) throw new Error("Field.fromBytes: expected " + o + " bytes, got " + e.length);
      let l = n ? D0(e) : jr(e);
      if (i && (l = rt(l, s)), !r && !this.isValid(l)) throw new Error("invalid field element: outside of range 0..ORDER");
      return l;
    }
    invertBatch(e) {
      return j0(this, e, true);
    }
    cmov(e, r, a) {
      return br(a, "condition"), a ? r : e;
    }
  }
  function xi(t, e = {}) {
    return Object.freeze(Xs.prototype), new Xs(t, e);
  }
  function H0(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    if (t <= _e) throw new Error("field order must be greater than 1");
    const e = fi(t - _e);
    return Math.ceil(e / 8);
  }
  function vi(t) {
    const e = H0(t);
    return e + Math.ceil(e / 2);
  }
  function q0(t, e, r = false) {
    We(t);
    const a = t.length, o = H0(e), n = Math.max(vi(e), 16);
    if (a < n || a > 1024) throw new Error("expected " + n + "-1024 bytes of input, got " + a);
    const s = r ? D0(t) : jr(t), i = rt(s, e - _e) + _e;
    return r ? I0(i, o) : di(i, o);
  }
  const bi = BigInt(0), ia = BigInt(1), ng = BigInt(4), an = 16, Zs = 128, ig = 5, Js = 2 ** 31;
  function va(t) {
    const e = t;
    if (typeof e != "function") throw new TypeError('"Point" expected constructor, got type=' + typeof t);
    Zr(e.fromAffine, "Point.fromAffine"), Zr(e.fromBytes, "Point.fromBytes"), Zr(e.fromHex, "Point.fromHex"), zr(e.BASE, "Point.BASE"), zr(e.ZERO, "Point.ZERO"), na(e.Fp), na(e.Fn);
  }
  function sg(t, e) {
    va(t), M0(e, t);
    const r = j0(t.Fp, e.map((a) => a.Z));
    return e.map((a, o) => t.fromAffine(a.toAffine(r[o])));
  }
  function cg(t, e, r = 1) {
    if (!Number.isSafeInteger(t) || t < r || t > e) throw new Error("invalid window size, expected [" + r + ".." + e + "], got W=" + t);
  }
  function lg(t, e) {
    const r = t * (4 * e + 128);
    if (r > Js) throw new Error("invalid window size: table would need ~" + Math.ceil(r / 2 ** 20) + " MiB, max " + Js / 2 ** 20 + " MiB");
  }
  function $0(t, e) {
    if (t !== void 0) {
      Zr(t, "randomBytes");
      try {
        const r = t(e);
        if (!fo(r) || r.length !== e) return;
      } catch {
        return;
      }
      return t;
    }
  }
  function M0(t, e) {
    k0(t, "points"), t.forEach((r, a) => {
      if (!(r instanceof e)) throw new Error("invalid point at index " + a);
    });
  }
  function ug(t, e, r) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((a, o) => {
      if (!(r === void 0 ? e.isValid(a) : mr(a) && a < r)) throw new Error("invalid scalar at index " + o);
    });
  }
  const W0 = /* @__PURE__ */ new WeakMap();
  function on(t) {
    return W0.get(t) || 1;
  }
  function dg(t, e) {
    const r = t.double(), a = [
      t
    ];
    for (let o = 1; o < e; o++) a.push(a[o - 1].add(r));
    return a;
  }
  function fg(t, e) {
    const r = 2 ** e, a = r / 2, o = BigInt(r - 1), n = [];
    for (; t > bi; ) {
      let s = 0;
      t & ia && (s = Number(t & o), s >= a && (s -= r), t -= BigInt(s)), n.push(s), t >>= ia;
    }
    return n;
  }
  function hg(t, e, r) {
    const a = 2 ** e, o = a / 2, n = BigInt(a - 1), s = BigInt(e), i = [];
    for (let l = 0; l < r; l++) {
      let c = Number(t & n);
      t >>= s, c > o && (c -= a, t += ia), i.push(c);
    }
    if (t !== bi) throw new Error("invalid wnaf");
    return i;
  }
  function pg(t, e, r) {
    let a = 0;
    for (const n of r) a = Math.max(a, n.length);
    let o = t;
    for (let n = a - 1; n >= 0; n--) {
      n !== a - 1 && (o = o.double());
      for (let s = 0; s < r.length; s++) {
        const i = r[s][n];
        if (i) {
          const l = e[s][Math.abs(i) - 1 >> 1];
          o = o.add(i < 0 ? l.negate() : l);
        }
      }
    }
    return o;
  }
  class gg {
    constructor(e, r) {
      __publicField(this, "Point");
      __publicField(this, "BASE");
      __publicField(this, "ZERO");
      __publicField(this, "randomBytes");
      __publicField(this, "wnafPrecomputes", /* @__PURE__ */ new WeakMap());
      __publicField(this, "baseCanBeBlinded");
      __publicField(this, "bits");
      va(e), this.randomBytes = $0(r, an), this.Point = e, this.BASE = e.BASE, this.ZERO = e.ZERO, this.bits = e.Fn.BITS;
    }
    buildWnafTable(e, r, a) {
      const o = Math.ceil(a / r) + 1, n = 2 ** (r - 1), s = [];
      let i = e;
      for (let l = 0; l < o; l++) {
        let c = i;
        for (let d = 0; d < n; d++) s.push(c), c = c.add(i);
        i = s[s.length - 1].double();
      }
      return {
        W: r,
        bits: a,
        windows: o,
        comp: s
      };
    }
    wnafCachedCT(e, r) {
      const { W: a, windows: o, comp: n } = e, s = 2 ** (a - 1), i = hg(r, a, o);
      let l = this.ZERO, c = this.BASE;
      for (let d = 0; d < o; d++) {
        const h = i[d], p = d * s, g = Math.abs(h) - 1;
        let m = n[p];
        for (let x = 1; x < s; x++) m = x === g ? n[p + x] : m;
        const b = m.negate();
        h === 0 ? c = c.add(n[p]) : l = l.add(h < 0 ? b : m);
      }
      return {
        p: l,
        f: c
      };
    }
    getWnafPrecomputes(e, r, a, o) {
      let n = this.wnafPrecomputes.get(r), s = n == null ? void 0 : n.find((i) => i.W === e && i.bits === a);
      return s || (s = this.buildWnafTable(r, e, a), typeof o == "function" && (s = {
        ...s,
        comp: o(s.comp)
      }), n || (n = [], this.wnafPrecomputes.set(r, n)), n.push(s)), s;
    }
    assertPoint(e) {
      if (!(e instanceof this.Point)) throw new TypeError('"point" expected Point instance, got type=' + typeof e);
    }
    validateMulInput(e, r) {
      if (this.assertPoint(e), !F0(r, ia, this.Point.Fn.ORDER)) throw new Error("invalid scalar");
    }
    runCT(e, r, a, o) {
      const n = on(e);
      return n === 1 ? this.fixedWindowCT(e, r, a) : this.wnafCachedCT(this.getWnafPrecomputes(n, e, a, o), r);
    }
    mulCT(e, r, a) {
      return this.validateMulInput(e, r), this.runCT(e, r, this.bits, a);
    }
    mulCTBlinded(e, r, a) {
      if (this.validateMulInput(e, r), this.randomBytes === void 0) throw new Error("randomBytes is required for scalar blinding");
      const o = this.Point.Fn.BITS + Zs, n = this.randomBytes(an);
      if (!fo(n) || n.length !== an) throw new Error("randomBytes returned invalid byte array");
      n[0] = n[0] & 63 | 128;
      const s = r + jr(n) * this.Point.Fn.ORDER;
      return this.runCT(e, s, o, a);
    }
    fixedWindowCT(e, r, a) {
      const o = ig, n = 1 << o, s = hi(o), i = new Array(n);
      i[0] = this.ZERO;
      for (let d = 1; d < n; d++) i[d] = i[d - 1].add(e);
      const l = Math.ceil(a / o);
      let c = this.ZERO;
      for (let d = l - 1; d >= 0; d--) {
        if (d !== l - 1) for (let g = 0; g < o; g++) c = c.double();
        const h = Number(r >> BigInt(d * o) & s);
        let p = i[0];
        for (let g = 1; g < n; g++) p = g === h ? i[g] : p;
        c = c.add(p);
      }
      return {
        p: c,
        f: c
      };
    }
    shouldBlind(e, r) {
      return this.randomBytes === void 0 ? false : r === ia ? true : e !== this.BASE ? false : (this.baseCanBeBlinded === void 0 && (this.baseCanBeBlinded = this.mulUnsafe(this.BASE, this.Point.Fn.ORDER).is0()), this.baseCanBeBlinded);
    }
    mulSecret(e, r, a, o) {
      return this.shouldBlind(e, a) ? this.mulCTBlinded(e, r, o) : this.mulCT(e, r, o);
    }
    mulUnsafe(e, r, a) {
      if (this.assertPoint(e), !mr(r)) throw new Error("invalid scalar");
      const o = on(e);
      if (o === 1 || r >= this.Point.Fn.ORDER) return Rn(this.Point, [
        e
      ], [
        r
      ], true);
      const n = this.getWnafPrecomputes(o, e, this.bits, a);
      return this.wnafCachedCT(n, r).p;
    }
    setWindowSize(e, r) {
      this.assertPoint(e), cg(r, this.bits);
      const a = Math.ceil((this.bits + Zs) / r) + 1;
      lg(a * 2 ** (r - 1), this.Point.Fp.BYTES), W0.set(e, r), this.wnafPrecomputes.delete(e);
    }
    hasWindowSize(e) {
      return on(e) !== 1;
    }
  }
  function Rn(t, e, r, a = false) {
    if (va(t), M0(e, t), br(a, "allowOversized"), ug(r, t.Fn, a ? t.Fn.ORDER ** ng : void 0), e.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
    const o = e.map((s) => dg(s, 4)), n = r.map((s) => fg(s, 4));
    return pg(t.ZERO, o, n);
  }
  function Qs(t, e, r) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return na(e), e;
    } else return xi(t, {
      isLE: r
    });
  }
  function mg(t, e, r = {}, a) {
    if (a === void 0 && (a = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    xa(r);
    for (const l of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[l];
      if (!(mr(c) && c !== bi)) throw new Error(`CURVE.${l} must be positive bigint`);
    }
    const o = Qs(e.p, r.Fp, a), n = Qs(e.n, r.Fn, a), i = [
      "Gx",
      "Gy",
      "a",
      "b"
    ];
    for (const l of i) if (!o.isValid(e[l])) throw new Error(`CURVE.${l} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)), {
      CURVE: e,
      Fp: o,
      Fn: n
    };
  }
  function xg(t, e) {
    return function(a) {
      const o = t(a);
      return {
        secretKey: o,
        publicKey: e(o)
      };
    };
  }
  class ec {
    constructor(e, r) {
      __publicField(this, "oHash");
      __publicField(this, "iHash");
      __publicField(this, "blockLen");
      __publicField(this, "outputLen");
      __publicField(this, "canXOF", false);
      __publicField(this, "finished", false);
      __publicField(this, "destroyed", false);
      if (to(e), Ut(r, void 0, "key"), this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("expected Hash instance");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const a = this.blockLen, o = new Uint8Array(a);
      o.set(r.length > a ? e.create().update(r).digest() : r);
      for (let n = 0; n < o.length; n++) o[n] ^= 54;
      this.iHash.update(o), this.oHash = e.create();
      for (let n = 0; n < o.length; n++) o[n] ^= 106;
      this.oHash.update(o), fr(o);
    }
    update(e) {
      return Pa(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Pa(this), kc(e, this), this.finished = true;
      const r = e.subarray(0, this.outputLen);
      this.iHash.digestInto(r), this.oHash.update(r), this.oHash.digestInto(r), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: r, iHash: a, finished: o, destroyed: n, blockLen: s, outputLen: i, canXOF: l } = this;
      return e = e, e.finished = o, e.destroyed = n, e.blockLen = s, e.outputLen = i, e.canXOF = l, e.oHash = r._cloneInto(e.oHash), e.iHash = a._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const ho = (() => {
    const t = (e, r, a) => new ec(e, r).update(a).digest();
    return t.create = (e, r) => new ec(e, r), t;
  })();
  const vg = BigInt(0);
  class bg extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const Rt = {
    Err: bg,
    _tlv: {
      encode: (t, e) => {
        const { Err: r } = Rt;
        if (oa(t, "tag"), t < 0 || t > 255) throw new r("tlv.encode: wrong tag");
        if (Wp(e, "data"), e.length & 1) throw new r("tlv.encode: unpadded data");
        const a = e.length / 2, o = Aa(a);
        if (o.length / 2 & 128) throw new r("tlv.encode: long form length too big");
        const n = a > 127 ? Aa(o.length / 2 | 128) : "";
        return Aa(t) + n + o + e;
      },
      decode(t, e) {
        const { Err: r } = Rt;
        e = We(e, void 0, "DER data");
        let a = 0;
        if (t < 0 || t > 255) throw new r("tlv.decode: wrong tag");
        if (e.length < 2 || e[a++] !== t) throw new r("tlv.decode: wrong tlv");
        const o = e[a++], n = !!(o & 128);
        let s = 0;
        if (!n) s = o;
        else {
          const l = o & 127;
          if (!l) throw new r("tlv.decode(long): indefinite length not supported");
          if (l > 4) throw new r("tlv.decode(long): byte length is too big");
          const c = e.subarray(a, a + l);
          if (c.length !== l) throw new r("tlv.decode: length bytes not complete");
          if (c[0] === 0) throw new r("tlv.decode(long): zero leftmost byte");
          for (const d of c) s = s << 8 | d;
          if (a += l, s < 128) throw new r("tlv.decode(long): not minimal encoding");
        }
        const i = e.subarray(a, a + s);
        if (i.length !== s) throw new r("tlv.decode: wrong value length");
        return {
          v: i,
          l: e.subarray(a + s)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = Rt;
        if (ui(t), t < vg) throw new e("integer: negative integers are not allowed");
        let r = Aa(t);
        if (Number.parseInt(r[0], 16) & 8 && (r = "00" + r), r.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return r;
      },
      decode(t) {
        const { Err: e } = Rt;
        if (t.length < 1) throw new e("invalid signature integer: empty");
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t.length > 1 && t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return jr(t);
      }
    },
    toSig(t, e) {
      const { Err: r, _int: a, _tlv: o } = Rt;
      if (e !== void 0 && (oa(e, "maxScalarBytes"), e < 1)) throw new r("invalid signature: maxScalarBytes must be positive");
      const n = We(t, void 0, "signature"), { v: s, l: i } = o.decode(48, n);
      if (i.length) throw new r("invalid signature: left bytes after parsing");
      const { v: l, l: c } = o.decode(2, s), { v: d, l: h } = o.decode(2, c);
      if (h.length) throw new r("invalid signature: left bytes after parsing");
      if (e !== void 0 && (l.length > e || d.length > e)) throw new r("invalid signature: integer too large");
      return {
        r: a.decode(l),
        s: a.decode(d)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: r } = Rt;
      xa(t, {
        r: "bigint",
        s: "bigint"
      }, {}, "sig");
      const a = e.encode(2, r.encode(t.r)), o = e.encode(2, r.encode(t.s)), n = a + o;
      return e.encode(48, n);
    }
  }, nn = (Object.freeze(Rt._tlv), Object.freeze(Rt._int), Object.freeze(Rt));
  const tc = (t, e) => (t + (t >= 0 ? e : -e) / V0) / e;
  function wg(t, e, r) {
    z0("scalar", t, Nt, r);
    const [[a, o], [n, s]] = e, i = tc(s * t, r), l = tc(-o * t, r);
    let c = t - i * a - l * n, d = -i * o - l * s;
    const h = c < Nt, p = d < Nt;
    h && (c = -c), p && (d = -d);
    const g = hi(Math.ceil(fi(r) / 2)) + hr;
    if (c < Nt || c >= g || d < Nt || d >= g) throw new Error("splitScalar (endomorphism): failed for k");
    return {
      k1neg: h,
      k1: c,
      k2neg: p,
      k2: d
    };
  }
  function Tn(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function sn(t, e) {
    xa(t);
    const r = {};
    for (let a of Object.keys(e)) r[a] = t[a] === void 0 ? e[a] : t[a];
    return br(r.lowS, "lowS"), br(r.prehash, "prehash"), r.format !== void 0 && Tn(r.format), r;
  }
  const Nt = BigInt(0), hr = BigInt(1), V0 = BigInt(2), cn = BigInt(3), yg = BigInt(4);
  function Eg(t, e = {}) {
    const r = mg("weierstrass", t, e), a = r.Fp, o = r.Fn;
    let n = r.CURVE;
    const { h: s, n: i } = n;
    xa(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      randomBytes: "function"
    });
    const { endo: l, allowInfinityPoint: c, clearCofactor: d, isTorsionFree: h, fromBytes: p, toBytes: g } = e, m = e.randomBytes === void 0 ? li : e.randomBytes;
    if (l && (!a.is0(n.a) || typeof l.beta != "bigint" || !Array.isArray(l.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const b = l ? {
      beta: l.beta,
      basises: l.basises.map((L) => [
        ...L
      ])
    } : void 0, x = G0(a, o);
    function _() {
      if (!a.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function y(L, E, B) {
      if (E.is0()) {
        if (!c) throw new Error("bad point: ZERO");
        return Uint8Array.of(0);
      }
      const { x: z, y: N } = E.toAffine(), K = a.toBytes(z);
      if (br(B, "isCompressed"), B) {
        _();
        const W = !a.isOdd(N);
        return rr(K0(W), K);
      } else return rr(Uint8Array.of(4), K, a.toBytes(N));
    }
    function w(L) {
      We(L, void 0, "Point");
      const { publicKey: E, publicKeyUncompressed: B } = x, z = L.length, N = L[0], K = L.subarray(1);
      if (c && z === 1 && N === 0) return {
        x: a.ZERO,
        y: a.ZERO
      };
      if (z === E && (N === 2 || N === 3)) {
        const W = a.fromBytes(K);
        if (!a.isValid(W)) throw new Error("bad point: is not on curve, wrong x");
        const X = R(W);
        let $;
        try {
          $ = a.sqrt(X);
        } catch (ye) {
          const ge = ye instanceof Error ? ": " + ye.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + ge);
        }
        _();
        const ie = a.isOdd($);
        return (N & 1) === 1 !== ie && ($ = a.neg($)), {
          x: W,
          y: $
        };
      } else if (z === B && N === 4) {
        const W = a.BYTES, X = a.fromBytes(K.subarray(0, W)), $ = a.fromBytes(K.subarray(W, W * 2));
        if (!j(X, $)) throw new Error("bad point: is not on curve");
        return {
          x: X,
          y: $
        };
      } else throw new Error(`bad point: got length ${z}, expected compressed=${E} or uncompressed=${B}`);
    }
    const k = g === void 0 ? y : g, D = p === void 0 ? w : p, S = a.mul(n.b, cn), F = a.is0(n.a) ? (L) => a.ZERO : (L) => a.mul(n.a, L);
    function R(L) {
      const E = a.sqr(L), B = a.mul(E, L);
      return a.add(a.add(B, a.mul(L, n.a)), n.b);
    }
    function j(L, E) {
      const B = a.sqr(E), z = R(L);
      return a.eql(B, z);
    }
    if (!j(n.Gx, n.Gy)) throw new Error("bad curve params: generator point");
    const C = a.mul(a.pow(n.a, cn), yg), T = a.mul(a.sqr(n.b), BigInt(27));
    if (a.is0(a.add(C, T))) throw new Error("bad curve params: a or b");
    function H(L, E, B = false) {
      if (!a.isValid(E) || B && a.is0(E)) throw new Error(`bad point coordinate ${L}`);
      return typeof E == "object" && E !== null ? a.create(E) : E;
    }
    function U(L) {
      if (!(L instanceof Z)) throw new Error("Weierstrass Point expected");
    }
    function M(L) {
      if (!b || !b.basises) throw new Error("no endo");
      return wg(L, b.basises, o.ORDER);
    }
    function G(L, E, B, z) {
      if (!o.isValid(z)) throw new RangeError("invalid scalar: out of range");
      if (b) {
        const { k1neg: N, k1: K, k2neg: W, k2: X } = M(z), $ = new Z(a.mul(B.X, b.beta), B.Y, B.Z);
        L.push(N ? B.negate() : B, W ? $.negate() : $), E.push(K, X);
      } else L.push(B), E.push(z);
    }
    const J = /* @__PURE__ */ new WeakSet();
    const _Z = class _Z {
      constructor(E, B, z) {
        __publicField(this, "X");
        __publicField(this, "Y");
        __publicField(this, "Z");
        this.X = H("x", E), this.Y = H("y", B, true), this.Z = H("z", z), Object.freeze(this);
      }
      static CURVE() {
        return n;
      }
      static fromAffine(E) {
        const { x: B, y: z } = E || {};
        if (!E || !a.isValid(B) || !a.isValid(z)) throw new Error("invalid affine point");
        if (E instanceof _Z) throw new Error("projective point not allowed");
        return a.is0(B) && a.is0(z) ? _Z.ZERO : new _Z(B, z, a.ONE);
      }
      static fromBytes(E) {
        const B = _Z.fromAffine(D(We(E, void 0, "point")));
        return B.assertValidity(), B;
      }
      static fromHex(E) {
        return _Z.fromBytes(zn(E));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(E = 6, B = true) {
        return O.setWindowSize(this, E), B || this.multiply(cn), this;
      }
      assertValidity() {
        const E = this;
        if (E.is0()) {
          if (c && a.is0(E.X) && a.eql(E.Y, a.ONE) && a.is0(E.Z)) return;
          throw new Error("bad point: ZERO");
        }
        if (J.has(E)) return;
        const { x: B, y: z } = E.toAffine();
        if (!a.isValid(B) || !a.isValid(z)) throw new Error("bad point: x or y not field elements");
        if (!j(B, z)) throw new Error("bad point: equation left != right");
        if (!E.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
        J.add(E);
      }
      hasEvenY() {
        const { y: E } = this.toAffine();
        if (!a.isOdd) throw new Error("Field doesn't support isOdd");
        return !a.isOdd(E);
      }
      equals(E) {
        U(E);
        const { X: B, Y: z, Z: N } = this, { X: K, Y: W, Z: X } = E, $ = a.eql(a.mul(B, X), a.mul(K, N)), ie = a.eql(a.mul(z, X), a.mul(W, N));
        return $ && ie;
      }
      negate() {
        return new _Z(this.X, a.neg(this.Y), this.Z);
      }
      double() {
        const { X: E, Y: B, Z: z } = this;
        let N = a.ZERO, K = a.ZERO, W = a.ZERO, X = a.mul(E, E), $ = a.mul(B, B), ie = a.mul(z, z), oe = a.mul(E, B);
        return oe = a.add(oe, oe), W = a.mul(E, z), W = a.add(W, W), N = F(W), K = a.mul(S, ie), K = a.add(N, K), N = a.sub($, K), K = a.add($, K), K = a.mul(N, K), N = a.mul(oe, N), W = a.mul(S, W), ie = F(ie), oe = a.sub(X, ie), oe = F(oe), oe = a.add(oe, W), W = a.add(X, X), X = a.add(W, X), X = a.add(X, ie), X = a.mul(X, oe), K = a.add(K, X), ie = a.mul(B, z), ie = a.add(ie, ie), X = a.mul(ie, oe), N = a.sub(N, X), W = a.mul(ie, $), W = a.add(W, W), W = a.add(W, W), new _Z(N, K, W);
      }
      add(E) {
        U(E);
        const { X: B, Y: z, Z: N } = this, { X: K, Y: W, Z: X } = E;
        let $ = a.ZERO, ie = a.ZERO, oe = a.ZERO, ye = a.mul(B, K), ge = a.mul(z, W), de = a.mul(N, X), me = a.add(B, z), xe = a.add(K, W);
        me = a.mul(me, xe), xe = a.add(ye, ge), me = a.sub(me, xe), xe = a.add(B, N);
        let be = a.add(K, X);
        return xe = a.mul(xe, be), be = a.add(ye, de), xe = a.sub(xe, be), be = a.add(z, N), $ = a.add(W, X), be = a.mul(be, $), $ = a.add(ge, de), be = a.sub(be, $), oe = F(xe), $ = a.mul(S, de), oe = a.add($, oe), $ = a.sub(ge, oe), oe = a.add(ge, oe), ie = a.mul($, oe), ge = a.add(ye, ye), ge = a.add(ge, ye), de = F(de), xe = a.mul(S, xe), ge = a.add(ge, de), de = a.sub(ye, de), de = F(de), xe = a.add(xe, de), ye = a.mul(ge, xe), ie = a.add(ie, ye), ye = a.mul(be, xe), $ = a.mul(me, $), $ = a.sub($, ye), ye = a.mul(me, ge), oe = a.mul(be, oe), oe = a.add(oe, ye), new _Z($, ie, oe);
      }
      subtract(E) {
        return U(E), this.add(E.negate());
      }
      is0() {
        return this.equals(_Z.ZERO);
      }
      multiply(E) {
        if (!o.isValidNot0(E)) throw new RangeError("invalid scalar: out of range");
        const { p: B, f: z } = O.mulSecret(this, E, s, ae);
        return ae([
          B,
          z
        ])[0];
      }
      multiplyUnsafe(E) {
        const B = this, z = E;
        if (!o.isValid(z)) throw new RangeError("invalid scalar: out of range");
        if (z === Nt || B.is0()) return _Z.ZERO;
        if (z === hr) return B;
        if (O.hasWindowSize(this)) return O.mulUnsafe(B, z, ae);
        const N = [], K = [];
        return G(N, K, B, z), Rn(_Z, N, K);
      }
      mulAddUnsafe(E, B, z) {
        U(B);
        const N = [], K = [];
        return G(N, K, this, E), G(N, K, B, z), Rn(_Z, N, K);
      }
      toAffine(E) {
        const B = this;
        let z = E;
        if (z != null && !a.isValid(z)) throw new RangeError('"invertedZ" expected valid field element');
        const { X: N, Y: K, Z: W } = B;
        if (a.eql(W, a.ONE)) return {
          x: N,
          y: K
        };
        const X = B.is0();
        z == null && (z = X ? a.ONE : a.inv(W));
        const $ = a.mul(N, z), ie = a.mul(K, z), oe = a.mul(W, z);
        if (X) return {
          x: a.ZERO,
          y: a.ZERO
        };
        if (!a.eql(oe, a.ONE)) throw new Error("invZ was invalid");
        return {
          x: $,
          y: ie
        };
      }
      isTorsionFree() {
        return s === hr ? true : h ? h(_Z, this) : O.mulUnsafe(this, i).is0();
      }
      clearCofactor() {
        return s === hr ? this : d ? d(_Z, this) : this.multiplyUnsafe(s);
      }
      isSmallOrder() {
        return s === hr ? this.is0() : this.clearCofactor().is0();
      }
      toBytes(E = true) {
        return br(E, "isCompressed"), this.assertValidity(), k(_Z, this, E);
      }
      toHex(E = true) {
        return C0(this.toBytes(E));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
    };
    __publicField(_Z, "BASE", new _Z(n.Gx, n.Gy, a.ONE));
    __publicField(_Z, "ZERO", new _Z(a.ZERO, a.ONE, a.ZERO));
    __publicField(_Z, "Fp", a);
    __publicField(_Z, "Fn", o);
    let Z = _Z;
    const ae = (L) => sg(Z, L), O = new gg(Z, m);
    return O.bits >= 6 && Z.BASE.precompute(6), Object.freeze(Z.prototype), Object.freeze(Z), Z;
  }
  function K0(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function G0(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function _g(t, e = {}) {
    va(t);
    const { Fn: r } = t, a = e.randomBytes === void 0 ? li : e.randomBytes, o = Object.assign(G0(t.Fp, r), {
      seed: Math.max(vi(r.ORDER), 16)
    });
    function n(g) {
      try {
        const m = r.fromBytes(g);
        return r.isValidNot0(m);
      } catch {
        return false;
      }
    }
    function s(g, m) {
      const { publicKey: b, publicKeyUncompressed: x } = o;
      try {
        const _ = g.length;
        return m === true && _ !== b || m === false && _ !== x ? false : !t.fromBytes(g).is0();
      } catch {
        return false;
      }
    }
    function i(g) {
      return g = g === void 0 ? a(o.seed) : g, q0(We(g, o.seed, "seed"), r.ORDER);
    }
    function l(g, m = true) {
      return t.BASE.multiply(r.fromBytes(g)).toBytes(m);
    }
    function c(g) {
      const { secretKey: m, publicKey: b, publicKeyUncompressed: x } = o, _ = r._lengths;
      if (!fo(g)) return;
      const y = We(g, void 0, "key").length, w = y === b || y === x, k = y === m || !!(_ == null ? void 0 : _.includes(y));
      if (!(w && k)) return w;
    }
    function d(g, m, b = true) {
      if (c(g) === true) throw new Error("first arg must be private key");
      if (c(m) === false) throw new Error("second arg must be public key");
      const x = r.fromBytes(g), _ = t.fromBytes(m);
      if (_.is0()) throw new Error("invalid public key: point at infinity");
      return _.multiply(x).toBytes(b);
    }
    const h = {
      isValidSecretKey: n,
      isValidPublicKey: s,
      randomSecretKey: i
    }, p = xg(i, l);
    return Object.freeze(h), Object.freeze(o), Object.freeze({
      getPublicKey: l,
      getSharedSecret: d,
      keygen: p,
      Point: t,
      utils: h,
      lengths: o
    });
  }
  function Ag(t, e, r = {}) {
    va(t);
    const a = e;
    to(a), xa(r, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const o = Object.assign({}, r), n = o.randomBytes === void 0 ? li : o.randomBytes, s = o.hmac === void 0 ? (L, E) => ho(a, L, E) : o.hmac, { Fp: i, Fn: l } = t, { ORDER: c, BITS: d } = l, h = vi(c), p = $0(n, h), { keygen: g, getPublicKey: m, getSharedSecret: b, utils: x, lengths: _ } = _g(t, o), y = {
      prehash: true,
      lowS: typeof o.lowS == "boolean" ? o.lowS : true,
      format: "compact",
      extraEntropy: false
    }, w = c * V0 + hr < i.ORDER;
    function k(L) {
      const E = c >> hr;
      return L > E;
    }
    function D(L, E) {
      if (!l.isValidNot0(E)) throw new Error(`invalid signature ${L}: out of range 1..Point.Fn.ORDER`);
      return E;
    }
    function S() {
      if (!i.isOdd) throw new Error("Field doesn't support isOdd");
    }
    function F(L, E, B) {
      return S(), (L === B ? 0 : 2) | Number(i.isOdd(E));
    }
    function R() {
      if (w) throw new Error('"recovered" sig type is not supported for cofactor >2 curves');
    }
    function j(L, E) {
      Tn(E);
      const B = _.signature, z = E === "compact" ? B : E === "recovered" ? B + 1 : void 0;
      return We(L, z);
    }
    class C {
      constructor(E, B, z) {
        __publicField(this, "r");
        __publicField(this, "s");
        __publicField(this, "recovery");
        if (this.r = D("r", E), this.s = D("s", B), z != null) {
          if (R(), ![
            0,
            1,
            2,
            3
          ].includes(z)) throw new Error("invalid recovery id");
          this.recovery = z;
        }
        Object.freeze(this);
      }
      static fromBytes(E, B = y.format) {
        j(E, B);
        let z;
        if (B === "der") {
          if (E.length > 2 * l.BYTES + 16) throw new nn.Err("invalid signature: DER signature too long");
          const { r: X, s: $ } = nn.toSig(We(E), l.BYTES + 1);
          return new C(X, $);
        }
        B === "recovered" && (z = E[0], B = "compact", E = E.subarray(1));
        const N = _.signature / 2, K = E.subarray(0, N), W = E.subarray(N, N * 2);
        return new C(l.fromBytes(K), l.fromBytes(W), z);
      }
      static fromHex(E, B) {
        return this.fromBytes(zn(E), B);
      }
      assertRecovery() {
        const { recovery: E } = this;
        if (E == null) throw new Error("invalid recovery id: must be present");
        return E;
      }
      addRecoveryBit(E) {
        return new C(this.r, this.s, E);
      }
      recoverPublicKey(E) {
        const { r: B, s: z } = this, N = this.assertRecovery(), K = N === 2 || N === 3 ? B + c : B;
        if (!i.isValid(K)) throw new Error("invalid recovery id: sig.r+curve.n != R.x");
        const W = i.toBytes(K), X = t.fromBytes(rr(K0((N & 1) === 0), W)), $ = l.inv(K), ie = H(We(E, void 0, "msgHash")), oe = l.create(-ie * $), ye = l.create(z * $), ge = t.BASE.mulAddUnsafe(oe, X, ye);
        if (ge.is0()) throw new Error("invalid recovery: point at infinify");
        return ge.assertValidity(), ge;
      }
      hasHighS() {
        return k(this.s);
      }
      toBytes(E = y.format) {
        if (Tn(E), E === "der") return zn(nn.hexFromSig(this));
        const { r: B, s: z } = this, N = l.toBytes(B), K = l.toBytes(z);
        return E === "recovered" ? (R(), rr(Uint8Array.of(this.assertRecovery()), N, K)) : rr(N, K);
      }
      toHex(E) {
        return C0(this.toBytes(E));
      }
    }
    Object.freeze(C.prototype), Object.freeze(C);
    const T = o.bits2int === void 0 ? function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const B = jr(E), z = E.length * 8 - d;
      return z > 0 ? B >> BigInt(z) : B;
    } : o.bits2int, H = o.bits2int_modN === void 0 ? function(E) {
      return l.create(T(E));
    } : o.bits2int_modN, U = hi(d);
    function M(L) {
      return z0("num < 2^" + d, L, Nt, U), l.toBytes(L);
    }
    function G(L, E) {
      return We(L, void 0, "message"), E ? We(a(L), void 0, "prehashed message") : L;
    }
    function J(L, E, B) {
      const { lowS: z, prehash: N, extraEntropy: K } = sn(B, y);
      L = G(L, N);
      const W = H(L), X = l.fromBytes(E);
      if (!l.isValidNot0(X)) throw new Error("invalid private key");
      const $ = [
        M(X),
        M(W)
      ];
      if (K != null && K !== false) {
        const ge = K === true ? n(_.secretKey) : K;
        $.push(We(ge, void 0, "extraEntropy"));
      }
      const ie = rr(...$), oe = W;
      function ye(ge) {
        const de = T(ge);
        if (!l.isValidNot0(de)) return;
        const me = t.BASE.multiply(de).toAffine(), xe = l.create(me.x);
        if (xe === Nt) return;
        let be;
        if (p !== void 0) {
          const ht = jr(q0(p(h), c)), vt = l.inv(l.mul(ht, de)), Te = l.mul(ht, oe), Be = l.mul(ht, X);
          be = l.create(vt * l.create(Te + Be * xe));
        } else {
          const ht = Qp(de, c);
          be = l.create(ht * l.create(oe + xe * X));
        }
        if (be === Nt) return;
        let ct = F(me.x, me.y, xe), xt = be;
        return z && k(be) && (xt = l.neg(be), ct ^= 1), new C(xe, xt, w ? void 0 : ct);
      }
      return {
        seed: ie,
        k2sig: ye
      };
    }
    function Z(L, E, B = {}) {
      const { seed: z, k2sig: N } = J(L, E, B);
      return Gp(a.outputLen, l.BYTES, s)(z, N).toBytes(B.format);
    }
    function ae(L, E, B, z = {}) {
      const { lowS: N, prehash: K, format: W } = sn(z, y);
      if (B = We(B, void 0, "publicKey"), E = G(E, K), !fo(L)) {
        const X = L instanceof C ? ", use sig.toBytes()" : "";
        throw new Error("verify expects Uint8Array signature" + X);
      }
      j(L, W);
      try {
        const X = C.fromBytes(L, W), $ = t.fromBytes(B);
        if ($.is0() || N && X.hasHighS()) return false;
        const { r: ie, s: oe } = X, ye = H(E), ge = l.inv(oe), de = l.create(ye * ge), me = l.create(ie * ge), xe = t.BASE.mulAddUnsafe(de, $, me);
        if (xe.is0()) return false;
        const be = xe.toAffine();
        return !(l.create(be.x) !== ie || W === "recovered" && X.recovery !== F(be.x, be.y, ie));
      } catch {
        return false;
      }
    }
    function O(L, E, B = {}) {
      const { prehash: z } = sn(B, y);
      return E = G(E, z), C.fromBytes(L, "recovered").recoverPublicKey(E).toBytes();
    }
    return Object.freeze({
      keygen: g,
      getPublicKey: m,
      getSharedSecret: b,
      utils: x,
      lengths: _,
      Point: t,
      sign: Z,
      verify: ae,
      recoverPublicKey: O,
      Signature: C,
      hash: a
    });
  }
  let kg, Bg, Mr, Cg;
  kg = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  };
  Bg = Eg(kg);
  ln = Ag(Bg, Ke);
  Mr = Uint8Array.of(0);
  Cg = Uint8Array.of();
  function Sg(t, e, r, a = 32, o) {
    to(t), Pt(a, "length"), Ut(e, void 0, "prk");
    const n = t.outputLen;
    if (e.length < n) throw new Error('"prk" must be at least HashLen octets');
    if (a > 255 * n) throw new Error("Length must be <= 255*HashLen");
    const s = Math.ceil(a / n);
    if (r === void 0 ? r = Cg : Ut(r, void 0, "info"), !s) return o && fr(e), new Uint8Array();
    const i = o && s === 1 ? e : new Uint8Array(s * n), { iHash: l, oHash: c } = ho.create(t, e), d = o ? e : new Uint8Array(n), h = s > 1 ? (o == null ? void 0 : o.iHash) || t.create() : void 0;
    for (let g = 0; g < s - 1; g++) {
      Mr[0] = g + 1;
      const m = l._cloneInto(h);
      g && m.update(d), m.update(r).update(Mr).digestInto(d), c._cloneInto(h).update(d).digestInto(d), i.set(d, n * g);
    }
    if (Mr[0] = s, s > 1 && l.update(d), l.update(r).update(Mr).digestInto(d), c.update(d).digestInto(d), i.set(d, n * (s - 1)), l.destroy(), c.destroy(), h == null ? void 0 : h.destroy(), d !== i && fr(d), fr(Mr), a === i.length) return i;
    const p = i.slice(0, a);
    return fr(i), p;
  }
  const Dg = (t, e, r, a, o) => {
    to(t), r === void 0 && (r = new Uint8Array(t.outputLen));
    const n = ho.create(t, r).update(e);
    return Sg(t, n.digest(), a, o, n);
  }, Ig = "rgbldkd/auth-keypair", Fg = 32;
  Ar = async function(t) {
    const e = await Sp(t);
    try {
      return zg(new Uint8Array(e), Ig);
    } finally {
      e.fill(0);
    }
  };
  function zg(t, e) {
    const r = new TextEncoder();
    return Dg(Ke, t, void 0, r.encode(e), Fg);
  }
  const Rg = (t) => `cloud-account-identity-v1:${t}`;
  async function Tg() {
    if (await De()) throw new Error("Wallet locked");
    const t = await Y.get("walletPassword");
    if (!t) throw new Error("Wallet locked");
    return t;
  }
  Qt = async function() {
    const t = await ee(), e = await Oe();
    if (e.mode === "self-hosted" || e.cloudAccountIdentityVersion !== 1) return;
    const r = await V.get(Rg(t));
    if (!r) return;
    if (r.version !== 1 || !r.backupConfirmed) throw new Error("Cloud account backup confirmation required");
    const a = await ga(r.ciphertext, await Tg());
    if (!uo(a)) throw new Error("Invalid Cloud account identity");
    return a;
  };
  const ka = () => new Error("Cloud identity changed");
  class Ng {
    constructor() {
      __publicField(this, "digestKey", crypto.getRandomValues(new Uint8Array(32)));
      __publicField(this, "generation", 0);
      __publicField(this, "validations", /* @__PURE__ */ new WeakMap());
    }
    clear() {
      this.generation += 1, this.validations = /* @__PURE__ */ new WeakMap();
    }
    async snapshot(e, r, a) {
      var _a2;
      const [o, n, s, i, l] = await Promise.all([
        ee(),
        Oe(e),
        V.get(te.WALLET_DATA),
        Y.get("walletPassword"),
        V.get(`cloud-account-identity-v1:${e}`)
      ]);
      if (!s || s.isLocked !== false || typeof i != "string" || !i) throw new Error("Wallet locked");
      if (o !== e || s.network !== e) throw ka();
      if (n.mode !== "managed") throw new Error("Managed Cloud account required");
      let c, d = "node";
      if (n.cloudAccountIdentityVersion === 1 && l) {
        if (l.version !== 1 || l.backupConfirmed !== true) throw new Error("Cloud account backup confirmation required");
        d = "account", c = l.ciphertext;
      } else a || (c = ((_a2 = s.encryptedNodeConfigs) == null ? void 0 : _a2[e]) ?? (e === s.network ? s.encryptedNodeConfig : void 0));
      if (typeof c != "string" || !c) throw new Error("Cloud account identity unavailable; explicit recovery required");
      const h = new TextEncoder().encode(JSON.stringify([
        "STASH-CLOUD-IDENTITY-VALIDATION-V1",
        this.generation,
        e,
        d,
        c,
        i,
        r,
        a,
        n
      ]));
      try {
        const p = Array.from(ho(Ke, this.digestKey, h), (g) => g.toString(16).padStart(2, "0")).join("");
        return {
          ciphertext: c,
          source: d,
          fingerprint: p
        };
      } finally {
        h.fill(0);
      }
    }
    async read(e, r, a = false) {
      const o = this.generation, n = await this.snapshot(e, r, a), s = await Y.get("walletPassword");
      if (!s) throw new Error("Wallet locked");
      const i = await ga(n.ciphertext, s), l = n.source === "account" ? i : JSON.parse(i).cloudAccountMnemonic;
      if (!l) throw new Error("Cloud account identity unavailable; explicit recovery required");
      if (!uo(l)) throw new Error("Invalid Cloud account identity");
      const c = await this.snapshot(e, r, a);
      if (o !== this.generation || n.fingerprint !== c.fingerprint) throw ka();
      const d = Object.freeze({});
      return this.validations.set(d, {
        fingerprint: n.fingerprint,
        network: e,
        independentOnly: a,
        generation: o
      }), {
        mnemonic: l,
        validation: d
      };
    }
    async assertCurrent(e, r) {
      const a = this.validations.get(e);
      if (!a || a.generation !== this.generation) throw ka();
      const o = await this.snapshot(a.network, r, a.independentOnly);
      if (a.generation !== this.generation || this.validations.get(e) !== a || a.fingerprint !== o.fingerprint) throw ka();
    }
  }
  function Og(t) {
    if (t.length % 2 !== 0) throw new Error("Invalid hex string");
    const e = new Uint8Array(t.length / 2);
    for (let r = 0; r < t.length; r += 2) e[r / 2] = parseInt(t.slice(r, r + 2), 16);
    return e;
  }
  function Lg(t) {
    return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
  }
  function Pg(...t) {
    const e = t.reduce((o, n) => o + n.length, 0), r = new Uint8Array(e);
    let a = 0;
    for (const o of t) r.set(o, a), a += o.length;
    return r;
  }
  Sm = async function(t, e) {
    const r = Og(t), a = crypto.getRandomValues(new Uint8Array(32));
    xl(a) || crypto.getRandomValues(a);
    const o = zt(a);
    if (!o) throw new Error("Failed to derive ephemeral public key");
    const n = If(r, a);
    if (!n) throw new Error("ECDH failed");
    const s = await crypto.subtle.importKey("raw", await crypto.subtle.digest("SHA-256", n.buffer), {
      name: "AES-GCM"
    }, false, [
      "encrypt"
    ]), i = crypto.getRandomValues(new Uint8Array(12)), l = new TextEncoder(), c = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: i
    }, s, l.encode(e)), d = new Uint8Array(c), h = d.slice(-16), p = d.slice(0, -16), g = Pg(o, i, h, p);
    return btoa(String.fromCharCode(...g));
  };
  function Ug(t) {
    if (t.length !== 64) throw new Error("Invalid compact signature length");
    function e(s) {
      let i = 0;
      for (; i < s.length - 1 && s[i] === 0; ) i++;
      const l = s.slice(i), c = (l[0] & 128) !== 0, d = new Uint8Array(c ? l.length + 1 : l.length);
      return c && (d[0] = 0), d.set(l, c ? 1 : 0), d;
    }
    const r = e(t.slice(0, 32)), a = e(t.slice(32, 64)), o = new Uint8Array(4 + r.length + 2 + a.length);
    let n = 0;
    return o[n++] = 48, o[n++] = 2 + r.length + 2 + a.length, o[n++] = 2, o[n++] = r.length, o.set(r, n), n += r.length, o[n++] = 2, o[n++] = a.length, o.set(a, n), o;
  }
  kr = async function(t, e) {
    const r = Uint8Array.from(atob(t), (s) => s.charCodeAt(0)), a = await crypto.subtle.digest("SHA-256", r), o = new Uint8Array(a), n = vl(o, e);
    if (!n) throw new Error("Signing failed");
    return Lg(Ug(n));
  };
  function sa(t, e) {
    try {
      const { error: r, ...a } = e, o = Object.fromEntries(Object.entries(a).filter(([, n]) => n !== void 0));
      r === void 0 ? console.error(`[api] ${t} failed:`, o) : console.error(`[api] ${t} failed:`, o, r);
    } catch {
    }
  }
  async function rc(t, e) {
    const r = t.headers.get("Content-Length");
    if (r !== null && (!/^\d+$/.test(r) || Number(r) > e)) throw new Error("Archive exceeds size limit");
    if (!t.body) throw new Error("Empty archive body");
    const a = t.body.getReader(), o = [];
    let n = 0;
    try {
      for (; ; ) {
        const { done: l, value: c } = await a.read();
        if (l) break;
        if (n += c.byteLength, n > e) throw await a.cancel(), new Error("Archive exceeds size limit");
        o.push(c);
      }
    } finally {
      a.releaseLock();
    }
    const s = new Uint8Array(n);
    let i = 0;
    for (const l of o) s.set(l, i), i += l.byteLength;
    return s.buffer;
  }
  function jg(t, e) {
    const r = e === "testnet4" ? "testnet" : e;
    if (![
      "regtest",
      "testnet",
      "mainnet"
    ].includes(r) || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(t) || `${t}-${r}`.length > 63) throw new Error("Invalid cloud node domain");
    return `https://${t}-${r}.stashcloud.net`;
  }
  function Vr(t, e, r) {
    const a = jg(e, r);
    if (t.id !== e || t.network !== (r === "testnet4" ? "testnet" : r)) throw new Error("Invalid cloud node");
    if (t.api_base_url === void 0 && t.public_dns === void 0) return a;
    if (t.api_base_url !== a || t.public_dns !== new URL(a).hostname) throw new Error("Invalid cloud node domain");
    return t.api_base_url;
  }
  ot = class extends Error {
    constructor(e, r, a, o) {
      super(r);
      __publicField(this, "status");
      __publicField(this, "code");
      __publicField(this, "request_id");
      this.name = "V3ApiError", this.status = e, this.code = a, this.request_id = o;
    }
  };
  async function Kr(t) {
    var _a2;
    const e = await t.json().catch(() => ({})), r = new ot(t.status, e.message ?? e.error ?? `V3 request failed: HTTP ${t.status}`, e.code, e.request_id ?? ((_a2 = t.headers) == null ? void 0 : _a2.get("X-Request-Id")) ?? void 0);
    return sa("V3", {
      path: Hg(t),
      status: r.status,
      message: e.error && e.message ? `${e.error}: ${e.message}` : r.message,
      code: r.code,
      requestId: r.request_id
    }), r;
  }
  function Hg(t) {
    if (t.url) try {
      const e = new URL(t.url);
      return e.pathname + e.search;
    } catch {
      return;
    }
  }
  class qg {
    constructor(e) {
      __publicField(this, "baseUrl");
      __publicField(this, "jwt");
      __publicField(this, "fetchImpl");
      this.baseUrl = e.baseUrl.replace(/\/+$/, ""), this.jwt = e.jwt, this.fetchImpl = e.fetchImpl ?? fetch;
    }
    async listNodes(e) {
      return (await (await this.request("/v3/console/nodes", {
        network: e
      })).json()).nodes;
    }
    async getNode(e, r) {
      return await (await this.request(`/v3/console/nodes/${encodeURIComponent(e)}`, {
        network: r
      })).json();
    }
    async getNodeMnemonic(e, r, a, o) {
      return (await this.request(`/v3/console/nodes/${encodeURIComponent(e)}/credential`, {
        method: "POST",
        network: r,
        body: JSON.stringify(a),
        requestId: a.request_id,
        signal: o
      })).json();
    }
    async nodeAction(e, r, a) {
      return await (await this.request(`/v3/console/nodes/${encodeURIComponent(e)}/${a}`, {
        method: "POST",
        network: r
      })).json();
    }
    async consoleRequest(e, r, a, o) {
      return await (await this.request(e, {
        network: r,
        signal: o,
        method: a === void 0 ? "GET" : "POST",
        body: a === void 0 ? void 0 : JSON.stringify(a)
      })).json();
    }
    async consoleBinary(e, r, a, o) {
      return (await this.request(e, {
        network: r,
        method: "POST",
        body: JSON.stringify(a),
        signal: o
      })).arrayBuffer();
    }
    async writeNode(e, r, a, o, n) {
      return await (await this.request(e, {
        network: r,
        method: a,
        requestId: o,
        body: n === void 0 ? void 0 : JSON.stringify(n)
      })).json();
    }
    async revokeGrant(e, r = "regtest") {
      await this.request(`/v3/node-access/grants/${encodeURIComponent(e)}`, {
        method: "DELETE",
        network: r
      });
    }
    async listGrants(e = "regtest") {
      return (await (await this.request("/v3/node-access/grants", {
        network: e
      })).json()).grants ?? [];
    }
    async getNodeDomain(e, r) {
      const a = await this.getNode(e, r);
      return {
        node_id: a.id,
        network: r,
        api_base_url: Vr(a, e, r)
      };
    }
    async createExport(e, r) {
      return await (await this.request(`/v3/nodes/${encodeURIComponent(e)}/export`, {
        method: "POST",
        network: r,
        body: JSON.stringify({
          confirm: true
        })
      })).json();
    }
    async getExport(e, r, a) {
      return await (await this.request(`/v3/nodes/${encodeURIComponent(e)}/export`, {
        network: r,
        signal: a
      })).json();
    }
    async downloadExport(e, r, a, o) {
      const n = new URLSearchParams({
        task_id: a
      });
      return (await this.request(`/v3/nodes/${encodeURIComponent(e)}/export/download?${n}`, {
        network: r,
        signal: o
      })).blob();
    }
    async authorizeLsp(e, r, a) {
      return await (await this.request(`/v3/nodes/${encodeURIComponent(e)}/lsp/authorize`, {
        method: "POST",
        network: r,
        body: JSON.stringify({
          expires_at: a
        })
      })).json();
    }
    async revokeLsp(e, r, a) {
      if (!a) throw new Error("LSP authorization ID required");
      await this.request(`/v3/nodes/${encodeURIComponent(e)}/lsp/revoke`, {
        method: "POST",
        network: r,
        body: JSON.stringify({
          authorization_id: a
        })
      });
    }
    buildExportDownloadUrl(e, r, a, o) {
      throw new Error("Export download URL cannot be exposed; use the core download flow");
    }
    async downloadAssetArchive(e, r, a) {
      var _a2;
      const o = await this.request(`/v3/console/nodes/${encodeURIComponent(e)}/assets/${encodeURIComponent(a)}/archive`, {
        network: r
      });
      if (((_a2 = o.headers.get("Content-Type")) == null ? void 0 : _a2.split(";")[0]) !== "application/octet-stream") throw new Error("Invalid asset archive MIME");
      const n = await rc(o, 16 * 1024 * 1024), s = o.headers.get("X-Content-SHA256") ?? "";
      if (!n.byteLength || n.byteLength > 16 * 1024 * 1024 || !/^[0-9a-f]{64}$/.test(s)) throw new Error("Invalid asset archive");
      const i = new Uint8Array(await crypto.subtle.digest("SHA-256", n));
      if (Array.from(i, (l) => l.toString(16).padStart(2, "0")).join("") !== s) throw new Error("Asset archive hash mismatch");
      return {
        data: n,
        sha256: s
      };
    }
    async downloadDeliveryArchive(e, r, a) {
      var _a2;
      const o = await this.request(`/v3/wallet/nodes/${encodeURIComponent(e)}/deliveries/${encodeURIComponent(a)}/archive`, {
        network: r
      });
      if (((_a2 = o.headers.get("Content-Type")) == null ? void 0 : _a2.split(";")[0]) !== "application/octet-stream") throw new Error("Invalid delivery archive MIME");
      const n = await rc(o, 8 * 1024 * 1024), s = o.headers.get("X-Content-SHA256") ?? "";
      if (!n.byteLength || n.byteLength > 8 * 1024 * 1024 || !/^[0-9a-f]{64}$/.test(s)) throw new Error("Invalid delivery archive");
      const i = new Uint8Array(await crypto.subtle.digest("SHA-256", n));
      if (Array.from(i, (l) => l.toString(16).padStart(2, "0")).join("") !== s) throw new Error("Delivery archive hash mismatch");
      return {
        data: n,
        sha256: s
      };
    }
    async request(e, r = {}) {
      if (r.method === "POST" && [
        "/v3/console/nodes",
        "/v3/nodes"
      ].includes(e)) {
        const n = JSON.parse(r.body ?? "{}");
        if (!n || typeof n != "object" || Array.isArray(n) || Object.keys(n).some((s) => s !== "name") || "name" in n && typeof n.name != "string") throw new Error("Node creation accepts name only");
      }
      const a = {
        Accept: "application/json",
        Authorization: `Bearer ${this.jwt}`
      };
      r.network && (a["X-Network"] = r.network === "testnet4" ? "testnet" : r.network), r.method && r.method !== "GET" && (a["request-id"] = r.requestId ?? crypto.randomUUID()), r.body && (a["Content-Type"] = "application/json");
      const o = await this.fetchImpl(`${this.baseUrl}${e}`, {
        method: r.method ?? "GET",
        headers: a,
        body: r.body,
        signal: r.signal,
        credentials: "omit",
        cache: "no-store",
        referrerPolicy: "no-referrer",
        redirect: "error"
      });
      if (!o.ok) throw await Kr(o);
      return o;
    }
  }
  const ac = {
    signature_version: 2,
    client_id: Cr,
    purpose: "login"
  }, wi = [
    "/api/v1/channel/open",
    "/api/v1/channel/close",
    "/api/v1/channel/force_close",
    "/api/v1/peers/connect",
    "/api/v1/peers/disconnect"
  ], yi = [
    "/api/v1/rgb/contracts/export",
    "/api/v1/rgb/contracts/import",
    "/api/v1/rgb/issuers/import",
    "/api/v1/rgb/contracts/issue",
    "/api/v1/rgb/sync",
    "/api/v1/rgb/onchain/send",
    "/api/v1/rgb/ln/pay",
    "/api/v1/rgb/onchain/invoice/create",
    "/api/v1/rgb/ln/invoice/create",
    "/api/v1/rgb/onchain/receive"
  ], Ba = [
    ...wi,
    ...yi
  ];
  let Ca = crypto.randomUUID();
  const Jt = [
    "GET /api/v1/balances",
    "GET /api/v1/readyz",
    "GET /api/v1/node_id",
    "GET /api/v1/channels",
    "GET /api/v1/channels/closing",
    "GET /api/v1/payments",
    "GET /api/v1/rgb/contracts",
    "GET /api/v1/wallet/utxos",
    "GET /api/v1/wallet/utxo/status",
    "GET /api/v1/rgb/utxos",
    "GET /api/v1/rgb/utxos/summary",
    "GET /api/v1/wallet/address/current",
    "GET /api/v1/rgb/address/current",
    "GET /api/v1/rgb/onchain/payments",
    "GET /api/v1/healthz",
    "GET /api/v1/status",
    "GET /api/v1/version",
    "GET /api/v1/listening_addresses",
    "GET /api/v1/peers",
    "GET /api/v1/rgb/issuers",
    "GET /api/v1/swap/list",
    "POST /api/v1/bolt11/decode",
    "POST /api/v1/bolt12/offer/decode",
    "GET /api/v1/rgb/contract/{contract_id}/balance",
    "GET /api/v1/rgb/contract/{contract_id}/known",
    "POST /api/v1/rgb/ln/invoice/decode",
    "POST /api/v1/rgb/onchain/invoice/decode",
    "POST /api/v1/rgb/ln/invoice/estimate_carrier"
  ], un = [
    "POST /api/v1/wallet/address/new",
    "POST /api/v1/bolt11/receive",
    "POST /api/v1/bolt12/offer/receive_var"
  ], $g = /^[0-9a-fA-F]{64}:(?:0|[1-9][0-9]{0,9})$/;
  function Y0(t, e, r, a) {
    const o = [
      ...e
    ];
    if (t.split("?")[0] === "/api/v1/wallet/utxo/status") {
      const [n, s] = o[0] ?? [];
      return r || a || o.length !== 1 || n !== "outpoint" || !$g.test(s ?? "");
    }
    return o.some(([n, s]) => t.startsWith("/api/v1/rgb/consignments/") ? n !== "format" || ![
      "raw",
      "gzip",
      "zip"
    ].includes(s) : r ? ![
      "name",
      "format",
      "contract_id",
      "payment_id"
    ].includes(n) || n === "format" && ![
      "raw",
      "gzip",
      "zip"
    ].includes(s) : n !== "refresh" || s !== "false" && !(a && t === "/api/v1/rgb/utxos?refresh=true"));
  }
  const Re = (t) => Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
  async function Sa(t) {
    if (await De()) throw new Error("Wallet locked");
    const e = await Y.get("walletPassword");
    if (!e) throw new Error("Wallet locked");
    const r = await Oe();
    if (r.mode !== "managed" || r.v3AuthMode === "direct-token" || r.connectionCredentialMode || r.managedWalletId) throw new Error("Explicit managed Cloud account identity required");
    const a = await Qt();
    if (a) return a;
    const o = await at(e, t);
    if (!o.cloudAccountMnemonic) throw new Error("Cloud account identity unavailable; explicit recovery required");
    return o.cloudAccountMnemonic;
  }
  function dn(t, e, r, a, o) {
    if (r === "login" && (dh(t, e), t.client_id !== Cr)) throw new Error("Invalid cloud challenge");
    if (!/^[a-f0-9]{32}$/.test(t.challenge_id) || !/^[a-f0-9]{64}$/.test(t.nonce) || t.network !== o || t.wallet_type !== "stashwallet" || t.origin !== e || !Number.isSafeInteger(t.timestamp) || !Number.isSafeInteger(t.expires_at) || t.timestamp <= 0 || t.expires_at - t.timestamp > 120 || t.expires_at <= t.timestamp || t.purpose !== r || r === "grant" && t.wallet_key !== a) throw new Error("Invalid cloud challenge");
  }
  function fn(t, e) {
    return Re(vl(Ke(new TextEncoder().encode(t)), e));
  }
  Mg = function(t, e) {
    if (!(t instanceof ot)) return e;
    const r = t.code && /^[A-Za-z0-9_-]{1,64}$/.test(t.code) ? ` \xB7 ${t.code}` : "", a = t.request_id && /^[A-Za-z0-9_-]{1,64}$/.test(t.request_id) ? ` \xB7 Request ID: ${t.request_id}` : "";
    return `${e} (HTTP ${t.status}${r}${a})`;
  };
  class X0 {
    constructor(e = rp) {
      __publicField(this, "exportCapability");
      __publicField(this, "visibleStart", false);
      __publicField(this, "visibleStartRequest");
      __publicField(this, "downloadAbort");
      __publicField(this, "exportEpoch", 0);
      __publicField(this, "pollStop");
      __publicField(this, "lifecycleListeners", /* @__PURE__ */ new Set());
      __publicField(this, "lsp");
      __publicField(this, "nodeDomain");
      __publicField(this, "session");
      __publicField(this, "sessionBinding", "");
      __publicField(this, "sessionEpoch", 0);
      __publicField(this, "cacheAuthorityRevision", 0);
      __publicField(this, "nodeAuthFailure");
      __publicField(this, "authenticating");
      __publicField(this, "pendingWrite");
      __publicField(this, "writeInFlight", false);
      __publicField(this, "clientFlight");
      __publicField(this, "identityValidator", new Ng());
      __publicField(this, "clientIdentity");
      __publicField(this, "cacheContextFlights", /* @__PURE__ */ new Map());
      __publicField(this, "fundingFlights", /* @__PURE__ */ new Map());
      __publicField(this, "ownerSelection");
      __publicField(this, "nodeAccess");
      __publicField(this, "controlAccess");
      __publicField(this, "grantGeneration", 0);
      __publicField(this, "grantFlights", /* @__PURE__ */ new Map());
      __publicField(this, "ownerFlights", /* @__PURE__ */ new Map());
      __publicField(this, "nodeDomainFlights", /* @__PURE__ */ new Map());
      __publicField(this, "addressInFlight", false);
      __publicField(this, "ownerWritesInFlight", /* @__PURE__ */ new Set());
      this.fetchImpl = e;
    }
    beginVisibleStart() {
      this.visibleStartRequest || (this.visibleStart = true, this.visibleStartRequest = this.action("start").then((e) => {
        if (![
          "running",
          "starting"
        ].includes(e.status)) throw new Error("Node start not accepted");
      }), this.visibleStartRequest.catch(() => {
      }));
    }
    beginExportVisibleStart() {
      var _a2;
      if (!this.visibleStartRequest) {
        if (!((_a2 = this.exportCapability) == null ? void 0 : _a2.ready) || !this.exportCapability.saved) throw new Error("Save the verified backup before starting the node");
        this.visibleStart = true, this.visibleStartRequest = this.startExportNode().then(() => {
        }), this.visibleStartRequest.catch(() => {
        });
      }
    }
    async waitVisibleStart() {
      const e = this.visibleStartRequest;
      if (e) try {
        await e;
      } finally {
        this.visibleStartRequest === e && (this.visibleStartRequest = void 0, this.cancelExportFlow());
      }
    }
    async exportScope() {
      const e = this.sessionEpoch, r = this.exportEpoch, a = await ee(), { base: o, config: n } = await this.context(a);
      if (!n.v3NodeId || await De()) throw new Error("Unlocked selected cloud node required");
      if (e !== this.sessionEpoch || r !== this.exportEpoch || await ee() !== a) throw new Error("Cloud node changed");
      return {
        base: o,
        nodeId: n.v3NodeId,
        network: a,
        sessionEpoch: e,
        exportEpoch: r
      };
    }
    async validateExportScope(e, r) {
      const a = () => {
        e.exportEpoch === this.exportEpoch && this.cancelExportFlow();
      }, o = await this.exportScope().catch((n) => {
        throw a(), n;
      });
      if ((r == null ? void 0 : r.aborted) || o.base !== e.base || o.nodeId !== e.nodeId || o.network !== e.network || o.sessionEpoch !== e.sessionEpoch || o.exportEpoch !== e.exportEpoch) throw a(), new Error("Cloud node changed");
    }
    cancelExportFlow() {
      var _a2;
      if (this.visibleStartRequest) {
        this.stopExportPolling();
        return;
      }
      this.exportEpoch += 1, this.stopExportPolling(), (_a2 = this.downloadAbort) == null ? void 0 : _a2.abort(), this.downloadAbort = void 0, this.exportCapability = void 0;
    }
    async downloadExport() {
      var _a2;
      if (!A0()) throw new Error("Native export archive saving is unavailable");
      const e = this.exportCapability;
      if (!e || !e.ready || !Number.isSafeInteger(e.size) || e.size <= 0 || !/^[a-f0-9]{64}$/.test(e.sha256 ?? "")) throw new Error("Ready export download capability unavailable");
      await this.validateExportScope(e);
      const { nodeId: r, network: a } = e;
      (_a2 = this.downloadAbort) == null ? void 0 : _a2.abort();
      const o = new AbortController();
      this.downloadAbort = o;
      try {
        const n = await this.client(a);
        await this.validateExportScope(e, o.signal);
        const s = await n.downloadExport(r, a, e.taskId, o.signal);
        if (await this.validateExportScope(e, o.signal), this.exportCapability !== e) throw new Error("Export download cancelled");
        if (s.size !== e.size) throw new Error("Export archive size mismatch");
        if (Re(Ke(new Uint8Array(await s.arrayBuffer()))) !== e.sha256) throw new Error("Export archive checksum mismatch");
        if (await this.validateExportScope(e, o.signal), this.exportCapability !== e) throw new Error("Export download cancelled");
        if (await Mp(s), await this.validateExportScope(e, o.signal), this.exportCapability !== e) throw new Error("Export download cancelled");
        e.saved = true;
      } catch (n) {
        throw this.exportCapability === e && n instanceof ot && [
          404,
          410
        ].includes(n.status) && (this.exportCapability = void 0), n instanceof ot ? n : new Error("Export download failed or cancelled");
      } finally {
        this.downloadAbort === o && (this.downloadAbort = void 0);
      }
    }
    onSessionClear(e) {
      return this.lifecycleListeners.add(e), () => {
        this.lifecycleListeners.delete(e);
      };
    }
    stopExportPolling() {
      var _a2;
      (_a2 = this.pollStop) == null ? void 0 : _a2.call(this), this.pollStop = void 0;
    }
    async lookupPeerAddress(e, r) {
      if (!/^(02|03)[0-9a-f]{64}$/i.test(e)) throw new Error("Invalid peer pubkey");
      const a = await ee(), o = this.sessionEpoch, s = await (await this.client()).consoleRequest(`/v3/console/peers/${e.toLowerCase()}`, a, void 0, r), i = a === "testnet4" ? "testnet" : a;
      if (o !== this.sessionEpoch || await ee() !== a) throw new Error("Cloud session changed");
      if (s.ln_pubkey !== e.toLowerCase() || s.network !== i || typeof s.p2p_host != "string" || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?-(regtest|testnet|mainnet)\.p2p\.stashcloud\.net$/.test(s.p2p_host) || !s.p2p_host.endsWith(`-${i}.p2p.stashcloud.net`) || !Number.isInteger(s.p2p_port) || s.p2p_port < 1e4 || s.p2p_port > 29999 || s.p2p_address !== `${s.p2p_host}:${s.p2p_port}`) throw new Error("Invalid Cloud peer address");
      return s.p2p_address;
    }
    async deliveryScope() {
      const e = await this.selectedNode();
      return await this.client(), `${this.sessionBinding}|${e}`;
    }
    async deliveryRequest(e, r = "", a) {
      if (!(a === void 0 ? r === "" || r === "/sent" || /^\/[A-Za-z0-9_-]{1,64}$/.test(r) : r === "" || /^\/[A-Za-z0-9_-]{1,64}\/(ack|receive-start|receive-unknown)$/.test(r))) throw new Error("Unsupported wallet delivery path");
      if (await this.deliveryScope() !== e) throw new Error("Delivery node changed");
      const n = await this.selectedNode(), s = await this.client();
      if (await this.deliveryScope() !== e) throw new Error("Delivery node changed");
      const i = await ee(), l = await s.consoleRequest(`/v3/wallet/nodes/${encodeURIComponent(n)}/deliveries${r}`, i, a);
      if (await this.deliveryScope() !== e) throw new Error("Delivery node changed");
      return l;
    }
    async deliveryArchive(e, r) {
      if (!/^[A-Za-z0-9_-]{1,64}$/.test(r)) throw new Error("Invalid delivery ID");
      if (await this.deliveryScope() !== e) throw new Error("Delivery node changed");
      const a = await this.selectedNode(), o = await ee(), n = await (await this.client(o)).downloadDeliveryArchive(a, o, r);
      if (await this.deliveryScope() !== e) throw new Error("Delivery node changed");
      return n;
    }
    async selectedNode() {
      const { config: e } = await this.context();
      if (!e.v3NodeId || await De()) throw new Error("Unlocked selected cloud node required");
      return e.v3NodeId;
    }
    async exportStatus(e, r) {
      const a = await ee();
      this.sessionBinding && this.sessionBinding.split("|")[4] !== a && this.clearSession();
      const o = await this.exportScope(), n = await this.client(o.network), s = await this.exportScope();
      if (o.network !== s.network || o.nodeId !== s.nodeId || o.base !== s.base || o.sessionEpoch !== s.sessionEpoch || o.exportEpoch !== s.exportEpoch) throw new Error("Cloud node changed");
      const { nodeId: i, network: l, base: c } = s;
      await this.validateExportScope(s, r);
      const d = e ? await n.createExport(i, l) : await n.getExport(i, l, r);
      await this.validateExportScope(s, r);
      const h = d.task;
      if (!h || !h.task_id || ![
        "pending",
        "locking",
        "quiescing",
        "exporting",
        "uploading",
        "restoring",
        "ready",
        "failed",
        "expired"
      ].includes(h.step) || !Number.isFinite(h.progress) || h.progress < 0 || h.progress > 100 || !Number.isSafeInteger(d.poll_after_ms) || d.poll_after_ms < 0 || d.poll_after_ms > 6e4 || ([
        "ready",
        "failed",
        "expired"
      ].includes(h.step) ? d.poll_after_ms !== 0 : d.poll_after_ms < 1e3)) throw new Error("Invalid export status");
      if (h.step === "ready" && (!Number.isSafeInteger(h.size_bytes) || h.size_bytes <= 0 || typeof h.sha256 != "string" || !/^[a-f0-9]{64}$/.test(h.sha256))) throw this.exportCapability = void 0, new Error("Invalid export archive metadata");
      (e || !this.exportCapability && h.step === "ready") && (this.exportCapability = {
        ...s,
        taskId: h.task_id,
        ready: false
      });
      const p = this.exportCapability;
      p && (p.taskId !== h.task_id || p.nodeId !== i || p.base !== c || p.network !== l || p.sessionEpoch !== s.sessionEpoch || p.exportEpoch !== s.exportEpoch || [
        "failed",
        "expired"
      ].includes(h.step)) ? this.exportCapability = void 0 : p && (p.ready = h.step === "ready", h.step === "ready" && (p.size = h.size_bytes, p.sha256 = h.sha256));
      let g;
      if (typeof h.manifest_json == "string" && h.manifest_json.length <= 65536) try {
        const b = JSON.parse(h.manifest_json);
        if (b && typeof b == "object") {
          const x = b;
          g = {
            network: typeof x.network == "string" && [
              "regtest",
              "testnet",
              "mainnet"
            ].includes(x.network) ? x.network : void 0,
            master_fingerprint: typeof x.master_fingerprint == "string" && /^[a-fA-F0-9]{8}$/.test(x.master_fingerprint) ? x.master_fingerprint : void 0
          };
        }
      } catch {
      }
      const m = (b) => {
        if (typeof b != "string" || b.length > 40 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/.test(b)) return;
        const x = Date.parse(b);
        return Number.isFinite(x) && x > 0 ? new Date(x).toISOString() : void 0;
      };
      return {
        task_id: h.task_id,
        step: h.step,
        progress: h.progress,
        poll_after_ms: d.poll_after_ms,
        size_bytes: h.step === "ready" ? h.size_bytes : void 0,
        sha256: h.step === "ready" ? h.sha256 : void 0,
        node_restored: typeof h.node_restored == "boolean" ? h.node_restored : void 0,
        manifest: g,
        created_at: m(h.created_at),
        completed_at: m(h.completed_at),
        expires_at: typeof d.expires_at == "string" && Number.isFinite(Date.parse(d.expires_at)) ? d.expires_at : void 0,
        error_code: h.error_code && /^[A-Za-z0-9_-]{1,64}$/.test(h.error_code) ? h.error_code : void 0
      };
    }
    async downloadAssetArchive(e) {
      const r = await this.selectedNode(), a = await ee(), o = await (await this.client(a)).downloadAssetArchive(r, a, e);
      if (await this.selectedNode() !== r) throw new Error("Cloud node changed");
      return o.data;
    }
    async createExport() {
      return this.cancelExportFlow(), this.exportStatus(true);
    }
    async getExport() {
      return this.exportStatus(false);
    }
    async exportNodeStatus() {
      const e = await this.exportScope(), r = await this.client(e.network);
      await this.validateExportScope(e);
      const a = await r.getNode(e.nodeId, e.network);
      return await this.validateExportScope(e), {
        status: a.status
      };
    }
    async startExportNode() {
      const e = this.exportCapability;
      if (!(e == null ? void 0 : e.ready) || !e.saved) throw new Error("Save the verified backup before starting the node");
      await this.validateExportScope(e);
      const r = await this.client(e.network);
      await this.validateExportScope(e);
      const a = await r.nodeAction(e.nodeId, e.network, "start");
      if (await this.validateExportScope(e), this.exportCapability !== e) throw new Error("Cloud node changed");
      if (![
        "running",
        "starting"
      ].includes(a.status)) throw new Error("Node start not accepted");
      return this.visibleStart = true, a;
    }
    hasVisibleStart() {
      return this.visibleStart;
    }
    finishVisibleStart() {
      this.visibleStart = false;
    }
    async watchExport(e, r) {
      this.stopExportPolling();
      const a = await ee();
      this.sessionBinding && this.sessionBinding.split("|")[4] !== a && this.clearSession();
      const o = await this.exportScope();
      let n = true, s;
      const i = new AbortController(), l = () => {
        n = false, i.abort(), s && clearTimeout(s);
      };
      this.pollStop = l;
      const c = async () => {
        try {
          if (!n) return;
          await this.validateExportScope(o, i.signal);
          const d = await this.exportStatus(false, i.signal);
          if (!n) return;
          if (await this.validateExportScope(o, i.signal), e(d), [
            "ready",
            "failed",
            "expired"
          ].includes(d.step)) {
            l();
            return;
          }
          s = setTimeout(() => {
            c();
          }, d.poll_after_ms);
        } catch (d) {
          n && (l(), r(d));
        }
      };
      await c();
    }
    async authorizeLsp(e) {
      if (!Number.isFinite(Date.parse(e)) || Date.parse(e) <= Date.now()) throw new Error("Invalid LSP expiry");
      const r = await this.selectedNode(), a = await this.client(), o = this.sessionEpoch, { base: n, network: s } = await this.context(), i = await a.authorizeLsp(r, s, e);
      if (o !== this.sessionEpoch || await this.selectedNode() !== r || (await this.context()).base !== n) throw new Error("Cloud session changed");
      if (!i.authorization_id || !i.protected_until || !Number.isFinite(Date.parse(i.protected_until))) throw new Error("Invalid LSP authorization");
      return this.lsp = {
        nodeId: r,
        authorizationId: i.authorization_id,
        expiresAt: i.protected_until,
        cloudBase: n,
        sessionEpoch: o
      }, {
        protected_until: i.protected_until
      };
    }
    async revokeLsp(e) {
      const r = await this.selectedNode();
      if (e && e !== r) throw new Error("Cloud node changed");
      const a = this.lsp;
      if (!a || a.nodeId !== r) throw new Error("LSP authorization ID unavailable; cannot revoke");
      const o = await this.client();
      if (this.lsp !== a || a.sessionEpoch !== this.sessionEpoch || a.cloudBase !== (await this.context()).base || await this.selectedNode() !== r) throw new Error("Cloud session changed");
      await o.revokeLsp(r, (await this.context()).network, a.authorizationId), this.lsp === a && (this.lsp = void 0);
    }
    async assertNodeAuthentication(e) {
      const { base: r, origin: a, config: o, network: n } = await this.context(), s = JSON.stringify([
        r,
        a,
        n,
        e,
        o.connectionCredentialMode
      ]);
      if (this.nodeAuthFailure && this.nodeAuthFailure.scope !== s && (this.nodeAuthFailure = void 0, this.invalidateReadCache()), this.nodeAuthFailure) throw new ot(this.nodeAuthFailure.status, "Node authentication rejected; reselect the node to retry", "NODE_AUTH_REJECTED");
      return s;
    }
    rejectNodeAuthentication(e, r) {
      var _a2;
      if (((_a2 = this.nodeAuthFailure) == null ? void 0 : _a2.scope) !== e) {
        this.nodeAuthFailure = {
          scope: e,
          status: r
        }, this.clearNodeGrants(), this.ownerSelection = void 0, this.ownerFlights.clear(), this.cacheContextFlights.clear(), this.invalidateReadCache(), $a();
        for (const a of this.lifecycleListeners) a();
      }
    }
    async context(e) {
      const r = await ee();
      if (e !== void 0 && r !== e) throw new Error("Cloud session changed");
      const a = await Oe(r);
      if (a.connectionCredentialMode === "adopted-pbkdf2" || a.managedWalletId && !a.v3AuthMode) throw new Error("Legacy Cloud migration is disabled");
      if (a.v3AuthMode === "direct-token") throw new Error("Manage this node with the Cloud API key outside the wallet");
      if (a.mode !== "managed" || !a.nodeManagerUrl) throw new Error("Managed cloud URL unavailable");
      const o = Tl(a.nodeManagerUrl);
      if (a.v3NodeId && !/^[a-z0-9][a-z0-9-]{0,63}$/.test(a.v3NodeId)) throw new Error("Invalid cloud node ID");
      const n = Lp();
      if (await ee() !== r) throw new Error("Cloud session changed");
      return {
        config: a,
        base: o,
        origin: n,
        network: r
      };
    }
    async json(e, r, a) {
      const o = await this.fetchImpl(e, {
        method: "POST",
        redirect: "error",
        headers: {
          "Content-Type": "application/json",
          Origin: a,
          "X-Client-ID": Cr
        },
        body: JSON.stringify(r)
      });
      if (!o.ok) throw await Kr(o);
      return await o.json();
    }
    async assertIdentityCurrent(e = ((_a2) => (_a2 = this.clientIdentity) == null ? void 0 : _a2.validation)(), r = ((_b) => (_b = this.clientIdentity) == null ? void 0 : _b.validationBinding)()) {
      if (!e || !r || !r.endsWith(`|${this.sessionEpoch}`)) throw new Error("Cloud session changed");
      const a = this.sessionEpoch;
      try {
        const o = await Oe();
        if (o.mode !== "managed" || o.v3AuthMode === "direct-token" || o.connectionCredentialMode || o.managedWalletId) throw new Error("Explicit managed Cloud account identity required");
        await this.identityValidator.assertCurrent(e, r);
      } catch (o) {
        throw a === this.sessionEpoch && this.clearSession(), o instanceof Error && o.message === "Cloud identity changed" ? new Error("Cloud session changed") : o;
      }
    }
    client(e) {
      if (this.clientFlight) return this.clientFlight;
      const r = this.initializeClient(e).finally(() => {
        this.clientFlight === r && (this.clientFlight = void 0);
      });
      return this.clientFlight = r, r;
    }
    async initializeClient(e) {
      var _a2;
      const r = e ?? await ee(), a = r === "testnet4" ? "testnet" : r, o = this.sessionEpoch, { base: n, origin: s, config: i } = await this.context(r);
      if (i.connectionCredentialMode || i.managedWalletId) throw new Error("Explicit managed Cloud account identity required");
      if (o !== this.sessionEpoch) throw new Error("Cloud session changed");
      const l = `${n}|${s}|${Cr}|2|${r}|`;
      this.sessionBinding && !this.sessionBinding.startsWith(l) && this.clearSession();
      const c = this.sessionEpoch, d = `${l}${c}`, h = this.clientIdentity, p = h && this.sessionBinding.startsWith(l) && this.session && (this.session.expires_at > Math.floor(Date.now() / 1e3) + 30 || this.session.refresh_token);
      let g = new Uint8Array(), m, b;
      if (p) await this.assertIdentityCurrent(h.validation, d), m = h.validation, b = h.publicKey;
      else {
        const w = await this.identityValidator.read(r, d).catch((k) => {
          throw c === this.sessionEpoch && this.clearSession(), k;
        });
        m = w.validation, g = await Ar(w.mnemonic), b = Re(zt(g));
      }
      if (c !== this.sessionEpoch) throw g.fill(0), new Error("Cloud session changed");
      const x = `${l}${b}`;
      if (this.sessionBinding && x !== this.sessionBinding) throw g.fill(0), this.clearSession(), new Error("Cloud session changed");
      this.sessionBinding = x;
      const _ = async () => {
        if (c !== this.sessionEpoch || x !== this.sessionBinding) throw new Error("Cloud session changed");
        await this.assertIdentityCurrent(m, d);
        const w = await this.context(r);
        if (c !== this.sessionEpoch || x !== this.sessionBinding || w.base !== n || w.origin !== s) throw new Error("Cloud session changed");
      }, y = async () => {
        var _a3;
        if (this.session && this.session.expires_at > Math.floor(Date.now() / 1e3) + 30) return this.session;
        if ((_a3 = this.session) == null ? void 0 : _a3.refresh_token) try {
          return await this.json(`${n}/v3/auth/refresh`, {
            refresh_token: this.session.refresh_token
          }, s);
        } catch (w) {
          throw this.clearSession(), w;
        }
        return this.login(n, s, g, a);
      };
      try {
        this.authenticating || (this.authenticating = y());
        const w = await this.authenticating;
        if (!w.access_token || !Number.isSafeInteger(w.expires_at) || w.expires_at <= Math.floor(Date.now() / 1e3)) throw new Error("Invalid cloud session");
        await _(), ((_a2 = this.session) == null ? void 0 : _a2.access_token) !== w.access_token && this.invalidateReadCache(), this.session = w, this.clientIdentity = {
          publicKey: b,
          validation: m,
          validationBinding: d
        };
        const k = async (D, S) => {
          await _();
          const F = await this.fetchImpl(D, {
            ...S,
            redirect: "error",
            headers: {
              ...S == null ? void 0 : S.headers,
              Origin: s,
              "X-Client-ID": Cr
            }
          });
          return [
            401,
            403
          ].includes(F.status) ? this.clearSession() : await _(), F;
        };
        return new qg({
          baseUrl: n,
          jwt: w.access_token,
          fetchImpl: k
        });
      } finally {
        c === this.sessionEpoch && (this.authenticating = void 0), g.fill(0);
      }
    }
    async login(e, r, a, o) {
      const n = await this.json(`${e}/v3/auth/challenge`, {
        wallet_type: "stashwallet",
        network: o,
        ...ac
      }, r);
      return dn(n, r, "login", void 0, o), await this.json(`${e}/v3/auth/wallet-login`, {
        challenge_id: n.challenge_id,
        nonce: n.nonce,
        wallet_type: "stashwallet",
        network: o,
        public_key: Re(zt(a)),
        ...ac,
        signature: fn(El(n), a)
      }, r);
    }
    invalidateReadCache() {
      this.cacheAuthorityRevision += 1, Gc();
    }
    readCacheContext(e) {
      const r = this.cacheContextFlights.get(e);
      if (r) return r;
      const a = this.sessionEpoch, o = this.validateReadCacheContext(e).then((n) => {
        if (a !== this.sessionEpoch) throw new Error("Cloud session changed");
        return n;
      }).finally(() => {
        this.cacheContextFlights.get(e) === o && this.cacheContextFlights.delete(e);
      });
      return this.cacheContextFlights.set(e, o), o;
    }
    async validateReadCacheContext(e) {
      var _a2;
      try {
        const r = await this.selectedNode();
        await this.ensureOwnerAccess(r);
        const a = this.sessionEpoch, o = this.cacheAuthorityRevision, n = this.sessionBinding, s = await this.nodeBaseUrl(), { config: i, base: l, network: c } = await this.context();
        if (e !== `${s}|${c}`) throw new Error("Cloud cache scope mismatch");
        const d = this.clientIdentity, h = n.split("|").slice(-1)[0], [p, g, , m, b] = await Promise.all([
          this.selectedNode(),
          this.context(),
          this.assertIdentityCurrent(d.validation, d.validationBinding),
          ee(),
          De()
        ]);
        if (a !== this.sessionEpoch || o !== this.cacheAuthorityRevision || n !== this.sessionBinding || p !== r || g.base !== l || m !== c || b || !this.session || this.session.expires_at * 1e3 <= Date.now()) throw new Error("Cloud session changed");
        return await this.assertNodeAuthentication(r), {
          binding: `${n}|${r}|${a}|${o}|owner|${h}`,
          expiresAt: Math.min(this.session.expires_at * 1e3, ((_a2 = this.nodeAccess) == null ? void 0 : _a2.expires) ?? Date.now())
        };
      } catch (r) {
        throw this.invalidateReadCache(), r;
      }
    }
    clearSession(e = false) {
      this.identityValidator.clear(), Ca = crypto.randomUUID(), e || $a(), this.clientFlight = void 0, this.cacheContextFlights.clear(), this.ownerFlights.clear(), this.fundingFlights.clear(), this.invalidateReadCache(), this.visibleStart = false, this.visibleStartRequest = void 0, this.cancelExportFlow(), this.lsp = void 0, this.ownerSelection = void 0, this.nodeAuthFailure = void 0, this.nodeDomain = void 0;
      for (const r of this.lifecycleListeners) r();
      this.sessionEpoch += 1, this.authenticating = void 0, this.session = void 0, this.clearNodeGrants(), this.clientIdentity = void 0, this.nodeDomainFlights.clear(), this.sessionBinding = "";
    }
    async logout() {
      const { base: e, origin: r, config: a } = await this.context(), o = this.session;
      if (this.clearSession(), a.v3NodeId && (await Y.remove(`v3-access:${a.v3NodeId}`), await Y.remove(`v3-address-access:${a.v3NodeId}`)), !o) return;
      const n = await this.fetchImpl(`${e}/v3/auth/logout`, {
        method: "POST",
        redirect: "error",
        headers: {
          Authorization: `Bearer ${o.access_token}`,
          Origin: r,
          "X-Client-ID": Cr,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          refresh_token: o.refresh_token
        })
      });
      if (!n.ok) throw await Kr(n);
    }
    async write(e, r, a) {
      const { base: o, origin: n, network: s } = await this.context(), i = await this.client(s), l = `${o}|${n}|${this.sessionBinding}`;
      this.pendingWrite ?? (this.pendingWrite = await Y.get("v3-pending-write") ?? void 0);
      const c = this.pendingWrite, d = Re(Ke(new TextEncoder().encode(JSON.stringify(a) ?? "")));
      if (c && (c.binding !== l || c.path !== e || c.method !== r || c.bodyHash !== d)) throw new Error("Resolve pending cloud write before another write");
      if (this.writeInFlight) throw new Error("Cloud write already in progress");
      this.writeInFlight = true;
      const h = e === "/v3/console/nodes" && r === "POST" ? a.name : void 0, p = c ?? {
        path: e,
        method: r,
        bodyHash: d,
        createName: h,
        binding: l,
        requestId: crypto.randomUUID()
      };
      this.pendingWrite = p;
      try {
        await Y.set("v3-pending-write", p);
        const g = await i.writeNode(e, s, r, p.requestId, a);
        return this.pendingWrite = void 0, await Y.remove("v3-pending-write"), g;
      } catch (g) {
        throw g instanceof ot && g.status < 500 && g.status !== 409 && (this.pendingWrite = void 0, await Y.remove("v3-pending-write")), g;
      } finally {
        this.writeInFlight = false;
      }
    }
    async retryPending() {
      if (this.pendingWrite ?? (this.pendingWrite = await Y.get("v3-pending-write") ?? void 0), !this.pendingWrite) throw new Error("No pending cloud write");
      const { path: e, method: r, createName: a } = this.pendingWrite;
      if (e === "/v3/console/nodes" && r === "POST" && a) return this.write(e, r, {
        name: a
      });
      if (r === "DELETE") {
        await this.deleteNode(decodeURIComponent(e.split("/").pop()));
        return;
      }
      return this.write(e, r);
    }
    async deliverNodeMnemonic(e, r) {
      var _a2;
      try {
        const a = this.sessionEpoch, o = await this.context(), { network: n } = o, s = o.config.v3NodeId;
        if (o.config.connectionCredentialMode === "adopted-pbkdf2") throw new Error("Node seed backup unavailable; use the independent Cloud account backup");
        if (!s || e && e !== s || (r == null ? void 0 : r.aborted)) throw new Error();
        const i = n === "testnet4" ? "testnet" : n, l = JSON.stringify(o.config), c = await Sa(n), d = async () => {
          const x = await this.context();
          if (JSON.stringify(x.config) !== l || x.base !== o.base || x.origin !== o.origin || await Sa(n) !== c || await De() || await ee() !== n || a !== this.sessionEpoch || (r == null ? void 0 : r.aborted)) throw new Error();
        }, h = await this.client();
        await d();
        const p = await Np(s, i, async (x) => {
          await d();
          const _ = await Ar(c);
          let y;
          try {
            const w = Re(zt(_, true)), k = await h.consoleRequest("/v3/node-access/challenge", n, {
              wallet_type: "stashwallet",
              grantor_public_key: w
            });
            if (dn(k, o.origin, "grant", w, i), !k.sid || !k.user_id) throw new Error("Session-bound credential challenge unavailable");
            const D = `/v3/console/nodes/${s}/credential`, S = Re(Ke(new TextEncoder().encode([
              "STASH-CREDENTIAL-V1",
              k.sid,
              k.user_id,
              i,
              D,
              x.request_id,
              x.recipient_public_key
            ].join("|")))), F = new Date(k.expires_at * 1e3).toISOString().replace(".000Z", "Z"), R = [
              "STASH-NODE-GRANT-V1",
              k.challenge_id,
              k.nonce,
              i,
              s,
              `POST ${D}`,
              F,
              x.recipient_public_key,
              S
            ].join("|");
            await d(), y = await h.consoleRequest(D, n, {
              ...x,
              challenge_id: k.challenge_id,
              challenge_nonce: k.nonce,
              grantor_public_key: w,
              signature: fn(R, _)
            });
          } finally {
            _.fill(0);
          }
          return await d(), y;
        }, r);
        await d();
        const g = await Y.get("walletPassword");
        if (!g) throw new Error("Wallet locked");
        const b = (_a2 = (await at(g, n)).cloudNodeMnemonics) == null ? void 0 : _a2[s];
        if (b && b !== p) throw new Error("Cloud node seed mismatch");
        return p;
      } catch {
        throw new Error("Encrypted mnemonic delivery failed or cancelled");
      }
    }
    async fundingIdentity() {
      var _a2;
      const e = this.sessionEpoch, r = await this.context(), { network: a } = r, o = await this.selectedNode(), n = await Y.get("walletPassword");
      if (!n) throw new Error("Wallet locked");
      const s = await at(n, a), i = await Sa(a), l = JSON.stringify(r.config), c = async () => {
        const m = await this.context();
        if (e !== this.sessionEpoch || JSON.stringify(m.config) !== l || m.network !== a || m.base !== r.base || m.origin !== r.origin || await this.selectedNode() !== o || await Sa(a) !== i || await Y.get("walletPassword") !== n || await De()) throw new Error("Cloud node changed");
      };
      await c();
      const d = (_a2 = s.cloudNodeMnemonics) == null ? void 0 : _a2[o];
      if (d) return d;
      const h = JSON.stringify([
        e,
        a,
        r.base,
        r.origin,
        o,
        l
      ]), p = this.fundingFlights.get(h);
      if (p) return p.then(async (m) => (await c(), m));
      const g = (async () => {
        var _a3;
        const m = await this.deliverNodeMnemonic(o);
        await c();
        const b = await at(n, a);
        if (await c(), ((_a3 = b.cloudNodeMnemonics) == null ? void 0 : _a3[o]) && b.cloudNodeMnemonics[o] !== m) throw new Error("Cloud node seed mismatch");
        return await oi({
          ...b,
          cloudNodeMnemonics: {
            ...b.cloudNodeMnemonics,
            [o]: m
          }
        }, n, a), await c(), m;
      })().finally(() => {
        this.fundingFlights.get(h) === g && this.fundingFlights.delete(h);
      });
      return this.fundingFlights.set(h, g), g;
    }
    async createNode(e) {
      if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(e)) throw new Error("Invalid node name");
      if (this.pendingWrite ?? (this.pendingWrite = await Y.get("v3-pending-write") ?? void 0), !this.pendingWrite && (await this.listNodes()).length) throw new Error("CLOUD_SINGLE_SEED_NODE_LIMIT: select the existing wallet node");
      return this.write("/v3/console/nodes", "POST", {
        name: e
      });
    }
    async deleteNode(e) {
      this.invalidateReadCache(), this.cancelExportFlow(), await this.write(`/v3/console/nodes/${encodeURIComponent(e)}`, "DELETE");
      const { config: r } = await this.context();
      if (r.v3NodeId === e) {
        const a = {
          ...r
        };
        delete a.v3NodeId, await Yr(a);
      }
      await Y.remove(`v3-access:${e}`), await Y.remove(`v3-address-access:${e}`);
    }
    async grantAuthority(e) {
      const r = await ee(), a = await this.client(r), o = await a.consoleRequest("/v3/auth/me", r), n = await a.consoleRequest(`/v3/node-access/catalog?node_id=${encodeURIComponent(e)}`, r);
      if (!o.id || !n.version || !Array.isArray(n.entries)) throw new Error("GRANT_AUTHORITY_UNAVAILABLE");
      return {
        user_id: o.id,
        catalog: n
      };
    }
    async listGrants() {
      const e = await ee();
      return (await this.client(e)).listGrants(e);
    }
    async revokeGrant(e, r) {
      this.invalidateReadCache(), this.clearNodeGrants();
      const a = await ee();
      await (await this.client(a)).revokeGrant(e, a), this.invalidateReadCache(), await Y.remove(`v3-access:${r}`), await Y.remove(`v3-address-access:${r}`);
    }
    async legacyMigrationStatus() {
      return this.legacyProofOperation("/status", "stash-legacy-status-v1");
    }
    async legacyIdleProtection(e) {
      if (!Number.isSafeInteger(e) || e < 0 || e !== 0 && e <= Math.floor(Date.now() / 1e3)) throw new Error("Invalid legacy protection expiry");
      return this.legacyProofOperation("/protection", "stash-legacy-protection-v1", e);
    }
    async legacyExportRead(e, r = "status", a) {
      if (!e || (a == null ? void 0 : a.aborted)) throw new Error("Historical export task required");
      const o = await this.context(), { network: n } = o;
      if (n !== "regtest") throw new Error("Legacy Cloud migration supports regtest only");
      const s = await Qt(), i = await Y.get("walletPassword");
      if (!s || !i || !o.config.managedWalletId || o.config.v3NodeId) throw new Error("Confirmed unadopted identity required");
      const l = await at(i, n), c = await Ra(l.keystorePassphrase), d = await Ar(s);
      try {
        const h = await this.client(), p = Re(zt(d, true)), g = {
          legacy_id: o.config.managedWalletId,
          session_public_key: p,
          task_id: e,
          action: r
        }, m = await h.consoleRequest("/v3/console/legacy-resources/export-challenge", "regtest", g), b = JSON.parse(atob(m.message)), x = Date.parse(m.expires_at);
        if (b.Purpose !== "stash-legacy-export-read-v1" || b.Action !== r || b.Task !== e || b.Legacy !== g.legacy_id || b.Owner !== c.pubkeyHex || b.Key !== p || b.Network !== "regtest" || b.Nonce !== m.nonce || b.Expiry !== Math.floor(x / 1e3) || x <= Date.now() || x > Date.now() + 12e4) throw new Error("Invalid historical export proof");
        if ((a == null ? void 0 : a.aborted) || await De() || await ee() !== "regtest" || await Qt() !== s || JSON.stringify((await this.context()).config) !== JSON.stringify(o.config)) throw new Error("Historical export cancelled");
        const _ = {
          ...g,
          challenge_id: m.challenge_id,
          legacy_signature: await kr(m.message, c.privkeyBytes),
          session_signature: await kr(m.message, d)
        };
        return r === "status" ? h.consoleRequest("/v3/console/legacy-resources/export-status", "regtest", _) : h.consoleBinary("/v3/console/legacy-resources/export-download", "regtest", _, a);
      } finally {
        c.privkeyBytes.fill(0), d.fill(0);
      }
    }
    async legacyLifecycle(e) {
      return this.legacyProofOperation("/lifecycle", "stash-legacy-lifecycle-v1", void 0, e);
    }
    async legacyProofOperation(e, r, a, o) {
      const n = await this.context(), { network: s } = n;
      if (s !== "regtest") throw new Error("Legacy Cloud migration supports regtest only");
      const i = n.config.managedWalletId;
      if (!i || n.config.v3NodeId) throw new Error("Unadopted legacy node required");
      const l = await Qt(), c = await Y.get("walletPassword");
      if (!l || !c) throw new Error("Confirmed Cloud identity required");
      const d = await at(c, s), h = await Ra(d.keystorePassphrase), p = await Ar(l);
      try {
        const g = await this.client(), m = Re(zt(p, true)), b = {
          legacy_id: i,
          session_public_key: m,
          ...a === void 0 ? {} : {
            protection_expiry: a
          },
          ...o ? {
            action: o
          } : {}
        }, x = await g.consoleRequest(`/v3/console/legacy-resources${e}-challenge`, "regtest", b), _ = JSON.parse(atob(x.message)), y = Date.parse(x.expires_at);
        if (_.Purpose !== r || o !== void 0 && _.Action !== o || a !== void 0 && _.ProtectionExpiry !== a || _.Legacy !== i || _.Key !== m || _.Owner !== h.pubkeyHex || _.Network !== "regtest" || _.Nonce !== x.nonce || _.Expiry !== Math.floor(y / 1e3) || y <= Date.now() || y > Date.now() + 12e4) throw new Error("Invalid legacy status proof");
        if (await De() || await ee() !== "regtest" || await Qt() !== l || JSON.stringify((await this.context()).config) !== JSON.stringify(n.config)) throw new Error("Migration identity changed");
        return await g.consoleRequest(`/v3/console/legacy-resources${e}`, "regtest", {
          ...b,
          challenge_id: x.challenge_id,
          legacy_signature: await kr(x.message, h.privkeyBytes),
          session_signature: await kr(x.message, p)
        });
      } finally {
        p.fill(0), h.privkeyBytes.fill(0);
      }
    }
    async adoptLegacyNode(e = false) {
      const r = await this.context(), { network: a } = r;
      if (a !== "regtest") throw new Error("Legacy Cloud migration supports regtest only");
      const o = r.config.managedWalletId;
      if (!o || !/^[a-f0-9]{32}$/.test(o)) throw new Error("Legacy wallet identity unavailable");
      const n = await Qt();
      if (!n) throw new Error("Confirmed Cloud account backup required");
      const s = await Y.get("walletPassword");
      if (!s) throw new Error("Wallet locked");
      const i = await at(s, a);
      if (!i.httpToken || !i.keystorePassphrase || i.nodeMnemonic) throw new Error("Legacy PBKDF2 credentials required");
      const l = await Ar(n), c = await Ra(i.keystorePassphrase), d = Re(zt(l)), h = {
        base: r.base,
        legacyId: o,
        publicKey: d,
        network: "regtest"
      }, p = "v3-legacy-adoption:regtest", g = await V.get(p);
      if (g && JSON.stringify({
        base: g.base,
        legacyId: g.legacyId,
        publicKey: g.publicKey,
        network: g.network
      }) !== JSON.stringify(h)) throw new Error("Migration journal identity mismatch");
      const m = async () => {
        const b = await this.context();
        if (await ee() !== "regtest" || await De() || b.base !== r.base || b.config.managedWalletId !== o || await Qt() !== n) throw new Error("Migration identity changed");
      };
      try {
        const b = await this.client();
        await m(), g || await V.set(p, h);
        const x = {
          legacy_id: o,
          session_public_key: d
        };
        let _;
        if (e || (g == null ? void 0 : g.nodeId)) _ = await b.consoleRequest("/v3/console/legacy-adoption/recover", "regtest", x);
        else {
          const y = await b.consoleRequest("/v3/console/legacy-adoption/challenge", "regtest", x);
          await m();
          const w = JSON.parse(atob(y.message)), k = Date.parse(y.expires_at);
          if (!/^[a-f0-9]{32}$/.test(y.challenge_id) || !/^[a-f0-9]{64}$/.test(y.nonce) || w.Purpose !== "stash-legacy-adoption-v1" || w.Key !== d || w.Network !== "regtest" || w.Legacy !== o || w.Owner !== c.pubkeyHex || w.Nonce !== y.nonce || w.Expiry !== Math.floor(k / 1e3) || k <= Date.now() || k > Date.now() + 12e4) throw new Error("Invalid migration challenge");
          const D = await kr(y.message, c.privkeyBytes), S = await kr(y.message, l);
          await m(), _ = await b.consoleRequest("/v3/console/legacy-adoption", "regtest", {
            ...x,
            challenge_id: y.challenge_id,
            legacy_signature: D,
            session_signature: S
          });
        }
        return await m(), Vr(_, _.id, "regtest"), await V.set(p, {
          ...h,
          nodeId: _.id
        }), await Yr({
          ...r.config,
          cloudVersion: 3,
          connectionCredentialMode: "adopted-pbkdf2",
          v3NodeId: _.id
        }), this.clearSession(), _;
      } finally {
        l.fill(0), c.privkeyBytes.fill(0);
      }
    }
    async listNodes() {
      const e = await ee(), r = await (await this.client(e)).listNodes(e);
      for (const a of r) Vr(a, a.id, e);
      return r;
    }
    async selectNode(e) {
      this.nodeDomain = void 0, this.cancelExportFlow(), this.lsp = void 0;
      const r = await ee(), a = await this.client(r), o = this.sessionEpoch, n = await a.getNode(e, r);
      if (o !== this.sessionEpoch || await De() || await ee() !== r) throw new Error("Cloud session changed");
      const s = Vr(n, e, r), { config: i } = await this.context(), l = {
        ...i,
        cloudVersion: 3,
        v3NodeId: n.id
      };
      if (delete l.v3AuthMode, i.v3NodeId && (await Y.remove(`v3-access:${i.v3NodeId}`), await Y.remove(`v3-address-access:${i.v3NodeId}`)), await Y.remove(`v3-access:${n.id}`), await Y.remove(`v3-address-access:${n.id}`), await fa(), o !== this.sessionEpoch || await ee() !== r) throw new Error("Cloud session changed");
      await Yr(l, r), this.identityValidator.clear(), this.clientIdentity = void 0, this.clearNodeGrants(), this.sessionEpoch += 1, this.nodeAuthFailure = void 0, this.ownerSelection = void 0, this.ownerFlights.clear(), this.fundingFlights.clear(), this.cacheContextFlights.clear(), this.clientFlight = void 0, this.invalidateReadCache(), this.nodeDomain = {
        cloudBase: (await this.context()).base,
        nodeId: e,
        apiBase: s
      };
      for (const c of this.lifecycleListeners) c();
    }
    async status() {
      const { config: e, network: r } = await this.context();
      if (!e.v3NodeId) throw new Error("Select a v3 node first");
      return (await this.client(r)).getNode(e.v3NodeId, r);
    }
    async action(e) {
      const { config: r } = await this.context();
      if (!r.v3NodeId) throw new Error("Select a v3 node first");
      return await this.write(`/v3/console/nodes/${encodeURIComponent(r.v3NodeId)}/${e}`, "POST");
    }
    clearNodeGrants() {
      var _a2, _b;
      this.grantGeneration += 1, this.grantFlights.clear(), (_a2 = this.nodeAccess) == null ? void 0 : _a2.key.fill(0), this.nodeAccess = void 0, (_b = this.controlAccess) == null ? void 0 : _b.key.fill(0), this.controlAccess = void 0;
    }
    async nodeProof(e, r, a, o, n) {
      const s = await ee(), i = s === "testnet4" ? "testnet" : s, l = await this.selectedNode(), c = await this.client(s), d = this.sessionEpoch, h = `${this.sessionBinding}|${l}|${d}`, p = Re(Ke(a)), g = o === "GET /control/status";
      if (!n && !g && !Jt.includes(o)) throw new Error("Unsupported read grant");
      const m = this.grantGeneration, b = g ? this.controlAccess : this.nodeAccess, x = `${h}|${m}|${g ? "control-status" : "wallet-reads"}`, _ = this.clientIdentity, y = async () => {
        var _a2, _b;
        await this.assertIdentityCurrent(_.validation, _.validationBinding);
        const D = await this.identityValidator.read(s, _.validationBinding), S = await Ar(D.mnemonic), F = ln.utils.randomSecretKey();
        try {
          await this.assertIdentityCurrent(_.validation, _.validationBinding);
          const R = Re(zt(S, true)), j = await c.consoleRequest("/v3/node-access/challenge", s, {
            wallet_type: "stashwallet",
            grantor_public_key: R
          });
          dn(j, (await this.context(s)).origin, "grant", R, i);
          const C = new Date((j.timestamp + 120) * 1e3).toISOString().replace(".000Z", "Z"), T = n || g ? [
            o
          ] : [
            ...Jt
          ].sort(), [H, U = ""] = r.split("?"), M = n ? {
            method: e,
            path: H,
            query: U,
            body_sha256: p
          } : void 0, G = M ? Re(Ke(new TextEncoder().encode(`STASH-NODE-OPERATION-V1|${e}|${H}|${p}${U ? `|${U}` : ""}`))) : "", J = Re(ln.getPublicKey(F, false)), Z = [
            "STASH-NODE-GRANT-V1",
            j.challenge_id,
            j.nonce,
            j.network,
            l,
            T.join(","),
            C,
            J,
            G
          ].join("|");
          if (await this.assertIdentityCurrent(_.validation, _.validationBinding), d !== this.sessionEpoch || m !== this.grantGeneration || await this.selectedNode() !== l) throw new Error("Cloud session changed");
          const ae = await c.consoleRequest("/v3/node-access/grants", s, {
            node_id: l,
            wallet_type: "stashwallet",
            challenge_id: j.challenge_id,
            challenge_nonce: j.nonce,
            grantor_public_key: R,
            grant_signature: fn(Z, S),
            client_public_key: J,
            apis: T,
            expires_at: C,
            ...M ? {
              operation: M
            } : {}
          });
          if (await this.assertIdentityCurrent(_.validation, _.validationBinding), !ae.access_token || d !== this.sessionEpoch || m !== this.grantGeneration || h !== `${this.sessionBinding}|${l}|${d}` || await this.selectedNode() !== l || await De()) throw new Error("Cloud session changed");
          if (d !== this.sessionEpoch || m !== this.grantGeneration) throw new Error("Cloud session changed");
          let O = 0;
          try {
            const E = ae.access_token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            O = JSON.parse(Buffer.from(E, "base64").toString()).exp * 1e3;
          } catch {
          }
          const L = {
            binding: h,
            token: ae.access_token,
            key: F,
            expires: Math.min(Date.parse(ae.expires_at), O, Date.now() + 12e4),
            apis: T
          };
          return n || (g ? ((_a2 = this.controlAccess) == null ? void 0 : _a2.key.fill(0), this.controlAccess = L) : ((_b = this.nodeAccess) == null ? void 0 : _b.key.fill(0), this.nodeAccess = L)), L;
        } catch (R) {
          throw F.fill(0), R;
        } finally {
          S.fill(0);
        }
      };
      let w;
      if (!n && (b == null ? void 0 : b.binding) === h && b.expires > Date.now() + 1e4 && b.apis.includes(o)) w = b;
      else if (n) w = await y();
      else {
        let D = this.grantFlights.get(x);
        if (!D) {
          const S = y().finally(() => {
            this.grantFlights.get(x) === S && this.grantFlights.delete(x);
          });
          this.grantFlights.set(x, S), D = S;
        }
        w = await D;
      }
      const k = w.key.slice();
      try {
        if (await this.assertIdentityCurrent(_.validation, _.validationBinding), d !== this.sessionEpoch || m !== this.grantGeneration || await this.selectedNode() !== l || await De()) throw new Error("Cloud session changed");
        if (d !== this.sessionEpoch || m !== this.grantGeneration) throw new Error("Cloud session changed");
        const D = String(Math.floor(Date.now() / 1e3)), S = crypto.randomUUID(), F = [
          "STASH-NODE-REQUEST-V1",
          e,
          r,
          p,
          D,
          S,
          Re(Ke(new TextEncoder().encode(w.token)))
        ].join("|"), R = ln.sign(new TextEncoder().encode(F), k);
        return {
          Authorization: `Bearer ${w.token}`,
          "X-Stash-Request-Timestamp": D,
          "X-Stash-Request-Nonce": S,
          "X-Stash-Request-Signature": Buffer.from(R).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
        };
      } finally {
        k.fill(0), n && w.key.fill(0);
      }
    }
    ensureOwnerAccess(e) {
      const r = e ?? "", a = this.ownerFlights.get(r);
      if (a) return a;
      const o = this.sessionEpoch, n = this.prepareOwnerAccess(e).then(() => {
        if (o !== this.sessionEpoch) throw new Error("Cloud session changed");
      }).finally(() => {
        this.ownerFlights.get(r) === n && this.ownerFlights.delete(r);
      });
      return this.ownerFlights.set(r, n), n;
    }
    async prepareOwnerAccess(e) {
      var _a2;
      const r = await this.selectedNode();
      if (e && e !== r) throw new Error("Cloud node changed");
      await this.assertNodeAuthentication(r), await this.nodeBaseUrl();
      const a = await this.client(), o = this.sessionBinding, n = this.sessionEpoch;
      if (await this.assertNodeAuthentication(r), ((_a2 = this.ownerSelection) == null ? void 0 : _a2.binding) === o && this.ownerSelection.nodeId === r && this.ownerSelection.epoch === n) return;
      const s = await ee(), i = await a.getNode(r, s);
      if (Vr(i, r, s), n !== this.sessionEpoch || o !== this.sessionBinding || await this.selectedNode() !== r) throw new Error("Cloud node changed");
      await this.assertNodeAuthentication(r), this.ownerSelection = {
        binding: o,
        nodeId: r,
        epoch: n
      };
    }
    async availableReadApis() {
      const e = await this.selectedNode();
      return await this.ensureOwnerAccess(e), [
        ...Jt
      ].sort();
    }
    async authorizeRead(e = [
      "GET /api/v1/balances"
    ], r) {
      return this.authorizeApis(e, r, false);
    }
    async authorizeAddress(e) {
      return this.authorizeApis([
        "POST /api/v1/wallet/address/new"
      ], e, true);
    }
    async paymentAuthority() {
      return this.receiptAuthority("/api/v1/bolt11/pay", "funds");
    }
    async invoiceAuthority() {
      return this.receiptAuthority("/api/v1/bolt11/receive");
    }
    async authorizeInvoice(e, r) {
      const a = JSON.parse(r);
      if (!a || Object.keys(a).sort().join(",") !== "amount_msat,description,expiry_secs" || typeof a.amount_msat != "string" || !/^[1-9][0-9]*$/.test(a.amount_msat) || BigInt(a.amount_msat) > 18446744073709551615n || typeof a.description != "string" || a.expiry_secs !== 3600) throw new Error("Unsupported invoice parameters");
      await this.authorizeApis([
        "POST /api/v1/bolt11/receive"
      ], e, true);
      const o = await Y.get("v3-address-access:" + e);
      if (!o) throw new Error("Receipt authority unavailable");
      await Y.set("v3-address-access:" + e, {
        ...o,
        body: r
      });
    }
    async offerAuthority() {
      return this.receiptAuthority("/api/v1/bolt12/offer/receive_var");
    }
    async authorizeOffer(e, r) {
      const a = JSON.parse(r);
      if (!a || Object.keys(a).sort().join(",") !== "description,expiry_secs" || typeof a.description != "string" || a.expiry_secs !== 3600) throw new Error("Unsupported offer parameters");
      await this.authorizeApis([
        "POST /api/v1/bolt12/offer/receive_var"
      ], e, true);
      const o = await Y.get("v3-address-access:" + e);
      if (!o) throw new Error("Receipt authority unavailable");
      await Y.set("v3-address-access:" + e, {
        ...o,
        body: r
      });
    }
    async addressAuthority() {
      return this.receiptAuthority("/api/v1/wallet/address/new");
    }
    async receiptAuthority(e, r = "write") {
      const a = await this.selectedNode();
      if (![
        ...un,
        "POST /api/v1/bolt11/pay"
      ].includes(`POST ${e}`)) throw new Error("Unsupported wallet operation");
      return await this.ensureOwnerAccess(a), {
        nodeId: a,
        api: `POST ${e}`,
        summary: r === "funds" ? "Pay invoice" : "Create receipt"
      };
    }
    async authorizePayment(e, r) {
      const a = JSON.parse(e);
      if (!a || Object.keys(a).join(",") !== "invoice" || typeof a.invoice != "string" || !a.invoice) throw new Error("Unsupported payment parameters");
      const o = await this.selectedNode();
      if (r && r !== o) throw new Error("Cloud node changed");
      const n = {
        method: "POST",
        path: "/api/v1/bolt11/pay",
        body_sha256: Re(Ke(new TextEncoder().encode(e)))
      };
      await this.authorizeApis([
        "POST /api/v1/bolt11/pay"
      ], o, true, n);
      const s = await Y.get("v3-address-access:" + o);
      if (!s) throw new Error("Payment authority unavailable");
      await Y.set("v3-address-access:" + o, {
        ...s,
        body: e
      });
    }
    async authorizeApis(e, r, a, o) {
      const n = a ? [
        ...un,
        "POST /api/v1/bolt11/pay",
        ...Ba.map((s) => `POST ${s}`),
        "GET /api/v1/rgb/utxos",
        "GET /api/v1/rgb/consignments/{consignment_key}"
      ] : Jt;
      if (!e.length || new Set(e).size !== e.length || e.some((s) => !n.includes(s)) || a && e.length !== 1) throw new Error("Unsupported wallet API");
      if (await this.ensureOwnerAccess(r), a) {
        const s = await this.selectedNode();
        await Y.set(`v3-address-access:${s}`, {
          apis: e,
          binding: `${this.sessionBinding}|${s}|${Ca}`,
          expires_at: new Date(Date.now() + 3e5).toISOString(),
          ...o ? {
            operation: o
          } : {}
        });
      }
    }
    async nodeBaseUrl() {
      const e = await this.selectedNode(), { base: r } = await this.context();
      await this.client();
      const a = this.sessionEpoch, o = `${r}|${e}|${a}`;
      let n = this.nodeDomainFlights.get(o);
      if (!n) {
        const i = this.resolveNodeBaseUrl().finally(() => {
          this.nodeDomainFlights.get(o) === i && this.nodeDomainFlights.delete(o);
        });
        this.nodeDomainFlights.set(o, i), n = i;
      }
      const s = await n;
      if (a !== this.sessionEpoch || await this.selectedNode() !== e || (await this.context()).base !== r) throw new Error("Cloud node changed");
      return s;
    }
    async resolveNodeBaseUrl() {
      const e = await this.selectedNode(), { base: r } = await this.context(), a = this.nodeDomain;
      if ((a == null ? void 0 : a.nodeId) === e && a.cloudBase === r) return a.apiBase;
      const o = await this.client(), n = this.sessionEpoch, s = await ee(), i = await o.getNodeDomain(e, s);
      if (n !== this.sessionEpoch || await this.selectedNode() !== e || (await this.context()).base !== r) throw new Error("Cloud node changed");
      return this.nodeDomain = {
        cloudBase: r,
        nodeId: e,
        apiBase: i.api_base_url
      }, i.api_base_url;
    }
    async requestRead(e, r, a) {
      if (e === "/api/v1/rgb/utxos?refresh=true" && r) {
        const o = await this.ownerConfirmation("GET /api/v1/rgb/utxos", void 0, r);
        return this.requestNode("GET", e, void 0, r, a, void 0, true, o);
      }
      return this.requestNode("GET", e, void 0, r, a, void 0, true);
    }
    async requestReadPost(e, r, a) {
      return this.requestNode("POST", e, r, a);
    }
    async requestDecode(e, r) {
      const a = JSON.parse(e);
      if (Object.keys(a).join(",") !== "invoice" || typeof a.invoice != "string") throw new Error("Unsupported decode parameters");
      return this.requestNode("POST", "/api/v1/bolt11/decode", e, r);
    }
    async authorizeChannelOperation(e, r, a) {
      if (!Ba.includes(e) || await this.nodeBaseUrl() !== a) throw new Error("Cloud node changed");
      const o = await this.selectedNode(), n = {
        method: "POST",
        path: e,
        body_sha256: Re(Ke(new TextEncoder().encode(r)))
      };
      await this.authorizeApis([
        `POST ${e}`
      ], o, true, n);
      const s = await Y.get("v3-address-access:" + o);
      if (!s) throw new Error("Channel authority unavailable");
      await Y.set("v3-address-access:" + o, {
        ...s,
        body: r
      });
    }
    async requestConsignment(e, r, a) {
      if (!/^[A-Za-z0-9_:~.-]{1,256}$/.test(e) || e === "." || e === ".." || await this.nodeBaseUrl() !== a) throw new Error("Invalid consignment key");
      const o = await this.ownerConfirmation("GET /api/v1/rgb/consignments/{consignment_key}", void 0, a);
      return this.requestNode("GET", `/api/v1/rgb/consignments/${e}?format=${r}`, void 0, a, void 0, void 0, false, o);
    }
    async requestIssuerImport(e, r, a) {
      return this.requestBinaryOperation("/api/v1/rgb/issuers/import", `name=${encodeURIComponent(e)}&format=raw`, r, a);
    }
    async requestBinaryOperation(e, r, a, o) {
      const n = Re(new Uint8Array(a)), s = await this.ownerConfirmation(`POST ${e}`, n, o);
      return this.requestNode("POST", `${e}?${r}`, n, o, void 0, a, false, s);
    }
    async requestAuthorizedChannelOperation(e, r, a) {
      return this.requestNode("POST", e, r, a);
    }
    async requestChannelOperation(e, r, a) {
      if (!Ba.includes(e)) throw new Error("Unsupported wallet API");
      const o = await this.ownerConfirmation(`POST ${e}`, r, a);
      return this.requestNode("POST", e, r, a, void 0, void 0, false, o);
    }
    async requestOwnerOperation(e, r, a) {
      const o = await this.ownerConfirmation(`POST ${e}`, r, a);
      return this.requestNode("POST", e, r, a, void 0, void 0, true, o);
    }
    async ownerConfirmation(e, r, a) {
      const o = await this.selectedNode();
      if (await this.nodeBaseUrl() !== a) throw new Error("Cloud node changed");
      if (await this.ensureOwnerAccess(o), await this.selectedNode() !== o || await this.nodeBaseUrl() !== a) throw new Error("Cloud node changed");
      return {
        access_token: "",
        apis: [
          e
        ],
        body: r,
        binding: `${this.sessionBinding}|${o}|${Ca}`,
        expires_at: new Date(Date.now() + 3e5).toISOString()
      };
    }
    async requestNewAddress(e) {
      if (this.addressInFlight) throw new Error("Address request already in progress");
      this.addressInFlight = true;
      try {
        return await this.requestNode("POST", "/api/v1/wallet/address/new", void 0, e);
      } finally {
        this.addressInFlight = false;
      }
    }
    async requestInvoice(e, r) {
      if (this.addressInFlight) throw new Error("Receipt request already in progress");
      this.addressInFlight = true;
      try {
        return await this.requestNode("POST", "/api/v1/bolt11/receive", e, r);
      } finally {
        this.addressInFlight = false;
      }
    }
    async requestPayment(e, r) {
      if (this.addressInFlight) throw new Error("Payment already in progress");
      this.addressInFlight = true;
      try {
        return await this.requestNode("POST", "/api/v1/bolt11/pay", e, r);
      } finally {
        this.addressInFlight = false;
      }
    }
    async requestOffer(e, r) {
      if (this.addressInFlight) throw new Error("Receipt request already in progress");
      this.addressInFlight = true;
      try {
        return await this.requestNode("POST", "/api/v1/bolt12/offer/receive_var", e, r);
      } finally {
        this.addressInFlight = false;
      }
    }
    async requestNode(e, r, a, o, n, s, i = false, l, c = false) {
      try {
        return await this.requestNodeUnlogged(e, r, a, o, n, s, i, l, c);
      } catch (d) {
        throw !(d instanceof ot) && !(d instanceof Error && d.name === "AbortError") && sa("V3 node", {
          method: e,
          path: r,
          message: d instanceof Error ? d.message : String(d),
          error: d
        }), d;
      }
    }
    async requestNodeUnlogged(e, r, a, o, n, s, i = false, l, c = false) {
      var _a2;
      const d = r.startsWith("/api/v1/rgb/consignments/") || r === "/api/v1/rgb/utxos?refresh=true" || e === "POST" && !Jt.includes(`POST ${r}`), h = d ? "v3-address-access:" : "v3-access:", p = `${e} ${r.split("?")[0].replace(/\/rgb\/contract\/[^/]+\/(balance|known)$/, "/rgb/contract/{contract_id}/$1").replace(/\/rgb\/consignments\/[^/]+$/, "/rgb/consignments/{consignment_key}")}`, g = d ? [
        ...un,
        "POST /api/v1/bolt11/pay",
        ...Ba.map((U) => `POST ${U}`),
        "GET /api/v1/rgb/utxos",
        "GET /api/v1/rgb/consignments/{consignment_key}"
      ] : Jt, m = await this.selectedNode(), b = await this.assertNodeAuthentication(m), x = await this.nodeBaseUrl();
      if (o && o !== x) throw new Error("Cloud node changed");
      const _ = new URL(`${x}${r}`);
      if (!r.startsWith("/api/v1/") || r.slice(7).includes("/api/v1/") || _.origin !== x || _.pathname !== r.split("?")[0] || _.hash || /[%\\\\]/.test(_.pathname) || !i && !g.includes(p)) throw new Error("V3 API is not in the confirmed read-only grant");
      if (Y0(r, _.searchParams, s !== void 0, d)) throw new Error("Unsupported read-only query");
      if (await this.nodeBaseUrl() !== x) throw new Error("Cloud node changed");
      await this.ensureOwnerAccess(m);
      const { config: y, base: w } = await this.context(), k = this.sessionEpoch, D = this.grantGeneration, S = `${this.sessionBinding}|${y.v3NodeId}|${Ca}`, F = `${h}${y.v3NodeId}`, R = l ?? await Y.get(F);
      if (d && (!R || R.binding !== S || R.body !== a || !Array.isArray(R.apis) || !R.apis.includes(p) || !Number.isFinite(Date.parse(R.expires_at)) || Date.parse(R.expires_at) <= Date.now())) throw new Error("Confirm wallet operation first");
      const j = this.clientIdentity, C = async () => {
        const [U, M, , G] = await Promise.all([
          this.nodeBaseUrl(),
          this.context(),
          this.assertIdentityCurrent(j.validation, j.validationBinding),
          De()
        ]);
        if (await this.assertNodeAuthentication(m) !== b) throw new Error("Cloud node changed");
        if (k !== this.sessionEpoch || D !== this.grantGeneration || U !== x || M.base !== w || M.config.v3NodeId !== m || G || (n == null ? void 0 : n.aborted)) throw new Error("Cloud session changed");
        if (await this.assertNodeAuthentication(m) !== b) throw new Error("Cloud node changed");
      }, T = d ? `${x}|${e}|${r}|${Re(Ke(s ? new Uint8Array(s) : new TextEncoder().encode(a ?? "")))}` : void 0;
      if (T && this.ownerWritesInFlight.has(T)) throw new Error("Wallet operation already in progress");
      let H = false;
      try {
        if (await C(), T) {
          if (this.ownerWritesInFlight.has(T)) throw new Error("Wallet operation already in progress");
          this.ownerWritesInFlight.add(T), H = true;
        }
        d && !l && await Y.remove(F);
        const U = await this.nodeProof(e, r, s ? new Uint8Array(s) : new TextEncoder().encode(a ?? ""), p, d || i && e !== "GET");
        await C();
        const M = await this.fetchImpl(_, {
          method: e,
          body: s ?? a,
          redirect: "error",
          credentials: "omit",
          cache: "no-store",
          referrerPolicy: "no-referrer",
          signal: n,
          headers: {
            ...a !== void 0 ? {
              "Content-Type": s ? "application/octet-stream" : "application/json"
            } : {},
            ...U
          }
        });
        if (await C(), !M.ok) {
          if ([
            401,
            403
          ].includes(M.status) && !d && Jt.includes(p) && !s && !c) return await C(), U.Authorization === `Bearer ${(_a2 = this.nodeAccess) == null ? void 0 : _a2.token}` && (this.clearNodeGrants(), this.invalidateReadCache()), await this.requestNodeUnlogged(e, r, a, o, n, void 0, false, void 0, true);
          throw [
            401,
            403
          ].includes(M.status) && (this.rejectNodeAuthentication(b, M.status), await Y.remove(`v3-access:${m}`), await Y.remove(`v3-address-access:${m}`)), await Kr(M);
        }
        const G = r.startsWith("/api/v1/rgb/consignments/") ? await M.blob() : await M.json();
        return await C(), G;
      } finally {
        H && T && this.ownerWritesInFlight.delete(T);
      }
    }
    async requestControl(e, r, a) {
      try {
        return await this.requestControlUnlogged(e, r, a);
      } catch (o) {
        throw o instanceof ot || sa("V3 control", {
          method: r === void 0 ? "GET" : "POST",
          path: e,
          message: o instanceof Error ? o.message : String(o),
          error: o
        }), o;
      }
    }
    async requestControlUnlogged(e, r, a) {
      const o = await this.selectedNode();
      await this.ensureOwnerAccess(o);
      const n = await this.context(), s = await this.nodeBaseUrl();
      if (a && a !== s) throw new Error("Cloud node changed");
      if (e === "/control/status" ? r !== void 0 : r !== (e === "/control/lock" ? '{"yes":true}' : "{}")) throw new Error("Unsupported control operation");
      const i = this.sessionEpoch, l = this.grantGeneration, c = this.clientIdentity, d = async () => {
        const g = await this.context();
        if (i !== this.sessionEpoch || l !== this.grantGeneration || g.base !== n.base || JSON.stringify(g.config) !== JSON.stringify(n.config) || await this.selectedNode() !== o || await this.nodeBaseUrl() !== s || await De()) throw new Error("Cloud node changed");
        if (await this.assertIdentityCurrent(c.validation, c.validationBinding), i !== this.sessionEpoch || l !== this.grantGeneration) throw new Error("Cloud node changed");
      }, h = `${s}|control`;
      let p = false;
      try {
        if (await d(), r !== void 0) {
          if (this.ownerWritesInFlight.has(h)) throw new Error("Wallet operation already in progress");
          this.ownerWritesInFlight.add(h), p = true, this.invalidateReadCache();
        }
        const g = r === void 0 ? "GET" : "POST", m = await this.nodeProof(g, e, new TextEncoder().encode(r ?? ""), `${g} ${e}`, r !== void 0);
        await d();
        const b = await this.fetchImpl(`${s}${e}`, {
          method: g,
          body: r,
          redirect: "error",
          credentials: "omit",
          cache: "no-store",
          referrerPolicy: "no-referrer",
          headers: {
            ...m,
            ...r !== void 0 ? {
              "Content-Type": "application/json"
            } : {}
          }
        });
        if (await d(), !b.ok) throw await Kr(b);
        const x = await b.json();
        return await d(), r !== void 0 && this.invalidateReadCache(), x;
      } finally {
        p && this.ownerWritesInFlight.delete(h);
      }
    }
    async requestBalances() {
      return this.requestRead("/api/v1/balances");
    }
  }
  let ba, Wg, xr, Xt, hn;
  re = new X0();
  ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    CHANNEL_OPERATION_PATHS: wi,
    ManagedV3Wallet: X0,
    RGB_OPERATION_PATHS: yi,
    WALLET_V3_READ_APIS: Jt,
    cloudExportError: Mg,
    managedV3Wallet: re,
    rejectsReadOnlyQuery: Y0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Wg = (t) => Array.from(Ke(t), (e) => e.toString(16).padStart(2, "0")).join("");
  xr = (t) => `stash_rgb_delivery_${Wg(new TextEncoder().encode(t))}`;
  Xt = (t) => `/${encodeURIComponent(t)}`;
  hn = /* @__PURE__ */ new Set();
  function Da(t) {
    if (!t || !/^[a-zA-Z0-9_-]{1,64}$/.test(t.id) || !/^[a-f0-9]{64}$/.test(t.payment_id) || !/^[a-f0-9]{64}$/.test(t.sha256) || ![
      "awaiting",
      "ready",
      "receiving",
      "unknown",
      "accepted"
    ].includes(t.status)) throw new Error("Invalid delivery response");
    return t;
  }
  async function pr(t, e) {
    if (await De() || await re.deliveryScope() !== t || e && await re.nodeBaseUrl() !== e.nodeKey) throw new Error("Delivery context changed");
  }
  Vg = async function() {
    const t = await Oe();
    return t.mode === "managed" && !!t.v3NodeId && t.v3AuthMode !== "direct-token";
  };
  function Kg(t) {
    let e = "";
    for (const r of t) e += String.fromCharCode(r);
    return btoa(e);
  }
  async function Nn(t, e, r, a) {
    await pr(a, t);
    const o = `${xr(a)}_capture_pending`, n = await V.get(o) ?? [];
    n.some((g) => g.result.txid === r.txid && g.result.consignment_key === r.consignment_key) || await V.set(o, [
      ...n,
      {
        invoice: e,
        result: r
      }
    ]);
    const s = await t.downloadConsignment(r.consignment_key, "raw");
    await pr(a, t);
    const i = new Uint8Array(await s.arrayBuffer());
    if (!i.length || i.length > 8 * 1024 * 1024) throw new Error("Invalid original consignment archive");
    const l = {
      invoice: e,
      ...r,
      archive: Kg(i)
    }, c = `${xr(a)}_send_${r.txid}_${r.consignment_key}`, d = await V.get(c);
    if (d && JSON.stringify(d) !== JSON.stringify(l)) throw new Error("Original consignment conflict");
    await V.set(c, l), await V.set(o, (await V.get(o) ?? []).filter((g) => g.result.txid !== r.txid || g.result.consignment_key !== r.consignment_key));
    const h = `${xr(a)}_send_pending`, p = await V.get(h) ?? [];
    p.includes(c) || await V.set(h, [
      ...p,
      c
    ]), await Ei(a, l);
  }
  async function Ei(t, e) {
    await pr(t);
    const { deliveries: r } = await re.deliveryRequest(t, "/sent"), a = r.find((o) => o.txid === e.txid);
    a && [
      "accepted",
      "receiving",
      "unknown"
    ].includes(a.status) || await re.deliveryRequest(t, "", e);
  }
  Dm = async function(t, e, r) {
    if (!await Vg()) throw new Error("Managed v3 relay required");
    const a = await re.deliveryScope(), o = await V.get(`${xr(a)}_send_${e}_${r}`);
    if (!o || o.invoice !== t || o.txid !== e || o.consignment_key !== r) throw new Error("Original raw archive unavailable; native send will not be repeated");
    await Ei(a, o);
  };
  Im = async function(t) {
    const e = await re.deliveryScope();
    if (!hn.has(e)) {
      hn.add(e);
      try {
        await pr(e, t);
        let r = await re.deliveryRequest(e, "/sent");
        if (r.deliveries.some((l) => l.status === "unknown" && !l.txid) && (await t.listRgbOnchainPayments(), r = await re.deliveryRequest(e, "/sent")), r.deliveries.some((l) => l.status === "awaiting" && l.txid)) {
          const l = await t.listRgbOnchainPayments();
          for (const c of r.deliveries) if (!(c.status !== "awaiting" || !c.txid || l.payments.filter((h) => h.txid === c.txid && h.invoice === c.invoice && h.consignment_key === c.consignment_key).length !== 1 || !c.invoice || !c.consignment_key)) try {
            await Nn(t, c.invoice, {
              txid: c.txid,
              consignment_key: c.consignment_key
            }, e);
          } catch {
          }
        }
        const a = await V.get(`${xr(e)}_capture_pending`) ?? [];
        for (const l of a) try {
          await Nn(t, l.invoice, l.result, e);
        } catch {
        }
        const o = `${xr(e)}_send_pending`, n = await V.get(o) ?? [], s = [];
        for (const l of n) try {
          const c = await V.get(l);
          c && await Ei(e, c);
        } catch {
          s.push(l);
        }
        await V.set(o, s);
        const { deliveries: i } = await re.deliveryRequest(e);
        for (const l of i) {
          const c = Da(l), d = `${xr(e)}_receive_${c.payment_id}`;
          try {
            await pr(e, t);
            let h = await V.get(d);
            if (h && (h.paymentId !== c.payment_id || h.sha256 !== c.sha256)) throw new Error("Delivery receipt conflict");
            if (c.status === "accepted" && (h = {
              paymentId: c.payment_id,
              sha256: c.sha256,
              state: "accepted"
            }, await V.set(d, h)), (h == null ? void 0 : h.state) === "accepted") {
              await re.deliveryRequest(e, `${Xt(c.id)}/ack`, {});
              continue;
            }
            if (h || c.status !== "ready") {
              const m = Da(await re.deliveryRequest(e, Xt(c.id)));
              if (m.id !== c.id || m.payment_id !== c.payment_id || m.sha256 !== c.sha256) throw new Error("Delivery evidence mismatch");
              m.status === "accepted" ? (await V.set(d, {
                paymentId: c.payment_id,
                sha256: c.sha256,
                state: "accepted"
              }), await re.deliveryRequest(e, `${Xt(c.id)}/ack`, {})) : h && m.status === "receiving" && await re.deliveryRequest(e, `${Xt(c.id)}/receive-unknown`, {});
              continue;
            }
            if (c.expires_at !== null && (!Number.isFinite(Date.parse(c.expires_at)) || Date.parse(c.expires_at) <= Date.now())) continue;
            const p = await re.deliveryArchive(e, c.id);
            if (p.sha256 !== c.sha256) throw new Error("Delivery hash conflict");
            await pr(e, t), await V.set(d, {
              paymentId: c.payment_id,
              sha256: c.sha256,
              state: "receiving"
            });
            const g = Da(await re.deliveryRequest(e, `${Xt(c.id)}/receive-start`, {}));
            if (g.status !== "receiving" || g.id !== c.id || g.payment_id !== c.payment_id || g.sha256 !== c.sha256) throw new Error("Delivery receive claim failed");
            await pr(e, t);
            try {
              const m = await t.rgbOnchainReceiveRaw(c.payment_id, p.data, "raw");
              if (!m.contract_id || !/^\d+$/.test(m.amount)) throw new Error("Invalid native receive response");
              await V.set(d, {
                paymentId: c.payment_id,
                sha256: c.sha256,
                state: "accepted"
              });
            } catch {
              await V.set(d, {
                paymentId: c.payment_id,
                sha256: c.sha256,
                state: "unknown"
              });
              const m = Da(await re.deliveryRequest(e, Xt(c.id)));
              if (m.id !== c.id || m.payment_id !== c.payment_id || m.sha256 !== c.sha256) throw new Error("Delivery evidence mismatch");
              if (m.status !== "accepted") {
                await re.deliveryRequest(e, `${Xt(c.id)}/receive-unknown`, {});
                continue;
              }
              await V.set(d, {
                paymentId: c.payment_id,
                sha256: c.sha256,
                state: "accepted"
              });
            }
            await re.deliveryRequest(e, `${Xt(c.id)}/ack`, {});
          } catch (h) {
            console.warn("[RGB delivery] deferred without native retry", c.id, h);
          }
        }
      } finally {
        hn.delete(e);
      }
    }
  };
  async function Z0(t, e) {
    var _a2;
    const [r, a, o, n] = await Promise.all([
      Oe(),
      ee(),
      De(),
      Y.get("walletPassword")
    ]);
    if (o || !n || a !== e || JSON.stringify(r) !== t) throw new Error("Snapshot context changed");
    const [s, i] = await Promise.all([
      at(n, e),
      r.mode === "managed" ? Qt() : void 0
    ]), [l, c, d, h] = await Promise.all([
      Oe(),
      ee(),
      De(),
      Y.get("walletPassword")
    ]);
    if (JSON.stringify(l) !== t || c !== e || d || h !== n) throw new Error("Display identity changed");
    const p = r.url || r.v3NodeId || "unknown", g = r.mode === "managed" ? wn([
      e,
      r.mode,
      r.v3NodeId,
      r.connectionCredentialMode,
      i,
      r.v3NodeId ? (_a2 = s.cloudNodeMnemonics) == null ? void 0 : _a2[r.v3NodeId] : void 0
    ]) : wn([
      e,
      r.mode,
      r.url,
      s.httpToken,
      s.nodeMnemonic
    ]);
    return jn({
      network: e,
      nodeKey: p,
      nodeId: r.v3NodeId,
      mode: r.mode,
      v3AuthMode: r.v3AuthMode,
      credentialFingerprint: g
    });
  }
  Fm = async function(t, e) {
    var _a2;
    try {
      const r = await Z0(t, e);
      return ((_a2 = await Yc(r)) == null ? void 0 : _a2.data) ?? null;
    } catch {
      return null;
    }
  };
  zm = function() {
    $a();
  };
  async function Ta(t) {
    const [e, r] = await Promise.all([
      Oe(),
      ee()
    ]);
    if (!t.endsWith(`|${r}`)) throw new Error("Display network changed");
    return Z0(JSON.stringify(e), r);
  }
  const oc = "stash_cache_";
  let pn = null, nc = false;
  function po() {
    return pn || (pn = et(async () => {
      const { managedV3Wallet: t } = await Promise.resolve().then(() => ba);
      return {
        managedV3Wallet: t
      };
    }, void 0, import.meta.url).then(({ managedV3Wallet: t }) => {
      Bn((e) => t.readCacheContext(e));
    }).catch(() => {
      Bn(null);
    })), pn;
  }
  function J0() {
    nc || (nc = true, (async () => {
      try {
        if (Je()) {
          const r = await chrome.storage.local.get(null), a = Object.keys(r).filter((o) => o.startsWith(oc) || o === "home-balance-display-v1");
          a.length && await chrome.storage.local.remove(a);
          return;
        }
        const t = await js(oc), e = await js("home-balance-display");
        await Promise.all([
          ...t,
          ...e
        ].map((r) => V.remove(r).catch(() => {
        })));
      } catch {
      }
    })());
  }
  Rm = async function(t, e, r, a = {}) {
    if (await po(), J0(), a.mode === "display") {
      const o = await Ta(t);
      return rl(t, e, o, async () => {
        const n = await Ta(t);
        if (JSON.stringify(n) !== JSON.stringify(o)) throw new Error("Display identity changed");
        const { RgbLdkClient: s } = await et(async () => {
          const { RgbLdkClient: d } = await Promise.resolve().then(() => am);
          return {
            RgbLdkClient: d
          };
        }, void 0, import.meta.url), i = await s.fromNodeConfig();
        if (!i || t !== `${i.nodeKey}|${await ee()}`) throw new Error("Display node changed");
        await i.ensureReady();
        const l = await r(), c = await Ta(t);
        if (JSON.stringify(c) !== JSON.stringify(o)) throw new Error("Display identity changed");
        return l;
      }, a.force);
    }
    return Gn(t, e, r, a).catch(async (o) => {
      const n = o && typeof o == "object" && "status" in o ? o.status : void 0;
      throw (n === 401 || n === 403) && await fa(), o;
    });
  };
  Tm = async function(t, e, r) {
    try {
      return await Xn(await Ta(t), e);
    } catch {
      return null;
    }
    return await po(), Wc(t, e);
  };
  Nm = async function(t) {
    await po(), await Vc(t);
  };
  function Zt(t) {
    Kc(t);
  }
  Om = async function() {
    await po(), await fa(), J0();
  };
  ic = function(t) {
    return t.mode === "self-hosted" ? "self-hosted" : t.v3AuthMode === "direct-token" && t.v3NodeId ? "direct-token" : t.cloudVersion === 3 || t.v3NodeId ? "delegated-v3" : "legacy-managed";
  };
  Lm = async function(t, e) {
    const r = await ee();
    if (await In(r)) throw new Error("CLOUD_IDENTITY_EXISTS: preserve existing credentials and explicitly select a node");
    const o = Tl({
      regtest: "https://api-regtest.stashcloud.net",
      testnet4: "https://api-testnet.stashcloud.net",
      mainnet: "https://api-mainnet.stashcloud.net"
    }[r]), n = e === void 0 ? Ip(256) : e.trim().split(/\s+/).join(" ");
    if (!uo(n)) throw new Error("CLOUD_MNEMONIC_INVALID");
    if (await ee() !== r || await In(r)) throw new Error("Cloud wallet changed during initialization");
    return await oi({
      name: "Cloud Wallet",
      url: "",
      controlUrl: "",
      httpToken: "",
      controlHttpToken: "",
      keystorePassphrase: "",
      cloudAccountMnemonic: n
    }, t, r), await Yr({
      mode: "managed",
      cloudVersion: 3,
      nodeManagerUrl: o
    }, r), await Y.remove("v3-node-onboarding"), await Y.remove("v3-pending-write"), n;
  };
  const sc = /^[0-9]+$/, Gg = /^[0-9a-fA-F]{64}:(?:0|[1-9][0-9]{0,9})$/;
  function Ft(t) {
    return typeof t == "string" && t.trim() !== "" ? t : null;
  }
  function gn(t) {
    return t && typeof t == "object" ? t : null;
  }
  function Yg(t) {
    const e = gn(t), r = Ft(e == null ? void 0 : e.outpoint), a = Ft(e == null ? void 0 : e.account_id), o = Ft(e == null ? void 0 : e.scope_id), n = Ft(e == null ? void 0 : e.onchain_state), s = Ft(e == null ? void 0 : e.availability);
    if (!e || !r || !Gg.test(r) || !a || !o || !n || !s || typeof e.value_sats != "string" || !sc.test(e.value_sats) || typeof e.selectable != "boolean") throw new Error("Invalid UTXO status");
    const i = gn(e.operation), l = gn(e.lock), c = Ft(i == null ? void 0 : i.operation_id), d = Ft(i == null ? void 0 : i.phase), h = Ft(l == null ? void 0 : l.operation_id), p = Ft(l == null ? void 0 : l.purpose), g = l == null ? void 0 : l.expires_at_unix_secs;
    if (e.operation != null && (!c || !d)) throw new Error("Invalid UTXO status");
    if (e.lock != null && (!h || !p || g != null && (typeof g != "string" || !sc.test(g)))) throw new Error("Invalid UTXO status");
    const m = e.unavailable_reason;
    if (m != null && typeof m != "string") throw new Error("Invalid UTXO status");
    return {
      outpoint: r,
      account_id: a,
      scope_id: o,
      value_sats: e.value_sats,
      onchain_state: n,
      availability: s,
      selectable: e.selectable,
      operation: c && d ? {
        operation_id: c,
        phase: d
      } : null,
      lock: h && p ? {
        operation_id: h,
        purpose: p,
        expires_at_unix_secs: typeof g == "string" ? g : null
      } : null,
      unavailable_reason: typeof m == "string" && m !== "" ? m : null
    };
  }
  function Xg(t, e) {
    return t.onchain_state === "unconfirmed_incoming" ? e.utxoStatusIncoming : t.onchain_state === "unconfirmed_outgoing" ? e.utxoStatusOutgoing : t.onchain_state === "spent" || t.onchain_state === "confirmed_spent" ? e.utxoStatusSpent : t.operation ? e.utxoStatusProcessing : t.lock ? e.utxoStatusLocked : t.availability === "blocked_by_policy" ? e.utxoStatusPolicy : t.selectable ? `${e.utxoStatusReady}
${e.utxoStatusSelectableCaveat}` : e.utxoStatusUnknown;
  }
  function Wr(t, e) {
    const r = t.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase(), a = {
      unknown: "utxoValueUnknown",
      confirmed: "utxoValueConfirmed",
      unconfirmed: "utxoValueUnconfirmed",
      unconfirmed_incoming: "utxoValueIncoming",
      unconfirmed_outgoing: "utxoValueOutgoing",
      spent: "utxoValueSpent",
      confirmed_spent: "utxoValueConfirmedSpent",
      selectable: "utxoValueSelectable",
      available: "utxoValueAvailable",
      unavailable: "utxoValueUnavailable",
      blocked_by_policy: "utxoValuePolicy",
      locked: "utxoValueLocked",
      reserved: "utxoValueReserved",
      pending: "utxoValuePending",
      in_progress: "utxoValueInProgress",
      processing: "utxoValueProcessing",
      completed: "utxoValueCompleted",
      failed: "utxoValueFailed",
      cancelled: "utxoValueCancelled",
      manual_reservation: "utxoValueManualReservation",
      operation: "utxoValueOperation",
      true: "utxoValueYes",
      false: "utxoValueNo"
    };
    return e[Object.prototype.hasOwnProperty.call(a, r) ? a[r] : "utxoValueUnknown"];
  }
  function Zg(t, e) {
    return /\b(?:UnconfirmedIncoming|unconfirmed_incoming)\b/i.test(t) ? e.utxoStatusIncoming : /\b(?:UnconfirmedOutgoing|unconfirmed_outgoing)\b/i.test(t) ? e.utxoStatusOutgoing : /\b(?:ConfirmedSpent|confirmed_spent|spent)\b/i.test(t) ? e.utxoStatusSpent : /\b(?:locked|reserved|manual_reservation)\b/i.test(t) ? e.utxoStatusLocked : /\b(?:BlockedByPolicy|blocked_by_policy|blocked by policy)\b/i.test(t) ? e.utxoStatusPolicy : e.utxoStatusUnknown;
  }
  Pm = function(t, e) {
    const r = [
      Xg(t, e),
      `${e.utxoStatusAmount}: ${t.value_sats}`,
      `${e.utxoStatusOnchain}: ${Wr(t.onchain_state, e)}`,
      `${e.utxoStatusAvailability}: ${Wr(t.availability, e)}`,
      `${e.utxoStatusSelectable}: ${Wr(String(t.selectable), e)}`
    ];
    return t.operation && r.push(`${e.utxoStatusOperation}: ${Wr(t.operation.phase, e)} (${t.operation.operation_id})`), t.lock && r.push(`${e.utxoStatusLock}: ${Wr(t.lock.purpose, e)} (${t.lock.operation_id})`), t.unavailable_reason && r.push(`${e.utxoStatusReason}: ${Zg(t.unavailable_reason, e)}`), r.join(`
`);
  };
  function Jg() {
    return crypto.randomUUID();
  }
  const Xe = "/api/v1";
  function cc(t) {
    if (t.url) try {
      const e = new URL(t.url);
      return e.pathname + e.search;
    } catch {
      return;
    }
  }
  function On(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":");
  }
  function Q0(t, e) {
    var _a2;
    if (!t.rgb || ((_a2 = t.rgb.color_context_data) == null ? void 0 : _a2.trim())) return t;
    const r = new URL(e);
    if (![
      "http:",
      "https:"
    ].includes(r.protocol) || r.username || r.password || r.search || r.hash) throw new le("Invalid consignment API base URL");
    const a = `${r.origin}${r.pathname.replace(/\/+$/, "")}${Xe}/rgb/consignments/{txid}?format=zip`;
    return {
      ...t,
      rgb: {
        ...t.rgb,
        color_context_data: a
      }
    };
  }
  function lc(t) {
    return t.mode === "managed";
  }
  const Qg = 25, em = [
    "/bolt11/pay",
    "/bolt11/send",
    "/bolt11/send_using_amount",
    "/bolt11/claim_for_hash",
    "/bolt11/fail_for_hash",
    "/bolt12/offer/send",
    "/bolt12/refund/initiate",
    "/rgb/ln/pay",
    "/spontaneous/send",
    "/rgb/onchain/send",
    "/rgb/onchain/receive",
    "/wallet/send",
    "/wallet/send_all",
    "/rgb/utxos/fund",
    "/rgb/utxos/release",
    "/rgb/utxos/reserve",
    "/rgb/utxos/sweep",
    "/rgb/utxos/top_up",
    "/rgb/contracts/issue",
    "/channel/open",
    "/channel/close",
    "/channel/force_close"
  ];
  function tm(t) {
    const e = t.split("?")[0];
    return em.includes(e);
  }
  le = class extends Error {
    constructor(e, r, a, o) {
      super(e), this.status = r, this.requestId = a, this.code = o, this.name = "RgbLdkError";
    }
  };
  eu = class extends Error {
    constructor() {
      super("NODE_NOT_PROVISIONED"), this.name = "NodeNotProvisionedError";
    }
  };
  rm = class extends Error {
    constructor(e, r, a, o, n, s) {
      super(e), this.code = r, this.status = a, this.warnings = o, this.blockers = n, this.taskId = s, this.name = "NodeExportError";
    }
  };
  function tu(t) {
    return !(t instanceof le) || t.status !== 404 ? false : `${t.code ?? ""} ${t.message}`.includes("address_not_initialized") || t.message === "No address has been generated yet.";
  }
  Ze = (_c2 = class {
    constructor(e, r) {
      __publicField(this, "baseUrl");
      __publicField(this, "httpToken");
      __publicField(this, "v3", false);
      __publicField(this, "selfHostedContext");
      __publicField(this, "walletAddressInit");
      this.baseUrl = e.replace(/\/+$/, ""), this.httpToken = r;
    }
    static invalidateReadiness() {
      Ze.readiness.clear();
    }
    async ensureReady() {
      bo();
      const e = this.v3 ? Oe : Br, r = await e(), a = await ee(), o = JSON.stringify(r), n = `${this.baseUrl}|${a}|${o}`, s = Ze.readiness.get(n);
      if (s == null ? void 0 : s.flight) return s.flight;
      if (s && s.until > Date.now()) {
        if (s.error) throw s.error;
        return;
      }
      const i = {
        until: 0
      }, l = (async () => {
        if (this.v3) {
          const d = await Ze.getNodeManagerStatus();
          if (d.status !== "running") throw new le(`Node is not running: ${d.status}`, 503, void 0, "NODE_NOT_READY");
        }
        if (!(await this.readyz()).ok) throw new le("Node is not ready", 503, void 0, "NODE_NOT_READY");
        if (JSON.stringify(await e()) !== o || await ee() !== a) throw new Error("Node context changed");
        i.until = Date.now() + 3e3;
      })().catch((c) => {
        throw i.error = c, i.until = Date.now() + 5e3, c;
      }).finally(() => {
        i.flight = void 0;
      });
      return i.flight = l, Ze.readiness.size >= 16 && Ze.readiness.clear(), Ze.readiness.set(n, i), l;
    }
    get nodeKey() {
      return this.baseUrl;
    }
    get supportsEventPolling() {
      return !this.v3;
    }
    static async fromNodeConfig() {
      const e = await Oe(), r = e.mode === "self-hosted" ? await Br() : e, a = ic(r);
      if (a === "direct-token" || r.connectionCredentialMode) throw new le("Explicit Cloud credential migration required");
      if (a === "delegated-v3" && r.v3NodeId) {
        const s = new Ze(await re.nodeBaseUrl(), "");
        return s.v3 = true, s;
      }
      if (a !== "self-hosted" || lc(r) || !r.url || !r.httpToken) return null;
      if (/(^|\.)stashcloud\.net$/i.test(new URL(r.url).hostname)) throw new le("Self-hosted owner credentials must not be sent to Cloud");
      const o = r.url, n = new Ze(o, r.httpToken);
      return n.selfHostedContext = {
        network: await ee(),
        config: JSON.stringify(r)
      }, n;
    }
    static async controlClientFromNodeConfig() {
      const e = await Oe(), r = e.mode === "self-hosted" ? await Br() : e, a = ic(r);
      if (a === "direct-token" || r.connectionCredentialMode) throw new le("Explicit Cloud credential migration required");
      if (a === "delegated-v3" && r.v3NodeId) {
        const i = new Ze(await re.nodeBaseUrl(), "");
        return i.v3 = true, i;
      }
      if (a !== "self-hosted" || lc(r) || !r.controlHttpToken) return null;
      const o = r.controlUrl || r.url;
      if (!o) return null;
      if (/(^|\.)stashcloud\.net$/i.test(new URL(o).hostname)) throw new le("Self-hosted owner credentials must not be sent to Cloud");
      const n = o, s = new Ze(n, r.controlHttpToken);
      return s.selfHostedContext = {
        network: await ee(),
        config: JSON.stringify(r)
      }, s;
    }
    static async startManagedNode() {
      Ze.readiness.clear();
      const e = await Oe();
      if (e.mode !== "managed") throw new le("Managed node required");
      if (e.v3AuthMode === "direct-token") throw new le("Manage this node with the Cloud API key outside the wallet");
      if (e.v3NodeId) return re.action("start");
      if (e.managedWalletId && e.cloudAccountIdentityVersion === 1) return re.legacyLifecycle("start");
      throw new le("Select an existing v3 Cloud node first");
    }
    static async getNodeManagerStatus() {
      const e = await Oe();
      if (e.mode !== "managed") throw new le("Managed node required");
      if (e.v3AuthMode === "direct-token") throw new le("Manage this node with the Cloud API key outside the wallet");
      if (e.v3NodeId) return re.status();
      if (e.managedWalletId && e.cloudAccountIdentityVersion === 1) return re.legacyMigrationStatus();
      throw new le("Select an existing v3 Cloud node first");
    }
    static async createNodeExportTask(e = false) {
      throw new le("Cloud v1 export is retired; use the confirmed v3 export flow");
    }
    static async getNodeExportStatus(e) {
      throw new le("Cloud v1 export status is retired");
    }
    static async stopManagedNode() {
      Ze.readiness.clear();
      const e = await Oe();
      if (e.mode !== "managed") throw new le("Managed node required");
      if (e.v3AuthMode === "direct-token") throw new le("Manage this node with the Cloud API key outside the wallet");
      if (e.v3NodeId) return re.action("stop");
      if (e.managedWalletId && e.cloudAccountIdentityVersion === 1) return re.legacyLifecycle("stop");
      throw new le("Select an existing v3 Cloud node first");
    }
    static async getFeeEstimates() {
      return {};
    }
    async _getAuthHeaders() {
      if (this.v3) throw new le("V3 API is not in the confirmed read-only grant");
      const e = await Br();
      if (!this.selfHostedContext || e.mode !== "self-hosted" || await De() || await ee() !== this.selfHostedContext.network || JSON.stringify(e) !== this.selfHostedContext.config) throw new le("Self-hosted node context changed or locked");
      return {
        Authorization: `Bearer ${this.httpToken}`,
        "X-Request-Id": Jg()
      };
    }
    async _get(e) {
      if (bo(), this.v3) try {
        return await re.requestRead(`${Xe}${e}`, this.baseUrl, Ni());
      } catch (o) {
        throw o instanceof ot ? new le(o.message, o.status, o.request_id, o.code) : o;
      }
      const r = await this._getAuthHeaders();
      bo();
      const a = await fetch(`${this.baseUrl}${Xe}${e}`, {
        headers: r,
        signal: Ni()
      });
      return this._handleResponse(a);
    }
    async _post(e, r) {
      if (this.v3 && [
        "/bolt12/offer/decode",
        "/rgb/ln/invoice/decode",
        "/rgb/onchain/invoice/decode",
        "/rgb/ln/invoice/estimate_carrier"
      ].includes(e)) return re.requestReadPost(`${Xe}${e}`, JSON.stringify(r), this.baseUrl);
      const a = tm(e);
      a && Ju();
      let o = false;
      try {
        if (this.v3 && [
          ...wi,
          ...yi
        ].some((l) => l === `${Xe}${e}`)) {
          o = true;
          const l = await re.requestChannelOperation(`${Xe}${e}`, JSON.stringify(r), this.baseUrl);
          return a && Zt(this.baseUrl), l;
        }
        if (this.v3) {
          o = true;
          const l = await re.requestOwnerOperation(`${Xe}${e}`, r !== void 0 ? JSON.stringify(r) : void 0, this.baseUrl);
          return a && Zt(this.baseUrl), l;
        }
        const n = await this._getAuthHeaders();
        o = true;
        const s = await fetch(`${this.baseUrl}${Xe}${e}`, {
          method: "POST",
          headers: {
            ...n,
            "Content-Type": "application/json"
          },
          body: r !== void 0 ? JSON.stringify(r) : void 0
        }), i = await this._handleResponse(s);
        return a && Zt(this.baseUrl), i;
      } catch (n) {
        throw a && o && Zt(this.baseUrl), n;
      } finally {
        a && Qu();
      }
    }
    async _postForm(e, r) {
      const a = await this._getAuthHeaders(), o = await fetch(`${this.baseUrl}${Xe}${e}`, {
        method: "POST",
        headers: a,
        body: r
      });
      return this._handleResponse(o);
    }
    async _handleResponse(e) {
      if (!e.ok) {
        let r = `HTTP ${e.status} ${e.statusText}`, a, o;
        const n = e.headers.get("X-Request-Id") ?? void 0;
        try {
          const s = await e.json();
          typeof (s == null ? void 0 : s.message) == "string" && s.message.trim() ? r = s.message : typeof (s == null ? void 0 : s.error) == "string" && (r = s.error), typeof (s == null ? void 0 : s.error) == "string" && (o = s.error), typeof (s == null ? void 0 : s.code) == "string" && (a = s.code);
        } catch {
        }
        throw sa("node", {
          path: cc(e),
          status: e.status,
          message: r,
          code: a ?? o,
          requestId: n
        }), a === "NODE_NOT_PROVISIONED" ? new eu() : new le(r, e.status, n, o);
      }
      if (e.status !== 204) return e.json();
    }
    async healthz() {
      return this._get("/healthz");
    }
    async readyz() {
      return this._get("/readyz");
    }
    async getStatus() {
      return this._get("/status");
    }
    async getVersion() {
      return this._get("/version");
    }
    async getNodeId() {
      return this._get("/node_id");
    }
    async getListeningAddresses() {
      return this._get("/listening_addresses");
    }
    async stopNode() {
      const e = await this._getAuthHeaders(), r = await fetch(`${this.baseUrl}/node/stop`, {
        method: "POST",
        headers: e
      });
      return this._handleResponse(r);
    }
    async getControlStatus() {
      if (this.v3) return re.requestControl("/control/status", void 0, this.baseUrl);
      const e = await this._getAuthHeaders(), r = await fetch(`${this.baseUrl}/control/status`, {
        headers: e
      });
      return this._handleResponse(r);
    }
    async getControlVersion() {
      const e = await this._getAuthHeaders(), r = await fetch(`${this.baseUrl}/control/version`, {
        headers: e
      });
      return this._handleResponse(r);
    }
    async unlockNode(e) {
      if (this.v3) return re.requestControl("/control/unlock", JSON.stringify(e ?? {}), this.baseUrl);
      const r = await this._getAuthHeaders(), a = await fetch(`${this.baseUrl}/control/unlock`, {
        method: "POST",
        headers: {
          ...r,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e ?? {})
      });
      return this._handleResponse(a);
    }
    async lockNode(e) {
      if (this.v3) return re.requestControl("/control/lock", JSON.stringify(e ?? {
        yes: true
      }), this.baseUrl);
      const r = await this._getAuthHeaders(), a = await fetch(`${this.baseUrl}/control/lock`, {
        method: "POST",
        headers: {
          ...r,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e ?? {
          yes: true
        })
      });
      return this._handleResponse(a);
    }
    async getBalances() {
      return this._get("/balances");
    }
    async getNewWalletAddress() {
      if (this.v3) try {
        return await re.requestNewAddress(this.baseUrl);
      } catch (e) {
        throw e instanceof ot ? new le(e.message, e.status, e.request_id, e.code) : e;
      }
      return this._post("/wallet/address/new");
    }
    async getNewWalletChangeAddress() {
      return this._post("/wallet/address/new");
    }
    async getCurrentWalletAddress() {
      try {
        return await this._get("/wallet/address/current");
      } catch (e) {
        if (!tu(e) && (this.v3 || !(e instanceof le && e.status === 404))) throw e;
        return this.walletAddressInit ?? (this.walletAddressInit = this.initializeCurrentWalletAddress().finally(() => {
          this.walletAddressInit = void 0;
        })), this.walletAddressInit;
      }
    }
    async initializeCurrentWalletAddress() {
      if (this.v3) {
        const e = await Oe();
        e.mode === "managed" && e.v3NodeId && e.v3AuthMode !== "direct-token" && await re.authorizeAddress(e.v3NodeId);
      }
      return this.getNewWalletAddress();
    }
    async syncWallet() {
      return this._post("/wallet/sync");
    }
    async listPeers() {
      const e = await this._get("/peers");
      return Promise.all(e.map(async (r) => {
        if (!/^(02|03)[0-9a-f]{64}$/i.test(r.node_id)) return r;
        const a = new AbortController();
        let o;
        try {
          const n = new Promise((i, l) => {
            o = setTimeout(() => {
              a.abort(), l(new Error("Cloud peer lookup timed out"));
            }, 3e3);
          }), s = await Promise.race([
            re.lookupPeerAddress(r.node_id.toLowerCase(), a.signal),
            n
          ]);
          return s ? {
            ...r,
            address: s
          } : r;
        } catch {
          return r;
        } finally {
          o !== void 0 && clearTimeout(o);
        }
      }));
    }
    async connectPeer(e) {
      return this._post("/peers/connect", e);
    }
    async disconnectPeer(e) {
      return this._post("/peers/disconnect", e);
    }
    async listChannels() {
      return this._get("/channels");
    }
    async openChannel(e) {
      var _a2;
      if (!e.rgb) return this._post("/channel/open", e);
      const r = this.baseUrl === "/dev-node" ? (await Br()).url : this.baseUrl;
      if (!r && !((_a2 = e.rgb.color_context_data) == null ? void 0 : _a2.trim())) throw new le("Missing consignment API base URL");
      const a = Q0(e, r || this.baseUrl);
      return this._post("/channel/open", a);
    }
    async closeChannel(e) {
      return this._post("/channel/close", e);
    }
    async forceCloseChannel(e) {
      return this._post("/channel/force_close", e);
    }
    async listClosingChannels() {
      try {
        return await this._get("/channels/closing");
      } catch (e) {
        if (e instanceof le && e.status === 404) return [];
        throw e;
      }
    }
    async eventsWaitNext(e) {
      const r = await this._getAuthHeaders(), a = `${this.baseUrl}${Xe}/events/wait_next`, o = await fetch(a, {
        method: "POST",
        headers: {
          ...r,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          timeout_secs: Qg
        }),
        signal: e
      });
      return this._handleResponse(o);
    }
    async eventsHandled() {
      return this._post("/events/handled");
    }
    async listPayments() {
      return this._get("/payments");
    }
    async getPayment(e) {
      return this._get(`/payment/${e}`);
    }
    async waitPayment(e, r) {
      return this._post(`/payment/${e}/wait`, r);
    }
    async abandonPayment(e) {
      return this._post(`/payment/${e}/abandon`);
    }
    async bolt11Receive(e) {
      if (this.v3) {
        const r = JSON.stringify(e);
        try {
          return await re.requestInvoice(r, this.baseUrl);
        } catch (a) {
          throw a instanceof ot ? new le(a.message, a.status, a.request_id, a.code) : a;
        }
      }
      return this._post("/bolt11/receive", e);
    }
    async bolt11ReceiveVar(e) {
      return this._post("/bolt11/receive_var", e);
    }
    async bolt11ReceiveForHash(e) {
      return this._post("/bolt11/receive_for_hash", e);
    }
    async bolt11Pay(e) {
      if (this.v3) try {
        return await re.requestPayment(JSON.stringify(e), this.baseUrl);
      } catch (r) {
        throw r instanceof ot ? new le(r.message, r.status, r.request_id, r.code) : r;
      }
      return this._post("/bolt11/pay", e);
    }
    async bolt11Send(e) {
      return this._post("/bolt11/send", e);
    }
    async bolt11SendUsingAmount(e) {
      return this._post("/bolt11/send_using_amount", e);
    }
    async bolt11Decode(e) {
      return this.v3 ? re.requestDecode(JSON.stringify(e), this.baseUrl) : this._post("/bolt11/decode", e);
    }
    async bolt11ClaimForHash(e) {
      return this._post("/bolt11/claim_for_hash", e);
    }
    async bolt11FailForHash(e) {
      return this._post("/bolt11/fail_for_hash", e);
    }
    async bolt12OfferReceive(e) {
      return this._post("/bolt12/offer/receive", e);
    }
    async bolt12OfferReceiveVar(e) {
      if (this.v3) try {
        return await re.requestOffer(JSON.stringify(e), this.baseUrl);
      } catch (r) {
        throw r instanceof ot ? new le(r.message, r.status, r.request_id, r.code) : r;
      }
      return this._post("/bolt12/offer/receive_var", e);
    }
    async bolt12OfferSend(e) {
      return this._post("/bolt12/offer/send", e);
    }
    async bolt12OfferDecode(e) {
      return this._post("/bolt12/offer/decode", {
        offer: e
      });
    }
    async bolt12RefundInitiate(e) {
      return this._post("/bolt12/refund/initiate", e);
    }
    async bolt12RefundDecode(e) {
      return this._post("/bolt12/refund/decode", e);
    }
    async bolt12RefundRequestPayment(e) {
      return this._post("/bolt12/refund/request_payment", e);
    }
    async spontaneousSend(e) {
      return this._post("/spontaneous/send", e);
    }
    async listContracts() {
      return this._get("/rgb/contracts");
    }
    invalidateContractsCache() {
      Zt(this.baseUrl);
    }
    async getContractBalance(e) {
      return this._get(`/rgb/contract/${On(e)}/balance`);
    }
    async isContractKnown(e) {
      return this._get(`/rgb/contract/${On(e)}/known`);
    }
    async getContractBalanceIfImported(e) {
      try {
        return await this.getContractBalance(e);
      } catch (r) {
        if (r instanceof le && r.status === 404) return null;
        throw r;
      }
    }
    async issueContract(e) {
      return this._post("/rgb/contracts/issue", e);
    }
    async listIssuers() {
      return this._get("/rgb/issuers");
    }
    async importIssuerRaw(e, r) {
      if (this.v3) return re.requestIssuerImport(e, r, this.baseUrl);
      const a = await this._getAuthHeaders(), o = encodeURIComponent(e), n = await fetch(`${this.baseUrl}${Xe}/rgb/issuers/import?name=${o}&format=raw`, {
        method: "POST",
        headers: {
          ...a,
          "Content-Type": "application/octet-stream"
        },
        body: r
      });
      return this._handleResponse(n);
    }
    async exportContract(e) {
      return this._post("/rgb/contracts/export", e);
    }
    async importContract(e, r) {
      const a = await e.arrayBuffer(), o = new Uint8Array(a.slice(0, 4)), s = o[0] === 80 && o[1] === 75 && o[2] === 3 && o[3] === 4 ? "zip" : "raw", i = `contract_id=${encodeURIComponent(r)}&format=${s}`;
      if (this.v3) {
        const h = await re.requestBinaryOperation("/api/v1/rgb/contracts/import", i, a, this.baseUrl);
        return Zt(this.baseUrl), h;
      }
      const l = await this._getAuthHeaders(), c = `/rgb/contracts/import?${i}`, d = await fetch(`${this.baseUrl}${Xe}${c}`, {
        method: "POST",
        headers: {
          ...l,
          "Content-Type": "application/octet-stream"
        },
        body: a
      });
      return this._handleResponse(d);
    }
    async getRgbDescriptor() {
      return this._get("/rgb/descriptor");
    }
    async rgbSignMessage(e) {
      return this._post("/rgb/sign_message", e);
    }
    async rgbSync() {
      return this._post("/rgb/sync");
    }
    async downloadConsignment(e, r = "raw") {
      if (this.v3) return re.requestConsignment(e, r, this.baseUrl);
      const a = await this._getAuthHeaders(), o = `${this.baseUrl}${Xe}/rgb/consignments/${encodeURIComponent(e)}?format=${r}`, n = await fetch(o, {
        headers: a
      });
      if (!n.ok) throw sa("node", {
        method: "GET",
        path: cc(n),
        status: n.status,
        message: n.statusText
      }), new le(`HTTP ${n.status} ${n.statusText}`, n.status);
      return n.blob();
    }
    async getRgbNewAddress() {
      return this._post("/rgb/address/new");
    }
    async getRgbCurrentAddress() {
      try {
        return await this._get("/rgb/address/current");
      } catch (e) {
        if (!this.v3 && e instanceof le && e.status === 404) return this.getRgbNewAddress();
        throw e;
      }
    }
    async listRgbUtxos(e = false) {
      const r = e ? "?refresh=true" : "";
      return this._get(`/rgb/utxos${r}`);
    }
    async listWalletUtxos(e = false) {
      const r = e && !this.v3 ? "?refresh=true" : "";
      return this._get(`/wallet/utxos${r}`);
    }
    async getWalletUtxoStatus(e) {
      if (!/^[0-9a-fA-F]{64}:(?:0|[1-9][0-9]{0,9})$/.test(e)) throw new le("Invalid outpoint");
      const r = await this._get(`/wallet/utxo/status?outpoint=${encodeURIComponent(e)}`);
      return Yg(r);
    }
    async getChannelSpendableSats() {
      try {
        return (await this.listWalletUtxos()).utxos.filter((r) => !r.lock.locked).reduce((r, a) => r + Number(a.value_sats), 0);
      } catch (e) {
        if (!(e instanceof le) || ![
          404,
          405,
          501
        ].includes(e.status ?? 0)) throw e;
        const [r, a] = await Promise.all([
          this.getBalances(),
          this.getRgbLockedSats()
        ]), o = Number(r.btc.onchain_spendable_sats);
        return Math.max(0, o - a);
      }
    }
    async getRgbLockedSats() {
      try {
        return (await this.listRgbUtxosSummary()).utxos.reduce((r, a) => r + Number(a.value_sats ?? 0), 0);
      } catch (e) {
        if (!(e instanceof le) || ![
          404,
          405,
          501
        ].includes(e.status ?? 0)) throw e;
        return (await this.listRgbUtxos()).utxos.reduce((a, o) => a + Number(o.value_sats), 0);
      }
    }
    async getRgbBalanceBreakdown() {
      let e;
      try {
        e = (await this.listRgbUtxosSummary()).utxos.map((a) => ({
          value_sats: a.value_sats,
          occupied: (a.assets ?? []).length > 0
        }));
      } catch (r) {
        if (!(r instanceof le) || ![
          404,
          405,
          501
        ].includes(r.status ?? 0)) throw r;
        e = (await this.listRgbUtxos()).utxos.map((o) => ({
          value_sats: o.value_sats,
          occupied: o.rgb.allocations.length > 0
        }));
      }
      return e.reduce((r, a) => {
        const o = Number(a.value_sats ?? 0);
        return a.occupied ? r.lockedSats += o : r.availableSats += o, r;
      }, {
        availableSats: 0,
        lockedSats: 0
      });
    }
    async listRgbUtxosSummary(e = false) {
      if (e && this.v3) return await this.listRgbUtxos(true), this._get("/rgb/utxos/summary");
      const r = e ? "?refresh=true" : "";
      return this._get(`/rgb/utxos/summary${r}`);
    }
    async releaseRgbUtxo(e) {
      return this._post("/rgb/utxos/release", e);
    }
    async fundRgbUtxos(e) {
      return this._post("/rgb/utxos/fund", e);
    }
    async topUpRgbUtxo(e) {
      return this._post("/rgb/utxos/top_up", e);
    }
    async sweepRgbUtxo(e) {
      return this._post("/rgb/utxos/sweep", e);
    }
    async listNetworkGraphNodes() {
      return this._get("/network_graph/nodes");
    }
    async getNetworkGraphNode(e) {
      return this._get(`/network_graph/node/${encodeURIComponent(e)}`);
    }
    async listNetworkGraphChannels() {
      return this._get("/network_graph/channels");
    }
    async getNetworkGraphChannel(e) {
      return this._get(`/network_graph/channel/${encodeURIComponent(String(e))}`);
    }
    async rgbLnCreateInvoice(e) {
      return this._post("/rgb/ln/invoice/create", e);
    }
    async rgbLnCreateInvoiceForHash(e) {
      return this._post("/rgb/ln/invoice/create_for_hash", e);
    }
    async rgbLnEstimateCarrier(e) {
      return this._post("/rgb/ln/invoice/estimate_carrier", e);
    }
    async rgbLnDecodeInvoice(e) {
      return this._post("/rgb/ln/invoice/decode", {
        invoice: e
      });
    }
    async rgbLnSend(e) {
      return this._post("/rgb/ln/pay", e);
    }
    async precheckRgbLnPayment(e) {
      let r = null;
      try {
        r = await this.rgbLnDecodeInvoice(e.invoice);
      } catch {
        return;
      }
      const a = e.contractId ?? r.contract_id, o = BigInt(e.assetAmount ?? r.asset_amount ?? 0), n = r.carrier_amount_msat ? BigInt(r.carrier_amount_msat) : 0n, s = (await this.listChannels()).filter((i) => i.is_usable);
      if (a && o > 0n) {
        const i = s.filter((l) => {
          var _a2;
          return ((_a2 = l.rgb_balance) == null ? void 0 : _a2.contract_id) === a;
        }).reduce((l, c) => l + BigInt(c.rgb_balance.local_amount), 0n);
        if (o > i) throw new le(`Insufficient RGB balance. Need: ${o.toString()}, available: ${i.toString()}`, void 0, void 0, "InsufficientBalance");
      }
      if (n > 0n) {
        const l = (a ? s.filter((c) => {
          var _a2;
          return ((_a2 = c.rgb_balance) == null ? void 0 : _a2.contract_id) === a;
        }) : s).reduce((c, d) => c + BigInt(d.outbound_capacity_msat), 0n);
        if (n > l) throw new le(`Insufficient carrier BTC outbound capacity on the RGB channel. Need: ${(Number(n) / 1e3).toLocaleString()} sats, available: ${(Number(l) / 1e3).toLocaleString()} sats`, void 0, void 0, "InsufficientBalance");
      }
    }
    async rgbOnchainCreateInvoice(e) {
      return this._post("/rgb/onchain/invoice/create", e);
    }
    async rgbOnchainDecodeInvoice(e) {
      return this._post("/rgb/onchain/invoice/decode", {
        invoice: e
      });
    }
    async rgbOnchainSend(e) {
      const r = this.v3 ? await re.deliveryScope() : void 0, a = await this._post("/rgb/onchain/send", e);
      if (r) try {
        await Nn(this, e.invoice, a, r);
      } catch (o) {
        console.warn("[RGB delivery] native send succeeded; relay deferred", o);
      }
      return a;
    }
    async rgbOnchainReceive(e) {
      return this._post("/rgb/onchain/receive", e);
    }
    async rgbOnchainReceiveRaw(e, r, a = "zip") {
      if (this.v3) {
        const i = await re.requestBinaryOperation("/api/v1/rgb/onchain/receive", `format=${encodeURIComponent(a)}&payment_id=${encodeURIComponent(e)}`, r, this.baseUrl);
        return Zt(this.baseUrl), i;
      }
      const o = await this._getAuthHeaders(), n = await fetch(`${this.baseUrl}${Xe}/rgb/onchain/receive?format=${a}&payment_id=${e}`, {
        method: "POST",
        headers: {
          ...o,
          "Content-Type": "application/octet-stream"
        },
        body: r
      }), s = await this._handleResponse(n);
      return Zt(this.baseUrl), s;
    }
    async listRgbOnchainPayments() {
      return this._get("/rgb/onchain/payments");
    }
    async listSwaps() {
      return this._get("/swap/list");
    }
    async createSwapOffer(e) {
      return this._post("/swap/offers", e);
    }
    async decodeSwap(e) {
      return this._post("/swap/decode", e);
    }
    async acceptSwap(e) {
      return this._post("/swap/accept", e);
    }
    async executeSwap(e) {
      return this._post("/swap/execute", e);
    }
    async getSwapStatus(e) {
      return this._get(`/swap/${e}`);
    }
    async walletSend(e) {
      return this._post("/wallet/send", e);
    }
    async walletSendAll(e) {
      return this._post("/wallet/send_all", e);
    }
  }, __publicField(_c2, "readiness", /* @__PURE__ */ new Map()), _c2);
  const am = Object.freeze(Object.defineProperty({
    __proto__: null,
    NodeExportError: rm,
    NodeNotProvisionedError: eu,
    RgbLdkClient: Ze,
    RgbLdkError: le,
    contractPathSegment: On,
    isUninitializedAddressError: tu,
    withChannelColorContext: Q0
  }, Symbol.toStringTag, {
    value: "Module"
  })), ru = 3e4, Ja = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map();
  Um = async function(t, e = {}) {
    const { force: r = false, minIntervalMs: a = ru } = e;
    if (Qr()) return false;
    const o = t.nodeKey, n = Rr.get(o);
    if (n) return await n, true;
    if (!r) {
      const i = Ja.get(o) ?? 0;
      if (Date.now() - i < a) return false;
    }
    const s = (async () => {
      await t.syncWallet().catch(() => {
      }), await t.rgbSync().catch(() => {
      }), Ja.set(o, Date.now());
    })().finally(() => {
      Rr.delete(o);
    });
    return Rr.set(o, s), await s, true;
  };
  jm = async function(t, e = {}) {
    const { force: r = false, minIntervalMs: a = ru } = e;
    if (Qr()) return false;
    const o = `${t.nodeKey}#wallet`, n = Rr.get(o);
    if (n) return await n, true;
    if (!r) {
      const i = Ja.get(o) ?? 0;
      if (Date.now() - i < a) return false;
    }
    const s = t.syncWallet().catch(() => {
    }).then(() => {
      Ja.set(o, Date.now());
    }).finally(() => {
      Rr.delete(o);
    });
    return Rr.set(o, s), await s, true;
  };
  const Ht = "activeProviderApproval", om = {
    pendingConnectRequest: "connectResult",
    pendingNetworkSwitchRequest: "networkSwitchResult",
    pendingDelegationRequest: "delegationResult",
    pendingAuthSignRequest: "authSignResult",
    pendingSignMessageRequest: "signMessageResult",
    pendingImportContractRequest: "importContractResult",
    pendingIssueContractRequest: "issueContractResult",
    pendingLightningPaymentRequest: "lightningPaymentResult",
    pendingSendBitcoinRequest: "sendBitcoinResult",
    pendingSendRgbRequest: "sendRgbResult",
    pendingOpenChannelRequest: "openChannelResult",
    pendingCloseChannelRequest: "closeChannelResult",
    pendingSellInvoiceRequest: "sellInvoiceResult",
    pendingRgbLnPaymentRequest: "rgbLnPaymentResult",
    pendingNativeSwapRequest: "nativeSwapResult"
  };
  Hm = async function(t = false) {
    var _a2;
    const e = await Y.get(Ht), r = t && (e == null ? void 0 : e.claimed) && e.pendingKey === "pendingNetworkSwitchRequest" && await ee() === ((_a2 = e.snapshot) == null ? void 0 : _a2.to) && !await De() && !!await Y.get("walletPassword");
    r || (ca += 1), e && !r && await nm(e);
  };
  let Na = false, ca = 0;
  async function au() {
    const t = await ee(), e = await Oe(t);
    return {
      network: t,
      node: JSON.stringify({
        mode: e.mode,
        url: e.url,
        v3NodeId: e.v3NodeId,
        managedWalletId: e.managedWalletId
      })
    };
  }
  qm = async function(t, e) {
    const r = await au(), a = {
      pendingKey: t,
      claimed: false,
      binding: {
        ...r,
        requestId: crypto.randomUUID(),
        expiresAt: Date.now() + e
      }
    };
    return await Y.set(Ht, a), a;
  };
  $m = async function(t, e) {
    t.snapshot = {
      ...e,
      approval: t.binding
    }, await Y.set(Ht, t), await Y.set(t.pendingKey, t.snapshot);
  };
  ou = async function(t) {
    const e = await Y.get(Ht);
    if (!(e == null ? void 0 : e.snapshot) || JSON.stringify(e.snapshot) !== JSON.stringify(t) || JSON.stringify(await Y.get(e.pendingKey)) !== JSON.stringify(t)) throw new Error("APPROVAL_CHANGED");
    if (e.completed) throw new Error("APPROVAL_ALREADY_COMPLETED");
    if (Date.now() >= e.binding.expiresAt) throw new Error("APPROVAL_EXPIRED");
    const r = await au();
    if (await De() || !await Y.get("walletPassword") || r.network !== e.binding.network || r.node !== e.binding.node) throw new Error("APPROVAL_WALLET_CHANGED");
    return e;
  };
  Mm = async function(t) {
    if (Na || Oa) throw new Error("APPROVAL_ALREADY_CLAIMED");
    Na = true;
    const e = ca;
    try {
      const r = await ou(t);
      if (e !== ca) throw new Error("APPROVAL_WALLET_CHANGED");
      if (r.claimed || r.completed) throw new Error("APPROVAL_ALREADY_CLAIMED");
      return r.claimed = true, await Y.set(Ht, r), {
        claimed: true
      };
    } finally {
      Na = false;
    }
  };
  let Oa = false;
  Wm = async function(t, e, r) {
    if (Oa || Na) throw new Error("APPROVAL_ALREADY_CLAIMED");
    Oa = true;
    const a = ca;
    try {
      const o = await Y.get(Ht);
      if (!(o == null ? void 0 : o.snapshot) || JSON.stringify(t) !== JSON.stringify(o.snapshot) || Date.now() >= o.binding.expiresAt) throw new Error("APPROVAL_CHANGED");
      if (o.completed) throw new Error("APPROVAL_ALREADY_COMPLETED");
      if (om[o.pendingKey] !== e) throw new Error("INVALID_APPROVAL_RESULT");
      if (o.claimed && o.pendingKey === "pendingNetworkSwitchRequest" && await ee() === o.snapshot.to && !await De() && !!await Y.get("walletPassword") || await ou(t), a !== ca) throw new Error("APPROVAL_WALLET_CHANGED");
      const s = r && typeof r == "object" && "error" in r ? r.error : void 0;
      if (o.claimed && [
        "USER_REJECTED",
        "PAYMENT_EXPIRED",
        "QUOTE_EXPIRED",
        "APPROVAL_ALREADY_CLAIMED"
      ].includes(String(s))) throw new Error("APPROVAL_ALREADY_CLAIMED");
      if (!o.claimed && !s) throw new Error("APPROVAL_NOT_CLAIMED");
      o.completed = true, await Y.set(Ht, o), await Y.set(`${e}:${o.binding.requestId}`, r);
    } finally {
      Oa = false;
    }
  };
  nm = async function(t) {
    var _a2;
    ((_a2 = await Y.get(Ht)) == null ? void 0 : _a2.binding.requestId) === t.binding.requestId && (await Y.remove(t.pendingKey), await Y.remove(Ht));
  };
  Vm = function(t, e) {
    let r = e, a = false;
    const o = async (n, s) => {
      const i = await chrome.runtime.sendMessage({
        type: n,
        payload: s
      });
      if (!(i == null ? void 0 : i.success)) throw new Error((i == null ? void 0 : i.error) ?? "APPROVAL_UNAVAILABLE");
      return i.data;
    };
    return {
      async get(n) {
        const s = await Y.get(n);
        return n === t && r === void 0 && (r = structuredClone(s)), s;
      },
      async claim() {
        const n = await o("CLAIM_PROVIDER_APPROVAL", {
          snapshot: r
        });
        return a = true, n;
      },
      async check() {
        return o("CHECK_PROVIDER_APPROVAL", {
          snapshot: r
        });
      },
      async fail(n, s) {
        if (a) return o("FINISH_PROVIDER_APPROVAL", {
          snapshot: r,
          resultKey: n,
          data: {
            error: s instanceof Error ? s.message : "APPROVAL_EXECUTION_FAILED"
          }
        });
      },
      async set(n, s) {
        return o("FINISH_PROVIDER_APPROVAL", {
          snapshot: r,
          resultKey: n,
          data: s
        });
      },
      async remove(n) {
        if (n !== t) throw new Error("INVALID_APPROVAL_KEY");
      }
    };
  };
  const go = "authorized_sites";
  mo = async function() {
    const t = await V.get(go);
    return Array.isArray(t) ? t : [];
  };
  async function im(t) {
    return (await mo()).find((r) => r.origin === t) ?? null;
  }
  Km = async function(t, e) {
    if (!t || e.length === 0) return;
    const r = Date.now(), a = await mo(), o = a.find((l) => l.origin === t), n = o ? Array.from(/* @__PURE__ */ new Set([
      ...o.scopes,
      ...e
    ])) : Array.from(new Set(e)), s = {
      origin: t,
      authorizedAt: (o == null ? void 0 : o.authorizedAt) ?? r,
      ...(o == null ? void 0 : o.expiresAt) !== void 0 ? {
        expiresAt: o.expiresAt
      } : {},
      scopes: n,
      lastUsedAt: r
    }, i = o ? a.map((l) => l.origin === t ? s : l) : [
      ...a,
      s
    ];
    await V.set(go, i);
  };
  Gm = async function(t) {
    const e = await mo();
    await V.set(go, e.filter((r) => r.origin !== t));
  };
  async function sm(t, e) {
    const r = await im(t);
    return !r || r.expiresAt && Date.now() > r.expiresAt ? false : r.scopes.includes(e);
  }
  Ym = async function(t, e) {
    if (!await sm(t, e)) throw new Error("ORIGIN_NOT_AUTHORIZED");
    const a = await mo(), o = a.findIndex((n) => n.origin === t);
    o >= 0 && (a[o] = {
      ...a[o],
      lastUsedAt: Date.now()
    }, await V.set(go, a));
  };
  uc = function(t) {
    const e = String(t);
    if (!/^[1-9]\d*$/.test(e) || !Number.isSafeInteger(Number(e))) throw new Error("INVALID_PAYMENT_AMOUNT");
    return e;
  };
  Xm = function(t, e) {
    const r = t == null || String(t) === "0" ? void 0 : uc(t), a = e === void 0 ? void 0 : uc(e);
    if (r && a && r !== a) throw new Error("INVOICE_AMOUNT_MISMATCH");
    if (!r && !a) throw new Error("INVOICE_AMOUNT_REQUIRED");
    return r ?? a;
  };
  Zm = function(t) {
    if (typeof t.satoshis != "number" || !Number.isSafeInteger(t.satoshis) || t.satoshis <= 0 || t.satoshis > 21e14) throw new Error("INVALID_PAYMENT_AMOUNT");
    const e = t.feeRate ?? 20;
    if (typeof e != "number" || !Number.isFinite(e) || e <= 0 || e > 1e3) throw new Error("INVALID_FEE_RATE");
    if (!t.toAddress || t.toAddress.trim() !== t.toAddress) throw new Error("INVALID_DESTINATION");
  };
  Jm = class {
    constructor(e) {
      __publicField(this, "baseUrl");
      this.baseUrl = kh(e);
    }
    async getAddress(e) {
      try {
        const r = await fetch(`${this.baseUrl}/address/${e}`);
        if (!r.ok) throw new Error(`Failed to fetch address info: ${r.statusText}`);
        return await r.json();
      } catch (r) {
        throw console.error("Error fetching address:", r), r;
      }
    }
    async getUTXOs(e) {
      try {
        const r = await fetch(`${this.baseUrl}/address/${e}/utxo`);
        if (!r.ok) throw new Error(`Failed to fetch UTXOs: ${r.statusText}`);
        return await r.json();
      } catch (r) {
        throw console.error("Error fetching UTXOs:", r), r;
      }
    }
    async broadcastTx(e) {
      try {
        const r = await fetch(`${this.baseUrl}/tx`, {
          method: "POST",
          body: e,
          headers: {
            "Content-Type": "text/plain"
          }
        });
        if (!r.ok) {
          const a = await r.text();
          throw new Error(`Failed to broadcast transaction: ${a}`);
        }
        return await r.text();
      } catch (r) {
        throw console.error("Error broadcasting transaction:", r), r;
      }
    }
    async getFeeEstimates() {
      try {
        const e = await fetch(`${this.baseUrl}/fee-estimates`);
        if (!e.ok) throw new Error(`Failed to fetch fee estimates: ${e.statusText}`);
        return await e.json();
      } catch (e) {
        return console.error("Error fetching fee estimates:", e), {
          1: 6,
          3: 3,
          6: 1
        };
      }
    }
    async getBalance(e) {
      try {
        const r = await this.getAddress(e), a = r.chain_stats.funded_txo_sum - r.chain_stats.spent_txo_sum, o = r.mempool_stats.funded_txo_sum - r.mempool_stats.spent_txo_sum;
        return a + o;
      } catch (r) {
        throw console.error("Error getting balance:", r), r;
      }
    }
    async getAddressTransactions(e) {
      try {
        const r = `${this.baseUrl}/address/${e}/txs`, a = await fetch(r);
        if (!a.ok) throw new Error(`Failed to fetch transactions: ${a.status} ${a.statusText}`);
        return await a.json();
      } catch (r) {
        throw console.error("Error fetching transactions:", r), r;
      }
    }
    async getBlockHeight() {
      try {
        const e = await fetch(`${this.baseUrl}/blocks/tip/height`);
        if (!e.ok) throw new Error(`Failed to fetch block height: ${e.statusText}`);
        const r = await e.text();
        return parseInt(r, 10);
      } catch (e) {
        return console.error("Error fetching block height:", e), 0;
      }
    }
    async getTransaction(e) {
      try {
        const r = await fetch(`${this.baseUrl}/tx/${e}`);
        if (!r.ok) throw new Error(`Failed to fetch transaction: ${r.statusText}`);
        return await r.json();
      } catch (r) {
        throw console.error("Error fetching transaction:", r), r;
      }
    }
  };
})();
export {
  Xh as $,
  qh as A,
  Jm as B,
  Vg as C,
  Im as D,
  $s as E,
  Ch as F,
  V as G,
  Um as H,
  km as I,
  nm as J,
  qm as K,
  Gm as L,
  Ra as M,
  dh as N,
  Br as O,
  ep as P,
  $m as Q,
  Ze as R,
  wm as S,
  Bh as T,
  dc as U,
  Je as V,
  Zn as W,
  Th as X,
  mm as Y,
  Yh as Z,
  et as _,
  __tla,
  Y as a,
  ua as a0,
  um as a1,
  Dm as a2,
  Rm as a3,
  Em as a4,
  le as a5,
  Vm as a6,
  hm as a7,
  vm as a8,
  Qr as a9,
  Qh as aA,
  tp as aB,
  Wh as aC,
  fa as aD,
  $a as aE,
  bm as aF,
  Tl as aG,
  ym as aH,
  Pm as aI,
  jm as aJ,
  _m as aK,
  Km as aL,
  E0 as aM,
  El as aN,
  Zm as aO,
  Xm as aP,
  pm as aQ,
  Mh as aR,
  $h as aS,
  el as aT,
  dm as aU,
  fm as aV,
  Zh as aW,
  xm as aX,
  Am as aY,
  zm as aa,
  Kh as ab,
  Nm as ac,
  Hh as ad,
  Fm as ae,
  Tm as af,
  eu as ag,
  xh as ah,
  Lm as ai,
  In as aj,
  oi as ak,
  Yr as al,
  jh as am,
  Lh as an,
  Gh as ao,
  Om as ap,
  fe as aq,
  Lt as ar,
  A0 as as,
  Mg as at,
  ot as au,
  ic as av,
  rm as aw,
  Jh as ax,
  Vh as ay,
  mo as az,
  Dd as b,
  vl as c,
  Ke as d,
  Sm as e,
  Ym as f,
  ee as g,
  Oe as h,
  De as i,
  Qt as j,
  Ar as k,
  at as l,
  re as m,
  si as n,
  ln as o,
  zt as p,
  uc as q,
  ha as r,
  kr as s,
  Hm as t,
  Cm as u,
  Bm as v,
  Wm as w,
  Mm as x,
  ou as y,
  Uh as z
};
