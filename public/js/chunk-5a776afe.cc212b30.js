(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a776afe"],{5131:function(e,t,l){"use strict";l.r(t);var d=l("7a23");const a={class:"max-w-lg mx-auto bg-gray-200 p-4 rounded mt-8"},s=Object(d["h"])("label",{class:"text-2xl"},"Schedule",-1),o={class:"text-left"},c=Object(d["h"])("label",{class:"text-base md:text-md"},"Chamber",-1),u=["value"],r={class:"text-left"},i=Object(d["h"])("label",null,"Date",-1),h=["value"],n={class:"text-left flex gap-2"},m=Object(d["h"])("label",null,"Start Time",-1),b=Object(d["h"])("label",null,"End Time",-1),p=Object(d["h"])("label",null,"Status",-1),j=Object(d["h"])("option",{value:"1"},"Active",-1),O={class:"text-left flex gap-x-2 mt-2"},f={class:"grid"},_=Object(d["h"])("option",{value:""}," Select Type ",-1),v=["value"],g=["onUpdate:modelValue"],y=["onUpdate:modelValue"],w=["onClick"],x=Object(d["j"])(" + Add"),V=Object(d["j"])("Submit");function S(e,t,l,S,k,U){const C=Object(d["C"])("Select"),$=Object(d["C"])("date-picker"),D=Object(d["C"])("Btn");return Object(d["w"])(),Object(d["g"])("div",a,[s,Object(d["h"])("div",o,[c,Object(d["k"])(C,{class:"w-full border py-3 bg-white outline-none p-2",modelValue:k.form.chamber_id,"onUpdate:modelValue":t[0]||(t[0]=e=>k.form.chamber_id=e)},{default:Object(d["M"])(()=>[(Object(d["w"])(!0),Object(d["g"])(d["a"],null,Object(d["A"])(U.schedules.chambers,e=>(Object(d["w"])(),Object(d["g"])("option",{value:e.id,key:e.id},Object(d["F"])(e.name),9,u))),128))]),_:1},8,["modelValue"])]),Object(d["h"])("div",r,[i,Object(d["k"])($,{modelValue:k.form.date,"onUpdate:modelValue":t[1]||(t[1]=e=>k.form.date=e)},{default:Object(d["M"])(({inputValue:e,inputEvents:t})=>[Object(d["h"])("input",Object(d["p"])({class:"w-full px-3 py-2 border rounded",value:e},Object(d["G"])(t)),null,16,h)]),_:1},8,["modelValue"])]),Object(d["h"])("div",n,[Object(d["h"])("div",null,[m,Object(d["N"])(Object(d["h"])("input",{type:"time","onUpdate:modelValue":t[2]||(t[2]=e=>k.form.s_time=e),class:"w-full py-2 rounded p-2"},null,512),[[d["K"],k.form.s_time]])]),Object(d["h"])("div",null,[b,Object(d["N"])(Object(d["h"])("input",{type:"time","onUpdate:modelValue":t[3]||(t[3]=e=>k.form.e_time=e),class:"w-full py-2 rounded p-2"},null,512),[[d["K"],k.form.e_time]])])]),Object(d["h"])("div",null,[p,Object(d["k"])(C,{type:"text",modelValue:k.form.active,"onUpdate:modelValue":t[4]||(t[4]=e=>k.form.active=e),class:"w-full py-2 rounded p-2"},{default:Object(d["M"])(()=>[j]),_:1},8,["modelValue"])]),Object(d["h"])("div",O,[Object(d["h"])("div",null,[Object(d["h"])("div",f,[(Object(d["w"])(!0),Object(d["g"])(d["a"],null,Object(d["A"])(k.form.slot_thresholds,(e,t)=>(Object(d["w"])(),Object(d["g"])("div",{class:"flex mb-2 gap-2",key:t},[Object(d["k"])(C,{modelValue:k.form.slot_thresholds[t].support_type_id,"onUpdate:modelValue":e=>k.form.slot_thresholds[t].support_type_id=e,class:"rounded focus:outline-none p-2"},{default:Object(d["M"])(()=>[_,(Object(d["w"])(!0),Object(d["g"])(d["a"],null,Object(d["A"])(U.schedules.support_type,e=>(Object(d["w"])(),Object(d["g"])("option",{key:e.id,value:e.id},Object(d["F"])(e.name),9,v))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]),Object(d["N"])(Object(d["h"])("input",{class:"py-2 p-1 rounded-md w-32","onUpdate:modelValue":e=>k.form.slot_thresholds[t].slot=e,placeholder:"Slot"},null,8,g),[[d["K"],k.form.slot_thresholds[t].slot]]),Object(d["N"])(Object(d["h"])("input",{class:"py-2 p-1 rounded-md w-32","onUpdate:modelValue":e=>k.form.slot_thresholds[t].threshold=e,placeholder:"Threshold"},null,8,y),[[d["K"],k.form.slot_thresholds[t].threshold]]),Object(d["h"])("button",{class:"col-span-1 text-red-500",onClick:e=>U.remove(t)}," ╳ ",8,w)]))),128))]),Object(d["k"])(D,{type:"button",onClick:t[5]||(t[5]=e=>U.add())},{default:Object(d["M"])(()=>[x]),_:1})])]),Object(d["k"])(D,{class:"mt-2",type:"submit",onClick:t[6]||(t[6]=e=>U.submitForm())},{default:Object(d["M"])(()=>[V]),_:1})])}var k=l("9773"),U=l("6f93"),C=l("df33"),$=l("0261"),D=(l("09c5"),l("734c")),M={components:{Select:k["a"],Calendar:$["a"],DatePicker:$["b"],Btn:U["a"],InputRadio:C["a"]},data(){return{form:{timezone:"",s_time:"",e_time:"",chamber_id:"",active:"",slot_thresholds:[{threshold:"",slot:"",support_type_id:""}],date:new Date}}},created(){this.$store.dispatch("adminSchedule/createSchedule"),this.$store.dispatch("adminSchedule/editSchedule",{scheduleId:this.scheduleId})},computed:{schedules(){return this.$store.state.adminSchedule.createSchedule},editSchedule(){let e=this.$store.state.adminSchedule.editSchedule;return this.form.chamber_id=e.chamber_id,this.form.date=e.date,e},slotThreshold(){console.log("ddf",Object.values(this.$store.state.adminSchedule.editSchedule))},timeSchedule(){},scheduleId(){return this.$route.params.scheduleId},dates:{get(){return this.formatDate(this.form.date)}}},methods:{async submitForm(){await Object(D["a"])().post("/api/schedules",{chamber_id:this.form.chamber_id,date:this.dates,s_time:this.form.s_time,e_time:this.form.e_time,active:this.form.active,slot_thresholds:this.form.slot_thresholds}).then(()=>{this.$router.push("/admin/schedules")})},formatDate(e){let t=new Date(e),l=""+(t.getMonth()+1),d=""+t.getDate(),a=t.getFullYear();return l.length<2&&(l="0"+l),d.length<2&&(d="0"+d),[a,l,d].join("-")},add(){console.log("asche",this.form.slot_thresolds),this.form.slot_thresholds.push({threshold:" ",slot:" ",support_type_id:""})},remove(e){this.form.slot_thresholds.splice(e,1)}}},F=l("6b0d"),I=l.n(F);const A=I()(M,[["render",S]]);t["default"]=A},df33:function(e,t,l){"use strict";var d=l("7a23");const a={class:"flex items-center mb-4 gap-2"},s={for:"default-radio-1",class:"text-md font-medium text-gray-900 dark:text-gray-300"},o=["value"];function c(e,t,l,c,u,r){return Object(d["w"])(),Object(d["g"])("div",a,[Object(d["h"])("label",s,Object(d["F"])(l.title),1),Object(d["h"])("input",{id:"default-radio-1",type:"radio",value:l.value,name:"default-radio",onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),ref:"input",class:"text-blue-600 bg-gray-100 border-gray-300"},null,40,o)])}var u={props:{title:String,value:Object},emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},r=l("6b0d"),i=l.n(r);const h=i()(u,[["render",c]]);t["a"]=h}}]);
//# sourceMappingURL=chunk-5a776afe.cc212b30.js.map