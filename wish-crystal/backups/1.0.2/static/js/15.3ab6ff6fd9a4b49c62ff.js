webpackJsonp([15],{E0ME:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n#setting[data-v-ec400e8c] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n#setting .button[data-v-ec400e8c] {\n    margin-top: 20px;\n    padding: 0 15px;\n}\n","",{version:3,sources:["/Users/lixinliang/github/wish-crystal/src/view/setting/index.vue"],names:[],mappings:";AACA;EACE,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;CACpB;AACD;IACI,iBAAiB;IACjB,gBAAgB;CACnB",file:"index.vue",sourcesContent:["\n#setting[data-v-ec400e8c] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n#setting .button[data-v-ec400e8c] {\n    margin-top: 20px;\n    padding: 0 15px;\n}\n"],sourceRoot:""}])},Ku7q:function(t,e,n){var a=n("E0ME");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4ade8a5e",a,!0,{})},"NG/2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e=JSON.parse('{"setting@layout-navbar-title":{"en":"Setting","zh-CN":"设置"},"setting@language":{"en":"Language","zh-CN":"多语言"},"setting@splash":{"en":"Splash","zh-CN":"启屏动画"},"setting@about":{"en":"About","zh-CN":"关于"},"setting@clear-cache":{"en":"Clear Cache","zh-CN":"清除缓存"},"setting@clear-cache-success":{"en":"Clear Cache Success (*^▽^*)","zh-CN":"你懂的 (*￣︶￣)"},"setting@reset":{"en":"Reset","zh-CN":"重置数据"},"setting@can-not-reset":{"en":"Reset Data is disabled (✿◡‿◡)","zh-CN":"暂不支持重置数据 (✿◡‿◡)"},"setting@logout":{"en":"Log Out","zh-CN":"退出登录"},"setting@can-not-logout":{"en":"Log Out is disabled (✿◡‿◡)","zh-CN":"暂不支持退出登录 (✿◡‿◡)"}}');t.options.__i18n=e,t.options.beforeCreate=t.options.beforeCreate||[],t.options.beforeCreate.push(function(){this.$event.emit("i18n:add",e)})}},PSis:function(t,e,n){"use strict";function a(t){n("Ku7q")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),s=n.n(i),o=n("exGp"),c=n.n(o),r=n("1DHf"),l=n("rHil"),u=n("2sLL"),g=n("7YgM"),d=n.n(g),v=n("5MHF"),h=n("FT7o"),p=n("AiME"),f=n("1boB"),C=n("BVQd"),b=n("U9Vg"),A=d.a.version,x=(r.a,l.a,u.a,v.a,h.a,p.a,f.a,C.a,b.a,d.a.version),_={components:{Cell:r.a,Group:l.a,XButton:u.a,layoutNavbar:v.a,layoutNavbarColor:h.a,layoutNavbarShadow:p.a,widgetScrollBox:f.a,widgetBackgroundColor:C.a,navigationEffectBox:b.a},data:function(){return{version:x,clearCacheProcessing:!1}},methods:{clear:function(){var t=this;return c()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.clearCacheProcessing=!0,e.next=3,window.util.sleep(1500);case 3:t.clearCacheProcessing=!1,n=t.$t("setting@clear-cache-success"),t.$sdk.toast({text:n});case 6:case"end":return e.stop()}},e,t)}))()},reset:function(){var t=this.$t("setting@can-not-reset");this.$sdk.toast({text:t})},logout:function(){var t=this.$t("setting@can-not-logout");this.$sdk.toast({text:t})}}},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"setting"}},[n("navigation-effect-box",[n("widget-background-color",[n("widget-scroll-box",[n("layout-navbar-shadow"),t._v(" "),n("group",[n("cell",{attrs:{title:t.$t("setting@language"),"is-link":""},nativeOn:{click:function(e){t.$push("language")}}}),t._v(" "),n("cell",{attrs:{title:t.$t("setting@splash"),"is-link":""},nativeOn:{click:function(e){t.$replace("splash")}}}),t._v(" "),n("cell",{attrs:{title:t.$t("setting@about"),value:t.version,"is-link":""},nativeOn:{click:function(e){t.$push("about")}}})],1),t._v(" "),n("group",[n("cell",{attrs:{title:t.$t("setting@clear-cache"),isLoading:t.clearCacheProcessing,disabled:t.clearCacheProcessing,"is-link":""},nativeOn:{click:function(e){return t.clear(e)}}})],1),t._v(" "),n("div",{staticClass:"button"},[n("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){return t.reset(e)}}},[t._v(t._s(t.$t("setting@reset")))])],1),t._v(" "),n("div",{staticClass:"button"},[n("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v(t._s(t.$t("setting@logout")))])],1)],1)],1)],1),t._v(" "),n("layout-navbar-color"),t._v(" "),n("layout-navbar",{attrs:{title:t.$t("setting@layout-navbar-title")}})],1)},B=[],$={render:w,staticRenderFns:B},k=$,N=n("VU/8"),y=a,E=N(_,k,!1,y,"data-v-ec400e8c",null),O=n("NG/2");O&&O.__esModule&&(O=O.default),"function"==typeof O&&O(E);e.default=E.exports}});
//# sourceMappingURL=15.3ab6ff6fd9a4b49c62ff.js.map