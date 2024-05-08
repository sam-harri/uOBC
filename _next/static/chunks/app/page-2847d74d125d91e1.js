(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4181:function(e,t,s){Promise.resolve().then(s.t.bind(s,413,23)),Promise.resolve().then(s.bind(s,3824)),Promise.resolve().then(s.bind(s,6414))},3824:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return components_RegistrationHero}});var r=s(7437),a=s(2265),l=s(2173);let n=l.Z.create({baseURL:"http://192.168.0.122:5001/",timeout:1e4,headers:{"Content-Type":"application/json"}});n.interceptors.request.use(e=>e,e=>Promise.reject(e)),n.interceptors.response.use(e=>e,e=>Promise.reject(e));let i=["https://placehold.co/400x400/orange/white","https://placehold.co/400x400/blue/white","https://placehold.co/400x400/red/white"];var ClassRegistration=()=>{let[e,t]=(0,a.useState)(null),[s,o]=(0,a.useState)({firstName:"",lastName:"",email:""}),[d,c]=(0,a.useState)(""),[m,h]=(0,a.useState)(" "),[u,x]=(0,a.useState)({firstName:"",lastName:"",email:""}),[g,p]=(0,a.useState)([]);(0,a.useEffect)(()=>{let fetchClasses=async()=>{try{console.log("here");let e=await n.get("/getclasses");p(e.data),console.log(e.data)}catch(e){console.error("Error fetching classes:",e)}};fetchClasses();let e=i[Math.floor(Math.random()*i.length)];c(e)},[]);let handleInputChange=e=>{o({...s,[e.target.name]:e.target.value}),x({...u,[e.target.name]:""}),h(" ")},handleEnroll=async()=>{let t={firstName:s.firstName?"":"First Name is required",lastName:s.lastName?"":"Last Name is required",email:s.email?"":"Email is required"};if(!s.firstName||!s.lastName||!s.email){x(t);return}let r={first_name:s.firstName,last_name:s.lastName,email:s.email,class_id:e?e.id:""};try{let e=await n.post("/register",r);h(e.data.message)}catch(e){l.Z.isAxiosError(e)&&e.response?h(e.response.data.detail):h("An error occurred while enrolling. :(")}o({firstName:"",lastName:"",email:""}),x({firstName:"",lastName:"",email:""})},renderErrorMessage=e=>(0,r.jsx)("div",{className:"text-xs text-red-600",children:e?(0,r.jsx)("p",{children:e}):(0,r.jsx)("span",{children:"\xa0"})});return(0,r.jsxs)("div",{className:"block rounded-lg shadow-lg bg-white max-w-md mx-auto mb-5",children:[(0,r.jsx)("div",{className:"h-40 bg-cover bg-center rounded-t-lg overflow-hidden flex items-center justify-center",style:{backgroundImage:"url(".concat(d,")"),filter:"grayscale(100%)",opacity:"0.5"}}),(0,r.jsx)("p",{className:"text-transparent text-xs"}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"class",className:"block text-gray-700 text-sm font-bold mb-2",children:"Select a class:"}),(0,r.jsxs)("select",{id:"class",name:"class",onChange:e=>{let s=g.find(t=>t.id===e.target.value);if(t(s||null),h(" "),s){let e=i[Math.floor(Math.random()*i.length)];c(e)}else c("")},value:(null==e?void 0:e.id)||"",className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select a class"}),g.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsxs)("p",{className:"text-gray-600",children:["Time: ",(null==e?void 0:e.time)?(e=>{let t=new Date(1e3*e),s=t.toLocaleDateString("en-US",{month:"long",day:"numeric"}),r=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0});return r=r.split(":").map((e,t)=>0===t?String(parseInt(e)):e).join(":"),"".concat(s,", ").concat(r)})(e.time):""]}),(0,r.jsxs)("p",{className:"text-gray-600",children:["Slots Available: ",e&&void 0!==e.max_capacity&&e.registration?Math.max(e.max_capacity-e.registration.length,0):""]})]}),(0,r.jsxs)("div",{className:"mb-4 space-y-1",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:s.firstName,onChange:handleInputChange,className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"}),renderErrorMessage(u.firstName)]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:s.lastName,onChange:handleInputChange,className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"}),renderErrorMessage(u.lastName)]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:s.email,onChange:handleInputChange,className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"}),renderErrorMessage(u.email)]})]}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("button",{onClick:handleEnroll,className:"w-full bg-red-900 border-2 text-white border-transparent font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:text-red-900 hover:border-red-900 active:scale-95",children:(null==e?void 0:e.registration.length)===(null==e?void 0:e.max_capacity)?"Join Waitlist":"Enroll"})}),(0,r.jsx)("div",{className:"h-6",children:(0,r.jsx)("p",{className:"text-center text-red-900 font-semibold",children:m})})]})]})},components_RegistrationHero=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{className:"w-4/5 mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8",children:[(0,r.jsx)("div",{id:"registration-section",children:(0,r.jsx)(ClassRegistration,{})}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-4xl md:text-5xl font-bold text-red-900 mb-6",children:"Dive Into Boxing"}),(0,r.jsxs)("ul",{className:"text-lg text-slate-700 list-disc pl-5 space-y-2",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Accessible to everyone:"})," Our classes welcome all skill levels, from beginners to seasoned boxers."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Affordable:"})," Join any class for just $2. It's fitness that won't break the bank."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Equipment supplied:"})," Gloves and gear are provided. Just show up ready to train!"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Full-body workout:"})," Prepare for a session that'll boost your stamina, strength, and speed."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Experienced Coaches:"})," Learn from the best with our team of professional and experienced coaches."]})]}),(0,r.jsx)("hr",{className:"border-t-2 border-red-900 mx-auto w-2/3"})]})]})})},6414:function(e,t,s){"use strict";s.r(t);var r=s(7437),a=s(9844),l=s(2265),n=s(6691),i=s.n(n);let ShuffleGrid=()=>{let shuffleArray=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t},e=Array.from({length:16},(e,t)=>({id:t+1,src:"/uOBC/".concat(t+1,".jpg")})),[t,s]=(0,l.useState)(()=>shuffleArray(e));return(0,l.useEffect)(()=>{let t=setInterval(()=>{let t=window.scrollY;s(shuffleArray(e)),requestAnimationFrame(()=>{window.scrollTo(0,t)})},3e3);return()=>clearInterval(t)},[]),(0,r.jsx)("div",{className:"grid grid-cols-4 grid-rows-4 h-[450px] gap-1",children:t.map(e=>(0,r.jsx)(a.E.div,{layout:!0,transition:{duration:1.5,type:"spring"},className:"w-full h-full",style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover"}},e.id))})};t.default=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:"bg-red-900 text-white py-4",children:(0,r.jsx)("div",{className:"flex items-center justify-between w-full mx-auto px-5",children:(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(i(),{src:"https://placehold.co/400",alt:"uOBC Logo",width:40,height:40,className:"rounded-full"})})})}),(0,r.jsxs)("section",{className:"w-4/5 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"block mb-4 text-xs md:text-sm text-red-900 font-medium",children:"The Toughest Club on Campus"}),(0,r.jsx)("h3",{className:"text-4xl md:text-6xl font-semibold",children:"University of Ottawa Boxing Club"}),(0,r.jsx)("p",{className:"text-base md:text-lg text-slate-700 my-4 md:my-6",children:"Welcome to the uOBC! Located in the Montpetit Martial Arts room, our club is the perfect place for students of all skill levels to come together and explore the exciting world of boxing."}),(0,r.jsx)("button",{onClick:()=>{let e=document.getElementById("registration-section");e&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},className:"bg-red-900 border-2 text-white border-transparent font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:text-red-900 hover:border-red-900 active:scale-95",children:"Find a class"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(ShuffleGrid,{})})]})]})}},function(e){e.O(0,[520,971,472,744],function(){return e(e.s=4181)}),_N_E=e.O()}]);