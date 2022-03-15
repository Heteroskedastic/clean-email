(function(){"use strict";var e={9368:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"","clipped-right":"",flat:"",height:"72"}},[n("v-spacer"),n("v-responsive",{attrs:{"max-width":"156"}},[n("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1)],1),n("v-navigation-drawer",{attrs:{app:"",width:"300"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-navigation-drawer",{attrs:{absolute:"",color:"grey lighten-3","mini-variant":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-avatar",{staticClass:"d-block text-center mx-auto mt-4",attrs:{title:e.Userinfo_getters.email,size:"36"}},[n("v-img",{attrs:{src:e.Userinfo_getters.social.extra_data.picture}})],1),n("v-divider",{staticClass:"mx-3 my-5"})],1),n("v-list",{staticClass:"pl-14",attrs:{shaped:""}},e._l(e.Lables_getters,(function(t){return n("v-list-item",{key:t.id,attrs:{link:""}},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""}},[n("v-list")],1),n("v-main",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v(" Mails ")])])]),n("tbody",e._l(e.messages,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.snippet))])])})),0)]},proxy:!0}])})],1)],1)},i=[],s=n(4367),a=n(629),u={computed:(0,s.Z)({},(0,a.Se)("user__store",["Userinfo_getters","Lables_getters"])),methods:(0,s.Z)({},(0,a.nv)("user__store",["GET_USER_API","GET_LABLES_API","GET_MESSAGE_API"]))},c={mixins:[u],name:"App",mounted:function(){var e=this;this.GET_USER_API(),this.GET_LABLES_API(),this.GET_MESSAGE_API().then((function(t){console.log(t),e.messages=t.data}))},data:function(){return{drawer:null,messages:[]}}},l=c,f=n(1001),d=n(3453),v=n.n(d),p=n(7524),m=n(426),g=n(6370),h=n(1418),_=n(2829),b=n(6816),w=n(9737),Z=n(1311),y=n(7877),A=n(4216),E=n(3857),S=n(3568),k=n(3631),I=n(5351),P=(0,f.Z)(l,o,i,!1,null,null,null),U=P.exports;v()(P,{VApp:p.Z,VAppBar:m.Z,VAvatar:g.Z,VDivider:h.Z,VImg:_.Z,VList:b.Z,VListItem:w.Z,VListItemContent:Z.km,VListItemTitle:Z.V9,VMain:y.Z,VNavigationDrawer:A.Z,VResponsive:E.Z,VSimpleTable:S.Z,VSpacer:k.Z,VTextField:I.Z});var L=n(5205);(0,L.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n(8345),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" asd"+e._s(e.Userinfo_getters)+" ")])},V=[],C={mixins:[u],components:{}},G=C,O=(0,f.Z)(G,T,V,!1,null,null,null),j=O.exports;r.Z.use(x.Z);var M=[{path:"/",name:"home",component:j}],R=new x.Z({mode:"history",base:"/",routes:M}),B=R,F=(n(1539),n(7327),n(1249),n(4916),n(3123),n(3210),n(6755),n(9669)),N=n.n(F),$="https://cleaner.heteroskedastic.com/",q=N().create({baseURL:$,withCredentials:!0});function z(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}q.interceptors.request.use((function(e){var t=z("csrftoken");return e.headers["X-CSRFToken"]=t,e}));var D=q,W={Userinfo:{},Lables:[]},X={Userinfo_getters:function(e){return e.Userinfo},Lables_getters:function(e){return e.Lables}},H={GET_USER_API:function(e){var t=e.commit;return new Promise((function(e,n){D.get("UserAPI/").then((function(n){t("ChangeUserinfo_mutation",n.data),e(n)})).catch((function(e){n(e)}))}))},GET_LABLES_API:function(e){var t=e.commit;return new Promise((function(e,n){D.get("LablesAPI/").then((function(n){t("Lables_mutation",n.data),e(n)})).catch((function(e){n(e)}))}))},GET_MESSAGE_API:function(e){e.commit;return new Promise((function(e,t){D.get("MessageAPI/").then((function(t){e(t)})).catch((function(e){t(e)}))}))}},J={ChangeUserinfo_mutation:function(e,t){e.Userinfo=t},Lables_mutation:function(e,t){e.Lables=t}},K={namespaced:!0,state:W,getters:X,actions:H,mutations:J};r.Z.use(a.ZP);var Q=new a.ZP.Store({state:{UserInfo:null},getters:{GetUserInfo:function(e){return e.UserInfo}},mutations:{SetUserInfo:function(e,t){e.UserInfo=t}},actions:{},modules:{user__store:K}}),Y=n(858);r.Z.use(Y.Z);var ee=new Y.Z({});r.Z.config.productionTip=!1,new r.Z({router:B,store:Q,vuetify:ee,render:function(e){return e(U)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9368)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.663d4f37.js.map