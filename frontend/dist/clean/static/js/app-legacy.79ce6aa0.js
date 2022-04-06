(function(){"use strict";var t={7894:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("NavigationDrawer"),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",permanent:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("UserName"),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.view}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text)+" "),t.getProfile_getters&&t.getProfile_getters.messagesTotal?[n("span",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(t.getProfile_getters.messagesTotal))])]:t._e()],2)],1)],1)})),1)],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getters_loader?n("v-skeleton-loader",{attrs:{type:"list-item-avatar"}}):t.is_username?n("v-list-item",[n("v-list-item-avatar",[n("UserAvatar")],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.getters_userinfo.social.extra_data.name)+" ")]),n("v-list-item-subtitle",[t._v(t._s(t.getters_userinfo.social.extra_data.email))])],1),n("v-list-item-action",{attrs:{title:"Logout"}},[n("v-icon",{attrs:{color:"primary"},on:{click:t.logout}},[t._v("mdi-logout")])],1)],1):n("b",[t._v("No User Found")])},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getters_loader?n("v-skeleton-loader",{attrs:{type:"avatar"}}):t.is_avatar?n("v-img",{attrs:{size:"20",title:"avatar",src:t.getters_userinfo.social.extra_data.picture}}):n("v-img")},m=[],f=n(4367),v=(n(8309),n(629)),d={computed:(0,f.Z)((0,f.Z)({},(0,v.Se)("user__store",["getters_userinfo","getters_loader"])),{},{is_avatar:function(){return!!(this.getters_userinfo&&this.getters_userinfo.social&&this.getters_userinfo.social.extra_data&&this.getters_userinfo.social.extra_data.picture)},is_username:function(){return!!(this.getters_userinfo&&this.getters_userinfo.social&&this.getters_userinfo.social.extra_data&&this.getters_userinfo.social.extra_data.name)}}),methods:(0,f.Z)({},(0,v.nv)("user__store",["GET_USER_API","GET_LABLES_API","GET_MESSAGE_API","GET_getProfile_API","GET_FULLMESSAGE_API"]))},_={mixins:[d]},g=_,p=n(1001),h=n(3453),b=n.n(h),Z=n(7047),x=n(2177),E=(0,p.Z)(g,c,m,!1,null,null,null),I=E.exports;b()(E,{VImg:Z.Z,VSkeletonLoader:x.Z});var w={components:{UserAvatar:I},mixins:[d],methods:{logout:function(){console.log("Logout")}}},V=w,S=n(24),y=n(5405),P=n(3099),L=n(5457),A=n(599),k=(0,p.Z)(V,l,u,!1,null,null,null),T=k.exports;b()(k,{VIcon:S.Z,VListItem:y.Z,VListItemAction:P.Z,VListItemAvatar:L.Z,VListItemContent:A.km,VListItemSubtitle:A.oZ,VListItemTitle:A.V9,VSkeletonLoader:x.Z});var C={components:{UserName:T},data:function(){return{drawer:!0,selectedItem:0,items:[{text:"Inbox",icon:"mdi-inbox",view:"/view/inboxEmails"}]}}},G=C,U=n(1418),M=n(6816),R=n(6651),j=n(459),F=n(2549),O=(0,p.Z)(G,s,a,!1,null,null,null),$=O.exports;b()(O,{VDivider:U.Z,VIcon:S.Z,VList:M.Z,VListItem:y.Z,VListItemContent:A.km,VListItemGroup:R.Z,VListItemIcon:j.Z,VListItemTitle:A.V9,VNavigationDrawer:F.Z});var N={components:{NavigationDrawer:$},mixins:[d],name:"App",mounted:function(){this.GET_USER_API()},data:function(){return{}}},B=N,D=n(7524),q=n(247),z=n(7877),H=(0,p.Z)(B,i,o,!1,null,null,null),Q=H.exports;b()(H,{VApp:D.Z,VContainer:q.Z,VMain:z.Z});var W=n(5205);(0,W.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var X=n(8345),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.is_username?n("v-card",{staticClass:"ma-10",attrs:{elevation:"0"}},[n("v-card-title",[t._v(" "+t._s(t.getters_userinfo.social.extra_data.name)+", ")]),n("v-card-subtitle",[t._v(" Where would you like to start today? ")]),n("v-card-text",[n("DasboardStart")],1)],1):t._e()],1)},K=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.steps,(function(e){return n("v-col",{key:e,attrs:{cols:"12",sm:"3"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var i=r.hover;return[n("v-card",{staticClass:"mx-auto",class:{"on-hover":i},attrs:{elevation:i?20:3,height:"250","max-width":"350"},on:{click:function(n){return t.$router.push({name:e.route})}}},[n("v-card-text",{staticClass:"font-weight-medium mt-12 text-center text-subtitle-1"},[n("v-icon",{attrs:{color:e.color,large:""}},[t._v(t._s(e.icon)+" ")]),n("h3",{staticClass:"mt-2"},[t._v(t._s(e.title))]),n("div",{staticClass:"mt-2 text-caption"},[t._v(" "+t._s(e.caption)+" ")])],1)],1)]}}],null,!0)})],1)})),1)},tt=[],et={data:function(){return{steps:[{icon:"mdi-email-remove",color:"primary",title:"Quick Clean",caption:"Delete and archives lots of email , quickly."},{icon:"mdi-email-minus",color:"red",title:"Unsubscriber",caption:"Stops unwanted mail from mailing lists."},{icon:"mdi-inbox",color:"primary",title:"Inbox",caption:"Review and clean emails in your Inbox",route:"inboxEmails"}]}},methods:{navigate:function(){}}},nt=et,rt=n(3769),it=n(7118),ot=n(2102),st=n(43),at=n(2877),lt=(0,p.Z)(nt,Y,tt,!1,null,"68f9b69c",null),ut=lt.exports;b()(lt,{VCard:rt.Z,VCardText:it.ZB,VCol:ot.Z,VHover:st.Z,VIcon:S.Z,VRow:at.Z});var ct={components:{DasboardStart:ut},mixins:[d]},mt=ct,ft=(0,p.Z)(mt,J,K,!1,null,null,null),vt=ft.exports;b()(ft,{VCard:rt.Z,VCardSubtitle:it.Qq,VCardText:it.ZB,VCardTitle:it.EB});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("h2",[t._v("Inbox")])]),n("v-col",{attrs:{cols:"12",sm:"12"}}),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("EmailReaderVue")],1)],1)],1)},_t=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-simple-table",{attrs:{height:"600px"},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-card",{attrs:{elevation:"0"}},[n("v-list",{attrs:{"two-line":""}},[n("v-list-item-group",{attrs:{"active-class":"pink--text"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.message_getters,(function(e,r){return[n("v-list-item",{key:e.id,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.active;return[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.payload.headers.filter((function(t){return"From"==t.name}))[0].value.length<=30?e.payload.headers.filter((function(t){return"From"==t.name}))[0].value:e.payload.headers.filter((function(t){return"From"==t.name}))[0].value.slice(0,30)+"...")+" ")]),n("v-list-item-subtitle",{staticClass:"text--primary"},[t._v(" "+t._s(e.payload.headers.filter((function(t){return"Subject"==t.name}))[0].value.length<=30?e.payload.headers.filter((function(t){return"Subject"==t.name}))[0].value:e.payload.headers.filter((function(t){return"Subject"==t.name}))[0].value.slice(0,30)+"...")+" ")]),n("v-list-item-subtitle",[t._v(" "+t._s(e.snippet.length<=30?e.snippet:e.snippet.slice(0,30)+"..."))])],1),n("v-list-item-action",[i?t._e():n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v(" mdi-star-outline ")])],1)]}}],null,!0)}),r<t.items.length-1?n("v-divider",{key:r}):t._e()]}))],2)],1)],1)]},proxy:!0}])})],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[t.selected?n("v-card",{attrs:{color:"grey",elevation:"0"}},[n("v-card-text",[n("v-simple-table",{attrs:{height:"550px"},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-card",{attrs:{elevation:"0"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v(" "+t._s(t.selected.payload.headers.filter((function(t){return"From"==t.name}))[0].value)+" ")]),n("v-list-item-subtitle",[t._v(" To: "+t._s(t.selected.payload.headers.filter((function(t){return"To"==t.name}))[0].value)+" ")])],1)],1),n("v-divider"),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v(" "+t._s(t.selected.payload.headers.filter((function(t){return"Subject"==t.name}))[0].value)+" ")])],1)],1),n("v-card-text",[t.loader?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t.full_message?n("span",{domProps:{innerHTML:t._s(t.full_message)}}):n("span",[t._v(t._s(t.selected.snippet))])])],1)]},proxy:!0}],null,!1,2269798416)})],1)],1):t._e()],1)],1)},pt=[],ht={computed:(0,f.Z)({},(0,v.Se)("store_gmail",["Lables_getters","getProfile_getters","message_getters"])),methods:(0,f.Z)({},(0,v.nv)("store_gmail",["GET_USER_API","GET_LABLES_API","GET_MESSAGE_API","GET_getProfile_API","GET_FULLMESSAGE_API"]))},bt={mixins:[ht],mounted:function(){this.GET_MESSAGE_API()},data:function(){return{selected:null,items:[],full_message:null,loader:!1}},watch:{selected:function(t){this.full_message=null,this.get_full_message(t)}},methods:{get_full_message:function(t){var e=this;this.loader=!0,this.GET_FULLMESSAGE_API("?message_id="+t.id).then((function(t){console.log(t),e.full_message=t.data,e.loader=!1})).catch((function(){e.full_message=null,e.loader=!1}))}}},Zt=bt,xt=n(624),Et=n(3568),It=(0,p.Z)(Zt,gt,pt,!1,null,null,null),wt=It.exports;b()(It,{VCard:rt.Z,VCardText:it.ZB,VCol:ot.Z,VDivider:U.Z,VIcon:S.Z,VList:M.Z,VListItem:y.Z,VListItemAction:P.Z,VListItemContent:A.km,VListItemGroup:R.Z,VListItemSubtitle:A.oZ,VListItemTitle:A.V9,VProgressCircular:xt.Z,VRow:at.Z,VSimpleTable:Et.Z});var Vt={components:{EmailReaderVue:wt}},St=Vt,yt=(0,p.Z)(St,dt,_t,!1,null,null,null),Pt=yt.exports;b()(yt,{VCol:ot.Z,VRow:at.Z}),r.Z.use(X.Z);var Lt=[{path:"/",name:"home",component:vt},{path:"/view/inboxEmails",name:"inboxEmails",component:Pt}],At=new X.Z({base:"/",routes:Lt}),kt=At,Tt=(n(1539),n(7327),n(1249),n(4916),n(3123),n(3210),n(6755),n(9669)),Ct=n.n(Tt),Gt="https://cleaner.heteroskedastic.com/",Ut=Ct().create({baseURL:Gt,withCredentials:!0});function Mt(t){if(!document.cookie)return null;var e=document.cookie.split(";").map((function(t){return t.trim()})).filter((function(e){return e.startsWith(t+"=")}));return 0===e.length?null:decodeURIComponent(e[0].split("=")[1])}Ut.interceptors.request.use((function(t){var e=Mt("csrftoken");return t.headers["X-CSRFToken"]=e,t}));var Rt=Ut,jt={userinfo:{},loader:!1},Ft={getters_userinfo:function(t){return t.userinfo},getters_loader:function(t){return t.loader}},Ot={GET_USER_API:function(t){var e=t.commit;return e("mutation_loader",!0),new Promise((function(t,n){Rt.get("user/").then((function(n){e("mutation_userinfo",n.data),e("mutation_loader",!1),t(n)})).catch((function(t){n(t)}))}))}},$t={mutation_userinfo:function(t,e){t.userinfo=e},mutation_loader:function(t,e){t.loader=e}},Nt={namespaced:!0,state:jt,getters:Ft,actions:Ot,mutations:$t},Bt={Userinfo:{},Lables:[],getProfile:{},message:{}},Dt={Userinfo_getters:function(t){return t.Userinfo},Lables_getters:function(t){return t.Lables},getProfile_getters:function(t){return t.getProfile},message_getters:function(t){return t.message}},qt={GET_USER_API:function(t){var e=t.commit;return new Promise((function(t,n){Rt.get("UserAPI/").then((function(n){e("ChangeUserinfo_mutation",n.data),t(n)})).catch((function(t){n(t)}))}))},GET_LABLES_API:function(t){var e=t.commit;return new Promise((function(t,n){Rt.get("LablesAPI/").then((function(n){e("Lables_mutation",n.data),t(n)})).catch((function(t){n(t)}))}))},GET_getProfile_API:function(t){var e=t.commit;return new Promise((function(t,n){Rt.get("api/gmail/getProfile/").then((function(n){e("getProfile_mutation",n.data),t(n)})).catch((function(t){n(t)}))}))},GET_MESSAGE_API:function(t){var e=t.commit;return new Promise((function(t,n){Rt.get("api/gmail/message/").then((function(n){e("message_mutation",n.data),t(n)})).catch((function(t){n(t)}))}))},GET_FULLMESSAGE_API:function(t,e){t.commit;return new Promise((function(t,n){Rt.get("api/gmail/fullMessage/"+e).then((function(e){t(e)})).catch((function(t){n(t)}))}))}},zt={ChangeUserinfo_mutation:function(t,e){t.Userinfo=e},Lables_mutation:function(t,e){t.Lables=e},getProfile_mutation:function(t,e){t.getProfile=e},message_mutation:function(t,e){t.message=e}},Ht={namespaced:!0,state:Bt,getters:Dt,actions:qt,mutations:zt};r.Z.use(v.ZP);var Qt=new v.ZP.Store({state:{UserInfo:null},getters:{GetUserInfo:function(t){return t.UserInfo}},mutations:{SetUserInfo:function(t,e){t.UserInfo=e}},actions:{},modules:{user__store:Nt,store_gmail:Ht}}),Wt=n(5591);r.Z.use(Wt.Z);var Xt=new Wt.Z({});r.Z.config.productionTip=!1,new r.Z({router:kt,store:Qt,vuetify:Xt,render:function(t){return t(Q)}}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7894)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.79ce6aa0.js.map