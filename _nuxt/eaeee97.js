(window.webpackJsonp=window.webpackJsonp||[]).push([[0,10],{218:function(t,e,n){"use strict";n.r(e);n(47);var o=function(t,e){var n=1,o={audio:document.getElementById("audio"),playerButtons:{largeToggleBtn:document.querySelector(".ToggleButton"),nextTrackBtn:document.querySelector(".NextButton"),previousTrackBtn:document.querySelector(".PrevButton"),smallToggleBtn:document.getElementsByClassName("Container__PlaylistItemIcon")},progressBar:document.querySelector(".ProgressBar"),playListRows:document.getElementsByClassName("PlaylistItem__Component"),trackInfoBox:document.querySelector(".Container__Progress .Player__Time")},r=!1,l=o.progressBar.querySelector(".ProgressBar > .ProgressBar__Indicator"),c=!1,d=function(t){var e=o.progressBar.offsetLeft,n=o.progressBar.offsetTop,r={x:null,y:null};return"ontouchstart"in window?(r.x=t.clientX-e,r.y=t.clientY-n,r):t.offsetX||0===t.offsetX?(r.x=t.offsetX,r.y=t.offsetY,r):t.layerX||0===t.layerX?(r.x=t.layerX,r.y=t.layerY,r):void 0},f=function(t){var e=document.querySelector(".ProgressBar");return d(t).x/e.offsetWidth},m=function(t){var e=parseFloat(audio.duration),n=parseFloat(f(t));audio.currentTime=e*n},v=function(t){console.log("mouse down"),window.addEventListener("mousemove",x,!0),audio.removeEventListener("timeupdate",P,!1),r=!0},_=function(t){if(console.log("mouse up"),!0===r){var e=parseFloat(audio.duration),n=parseFloat(f(t));window.removeEventListener("mousemove",x,!0),audio.currentTime=e*n,audio.addEventListener("timeupdate",P,!1),r=!1}},x=function(t){console.log("move progress bar");o.progressBar.offsetLeft;var e,n=o.progressBar.offsetWidth,r=o.progressBar.children[1],l=d(t).x;e=parseFloat(l/n*100),l>0&&l<n?r.style.width="".concat(e,"%"):l<=0?r.style.width="0%":l>=n&&(r.style.width="100%")},y=function(){o.audio.paused?(o.audio.play(),I(!0)):(o.audio.pause(),I(!1))},h=function(){document.querySelector(".ProgressBar__Played").style.width="0%";var r=e+t[n-1].src;o.audio.setAttribute("src",r),o.audio.load(),c=!0,C(n,t),k(n,o.playListRows),y()},k=function(t,e){for(var i=0;i<e.length;i++)e[i].classList.remove("Active__Track");e[t-1].classList.add("Active__Track")},C=function(t,e){var n=document.querySelectorAll("#Playlist .Track__Title"),o=e[t-1].title;n[0].innerHTML=o,n[1].innerHTML=o},w=function(){parseInt(n),n=n===t.length?1:n+1,c=!1,h()},P=function(){var t=document.querySelector("#Playlist .Container__Progress .Player__Time .Current"),e=o.audio.currentTime,n=o.audio.duration,r=document.querySelector("#Playlist .Container__Progress .Player__Time .Duration"),l=B(e),c=n?B(n):"00:00";t.innerHTML=l,r.innerHTML=c,function(audio){var t=100*parseFloat(audio.currentTime)/audio.duration;o.progressBar.children[1].style.width=t+"%"}(o.audio),T()},B=function(t){var e=0,n=Math.floor(t);return(e=(e=Math.floor(n/60))>=10?e:"0"+e)+":"+(n=(n=Math.floor(n%60))>=10?n:"0"+n)},j=function(audio){var t=audio.currentTime,e=audio.duration,n=audio.buffered.length;if(e>0)for(var i=0;i<n;i++)if(audio.buffered.end(n-1-i)>t){o.progressBar.children[0].style.width=audio.buffered.end(n-1-i)/e*100+"%";break}},I=function(e){e?(o.playerButtons.largeToggleBtn.querySelector(".PlayIcon").style="display:none;",o.playerButtons.largeToggleBtn.querySelector(".PauseIcon").style=""):(o.playerButtons.largeToggleBtn.querySelector(".PauseIcon").style="display:none;",o.playerButtons.largeToggleBtn.querySelector(".PlayIcon").style=""),1===n?(o.playerButtons.previousTrackBtn.classList.add("disabled"),o.playerButtons.nextTrackBtn.classList.remove("disabled")):n>1&&n!==t.length?(o.playerButtons.previousTrackBtn.classList.remove("disabled"),o.playerButtons.nextTrackBtn.classList.remove("disabled")):n===t.length&&(o.playerButtons.previousTrackBtn.classList.remove("disabled"),o.playerButtons.nextTrackBtn.classList.add("disabled"))},T=function(){var t=parseFloat(o.progressBar.children[1].offsetWidth);l.style.left=t+"px"};return{initPlayer:function(){1!==n&&null!==n||o.playerButtons.previousTrackBtn.classList.add("disabled");for(var i=0;i<o.playListRows.length;i++){o.playListRows[i].addEventListener("click",(function(t){t.preventDefault();var e=parseInt(this.getAttribute("data-track-row"));e!==n&&(n=null,c=!1),!1===c?(n=parseInt(e),h()):y(this)}),!1)}o.audio.addEventListener("timeupdate",P,!1),o.audio.addEventListener("progress",(function(t){this.buffered.length>0&&j(this)})),o.audio.addEventListener("ended",(function(t){w()}),!1),o.audio.addEventListener("loadstart",(function(t){o.trackInfoBox.classList.add("Not__Loaded")})),o.audio.addEventListener("loadeddata",(function(t){setTimeout((function(){o.trackInfoBox.classList.remove("Not__Loaded")}),600)})),o.audio.addEventListener("error",(function(t){switch(t.target.error.code){case t.target.error.MEDIA_ERR_ABORTED:alert("You aborted the video playback.");break;case t.target.error.MEDIA_ERR_NETWORK:alert("A network error caused the audio download to fail.");break;case t.target.error.MEDIA_ERR_DECODE:alert("The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.");break;case t.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:alert("The video audio not be loaded, either because the server or network failed or because the format is not supported.");break;default:alert("An unknown error occurred.")}c=!1}),!1),o.playerButtons.largeToggleBtn.addEventListener("click",(function(t){!1===c?(n=parseInt(1),h()):y()}),!1),o.playerButtons.nextTrackBtn.addEventListener("click",(function(t){!0!==this.classList.contains("disabled")&&(n++,c=!1,h())}),!1),o.playerButtons.previousTrackBtn.addEventListener("click",(function(t){!0!==this.classList.contains("disabled")&&(n--,c=!1,h())}),!1),o.progressBar.addEventListener("click",m,!1),l.addEventListener("mousedown",v,!1),window.addEventListener("mouseup",_,!1),C(n,t),k(n,o.playListRows)}}},r={props:["tracks_data","album_thumbs"],mounted:function(){new o(this.tracks_data.tracks,this.$nuxt.$router.history.base+"/audio/").initPlayer()}},l=(n(290),n(26)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Playlist"}},[o("audio",{attrs:{id:"audio",preload:"metadata",tabindex:"0"}},[t._v("\n    Your browser does not support HTML5 audio.\n  ")]),t._v(" "),o("div",{staticClass:"Container__BgOut w-full "},[o("div",{staticClass:"Container__BgIn w-full"},[o("div",{staticClass:"Container__Full mx-auto"},[o("div",{staticClass:"Container__Top p-4 sm:px-0 sm:flex"},[o("div",{staticClass:"Container__Info flex sm:w-auto sm:h-auto"},[o("div",{staticClass:"Container__TrackImage w-14 h-14 mr-4 rounded-lg overflow-hidden sm:w-40 sm:h-40 sm:rounded-xl sm:mr-6 shadow-inner"},[o("img",{staticClass:"h-full mx-auto",attrs:{src:n(225)("./"+t.album_thumbs.lg),alt:""}})]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"sm:flex-1"},[t._m(1),t._v(" "),o("div",{staticClass:"sm:mt-6"},[t._m(2),t._v(" "),o("div",{staticClass:"Container__MainControls"},[o("div",{staticClass:"MainControls flex items-center justify-center"},[o("div",{staticClass:"PrevButton w-7 mr-4"},[o("svg",{staticClass:"PrevIcon",attrs:{viewBox:"0 0 24 24",fill:"rgb(243, 244, 246)"}},[o("path",{attrs:{d:"M11.253 17.84l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249c.507-.383 1.247-.032 1.247.592V17.25c0 .624-.74.975-1.247.592zm8.5 0l-6.955-5.248a.736.736 0 0 1 0-1.184l6.955-5.249C20.26 5.776 21 6.127 21 6.751V17.25c0 .624-.74.975-1.247.592z"}})])]),t._v(" "),o("div",{staticClass:"ToggleButton w-9 mr-4"},[o("svg",{staticClass:"PlayIcon",attrs:{viewBox:"0 0 36 36",fill:"rgb(243, 244, 246)"}},[o("path",{attrs:{d:"M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"}})]),t._v(" "),o("svg",{staticClass:"PauseIcon",staticStyle:{display:"none"},attrs:{viewBox:"0 0 24 24",fill:"rgb(243, 244, 246)"}},[o("path",{attrs:{d:"M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zm8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4z"}})])]),t._v(" "),o("div",{staticClass:"NextButton w-7 mr-4"},[o("svg",{staticClass:"NextIcon",attrs:{viewBox:"0 0 24 24",fill:"rgb(243, 244, 246)"}},[o("path",{attrs:{d:"M12.747 17.84l6.955-5.248a.736.736 0 0 0 0-1.184L12.747 6.16c-.507-.383-1.247-.032-1.247.592V17.25c0 .624.74.975 1.247.592zm-8.5 0l6.955-5.248a.736.736 0 0 0 0-1.184L4.247 6.16C3.74 5.776 3 6.127 3 6.751V17.25c0 .624.74.975 1.247.592z"}})])])])])])])]),t._v(" "),o("div",{staticClass:"Playlist__Component"},[o("div",{staticClass:"Container__Playlist"},[o("div",{staticStyle:{position:"relative",width:"100%",height:"300px"}},[o("div",{staticClass:"border-t border-gray-400",staticStyle:{position:"relative","overflow-y":"scroll","overflow-x":"hidden",height:"300px"},attrs:{id:"PLaylistItems"}},t._l(t.tracks_data.tracks,(function(track,i){return o("playlist-item",{key:i+1,attrs:{"data-track-row":i+1,track:track,album_thumbs:t.album_thumbs}})})),1)])])])])])]),t._v(" "),t.tracks_data.other_tracks.length>0?o("div",{staticClass:"MoreSample mt-1 sm:mt-2"},[o("div",{staticClass:"flex flex-wrap space-y-1 space-x-2 text-sm md:text-base"},[o("div",{staticClass:"font-medium px-1"},[t._v("Others:")]),t._v(" "),t._l(t.tracks_data.other_tracks,(function(e,i){return o("div",{key:i,staticClass:"bg-gray-100 px-1 rounded"},[t._v("\n        "+t._s(e)+"\n      ")])}))],2)]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Track__Info w-auto sm:hidden"},[n("div",{staticClass:"Track__Title font-semibold"},[t._v("-")]),t._v(" "),n("div",{staticClass:"Track__Author font-normal text-sm"},[t._v("Neil Seidel")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Track__Info hidden sm:block"},[n("div",{staticClass:"Track__Title font-semibold text-lg"},[t._v("-")]),t._v(" "),n("div",{staticClass:"Track__Author font-normal text-sm opacity-80"},[t._v("\n                Neil Seidel\n              ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Container__Progress py-2"},[n("div",{staticClass:"Player__Time flex justify-between w-full mb-2 Not__Loaded"},[n("div",{staticClass:"Current w-10 rounded-lg py-0.5 text-center"},[t._v("\n                    00:00\n                  ")]),t._v(" "),n("div",{staticClass:"Duration w-10 rounded-lg py-0.5 text-center"})]),t._v(" "),n("div",{staticClass:"ProgressBar",attrs:{color:"rgb(255, 239, 175)"}},[n("div",{staticClass:"ProgressBar__Loaded",attrs:{color:"rgb(255, 239, 175)"}}),t._v(" "),n("div",{staticClass:"ProgressBar__Played",attrs:{color:"#ff4734"}}),t._v(" "),n("div",{staticClass:"ProgressBar__Indicator"})])])}],!1,null,"04cd6fe4",null);e.default=component.exports;installComponents(component,{PlaylistItem:n(284).default})},219:function(t,e,n){t.exports=n.p+"img/dalilamans300.505a84b.jpg"},220:function(t,e,n){t.exports=n.p+"img/leaving-life.47326a7.jpg"},221:function(t,e,n){t.exports=n.p+"img/nsstjames300.96e121c.jpg"},222:function(t,e,n){t.exports=n.p+"img/shanti.387e553.jpg"},223:function(t,e,n){t.exports=n.p+"img/tonybennet400.b013d3d.jpg"},224:function(t,e,n){t.exports=n.p+"img/youtube_btn.f488bd3.png"},225:function(t,e,n){var map={"./b-silk.jpg":228,"./bevelbar2.gif":229,"./buy_now_btn.gif":230,"./bwneilwcar.jpg":231,"./canvas.jpg":232,"./cd.jpeg":233,"./dalilamans300.jpg":219,"./dalilamans400.jpg":234,"./decor-01-132x283.png":235,"./decor-02-472x762.png":236,"./decor-03-1343x1845.png":237,"./decor-04-146x121.png":238,"./decor-05-648x1031.png":239,"./decor-06-191x159.png":240,"./envelope.png":162,"./facebook150.jpg":241,"./facebook400.jpg":242,"./fakebookmemories-back.jpg":243,"./fakebookmemories.jpg":244,"./guitar.jpeg":226,"./guitar1.jpg":245,"./guitar2.jpg":246,"./jacques150.jpg":247,"./jacques400.jpg":248,"./leaving-life.jpg":220,"./listen.gif":249,"./mexcover.jpg":250,"./musicStore.jpg":251,"./neil&shlomo.jpg":252,"./novia-scotia-cover.jpg":253,"./ns-home-cover150.jpg":254,"./ns-home-cover400.jpg":255,"./nsstjames300.jpg":221,"./nsstjames400.jpg":256,"./princess.jpg":257,"./princessthumb.jpg":258,"./shanti.jpg":222,"./shlomo2150.jpg":259,"./shlomo2400.jpg":260,"./shlomocover.jpg":261,"./shlomocover400.jpg":262,"./tonybennet400.jpg":223,"./vintageguitar.jpg":263,"./vintageguitar2cover.jpg":264,"./world-traveler-cover.jpg":265,"./world-traveler-cover400.jpg":266,"./youtube_btn.png":224};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=225},226:function(t,e,n){t.exports=n.p+"img/guitar.f1b856d.jpeg"},228:function(t,e,n){t.exports=n.p+"img/b-silk.e3c7f26.jpg"},229:function(t,e,n){t.exports=n.p+"img/bevelbar2.33d7f6b.gif"},230:function(t,e,n){t.exports=n.p+"img/buy_now_btn.2b57c59.gif"},231:function(t,e,n){t.exports=n.p+"img/bwneilwcar.9d02c1f.jpg"},232:function(t,e,n){t.exports=n.p+"img/canvas.2889a06.jpg"},233:function(t,e,n){t.exports=n.p+"img/cd.2e1dbb3.jpeg"},234:function(t,e,n){t.exports=n.p+"img/dalilamans400.8d6ef5d.jpg"},235:function(t,e,n){t.exports=n.p+"img/decor-01-132x283.18c7034.png"},236:function(t,e,n){t.exports=n.p+"img/decor-02-472x762.58368c8.png"},237:function(t,e,n){t.exports=n.p+"img/decor-03-1343x1845.d5e44e2.png"},238:function(t,e,n){t.exports=n.p+"img/decor-04-146x121.3183055.png"},239:function(t,e,n){t.exports=n.p+"img/decor-05-648x1031.e6f2e70.png"},240:function(t,e,n){t.exports=n.p+"img/decor-06-191x159.c34b6ff.png"},241:function(t,e,n){t.exports=n.p+"img/facebook150.396a101.jpg"},242:function(t,e,n){t.exports=n.p+"img/facebook400.e6e3004.jpg"},243:function(t,e,n){t.exports=n.p+"img/fakebookmemories-back.1d6eb3f.jpg"},244:function(t,e,n){t.exports=n.p+"img/fakebookmemories.aa8847c.jpg"},245:function(t,e,n){t.exports=n.p+"img/guitar1.d9549b6.jpg"},246:function(t,e,n){t.exports=n.p+"img/guitar2.98b414f.jpg"},247:function(t,e,n){t.exports=n.p+"img/jacques150.bfb5646.jpg"},248:function(t,e,n){t.exports=n.p+"img/jacques400.7f64877.jpg"},249:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAAPAMQfADc7PLbBxoGJjXB2emtxdKq0ucPP1Gpwc87a4KextpihpbzHzVddX664vcTP1UxRU0NHSXqBhGVrblthZJCYnNPg5m51eIiQlI2WmlFWWcvX3a+6v0tPUTw/QQAAAOPl4yH5BAEAAB8ALAAAAAAQAA8AAAVd4CeOpOiU6IhYUeqR2lcdV+m9osFQX/MEoxtOFMgkPgOBUCgiFD6CwUcxWd5EGMlnw/ksIFacpiMDlMNYLdcLtjaf0ekkeB0Vj0lS/aPj+YB6MDI0KSUrLYUlJyIhADs="},250:function(t,e,n){t.exports=n.p+"img/mexcover.685ec6c.jpg"},251:function(t,e,n){t.exports=n.p+"img/musicStore.8874ee1.jpg"},252:function(t,e,n){t.exports=n.p+"img/neil&shlomo.92cb79a.jpg"},253:function(t,e,n){t.exports=n.p+"img/novia-scotia-cover.ef2666f.jpg"},254:function(t,e,n){t.exports=n.p+"img/ns-home-cover150.a01b886.jpg"},255:function(t,e,n){t.exports=n.p+"img/ns-home-cover400.be57290.jpg"},256:function(t,e,n){t.exports=n.p+"img/nsstjames400.2e6876a.jpg"},257:function(t,e,n){t.exports=n.p+"img/princess.cffdd39.jpg"},258:function(t,e,n){t.exports=n.p+"img/princessthumb.d27830d.jpg"},259:function(t,e,n){t.exports=n.p+"img/shlomo2150.38fa802.jpg"},260:function(t,e,n){t.exports=n.p+"img/shlomo2400.755c151.jpg"},261:function(t,e,n){t.exports=n.p+"img/shlomocover.f204493.jpg"},262:function(t,e,n){t.exports=n.p+"img/shlomocover400.42908f9.jpg"},263:function(t,e,n){t.exports=n.p+"img/vintageguitar.2237da2.jpg"},264:function(t,e,n){t.exports=n.p+"img/vintageguitar2cover.7e8a57b.jpg"},265:function(t,e,n){t.exports=n.p+"img/world-traveler-cover.312fc53.jpg"},266:function(t,e,n){t.exports=n.p+"img/world-traveler-cover400.9c3b2b5.jpg"},267:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("f8e93d7e",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n(267)},275:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.PlaylistItem__Component.Active__Track,.PlaylistItem__Component:hover{\n  background-color:hsla(0,0%,100%,.15)\n}\n.PlaylistItem__Component.Active__Track, .PlaylistItem__Component:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.PlaylistItem__Component.Active__Track .Container__PlaylistItemIcon,.PlaylistItem__Component:hover .Container__PlaylistItemIcon{\n  opacity:1\n}\n.PlaylistItemImages{\n  width:54px;\n  height:54px;\n  overflow:hidden;\n  position:relative;\n  display:flex;\n  flex-shrink:0;\n  border:1px solid hsla(0,0%,78.4%,.1)\n}\n.Container__PlaylistItemImage{\n  position:absolute;\n  width:100%;\n  height:100%;\n  top:0;\n  left:0;\n  flex-shrink:0;\n  overflow:hidden\n}\n.Container__PlaylistItemImage>img{\n  -o-object-fit:cover;\n     object-fit:cover\n}\n.Container__PlaylistItemIcon{\n  position:absolute;\n  top:0;\n  left:0;\n  background-color:rgba(17,17,17,.2);\n  width:100%;\n  height:100%;\n  opacity:0;\n  transition:all .3s ease 0s\n}\n.Container__PlaylistItemIcon>.PlaylistItem__Icon{\n  position:absolute;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);\n  width:30px;\n  height:30px;\n  transition:all .3s ease 0s\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},282:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("fc172628",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";n.r(e);var o={name:"PlaylistItem",data:function(){return{}},props:["track","album_thumbs"]},r=(n(274),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"\n    PlaylistItem__Component\n    py-2\n    px-2\n    flex flex-wrap\n    items-start\n    h-auto\n    cursor-pointer\n    rounded-lg\n  "},[o("div",{staticClass:"Container__PlaylistItemDetails flex w-full "},[o("div",{staticClass:"\n        PlaylistItemImages\n        mr-4\n        ml-2\n        rounded-lg\n      "},[o("div",{staticClass:"Container__PlaylistItemImage "},[o("img",{staticClass:"PlaylistItemImage__Component h-full mx-auto",staticStyle:{opacity:"1"},attrs:{src:n(225)("./"+t.album_thumbs.sm)}})]),t._v(" "),o("div",{staticClass:"Container__PlaylistItemIcon"},[o("svg",{staticClass:"PlaylistItem__Icon",attrs:{viewBox:"0 0 36 36",fill:"#fff"}},[o("path",{attrs:{d:"M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"}})])])]),t._v(" "),o("div",{staticClass:"PlaylistItem__Info overflow-hidden flex-1"},[o("div",{staticClass:"PlaylistItem__Title font-semibold leading-tight",attrs:{title:t.track.title}},[t._v("\n        "+t._s(t.track.title)+"\n      ")]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"PlaylistItem__Duration opacity-70 text-sm leading-tight"},[t.track.duration?o("div",[t._v("\n      "+t._s(t.track.duration)+"\n      ")]):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PlaylistItem__InfoBottom"},[n("div",{staticClass:"PlaylistItem__Author font-normal text-sm opacity-80",attrs:{title:"Neil Seidel"}},[t._v("\n          Neil Seidel\n        ")])])}],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n(282)},291:function(t,e,n){var o=n(45),r=n(292),l=n(226),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,"/*purgecss start ignore*/\n.Container__BgOut[data-v-04cd6fe4]{\n  background-color:rgba(0,0,0,.35);\n  background-image:url("+d+');\n  background-position:50%;\n  background-repeat:no-repeat;\n  background-size:cover\n}\n.Container__BgIn[data-v-04cd6fe4]{\n  -webkit-backdrop-filter:blur(1.5px);\n          backdrop-filter:blur(1.5px)\n}\n.Container__Full[data-v-04cd6fe4]{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n  max-width:500px\n}\n.Container__TrackImage[data-v-04cd6fe4]{\n  border:1px solid rgba(17,17,17,.1)\n}\n.Container__TrackImage>img[data-v-04cd6fe4]{\n  -o-object-fit:cover;\n     object-fit:cover\n}\n#PLaylistItems[data-v-04cd6fe4]::-webkit-scrollbar{\n  width:8px\n}\n#PLaylistItems[data-v-04cd6fe4]::-webkit-scrollbar-thumb{\n  width:8px;\n  border-radius:4px;\n  background:hsla(0,0%,100%,.5)\n}\n#PLaylistItems[data-v-04cd6fe4]::-webkit-scrollbar-thumb:hover{\n  background:hsla(0,0%,100%,.7)\n}\n.Container__Progress>.ProgressBar[data-v-04cd6fe4]{\n  position:relative;\n  display:flex;\n  cursor:pointer;\n  line-height:0;\n  font-size:.75rem;\n  background-color:#e9ecef;\n  z-index:2;\n  background-color:rgba(229,231,235,.2);\n  height:4px;\n  border-radius:4px\n}\n.Container__Progress>.ProgressBar>.ProgressBar__Played[data-v-04cd6fe4]{\n  background-color:#ff4734;\n  z-index:3;\n  height:4px;\n  width:0;\n  border-radius:4px\n}\n.Container__Progress>.ProgressBar>.ProgressBar__Loaded[data-v-04cd6fe4]{\n  position:absolute;\n  z-index:3;\n  background-color:rgba(229,231,235,.3);\n  height:4px;\n  width:0;\n  border-radius:4px\n}\n.Container__Progress>.ProgressBar>.ProgressBar__Indicator[data-v-04cd6fe4]{\n  position:absolute;\n  z-index:12;\n  height:12px;\n  width:12px;\n  border-radius:50%;\n  background-color:#ff4734;\n  pointer-events:none;\n  cursor:-webkit-grab;\n  cursor:grab;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  touch-action:none;\n  transition:opacity .2s ease 0s;\n  transform:translate(-6px,-4px)\n}\n.Container__Progress>.Player__Time[data-v-04cd6fe4]{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;\n  font-size:13px!important;\n  line-height:1\n}\n.Container__Progress>.Player__Time.Not__Loaded>div[data-v-04cd6fe4]{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity))\n}\n.NextButton[data-v-04cd6fe4],.PrevButton[data-v-04cd6fe4],.ToggleButton[data-v-04cd6fe4]{\n  cursor:pointer\n}\n.NextButton.disabled>svg[data-v-04cd6fe4],.PrevButton.disabled>svg[data-v-04cd6fe4]{\n  opacity:.5;\n  cursor:default\n}\n\n/*purgecss end ignore*/',""]),c.locals={},t.exports=c},292:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);