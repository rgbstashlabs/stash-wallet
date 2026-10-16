import { W as a, __tla as __tla_0 } from "./api-DqY8XSTj.js";
let n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  n = class extends a {
    async canShare() {
      return typeof navigator > "u" || !navigator.share ? {
        value: false
      } : {
        value: true
      };
    }
    async share(e) {
      if (typeof navigator > "u" || !navigator.share) throw this.unavailable("Share API not available in this browser");
      return await navigator.share({
        title: e.title,
        text: e.text,
        url: e.url
      }), {};
    }
  };
});
export {
  n as ShareWeb,
  __tla
};
