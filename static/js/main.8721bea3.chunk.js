(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/mobile-qr-menu.a848aa64.svg"},11:function(e,t,a){e.exports=a.p+"static/media/grub.live-logo-yellow.8cd86dd6.svg"},12:function(e,t,a){e.exports=a(25)},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=a(2),o=(a(23),a(24),a(9)),s=a.n(o),m=function(e){return l.a.createElement(c.a,Object.assign({},e,{getProps:function(e){return{className:e.isCurrent?"active":""}}}))},u=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement(c.a,{to:"/",className:"nav-item"},l.a.createElement("div",null,l.a.createElement("img",{className:"logo",src:s.a,alt:"Grub.live logo"}))),l.a.createElement("div",{className:"nav-item-right"},l.a.createElement(m,{to:"/how-it-works"},l.a.createElement("div",{className:"hyperlink nav-item"},"How it works?")),l.a.createElement(m,{to:"/create"},l.a.createElement("button",{className:"black-yellow nav-item"},"Create Menu")))))},d=a(4),E=a(10),p=a.n(E),f=function(){var e=Object(n.useState)([!0,0]),t=Object(d.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Free ","&"," Simple Virtual QR Menu's ",l.a.createElement("br",null)," Rejuvenating the dining experience."),l.a.createElement("div",{className:"header-features"},[{name:"Enhances Safety",description:"Virtual menu's ensures a safe outlet by avoiding any unneeded interaction with staff, especially in times of COVID-19 safeguarding both staff and customers."},{name:"No delay",description:"Just open and start selecting out of menu, without waiting for the staff to reach out to you."},{name:"Super Quick and Simple",description:"It is super quick for people to scan the QR and get the menu on all of their phones. Your menu will never fall short now :D"},{name:"Always Updated",description:"No matter if your dishes change daily or monthly, you don't have to print menu's again! Just update it on grub.live."},{name:"Free and Easy to set up",description:"Our virtual menu's are and will be forever Free and easy to use!"}].map((function(e,t){return l.a.createElement("div",{className:"feature",key:t},l.a.createElement("button",{onClick:function(){return function(e){a[1]!==e?r([!0,e]):r([!1,-1])}(t)},className:"btn-link"},l.a.createElement("h3",null,e.name,l.a.createElement("i",{className:"eos-icons"},a[0]&&a[1]===t?"keyboard_arrow_down":"keyboard_arrow_right")," ")," "),l.a.createElement("p",{className:"fade".concat(a[0]&&a[1]===t?"in":"out")},e.description))}))),l.a.createElement("div",{className:"intro-img"},l.a.createElement("img",{src:p.a,alt:""})),l.a.createElement("div",null,l.a.createElement(c.a,{to:"/how-it-works"},l.a.createElement("button",{className:"btn-link learn-more"},"Learn more ",l.a.createElement("i",{className:"eos-icons"},"keyboard_arrow_right"))),l.a.createElement("br",null),l.a.createElement(m,{to:"/create"},l.a.createElement("button",{className:"black-yellow"},"Create Menu")),l.a.createElement("button",{className:"black-yellow"},"Scan Menu"))))},v=a(11),g=a.n(v),h=function(){return l.a.createElement("footer",null,l.a.createElement("div",null,l.a.createElement("img",{src:g.a,alt:"Grub.live logo",className:"logo"}),l.a.createElement("div",null,"Rejuvenating the dining experience.")),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-item hyperlink-invert"},"Contact Us"),l.a.createElement("div",{className:"footer-item hyperlink-invert"},"How it works"),l.a.createElement("div",{className:"footer-item hyperlink-invert"},"Feedback"),l.a.createElement("div",{className:"footer-item hyperlink-invert"},"About Us")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"Made with \u2764 in India"),l.a.createElement("br",null),l.a.createElement("span",null,"\xa9 2020 Grub.live"))},b=a(1),y=function(e){var t=e.restaurantDetails,a=e.setRestaurantDetails,n=function(e){var n=Object(b.a)({},t);n.menu.categories[e].items.push({itemName:"",itemPrice:""}),a(n)},r=function(e,n,l,r){var i=Object(b.a)({},t);"name"===e?i.menu.categories[l].items[r].itemName=n.target.value:i.menu.categories[l].items[r].itemPrice=n.target.value,a(i)},i=function(e,t){13===e.keyCode&&n(t)};return l.a.createElement("div",{className:"edit-menu"},l.a.createElement("h2",null,"Edit Menu ",l.a.createElement("i",{className:"eos-icons"},"edit")),l.a.createElement("p",null,"Please enter the following details to create your Virtual QR Menu."),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"shadow-box"},l.a.createElement("p",null,"Name of Restaurant"),l.a.createElement("input",{required:!0,className:"form-input",placeholder:"Example: Moti Mahal Deluxe",onChange:function(e){return function(e){var n=Object(b.a)({},t);n.restaurantName=e.target.value,a(n)}(e)},defaultValue:t.restaurantName}),l.a.createElement("p",null,"Logo (if any)"),l.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){return function(e){var n=e.target.files[0];if(n){if(n.size>2e6)return void alert("Please upload an image with size less than 2 mb.");var l=new FileReader;l.readAsDataURL(n),l.onloadend=function(){var e=Object(b.a)({},t);e.logo=l.result,console.log(l.result),a(e)}}}(e)}})),t.menu.categories.map((function(e,c){return l.a.createElement("div",{className:"shadow-box",key:c},l.a.createElement("i",{onClick:function(){return function(e){var n=Object(b.a)({},t);n.menu.categories.splice(e,1),a(n)}(c)},style:{float:"right"},className:"eos-icons delete-icon"},"close"),l.a.createElement("p",null,"Title"),l.a.createElement("input",{required:!0,onKeyDown:function(e){return i(e,c)},className:"form-input",onChange:function(e){return function(e,n){var l=Object(b.a)({},t);l.menu.categories[n].title=e.target.value,a(l)}(e,c)},placeholder:"Example: Chinese food"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,t.menu.categories[c].items.map((function(e,n){return l.a.createElement("div",{key:n},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Item Name"),l.a.createElement("input",{required:!0,onChange:function(e){return r("name",e,c,n)},className:"form-input",placeholder:"Eg: French Fries"})),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Price"),l.a.createElement("input",{required:!0,onKeyDown:function(e){return i(e,c)},onChange:function(e){return r("price",e,c,n)},className:"form-input",placeholder:"Eg: Half: $4.99 , Full: $9.99"})),l.a.createElement("i",{onClick:function(){return function(e,n){var l=Object(b.a)({},t);l.menu.categories[e].items.splice(n,1),a(l)}(c,n)},className:"eos-icons delete-icon"},"delete"))}))),l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){return n(c)}},"Add Item ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")))})),l.a.createElement("div",null,l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){return function(){var e=Object(b.a)({},t);e.menu.categories.push({title:"",type:"text",items:[]}),a(e)}()}},"Add Category ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",onClick:function(e){console.log("ok")},className:"black-yellow"},"Generate QR Menu")))))},N=function(e){var t=e.restaurantDetails;return l.a.createElement("div",{className:"shadow-box"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,t.logo?l.a.createElement("img",{src:t.logo,alt:"",className:"restaurant-logo"}):l.a.createElement("i",{className:"eos-icons",style:{color:"red",fontSize:"1em",margin:"8px"}},"local_dining"),t.restaurantName)),l.a.createElement("br",null),l.a.createElement("div",null,t.menu.categories.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("h2",null,e.title),t.menu.categories[a].items.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",{style:{display:"inline-block",margin:0}},e.itemName),l.a.createElement("p",{style:{float:"right",margin:0}},e.itemPrice),l.a.createElement("br",null),l.a.createElement("br",null))})))}))))},k=function(e){var t=e.restaurantDetails;return l.a.createElement("div",{className:"preview-menu"},l.a.createElement("h2",null,"Preview Menu ",l.a.createElement("i",{className:"eos-icons"},"slideshow")),l.a.createElement("p",null,"Once done, create on Generate QR Menu to create your Virtual Menu."),l.a.createElement("br",null),l.a.createElement(N,{restaurantDetails:t}))},w=function(){var e=Object(n.useState)({restaurantName:"",logo:"",menu:{categories:[]}}),t=Object(d.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"container"},l.a.createElement(y,{restaurantDetails:a,setRestaurantDetails:r}),l.a.createElement(k,{restaurantDetails:a}))};var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("div",null,l.a.createElement(c.b,{primary:!1},l.a.createElement(f,{path:"/"}),l.a.createElement(w,{path:"/create"}),l.a.createElement(f,{path:"*"}))),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/grub.live-logo.3b6b4ff3.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.8721bea3.chunk.js.map