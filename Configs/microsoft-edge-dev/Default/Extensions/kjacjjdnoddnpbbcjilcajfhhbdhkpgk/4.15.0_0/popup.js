(()=>{var Q=Object.create,H=Object.defineProperty,X=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty,te=Object.getOwnPropertyNames,se=Object.getOwnPropertyDescriptor;var ne=e=>H(e,"__esModule",{value:!0});var re=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ie=(e,r,k)=>{if(r&&typeof r=="object"||typeof r=="function")for(let P of te(r))!ee.call(e,P)&&P!=="default"&&H(e,P,{get:()=>r[P],enumerable:!(k=se(r,P))||k.enumerable});return e},Y=e=>ie(ne(H(e!=null?Q(X(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var j=re((F,z)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof F!="undefined")r(z);else{var k={exports:{}};r(k),e.browser=k.exports}})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:F,function(e){"use strict";if(typeof browser=="undefined"||Object.getPrototypeOf(browser)!==Object.prototype){let r="The message port closed before a response was received.",k="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",P=M=>{let N={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(N).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class d extends WeakMap{constructor(s,o=void 0){super(o);this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}let n=t=>t&&typeof t=="object"&&typeof t.then=="function",x=(t,s)=>(...o)=>{M.runtime.lastError?t.reject(M.runtime.lastError):s.singleCallbackArg||o.length<=1&&s.singleCallbackArg!==!1?t.resolve(o[0]):t.resolve(o)},g=t=>t==1?"argument":"arguments",f=(t,s)=>function(m,...h){if(h.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${g(s.minArgs)} for ${t}(), got ${h.length}`);if(h.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${g(s.maxArgs)} for ${t}(), got ${h.length}`);return new Promise((b,w)=>{if(s.fallbackToNoCallback)try{m[t](...h,x({resolve:b,reject:w},s))}catch(a){console.warn(`${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),m[t](...h),s.fallbackToNoCallback=!1,s.noCallback=!0,b()}else s.noCallback?(m[t](...h),b()):m[t](...h,x({resolve:b,reject:w},s))})},l=(t,s,o)=>new Proxy(s,{apply(m,h,b){return o.call(h,t,...b)}}),u=Function.call.bind(Object.prototype.hasOwnProperty),c=(t,s={},o={})=>{let m=Object.create(null),h={has(w,a){return a in t||a in m},get(w,a,y){if(a in m)return m[a];if(!(a in t))return;let p=t[a];if(typeof p=="function")if(typeof s[a]=="function")p=l(t,t[a],s[a]);else if(u(o,a)){let B=f(a,o[a]);p=l(t,t[a],B)}else p=p.bind(t);else if(typeof p=="object"&&p!==null&&(u(s,a)||u(o,a)))p=c(p,s[a],o[a]);else if(u(o,"*"))p=c(p,s[a],o["*"]);else return Object.defineProperty(m,a,{configurable:!0,enumerable:!0,get(){return t[a]},set(B){t[a]=B}}),p;return m[a]=p,p},set(w,a,y,p){return a in m?m[a]=y:t[a]=y,!0},defineProperty(w,a,y){return Reflect.defineProperty(m,a,y)},deleteProperty(w,a){return Reflect.deleteProperty(m,a)}},b=Object.create(t);return new Proxy(b,h)},_=t=>({addListener(s,o,...m){s.addListener(t.get(o),...m)},hasListener(s,o){return s.hasListener(t.get(o))},removeListener(s,o){s.removeListener(t.get(o))}}),A=!1,L=new d(t=>typeof t!="function"?t:function(o,m,h){let b=!1,w,a=new Promise(W=>{w=function(C){A||(console.warn(k,new Error().stack),A=!0),b=!0,W(C)}}),y;try{y=t(o,m,w)}catch(W){y=Promise.reject(W)}let p=y!==!0&&n(y);if(y!==!0&&!p&&!b)return!1;let B=W=>{W.then(C=>{h(C)},C=>{let U;C&&(C instanceof Error||typeof C.message=="string")?U=C.message:U="An unexpected error occurred",h({__mozWebExtensionPolyfillReject__:!0,message:U})}).catch(C=>{console.error("Failed to send onMessage rejected reply",C)})};return B(p?y:a),!0}),R=({reject:t,resolve:s},o)=>{M.runtime.lastError?M.runtime.lastError.message===r?s():t(M.runtime.lastError):o&&o.__mozWebExtensionPolyfillReject__?t(new Error(o.message)):s(o)},D=(t,s,o,...m)=>{if(m.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${g(s.minArgs)} for ${t}(), got ${m.length}`);if(m.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${g(s.maxArgs)} for ${t}(), got ${m.length}`);return new Promise((h,b)=>{let w=R.bind(null,{resolve:h,reject:b});m.push(w),o.sendMessage(...m)})},E={runtime:{onMessage:_(L),onMessageExternal:_(L),sendMessage:D.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:D.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},O={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return N.privacy={network:{"*":O},services:{"*":O},websites:{"*":O}},c(M,E,N)};if(typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=P(chrome)}else e.exports=browser})});var i=Y(j());var ae=Y(j()),T=(e,r)=>e.classList.add(r),I=(e,r)=>e.classList.remove(r),V=(e,r)=>e.classList.contains(r),v=(e,r)=>document.getElementById(e).textContent=r;var G="UPDATE_POPUP_MODE_SWITCHER",Z="UPDATE_OPTIONS_MODE_SWITCHER",$="LOCK_POPUP_MODE_SWITCHER",K="UNLOCK_POPUP_MODE_SWITCHER";var J=()=>({type:Z});var S={READY:"ready",GROWING:"growing",GROWN:"grown",FAILED:"failed"};var q=!1;(function(){"use strict";let e=i.default.extension.getBackgroundPage();var r,k=function(d){for(var n=document.getElementById("edit-tag");n.options.length>0;)n.remove(0);d()},P=async()=>{let d=await i.default.storage.local.get({planting:null,grownTree:null});var n,x,g,f=document.getElementById("edit-tag");if(e.currentState==S.GROWING&&d.planting!=null){n=d.planting,x=n.plant.tag,g=n.plant.note;var l=r.findIndex(c=>c.tag_id==parseInt(x));l==-1&&(l=0),f.selectedIndex=l;var u=document.getElementById("edit-note");u.value=g}else if(e.currentState==S.GROWN&&d.grownTree!=null&&d.grownTree.length!=0){n=d.grownTree[0],x=n.plant.tag,g=n.plant.note;var l=r.findIndex(A=>A.tag_id==parseInt(x));l==-1&&(l=0),f.selectedIndex=l;var u=document.getElementById("edit-note");u.value=g}else if(e.currentState==S.FAILED&&d.grownTree!=null&&d.grownTree.length!=0){n=d.grownTree[0],x=n.plant.tag,g=n.plant.note;var l=r.findIndex(A=>A.tag_id==parseInt(x));l==-1&&(l=0),f.selectedIndex=l;var u=document.getElementById("edit-note");u.value=g}};let M=async()=>{let[d]=await i.default.tabs.query({active:!0,lastFocusedWindow:!0}),n=e.getIsWhitelistMode();if(document.getElementById("add-to-blacklist-icon").classList.remove("hidden"),n&&e.isWhitelisted(d)){document.getElementById("add-to-blacklist-icon").classList.add("hidden");return}if(!n&&e.isBlacklisted(d)){document.getElementById("add-to-blacklist-icon").classList.add("hidden");return}};function N(){let d=i.default.i18n.getMessage("extension_cannot_edit"),n=i.default.i18n.getMessage("extension_blacklist_mode"),x=i.default.i18n.getMessage("extension_whitelist_mode");console.log(x);let g=i.default.i18n.getMessage("extension_blacklist_mode_hover"),f=i.default.i18n.getMessage("extension_whitelist_mode_hover"),l=i.default.i18n.getMessage("main_add_whitelist_tooltip"),u=i.default.i18n.getMessage("main_add_blacklist_tooltip"),c=document.querySelector("#mode-switcher-text"),_=e.getIsWhitelistMode();c.textContent=_?x:n;let A=document.querySelector(".mode-hint");A.textContent=_?f:g;let L=document.querySelector("#main_add_blacklist_tooltip"),R=()=>{if(e.currentState===S.GROWING)return;let E=!e.getIsWhitelistMode();c.textContent=E?x:n,A.textContent=E?f:g,L.textContent=E?l:u,e.setWhitelistMode(E),i.default.storage.local.set({isWhitelistMode:E}),i.default.runtime.sendMessage(J()),M()};c.addEventListener("click",R);let D=({type:E,payload:O})=>{if(E===G)O==="white"?(c.textContent=x,A.textContent=f):(c.textContent=n,A.textContent=g);else if(E===$)c.classList.add("disabled"),A.textContent=d;else if(E===K){c.classList.remove("disabled");let t=O;t==="white"&&(A.textContent=f),t==="black"&&(A.textContent=g)}};i.default.runtime.onMessage.addListener(D),v("main_settings_tooltip",i.default.i18n.getMessage("main_settings_tooltip")),v("main_add_blacklist_tooltip",e.getIsWhitelistMode()?i.default.i18n.getMessage("main_add_whitelist_tooltip"):i.default.i18n.getMessage("main_add_blacklist_tooltip")),v("finish-message-for-user",i.default.i18n.getMessage("main_grown_popup_user_reward_pre")),v("finish-message-for-guest-text-pre",i.default.i18n.getMessage("main_grown_popup_guest_info_pre")),v("finish-message-for-guest-link",i.default.i18n.getMessage("main_grown_popup_guest_info_link")),v("finish-message-for-guest-text-post",i.default.i18n.getMessage("main_grown_popup_guest_info_post")),v("do-not-show-finish-message-text",i.default.i18n.getMessage("main_grown_popup_guest_do_not_show_again")),v("main_edit_tooltip",i.default.i18n.getMessage("main_edit_tooltip")),v("edit-btn",i.default.i18n.getMessage("main_edit_popup_btn")),v("edit-cancel",i.default.i18n.getMessage("main_edit_popup_cancel")),e.updateUI(),M(),k(async()=>{let E=await i.default.storage.local.get({tag:null,DefaultTAG:null});var O=document.getElementById("edit-tag"),t;r=E.tag,r==null&&(r=E.DefaultTAG);for(var s in r)t=document.createElement("OPTION"),t.value=r[s].title,t.textContent=r[s].title,O.appendChild(t)})}window.addEventListener("click",({target:d})=>{let{id:n}=d;if((n==="treeball"||n==="plant-board"||n==="plant-board-text"||n==="seed"||n==="tree")&&e.startTimer(!1),(n==="twitterBtn"||n==="fbBtn")&&e.clickShareButton(n),n==="back-icon"&&e.clickShareButton("backBtn"),n==="add-to-blacklist-icon"&&V(d,"buttons")){(async()=>{let[f]=await i.default.tabs.query({active:!0,lastFocusedWindow:!0});var l=document.createElement("a");l.href=f.url;var u=l.hostname;if(u!=null)if(e.getIsWhitelistMode()){var c=(await i.default.storage.local.get({whiteList:e.getDefaultWhitelist()})).whiteList;for(var _ in c)if(c[_].indexOf(u)>=0)return;c.splice(0,0,u),e.setWhitelist(c),i.default.storage.local.set({whiteList:c})}else{var A=(await i.default.storage.local.get({blackList:e.getDefaultBlacklist()})).blackList;for(var _ in A)if(A[_].indexOf(u)>=0)return;A.splice(0,0,u),e.setBlacklist(A),i.default.storage.local.set({blackList:A})}})();let g=document.getElementById("add-to-blacklist-icon");I(g,"buttons"),setTimeout(function(){T(g,"convergeToPoint"),setTimeout(function(){T(g,"checked"),I(g,"convergeToPoint"),setTimeout(function(){T(g,"convergeToPoint"),setTimeout(function(){T(g,"hidden"),I(g,"checked"),I(g,"convergeToPoint"),T(g,"buttons")},200)},500)},200)},100),i.default.storage.local.get({user:null})}if(n=="setting-icon"&&(I(document.getElementById("setting-mask"),"disappear"),setTimeout(()=>i.default.runtime.openOptionsPage(),100)),(n=="edit-icon"||n=="editBtn")&&(P(),I(document.getElementById("edit-mask"),"hidden"),I(document.getElementById("edit-popup"),"hidden"),T(document.getElementById("edit-mask"),"edit-masked"),window.setTimeout(()=>I(document.getElementById("edit-popup"),"edit-popup-shrink"),200),window.setTimeout(()=>T(document.getElementById("edit-mask"),"edit-masked"),200)),n=="edit-btn"&&(async()=>{let g=await i.default.storage.local.get({planting:null,grownTree:null});var f=g.planting,l=g.grownTree,u=document.getElementById("edit-tag").value,c=document.getElementById("edit-note").value,_=r.findIndex(function(A){return A.title==u});e.currentState==S.GROWING?f!=null&&(f.plant.tag=parseInt(r[_].tag_id),e.saveLastTreeTagId(parseInt(r[_].tag_id)),f.plant.note=c):(e.currentState==S.GROWN||e.currentState==S.FAILED)&&(l!=null||l.length!=0)&&(l[0].plant.tag=parseInt(r[_].tag_id),e.saveLastTreeTagId(parseInt(r[_].tag_id)),l[0].plant.note=c,l[0].syncState="WaitForSync"),await i.default.storage.local.set({planting:f,grownTree:l}),T(document.getElementById("edit-popup"),"edit-popup-shrink"),I(document.getElementById("edit-mask"),"edit-masked"),window.setTimeout(()=>{T(document.getElementById("edit-mask"),"hidden"),T(document.getElementById("edit-popup"),"hidden")},300)})(),n=="edit-cancel"&&(T(document.getElementById("edit-popup"),"edit-popup-shrink"),I(document.getElementById("edit-mask"),"edit-masked"),window.setTimeout(function(){T(document.getElementById("edit-mask"),"hidden"),T(document.getElementById("edit-popup"),"hidden")},300)),n=="timer-left-arrow"&&(e.adjustPlantTime(1),i.default.storage.local.get({user:null})),n=="timer-right-arrow"&&(e.adjustPlantTime(-1),i.default.storage.local.get({user:null})),n=="treeball-left-arrow"&&(e.adjustCurrentTree(1),i.default.storage.local.get({user:null})),n=="treeball-right-arrow"&&(e.adjustCurrentTree(-1),i.default.storage.local.get({user:null})),n=="confirm-btn"){var x=document.getElementById("do-not-show-finish-message").checked;e.onClickFinishConfirmedButton(x)}},!1),window.addEventListener("wheel",({target:d})=>{let{id:n}=d;if(!(n==="treeball"||n==="plant-board"||n==="plant-board-text")&&!q){q=!0,setTimeout(()=>q=!1,50);var x=event.deltaY>0?1:event.deltaY<0?-1:0;e.adjustPlantTime(x)}},!1),window.addEventListener("contextmenu",d=>(d.preventDefault(),!1),!0),window.onload=N})();})();
