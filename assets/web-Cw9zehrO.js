import { W as t, __tla as __tla_0 } from "./index-DMhdQBeM.js";
import { __tla as __tla_1 } from "./api-DqY8XSTj.js";
let i;
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
  i = class extends t {
    constructor() {
      super();
    }
    isAvailable() {
      throw new Error("Method not implemented.");
    }
    verifyIdentity(e) {
      throw new Error("Method not implemented.");
    }
    getCredentials(e) {
      throw new Error("Method not implemented.");
    }
    setCredentials(e) {
      throw new Error("Method not implemented.");
    }
    deleteCredentials(e) {
      throw new Error("Method not implemented.");
    }
  };
});
export {
  i as NativeBiometricWeb,
  __tla
};
