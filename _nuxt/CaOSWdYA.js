import{a0 as j,u as P,a1 as d,c as _,a2 as B,a3 as H,J as M,a4 as R,e as E,E as z,a5 as g,a6 as N,$ as S,W as w}from"./n0zzOrT2.js";const V=s=>s==="defer"||s===!1;function x(...s){var p;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,f,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),C=f,b=()=>d.value,O=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??b,a.getCachedData=a.getCachedData??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const u=a.getCachedData(e,t),h=u!=null;if(!t._asyncData[e]||!a.immediate){(p=t.payload._errors)[e]??(p[e]=d.errorValue);const i=a.deep?_:B;t._asyncData[e]={data:i(h?u:a.default()),pending:_(!h),error:H(t.payload._errors,e),status:_("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(i={})=>{if(t._asyncDataPromises[e]){if(V(i.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(i._initial||t.isHydrating&&i._initial!==!1){const c=i._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,o)=>{try{c(C(t))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=K(o,a.pick)),t.payload.data[e]=o,n.data.value=o,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=S(c),n.data.value=w(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>F(t,e);const D=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const i=M();if(i&&m&&a.immediate&&!i.sp&&(i.sp=[]),i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;R(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),E(()=>o.splice(0,o.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=N();if(a.watch){const o=z(a.watch,()=>n.refresh());l&&g(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await n.refresh()});l&&g(c)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(v,n),v}async function I(s){await new Promise(e=>j(e)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function F(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=w(s._asyncData[r]._default()),s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function K(s,r){const e={};for(const f of r)e[f]=s[f];return e}const J={content:"v3.3.0--nhvu8zFHRy"},U={content:"_content_content",info:"_content_info"},W={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}};export{W as a,J as c,I as r,U as t,x as u};
