(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3542],{55415:function(e,n,t){Promise.resolve().then(t.bind(t,24919))},18948:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(57437),i=t(96507),l=t(25210),s=t(13457),o=t(85269),a=t(64898),c=t(12040);function d(e){let{link:n,activeLast:t,disabled:s}=e,{name:o,href:a,icon:d}=n,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...s&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return a?(0,r.jsx)(l.Z,{component:c.r,href:a,sx:u,children:h}):(0,r.jsxs)(i.Z,{sx:u,children:[" ",h," "]})}function u(e){let{links:n,action:t,heading:c,moreLink:u,activeLast:x,sx:p,...m}=e,f=n[n.length-1].name;return(0,r.jsxs)(i.Z,{sx:{...p},children:[(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,r.jsxs)(i.Z,{sx:{flexGrow:1},children:[c&&(0,r.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,r.jsx)(a.Z,{separator:(0,r.jsx)(h,{}),...m,children:n.map(e=>(0,r.jsx)(d,{link:e,activeLast:x,disabled:e.name===f},e.name||""))})]}),t&&(0,r.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!u&&(0,r.jsx)(i.Z,{sx:{mt:2},children:u.map(e=>(0,r.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,r.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(57437),i=t(2265),l=t(39830),s=t(96507);let o=(0,i.forwardRef)((e,n)=>{let{icon:t,width:i=20,sx:o,...a}=e;return(0,r.jsx)(s.Z,{ref:n,component:l.JO,className:"component-iconify",icon:t,sx:{width:i,height:i,...o}})});var a=o},12040:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var r=t(57437),i=t(2265),l=t(61396),s=t.n(l);let o=(0,i.forwardRef)((e,n)=>{let{...t}=e;return(0,r.jsx)(s(),{ref:n,...t})});var a=o},78001:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(57437),i=t(89975),l=t(14486),s=t(26114),o=t(13457);function a(e){let{title:n,sx:t,children:a,...c}=e;return(0,r.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,i.Fq)(e.palette.grey[500],.04)},children:[n&&(0,r.jsx)(s.Z,{title:n}),(0,r.jsx)(o.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...t},children:a})]})}},24919:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(57437),i=t(2265),l=t(96507),s=t(57611),o=t(80565),a=t(49600),c=t(64494),d=t(88938),u=t(52653),h=t(38212),x=t(72502),p=t(46843),m=t(94700),f=t(18948),j=t(78001);let Z=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],g=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function b(){let[e,n]=(0,i.useState)(1),[t,b]=(0,i.useState)(null),[k,v]=(0,i.useState)(null),[y,C]=(0,i.useState)(null),w=(0,i.useCallback)(e=>{C(e.currentTarget)},[]),S=(0,i.useCallback)(e=>{v(e.currentTarget)},[]),E=(0,i.useCallback)((e,t)=>{n(t),v(null)},[]),P=(0,i.useCallback)(e=>{b(e.currentTarget)},[]),_=(0,i.useCallback)(()=>{b(null)},[]),H=(0,i.useCallback)(()=>{C(null)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(f.Z,{heading:"Menu",links:[{name:"Components",href:p.H.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),(0,r.jsx)(d.Z,{sx:{my:10},children:(0,r.jsxs)(l.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[(0,r.jsxs)(j.Z,{title:"Simple",children:[(0,r.jsx)(a.Z,{variant:"outlined",onClick:P,children:"Open Menu"}),(0,r.jsx)(s.Z,{id:"simple-menu",anchorEl:t,onClose:_,open:!!t,children:["Profile","My account","Logout"].map(e=>(0,r.jsx)(c.Z,{selected:"Profile"===e,onClick:_,children:e},e))})]}),(0,r.jsxs)(j.Z,{title:"Selected",children:[(0,r.jsx)(o.Z,{component:"nav","aria-label":"Device settings",children:(0,r.jsx)(x.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:S,children:(0,r.jsx)(h.Z,{primary:"When device is locked",secondary:Z[e]})})}),(0,r.jsx)(s.Z,{id:"lock-menu",anchorEl:k,onClose:_,open:!!k,children:Z.map((n,t)=>(0,r.jsx)(c.Z,{disabled:0===t,selected:t===e,onClick:e=>E(e,t),children:n},n))})]}),(0,r.jsxs)(j.Z,{title:"Max height",children:[(0,r.jsx)(u.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:w,children:(0,r.jsx)(m.Z,{icon:"eva:more-vertical-fill"})}),(0,r.jsx)(s.Z,{id:"long-menu",anchorEl:y,onClose:H,open:!!y,slotProps:{paper:{sx:{width:"20ch",maxHeight:216}}},children:g.map(e=>(0,r.jsx)(c.Z,{selected:"Pyxis"===e,onClick:H,children:e},e))})]})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9263,5478,9516,9058,7611,8308,6843,2971,596,1744],function(){return e(e.s=55415)}),_N_E=e.O()}]);