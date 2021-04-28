_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"6NQI":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("nKUr");function o(e){return Object(n.jsxs)("div",{className:"row m-t-40",children:[Object(n.jsxs)("div",{className:"pinciple-".concat(e.firstType," xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2"),children:[Object(n.jsx)("img",{className:"has-bg-grey-300 br-md overflow-hidden m-b-20",style:{objectFit:"contain",height:"380px",width:"100%"},src:e.firstImage,loading:"lazy",decoding:"async"}),Object(n.jsx)("p",{children:e.firstCaption})]}),Object(n.jsxs)("div",{className:"pinciple-".concat(e.secondType," xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2"),children:[Object(n.jsx)("img",{className:"has-bg-grey-300 br-md overflow-hidden m-b-20",style:{objectFit:"contain",height:"380px",width:"100%"},src:e.secondImage,loading:"lazy",decoding:"async"}),Object(n.jsx)("p",{children:e.secondCaption})]})]})}},GckS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts",function(){return a("nI47")}])},hR9u:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("nKUr");function o(e){return Object(n.jsx)("div",{className:"inline-flex",style:{flex:"0 1 33%"},children:Object(n.jsxs)("a",{className:"has-bg-grey-100 p-y-16 p-x-14 m-8 br-md flex align-items-center ".concat(e.disabled?"is-disabled":"shadow-1"),style:{minWidth:"25%",border:e.disabled?"solid 2px #E8E8E8":"none"},rel:"noopener noreferrer",href:e.link,target:"_blank",children:[Object(n.jsx)("div",{className:"br-circle h-9 w-9 flex justify-content-center align-items-center ".concat(e.disabled?"has-bg-grey-400":"has-bg-brand-100"),style:{minWidth:"45px"},children:Object(n.jsx)("span",{className:"d-icon d-".concat(e.icon," ").concat(e.disabled?"is-grey-700":"is-brand-300")})}),Object(n.jsxs)("div",{className:"m-l-10",children:[Object(n.jsxs)("div",{className:"flex align-items-center m-b-4",children:[Object(n.jsx)("p",{className:"is-large is-bold",style:{lineHeight:"1"},children:e.name}),e.disabled?"":Object(n.jsx)("span",{className:"d-icon d-arrow-right is-brand-300 m-l-4"})]}),Object(n.jsx)("p",{className:"is-small",style:{lineHeight:"1"},children:e.caption})]})]})})}},nI47:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a("rePB"),o=a("Ff2n"),i=(a("q1tI"),a("7ljp")),s=a("i4SC"),l=a("hR9u"),c=a("I6DW"),r=a("6NQI");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={title:"Alerts"},h={meta:m},u=function(e){var t=e.children;return Object(i.a)(s.a,{sidebar:"components",meta:m},t)};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)(u,p(p(p({},h),a),{},{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"Alerts"),Object(i.a)("p",null,"Alerts provide users with information and to notify them of actions that need to be taken. Denali categorizes alerts into 3 distinct types notification, block, or inline with specific use cases for each."),Object(i.a)("h2",null,"Developer Docs"),Object(i.a)("div",{className:"row"},Object(i.a)(l.a,{name:"CSS",icon:"css",caption:"Avaiable Now",link:"https://denali-design.github.io/denali-css/?path=/story/components-alert--block",mdxType:"ResourceCard"}),Object(i.a)(l.a,{name:"Ember",icon:"ember",caption:"Avaiable Now",link:"https://denali-design.github.io/denali-ember/?path=/story/denalialert--default",mdxType:"ResourceCard"}),Object(i.a)(l.a,{name:"React",icon:"react",caption:"Coming Soon",disabled:!0,mdxType:"ResourceCard"})),Object(i.a)("hr",null),Object(i.a)("h2",null,"Foundation"),Object(i.a)(c.a,{image:"/images/components/alerts/foundation.png",mdxType:"SingleImage"}),Object(i.a)("h4",null,"Icon"),Object(i.a)("p",null,"Icons can be used as supporting illustrations to supplement the message and help commicate meaning for alerts. They should be used in unison with the alerts content."),Object(i.a)("h4",null,"Content"),Object(i.a)("p",null,"Content is used to communicates a change or error within an alert or notificiation. This content can vary, but usually contains a title and description. These do not have to live in unison, but one or the other are required to provided context to the users."),Object(i.a)("h4",null,"Close"),Object(i.a)("p",null,"The close button is located in the top right corner of alerts and notifications. Close buttons are only present when alerts are dismissable and are used to clear alerts and notifications that have been read."),Object(i.a)("hr",null),Object(i.a)("h2",null,"Types"),Object(i.a)("h4",null,"Static"),Object(i.a)("p",null,"Static alerts are informational in nature. They appear by default and are not dismissable. We suggest using inline or block level style alerts for static alerts as they fit alongside the content they are referencing. "),Object(i.a)(r.a,{firstType:"do",firstImage:"/images/components/alerts/static-do.png",firstCaption:"use a block level alert below a delivery tracking element notifying a user that their order delivery is behind schedule.",secondType:"dont",secondImage:"/images/components/alerts/static-dont.png",secondCaption:"use a inline style alert above the element to notify a user that their package is behind schedule.",mdxType:"DoubleImage"}),Object(i.a)("h4",null,"Notification"),Object(i.a)("p",null,"Notification alerts are informational in nature and appear immediately in response to an action a user has taken. Notification alerts are dismissed on their own after a period of 3-5 seconds. We recommend using notification style alerts for notification alerts as they call attention to themselves by appearing on top of all other elements on a page."),Object(i.a)(c.a,{type:"do",image:"/images/components/alerts/notification-do.png",caption:"use a notification style alert to notify a user that changes they made to a page have been saved, immediately after they select the save button.",mdxType:"SingleImage"}),Object(i.a)(c.a,{type:"dont",image:"/images/components/alerts/notification-dont.png",caption:"use an inline style alert to notify a user that changes they made to a page have been saved.",mdxType:"SingleImage"}),Object(i.a)("hr",null),Object(i.a)("h2",null,"Placement"),Object(i.a)("p",null,"Alerts can be placed in a few locations depending on the objective of the alert. They can be fixed, displayed temporarily, or scroll with content, but this depends on the context usually defined as global or local type."),Object(i.a)("h4",null,"Global"),Object(i.a)("p",null,"Inline alerts reference information pertaining to an entire system or application. For this reason we recommend placing global alerts at the top of the application screen. We suggest using inline or notification alerts as global alerts as they appear at the top of the screen and visually encompass the entirety of the system or application they are applied to."),Object(i.a)(c.a,{type:"do",image:"/images/components/alerts/global-do.png",caption:"use an inline alert throughout a site to notify users that the entire system is down for maintenance.",mdxType:"SingleImage"}),Object(i.a)(c.a,{type:"dont",image:"/images/components/alerts/global-dont.png",caption:"use notifications style alert on the landing page of a site to notify users that the entire system is down for maintenance.",mdxType:"SingleImage"}),Object(i.a)("h4",null,"Local"),Object(i.a)("p",null,"Local alerts contain information specific to an element on the page and are located in close proximity to that element. We suggest using block level or text style alerts as local alerts as they can be placed next to the elements they are referencing."),Object(i.a)(r.a,{firstType:"do",firstImage:"/images/components/alerts/local-do.png",firstCaption:"use block level alerts adjacent to an upload form to notify a user that their upload was successful.",secondType:"dont",secondImage:"/images/components/alerts/local-dont.png",secondCaption:"use an inline alert to notify a user that their upload was successful.",mdxType:"DoubleImage"}),Object(i.a)("hr",null),Object(i.a)("h2",null,"Themeing"),Object(i.a)("p",null,"Denali\u2019s components are completely themeable. This allows you to use our framework and adapt the visual style of Denali\u2019s components to match your prodcut\u2019s unique visual brand. Check out our guide to themeing with Denali to find out more."),Object(i.a)("h4",null,"Dennit Racing Theme"),Object(i.a)("p",null,"Dennit Racing uses a customized Denali theme that aligns visually with their brand. Dennit\u2019s alerts feature custom color, type, and cornder radius."),Object(i.a)(c.a,{image:"/images/components/alerts/theming.png",mdxType:"SingleImage"}),Object(i.a)("p",null,"For all variables visit the CSS documentation page for ",Object(i.a)("a",p({parentName:"p"},{href:"https://denali-design.github.io/denali-css/?path=/story/get-started-variables--page#alert"}),"alerts"),"."))}b.isMDXComponent=!0}},[["GckS",0,1,2,3,4]]]);