(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7537],{82044:function(e,i,n){Promise.resolve().then(n.bind(n,17916))},18948:function(e,i,n){"use strict";n.d(i,{Z:function(){return x}});var s=n(57437),r=n(96507),l=n(25210),t=n(13457),d=n(85269),c=n(64898),a=n(12040);function o(e){let{link:i,activeLast:n,disabled:t}=e,{name:d,href:c,icon:o}=i,x={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...t&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:o}),d]});return c?(0,s.jsx)(l.Z,{component:a.r,href:c,sx:x,children:h}):(0,s.jsxs)(r.Z,{sx:x,children:[" ",h," "]})}function x(e){let{links:i,action:n,heading:a,moreLink:x,activeLast:j,sx:Z,...u}=e,m=i[i.length-1].name;return(0,s.jsxs)(r.Z,{sx:{...Z},children:[(0,s.jsxs)(t.Z,{direction:"row",alignItems:"center",children:[(0,s.jsxs)(r.Z,{sx:{flexGrow:1},children:[a&&(0,s.jsx)(d.Z,{variant:"h4",gutterBottom:!0,children:a}),!!i.length&&(0,s.jsx)(c.Z,{separator:(0,s.jsx)(h,{}),...u,children:i.map(e=>(0,s.jsx)(o,{link:e,activeLast:j,disabled:e.name===m},e.name||""))})]}),n&&(0,s.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!x&&(0,s.jsx)(r.Z,{sx:{mt:2},children:x.map(e=>(0,s.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,s.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,i,n){"use strict";n.d(i,{Z:function(){return c}});var s=n(57437),r=n(2265),l=n(39830),t=n(96507);let d=(0,r.forwardRef)((e,i)=>{let{icon:n,width:r=20,sx:d,...c}=e;return(0,s.jsx)(t.Z,{ref:i,component:l.JO,className:"component-iconify",icon:n,sx:{width:r,height:r,...d}})});var c=d},12040:function(e,i,n){"use strict";n.d(i,{r:function(){return c}});var s=n(57437),r=n(2265),l=n(61396),t=n.n(l);let d=(0,r.forwardRef)((e,i)=>{let{...n}=e;return(0,s.jsx)(t(),{ref:i,...n})});var c=d},78001:function(e,i,n){"use strict";n.d(i,{Z:function(){return c}});var s=n(57437),r=n(89975),l=n(14486),t=n(26114),d=n(13457);function c(e){let{title:i,sx:n,children:c,...a}=e;return(0,s.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,r.Fq)(e.palette.grey[500],.04)},children:[i&&(0,s.jsx)(t.Z,{title:i}),(0,s.jsx)(d.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...n},children:c})]})}},17916:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return O}});var s=n(57437),r=n(2265),l=n(80230),t=n(96507),d=n(80565),c=n(14486),a=n(210),o=n(88444),x=n(54986),h=n(56314),j=n(16171),Z=n(88938),u=n(52653),m=n(8864),p=n(38212),b=n(23341),f=n(73393),w=n(93619),y=n(72502),g=n(46843),v=n(94700),k=n(18948),C=n(78001);function S(e){return(0,s.jsx)(y.Z,{component:"a",...e})}function O(){let[e,i]=(0,r.useState)(!0),[n,O]=(0,r.useState)(1),[I,P]=(0,r.useState)([0]),[_,L]=(0,r.useState)(["wifi"]),N=(0,r.useCallback)(()=>{i(e=>!e)},[]),E=(0,r.useCallback)((e,i)=>{O(i)},[]),F=e=>()=>{let i=I.indexOf(e),n=[...I];-1===i?n.push(e):n.splice(i,1),P(n)},R=e=>()=>{let i=_.indexOf(e),n=[..._];-1===i?n.push(e):n.splice(i,1),L(n)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,s.jsx)(Z.Z,{children:(0,s.jsx)(k.Z,{heading:"List",links:[{name:"Components",href:g.H.components},{name:"Lists"}],moreLink:["https://mui.com/components/lists"]})})}),(0,s.jsx)(Z.Z,{sx:{my:10},children:(0,s.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,s.jsx)(C.Z,{title:"Simple",children:(0,s.jsxs)(c.Z,{variant:"outlined",sx:{width:1},children:[(0,s.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"solar:inbox-in-bold",width:24})}),(0,s.jsx)(p.Z,{primary:"Inbox"})]}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"fluent:mail-24-filled",width:24})}),(0,s.jsx)(p.Z,{primary:"Drafts"})]})]}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(d.Z,{component:"nav","aria-label":"secondary mailbox folders",children:[(0,s.jsx)(y.Z,{children:(0,s.jsx)(p.Z,{primary:"Trash"})}),(0,s.jsx)(S,{href:"#simple-list",children:(0,s.jsx)(p.Z,{primary:"Spam"})})]})]})}),(0,s.jsx)(C.Z,{title:"Nested",children:(0,s.jsx)(c.Z,{variant:"outlined",sx:{width:1},children:(0,s.jsxs)(d.Z,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,s.jsx)(b.Z,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"iconamoon:send-fill",width:24})}),(0,s.jsx)(p.Z,{primary:"Sent mail"})]}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"fluent:mail-24-filled",width:24})}),(0,s.jsx)(p.Z,{primary:"Drafts"})]}),(0,s.jsxs)(y.Z,{onClick:N,children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"solar:inbox-in-bold",width:24})}),(0,s.jsx)(p.Z,{primary:"Inbox"}),e?(0,s.jsx)(v.Z,{icon:"eva:arrow-ios-upward-fill"}):(0,s.jsx)(v.Z,{icon:"eva:arrow-ios-downward-fill"})]}),(0,s.jsx)(h.Z,{in:e,unmountOnExit:!0,children:(0,s.jsx)(d.Z,{component:"div",disablePadding:!0,children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:round-star-border",width:24})}),(0,s.jsx)(p.Z,{primary:"Starred"})]})})})]})})}),(0,s.jsx)(C.Z,{title:"Folder",children:(0,s.jsx)(c.Z,{variant:"outlined",sx:{width:1},children:(0,s.jsxs)(d.Z,{children:[(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(f.Z,{children:(0,s.jsx)(a.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:baseline-image",width:24})})}),(0,s.jsx)(p.Z,{primary:"Photos",secondary:"Jan 9, 2014"})]}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(f.Z,{children:(0,s.jsx)(a.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:baseline-work",width:24})})}),(0,s.jsx)(p.Z,{primary:"Work",secondary:"Jan 7, 2014"})]}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(f.Z,{children:(0,s.jsx)(a.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:round-beach-access",width:24})})}),(0,s.jsx)(p.Z,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),(0,s.jsx)(C.Z,{title:"Selected",children:(0,s.jsxs)(c.Z,{variant:"outlined",sx:{width:1},children:[(0,s.jsxs)(d.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,s.jsxs)(y.Z,{selected:0===n,onClick:e=>E(e,0),children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"solar:inbox-in-bold",width:24})}),(0,s.jsx)(p.Z,{primary:"Inbox"})]}),(0,s.jsxs)(y.Z,{selected:1===n,onClick:e=>E(e,1),children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"fluent:mail-24-filled",width:24})}),(0,s.jsx)(p.Z,{primary:"Drafts"})]})]}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(d.Z,{component:"nav","aria-label":"secondary mailbox folder",children:[(0,s.jsx)(y.Z,{selected:2===n,onClick:e=>E(e,2),children:(0,s.jsx)(p.Z,{primary:"Trash"})}),(0,s.jsx)(y.Z,{selected:3===n,onClick:e=>E(e,3),children:(0,s.jsx)(p.Z,{primary:"Spam"})})]})]})}),(0,s.jsx)(C.Z,{title:"Controls",children:(0,s.jsx)(c.Z,{variant:"outlined",sx:{width:1},children:(0,s.jsx)(d.Z,{children:[0,1,2,3].map(e=>{let i="checkbox-list-label-".concat(e);return(0,s.jsxs)(y.Z,{role:void 0,dense:!0,onClick:F(e),children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(j.Z,{edge:"start",checked:-1!==I.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":i}})}),(0,s.jsx)(p.Z,{id:i,primary:"Line item ".concat(e+1)}),(0,s.jsx)(w.Z,{children:(0,s.jsx)(u.Z,{edge:"end",children:(0,s.jsx)(v.Z,{icon:"solar:chat-round-dots-bold",width:24})})})]},e)})})})}),(0,s.jsx)(C.Z,{title:"Switch",children:(0,s.jsx)(c.Z,{variant:"outlined",sx:{width:1},children:(0,s.jsxs)(d.Z,{subheader:(0,s.jsx)(b.Z,{children:"Settings"}),children:[(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:baseline-wifi",width:24})}),(0,s.jsx)(p.Z,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),(0,s.jsx)(w.Z,{children:(0,s.jsx)(o.Z,{edge:"end",onChange:R("wifi"),checked:-1!==_.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(m.Z,{children:(0,s.jsx)(v.Z,{icon:"ic:baseline-bluetooth",width:24})}),(0,s.jsx)(p.Z,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),(0,s.jsx)(w.Z,{children:(0,s.jsx)(o.Z,{edge:"end",onChange:R("bluetooth"),checked:-1!==_.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9263,9058,1072,6843,2971,596,1744],function(){return e(e.s=82044)}),_N_E=e.O()}]);