(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{327:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return s}));var o=e(32),r=(e(328),e(331),e(178),function(n,t){var e=t.removedIndex,r=t.addedIndex,i=t.payload;if(null===e&&null===r)return n;var a=Object(o.a)(n),c=i;return null!==e&&(c=a.splice(e,1)[0]),null!==r&&a.splice(r,0,c),a}),i=function(n,t){for(var e=[],o=0;o<n;o++)e.push(t(o));return e},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",c=["Backlog","Doing","Finished"],u=["#34495E","#84B0DC","#49627A","#41B883","#7096BB","#97CAFC","#6CC1C0","#41B883","#41B883","#49627A"],s={type:"container",props:{orientation:"horizontal"},children:i(3,(function(n){return{id:"column".concat(n),type:"container",name:c[n],props:{orientation:"vertical",className:"card-container"},children:i(+(10*Math.random()).toFixed()+5,(function(t){return{type:"draggable",id:"".concat(n).concat(t),props:{className:"card",style:{backgroundColor:(e=Math.floor(10*Math.random()),u[e])}},number:Math.floor(100*Math.random()),data:a.slice(0,Math.floor(150*Math.random())+30)};var e}))}}))}},328:function(n,t,e){"use strict";var o=e(1),r=e(104),i=e(48),a=e(21),c=e(11),u=e(105),s=e(49),l=e(50)("splice"),d=Math.max,f=Math.min;o({target:"Array",proto:!0,forced:!l},{splice:function(n,t){var e,o,l,p,m,h,v=c(this),g=a(v),b=r(n,g),_=arguments.length;if(0===_?e=o=0:1===_?(e=0,o=g-b):(e=_-2,o=f(d(i(t),0),g-b)),g+e-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=u(v,o),p=0;p<o;p++)(m=b+p)in v&&s(l,p,v[m]);if(l.length=o,e<o){for(p=b;p<g-o;p++)h=p+e,(m=p+o)in v?v[h]=v[m]:delete v[h];for(p=g;p>g-o+e;p--)delete v[p-1]}else if(e>o)for(p=g-o;p>b;p--)h=p+e-1,(m=p+o-1)in v?v[h]=v[m]:delete v[h];for(p=0;p<e;p++)v[p+b]=arguments[p+2];return v.length=g-o+e,l}})},329:function(n,t){var e=1..valueOf;n.exports=function(n){return e.call(n)}},331:function(n,t,e){"use strict";var o=e(1),r=e(48),i=e(329),a=e(332),c=e(2),u=1..toFixed,s=Math.floor,l=function(n,t,e){return 0===t?e:t%2==1?l(n,t-1,e*n):l(n*n,t/2,e)},d=function(n,t,e){for(var o=-1,r=e;++o<6;)r+=t*n[o],n[o]=r%1e7,r=s(r/1e7)},f=function(n,t){for(var e=6,o=0;--e>=0;)o+=n[e],n[e]=s(o/t),o=o%t*1e7},p=function(n){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==n[t]){var o=String(n[t]);e=""===e?o:e+a.call("0",7-o.length)+o}return e};o({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(n){var t,e,o,c,u=i(this),s=r(n),m=[0,0,0,0,0,0],h="",v="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(h="-",u=-u),u>1e-21)if(e=(t=function(n){for(var t=0,e=n;e>=4096;)t+=12,e/=4096;for(;e>=2;)t+=1,e/=2;return t}(u*l(2,69,1))-69)<0?u*l(2,-t,1):u/l(2,t,1),e*=4503599627370496,(t=52-t)>0){for(d(m,0,e),o=s;o>=7;)d(m,1e7,0),o-=7;for(d(m,l(10,o,1),0),o=t-1;o>=23;)f(m,1<<23),o-=23;f(m,1<<o),d(m,1,1),f(m,2),v=p(m)}else d(m,0,e),d(m,1<<-t,0),v=p(m)+a.call("0",s);return v=s>0?h+((c=v.length)<=s?"0."+a.call("0",s-c)+v:v.slice(0,c-s)+"."+v.slice(c-s)):h+v}})},332:function(n,t,e){"use strict";var o=e(48),r=e(20),i=e(27);n.exports=function(n){var t=r(i(this)),e="",a=o(n);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(e+=t);return e}},334:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},336:function(n,t,e){var o=e(27),r=e(20),i="["+e(334)+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(n){return function(t){var e=r(o(t));return 1&n&&(e=e.replace(a,"")),2&n&&(e=e.replace(c,"")),e}};n.exports={start:u(1),end:u(2),trim:u(3)}},337:function(n,t,e){},350:function(n,t,e){"use strict";var o=e(1),r=e(34).find,i=e(110),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{find:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}}),i("find")},351:function(n,t,e){"use strict";var o=e(8),r=e(3),i=e(107),a=e(15),c=e(10),u=e(335),s=e(82),l=e(184),d=e(2),f=e(52).f,p=e(28).f,m=e(9).f,h=e(329),v=e(336).trim,g=r.Number,b=g.prototype,_=function(n){var t=l(n,"number");return"bigint"==typeof t?t:x(t)},x=function(n){var t,e,o,r,i,a,c,u,d=l(n,"number");if(s(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(t=(d=v(d)).charCodeAt(0))||45===t){if(88===(e=d.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(a=(i=d.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>r)return NaN;return parseInt(i,o)}return+d};if(i("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,I=function(n){var t=arguments.length<1?0:g(_(n)),e=this;return e instanceof I&&d((function(){h(e)}))?u(Object(t),e,I):t},C=o?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;C.length>k;k++)c(g,y=C[k])&&!c(I,y)&&m(I,y,p(g,y));I.prototype=b,b.constructor=I,a(r,"Number",I)}},352:function(n,t,e){"use strict";e(337)},364:function(n,t,e){"use strict";e.r(t);var o=e(32),r=(e(351),e(178),e(328),e(330)),i={name:"Kanban",components:{Container:r.a,Draggable:r.b},props:{loading:{type:Boolean,default:!1},columns:{type:Array,default:function(){return[]}},colWidth:{type:[Number,String],default:function(){return""}},colMinWidth:{type:[Number,String],default:function(){return""}},colMaxWidth:{type:[Number,String],default:function(){return""}},dropText:{type:String,default:function(){return"Drop here"}},dropIcon:{type:String,default:function(){return"copy"}},noBorder:{type:Boolean,default:!1},innerColCount:{type:Boolean,default:!1},colBgColor:{type:String,default:function(){return""}},countText:{type:String,default:function(){return"itens"}}},data:function(){return{sourceContainerIndex:null,kanbanColumns:[],dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},computed:{colSkeleton:function(){var n=(window.innerWidth-300)/(this.colMinWidth||180);return Math.ceil(n)},columnStyle:function(){return"width: ".concat(this.colWidth,"px;\n          min-width: ").concat(this.colMinWidth,"px;\n          max-width: ").concat(this.colMaxWidth,"px;\n          ")},contentStyle:function(){return"background-color: ".concat(this.colBgColor)}},mounted:function(){this.kanbanColumns=Object(o.a)(this.columns)},methods:{dropAction:function(n,t,e){var r=t.removedIndex,i=t.addedIndex,a=t.payload,c=e.status;if(null===r&&null===i)return n;var u=Object(o.a)(n),s=a;return null!==r&&(s=u.splice(r,1)[0]),null!==i&&(u.splice(i,0,s),a.status.length>1?this.$emit("item-dropped",{item:a,column:c}):a.status!==c&&this.$emit("status-change",{item:a,newStatus:c})),u},validation:function(n,t,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},r=e===this.sourceContainerIndex;return r||o(n,t,e)},onDrop:function(n,t,e){this.kanbanColumns[n].columnItems=this.dropAction(this.kanbanColumns[n].columnItems,t,e)},getDraggedItem:function(n,t,e){return this.sourceContainerIndex=t,this.kanbanColumns[t].columnItems[n]},dropNotAllowed:function(n){var t=n.payload;n.container;console.log("drop not allowed",t)}}},a=(e(352),e(47)),c=Object(a.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"kanban"},[n.loading?e("div",{staticClass:"kanban__skeleton-container"},[n._t("skeleton"),n._v(" "),n.$slots.skeleton?n._e():e("div",{staticClass:"kanban__skeleton"},n._l(n.colSkeleton,(function(t,o){return e("div",{key:t,staticClass:"kanban__skeleton-column",style:"min-width: "+(n.colMinWidth||180)+"px; max-width: "+(n.colMaxWidth||330)+"px",attrs:{"animation-data":o}},[n._t("skeletonCard")],2)})),0)],2):n._l(n.kanbanColumns,(function(t,o){return e("div",{key:o,staticClass:"kanban__column",style:n.columnStyle},[e("div",{staticClass:"kanban__header"},[e("div",{staticClass:"kanban__description"},[n.$slots["icon-"+t.id]?e("span",{staticClass:"kanban__icon"},[n._t("icon-"+t.id)],2):n._e(),n._v(" "),e("h3",{staticClass:"kanban__title"},[n._v(n._s(t.name))])]),n._v(" "),n.innerColCount?n._e():e("p",{staticClass:"kanban__quantity"},[n._v("\n          "+n._s(t.columnItems.length)+" "+n._s(n.countText)+"\n        ")])]),n._v(" "),e("div",{staticClass:"kanban__content",style:n.contentStyle},[n.innerColCount?e("p",{class:["kanban__quantity","kanban__quantity--inner-count"]},[n._v("\n          "+n._s(t.columnItems.length)+" "+n._s(n.countText)+"\n        ")]):n._e(),n._v(" "),e("Container",{attrs:{"group-name":"kanban","get-child-payload":function(t){return n.getDraggedItem(t,o)},"should-accept-drop":function(e,r){return n.validation(e,r,o,t.validation)},"drop-placeholder":n.dropPlaceholderOptions},on:{drop:function(e){return n.onDrop(o,e,t)},"drag-start":function(t){n.sourceContainerIndex=o,n.$emit("drag")},"drop-not-allowed":n.dropNotAllowed,"drag-enter":function(e){return n.$emit("selected-column",t)}}},[n._l(t.columnItems,(function(t,o){return e("Draggable",{key:o},[n._t("card",null,{item:t})],2)})),n._v(" "),e("div",{staticClass:"kanban__move-icon"},[e("span",[n._v(n._s(n.dropText))])])],2)],1)])}))],2)}),[],!1,null,"2fcb2b94",null);t.default=c.exports},381:function(n,t,e){},428:function(n,t,e){var o=e(1),r=e(3),i=e(5),a=e(54),c=[].slice,u=function(n){return function(t,e){var o=arguments.length>2,r=o?c.call(arguments,2):void 0;return n(o?function(){(i(t)?t:Function(t)).apply(this,r)}:t,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},429:function(n,t,e){"use strict";var o=e(1),r=e(34).findIndex,i=e(110),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{findIndex:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},430:function(n,t,e){"use strict";e(381)},459:function(n,t,e){"use strict";e.r(t);e(350),e(55),e(428),e(193),e(77),e(181),e(191),e(111),e(429),e(328),e(33),e(179);var o=e(327),r={name:"CardsKanban",components:{Kanban:e(364).default},computed:{notMobile:function(){return window.innerWidth>=1025}},data:function(){var n=this;return{item:{},columns:[{name:"Backlog",id:0,status:["open"],columnItems:[],validation:function(t,e,o,r){return n.columnValidation(t,e,o,[""])}},{name:"Executing",id:1,status:["executing","review","paralised"],columnItems:[],validation:function(t,e,o,r){return n.columnValidation(t,e,o,["open","paralised"])}},{name:"Finished",id:2,status:["finished","closed"],columnItems:[],validation:function(t,e,o,r){return n.columnValidation(t,e,o,["executing","review"])}}],showDropdown:{},opcoesDropdownMenu:[{type:"customAction"},{type:"separator",color:"yellow"},{type:"customAction"}],scene:o.d,upperDropPlaceholderOptions:{className:"cards-drop-preview",animationDuration:"150",showOnTop:!0},dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},mounted:function(){this.cardsKanban(0,3,"open",["executing","paralised"]),this.cardsKanban(1,2,"executing",["paralised","review"]),this.cardsKanban(2,0,"finished",["closed","finished"])},methods:{iconType:function(n){switch(n){case"finished":return"🚀";case"executing":return"🔥";default:return"🤠"}},cardsKanban:function(n,t,e,r){for(var i=this.columns.find((function(t){return t.id===n})),a=Math.floor(99*Math.random()),c=0;c<=t;c++)i.columnItems.push({id:a+c+1,task:o.c.slice(0,Math.floor(20*Math.random())+10),date:"11/2".concat(c,"/2020"),status:r,currentStatus:e,icon:this.iconType(e),dropdownId:c,corStatus:{nome:e,corTexto:"#2".concat(c,"1ba8"),cor:"#2".concat(c,"3ced")}})},selectStatus:function(n){this.showDropdown={id:n.id}},columnChange:function(n){var t=this,e=n.item,o=n.column;setTimeout((function(){t.columns.reduce((function(n,r){if(r.columnItems.map((function(n){return n.id})).includes(e.id)){var i=r.columnItems.find((function(n){return n.id===e.id}));if(Array.isArray(o)&&o.length)return console.log(o),i.icon=t.iconType(o[0]),i.currentStatus=o[0];i.currentStatus=o,i.icon=t.iconType(o);var a=r.columnItems.findIndex((function(n){return n.id===i.id})),c=t.columns.findIndex((function(n){return n.status.includes(i.currentStatus)}));return r.columnItems.splice(a,1),t.columns[c].columnItems.push(i),i}return t.columns}),0)}))},columnValidation:function(n,t,e,o){return o.includes(t.currentStatus)},onColumnDrop:function(n){var t=Object.assign({},this.scene);t.children=Object(o.a)(t.children,n),this.scene=t},onCardDrop:function(n,t){if(null!==t.removedIndex||null!==t.addedIndex){var e=Object.assign({},this.scene),r=e.children.filter((function(t){return t.id===n}))[0],i=e.children.indexOf(r),a=Object.assign({},r);a.children=Object(o.a)(a.children,t),e.children.splice(i,1,a),this.scene=e}},getCardPayload:function(n){var t=this;return function(e){return t.scene.children.filter((function(t){return t.id===n}))[0].children[e]}},dragStart:function(){console.log("drag started")},log:function(){var n;(n=console).log.apply(n,arguments)}}},i=(e(430),e(47)),a=Object(i.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"kanban-cards"},[e("Kanban",{attrs:{columns:n.columns,"col-min-width":"100","col-max-width":"300","count-text":"items here","drop-text":"Change to this status"},on:{"update:columns":function(t){n.columns=t},"item-dropped":n.columnChange},scopedSlots:n._u([{key:"card",fn:function(t){var o=t.item;return[e("div",{class:["item",""+o.currentStatus]},[e("div",{staticClass:"kanban-card"},[e("span",{staticClass:"card"},[e("div",{staticClass:"kanban-action"},[e("label",[e("strong",[n._v("#"+n._s(o.id))])]),n._v(" "),e("button",{class:["kanban-button",""+o.currentStatus]},[n._v("\n                "+n._s(o.icon)+"\n              ")])]),n._v(" "),e("label",{staticClass:"label"},[n._v(" "+n._s(o.task))]),n._v(" "),e("small",[n._v(" "+n._s(o.date)+" ")])])])])]}}])})],1)}),[],!1,null,"39f160fe",null);t.default=a.exports}}]);