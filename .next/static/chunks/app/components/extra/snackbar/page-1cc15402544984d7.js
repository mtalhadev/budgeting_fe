(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4393],{14063:function(n,r,e){Promise.resolve().then(e.bind(e,23448))},18948:function(n,r,e){"use strict";e.d(r,{Z:function(){return h}});var t=e(57437),i=e(96507),a=e(25210),o=e(13457),c=e(85269),l=e(64898),s=e(12040);function d(n){let{link:r,activeLast:e,disabled:o}=n,{name:c,href:l,icon:d}=r,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!e&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},u=(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),c]});return l?(0,t.jsx)(a.Z,{component:s.r,href:l,sx:h,children:u}):(0,t.jsxs)(i.Z,{sx:h,children:[" ",u," "]})}function h(n){let{links:r,action:e,heading:s,moreLink:h,activeLast:F,sx:x,...f}=n,g=r[r.length-1].name;return(0,t.jsxs)(i.Z,{sx:{...x},children:[(0,t.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(i.Z,{sx:{flexGrow:1},children:[s&&(0,t.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:s}),!!r.length&&(0,t.jsx)(l.Z,{separator:(0,t.jsx)(u,{}),...f,children:r.map(n=>(0,t.jsx)(d,{link:n,activeLast:F,disabled:n.name===g},n.name||""))})]}),e&&(0,t.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",e," "]})]}),!!h&&(0,t.jsx)(i.Z,{sx:{mt:2},children:h.map(n=>(0,t.jsx)(a.Z,{href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n))})]})}function u(){return(0,t.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54728:function(n,r,e){"use strict";e.d(r,{Ds:function(){return t.Ds}});var t=e(36953);e(82836)},82836:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return x}});var t=e(57437),i=e(2265),a=e(36953),o=e(56314),c=e(52653),l=e(94700),s=e(45680),d=e(35843),h=e(89975);let u=(0,d.ZP)(a.pk)(n=>{let{theme:r}=n,e="light"===r.palette.mode;return{"& #notistack-snackbar":{...r.typography.subtitle2,padding:0,flexGrow:1},"&.notistack-MuiContent":{padding:r.spacing(.5),paddingRight:r.spacing(2),color:r.palette.text.primary,boxShadow:r.customShadows.z8,borderRadius:r.shape.borderRadius,backgroundColor:r.palette.background.paper},"&.notistack-MuiContent-default":{padding:r.spacing(1),color:e?r.palette.common.white:r.palette.grey[800],backgroundColor:e?r.palette.grey[800]:r.palette.common.white}}}),F=(0,d.ZP)("span")(n=>{let{color:r,theme:e}=n;return{width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.spacing(1.5),color:e.palette[r].main,borderRadius:e.shape.borderRadius,backgroundColor:(0,h.Fq)(e.palette[r].main,.16)}});function x(n){let{children:r}=n,e=(0,s.K$)(),d="rtl"===e.themeDirection,h=(0,i.useRef)(null);return(0,t.jsx)(a.wT,{ref:h,maxSnack:5,preventDuplicate:!0,autoHideDuration:3e3,TransitionComponent:d?o.Z:void 0,variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},iconVariant:{info:(0,t.jsx)(F,{color:"info",children:(0,t.jsx)(l.Z,{icon:"eva:info-fill",width:24})}),success:(0,t.jsx)(F,{color:"success",children:(0,t.jsx)(l.Z,{icon:"eva:checkmark-circle-2-fill",width:24})}),warning:(0,t.jsx)(F,{color:"warning",children:(0,t.jsx)(l.Z,{icon:"eva:alert-triangle-fill",width:24})}),error:(0,t.jsx)(F,{color:"error",children:(0,t.jsx)(l.Z,{icon:"solar:danger-bold",width:24})})},Components:{default:u,info:u,success:u,warning:u,error:u},action:n=>(0,t.jsx)(c.Z,{size:"small",onClick:()=>(0,a.sy)(n),sx:{p:.5},children:(0,t.jsx)(l.Z,{width:16,icon:"mingcute:close-line"})}),children:r})}},12040:function(n,r,e){"use strict";e.d(r,{r:function(){return l}});var t=e(57437),i=e(2265),a=e(61396),o=e.n(a);let c=(0,i.forwardRef)((n,r)=>{let{...e}=n;return(0,t.jsx)(o(),{ref:r,...e})});var l=c},78001:function(n,r,e){"use strict";e.d(r,{Z:function(){return l}});var t=e(57437),i=e(89975),a=e(14486),o=e(26114),c=e(13457);function l(n){let{title:r,sx:e,children:l,...s}=n;return(0,t.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:n=>(0,i.Fq)(n.palette.grey[500],.04)},children:[r&&(0,t.jsx)(o.Z,{title:r}),(0,t.jsx)(c.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...e},children:l})]})}},23448:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return u}});var t=e(57437),i=e(80230),a=e(96507),o=e(49600),c=e(88938),l=e(46843),s=e(54728),d=e(18948),h=e(78001);function u(){let{enqueueSnackbar:n,closeSnackbar:r}=(0,s.Ds)(),e=(e,i)=>{n("This is an ".concat(e),{variant:e,anchorOrigin:i,action:n=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{size:"small",color:"default"!==e?e:"primary",onClick:()=>{console.info("I belong to snackbar with key ".concat(n))},children:"Alert"}),(0,t.jsx)(o.Z,{size:"small",color:"inherit",onClick:()=>r(n),children:"Dismiss"})]})})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{sx:{py:5,bgcolor:n=>"light"===n.palette.mode?"grey.200":"grey.800"},children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{heading:"Snackbar",links:[{name:"Components",href:l.H.components},{name:"Snackbar"}],moreLink:["https://www.iamhosseindhv.com/notistack"]})})}),(0,t.jsx)(c.Z,{sx:{my:10},children:(0,t.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,t.jsxs)(h.Z,{title:"Simple",children:[(0,t.jsx)(o.Z,{variant:"contained",color:"inherit",onClick:()=>n("This is an default",{variant:"default"}),children:"Default"}),(0,t.jsx)(o.Z,{variant:"contained",color:"info",onClick:()=>n("This is an info",{variant:"info"}),children:"Info"}),(0,t.jsx)(o.Z,{variant:"contained",color:"success",onClick:()=>n("This is an success",{variant:"success"}),children:"Success"}),(0,t.jsx)(o.Z,{variant:"contained",color:"warning",onClick:()=>n("This is an warning",{variant:"warning"}),children:"Warning"}),(0,t.jsx)(o.Z,{variant:"contained",color:"error",onClick:()=>n("This is an error",{variant:"error"}),children:"Error"})]}),(0,t.jsxs)(h.Z,{title:"With Action",children:[(0,t.jsx)(o.Z,{variant:"contained",color:"inherit",onClick:()=>e("default"),children:"Default"}),(0,t.jsx)(o.Z,{variant:"contained",color:"info",onClick:()=>e("info"),children:"Info"}),(0,t.jsx)(o.Z,{variant:"contained",color:"success",onClick:()=>e("success"),children:"Success"}),(0,t.jsx)(o.Z,{variant:"contained",color:"warning",onClick:()=>e("warning"),children:"Warning"}),(0,t.jsx)(o.Z,{variant:"contained",color:"error",onClick:()=>e("error"),children:"Error"})]}),(0,t.jsxs)(h.Z,{title:"anchorOrigin",children:[(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default",{vertical:"top",horizontal:"left"}),children:"Top Left"}),(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default",{vertical:"top",horizontal:"center"}),children:"Top Center"}),(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default"),children:"Top Right"}),(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default",{vertical:"bottom",horizontal:"left"}),children:"Bottom Left"}),(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default",{vertical:"bottom",horizontal:"center"}),children:"Bottom Center"}),(0,t.jsx)(o.Z,{variant:"text",color:"inherit",onClick:()=>e("default",{vertical:"bottom",horizontal:"right"}),children:"Bottom Right"})]})]})})]})}},19073:function(n,r,e){"use strict";e.d(r,{D:function(){return c}});var t=e(89975);let i={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"},a={lighter:"#FFF5CC",light:"#FFD666",main:"#FFAB00",dark:"#B76E00",darker:"#7A4100",contrastText:i[800]},o={common:{black:"#000000",white:"#FFFFFF"},primary:{lighter:"#C8FAD6",light:"#5BE49B",main:"#00A76F",dark:"#007867",darker:"#004B50",contrastText:"#FFFFFF"},secondary:{lighter:"#EFD6FF",light:"#C684FF",main:"#8E33FF",dark:"#5119B7",darker:"#27097A",contrastText:"#FFFFFF"},info:{lighter:"#CAFDF5",light:"#61F3F3",main:"#00B8D9",dark:"#006C9C",darker:"#003768",contrastText:"#FFFFFF"},success:{lighter:"#D3FCD2",light:"#77ED8B",main:"#22C55E",dark:"#118D57",darker:"#065E49",contrastText:"#ffffff"},warning:a,error:{lighter:"#FFE9D5",light:"#FFAC82",main:"#FF5630",dark:"#B71D18",darker:"#7A0916",contrastText:"#FFFFFF"},grey:i,divider:(0,t.Fq)(i[500],.2),action:{hover:(0,t.Fq)(i[500],.08),selected:(0,t.Fq)(i[500],.16),disabled:(0,t.Fq)(i[500],.8),disabledBackground:(0,t.Fq)(i[500],.24),focus:(0,t.Fq)(i[500],.24),hoverOpacity:.08,disabledOpacity:.48}};function c(n){let r={...o,mode:"light",text:{primary:i[800],secondary:i[600],disabled:i[500]},background:{paper:"#FFFFFF",default:"#FFFFFF",neutral:i[200]},action:{...o.action,active:i[600]}},e={...o,mode:"dark",text:{primary:"#FFFFFF",secondary:i[500],disabled:i[600]},background:{paper:i[800],default:i[900],neutral:(0,t.Fq)(i[500],.12)},action:{...o.action,active:i[500]}};return"light"===n?r:e}}},function(n){n.O(0,[5510,8931,7759,6382,9830,9263,5478,770,8276,659,1393,6425,4340,9058,9209,4202,6843,5680,2971,596,1744],function(){return n(n.s=14063)}),_N_E=n.O()}]);