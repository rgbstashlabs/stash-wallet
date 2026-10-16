import { _ as q, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let oe, re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Q = (e) => {
    const t = /* @__PURE__ */ new Map();
    t.set("web", {
      name: "web"
    });
    const n = e.CapacitorPlatforms || {
      currentPlatform: {
        name: "web"
      },
      platforms: t
    }, l = (f, g) => {
      n.platforms.set(f, g);
    }, c = (f) => {
      n.platforms.has(f) && (n.currentPlatform = n.platforms.get(f));
    };
    return n.addPlatform = l, n.setPlatform = c, n;
  }, Z = (e) => e.CapacitorPlatforms = Q(e), H = Z(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {});
  H.addPlatform;
  H.setPlatform;
  var T;
  (function(e) {
    e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE";
  })(T || (T = {}));
  class R extends Error {
    constructor(t, n) {
      super(t), this.message = t, this.code = n;
    }
  }
  const B = (e) => {
    var t, n;
    return (e == null ? void 0 : e.androidBridge) ? "android" : !((n = (t = e == null ? void 0 : e.webkit) === null || t === void 0 ? void 0 : t.messageHandlers) === null || n === void 0) && n.bridge ? "ios" : "web";
  }, ee = (e) => {
    var t, n, l, c, f;
    const g = e.CapacitorCustomPlatform || null, s = e.Capacitor || {}, W = s.Plugins = s.Plugins || {}, a = e.CapacitorPlatforms, x = () => g !== null ? g.name : B(e), b = ((t = a == null ? void 0 : a.currentPlatform) === null || t === void 0 ? void 0 : t.getPlatform) || x, $ = () => b() !== "web", F = ((n = a == null ? void 0 : a.currentPlatform) === null || n === void 0 ? void 0 : n.isNativePlatform) || $, y = (i) => {
      const o = U.get(i);
      return !!((o == null ? void 0 : o.platforms.has(b())) || A(i));
    }, K = ((l = a == null ? void 0 : a.currentPlatform) === null || l === void 0 ? void 0 : l.isPluginAvailable) || y, V = (i) => {
      var o;
      return (o = s.PluginHeaders) === null || o === void 0 ? void 0 : o.find((C) => C.name === i);
    }, A = ((c = a == null ? void 0 : a.currentPlatform) === null || c === void 0 ? void 0 : c.getPluginHeader) || V, G = (i) => e.console.error(i), Y = (i, o, C) => Promise.reject(`${C} does not have an implementation of "${o}".`), U = /* @__PURE__ */ new Map(), k = (i, o = {}) => {
      const C = U.get(i);
      if (C) return console.warn(`Capacitor plugin "${i}" already registered. Cannot register plugins twice.`), C.proxy;
      const _ = b(), E = A(i);
      let P;
      const z = async () => (!P && _ in o ? P = typeof o[_] == "function" ? P = await o[_]() : P = o[_] : g !== null && !P && "web" in o && (P = typeof o.web == "function" ? P = await o.web() : P = o.web), P), J = (r, d) => {
        var v, w;
        if (E) {
          const L = E == null ? void 0 : E.methods.find((u) => d === u.name);
          if (L) return L.rtype === "promise" ? (u) => s.nativePromise(i, d.toString(), u) : (u, O) => s.nativeCallback(i, d.toString(), u, O);
          if (r) return (v = r[d]) === null || v === void 0 ? void 0 : v.bind(r);
        } else {
          if (r) return (w = r[d]) === null || w === void 0 ? void 0 : w.bind(r);
          throw new R(`"${i}" plugin is not implemented on ${_}`, T.Unimplemented);
        }
      }, p = (r) => {
        let d;
        const v = (...w) => {
          const L = z().then((u) => {
            const O = J(u, r);
            if (O) {
              const I = O(...w);
              return d = I == null ? void 0 : I.remove, I;
            } else throw new R(`"${i}.${r}()" is not implemented on ${_}`, T.Unimplemented);
          });
          return r === "addListener" && (L.remove = async () => d()), L;
        };
        return v.toString = () => `${r.toString()}() { [capacitor code] }`, Object.defineProperty(v, "name", {
          value: r,
          writable: false,
          configurable: false
        }), v;
      }, M = p("addListener"), D = p("removeListener"), j = (r, d) => {
        const v = M({
          eventName: r
        }, d), w = async () => {
          const u = await v;
          D({
            eventName: r,
            callbackId: u
          }, d);
        }, L = new Promise((u) => v.then(() => u({
          remove: w
        })));
        return L.remove = async () => {
          console.warn("Using addListener() without 'await' is deprecated."), await w();
        }, L;
      }, m = new Proxy({}, {
        get(r, d) {
          switch (d) {
            case "$$typeof":
              return;
            case "toJSON":
              return () => ({});
            case "addListener":
              return E ? j : M;
            case "removeListener":
              return D;
            default:
              return p(d);
          }
        }
      });
      return W[i] = m, U.set(i, {
        name: i,
        proxy: m,
        platforms: /* @__PURE__ */ new Set([
          ...Object.keys(o),
          ...E ? [
            _
          ] : []
        ])
      }), m;
    }, X = ((f = a == null ? void 0 : a.currentPlatform) === null || f === void 0 ? void 0 : f.registerPlugin) || k;
    return s.convertFileSrc || (s.convertFileSrc = (i) => i), s.getPlatform = b, s.handleError = G, s.isNativePlatform = F, s.isPluginAvailable = K, s.pluginMethodNoop = Y, s.registerPlugin = X, s.Exception = R, s.DEBUG = !!s.DEBUG, s.isLoggingEnabled = !!s.isLoggingEnabled, s.platform = s.getPlatform(), s.isNative = s.isNativePlatform(), s;
  }, te = (e) => e.Capacitor = ee(e), N = te(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {}), ne = N.registerPlugin;
  N.Plugins;
  oe = class {
    constructor(t) {
      this.listeners = {}, this.windowListeners = {}, t && (console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`), this.config = t);
    }
    addListener(t, n) {
      this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(n);
      const c = this.windowListeners[t];
      c && !c.registered && this.addWindowListener(c);
      const f = async () => this.removeListener(t, n), g = Promise.resolve({
        remove: f
      });
      return Object.defineProperty(g, "remove", {
        value: async () => {
          console.warn("Using addListener() without 'await' is deprecated."), await f();
        }
      }), g;
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const t in this.windowListeners) this.removeWindowListener(this.windowListeners[t]);
      this.windowListeners = {};
    }
    notifyListeners(t, n) {
      const l = this.listeners[t];
      l && l.forEach((c) => c(n));
    }
    hasListeners(t) {
      return !!this.listeners[t].length;
    }
    registerWindowListener(t, n) {
      this.windowListeners[n] = {
        registered: false,
        windowEventName: t,
        pluginEventName: n,
        handler: (l) => {
          this.notifyListeners(n, l);
        }
      };
    }
    unimplemented(t = "not implemented") {
      return new N.Exception(t, T.Unimplemented);
    }
    unavailable(t = "not available") {
      return new N.Exception(t, T.Unavailable);
    }
    async removeListener(t, n) {
      const l = this.listeners[t];
      if (!l) return;
      const c = l.indexOf(n);
      this.listeners[t].splice(c, 1), this.listeners[t].length || this.removeWindowListener(this.windowListeners[t]);
    }
    addWindowListener(t) {
      window.addEventListener(t.windowEventName, t.handler), t.registered = true;
    }
    removeWindowListener(t) {
      t && (window.removeEventListener(t.windowEventName, t.handler), t.registered = false);
    }
  };
  var S;
  (function(e) {
    e[e.NONE = 0] = "NONE", e[e.TOUCH_ID = 1] = "TOUCH_ID", e[e.FACE_ID = 2] = "FACE_ID", e[e.FINGERPRINT = 3] = "FINGERPRINT", e[e.FACE_AUTHENTICATION = 4] = "FACE_AUTHENTICATION", e[e.IRIS_AUTHENTICATION = 5] = "IRIS_AUTHENTICATION", e[e.MULTIPLE = 6] = "MULTIPLE";
  })(S || (S = {}));
  var h;
  (function(e) {
    e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BIOMETRICS_UNAVAILABLE = 1] = "BIOMETRICS_UNAVAILABLE", e[e.USER_LOCKOUT = 2] = "USER_LOCKOUT", e[e.BIOMETRICS_NOT_ENROLLED = 3] = "BIOMETRICS_NOT_ENROLLED", e[e.USER_TEMPORARY_LOCKOUT = 4] = "USER_TEMPORARY_LOCKOUT", e[e.AUTHENTICATION_FAILED = 10] = "AUTHENTICATION_FAILED", e[e.APP_CANCEL = 11] = "APP_CANCEL", e[e.INVALID_CONTEXT = 12] = "INVALID_CONTEXT", e[e.NOT_INTERACTIVE = 13] = "NOT_INTERACTIVE", e[e.PASSCODE_NOT_SET = 14] = "PASSCODE_NOT_SET", e[e.SYSTEM_CANCEL = 15] = "SYSTEM_CANCEL", e[e.USER_CANCEL = 16] = "USER_CANCEL", e[e.USER_FALLBACK = 17] = "USER_FALLBACK";
  })(h || (h = {}));
  let se;
  se = ne("NativeBiometric", {
    web: () => q(() => import("./web-Cw9zehrO.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((e) => new e.NativeBiometricWeb())
  });
  re = Object.freeze(Object.defineProperty({
    __proto__: null,
    get BiometricAuthError() {
      return h;
    },
    get BiometryType() {
      return S;
    },
    NativeBiometric: se
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  oe as W,
  __tla,
  re as i
};
