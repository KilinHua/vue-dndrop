(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c}));var o=n(34),a=(n(333),n(336),n(183),function(t,e){var n=e.removedIndex,a=e.addedIndex,r=e.payload;if(null===n&&null===a)return t;var l=Object(o.a)(t),i=r;return null!==n&&(i=l.splice(n,1)[0]),null!==a&&l.splice(a,0,i),l}),r=function(t,e){for(var n=[],o=0;o<t;o++)n.push(e(o));return n},l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",i=["Backlog","Doing","Finished"],s=["#34495E","#84B0DC","#49627A","#41B883","#7096BB","#97CAFC","#6CC1C0","#41B883","#41B883","#49627A"],c={type:"container",props:{orientation:"horizontal"},children:r(3,(function(t){return{id:"column".concat(t),type:"container",name:i[t],props:{orientation:"vertical",className:"card-container"},children:r(+(10*Math.random()).toFixed()+5,(function(e){return{type:"draggable",id:"".concat(t).concat(e),props:{className:"card",style:{backgroundColor:(n=Math.floor(10*Math.random()),s[n])}},number:Math.floor(100*Math.random()),data:l.slice(0,Math.floor(150*Math.random())+30)};var n}))}}))}},333:function(t,e,n){"use strict";var o=n(2),a=n(1),r=n(110),l=n(53),i=n(23),s=n(13),c=n(111),d=n(54),u=n(55)("splice"),g=a.TypeError,f=Math.max,p=Math.min;o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,o,a,u,h,v,m=s(this),y=i(m),b=r(t,y),A=arguments.length;if(0===A?n=o=0:1===A?(n=0,o=y-b):(n=A-2,o=p(f(l(e),0),y-b)),y+n-o>9007199254740991)throw g("Maximum allowed length exceeded");for(a=c(m,o),u=0;u<o;u++)(h=b+u)in m&&d(a,u,m[h]);if(a.length=o,n<o){for(u=b;u<y-o;u++)v=u+n,(h=u+o)in m?m[v]=m[h]:delete m[v];for(u=y;u>y-o+n;u--)delete m[u-1]}else if(n>o)for(u=y-o;u>b;u--)v=u+n-1,(h=u+o-1)in m?m[v]=m[h]:delete m[v];for(u=0;u<n;u++)m[u+b]=arguments[u+2];return m.length=y-o+n,a}})},334:function(t,e,n){var o=n(3);t.exports=o(1..valueOf)},336:function(t,e,n){"use strict";var o=n(2),a=n(1),r=n(3),l=n(53),i=n(334),s=n(337),c=n(4),d=a.RangeError,u=a.String,g=Math.floor,f=r(s),p=r("".slice),h=r(1..toFixed),v=function(t,e,n){return 0===e?n:e%2==1?v(t,e-1,n*t):v(t*t,e/2,n)},m=function(t,e,n){for(var o=-1,a=n;++o<6;)a+=e*t[o],t[o]=a%1e7,a=g(a/1e7)},y=function(t,e){for(var n=6,o=0;--n>=0;)o+=t[n],t[n]=g(o/e),o=o%e*1e7},b=function(t){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==t[e]){var o=u(t[e]);n=""===n?o:n+f("0",7-o.length)+o}return n};o({target:"Number",proto:!0,forced:c((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!c((function(){h({})}))},{toFixed:function(t){var e,n,o,a,r=i(this),s=l(t),c=[0,0,0,0,0,0],g="",h="0";if(s<0||s>20)throw d("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return u(r);if(r<0&&(g="-",r=-r),r>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(r*v(2,69,1))-69)<0?r*v(2,-e,1):r/v(2,e,1),n*=4503599627370496,(e=52-e)>0){for(m(c,0,n),o=s;o>=7;)m(c,1e7,0),o-=7;for(m(c,v(10,o,1),0),o=e-1;o>=23;)y(c,1<<23),o-=23;y(c,1<<o),m(c,1,1),y(c,2),h=b(c)}else m(c,0,n),m(c,1<<-e,0),h=b(c)+f("0",s);return h=s>0?g+((a=h.length)<=s?"0."+f("0",s-a)+h:p(h,0,a-s)+"."+p(h,a-s)):g+h}})},337:function(t,e,n){"use strict";var o=n(1),a=n(53),r=n(22),l=n(30),i=o.RangeError;t.exports=function(t){var e=r(l(this)),n="",o=a(t);if(o<0||o==1/0)throw i("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},344:function(t,e,n){},359:function(t,e,n){var o=n(10),a=n(12),r=n(185),l=n(4),i=RegExp.prototype;o&&l((function(){return"sy"!==Object.getOwnPropertyDescriptor(i,"flags").get.call({dotAll:!0,sticky:!0})}))&&a.f(i,"flags",{configurable:!0,get:r})},360:function(t,e,n){"use strict";n(344)},398:function(t,e,n){"use strict";n.r(e);n(183),n(359);var o=n(335),a=n(332),r=n(0),l=0;function i(){return"item-".concat(++l)}var s={name:"Events",components:{Container:o.a,Draggable:o.b},data:function(){return{groups:[],flags:[],logs:{"get-child-payload":!0,"should-accept-drop":!1,"should-animate-drop":!1,"drag-start":!0,"drag-end":!0,"drag-enter":!0,"drag-leave":!0,"drop-not-allowed":!0,drop:!0},logPayload:!0}},created:function(){this.addColumn()},methods:{getChildPayload:function(t,e){return this.log("get-child-payload",t,e),this.groups[t][e]},getShouldAcceptDrop:function(t,e,n){return this.log("should-accept-drop",e,n),this.flags[t].drop},getShouldAnimateDrop:function(t,e,n){return this.log("should-animate-drop",e,n),this.flags[t].animate},onDragStart:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["drag-start"].concat(e))},onDragEnd:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["drag-end"].concat(e))},onDragEnter:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["drag-enter"].concat(e))},onDragLeave:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["drag-leave"].concat(e))},fireRelatedEventsOnly:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["fireRelatedEventsOnly"].concat(e))},onDrop:function(t,e){var n=Object(a.a)(this.groups[t],e);r.a.set(this.groups,t,n),this.log("drop",e)},dropNotAllowed:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.log.apply(this,["drop-not-allowed"].concat(e))},addColumn:function(){var t;this.groups.push((t=this.groups.length+1,Object(a.b)(5,(function(e){return{id:i(),data:"Draggable ".concat(t," - ").concat(e+1)}})))),this.flags.push({drop:!0,animate:!0})},removeColumn:function(){this.groups.pop(),this.flags.pop()},log:function(t){if(this.logs[t]){for(var e,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];this.logPayload?(e=console).log.apply(e,[t].concat(o)):console.log(t)}}}},c=(n(360),n(52)),d=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("div",{staticClass:"columns"},t._l(t.groups,(function(e,o){return n("div",{key:o,staticClass:"column"},[n("div",{staticClass:"column-actions"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.flags[o].drop,expression:"flags[index].drop"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.flags[o].drop)?t._i(t.flags[o].drop,null)>-1:t.flags[o].drop},on:{change:function(e){var n=t.flags[o].drop,a=e.target,r=!!a.checked;if(Array.isArray(n)){var l=t._i(n,null);a.checked?l<0&&t.$set(t.flags[o],"drop",n.concat([null])):l>-1&&t.$set(t.flags[o],"drop",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.flags[o],"drop",r)}}}),t._v(" Accept Drop\n        ")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.flags[o].animate,expression:"flags[index].animate"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.flags[o].animate)?t._i(t.flags[o].animate,null)>-1:t.flags[o].animate},on:{change:function(e){var n=t.flags[o].animate,a=e.target,r=!!a.checked;if(Array.isArray(n)){var l=t._i(n,null);a.checked?l<0&&t.$set(t.flags[o],"animate",n.concat([null])):l>-1&&t.$set(t.flags[o],"animate",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.flags[o],"animate",r)}}}),t._v(" Animate\n          Drop\n        ")])]),t._v(" "),n("Container",{attrs:{"data-index":o,"group-name":"column","get-child-payload":function(e){return t.getChildPayload(o,e)},"should-accept-drop":function(e,n){return t.getShouldAcceptDrop(o,e,n)},"should-animate-drop":function(e,n){return t.getShouldAnimateDrop(o,e,n)}},on:{"drag-start":t.onDragStart,"drag-enter":function(e){return t.onDragEnter(o)},"drag-leave":function(e){return t.onDragLeave(o)},"drag-end":t.onDragEnd,"drop-not-allowed":t.dropNotAllowed,drop:function(e){return t.onDrop(o,e)}}},t._l(e,(function(e){return n("Draggable",{key:e.id},[n("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])})),1)],1)})),0),t._v(" "),n("div",{staticClass:"controls"},[n("h4",{staticClass:"title"},[t._v("Fired events")]),t._v(" "),n("small",{staticClass:"title"},[t._v("\n      Choose which events will be used in the columns\n    ")]),t._v(" "),n("div",{staticClass:"actions"},[t._l(t.logs,(function(e,o){return n("label",{key:o},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.logs[o],expression:"logs[name]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.logs[o])?t._i(t.logs[o],null)>-1:t.logs[o]},on:{change:function(e){var n=t.logs[o],a=e.target,r=!!a.checked;if(Array.isArray(n)){var l=t._i(n,null);a.checked?l<0&&t.$set(t.logs,o,n.concat([null])):l>-1&&t.$set(t.logs,o,n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.logs,o,r)}}}),t._v(" "+t._s(o)+"\n      ")])})),t._v(" "),n("hr"),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.logPayload,expression:"logPayload"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.logPayload)?t._i(t.logPayload,null)>-1:t.logPayload},on:{change:function(e){var n=t.logPayload,o=e.target,a=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.logPayload=n.concat([null])):r>-1&&(t.logPayload=n.slice(0,r).concat(n.slice(r+1)))}else t.logPayload=a}}}),t._v(" log payload\n      ")])],2),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"button remove",attrs:{disabled:1===t.groups.length},on:{click:function(e){return t.removeColumn()}}},[t._v("\n        Remove Column\n      ")]),t._v(" "),n("button",{staticClass:"button add",on:{click:function(e){return t.addColumn()}}},[t._v("Add Column")])])])])}),[],!1,null,"aca1d1d4",null);e.default=d.exports}}]);