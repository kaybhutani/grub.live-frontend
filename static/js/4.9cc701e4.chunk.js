(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{105:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(0),l=a.n(r),i=a(1);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=a(63),m=a(37),d=a(3),p=a(82),f=a.n(p),g=1,v=-1,h=0,b=function(e){var t,a=e.children,i=e.restaurantDetails,o=e.setRestaurantDetails,c=Object(r.useState)(""),u=Object(n.a)(c,2),p=u[0],b=u[1],E=Object(r.useState)(""),y=Object(n.a)(E,2),k=y[0],N=y[1],C=function(e){e.preventDefault(),I(h)},w=Object(r.useState)(h),O=Object(n.a)(w,2),x=O[0],I=O[1],j=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("input",{className:"form-input",type:"text",value:p,onChange:function(e){return b(e.target.value)},placeholder:"Invite Code"}),l.a.createElement("input",{style:{margin:0,marginLeft:10},type:"button",value:"Verify Coupon",className:"black-yellow",onClick:function(e){m.a.get("/coupons/is-valid",{params:{q:p}}).then((function(e){if(200!==e.status)throw new Error("Failed to verify Invite Coupon");return e.data})).then((function(e){if(!e.hasOwnProperty("success")||!e.success)throw new Error("Failed to verify Invite Coupon");I(g),o(s(s({},i),{},{couponId:p}))})).catch((function(e){N("".concat(e.message)),o(s(s({},i),{},{couponId:""})),I(v)}))}})),l.a.createElement("div",{className:f.a.tooltip}," ","Get invite code?",l.a.createElement("span",{className:f.a.tooltiptext},"We currently allow only invited restaurants to create Menu,",l.a.createElement(d.b,{to:"/contact"}," Contact "),"our sales team here for the invite and pricing."))),D=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:f.a.invalidMessage},k),l.a.createElement("button",{className:"hyperlink btn-link ".concat(f.a.tryAgainBtn),onClick:function(e){C(e)}},"Try again?")),F=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{textAlign:"right"}},a),l.a.createElement("p",{className:f.a.correctCoupon},"Invite Code ",p," successfully applied."," ",l.a.createElement("i",{className:"eos-icons"},"done")),l.a.createElement("button",{className:"hyperlink btn-link ".concat(f.a.tryAgainBtn),onClick:function(e){C(e)}},"Change invite code?"));switch(x){case v:t=D;break;case g:t=F;break;default:t=j}return l.a.createElement("div",null,t)},E=a(36);var y=a(35);function k(e){return function(e){if(Array.isArray(e))return Object(E.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(y.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var t=e.menuItem,a=e.deleteMenuItemHandler,n=e.updateMenuItemHandler,r=(e.index,function(e,a){var r=s({},t);r[e]=a,n(r)});return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Item Name"),l.a.createElement("input",{required:!0,onChange:function(e){return r("itemName",e.target.value)},value:t.itemName||"",className:"form-input",placeholder:"Eg: French Fries"})),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Price"),l.a.createElement("input",{required:!0,onChange:function(e){return r("itemPrice",e.target.value)},value:t.itemPrice||"",className:"form-input",placeholder:"Eg: Half: $4.99 , Full: $9.99"})),l.a.createElement("i",{onClick:a,className:"eos-icons delete-icon"},"delete"),l.a.createElement("p",null,"Item Description (If any)"),l.a.createElement("textarea",{style:{maxWidth:"330px"},value:t.itemDescription||"",onChange:function(e){return r("itemDescription",e.target.value)},className:"form-input",placeholder:"Contains onion, chillies, etc."}))},C=function(e){var t=e.menuItems,a=void 0===t?[]:t,n=e.updateMenuItemsHandler;return l.a.createElement("div",null,a.map((function(e,t){return l.a.createElement(N,{menuItem:e,key:t,index:t,updateMenuItemHandler:function(e){return function(e,t){var r=k(a);r[t]=s({},e),n(r)}(e,t)},deleteMenuItemHandler:function(){return function(e){var t=k(a);t.splice(e,1),n(t)}(t)}})})),l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){return function(e){if(e.hasOwnProperty("itemName")&&e.hasOwnProperty("itemPrice")){var t=k(a);t.push(e),n(t)}}({itemPrice:"",itemName:"",itemDescription:""})}},"Add Item ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")))},w=function(e){var t=e.menuCategory,a=e.index,n=e.updateMenuCategoryHandler,r=e.deleteMenuCategoryHandler,i=function(e,a){var r=s({},t);r[e]=a,n(r)};return l.a.createElement("div",{className:"shadow-box"},l.a.createElement("i",{onClick:function(){return r(a)},style:{float:"right"},className:"eos-icons delete-icon"},"close"),l.a.createElement("p",null,"Title"),l.a.createElement("input",{required:!0,value:t.title||"",className:"form-input",placeholder:"Example: Chinese food",onChange:function(e){return i("title",e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C,{menuItems:t.items,updateMenuItemsHandler:function(e){return i("items",e)}}))},O=function(e){var t=e.menuCategories,a=void 0===t?[]:t,n=e.updateMenuCategoriesHandler,r=function(e){var t=k(a);t.splice(e,1),n(t)},i=a.map((function(e,t){return l.a.createElement(w,{menuCategory:e,index:t,key:t,deleteMenuCategoryHandler:r,updateMenuCategoryHandler:function(e){return function(e,t){var r=k(a);r[e]=s({},t),n(r)}(t,e)}})}));return l.a.createElement(l.a.Fragment,null,i,l.a.createElement("button",{type:"button",onClick:function(){return function(){var e=k(a);e.push({title:"",items:[{itemName:"",itemPrice:"",itemDescription:""},{itemName:"",itemPrice:"",itemDescription:""}]}),n(e)}()},style:{backgroundColor:"transparent",border:0,cursor:"pointer"}},"Add Category ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," "))},x=a(83),I=a.n(x),j=function(e){var t=e.defaultValue,a=e.valueHandler,n=e.index;return l.a.createElement("input",{autoFocus:0===n,type:"text",onChange:function(e){return t=e.target.value,void a(t,n);var t},value:t,className:"form-input",style:{marginBottom:10,width:"85%"},placeholder:"Offer"})},D=function(e){var t=e.offers,a=void 0===t?[]:t,n=e.setOffers,r=function(e,t){var r=k(a);0!==r.length?(r[t]=e,n(r)):n([e])},i=a&&a.length>0?a.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(j,{defaultValue:e,valueHandler:r,index:t}),l.a.createElement("i",{onClick:function(){return function(e){var t=k(a);t.splice(e,1),n(t)}(t)},className:"eos-icons delete-icon ".concat(I.a.deleteOffer)},"delete"))})):l.a.createElement(j,{defaultValue:"",valueHandler:r,index:0});return l.a.createElement("div",null,l.a.createElement("p",null,"Add Offers"),i," ",l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){var e=k(a);e.push(""),n(e)}},"Add offer ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")))},F=a(84),S=a.n(F),_=a(41),M=a.n(_),P=a(85),L=a.n(P),R=a(86),H=a.n(R),A=function(e){var t=e.defaultSocialLinks,a=void 0===t?{website:"",facebook:"",instagram:""}:t,n=e.menuChangeHandler;return l.a.createElement("div",null,l.a.createElement("p",null,"Social Links"),l.a.createElement("div",{className:S.a.socialLinkRow},l.a.createElement("img",{src:L.a,alt:"Fb",className:S.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Facebook Link",className:"form-input",onChange:function(e){return n("social.facebook",e.target.value)},value:a.facebook||""})),l.a.createElement("div",{className:S.a.socialLinkRow},l.a.createElement("img",{src:M.a,alt:"Ig",className:S.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Instagram Link",className:"form-input",onChange:function(e){return n("social.instagram",e.target.value)},value:a.instagram||""})),l.a.createElement("div",{className:S.a.socialLinkRow},l.a.createElement("img",{src:H.a,alt:"Web",className:S.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Website Link",className:"form-input",onChange:function(e){return n("social.website",e.target.value)},value:a.website||""})))},T=a(52),B=a(87),J=function(e){e.defaultTheme;var t=e.updateMenuThemeHandler;return l.a.createElement("div",{className:"shadow-box"},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Theme"),l.a.createElement("select",{onChange:function(e){return t("theme",T[e.target.value])},name:"themes"},Object.keys(T).map((function(e,t){return l.a.createElement("option",{className:"form-input",key:t},e)})))),l.a.createElement("div",{style:{display:"inline-block",marginLeft:"48px"}},l.a.createElement("p",null,"Font"),l.a.createElement("select",{onChange:function(e){return t("theme.fontFamily",e.target.value)},name:"fonts"},Object.keys(B).map((function(e,t){return l.a.createElement("option",{className:"form-input",key:t,value:Object.values(B)[t]},e)})))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Font Color"),l.a.createElement("input",{onChange:function(e){return t("theme.color",e.target.value)},type:"color"})),l.a.createElement("div",{style:{display:"inline-block",marginLeft:"48px"}},l.a.createElement("p",null,"Background Color"),l.a.createElement("input",{onChange:function(e){return t("theme.backgroundColor",e.target.value)},type:"color"})))},V=a(88),q=a.n(V),z=function(e){var t=e.restaurantDetails,a=e.menuChangeHandler,n=e.edit,r=e.updateLogo;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Name of Restaurant"),l.a.createElement("input",{disabled:n,name:"restaurantName",required:!0,className:"form-input ".concat(q.a.textInput),placeholder:"Example: Moti Mahal Deluxe",onChange:function(e){return a("restaurantName",e.target.value)},defaultValue:t.restaurantName})),l.a.createElement("div",null,l.a.createElement("p",null,"Bio"),l.a.createElement("textarea",{placeholder:"Example: The Best Fast Food restaurant in New Delhi. Contact us at +91 9999999999 or visit A-21, North campus",onChange:function(e){return a("bio",e.target.value)},className:"form-input ".concat(q.a.textInput),disabled:n,defaultValue:t.bio})),l.a.createElement("div",null,l.a.createElement("p",null,"Logo (if any)"),l.a.createElement("input",{disabled:n,type:"file",accept:"image/*",onChange:function(e){return r(e)}})),l.a.createElement("div",null,l.a.createElement("p",null,"Email ID (You can use this to edit Menu later)"),l.a.createElement("input",{disabled:n,type:"email",required:!0,className:"form-input ".concat(q.a.textInput),placeholder:"Example: johndoe@gmail.com",onChange:function(e){return a("emailId",e.target.value)},defaultValue:t.emailId})))},G=function(e){var t=e.restaurantDetails,a=e.setRestaurantDetails,o=e.edit,c=e.menuId,d=e.hash,p=Object(i.f)(),f=Object(r.useState)(!1),g=Object(n.a)(f,2),v=g[0],h=g[1],E=Object(r.useState)(!1),y=Object(n.a)(E,2),k=y[0],N=y[1],C=function(e,n){for(var r=s({},t),l=e.split("."),i=r,o=0;o<l.length-1;){if(!i.hasOwnProperty(l[o])){if(o===l.length-2)break;i[l[o]]={}}i=i[l[o]],o++}i[l[l.length-1]]=n,a(r)},w=function(){return k?o?"Updating...":"Generating...":o?"Update Menu":"Generate QR Menu"},x=function(e){if(!k){N(!0);try{if(!t.emailId||!t.restaurantName)throw new Error("Restaurant Details cannot be empty!");var a=o?"/edit/submit/".concat(c,"/").concat(d):"/submit";m.a.post(a,JSON.stringify(t)).then((function(e){if(200!==e.status)throw new Error("Failed to save menu");return e.data})).then((function(e){if(N(!1),!e.success)throw new Error("Failed to save menu");localStorage.removeItem("restaurantDetails");var t=o?"/#/qr/edit/".concat(e.id):"/#/qr/".concat(e.id);p.push(t)}))}catch(n){console.error(n.message),alert(n.message)}}};return l.a.createElement("div",{className:"edit-menu"},l.a.createElement("h2",null,"Edit Menu ",l.a.createElement("i",{className:"eos-icons"},"edit")),l.a.createElement("p",null,"Please enter the following details to create your Digital QR Menu."),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:10}},localStorage.getItem("restaurantDetails")?l.a.createElement("button",{onClick:function(){return a(s({},JSON.parse(localStorage.getItem("restaurantDetails"))))},style:{color:"#007cbf"},className:"hyperlink btn-link"},"Load saved ",l.a.createElement("i",{className:"eos-icons"},"system_update_alt")):null,t.restaurantName?null:l.a.createElement("button",{onClick:function(){return a(s({},u.a))},style:{color:"#007cbf"},className:"hyperlink btn-link"},"Fill sample data ",l.a.createElement("i",{className:"eos-icons"},"keyboard"))),l.a.createElement("form",null,l.a.createElement("div",{className:"shadow-box"},l.a.createElement(z,{updateLogo:function(e){var n=e.target.files[0];if(n){if(n.size>2e6)return void alert("Please upload an image with size less than 2 mb.");var r=new FileReader;r.readAsDataURL(n),r.onloadend=function(){var e=s({},t);e.logo=r.result,console.log(r.result),a(e)}}},edit:o,restaurantDetails:t,menuChangeHandler:C}),l.a.createElement(A,{defaultSocialLinks:t.social,menuChangeHandler:C}),l.a.createElement("div",null,l.a.createElement(D,{offers:t.offers,setOffers:function(e){return C("offers",e)}}))),l.a.createElement(J,{updateMenuThemeHandler:function(e,t){return C("menu.".concat(e),t)}}),l.a.createElement(O,{menuCategories:t.menu.categories,updateMenuCategoriesHandler:function(e){return C("menu.categories",e)}}),l.a.createElement("div",null,l.a.createElement("div",{style:{float:"right",display:"flex",flexDirection:"column"}},l.a.createElement("button",{type:"button",onClick:function(e){v||(localStorage.setItem("restaurantDetails",JSON.stringify(t)),h(!0),setTimeout((function(){h(!1)}),3e3))},className:"black-yellow"},v?l.a.createElement("div",null,"Saved ",l.a.createElement("i",{className:"eos-icons"},"done")):"Save Draft"),o?l.a.createElement("button",{type:"button",onClick:function(e){return x()},className:"black-yellow"},w()):l.a.createElement(b,{restaurantDetails:t,setRestaurantDetails:a},l.a.createElement("button",{type:"button",onClick:function(e){return x()},className:"black-yellow"},w()))))))},U=function(e){var t=Object(r.useState)(e.restaurantDetails),a=Object(n.a)(t,2),i=a[0],o=a[1],c=Object(r.useState)(""),u=Object(n.a)(c,2),m=u[0],d=u[1],p=Object(r.useState)(T.Light),f=Object(n.a)(p,2),g=f[0],v=f[1];return Object(r.useEffect)((function(){if(i.menu.theme&&(T[i.menu.theme.themeName]?v(T[i.menu.theme.themeName]):(console.log("No theme name found. Reading theme info"),v(i.menu.theme))),""===m)o(e.restaurantDetails);else{var t=JSON.parse(JSON.stringify(e.restaurantDetails)),a=[];t.menu.categories.forEach((function(e){if(e.title.toLowerCase().includes(m.toLowerCase().trim()))a.push(e);else{for(var t=[],n=0;n<e.items.length;n++)e.items[n].itemName.toLowerCase().includes(m.toLowerCase().trim())&&t.push(e.items[n]);e.items=t,t.length>0&&a.push(e)}})),t.menu.categories=a,o(t)}}),[e.restaurantDetails,i,m]),l.a.createElement("div",{className:"shadow-box",style:s({},g)},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,i.logo?l.a.createElement("img",{src:i.logo,alt:"",className:"restaurant-logo"}):l.a.createElement("i",{className:"eos-icons",style:{color:"red",fontSize:"1em",margin:"8px"}},"local_dining"),i.restaurantName),l.a.createElement("h4",null,i.bio)),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{type:"text",name:"search-restaurant",className:"form-input",placeholder:"Search Menu",onKeyUp:function(e){return d(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("div",null,i.menu.categories.map((function(e,t){return""!==e.title?l.a.createElement("div",{key:t},l.a.createElement("h2",null,e.title),e.items.length>0?l.a.createElement("div",null,i.menu.categories[t].items.map((function(e,t){return l.a.createElement("div",{className:"menu-item",key:t},l.a.createElement("p",{className:"item-name"},e.itemName),l.a.createElement("p",{className:"item-price"},e.itemPrice),e.itemDescription?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("i",{className:"item-description"},e.itemDescription)):l.a.createElement(l.a.Fragment,null),l.a.createElement("br",null),l.a.createElement("br",null))}))):l.a.createElement("div",null)):l.a.createElement("div",{key:t})}))))},Q=function(e){var t=e.restaurantDetails;return l.a.createElement("div",{className:"preview-menu"},l.a.createElement("h2",null,"Preview Menu ",l.a.createElement("i",{className:"eos-icons"},"slideshow")),l.a.createElement("p",null,"Once done, click on Generate QR Menu to create your Digital Menu."),l.a.createElement("br",null),l.a.createElement(U,{restaurantDetails:t}))},W=a(39),Y=a.n(W),$=a(10),X=function(e){var t=e.children,a=Object(r.useState)(!1),i=Object(n.a)(a,2),o=i[0],c=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"popup-preview-menu"},l.a.createElement("button",{onClick:function(){return c((function(e){return!e}))}},l.a.createElement("i",{className:"eos-icons",style:{marginRight:10}},"slideshow")," ",o?"Edit":"Preview"),l.a.createElement("div",{className:"popup-preview-content ".concat(o?"active":"")},l.a.createElement("div",{className:"popup-preview-scroll"},t))))};$.a.initialize("G-0BPQRCHTXK");t.default=function(e){var t=e.edit,a=Object(r.useState)({emailId:"",restaurantName:"",logo:"",bio:"",offers:[],social:{},menu:{categories:[],theme:{}}}),o=Object(n.a)(a,2),c=o[0],s=o[1],u=Object(r.useState)(!1),d=Object(n.a)(u,2),p=d[0],f=d[1],g=Object(r.useState)(!1),v=Object(n.a)(g,2),h=v[0],b=v[1],E=Object(i.g)(),y=E.menuId,k=E.hash;Object(r.useEffect)((function(){t&&m.a.get("/view",{params:{q:y}}).then((function(e){return e.data})).then((function(e){if(f(!0),!e.success)throw new Error("Failed to fetch menu");s(e.data),b(!0)})).catch((function(e){console.error(e),alert(e.message)}))}),[t,y]);return l.a.createElement("div",{className:"container"},function(){if(t){if(!p)return l.a.createElement("div",{className:"loading-div"},l.a.createElement("img",{alt:"",className:"loading-icon",src:Y.a}));if(!h)return l.a.createElement("h2",null,"Invalid Edit link")}return l.a.createElement("div",null,l.a.createElement("div",{className:"center-align"},t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Update Menu"),l.a.createElement("p",null,"Any changes made here will be updated in your old menu only. You can add, delete or update the categories, items and price. The Restaurant name, logo and email ID cannot be changed for now. You don't have to worry for new QR code , the link and QR remains same."),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Create Menu"),l.a.createElement("p",{style:{fontSize:"1.2em"}},"Creating menu is simple. Just enter your restaurant name, upload Logo and Email ID for future changes.",l.a.createElement("br",null),"That's it. Now you can start adding the Dishes by creating a new category and adding items to it.")),l.a.createElement("br",null)),l.a.createElement("div",{className:"create-menu-container"},l.a.createElement(G,{restaurantDetails:c,setRestaurantDetails:s,edit:t,menuId:y,hash:k}),l.a.createElement(X,null,l.a.createElement(Q,{restaurantDetails:c}))))}())}},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(35);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(36);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},36:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},37:function(e,t,a){"use strict";var n=a(40),r=a.n(n),l=a(38),i=r.a.create({baseURL:l.a});i.defaults.headers.common["Content-Type"]="application/json",t.a=i},38:function(e){e.exports=JSON.parse('{"a":"https://grub-live-backend.herokuapp.com"}')},39:function(e,t,a){e.exports=a.p+"static/media/three_dots_loading.4d1c15f3.svg"},41:function(e,t,a){e.exports=a.p+"static/media/instagram.fc23b902.svg"},52:function(e){e.exports=JSON.parse('{"Light":{"color":"#000000","backgroundColor":"#ffffff","fontFamily":"lato"},"Dark":{"color":"#ffffff","backgroundColor":"#000000","fontFamily":"lato"},"Christmas":{"color":"#db3d3d","backgroundColor":"#003301","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1606767929/christmasbg_x98khj.svg\\")","fontFamily":"TypewriterBold"},"FastFood":{"color":"#663c00","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607074740/FastFood_oz12zw.svg\\")","fontFamily":"Mayan"},"FastFood-light":{"color":"#000b2e","backgroundColor":"#bcc5d7","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607964364/fastfood-light_lkravx.svg\\")","fontFamily":"Mayan"},"FastFood-dark":{"color":"#bcc5d7","backgroundColor":"#01214b","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607964364/fastfood-dark_wsi3dd.svg\\")","fontFamily":"Mayan"},"Tribal-light":{"color":"#000b2e","backgroundColor":"#bcc5d7","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1608762769/pattern_quntzd.svg\\")","fontFamily":"Mayan"}}')},63:function(e){e.exports=JSON.parse('{"a":{"emailId":"","logo":"","bio":"The Best Fast food Restaurant in New Delhi.\\nPh: +91 8802999631","customizedMenu":false,"offers":["Get 20% off on all orders above 500.","Offer 2: Lorem ipsum"],"social":{"facebook":"https://facebook.com","instagram":"https://instagram.com","website":"www.mywebsite.com"},"menu":{"theme":{"color":"#db3d3d","backgroundColor":"#003301","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1606767929/christmasbg_x98khj.svg\\")","fontFamily":"TypewriterBold"},"categories":[{"items":[{"itemName":"Chicken Tikka","itemPrice":"Rs. 99","itemDescription":"Sample item description"},{"itemName":"Grilled Chicken Burger","itemPrice":"$ 3.99","itemDescription":"Sample item description. Sample item description. Sample item description"},{"itemName":"Cheese and Bacon","itemPrice":"\u20ac 4.99","itemDescription":"Sample item description"},{"itemName":"Aalo Tikki ","itemPrice":"\u20b9 59","itemDescription":"Sample item description"},{"itemName":"Veggie special","itemPrice":"\u20b9 79","itemDescription":"Sample item description"}],"title":"Burger\'s \ud83c\udf54","type":"text"},{"items":[{"itemName":"Chowmein","itemPrice":"Half: \u20b999, Full: \u20b9169"},{"itemName":"Veg Momos","itemPrice":"\u20b9100 /10pc","itemDescription":"Sample item description"},{"itemName":"Chicken Momos","itemPrice":"\u20b9130 /10pc"},{"itemName":"Manchurian","itemPrice":"Half: \u20b9199,  Full: \u20b9269","itemDescription":"Sample item description"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Lemon Ice tea","itemPrice":"$ 2.99"},{"itemName":"Cold Coffee","itemPrice":"Rs. 99"},{"itemName":"Hot Coffee","itemPrice":"Rs. 79"},{"itemName":"Classic Mojito","itemPrice":"Rs. 129"}],"title":"Beverages \ud83c\udf79","type":"text"}]},"restaurantName":"Henry\'s Cafe"}}')},82:function(e,t,a){e.exports={couponForm:"InviteForm_couponForm__-RM_6",invalidMessage:"InviteForm_invalidMessage__1X4bw",tryAgainBtn:"InviteForm_tryAgainBtn__rvJlX",correctCoupon:"InviteForm_correctCoupon__1q_D4",tooltip:"InviteForm_tooltip__8yOzf",tooltiptext:"InviteForm_tooltiptext__3sz82"}},83:function(e,t,a){e.exports={deleteOffer:"AddOffers_deleteOffer__Rrgig"}},84:function(e,t,a){e.exports={socialLinkRow:"SocialLinks_socialLinkRow__3oXtr",icon:"SocialLinks_icon__2k2p2"}},85:function(e,t,a){e.exports=a.p+"static/media/facebook.89a9c066.svg"},86:function(e,t,a){e.exports=a.p+"static/media/globe.0dac93eb.svg"},87:function(e){e.exports=JSON.parse('{"Almada":"Almada","Florence":"Florence","Gold stick":"Goldstick","Lato":"Lato","Mayan":"Mayan","The Wanters":"TheWanters","Typewriter":"Typewriter","Typewriter Bold":"TypewriterBold","Vintages":"Vintages","Vogue":"Vogue","Yellow Sun":"YelloSun"}')},88:function(e,t,a){e.exports={textInput:"RestaurantDetails_textInput__3HUmI"}}}]);
//# sourceMappingURL=4.9cc701e4.chunk.js.map