(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/l/X":function(t,e,i){"use strict";i.r(e);var n=i("KQm4"),r=i("HaE+"),a=(i("ls82"),i("QWBl"),i("07d7"),i("FZtP"),i("ma9I"),i("YGK4"),i("PKPk"),i("3bBZ"),i("2B1R"),i("TeQF"),i("pDQq"),i("pNMO"),i("4Brf"),i("gpus")),o=i("X4uV"),s=i("4hLg"),c=i("vDqi"),u={name:"Playlist",components:{VideoCard:a.a,CardSkeleton:o.a},mixins:[s.a],data:function(){return{videos:null,isLoading:!1,pageNumber:2,totalPages:4}},methods:{handleIntersection:function(t,e){var i=this;t.forEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.isIntersecting&&i.pageNumber<=i.totalPages)){t.next=4;break}return i.isLoading=!0,t.next=4,i.loadVideos(i.pageNumber,20);case 4:i.pageNumber>i.totalPages&&e.disconnect();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},loadVideos:function(t,e){var i=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var a,o,s,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("".concat("https://blooming-mesa-83646.herokuapp.com","/api/videos?filters[playlists][slug][$eq]=").concat(i.$page.strapi.playlists.data[0].attributes.slug,"&pagination[page]=").concat(t,"&pagination[pageSize]=").concat(e),{headers:{Authorization:"Bearer ".concat("422028e8f8e0d8a21f3a72e52a5c5c26b4d3e2273c46dea1b5d7c44dd7b95f0bfaf0205d62d1a7eabe5f660a83b75ac1aedd8caa22bb304bc473aea10fda128064843308e8a4374efd8a231e35bf20be507a6e0dce3ec31acced58e619f0d7b28b5a83effdd7f61b8cfae38ce6ffc4a4ef37c59f440b1d0be40ea9efda947c50")}});case 2:a=r.sent,o=a.data,i.totalPages=o.meta.pagination.pageCount,o.data.length>0&&(u=new Set(i.videos.map((function(t){return t.id}))),l=[].concat(Object(n.a)(i.videos),Object(n.a)(o.data.filter((function(t){return!u.has(t.id)})))),i.videos.splice(0,i.videos.length),(s=i.videos).push.apply(s,Object(n.a)(l))),i.isLoading=!1,i.pageNumber++;case 8:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.videos=t.$page.strapi.playlists.data[0].attributes.videos.data,new IntersectionObserver(t.handleIntersection).observe(t.$refs.loadMore);case 3:case"end":return e.stop()}}),e)})))()},metaInfo:function(){return{title:this.$page.strapi.playlists.data[0].attributes.title,meta:[{name:"description",content:this.$page.strapi.playlists.data[0].attributes.description},{key:"og:title",hid:"og:title",property:"og:title",content:"".concat(this.$page.strapi.playlists.data[0].attributes.title," - KAILASA's Nithyananda TV")},{key:"og:description",hid:"og:description",property:"og:description",content:this.$page.strapi.playlists.data[0].attributes.description}]}}},l=i("KHd+"),d=null,f=Object(l.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"playlist__header px-10 pt-10 pb-8"},[i("h1",{staticClass:"text-4xl font-medium mb-3"},[t._v("\n      "+t._s(t.$page.strapi.playlists.data[0].attributes.title)+"\n    ")]),i("p",{staticClass:"text-base"},[t._v("\n      "+t._s(t.$page.strapi.playlists.data[0].attributes.description)+"\n    ")])]),i("div",{staticClass:"px-10 pb-10 pt-4 flex flex-wrap gap-x-2 gap-y-5 mb-16 pb-16"},[t._l(t.videos,(function(t){return i("VideoCard",{key:t.id,attrs:{video:t}})})),t._l(5,(function(e){return i("CardSkeleton",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],key:e})}))],2),t.isLoading?i("div",{staticClass:"min-h-400px"}):t._e(),i("div",{ref:"loadMore",staticClass:"invisible"},[t._v(".")])])}),[],!1,null,null,null);"function"==typeof d&&d(f);e.default=f.exports},"4Brf":function(t,e,i){"use strict";var n=i("I+eb"),r=i("g6v/"),a=i("2oRo"),o=i("4zBA"),s=i("Gi26"),c=i("Fib7"),u=i("OpvP"),l=i("V37c"),d=i("m/L8").f,f=i("6JNq"),p=a.Symbol,v=p&&p.prototype;if(r&&c(p)&&(!("description"in v)||void 0!==p().description)){var b={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(v,this)?new p(t):void 0===t?p():p(t);return""===t&&(b[e]=!0),e};f(g,p),g.prototype=v,v.constructor=g;var m="Symbol(test)"==String(p("test")),h=o(v.toString),y=o(v.valueOf),_=/^Symbol\((.*)\)[^)]+$/,k=o("".replace),S=o("".slice);d(v,"description",{configurable:!0,get:function(){var t=y(this),e=h(t);if(s(b,t))return"";var i=m?S(e,7,-1):k(e,_,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:g})}},"4hLg":function(t,e,i){"use strict";var n=i("Mj6V"),r=i.n(n);e.a={beforeRouteLeave:function(t,e,i){t.hash||"undefined"==typeof document||(r.a.start(),i())}}},"5Tg+":function(t,e,i){var n=i("tiKp");e.f=n},"8zsB":function(t,e,i){"use strict";i("DU4N")},DU4N:function(t,e,i){},FzRj:function(t,e,i){"use strict";i("ki7R")},Qo9l:function(t,e,i){var n=i("2oRo");t.exports=n},X4uV:function(t,e,i){"use strict";i("8zsB");var n=i("KHd+"),r=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cardSkeleton"},[e("div",{staticClass:"cardSkeleton__img aspect-video skeleton"}),e("div",{staticClass:"cardSkeleton__body w-full"},[e("h2",{staticClass:"cardSkeleton__title skeleton mt-3 h-4 mr-3 rounded"}),e("p",{staticClass:"cardSkeleton__intro skeleton mt-2 h-4 mr-10 rounded"})])])}],!1,null,"3d8890c7",null);e.a=r.exports},"dG/n":function(t,e,i){var n=i("Qo9l"),r=i("Gi26"),a=i("5Tg+"),o=i("m/L8").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||o(e,t,{value:a.f(t)})}},gpus:function(t,e,i){"use strict";i("s+lh");var n={name:"VideoCard",props:{video:{type:Object,required:!0}}},r=(i("FzRj"),i("KHd+")),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.video.attributes?i("g-link",{staticClass:"videoCard videoCard__link",attrs:{to:"/video/"+t.video.attributes.slug}},[i("div",{staticClass:"videoThumbnail__container bg-theme_light aspect-video"},[i("img",{ref:"vImg",staticClass:"videoThumbnail lazyload w-full h-full object-cover",attrs:{"data-src":t.video.attributes.thumbnailURL}})]),i("h3",{staticClass:"videoCard__title text-sm text-text_dark mt-2"},[t._v("\n    "+t._s(t.video.attributes.title)+"\n  ")])]):i("g-link",{attrs:{to:t.video.moreLink}},[i("div",{staticClass:"moreCard flex justify-center items-center text-lg ml-0.5 bg-theme_light"},[t._v("\n    View All\n  ")])])}),[],!1,null,"d9c40c42",null);e.a=a.exports},ki7R:function(t,e,i){},pNMO:function(t,e,i){"use strict";var n=i("I+eb"),r=i("2oRo"),a=i("0GbY"),o=i("K6Rb"),s=i("xluM"),c=i("4zBA"),u=i("xDBR"),l=i("g6v/"),d=i("STAE"),f=i("0Dky"),p=i("Gi26"),v=i("6LWA"),b=i("Fib7"),g=i("hh1v"),m=i("OpvP"),h=i("2bX/"),y=i("glrk"),_=i("ewvW"),k=i("/GqU"),S=i("oEtG"),w=i("V37c"),O=i("XGwC"),x=i("fHMY"),C=i("33Wh"),j=i("JBy8"),R=i("BX/b"),L=i("dBg+"),P=i("Bs8V"),B=i("m/L8"),N=i("N+g0"),$=i("0eef"),V=i("82ph"),E=i("busE"),I=i("VpIT"),K=i("93I0"),z=i("0BK2"),G=i("kOOl"),T=i("tiKp"),A=i("5Tg+"),F=i("dG/n"),D=i("1E5z"),M=i("afO8"),Q=i("tycR").forEach,q=K("hidden"),J=T("toPrimitive"),X=M.set,H=M.getterFor("Symbol"),U=Object.prototype,W=r.Symbol,Y=W&&W.prototype,Z=r.TypeError,tt=r.QObject,et=a("JSON","stringify"),it=P.f,nt=B.f,rt=R.f,at=$.f,ot=c([].push),st=I("symbols"),ct=I("op-symbols"),ut=I("string-to-symbol-registry"),lt=I("symbol-to-string-registry"),dt=I("wks"),ft=!tt||!tt.prototype||!tt.prototype.findChild,pt=l&&f((function(){return 7!=x(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=it(U,e);n&&delete U[e],nt(t,e,i),n&&t!==U&&nt(U,e,n)}:nt,vt=function(t,e){var i=st[t]=x(Y);return X(i,{type:"Symbol",tag:t,description:e}),l||(i.description=e),i},bt=function(t,e,i){t===U&&bt(ct,e,i),y(t);var n=S(e);return y(i),p(st,n)?(i.enumerable?(p(t,q)&&t[q][n]&&(t[q][n]=!1),i=x(i,{enumerable:O(0,!1)})):(p(t,q)||nt(t,q,O(1,{})),t[q][n]=!0),pt(t,n,i)):nt(t,n,i)},gt=function(t,e){y(t);var i=k(e),n=C(i).concat(_t(i));return Q(n,(function(e){l&&!s(mt,i,e)||bt(t,e,i[e])})),t},mt=function(t){var e=S(t),i=s(at,this,e);return!(this===U&&p(st,e)&&!p(ct,e))&&(!(i||!p(this,e)||!p(st,e)||p(this,q)&&this[q][e])||i)},ht=function(t,e){var i=k(t),n=S(e);if(i!==U||!p(st,n)||p(ct,n)){var r=it(i,n);return!r||!p(st,n)||p(i,q)&&i[q][n]||(r.enumerable=!0),r}},yt=function(t){var e=rt(k(t)),i=[];return Q(e,(function(t){p(st,t)||p(z,t)||ot(i,t)})),i},_t=function(t){var e=t===U,i=rt(e?ct:k(t)),n=[];return Q(i,(function(t){!p(st,t)||e&&!p(U,t)||ot(n,st[t])})),n};(d||(E(Y=(W=function(){if(m(Y,this))throw Z("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=G(t),i=function(t){this===U&&s(i,ct,t),p(this,q)&&p(this[q],e)&&(this[q][e]=!1),pt(this,e,O(1,t))};return l&&ft&&pt(U,e,{configurable:!0,set:i}),vt(e,t)}).prototype,"toString",(function(){return H(this).tag})),E(W,"withoutSetter",(function(t){return vt(G(t),t)})),$.f=mt,B.f=bt,N.f=gt,P.f=ht,j.f=R.f=yt,L.f=_t,A.f=function(t){return vt(T(t),t)},l&&(nt(Y,"description",{configurable:!0,get:function(){return H(this).description}}),u||E(U,"propertyIsEnumerable",mt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:W}),Q(C(dt),(function(t){F(t)})),n({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=w(t);if(p(ut,e))return ut[e];var i=W(e);return ut[e]=i,lt[i]=e,i},keyFor:function(t){if(!h(t))throw Z(t+" is not a symbol");if(p(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,e){return void 0===e?x(t):gt(x(t),e)},defineProperty:bt,defineProperties:gt,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:yt,getOwnPropertySymbols:_t}),n({target:"Object",stat:!0,forced:f((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(_(t))}}),et)&&n({target:"JSON",stat:!0,forced:!d||f((function(){var t=W();return"[null]"!=et([t])||"{}"!=et({a:t})||"{}"!=et(Object(t))}))},{stringify:function(t,e,i){var n=V(arguments),r=e;if((g(e)||void 0!==t)&&!h(t))return v(e)||(e=function(t,e){if(b(r)&&(e=s(r,this,t,e)),!h(e))return e}),n[1]=e,o(et,null,n)}});if(!Y[J]){var kt=Y.valueOf;E(Y,J,(function(t){return s(kt,this)}))}D(W,"Symbol"),z[q]=!0}}]);