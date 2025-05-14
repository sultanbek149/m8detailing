import __nuxt_component_2 from './Icon-DzqoV7Pd.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-24" }, _attrs))}><h2 class="text-center text-slate-500">\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043C\u0430\u0440\u043A\u0430\u043C\u0438 \u0430\u0432\u0442\u043E</h2><div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap text-slate-400">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-14",
    name: "simple-icons:mercedes",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-14",
    name: "gg:bmw",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-14",
    name: "simple-icons:audi",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-14",
    name: "simple-icons:porsche",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-12",
    name: "simple-icons:kia",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-12",
    name: "simple-icons:hyundai",
    size: "48"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    class: "h-8 md:h-12",
    name: "simple-icons:volvo",
    size: "48"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Logos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Logos-BUdF2iJ-.mjs.map
