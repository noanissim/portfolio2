(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22a9":function(e,t,n){e.exports=n.p+"img/nodejs.ceb2302c.png"},"2b68":function(e,t,n){e.exports=n.p+"img/jquery.d7b643d0.png"},"2e60":function(e,t,n){e.exports=n.p+"img/spacex1.87a8df3f.png"},"35ef":function(e,t,n){var a={"./appsus1.png":"9b89","./bitcoinAngular1.png":"54e3","./meme1.png":"4d23","./minesweeper1.png":"f7c7","./spacex1.png":"2e60","./trackero1.png":"586e"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="35ef"},"3c61":function(e,t,n){},"4d23":function(e,t,n){e.exports=n.p+"img/meme1.2bd396cf.png"},"54e3":function(e,t,n){e.exports=n.p+"img/bitcoinAngular1.7d355f8b.png"},"54fc":function(e,t,n){e.exports=n.p+"img/trello.8b9e6c85.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("app-header",{on:{scrollToMe:function(t){return e.handleScroll(t)}}}),n("router-view",{attrs:{link:this.link}})],1)],1)},r=[],s=n("1da1"),o=(n("9911"),n("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{staticClass:"app-header-nav",attrs:{fixed:"","elevate-on-scroll":""}},[a("img",{staticClass:"img-logo",attrs:{src:n("c0d1")},on:{click:function(t){return e.linkClicked("about")}}}),a("v-spacer"),e.isMobile?e._e():a("div",[a("v-btn",{attrs:{id:"about",text:""},on:{click:function(t){return e.linkClicked("about")}}},[a("span",{staticClass:"mr-2"},[e._v("Home")])]),a("v-btn",{attrs:{id:"projects",text:""},on:{click:function(t){return e.linkClicked("projects")}}},[a("span",{staticClass:"mr-2"},[e._v("Projects")])]),a("v-btn",{attrs:{id:"tech",text:""},on:{click:function(t){return e.linkClicked("tech")}}},[a("span",{staticClass:"mr-2"},[e._v("Tech")])]),a("v-btn",{attrs:{id:"contact",text:""},on:{click:function(t){return e.linkClicked("contact")}}},[a("span",{staticClass:"mr-2"},[e._v("Contact")])]),a("v-btn",{attrs:{id:"cv",text:""},on:{click:function(t){return e.linkClicked("cv")}}},[a("span",{staticClass:"mr-2"},[e._v("CV")])])],1),e.isMobile?a("v-menu",{attrs:{left:"",bottom:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",i,!1),n),[a("v-app-bar-nav-icon")],1)]}}],null,!1,559864238)},[a("v-list",e._l(e.navLinks,(function(t,n){return a("v-list-item",{key:n,on:{click:function(n){return e.linkClicked(t.link)}}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1):e._e()],1)],1)}),c=[],l={name:"appHeader",components:{},data:function(){return{isMobile:!1,navLinks:[{name:"Home",link:"about"},{name:"Projects",link:"projects"},{name:"Technologies",link:"tech"},{name:"Contact",link:"contact"},{name:"CV",link:"cv"}]}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{linkClicked:function(e){this.$emit("scrollToMe",e)},onResize:function(){this.isMobile=window.innerWidth<650}},computed:{}},u=l,p=n("2877"),d=n("6544"),m=n.n(d),h=n("40dc"),v=n("5bc1"),f=n("8336"),g=n("8860"),b=n("da13"),_=n("5d23"),k=n("e449"),x=n("2fa4"),w=Object(p["a"])(u,o,c,!1,null,null,null),j=w.exports;m()(w,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VList:g["a"],VListItem:b["a"],VListItemTitle:_["a"],VMenu:k["a"],VSpacer:x["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-section-main"},[n("about",{ref:"about",on:{btnClicked:function(t){return e.handleLink(t)}}}),n("projects",{ref:"projects"}),n("tech",{ref:"tech"}),n("contact",{ref:"contact"}),n("cv",{ref:"cv"}),n("appFooter",{ref:"appFooter"})],1)},y=[],O=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"blue darken-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",e._l(e.icons,(function(t,a){return n("v-btn",{key:t,staticClass:"mx-4 white--text",attrs:{target:"_blank",href:e.links[a],icon:""}},[n("v-icon",{attrs:{size:"24px"}},[e._v(" "+e._s(t)+" ")])],1)})),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Noa Nissim")])])],1)],1)}),z=[],M={name:"footerCmp",data:function(){return{icons:["mdi-facebook","mdi-linkedin","mdi-github"],links:["https://www.facebook.com/profile.php?id=100000469753848","https://www.linkedin.com/in/noanissim/","https://github.com/noanissim"]}}},S=M,V=n("b0af"),R=n("99d9"),T=n("ce7e"),A=n("553a"),E=n("132d"),$=Object(p["a"])(S,O,z,!1,null,null,null),N=$.exports;m()($,{VBtn:f["a"],VCard:V["a"],VCardText:R["b"],VDivider:T["a"],VFooter:A["a"],VIcon:E["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-section"},[n("div",{staticClass:"about-section-info"},[n("h1",[e._v("Noa Nissim.")]),e._m(0),n("v-btn",{staticClass:"btn",attrs:{elevation:"15","x-large":"",id:"tech",text:""},on:{click:e.btnClicked}},[n("span",{staticClass:"mr-2"},[e._v("View my work")])])],1)])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("span",[e._v("Fullstack web")]),e._v(" developer.")])}],L={methods:{btnClicked:function(){this.$emit("btnClicked","projects")}}},H=L,W=Object(p["a"])(H,P,I,!1,null,null,null),F=W.exports;m()(W,{VBtn:f["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return this.projects?n("div",{staticClass:"projects-section"},[n("h1",[e._v("Projects")]),n("project-list",{attrs:{projects:e.projects}})],1):e._e()},D=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{id:"project-list"}},e._l(e.projects,(function(e){return n("project-preview",{key:e._id,attrs:{project:e}})})),1)},B=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"project-preview-container mx-auto my-12",attrs:{loading:e.loading,"max-width":e.maxWidth}},[a("v-img",{attrs:{height:"250",src:n("35ef")("./"+this.project.imgUrl)}}),a("v-card-title",{staticClass:"project-title"},[e._v(e._s(e.project.name))]),a("v-card-text",[a("ul",{staticClass:"project-desc-ul"},e._l(e.project.desc,(function(t){return a("li",{key:t.id},[e._v(e._s(t.desc))])})),0)]),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",{staticClass:"project-title-actions"},[e._v("View the project")]),a("v-card-actions",{staticClass:"project-actions"},[a("v-btn",{attrs:{color:"blue lighten-2",text:""}},[a("a",{attrs:{href:e.project.links[0].link,target:"_blank"}},[e._v("Github")])]),a("v-btn",{attrs:{color:"blue lighten-2",text:""}},[a("a",{attrs:{href:e.project.links[1].link,target:"_blank"}},[e._v("Live")])])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("v-chip-group",{attrs:{column:"","active-class":"blue accent-2 white--text"},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},e._l(e.project.tools,(function(t,n){return a("v-chip",{key:n},[e._v(e._s(t))])})),1)],1)],1)},J=[],Y={props:{project:Object},data:function(){return{loading:!1,selection:0,maxWidth:null}},computed:{getImg:function(){var e="../assets/img/".concat(this.project.imgUrl);return e}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.maxWidth=window.innerWidth<400?window.innerWidth-30:374}}},Q=Y,X=n("cc20"),K=n("ef9a"),Z=n("adda"),ee=Object(p["a"])(Q,G,J,!1,null,null,null),te=ee.exports;m()(ee,{VBtn:f["a"],VCard:V["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VChip:X["a"],VChipGroup:K["a"],VDivider:T["a"],VImg:Z["a"]});var ne={props:{projects:Array},components:{projectPreview:te}},ae=ne,ie=Object(p["a"])(ae,q,B,!1,null,null,null),re=ie.exports,se={data:function(){return{projects:[]}},components:{projectList:re},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loadProjects");case 2:e.projects=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{}},oe=se,ce=Object(p["a"])(oe,U,D,!1,null,null,null),le=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.tech?n("div",{staticClass:"tech-section"},[n("h1",[e._v("Technologies")]),n("HorizontalCollapse")],1):e._e()},pe=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"js-horizontal-collapse horizontal-collapse"},[a("ul",{staticClass:"horizontal-collapse__inner"},[a("HorizontalCollapseItem",{attrs:{className:"horizontal-collapse__item--1"}},[a("div",{staticClass:"horizontal-collapse__inactive-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Frameworks")])]),a("div",{staticClass:"horizontal-collapse__active-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Frameworks")]),a("div",{staticClass:"horizontal-collapse__body"},[a("p",[e._v("React")]),a("v-img",{attrs:{height:"50",width:"50",src:n("9b8c")}}),a("p",[e._v("Angular 13")]),a("v-img",{attrs:{height:"80",width:"80",src:n("a5bf")}}),a("p",[e._v("Vue.js")]),a("v-img",{attrs:{height:"60",width:"60",src:n("c116")}}),a("p",[e._v("Node.js")]),a("v-img",{attrs:{height:"60",width:"60",src:n("22a9")}}),a("p",[e._v("jQuery")]),a("v-img",{attrs:{height:"60",width:"60",src:n("2b68")}})],1)])]),a("HorizontalCollapseItem",{attrs:{className:"horizontal-collapse__item--2"}},[a("div",{staticClass:"horizontal-collapse__inactive-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Languages")])]),a("div",{staticClass:"horizontal-collapse__active-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Languages")]),a("div",{staticClass:"horizontal-collapse__body"},[a("p",[e._v("Javascript")]),a("v-img",{attrs:{height:"50",width:"50",src:n("f7c1")}}),a("p",[e._v("Typescript")]),a("v-img",{attrs:{height:"50",width:"50",src:n("724e")}}),a("p",[e._v("Java")]),a("v-img",{attrs:{height:"50",width:"50",src:n("fd8c")}}),a("p",[e._v("HTML5")]),a("v-img",{attrs:{height:"50",width:"50",src:n("e919")}}),a("p",[e._v("CSS3")]),a("v-img",{attrs:{height:"50",width:"50",src:n("ab86")}}),a("p",[e._v("SCSS")]),a("v-img",{attrs:{contain:"",height:"50",width:"100",src:n("eefa")}})],1)])]),a("HorizontalCollapseItem",{attrs:{className:"horizontal-collapse__item--3"}},[a("div",{staticClass:"horizontal-collapse__inactive-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Programs")])]),a("div",{staticClass:"horizontal-collapse__active-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v("Programs")]),a("div",{staticClass:"horizontal-collapse__body"},[a("p",[e._v("VS Code")]),a("v-img",{attrs:{height:"50",width:"50",src:n("b433")}}),a("p",[e._v("Atom")]),a("v-img",{attrs:{height:"50",width:"50",src:n("f2e0")}}),a("p",[e._v("Trello")]),a("v-img",{attrs:{height:"50",width:"50",src:n("54fc")}}),a("p",[e._v("Azure Devops")]),a("v-img",{attrs:{height:"50",width:"50",src:n("d6f9")}}),a("p",[e._v("Microsoft products(Office-365, Excell...)")]),a("v-img",{attrs:{contain:"",height:"70",width:"120",src:n("82af")}}),a("p",[e._v("Eclipse")]),a("v-img",{attrs:{contain:"",height:"70",width:"120",src:n("5a3f")}})],1)])]),a("HorizontalCollapseItem",{attrs:{className:"horizontal-collapse__item--4"}},[a("div",{staticClass:"horizontal-collapse__inactive-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v(" Services & Databases ")])]),a("div",{staticClass:"horizontal-collapse__active-content"},[a("h2",{staticClass:"horizontal-collapse__heading"},[e._v(" Services & Databases ")]),a("div",{staticClass:"horizontal-collapse__body"},[a("p",[e._v("MongoDB")]),a("v-img",{attrs:{height:"70",width:"120",src:n("6330")}}),a("p",[e._v("Firebase")]),a("v-img",{attrs:{height:"70",width:"120",src:n("b514")}}),a("p",[e._v("Github")]),a("v-img",{attrs:{contain:"",height:"70",width:"70",src:n("a486")}}),a("p",[e._v("MySQL")]),a("v-img",{attrs:{contain:"",position:"center center",height:"70",width:"70",src:n("b539")}})],1)])])],1)])},me=[],he=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("li",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.away,expression:"away"}],staticClass:"js-horizontal-collapse-item horizontal-collapse__item",class:(e={"is-active":t.isActive},e[t.className]=!0,e),style:"width: "+(t.isActive?t.itemMaxWidth:t.itemMinWidth)+"px;min-width: "+t.itemMinWidth+"px;max-width: "+t.itemMaxWidth+"px;cursor:pointer;",attrs:{tabindex:"0",role:"button"},on:{click:function(e){t.isActive=!t.isActive}}},[a("div",{staticClass:"\n         js-horizontal-collapse-item-inner\n         horizontal-collapse__item-inner\n      ",style:"width: "+t.itemMaxWidth+"px;cursor:pointer;"},[t._t("default")],2)])},ve=[],fe=n("c7db"),ge={name:"HorizontalCollapseItem",mixins:[fe["mixin"]],props:["className"],data:function(){return{isActive:!1,itemMinWidth:100,itemMaxWidth:300}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{away:function(){this.isActive=!1},onResize:function(){this.itemMaxWidth=.35*window.innerWidth,this.itemMinWidth=.65*window.innerWidth/4}}},be=ge,_e=Object(p["a"])(be,he,ve,!1,null,null,null),ke=_e.exports,xe={name:"HorizontalCollapse",components:{HorizontalCollapseItem:ke}},we=xe,je=Object(p["a"])(we,de,me,!1,null,null,null),Ce=je.exports;m()(je,{VImg:Z["a"]});var ye={data:function(){return{tech:[]}},components:{HorizontalCollapse:Ce},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{}},Oe=ye,ze=Object(p["a"])(Oe,ue,pe,!1,null,null,null),Me=ze.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.contact?n("div",{staticClass:"contact-section"},[n("h1",[e._v("Contact Me!")]),n("h2",[e._v("Have a question or want to work together?")]),n("contact-form")],1):e._e()},Ve=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{staticClass:"form-section",attrs:{action:"https://formspree.io/f/xnqwjvaz",method:"POST"}},[n("validation-provider",{attrs:{name:"Name",rules:"required|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{counter:20,"error-messages":a,label:"Name",name:"user name:",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"phoneNumber",rules:{required:!1,digits:10,regex:"^(050|052|053|054|055)\\d{7}$"}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{counter:10,"error-messages":a,label:"Phone Number",name:"phone number"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{name:"_replyto","error-messages":a,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"Message",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{"error-messages":a,name:"message: ",label:"Your Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})]}}],null,!0)}),n("div",{staticClass:"btn-section"},[n("v-btn",{attrs:{type:"submit",disabled:a}},[e._v(" submit ")]),n("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)],1),n("v-snackbar",{attrs:{timeout:e.timeout,color:"green lighten-2",elevation:"24"},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}],null,!0),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])]}}])})},Te=[],Ae=n("5530"),Ee=n("4c93"),$e=n("7bb1");Object($e["d"])("eager"),Object($e["c"])("digits",Object(Ae["a"])(Object(Ae["a"])({},Ee["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object($e["c"])("required",Object(Ae["a"])(Object(Ae["a"])({},Ee["e"]),{},{message:"{_field_} can not be empty"})),Object($e["c"])("max",Object(Ae["a"])(Object(Ae["a"])({},Ee["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object($e["c"])("regex",Object(Ae["a"])(Object(Ae["a"])({},Ee["d"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object($e["c"])("email",Object(Ae["a"])(Object(Ae["a"])({},Ee["b"]),{},{message:"Email must be valid"}));var Ne={components:{ValidationProvider:$e["b"],ValidationObserver:$e["a"]},data:function(){return{name:"",phoneNumber:"",email:"",message:"",snackbar:!1,text:"Your message was sent. Thank you!",timeout:1e4}},created:function(){this.clear()},methods:{submit:function(){this.clear(),this.snackbar=!0},clear:function(){this.name="",this.phoneNumber="",this.email="",this.message=""}}},Pe=Ne,Ie=n("2db4"),Le=n("8654"),He=Object(p["a"])(Pe,Re,Te,!1,null,null,null),We=He.exports;m()(He,{VBtn:f["a"],VSnackbar:Ie["a"],VTextField:Le["a"]});var Fe={data:function(){return{contact:[]}},components:{contactForm:We}},Ue=Fe,De=Object(p["a"])(Ue,Se,Ve,!1,null,null,null),qe=De.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cv-section"},[n("h1",[e._v("Resume")]),n("h2",[e._v(" I'm currently seeking a position as a Front-End or Fullstack Developer ")]),n("router-link",{attrs:{to:"/resume"}},[n("v-btn",{staticClass:"btn",attrs:{elevation:"15","x-large":""}},[n("span",[e._v("Download cv")])])],1)],1)},Ge=[],Je={data:function(){return{}},components:{},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}},Ye=Je,Qe=Object(p["a"])(Ye,Be,Ge,!1,null,null,null),Xe=Qe.exports;m()(Qe,{VBtn:f["a"]});var Ke={name:"Home",props:["link"],components:{appFooter:N,about:F,projects:le,tech:Me,contact:qe,cv:Xe},created:function(){},methods:{handleLink:function(e){this.$vuetify.goTo(this.$refs[e],{duration:500,offset:50,easing:"easeInOutCubic"})}},watch:{"$route.name":{deep:!0,handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.$vuetify.goTo(e.$refs[e.$route.name],{duration:500,offset:50,easing:"easeInOutCubic"})}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})))()}}}},Ze=Ke,et=Object(p["a"])(Ze,C,y,!1,null,null,null),tt=et.exports,nt={name:"App",components:{appHeader:j,home:tt},data:function(){return{link:"",maxHeight:null}},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(e){this.link=e,this.$router.push(e)}}},at=nt,it=n("7496"),rt=n("f6c4"),st=Object(p["a"])(at,i,r,!1,null,null,null),ot=st.exports;m()(st,{VApp:it["a"],VMain:rt["a"]});var ct=n("f309");a["default"].use(ct["a"]);var lt=new ct["a"]({}),ut=(n("3c61"),n("8468")),pt=n("2f62"),dt={getProjects:vt,downloadCv:mt};function mt(){return ht.apply(this,arguments)}function ht(){return ht=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),ht.apply(this,arguments)}function vt(){return ft.apply(this,arguments)}function ft(){return ft=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,[{_id:gt(),name:"Trackero",imgUrl:"trackero1.png",links:[{name:"github",link:"https://github.com/noanissim/trackero-frontend"},{name:"live",link:"https://trackero.herokuapp.com/#/"}],desc:[{id:0,desc:"Trackero is an end-to-end fully functioning task managment web app based on trello. "},{id:1,desc:"The app supports personal task boards, allowing simple and organized task tracking."}],tools:["vue.js","Vuex","Node.js","Express.js","MongoDB","SCSS","Socket.io","Rest-api"]},{_id:gt(),name:"Appsus",imgUrl:"appsus1.png",links:[{name:"github",link:"https://github.com/noanissim/Appsus"},{name:"live",link:"https://noanissim.github.io/Appsus/#/"}],desc:[{id:0,desc:"Appsus is a dual frontend email and note keeping application. "},{id:1,desc:"The app includes integration between the emails and notes: Note can be sent as an email, and email can be saved as a note"},{id:2,desc:"Inspired by Gmail and Google-Keep."}],tools:["vue.js","Javascript","CSS3"]},{_id:gt(),name:"Mister-Bitcoin",imgUrl:"bitcoinAngular1.png",links:[{name:"github",link:"https://github.com/noanissim/mister-bitcoin-angular"},{name:"live",link:"https://noanissim.github.io/mister-bitcoin-angular/#/"}],desc:[{id:0,desc:"CRUD app for hold and transfer digital bitcoin coins to contacts. "},{id:1,desc:"Includes working with blockchain API and presenting data in charts."}],tools:["Angular","RXJS","SCSS","Rest-api","ngx-chart","Angular Material UI"]},{_id:gt(),name:"SpaceX",imgUrl:"spacex1.png",links:[{name:"github",link:"https://github.com/noanissim/mister-bitcoin-angular"},{name:"live",link:"https://noanissim.github.io/mister-bitcoin-angular/#/"}],desc:[{id:0,desc:"CRUD app for displaying space landings using external asynchronous API. "},{id:1,desc:"This app was part of a test and lasted only 5 hours."}],tools:["React","Redux-Thunk","Redux","SCSS","Rest-api","Material-UI","MUI"]},{_id:gt(),name:"Meme Generator",imgUrl:"meme1.png",links:[{name:"github",link:"https://github.com/noanissim/Meme-Generator"},{name:"live",link:"https://noanissim.github.io/Meme-Generator/"}],desc:[{id:0,desc:"This application is an online image maker that lets you add custom resizable text, stickers, and much more to templates, and share/download the final result to your device"},{id:1,desc:"People often use the generator to customize established memes, such as those found in Imgflip's collection of Meme Templates."}],tools:["Vanilla javascript","HTML5","CSS3"]},{_id:gt(),name:"Minesweeper",imgUrl:"minesweeper1.png",links:[{name:"github",link:"https://github.com/noanissim/Minesweeper"},{name:"live",link:"https://noanissim.github.io/Minesweeper/"}],desc:[{id:0,desc:'This application is a clone for the famous "Minesweeper" game, that was developed during the first sprint in Coding Academy bootcamp'},{id:1,desc:"Including all different levels, lives, hints and other features."},{id:2,desc:"The tiles exposing is carried out using recursion"}],tools:["Vanilla javascript","HTML5","CSS3"]}];case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ft.apply(this,arguments)}function gt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}a["default"].use(pt["a"]);var bt=new pt["a"].Store({state:{projects:null},getters:{},mutations:{setProjects:function(e,t){var n=t.projects;e.projects=n}},actions:{loadProjects:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,dt.getProjects();case 4:return a=t.sent,n({type:"setProjects",projects:a}),t.abrupt("return",a);case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},ownloadCv:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(ut["a"])(e),t.prev=1,console.log("here download"),t.next=5,dt.getProjects();case 5:return n=t.sent,t.abrupt("return",n);case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}}),_t=n("8c4f"),kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume-section"},[n("h1",[e._v("Resume")]),n("iframe",{attrs:{width:"500",height:"750",id:"pdf-iframe",src:e.pdfLink}})])},xt=[],wt={name:"resume",data:function(){return{pdfLink:"./cv.pdf"}},created:function(){},methods:{}},jt=wt,Ct=Object(p["a"])(jt,kt,xt,!1,null,null,null),yt=Ct.exports;a["default"].use(_t["a"]);var Ot=[{path:"/",name:"home",component:tt,children:[{path:"about",name:"about",component:F},{path:"projects",name:"projects",component:le},{path:"contact",name:"contact",component:qe},{path:"app-footer",name:"appFooter",component:N},{path:"tech",name:"tech",component:Me},{path:"cv",name:"cv",component:Xe}]},{path:"/resume",name:"resume",component:yt}],zt=new _t["a"]({routes:Ot}),Mt=zt,St=n("e027"),Vt=n.n(St);a["default"].component("vue-pdf-app",Vt.a),a["default"].config.productionTip=!1,new a["default"]({vuetify:lt,store:bt,router:Mt,render:function(e){return e(ot)}}).$mount("#app")},"586e":function(e,t,n){e.exports=n.p+"img/trackero1.ebef987b.png"},"5a3f":function(e,t,n){e.exports=n.p+"img/eclipse.aab74872.png"},6330:function(e,t,n){e.exports=n.p+"img/mongodb1.44af2edb.png"},"724e":function(e,t,n){e.exports=n.p+"img/typescript.b98fb238.png"},"82af":function(e,t,n){e.exports=n.p+"img/office.a19e8c8b.png"},"9b89":function(e,t,n){e.exports=n.p+"img/appsus1.d59f8dd7.png"},"9b8c":function(e,t,n){e.exports=n.p+"img/react.70f87bba.png"},a486:function(e,t,n){e.exports=n.p+"img/github.47afb6a7.png"},a5bf:function(e,t,n){e.exports=n.p+"img/angular.941b2532.png"},ab86:function(e,t,n){e.exports=n.p+"img/css.f07f717c.png"},b433:function(e,t,n){e.exports=n.p+"img/vscode.6e285d2a.png"},b514:function(e,t,n){e.exports=n.p+"img/firebase.8fe62774.png"},b539:function(e,t,n){e.exports=n.p+"img/mysql.3ad988d7.png"},c0d1:function(e,t,n){e.exports=n.p+"img/logo6.8adea3d0.png"},c116:function(e,t,n){e.exports=n.p+"img/vue.af0869d3.png"},d6f9:function(e,t,n){e.exports=n.p+"img/azure.5548050a.png"},e919:function(e,t,n){e.exports=n.p+"img/html.c3b8052b.png"},eefa:function(e,t,n){e.exports=n.p+"img/scss.0f54ea45.png"},f2e0:function(e,t,n){e.exports=n.p+"img/atom.8a462772.png"},f7c1:function(e,t,n){e.exports=n.p+"img/javascript.872234c4.png"},f7c7:function(e,t,n){e.exports=n.p+"img/minesweeper1.8f53e27a.png"},fd8c:function(e,t,n){e.exports=n.p+"img/java.613ee593.png"}});
//# sourceMappingURL=app.7e42c408.js.map