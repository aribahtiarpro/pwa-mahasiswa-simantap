(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,e,r){"use strict";r.r(e);r(50),r(14);var n=r(2),l={layout:"auth",middleware:["auth"],data:function(){return{d:{username:"2003010001",password:"admin"}}},computed:{auth:function(){return this.$store.state.auth}},methods:{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.loginWith("password_grant",{data:{grant_type:"password",client_id:2,client_secret:"s1JHMYCjUnRP6nLHv7x9xp1DNhSRq0aoGy04wY7H",scope:"*",username:t.d.username,password:t.d.password}});case 2:t.$router.replace("/");case 3:case"end":return e.stop()}}),e)})))()}}},o=r(16),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-6 lg:mt-6"},[r("div",{staticClass:"mt-6 flex bg-white rounded-lg md:shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl "},[t._m(0),t._v(" "),r("div",{staticClass:"w-full p-8 lg:w-1/2 lg:mx-6"},[t._m(1),t._v(" "),r("p",{staticClass:"text-xl text-gray-600 text-center"},[t._v("Selamat Datang!")]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"mt-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("Username")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.username,expression:"d.username"}],staticClass:"bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",attrs:{type:"email"},domProps:{value:t.d.username},on:{input:function(e){e.target.composing||t.$set(t.d,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"flex justify-between"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("Password")]),t._v(" "),r("nuxt-link",{staticClass:"text-xs text-gray-500",attrs:{to:"/lupa-password"}},[t._v("Lupa Password?")])],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.d.password,expression:"d.password"}],staticClass:"bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",attrs:{type:"password"},domProps:{value:t.d.password},on:{input:function(e){e.target.composing||t.$set(t.d,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mt-8"},[r("button",{staticClass:"bg-green-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600",on:{click:t.login}},[t._v("Login")])]),t._v(" "),t._m(3)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden lg:block lg:w-1/2  text-gray-600 text-center lg:mx-6"},[e("img",{staticClass:"mt-3",attrs:{src:"/login.png",alt:"login simantap"}}),this._v(" "),e("h1",{staticClass:"text-xl mt-6"},[this._v("\n       SIMANTAP\n   ")]),this._v(" "),e("p",{staticClass:"mt-3"},[this._v("\n       Sistem Informasi Management dan Terintegrasi Universitas Perjuangan                                     \n   ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"flex w-full "},[e("img",{staticClass:"w-1/5 mx-auto mb-3",attrs:{src:"/unper.png",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 flex items-center justify-between"},[e("span",{staticClass:"border-b w-1/5 lg:w-1/4"}),this._v(" "),e("a",{staticClass:"text-xs text-center text-gray-500 uppercase",attrs:{href:"#"}},[this._v("Silahkan Masuk")]),this._v(" "),e("span",{staticClass:"border-b w-1/5 lg:w-1/4"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 flex items-center justify-between"},[e("span",{staticClass:"border-b w-1/5 md:w-1/4"}),this._v(" "),e("a",{staticClass:"text-xs text-gray-500 uppercase",attrs:{href:"#"}},[this._v("Universitas Perjuangan")]),this._v(" "),e("span",{staticClass:"border-b w-1/5 md:w-1/4"})])}],!1,null,null,null);e.default=component.exports}}]);