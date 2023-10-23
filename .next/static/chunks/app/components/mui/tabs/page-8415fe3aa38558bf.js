(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1309],{80811:function(e,n,l){Promise.resolve().then(l.bind(l,43548))},18948:function(e,n,l){"use strict";l.d(n,{Z:function(){return u}});var i=l(57437),a=l(96507),s=l(25210),t=l(13457),r=l(85269),o=l(64898),c=l(12040);function d(e){let{link:n,activeLast:l,disabled:t}=e,{name:r,href:o,icon:d}=n,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...t&&!l&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),r]});return o?(0,i.jsx)(s.Z,{component:c.r,href:o,sx:u,children:h}):(0,i.jsxs)(a.Z,{sx:u,children:[" ",h," "]})}function u(e){let{links:n,action:l,heading:c,moreLink:u,activeLast:x,sx:v,...b}=e,j=n[n.length-1].name;return(0,i.jsxs)(a.Z,{sx:{...v},children:[(0,i.jsxs)(t.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(a.Z,{sx:{flexGrow:1},children:[c&&(0,i.jsx)(r.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,i.jsx)(o.Z,{separator:(0,i.jsx)(h,{}),...b,children:n.map(e=>(0,i.jsx)(d,{link:e,activeLast:x,disabled:e.name===j},e.name||""))})]}),l&&(0,i.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",l," "]})]}),!!u&&(0,i.jsx)(a.Z,{sx:{mt:2},children:u.map(e=>(0,i.jsx)(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,i.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,n,l){"use strict";l.d(n,{Z:function(){return o}});var i=l(57437),a=l(2265),s=l(39830),t=l(96507);let r=(0,a.forwardRef)((e,n)=>{let{icon:l,width:a=20,sx:r,...o}=e;return(0,i.jsx)(t.Z,{ref:n,component:s.JO,className:"component-iconify",icon:l,sx:{width:a,height:a,...r}})});var o=r},12040:function(e,n,l){"use strict";l.d(n,{r:function(){return o}});var i=l(57437),a=l(2265),s=l(61396),t=l.n(s);let r=(0,a.forwardRef)((e,n)=>{let{...l}=e;return(0,i.jsx)(t(),{ref:n,...l})});var o=r},78001:function(e,n,l){"use strict";l.d(n,{Z:function(){return o}});var i=l(57437),a=l(89975),s=l(14486),t=l(26114),r=l(13457);function o(e){let{title:n,sx:l,children:o,...c}=e;return(0,i.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,a.Fq)(e.palette.grey[500],.04)},children:[n&&(0,i.jsx)(t.Z,{title:n}),(0,i.jsx)(r.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...l},children:o})]})}},43548:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return j}});var i=l(57437),a=l(2265),s=l(80230),t=l(55303),r=l(96507),o=l(25738),c=l(13457),d=l(88938),u=l(46843),h=l(94700),x=l(18948),v=l(78001);let b=[{value:"one",icon:(0,i.jsx)(h.Z,{icon:"solar:phone-bold",width:24}),label:"Item One"},{value:"two",icon:(0,i.jsx)(h.Z,{icon:"solar:heart-bold",width:24}),label:"Item Two"},{value:"three",icon:(0,i.jsx)(h.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Three",disabled:!0},{value:"four",icon:(0,i.jsx)(h.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Four"},{value:"five",icon:(0,i.jsx)(h.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Five",disabled:!0},{value:"six",icon:(0,i.jsx)(h.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Six"},{value:"seven",icon:(0,i.jsx)(h.Z,{icon:"eva:headphones-fill",width:24}),label:"Item Seven"}];function j(){let[e,n]=(0,a.useState)("one"),[l,h]=(0,a.useState)("one"),j=(0,a.useCallback)((e,l)=>{n(l)},[]),Z=(0,a.useCallback)((e,n)=>{h(n)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(x.Z,{heading:"Tabs",links:[{name:"Components",href:u.H.components},{name:"Tabs"}],moreLink:["https://mui.com/components/tabs"]})})}),(0,i.jsx)(d.Z,{sx:{my:10},children:(0,i.jsxs)(s.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,i.jsx)(v.Z,{title:"Text",children:(0,i.jsxs)(c.Z,{spacing:2,sx:{width:1},children:[(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{value:e.value,label:e.label},e.value))}),b.slice(0,3).map(n=>n.value===e&&(0,i.jsx)(r.Z,{sx:{p:2,borderRadius:1,bgcolor:"background.neutral"},children:n.label},n.value))]})}),(0,i.jsx)(v.Z,{title:"Icon",children:(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{icon:e.icon,value:e.value},e.value))})}),(0,i.jsx)(v.Z,{title:"Top",children:(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{iconPosition:"top",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),(0,i.jsx)(v.Z,{title:"Bottom",children:(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{iconPosition:"bottom",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),(0,i.jsx)(v.Z,{title:"Start",children:(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),(0,i.jsx)(v.Z,{title:"End",children:(0,i.jsx)(o.Z,{value:e,onChange:j,children:b.slice(0,3).map(e=>(0,i.jsx)(t.Z,{iconPosition:"end",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})}),(0,i.jsx)(v.Z,{title:"Scrollable",children:(0,i.jsx)(r.Z,{sx:{flexGrow:1,width:"100%",maxWidth:320},children:(0,i.jsx)(o.Z,{value:l,onChange:Z,children:b.map(e=>(0,i.jsx)(t.Z,{label:e.label,value:e.value},e.value))})})})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9058,6791,6843,2971,596,1744],function(){return e(e.s=80811)}),_N_E=e.O()}]);