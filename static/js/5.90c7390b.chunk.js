(this["webpackJsonpsjz-it-blacklist"]=this["webpackJsonpsjz-it-blacklist"]||[]).push([[5],{382:function(e,t,n){e.exports={page_content:"page_content_N+OYe",btn_wrap:"btn_wrap_BY6xg",discuss_title:"discuss_title_JMxc9"}},385:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(6),i=n(5),a=n(0),r=n(91),s=n(386),l=n(387),j=n(383),u=n(9),d=n(90),f=n(372),b=n.n(f),p=n(92),O=n(382),m=n.n(O),h=n(370),x=n.n(h),g=n(50),y=n(19);t.default=function(){var e=Object(a.useContext)(g.a).state,t=Object(u.e)(),n=Object(u.f)(),f=Object(a.useState)({}),O=Object(i.a)(f,2),h=O[0],_=O[1],v=Object(a.useState)([]),k=Object(i.a)(v,2),C=k[0],w=k[1],Y=Object(a.useState)(!1),z=Object(i.a)(Y,2),I=z[0],S=z[1],M=Object(a.useState)(!1),B=Object(i.a)(M,2),D=B[0],H=B[1],N=function(e){Object(p.a)({company:e,current:1,pageSize:100}).then((function(e){w(e),console.log(e)}))},F=function(e){var n=b.a.parse(t.search);Object(p.b)(n).then((function(t){_(t[0]),e&&N(t[0].company)}))};Object(a.useEffect)((function(){F(!0)}),[]);var J=function(t){Object(p.g)({_id:h._id,rate:{type:t,userInfo:e.userInfo}}).then((function(){F(),r.w.show("\u8bc4\u4ef7\u6210\u529f")}))};return Object(y.jsxs)("div",{className:m.a.page_content,children:[Object(y.jsx)(r.q,{onBack:function(){n("/")}}),Object(y.jsxs)(r.b,{title:h.company,extra:"".concat(x()(h.createTime).format("YYYY-MM-DD HH:mm")),bodyStyle:{fontSize:18,paddingBottom:40},children:[h.content,Object(y.jsx)(r.a,{color:"primary",fill:"none",style:{float:"right"},onClick:function(){r.p.confirm({content:"\u5982\u679c\u5185\u5bb9\u6709\u8bef\uff0c\u53ef\u4ee5\u70b9\u6b64\u7ea0\u9519\uff0c\u8bf7\u5177\u4f53\u5230\u54ea\u5bb6\u516c\u53f8\u3001\u54ea\u6761\u8bc4\u8bba",onConfirm:function(){n("/feedback?_id=".concat(h._id,"&company=").concat(h.company))}})},children:"\u6211\u8981\u7ea0\u9519"})]}),Object(y.jsx)("div",{className:m.a.btn_wrap,children:function(){var t=e.userInfo.openid||"",n=h.rate||[],o=n.filter((function(e){return 1===e.type})),i=n.filter((function(e){return-1===e.type})),a=-1!==[].concat(Object(c.a)(o),Object(c.a)(i)).findIndex((function(e){return e.userInfo.openid===t}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(r.a,{onClick:function(){return J(a?0:1)},size:"small",color:a?"success":"default",shape:"rounded",children:a?Object(y.jsxs)("div",{style:{padding:"0 6px"},children:[Object(y.jsx)(s.a,{style:{paddingRight:4}}),o.length]}):"\u6709\u4ef7\u503c"}),Object(y.jsx)(r.a,{onClick:function(){return J(a?0:-1)},size:"small",color:a?"danger":"default",shape:"rounded",children:a?Object(y.jsxs)("div",{style:{padding:"0 6px"},children:[Object(y.jsx)(l.a,{style:{paddingRight:4}}),i.length]}):"\u65e0\u4ef7\u503c"})]})}()}),Object(y.jsxs)("div",{className:m.a.discuss_title,children:[Object(y.jsx)(j.a,{}),"\u7cbe\u9009\u8bc4\u8bba"]}),Object(y.jsx)(r.n,{children:C.map((function(e){return Object(y.jsx)(r.n.Item,{children:Object(y.jsx)("div",{onClick:function(){return r.w.show("\u53d1\u8868\u65f6\u95f4:".concat(x()(e.createTime).format("YYYY-MM-DD HH:mm:ss")))},children:e.content})},e._id)}))}),Object(y.jsx)(r.i,{style:{marginTop:20},layout:"horizontal",footer:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(r.d,{checked:D,onChange:function(e){return H(e)},style:{"--icon-size":"18px","--font-size":"14px","--gap":"6px",marginBottom:8},children:["\u52fe\u9009\u4ee3\u8868\u5df2\u9605\u8bfb\u5e76\u540c\u610f",Object(y.jsx)(d.b,{to:"/statement",children:"\u76f8\u5173\u6761\u6b3e"})]}),Object(y.jsx)(r.a,{block:!0,type:"submit",color:"primary",loading:I,children:"\u63d0\u4ea4"})]}),onFinish:function(t){var n;n=t,D?r.p.confirm({content:"\u786e\u8ba4\u8981\u63d0\u4ea4\u5417\uff1f",onConfirm:function(){S(!0),Object(p.e)(Object(o.a)(Object(o.a)({},n),{},{userInfo:e.userInfo,company:h.company})).then((function(e){console.log(e),null!==e&&void 0!==e&&e.errcode?r.e.alert({content:"\u5185\u5bb9\u53ef\u80fd\u542b\u6709\u8fdd\u6cd5\u8fdd\u89c4\u5185\u5bb9",onConfirm:function(){}}):r.e.alert({content:"\u4fdd\u5b58\u6210\u529f",onConfirm:function(){N(h.company)}})})).finally((function(){S(!1)}))}}):r.e.alert({content:"\u8bf7\u5148\u52fe\u9009\u534f\u8bae",onConfirm:function(){}})},children:Object(y.jsx)(r.i.Item,{name:"content",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(y.jsx)(r.v,{placeholder:"\u6211\u8981\u8bc4\u8bba\u2026",maxLength:2e3,rows:4})})})]})}}}]);
//# sourceMappingURL=5.90c7390b.chunk.js.map