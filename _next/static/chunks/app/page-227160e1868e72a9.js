(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{85817:()=>{},18590:()=>{},4530:()=>{},8108:()=>{},80551:()=>{},41234:()=>{},9967:(e,s,a)=>{Promise.resolve().then(a.bind(a,9681))},9681:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var t=a(95155),r=a(12115),l=a(38684),i=a(81190),n=a(30098),o=a(19345),c=a(4370),d=a(5565),m=a(76559),x=a(31850);class h{async loadModel(){try{return this.model=await x.ox("/model_1/model.json"),console.log("Model loaded successfully"),!0}catch(e){return console.error("Error loading model:",e),!1}}preprocessImage(e){return x.DZQ(()=>{let s=x.TaL.fromPixels(e,3),a=x.Slp.resizeBilinear(s,[177,177]).toFloat(),t=x.OEK([.485,.456,.406]).reshape([1,1,3]),r=x.OEK([.229,.224,.225]).reshape([1,1,3]);return a.div(255).sub(t).div(r).expandDims(0)})}async predict(e){if(!this.model)throw Error("Model not loaded");let s=this.preprocessImage(e);try{let e=this.model.predict(s),a=await e.data(),t=x.DZQ(()=>x.Vs9(x.OEK(a))),r=await t.data(),l=Math.max(...Array.from(r)),i=Array.from(r).indexOf(l),n=["Bags","Bottom wear","Dress","Headwear","Shoes","Topwear","Watches"],o=parseFloat(l.toFixed(2));return console.log("Predictions:",{probabilities:Array.from(r),maxProbability:l,classIndex:i,category:n[i],confidence:o}),t.dispose(),{category:n[i],confidence:o}}finally{s.dispose()}}constructor(){this.model=null}}let u=[{id:1,name:"Bags",description:"Handbags, backpacks, accessories"},{id:2,name:"Bottom Wear",description:"Pants, skirts, shorts collection"},{id:3,name:"Dress",description:"Casual, formal, party dresses"},{id:4,name:"Headwear",description:"Hats, caps, hair accessories"},{id:5,name:"Shoes",description:"Sneakers, heels, boots styles"},{id:6,name:"TopWear",description:"Shirts, blouses, jackets range"},{id:7,name:"Watches",description:"Classic, smart, luxury watches"}],g=()=>{let[e,s]=(0,r.useState)(null),[a,x]=(0,r.useState)(null),[g,p]=(0,r.useState)(null),[f,b]=(0,r.useState)(!1),[j,y]=(0,r.useState)(null),[N,F]=(0,r.useState)(!0);(0,r.useEffect)(()=>{(async()=>{try{let e=new h;await e.loadModel()&&y(e)}catch(e){console.error("Error loading model:",e)}finally{F(!1)}})()},[]);let v=async()=>{if(e&&j&&a){b(!0);try{let e=new window.Image;e.src=a,await new Promise((s,a)=>{e.onload=()=>s(),e.onerror=e=>a(e)});let s=await j.predict(e),t=u.find(e=>e.name.toLowerCase()===s.category.toLowerCase());t&&p({category:t,confidence:s.confidence})}catch(e){console.error("Detection failed:",e)}finally{b(!1)}}};return(0,t.jsx)(m.A,{children:(0,t.jsxs)("div",{className:"min-h-screen bg-[#EBE9E1]",children:[(0,t.jsx)(o.default,{}),(0,t.jsxs)("main",{className:"container mx-auto px-4 pt-20 pb-12",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto",children:[(0,t.jsxs)("div",{className:"ml-20",children:[(0,t.jsx)("h1",{className:"text-6xl font-bold gradient-text",children:"LookSense"}),(0,t.jsx)("p",{className:"mt-4 text-gray-700 text-lg",children:"Discover Your Style with AI-Powered Fashion Analysis"})]}),(0,t.jsxs)("div",{className:"max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-[#FFA2B6]/20",children:[(0,t.jsx)("label",{className:"block w-full cursor-pointer",children:(0,t.jsxs)("div",{className:"border-2 border-dashed rounded-xl p-8 text-center transition-all ".concat(a?"border-[#D6536D] bg-[#FFA2B6]/10":"border-gray-300 hover:border-[#D6536D]"),children:[a?(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(d.default,{src:a,alt:"Preview",className:"max-h-64 mx-auto rounded-lg",width:500,height:500}),(0,t.jsx)("div",{className:"absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity",children:(0,t.jsx)("p",{className:"text-white",children:"Click to change image"})})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)(l.A,{className:"w-12 h-12 mx-auto text-[#D6536D]"}),(0,t.jsx)("p",{className:"mt-2 text-gray-600",children:"Drop your fashion image here or click to browse"})]}),(0,t.jsx)("input",{type:"file",className:"hidden",onChange:e=>{var a;let t=null===(a=e.target.files)||void 0===a?void 0:a[0];if(t){s(t);let e=new FileReader;e.onloadend=()=>{x(e.result)},e.readAsDataURL(t)}},accept:"image/*"})]})}),(0,t.jsx)("button",{onClick:v,disabled:!e||f||N,className:"w-full py-3 mt-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all ".concat(!e||f||N?"bg-gray-400":"bg-gradient-to-r from-[#E43D12] to-[#D6536D] hover:opacity-90 hover-effect"),children:N?"Loading Model...":f?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"}),"Analyzing Style..."]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{className:"w-5 h-5"}),"Analyze Style"]})})]})]}),g&&(0,t.jsxs)("div",{className:"mt-4 p-6 bg-gradient-to-r from-[#FFA2B6]/10 to-[#D6536D]/10 rounded-xl border border-[#FFA2B6]/20 max-w-md mx-auto",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)(n.A,{className:"w-6 h-6 text-[#D6536D]"}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:"Style Analysis Results"})]}),(0,t.jsxs)("div",{className:"space-y-3 text-center",children:[(0,t.jsxs)("p",{className:"text-gray-700",children:[(0,t.jsx)("span",{className:"font-medium",children:"Style Category:"})," ",g.category.name]}),(0,t.jsxs)("p",{className:"text-gray-700",children:[(0,t.jsx)("span",{className:"font-medium",children:"Description:"})," ",g.category.description]}),(0,t.jsxs)("p",{className:"text-gray-700",children:[(0,t.jsx)("span",{className:"font-medium",children:"AI Confidence:"})," ",(100*g.confidence).toFixed(2),"%"]})]})]}),(0,t.jsx)("div",{className:"mt-12",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4",children:[(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:u.slice(0,4).map(e=>(0,t.jsxs)("div",{className:"bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-effect border border-[#FFA2B6]/20",children:[(0,t.jsx)("h3",{className:"font-semibold text-gray-800 text-center mb-2",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-600 text-center",children:e.description})]},e.id))}),(0,t.jsx)("div",{className:"mt-6",children:(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto",children:u.slice(4).map(e=>(0,t.jsxs)("div",{className:"bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-effect border border-[#FFA2B6]/20",children:[(0,t.jsx)("h3",{className:"font-semibold text-gray-800 text-center mb-2",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-600 text-center",children:e.description})]},e.id))})})]})})]}),(0,t.jsx)(c.A,{})]})})}},4370:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(95155);function r(){return(0,t.jsx)("footer",{className:"mt-24 bg-gray-900 text-white py-16",children:(0,t.jsxs)("div",{className:"container mx-auto px-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-6",children:"Fashion Categories"}),(0,t.jsx)("ul",{className:"space-y-3",children:["Bags","Bottomwear","Dress","Headwear","Shoes","Topwear","Watches"].map(e=>(0,t.jsxs)("li",{className:"flex items-center space-x-2 hover:text-[#FFA2B6] transition-colors",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),(0,t.jsx)("a",{href:"/category/".concat(e.toLowerCase()),className:"hover:ml-2 transition-all",children:e})]},e))})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-6",children:"Contact Us"}),(0,t.jsx)("p",{children:"marcelaritonang1303@gmail.com"}),(0,t.jsx)("p",{children:"haqi.ammal@gmail.com"}),(0,t.jsx)("p",{children:"Phone: +62 8139 851 7263"}),(0,t.jsx)("p",{children:"Address: Institut Teknologi Sepuluh Nopember Surabaya "})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-6",children:"Quick Links"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/about",className:"hover:text-[#FFA2B6] transition-colors",children:"About Us"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/terms",className:"hover:text-[#FFA2B6] transition-colors",children:"Terms & Conditions"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/privacy",className:"hover:text-[#FFA2B6] transition-colors",children:"Privacy Policy"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/faq",className:"hover:text-[#FFA2B6] transition-colors",children:"FAQs"})})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-6",children:"Newsletter"}),(0,t.jsx)("p",{className:"text-sm text-gray-300",children:"Subscribe to get fashion updates and news"}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("input",{type:"email",placeholder:"Enter your email",className:"px-4 py-2 bg-gray-800 rounded-lg flex-1 text-white"}),(0,t.jsx)("button",{className:"px-4 py-2 bg-[#D6536D] rounded-lg hover:bg-[#E43D12] transition-colors",children:"Subscribe"})]})]})]}),(0,t.jsx)("div",{className:"mt-16 pt-8 border-t border-gray-800 text-center text-gray-400",children:(0,t.jsx)("p",{children:"\xa9 2024 LookSense. All rights reserved."})})]})})}},19345:(e,s,a)=>{"use strict";a.d(s,{default:()=>c});var t=a(95155),r=a(12115),l=a(76046),i=a(67396),n=a(40767),o=a(86710);function c(){let[e,s]=(0,r.useState)(!1),a=(0,l.usePathname)();return(0,t.jsx)("nav",{className:"fixed w-full top-0 z-50 bg-[#F5F5F3] border-b border-[#FF4820]/10",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,t.jsx)(i.default,{href:"/",className:"text-[#FF4820] text-2xl font-bold ml-0 sm:ml-10 md:ml-23 lg:ml-25 z-10 pl-20",onClick:()=>s(!1),children:"LookSense"}),(0,t.jsxs)("div",{className:"hidden md:flex gap-8",children:[(0,t.jsxs)(i.default,{href:"/",className:"text-gray-900 hover:text-[#FF4820] font-medium relative\n                ".concat("/"===a?"text-[#FF4820]":"","\n              "),children:["HOME",(0,t.jsx)("span",{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF4820] transform origin-left transition-transform duration-300\n                ".concat("/"===a?"scale-x-100":"scale-x-0")})]}),(0,t.jsxs)(i.default,{href:"/product",className:"text-gray-900 hover:text-[#FF4820] font-medium relative\n                ".concat("/product"===a?"text-[#FF4820]":"","\n              "),children:["PRODUCT",(0,t.jsx)("span",{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF4820] transform origin-left transition-transform duration-300\n                ".concat("/product"===a?"scale-x-100":"scale-x-0")})]}),(0,t.jsxs)(i.default,{href:"/packaging",className:"text-gray-900 hover:text-[#FF4820] font-medium relative\n                ".concat("/packaging"===a?"text-[#FF4820]":"","\n              "),children:["PACKAGING",(0,t.jsx)("span",{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF4820] transform origin-left transition-transform duration-300\n                ".concat("/packaging"===a?"scale-x-100":"scale-x-0")})]}),(0,t.jsxs)(i.default,{href:"/about",className:"text-gray-900 hover:text-[#FF4820] font-medium relative\n                ".concat("/about"===a?"text-[#FF4820]":"","\n              "),children:["ABOUT US",(0,t.jsx)("span",{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF4820] transform origin-left transition-transform duration-300\n                ".concat("/about"===a?"scale-x-100":"scale-x-0")})]})]}),(0,t.jsx)("button",{onClick:()=>s(!e),className:"md:hidden p-2 rounded-lg hover:bg-gray-100",children:e?(0,t.jsx)(n.A,{className:"h-6 w-6 text-gray-900"}):(0,t.jsx)(o.A,{className:"h-6 w-6 text-gray-900"})})]}),e&&(0,t.jsx)("div",{className:"md:hidden pb-4",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)(i.default,{href:"/",onClick:()=>s(!1),className:"w-full text-center py-2 text-gray-900 hover:text-[#FF4820] font-medium\n                  ".concat("/"===a?"text-[#FF4820] border-b-2 border-[#FF4820]":"","\n                "),children:"HOME"}),(0,t.jsx)(i.default,{href:"/product",onClick:()=>s(!1),className:"w-full text-center py-2 text-gray-900 hover:text-[#FF4820] font-medium\n                  ".concat("/product"===a?"text-[#FF4820] border-b-2 border-[#FF4820]":"","\n                "),children:"PRODUCT"}),(0,t.jsx)(i.default,{href:"/packaging",onClick:()=>s(!1),className:"w-full text-center py-2 text-gray-900 hover:text-[#FF4820] font-medium\n                  ".concat("/packaging"===a?"text-[#FF4820] border-b-2 border-[#FF4820]":"","\n                "),children:"PACKAGING"}),(0,t.jsx)(i.default,{href:"/about",onClick:()=>s(!1),className:"w-full text-center py-2 text-gray-900 hover:text-[#FF4820] font-medium\n                  ".concat("/about"===a?"text-[#FF4820] border-b-2 border-[#FF4820]":"","\n                "),children:"ABOUT US"})]})})]})})}},76559:(e,s,a)=>{"use strict";a.d(s,{A:()=>n});var t=a(95155),r=a(25683),l=a(67993),i=a(76046);function n(e){let{children:s}=e,a=(0,i.usePathname)();return(0,t.jsx)(r.N,{mode:"wait",children:(0,t.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:100,damping:20,duration:.3},children:s},a)})}}},e=>{var s=s=>e(e.s=s);e.O(0,[690,272,660,56,87,251,674,756,891,418,441,517,358],()=>s(9967)),_N_E=e.O()}]);