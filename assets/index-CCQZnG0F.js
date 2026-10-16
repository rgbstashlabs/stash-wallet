import { r as t, _ as a, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let o, e, i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function(r) {
    r.Heavy = "HEAVY", r.Medium = "MEDIUM", r.Light = "LIGHT";
  })(e || (e = {}));
  (function(r) {
    r.Success = "SUCCESS", r.Warning = "WARNING", r.Error = "ERROR";
  })(i || (i = {}));
  o = t("Haptics", {
    web: () => a(() => import("./web-B7l6WzWr.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url).then((r) => new r.HapticsWeb())
  });
});
export {
  o as Haptics,
  e as ImpactStyle,
  i as NotificationType,
  __tla
};
