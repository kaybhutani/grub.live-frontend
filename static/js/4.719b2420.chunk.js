(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{37:function(e,t,a){e.exports=a.p+"static/media/instagram.fc23b902.svg"},38:function(e,t,a){e.exports=a.p+"static/media/three_dots_loading.4d1c15f3.svg"},48:function(e){e.exports=JSON.parse('{"Light":{"color":"#000000","backgroundColor":"#ffffff","fontFamily":"lato"},"Dark":{"color":"#ffffff","backgroundColor":"#000000","fontFamily":"lato"},"Christmas":{"color":"#db3d3d","backgroundColor":"#003301","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1606767929/christmasbg_x98khj.svg\\")","fontFamily":"TypewriterBold"},"FastFood":{"color":"#663c00","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607074740/FastFood_oz12zw.svg\\")","fontFamily":"Mayan"},"FastFood-light":{"color":"#000b2e","backgroundColor":"#bcc5d7","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607964364/fastfood-light_lkravx.svg\\")","fontFamily":"Mayan"},"FastFood-dark":{"color":"#bcc5d7","backgroundColor":"#01214b","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1607964364/fastfood-dark_wsi3dd.svg\\")","fontFamily":"Mayan"},"Tribal-light":{"color":"#000b2e","backgroundColor":"#bcc5d7","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1608762769/pattern_quntzd.svg\\")","fontFamily":"Mayan"}}')},50:function(e){e.exports=JSON.parse('{"a":{"emailId":"","logo":"","bio":"The Best Fast food Restaurant in New Delhi.\\nPh: +91 8802999631","customizedMenu":false,"offers":["Get 20% off on all orders above 500.","Offer 2: Lorem ipsum"],"social":{"facebook":"https://facebook.com","instagram":"https://instagram.com","website":"www.mywebsite.com"},"menu":{"theme":{"color":"#db3d3d","backgroundColor":"#003301","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1606767929/christmasbg_x98khj.svg\\")","fontFamily":"TypewriterBold"},"categories":[{"items":[{"itemName":"Chicken Tikka","itemPrice":"Rs. 99","itemDescription":"Sample item description"},{"itemName":"Grilled Chicken Burger","itemPrice":"$ 3.99","itemDescription":"Sample item description. Sample item description. Sample item description"},{"itemName":"Cheese and Bacon","itemPrice":"\u20ac 4.99","itemDescription":"Sample item description"},{"itemName":"Aalo Tikki ","itemPrice":"\u20b9 59","itemDescription":"Sample item description"},{"itemName":"Veggie special","itemPrice":"\u20b9 79","itemDescription":"Sample item description"}],"title":"Burger\'s \ud83c\udf54","type":"text"},{"items":[{"itemName":"Chowmein","itemPrice":"Half: \u20b999, Full: \u20b9169"},{"itemName":"Veg Momos","itemPrice":"\u20b9100 /10pc","itemDescription":"Sample item description"},{"itemName":"Chicken Momos","itemPrice":"\u20b9130 /10pc"},{"itemName":"Manchurian","itemPrice":"Half: \u20b9199,  Full: \u20b9269","itemDescription":"Sample item description"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Lemon Ice tea","itemPrice":"$ 2.99"},{"itemName":"Cold Coffee","itemPrice":"Rs. 99"},{"itemName":"Hot Coffee","itemPrice":"Rs. 79"},{"itemName":"Classic Mojito","itemPrice":"Rs. 129"}],"title":"Beverages \ud83c\udf79","type":"text"}]},"restaurantName":"Henry\'s Cafe"}}')},70:function(e,t,a){e.exports={couponForm:"InviteForm_couponForm__-RM_6",invalidMessage:"InviteForm_invalidMessage__1X4bw",tryAgainBtn:"InviteForm_tryAgainBtn__rvJlX",correctCoupon:"InviteForm_correctCoupon__1q_D4",tooltip:"InviteForm_tooltip__8yOzf",tooltiptext:"InviteForm_tooltiptext__3sz82"}},71:function(e,t,a){e.exports={deleteOffer:"AddOffers_deleteOffer__Rrgig"}},72:function(e,t,a){e.exports={socialLinkRow:"SocialLinks_socialLinkRow__3oXtr",icon:"SocialLinks_icon__2k2p2"}},73:function(e,t,a){e.exports=a.p+"static/media/facebook.89a9c066.svg"},74:function(e,t,a){e.exports=a.p+"static/media/globe.0dac93eb.svg"},75:function(e){e.exports=JSON.parse('{"Almada":"Almada","Florence":"Florence","Gold stick":"Goldstick","Lato":"Lato","Mayan":"Mayan","The Wanters":"TheWanters","Typewriter":"Typewriter","Typewriter Bold":"TypewriterBold","Vintages":"Vintages","Vogue":"Vogue","Yellow Sun":"YelloSun"}')},76:function(e,t,a){e.exports={textInput:"RestaurantDetails_textInput__3HUmI"}},88:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(0),l=a.n(r),i=a(1),c=a(36),o=a(50),s=a(51),m=a.n(s).a.create({baseURL:"https://grub-live-backend.herokuapp.com"});m.defaults.headers.common["Content-Type"]="application/json";var u=m,d=a(7),p=a(70),f=a.n(p),g=1,E=-1,h=0,v=function(e){var t,a=e.children,i=e.restaurantDetails,o=e.setRestaurantDetails,s=Object(r.useState)(""),m=Object(n.a)(s,2),p=m[0],v=m[1],b=Object(r.useState)(""),y=Object(n.a)(b,2),k=y[0],N=y[1],C=function(e){e.preventDefault(),j(h)},w=Object(r.useState)(h),O=Object(n.a)(w,2),x=O[0],j=O[1],F=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("input",{className:"form-input",type:"text",value:p,onChange:function(e){return v(e.target.value)},placeholder:"Invite Code"}),l.a.createElement("input",{style:{margin:0,marginLeft:10},type:"button",value:"Verify Coupon",className:"black-yellow",onClick:function(e){u.get("/coupons/is-valid",{params:{q:p}}).then((function(e){if(200!==e.status)throw new Error("Failed to verify Invite Coupon");return e.data})).then((function(e){if(!e.hasOwnProperty("success")||!e.success)throw new Error("Failed to verify Invite Coupon");j(g),o(Object(c.a)(Object(c.a)({},i),{},{couponId:p}))})).catch((function(e){N("".concat(e.message)),o(Object(c.a)(Object(c.a)({},i),{},{couponId:""})),j(E)}))}})),l.a.createElement("div",{className:f.a.tooltip}," ","Get invite code?",l.a.createElement("span",{className:f.a.tooltiptext},"We currently allow only invited restaurants to create Menu,",l.a.createElement(d.b,{to:"/contact"}," Contact "),"our sales team here for the invite and pricing."))),I=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:f.a.invalidMessage},k),l.a.createElement("button",{className:"hyperlink btn-link ".concat(f.a.tryAgainBtn),onClick:function(e){C(e)}},"Try again?")),D=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{textAlign:"right"}},a),l.a.createElement("p",{className:f.a.correctCoupon},"Invite Code ",p," successfully applied."," ",l.a.createElement("i",{className:"eos-icons"},"done")),l.a.createElement("button",{className:"hyperlink btn-link ".concat(f.a.tryAgainBtn),onClick:function(e){C(e)}},"Change invite code?"));switch(x){case E:t=I;break;case g:t=D;break;default:t=F}return l.a.createElement("div",null,t)},b=a(39),y=function(e){var t=e.menuItem,a=e.deleteMenuItemHandler,n=e.updateMenuItemHandler,r=(e.index,function(e,a){var r=Object(c.a)({},t);r[e]=a,n(r)});return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Item Name"),l.a.createElement("input",{required:!0,onChange:function(e){return r("itemName",e.target.value)},value:t.itemName||"",className:"form-input",placeholder:"Eg: French Fries"})),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Price"),l.a.createElement("input",{required:!0,onChange:function(e){return r("itemPrice",e.target.value)},value:t.itemPrice||"",className:"form-input",placeholder:"Eg: Half: $4.99 , Full: $9.99"})),l.a.createElement("i",{onClick:a,className:"eos-icons delete-icon"},"delete"),l.a.createElement("p",null,"Item Description (If any)"),l.a.createElement("textarea",{style:{maxWidth:"330px"},value:t.itemDescription||"",onChange:function(e){return r("itemDescription",e.target.value)},className:"form-input",placeholder:"Contains onion, chillies, etc."}))},k=function(e){var t=e.menuItems,a=void 0===t?[]:t,n=e.updateMenuItemsHandler;return l.a.createElement("div",null,a.map((function(e,t){return l.a.createElement(y,{menuItem:e,key:t,index:t,updateMenuItemHandler:function(e){return function(e,t){var r=Object(b.a)(a);r[t]=Object(c.a)({},e),n(r)}(e,t)},deleteMenuItemHandler:function(){return function(e){var t=Object(b.a)(a);t.splice(e,1),n(t)}(t)}})})),l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){return function(e){if(e.hasOwnProperty("itemName")&&e.hasOwnProperty("itemPrice")){var t=Object(b.a)(a);t.push(e),n(t)}}({itemPrice:"",itemName:"",itemDescription:""})}},"Add Item ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")))},N=function(e){var t=e.menuCategory,a=e.index,n=e.updateMenuCategoryHandler,r=e.deleteMenuCategoryHandler,i=function(e,a){var r=Object(c.a)({},t);r[e]=a,n(r)};return l.a.createElement("div",{className:"shadow-box"},l.a.createElement("i",{onClick:function(){return r(a)},style:{float:"right"},className:"eos-icons delete-icon"},"close"),l.a.createElement("p",null,"Title"),l.a.createElement("input",{required:!0,value:t.title||"",className:"form-input",placeholder:"Example: Chinese food",onChange:function(e){return i("title",e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k,{menuItems:t.items,updateMenuItemsHandler:function(e){return i("items",e)}}))},C=function(e){var t=e.menuCategories,a=void 0===t?[]:t,n=e.updateMenuCategoriesHandler,r=function(e){var t=Object(b.a)(a);t.splice(e,1),n(t)},i=a.map((function(e,t){return l.a.createElement(N,{menuCategory:e,index:t,key:t,deleteMenuCategoryHandler:r,updateMenuCategoryHandler:function(e){return function(e,t){var r=Object(b.a)(a);r[e]=Object(c.a)({},t),n(r)}(t,e)}})}));return l.a.createElement(l.a.Fragment,null,i,l.a.createElement("button",{type:"button",onClick:function(){return function(){var e=Object(b.a)(a);e.push({title:"",items:[{itemName:"",itemPrice:"",itemDescription:""},{itemName:"",itemPrice:"",itemDescription:""}]}),n(e)}()},style:{backgroundColor:"transparent",border:0,cursor:"pointer"}},"Add Category ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," "))},w=a(71),O=a.n(w),x=function(e){var t=e.defaultValue,a=e.valueHandler,n=e.index;return l.a.createElement("input",{autoFocus:0===n,type:"text",onChange:function(e){return t=e.target.value,void a(t,n);var t},value:t,className:"form-input",style:{marginBottom:10,width:"85%"},placeholder:"Offer"})},j=function(e){var t=e.offers,a=void 0===t?[]:t,n=e.setOffers,r=function(e,t){var r=Object(b.a)(a);0!==r.length?(r[t]=e,n(r)):n([e])},i=a&&a.length>0?a.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(x,{defaultValue:e,valueHandler:r,index:t}),l.a.createElement("i",{onClick:function(){return function(e){var t=Object(b.a)(a);t.splice(e,1),n(t)}(t)},className:"eos-icons delete-icon ".concat(O.a.deleteOffer)},"delete"))})):l.a.createElement(x,{defaultValue:"",valueHandler:r,index:0});return l.a.createElement("div",null,l.a.createElement("p",null,"Add Offers"),i," ",l.a.createElement("div",{style:{float:"right"}},l.a.createElement("button",{type:"button",className:"hyperlink btn-link",onClick:function(){var e=Object(b.a)(a);e.push(""),n(e)}},"Add offer ",l.a.createElement("i",{className:"eos-icons"},"add_circle_outline")," ")))},F=a(72),I=a.n(F),D=a(37),_=a.n(D),S=a(73),M=a.n(S),L=a(74),P=a.n(L),R=function(e){var t=e.defaultSocialLinks,a=void 0===t?{website:"",facebook:"",instagram:""}:t,n=e.menuChangeHandler;return l.a.createElement("div",null,l.a.createElement("p",null,"Social Links"),l.a.createElement("div",{className:I.a.socialLinkRow},l.a.createElement("img",{src:M.a,alt:"Fb",className:I.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Facebook Link",className:"form-input",onChange:function(e){return n("social.facebook",e.target.value)},value:a.facebook||""})),l.a.createElement("div",{className:I.a.socialLinkRow},l.a.createElement("img",{src:_.a,alt:"Ig",className:I.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Instagram Link",className:"form-input",onChange:function(e){return n("social.instagram",e.target.value)},value:a.instagram||""})),l.a.createElement("div",{className:I.a.socialLinkRow},l.a.createElement("img",{src:P.a,alt:"Web",className:I.a.icon}),l.a.createElement("input",{type:"text",placeholder:"Website Link",className:"form-input",onChange:function(e){return n("social.website",e.target.value)},value:a.website||""})))},H=a(48),T=a(75),B=function(e){e.defaultTheme;var t=e.updateMenuThemeHandler;return l.a.createElement("div",{className:"shadow-box"},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Theme"),l.a.createElement("select",{onChange:function(e){return t("theme",H[e.target.value])},name:"themes"},Object.keys(H).map((function(e,t){return l.a.createElement("option",{className:"form-input",key:t},e)})))),l.a.createElement("div",{style:{display:"inline-block",marginLeft:"48px"}},l.a.createElement("p",null,"Font"),l.a.createElement("select",{onChange:function(e){return t("theme.fontFamily",e.target.value)},name:"fonts"},Object.keys(T).map((function(e,t){return l.a.createElement("option",{className:"form-input",key:t,value:Object.values(T)[t]},e)})))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("p",null,"Font Color"),l.a.createElement("input",{onChange:function(e){return t("theme.color",e.target.value)},type:"color"})),l.a.createElement("div",{style:{display:"inline-block",marginLeft:"48px"}},l.a.createElement("p",null,"Background Color"),l.a.createElement("input",{onChange:function(e){return t("theme.backgroundColor",e.target.value)},type:"color"})))},A=a(76),V=a.n(A),J=function(e){var t=e.restaurantDetails,a=e.menuChangeHandler,n=e.edit,r=e.updateLogo;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Name of Restaurant"),l.a.createElement("input",{disabled:n,name:"restaurantName",required:!0,className:"form-input ".concat(V.a.textInput),placeholder:"Example: Moti Mahal Deluxe",onChange:function(e){return a("restaurantName",e.target.value)},defaultValue:t.restaurantName})),l.a.createElement("div",null,l.a.createElement("p",null,"Bio"),l.a.createElement("textarea",{placeholder:"Example: The Best Fast Food restaurant in New Delhi. Contact us at +91 9999999999 or visit A-21, North campus",onChange:function(e){return a("bio",e.target.value)},className:"form-input ".concat(V.a.textInput),disabled:n,defaultValue:t.bio})),l.a.createElement("div",null,l.a.createElement("p",null,"Logo (if any)"),l.a.createElement("input",{disabled:n,type:"file",accept:"image/*",onChange:function(e){return r(e)}})),l.a.createElement("div",null,l.a.createElement("p",null,"Email ID (You can use this to edit Menu later)"),l.a.createElement("input",{disabled:n,type:"email",required:!0,className:"form-input ".concat(V.a.textInput),placeholder:"Example: johndoe@gmail.com",onChange:function(e){return a("emailId",e.target.value)},defaultValue:t.emailId})))},q=function(e){var t=e.restaurantDetails,a=e.setRestaurantDetails,s=e.edit,m=e.menuId,d=e.hash,p=Object(i.f)(),f=Object(r.useState)(!1),g=Object(n.a)(f,2),E=g[0],h=g[1],b=Object(r.useState)(!1),y=Object(n.a)(b,2),k=y[0],N=y[1],w=function(e,n){for(var r=Object(c.a)({},t),l=e.split("."),i=r,o=0;o<l.length-1;){if(!i.hasOwnProperty(l[o])){if(o===l.length-2)break;i[l[o]]={}}i=i[l[o]],o++}i[l[l.length-1]]=n,a(r)},O=function(){return k?s?"Updating...":"Generating...":s?"Update Menu":"Generate QR Menu"},x=function(e){if(!k){N(!0);try{if(!t.emailId||!t.restaurantName)throw new Error("Restaurant Details cannot be empty!");var a=s?"/edit/submit/".concat(m,"/").concat(d):"/submit";u.post(a,JSON.stringify(t)).then((function(e){if(200!==e.status)throw new Error("Failed to save menu");return e.data})).then((function(e){if(N(!1),!e.success)throw new Error("Failed to save menu");localStorage.removeItem("restaurantDetails");var t=s?"/#/qr/edit/".concat(e.id):"/#/qr/".concat(e.id);p.push(t)}))}catch(n){console.error(n.message),alert(n.message)}}};return l.a.createElement("div",{className:"edit-menu"},l.a.createElement("h2",null,"Edit Menu ",l.a.createElement("i",{className:"eos-icons"},"edit")),l.a.createElement("p",null,"Please enter the following details to create your Digital QR Menu."),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:10}},localStorage.getItem("restaurantDetails")?l.a.createElement("button",{onClick:function(){return a(Object(c.a)({},JSON.parse(localStorage.getItem("restaurantDetails"))))},style:{color:"#007cbf"},className:"hyperlink btn-link"},"Load saved ",l.a.createElement("i",{className:"eos-icons"},"system_update_alt")):null,t.restaurantName?null:l.a.createElement("button",{onClick:function(){return a(Object(c.a)({},o.a))},style:{color:"#007cbf"},className:"hyperlink btn-link"},"Fill sample data ",l.a.createElement("i",{className:"eos-icons"},"keyboard"))),l.a.createElement("form",null,l.a.createElement("div",{className:"shadow-box"},l.a.createElement(J,{updateLogo:function(e){var n=e.target.files[0];if(n){if(n.size>2e6)return void alert("Please upload an image with size less than 2 mb.");var r=new FileReader;r.readAsDataURL(n),r.onloadend=function(){var e=Object(c.a)({},t);e.logo=r.result,console.log(r.result),a(e)}}},edit:s,restaurantDetails:t,menuChangeHandler:w}),l.a.createElement(R,{defaultSocialLinks:t.social,menuChangeHandler:w}),l.a.createElement("div",null,l.a.createElement(j,{offers:t.offers,setOffers:function(e){return w("offers",e)}}))),l.a.createElement(B,{updateMenuThemeHandler:function(e,t){return w("menu.".concat(e),t)}}),l.a.createElement(C,{menuCategories:t.menu.categories,updateMenuCategoriesHandler:function(e){return w("menu.categories",e)}}),l.a.createElement("div",null,l.a.createElement("div",{style:{float:"right",display:"flex",flexDirection:"column"}},l.a.createElement("button",{type:"button",onClick:function(e){E||(localStorage.setItem("restaurantDetails",JSON.stringify(t)),h(!0),setTimeout((function(){h(!1)}),3e3))},className:"black-yellow"},E?l.a.createElement("div",null,"Saved ",l.a.createElement("i",{className:"eos-icons"},"done")):"Save Draft"),s?l.a.createElement("button",{type:"button",onClick:function(e){return x()},className:"black-yellow"},O()):l.a.createElement(v,{restaurantDetails:t,setRestaurantDetails:a},l.a.createElement("button",{type:"button",onClick:function(e){return x()},className:"black-yellow"},O()))))))},z=function(e){var t=Object(r.useState)(e.restaurantDetails),a=Object(n.a)(t,2),i=a[0],o=a[1],s=Object(r.useState)(""),m=Object(n.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(H.Light),f=Object(n.a)(p,2),g=f[0],E=f[1];return Object(r.useEffect)((function(){if(i.menu.theme&&(H[i.menu.theme.themeName]?E(H[i.menu.theme.themeName]):(console.log("No theme name found. Reading theme info"),E(i.menu.theme))),""===u)o(e.restaurantDetails);else{var t=JSON.parse(JSON.stringify(e.restaurantDetails)),a=[];t.menu.categories.forEach((function(e){if(e.title.toLowerCase().includes(u.toLowerCase().trim()))a.push(e);else{for(var t=[],n=0;n<e.items.length;n++)e.items[n].itemName.toLowerCase().includes(u.toLowerCase().trim())&&t.push(e.items[n]);e.items=t,t.length>0&&a.push(e)}})),t.menu.categories=a,o(t)}}),[e.restaurantDetails,i,u]),l.a.createElement("div",{className:"shadow-box",style:Object(c.a)({},g)},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,i.logo?l.a.createElement("img",{src:i.logo,alt:"",className:"restaurant-logo"}):l.a.createElement("i",{className:"eos-icons",style:{color:"red",fontSize:"1em",margin:"8px"}},"local_dining"),i.restaurantName),l.a.createElement("h4",null,i.bio)),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{type:"text",name:"search-restaurant",className:"form-input",placeholder:"Search Menu",onKeyUp:function(e){return d(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("div",null,i.menu.categories.map((function(e,t){return""!==e.title?l.a.createElement("div",{key:t},l.a.createElement("h2",null,e.title),e.items.length>0?l.a.createElement("div",null,i.menu.categories[t].items.map((function(e,t){return l.a.createElement("div",{className:"menu-item",key:t},l.a.createElement("p",{className:"item-name"},e.itemName),l.a.createElement("p",{className:"item-price"},e.itemPrice),e.itemDescription?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("i",{className:"item-description"},e.itemDescription)):l.a.createElement(l.a.Fragment,null),l.a.createElement("br",null),l.a.createElement("br",null))}))):l.a.createElement("div",null)):l.a.createElement("div",{key:t})}))))},G=function(e){var t=e.restaurantDetails;return l.a.createElement("div",{className:"preview-menu"},l.a.createElement("h2",null,"Preview Menu ",l.a.createElement("i",{className:"eos-icons"},"slideshow")),l.a.createElement("p",null,"Once done, click on Generate QR Menu to create your Digital Menu."),l.a.createElement("br",null),l.a.createElement(z,{restaurantDetails:t}))},U=a(38),Q=a.n(U),W=a(10),Y=function(e){var t=e.children,a=Object(r.useState)(!1),i=Object(n.a)(a,2),c=i[0],o=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"popup-preview-menu"},l.a.createElement("button",{onClick:function(){return o((function(e){return!e}))}},l.a.createElement("i",{className:"eos-icons",style:{marginRight:10}},"slideshow")," ",c?"Edit":"Preview"),l.a.createElement("div",{className:"popup-preview-content ".concat(c?"active":"")},l.a.createElement("div",{className:"popup-preview-scroll"},t))))};W.a.initialize("G-0BPQRCHTXK");t.default=function(e){var t=e.edit,a=Object(r.useState)({emailId:"",restaurantName:"",logo:"",bio:"",offers:[],social:{},menu:{categories:[],theme:{}}}),c=Object(n.a)(a,2),o=c[0],s=c[1],m=Object(r.useState)(!1),d=Object(n.a)(m,2),p=d[0],f=d[1],g=Object(r.useState)(!1),E=Object(n.a)(g,2),h=E[0],v=E[1],b=Object(i.g)(),y=b.menuId,k=b.hash;Object(r.useEffect)((function(){t&&u.get("/view",{params:{q:y}}).then((function(e){return e.data})).then((function(e){if(f(!0),!e.success)throw new Error("Failed to fetch menu");s(e.data),v(!0)})).catch((function(e){console.error(e),alert(e.message)}))}),[t,y]);return l.a.createElement("div",{className:"container"},function(){if(t){if(!p)return l.a.createElement("div",{className:"loading-div"},l.a.createElement("img",{alt:"",className:"loading-icon",src:Q.a}));if(!h)return l.a.createElement("h2",null,"Invalid Edit link")}return l.a.createElement("div",null,l.a.createElement("div",{className:"center-align"},t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Update Menu"),l.a.createElement("p",null,"Any changes made here will be updated in your old menu only. You can add, delete or update the categories, items and price. The Restaurant name, logo and email ID cannot be changed for now. You don't have to worry for new QR code , the link and QR remains same."),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Create Menu"),l.a.createElement("p",{style:{fontSize:"1.2em"}},"Creating menu is simple. Just enter your restaurant name, upload Logo and Email ID for future changes.",l.a.createElement("br",null),"That's it. Now you can start adding the Dishes by creating a new category and adding items to it.")),l.a.createElement("br",null)),l.a.createElement("div",{className:"create-menu-container"},l.a.createElement(q,{restaurantDetails:o,setRestaurantDetails:s,edit:t,menuId:y,hash:k}),l.a.createElement(Y,null,l.a.createElement(G,{restaurantDetails:o}))))}())}}}]);
//# sourceMappingURL=4.719b2420.chunk.js.map