webpackJsonp([28],{"//0l":function(e,t){e.exports='<svg t="1541398918575" class="icon" style viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="867" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M794.88 254.933333C716.117333 185.728 576 197.888 512 329.045333c-64-131.157333-204.16-143.317333-282.88-74.112-73.216 64.256-73.258667 193.578667-24.533333 280.32 64.981333 115.797333 141.866667 177.92 240.213333 252.586667A111.36 111.36 0 0 0 512 810.666667a111.36 111.36 0 0 0 67.2-22.784c98.346667-74.154667 174.890667-136.832 240.213333-252.586667 48.725333-86.784 48.64-216.106667-24.576-280.362667z" p-id="868"></path></svg>'},a4m8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=JSON.parse('{"splash@checking":{"en":"Checking for Updates","zh-CN":"正在检查更新"},"splash@updating":{"en":"Updating","zh-CN":"正在更新"},"splash@loading":{"en":"Loading","zh-CN":"加载中"},"home@coming-soon":null}');e.options.__i18n=t,e.options.beforeCreate=e.options.beforeCreate||[],e.options.beforeCreate.push(function(){this.$event.emit("i18n:add",t)})}},xFbz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Xxa5"),r=n.n(i),a=n("//Fk"),o=n.n(a),s=n("d7EF"),l=n.n(s),u=n("exGp"),c=n.n(u),p=n("7YgM"),w=n.n(p),d=n("//0l"),f=n.n(d),h=window,g=(h._,w.a.version,window),v=g._,x=w.a.version,m={mounted:function(){var e=this;return c()(r.a.mark(function t(){var n,i,a,s,u,p,w,d,h,g,m,b,y,k,C,$,_,O,P,z,A,I,S,F,M,E,N,R;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.devicePixelRatio,i=window.innerWidth*n,a=window.innerHeight*n,s=window.util.canvas(i,a),u=s.canvas,p=s.context,e.canvas=u,e.context=p,u.style.top=0,u.style.left=0,u.style.width=window.innerWidth+"px",u.style.height=window.innerHeight+"px",u.style["z-index"]=99999,u.style.opacity=1,u.style.position="absolute",document.body.appendChild(u),w=util.html(f.a),d=util.xml(w),t.next=18,window.util.img(d);case 18:return h=t.sent,p.font=window.getComputedStyle(document.documentElement).font.replace(/\b[0-9\.]+px/g,function(e){return+(parseFloat(e)*n).toFixed(2)+"px"}),g="#ffffff",m="#fb7299",b=100,y=0,k=0,C="",$="...",_=0,O=util.range(0,100),P=function(){return p.clearRect(0,0,i,a)},z=function(){p.beginPath(),p.fillStyle=g,p.rect(0,0,i,a),p.fill(),p.closePath()},A=function(e,t){var n=window.util.canvas(e),i=n.canvas,r=n.context;return r.drawImage(h,0,0,e,e),r.globalCompositeOperation="source-in",r.beginPath(),r.fillStyle=t,r.rect(0,0,e,e),r.fill(),r.closePath(),r.globalCompositeOperation="source-over",i},I=function(e,t,n){var i={"top-left":[-1,-1],top:[0,-1],"top-right":[1,-1],left:[-1,0],right:[1,0],"bottom-left":[-1,1],bottom:[0,1],"bottom-right":[1,1]},r=e.width+2*t,a=e.height+2*t,o=window.util.canvas(r,a),s=o.canvas,u=o.context;return u.save(),u.translate(t,t),v.forEach(i,function(n){var i=l()(n,2),r=i[0],a=i[1];u.drawImage(e,r*t,a*t,e.width,e.height)}),u.restore(),u.globalCompositeOperation="source-in",u.beginPath(),u.fillStyle=n,u.rect(0,0,r,a),u.fill(),u.closePath(),u.globalCompositeOperation="source-over",s},S=function(e){var t=e.getContext("2d"),n=.2+.7*O(k)/100;return t.clearRect(0,0,e.width,e.height*(1-n)),e},F=function(){var e=75*n,t=1*n,i=window.util.canvas(e+2*t*3),r=i.canvas,a=i.context,o=A(e,m),s=I(o,t,g),l=I(s,t,m),u=S(o);return a.drawImage(l,0*t,0*t,l.width,l.height),a.drawImage(s,1*t,1*t,s.width,s.height),a.drawImage(u,2*t,2*t,o.width,o.height),r},M=function(){var e=F();p.drawImage(e,(i-e.width)/2,(a-e.height)/2,e.width,e.height)},E=function(){if(C){var e=60*n;p.fillStyle=m,p.textAlign="center",p.fillText(C+$,(i+p.measureText($).width)/2,a/2+e)}},N=function(){var e=75*n,t=A(e,"#000000");p.globalCompositeOperation="destination-out",p.drawImage(t,(i-t.width)/2,(a-t.height)/2,t.width,t.height),p.globalCompositeOperation="source-over"},R=function(){var e=20*n,t=24*n;p.fillStyle=m,p.textAlign="right",p.fillText("v"+x,i-e,a-t)},window.$event.once("splash:init",function(){u.style["pointer-events"]="auto",P(),z()}),window.$event.once("splash:progress",c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return window.util.loop(function(){return new o.a(function(){var t=c()(r.a.mark(function t(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(k>b)){e.next=5;break}return e.next=3,window.util.sleep(80);case 3:return window.$event.emit("splash:fadeout"),e.abrupt("return");case 5:return P(),z(),M(),E(),R(),e.next=12,window.util.sleep(10);case 12:k>y||(k+=2),n();case 14:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}),window.util.loop(function(){return new o.a(function(){var t=c()(r.a.mark(function t(n){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(k>b)){e.next=2;break}return e.abrupt("return");case 2:return i=$.length%3,$=v.repeat(".",i+1),e.next=6,window.util.sleep(200);case 6:n();case 7:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}),y=30,C=e.$t("splash@checking"),t.next=6,window.util.sleep(500);case 6:if(e.$storage.config["splash:display-updating"]!==x){t.next=9;break}t.next=15;break;case 9:return y=60,C=e.$t("splash@updating"),t.next=13,e.$forage({type:"set",key:"config@splash:display-updating",value:x});case 13:return t.next=15,window.util.sleep(1400);case 15:y=100,C=e.$t("splash@loading");case 17:case"end":return t.stop()}},t,e)}))),window.$event.once("splash:fadeout",c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return window.util.loop(function(){return new o.a(function(){var t=c()(r.a.mark(function t(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(_>b)){e.next=2;break}return e.abrupt("return");case 2:P(),z(),p.globalAlpha=1-O(_)/100,M(),E(),p.globalAlpha=1-p.globalAlpha,N(),p.globalAlpha=1,n();case 11:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}),window.util.loop(function(){return new o.a(function(){var t=c()(r.a.mark(function t(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(_>b)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,window.util.sleep(10);case 4:_+=8,n();case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}),t.next=4,window.util.sleep(150);case 4:return u.style.transition="transform .25s cubic-bezier(0, 0, 1, 0)",u.style.transform="scale(22)",t.next=8,window.util.sleep(300);case 8:window.$event.emit("splash:destroy");case 9:case"end":return t.stop()}},t,e)}))),window.$event.once("splash:destroy",function(){u.remove()}),window.$event.emit("splash:init"),window.$event.emit("splash:progress"),t.next=47,window.util.sleep(20);case 47:e.$replace("home");case 48:case"end":return t.stop()}},t,e)}))()}},b=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"splash"}})},y=[],k={render:b,staticRenderFns:y},C=k,$=n("VU/8"),_=$(m,C,!1,null,null,null),O=n("a4m8");O&&O.__esModule&&(O=O.default),"function"==typeof O&&O(_);t.default=_.exports}});
//# sourceMappingURL=28.932362c86ecdb8786ede.js.map