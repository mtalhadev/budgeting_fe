(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2426],{18180:function(e,n,r){Promise.resolve().then(r.bind(r,2873))},18948:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(57437),i=r(96507),l=r(25210),s=r(13457),a=r(85269),c=r(64898),o=r(12040);function d(e){let{link:n,activeLast:r,disabled:s}=e,{name:a,href:c,icon:d}=n,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...s&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),a]});return c?(0,t.jsx)(l.Z,{component:o.r,href:c,sx:h,children:x}):(0,t.jsxs)(i.Z,{sx:h,children:[" ",x," "]})}function h(e){let{links:n,action:r,heading:o,moreLink:h,activeLast:u,sx:g,...j}=e,Z=n[n.length-1].name;return(0,t.jsxs)(i.Z,{sx:{...g},children:[(0,t.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(i.Z,{sx:{flexGrow:1},children:[o&&(0,t.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:o}),!!n.length&&(0,t.jsx)(c.Z,{separator:(0,t.jsx)(x,{}),...j,children:n.map(e=>(0,t.jsx)(d,{link:e,activeLast:u,disabled:e.name===Z},e.name||""))})]}),r&&(0,t.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!h&&(0,t.jsx)(i.Z,{sx:{mt:2},children:h.map(e=>(0,t.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return(0,t.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},77168:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(57437),i=r(89975),l=r(96507),s=r(85269),a=r(13457);function c(e){let{title:n,imgUrl:r,action:c,filled:o,description:d,sx:h,...x}=e;return(0,t.jsxs)(a.Z,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...o&&{borderRadius:2,bgcolor:e=>(0,i.Fq)(e.palette.grey[500],.04),border:e=>"dashed 1px ".concat((0,i.Fq)(e.palette.grey[500],.08))},...h},children:[(0,t.jsx)(l.Z,{component:"img",alt:"empty content",src:r||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),n&&(0,t.jsx)(s.Z,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:n}),d&&(0,t.jsx)(s.Z,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:d}),c&&c]})}},94700:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(57437),i=r(2265),l=r(39830),s=r(96507);let a=(0,i.forwardRef)((e,n)=>{let{icon:r,width:i=20,sx:a,...c}=e;return(0,t.jsx)(s.Z,{ref:n,component:l.JO,className:"component-iconify",icon:r,sx:{width:i,height:i,...a}})});var c=a},1839:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var t=r(57437),i=r(2265),l=r(96507),s=r(20659),a=r(35843),c=r(89975);let o=(0,a.ZP)("div")(()=>({flexGrow:1,height:"100%",overflow:"hidden"})),d=(0,a.ZP)(s.Z)(e=>{let{theme:n}=e;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,c.Fq)(n.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-mask":{zIndex:"inherit"}}}),h=(0,i.forwardRef)((e,n)=>{let{children:r,sx:i,...s}=e,a="undefined"==typeof navigator?"SSR":navigator.userAgent,c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);return c?(0,t.jsx)(l.Z,{ref:n,sx:{overflow:"auto",...i},...s,children:r}):(0,t.jsx)(o,{children:(0,t.jsx)(d,{scrollableNodeProps:{ref:n},clickOnTrack:!1,sx:i,children:r})})});var x=(0,i.memo)(h)},38788:function(e,n,r){"use strict";function t(e,n,r){return e?Math.max(0,(1+e)*n-r):0}function i(e,n,r){return null===e[r]?1:null===n[r]||n[r]<e[r]?-1:n[r]>e[r]?1:0}function l(e,n){return"desc"===e?(e,r)=>i(e,r,n):(e,r)=>-i(e,r,n)}r.d(n,{$W:function(){return Z},K:function(){return v},et:function(){return x},S_:function(){return I},Z4:function(){return C},hM:function(){return j},fQ:function(){return t},sQ:function(){return l},x6:function(){return a}});var s=r(2265);function a(e){let[n,r]=(0,s.useState)(!!(null==e?void 0:e.defaultDense)),[t,i]=(0,s.useState)((null==e?void 0:e.defaultCurrentPage)||0),[l,a]=(0,s.useState)((null==e?void 0:e.defaultOrderBy)||"name"),[c,o]=(0,s.useState)((null==e?void 0:e.defaultRowsPerPage)||5),[d,h]=(0,s.useState)((null==e?void 0:e.defaultOrder)||"asc"),[x,u]=(0,s.useState)((null==e?void 0:e.defaultSelected)||[]),g=(0,s.useCallback)(e=>{let n=l===e&&"asc"===d;""!==e&&(h(n?"desc":"asc"),a(e))},[d,l]),j=(0,s.useCallback)(e=>{let n=x.includes(e)?x.filter(n=>n!==e):[...x,e];u(n)},[x]),Z=(0,s.useCallback)(e=>{i(0),o(parseInt(e.target.value,10))},[]),p=(0,s.useCallback)(e=>{r(e.target.checked)},[]),m=(0,s.useCallback)((e,n)=>{if(e){u(n);return}u([])},[]),f=(0,s.useCallback)((e,n)=>{i(n)},[]),b=(0,s.useCallback)(()=>{i(0)},[]),w=(0,s.useCallback)(e=>{u([]),t&&e<2&&i(t-1)},[t]),v=(0,s.useCallback)(e=>{let{totalRows:n,totalRowsInPage:r,totalRowsFiltered:l}=e,s=x.length;if(u([]),t){if(s===r)i(t-1);else if(s===l)i(0);else if(s>r){let e=Math.ceil((n-s)/c)-1;i(e)}}},[t,c,x.length]);return{dense:n,order:d,page:t,orderBy:l,rowsPerPage:c,selected:x,onSelectRow:j,onSelectAllRows:m,onSort:g,onChangePage:f,onChangeDense:p,onResetPage:b,onChangeRowsPerPage:Z,onUpdatePageDeleteRow:w,onUpdatePageDeleteRows:v,setPage:i,setDense:r,setOrder:h,setOrderBy:a,setSelected:u,setRowsPerPage:o}}var c=r(57437),o=r(77370),d=r(80470),h=r(77168);function x(e){let{notFound:n,sx:r}=e;return(0,c.jsx)(o.Z,{children:n?(0,c.jsx)(d.Z,{colSpan:12,children:(0,c.jsx)(h.Z,{filled:!0,title:"No Data",sx:{py:10,...r}})}):(0,c.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var u=r(13457),g=r(11898);function j(e){let{...n}=e;return(0,c.jsx)(o.Z,{...n,children:(0,c.jsx)(d.Z,{colSpan:12,children:(0,c.jsxs)(u.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,c.jsx)(g.Z,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),(0,c.jsx)(g.Z,{sx:{width:1,height:12}}),(0,c.jsx)(g.Z,{sx:{width:180,height:12}}),(0,c.jsx)(g.Z,{sx:{width:160,height:12}}),(0,c.jsx)(g.Z,{sx:{width:140,height:12}}),(0,c.jsx)(g.Z,{sx:{width:120,height:12}})]})})})}function Z(e){let{emptyRows:n,height:r}=e;return n?(0,c.jsx)(o.Z,{sx:{...r&&{height:r*n}},children:(0,c.jsx)(d.Z,{colSpan:9})}):null}var p=r(96507),m=r(16171),f=r(66988),b=r(95781);let w={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function v(e){let{order:n,orderBy:r,rowCount:t=0,headLabel:i,numSelected:l=0,onSort:s,onSelectAllRows:a,sx:h}=e;return(0,c.jsx)(f.Z,{sx:h,children:(0,c.jsxs)(o.Z,{children:[a&&(0,c.jsx)(d.Z,{padding:"checkbox",children:(0,c.jsx)(m.Z,{indeterminate:!!l&&l<t,checked:!!t&&l===t,onChange:e=>a(e.target.checked)})}),i.map(e=>(0,c.jsx)(d.Z,{align:e.align||"left",sortDirection:r===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,c.jsxs)(b.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?n:"asc",onClick:()=>s(e.id),children:[e.label,r===e.id?(0,c.jsx)(p.Z,{sx:{...w},children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id))]})})}var y=r(85269);function C(e){let{dense:n,action:r,rowCount:t,numSelected:i,onSelectAllRows:l,sx:s,...a}=e;return i?(0,c.jsxs)(u.Z,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...n&&{height:38},...s},children:[(0,c.jsx)(m.Z,{indeterminate:!!i&&i<t,checked:!!t&&i===t,onChange:e=>l(e.target.checked)}),(0,c.jsxs)(y.Z,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...n&&{ml:3}},children:[i," selected"]}),r&&r]}):null}var P=r(88444),k=r(27400),S=r(35904);function I(e){let{dense:n,onChangeDense:r,rowsPerPageOptions:t=[5,10,25],sx:i,...l}=e;return(0,c.jsxs)(p.Z,{sx:{position:"relative",...i},children:[(0,c.jsx)(S.Z,{rowsPerPageOptions:t,component:"div",...l,sx:{borderTopColor:"transparent"}}),r&&(0,c.jsx)(k.Z,{label:"Dense",control:(0,c.jsx)(P.Z,{checked:n,onChange:r}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},15389:function(e,n,r){"use strict";r.d(n,{k:function(){return i}});var t=r(2265);function i(e){let[n,r]=(0,t.useState)(!!e),i=(0,t.useCallback)(()=>{r(!0)},[]),l=(0,t.useCallback)(()=>{r(!1)},[]),s=(0,t.useCallback)(()=>{r(e=>!e)},[]);return{value:n,onTrue:i,onFalse:l,onToggle:s,setValue:r}}},12040:function(e,n,r){"use strict";r.d(n,{r:function(){return c}});var t=r(57437),i=r(2265),l=r(61396),s=r.n(l);let a=(0,i.forwardRef)((e,n)=>{let{...r}=e;return(0,t.jsx)(s(),{ref:n,...r})});var c=a},78001:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(57437),i=r(89975),l=r(14486),s=r(26114),a=r(13457);function c(e){let{title:n,sx:r,children:c,...o}=e;return(0,t.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,i.Fq)(e.palette.grey[500],.04)},children:[n&&(0,t.jsx)(s.Z,{title:n}),(0,t.jsx)(a.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...r},children:c})]})}},2873:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return U}});var t=r(57437),i=r(96507),l=r(15133),s=r(13457),a=r(88938),c=r(26114),o=r(46843),d=r(18948),h=r(73701),x=r(77370),u=r(80470),g=r(39279),j=r(15795),Z=r(1839),p=r(38788);function m(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}let f=[m("Frozen yoghurt",159,6,24,4),m("Ice cream sandwich",237,9,37,4.3),m("Eclair",262,16,24,6),m("Cupcake",305,3.7,67,4.3),m("Gingerbread",356,16,49,3.9)],b=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function w(){return(0,t.jsx)(j.Z,{sx:{mt:3,overflow:"unset"},children:(0,t.jsx)(Z.Z,{children:(0,t.jsxs)(h.Z,{sx:{minWidth:800},children:[(0,t.jsx)(p.K,{headLabel:b}),(0,t.jsx)(g.Z,{children:f.map(e=>(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{children:e.name}),(0,t.jsx)(u.Z,{align:"right",children:e.calories}),(0,t.jsx)(u.Z,{align:"right",children:e.fat}),(0,t.jsx)(u.Z,{align:"right",children:e.carbs}),(0,t.jsx)(u.Z,{align:"right",children:e.protein})]},e.name))})]})})})}var v=r(14486),y=r(56314),C=r(66988),P=r(52653),k=r(85269),S=r(15389),I=r(94700);function R(e,n,r,t,i,l){return{name:e,calories:n,fat:r,carbs:t,protein:i,price:l,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}let F=[R("Frozen yoghurt",159,6,24,4,3.99),R("Ice cream sandwich",237,9,37,4.3,4.99),R("Eclair",262,16,24,6,3.79),R("Cupcake",305,3.7,67,4.3,2.5),R("Gingerbread",356,16,49,3.9,1.5)];function W(){return(0,t.jsx)(j.Z,{sx:{mt:3,overflow:"unset"},children:(0,t.jsx)(Z.Z,{children:(0,t.jsxs)(h.Z,{sx:{minWidth:800},children:[(0,t.jsx)(C.Z,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{}),(0,t.jsx)(u.Z,{children:"Dessert (100g serving)"}),(0,t.jsx)(u.Z,{align:"right",children:"Calories"}),(0,t.jsx)(u.Z,{align:"right",children:"Fat\xa0(g)"}),(0,t.jsx)(u.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,t.jsx)(u.Z,{align:"right",children:"Protein\xa0(g)"})]})}),(0,t.jsx)(g.Z,{children:F.map(e=>(0,t.jsx)(D,{row:e},e.name))})]})})})}function D(e){let{row:n}=e,r=(0,S.k)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(P.Z,{size:"small",color:r.value?"inherit":"default",onClick:r.onToggle,children:(0,t.jsx)(I.Z,{icon:r.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),(0,t.jsx)(u.Z,{component:"th",scope:"row",children:n.name}),(0,t.jsx)(u.Z,{align:"right",children:n.calories}),(0,t.jsx)(u.Z,{align:"right",children:n.fat}),(0,t.jsx)(u.Z,{align:"right",children:n.carbs}),(0,t.jsx)(u.Z,{align:"right",children:n.protein})]}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(u.Z,{sx:{py:0},colSpan:6,children:(0,t.jsx)(y.Z,{in:r.value,unmountOnExit:!0,children:(0,t.jsxs)(v.Z,{variant:"outlined",sx:{py:2,borderRadius:1.5,...r.value&&{boxShadow:e=>e.customShadows.z20}},children:[(0,t.jsx)(k.Z,{variant:"h6",sx:{m:2,mt:0},children:"History"}),(0,t.jsxs)(h.Z,{size:"small","aria-label":"purchases",children:[(0,t.jsx)(C.Z,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{children:"Date"}),(0,t.jsx)(u.Z,{children:"Customer"}),(0,t.jsx)(u.Z,{align:"right",children:"Amount"}),(0,t.jsx)(u.Z,{align:"right",children:"Total price ($)"})]})}),(0,t.jsx)(g.Z,{children:n.history.map(e=>(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{component:"th",scope:"row",children:e.date}),(0,t.jsx)(u.Z,{children:e.customerId}),(0,t.jsx)(u.Z,{align:"right",children:e.amount}),(0,t.jsx)(u.Z,{align:"right",children:Math.round(e.amount*n.price*100)/100})]},e.date))})]})]})})})})]})}var A=r(2265),B=r(78276),z=r(16171);function E(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}let N=[E("Cupcake",305,3.7,67,4.3),E("Donut",452,25,51,4.9),E("Eclair",262,16,24,6),E("Frozen yoghurt",159,6,24,4),E("Gingerbread",356,16,49,3.9),E("Honeycomb",408,3.2,87,6.5),E("Ice cream sandwich",237,9,37,4.3),E("Jelly Bean",375,0,94,0),E("KitKat",518,26,65,7),E("Lollipop",392,.2,98,0),E("Marshmallow",318,0,81,2),E("Nougat",360,19,9,37)],O=[{id:"name",label:"Dessert\xa0(100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat\xa0(g)",align:"center"},{id:"carbs",label:"Carbs\xa0(g)",align:"center"},{id:"protein",label:"Protein\xa0(g)",align:"center"}];function G(){let e=(0,p.x6)({defaultOrderBy:"calories"}),[n,r]=(0,A.useState)([]);(0,A.useEffect)(()=>{r(N)},[]);let i=function(e){let{inputData:n,comparator:r}=e,t=n.map((e,n)=>[e,n]);return t.sort((e,n)=>{let t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]}),n=t.map(e=>e[0])}({inputData:n,comparator:(0,p.sQ)(e.order,e.orderBy)}),l=e.dense?34:54;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[(0,t.jsx)(k.Z,{variant:"h6",children:"Sorting & Selecting"}),(0,t.jsx)(B.Z,{title:"Filter list",children:(0,t.jsx)(P.Z,{children:(0,t.jsx)(I.Z,{icon:"ic:round-filter-list"})})})]}),(0,t.jsxs)(j.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,t.jsx)(p.Z4,{dense:e.dense,numSelected:e.selected.length,rowCount:n.length,onSelectAllRows:r=>e.onSelectAllRows(r,n.map(e=>e.name)),action:(0,t.jsx)(B.Z,{title:"Delete",children:(0,t.jsx)(P.Z,{color:"primary",children:(0,t.jsx)(I.Z,{icon:"solar:trash-bin-trash-bold"})})})}),(0,t.jsx)(Z.Z,{children:(0,t.jsxs)(h.Z,{size:e.dense?"small":"medium",sx:{minWidth:800},children:[(0,t.jsx)(p.K,{order:e.order,orderBy:e.orderBy,headLabel:O,rowCount:n.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:r=>e.onSelectAllRows(r,n.map(e=>e.name))}),(0,t.jsxs)(g.Z,{children:[i.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(n=>(0,t.jsxs)(x.Z,{hover:!0,onClick:()=>e.onSelectRow(n.name),selected:e.selected.includes(n.name),children:[(0,t.jsx)(u.Z,{padding:"checkbox",children:(0,t.jsx)(z.Z,{checked:e.selected.includes(n.name)})}),(0,t.jsxs)(u.Z,{children:[" ",n.name," "]}),(0,t.jsx)(u.Z,{align:"center",children:n.calories}),(0,t.jsx)(u.Z,{align:"center",children:n.fat}),(0,t.jsx)(u.Z,{align:"center",children:n.carbs}),(0,t.jsx)(u.Z,{align:"center",children:n.protein})]},n.name)),(0,t.jsx)(p.$W,{height:l,emptyRows:(0,p.fQ)(e.page,e.rowsPerPage,n.length)})]})]})})]}),(0,t.jsx)(p.S_,{count:i.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})}function _(e,n,r,t){return{name:e,code:n,population:r,size:t,density:r/t}}let M=[_("India","IN",1324171354,3287263),_("China","CN",1403500365,9596961),_("Italy","IT",60483973,301340),_("United States","US",327167434,9833520),_("Canada","CA",37602103,9984670),_("Australia","AU",25475400,7692024),_("Germany","DE",83019200,357578),_("Ireland","IE",4857e3,70273),_("Mexico","MX",126577691,1972550),_("Japan","JP",126317e3,377973),_("France","FR",67022e3,640679),_("United Kingdom","GB",67545757,242495),_("Russia","RU",146793744,17098246),_("Nigeria","NG",200962417,923768),_("Brazil","BR",210147125,8515767)],T=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function H(){let e=(0,p.x6)({defaultRowsPerPage:10});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.Z,{sx:{overflow:"unset"},children:(0,t.jsx)(Z.Z,{sx:{maxHeight:400},children:(0,t.jsxs)(h.Z,{stickyHeader:!0,sx:{minWidth:800},children:[(0,t.jsxs)(C.Z,{children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(u.Z,{align:"center",colSpan:2,sx:{background:e=>e.palette.background.paper},children:"Country"}),(0,t.jsx)(u.Z,{align:"center",colSpan:3,sx:{background:e=>e.palette.background.paper},children:"Details"})]}),(0,t.jsx)(x.Z,{children:T.map(e=>(0,t.jsx)(u.Z,{align:e.align,style:{top:56,minWidth:e.minWidth},children:e.label},e.id))})]}),(0,t.jsx)(g.Z,{children:M.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(e=>(0,t.jsx)(x.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:T.map(n=>{let r=e[n.id];return(0,t.jsx)(u.Z,{align:n.align,children:n.format&&"number"==typeof r?n.format(r):r},n.id)})},e.code))})]})})}),(0,t.jsx)(p.S_,{count:M.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage})]})}var L=r(78001);function U(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(d.Z,{heading:"Table",links:[{name:"Components",href:o.H.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})})}),(0,t.jsx)(a.Z,{sx:{my:10},children:(0,t.jsxs)(s.Z,{spacing:3,children:[(0,t.jsx)(L.Z,{children:(0,t.jsxs)(l.Z,{sx:{width:1},children:[(0,t.jsx)(c.Z,{title:"Basic Table"}),(0,t.jsx)(w,{})]})}),(0,t.jsx)(L.Z,{children:(0,t.jsx)(l.Z,{sx:{width:1},children:(0,t.jsx)(G,{})})}),(0,t.jsx)(L.Z,{children:(0,t.jsxs)(l.Z,{sx:{width:1},children:[(0,t.jsx)(c.Z,{title:"Grouping & FixedHeader"}),(0,t.jsx)(H,{})]})}),(0,t.jsx)(L.Z,{children:(0,t.jsxs)(l.Z,{sx:{width:1},children:[(0,t.jsx)(c.Z,{title:"Collapsible Table"}),(0,t.jsx)(W,{})]})})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9263,5478,770,8276,8599,9516,659,9058,7611,654,4839,7381,6843,2971,596,1744],function(){return e(e.s=18180)}),_N_E=e.O()}]);