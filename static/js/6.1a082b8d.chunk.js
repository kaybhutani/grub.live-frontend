(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{104:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(0),c=a.n(r),o=a(1),l=a(3),i=a(39),s=a.n(i),u=a(37),m=a(43),d=a.n(m);t.default=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),i=a[0],m=a[1],p=Object(r.useState)(null),f=Object(n.a)(p,2),b=f[0],_=f[1],h=Object(o.g)().partnerCode;return Object(r.useEffect)((function(){i||u.a.get("/partners/get-status/".concat(h)).then((function(e){return e.data})).then((function(e){!0===e.success?(_(e.data),m(!0)):window.alert("Could not fetch data")})).catch((function(e){console.log(e),window.alert("Could not fetch data")}))}),[i,h]),c.a.createElement("div",{className:"container",style:{minHeight:500}},i?c.a.createElement("div",null,c.a.createElement("div",{className:d.a.personalDetails},c.a.createElement("h2",null,"Hello, ",b.name),c.a.createElement("p",null,"Keep track of your own going deals. For more queries and payments, ",c.a.createElement(l.b,{to:"/contact"}," Contact ")," our team."),"Partner Code: ",c.a.createElement("button",{onClick:function(){return function(){var e=document.getElementsByClassName("partnerCode")[0],t=document.createElement("textarea");t.value=e.innerText,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}()}},c.a.createElement("span",{className:"partnerCode"},b.partnerCode)," ",c.a.createElement("i",{className:"eos-icons"},"content_copy"))),c.a.createElement("table",{cellSpacing:"0",cellPadding:"0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Restaurant Name"),c.a.createElement("th",null,"Status"))),c.a.createElement("tbody",null,b.status.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.name),c.a.createElement("td",{className:e.confirmed?"".concat(d.a.confirmedStatus):"".concat(d.a.inProgressStatus)},e.confirmed?c.a.createElement("span",null,c.a.createElement("i",{className:"eos-icons"},"check_circle_outline")," Confirmed "):c.a.createElement("span",null,c.a.createElement("i",{className:"eos-icons"},"access_time")," In Progress ")))}))))):c.a.createElement("div",{className:"loading-div"},c.a.createElement("h2",null,"Fetching data..."),c.a.createElement("img",{alt:"",className:"loading-icon",src:s.a})))}},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(35);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(36);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},36:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},37:function(e,t,a){"use strict";var n=a(40),r=a.n(n),c=a(38),o=r.a.create({baseURL:c.a});o.defaults.headers.common["Content-Type"]="application/json",t.a=o},38:function(e){e.exports=JSON.parse('{"a":"https://grub-live-backend.herokuapp.com"}')},39:function(e,t,a){e.exports=a.p+"static/media/three_dots_loading.4d1c15f3.svg"},43:function(e,t,a){e.exports={DealTracker:"DealTracker_DealTracker__P2jvk",dealTrackerContent:"DealTracker_dealTrackerContent__2vyJP",imagerWrapper:"DealTracker_imagerWrapper__3Ci7j",trackForm:"DealTracker_trackForm__2BE8i",formSubmitWrapper:"DealTracker_formSubmitWrapper__2QfVW",personalDetails:"DealTracker_personalDetails__1i5jb",confirmedStatus:"DealTracker_confirmedStatus__2y7Gr",inProgressStatus:"DealTracker_inProgressStatus__kIx__"}}}]);
//# sourceMappingURL=6.1a082b8d.chunk.js.map