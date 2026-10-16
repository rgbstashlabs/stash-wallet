(function() {
  var _a, _b, _c, _d;
  const d = window, c = document.currentScript, l = ((_a = c == null ? void 0 : c.dataset) == null ? void 0 : _a.stashwalletId) || ((_c = (_b = c == null ? void 0 : c.src) == null ? void 0 : _b.match(/chrome-extension:\/\/([^/]+)\//)) == null ? void 0 : _c[1]) || "";
  if (!l || (d.__stashwallet || Object.defineProperty(window, "__stashwallet", { value: Object.freeze({ id: l }), writable: false, configurable: false, enumerable: true }), (_d = d.stashwallet) == null ? void 0 : _d.isStashWallet)) return;
  const w = "stashwallet-provider-request", u = "stashwallet-provider-response", f = "stashwallet-provider-event", m = "1.0.0", o = /* @__PURE__ */ new Map();
  function h(e, t) {
    const n = o.get(e);
    if (n) for (const a of Array.from(n)) try {
      a(t);
    } catch {
    }
  }
  window.addEventListener("message", (e) => {
    var _a2;
    if (e.source !== window || e.origin !== window.location.origin || ((_a2 = e.data) == null ? void 0 : _a2.source) !== f) return;
    const t = e.data.event;
    (t === "accountsChanged" || t === "networkChanged" || t === "disconnect") && h(t, e.data.payload);
  });
  function s(e) {
    if (!e || typeof e.method != "string" || !e.method) return Promise.reject(new Error("INVALID_PARAMETER"));
    const t = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `sw_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    return new Promise((n, a) => {
      const i = (r) => {
        var _a2, _b2;
        r.source !== window || r.origin !== window.location.origin || ((_a2 = r.data) == null ? void 0 : _a2.source) !== u || ((_b2 = r.data) == null ? void 0 : _b2.id) !== t || (window.removeEventListener("message", i), clearTimeout(E), r.data.success ? n(r.data.data) : a(new Error(r.data.error || "UNKNOWN")));
      }, E = setTimeout(() => {
        window.removeEventListener("message", i), a(new Error("TIMEOUT"));
      }, 12e4);
      window.addEventListener("message", i), window.postMessage({ source: w, id: t, type: e.method, payload: e.params }, window.location.origin);
    });
  }
  Object.defineProperty(window, "stashwallet", { value: Object.freeze({ isStashWallet: true, protocolVersion: m, request: s, async isConnected() {
    try {
      return await s({ method: "GET_ACCOUNTS" }), true;
    } catch {
      return false;
    }
  }, getCapabilities() {
    return s({ method: "GET_PROVIDER_CAPABILITIES" });
  }, on(e, t) {
    o.has(e) || o.set(e, /* @__PURE__ */ new Set()), o.get(e).add(t);
  }, removeListener(e, t) {
    var _a2;
    (_a2 = o.get(e)) == null ? void 0 : _a2.delete(t);
  } }), writable: false, configurable: false, enumerable: true }), window.dispatchEvent(new Event("stashwallet#initialized"));
})();
