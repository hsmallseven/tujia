(function(t){function e(e){for(var i,n,o=e[0],p=e[1],c=e[2],l=0,u=[];l<o.length;l++)n=o[l],s[n]&&u.push(s[n][0]),s[n]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=p(p.s=a[0]))}return t}var i={},n={app:0},s={app:0},r=[];function o(t){return p.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2bb5536b"}[t]+".js"}function p(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}p.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"7fc537a5"}[t]+".css",s=p.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===i||l===s))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],l=c.getAttribute("data-href");if(l===i||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],d.parentNode.removeChild(d),a(r)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){n[t]=0}));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,a){i=s[t]=[e,a]});e.push(i[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=o(t),c=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,a[1](r)}s[t]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},p.m=t,p.c=i,p.d=function(t,e,a){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},p.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(p.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)p.d(a,i,function(e){return t[e]}.bind(null,i));return a},p.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="/",p.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),n=a.n(i);n.a},"2c31":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._v("\n1  "),a("router-view")],1)},s=[],r=(a("034f"),a("2877")),o={},p=Object(r["a"])(o,n,s,!1,null,null,null),c=p.exports,l=a("8c4f"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"indexheade"}},[a("div",{attrs:{id:"indexheade_top"}},[a("div",[a("span")]),a("div")]),a("div",{attrs:{id:"Swiper"}},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:"https://nmstatic.tujia.com/static/images/index/home/banner_bg2.jpg",alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:"https://nmstatic.tujia.com/static/images/index/home/banner_bg3.jpg",alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:"https://nmstatic.tujia.com/static/images/index/home/banner_bg1.jpg",alt:""}})])])]),a("div",{attrs:{id:"Swiper_input"}},[a("span",[t._v("您想住哪？")])])]),a("div",{attrs:{id:"mytujia"}},[a("div",[a("span"),a("p",[t._v("我的途家")])]),a("div",[a("span"),a("p",[t._v("我的订单")])])])]),a("div",{attrs:{id:"theme"}},[a("h2",[t._v("精选主题")])]),a("div",{attrs:{id:"theme_swiper"}},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_190705/201907051026578840.jpg",alt:""}})])])])]),a("div",{attrs:{id:"find"}},[a("h2",[t._v("发现公寓")])]),a("div",{attrs:{id:"Housing"}},[a("ul",{attrs:{id:"Housinglist"}},[a("li",[a("div",[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151426141610_700_467.jpg",alt:""}})]),a("div",[a("div",{attrs:{id:"rightmig"}},[a("img",{attrs:{src:"https://pic.tujia.com/upload/landlordstorelogo/day_190414/201904141412551479.jpg",alt:""}}),a("span")]),a("span",[t._v("夫子庙新街口精装高层大飘扇高层亲子房")]),a("p",[a("span",[t._v("4.9分/23点评")]),a("span",[t._v("1居/1床/宜住2人")]),a("span",[t._v("近张府园地铁站")])]),a("p",[a("span",[t._v("连住优惠")]),a("span",[t._v("闪订")]),a("span",[t._v("验真")])])])]),a("li",[a("div",[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_171204/thumb/201712041639067200_700_467.jpg",alt:""}})]),a("div",[a("div",{attrs:{id:"rightmig"}},[a("img",{attrs:{src:"",alt:""}}),a("span")]),a("span",[t._v("夫子庙新街口精装高层大飘扇高层亲子房")]),a("p",[a("span",[t._v("4.9分/23点评")]),a("span",[t._v("1居/1床/宜住2人")]),a("span",[t._v("近张府园地铁站")])]),a("p",[a("span",[t._v("连住优惠")]),a("span",[t._v("闪订")]),a("span",[t._v("验真")])])])]),a("li",[a("div",[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151425244459_700_467.jpg",alt:""}})]),a("div",[a("div",{attrs:{id:"rightmig"}},[a("img",{attrs:{src:"",alt:""}}),a("span")]),a("span",[t._v("夫子庙新街口精装高层大飘扇高层亲子房")]),a("p",[a("span",[t._v("4.9分/23点评")]),a("span",[t._v("1居/1床/宜住2人")]),a("span",[t._v("近张府园地铁站")])]),a("p",[a("span",[t._v("连住优惠")]),a("span",[t._v("闪订")]),a("span",[t._v("验真")])])])]),a("li",[a("div",[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_171204/thumb/201712041643395816_700_467.jpg",alt:""}})]),a("div",[a("div",{attrs:{id:"rightmig"}},[a("img",{attrs:{src:"",alt:""}}),a("span")]),a("span",[t._v("夫子庙新街口精装高层大飘扇高层亲子房")]),a("p",[a("span",[t._v("4.9分/23点评")]),a("span",[t._v("1居/1床/宜住2人")]),a("span",[t._v("近张府园地铁站")])]),a("p",[a("span",[t._v("连住优惠")]),a("span",[t._v("闪订")]),a("span",[t._v("验真")])])])]),a("li",[a("div",[a("img",{attrs:{src:"https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151424465650_700_467.jpg",alt:""}})]),a("div",[a("div",{attrs:{id:"rightmig"}},[a("img",{attrs:{src:"",alt:""}}),a("span")]),a("span",[t._v("夫子庙新街口精装高层大飘扇高层亲子房")]),a("p",[a("span",[t._v("4.9分/23点评")]),a("span",[t._v("1居/1床/宜住2人")]),a("span",[t._v("近张府园地铁站")])]),a("p",[a("span",[t._v("连住优惠")]),a("span",[t._v("闪订")]),a("span",[t._v("验真")])])])])])]),a("div",{attrs:{id:"indexheade_footer"}},[a("div",[a("span",[t._v("关于途家")]),a("span",[t._v("客服热线")]),a("span",[t._v("电脑版")])]),a("div",[a("span",[t._v("企业营业执照")]),a("span",[t._v("隐私权政策")]),a("span",[t._v("途家保障计划")])]),a("p",[t._v("©2019 途家网 津ICP备17006480号")])])])}],m=a("41d6"),v=(a("dfa4"),{created:function(){this.$nextTick(function(){new m["a"](".swiper-container",{loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1}})})},methods:{swiper:function(){}}}),h=v,f=(a("cccb"),Object(r["a"])(h,u,d,!1,null,null,null)),g=f.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"pic1",attrs:{src:"https://pic.tujia.com/upload/feccms/day_190708/201907081101503254.jpg"}}),a("img",{staticClass:"pic1",attrs:{src:"https://pic.tujia.com/upload/feccms/day_190703/201907031406558320.jpg"}}),a("img",{staticClass:"pic1",attrs:{src:"https://pic.tujia.com/upload/feccms/day_190704/201907041612069179.jpg"}}),a("ul",{staticClass:"themelist"},[a("router-link",{attrs:{to:"/Theme/Themelist/daban",tag:"li"}},[a("p",[t._v("大阪")])]),a("router-link",{attrs:{to:"/Theme/Themelist/dongjing",tag:"li"}},[a("p",[t._v("东京")])]),a("router-link",{attrs:{to:"/Theme/Themelist/jingdu",tag:"li"}},[a("p",[t._v("京都")])]),a("router-link",{attrs:{to:"/Theme/Themelist/zhahuang",tag:"li"}},[a("p",[t._v("札幌")])]),a("router-link",{attrs:{to:"/Theme/Themelist/fugang",tag:"li"}},[a("p",[t._v("福冈")])]),a("router-link",{attrs:{to:"/Theme/Themelist/chongsheng",tag:"li"}},[a("p",[t._v("冲绳")])])],1),a("router-view"),a("img",{staticClass:"pic1",attrs:{src:"https://pic.tujia.com/upload/feccms/day_190703/201907031407573838.jpg"}})],1)},b=[],y=(a("7d9b"),{}),w=Object(r["a"])(y,_,b,!1,null,"82ece81a",null),j=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Themelist"},[a("ul",{staticClass:"list"},t._l(t.list,function(e,i){return"daban"===t.type||"jingdu"===t.type||"fugang"===t.type?a("li",[a("div",{staticClass:"heart"}),a("img",{attrs:{src:e.defaultPicture}}),a("div",{staticClass:"text"},[a("p",{staticClass:"one"},[t._v(t._s(e.unitName))]),a("p",{staticClass:"two"},[a("span",[t._v(t._s(e.unitSummeries[0].text))]),a("span",[t._v(t._s(e.unitSummeries[1].text))]),a("span",[t._v(t._s(e.unitSummeries[2].text))])]),a("p",{staticClass:"three"},[t._v("￥"+t._s(e.finalPrice))])])]):t._e()}),0)])},C=[],T=a("bd86"),E=Object(T["a"])({data:function(){return{type:"",list:[]}},watch:{$route:{handler:function(t){this.type=t.params.type},deep:!0,immediate:!0}},methods:{getData:function(){var t=this;this.$axios.get("http://localhost:3000/items").then(function(e){t.list=e.data,console.log(e)})}}},"watch",{$route:{handler:function(t){this.type=t.params.type,this.getData()},deep:!0,immediate:!0}}),S=E,O=(a("d8e5"),Object(r["a"])(S,x,C,!1,null,"6b755452",null)),k=O.exports;i["a"].use(l["a"]);var P=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/theme",name:"theme",component:j,children:[{path:"/Theme/Themelist/:type",name:"Themelist",component:k}]}]}),$=a("2f62");i["a"].use($["a"]);var A=new $["a"].Store({state:{},mutations:{},actions:{}});a("4917");(function(t,e){var a,i=t.document,n=i.documentElement,s=i.querySelector('meta[name="viewport"]'),r=i.querySelector('meta[name="flexible"]'),o=0,p=0,c=e.flexible||(e.flexible={});if(s){var l=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(p=parseFloat(l[1]),o=parseInt(1/p))}else if(r){var u=r.getAttribute("content");if(u){var d=u.match(/initial\-dpr=([\d\.]+)/),m=u.match(/maximum\-dpr=([\d\.]+)/);d&&(o=parseFloat(d[1]),p=parseFloat((1/o).toFixed(2))),m&&(o=parseFloat(m[1]),p=parseFloat((1/o).toFixed(2)))}}if(!o&&!p){t.navigator.appVersion.match(/android/gi);var v=t.navigator.appVersion.match(/iphone/gi),h=t.devicePixelRatio;o=v?h>=3&&(!o||o>=3)?3:h>=2&&(!o||o>=2)?2:1:1,p=1/o}if(n.setAttribute("data-dpr",o),!s)if(s=i.createElement("meta"),s.setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+p+", maximum-scale="+p+", minimum-scale="+p+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(s);else{var f=i.createElement("div");f.appendChild(s),i.write(f.innerHTML)}function g(){var e=n.getBoundingClientRect().width;e/o>768&&(e=768*o);var a=e/7.5;n.style.fontSize=a+"px",c.rem=t.rem=a}t.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(g,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(a),a=setTimeout(g,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*o+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*o+"px"},!1),g(),c.dpr=t.dpr=o,c.refreshRem=g,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"===typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"===typeof t&&t.match(/px$/)&&(e+="rem"),e}})(window,window["lib"]||(window["lib"]={}));var F=a("bc3a"),L=a.n(F);i["a"].config.productionTip=!1,i["a"].prototype.$axios=L.a,new i["a"]({router:P,store:A,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,a){},"7d9b":function(t,e,a){"use strict";var i=a("8c50"),n=a.n(i);n.a},"8c50":function(t,e,a){},cccb:function(t,e,a){"use strict";var i=a("d563"),n=a.n(i);n.a},d563:function(t,e,a){},d8e5:function(t,e,a){"use strict";var i=a("2c31"),n=a.n(i);n.a}});
//# sourceMappingURL=app.e82212ef.js.map