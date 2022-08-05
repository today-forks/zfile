import{_ as w,O as y,r as f,V,a1 as z,$ as k,a as I,f as U,p as s,h as l,e as i,u as a,j as E,S as N,U as S,ay as C,J as M}from"./index.e67223f6.js";import{aO as q,aL as R,aM as B,x as F,r as j}from"./base.03e490c8.js";import{E as D,a as L}from"./form-item.b94a85f0.js";/* empty css               *//* empty css              */import{_ as O}from"./zfile-basic.366804e6.js";import{i as $,a as G}from"./install.524fb5fa.js";import{r as J}from"./BadgeCheckIcon.69000794.js";import{E as _}from"./request.4e49ca07.js";import{E as T}from"./index.af07ff27.js";import"./index.c92ded65.js";import"./isEqual.a7e24ef1.js";import"./event.776e7e11.js";const A=d=>(N("data-v-defaa902"),d=d(),S(),d),H={class:"h-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},K={class:"h-full lg:h-auto max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},P=A(()=>s("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[s("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-install-logo"})],-1)),Q={class:"w-full lg:w-1/2 xl:w-1/2 mt-10 p-6 sm:p-12"},W={class:"mt-0 flex flex-col items-center"},X={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},Y={class:"w-full flex-1"},Z=C('<div class="my-12 relative" data-v-defaa902><div class="absolute inset-0 flex items-center" aria-hidden="true" data-v-defaa902><div class="w-full border-t text-gray-600" data-v-defaa902></div></div><div class="relative flex justify-center text-sm" data-v-defaa902><span class="px-2 bg-white text-sm leading-none text-gray-600 tracking-wide font-medium" data-v-defaa902>\u7CFB\u7EDF\u521D\u59CB\u5316</span></div></div>',1),ee=M(" \u7CFB\u7EDF\u521D\u59CB\u5316 "),ae={__name:"index",setup(d){let p=y(),u=f(!1),c=f(),t=V({siteName:"",username:"",password:"",domain:""}),g=f({siteName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0",trigger:["change","blur"]}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u8D26\u53F7",trigger:["change","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u5BC6\u7801",trigger:["change","blur"]}],domain:[{required:!0,type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u57DF\u540D\uFF0C\u9700\u4EE5 http:// \u6216 https:// \u5F00\u5934",trigger:"change"}]});const x=r=>{window.open(r)},v=async()=>{await c.value.validate(r=>{r?(u.value=!0,G(t).then(e=>{_({message:"\u521D\u59CB\u5316\u6210\u529F",type:e.code===0?"success":"error",duration:1500,onClose(){p.push("/")}})}).finally(()=>{u.value=!1})):_.warning("\u8BF7\u6B63\u786E\u8F93\u5165\u521D\u59CB\u5316\u503C!")})};return z(()=>{const r=k();t.domain=r.zfileConfig.baseUrl||window.location.origin,$().then(e=>{e.data&&p.push("/")})}),(r,e)=>{const m=T,n=D,h=j,b=L;return I(),U("div",H,[s("div",K,[P,s("div",Q,[s("div",W,[s("h1",X,[s("img",{class:"w-16 cursor-pointer",onClick:e[0]||(e[0]=o=>x("https://github.com/zhaojun1998/zfile")),src:O})]),s("div",Y,[Z,l(b,{onSubmit:e[5]||(e[5]=E(()=>{},["prevent"])),ref_key:"installFormRef",ref:c,rules:a(g),model:a(t),class:"zfile-install-form",size:"large"},{default:i(()=>[l(n,{class:"box animate__animated animate__fadeInUp",prop:"siteName"},{default:i(()=>[l(m,{placeholder:"\u7AD9\u70B9\u540D\u79F0","prefix-icon":a(q),modelValue:a(t).siteName,"onUpdate:modelValue":e[1]||(e[1]=o=>a(t).siteName=o)},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:i(()=>[l(m,{placeholder:"\u7BA1\u7406\u5458\u8D26\u53F7","prefix-icon":a(R),modelValue:a(t).username,"onUpdate:modelValue":e[2]||(e[2]=o=>a(t).username=o),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:i(()=>[l(m,{placeholder:"\u7BA1\u7406\u5458\u5BC6\u7801",type:"password","show-password":"","prefix-icon":a(B),modelValue:a(t).password,"onUpdate:modelValue":e[3]||(e[3]=o=>a(t).password=o),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,{class:"box animate__animated animate__fadeInUp",prop:"domain"},{default:i(()=>[l(m,{placeholder:"\u7AD9\u70B9\u5730\u5740/\u57DF\u540D","prefix-icon":a(F),modelValue:a(t).domain,"onUpdate:modelValue":e[4]||(e[4]=o=>a(t).domain=o),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),l(n,null,{default:i(()=>[l(h,{"native-type":"submit",loading:a(u),class:"w-full",type:"primary",icon:a(J),onClick:v},{default:i(()=>[ee]),_:1},8,["loading","icon"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}};var _e=w(ae,[["__scopeId","data-v-defaa902"]]);export{_e as default};