import { r, _ as t, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  _ = r("Preferences", {
    web: () => t(() => import("./web-WK-IoG9C.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((e) => new e.PreferencesWeb())
  });
});
export {
  _ as Preferences,
  __tla
};
