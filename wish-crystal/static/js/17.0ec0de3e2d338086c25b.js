webpackJsonp([17],{I3ne:function(t,e,n){var s=n("QaYm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("241f44d2",s,!0,{})},ObZi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e=JSON.parse('{"test-sdk@layout-navbar-title":{"en":"SDK Unit Testing","zh-CN":"SDK 单元测试"}}');t.options.__i18n=e,t.options.beforeCreate=t.options.beforeCreate||[],t.options.beforeCreate.push(function(){this.$event.emit("i18n:add",e)})}},QaYm:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n#test-sdk[data-v-7ccc30d8] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n","",{version:3,sources:["/Users/lixinliang/github/wish-crystal/src/view/test-sdk/index.vue"],names:[],mappings:";AACA;EACE,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;CACpB",file:"index.vue",sourcesContent:["\n#test-sdk[data-v-7ccc30d8] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n"],sourceRoot:""}])},i55a:function(t,e,n){"use strict";function s(t){n("I3ne")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),i=n.n(a),r=n("Xxa5"),o=n.n(r),c=n("exGp"),l=n.n(c),u=n("1DHf"),v=n("rHil"),f=n("1HIy"),d=n("5MHF"),p=n("FT7o"),k=n("AiME"),_=n("1boB"),g=n("BVQd"),h=n("U9Vg"),w=(u.a,v.a,f.a,d.a,p.a,k.a,_.a,g.a,h.a,{components:{Cell:u.a,Group:v.a,GroupTitle:f.a,layoutNavbar:d.a,layoutNavbarColor:p.a,layoutNavbarShadow:k.a,widgetScrollBox:_.a,widgetBackgroundColor:g.a,navigationEffectBox:h.a},data:function(){return{status:{}}},methods:{actionsheet:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="actionsheet"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=7;break}return n.next=6,e.$sdk.actionsheet({menus:["a","b","c"]});case 6:a=n.sent;case 7:e.$set(e.status,s,a);case 8:case"end":return n.stop()}},n,e)}))()},alert:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="alert"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=6;break}return n.next=6,e.$sdk.alert({content:"content"});case 6:if(2!==t){n.next=9;break}return n.next=9,e.$sdk.alert({title:"title",content:"content"});case 9:e.$set(e.status,s,a);case 10:case"end":return n.stop()}},n,e)}))()},confirm:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="confirm"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=7;break}return n.next=6,e.$sdk.confirm({content:"content"});case 6:a=n.sent;case 7:if(2!==t){n.next=11;break}return n.next=10,e.$sdk.confirm({title:"title",content:"content"});case 10:a=n.sent;case 11:e.$set(e.status,s,a);case 12:case"end":return n.stop()}},n,e)}))()},loading:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="loading"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=8;break}return e.$sdk.loading({show:!0}),n.next=7,window.util.sleep(2e3);case 7:e.$sdk.loading({show:!1});case 8:if(2!==t){n.next=12;break}return n.next=11,new i.a(function(t){var n=0,s=t;window.util.loop(function(){return new i.a(function(){var t=l()(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n>=100)){t.next=3;break}return s(),t.abrupt("return");case 3:return e.$sdk.loading({show:!0,text:n}),n++,t.next=7,window.util.sleep(20);case 7:a();case 8:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())})});case 11:e.$sdk.loading({show:!1});case 12:e.$set(e.status,s,a);case 13:case"end":return n.stop()}},n,e)}))()},masker:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="masker"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=8;break}return e.$sdk.masker({show:!0,opacity:.5,fullscreen:!0}),n.next=7,window.util.sleep(2e3);case 7:e.$sdk.masker({show:!1,opacity:.5});case 8:e.$set(e.status,s,a);case 9:case"end":return n.stop()}},n,e)}))()},picker:function(t){var e=this;return l()(o.a.mark(function n(){var s,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s="picker"+t,e.$set(e.status,s,"pending"),a="resolve",1!==t){n.next=7;break}return n.next=6,e.$sdk.picker({title:"title",data:[["1","2","3"]]});case 6:a=n.sent;case 7:if(2!==t){n.next=11;break}return n.next=10,e.$sdk.picker({title:"title",data:[["1","2","3"],["a","b","c"]]});case 10:a=n.sent;case 11:e.$set(e.status,s,a);case 12:case"end":return n.stop()}},n,e)}))()},toast:function(t){this.$sdk.toast({text:"toast"})}}}),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"test-sdk"}},[n("navigation-effect-box",[n("widget-background-color",[n("widget-scroll-box",[n("layout-navbar-shadow"),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Action Sheet")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.actionsheet(1)}}},[t._v(t._s(t.status.actionsheet1))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Alert")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.alert(1)}}},[t._v(t._s(t.status.alert1))]),t._v(" "),n("cell",{attrs:{title:"Case 2","is-link":""},nativeOn:{click:function(e){t.alert(2)}}},[t._v(t._s(t.status.alert2))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Confirm")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.confirm(1)}}},[t._v(t._s(t.status.confirm1))]),t._v(" "),n("cell",{attrs:{title:"Case 2","is-link":""},nativeOn:{click:function(e){t.confirm(2)}}},[t._v(t._s(t.status.confirm2))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Loading")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.loading(1)}}},[t._v(t._s(t.status.loading1))]),t._v(" "),n("cell",{attrs:{title:"Case 2","is-link":""},nativeOn:{click:function(e){t.loading(2)}}},[t._v(t._s(t.status.loading2))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Masker")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.masker(1)}}},[t._v(t._s(t.status.masker1))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Picker")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.picker(1)}}},[t._v(t._s(t.status.picker1))]),t._v(" "),n("cell",{attrs:{title:"Case 2","is-link":""},nativeOn:{click:function(e){t.picker(2)}}},[t._v(t._s(t.status.picker2))])],1),t._v(" "),n("group",[n("group-title",{attrs:{slot:"title"},slot:"title"},[t._v("Toast")]),t._v(" "),n("cell",{attrs:{title:"Case 1","is-link":""},nativeOn:{click:function(e){t.toast(1)}}})],1)],1)],1)],1),t._v(" "),n("layout-navbar-color"),t._v(" "),n("layout-navbar",{attrs:{title:t.$t("test-sdk@layout-navbar-title")}})],1)},b=[],m={render:x,staticRenderFns:b},C=m,$=n("VU/8"),A=s,O=$(w,C,!1,A,"data-v-7ccc30d8",null),y=n("ObZi");y&&y.__esModule&&(y=y.default),"function"==typeof y&&y(O);e.default=O.exports}});
//# sourceMappingURL=17.0ec0de3e2d338086c25b.js.map