import { r as e, _ as o, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  _ = e("Browser", {
    web: () => o(() => import("./web-CDLz_As6.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((r) => new r.BrowserWeb())
  });
});
export {
  _ as Browser,
  __tla
};
