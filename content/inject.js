(function() {
  var _a;
  if (typeof chrome > "u" || !((_a = chrome.runtime) == null ? void 0 : _a.id)) return;
  const i = "stashwallet-provider-request", r = "stashwallet-provider-response", n = "stashwallet-grant-request", a = "stashwallet-grant-response", d = /* @__PURE__ */ new Set(["CONNECT", "DISCONNECT", "GET_ACCOUNTS", "GET_NETWORK", "GET_VERSION", "GET_PROVIDER_CAPABILITIES", "GET_WALLET_SESSION_STATUS", "GET_BTC_ADDRESS", "REQUEST_AUTH_SIGNATURE", "REQUEST_SWITCH_NETWORK", "SIGN_MESSAGE", "GET_RGB_UTXOS", "GET_CONTRACT_BALANCE", "GET_CONTRACT_KNOWN", "IMPORT_CONTRACT", "AUTO_IMPORT_CONTRACT", "ISSUE_CONTRACT", "SEND_BITCOIN", "SEND_RGB", "PAY_LIGHTNING_INVOICE", "GENERATE_SELL_INVOICE", "ACCEPT_NATIVE_SWAP", "GET_HUB_CHANNELS", "GET_NODE_INFO_FOR_LSP", "REQUEST_LSP_DELEGATION", "REQUEST_LSP_REVOKE", "REQUEST_NODE_CREDENTIAL", "REQUEST_NODE_GRANT_SIGNATURE"]);
  window.addEventListener("message", async (o) => {
    var _a2, _b, _c, _d, _e, _f, _g;
    if (o.source !== window || o.origin !== window.location.origin) return;
    if (((_a2 = o.data) == null ? void 0 : _a2.source) === n && ((_b = o.data) == null ? void 0 : _b.type) === "REQUEST_NODE_GRANT_SIGNATURE" && typeof ((_c = o.data) == null ? void 0 : _c.id) == "string" && o.data.id.length <= 128) {
      const e = o.data.id;
      try {
        const t = await chrome.runtime.sendMessage({ type: "REQUEST_NODE_GRANT_SIGNATURE", payload: o.data.payload });
        window.postMessage({ source: a, id: e, ...t }, window.location.origin);
      } catch (t) {
        window.postMessage({ source: a, id: e, success: false, error: t instanceof Error ? t.message : "GRANT_UNAVAILABLE" }, window.location.origin);
      }
      return;
    }
    if (((_d = o.data) == null ? void 0 : _d.source) !== i || typeof ((_e = o.data) == null ? void 0 : _e.id) != "string" || o.data.id.length > 128) return;
    if (typeof ((_f = o.data) == null ? void 0 : _f.type) != "string" || !d.has(o.data.type)) {
      window.postMessage({ source: r, id: (_g = o.data) == null ? void 0 : _g.id, success: false, error: "UNKNOWN_MESSAGE_TYPE" }, window.location.origin);
      return;
    }
    if (window.top !== window) {
      window.postMessage({ source: r, id: o.data.id, success: false, error: "ORIGIN_NOT_ALLOWED" }, window.location.origin);
      return;
    }
    const E = o.data.id;
    try {
      const e = await chrome.runtime.sendMessage({ type: "PROVIDER_BRIDGE", payload: { method: o.data.type, params: o.data.payload } });
      window.postMessage({ source: r, id: E, success: !!(e == null ? void 0 : e.success), data: e == null ? void 0 : e.data, error: e == null ? void 0 : e.error }, window.location.origin);
    } catch (e) {
      window.postMessage({ source: r, id: E, success: false, error: e instanceof Error ? e.message : "UNKNOWN" }, window.location.origin);
    }
  });
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL("content/page-inject.js"), s.dataset.stashwalletId = chrome.runtime.id, s.onload = () => s.remove(), s.onerror = () => s.remove(), (document.head || document.documentElement).insertBefore(s, (document.head || document.documentElement).firstChild);
})();
