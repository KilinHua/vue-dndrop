(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{327:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"d",(function(){return l}));var e=r(32),o=(r(328),r(331),r(178),function(t,n){var r=n.removedIndex,o=n.addedIndex,i=n.payload;if(null===r&&null===o)return t;var a=Object(e.a)(t),c=i;return null!==r&&(c=a.splice(r,1)[0]),null!==o&&a.splice(o,0,c),a}),i=function(t,n){for(var r=[],e=0;e<t;e++)r.push(n(e));return r},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",c=["Backlog","Doing","Finished"],u=["#34495E","#84B0DC","#49627A","#41B883","#7096BB","#97CAFC","#6CC1C0","#41B883","#41B883","#49627A"],l={type:"container",props:{orientation:"horizontal"},children:i(3,(function(t){return{id:"column".concat(t),type:"container",name:c[t],props:{orientation:"vertical",className:"card-container"},children:i(+(10*Math.random()).toFixed()+5,(function(n){return{type:"draggable",id:"".concat(t).concat(n),props:{className:"card",style:{backgroundColor:(r=Math.floor(10*Math.random()),u[r])}},number:Math.floor(100*Math.random()),data:a.slice(0,Math.floor(150*Math.random())+30)};var r}))}}))}},328:function(t,n,r){"use strict";var e=r(1),o=r(104),i=r(48),a=r(21),c=r(11),u=r(105),l=r(49),s=r(50)("splice"),d=Math.max,f=Math.min;e({target:"Array",proto:!0,forced:!s},{splice:function(t,n){var r,e,s,p,m,h,g=c(this),v=a(g),b=o(t,v),x=arguments.length;if(0===x?r=e=0:1===x?(r=0,e=v-b):(r=x-2,e=f(d(i(n),0),v-b)),v+r-e>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=u(g,e),p=0;p<e;p++)(m=b+p)in g&&l(s,p,g[m]);if(s.length=e,r<e){for(p=b;p<v-e;p++)h=p+r,(m=p+e)in g?g[h]=g[m]:delete g[h];for(p=v;p>v-e+r;p--)delete g[p-1]}else if(r>e)for(p=v-e;p>b;p--)h=p+r-1,(m=p+e-1)in g?g[h]=g[m]:delete g[h];for(p=0;p<r;p++)g[p+b]=arguments[p+2];return g.length=v-e+r,s}})},329:function(t,n){var r=1..valueOf;t.exports=function(t){return r.call(t)}},331:function(t,n,r){"use strict";var e=r(1),o=r(48),i=r(329),a=r(332),c=r(2),u=1..toFixed,l=Math.floor,s=function(t,n,r){return 0===n?r:n%2==1?s(t,n-1,r*t):s(t*t,n/2,r)},d=function(t,n,r){for(var e=-1,o=r;++e<6;)o+=n*t[e],t[e]=o%1e7,o=l(o/1e7)},f=function(t,n){for(var r=6,e=0;--r>=0;)e+=t[r],t[r]=l(e/n),e=e%n*1e7},p=function(t){for(var n=6,r="";--n>=0;)if(""!==r||0===n||0!==t[n]){var e=String(t[n]);r=""===r?e:r+a.call("0",7-e.length)+e}return r};e({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(t){var n,r,e,c,u=i(this),l=o(t),m=[0,0,0,0,0,0],h="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(h="-",u=-u),u>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(u*s(2,69,1))-69)<0?u*s(2,-n,1):u/s(2,n,1),r*=4503599627370496,(n=52-n)>0){for(d(m,0,r),e=l;e>=7;)d(m,1e7,0),e-=7;for(d(m,s(10,e,1),0),e=n-1;e>=23;)f(m,1<<23),e-=23;f(m,1<<e),d(m,1,1),f(m,2),g=p(m)}else d(m,0,r),d(m,1<<-n,0),g=p(m)+a.call("0",l);return g=l>0?h+((c=g.length)<=l?"0."+a.call("0",l-c)+g:g.slice(0,c-l)+"."+g.slice(c-l)):h+g}})},332:function(t,n,r){"use strict";var e=r(48),o=r(20),i=r(27);t.exports=function(t){var n=o(i(this)),r="",a=e(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(n+=n))1&a&&(r+=n);return r}},405:function(t,n,r){"use strict";r.r(n);var e=r(330),o=r(327),i={name:"TransitionDuration",components:{Container:e.a,Draggable:e.b},data:function(){return{items:Object(o.b)(10,(function(t){return{id:t,data:"Draggable "+t}}))}},methods:{onDrop:function(t){this.items=Object(o.a)(this.items,t)}}},a=r(47),c=Object(a.a)(i,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"simple-page"},[r("Container",{attrs:{"animation-duration":1e3},on:{drop:t.onDrop}},t._l(t.items,(function(n){return r("Draggable",{key:n.id},[r("div",{staticClass:"draggable-item"},[t._v("\n        "+t._s(n.data)+"\n      ")])])})),1)],1)}),[],!1,null,null,null);n.default=c.exports}}]);