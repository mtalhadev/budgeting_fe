(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2026],{60240:function(e,n,s){Promise.resolve().then(s.bind(s,27752))},18948:function(e,n,s){"use strict";s.d(n,{Z:function(){return u}});var i=s(57437),r=s(96507),l=s(25210),t=s(13457),o=s(85269),a=s(64898),c=s(12040);function d(e){let{link:n,activeLast:s,disabled:t}=e,{name:o,href:a,icon:d}=n,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...t&&!s&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return a?(0,i.jsx)(l.Z,{component:c.r,href:a,sx:u,children:x}):(0,i.jsxs)(r.Z,{sx:u,children:[" ",x," "]})}function u(e){let{links:n,action:s,heading:c,moreLink:u,activeLast:h,sx:j,...Z}=e,m=n[n.length-1].name;return(0,i.jsxs)(r.Z,{sx:{...j},children:[(0,i.jsxs)(t.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(r.Z,{sx:{flexGrow:1},children:[c&&(0,i.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,i.jsx)(a.Z,{separator:(0,i.jsx)(x,{}),...Z,children:n.map(e=>(0,i.jsx)(d,{link:e,activeLast:h,disabled:e.name===m},e.name||""))})]}),s&&(0,i.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",s," "]})]}),!!u&&(0,i.jsx)(r.Z,{sx:{mt:2},children:u.map(e=>(0,i.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function x(){return(0,i.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94700:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var i=s(57437),r=s(2265),l=s(39830),t=s(96507);let o=(0,r.forwardRef)((e,n)=>{let{icon:s,width:r=20,sx:o,...a}=e;return(0,i.jsx)(t.Z,{ref:n,component:l.JO,className:"component-iconify",icon:s,sx:{width:r,height:r,...o}})});var a=o},15389:function(e,n,s){"use strict";s.d(n,{k:function(){return r}});var i=s(2265);function r(e){let[n,s]=(0,i.useState)(!!e),r=(0,i.useCallback)(()=>{s(!0)},[]),l=(0,i.useCallback)(()=>{s(!1)},[]),t=(0,i.useCallback)(()=>{s(e=>!e)},[]);return{value:n,onTrue:r,onFalse:l,onToggle:t,setValue:s}}},12040:function(e,n,s){"use strict";s.d(n,{r:function(){return a}});var i=s(57437),r=s(2265),l=s(61396),t=s.n(l);let o=(0,r.forwardRef)((e,n)=>{let{...s}=e;return(0,i.jsx)(t(),{ref:n,...s})});var a=o},78001:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var i=s(57437),r=s(89975),l=s(14486),t=s(26114),o=s(13457);function a(e){let{title:n,sx:s,children:a,...c}=e;return(0,i.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,r.Fq)(e.palette.grey[500],.04)},children:[n&&(0,i.jsx)(t.Z,{title:n}),(0,i.jsx)(o.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...s},children:a})]})}},27752:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return B}});var i=s(57437),r=s(80230),l=s(96507),t=s(88938),o=s(46843),a=s(18948),c=s(49600),d=s(22079),u=s(55594),x=s(85269),h=s(91797),j=s(42834),Z=s(26337),m=s(15389);function p(){let e=(0,m.k)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{variant:"outlined",color:"warning",onClick:e.onTrue,children:"Form Dialogs"}),(0,i.jsxs)(d.Z,{open:e.value,onClose:e.onFalse,children:[(0,i.jsx)(h.Z,{children:"Subscribe"}),(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(x.Z,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,i.jsx)(u.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(c.Z,{onClick:e.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),(0,i.jsx)(c.Z,{onClick:e.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function g(){let e=(0,m.k)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{color:"info",variant:"outlined",onClick:e.onTrue,children:"Open alert dialog"}),(0,i.jsxs)(d.Z,{open:e.value,onClose:e.onFalse,children:[(0,i.jsx)(h.Z,{children:"Use Google's location service?"}),(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(c.Z,{variant:"outlined",onClick:e.onFalse,children:"Disagree"}),(0,i.jsx)(c.Z,{variant:"contained",onClick:e.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}var f=s(2265),v=s(64173);function b(){let e=(0,m.k)(),[n,s]=(0,f.useState)("paper"),r=(0,f.useCallback)(n=>()=>{e.onTrue(),s(n)},[e]),l=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(e.value){let{current:e}=l;e&&e.focus()}},[e.value]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{variant:"outlined",onClick:r("paper"),sx:{mr:2},children:"scroll=paper"}),(0,i.jsx)(c.Z,{variant:"outlined",onClick:r("body"),children:"scroll=body"}),(0,i.jsxs)(d.Z,{open:e.value,onClose:e.onFalse,scroll:n,children:[(0,i.jsx)(h.Z,{sx:{pb:2},children:"Subscribe"}),(0,i.jsx)(Z.Z,{dividers:"paper"===n,children:(0,i.jsx)(v.Z,{ref:l,tabIndex:-1,children:[...Array(50)].map(()=>"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et.").join("\n")})}),(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(c.Z,{onClick:e.onFalse,children:"Cancel"}),(0,i.jsx)(c.Z,{variant:"contained",onClick:e.onFalse,children:"Subscribe"})]})]})]})}var k=s(80565),C=s(210),F=s(38212),y=s(72502),w=s(94700);let S=["username@gmail.com","user02@gmail.com"];function T(){let e=(0,m.k)(),[n,s]=(0,f.useState)(S[1]),r=(0,f.useCallback)(n=>{e.onFalse(),s(n)},[e]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Z,{variant:"subtitle1",children:["Selected: ",n]}),(0,i.jsx)("br",{}),(0,i.jsx)(c.Z,{variant:"outlined",onClick:e.onTrue,children:"Open simple dialog"}),(0,i.jsxs)(d.Z,{open:e.value,onClose:()=>r(n),children:[(0,i.jsx)(h.Z,{children:"Set backup account"}),(0,i.jsxs)(k.Z,{children:[S.map(e=>(0,i.jsxs)(y.Z,{onClick:()=>r(e),children:[(0,i.jsx)(C.Z,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:(0,i.jsx)(w.Z,{icon:"solar:user-rounded-bold"})}),(0,i.jsx)(F.Z,{primary:e})]},e)),(0,i.jsxs)(y.Z,{autoFocus:!0,onClick:()=>r("addAccount"),children:[(0,i.jsx)(C.Z,{sx:{mr:2},children:(0,i.jsx)(w.Z,{icon:"mingcute:add-line"})}),(0,i.jsx)(F.Z,{primary:"Add account"})]})]})]})]})}var D=s(88444),W=s(64494),A=s(35009),G=s(84081),R=s(27400),_=s(10654);function E(){let e=(0,m.k)(),[n,s]=(0,f.useState)(!0),[r,t]=(0,f.useState)("sm"),o=(0,f.useCallback)(e=>{t(e.target.value)},[]),a=(0,f.useCallback)(e=>{s(e.target.checked)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{variant:"outlined",onClick:e.onTrue,children:"Max Width Dialog"}),(0,i.jsxs)(d.Z,{open:e.value,maxWidth:r,onClose:e.onFalse,fullWidth:n,children:[(0,i.jsx)(h.Z,{children:"Optional sizes"}),(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(x.Z,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),(0,i.jsxs)(l.Z,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[(0,i.jsxs)(G.Z,{sx:{my:3,minWidth:160},children:[(0,i.jsx)(A.Z,{htmlFor:"max-width",children:"maxWidth"}),(0,i.jsxs)(_.Z,{autoFocus:!0,value:r,onChange:o,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[(0,i.jsx)(W.Z,{value:!1,children:"false"}),(0,i.jsx)(W.Z,{value:"xs",children:"xs"}),(0,i.jsx)(W.Z,{value:"sm",children:"sm"}),(0,i.jsx)(W.Z,{value:"md",children:"md"}),(0,i.jsx)(W.Z,{value:"lg",children:"lg"}),(0,i.jsx)(W.Z,{value:"xl",children:"xl"})]})]}),(0,i.jsx)(R.Z,{control:(0,i.jsx)(D.Z,{checked:n,onChange:a}),label:"Full width",sx:{mt:1}})]})]}),(0,i.jsx)(j.Z,{children:(0,i.jsx)(c.Z,{onClick:e.onFalse,variant:"contained",children:"Close"})})]})]})}var O=s(8088),P=s(40851),I=s(54986),L=s(34989),M=s(52653);let N=(0,f.forwardRef)((e,n)=>(0,i.jsx)(O.Z,{direction:"up",ref:n,...e}));function q(){let e=(0,m.k)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{variant:"outlined",color:"error",onClick:e.onTrue,children:"Full Screen Dialogs"}),(0,i.jsxs)(d.Z,{fullScreen:!0,open:e.value,onClose:e.onFalse,TransitionComponent:N,children:[(0,i.jsx)(P.Z,{position:"relative",color:"default",children:(0,i.jsxs)(L.Z,{children:[(0,i.jsx)(M.Z,{color:"inherit",edge:"start",onClick:e.onFalse,children:(0,i.jsx)(w.Z,{icon:"mingcute:close-line"})}),(0,i.jsx)(x.Z,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),(0,i.jsx)(c.Z,{autoFocus:!0,color:"inherit",variant:"contained",onClick:e.onFalse,children:"Save"})]})}),(0,i.jsxs)(k.Z,{children:[(0,i.jsx)(y.Z,{children:(0,i.jsx)(F.Z,{primary:"Phone ringtone",secondary:"Titania"})}),(0,i.jsx)(I.Z,{}),(0,i.jsx)(y.Z,{children:(0,i.jsx)(F.Z,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}let H=(0,f.forwardRef)((e,n)=>(0,i.jsx)(O.Z,{direction:"up",ref:n,...e}));function U(){let e=(0,m.k)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{variant:"outlined",color:"success",onClick:e.onTrue,children:"Transitions Dialogs"}),(0,i.jsxs)(d.Z,{keepMounted:!0,open:e.value,TransitionComponent:H,onClose:e.onFalse,children:[(0,i.jsx)(h.Z,{children:"Use Google's location service?"}),(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(c.Z,{variant:"outlined",onClick:e.onFalse,children:"Disagree"}),(0,i.jsx)(c.Z,{variant:"contained",onClick:e.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}var z=s(78001);function B(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(a.Z,{heading:"Dialog",links:[{name:"Components",href:o.H.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})})}),(0,i.jsx)(t.Z,{sx:{my:10},children:(0,i.jsxs)(r.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,i.jsx)(z.Z,{title:"Simple",children:(0,i.jsx)(T,{})}),(0,i.jsx)(z.Z,{title:"Alerts",children:(0,i.jsx)(g,{})}),(0,i.jsx)(z.Z,{title:"Transitions",children:(0,i.jsx)(U,{})}),(0,i.jsx)(z.Z,{title:"Form",children:(0,i.jsx)(p,{})}),(0,i.jsx)(z.Z,{title:"Full Screen",children:(0,i.jsx)(q,{})}),(0,i.jsx)(z.Z,{title:"Max Width Dialog",children:(0,i.jsx)(E,{})}),(0,i.jsx)(z.Z,{title:"Scrolling Content Dialogs",children:(0,i.jsx)(b,{})})]})})]})}}},function(e){e.O(0,[5510,8931,7759,6382,9830,9263,5478,8599,9516,9058,7611,654,5594,3955,3281,6843,2971,596,1744],function(){return e(e.s=60240)}),_N_E=e.O()}]);