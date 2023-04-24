"use strict";(self.webpackChunkmern_media_web_app=self.webpackChunkmern_media_web_app||[]).push([[771],{1939:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(184);function r(){return(0,n.jsxs)("div",{className:"mt-2 mx-1 rounded-lg bg-white border border-gray-100 py-2.5 animate-pulse",children:[(0,n.jsx)("div",{className:"h-12 w-12 bg-gray-150 rounded-full ml-4 mb-2"}),(0,n.jsx)("div",{className:"bg-gray-150 min-h-62.5 max-h-100"}),(0,n.jsxs)("div",{className:"px-5",children:[(0,n.jsx)("div",{className:"bg-gray-150 w-24 h-5 mt-5"}),(0,n.jsx)("div",{className:"bg-gray-150 w-[90%] h-5 mt-3 mb-3"})]})]})}},9310:function(e,t,s){s.d(t,{Z:function(){return b}});var n=s(2791),r=s(364),c=s(885),a=s(9271),i=s(1523),l=s(2426),o=s.n(l),d=s(6094),u=s(850),m=s(8787),x=(0,s(8499).Z)(n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined"),h=s(3402),p=s(6953),v=s(7361);var f=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,r=(0,n.useState)(0),a=(0,c.Z)(r,2),i=a[0],l=a[1];return(0,n.useEffect)((function(){var n=setTimeout((function(){1===i&&e(),l(0)}),s);return 2===i&&t(),function(){return clearTimeout(n)}}),[i]),function(){return l((function(e){return e+1}))}},j=s(184),g=function(e){var t,s,r,l=e.post,g=e.user,N=(0,n.useState)(l.likes.length),b=(0,c.Z)(N,2),Z=b[0],w=b[1],y=(0,n.useState)(!1),k=(0,c.Z)(y,2),C=k[0],I=k[1],_=(0,a.k6)();(0,n.useEffect)((function(){I(l.likes.includes(g.userId))}),[g.userId,l.likes]);var z=function(){try{p.F.put("/posts/like",{postId:l._id},{headers:{Authorization:"Bearer ".concat(g.accessToken)}})}catch(e){}w((function(e){return C?e-1:e+1})),I((function(e){return!e}))},H=f((function(){return _.push("/postdetails/".concat(l._id))}),z);return(0,j.jsxs)("div",{className:"mt-2 rounded-lg bg-white border border-gray-100 py-2.5",children:[(0,j.jsx)("div",{className:"px-3",children:(0,j.jsxs)(i.rU,{to:"/profile/".concat(null===l||void 0===l||null===(t=l.user)||void 0===t?void 0:t._id),className:"flex gap-2.5 pb-2",children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:"h-10 w-10 object-cover rounded-full",src:(null===l||void 0===l||null===(s=l.user)||void 0===s?void 0:s.profilepicture)||v.tU,alt:""})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:null===l||void 0===l||null===(r=l.user)||void 0===r?void 0:r.username}),(0,j.jsx)("div",{className:"text-darkGray-10 text-xs",children:o()(l.createdAt).fromNow()})]})]})}),(0,j.jsxs)("div",{onClick:H,children:[(0,j.jsx)("div",{children:l.photo&&(0,j.jsx)("img",{className:"md:max-h-92.5 max-h-77.5 w-full",src:l.photo,alt:""})}),(0,j.jsxs)("div",{className:"md:px-6 px-4",children:[(0,j.jsx)("div",{className:"mt-2 md:text-3xl text-xl font-medium",children:null===l||void 0===l?void 0:l.title}),(0,j.jsx)("div",{className:"text-black mt-2 mb-2 trucate-word",children:null===l||void 0===l?void 0:l.description})]})]}),(0,j.jsxs)("div",{className:"flex items-center justify-between md:px-6 px-4",children:[(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsxs)("button",{onClick:z,className:"flex cursor-pointer items-center",children:[C?(0,j.jsx)(d.Z,{style:{color:"red"}}):(0,j.jsx)(u.Z,{}),(0,j.jsx)("span",{children:Z})]}),(0,j.jsx)(i.rU,{to:"/postdetails/".concat(l._id),children:(0,j.jsx)(m.Z,{})})]}),(0,j.jsx)("button",{onClick:function(){navigator.clipboard.writeText("".concat(window.origin,"/postdetails/").concat(l._id)),h.ZP.success("Copied!",{position:"top-right"})},className:"",children:(0,j.jsx)(x,{})})]})]})},N=s(5489);var b=function(e){var t=e.posts,s=e.NoLink,n=(0,r.v9)((function(e){return e.user}));return(0,j.jsxs)("div",{className:"mt-1 flex-[6.5] md:px-0 mb-7 px-2 min-h-screen",children:[!s&&(0,j.jsx)(N.Z,{}),t.map((function(e,t){return!!e&&(0,j.jsx)(g,{user:n,post:e},t)}))]})}},5489:function(e,t,s){s.d(t,{Z:function(){return c}});s(2791);var n=s(1523),r=s(184);function c(){return(0,r.jsxs)("div",{className:"mt-3 mb-2 flex gap-2",children:[(0,r.jsx)(n.OL,{className:"ml-2 text-black-0 py-1 px2",exact:!0,to:"/",activeClassName:"font-black",children:"Posts"}),(0,r.jsx)(n.OL,{className:"ml-2 text-black-0 py-1 px2",to:"/feeds",activeClassName:"font-black",children:"Feeds"})]})}},2886:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(184);function r(){return(0,n.jsx)("div",{className:"flex-[3] lg:block hidden"})}},220:function(e,t,s){s.d(t,{Z:function(){return j}});var n=s(1523),r=s(7510),c=s(2037),a=s(4900),i=s(9628),l=s(963),o=s(6274),d=s(4861),u=s(2279),m=s(9799),x=s(9547),h=s(5449),p=s(184),v=[{name:"Create Post",to:"/write",Icon:r.Z},{name:"Home",to:"/",Icon:c.Z},{name:"Chats",to:"/chat",Icon:a.Z},{name:"Questions",to:"/contact",Icon:i.Z},{name:"Sign In/Up",to:"/login",Icon:l.Z},{name:"About",to:"/about",Icon:o.Z},{name:"Contact",to:"/contact",Icon:d.Z}],f=[{to:"https://twitter.com/SRK_R_?t=58WfgjgrqabaZrXWBHTZkg&s=08",Icon:u.Z},{to:"https://github.com/SRK-prog/",Icon:m.Z},{to:"https://www.linkedin.com/in/sivaramakrishnan-r262/",Icon:x.Z},{to:"https://www.instagram.com/siva.r12/",Icon:h.Z}];function j(){return(0,p.jsx)("div",{className:"h-screen-cal-55 top-[55px] flex-[3] sticky overflow-y-auto bg-gray-70 sidebar-scrollbar md:block hidden",children:(0,p.jsxs)("div",{className:"p-4",children:[(0,p.jsx)("ul",{className:"flex flex-col gap-2 font-medium text-gray-80",children:v.map((function(e,t){var s=e.name,r=e.Icon,c=e.to;return(0,p.jsxs)(n.rU,{to:c,className:"flex items-center duration-200 px-3 py-2.5 rounded gap-4 hover:bg-lightBlue-10 hover:text-blue-20",children:[(0,p.jsx)(r,{}),(0,p.jsx)("span",{children:s})]},t)}))}),(0,p.jsx)("div",{className:"flex mt-5 gap-1 mb-2 items-center justify-center",children:f.map((function(e,t){var s=e.Icon,n=e.to;return(0,p.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,children:(0,p.jsx)(s,{className:"text-3xl text-gray-90 hover:text-[#353434]"})},t)}))}),(0,p.jsx)("hr",{className:"py-5"})]})})}},771:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var n=s(2982),r=s(2791),c=s(364),a=s(9310),i=s(220),l=s(2886),o=s(2426),d=s.n(o),u=s(850),m=s(8787),x=s(4551),h=s(7361),p=s(184),v=function(e){var t,s,n,r=e.post;return(0,p.jsxs)("div",{className:"mt-2 rounded-lg bg-white border border-gray-100 py-2.5",children:[(0,p.jsx)("div",{className:"px-3",children:(0,p.jsxs)("span",{className:"flex gap-2.5 pb-2",children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{className:"h-10 w-10 object-cover rounded-full",src:(null===r||void 0===r||null===(t=r.user)||void 0===t?void 0:t.profilepicture)||h.tU,alt:""})}),(0,p.jsxs)("div",{className:"NonNameDate",children:[(0,p.jsx)("div",{className:"NonpostUserdate",children:null===r||void 0===r||null===(s=r.user)||void 0===s?void 0:s.username}),(0,p.jsx)("div",{className:"text-darkGray-10 text-xs",children:d()(r.createdAt).fromNow()})]})]})}),(0,p.jsx)("div",{children:r.photo&&(0,p.jsx)("img",{className:"md:max-h-92.5 max-h-77.5 w-full",src:r.photo,alt:""})}),(0,p.jsxs)("div",{className:"md:px-6 px-4",children:[(0,p.jsx)("div",{className:"mt-2 md:text-3xl text-xl font-medium",children:null===r||void 0===r?void 0:r.title}),(0,p.jsx)("div",{className:"text-black mt-2 mb-2 trucate-word",children:null===r||void 0===r?void 0:r.description})]}),(0,p.jsxs)("div",{className:"flex items-center justify-between md:px-6 px-4",children:[(0,p.jsxs)("div",{className:"flex items-center gap-2",children:[(0,p.jsxs)("span",{className:"",children:[(0,p.jsx)(u.Z,{}),(0,p.jsx)("span",{children:null===r||void 0===r||null===(n=r.likes)||void 0===n?void 0:n.length})]}),(0,p.jsx)("span",{className:"",children:(0,p.jsx)(m.Z,{})})]}),(0,p.jsx)("div",{className:"",children:(0,p.jsx)(x.Z,{})})]})]})};var f=function(e){var t=e.posts;return(0,p.jsx)("div",{className:"mt-1.5 flex-[6.5] px-2",children:t.map((function(e){return(0,p.jsx)(v,{post:e},e._id)}))})},j=s(1939),g=s(4165),N=s(5861),b=s(6953),Z=h.Hp.FETCH_POSTS;var w=(0,c.$j)((function(e){return{posts:e.posts,user:e.user}}),{fetchPosts:function(){return function(){var e=(0,N.Z)((0,g.Z)().mark((function e(t){var s,n;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.F.get("/posts/get-all");case 2:s=e.sent,n=s.data.response,t({type:Z,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.posts,s=e.fetchPosts,c=e.user;return(0,r.useEffect)((function(){document.title=h.iC,s()}),[s]),(0,p.jsxs)("div",{className:"bg-gray-70 flex max-w-360 mx-auto",children:[(0,p.jsx)(i.Z,{}),t.length?c.isLoggedIn?(0,p.jsx)(a.Z,{posts:t}):(0,p.jsx)(f,{posts:t}):(0,p.jsx)("div",{className:"flex flex-col flex-[6.5] md:px-0 px-2",children:(0,n.Z)(new Array(5).keys()).map((function(e){return(0,p.jsx)(j.Z,{},e)}))}),(0,p.jsx)(l.Z,{})]})}))},6094:function(e,t,s){var n=s(2791),r=s(8499);t.Z=(0,r.Z)(n.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite")},850:function(e,t,s){var n=s(2791),r=s(8499);t.Z=(0,r.Z)(n.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorderOutlined")},8787:function(e,t,s){var n=s(2791),r=s(8499);t.Z=(0,r.Z)(n.createElement("path",{d:"M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"}),"ModeCommentOutlined")},4551:function(e,t,s){var n=s(2791),r=s(8499);t.Z=(0,r.Z)(n.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"ShareOutlined")}}]);
//# sourceMappingURL=771.31b5d479.chunk.js.map