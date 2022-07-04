(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c7da424"],{"07d0":function(e,t,r){"use strict";r.r(t);var n=r("7a23");const s={class:"max-w-4xl mx-auto shadow-md p-4 rounded-lg"},a=Object(n["h"])("div",{class:"w-full bg-green-500 p-2 rounded-lg"},[Object(n["h"])("label",{for:"",class:"text-2xl text-white"},"User List")],-1),o={class:"mt-4 bg-white"},c={class:"flex flex-wrap justify-between"},i={key:0,class:"text-left p-4"},l=Object(n["j"])(" Create "),u={class:"text-left p-4"},d={key:0,class:"table-auto mx-auto w-full text-sm text-left"},b={class:"text-xs text-gray-700 uppercase bg-gray-50"},h={scope:"row",class:"px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"},g={class:"flex gap-2 items-center justify-center"},p=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),f=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),j=["onClick"],O=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),w=[O];function y(e,t,r,O,y,m){const v=Object(n["F"])("router-link"),x=Object(n["F"])("VueTailwindPagination");return Object(n["w"])(),Object(n["g"])("div",s,[a,Object(n["h"])("div",o,[Object(n["h"])("div",c,[m.ability.includes("User Create")||m.ability.includes("*")?(Object(n["w"])(),Object(n["g"])("div",i,[Object(n["k"])(v,{to:"users/create",class:"bg-blue-500 text-white px-6 py-2 rounded-md"},{default:Object(n["R"])(()=>[l]),_:1})])):Object(n["f"])("",!0),Object(n["h"])("div",u,[Object(n["h"])("input",{type:"text",class:"border focus:outline-none rounded-md text-center py-1.5",placeholder:"Search Records",onInput:t[0]||(t[0]=(...e)=>m.onSearch&&m.onSearch(...e))},null,32)])]),m.ability.includes("User List")||m.ability.includes("*")?(Object(n["w"])(),Object(n["g"])("table",d,[Object(n["h"])("thead",b,[Object(n["h"])("tr",null,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(y.columns,(e,t)=>(Object(n["w"])(),Object(n["g"])("th",{scope:"col",class:"px-6 py-3",key:t},Object(n["I"])(e),1))),128))])]),Object(n["h"])("tbody",null,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(y.data,e=>(Object(n["w"])(),Object(n["g"])("tr",{key:e.id,class:"bg-white border-b last:border-none"},[Object(n["h"])("td",h,Object(n["I"])(e.id),1),Object(n["h"])("td",null,Object(n["I"])(e.name),1),Object(n["h"])("td",null,Object(n["I"])(e.phone),1),Object(n["h"])("td",null,Object(n["I"])(1==e.gender?"Male":2==e.gender?"Female":"N/A"),1),Object(n["h"])("td",g,[m.ability.includes("User Edit")||m.ability.includes("*")?(Object(n["w"])(),Object(n["e"])(v,{key:0,to:{name:"UserEdit",params:{id:e.id}},class:"bg-blue-500 text-white p-1 rounded-md"},{default:Object(n["R"])(()=>[p]),_:2},1032,["to"])):Object(n["f"])("",!0),m.ability.includes("User Edit")||m.ability.includes("*")?(Object(n["w"])(),Object(n["e"])(v,{key:1,to:{name:"UserShow",params:{id:e.id}},class:"bg-blue-500 text-white p-1 rounded-md"},{default:Object(n["R"])(()=>[f]),_:2},1032,["to"])):Object(n["f"])("",!0),Object(n["h"])("div",{class:"bg-red-500 text-white p-1 rounded-md cursor-pointer",onClick:t=>m.deleteData(e.id)},w,8,j)])]))),128))])])):Object(n["f"])("",!0),Object(n["k"])(x,{current:y.currentPage,total:m.total,onPageChanged:t[1]||(t[1]=e=>m.pageChanged(e))},null,8,["current","total"])])])}var m=r("9773"),v=r("674e"),x=r("6f93"),k=r("734c"),P=r("a242");r("84a7");const C=(e,t)=>{const r=e.filter(e=>Object.values(e).join(" ").toLowerCase().includes(t.toLowerCase()));return r};var S={components:{Select:m["a"],Btn:x["a"],input:v["a"],VueTailwindPagination:P["a"]},data(){return{currentPage:1,total:this.total,columns:["SL","Name","Phone","Gender","Action"],data:[]}},created(){this.$store.dispatch("users/allUser").finally(()=>{this.data=this.user_list.data||""})},computed:{user_list(){return this.$store.state.users.all_user},filterData(){this.data=this.user_list||""},ability(){return this.$store.state.login.abilities||""},total(){return this.user_list.meta?this.user_list.meta.total:10}},methods:{onSearch(e){const t=e.target.value,r=this.user_list.data||"";this.data=C(r,t)},async deleteData(e){await Object(k["a"])().delete("/api/users/"+e).then(()=>{this.$toast.success("User Successfully Deleted !!!",{position:"top",duration:3e3}),this.$store.dispatch("users/allUser")})},pageChanged(e){this.currentPage=e,this.getData()},getData(){this.$store.dispatch("users/allUser",{page:this.currentPage})}}},I=r("6b0d"),$=r.n(I);const V=$()(S,[["render",y]]);t["default"]=V},"674e":function(e,t,r){"use strict";var n=r("7a23");const s=["value"];function a(e,t,r,a,o,c){return Object(n["w"])(),Object(n["g"])("input",{class:"border-gray-300 rounded-md shadow-sm py-1.5 p-2",value:r.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),ref:"input"},null,40,s)}var o={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},c=r("6b0d"),i=r.n(c);const l=i()(o,[["render",a]]);t["a"]=l},"6f93":function(e,t,r){"use strict";var n=r("7a23");const s={class:"flex items-center"},a={class:"text-center w-full"};function o(e,t,r,o,c,i){const l=Object(n["F"])("spinner");return Object(n["w"])(),Object(n["e"])(Object(n["G"])(i.rootComponent),{to:r.routerPath,href:r.href,type:r.type,class:Object(n["r"])([`${i.btnClasses} ${r.border?"shadow-sm":"  "}`,"rounded inline-block"])},{default:Object(n["R"])(()=>[Object(n["h"])("div",s,[r.loading?(Object(n["w"])(),Object(n["e"])(l,{key:0})):Object(n["f"])("",!0),Object(n["h"])("div",a,[Object(n["E"])(e.$slots,"default")])])]),_:3},8,["to","href","type","class"])}var c=r("9348"),i=r("6f9f"),l={props:{href:{type:String},disabled:{default:!1},variant:{type:String,default:"primary"},loading:{type:Boolean,default:!1},type:{type:String,default:""},size:{type:String,default:""},routerPath:{type:String,default:""},border:{type:Boolean,default:!0}},name:"btn",components:{Spinner:c["a"]},computed:{getSize(){switch(this.size){case"xs":return"text-xs px-3 py-1 ";case"sm":return"text-sm px-3 py-1 ";case"md":return"text-base px-3 py-2 ";case"lg":return"text-base px-3 py-3 ";case"xl":return"text-lg px-3 py-3 ";default:return"text-base px-3 py-1"}},btnClasses(){let e=!0;return"boolean"==typeof this.border&&(e=this.border),console.log(typeof this.border,e),(this.disabled?" bg-gray-300 text-white pointer-events-none ":Object(i["a"])(this.variant,{border:this.border,type:"btn"}))+" "+this.getSize},rootComponent(){return this.href?"a":""===this.routerPath?"button":"router-link"}}},u=r("6b0d"),d=r.n(u);const b=d()(l,[["render",o]]);t["a"]=b},"6f9f":function(e,t,r){"use strict";function n(e){const t={primary:" hover:bg-gray-800",success:" hover:bg-green-600",info:" hover:bg-blue-700",warning:" hover:bg-yellow-600",danger:" hover:bg-red-800","primary-outline":" hover:text-gray-50 hover:bg-gray-800","success-outline":" hover:text-green-50 hover:bg-green-600","info-outline":" hover:text-blue-50 hover:bg-blue-700","warning-outline":" hover:text-yellow-50 hover:bg-yellow-600","danger-outline":" hover:text-red-50 hover:bg-red-800"};return t[e]||""}function s(e){const t={primary:" focus:text-gray-800 focus:outline-none focus:shadow hover:border-gray-300",success:" focus:text-gray-800  focus:outline-none focus:shadow  hover:border-green-800",info:" focus:text-gray-800 focus:outline-none focus:shadow  hover:border-blue-800",warning:" focus:text-gray-800 focus:outline-none focus:shadow  hover:border-yellow-800",danger:" focus:text-gray-800 focus:outline-none focus:shadow hover:border-red-800"};return t[e]||""}function a(e,t={type:"btn",inputType:""}){"boolean"!==typeof t.border&&(t.border=!0);let r="";switch(t.type){case"btn":r="hover:border "+n(e);break;case"input":if(r=s(e),"primary"===e)return"border border-gray-200 text-gray-700 "+r;break}"input"===t.type&&(e+="-outline");let a=!1;switch(console.log("hoverVariants: ",r),e){case"primary":return"bg-gray-700 text-white "+r;case"success":return"bg-green-500 text-white "+r;case"info":return"bg-blue-600 text-white "+r;case"warning":return"bg-yellow-500 text-white "+r;case"danger":return"bg-red-700 text-white "+r;case"primary-outline":return a=t.border?"border border-gray-700 ":"",a+" text-gray-700 "+r;case"success-outline":return a=t.border?"border  border-green-500 ":"",a+" text-green-500 "+r;case"info-outline":return a=t.border?"border  border-blue-600 ":"",a+" text-blue-600 "+r;case"warning-outline":return a=t.border?"border  border-yellow-500 ":"",a+" text-yellow-500 "+r;case"danger-outline":return a=t.border?"border  border-red-700 ":"",a+" text-red-700 "+r}}r.d(t,"a",(function(){return a}))},"84a7":function(e,t,r){},9773:function(e,t,r){"use strict";var n=r("7a23");const s=["value"];function a(e,t,r,a,o,c){return Object(n["w"])(),Object(n["g"])("select",{class:"border-gray-300 focus:border-indigo-300 focus:ring py-2 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:r.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),ref:"input"},[Object(n["E"])(e.$slots,"default")],40,s)}var o={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},c=r("6b0d"),i=r.n(c);const l=i()(o,[["render",a]]);t["a"]=l},a242:function(e,t,r){"use strict";var n=r("7a23"),s=Object(n["l"])({name:"Vue Tailwind Pagination",props:{current:{type:Number,default:1},total:{type:Number,default:0},perPage:{type:Number,default:9},pageRange:{type:Number,default:2},textBeforeInput:{type:String,default:"Go to page"},textAfterInput:{type:String,default:"Go"}},data:()=>({input:""}),methods:{hasFirst:function(){return 1!==this.rangeStart},hasLast:function(){return this.rangeEnd<this.totalPages},hasPrev:function(){return this.current>1},hasNext:function(){return this.current<this.totalPages},changePage:function(e){e>0&&e<=this.totalPages&&this.$emit("page-changed",e)}},computed:{pages:function(){for(var e=[],t=this.rangeStart;t<=this.rangeEnd;t++)e.push(t);return e},rangeStart:function(){var e=this.current-this.pageRange;return e>0?e:1},rangeEnd:function(){var e=this.current+this.pageRange;return e<this.totalPages?e:this.totalPages},totalPages:function(){return Math.ceil(this.total/this.perPage)},nextPage:function(){return this.current+1},prevPage:function(){return this.current-1}}});const a=Object(n["U"])("data-v-00d7790c");Object(n["z"])("data-v-00d7790c");const o={class:"min-w-max"},c={class:"flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat"},i={class:"flex items-center"},l={key:0,class:"pr-6"},u=Object(n["k"])("div",{class:"flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6"},[Object(n["k"])("div",{class:"transform -rotate-45"},[Object(n["k"])("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})])])],-1),d={key:1,class:"pr-6"},b=Object(n["k"])("div",{class:"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"},[Object(n["k"])("span",{class:"transform -rotate-45"}," 1 ")],-1),h={key:2,class:"pr-6"},g={class:"pr-6"},p={class:"transform -rotate-45"},f={key:3,class:"pr-6"},j={key:4,class:"pr-6"},O={class:"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"},w={class:"transform -rotate-45"},y={key:5,class:"pr-6"},m=Object(n["k"])("div",{class:"flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6"},[Object(n["k"])("div",{class:"transform -rotate-45"},[Object(n["k"])("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])])],-1),v={class:"flex items-center"},x={class:"pr-2 text-gray-400 font-medium"},k={id:"text-before-input"},P={class:"w-14 rounded-md border border-indigo-400 px-1 py-1"},C={id:"text-after-input"},S=Object(n["k"])("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);Object(n["x"])();const I=a((e,t,r,s,a,I)=>(Object(n["w"])(),Object(n["e"])("div",o,[Object(n["k"])("section",c,[Object(n["k"])("ul",i,[e.hasPrev()?(Object(n["w"])(),Object(n["e"])("li",l,[Object(n["k"])("a",{href:"#",onClick:t[1]||(t[1]=Object(n["T"])(t=>e.changePage(e.prevPage),["prevent"]))},[u])])):Object(n["f"])("",!0),e.hasFirst()?(Object(n["w"])(),Object(n["e"])("li",d,[Object(n["k"])("a",{href:"#",onClick:t[2]||(t[2]=Object(n["T"])(t=>e.changePage(1),["prevent"]))},[b])])):Object(n["f"])("",!0),e.hasFirst()?(Object(n["w"])(),Object(n["e"])("li",h,"...")):Object(n["f"])("",!0),(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["D"])(e.pages,t=>(Object(n["w"])(),Object(n["e"])("li",g,[Object(n["k"])("a",{href:"#",onClick:Object(n["T"])(r=>e.changePage(t),["prevent"])},[Object(n["k"])("div",{class:[{"bg-gradient-to-r from-blue-400 to-indigo-400":e.current==t},"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"]},[Object(n["k"])("span",p,Object(n["I"])(t),1)],2)],8,["onClick"])]))),256)),e.hasLast()?(Object(n["w"])(),Object(n["e"])("li",f,"...")):Object(n["f"])("",!0),e.hasLast()?(Object(n["w"])(),Object(n["e"])("li",j,[Object(n["k"])("a",{href:"#",onClick:t[3]||(t[3]=Object(n["T"])(t=>e.changePage(e.totalPages),["prevent"]))},[Object(n["k"])("div",O,[Object(n["k"])("span",w,Object(n["I"])(e.totalPages),1)])])])):Object(n["f"])("",!0),e.hasNext()?(Object(n["w"])(),Object(n["e"])("li",y,[Object(n["k"])("a",{href:"#",onClick:t[4]||(t[4]=Object(n["T"])(t=>e.changePage(e.nextPage),["prevent"]))},[m])])):Object(n["f"])("",!0)]),Object(n["k"])("div",v,[Object(n["k"])("div",x,[Object(n["k"])("span",k,Object(n["I"])(e.textBeforeInput),1)]),Object(n["k"])("div",P,[Object(n["S"])(Object(n["k"])("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.input=t),class:"w-12 focus:outline-none px-2",type:"text"},null,512),[[n["O"],e.input,void 0,{number:!0}]])]),Object(n["k"])("div",{onClick:t[6]||(t[6]=Object(n["T"])(t=>e.changePage(e.input),["prevent"])),class:"flex items-center pl-4 font-medium cursor-pointer"},[Object(n["k"])("span",C,Object(n["I"])(e.textAfterInput),1),S])])])])));s.render=I,s.__scopeId="data-v-00d7790c",t["a"]=s}}]);
//# sourceMappingURL=chunk-2c7da424.c4fe92ec.js.map