webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://twitter.com/0devco",target:"_blank"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"}})])}]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("niKl")},null,null).exports,_=e("/ocq"),r=e("x0ne"),o=e.n(r),d={data:function(){return{msg:"Atom_Vue",phn:"",status:[]}},mounted:function(){var t=this;window.addEventListener("keyup",function(s){var e=t.phn,a=t.status=o()(e);console.log(a)})},methods:{countUp:function(t){this.msg=t}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-3 is-offset-2"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("user input phone")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phn,expression:"phn"}],staticClass:"input",attrs:{type:"text",placeholder:"+8801751255157",value:"098789"},domProps:{value:t.phn},on:{input:function(s){s.target.composing||(t.phn=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("suggested phn")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{staticClass:"input ",attrs:{type:"text",placeholder:t.status.suggest_num,disabled:""}})])])]),t._v(" "),e("div",{staticClass:"colum is-4 is-offset-2"},[e("h1",[t._v(".")]),t._v(" "),e("h1",[t._v(".")]),t._v(" "),e("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[e("tbody",[void 0!==t.status.core_valid?e("tr",[e("td",[t._v("core_valid")]),t._v(" "),e("td",[t._v(t._s(t.status.core_valid))])]):t._e(),t._v(" "),void 0!==t.status.has_operator?e("tr",[e("td",[t._v("has_operator")]),t._v(" "),e("td",[t._v(t._s(t.status.has_operator))])]):t._e(),t._v(" "),void 0!==t.status.operator_status?e("tr",[e("td",[t._v("operator_status")]),t._v(" "),e("td",[t._v(t._s(t.status.operator_status))])]):t._e(),t._v(" "),void 0!==t.status.status?e("tr",[e("td",[t._v("status")]),t._v(" "),e("td",[t._v(t._s(t.status.status))])]):t._e(),t._v(" "),void 0!==t.status.digit_status?e("tr",[e("td",[t._v("digit_status")]),t._v(" "),e("td",[t._v(t._s(t.status.digit_status))])]):t._e(),t._v(" "),void 0!==t.status.need_digit?e("tr",[e("td",[t._v("need_digit")]),t._v(" "),e("td",[t._v(t._s(t.status.need_digit))])]):t._e(),t._v(" "),void 0!==t.status.has_exceed?e("tr",[e("td",[t._v("has_exceed")]),t._v(" "),e("td",[t._v(t._s(t.status.has_exceed))])]):t._e(),t._v(" "),void 0!==t.status.exceed?e("tr",[e("td",[t._v("exceed")]),t._v(" "),e("td",[t._v(t._s(t.status.exceed))])]):t._e(),t._v(" "),void 0!==t.status.exceed_digit?e("tr",[e("td",[t._v("exceed_digit")]),t._v(" "),e("td",[t._v(t._s(t.status.exceed_digit))])]):t._e(),t._v(" "),void 0!==t.status.suggest_num?e("tr",[e("td",[t._v("suggest number")]),t._v(" "),e("td",[t._v(t._s(t.status.suggest_num))])]):t._e()])])])]),t._v(" "),e("hr"),t._v("\n      "+t._s(t.status)+"\n\n      "),e("hr"),t._v(" "),e("a",{staticClass:"button is-primary",attrs:{href:"https://github.com/code4mk/bd-phone-validator/blob/master/README.md",target:"\n      _blank"}},[t._v("read doc")]),t._v(" "),e("a",{staticClass:"button is-link",attrs:{href:"https://code4mk.org",target:"_blank"}},[t._v("code4mk.org")])])},staticRenderFns:[]};var u=e("VU/8")(d,v,!1,function(t){e("hPgN")},"data-v-1f38a6b2",null).exports;a.a.use(_.a);var c=new _.a({routes:[{path:"/",name:"Test",component:u},{path:"/mk",name:"Test",component:u}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:c,components:{App:n},template:"<App/>"})},hPgN:function(t,s){},niKl:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e2bf5cd2a76c23cab8ec.js.map