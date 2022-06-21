(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f393"],{b35a:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const l={class:"max-w-full p-4 rounded bg-gray-200"},d={class:"max-w-6xl mx-auto"},b=Object(s["h"])("div",{class:"w-full bg-green-500 p-2 rounded-md"},[Object(s["h"])("label",{for:"",class:"text-2xl text-white"},"Schedule List")],-1),a={class:"text-left py-2"},r=Object(s["j"])("Create Schedule"),i={key:0,class:"table-auto bg-white rounded-md mx-auto w-full text-sm text-left text-gray-500"},o={class:"text-xs text-gray-700 uppercase bg-gray-50"},h={class:"border"},n=Object(s["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"SL",-1),j=Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},[Object(s["h"])("div",{class:"flex min-w-max gap-1"},[Object(s["h"])("div",{class:"bg-indigo-200 text-indigo-500 px-2 py-0.5 rounded-lg"},"Date"),Object(s["h"])("div",{class:"bg-sky-200 text-sky-500 px-2 py-0.5 rounded-lg"},"Time")])],-1),p=Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},[Object(s["h"])("div",{class:"flex min-w-max gap-1"},[Object(s["h"])("div",{class:"px-2 py-0.5 bg-sky-200 text-sky-500 rounded-lg"},"Slot"),Object(s["h"])("div",{class:"px-2 py-0.5 bg-purple-200 text-purple-500 rounded-lg"},"Threshold")])],-1),O=Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},"Appointment",-1),u=Object(s["h"])("th",{scope:"col",class:"px-6 py-3"},"Assigned Mentor",-1),g={key:0,scope:"col",class:"px-6 py-3"},x={class:""},m={scope:"row",class:"border-r border-b p-4"},y={class:"border-r border-b p-4"},w={class:"flex flex-col gap-4 items-center justify-center"},f={class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-indigo-500"},v={class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-sky-500"},k={class:"border-r border-b p-4"},S={class:"flex gap-1 min-w-max py-1 items-center"},_={class:"grow-0 shrink-0 w-8 h-8 text-sm flex justify-center items-center bg-sky-200/50 text-sky-500 rounded-full"},F={class:"grow-0 shrink-0 w-8 h-8 text-sm flex justify-center items-center bg-purple-200/50 text-purple-500 rounded-full"},A={class:"grow shrink text-sm text-left"},C={class:"border-r border-b p-4"},D={class:"flex flex-col gap-4"},L={class:"text-sky-500"},E=Object(s["j"])("Appointments"),I={class:"border-r border-b p-2"},N={class:"grid gap-2"},$={class:"text-left text-lg"},z={class:"flex gap-2 flex-wrap"},B={key:0,class:"border-b p-2"},H={class:"flex gap-1 justify-center items-center"},J=Object(s["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[Object(s["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1);function M(e,t,c,M,T,P){const q=Object(s["C"])("nav-link");return Object(s["w"])(),Object(s["g"])("div",l,[Object(s["h"])("div",d,[b,Object(s["h"])("div",a,[P.ability.includes("Schedule Create")?(Object(s["w"])(),Object(s["e"])(q,{key:0,to:"/admin/schedule-create",class:"bg-brand text-white py-2 rounded-md"},{default:Object(s["N"])(()=>[r]),_:1})):Object(s["f"])("",!0)]),P.ability.includes("Schedule List")?(Object(s["w"])(),Object(s["g"])("table",i,[Object(s["h"])("thead",o,[Object(s["h"])("tr",h,[n,j,p,O,u,P.ability.includes("Schedule Edit")?(Object(s["w"])(),Object(s["g"])("th",g,"Action")):Object(s["f"])("",!0)])]),Object(s["h"])("tbody",x,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(P.schedules.schedules,e=>(Object(s["w"])(),Object(s["g"])("tr",{key:e.id,class:"hover:bg-gray-100 bg-white border-b"},[Object(s["h"])("td",m,Object(s["F"])(e.id),1),Object(s["h"])("td",y,[Object(s["h"])("div",w,[Object(s["h"])("div",f,Object(s["F"])(e.date),1),Object(s["h"])("div",v,Object(s["F"])(e.time_schedule.start_time)+" - "+Object(s["F"])(e.time_schedule.end_time),1)])]),Object(s["h"])("td",k,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.slot_threshold,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t},[Object(s["h"])("div",S,[Object(s["h"])("div",_,Object(s["F"])(e.slot),1),Object(s["h"])("div",F,Object(s["F"])(e.threshold),1),Object(s["h"])("div",A,Object(s["F"])(P.schedules.support_types[t]),1)])]))),128))]),Object(s["h"])("td",C,[Object(s["h"])("div",D,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.appointments,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t},[Object(s["h"])("span",L,Object(s["F"])(e)+" ("+Object(s["F"])(P.schedules.support_types[t])+")",1)]))),128)),Object(s["h"])("div",null,[Object(s["k"])(q,{to:{name:"adminAppointmentIndex",params:{scheduleId:e.id}},class:"bg-blue-500 text-white py-2 rounded-lg"},{default:Object(s["N"])(()=>[E]),_:2},1032,["to"])])])]),Object(s["h"])("td",I,[Object(s["h"])("div",N,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.mentors,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{class:"border border-dashed rounded-md border-blue-400 p-2 pt-1",key:t},[Object(s["h"])("div",$,Object(s["F"])(P.schedules.support_types[t])+" : ",1),Object(s["h"])("div",z,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e,(e,t)=>(Object(s["w"])(),Object(s["g"])("div",{key:t,class:"py-px px-2 text-sm rounded-lg bg-indigo-100 text-indigo-500"},Object(s["F"])(e),1))),128))])]))),128))])]),P.ability.includes("Schedule Edit")?(Object(s["w"])(),Object(s["g"])("td",B,[Object(s["h"])("div",H,[Object(s["k"])(q,{to:{name:"ScheduleEdit",params:{scheduleId:e.id}},title:"Edit"},{default:Object(s["N"])(()=>[J]),_:2},1032,["to"])])])):Object(s["f"])("",!0)]))),128))])])):Object(s["f"])("",!0)])])}var T=c("9773"),P=c("6f93"),q=c("0261"),G=c("81bb"),K=(c("09c5"),{components:{Select:T["a"],Calendar:q["a"],DatePicker:q["b"],Btn:P["a"],NavLink:G["a"]},data(){return{date:new Date,timezone:"",time_schedule:new Date,slot_threshold:new Date}},created(){this.$store.dispatch("adminSchedule/getSchedules")},watch:{date(e,t){this.searchSchedule()},chamberId(e,t){this.searchSchedule()}},computed:{schedules(){return this.$store.state.adminSchedule.schedules},ability(){return this.$store.state.login.abilities}},methods:{}}),Q=c("6b0d"),R=c.n(Q);const U=R()(K,[["render",M]]);t["default"]=U}}]);
//# sourceMappingURL=chunk-2d20f393.99e5d91e.js.map