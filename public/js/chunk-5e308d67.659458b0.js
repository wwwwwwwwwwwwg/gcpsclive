(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e308d67"],{"177b":function(e,t,s){"use strict";s("f532")},"674e":function(e,t,s){"use strict";var n=s("7a23");const r=["value"];function a(e,t,s,a,c,o){return Object(n["w"])(),Object(n["g"])("input",{class:"border-gray-300 rounded-md shadow-sm py-1.5 p-2",value:s.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),ref:"input"},null,40,r)}var c={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},o=s("6b0d"),l=s.n(o);const i=l()(c,[["render",a]]);t["a"]=i},9348:function(e,t,s){"use strict";var n=s("7a23");const r={class:"flex items-center"},a=Object(n["h"])("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[Object(n["h"])("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(n["h"])("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1);function c(e,t){return Object(n["w"])(),Object(n["g"])("div",r,[a,Object(n["B"])(e.$slots,"default")])}var o=s("6b0d"),l=s.n(o);const i={},u=l()(i,[["render",c]]);t["a"]=u},e524:function(e,t,s){e.exports=s.p+"img/login.032f0ba1.gif"},f532:function(e,t,s){},f9a8:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),r=s("e524"),a=s.n(r);const c={class:"max-w-4xl mx-auto px-2 z-0 p-2 rounded"},o={class:"w-full md:grid md:grid-cols-12 gap-8 mx-auto bg-white md:h-96 p-4 rounded-t-md"},l=Object(n["h"])("div",{class:"col-span-6 flex items-center"},[Object(n["h"])("img",{src:a.a})],-1),i={class:"col-span-6 flex flex-col justify-center gap-8 mt-8 md:mt-0"},u=Object(n["h"])("h2",{class:"text-2xl text-brand font-semibold"},"Join With GCPSC",-1),d={class:"relative"},h={key:0,class:"block w-full relative"},p={key:0,class:"absolute inset-0 bg-green-700/10 z-50 flex items-center justify-end px-4"},b=Object(n["h"])("span",{class:"text-green-700 text-2xl"},"✓",-1),m=[b],f={class:"flex justify-center"},j={type:"submit",class:"bg-brand text-white py-1.5 px-2 rounded-md flex items-center"},O=Object(n["j"])(" Join ");function g(e,t,s,r,a,b){const g=Object(n["C"])("Input"),x=Object(n["C"])("spinner");return Object(n["w"])(),Object(n["g"])("div",c,[Object(n["h"])("div",null,[Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["P"])((...e)=>b.findUser&&b.findUser(...e),["prevent"]))},[Object(n["h"])("div",o,[l,Object(n["h"])("div",i,[u,Object(n["h"])("div",d,[Object(n["k"])(g,{id:"phone",class:"w-full text-center margin: 0",type:"number",modelValue:a.phone,"onUpdate:modelValue":t[0]||(t[0]=e=>a.phone=e),placeholder:"Phone : 017XXXXXXXX",required:""},null,8,["modelValue"])]),b.searchUser.step?(Object(n["w"])(),Object(n["g"])("div",h,[Object(n["k"])(g,{type:"text",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.name=e),class:Object(n["r"])([b.searchUser.step&&b.searchUser.hasName?"border-green-700/10 text-green-700":"border-brand-primary text-brand-primary","w-full focus:outline-none text-center"]),placeholder:"Full Name",autocomplete:"off"},null,8,["modelValue","class"]),b.searchUser.step&&b.searchUser.hasName?(Object(n["w"])(),Object(n["g"])("div",p,m)):Object(n["f"])("",!0)])):Object(n["f"])("",!0),Object(n["h"])("div",f,[Object(n["h"])("button",j,[a.loading?(Object(n["w"])(),Object(n["e"])(x,{key:0})):Object(n["f"])("",!0),O])])])])],32)])])}var x=s("674e"),w=s("9348"),v={components:{Input:x["a"],Spinner:w["a"]},data(){return{login:!1,send:!1,sms:!1,name:"",phone:"",step:1,loading:!1}},computed:{searchUser(){return this.$store.state.join.user}},watch:{"$store.state.join.user"(e){this.phone=e.phone,this.name=e.name}},methods:{findUser(){this.loading=!0,this.formErrors=null,11==this.phone.length&&this.$store.dispatch("join/findUser",{data:{phone:this.phone}}).then(e=>{const t=this.searchUser;console.log("asdfas"),console.warn(e),t.has_user&&this.$router.push({path:"/login",query:{phone:this.phone}}),t.has_user||this.$router.push({path:"/confirm",query:{phone:this.phone}})}).finally(()=>{this.loading=!1})}}},y=(s("177b"),s("6b0d")),U=s.n(y);const k=U()(v,[["render",g]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-5e308d67.659458b0.js.map