import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-L5LWIMB5.js";
import "./chunk-SHBQIZBE.js";
import "./chunk-SVEUGHNA.js";
import "./chunk-WJZJI3ZS.js";
import "./chunk-FECFGNAG.js";
import "./chunk-SWQ4XTYF.js";
import "./chunk-4Q7REXDD.js";
import {
  defineComponent,
  h
} from "./chunk-3JL2R52N.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-YACYAO4R.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
