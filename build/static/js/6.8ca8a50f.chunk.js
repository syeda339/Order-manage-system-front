(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[6],{1001:function(e,a,t){"use strict";var n=t(88),r=t(50),c=t(0),l=t.n(c),o=t(3),i=t(895),s=t(22),m=["className","color","children","style"],u=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.d)(e.palette.warning.main,.08)}}}));function p(e){var a=e.className,t=e.color,c=e.children,i=(e.style,Object(r.a)(e,m)),s=u();return l.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[t],t),a)},i),c)}p.defaultProps={className:"",color:"secondary"},a.a=p},1002:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1019:function(e,a,t){"use strict";var n=t(234),r=t(235);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),l=(0,n(t(236)).default)(c.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");a.default=l},1031:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),l=t(3),o=t(6),i=t(534),s=c.forwardRef((function(e,a){var t=e.action,o=e.avatar,s=e.classes,m=e.className,u=e.component,p=void 0===u?"div":u,d=e.disableTypography,g=void 0!==d&&d,f=e.subheader,b=e.subheaderTypographyProps,v=e.title,E=e.titleTypographyProps,h=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=v;null==y||y.type===i.a||g||(y=c.createElement(i.a,Object(n.a)({variant:o?"body2":"h5",className:s.title,component:"span",display:"block"},E),y));var j=f;return null==j||j.type===i.a||g||(j=c.createElement(i.a,Object(n.a)({variant:o?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},b),j)),c.createElement(p,Object(n.a)({className:Object(l.a)(s.root,m),ref:a},h),o&&c.createElement("div",{className:s.avatar},o),c.createElement("div",{className:s.content},y,j),t&&c.createElement("div",{className:s.action},t))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1032:function(e,a,t){"use strict";var n=t(234),r=t(235);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),l=(0,n(t(236)).default)(c.createElement("path",{d:"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"}),"Shop");a.default=l},1042:function(e,a,t){"use strict";t.r(a);var n=t(37),r=t(88),c=t(0),l=t.n(c),o=t(895),i=t(950),s=t(951),m=t(308),u=t(50),p=t(36),d=t(3),g=t(981),f=t(928),b=t(534),v=t(966),E=t.n(v),h=["className"],y=Object(o.a)((function(e){return{root:{marginBottom:"5%"},actionIcon:{marginRight:e.spacing(1)}}}));var j=function(e){var a=e.className,t=Object(u.a)(e,h),n=y();return l.a.createElement(s.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(d.a)(n.root,a)},t),l.a.createElement(s.a,{item:!0},l.a.createElement(g.a,{separator:l.a.createElement(E.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(f.a,{variant:"body1",color:"inherit",to:"/app",component:p.a},"Dashboard"),l.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Reports")),l.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"This is general reports.")))},O=t(87),x=t(965),N=t(984),k=t(955),S=t(961),w=t(1019),C=t.n(w),P=["className","todayrevenue"],T=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between",height:"150px"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:60,width:60},font:{fontSize:"20px",letterSpacing:"1px",lineHeight:"10px"}}}));var M=function(e){var a=e.className,t=e.todayrevenue,n=Object(u.a)(e,P),r=T();return l.a.createElement(N.a,Object.assign({className:Object(d.a)(r.root,a)},n),l.a.createElement(k.a,{flexGrow:1},l.a.createElement(b.a,{className:r.font,variant:"overline",color:"textSecondary"},"Today's revenue amount"),l.a.createElement(k.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(b.a,{variant:"h1",color:"textPrimary"},"$",t))),l.a.createElement(S.a,{className:r.avatar},l.a.createElement(C.a,null)))},I=["className","total"],R=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between",height:"150px"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:60,width:60},font:{fontSize:"20px",letterSpacing:"1px",lineHeight:"10px"}}}));var W=function(e){var a=e.className,t=e.total,n=Object(u.a)(e,I),r=R();return l.a.createElement(N.a,Object.assign({className:Object(d.a)(r.root,a)},n),l.a.createElement(k.a,{flexGrow:1},l.a.createElement(b.a,{className:r.font,variant:"overline",color:"textSecondary"},"Total amount"),l.a.createElement(k.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(b.a,{variant:"h1",color:"textPrimary"},"$",t))),l.a.createElement(S.a,{className:r.avatar},l.a.createElement(C.a,null)))},L=t(310),z=t.n(L),D=t(26),F=t(1031),H=t(936),V=t(1037),_=t(1038),A=t(1039),B=t(1040),G=["value","className"],Y=Object(o.a)((function(e){return{root:{width:56,height:56},circle1:{stroke:"dark"===e.palette.type?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",fill:"none",strokeWidth:4},circle2:{stroke:e.palette.secondary.main,fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"},"@keyframes progress":{"0%":{strokeDasharray:"0 100"}}}}));var $=function(e){var a=e.value,t=e.className,n=Object(u.a)(e,G),r=Y();return l.a.createElement("div",Object.assign({className:Object(d.a)(r.root,t)},n),l.a.createElement("svg",{viewBox:"0 0 36 36"},l.a.createElement("path",{className:r.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),l.a.createElement("path",{className:r.circle2,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(a,", 100")})))},J=t(107),U=["className"],q=Object(o.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:D.a.green[600],fontWeight:e.typography.fontWeightMedium},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var K=function(e){var a=e.className,t=Object(u.a)(e,U),r=q(),o=Object(x.a)(),i=Object(c.useState)(null),s=Object(n.a)(i,2),m=s[0],p=s[1],g=Object(c.useCallback)((function(){O.a.get(J.a+"reports/partnerlist").then((function(e){o.current&&p(e.data.partners)}))}),[o]);return Object(c.useEffect)((function(){g()}),[g]),m?l.a.createElement(N.a,Object.assign({className:Object(d.a)(r.root,a)},t),l.a.createElement(F.a,{title:"Partners amount"}),l.a.createElement(H.a,null),l.a.createElement(z.a,null,l.a.createElement(k.a,null,l.a.createElement(V.a,null,l.a.createElement(_.a,null,m.map((function(e){return l.a.createElement(A.a,{hover:!0,key:e._id},l.a.createElement(B.a,null,l.a.createElement(k.a,{display:"flex",alignItems:"center"},l.a.createElement(S.a,{className:r.image,src:e.avatar}),l.a.createElement(k.a,{ml:2},l.a.createElement(b.a,{variant:"h6",color:"textPrimary"},e.username),l.a.createElement(b.a,{variant:"body2",color:"textSecondary"},l.a.createElement("span",{className:r.subscriptions}))))),l.a.createElement(B.a,null,l.a.createElement(b.a,{variant:"h6",color:"textPrimary"},"amount"),l.a.createElement(b.a,{noWrap:!0,variant:"body2",color:"textSecondary"},l.a.createElement("span",{className:r.value},e.currency,e.amount))),l.a.createElement(B.a,null,l.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"flex-end"},l.a.createElement(k.a,{mr:2},l.a.createElement(b.a,{align:"right",variant:"h6",color:"textPrimary"},e.percentage,"%"),l.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"amount percentage")),l.a.createElement($,{value:e.percentage}))))})))))),l.a.createElement(k.a,{p:2,display:"flex",justifyContent:"flex-end"})):null},Q=t(1032),X=t.n(Q),Z=["className","todaySale"],ee=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between",height:"150px"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:60,width:60},font:{fontSize:"20px",letterSpacing:"1px",lineHeight:"10px"}}}));var ae=function(e){var a=e.className,t=e.todaySale,n=Object(u.a)(e,Z),r=ee();return l.a.createElement(N.a,Object.assign({className:Object(d.a)(r.root,a)},n),l.a.createElement(k.a,{flexGrow:1},l.a.createElement(b.a,{className:r.font,variant:"overline",color:"textSecondary"},"Today's sale amount"),l.a.createElement(k.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(b.a,{variant:"h1",color:"textPrimary"},"$",t))),l.a.createElement(S.a,{className:r.avatar},l.a.createElement(X.a,null)))},te=t(101),ne=t(237),re=t.n(ne),ce=t(946),le=t(1041),oe=t(1044),ie=t(1001),se=t(1002),me=["className","invoices"],ue=[{id:"all",name:"All"},{id:"partial",name:"partial"},{id:"unpaid",name:"unpaid"}];var pe=Object(o.a)((function(e){return{root:{},statusField:{flexBasis:200},avatar:{backgroundColor:D.a.red[500],color:D.a.common.white}}}));function de(e){var a=e.className,t=e.invoices,r=Object(u.a)(e,me),o=pe(),i=Object(c.useState)(0),s=Object(n.a)(i,2),m=s[0],g=s[1],v=Object(c.useState)(10),E=Object(n.a)(v,2),h=E[0],y=E[1],j=Object(c.useState)({status:null}),O=Object(n.a)(j,2),x=O[0],w=O[1],C=function(e,a){return e.filter((function(e){var t=!0;return a.status&&e.status!==a.status&&(t=!1),t}))}(t,x),P=function(e,a,t){return e.slice(a*t,a*t+t)}(C,m,h);return l.a.createElement(N.a,Object.assign({className:Object(d.a)(o.root,a)},r),l.a.createElement(k.a,{p:2},l.a.createElement(k.a,{mt:2,display:"flex",alignItems:"center"},l.a.createElement(ce.a,{className:o.statusField,label:"Status",name:"status",onChange:function(e){e.persist();var a=null;"all"!==e.target.value&&(a=e.target.value),w((function(e){return Object(te.a)(Object(te.a)({},e),{},{status:a})}))},select:!0,SelectProps:{native:!0},value:x.status||"all",variant:"outlined"},ue.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),l.a.createElement(z.a,null,l.a.createElement(k.a,null,l.a.createElement(V.a,null,l.a.createElement(le.a,null,l.a.createElement(A.a,null,l.a.createElement(B.a,null,"Customer"),l.a.createElement(B.a,null,"Status"),l.a.createElement(B.a,null,"paid Amount"),l.a.createElement(B.a,null,"Unpaid Amount"),l.a.createElement(B.a,{align:"right"},"Date"))),l.a.createElement(_.a,null,P.map((function(e){return l.a.createElement(A.a,{hover:!0,key:e._id},l.a.createElement(B.a,null,l.a.createElement(k.a,{display:"flex",alignItems:"center"},l.a.createElement(S.a,{className:o.avatar},Object(se.a)(e.customerName)),l.a.createElement(k.a,{ml:2},l.a.createElement(f.a,{variant:"subtitle2",color:"textPrimary",component:p.a,underline:"none",to:"#"},e.customerName),l.a.createElement(b.a,{variant:"body2",color:"textSecondary"},e.customerLocation," , ",e.product)))),l.a.createElement(B.a,null,function(e){var a={partial:{text:"partial",color:"warning"},unpaid:{text:"unpaid",color:"error"}}[e],t=a.text,n=a.color;return l.a.createElement(ie.a,{color:n},t)}(e.status)),l.a.createElement(B.a,null,e.currency,e.paid.toFixed(2)),l.a.createElement(B.a,null,e.currency,e.unpaid.toFixed(2)),l.a.createElement(B.a,{align:"right"},re()(e.createdAt).format("DD/MM/YYYY")))})))))),l.a.createElement(oe.a,{component:"div",count:C.length,onChangePage:function(e){g(e)},onChangeRowsPerPage:function(e){y(e.target.value)},page:m,rowsPerPage:h,rowsPerPageOptions:[5,10,25]}))}de.defaultProps={invoices:[]};var ge=de,fe=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,marginTop:"50px"}}}));var be=function(){var e=fe(),a=Object(x.a)(),t=Object(c.useState)(null),r=Object(n.a)(t,2),o=r[0],i=r[1],s=Object(c.useCallback)((function(){O.a.get(J.a+"reports/unpaidList").then((function(e){a.current&&i(e.data.unpaid)}))}),[a]);return Object(c.useEffect)((function(){s()}),[s]),o?l.a.createElement(N.a,{className:e.root},l.a.createElement(ge,{invoices:o})):null},ve=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(r.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64}),rate:{marginTop:"50px"}}}));a.default=function(){var e=ve(),a=Object(x.a)(),t=Object(c.useState)(null),r=Object(n.a)(t,2),o=r[0],u=r[1],p=Object(c.useState)(null),d=Object(n.a)(p,2),g=d[0],f=d[1],b=Object(c.useState)(null),v=Object(n.a)(b,2),E=v[0],h=v[1],y=Object(c.useCallback)((function(){O.a.get(J.a+"reports/list").then((function(e){a.current&&(u(e.data.total),f(e.data.todaySale),h(e.data.todayrevenue))}))}),[a]);return Object(c.useEffect)((function(){y()}),[y]),l.a.createElement(m.a,{className:e.root,title:"Dashboard"},l.a.createElement(i.a,{maxWidth:!1,className:e.container},l.a.createElement(j,null),l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(W,{total:o})),l.a.createElement(s.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(M,{todayrevenue:E})),l.a.createElement(s.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(ae,{todaySale:g}))),l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,lg:6,sm:12},l.a.createElement(K,{className:e.rate})),l.a.createElement(s.a,{item:!0,lg:6,sm:12},l.a.createElement(be,null)))))}},965:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},984:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),l=t(3),o=t(232),i=t(6),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return c.createElement(o.a,Object(n.a)({className:Object(l.a)(t.root,i),elevation:m?8:1,ref:a},u))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)}}]);
//# sourceMappingURL=6.8ca8a50f.chunk.js.map