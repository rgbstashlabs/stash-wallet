import { W as o, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let i, e;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  e = class extends o {
    constructor() {
      super(), this._lastWindow = null;
    }
    async open(s) {
      this._lastWindow = window.open(s.url, s.windowName || "_blank");
    }
    async close() {
      return new Promise((s, n) => {
        this._lastWindow != null ? (this._lastWindow.close(), this._lastWindow = null, s()) : n("No active window to close!");
      });
    }
  };
  i = new e();
});
export {
  i as Browser,
  e as BrowserWeb,
  __tla
};
