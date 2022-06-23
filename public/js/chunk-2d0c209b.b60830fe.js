(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c209b"],{4933:function(e,t,s){"use strict";s.r(t);var r=s("7a23"),c=s("5353"),l=s.n(c);const o={class:"w-full p-4"},b={class:"max-w-xl mx-auto min-h-screen"},d={class:"text-left col-span-4 bg-white shadow-md p-4"},a={class:"flex flex-col justify-center items-center"},n=Object(r["h"])("div",{class:"w-8 h-8 rounded-full overflow-hidden"},[Object(r["h"])("img",{src:l.a,alt:"",class:"w-full h-full object-cover bg-white p-1"})],-1),i={class:"text-2xl"},h=Object(r["h"])("hr",{class:"border border-hoverColor"},null,-1),j={key:0},u={key:1},O={key:2},p={key:3},f={key:4},g={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},m={class:"relative w-auto my-6 mx-auto max-w-6xl"},x={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},w={class:"flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t"},v=Object(r["h"])("label",{class:"text-2xl font-semibold text-center"}," Appointment Details ",-1),y={class:"relative p-2 flex-auto"},F={class:"text-slate-500 text-lg leading-relaxed"},k={class:"table-auto bg-white rounded-md mx-auto w-full text-sm text-left text-gray-500"},M=Object(r["h"])("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[Object(r["h"])("tr",{class:"border-r"},[Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"SL"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Chamber"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Feedback History"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Date"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Type"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Question"),Object(r["h"])("th",{scope:"col",class:"px-6 py-3 border-r"},"Appointment Status")])],-1),D={class:"border-r border-b p-4"},_={class:"border-r border-b p-4"},C={class:"border-r border-b p-4"},$=Object(r["j"])("Feedback"),A={class:"border-r border-b p-4"},T={class:"border-r border-b p-4"},H={class:"border-r border-b p-4"},L=["innerHTML"],P={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"};function z(e,t,s,c,l,z){const J=Object(r["C"])("router-link");return Object(r["w"])(),Object(r["g"])("div",o,[Object(r["j"])(Object(r["F"])(e.$store.state.login.user.id)+" ",1),Object(r["h"])("div",b,[Object(r["h"])("div",d,[Object(r["h"])("div",a,[n,Object(r["h"])("div",i,Object(r["F"])(e.$store.state.login.user.name?e.$store.state.login.user.name:""),1)]),h,z.user.phone?(Object(r["w"])(),Object(r["g"])("div",j,"Phone : "+Object(r["F"])(z.user.phone),1)):Object(r["f"])("",!0),z.user.email?(Object(r["w"])(),Object(r["g"])("div",u,"Email : "+Object(r["F"])(z.user.email),1)):Object(r["f"])("",!0),z.user.gender?(Object(r["w"])(),Object(r["g"])("div",O,"Gender : "+Object(r["F"])(z.user.gender),1)):Object(r["f"])("",!0),z.user.bmdc?(Object(r["w"])(),Object(r["g"])("div",p,"BMDC : "+Object(r["F"])(z.user.bmdc),1)):Object(r["f"])("",!0),z.user.medical?(Object(r["w"])(),Object(r["g"])("div",f,"Medical : "+Object(r["F"])(z.user.medical),1)):Object(r["f"])("",!0),Object(r["h"])("div",null,"Total Appointment : "+Object(r["F"])(z.profile.last_appointment?z.profile.last_appointment.data.length:""),1),Object(r["h"])("div",{class:"cursor-pointer hover:text-blue-400 hover:underline",onClick:t[0]||(t[0]=e=>z.toggleModal())},"My Appointment Details")])]),Object(r["h"])("div",null,[l.showModal?(Object(r["w"])(),Object(r["g"])("div",g,[Object(r["h"])("div",m,[Object(r["h"])("div",x,[Object(r["h"])("div",w,[v,Object(r["h"])("button",{class:"text-3xl text-red-500",onClick:t[1]||(t[1]=e=>z.toggleModal())}," × ")]),Object(r["h"])("div",y,[Object(r["h"])("div",F,[Object(r["h"])("table",k,[M,Object(r["h"])("tbody",null,[(Object(r["w"])(!0),Object(r["g"])(r["a"],null,Object(r["A"])(z.appointments.data,(e,t)=>(Object(r["w"])(),Object(r["g"])("tr",{key:e.id,scope:"row",class:"border-r border-b p-4"},[Object(r["h"])("td",D,Object(r["F"])(++t),1),Object(r["h"])("td",_,[Object(r["h"])("div",null,"Name: "+Object(r["F"])(e.schedule.chamber?e.schedule.chamber.name:""),1),Object(r["h"])("div",null,"Address: "+Object(r["F"])(e.schedule.chamber?e.schedule.chamber.address:""),1)]),Object(r["h"])("td",C,[Object(r["k"])(J,{to:"/"},{default:Object(r["N"])(()=>[$]),_:1})]),Object(r["h"])("td",A,[Object(r["h"])("div",null,Object(r["F"])(e.schedule.date),1),Object(r["h"])("div",null,Object(r["F"])(e.schedule.time_schedule.start_time)+" - "+Object(r["F"])(e.schedule.time_schedule.end_time),1)]),Object(r["h"])("td",T,Object(r["F"])(z.profile.types?z.profile.types[e.type]:""),1),Object(r["h"])("td",H,Object(r["F"])(e.questions),1),Object(r["h"])("td",{class:"border-r border-b p-4",innerHTML:e.mentor?"<strong class='text-green-500'>Completed</strong>":e.schedule.date<z.formatDate(new Date)?"<strong class='text-red-500'>Missed</strong>":"<strong class='text-yellow-500'>Pending</strong>"},null,8,L)]))),128))])])])])])])])):Object(r["f"])("",!0),l.showModal?(Object(r["w"])(),Object(r["g"])("div",P)):Object(r["f"])("",!0)])])}var J={data(){return{seen:!1,showModal:!1}},created(){this.$store.dispatch("profile/getProfile")},computed:{profileId(){return this.$store.state.login.user.id},profile(){return this.$store.state.profile.profile},user(){return this.$store.state.profile.profile.user||""},appointments(){return this.profile.last_appointment||""}},methods:{formatDate(e){let t=new Date(e),s=""+(t.getMonth()+1),r=""+t.getDate(),c=t.getFullYear();return s.length<2&&(s="0"+s),r.length<2&&(r="0"+r),[c,s,r].join("-")},toggleModal:function(){this.showModal=!this.showModal}}},N=s("6b0d"),S=s.n(N);const q=S()(J,[["render",z]]);t["default"]=q}}]);
//# sourceMappingURL=chunk-2d0c209b.b60830fe.js.map