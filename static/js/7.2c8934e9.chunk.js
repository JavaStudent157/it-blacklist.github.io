(this["webpackJsonpsjz-it-blacklist"]=this["webpackJsonpsjz-it-blacklist"]||[]).push([[7],{389:function(e,t,n){"use strict";n.r(t);var c=n(6),o=n(5),i=n(0),r=n(91),s=n(50),l=n(92),a=n(9),j=n(90),u=n(19);t.default=function(){var e=Object(i.useContext)(s.a).state,t=Object(i.useState)(!1),n=Object(o.a)(t,2),b=n[0],f=n[1],m=Object(i.useState)(!1),O=Object(o.a)(m,2),h=O[0],d=O[1],p=Object(i.useState)(!1),x=Object(o.a)(p,2),g=x[0],y=x[1],C=Object(a.f)();return console.log(e),Object(u.jsxs)(r.i,{layout:"horizontal",footer:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.d,{checked:g,onChange:function(e){return y(e)},style:{"--icon-size":"18px","--font-size":"14px","--gap":"6px",marginBottom:8},children:["\u52fe\u9009\u4ee3\u8868\u5df2\u9605\u8bfb\u5e76\u540c\u610f",Object(u.jsx)(j.b,{to:"/statement",children:"\u76f8\u5173\u6761\u6b3e"})]}),Object(u.jsx)(r.a,{block:!0,type:"submit",color:"primary",loading:h,children:"\u63d0\u4ea4"})]}),onFinish:function(t){var n;n=t,g?r.p.confirm({content:"\u786e\u8ba4\u8981\u63d0\u4ea4\u5417\uff1f",onConfirm:function(){d(!0),Object(l.g)(Object(c.a)(Object(c.a)({},n),{},{city:n.city[1],userInfo:e.userInfo})).then((function(e){console.log(e),null!==e&&void 0!==e&&e.errcode?r.e.alert({content:"\u5185\u5bb9\u53ef\u80fd\u542b\u6709\u8fdd\u6cd5\u8fdd\u89c4\u5185\u5bb9",onConfirm:function(){}}):r.e.alert({content:"\u4fdd\u5b58\u6210\u529f",onConfirm:function(){C(-1)}})})).finally((function(){d(!1)}))}}):r.e.alert({content:"\u8bf7\u5148\u52fe\u9009\u534f\u8bae",onConfirm:function(){}})},children:[Object(u.jsx)(r.i.Item,{name:"company",label:"\u516c\u53f8\u540d\u79f0",rules:[{required:!0,message:"\u516c\u53f8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(u.jsx)(r.m,{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0"})}),Object(u.jsx)(r.i.Item,{name:"city",label:"\u57ce\u5e02",rules:[{required:!0,message:"\u57ce\u5e02\u4e0d\u80fd\u4e3a\u7a7a"}],trigger:"onConfirm",onClick:function(){f(!0)},children:Object(u.jsx)(r.c,{title:"\u57ce\u5e02\u9009\u62e9",options:e.cityList,visible:b,onClose:function(){f(!1)},children:function(e){return e.length?e.map((function(e){return e.label})).join("/"):"\u8bf7\u9009\u62e9\u57ce\u5e02"}})}),Object(u.jsx)(r.i.Item,{name:"content",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(u.jsx)(r.v,{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",maxLength:2e3,rows:4})})]})}}}]);
//# sourceMappingURL=7.2c8934e9.chunk.js.map