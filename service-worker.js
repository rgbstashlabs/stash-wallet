import { a as c, m as ce, c as he, d as Ae, f as l, g as p, i as C, l as K, h as O, j as Ne, k as ge, p as me, n as ye, o as Re, q as F, t as ae, u as ne, v as $, w as Te, x as Oe, y as Ie, B as Ce, z as J, A as le, R as A, C as Le, D as Se, F as Pe, G as I, H as de, I as ve, J as re, K as ke, L as Ge, M as De, e as be, s as Ue, N as Be, O as xe, P as we, Q as Ve, S as Me, T as He, __tla as __tla_0 } from "./assets/api-DqY8XSTj.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function We(e) {
    throw new Error("NOT_SUPPORTED");
  }
  function Ke(e, a) {
    return {
      canLsp: e === "self-hosted" && a,
      canLspRevoke: false
    };
  }
  async function Fe(e, a, t, n = async () => {
  }) {
    if (a.consignment_key) return await n(), e.rgbOnchainReceive({
      consignment_key: a.consignment_key,
      ...a.invoice ? {
        invoice: a.invoice
      } : {}
    });
    if (!a.invoice || t.length === 0) return null;
    const r = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(a.invoice)), o = Array.from(new Uint8Array(r), (i) => i.toString(16).padStart(2, "0")).join("");
    for (const i of t) {
      let s;
      try {
        const d = await fetch(`${i.replace(/\/+$/, "")}/api/v1/rgb/consignments/${o}?format=zip`);
        if (!d.ok) continue;
        s = await d.arrayBuffer();
      } catch {
        continue;
      }
      return await n(), e.rgbOnchainReceiveRaw(o, s, "zip");
    }
    return null;
  }
  function $e(e, a, t) {
    const n = t ? `${e}:${t.binding.requestId}` : e;
    return new Promise((r, o) => {
      var _a;
      const i = Math.min(Date.now() + a, (t == null ? void 0 : t.binding.expiresAt) ?? 1 / 0);
      let s, d = false, u = false, y = false;
      const R = typeof chrome < "u" ? (_a = chrome.storage) == null ? void 0 : _a.onChanged : void 0, T = typeof (R == null ? void 0 : R.addListener) == "function" && typeof (R == null ? void 0 : R.removeListener) == "function" ? R : void 0, _ = () => {
        s !== void 0 && clearTimeout(s), T == null ? void 0 : T.removeListener(k);
      }, S = (g) => {
        d || (d = true, _(), o(g));
      }, L = async () => {
        if (!d) {
          if (u) {
            y = true;
            return;
          }
          u = true, s !== void 0 && clearTimeout(s);
          try {
            do {
              if (y = false, t) {
                const D = await c.get("activeProviderApproval");
                if (!D || D.binding.requestId !== t.binding.requestId) throw new Error("APPROVAL_WALLET_CHANGED");
              }
              if (Date.now() >= i) throw await c.remove(n), new Error("TIMEOUT");
              const g = await c.get(n);
              if (g != null) {
                if (await c.remove(n), g && typeof g == "object" && "error" in g && g.error) throw new Error(String(g.error));
                d = true, _(), r(g);
                return;
              }
            } while (y && !d);
          } catch (g) {
            S(g);
          } finally {
            u = false, d || (s = setTimeout(() => {
              L();
            }, Math.min(500, Math.max(0, i - Date.now()))));
          }
        }
      }, k = (g, D) => {
        D === "session" && (g[n] || g.activeProviderApproval) && L();
      };
      T == null ? void 0 : T.addListener(k), L();
    });
  }
  function V(e) {
    return typeof e != "string" || !e ? [] : e.split(",").map((a) => a.trim().toLowerCase()).filter(Boolean);
  }
  function qe(e) {
    return e.trim().toLowerCase();
  }
  function Qe(e) {
    switch (e) {
      case "regtest":
        return V("036b69127e1426aa5827c1a17b9c1809baddeb41503772d7dc481c3376e743c928");
      case "testnet4":
        return V("");
      case "mainnet":
        return V("");
      default:
        return [];
    }
  }
  function oe(e, a) {
    return !e || typeof e != "string" ? false : Qe(a).includes(qe(e));
  }
  let N, b = false, G = false, v = 0;
  ce.onSessionClear(() => {
    v += 1, N && (N = void 0, c.set("nodeGrantSignResult", {
      error: "GRANT_WALLET_CHANGED"
    }));
  });
  function Ye() {
    if (!N) throw new Error("GRANT_APPROVAL_MISSING");
    return structuredClone(N);
  }
  function q(e, a, t, n) {
    const r = e.challenge;
    if (!ye(a) || !r || r.purpose !== "grant" || r.wallet_type !== "stashwallet" || r.network !== (n === "testnet4" ? "testnet" : n) || r.origin !== a || r.wallet_key !== t || !r.user_id || !/^[a-f0-9]{32}$/.test(r.challenge_id) || !/^[a-f0-9]{64}$/.test(r.nonce) || !Number.isSafeInteger(r.timestamp) || !Number.isSafeInteger(r.expires_at) || r.timestamp <= 0 || r.expires_at <= r.timestamp || r.expires_at - r.timestamp > 120 || !/^[a-z0-9][a-z0-9-]{0,63}$/.test(e.node_id) || !Array.isArray(e.apis) || !e.apis.length || e.apis.length > 128 || new Set(e.apis).size !== e.apis.length || e.apis.some((o) => typeof o != "string" || !/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS) \/[^|,\s]*$/.test(o)) || !/^04[a-f0-9]{128}$/.test(e.client_public_key) || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?Z$/.test(e.expires_at) || !Number.isFinite(Date.parse(e.expires_at)) || Date.parse(e.expires_at) <= r.timestamp * 1e3 || e.rules !== void 0 && (e.rules === null || typeof e.rules != "object" || Array.isArray(e.rules) || Object.keys(e.rules).length !== 0)) throw new Error("INVALID_GRANT_REQUEST");
    if (/\.\d*0Z$/.test(e.expires_at)) throw new Error("NONCANONICAL_GRANT_EXPIRY");
    if (new Date(e.expires_at).toISOString().slice(0, 19) !== e.expires_at.slice(0, 19)) throw new Error("INVALID_GRANT_EXPIRY");
    if (e.api_risks !== void 0 && (e.api_risks === null || typeof e.api_risks != "object" || Array.isArray(e.api_risks) || Object.keys(e.api_risks).length !== e.apis.length || Object.keys(e.api_risks).some((o) => !e.apis.includes(o)))) throw new Error("GRANT_RISK_MISMATCH");
    Re.Point.fromHex(e.client_public_key);
  }
  async function Q() {
    const e = await p();
    if (await C()) throw new Error("GRANT_WALLET_UNAVAILABLE");
    const a = await c.get("walletPassword");
    if (!a) throw new Error("GRANT_WALLET_UNAVAILABLE");
    const t = await K(a, e), n = await O();
    if (n.mode !== "managed" || n.v3AuthMode || n.connectionCredentialMode || n.managedWalletId) throw new Error("GRANT_WALLET_UNAVAILABLE");
    const r = await Ne() ?? t.cloudAccountMnemonic;
    if (!r) throw new Error("GRANT_WALLET_UNAVAILABLE");
    const o = await ge(r);
    if (await p() !== e || await C() || await c.get("walletPassword") !== a) throw o.fill(0), new Error("GRANT_WALLET_CHANGED");
    return {
      key: o,
      network: e,
      account: Buffer.from(me(o)).toString("hex")
    };
  }
  async function ue(e, a) {
    await l(a, "sign");
    const { key: t, account: n, network: r } = await Q();
    t.fill(0), q(e, a, n, r);
    const o = await ce.grantAuthority(e.node_id);
    if (o.user_id !== e.challenge.user_id) throw new Error("GRANT_ACCOUNT_MISMATCH");
    const i = e.apis.map((d) => {
      const u = o.catalog.entries.filter((y) => `${y.method} ${y.path}` === d);
      if (u.length !== 1 || !u[0].summary || ![
        "read",
        "write",
        "funds",
        "control"
      ].includes(u[0].risk)) throw new Error("GRANT_CATALOG_UNAVAILABLE");
      if (e.api_risks !== void 0 && e.api_risks[d] !== u[0].risk) throw new Error("GRANT_RISK_MISMATCH");
      return {
        api: d,
        summary: u[0].summary,
        risk: u[0].risk
      };
    }), s = await Q();
    if (s.key.fill(0), s.account !== n || s.network !== r) throw new Error("GRANT_ACCOUNT_MISMATCH");
    return q(e, a, n, r), await l(a, "sign"), {
      request: e,
      origin: a,
      account: n,
      entries: i
    };
  }
  async function je(e, a) {
    if (b || N) throw new Error("APPROVAL_BUSY");
    b = true;
    try {
      const t = structuredClone(e), n = v, r = await ue(t, a);
      if (n !== v) throw new Error("GRANT_WALLET_CHANGED");
      return N = {
        ...r,
        approval_id: crypto.randomUUID()
      }, structuredClone(N);
    } finally {
      b = false;
    }
  }
  function pe() {
    return b || G || !!N;
  }
  function X() {
    v += 1, N = void 0;
  }
  function ze(e) {
    if (!N || !e || N.approval_id !== e || G) throw new Error("GRANT_APPROVAL_CHANGED");
    X();
  }
  async function Je(e, a) {
    if (!N || G) throw new Error("GRANT_APPROVAL_MISSING");
    if (!a || a !== N.approval_id) throw new Error("GRANT_APPROVAL_CHANGED");
    const t = N, n = v;
    G = true;
    try {
      const r = await Xe(t, e);
      if (N !== t || n !== v) throw new Error("GRANT_APPROVAL_CHANGED");
      return N = void 0, r;
    } finally {
      G = false;
    }
  }
  async function Xe(e, a) {
    const t = await ue(e.request, e.origin);
    if (t.account !== e.account || JSON.stringify(t.entries) !== JSON.stringify(e.entries)) throw new Error("GRANT_REVIEW_CHANGED");
    if (t.entries.some((i) => [
      "funds",
      "control"
    ].includes(i.risk)) && !a) throw new Error("GRANT_RISK_CONFIRMATION_REQUIRED");
    const { key: n, account: r, network: o } = await Q();
    try {
      if (r !== t.account) throw new Error("GRANT_ACCOUNT_MISMATCH");
      q(t.request, t.origin, r, o);
      const i = t.request, s = i.challenge, d = [
        "STASH-NODE-GRANT-V1",
        s.challenge_id,
        s.nonce,
        s.network,
        i.node_id,
        [
          ...i.apis
        ].sort().join(","),
        i.expires_at,
        i.client_public_key,
        ""
      ].join("|");
      return {
        grant_signature: Buffer.from(he(Ae(new TextEncoder().encode(d)), n)).toString("hex"),
        grantor_public_key: r,
        wallet_type: "stashwallet",
        network: s.network,
        challenge_id: s.challenge_id
      };
    } finally {
      n.fill(0);
    }
  }
  const Z = (e) => `providerHold:${e}`, M = /* @__PURE__ */ new Set();
  async function Ze(e, a) {
    await c.set(Z(e), a);
  }
  async function _e(e, a, t, n) {
    if (typeof e != "string" || !/^[a-f0-9]{64}$/.test(e)) throw new Error("INVALID_PAYMENT_HASH");
    const r = await c.get(Z(e));
    if (!r || r.origin !== a || r.node !== t || r.network !== n || Date.now() >= r.expiresAt) throw new Error("HOLD_INVOICE_NOT_OWNED");
    return r;
  }
  async function et(e, a, t, n, r, o, i) {
    if (M.has(e)) throw new Error("HOLD_INVOICE_ALREADY_CLAIMED");
    M.add(e);
    try {
      const s = await _e(e, a, t, n);
      if (s.claimed) throw new Error("HOLD_INVOICE_ALREADY_CLAIMED");
      if (r !== void 0 && F(r) !== s.amount || o !== void 0 && o !== s.preimage) throw new Error("HOLD_INVOICE_MISMATCH");
      return s.claimed = true, await c.set(Z(e), s), await i(s);
    } finally {
      M.delete(e);
    }
  }
  let H = false, P;
  async function E(e, a) {
    if (!P) throw new Error("APPROVAL_MISSING");
    P.pendingKey = e, await Ve(P, a);
  }
  let Y = Date.now(), U = null;
  async function x() {
    var _a;
    if (typeof ((_a = chrome.sidePanel) == null ? void 0 : _a.setPanelBehavior) == "function") try {
      const e = await we();
      await chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: e
      });
    } catch (e) {
      console.warn("Failed to apply side panel behavior:", e);
    }
  }
  chrome.runtime.onInstalled.addListener(() => {
    x();
  });
  chrome.runtime.onStartup.addListener(() => {
    x();
  });
  x();
  chrome.storage.onChanged.addListener((e, a) => {
    const t = e.stash_wallet_data, n = t == null ? void 0 : t.oldValue, r = t == null ? void 0 : t.newValue;
    if (a === "session" && e.walletPassword && !e.walletPassword.newValue || a === "local" && t && ((r == null ? void 0 : r.isLocked) || (n == null ? void 0 : n.network) !== (r == null ? void 0 : r.network))) {
      X();
      const o = a === "local" && !!t && !(r == null ? void 0 : r.isLocked) && (n == null ? void 0 : n.network) !== (r == null ? void 0 : r.network);
      ae(o).catch((i) => console.error("Failed to invalidate approval:", i)), c.get("pendingNodeGrantRequest").then((i) => i ? c.set("nodeGrantSignResult", {
        error: "GRANT_WALLET_CHANGED"
      }) : void 0).catch((i) => console.error("Failed to invalidate node grant approval:", i));
    }
    a === "local" && Object.keys(e).some((o) => /^stash_wallet_config(?:_|$)|^stash_wallet_node(?:_|$)/.test(o)) && ae().catch((o) => console.error("Failed to invalidate node approval:", o)), a === "local" && e.stash_side_panel_enabled && x();
  });
  async function tt() {
    var _a;
    if (typeof ((_a = chrome.runtime) == null ? void 0 : _a.getContexts) != "function") return false;
    try {
      return (await chrome.runtime.getContexts({
        contextTypes: [
          "SIDE_PANEL",
          "POPUP"
        ]
      })).length > 0;
    } catch {
      return false;
    }
  }
  async function m() {
    var _a, _b;
    const e = await we().catch(() => false);
    if (await tt()) return true;
    if (e && typeof ((_a = chrome.sidePanel) == null ? void 0 : _a.open) == "function") try {
      const a = await chrome.windows.getLastFocused();
      if ((a == null ? void 0 : a.id) !== void 0) return await chrome.sidePanel.open({
        windowId: a.id
      }), true;
    } catch {
    }
    if ((_b = chrome.action) == null ? void 0 : _b.openPopup) try {
      return await chrome.action.openPopup(), true;
    } catch {
    }
    return false;
  }
  const B = [
    "pendingNetworkSwitchRequest",
    "pendingDelegationRequest",
    "pendingAuthSignRequest",
    "pendingConnectRequest",
    "pendingSignMessageRequest",
    "pendingImportContractRequest",
    "pendingIssueContractRequest",
    "pendingLightningPaymentRequest",
    "pendingSendBitcoinRequest",
    "pendingSendRgbRequest",
    "pendingOpenChannelRequest",
    "pendingCloseChannelRequest",
    "pendingSellInvoiceRequest",
    "pendingRgbLnPaymentRequest",
    "pendingLspRevokeRequest",
    "pendingNativeSwapRequest"
  ];
  async function h() {
    if (pe() || await c.get("pendingNodeGrantRequest")) throw new Error("APPROVAL_BUSY");
    await Promise.all(B.map((e) => c.remove(e).catch(() => {
    })));
  }
  chrome.runtime.onMessage.addListener((e, a, t) => {
    var _a, _b;
    if ([
      "GET_NODE_GRANT_REVIEW",
      "APPROVE_NODE_GRANT_SIGNATURE",
      "REJECT_NODE_GRANT_SIGNATURE",
      "CLAIM_PROVIDER_APPROVAL",
      "FINISH_PROVIDER_APPROVAL",
      "CHECK_PROVIDER_APPROVAL"
    ].includes(e.type) && !ne(a, chrome.runtime.id)) return t({
      success: false,
      error: "ORIGIN_NOT_ALLOWED"
    }), false;
    if (e.type === "PROVIDER_BRIDGE") {
      let n;
      try {
        n = $(a, chrome.runtime.id, true);
      } catch {
        return t({
          success: false,
          error: "ORIGIN_NOT_ALLOWED"
        }), false;
      }
      if (!j(n)) return t({
        success: false,
        error: "ORIGIN_NOT_ALLOWED"
      }), false;
      const r = (_a = e.payload) == null ? void 0 : _a.method, o = (_b = e.payload) == null ? void 0 : _b.params;
      return !r || typeof r != "string" ? (t({
        success: false,
        error: "INVALID_PARAMETER"
      }), false) : (z({
        type: r,
        payload: o
      }, n).then((i) => t({
        success: true,
        data: i
      })).catch((i) => t({
        success: false,
        error: i.message
      })), true);
    }
    if (e.type === "REQUEST_NODE_GRANT_SIGNATURE") {
      let n;
      try {
        n = $(a, chrome.runtime.id, true);
      } catch {
        return t({
          success: false,
          error: "ORIGIN_NOT_ALLOWED"
        }), false;
      }
      return j(n) ? (z(e, n).then((r) => t({
        success: true,
        data: r
      })).catch((r) => t({
        success: false,
        error: r.message
      })), true) : (t({
        success: false,
        error: "ORIGIN_NOT_ALLOWED"
      }), false);
    }
    return ne(a, chrome.runtime.id) ? (at(e).then((n) => {
      t({
        success: true,
        data: n
      });
    }).catch((n) => {
      t({
        success: false,
        error: n.message || "Unknown error"
      });
    }), true) : (t({
      success: false,
      error: "ORIGIN_NOT_ALLOWED"
    }), false);
  });
  async function at(e) {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    switch (lt(), e.type) {
      case "CHECK_PROVIDER_APPROVAL":
        return await Ie((_a = e.payload) == null ? void 0 : _a.snapshot), {
          valid: true
        };
      case "CLAIM_PROVIDER_APPROVAL":
        return Oe((_b = e.payload) == null ? void 0 : _b.snapshot);
      case "FINISH_PROVIDER_APPROVAL":
        return Te((_c = e.payload) == null ? void 0 : _c.snapshot, (_d = e.payload) == null ? void 0 : _d.resultKey, (_e2 = e.payload) == null ? void 0 : _e2.data);
      case "GET_NODE_GRANT_REVIEW":
        return Ye();
      case "APPROVE_NODE_GRANT_SIGNATURE": {
        const a = await Je(((_f = e.payload) == null ? void 0 : _f.highRiskConfirmed) === true, (_g = e.payload) == null ? void 0 : _g.approvalId);
        return await c.set("nodeGrantSignResult", a), {
          approved: true
        };
      }
      case "REJECT_NODE_GRANT_SIGNATURE":
        return ze((_h = e.payload) == null ? void 0 : _h.approvalId), await c.set("nodeGrantSignResult", {
          error: "USER_REJECTED"
        }), {
          rejected: true
        };
      case "GET_BALANCE":
        return await nt(e.payload);
      case "UNLOCK_WALLET":
        return await rt();
      case "LOCK_WALLET":
        return await ot();
      case "GET_WALLET_STATUS":
        return await it();
      case "SWITCH_NETWORK":
        return await st(e.payload);
      case "SEND_TX":
        return await ct(e.payload);
      default:
        throw new Error(`Unknown message type: ${e.type}`);
    }
  }
  async function nt(e) {
    const a = await p();
    return await new Ce(a).getBalance(e.address);
  }
  async function ie(e) {
    const a = await p(), t = Me(a, e.nodeKey), n = He(a), r = await I.get(t);
    if (r) return r;
    const i = (await e.getCurrentWalletAddress()).address ?? "";
    if (!i) throw new Error("Wallet address unavailable");
    return i && (await I.set(t, i), await I.set(n, i)), i;
  }
  async function rt() {
    return ee(), {
      unlocked: true
    };
  }
  async function ot() {
    return await J(), fe(), {
      locked: true
    };
  }
  async function it() {
    const e = await C(), a = await p();
    return {
      isLocked: e,
      network: a
    };
  }
  async function st(e) {
    return {
      network: e.network
    };
  }
  async function ct(e) {
    return {
      txid: e.txid
    };
  }
  function lt() {
    Y = Date.now(), c.set("lastActivityAt", Y).catch(() => {
    }), ee();
  }
  async function ee() {
    fe();
    const e = await le();
    e <= 0 || (U = setTimeout(async () => {
      Date.now() - Y >= e && await J();
    }, e));
  }
  function fe() {
    U && (clearTimeout(U), U = null);
  }
  const Ee = "rgbPaymentPoll";
  chrome.alarms.create("balanceUpdate", {
    periodInMinutes: 5
  });
  chrome.alarms.create(Ee, {
    periodInMinutes: 1
  });
  chrome.runtime.onStartup.addListener(() => {
    te();
  });
  chrome.storage.onChanged.addListener((e, a) => {
    var _a;
    a === "session" && ((_a = e.walletPassword) == null ? void 0 : _a.newValue) && te();
  });
  chrome.alarms.onAlarm.addListener((e) => {
    e.name, e.name === Ee && te();
  });
  let W = false;
  async function te() {
    if (!W) {
      W = true;
      try {
        if (await C()) return;
        const a = await A.fromNodeConfig();
        if (!a) return;
        if (await Le()) {
          await Se(a);
          return;
        }
        if ((await O()).mode === "managed") return;
        const t = await p(), n = `${Pe(t)}_${encodeURIComponent(a.nodeKey)}`, r = await I.get(n) ?? [], o = new Set(r);
        if (!(await a.listRgbOnchainPayments()).payments.some((_) => _.status === "pending" && !o.has(_.id))) return;
        await de(a, {
          force: true
        });
        const u = (await a.listRgbOnchainPayments()).payments.filter((_) => _.status === "pending");
        if (u.length === 0) return;
        const y = await O(), R = y.mode === "managed" ? [] : y.rgbConsignmentProxies ?? [];
        let T = false;
        for (const _ of u) if (!o.has(_.id)) try {
          const S = `${n}_intent_${_.id}`;
          if (await I.get(S)) continue;
          const L = await Fe(a, _, R, async () => {
            var _a;
            if (await C() || await p() !== t || ((_a = await A.fromNodeConfig()) == null ? void 0 : _a.nodeKey) !== a.nodeKey) throw new Error("RGB receive context changed");
            await I.set(S, "receiving");
          });
          if (!L) continue;
          o.add(_.id), await I.set(n, [
            ...o
          ]), T = true;
          const k = L.amount ?? _.amount ?? "";
          chrome.notifications.create(`rgb-recv-${_.id}`, {
            type: "basic",
            iconUrl: chrome.runtime.getURL("icons/icon48.png"),
            title: "RGB Payment Accepted",
            message: k ? `Received ${k} RGB asset` : "RGB onchain payment accepted successfully"
          }), `${_.id}`;
        } catch (S) {
          console.error(`[RGB auto-accept] failed for payment ${_.id}:`, S);
        }
        T && await I.set(n, [
          ...o
        ]);
      } catch (e) {
        console.error("[RGB auto-accept] polling error:", e);
      } finally {
        W = false;
      }
    }
  }
  const dt = false;
  function j(e) {
    return ve(e, {
      allowLoopback: !dt
    });
  }
  chrome.runtime.onMessageExternal.addListener((e, a, t) => {
    let n;
    try {
      n = $(a, chrome.runtime.id, false);
    } catch {
      return t({
        success: false,
        error: "ORIGIN_NOT_ALLOWED"
      }), false;
    }
    return j(n) ? (z(e, n).then((o) => t({
      success: true,
      data: o
    })).catch((o) => t({
      success: false,
      error: o.message || "Unknown error"
    })), true) : (t({
      success: false,
      error: "ORIGIN_NOT_ALLOWED"
    }), false);
  });
  const wt = /* @__PURE__ */ new Set([
    "REQUEST_SWITCH_NETWORK",
    "REQUEST_LSP_DELEGATION",
    "REQUEST_AUTH_SIGNATURE",
    "CONNECT",
    "SIGN_MESSAGE",
    "IMPORT_CONTRACT",
    "AUTO_IMPORT_CONTRACT",
    "ISSUE_CONTRACT",
    "PAY_LIGHTNING_INVOICE",
    "SEND_BITCOIN",
    "SEND_RGB",
    "REQUEST_OPEN_CHANNEL",
    "CLOSE_CHANNEL",
    "GENERATE_SELL_INVOICE",
    "PAY_RGB_LN_INVOICE",
    "ACCEPT_NATIVE_SWAP",
    "REQUEST_NODE_GRANT_SIGNATURE"
  ]);
  async function z(e, a) {
    if (!wt.has(e.type)) return se(e, a);
    if (H || pe()) throw new Error("APPROVAL_BUSY");
    H = true;
    let t;
    try {
      const n = await c.get("activeProviderApproval");
      if (n && Date.now() >= n.binding.expiresAt && await re(n), await c.get("activeProviderApproval") || await Promise.all(B.map((r) => c.remove(r))), await c.get("pendingNodeGrantRequest") || (await Promise.all(B.map((r) => c.get(r)))).some(Boolean)) throw new Error("APPROVAL_BUSY");
      return e.type !== "REQUEST_NODE_GRANT_SIGNATURE" && (t = await ke("", [
        "CONNECT",
        "SIGN_MESSAGE",
        "REQUEST_SWITCH_NETWORK",
        "REQUEST_AUTH_SIGNATURE",
        "GENERATE_SELL_INVOICE"
      ].includes(e.type) ? 12e4 : 3e5), P = t), await se(e, a);
    } finally {
      t && await re(t), P = void 0, H = false;
    }
  }
  async function se(e, a) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    switch (e.type) {
      case "REQUEST_SWITCH_NETWORK": {
        const { network: t } = e.payload ?? {};
        if (!t || ![
          "mainnet",
          "testnet4",
          "regtest"
        ].includes(t)) throw new Error("INVALID_PARAMETER");
        const r = await p();
        return r === t ? {
          network: t,
          switched: false
        } : (await h(), await E("pendingNetworkSwitchRequest", {
          from: r,
          to: t,
          origin: a
        }), await m(), await f("networkSwitchResult", 12e4));
      }
      case "REQUEST_LSP_DELEGATION": {
        if ((await O()).mode === "managed") throw new Error("CLOUD_LSP_PROVIDER_UNAVAILABLE");
        await l(a, "sign"), await w();
        const t = await p(), n = (_a = e.payload) == null ? void 0 : _a.platform_pubkey;
        if (!oe(n, t)) throw new Error("PLATFORM_PUBKEY_NOT_ALLOWED");
        await h();
        const r = e.payload ?? {}, o = r.registration && typeof r.registration == "object" ? r.registration : null, i = {
          token_ticker: r.token_ticker ?? (o == null ? void 0 : o.token_ticker),
          custom_fee_rate_percent: r.custom_fee_rate_percent ?? (o == null ? void 0 : o.custom_fee_rate_percent),
          channel_hourly_fee_sats: r.channel_hourly_fee_sats ?? (o == null ? void 0 : o.channel_hourly_fee_sats),
          p_ceiling: r.p_ceiling ?? (o == null ? void 0 : o.p_ceiling),
          p_floor: r.p_floor ?? (o == null ? void 0 : o.p_floor),
          swap_fee_lsp_percent: r.swap_fee_lsp_percent ?? (o == null ? void 0 : o.swap_fee_lsp_percent),
          swap_fee_platform_percent: r.swap_fee_platform_percent ?? (o == null ? void 0 : o.swap_fee_platform_percent),
          channel_fee_lsp_percent: r.channel_fee_lsp_percent ?? (o == null ? void 0 : o.channel_fee_lsp_percent),
          channel_fee_platform_percent: r.channel_fee_platform_percent ?? (o == null ? void 0 : o.channel_fee_platform_percent)
        }, s = Object.values(i).some((u) => u != null && u !== "");
        return await E("pendingDelegationRequest", {
          platform_pubkey: r.platform_pubkey,
          expiry_hours: r.expiry_hours,
          platform: r.platform,
          origin: a,
          ...s ? {
            registration: i
          } : {}
        }), await m(), await f("delegationResult", 3e5);
      }
      case "REQUEST_LSP_REVOKE":
        return We((await O()).mode);
      case "GET_NODE_INFO_FOR_LSP": {
        if ((await O()).mode === "managed") throw new Error("CLOUD_LSP_PROVIDER_UNAVAILABLE");
        await l(a, "read_channels"), await w();
        const t = await p(), n = await xe(t);
        if (!n) throw new Error("NODE_NOT_CONFIGURED");
        const r = await A.fromNodeConfig();
        if (!r) throw new Error("NODE_CLIENT_UNAVAILABLE");
        const o = await r.getNodeId(), i = n.managedWalletId ?? "", s = t === "testnet4" ? "testnet" : t, d = i ? `stash-wallet-${i}.rgbldk-nodes-${s}.svc.cluster.local:9735` : "";
        let u = n.url ?? "";
        return !u && n.mode === "managed" && i && (u = `http://stash-wallet-${i}.rgbldk-nodes-${s}.svc.cluster.local:8500`), {
          node_base_url: u,
          node_id: o.node_id ?? "",
          peer_address: d,
          stash_wallet_id: i,
          network: t
        };
      }
      case "GET_WALLET_SESSION_STATUS": {
        const [t, n] = await Promise.all([
          C(),
          p()
        ]), r = await O(n);
        return !(r == null ? void 0 : r.url) && !(r == null ? void 0 : r.v3NodeId) ? {
          status: "not_configured",
          network: null
        } : {
          status: t ? "locked" : "unlocked",
          network: n
        };
      }
      case "DEBUG_OPEN_POPUP": {
        let t = false;
        if ((_b = chrome.action) == null ? void 0 : _b.openPopup) try {
          await chrome.action.openPopup(), t = true;
        } catch {
        }
        return t || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f59e0b"
        })), {
          opened: t,
          hasBadgeFallback: !t
        };
      }
      case "GET_PROVIDER_CAPABILITIES": {
        const t = await p(), n = await c.get("walletPassword"), r = typeof n == "string" && n.length > 0;
        let o = false;
        if (r) try {
          const i = await K(n, t);
          o = !!(i == null ? void 0 : i.url) && !!(i == null ? void 0 : i.httpToken);
        } catch {
          o = false;
        }
        return {
          protocolVersion: "1.0.0",
          providerVersion: chrome.runtime.getManifest().version || "1.0.0",
          canConnect: true,
          canIssue: r,
          canClaim: r,
          canSwap: r,
          ...Ke((await O()).mode, o),
          canAuthSign: r,
          authNetworks: [
            "regtest",
            "testnet",
            "mainnet"
          ],
          supportedNetworks: [
            "mainnet",
            "testnet4",
            "regtest"
          ]
        };
      }
      case "REQUEST_NODE_GRANT_SIGNATURE": {
        if ((await Promise.all(B.map((n) => c.get(n)))).some(Boolean)) throw new Error("APPROVAL_BUSY");
        const t = await je(e.payload, a);
        try {
          return await c.remove("nodeGrantSignResult"), await c.set("pendingNodeGrantRequest", t), await m() || (await chrome.action.setBadgeText({
            text: "!"
          }), await chrome.action.setBadgeBackgroundColor({
            color: "#f59e0b"
          })), await f("nodeGrantSignResult", 12e4);
        } finally {
          X(), await c.remove("pendingNodeGrantRequest"), await c.remove("nodeGrantSignResult"), await chrome.action.setBadgeText({
            text: ""
          }).catch(() => {
          });
        }
      }
      case "REQUEST_AUTH_SIGNATURE": {
        const t = e.payload;
        if (!(t == null ? void 0 : t.challenge_id) || !(t == null ? void 0 : t.nonce) || !(t == null ? void 0 : t.network) || !a || t.origin && t.origin !== a) throw new Error("INVALID_PARAMETER");
        if (t.signature_version !== 1 && t.signature_version !== 2) throw new Error("INVALID_PARAMETER");
        if (t.signature_version === 2) {
          const o = await p();
          if (t.wallet_type !== "stashwallet" || t.network !== (o === "testnet4" ? "testnet" : o)) throw new Error("INVALID_PARAMETER");
          Be({
            ...t,
            origin: a
          }, a);
        }
        await w(), await h();
        const n = t.signature_version === 2 ? {
          signature_version: 2,
          challenge_id: t.challenge_id,
          nonce: t.nonce,
          origin: a,
          network: t.network,
          client_id: t.client_id,
          purpose: t.purpose,
          wallet_type: t.wallet_type,
          timestamp: t.timestamp,
          expires_at: t.expires_at
        } : {
          signature_version: 1,
          challenge_id: t.challenge_id,
          nonce: t.nonce,
          origin: a,
          network: t.network
        };
        await E("pendingAuthSignRequest", n), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f59e0b"
        }));
        try {
          return await f("authSignResult", 12e4);
        } finally {
          await c.remove("pendingAuthSignRequest"), await c.remove("authSignResult"), await chrome.action.setBadgeText({
            text: ""
          }).catch(() => {
          });
        }
      }
      case "REQUEST_NODE_CREDENTIAL": {
        await l(a, "node_credential");
        const t = await w(), { recipient_pubkey: n, expiry_seconds: r } = e.payload ?? {};
        if (!n || typeof n != "string") throw new Error("INVALID_PARAMETER");
        const o = await p();
        if (!oe(n, o)) throw new Error("RECIPIENT_PUBKEY_NOT_ALLOWED");
        if (r !== void 0 && (!Number.isSafeInteger(r) || r <= 0 || r > 300)) throw new Error("INVALID_CREDENTIAL_EXPIRY");
        const i = await K(t, o);
        if (!i.url || !i.httpToken) throw new Error("NODE_NOT_CONFIGURED");
        const { privkeyBytes: s, pubkeyHex: d } = await De(i.keystorePassphrase), u = Math.floor(Date.now() / 1e3) + (typeof r == "number" && r > 0 ? r : 300), y = crypto.randomUUID(), R = JSON.stringify({
          base_url: i.url,
          api_token: i.httpToken,
          nonce: y,
          expiry_at: u
        }), T = await be(n, R), _ = await Ue(T, s);
        return {
          encrypted_credential: T,
          signature: _,
          auth_pubkey: d
        };
      }
      case "GET_BTC_ADDRESS": {
        await l(a, "read_accounts"), await w();
        const t = await p(), n = await A.fromNodeConfig();
        if (!n) throw new Error("NODE_NOT_CONFIGURED");
        return {
          address: await ie(n),
          network: t
        };
      }
      case "CONNECT":
        return await h(), await E("pendingConnectRequest", {
          origin: a
        }), await m(), await f("connectResult", 12e4);
      case "DISCONNECT":
        return await Ge(a), true;
      case "GET_ACCOUNTS": {
        await l(a, "read_accounts"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        return {
          address: await ie(t)
        };
      }
      case "GET_NETWORK":
        return {
          network: await p()
        };
      case "SIGN_MESSAGE": {
        await l(a, "sign"), await w();
        const t = (_c = e.payload) == null ? void 0 : _c.message;
        if (!t || typeof t != "string") throw new Error("INVALID_PARAMETER");
        return await h(), await E("pendingSignMessageRequest", {
          message: t,
          origin: a
        }), await m(), await f("signMessageResult", 12e4);
      }
      case "GET_VERSION": {
        const t = await A.fromNodeConfig();
        if (!t) return {
          version: "1.0.0"
        };
        try {
          return {
            version: (await t.getVersion()).api_version ?? "1.0.0"
          };
        } catch {
          return {
            version: "1.0.0"
          };
        }
      }
      case "GET_RGB_UTXOS": {
        await l(a, "read_channels"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        return await de(t), (await t.listRgbUtxosSummary()).utxos;
      }
      case "GET_CONTRACT_BALANCE": {
        await l(a, "read_channels"), await w();
        const { contract_id: t } = e.payload ?? {};
        if (!t) throw new Error("INVALID_PARAMETER");
        const n = await A.fromNodeConfig();
        if (!n) throw new Error("NODE_NOT_CONFIGURED");
        const r = await n.getContractBalanceIfImported(t);
        if (!r) throw new Error("CONTRACT_NOT_IMPORTED");
        const o = Number(r.balance.mined), i = Number(r.balance.tentative);
        return {
          contract_id: t,
          confirmed: String(o),
          unconfirmed: String(i)
        };
      }
      case "GET_CONTRACT_KNOWN": {
        await l(a, "read_channels"), await w();
        const { contract_id: t } = e.payload ?? {};
        if (!t) throw new Error("INVALID_PARAMETER");
        const n = await A.fromNodeConfig();
        if (!n) throw new Error("NODE_NOT_CONFIGURED");
        const r = await n.isContractKnown(t);
        return {
          contract_id: t,
          known: r.known
        };
      }
      case "IMPORT_CONTRACT": {
        if (await l(a, "read_channels"), await w(), await h(), await E("pendingImportContractRequest", {
          ...e.payload,
          origin: a
        }), (_d = chrome.action) == null ? void 0 : _d.openPopup) try {
          await chrome.action.openPopup();
        } catch {
        }
        return await f("importContractResult", 3e5);
      }
      case "AUTO_IMPORT_CONTRACT": {
        await l(a, "read_channels"), await w();
        const { contract_id: t } = e.payload ?? {};
        if (!t || typeof t != "string") throw new Error("INVALID_PARAMETER");
        await h(), await c.remove("importContractResult"), await E("pendingImportContractRequest", {
          contract_id: t,
          asset_archive: true,
          origin: a
        }), await m();
        const n = await f("importContractResult", 3e5);
        if ((n == null ? void 0 : n.contract_id) !== t) throw new Error("CONTRACT_ID_MISMATCH");
        return {
          ...n,
          source: "asset_archive"
        };
      }
      case "ISSUE_CONTRACT": {
        if (await l(a, "read_channels"), await w(), await h(), await E("pendingIssueContractRequest", {
          ...e.payload,
          origin: a
        }), (_e2 = chrome.action) == null ? void 0 : _e2.openPopup) try {
          await chrome.action.openPopup();
        } catch {
        }
        return await f("issueContractResult", 3e5);
      }
      case "PAY_LIGHTNING_INVOICE": {
        await l(a, "sign"), await w(), await h(), await E("pendingLightningPaymentRequest", {
          ...e.payload,
          origin: a
        }), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f7931a"
        }), (_f = chrome.notifications) == null ? void 0 : _f.create("pay-lightning-pending", {
          type: "basic",
          iconUrl: "icons/icon128.png",
          title: "Stash Wallet",
          message: "\u6709\u4E00\u7B14\u95EA\u7535\u652F\u4ED8\u5F85\u786E\u8BA4\uFF0C\u8BF7\u70B9\u51FB\u6269\u5C55\u56FE\u6807\u67E5\u770B\u3002"
        }).catch(() => {
        }));
        const n = await f("lightningPaymentResult", 3e5);
        return await chrome.action.setBadgeText({
          text: ""
        }).catch(() => {
        }), n;
      }
      case "SEND_BITCOIN": {
        await l(a, "sign"), await w(), await h(), await E("pendingSendBitcoinRequest", {
          ...e.payload,
          origin: a
        }), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f7931a"
        }), (_g = chrome.notifications) == null ? void 0 : _g.create("send-bitcoin-pending", {
          type: "basic",
          iconUrl: "icons/icon128.png",
          title: "Stash Wallet",
          message: "\u6709\u4E00\u7B14 BTC \u8F6C\u8D26\u5F85\u786E\u8BA4\uFF0C\u8BF7\u70B9\u51FB\u6269\u5C55\u56FE\u6807\u67E5\u770B\u3002"
        }).catch(() => {
        }));
        const n = await f("sendBitcoinResult", 3e5);
        return await chrome.action.setBadgeText({
          text: ""
        }).catch(() => {
        }), n;
      }
      case "SEND_RGB": {
        await l(a, "sign"), await w(), await h(), await E("pendingSendRgbRequest", {
          ...e.payload,
          origin: a
        }), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f7931a"
        }), (_h = chrome.notifications) == null ? void 0 : _h.create("send-rgb-pending", {
          type: "basic",
          iconUrl: "icons/icon128.png",
          title: "Stash Wallet",
          message: "\u6709\u4E00\u7B14 RGB \u8F6C\u8D26\u5F85\u786E\u8BA4\uFF0C\u8BF7\u70B9\u51FB\u6269\u5C55\u56FE\u6807\u67E5\u770B\u3002"
        }).catch(() => {
        }));
        const n = await f("sendRgbResult", 3e5);
        return await chrome.action.setBadgeText({
          text: ""
        }).catch(() => {
        }), n;
      }
      case "REQUEST_OPEN_CHANNEL": {
        await l(a, "sign"), await w(), await h(), await E("pendingOpenChannelRequest", {
          ...e.payload,
          origin: a
        }), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f7931a"
        }), (_i = chrome.notifications) == null ? void 0 : _i.create("open-channel-pending", {
          type: "basic",
          iconUrl: "icons/icon128.png",
          title: "Stash Wallet",
          message: "\u6709\u4E00\u4E2A\u901A\u9053\u5F00\u901A\u8BF7\u6C42\u5F85\u786E\u8BA4\uFF0C\u8BF7\u70B9\u51FB\u6269\u5C55\u56FE\u6807\u67E5\u770B\u3002"
        }).catch(() => {
        }));
        const n = await f("openChannelResult", 3e5);
        return await chrome.action.setBadgeText({
          text: ""
        }).catch(() => {
        }), n;
      }
      case "GET_HUB_CHANNELS": {
        await l(a, "read_channels"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const n = await t.listChannels(), r = (_j = e.payload) == null ? void 0 : _j.hub_node_id, o = !!((_k = e.payload) == null ? void 0 : _k.include_pending);
        return n.filter((s) => !(!o && !s.is_usable || r && s.counterparty_node_id !== r)).map((s) => {
          var _a2;
          return {
            channel_id: s.channel_id,
            user_channel_id: s.user_channel_id,
            counterparty_node_id: s.counterparty_node_id,
            outbound_capacity_sats: Math.floor(Number(s.outbound_capacity_msat) / 1e3),
            inbound_capacity_sats: Math.floor(Number(s.inbound_capacity_msat) / 1e3),
            is_usable: s.is_usable,
            is_rgb: !!s.rgb_balance,
            rgb_contract_id: (_a2 = s.rgb_balance) == null ? void 0 : _a2.contract_id
          };
        });
      }
      case "CLOSE_CHANNEL": {
        await l(a, "sign");
        const { user_channel_id: t, counterparty_node_id: n, force: r } = e.payload || {};
        if (!t || !n) throw new Error("INVALID_PARAMETER: user_channel_id and counterparty_node_id are required");
        await h(), await E("pendingCloseChannelRequest", {
          user_channel_id: t,
          counterparty_node_id: n,
          force: !!r,
          origin: a
        }), await w(), await m() || (await chrome.action.setBadgeText({
          text: "!"
        }), await chrome.action.setBadgeBackgroundColor({
          color: "#f7931a"
        }), (_l = chrome.notifications) == null ? void 0 : _l.create("close-channel-pending", {
          type: "basic",
          iconUrl: "icons/icon128.png",
          title: "Stash Wallet",
          message: "\u6709\u4E00\u4E2A\u901A\u9053\u5173\u95ED\u8BF7\u6C42\u5F85\u786E\u8BA4\uFF0C\u8BF7\u70B9\u51FB\u6269\u5C55\u56FE\u6807\u67E5\u770B\u3002"
        }).catch(() => {
        }));
        const i = await f("closeChannelResult", 3e5);
        return await chrome.action.setBadgeText({
          text: ""
        }).catch(() => {
        }), i;
      }
      case "GET_NODE_BALANCES": {
        await l(a, "read_channels"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const n = await t.getBalances();
        return {
          onchain_spendable_sats: Number(((_m = n.btc) == null ? void 0 : _m.onchain_spendable_sats) ?? 0),
          onchain_total_sats: Number(((_n = n.btc) == null ? void 0 : _n.onchain_total_sats) ?? 0),
          lightning_total_sats: Number(((_o = n.btc) == null ? void 0 : _o.lightning_total_sats) ?? 0)
        };
      }
      case "GENERATE_SELL_INVOICE": {
        if (await l(a, "sign"), await w(), await h(), await E("pendingSellInvoiceRequest", {
          ...e.payload,
          origin: a
        }), (_p = chrome.action) == null ? void 0 : _p.openPopup) try {
          await chrome.action.openPopup();
        } catch {
        }
        return await f("sellInvoiceResult", 12e4);
      }
      case "CREATE_RGB_LN_INVOICE": {
        await l(a, "read_channels"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const { contract_id: n, asset_amount: r, description: o, expiry_secs: i, btc_carrier_amount_msat: s } = e.payload ?? {};
        if (!n || !r) throw new Error("contract_id and asset_amount are required");
        const d = await t.rgbLnCreateInvoice({
          contract_id: n,
          asset_amount: String(r),
          description: o ?? "rgbdex.net swap receive RGB",
          expiry_secs: i ?? 3600,
          btc_carrier_amount_msat: s ?? void 0
        });
        return {
          invoice: d.invoice,
          btc_carrier_amount_msat: d.btc_carrier_amount_msat
        };
      }
      case "CREATE_RGB_ONCHAIN_INVOICE": {
        await l(a, "read_channels"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const { contract_id: n, amount: r, expiry_secs: o } = e.payload ?? {};
        if (!n || !r) throw new Error("contract_id and amount are required");
        const i = 30 * 24 * 3600;
        return {
          invoice: (await t.rgbOnchainCreateInvoice({
            contract_id: n,
            amount: String(r),
            expiry_secs: String(o ?? i),
            use_witness_utxo: false
          })).invoice
        };
      }
      case "PAY_RGB_LN_INVOICE": {
        if (await l(a, "sign"), await w(), await h(), await E("pendingRgbLnPaymentRequest", {
          ...e.payload,
          origin: a
        }), (_q = chrome.action) == null ? void 0 : _q.openPopup) try {
          await chrome.action.openPopup();
        } catch {
        }
        return await f("rgbLnPaymentResult", 3e5);
      }
      case "ACCEPT_NATIVE_SWAP":
        return await l(a, "sign"), await w(), await h(), await E("pendingNativeSwapRequest", {
          ...e.payload,
          origin: a
        }), await m(), await f("nativeSwapResult", 3e5);
      case "CREATE_BTC_HOLD_INVOICE": {
        await l(a, "sign"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const { amount_msat: n, description: r, expiry_secs: o } = e.payload ?? {};
        if (F(n), o !== void 0 && (!Number.isSafeInteger(o) || o <= 0 || o > 86400)) throw new Error("INVALID_EXPIRY");
        const i = crypto.getRandomValues(new Uint8Array(32)), s = Array.from(i).map((R) => R.toString(16).padStart(2, "0")).join(""), d = await crypto.subtle.digest("SHA-256", i), u = Array.from(new Uint8Array(d)).map((R) => R.toString(16).padStart(2, "0")).join(""), y = await t.bolt11ReceiveForHash({
          payment_hash: u,
          amount_msat: String(n),
          description: r ?? "rgbdex.net sell swap: receive BTC",
          expiry_secs: o ?? 60
        });
        return await Ze(u, {
          origin: a,
          node: t.nodeKey,
          network: await p(),
          preimage: s,
          amount: F(n),
          expiresAt: Date.now() + ((o ?? 60) + 3600) * 1e3
        }), {
          invoice: y.invoice,
          payment_hash: u
        };
      }
      case "CHECK_BTC_HOLD_INVOICE": {
        await l(a, "sign"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const { payment_hash: n } = e.payload ?? {};
        if (!n) throw new Error("payment_hash is required");
        await _e(n, a, t.nodeKey, await p());
        const r = await t.getPayment(n), o = ((r == null ? void 0 : r.direction) ?? "").toLowerCase(), i = ((r == null ? void 0 : r.status) ?? "").toLowerCase(), s = [
          "succeeded",
          "failed",
          "abandoned",
          "expired"
        ], d = (r == null ? void 0 : r.htlc_locked) !== void 0 ? r.htlc_locked : o === "inbound" && !s.includes(i);
        return {
          status: i,
          direction: o,
          htlc_locked: d
        };
      }
      case "CLAIM_BTC_HOLD_INVOICE": {
        await l(a, "sign"), await w();
        const t = await A.fromNodeConfig();
        if (!t) throw new Error("NODE_NOT_CONFIGURED");
        const { payment_hash: n, preimage: r } = e.payload ?? {};
        if (!n) throw new Error("payment_hash is required");
        return et(n, a, t.nodeKey, await p(), (_r = e.payload) == null ? void 0 : _r.claimable_amount_msat, r, (o) => t.bolt11ClaimForHash({
          payment_hash: n,
          preimage: o.preimage,
          claimable_amount_msat: o.amount
        }));
      }
      default:
        throw new Error(`Unknown external message type: ${e.type}`);
    }
  }
  function ut(e) {
    return new Promise((a, t) => {
      const n = Date.now(), r = async () => {
        if (!await C()) {
          const i = await c.get("walletPassword");
          if (i) {
            a(i);
            return;
          }
        }
        if (Date.now() - n >= e) {
          t(new Error("UNLOCK_TIMEOUT"));
          return;
        }
        setTimeout(r, 800);
      };
      r();
    });
  }
  async function w() {
    const e = await C(), a = await c.get("walletPassword");
    if (!e && a) {
      const t = await c.get("lastActivityAt"), n = await le();
      if (n > 0 && t && Date.now() - t > n) await J();
      else return await c.set("lastActivityAt", Date.now()), a;
    }
    return await m(), ut(12e4);
  }
  function f(e, a) {
    return $e(e, a, P);
  }
  chrome.runtime.onInstalled.addListener((e) => {
    e.reason === "install" || e.reason;
  });
  ee();
});
