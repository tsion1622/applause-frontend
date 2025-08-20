import{e as a,r as t,j as e}from"./index-C033NPT0.js";import{C as n}from"./Card-BcSRCw2q.js";/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=a("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=a("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),m=t.createContext(void 0),f=()=>{const i=t.useContext(m);if(!i)throw new Error("ProfilePage must be within an AuthProvider");const{user:s,isSubscribed:r}=i,[l,c]=t.useState(!0);return t.useEffect(()=>{s&&c(!1)},[s]),l?e.jsx("div",{className:"text-center p-10 text-soft-white",children:"Loading Profile..."}):s?e.jsxs("div",{className:"min-h-screen bg-quantum-black text-soft-white p-8",children:[e.jsx("h1",{className:"text-4xl font-bold mb-8 animate-fade-in",children:"My Profile"}),e.jsx(n,{className:"max-w-2xl mx-auto p-8 animate-slide-in-right",children:e.jsxs("div",{className:"flex flex-col items-center md:flex-row md:items-start gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-24 h-24 bg-ion-blue rounded-full flex items-center justify-center mb-4",children:e.jsx(x,{size:48,className:"text-quantum-black"})}),e.jsx("h2",{className:"text-2xl font-bold",children:s.username||"User"})]}),e.jsxs("div",{className:"flex-grow space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{size:20,className:"text-ion-blue"}),e.jsx("span",{className:"text-gray-300",children:s.email})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(d,{size:20,className:"text-ion-blue"}),e.jsxs("span",{className:"font-semibold",children:["Subscription Status:",e.jsx("span",{className:r?"text-green-400 ml-2":"text-solar-orange ml-2",children:r?"Active Premium":"Standard"})]})]})]})]})})]}):e.jsx("div",{className:"text-center p-10 text-solar-orange",children:"Could not load user profile."})};export{f as default};
