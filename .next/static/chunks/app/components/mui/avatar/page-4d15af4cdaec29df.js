(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9559],{30603:function(e,r,t){Promise.resolve().then(t.bind(t,18933))},18948:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(57437),i=t(96507),a=t(25210),s=t(13457),l=t(85269),c=t(64898),o=t(12040);function d(e){let{link:r,activeLast:t,disabled:s}=e,{name:l,href:c,icon:d}=r,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...s&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),l]});return c?(0,n.jsx)(a.Z,{component:o.r,href:c,sx:h,children:x}):(0,n.jsxs)(i.Z,{sx:h,children:[" ",x," "]})}function h(e){let{links:r,action:t,heading:o,moreLink:h,activeLast:m,sx:u,...p}=e,j=r[r.length-1].name;return(0,n.jsxs)(i.Z,{sx:{...u},children:[(0,n.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[o&&(0,n.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),!!r.length&&(0,n.jsx)(c.Z,{separator:(0,n.jsx)(x,{}),...p,children:r.map(e=>(0,n.jsx)(d,{link:e,activeLast:m,disabled:e.name===j},e.name||""))})]}),t&&(0,n.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,n.jsx)(i.Z,{sx:{mt:2},children:h.map(e=>(0,n.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return(0,n.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(57437),i=t(2265),a=t(39830),s=t(96507);let l=(0,i.forwardRef)((e,r)=>{let{icon:t,width:i=20,sx:l,...c}=e;return(0,n.jsx)(s.Z,{ref:r,component:a.JO,className:"component-iconify",icon:t,sx:{width:i,height:i,...l}})});var c=l},12040:function(e,r,t){"use strict";t.d(r,{r:function(){return c}});var n=t(57437),i=t(2265),a=t(61396),s=t.n(a);let l=(0,i.forwardRef)((e,r)=>{let{...t}=e;return(0,n.jsx)(s(),{ref:r,...t})});var c=l},78001:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(57437),i=t(89975),a=t(14486),s=t(26114),l=t(13457);function c(e){let{title:r,sx:t,children:c,...o}=e;return(0,n.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,i.Fq)(e.palette.grey[500],.04)},children:[r&&(0,n.jsx)(s.Z,{title:r}),(0,n.jsx)(l.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...t},children:c})]})}},18933:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(57437),i=t(80230),a=t(41101),s=t(96507),l=t(13457),c=t(97292),o=t(210),d=t(78276),h=t(88938),x=t(14238),m=t(91331),u=t(46843),p=t(99998),j=t(94700),Z=t(18948),f=t(78001);let g=["default","primary","secondary","info","success","warning","error"],v=[24,32,40,56],b=["circular","rounded","square"],y=["online","alway","busy","offline"];function w(){let e=(0,a.Z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{sx:{py:5,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,n.jsx)(h.Z,{children:(0,n.jsx)(Z.Z,{heading:"Avatar",links:[{name:"Components",href:u.H.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})})}),(0,n.jsx)(h.Z,{sx:{my:10},children:(0,n.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,n.jsx)(f.Z,{title:"Image",children:[1,2,3,4,5].map((e,r)=>(0,n.jsx)(o.Z,{alt:p.QJ.fullName(r+1),src:p.QJ.image.avatar(r+1)},r))}),(0,n.jsx)(f.Z,{title:"Letter",children:g.map((e,r)=>(0,n.jsx)(d.Z,{title:e,children:(0,n.jsx)(o.Z,{alt:p.QJ.fullName(r+3),children:p.QJ.fullName(r+3).charAt(0).toUpperCase()})},e))}),(0,n.jsx)(f.Z,{title:"Icon",children:g.map(e=>(0,n.jsx)(o.Z,{color:e,children:(0,n.jsx)(j.Z,{icon:"eva:folder-add-outline",width:24})},e))}),(0,n.jsx)(f.Z,{title:"Variant",children:b.map(e=>(0,n.jsx)(o.Z,{variant:e,sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:(0,n.jsx)(j.Z,{icon:"eva:folder-add-outline",width:24})},e))}),(0,n.jsx)(f.Z,{title:"Grouped",children:(0,n.jsxs)(l.Z,{spacing:2,alignItems:"center",children:[v.map(e=>(0,n.jsx)(d.Z,{title:e,children:(0,n.jsx)(x.Z,{sx:{["& .".concat(m.Z.avatar)]:{width:e,height:e}},children:g.map((e,r)=>(0,n.jsx)(o.Z,{alt:p.QJ.fullAddress(r+1),src:p.QJ.image.avatar(r+1)},e))},e)},e)),(0,n.jsx)(d.Z,{title:"compact",children:(0,n.jsx)(c.Z,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,n.jsx)(x.Z,{variant:"compact",sx:{width:48,height:48},children:g.slice(0,2).map((e,r)=>(0,n.jsx)(o.Z,{alt:p.QJ.fullName(r+1),src:p.QJ.image.avatar(r+1)},e))})})})]})}),(0,n.jsxs)(f.Z,{title:"With Badge",children:[(0,n.jsx)(c.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,n.jsx)(o.Z,{alt:p.QJ.fullName(7),src:p.QJ.image.avatar(7),sx:{p:0,width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}}),children:(0,n.jsx)(o.Z,{alt:p.QJ.fullName(8),src:p.QJ.image.avatar(8)})}),y.map((e,r)=>(0,n.jsx)(c.Z,{variant:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,n.jsx)(o.Z,{alt:p.QJ.fullName(r+1),src:p.QJ.image.avatar(r+1)})},e))]}),(0,n.jsx)(f.Z,{title:"Sizes",children:[24,32,48,56,64,80,128].map((e,r)=>(0,n.jsx)(o.Z,{alt:p.QJ.fullName(r+4),src:p.QJ.image.avatar(r+4),sx:{width:e,height:e}},e))})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9263,770,8276,9058,8291,6843,9998,2971,596,1744],function(){return e(e.s=30603)}),_N_E=e.O()}]);