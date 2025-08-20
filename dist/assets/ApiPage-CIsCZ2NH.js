import{j as e,a as h,B as x}from"./index-C033NPT0.js";import{C as r,c as a,d as o,a as n}from"./Card-BcSRCw2q.js";import{u}from"./index-b5uPlb3-.js";const c=({htmlContent:s})=>s?e.jsx("div",{className:"code-block-wrapper",dangerouslySetInnerHTML:{__html:s}}):e.jsx("div",{className:"bg-gray-800 text-white p-4 rounded-lg",children:e.jsx("p",{children:"No code available to display."})}),g=()=>{const{user:s}=h(),t=s?"your-api-key-here":"log-in-to-get-your-api-key",i=p=>{navigator.clipboard.writeText(p),u.success("Copied to clipboard!")},l=`import requests

api_key = "${t}"
headers = {"Authorization": f"Bearer {api_key}"}
response = requests.get("https://api.applaude.com/v1/projects", headers=headers)

print(response.json())`,d=`const apiKey = "${t}";
const headers = { "Authorization": \`Bearer \${apiKey}\` };
fetch("https://api.applaude.com/v1/projects", { headers })
  .then(response => response.json())
  .then(data => console.log(data));`;return e.jsxs("div",{className:"container mx-auto p-4 md:p-8",children:[e.jsx("h1",{className:"text-4xl font-bold mb-6 text-center",children:"Applaude API"}),e.jsx("p",{className:"text-lg text-gray-600 text-center mb-10",children:"Integrate your applications with our powerful API to automate your workflow."}),e.jsxs(r,{className:"mb-8",children:[e.jsx(a,{children:e.jsx(o,{children:"Your API Key"})}),e.jsxs(n,{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm bg-gray-100 p-2 rounded",children:t}),e.jsx(x,{variant:"outline",onClick:()=>i(t),children:"Copy Key"})]})]}),e.jsxs(r,{className:"mb-8",children:[e.jsx(a,{children:e.jsx(o,{children:"Example: Fetch Projects (Python)"})}),e.jsx(n,{children:e.jsx(c,{htmlContent:l})})]}),e.jsxs(r,{children:[e.jsx(a,{children:e.jsx(o,{children:"Example: Fetch Projects (JavaScript)"})}),e.jsx(n,{children:e.jsx(c,{htmlContent:d})})]})]})};export{g as default};
