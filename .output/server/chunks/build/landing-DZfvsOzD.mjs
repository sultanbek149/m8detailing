import { _ as _sfc_main$1, a as __nuxt_component_1 } from './Footer-DPW_tdgh.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Container-CqUBYfII.mjs';
import './Icon-DzqoV7Pd.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-vRwJqp6n.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'maska';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'lodash-es';
import 'lodash-es/cloneDeep.js';
import 'async-validator';
import 'lodash-es/find.js';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import 'compute-scroll-into-view';
import 'lodash-es/intersection.js';
import 'lodash-es/debounce.js';
import 'lodash-es/omit.js';
import 'lodash-es/isPlainObject.js';
import './phone-t6m1obiG.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = _sfc_main$1;
  const _component_LandingFooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { landing as default };
//# sourceMappingURL=landing-DZfvsOzD.mjs.map
