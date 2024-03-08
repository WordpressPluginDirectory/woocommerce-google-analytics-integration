(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{add_shipping_info:()=>h,add_to_cart:()=>v,begin_checkout:()=>f,purchase:()=>A,remove_from_cart:()=>y,search:()=>k,select_content:()=>b,trackChangeCartItemQuantity:()=>w,trackEvent:()=>H,trackException:()=>E,view_item:()=>$,view_item_list:()=>g});const o=wcgai.config,r=window.wp.i18n,n=window.wp.hooks,c=(e,t)=>{var o;const r={};return e.variation&&(r.item_variant=e.variation),{item_id:s(e),item_name:e.name,...m(e),quantity:null!==(o=e.quantity)&&void 0!==o?o:t,price:a(e.prices.price,e.prices.currency_minor_unit),...r}},i=(e,t)=>({item_id:s(e),item_name:e.name,item_list_name:t,...m(e),price:a(e.prices.price,e.prices.currency_minor_unit)}),a=(e,t=2)=>parseInt(e,10)/10**t,d=(e,t,o)=>{(0,n.removeAction)(e,t),(0,n.addAction)(e,t,o)},s=e=>{const t=e.extensions?.woocommerce_google_analytics_integration?.identifier;return void 0!==t?t:"product_sku"===o.identifier?e.sku?e.sku:"#"+e.id:e.id},u=e=>e.coupons[0]?.code?{coupon:e.coupons[0]?.code}:{},m=e=>"categories"in e&&e.categories.length?_(e.categories):{},_=e=>Object.fromEntries(e.slice(0,5).map(((e,t)=>[l(t),e.name]))),l=e=>"item_category"+(e>0?e+1:""),p=(e,t,o)=>{var r;return null!==(r=o?.items?.find((({id:t})=>t===e)))&&void 0!==r?r:t?.find((({id:t})=>t===e))},g=({products:e,listName:t=(0,r.__)("Product List","woocommerce-google-analytics-integration")})=>0!==e.length&&{item_list_id:"engagement",item_list_name:(0,r.__)("Viewing products","woocommerce-google-analytics-integration"),items:e.map(((e,o)=>({...i(e,t),index:o+1})))},v=({product:e,quantity:t=1})=>({items:[c(e,t)]}),y=({product:e,quantity:t=1})=>({items:[c(e,t)]}),w=({product:e,quantity:t=1})=>{H("change_cart_quantity",{event_category:"ecommerce",event_label:(0,r.__)("Change Cart Item Quantity","woocommerce-google-analytics-integration"),items:[c(e,t)]})},f=({storeCart:e})=>({currency:e.totals.currency_code,value:a(e.totals.total_price,e.totals.currency_minor_unit),...u(e),items:e.items.map(c)}),h=({storeCart:e})=>({currency:e.totals.currency_code,value:a(e.totals.total_price,e.totals.currency_minor_unit),shipping_tier:e.shippingRates[0]?.shipping_rates?.find((e=>e.selected))?.name||"",...u(e),items:e.items.map(c)}),b=({product:e})=>({content_type:"product",content_id:s(e)}),k=({searchTerm:e})=>({search_term:e}),$=({product:e,listName:t=(0,r.__)("Product List","woocommerce-google-analytics-integration")})=>!!e&&{items:[i(e,t)]},A=({order:e})=>void 0!==e&&{currency:e.currency,value:parseInt(e.value),items:e.items.map(c)},E=({status:e,content:t})=>{if("error"===e)return{description:t,fatal:!1}},H=(e,t)=>{if("function"!=typeof gtag)throw new Error("Function gtag not implemented.");window.gtag("event",e,t)};let q;const L=Object.freeze(new class{constructor(){if(q)throw new Error("Cannot instantiate more than one Tracker");function e(){window.dataLayer.push(arguments)}q=this,window.dataLayer=window.dataLayer||[],window[o.tracker_function_name]=e;for(const t of o.consent_modes||[])e("consent","default",t);e("js",new Date),e("set",`developer_id.${o.developer_id}`,!0),e("config",o.gtag_id,{allow_google_signals:o.allow_google_signals,link_attribution:o.link_attribution,anonymize_ip:o.anonymize_ip,logged_in:o.logged_in,linker:o.linker,custom_map:o.custom_map})}eventHandler(e){const r=t[e];if("function"!=typeof r)throw new Error(`Event ${e} is not supported.`);return function(t){const n=r(t);o.events.includes(e)&&n&&window[o.tracker_function_name]("event",e,n)}}}),C="woocommerce-google-analytics",j="experimental__woocommerce_blocks";d(`${j}-product-list-render`,C,L.eventHandler("view_item_list")),d(`${j}-product-render`,C,L.eventHandler("view_item")),d(`${j}-cart-add-item`,C,L.eventHandler("add_to_cart")),d(`${j}-cart-remove-item`,C,L.eventHandler("remove_from_cart")),d(`${j}-checkout-render-checkout-form`,C,L.eventHandler("begin_checkout")),d(`${j}-product-view-link`,C,L.eventHandler("select_content")),(0,n.removeAction)(`${j}-checkout-submit`,C),(0,n.removeAction)(`${j}-checkout-set-email-address`,C),(0,n.removeAction)(`${j}-checkout-set-phone-number`,C),(0,n.removeAction)(`${j}-checkout-set-billing-address`,C),(0,n.removeAction)(`${j}-cart-set-item-quantity`,C),(0,n.removeAction)(`${j}-product-search`,C),(0,n.removeAction)(`${j}-store-notice-create`,C),window.wcgai.trackClassicPages=function({events:e,cart:t,products:o,product:r,added_to_cart:n,order:c}){const i={storeCart:t,products:o,product:r,order:c};Object.values(null!=e?e:{}).forEach((e=>{"add_to_cart"===e?L.eventHandler(e)({product:n}):L.eventHandler(e)(i)})),document.body.onadded_to_cart=(e,r,n,c)=>{L.eventHandler("add_to_cart")({product:p(parseInt(c[0].dataset.product_id),o,t)})};const a=()=>{document.querySelectorAll(".woocommerce-cart-form .woocommerce-cart-form__cart-item .remove[data-product_id]").forEach((e=>e.addEventListener("click",d)))};function d(e){L.eventHandler("remove_from_cart")({product:p(parseInt(e.target.dataset.product_id),o,t)})}a();const s=document.body.onupdated_wc_div;document.body.onupdated_wc_div=(...e)=>{"function"==typeof s&&s(...e),a()};const u=document.body.onremoved_from_cart;document.body.onremoved_from_cart=(...e)=>{"function"==typeof u&&u(...e),d({target:e[3][0]})},document.querySelectorAll(".products .product:not(.wp-block-post)")?.forEach((e=>{const r=e.querySelector("a[data-product_id]")?.getAttribute("data-product_id");r&&e.addEventListener("click",(e=>{const n=e.target.closest(".woocommerce-loop-product__link"),c=e.target.classList.contains("button")&&e.target.hasAttribute("data-product_id"),i=e.target.classList.contains("add_to_cart_button")&&!e.target.classList.contains("product_type_variable");(n||c&&!i)&&L.eventHandler("select_content")({product:p(parseInt(r),o,t)})}))}))}})();