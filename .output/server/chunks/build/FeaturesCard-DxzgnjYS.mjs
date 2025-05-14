import { _ as __nuxt_component_0 } from './nuxt-link-BftFs5bt.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { f as features } from './features-hJsTKfv0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FeaturesCard",
  __ssrInlineRender: true,
  props: {
    excludeSlug: {
      type: String,
      required: false,
      // This makes it optional
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const filteredFeatures = computed(() => {
      if (!props.excludeSlug) return features;
      return features.filter((item) => item.slug !== props.excludeSlug);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(filteredFeatures), (item) => {
        _push(`<div class="flex gap-4 items-start card-wrapper"><div class="card-content flex h-full flex-col"><div class="mt-1 w-58 h-68 shrink-0"><div class="w-full aspect-square"><img${ssrRenderAttr("src", item.img.src)}${ssrRenderAttr("width", item.img.width)}${ssrRenderAttr("height", item.img.height)} format="avif"${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"></div></div><div class="mt-3 w-full flex flex-col flex-1"><h3 class="font-semibold text-lg text-gray-200">${ssrInterpolate(item.title)}</h3><p class="text-slate-500 mt-2 leading-relaxed">${ssrInterpolate(item.description)}</p><p class="text-slate-600 mt-2 mb-5 leading-relaxed text-[14px]">${ssrInterpolate(item.price)}</p><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/services/" + item.slug,
          class: "bg-silver rounded-lg py-2 px-6 w-full flex justify-center text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 `);
            } else {
              return [
                createTextVNode(" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/FeaturesCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FeaturesCard-DxzgnjYS.mjs.map
