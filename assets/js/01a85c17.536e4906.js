"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[4013],{34082:function(e,t,a){a(67294),a(83699),a(97325)},12864:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(67294),n=a(86010),l=a(97325);var c=a(35463),s=a(23702),i=a(93241),o=a(53852),u="tag_Nnez";function m(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,e))}))),r.createElement("hr",null))}function g(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return r.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return r.createElement(m,{key:e.letter,letterEntry:e})})))}var f=a(33647);function p(e){var t=e.tags,a=e.sidebar,o=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogTagsListPage)},r.createElement(c.d,{title:o}),r.createElement(f.Z,{tag:"blog_tags_list"}),r.createElement(i.Z,{sidebar:a},r.createElement("h1",null,o),r.createElement(g,{tags:t})))}},53852:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(86010),l=a(83699),c="tag_zVej",s="tagRegular_sFm0",i="tagWithCount_h2kH";function o(e){var t=e.permalink,a=e.label,o=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(c,o?i:s)},a,o&&r.createElement("span",null,o))}},93241:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(87462),n=a(63366),l=a(67294),c=a(86010),s="blogBackground_WB8r",i="cardListView_Xc25",o="singleBlogPageView_LeVK",u=a(46235),m=(a(34082),["sidebar","toc","children","isListView","isTagsPostPage"]);function g(e){var t,a=e.sidebar,g=e.toc,f=e.children,p=e.isListView,E=e.isTagsPostPage,d=(0,n.Z)(e,m),h=(a&&a.items.length,!p&&!E);return l.createElement(u.Z,(0,r.Z)({},d,{wrapperClassName:s}),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:(0,c.Z)("col",(t={"col--8":h,"col--offset-1":g&&h,"col--offset-2":!g&&h},t[i]=!0===p||!0===E,t[o]=h,t)),itemScope:!0,itemType:"http://schema.org/Blog"},f),g&&l.createElement("div",{className:"col col--2"},g))))}}}]);