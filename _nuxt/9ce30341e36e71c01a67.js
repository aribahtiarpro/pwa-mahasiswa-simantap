(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,e,r){var content=r(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("27caedf7",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";var l=r(192);r.n(l).a},202:function(t,e,r){(e=r(48)(!1)).push([t.i,".title[data-v-1527256e]{font-size:40px;font-weight:500}.center-page[data-v-1527256e]{padding:5%}.informasi[data-v-1527256e]{border-radius:30px}",""]),t.exports=e},209:function(t,e,r){"use strict";r.r(e);var l={middleware:["auth"],created:function(){}},n=(r(201),r(16)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center-page w-full flex flex-wrap"},[r("div",{staticClass:"w-full md:w-1/2 my-3"},[r("h1",{staticClass:"title mt-2 lg:mt-0"},[t._v("\n                Halo "+t._s(t.$auth.user.name)+"\n            ")]),t._v(" "),r("small",{staticClass:"text-gray-800"},[t._v("Semoga hari ini kamu bahagia")]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"w-full md:w-1/2 my-3"},[r("form",{staticClass:"w-full max-w-lg"},[r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n                NIM\n            ")]),t._v(" "),r("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{disabled:"",id:"grid-first-name",type:"text",placeholder:t.$store.state.mhs.nim}})]),t._v(" "),r("div",{staticClass:"w-full md:w-1/2 px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-last-name"}},[t._v("\n                Nama\n            ")]),t._v(" "),r("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-last-name",type:"text",placeholder:"Doe"},domProps:{value:t.$store.state.mhs.nama}})])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v("\n                    Email\n                ")]),t._v(" "),r("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{disabled:"",id:"grid-password",type:"text",placeholder:t.$auth.user.email}})])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[t._m(1),t._v(" "),r("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-state"}},[t._v("\n                State\n            ")]),t._v(" "),r("div",{staticClass:"relative"},[t._m(2),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),t._m(3)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg mt-6 informasi"},[e("img",{staticClass:"w-full",attrs:{src:"https://tailwindcss.com/img/card-top.jpg",alt:"Sunset in the mountains"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-city"}},[this._v("\n                City\n            ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-city",type:"text",placeholder:"Albuquerque"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("select",{staticClass:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-state"}},[e("option",[this._v("New Mexico")]),this._v(" "),e("option",[this._v("Missouri")]),this._v(" "),e("option",[this._v("Texas")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-zip"}},[this._v("\n                Zip\n            ")]),this._v(" "),e("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-zip",type:"text",placeholder:"90210"}})])}],!1,null,"1527256e",null);e.default=component.exports}}]);