import __nuxt_component_2 from './Icon-DzqoV7Pd.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useInfo } from './phone-t6m1obiG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactCard",
  __ssrInlineRender: true,
  setup(__props) {
    const info = useInfo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "contacts",
        class: "grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"
      }, _attrs))}><div><h2 class="font-medium text-2xl text-gray-400">\u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h2><p class="text-lg leading-relaxed text-slate-500 mt-3"> \u0415\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F? </p><div class="mt-5"><a${ssrRenderAttr("href", unref(info).instLink)} class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:instagram"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(info).instName)}</span></a><a${ssrRenderAttr("href", unref(info).telLink)} class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:phone"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(info).phone)}</span></a><a${ssrRenderAttr("href", unref(info).wsLink)} class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:whatsapp"
      }, null, _parent));
      _push(`<span>\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C WhatsApp </span></a><div class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:clock"
      }, null, _parent));
      _push(`<span>\u041F\u043D. \u2013 \u0421\u0431.: \u0441 10:00 \u0434\u043E 19:00</span></div><a${ssrRenderAttr("href", unref(info).adresLink)} class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:map-marker"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(info).adresText)}</span></a><div class="flex items-center mt-2 space-x-2 text-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-gray-400 w-4 h-4",
        name: "uil:envelope"
      }, null, _parent));
      _push(`<a${ssrRenderAttr("href", unref(info).emailLinK)}>${ssrInterpolate(unref(info).emailText)}</a></div></div></div><div><iframe src="https://yandex.kz/map-widget/v1/?z=12&amp;ol=biz&amp;oid=33745911107" width="100%" height="450" frameborder="0"></iframe></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ContactCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ContactCard-B1pNLThp.mjs.map
