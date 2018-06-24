require=function e(n,t,o){function i(a,r){if(!t[a]){if(!n[a]){var l="function"==typeof require&&require;if(!r&&l)return l(a,!0);if(c)return c(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=t[a]={exports:{}};n[a][0].call(d.exports,function(e){var t=n[a][1][e];return i(t||e)},d,d.exports,e,n,t,o)}return t[a].exports}for(var c="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({Game:[function(e,n,t){"use strict";cc._RF.push(n,"cb224NAtvxC/JOnyPLQEqIo","Game");var o=e("./common/report"),i=e("./common/middleware"),c=function(e){return new Promise(function(n){return setTimeout(n,e)})},a={countdown_icon:function(e){return new Promise(function(n,t){e.active=!0,e.scale=0,e.opacity=0,e.runAction(cc.sequence(cc.fadeIn(.1),cc.scaleTo(.25,1.15,1.15),cc.delayTime(.05),cc.scaleTo(.05,1,1),cc.delayTime(.2),cc.scaleTo(.2,0,0),cc.fadeOut(.1),cc.callFunc(function(){e.active=!1,n()})))})},endgame:function(e){return new Promise(function(n,t){e.active=!0,e.scale=.5,e.opacity=255,e.runAction(cc.sequence(cc.scaleTo(.5,1,1),cc.delayTime(2),cc.fadeOut(.3),cc.callFunc(function(){e.active=!1,n()})))})},zoomin:function(e){return new Promise(function(n,t){e.runAction(cc.sequence(cc.fadeIn(.4),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.scaleTo(.4,1,1),cc.callFunc(function(){n()})))})},zoomincoin1:function(e){var n=window.coin1size||1;return new Promise(function(t,o){e.runAction(cc.sequence(cc.fadeIn(.4),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.scaleTo(.4,n,n),cc.callFunc(function(){t()})))})},zoomincoin2:function(e){var n=window.coin2size||1;return new Promise(function(t,o){e.runAction(cc.sequence(cc.fadeIn(.4),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.scaleTo(.4,n,n),cc.callFunc(function(){t()})))})},zoomincoin5:function(e){var n=window.coin5size||1;return new Promise(function(t,o){e.runAction(cc.sequence(cc.fadeIn(.4),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.scaleTo(.4,n,n),cc.callFunc(function(){t()})))})},zoomout:function(e){return new Promise(function(n,t){e.runAction(cc.sequence(cc.fadeOut(.4),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.scaleTo(.4,0,0),cc.callFunc(function(){n()})))})},showtarget:function(e){return new Promise(function(n,t){e.runAction(cc.sequence(cc.delayTime(.01),cc.fadeIn(.39),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.moveBy(0,cc.p(300,0)),cc.moveBy(.4,cc.p(-300,0)),cc.callFunc(function(){n()})))})},hidetarget:function(e){return new Promise(function(n,t){e.runAction(cc.sequence(cc.fadeOut(.39),cc.callFunc(function(){}))),e.runAction(cc.sequence(cc.moveBy(.4,cc.p(100,0)),cc.moveBy(0,cc.p(-100,0)),cc.callFunc(function(){n()})))})}};window.webApp=window.webApp||{},window.webApp.openPKBGM=function(){cc.audioEngine.resumeMusic(),cc.audioEngine.resumeAllEffects()},window.webApp.closePKBGM=function(){cc.audioEngine.pauseMusic(),cc.audioEngine.pauseAllEffects()},cc.game.on(cc.game.EVENT_HIDE,function(){cc.audioEngine.pauseMusic(),cc.audioEngine.pauseAllEffects(),window.socket&&window.socket.disconnect()}),cc.game.on(cc.game.EVENT_SHOW,function(){}),cc.Class({extends:cc.Component,properties:{background:{default:null,type:cc.Sprite},background_ix:{default:null,type:cc.Sprite},mask:{default:null,type:cc.Sprite},countdown:{default:null,type:cc.Node},countdown_3:{default:null,type:cc.Sprite},countdown_2:{default:null,type:cc.Sprite},countdown_1:{default:null,type:cc.Sprite},countdown_go:{default:null,type:cc.Sprite},countdown_copy:{default:null,type:cc.Node},countdown_3_copy:{default:null,type:cc.Sprite},countdown_2_copy:{default:null,type:cc.Sprite},countdown_1_copy:{default:null,type:cc.Sprite},countdown_go_copy:{default:null,type:cc.Sprite},coin_1_0:{default:null,type:cc.Sprite},coin_1_1:{default:null,type:cc.Sprite},coin_1_2:{default:null,type:cc.Sprite},coin_1_3:{default:null,type:cc.Sprite},coin_1_4:{default:null,type:cc.Sprite},coin_1_5:{default:null,type:cc.Sprite},coin_1_6:{default:null,type:cc.Sprite},coin_2_0:{default:null,type:cc.Sprite},coin_2_1:{default:null,type:cc.Sprite},coin_2_2:{default:null,type:cc.Sprite},coin_2_3:{default:null,type:cc.Sprite},coin_2_4:{default:null,type:cc.Sprite},coin_5_0:{default:null,type:cc.Sprite},coin_5_1:{default:null,type:cc.Sprite},coin_5_2:{default:null,type:cc.Sprite},timer:{default:null,type:cc.Node},copy_timer:{default:null,type:cc.Node},player_coin_pool:{default:null,type:cc.Sprite},enemy_coin_pool:{default:null,type:cc.Sprite},player_score:{default:null,type:cc.Label},enemy_score:{default:null,type:cc.Label},player_token:{default:null,type:cc.Node},enemy_token:{default:null,type:cc.Node},box:{default:null,type:cc.Node},price_x:{default:null,type:cc.Node},price_y:{default:null,type:cc.Node},target:{default:null,type:cc.Node},copy_box:{default:null,type:cc.Node},copy_price_x:{default:null,type:cc.Node},copy_price_y:{default:null,type:cc.Node},copy_target:{default:null,type:cc.Node},player_lose:{default:null,type:cc.Sprite},player_tie:{default:null,type:cc.Sprite},player_win:{default:null,type:cc.Sprite},player_done:{default:null,type:cc.Sprite},player_landing:{default:null,type:cc.Sprite},enemy_lose:{default:null,type:cc.Sprite},enemy_tie:{default:null,type:cc.Sprite},enemy_win:{default:null,type:cc.Sprite},enemy_done:{default:null,type:cc.Sprite},enemy_landing:{default:null,type:cc.Sprite},finger:{default:null,type:cc.Node},endbattle_lose:{default:null,type:cc.Sprite},endbattle_tie:{default:null,type:cc.Sprite},endbattle_win:{default:null,type:cc.Sprite},endbattle_mask:{default:null,type:cc.Sprite},endbattle_x:{default:null,type:cc.Node},endbattle_y:{default:null,type:cc.Node},endbattle_box:{default:null,type:cc.Node},endbattle_lose_copy:{default:null,type:cc.Sprite},endbattle_tie_copy:{default:null,type:cc.Sprite},endbattle_win_copy:{default:null,type:cc.Sprite},endbattle_x_copy:{default:null,type:cc.Node},endbattle_y_copy:{default:null,type:cc.Node},endbattle_box_copy:{default:null,type:cc.Node},guide_mask:{default:null,type:cc.Sprite}},onLoad:function(){o.pkFinishLoading(JSON.stringify({}))},start:function(){var e=this;o.pkStart(JSON.stringify({})),window.game=this;var n=this.node,t=(n.width,n.height,n),r=function(n){return"string"==typeof n?e[n].node||e[n]:n},l=function(e){return r(e).getComponent(cc.AudioSource)},u=function(e){return r(e).getComponent(cc.Animation)},d=cc.Node.EventType,s=d.TOUCH_START,p=d.TOUCH_MOVE,f=d.TOUCH_END,y=d.TOUCH_CANCEL;750/cc.screen.width*cc.screen.height>1334&&(r("background").opacity=0,r("background_ix").active=!0),this.audio_bgm=cc.audioEngine.play(cc.url.raw("Audio/background.mp3"),!0,1),setTimeout(function(){},200),r("mask").on(s,function(){}),r("mask").on(p,function(){}),r("mask").on(f,function(){}),i.ongameover(function(e,n){t.emit("endbattle",n),setTimeout(function(){e?o.pkFinish(JSON.stringify(e.data.result)):o.pkExceptionFinish(JSON.stringify({}))},5e3),i.ongameover(function(){})}),i.onlose(function(){t.emit("lose")}),i.ontie(function(){t.emit("tie")}),i.onwin(function(){t.emit("win")});var g=+new Date%2;i.onrandomcolor(function(e,n){}),t.on("reset",function(e){var n=e.detail;t.emit("settime"),Promise.all([new Promise(function(e,n){t.emit("setcoin",e)}),new Promise(function(e,n){t.emit("settarget",e)})]).then(function(){n()})}),t.on("settime",function(){var e=r("timer").children;_(e).take(16).forEach(function(e){e.opacity=0,e.active=!0}),_.last(e).opacity=0,_.last(e).active=!0,r("timer").opacity=0,r("timer").active=!0;var n=r("copy_timer").children;_(n).take(16).forEach(function(e){e.opacity=0,e.active=!0}),_.last(n).opacity=0,_.last(n).active=!0,r("copy_timer").opacity=0,r("copy_timer").active=!0}),t.on("showtime",function(){var e=r("timer").children;_.last(e).opacity=255,r("timer").opacity=255;var n=r("copy_timer").children;_.last(n).opacity=255,r("copy_timer").opacity=255});var m=[],h=-1;t.on("setcoin",function(e){var n=e.detail;i.onsetcoin(function(e){var t=e.coins;_.forEach(t,function(e,n){var o=e.x,c=e.y,a=e.r,d=e.type,g=e.id,m=r(g),v=u(g);v.setCurrentTime(0,v.defaultClip.name),m.active=!0,m.opacity=0,m.scale=0,m.x=o,m.y=c,m.zIndex=n,e.touchable=!0,1==d&&(window.coin1size=a/9),2==d&&(window.coin2size=a/11),5==d&&(window.coin5size=a/15),m.rotation=360*Math.random();var w={};m.off(s),m.off(p),m.off(f),m.off(y),m.on(s,function(n){if(m==n.currentTarget&&e.touchable){var o=m.x,c=m.y;w.x=o,w.y=c,m.zIndex=Math.max.apply(Math,_.map(t,function(e){var n=e.id;return r(n).zIndex}))+1,e.x=m.x,e.y=m.y,e.z=m.zIndex,v.play(),i.pickcoin(e)}}),m.on(p,function(n){if(m==n.currentTarget&&e.touchable){var t=n.getStartLocation(),o=t.x,c=t.y,a=n.getLocation(),r=a.x,l=a.y;m.x=Math.max(m.width/2-250,Math.min(w.x+r-o,250-m.width/2)),m.y=Math.max(m.height/2-540,Math.min(w.y+l-c,535-m.height/2)),e.x=m.x,e.y=m.y,e.z=m.zIndex,i.movecoin(e)}});var b=function(n){if(m==n.currentTarget&&e.touchable){h=-1,v.setCurrentTime(0,v.defaultClip.name);var t=[],o=r("player_coin_pool").getBoundingBoxToWorld(),c=o.x,a=o.y,d=o.width,s=o.height;t.push(new cc.Rect(c,a-30,d,s+30));var p=m.rotation;m.rotation=0;var f=m.getBoundingBoxToWorld(),y=f.x,_=f.y,g=f.width,w=f.height;if(m.rotation=p,/_1_/.test(m.name)&&t.push(new cc.Rect(y+10,_,g-20,w-20)),/_2_/.test(m.name)&&t.push(new cc.Rect(y+10,_,g-20,w-20)),/_5_/.test(m.name)&&t.push(new cc.Rect(y+10,_,g-20,w-20)),cc.Rect.contain.apply(cc.Rect,t)){var b=r("player_landing");return b.x=m.x,b.y=m.y-b.parent.y,l("player_landing").play(),u("player_landing").play(),void i.collectcoin(e,"player1")}var x=[],k=r("enemy_coin_pool").getBoundingBoxToWorld(),S=k.x,N=k.y,P=k.width,A=k.height;x.push(new cc.Rect(S,N-20,P,A+20));var z=m.rotation;m.rotation=0;var E=m.getBoundingBoxToWorld(),T=E.x,L=E.y,F=E.width,O=E.height;if(m.rotation=z,/_1_/.test(m.name)&&x.push(new cc.Rect(T+10,L,F-20,O-20)),/_2_/.test(m.name)&&x.push(new cc.Rect(T+10,L,F-20,O-20)),/_5_/.test(m.name)&&x.push(new cc.Rect(T+10,L,F-20,O-20)),cc.Rect.contain.apply(cc.Rect,x)){var I=r("enemy_landing");return I.x=m.x,I.y=m.y-I.parent.y,l("enemy_landing").play(),u("enemy_landing").play(),void i.collectcoin(e,"player2")}i.putcoin(e)}};m.on(f,b),m.on(y,b)}),m=t,n()})}),i.onmovecoin(function(e){var n=e.cid,t=e.x,o=e.y,i=e.z,c=e.own;n&&_.forEach(m,function(e){if(e.cid==n){h==e.id&&(r("mask").active=!1),r("finger").active=!0,e.touchable=!1;var a=r(e.id),l=u(e.id);if(l.getAnimationState(l.defaultClip.name).time||l.play(),a.zIndex=Math.max.apply(Math,_.map(m,function(e){var n=e.id;return r(n).zIndex}))+1,"number"==typeof t&&"number"==typeof o&&"number"==typeof i&&(a.x=t,a.y=-o-20,a.zIndex=i),r("finger").x=a.x,r("finger").y=a.y+a.height/2,"boolean"==typeof c)if(r("finger").active=!1,l.setCurrentTime(0,l.defaultClip.name),c){e.touchable=!1;var d=r("enemy_landing");d.x=a.x,d.y=a.y-d.parent.y,u("enemy_landing").play()}else e.touchable=!0}})}),t.on("showcoin",function(){_.forEach(m,function(e){var n=e.id,t=e.type;1==t&&a.zoomincoin1(r(n)),2==t&&a.zoomincoin2(r(n)),5==t&&a.zoomincoin5(r(n))})}),t.on("hidecoin",function(){_.forEach(m,function(e){var n=e.id;a.zoomout(r(n))})}),t.on("settarget",function(e){var n=e.detail;i.onsettarget(function(e){e.name;var t=e.type,o=e.price;_.forEach(r("target").children,function(e){e.active=!1}),_.get(r("target").children,t-1).active=!0,_.forEach(r("price_x").children,function(e){e.active=!1});var i=parseInt(o/10);_.get(r("price_x").children,i).active=!0,_.forEach(r("price_y").children,function(e){e.active=!1});var c=o%10;_.get(r("price_y").children,c).active=!0,0==i?(r("price_x").active=!1,_.get(r("price_y").children,c).x=-30):(r("price_x").active=!0,_.get(r("price_y").children,c).x=0),_.forEach(r("copy_target").children,function(e){e.active=!1}),_.get(r("copy_target").children,t-1).active=!0,_.forEach(r("copy_price_x").children,function(e){e.active=!1});var a=parseInt(o/10);_.get(r("copy_price_x").children,a).active=!0,_.forEach(r("copy_price_y").children,function(e){e.active=!1});var l=o%10;_.get(r("copy_price_y").children,l).active=!0,0==a?(r("copy_price_x").active=!1,_.get(r("copy_price_y").children,l).x=-30):(r("copy_price_x").active=!0,_.get(r("copy_price_y").children,l).x=0),n()})}),i.onguide(function(e){try{e&&(r("guide_mask").active=!0,r("countdown").y=-400,r("countdown_copy").y=400,e.style.width=e.width/window.devicePixelRatio+"px",e.style.height=e.height/window.devicePixelRatio+"px",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate3d(-50%, -50%, 0)",e.style["-webkit-transform"]="-webkit-translate3d(-50%, -50%, 0)",e.style["-webkit-transform"]="translate3d(-50%, -50%, 0)",e.style["z-index"]="99",e.style.transition="opacity .3s",document.body.appendChild(e))}catch(e){}}),t.on("hideguide",function(){try{r("guide_mask").active&&r("guide_mask").runAction(cc.sequence(cc.fadeOut(.3),cc.callFunc(function(){r("guide_mask").active=!1,setTimeout(function(){r("countdown").y=0,r("countdown_copy").y=0},1e3)})));var e=document.querySelector("body > img");e&&(e.style.opacity=0,setTimeout(function(){e.remove()},400))}catch(e){}}),t.on("playerpoint",function(){var n=+e.player_score.string.split("/")[0];if(!(n>=4)){var t=u(_.get(r("player_token").children,n));t.play(t.getClips()[g].name),n++,e.player_score.string=n+"/4"}}),t.on("enemypoint",function(){var n=+e.enemy_score.string.split("/")[0];if(!(n>=4)){var t=u(_.get(r("enemy_token").children,n));t.play(t.getClips()[g].name),n++,e.enemy_score.string=n+"/4"}}),t.on("showtarget",function(){r("box").active=!0,r("box").opacity=0,a.showtarget(r("box")),r("copy_box").active=!0,r("copy_box").opacity=0,a.showtarget(r("copy_box"))}),t.on("hidetarget",function(){a.hidetarget(r("box")),a.hidetarget(r("copy_box"))}),t.on("showplayerlose",function(){r("player_lose").active=!0,r("player_lose").opacity=0,r("player_lose").scale=0,a.zoomin(r("player_lose")).then(function(){return c(2500).then(function(){a.zoomout(r("player_lose"))})}),c(1200).then(function(){t.emit("enemypoint")})}),t.on("showplayertie",function(){r("player_tie").active=!0,r("player_tie").opacity=0,r("player_tie").scale=0,a.zoomin(r("player_tie")).then(function(){return c(2500).then(function(){a.zoomout(r("player_tie"))})}),c(1200).then(function(){t.emit("enemypoint"),t.emit("playerpoint")})}),t.on("showplayerwin",function(){r("player_win").active=!0,r("player_win").opacity=0,r("player_win").scale=0,r("player_done").active=!0,u("player_done").play(),setTimeout(function(){l("player_done").play()},100),a.zoomin(r("player_win")).then(function(){return c(2500).then(function(){a.zoomout(r("player_win"))})}),c(1200).then(function(){t.emit("playerpoint")})}),t.on("showenemylose",function(){r("enemy_lose").active=!0,r("enemy_lose").opacity=0,r("enemy_lose").scale=0,a.zoomin(r("enemy_lose")).then(function(){return c(2500).then(function(){a.zoomout(r("enemy_lose"))})})}),t.on("showenemytie",function(){r("enemy_tie").active=!0,r("enemy_tie").opacity=0,r("enemy_tie").scale=0,a.zoomin(r("enemy_tie")).then(function(){return c(2500).then(function(){a.zoomout(r("enemy_tie"))})})}),t.on("showenemywin",function(){r("enemy_win").active=!0,r("enemy_win").opacity=0,r("enemy_win").scale=0,r("enemy_done").active=!0,u("enemy_done").play(),a.zoomin(r("enemy_win")).then(function(){return c(2500).then(function(){a.zoomout(r("enemy_win"))})})}),t.on("lose",function(){t.emit("showenemywin"),t.emit("showplayerlose"),t.emit("endgame")}),t.on("tie",function(){t.emit("showenemytie"),t.emit("showplayertie");var e=r("timer").children;_(e).take(16).forEach(function(e){e.opacity=0}),_.get(e,0).opacity=255;var n=r("copy_timer").children;_(n).take(16).forEach(function(e){e.opacity=0}),_.get(n,0).opacity=255,t.emit("endgame")}),t.on("win",function(){t.emit("showenemylose"),t.emit("showplayerwin"),t.emit("endgame")}),t.on("endbattle_win",function(){cc.audioEngine.pause(e.audio_bgm),l("endbattle_win").play(),r("endbattle_win").active=!0,r("endbattle_lose_copy").active=!0,a.zoomin(r("endbattle_win")),a.zoomin(r("endbattle_lose_copy"))}),t.on("endbattle_tie",function(){cc.audioEngine.pause(e.audio_bgm),l("endbattle_tie").play(),r("endbattle_tie").active=!0,r("endbattle_tie_copy").active=!0,a.zoomin(r("endbattle_tie")),a.zoomin(r("endbattle_tie_copy"))}),t.on("endbattle_lose",function(){cc.audioEngine.pause(e.audio_bgm),l("endbattle_lose").play(),r("endbattle_lose").active=!0,r("endbattle_win_copy").active=!0,a.zoomin(r("endbattle_lose")),a.zoomin(r("endbattle_win_copy"))}),t.on("startbattle",function(){t.emit("startgame")});var v=!1;t.on("startgame",function(){v||(v=!0),r("mask").active=!0,i.onsetstarttime(function(e){b=e,x=!0,setTimeout(function(){t.emit("showtime")},100)}),i.onreadygo(function(){r("mask").active=!1,t.emit("showcoin"),t.emit("showtarget")}),t.emit("reset",function(){t.emit("countdown",function(){i.readygo()}),setTimeout(function(){t.emit("hideguide")},3500)})});var w=!0;t.on("countdown",function(e){var n=e.detail;w?(w=!1,a.countdown_icon(r("countdown_3")).then(function(){return a.countdown_icon(r("countdown_2")).then(function(){return a.countdown_icon(r("countdown_1")).then(function(){return a.countdown_icon(r("countdown_go")).then(function(){n()})})})}),a.countdown_icon(r("countdown_3_copy")).then(function(){return a.countdown_icon(r("countdown_2_copy")).then(function(){return a.countdown_icon(r("countdown_1_copy")).then(function(){return a.countdown_icon(r("countdown_go_copy")).then(function(){})})})})):c(400).then(function(){n()})});var b=+new Date,x=!1;!function n(){setTimeout(function(){if(x&&e.timer){var t=+new Date,o=Math.max(0,15-parseInt((t-b)/1e3)),c=r("timer").children;_(c).take(16).forEach(function(e){e.opacity=0}),_.get(c,o).opacity=255;var a=r("copy_timer").children;_(a).take(16).forEach(function(e){e.opacity=0}),_.get(a,o).opacity=255,o<=5&&null==e.ticktock&&(e.ticktock=cc.audioEngine.play(cc.url.raw("resources/audio/timer.mp3"),!0,1)),o>0||i.timeout()}n()},100)}(),t.on("endgame",function(){x=!1,null!=e.ticktock&&(cc.audioEngine.stop(e.ticktock),e.ticktock=null),r("mask").active=!0,r("finger").active=!1,_.forEach(m,function(e){e.touchable=!1}),c(3e3).then(function(){t.emit("hidecoin"),t.emit("hidetarget"),c(500).then(function(){var n=+e.player_score.string.split("/")[0],i=+e.enemy_score.string.split("/")[0];if(4!=n)return 4==i?(t.emit("endbattle","lose"),void setTimeout(function(){o.pkFinish(JSON.stringify({result:{gameid:store.gameid,resulttype:0,winner:1}}))},5e3)):void t.emit("startgame");n==i?(t.emit("endbattle","tie"),setTimeout(function(){o.pkFinish(JSON.stringify({result:{gameid:store.gameid,resulttype:1,winner:0}}))},5e3)):(t.emit("endbattle","win"),setTimeout(function(){o.pkFinish(JSON.stringify({result:{gameid:store.gameid,resulttype:0,winner:0}}))},5e3))})})}),t.on("endbattle",function(n){var o=n.detail;x=!1,r("mask").active=!0,r("finger").active=!1,_.forEach(m,function(e){e.touchable=!1}),r("endbattle_box").opacity=0,r("endbattle_box").scale=0,r("endbattle_box_copy").opacity=0,r("endbattle_box_copy").scale=0,r("endbattle_mask").active=!0,setTimeout(function(){var n=+e.player_score.string.split("/")[0],i=+e.enemy_score.string.split("/")[0];_.get(r("endbattle_x_copy").children,i).active=!0,_.get(r("endbattle_y_copy").children,n).active=!0,"lose"==o&&4==i&&_.get(r("endbattle_x_copy").children,i).getComponent(cc.Animation).play(),"win"==o&&4==n&&_.get(r("endbattle_y_copy").children,n).getComponent(cc.Animation).play(),_.get(r("endbattle_x").children,n).active=!0,_.get(r("endbattle_y").children,i).active=!0,"lose"==o&&(t.emit("endbattle_lose"),4==i&&_.get(r("endbattle_y").children,i).getComponent(cc.Animation).play()),"tie"==o&&t.emit("endbattle_tie"),"win"==o&&(t.emit("endbattle_win"),4==n&&_.get(r("endbattle_x").children,n).getComponent(cc.Animation).play()),a.zoomin(r("endbattle_box")),a.zoomin(r("endbattle_box_copy"))},0)});try{window.nativeApp.pkGameProgress(store.gameid,100)}catch(e){}t.emit("startbattle")}}),cc._RF.pop()},{"./common/middleware":"middleware","./common/report":"report"}],Launcher:[function(e,n,t){"use strict";cc._RF.push(n,"2b78aB5QylOn5OpTwYtxB55","Launcher");var o=e("./common/report"),i=e("./common/middleware"),c=e("../Loading/loading");o.pkLoading(JSON.stringify({})),cc.Class({extends:c,properties:{},onLoad:function(){var e=this;try{document.body.classList.remove("opacity"),document.body.style["background-color"]="rgba(0,0,0,0)";var n=/iPad|iPhone|iPod/i.test(navigator.userAgent),t=parseInt((navigator.userAgent.match(/\bcpu(?: iphone)? os /i.test(navigator.userAgent)?/\bcpu(?: iphone)? os ([0-9._]+)/i:/\biph os ([0-9_]+)/i)||[,0])[1]);n&&t<=9&&(document.body.style["background-color"]="black")}catch(e){}this.loadingInit(),this.setProgressLabel("正在准备商品"),this.setLoadingLabel("先凑齐硬币的一方获胜"),o.pkLoadingTips(JSON.stringify({tips:"先凑齐硬币的一方获胜"})),this.autoLoadProgressTo80();try{window.nativeApp.pkGameProgress(store.gameid,80)}catch(e){}o.pkLoadingProgress(JSON.stringify({progress:80})),i.onlost(function(){}),i.onload(function(){var n=81,t=setInterval(function(){e.setLoadingProgress(n),n++,o.pkLoadingProgress(JSON.stringify({progress:n})),n>=100&&(clearInterval(t),cc.director.loadScene("Game"))},30)}),i.onprogress(function(){}),i.onconnect(function(){}),i.ongameover(function(e){i.ongameover(function(){}),setTimeout(function(){window.socket.disconnect()},0),e?o.pkFinish(JSON.stringify(e.data.result)):o.pkLoadFail(JSON.stringify({}))})},start:function(){}}),cc._RF.pop()},{"../Loading/loading":"loading","./common/middleware":"middleware","./common/report":"report"}],eventBus:[function(e,n,t){"use strict";cc._RF.push(n,"25366vl7/dHipgsGZCXkLz2","eventBus");var o=new cc.EventTarget;n.exports={emitter:o,const:{GAMEOVER:"gameOver",OPENPKBGM:"openPKBGM",CLOSEPKBGM:"closePKBGM",DISCONNECT:"disconnect"}},cc._RF.pop()},{}],loading:[function(e,n,t){"use strict";cc._RF.push(n,"7c764eEhABLw4pTaapq7Mk8","loading");var o=void 0,i=void 0,c=void 0,a=0;cc.Class({extends:cc.Component,loadingNode:void 0,properties:{loadingPrefab:{default:null,type:cc.Prefab}},loadingInit:function(){this.loadingNode=cc.instantiate(this.loadingPrefab),o=cc.find("progress",this.loadingNode);cc.find("progress-label",o);c=cc.find("progress-control",cc.find("progress-mask",o)),i=2.94,this.node.addChild(this.loadingNode)},setProgressLabel:function(e){cc.find("progress-label",o).getComponent(cc.Label).string=e},updateBgSize:function(){var e=cc.find("label-box",this.loadingNode),n=e.getComponent(cc.Label).node.getContentSize(),t=cc.find("label-background",e);t.setContentSize({width:n.width+60,height:t.getContentSize().height})},setLoadingLabel:function(e){var n=cc.find("label-box",this.loadingNode),t=cc.find("label",n);n.getComponent(cc.Label).string=e,t.getComponent(cc.Label).string=e},setLoadingProgress:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;e>100||e<0||(c.runAction(cc.moveBy(n,(e-a)*i,0)),a=e)},autoLoadProgressTo80:function(){this.setLoadingProgress(80,1)}}),cc._RF.pop()},{}],middleware:[function(e,n,t){"use strict";function o(){_(S).map(function(e){return _.get(_.split(e,"_"),1)-0}).sum()!==k?_(N).map(function(e){return _.get(_.split(e,"_"),1)-0}).sum()!==k||r.onlose():r.onwin()}cc._RF.push(n,"25f49JAVS5C1qefXc1+h13z","middleware"),Object.defineProperty(t,"__esModule",{value:!0});var i=e("./utils").getUrlParams()||{},c=e("./report"),a="ws://183.3.211.166:9001";i.websocketdomain&&i.port&&(a="wss://"+i.websocketdomain+":"+i.port),console.log(document.baseURI);var r={};window.store=r;var l='{"roomid":"607a6c05-1b76-448a-ad0d-08be54bb110","channelid":"guangzhou1","gameid":"couyingbi","player":{"uid":"1","name":"player1","avatarurl":"http://s1.yy.com/guild/header/10001.jpg","opt":""}}',u=l;try{u=/player2/.test(location.href)?'{"roomid":"607a6c05-1b76-448a-ad0d-08be54bb110","channelid":"guangzhou1","gameid":"couyingbi","player":{"uid":"2","name":"player2","avatarurl":"http://s1.yy.com/guild/header/10001.jpg","opt":""}}':l}catch(e){}var d=i.post_data||u;try{JSON.parse(d)}catch(e){d=d.replace(/\\/g,"")}var s=i.timestamp||1509710152,p=i.nonstr||"jg4g3b0i-7pb0-92y5-mu0a-e997nmb6gg3p",f=i.sign||"c7961cc7357f8a991edf5a93daf1e69b2d7c30ab",y=JSON.parse(d).roomid||"",g=JSON.parse(d).gameid||"";r.gameid=g;var m=JSON.parse(d).player.name,h=JSON.parse(d).player.uid,v=new Promise(function(e,n){try{var t=new Image;t.onload=function(){e(t)},t.onerror=function(){e()},t.src="./guide.gif"}catch(n){e()}});cc.sys.localStorage.removeItem(h+"_"+g+"_skipguide");var w=cc.sys.localStorage.getItem(h+"_"+g+"_skipguide"),b=!!(_.sum(_.map(y.replace(/\D/g,"").split(""),function(e){return+e}))%2),x=0,k=0,S=[],N=[];t.default={connect:function(){var e=window.io(""+a,{reconnection:!1,transports:["websocket"],path:"/"+g+"/"+y,query:{post_data:d,timestamp:s,nonstr:p,sign:f}}).on("connect",function(){x=setInterval(function(){e.emit("heart_req",JSON.stringify({}))},1e4),v.then(function(){e.emit("load_progress_req",JSON.stringify({progress:100}))})}).on("reconnect",function(){}).on("login_res",function(e){var n=e.data,t=n.players,o=n.stage;o&&t&&(r.$stageid=o.id,r.onconnect({player:{name:m}}),2==t.length&&r.onconnect({enemy:{name:t[1].name}}))}).on("user_login_res",function(e){_.forEach(e.data,function(e,n){var t=e.name,o=e.direction;n==h?r.$direction=o:r.onconnect({enemy:{name:t}})})}).on("load_progress_res",function(e){}).on("readygo_res",function(e){e&&e.data&&e.data.stageid==r.$stageid&&(r.onsetstarttime(+new Date),r.onsetstarttime=function(){},r.onreadygo(),r.onreadygo=function(){})}).on("wait_readygo_res",function(e){}).on("stage_start_res",function(e){if(e&&e.data&&e.data.lastStageResult){var n=e.data.lastStageResult.points,t=n[0].uid==h?n[0]:n[1],o=n[0].uid==h?n[1]:n[0];r.onsetcoin=null,r.onsettarget=null,t&&1==t.add&&o&&1==o.add?r.ontie():t&&1==t.add?r.onwin():r.onlose();!function n(){setTimeout(function(){r.onsetcoin&&r.onsettarget?(r.onsetcoin(e),r.onsettarget(e)):n()},100)}()}else if(r.onprogress&&r.onprogress(100),r.onload(),w){!function n(){setTimeout(function(){r.onsetcoin&&r.onsettarget?(r.onsetcoin(e),r.onsettarget(e)):n()},100)}()}else{cc.sys.localStorage.setItem(h+"_"+g+"_skipguide",1);!function n(){setTimeout(function(){r.onsetcoin&&r.onsettarget&&r.onguide?v.then(function(){r.onsetcoin(e),r.onsettarget(e),r.onguide()}):n()},100)}()}}).on("grab_coin_bc_res",function(e){if(console.log("[socket]","grab_coin_bc_res",e),c.logInfo("[socket]","grab_coin_bc_res",e),e&&e.data&&e.data.coinid){var n=e.data,t=n.coinid,o=n.stageid;if(n.uid==h)return;if(r.$stageid==o){var i=t;r.onmovecoin({cid:i})}}}).on("move_coin_bc_res",function(e){if(console.log("[socket]","move_coin_bc_res",e),c.logInfo("[socket]","move_coin_bc_res",e),e&&e.data&&e.data.coinid){var n=e.data,t=n.coinid,o=n.stageid,i=n.uid,a=n.x,l=n.y,u=n.z;if(i==h)return;if(r.$stageid==o){var d=t;r.onmovecoin({cid:d,x:a,y:l,z:u})}}}).on("putdown_coin_bc_res",function(e){if(console.log("[socket]","putdown_coin_bc_res",e),c.logInfo("[socket]","putdown_coin_bc_res",e),e&&e.data&&e.data.coinid){var n=e.data,t=n.coinid,o=n.stageid,i=n.uid,a=n.x,l=n.y,u=n.z,d=n.own;if(i==h)return;if(r.$stageid==o){var s=t;r.onmovecoin({cid:s,x:a,y:l,z:u,own:d})}}}).on("game_over_res",function(e){if(clearInterval(x),e&&e.data&&e.data.lastStageResult){var n=e.data.lastStageResult.winner;n?n==h?r.onwin():r.onlose():r.ontie()}setTimeout(function(){var n=void 0;n="not_draw"==e.data.reason?e.data.winUid==h?"win":"lose":"tie",r.ongameover(e,n)},3e3)}).on("heart_res",function(){}).on("disconnect",function(e){clearInterval(x),/client/.test(e)&&r.ongameover(null,"lose")}).on("error",function(n){e.disconnect()});window.socket=e,cc.sys.isBrowser&&(window.onunload=window.onbeforeunload=function(){e.disconnect()})},onlost:function(e){r.onlost=e},onconnect:function(e){r.onconnect=e},onprogress:function(e){r.onprogress=e},onload:function(e){r.onload=e,r.onload()},ongameover:function(e){r.ongameover=e},onguide:function(e){r.onguide=function(){v.then(function(n){e(n)})},w||(cc.sys.localStorage.setItem(h+"_"+g+"_skipguide",1),r.onguide())},onrandomcolor:function(e){e(b,r.$direction)},onsetcoin:function(e){var n=function(){return parseInt(300*Math.random()-150)},t=_.shuffle(_.concat(_.map(Array.apply(null,{length:7}),function(e,t){return{x:n(),y:n(),type:1,touchable:!0,id:"coin_1_"+t}}),_.map(Array.apply(null,{length:5}),function(e,t){return{x:n(),y:n(),type:2,touchable:!0,id:"coin_2_"+t}}),_.map(Array.apply(null,{length:3}),function(e,t){return{x:n(),y:n(),type:5,touchable:!0,id:"coin_5_"+t}})));r.onsetcoin=function(n){if(n&&n.data&&n.data.newStageInfo){var o=n.data.newStageInfo,i=o.id,c=o.freeCoins;o.goods;r.$stageid=i;var a=0,l=0,u=0,d=r.$direction,s=_.map(c,function(e){var n=e.id,t=e.r,o=e.val,i=e.x,c=e.y,r=(e.z,e.status,e.owner,void 0);return 1==o&&(r=a++),2==o&&(r=l++),5==o&&(r=u++),{x:i,y:c*d,r:t,type:o,touchable:!0,id:"coin_"+o+"_"+r,cid:n}});e({coins:s})}else S=[],N=[],e({coins:t})},r.onsetcoin()},onsettarget:function(e){var n=[[3,"1"],[4,"1"],[6,"2"],[7,"3"],[8,"3"],[9,"4"],[10,"4"],[11,"5"],[12,"5"],[13,"5"],[14,"6"],[15,"6"],[16,"6"],[17,"7"],[18,"7"],[19,"8"],[20,"8"]];r.onsettarget=function(t){if(t&&t.data&&t.data.newStageInfo){var o=t.data.newStageInfo,i=(o.id,o.freeCoins,o.goods),c=i.name,a=i.price,r=i.type;e({name:c,price:a,type:r})}else{var l=Math.round(Math.random()*n.length+.5)-1,u=n[l][0],d=n[l][1];k=u,e({name:"name",price:u,type:d})}},r.onsettarget()},onmovecoin:function(e){r.onmovecoin=e},onlose:function(e){r.onlose=e},ontie:function(e){r.ontie=e},onwin:function(e){r.onwin=e},onreadygo:function(e){r.onreadygo=e},onsetstarttime:function(e){r.onsetstarttime=e},pickcoin:function(e){var n=e.cid,t=r.$stageid,o=n;window.socket&&socket.emit("grab_coin_req",JSON.stringify({stageid:t,coinid:o}))},movecoin:function(e){var n=e.cid,t=e.x,o=e.y,i=e.z,c=r.$stageid,a=n;window.socket&&socket.emit("move_coin_req",JSON.stringify({stageid:c,coinid:a,x:Math.round(t),y:Math.round(o),z:Math.round(i)}))},collectcoin:function(e,n){var t=e.cid,i=e.x,c=e.y,a=e.z,l=r.$stageid,u=t;window.socket&&socket.emit("putdown_coin_req",JSON.stringify({stageid:l,coinid:u,x:Math.round(i),y:Math.round(c),z:Math.round(a),own:!0})),"player1"==n&&(S=_(S).concat(e.id).uniq().value(),N=_(N).pull(e.id).value()),"player2"==n&&(N=_(N).concat(e.id).uniq().value(),S=_(S).pull(e.id).value()),o()},putcoin:function(e){var n=e.cid,t=e.x,i=e.y,c=e.z,a=r.$stageid,l=n;window.socket&&socket.emit("putdown_coin_req",JSON.stringify({stageid:a,coinid:l,x:Math.round(t),y:Math.round(i),z:Math.round(c),own:!1})),S=_(S).pull(e.id).value(),N=_(N).pull(e.id).value(),o()},timeout:function(){r.ontie()},readygo:function(e){window.socket&&socket.emit("readygo_req",JSON.stringify({stageid:r.$stageid})),r.onsetstarttime(+new Date),r.onreadygo()}};try{window.nativeApp.pkGameProgress(r.gameid,50)}catch(e){}n.exports=t.default,cc._RF.pop()},{"./report":"report","./utils":"utils"}],report:[function(e,n,t){"use strict";cc._RF.push(n,"401e5yzkBNBq6dPbPXWNoK0","report");var o={nativeApp:!1,browserIframe:!1},i=void 0,c=void 0;window.nativeApp&&window.nativeApp.onPKFinish?(o.nativeApp=!0,i=window.nativeApp):window.TZOpen&&window.TZOpen.getResult?(o.nativeApp=!0,i=window.nativeApp,window.nativeApp=window.nativeApp||{},window.nativeApp.onPKFinish=window.TZOpen.getResult):window.parent!==window.self?(o.browserIframe=!0,c=window.parent):window.console.warn("不能识别出平台"),n.exports={client:o,pkLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKLoading&&i.onPKLoading(e)},pkFinishLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKFinishLoading&&i.onPKFinishLoading(e)},pkLoadingProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKLoadingProgress&&i.onPKLoadingProgress(e)},pkLoadingTips:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKLoadingTips&&i.onPKLoadingTips(e)},pkLoadFail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKLoadFail&&i.onPKLoadFail(e)},pkStart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKStart&&i.onPKStart(e)},pkExceptionFinish:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKExceptionFinish&&i.onPKExceptionFinish(e)},pkFinish:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";e=this._formatData(e),o.nativeApp&&i.onPKFinish?i.onPKFinish(e):o.browserIframe&&c.postMessage(e,"*")},logInfo:function(e){i&&i.logInfo&&e&&"string"==typeof e&&i.logInfo(e)},logError:function(e){i&&i.logError&&("string"==typeof e?i.logError(e):e instanceof Error&&i.logError(this._formatError(e)))},_formatData:function(e){return"string"==typeof e?e:window.JSON.stringify(e)},_formatError:function(e){var n={},t=e.stack;if(t){var o=void 0,i=void 0;(i=(o=(o=t.match("https?://[^\n]+"))?o[0]:"").match(":(\\d+):(\\d+)"))||(i=[0,0,0]),n={msg:e.name+" "+e.message,target:o.replace(i[0],""),rowNum:i[1],colNum:i[2],referer:cc.sys.isNative?window.nativeApp.gameInfo.gurl:window.location.href,isNative:cc.sys.isNative,stack:t.toString()}}else n={msg:e.name+" "+e.message+(e.description?" "+e.description:""),referer:cc.sys.isNative?window.nativeApp.gameInfo.gurl:window.location.href,isNative:cc.sys.isNative};return JSON.stringify(n)},_processStackMsg:function(e){var n=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,9).join("@").replace(/\?[^:]+/gi,""),t=e.toString();return n.indexOf(t)<0&&(n=t+"@"+n),n}},cc._RF.pop()},{}],utils:[function(e,n,t){"use strict";cc._RF.push(n,"576af0qEpZCqLr7tkPx4uZV","utils"),n.exports={getUrlParams:function(){var e=window.decodeURIComponent,n={},t=cc.sys.isNative?null:window.location.href;if(t)for(var o=t.replace(/^[^?]+\?/,"").split("&"),i=0;i<o.length;i++){var c=o[i].split("="),a=e(c[0]),r=e(c[1]);a&&(n[a]=r||null)}return n}},cc._RF.pop()},{}]},{},["loading","Game","Launcher","eventBus","middleware","report","utils"]);