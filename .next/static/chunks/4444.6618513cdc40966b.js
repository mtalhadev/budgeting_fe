"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4444],{11494:function(t,o,e){e.d(o,{ZM:function(){return m},O_:function(){return b},Ct:function(){return d},qT:function(){return s}});var n=e(57437),r=e(41261),a=e(41101),i=e(35843),l=e(54281),c=e(67217);function p(){let t=(0,a.Z)(),o=(0,n.jsx)(l.Z,{styles:{".mapboxgl-ctrl.mapboxgl-ctrl-group":{borderRadius:"8px",boxShadow:t.customShadows.z8},".mapboxgl-ctrl-zoom-in":{borderRadius:"8px 8px 0 0"},".mapboxgl-ctrl-compass":{borderRadius:"0 0 8px 8px"},".mapboxgl-ctrl-fullscreen":{".mapboxgl-ctrl-icon":{transform:" scale(0.75)"}},".mapboxgl-ctrl-group button+button":{borderTop:"1px solid ".concat(t.palette.divider)},".mapboxgl-ctrl.mapboxgl-ctrl-scale":{border:"none",lineHeight:"14px",borderRadius:"4px",color:t.palette.common.white,fontWeight:t.typography.fontWeightBold,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}});return o}let u=(0,i.ZP)(r.GI)(t=>{let{theme:o}=t,e="rtl"===o.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:o.spacing(1),boxShadow:o.customShadows.z20,borderRadius:o.shape.borderRadius,backgroundColor:o.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:o.palette.common.white,right:e&&"0",left:e&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:o.palette.grey[800]}}}),s=(0,i.ZP)("div")(t=>{let{theme:o}=t;return{...(0,c.Ls)({color:o.palette.grey[900]}),zIndex:9,minWidth:200,position:"absolute",top:o.spacing(1),right:o.spacing(1),padding:o.spacing(2),borderRadius:o.shape.borderRadius}});function d(t){let{sx:o,children:e,...r}=t;return(0,n.jsx)(u,{anchor:"bottom",sx:o,...r,children:e})}var g=e(96507);function b(t){let{...o}=t;return(0,n.jsx)(r.Jx,{...o,children:(0,n.jsx)(g.Z,{component:"svg",viewBox:"0 0 24 24",sx:{height:20,stroke:"none",cursor:"pointer",fill:t=>t.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")},children:(0,n.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})})}function m(t){let{hideScaleControl:o,hideGeolocateControl:e,hideFullscreenControl:a,hideNavigationnControl:i}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),!e&&(0,n.jsx)(r.$j,{position:"top-left",positionOptions:{enableHighAccuracy:!0}}),!a&&(0,n.jsx)(r.ot,{position:"top-left"}),!o&&(0,n.jsx)(r.jf,{position:"bottom-left"}),!i&&(0,n.jsx)(r.Pv,{position:"bottom-left"})]})}},64444:function(t,o,e){e.r(o),e.d(o,{default:function(){return b}});var n=e(57437),r=e(2265),a=e(41261),i=e(73295),l=e(88444),c=e(96507),p=e(85269),u=e(54695),s=e(11494),d=(0,r.memo)(function(t){let{startTime:o,endTime:e,allDays:r,selectedTime:a,onChangeTime:d,onChangeAllDays:g}=t,b=Math.round((a-o)/864e5),m=t=>{d(o+864e5*t)};return(0,n.jsxs)(s.qT,{children:[(0,n.jsxs)(c.Z,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsx)(p.Z,{variant:"subtitle2",sx:{color:"common.white"},children:"All Days"}),(0,n.jsx)(l.Z,{size:"small",checked:r,onChange:t=>g(t.target.checked)})]}),(0,n.jsx)("br",{}),(0,n.jsxs)(p.Z,{gutterBottom:!0,variant:"body2",sx:{color:r?"text.disabled":"common.white"},children:["Each Day: ",(0,u.Mu)(a)]}),(0,n.jsx)(i.ZP,{min:1,step:1,max:Math.round((e-o)/864e5),disabled:r,value:b,onChange:(t,o)=>{"number"==typeof o&&m(o)}})]})});let g={id:"heatmap",maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};var b=(0,r.memo)(function(t){let{...o}=t,[e,i]=(0,r.useState)(!0),[l,c]=(0,r.useState)([0,0]),[p,u]=(0,r.useState)(0),[s,b]=(0,r.useState)();(0,r.useEffect)(()=>{fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then(t=>t.json()).then(t=>{let{features:o}=t,e=o[0].properties.time,n=o[o.length-1].properties.time;c([n,e]),b(t),u(e)}).catch(t=>console.error("Could not load data",t))},[]);let m=(0,r.useMemo)(()=>e?s:function(t,o){let e=new Date(o),n=e.getFullYear(),r=e.getMonth(),a=e.getDate(),i=null==t?void 0:t.features.filter(t=>{var o;let e=new Date(null===(o=t.properties)||void 0===o?void 0:o.time);return e.getFullYear()===n&&e.getMonth()===r&&e.getDate()===a});return{type:"FeatureCollection",features:i}}(s,p),[s,e,p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.ZP,{initialViewState:{latitude:40,longitude:-100,zoom:3},children:m&&(0,n.jsx)(a.Hw,{type:"geojson",data:m,children:(0,n.jsx)(a.mh,{...g})})}),(0,n.jsx)(d,{startTime:l[0],endTime:l[1],selectedTime:p,allDays:e,onChangeTime:u,onChangeAllDays:i})]})})},67217:function(t,o,e){e.d(o,{D9:function(){return p},Ls:function(){return u},O1:function(){return g},XK:function(){return d},uS:function(){return c},v3:function(){return s}});var n=e(89975),r=e(55563),a=e(43374),i=e(60443),l=e(88554);let c=t=>{let{theme:o,bgcolor:e,dropdown:n}=t;return{...u({blur:20,opacity:.9,color:o.palette.background.paper,...!!e&&{color:e}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",..."rtl"===o.direction&&{backgroundPosition:"top left, right bottom"},...n&&{padding:o.spacing(.5),boxShadow:o.customShadows.dropdown,borderRadius:1.25*o.shape.borderRadius}}},p=t=>({...t.typography.body2,padding:t.spacing(.75,1),borderRadius:.75*t.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(i.Z.selected)]:{fontWeight:t.typography.fontWeightSemiBold,backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["& .".concat(a.Z.root)]:{padding:t.spacing(.5),marginLeft:t.spacing(-.5),marginRight:t.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:t.palette.action.selected,"&:hover":{backgroundColor:t.palette.action.hover}},["&+.".concat(r.Z.root)]:{margin:t.spacing(.5,0)}});function u(t){let o=(null==t?void 0:t.color)||"#000000",e=(null==t?void 0:t.blur)||6,r=(null==t?void 0:t.opacity)||.8,a=null==t?void 0:t.imgUrl;return a?{position:"relative",backgroundImage:"url(".concat(a,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(e,"px)"),WebkitBackdropFilter:"blur(".concat(e,"px)"),backgroundColor:(0,n.Fq)(o,r)}}:{backdropFilter:"blur(".concat(e,"px)"),WebkitBackdropFilter:"blur(".concat(e,"px)"),backgroundColor:(0,n.Fq)(o,r)}}function s(t){let o=(null==t?void 0:t.direction)||"to bottom",e=null==t?void 0:t.startColor,n=null==t?void 0:t.endColor,r=null==t?void 0:t.imgUrl,a=null==t?void 0:t.color;return r?{background:"linear-gradient(".concat(o,", ").concat(e||a,", ").concat(n||a,"), url(").concat(r,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(o,", ").concat(e,", ").concat(n,")")}}function d(t){return{background:"-webkit-linear-gradient(".concat(t,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let g={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}},54695:function(t,o,e){e.d(o,{DY:function(){return p},IO:function(){return c},Mu:function(){return i},zM:function(){return l}});var n=e(76259),r=e(41999),a=e(77504);function i(t,o){let e=o||"dd MMM yyyy";return t?(0,n.Z)(new Date(t),e):""}function l(t,o){let e=o||"dd MMM yyyy p";return t?(0,n.Z)(new Date(t),e):""}function c(t){return t?(0,r.Z)(new Date(t)):""}function p(t){return t?(0,a.Z)(new Date(t),{addSuffix:!0}):""}}}]);