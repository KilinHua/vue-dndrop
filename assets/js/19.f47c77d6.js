(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{332:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return l}));var e=r(34),o=(r(333),r(336),r(183),function(t,n){var r=n.removedIndex,o=n.addedIndex,a=n.payload;if(null===r&&null===o)return t;var i=Object(e.a)(t),c=a;return null!==r&&(c=i.splice(r,1)[0]),null!==o&&i.splice(o,0,c),i}),a=function(t,n){for(var r=[],e=0;e<t;e++)r.push(n(e));return r},i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",c=["Backlog","Doing","Finished"],u=["#34495E","#84B0DC","#49627A","#41B883","#7096BB","#97CAFC","#6CC1C0","#41B883","#41B883","#49627A"],l={type:"container",props:{orientation:"horizontal"},children:a(3,(function(t){return{id:"column".concat(t),type:"container",name:c[t],props:{orientation:"vertical",className:"card-container"},children:a(+(10*Math.random()).toFixed()+5,(function(n){return{type:"draggable",id:"".concat(t).concat(n),props:{className:"card",style:{backgroundColor:(r=Math.floor(10*Math.random()),u[r])}},number:Math.floor(100*Math.random()),data:i.slice(0,Math.floor(150*Math.random())+30)};var r}))}}))}},333:function(t,n,r){"use strict";var e=r(2),o=r(1),a=r(110),i=r(53),c=r(23),u=r(13),l=r(111),s=r(54),d=r(55)("splice"),f=o.TypeError,p=Math.max,h=Math.min;e({target:"Array",proto:!0,forced:!d},{splice:function(t,n){var r,e,o,d,g,m,v=u(this),b=c(v),x=a(t,b),C=arguments.length;if(0===C?r=e=0:1===C?(r=0,e=b-x):(r=C-2,e=h(p(i(n),0),b-x)),b+r-e>9007199254740991)throw f("Maximum allowed length exceeded");for(o=l(v,e),d=0;d<e;d++)(g=x+d)in v&&s(o,d,v[g]);if(o.length=e,r<e){for(d=x;d<b-e;d++)m=d+r,(g=d+e)in v?v[m]=v[g]:delete v[m];for(d=b;d>b-e+r;d--)delete v[d-1]}else if(r>e)for(d=b-e;d>x;d--)m=d+r-1,(g=d+e-1)in v?v[m]=v[g]:delete v[m];for(d=0;d<r;d++)v[d+x]=arguments[d+2];return v.length=b-e+r,o}})},334:function(t,n,r){var e=r(3);t.exports=e(1..valueOf)},336:function(t,n,r){"use strict";var e=r(2),o=r(1),a=r(3),i=r(53),c=r(334),u=r(337),l=r(4),s=o.RangeError,d=o.String,f=Math.floor,p=a(u),h=a("".slice),g=a(1..toFixed),m=function(t,n,r){return 0===n?r:n%2==1?m(t,n-1,r*t):m(t*t,n/2,r)},v=function(t,n,r){for(var e=-1,o=r;++e<6;)o+=n*t[e],t[e]=o%1e7,o=f(o/1e7)},b=function(t,n){for(var r=6,e=0;--r>=0;)e+=t[r],t[r]=f(e/n),e=e%n*1e7},x=function(t){for(var n=6,r="";--n>=0;)if(""!==r||0===n||0!==t[n]){var e=d(t[n]);r=""===r?e:r+p("0",7-e.length)+e}return r};e({target:"Number",proto:!0,forced:l((function(){return"0.000"!==g(8e-5,3)||"1"!==g(.9,0)||"1.25"!==g(1.255,2)||"1000000000000000128"!==g(0xde0b6b3a7640080,0)}))||!l((function(){g({})}))},{toFixed:function(t){var n,r,e,o,a=c(this),u=i(t),l=[0,0,0,0,0,0],f="",g="0";if(u<0||u>20)throw s("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return d(a);if(a<0&&(f="-",a=-a),a>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(a*m(2,69,1))-69)<0?a*m(2,-n,1):a/m(2,n,1),r*=4503599627370496,(n=52-n)>0){for(v(l,0,r),e=u;e>=7;)v(l,1e7,0),e-=7;for(v(l,m(10,e,1),0),e=n-1;e>=23;)b(l,1<<23),e-=23;b(l,1<<e),v(l,1,1),b(l,2),g=x(l)}else v(l,0,r),v(l,1<<-n,0),g=x(l)+p("0",u);return g=u>0?f+((o=g.length)<=u?"0."+p("0",u-o)+g:h(g,0,o-u)+"."+h(g,o-u)):f+g}})},337:function(t,n,r){"use strict";var e=r(1),o=r(53),a=r(22),i=r(30),c=e.RangeError;t.exports=function(t){var n=a(i(this)),r="",e=o(t);if(e<0||e==1/0)throw c("Wrong number of repetitions");for(;e>0;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},397:function(t,n,r){"use strict";r.r(n);var e=r(335),o=r(332),a={name:"DragHandle",components:{Container:e.a,Draggable:e.b},data:function(){return{items:Object(o.b)(10,(function(t){return{id:t,data:"Draggable "+t}}))}},methods:{onDrop:function(t){this.items=Object(o.a)(this.items,t)}}},i=r(52),c=Object(i.a)(a,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"simple-page"},[r("Container",{attrs:{"drag-handle-selector":".column-drag-handle"},on:{drop:t.onDrop}},t._l(t.items,(function(n){return r("Draggable",{key:n.id},[r("div",{staticClass:"draggable-item"},[r("span",{staticClass:"column-drag-handle",staticStyle:{float:"left",padding:"0 10px"}},[t._v("☰")]),t._v("\n        "+t._s(n.data)+"\n      ")])])})),1)],1)}),[],!1,null,null,null);n.default=c.exports}}]);