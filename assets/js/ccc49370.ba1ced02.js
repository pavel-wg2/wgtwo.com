"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[6103],{87086:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(63366),l=a(67294),i=a(86010),o=a(2728),c="tableOfContents_bqdL",s=["className"];function m(e){var t=e.className,a=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},2728:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(87462),r=a(63366),l=a(67294),i=a(20107),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,o);a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function d(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){var t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=u(o,{anchorTopOffset:a.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function v(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var f=l.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,E=e.maxHeadingLevel,b=(0,r.Z)(e,p),w=(0,i.L)(),N=null!=h?h:w.tableOfContents.minHeadingLevel,_=null!=E?E:w.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:_});return g((0,l.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:_}}),[u,v,N,_])),l.createElement(f,(0,n.Z)({toc:C,className:o,linkClassName:u},b))}},93241:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(87462),r=a(63366),l=a(67294),i=a(86010),o="blogBackground_WB8r",c="cardListView_Xc25",s="singleBlogPageView_LeVK",m="col8_DrcQ",u="colOffset1_fYNX",d="colOffset2_jfKI",g=a(46235),v=(a(34082),["sidebar","toc","children","isListView","isTagsPostPage"]);function f(e){var t,a=e.sidebar,f=e.toc,p=e.children,h=e.isListView,E=e.isTagsPostPage,b=(0,r.Z)(e,v),w=(a&&a.items.length,!h&&!E);return l.createElement(g.Z,(0,n.Z)({},b,{wrapperClassName:o}),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:(0,i.Z)("col",(t={},t[m]=w,t[u]=f&&w,t[d]=!f&&w,t[c]=!0===h||!0===E,t[s]=w,t)),itemScope:!0,itemType:"http://schema.org/Blog"},p),f&&l.createElement("div",{className:"col col--2"},f))))}},49898:function(e,t,a){a.d(t,{Z:function(){return Fe}});var n=a(67294),r=a(86010),l=a(79107),i="articleCard_EtO4",o="articleContainer_Rf03",c=a(79524);function s(e){var t,a,s=e.children,m=(e.className,(0,l.C)()),u=m.frontMatter,d=m.assets,g=m.metadata,v=m.isBlogPostPage,f=(g.hasTruncateMarker,(0,c.C)().withBaseUrl),p=null!=(t=d.image)?t:u.image;return n.createElement("article",{className:(0,r.Z)((a={},a[i]=!v,a[o]=v,a)),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},p&&n.createElement("meta",{itemProp:"image",content:f(p,{absolute:!0})}),s)}var m="featuredImage_X5qz",u="dottedBorderBottom_ncyy",d="linkClickArea_empq",g=a(83699),v={avatarContainer:"avatarContainer_wkVt",avatarPhoto:"avatarPhoto__Yie",avatarName:"avatarName_nPzs",avatarSubtitle:"avatarSubtitle_mwwR"};function f(e){return e.href?n.createElement(g.Z,e):n.createElement(n.Fragment,null,e.children)}function p(e){var t,a,i,o,c=e.author,s=e.className,m=c.name,u=c.title,d=c.url,g=c.imageURL,p=c.email,h=d||p&&"mailto:"+p||void 0,E=(0,l.C)(),b=E.assets,w=E.metadata,N=E.isBlogPostPage,_=w.frontMatter,C=void 0!==b.image||void 0!==_.image;return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",(t={},t[v.avatarContainer]=!N,t),s)},g&&n.createElement(f,{href:h,className:"avatar__photo-link"},n.createElement("img",{className:(0,r.Z)("avatar__photo",(a={},a[v.avatarPhoto]=!N,a)),src:g,alt:m})),m&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:(0,r.Z)("avatar__name",(i={},i[v.avatarName]=!N,i[v.hasImageBackground]=C,i))},n.createElement(f,{href:h,itemProp:"url"},n.createElement("span",{itemProp:"name"},m))),u&&n.createElement("small",{className:(0,r.Z)("avatar__subtitle",(o={},o[v.avatarSubtitle]=!N,o[v.hasImageBackground]=C,o)),itemProp:"description",title:u},u)))}var h="authorCol_q4o9",E="imageOnlyAuthorRow_lXe7",b="imageOnlyAuthorCol_cxD5",w="authorsContainerCardView_c4as",N="authorItem_b5pK",_="avatarPhoto_KbfP";function C(e){return e.href?n.createElement(g.Z,e):n.createElement(n.Fragment,null,e.children)}function k(e){var t,a,i,o,c=e.className,s=(0,l.C)(),m=s.metadata.authors,u=s.assets,d=s.isBlogPostPage;if(0===m.length)return null;var g=m.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",g?E:"row",(t={},t[w]=!d,t),c)},(d||m.length<=2)&&m.map((function(e,t){var a,l;return n.createElement("div",{className:(0,r.Z)(!g&&"col col--6",g?b:h,(a={},a[N]=!d,a)),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(l=u.authorsImageUrls[t])?l:e.imageURL})}))})),m.length>2&&!d&&n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.Z)(!g&&"col col--6",g?b:h,(a={},a[N]=!d,a))},m.slice(1).map((function(e,t){var a;return n.createElement(C,{href:e.url,className:"avatar__photo-link",key:t},n.createElement("img",{className:(0,r.Z)("avatar__photo",(a={},a[_]=!d,a)),src:e.imageURL,alt:e.name,title:e.name}))}))),n.createElement("div",{className:(0,r.Z)(!g&&"col col--6",g?b:h,(i={},i[N]=!d,i))},n.createElement(p,{author:Object.assign({},m[0],{imageURL:null!=(o=u.authorsImageUrls[0])?o:m[0].imageURL})}))))}var y=a(28342);function P(e){e.children,e.className;var t,a,i=(0,l.C)(),o=i.assets,c=i.metadata,s=(i.isBlogPostPage,c.frontMatter),v=null!=(t=o.image)?t:s.image;return n.createElement("div",{className:(0,r.Z)(m,(a={},a[u]=void 0===v,a)),style:{backgroundImage:v?"linear-gradient(transparent 62%, #242c37cc 85%), url('"+v+"')":"url('/img/image-placeholder-wgtwo.png')"}},n.createElement(g.Z,{to:c.permalink,className:d}),n.createElement(k,null))}var Z="articleCardHeader_doJu",O="title_xvU1",L="titleCardView_r57b";function x(e){var t,a,i=e.className,o=(0,l.C)(),c=o.metadata,s=o.isBlogPostPage,m=c.permalink,u=c.title,d=s?"h1":"h2";return n.createElement(d,{className:(0,r.Z)((t={},t[O]=s,t),(a={},a[L]=!s,a),i),itemProp:"headline"},s?u:n.createElement(g.Z,{itemProp:"url",to:m,title:u},u))}var I,H,B=a(97325),T=a(23777),j=a(39962),M="container_iJTo",S="containerCardView_EbU1",z="dateContainer_S5xq",A="iconsContainer_WcqX",R="noIcons_O5Tx",U="button_jnFd",F="icon_K6Vf",V="iconLink_fFIC",q="spacer_N6vp",D=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=function(e){var t=e.title,a=e.titleId,r=K(e,D);return n.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:56.693,width:56.693,viewBox:"0 0 56.693 56.693",xmlSpace:"preserve","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,I||(I=n.createElement("rect",{width:"100%",height:"100%",fill:"none"})),H||(H=n.createElement("g",{className:"currentLayer"},n.createElement("title",null,"Layer 1"),n.createElement("path",{d:"M56.237 11.546a22.859 22.859 0 0 1-6.598 1.809 11.509 11.509 0 0 0 5.051-6.357 22.997 22.997 0 0 1-7.295 2.79 11.473 11.473 0 0 0-8.385-3.629c-6.344 0-11.488 5.144-11.488 11.489 0 .899.101 1.775.298 2.618-9.548-.48-18.014-5.053-23.68-12.004a11.43 11.43 0 0 0-1.555 5.777c0 3.985 2.027 7.502 5.11 9.562a11.456 11.456 0 0 1-5.204-1.438v.145c0 5.565 3.96 10.208 9.215 11.265a11.55 11.55 0 0 1-5.189.195c1.463 4.564 5.705 7.887 10.732 7.979A23.047 23.047 0 0 1 2.98 46.665c-.926 0-1.841-.055-2.74-.161a32.51 32.51 0 0 0 17.61 5.161c21.132 0 32.687-17.505 32.687-32.686 0-.498-.01-.995-.032-1.488a23.268 23.268 0 0 0 5.731-5.945z",className:"selected"}))))},W=["title","titleId"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},J.apply(this,arguments)}function Y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var $,Q,ee=function(e){var t=e.title,a=e.titleId,r=Y(e,W);return n.createElement("svg",J({height:500,width:500,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,n.createElement("path",{d:"M50 0C22.3 0 0 22.3 0 50v400c0 27.7 22.3 50 50 50h400c27.7 0 50-22.3 50-50V50c0-27.7-22.3-50-50-50H50zm89.906 105.781c19.182 0 34.719 15.537 34.719 34.719 0 19.182-15.537 34.75-34.719 34.75-19.182 0-34.719-15.568-34.719-34.75 0-19.182 15.537-34.719 34.72-34.719zm181.875 90.438c3.922.014 7.925.199 13.313.531 26.184 1.615 55.36 22.08 56.219 70.031.706 39.493.5 102.081.5 125.125H332.28c0-23.574.25-72.274.25-106.719 0-15.672-7.035-36.75-32.094-36.75-27.597 0-34.312 25.645-34.312 36.75 0 33.074-.281 85.752-.281 106.72h-59.188c0-35.345.375-156.654.375-190.907 30.568 0 45.191-.063 56.375-.063 0 11.218-.094 18.722-.094 26.907 9.337-18.852 34.832-30.655 45.75-31.219 4.98-.257 8.797-.42 12.72-.406zm-211.594 5.531h59.344v190.063h-59.344V201.75z",style:{fillOpacity:1,fillRule:"nonzero"}}))},te=["title","titleId"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ae.apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var re=function(e){var t=e.title,a=e.titleId,r=ne(e,te);return n.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:256,height:256,viewBox:"0 0 256 256","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,$||($=n.createElement("rect",{width:"100%",height:"100%",fill:"none"})),Q||(Q=n.createElement("g",{className:"currentLayer"},n.createElement("title",null,"Layer 1"),n.createElement("path",{fill:"none",d:"M0 0h256v256H0z"}),n.createElement("path",{d:"M255.429 115.27a33.99 33.99 0 0 0-56.19-25.705c-17.844-9.453-39.088-15.189-61.287-16.464l5.523-33.14 23.156 3.612a25.705 25.705 0 1 0 2.655-16.783l-31.547-4.886a8.497 8.497 0 0 0-9.666 7.01l-7.329 44.081c-23.155.956-45.46 6.692-64.049 16.57a33.99 33.99 0 0 0-45.249 50.666 65.218 65.218 0 0 0-2.443 17.526c0 23.262 12.746 45.037 36.008 61.076s51.728 23.899 82.956 23.899 60.65-8.498 82.957-23.9 36.007-37.813 36.007-61.075a63.837 63.837 0 0 0-2.443-17.42 34.415 34.415 0 0 0 10.94-25.067zM68.485 145.011a16.995 16.995 0 1 1 16.995 16.995 16.995 16.995 0 0 1-16.995-16.995zm98.464 54.277a85.08 85.08 0 0 1-77.964 0 8.497 8.497 0 0 1 7.754-15.082 68.192 68.192 0 0 0 62.456 0 8.497 8.497 0 0 1 7.754 15.082zm3.505-37.282a16.995 16.995 0 1 1 16.995-16.995 16.995 16.995 0 0 1-16.995 16.995z"}))))},le=a(71787);function ie(e){window.open("http://twitter.com/intent/tweet?text="+e,"twitterwindow","left=20,top=20,width=600,height=300,toolbar=0,resizable=1")}function oe(e,t){var a="http://www.reddit.com/submit?url="+e+"&title="+t;window.open(a,"redditwindow","left=20,top=20,width=600,height=500,toolbar=0,resizable=1")}function ce(e,t){var a="http://www.linkedin.com/shareArticle?url="+e+"&title="+t;window.open(a,"linkedinwindow","left=20,top=20,width=600,height=500,toolbar=0,resizable=1")}function se(e){var t,a=e.readingTime,r=(t=(0,T.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,B.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return n.createElement(n.Fragment,null,r(a))}function me(e){var t=e.date,a=e.formattedDate;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function ue(){return n.createElement(n.Fragment,null," \xb7 ")}function de(e){var t,a,i,o=e.className,c=(0,j.Z)().siteConfig.url,s=(0,l.C)(),m=s.metadata,u=s.isBlogPostPage,d=m.date,g=m.formattedDate,v=m.readingTime;return n.createElement("div",{className:(0,r.Z)((t={},t[M]=u,t),(a={},a[S]=!u,a),"margin-vert--md",o)},n.createElement("div",{className:z},n.createElement(me,{date:d,formattedDate:g}),void 0!==v&&n.createElement(n.Fragment,null,n.createElement(ue,null),n.createElement(se,{readingTime:v}))),n.createElement("div",{className:(0,r.Z)((i={},i[A]=u,i[R]=!u,i))},n.createElement("button",{className:U,onClick:function(){return function(e,t){var a=t.title;ce(ge(e)+t.permalink,a)}(c,m)}},n.createElement(ee,{className:F})),n.createElement("button",{className:U,onClick:function(){return function(e,t){ie(t.title+" "+(ge(e)+t.permalink))}(c,m)}},n.createElement(G,{className:F})),n.createElement("button",{className:U,onClick:function(){return function(e,t){var a=t.title;oe(ge(e)+t.permalink,a)}(c,m)}},n.createElement(re,{className:F})),n.createElement("span",{className:q},"|"),n.createElement("button",{className:U,onClick:function(){return function(e,t){var a=ge(e)+t.permalink;navigator.clipboard.writeText(a)}(c,m)}},n.createElement(le.Z,{className:F+" "+V,strokeWidth:2.5}))))}function ge(e){return e.replace(/\/+$/,"")}function ve(){var e=(0,l.C)().isBlogPostPage;return n.createElement("header",{className:Z},e&&n.createElement(n.Fragment,null,n.createElement(x,null),n.createElement(de,null),n.createElement(k,null)),!e&&n.createElement(n.Fragment,null,n.createElement(x,null),n.createElement(de,null)))}var fe="articleCardContent_XsZ2",pe="articleContent_wrOu",he=a(63905);function Ee(e){var t,a=e.children,i=e.className,o=(0,l.C)().isBlogPostPage;return n.createElement("div",{id:o?he.blogPostContainerID:void 0,className:(0,r.Z)("markdown",i,(t={},t[fe]=!o,t[pe]=o,t)),itemProp:"articleBody"},n.createElement(y.Z,null,a))}var be=a(94850),we=a(74597),Ne=a(87462),_e=a(63366),Ce="readMoreButton_vHrp",ke=["blogPostTitle"];function ye(){return n.createElement("b",null,n.createElement(B.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function Pe(e){var t=e.blogPostTitle,a=(0,_e.Z)(e,ke);return n.createElement(g.Z,(0,Ne.Z)({className:Ce,"aria-label":(0,B.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(ye,null))}var Ze="articleCardFooter_iNs2",Oe="readMoreContainer_ZuCA",Le="tagsContainer_xDUT",xe="sharingSection_o4gn",Ie="sharingButton__GCX",He="sharingIcon_aNi7",Be="menuContainer_Dr6x",Te="menuIcon_fiGe",je=a(25256),Me=a(10663),Se=a(30680),ze=a(24778),Ae=a(80064);a(51008),a(92241);function Re(){var e,t,a=(0,j.Z)().siteConfig.url,i=(0,l.C)(),o=i.metadata,c=i.isBlogPostPage,s=o.tags,m=o.title,u=o.editUrl,d=o.hasTruncateMarker,g=!c&&d,v=s.length>0;return v||g||u?n.createElement("footer",{className:(0,r.Z)((e={},e[Ze]=!c,e["row docusaurus-mt-lg"]=c,e))},v&&n.createElement("div",{className:(0,r.Z)((t={},t[Le]=!c,t["col col--9"]=c,t))},n.createElement(we.Z,{tags:s})),c&&n.createElement("div",{className:(0,r.Z)("col "+xe,{"col--3":v})},n.createElement(Me.v,{menuButton:n.createElement(Se.j,{className:Ie},n.createElement(je.Z,{size:20,className:He})),className:Be,align:"center",arrow:!0,transition:!0},n.createElement(ze.s,{onClick:function(){return function(e,t){var a=Ue(e)+t.permalink;navigator.clipboard.writeText(a)}(a,o)}},n.createElement(le.Z,{size:20,className:Te,style:{fill:"transparent"}})," ","Copy link"),n.createElement(Ae.R,null),n.createElement(ze.s,{onClick:function(){return function(e,t){var a=t.title;ce(Ue(e)+t.permalink,a)}(a,o)}},n.createElement(ee,{className:Te})," Share on LinkedIn"),n.createElement(ze.s,{onClick:function(){return function(e,t){ie(t.title+" "+(Ue(e)+t.permalink))}(a,o)}},n.createElement(G,{className:Te})," Share on Twitter"),n.createElement(ze.s,{onClick:function(){return function(e,t){var a=t.title;oe(Ue(e)+t.permalink,a)}(a,o)}},n.createElement(re,{className:Te})," Share on Reddit"))),c&&u&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(be.Z,{editUrl:u})),!c&&n.createElement("div",{className:""+Oe},n.createElement(Pe,{blogPostTitle:m,to:o.permalink}))):null}function Ue(e){return e.replace(/\/+$/,"")}function Fe(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl",o=(0,l.C)().isBlogPostPage;return n.createElement(s,{className:(0,r.Z)(i,a)},!o&&n.createElement(P,null),n.createElement(ve,null),n.createElement(Ee,null,t),n.createElement(Re,null))}},65621:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),r=a(86010),l=a(35463),i=a(23702),o=a(79107),c=a(93241),s=a(49898),m=a(87462),u=a(97325),d=a(23672);function g(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(d.Z,(0,m.Z)({},a,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(d.Z,(0,m.Z)({},t,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e,t=(0,o.C)(),a=t.assets,r=t.metadata,i=r.title,c=r.description,s=r.date,m=r.tags,u=r.authors,d=r.frontMatter,g=d.keywords,v=null!=(e=a.image)?e:d.image;return n.createElement(l.d,{title:i,description:c,keywords:g,image:v},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}var f=a(87086);function p(e){var t=e.sidebar,a=e.children,r=(0,o.C)(),l=r.metadata,i=r.toc,m=l.nextItem,u=l.prevItem,d=l.frontMatter,v=d.hide_table_of_contents,p=d.toc_min_heading_level,h=d.toc_max_heading_level;return n.createElement(c.Z,{sidebar:t,toc:!v&&i.length>0?n.createElement(f.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:h}):void 0},n.createElement(s.Z,null,a),(m||u)&&n.createElement(g,{nextItem:m,prevItem:u}))}function h(e){var t=e.content;return n.createElement(o.n,{content:e.content,isBlogPostPage:!0},n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},n.createElement(v,null),n.createElement(p,{sidebar:e.sidebar},n.createElement(t,null))))}}}]);