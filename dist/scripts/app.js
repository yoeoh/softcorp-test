!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NiceSelect=t():e.NiceSelect=t()}(self,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function s(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function o(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}function r(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}function n(e){var t=document.createEvent("UIEvent");t.initEvent("modalclose",!0,!1),e.dispatchEvent(t)}function l(e,t){"invalid"==t?(d(this.dropdown,"invalid"),h(this.dropdown,"valid")):(d(this.dropdown,"valid"),h(this.dropdown,"invalid"))}function a(e,t){return null!=e[t]?e[t]:e.getAttribute(t)}function c(e,t){return!!e&&e.classList.contains(t)}function d(e,t){if(e)return e.classList.add(t)}function h(e,t){if(e)return e.classList.remove(t)}e.r(t),e.d(t,{bind:()=>f,default:()=>p});var u={data:null,searchable:!1,showSelectedItems:!1};function p(e,t){this.el=e,this.config=Object.assign({},u,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=a(this.el,"placeholder")||this.config.placeholder||"Select an option",this.searchtext=a(this.el,"searchtext")||this.config.searchtext||"Search",this.selectedtext=a(this.el,"selectedtext")||this.config.selectedtext||"selected",this.dropdown=null,this.multiple=a(this.el,"multiple"),this.disabled=a(this.el,"disabled"),this.create()}function f(e,t){return new p(e,t)}return p.prototype.create=function(){this.el.style.opacity="0",this.el.style.width="0",this.el.style.padding="0",this.el.style.height="0",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},p.prototype.processData=function(e){var t=[];e.forEach((e=>{t.push({data:e,attributes:{selected:!!e.selected,disabled:!!e.disabled,optgroup:"optgroup"==e.value}})})),this.options=t},p.prototype.extractData=function(){var e=this.el.querySelectorAll("option,optgroup"),t=[],i=[],s=[];e.forEach((e=>{if("OPTGROUP"==e.tagName)var s={text:e.label,value:"optgroup"};else s={text:e.innerText,value:e.value,selected:null!=e.getAttribute("selected")||this.el.value==e.value,disabled:null!=e.getAttribute("disabled")};var o={selected:e.selected,disabled:e.disabled,optgroup:"OPTGROUP"==e.tagName};t.push(s),i.push({data:s,attributes:o})})),this.data=t,this.options=i,this.options.forEach((e=>{e.attributes.selected&&s.push(e)})),this.selectedOptions=s},p.prototype.renderDropdown=function(){var e=["nice-select",a(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""];let t='<div class="nice-select-search-box">';t+=`<input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`,t+="</div>";var i=`<div class="${e.join(" ")}" tabindex="${this.disabled?null:0}">`;i+=`<span class="${this.multiple?"multiple-options":"current"}"></span>`,i+='<div class="nice-select-dropdown">',i+=`${this.config.searchable?t:""}`,i+='<ul class="list"></ul>',i+="</div>",i+="</div>",this.el.insertAdjacentHTML("afterend",i),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},p.prototype._renderSelectedItems=function(){if(this.multiple){var e="";this.config.showSelectedItems||this.config.showSelectedItems||"auto"==window.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach((function(t){e+=`<span class="current">${t.data.text}</span>`})),e=""==e?this.placeholder:e):e=this.selectedOptions.length+" "+this.selectedtext,this.dropdown.querySelector(".multiple-options").innerHTML=e}else{var t=this.selectedOptions.length>0?this.selectedOptions[0].data.text:this.placeholder;this.dropdown.querySelector(".current").innerHTML=t}},p.prototype._renderItems=function(){var e=this.dropdown.querySelector("ul");this.options.forEach((t=>{e.appendChild(this._renderItem(t))}))},p.prototype._renderItem=function(e){var t=document.createElement("li");if(t.innerHTML=e.data.text,e.attributes.optgroup)d(t,"optgroup");else{t.setAttribute("data-value",e.data.value);var i=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null];t.addEventListener("click",this._onItemClicked.bind(this,e)),t.classList.add(...i)}return e.element=t,t},p.prototype.update=function(){if(this.extractData(),this.dropdown){var e=c(this.dropdown,"open");this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&i(this.dropdown)}a(this.el,"disabled")?this.disable():this.enable()},p.prototype.disable=function(){this.disabled||(this.disabled=!0,d(this.dropdown,"disabled"))},p.prototype.enable=function(){this.disabled&&(this.disabled=!1,h(this.dropdown,"disabled"))},p.prototype.clear=function(){this.resetSelectValue(),this.selectedOptions=[],this._renderSelectedItems(),this.update(),s(this.el)},p.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},p.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",o.bind(this,this.el)),this.dropdown.addEventListener("focusout",r.bind(this,this.el)),this.el.addEventListener("invalid",l.bind(this,this.el,"invalid")),window.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},p.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",(function(e){return e.stopPropagation(),!1})),e.addEventListener("input",this._onSearchChanged.bind(this))},p.prototype._onClicked=function(e){var t,i;if(e.preventDefault(),c(this.dropdown,"open")?this.multiple||(h(this.dropdown,"open"),n(this.el)):(d(this.dropdown,"open"),t=this.el,(i=document.createEvent("UIEvent")).initEvent("modalopen",!0,!1),t.dispatchEvent(i)),c(this.dropdown,"open")){var s=this.dropdown.querySelector(".nice-select-search");s&&(s.value="",s.focus());var o=this.dropdown.querySelector(".focus");h(o,"focus"),d(o=this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach((function(e){e.style.display=""}))}else this.dropdown.focus()},p.prototype._onItemClicked=function(e,t){var i=t.target;c(i,"disabled")||(this.multiple?c(i,"selected")?(h(i,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector(`option[value="${i.dataset.value}"]`).removeAttribute("selected")):(d(i,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach((function(e){h(e.element,"selected")})),d(i,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},p.prototype.updateSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector(`option[value="${t.data.value}"]`);i&&i.setAttribute("selected",!0)}))}else this.selectedOptions.length>0&&(this.el.value=this.selectedOptions[0].data.value);s(this.el)},p.prototype.resetSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector(`option[value="${t.data.value}"]`);i&&i.removeAttribute("selected")}))}else this.selectedOptions.length>0&&(this.el.selectedIndex=-1);s(this.el)},p.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||(h(this.dropdown,"open"),n(this.el))},p.prototype._onKeyPressed=function(e){var t=this.dropdown.querySelector(".focus"),s=c(this.dropdown,"open");if(13==e.keyCode)i(s?t:this.dropdown);else if(40==e.keyCode){if(s){var o=this._findNext(t);o&&(h(this.dropdown.querySelector(".focus"),"focus"),d(o,"focus"))}else i(this.dropdown);e.preventDefault()}else if(38==e.keyCode){if(s){var r=this._findPrev(t);r&&(h(this.dropdown.querySelector(".focus"),"focus"),d(r,"focus"))}else i(this.dropdown);e.preventDefault()}else if(27==e.keyCode&&s)i(this.dropdown);else if(32===e.keyCode&&s)return!1;return!1},p.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!c(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},p.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!c(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},p.prototype._onSearchChanged=function(e){var t=c(this.dropdown,"open"),i=e.target.value;if(""==(i=i.toLowerCase()))this.options.forEach((function(e){e.element.style.display=""}));else if(t){var s=new RegExp(i);this.options.forEach((function(e){var t=e.data.text.toLowerCase(),i=s.test(t);e.element.style.display=i?"":"none"}))}this.dropdown.querySelectorAll(".focus").forEach((function(e){h(e,"focus")})),d(this._findNext(null),"focus")},t})()));var SimpleBar=function(){"use strict";var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},e(t,i)},t=!("undefined"==typeof window||!window.document||!window.document.createElement),i="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,o=i||s||Function("return this")(),r=o.Symbol,n=Object.prototype,l=n.hasOwnProperty,a=n.toString,c=r?r.toStringTag:void 0,d=Object.prototype.toString,h=r?r.toStringTag:void 0;var u=/\s/,p=/^\s+/;function f(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var v=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt;function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?function(e){var t=l.call(e,c),i=e[c];try{e[c]=void 0;var s=!0}catch(e){}var o=a.call(e);return s&&(t?e[c]=i:delete e[c]),o}(e):function(e){return d.call(e)}(e)}(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t}(e)+1).replace(p,""):e}(e);var i=m.test(e);return i||b.test(e)?g(e.slice(2),i?2:8):v.test(e)?NaN:+e}var E=function(){return o.Date.now()},x=Math.max,w=Math.min;function S(e,t,i){var s,o,r,n,l,a,c=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var i=s,r=o;return s=o=void 0,c=t,n=e.apply(r,i)}function v(e){var i=e-a;return void 0===a||i>=t||i<0||h&&e-c>=r}function m(){var e=E();if(v(e))return b(e);l=setTimeout(m,function(e){var i=t-(e-a);return h?w(i,r-(e-c)):i}(e))}function b(e){return l=void 0,u&&s?p(e):(s=o=void 0,n)}function g(){var e=E(),i=v(e);if(s=arguments,o=this,a=e,i){if(void 0===l)return function(e){return c=e,l=setTimeout(m,t),d?p(e):n}(a);if(h)return clearTimeout(l),l=setTimeout(m,t),p(a)}return void 0===l&&(l=setTimeout(m,t)),n}return t=y(t)||0,f(i)&&(d=!!i.leading,r=(h="maxWait"in i)?x(y(i.maxWait)||0,t):r,u="trailing"in i?!!i.trailing:u),g.cancel=function(){void 0!==l&&clearTimeout(l),c=0,s=a=o=l=void 0},g.flush=function(){return void 0===l?n:b(E())},g}var O=function(){return O=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},O.apply(this,arguments)},A=null,k=null;function L(){if(null===A){if("undefined"==typeof document)return A=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),A=i}return A}function M(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function W(e){return e&&e.ownerDocument?e.ownerDocument:document}t&&window.addEventListener("resize",(function(){k!==window.devicePixelRatio&&(k=window.devicePixelRatio,A=null)}));var N=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})};function C(e,t){var i;e&&(i=e.classList).add.apply(i,t.split(" "))}function z(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function T(e){return".".concat(e.split(" ").join("."))}var _=Object.freeze({__proto__:null,addClasses:C,classNamesToQuery:T,getElementDocument:W,getElementWindow:M,getOptions:N,removeClasses:z}),D=M,q=W,I=N,R=C,V=z,H=T,j=function(){function e(t,i){void 0===i&&(i={});var s=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=D(s.el);s.scrollXTicking||(e.requestAnimationFrame(s.scrollX),s.scrollXTicking=!0),s.scrollYTicking||(e.requestAnimationFrame(s.scrollY),s.scrollYTicking=!0),s.isScrolling||(s.isScrolling=!0,R(s.el,s.classNames.scrolling)),s.showScrollbar("x"),s.showScrollbar("y"),s.onStopScrolling()},this.scrollX=function(){s.axis.x.isOverflowing&&s.positionScrollbar("x"),s.scrollXTicking=!1},this.scrollY=function(){s.axis.y.isOverflowing&&s.positionScrollbar("y"),s.scrollYTicking=!1},this._onStopScrolling=function(){V(s.el,s.classNames.scrolling),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isScrolling=!1},this.onMouseEnter=function(){s.isMouseEntering||(R(s.el,s.classNames.mouseEntered),s.showScrollbar("x"),s.showScrollbar("y"),s.isMouseEntering=!0),s.onMouseEntered()},this._onMouseEntered=function(){V(s.el,s.classNames.mouseEntered),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isMouseEntering=!1},this._onMouseMove=function(e){s.mouseX=e.clientX,s.mouseY=e.clientY,(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseMoveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseMoveForAxis("y")},this.onMouseLeave=function(){s.onMouseMove.cancel(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseLeaveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseLeaveForAxis("y"),s.mouseX=-1,s.mouseY=-1},this._onWindowResize=function(){s.scrollbarWidth=s.getScrollbarWidth(),s.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;s.axis.x.track.el&&s.axis.y.track.el&&s.axis.x.scrollbar.el&&s.axis.y.scrollbar.el&&(s.axis.x.track.rect=s.axis.x.track.el.getBoundingClientRect(),s.axis.y.track.rect=s.axis.y.track.el.getBoundingClientRect(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&(t=s.isWithinBounds(s.axis.x.track.rect)),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&(i=s.isWithinBounds(s.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(s.axis.x.scrollbar.rect=s.axis.x.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.x.scrollbar.rect)?s.onDragStart(e,"x"):s.onTrackClick(e,"x")),i&&(s.axis.y.scrollbar.rect=s.axis.y.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.y.scrollbar.rect)?s.onDragStart(e,"y"):s.onTrackClick(e,"y")))))},this.drag=function(t){var i,o,r,n,l,a,c,d,h,u,p;if(s.draggedAxis&&s.contentWrapperEl){var f=s.axis[s.draggedAxis].track,v=null!==(o=null===(i=f.rect)||void 0===i?void 0:i[s.axis[s.draggedAxis].sizeAttr])&&void 0!==o?o:0,m=s.axis[s.draggedAxis].scrollbar,b=null!==(n=null===(r=s.contentWrapperEl)||void 0===r?void 0:r[s.axis[s.draggedAxis].scrollSizeAttr])&&void 0!==n?n:0,g=parseInt(null!==(a=null===(l=s.elStyles)||void 0===l?void 0:l[s.axis[s.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);t.preventDefault(),t.stopPropagation();var y=("y"===s.draggedAxis?t.pageY:t.pageX)-(null!==(d=null===(c=f.rect)||void 0===c?void 0:c[s.axis[s.draggedAxis].offsetAttr])&&void 0!==d?d:0)-s.axis[s.draggedAxis].dragOffset,E=(y=s.isRtl?(null!==(u=null===(h=f.rect)||void 0===h?void 0:h[s.axis[s.draggedAxis].sizeAttr])&&void 0!==u?u:0)-m.size-y:y)/(v-m.size)*(b-g);"x"===s.draggedAxis&&s.isRtl&&(E=(null===(p=e.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-E:E),s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr]=E}},this.onEndDrag=function(e){var t=q(s.el),i=D(s.el);e.preventDefault(),e.stopPropagation(),V(s.el,s.classNames.dragging),t.removeEventListener("mousemove",s.drag,!0),t.removeEventListener("mouseup",s.onEndDrag,!0),s.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",s.preventClick,!0),t.removeEventListener("dblclick",s.preventClick,!0),s.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.options=O(O({},e.defaultOptions),i),this.classNames=O(O({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=function(e,t,i){var s=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return f(i)&&(s="leading"in i?!!i.leading:s,o="trailing"in i?!!i.trailing:o),S(e,64,{leading:s,maxWait:64,trailing:o})}(this._onMouseMove),this.onWindowResize=S(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=S(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=S(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,s=null==i?void 0:i.firstElementChild;if(!s)return null;document.body.appendChild(i),i.scrollLeft=0;var o=e.getOffset(i),r=e.getOffset(s);i.scrollLeft=-999;var n=e.getOffset(s);return document.body.removeChild(i),e.rtlHelpers={isScrollOriginAtZero:o.left!==r.left,isScrollingToNegative:r.left!==n.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:L()}catch(e){return L()}},e.getOffset=function(e){var t=e.getBoundingClientRect(),i=q(e),s=D(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){t&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(H(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(H(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(H(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(H(this.classNames.offset)),this.maskEl=this.el.querySelector(H(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,H(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(H(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(H(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(H(this.classNames.track)).concat(H(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(H(this.classNames.track)).concat(H(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(H(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(H(this.classNames.scrollbar)))||null,this.options.autoHide||(R(this.axis.x.scrollbar.el,this.classNames.visible),R(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var e,t=this,i=D(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,o=i.ResizeObserver||ResizeObserver;this.resizeObserver=new o((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=D(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,o=this.contentWrapperEl.offsetWidth,r=this.elStyles.overflowX,n=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var l=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(l,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=l>c,this.axis.x.isOverflowing="hidden"!==r&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==n&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var d=this.axis.x.isOverflowing?this.scrollbarWidth:0,h=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>o-h,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&l>c-d,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,o=this.contentEl[this.axis[e].scrollSizeAttr],r=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,n=r/o;return s=Math.max(~~(n*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},e.prototype.positionScrollbar=function(t){var i,s,o;void 0===t&&(t="y");var r=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&r.el&&this.elStyles){var n=this.contentWrapperEl[this.axis[t].scrollSizeAttr],l=(null===(i=this.axis[t].track.el)||void 0===i?void 0:i[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c="x"===t&&this.isRtl&&(null===(s=e.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===t&&this.isRtl&&(c=(null===(o=e.getRtlHelpers())||void 0===o?void 0:o.isScrollingToNegative)?c:-c);var d=c/(n-a),h=~~((l-r.size)*d);h="x"===t&&this.isRtl?-h+(l-r.size):h,r.el.style.transform="x"===t?"translate3d(".concat(h,"px, 0, 0)"):"translate3d(0, ".concat(h,"px, 0)")}},e.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(R(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(V(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),R(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?R(t.scrollbar.el,this.classNames.hover):V(t.scrollbar.el,this.classNames.hover)):(V(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},e.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),V(this.axis[e].track.el,this.classNames.hover),V(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},e.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y");var s=q(this.el),o=D(this.el),r=this.axis[t].scrollbar,n="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=n-((null===(i=r.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,R(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(o.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(e,t){var i,s,o,r,n=this;void 0===t&&(t="y");var l=this.axis[t];if(this.options.clickOnTrack&&l.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=D(this.el);this.axis[t].scrollbar.rect=l.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,d=parseInt(null!==(r=null===(o=this.elStyles)||void 0===o?void 0:o[this.axis[t].sizeAttr])&&void 0!==r?r:"0px",10),h=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],u=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===u?h-d:h+d,f=function(){n.contentWrapperEl&&(-1===u?h>p&&(h-=40,n.contentWrapperEl[n.axis[t].scrollOffsetAttr]=h,a.requestAnimationFrame(f)):h<p&&(h+=40,n.contentWrapperEl[n.axis[t].scrollOffsetAttr]=h,a.requestAnimationFrame(f)))};f()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var e=D(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},e.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=I,e.helpers=_,e}(),B=j.helpers,P=B.getOptions,X=B.addClasses,Y=function(t){function i(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];var o=t.apply(this,e)||this;return i.instances.set(e[0],o),o}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}(i,t),i.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(e){"init"===e.getAttribute("data-simplebar")||i.instances.has(e)||new i(e,P(e.attributes))}))},i.removeObserver=function(){var e;null===(e=i.globalObserver)||void 0===e||e.disconnect()},i.prototype.initDOM=function(){var e,t,i,s=this;if(!Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(s.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),X(this.wrapperEl,this.classNames.wrapper),X(this.contentWrapperEl,this.classNames.contentWrapper),X(this.offsetEl,this.classNames.offset),X(this.maskEl,this.classNames.mask),X(this.contentEl,this.classNames.contentEl),X(this.placeholderEl,this.classNames.placeholder),X(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),X(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex","0"),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var o=document.createElement("div"),r=document.createElement("div");X(o,this.classNames.track),X(r,this.classNames.scrollbar),o.appendChild(r),this.axis.x.track.el=o.cloneNode(!0),X(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=o.cloneNode(!0),X(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}j.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},i.prototype.unMount=function(){j.prototype.unMount.call(this),i.instances.delete(this.el)},i.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(i.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},i.handleMutations=function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!i.instances.has(e)&&document.documentElement.contains(e)&&new i(e,P(e.attributes)):e.querySelectorAll("[data-simplebar]").forEach((function(e){"init"!==e.getAttribute("data-simplebar")&&!i.instances.has(e)&&document.documentElement.contains(e)&&new i(e,P(e.attributes))})))})),e.removedNodes.forEach((function(e){1===e.nodeType&&("init"===e.getAttribute("data-simplebar")?i.instances.has(e)&&!document.documentElement.contains(e)&&i.instances.get(e).unMount():Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'),(function(e){i.instances.has(e)&&!document.documentElement.contains(e)&&i.instances.get(e).unMount()})))}))}))},i.instances=new WeakMap,i}(j);return t&&Y.initHtmlApi(),Y}();document.addEventListener("DOMContentLoaded",(()=>{NiceSelect.bind(document.getElementById("order-select-dropdown")),new SimpleBar(document.querySelector(".nice-select .list"),{autoHide:!1});const e=document.getElementById("form-range-input"),t=document.getElementById("form-range-value");e.addEventListener("input",(e=>{const i=e.target.value;t.innerText=`${i}%`}));const i=document.getElementById("header"),s=document.getElementById("hero");new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?i.classList.remove("header__compact"):i.classList.add("header__compact")}))}),{threshold:1}).observe(s);const o=document.getElementById("burger-menu-button"),r=document.getElementById("burger-menu"),n=document.getElementById("burger-menu-close-button"),l=document.getElementById("header-menu"),a=document.querySelector("body");function c(){r.classList.add("burger_visible"),function(){if(h)return;h=!0;const e=Array.from(l.cloneNode(!0).getElementsByTagName("li")),t=document.getElementById("burger-menu-list");e.forEach((e=>{t.appendChild(e)})),r.addEventListener("click",(()=>d()))}(),a.classList.add("fullscreen")}function d(){r.classList.remove("burger_visible"),a.classList.remove("fullscreen")}let h=!1;o.addEventListener("click",(()=>c())),n.addEventListener("click",(()=>d()));const u=Array.from(document.querySelectorAll("[data-animated]")),p=new IntersectionObserver((e=>{e.forEach((e=>{e.target.classList.add("transparent"),e.isIntersecting&&(e.target.classList.add("animation-fadeinleft"),e.target.classList.remove("transparent"),p.unobserve(e.target))}))}),{threshold:.2});u.forEach((e=>{p.observe(e)}))}));