(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("7591"),r("1f63"),r("44ef"),r("78e7");var n=r("d04a"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("MyForm")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"justify-center mt-4"},[r("v-col",{attrs:{align:"center",md:"4"}},[r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[r("v-form",{attrs:{disabled:e.isSending},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("validation-provider",{attrs:{name:"Имя пользователя",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,label:"Имя пользователя*",required:"",success:a},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),r("validation-provider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"error-messages":n,label:"E-mail*",required:"",success:a},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.birthdate,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.birthdate=t},"update:return-value":function(t){e.birthdate=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Дата рождения","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}},"v-text-field",a,!1),n))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}},[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Отмена ")]),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.birthdate)}}},[e._v(" OK ")])],1)],1),r("validation-provider",{attrs:{name:"Должность"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-select",{attrs:{items:e.items,"item-text":"name","item-value":"id","error-messages":n,label:"Должность","data-vv-name":"select"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}})]}}],null,!0)}),r("validation-provider",{attrs:{name:"Права администратора"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-checkbox",{attrs:{"error-messages":n,label:"Права администратора",type:"checkbox"},model:{value:e.isAdmin,callback:function(t){e.isAdmin=t},expression:"isAdmin"}})]}}],null,!0)}),e.isAdmin?r("v-row",[r("v-col",{attrs:{align:"center",md:"2"}},[r("v-checkbox",{attrs:{disabled:"",label:"Чтение",value:"1"},model:{value:e.selectedRights,callback:function(t){e.selectedRights=t},expression:"selectedRights"}})],1),r("v-col",{attrs:{align:"center",md:"2"}},[r("v-checkbox",{attrs:{label:"Удаление",value:"2"},model:{value:e.selectedRights,callback:function(t){e.selectedRights=t},expression:"selectedRights"}})],1)],1):e._e(),r("validation-provider",{attrs:{name:"Номер телефона",rules:{digits:11,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{9}$"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{counter:11,"error-messages":n,label:"Номер телефона",success:a&&11===e.phoneNumber.length},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),r("validation-provider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Пароль*",hint:"Длина пароля должна быть не меньше 8","error-messages":n,counter:"",required:"",success:a},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})]}}],null,!0)}),r("validation-provider",{attrs:{name:"confirm",rules:"required|password:@password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,a=t.valid;return[r("v-text-field",{attrs:{type:"password",label:"Повторите пароль*",hint:"Длина пароля должна быть не меньше 8","error-messages":n,counter:"",required:"",success:a},model:{value:e.confirmation,callback:function(t){e.confirmation=t},expression:"confirmation"}})]}}],null,!0)}),r("v-btn",{staticClass:"mr-4",attrs:{disabled:e.isSending},on:{click:e.generatePassword}},[e._v(" Генерация пароля ")]),r("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n||e.isSending,color:"success"}},[e._v(" Создать ")]),r("v-btn",{attrs:{disabled:e.isSending,color:"error"},on:{click:e.clear}},[e._v(" Отчистеть ")])],1)]}}])})],1)],1),r("v-snackbar",{attrs:{"multi-line":!0,color:"success",timeout:2e3,top:"",right:""},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[r("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" Закрыть ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" Форма успешно отправилась ")])],1)},o=[],l=r("af22"),c=(r("6bd5"),r("8c7e"),r("c115"),r("5659"),r("00a9"),r("6984"),r("4c93")),u=r("7bb1"),d=r("e1bd");Object(u["d"])("eager"),Object(u["c"])("digits",Object(l["a"])(Object(l["a"])({},c["a"]),{},{message:"{_field_} должен состоять {length} цифр. ({_value_})"})),Object(u["c"])("required",Object(l["a"])(Object(l["a"])({},c["e"]),{},{message:"{_field_} не может быть пустым"})),Object(u["c"])("max",Object(l["a"])(Object(l["a"])({},c["c"]),{},{message:"{_field_} не должен превышать длину в {length}"})),Object(u["c"])("regex",Object(l["a"])(Object(l["a"])({},c["d"]),{},{message:"{_field_} {_value_} должен начинаться с 71,72,74,76,81,82,84,85,86,87,88,89"})),Object(u["c"])("email",Object(l["a"])(Object(l["a"])({},c["b"]),{},{message:"Введите корректный e-mail"})),Object(u["c"])("password",{params:["target"],validate:function(e,t){var r=t.target;return e===r},message:"Пароль не совпадает"});var f={components:{ValidationProvider:u["b"],ValidationObserver:u["a"]},data:function(){return{name:"",phoneNumber:"",email:"",position:null,items:[{id:1,name:"Administrator"},{id:2,name:"Software Engineer"},{id:3,name:"Content manager"}],isAdmin:!1,birthdate:"",menu:!1,password:"",confirmation:"",show1:!1,isSending:!1,selectedRights:["1"],snackbar:!1}},methods:{generatePassword:function(){var e=Object(d["a"])();this.password=e,this.confirmation=e},formatPhoneNumber:function(e){var t=(""+e).replace(/\D/g,""),r=t.match(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);return r?["+",r[1],"(",r[2],")",r[3],"-",r[4],"-",r[5]].join(""):""},timeout:function(){return new Promise((function(e){return setTimeout(e,1e3)}))},submit:function(){var e=this,t={nickname:this.name,email:this.email,birth_date:this.birthdate,position_id:this.position,is_admin:this.isAdmin,user_rights:this.selectedRights,password:this.password,phone:this.formatPhoneNumber(this.phoneNumber)};this.isSending=!0,this.timeout().then((function(){e.isSending=!1,e.snackbar=!0,console.log(JSON.stringify(t))}))},clear:function(){this.name="",this.phoneNumber="",this.email="",this.position=null,this.isAdmin=null,this.birthdate="",this.password="",this.confirmation="",this.show1=!1,this.isDelete=!1,this.$refs.observer.reset()}}},m=f,p=r("bdd7"),b=r("e5de"),v=r.n(b),h=r("d0fc"),g=r("358f"),k=r("32c7"),_=r("bdf6"),y=r("16d1"),x=r("5079"),w=r("dce1"),O=r("68ab"),j=r("78dd"),S=r("707e"),V=r("877a"),P=r("46ca"),A=Object(p["a"])(m,s,o,!1,null,null,null),N=A.exports;v()(A,{VBtn:h["a"],VCheckbox:g["a"],VCol:k["a"],VContainer:_["a"],VDatePicker:y["a"],VForm:x["a"],VMenu:w["a"],VRow:O["a"],VSelect:j["a"],VSnackbar:S["a"],VSpacer:V["a"],VTextField:P["a"]});var q={name:"App",components:{MyForm:N}},R=q,M=r("55ff"),C=r("e36f"),$=Object(p["a"])(R,a,i,!1,null,null,null),E=$.exports;v()($,{VApp:M["a"],VMain:C["a"]});var T=r("e0bc");n["a"].use(T["a"]);var D=new T["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:D,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.e2506fc6.js.map