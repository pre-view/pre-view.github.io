webpackJsonp([16],{"3RmS":function(e,a,t){"use strict";function n(e){t("i0GA")}Object.defineProperty(a,"__esModule",{value:!0});var o=t("Xxa5"),r=t.n(o),s=t("exGp"),i=t.n(s),l=t("rHil"),u=t("pDNl"),c=t("5MHF"),v=t("AiME"),d=t("1boB"),p=(l.a,u.a,c.a,v.a,d.a,{components:{Group:l.a,XInput:u.a,layoutNavbar:c.a,layoutNavbarShadow:v.a,widgetScrollBox:d.a},data:function(){return{value:this.$storage.user.name}},computed:{disabled:function(){return!this.value||this.value===this.$storage.user.name}},methods:{navbarTap:function(e){var a=this,t=e.type;return i()(r.a.mark(function e(){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("right"!==t){e.next=7;break}return n=a.value,e.next=4,a.$forage({type:"set",key:"user@name",value:n});case 4:o=a.$t("sdk-toast@save-success"),a.$sdk.toast({text:o}),a.$pop();case 7:case"end":return e.stop()}},e,a)}))()}}}),f=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"name"}},[t("widget-scroll-box",[t("layout-navbar-shadow"),e._v(" "),t("group",[t("x-input",{attrs:{max:20},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1),e._v(" "),t("layout-navbar",{attrs:{title:e.$t("name@layout-navbar-title")},on:{tap:e.navbarTap}},[t("a",{attrs:{slot:"left"},slot:"left"},[e._v(e._s(e.$t("layout-navbar@cancel")))]),e._v(" "),t("a",{staticClass:"primary",class:{disabled:e.disabled},attrs:{slot:"right"},slot:"right"},[e._v(e._s(e.$t("layout-navbar@save")))])])],1)},A=[],b={render:f,staticRenderFns:A},m=b,h=t("VU/8"),C=n,y=h(p,m,!1,C,"data-v-5ea82c18",null),x=t("cn4w");x&&x.__esModule&&(x=x.default),"function"==typeof x&&x(y);a.default=y.exports},cn4w:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){const a=JSON.parse('{"name@layout-navbar-title":{"en":"Nickname","zh-CN":"昵称"}}');e.options.__i18n=a,e.options.beforeCreate=e.options.beforeCreate||[],e.options.beforeCreate.push(function(){this.$event.emit("i18n:add",a)})}},i0GA:function(e,a,t){var n=t("wdIK");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("4e91a365",n,!0,{})},wdIK:function(e,a,t){a=e.exports=t("FZ+f")(!0),a.push([e.i,"\n#name[data-v-5ea82c18] {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f7f7f7;\n}\n#name .primary[data-v-5ea82c18] {\n    color: #09bb07;\n}\n#name .disabled[data-v-5ea82c18] {\n    opacity: .5;\n    pointer-events: none;\n}\n","",{version:3,sources:["/Users/lixinliang/github/wish-crystal/src/view/name/index.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;IACI,eAAe;CAClB;AACD;IACI,YAAY;IACZ,qBAAqB;CACxB",file:"index.vue",sourcesContent:["\n#name[data-v-5ea82c18] {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f7f7f7;\n}\n#name .primary[data-v-5ea82c18] {\n    color: #09bb07;\n}\n#name .disabled[data-v-5ea82c18] {\n    opacity: .5;\n    pointer-events: none;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=16.cfc166d7aef9856de601.js.map