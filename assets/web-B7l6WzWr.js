import { W as a, __tla as __tla_0 } from "./api-DqY8XSTj.js";
import { ImpactStyle as i, NotificationType as r, __tla as __tla_1 } from "./index-CCQZnG0F.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  c = class extends a {
    constructor() {
      super(...arguments), this.selectionStarted = false;
    }
    async impact(t) {
      const e = this.patternForImpact(t == null ? void 0 : t.style);
      this.vibrateWithPattern(e);
    }
    async notification(t) {
      const e = this.patternForNotification(t == null ? void 0 : t.type);
      this.vibrateWithPattern(e);
    }
    async vibrate(t) {
      const e = (t == null ? void 0 : t.duration) || 300;
      this.vibrateWithPattern([
        e
      ]);
    }
    async selectionStart() {
      this.selectionStarted = true;
    }
    async selectionChanged() {
      this.selectionStarted && this.vibrateWithPattern([
        70
      ]);
    }
    async selectionEnd() {
      this.selectionStarted = false;
    }
    patternForImpact(t = i.Heavy) {
      return t === i.Medium ? [
        43
      ] : t === i.Light ? [
        20
      ] : [
        61
      ];
    }
    patternForNotification(t = r.Success) {
      return t === r.Warning ? [
        30,
        40,
        30,
        50,
        60
      ] : t === r.Error ? [
        27,
        45,
        50
      ] : [
        35,
        65,
        21
      ];
    }
    vibrateWithPattern(t) {
      if (navigator.vibrate) navigator.vibrate(t);
      else throw this.unavailable("Browser does not support the vibrate API");
    }
  };
});
export {
  c as HapticsWeb,
  __tla
};
