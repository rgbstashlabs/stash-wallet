import { e as _, s as i, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  u = async function(o, n, p, t, r) {
    const e = Math.floor(Date.now() / 1e3) + t.expiry_hours * 3600, s = crypto.randomUUID(), l = {
      api_token: o.httpToken,
      control_token: o.controlHttpToken,
      passphrase: o.keystorePassphrase,
      base_url: o.url,
      control_url: o.controlUrl,
      stash_wallet_id: r,
      expiry_at: e,
      nonce: s,
      platform: t.platform
    }, a = await _(t.platform_pubkey, JSON.stringify(l)), y = await i(a, n);
    return {
      encrypted_payload: a,
      signature: y,
      owner_pubkey: p,
      stash_wallet_id: r,
      expiry_at: e,
      node_base_url: o.url
    };
  };
});
export {
  __tla,
  u as buildDelegationPackage
};
