(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1090],{22564:function(e,t,l){Promise.resolve().then(l.bind(l,55645))},18948:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var n=l(57437),a=l(96507),r=l(25210),s=l(13457),i=l(85269),u=l(64898),o=l(12040);function c(e){let{link:t,activeLast:l,disabled:s}=e,{name:i,href:u,icon:c}=t,d={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...s&&!l&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),i]});return u?(0,n.jsx)(r.Z,{component:o.r,href:u,sx:d,children:x}):(0,n.jsxs)(a.Z,{sx:d,children:[" ",x," "]})}function d(e){let{links:t,action:l,heading:o,moreLink:d,activeLast:h,sx:m,...p}=e,f=t[t.length-1].name;return(0,n.jsxs)(a.Z,{sx:{...m},children:[(0,n.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[o&&(0,n.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:o}),!!t.length&&(0,n.jsx)(u.Z,{separator:(0,n.jsx)(x,{}),...p,children:t.map(e=>(0,n.jsx)(c,{link:e,activeLast:h,disabled:e.name===f},e.name||""))})]}),l&&(0,n.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",l," "]})]}),!!d&&(0,n.jsx)(a.Z,{sx:{mt:2},children:d.map(e=>(0,n.jsx)(r.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return(0,n.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(57437),a=l(2265),r=l(39830),s=l(96507);let i=(0,a.forwardRef)((e,t)=>{let{icon:l,width:a=20,sx:i,...u}=e;return(0,n.jsx)(s.Z,{ref:t,component:r.JO,className:"component-iconify",icon:l,sx:{width:a,height:a,...i}})});var u=i},12040:function(e,t,l){"use strict";l.d(t,{r:function(){return u}});var n=l(57437),a=l(2265),r=l(61396),s=l.n(r);let i=(0,a.forwardRef)((e,t)=>{let{...l}=e;return(0,n.jsx)(s(),{ref:t,...l})});var u=i},78001:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(57437),a=l(89975),r=l(14486),s=l(26114),i=l(13457);function u(e){let{title:t,sx:l,children:u,...o}=e;return(0,n.jsxs)(r.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,a.Fq)(e.palette.grey[500],.04)},children:[t&&(0,n.jsx)(s.Z,{title:t}),(0,n.jsx)(i.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...l},children:u})]})}},55645:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return y}});var n=l(57437),a=l(2265),r=l(80230),s=l(89975),i=l(96507),u=l(13457),o=l(73295),c=l(88938),d=l(85269),x=l(46843),h=l(94700),m=l(18948),p=l(78001);let f=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],j=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}];function Z(e){return e>0?"$".concat(e,"0"):"".concat(e)}function b(e){return e>0?"$".concat(e):e}function v(e){return"$".concat(e,"\xb0C")}function g(e){return f.findIndex(t=>t.value===e)+1}function y(){let[e,t]=(0,a.useState)(30),[l,y]=(0,a.useState)([20,37]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(m.Z,{heading:"Slider",links:[{name:"Components",href:x.H.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})})}),(0,n.jsx)(c.Z,{sx:{my:10},children:(0,n.jsxs)(r.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,n.jsx)(p.Z,{title:"Volume",children:(0,n.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1,width:1,children:[(0,n.jsx)(h.Z,{icon:"eva:volume-mute-fill",width:24}),(0,n.jsx)(o.ZP,{value:e,onChange:(e,l)=>{t(l)},"aria-labelledby":"continuous-slider"}),(0,n.jsx)(h.Z,{icon:"eva:volume-up-fill",width:24})]})}),(0,n.jsx)(p.Z,{title:"Disabled",children:(0,n.jsx)(o.ZP,{disabled:!0,defaultValue:30})}),(0,n.jsx)(p.Z,{title:"Temperature",children:(0,n.jsx)(o.ZP,{defaultValue:30,getAriaValueText:v,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),(0,n.jsxs)(p.Z,{title:"Sizes",children:[(0,n.jsx)(o.ZP,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:v}),(0,n.jsx)(o.ZP,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:v})]}),(0,n.jsx)(p.Z,{title:"Small steps",children:(0,n.jsx)(o.ZP,{defaultValue:5e-8,getAriaValueText:v,step:1e-8,marks:!0,min:-.00000005,max:1e-7,valueLabelDisplay:"auto"})}),(0,n.jsx)(p.Z,{title:"Custom marks",children:(0,n.jsx)(o.ZP,{defaultValue:20,getAriaValueText:v,step:10,valueLabelDisplay:"auto",marks:f})}),(0,n.jsx)(p.Z,{title:"Restricted values",children:(0,n.jsx)(o.ZP,{defaultValue:20,valueLabelFormat:g,getAriaValueText:v,step:null,valueLabelDisplay:"auto",marks:f})}),(0,n.jsxs)(p.Z,{title:"Range",children:[(0,n.jsx)(i.Z,{sx:{width:"100%"},children:(0,n.jsx)(o.ZP,{scale:e=>10*e,step:10,marks:j,value:l,onChange:(e,t)=>{y(t)},valueLabelDisplay:"on",getAriaValueText:Z,valueLabelFormat:b})}),(0,n.jsxs)(i.Z,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:e=>(0,s.Fq)(e.palette.grey[500],.12)},children:[(0,n.jsxs)(d.Z,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",Z(l[0])]}),(0,n.jsxs)(d.Z,{variant:"subtitle2",children:["Max: ",Z(l[1])]})]})]})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9058,3295,6765,6843,2971,596,1744],function(){return e(e.s=22564)}),_N_E=e.O()}]);