!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,function(t,e){"use strict"
var n=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(e)
function i(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function a(t,e){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var s="transitionend",l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target")
if(!e||"#"===e){var n=t.getAttribute("href")
e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0
var e=n.default(t).css("transition-duration"),i=n.default(t).css("transition-delay"),o=parseFloat(e),r=parseFloat(i)
return o||r?(e=e.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(e)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){n.default(t).trigger(s)},supportsTransitionEnd:function(){return Boolean(s)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&l.isElement(r)?"element":null===(s=r)||void 0===s?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase()
if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){var e=t.getRootNode()
return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?l.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if(void 0===n.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=n.default.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}}
l.jQueryDetection(),n.default.fn.emulateTransitionEnd=function(t){var e=this,i=!1
return n.default(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(e)},t),this},n.default.event.special[l.TRANSITION_END]={bindType:s,delegateType:s,handle:function(t){if(n.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}
var u="bs.alert",f=n.default.fn.alert,d=function(){function t(t){this._element=t}var e=t.prototype
return e.close=function(t){var e=this._element
t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){n.default.removeData(this._element,u),this._element=null},e._getRootElement=function(t){var e=l.getSelectorFromElement(t),i=!1
return e&&(i=document.querySelector(e)),i||(i=n.default(t).closest(".alert")[0]),i},e._triggerCloseEvent=function(t){var e=n.default.Event("close.bs.alert")
return n.default(t).trigger(e),e},e._removeElement=function(t){var e=this
if(n.default(t).removeClass("show"),n.default(t).hasClass("fade")){var i=l.getTransitionDurationFromElement(t)
n.default(t).one(l.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(i)}else this._destroyElement(t)},e._destroyElement=function(t){n.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this),o=i.data(u)
o||(o=new t(this),i.data(u,o)),"close"===e&&o[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}()
n.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),n.default.fn.alert=d._jQueryInterface,n.default.fn.alert.Constructor=d,n.default.fn.alert.noConflict=function(){return n.default.fn.alert=f,d._jQueryInterface}
var c="bs.button",h=n.default.fn.button,p="active",m='[data-toggle^="button"]',g='input:not([type="hidden"])',_=".btn",v=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype
return e.toggle=function(){var t=!0,e=!0,i=n.default(this._element).closest('[data-toggle="buttons"]')[0]
if(i){var o=this._element.querySelector(g)
if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(p))t=!1
else{var r=i.querySelector(".active")
r&&n.default(r).removeClass(p)}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains(p)),this.shouldAvoidTriggerChange||n.default(o).trigger("change")),o.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(p)),t&&n.default(this._element).toggleClass(p))},e.dispose=function(){n.default.removeData(this._element,c),this._element=null},t._jQueryInterface=function(e,i){return this.each(function(){var o=n.default(this),r=o.data(c)
r||(r=new t(this),o.data(c,r)),r.shouldAvoidTriggerChange=i,"toggle"===e&&r[e]()})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}()
n.default(document).on("click.bs.button.data-api",m,function(t){var e=t.target,i=e
if(n.default(e).hasClass("btn")||(e=n.default(e).closest(_)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault()
else{var o=e.querySelector(g)
if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault()
"INPUT"!==i.tagName&&"LABEL"===e.tagName||v._jQueryInterface.call(n.default(e),"toggle","INPUT"===i.tagName)}}).on("focus.bs.button.data-api blur.bs.button.data-api",m,function(t){var e=n.default(t.target).closest(_)[0]
n.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))}),n.default(window).on("load.bs.button.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(g)
o.checked||o.hasAttribute("checked")?i.classList.add(p):i.classList.remove(p)}for(var r=0,a=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<a;r++){var s=t[r]
"true"===s.getAttribute("aria-pressed")?s.classList.add(p):s.classList.remove(p)}}),n.default.fn.button=v._jQueryInterface,n.default.fn.button.Constructor=v,n.default.fn.button.noConflict=function(){return n.default.fn.button=h,v._jQueryInterface}
var b="carousel",y="bs.carousel",E=n.default.fn[b],w="active",T="next",C="prev",S="slid.bs.carousel",N=".active.carousel-item",D={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},A={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},k={TOUCH:"touch",PEN:"pen"},I=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype
return e.next=function(){this._isSliding||this._slide(T)},e.nextWhenVisible=function(){var t=n.default(this._element)
!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(C)},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this
this._activeElement=this._element.querySelector(N)
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)n.default(this._element).one(S,function(){return e.to(t)})
else{if(i===t)return this.pause(),void this.cycle()
var o=t>i?T:C
this._slide(o,this._items[t])}},e.dispose=function(){n.default(this._element).off(".bs.carousel"),n.default.removeData(this._element,y),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},D,t),l.typeCheckConfig(b,t,A),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX)
if(!(t<=40)){var e=t/this.touchDeltaX
this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this
this._config.keyboard&&n.default(this._element).on("keydown.bs.carousel",function(e){return t._keydown(e)}),"hover"===this._config.pause&&n.default(this._element).on("mouseenter.bs.carousel",function(e){return t.pause(e)}).on("mouseleave.bs.carousel",function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this
if(this._touchSupported){var e=function(e){t._pointerEvent&&k[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&k[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))}
n.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",function(t){return t.preventDefault()}),this._pointerEvent?(n.default(this._element).on("pointerdown.bs.carousel",function(t){return e(t)}),n.default(this._element).on("pointerup.bs.carousel",function(t){return i(t)}),this._element.classList.add("pointer-event")):(n.default(this._element).on("touchstart.bs.carousel",function(t){return e(t)}),n.default(this._element).on("touchmove.bs.carousel",function(e){return function(e){t.touchDeltaX=e.originalEvent.touches&&e.originalEvent.touches.length>1?0:e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),n.default(this._element).on("touchend.bs.carousel",function(t){return i(t)}))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===T,i=t===C,o=this._getItemIndex(e),r=this._items.length-1
if((i&&0===o||n&&o===r)&&!this._config.wrap)return e
var a=(o+(t===C?-1:1))%this._items.length
return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(N)),r=n.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:o,to:i})
return n.default(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"))
n.default(e).removeClass(w)
var i=this._indicatorsElement.children[this._getItemIndex(t)]
i&&n.default(i).addClass(w)}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(N)
if(t){var e=parseInt(t.getAttribute("data-interval"),10)
e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var i,o,r,a=this,s=this._element.querySelector(N),u=this._getItemIndex(s),f=e||s&&this._getItemByDirection(t,s),d=this._getItemIndex(f),c=Boolean(this._interval)
if(t===T?(i="carousel-item-left",o="carousel-item-next",r="left"):(i="carousel-item-right",o="carousel-item-prev",r="right"),f&&n.default(f).hasClass(w))this._isSliding=!1
else if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&s&&f){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(f),this._activeElement=f
var h=n.default.Event(S,{relatedTarget:f,direction:r,from:u,to:d})
if(n.default(this._element).hasClass("slide")){n.default(f).addClass(o),l.reflow(f),n.default(s).addClass(i),n.default(f).addClass(i)
var p=l.getTransitionDurationFromElement(s)
n.default(s).one(l.TRANSITION_END,function(){n.default(f).removeClass(i+" "+o).addClass(w),n.default(s).removeClass("active "+o+" "+i),a._isSliding=!1,setTimeout(function(){return n.default(a._element).trigger(h)},0)}).emulateTransitionEnd(p)}else n.default(s).removeClass(w),n.default(f).addClass(w),this._isSliding=!1,n.default(this._element).trigger(h)
c&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this).data(y),o=r({},D,n.default(this).data())
"object"==typeof e&&(o=r({},o,e))
var a="string"==typeof e?e:o.slide
if(i||(i=new t(this,o),n.default(this).data(y,i)),"number"==typeof e)i.to(e)
else if("string"==typeof a){if(void 0===i[a])throw new TypeError('No method named "'+a+'"')
i[a]()}else o.interval&&o.ride&&(i.pause(),i.cycle())})},t._dataApiClickHandler=function(e){var i=l.getSelectorFromElement(this)
if(i){var o=n.default(i)[0]
if(o&&n.default(o).hasClass("carousel")){var a=r({},n.default(o).data(),n.default(this).data()),s=this.getAttribute("data-slide-to")
s&&(a.interval=!1),t._jQueryInterface.call(n.default(o),a),s&&n.default(o).data(y).to(s),e.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return D}}]),t}()
n.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",I._dataApiClickHandler),n.default(window).on("load.bs.carousel.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,i=t.length;e<i;e++){var o=n.default(t[e])
I._jQueryInterface.call(o,o.data())}}),n.default.fn[b]=I._jQueryInterface,n.default.fn[b].Constructor=I,n.default.fn[b].noConflict=function(){return n.default.fn[b]=E,I._jQueryInterface}
var O="collapse",x="bs.collapse",j=n.default.fn[O],L="show",P="collapse",F="collapsing",R="collapsed",B="width",H='[data-toggle="collapse"]',M={toggle:!0,parent:""},q={toggle:"boolean",parent:"(string|element)"},Q=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var n=[].slice.call(document.querySelectorAll(H)),i=0,o=n.length;i<o;i++){var r=n[i],a=l.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter(function(e){return e===t})
null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype
return e.toggle=function(){n.default(this._element).hasClass(L)?this.hide():this.show()},e.show=function(){var e,i,o=this
if(!(this._isTransitioning||n.default(this._element).hasClass(L)||(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(P)})).length&&(e=null),e&&(i=n.default(e).not(this._selector).data(x))&&i._isTransitioning))){var r=n.default.Event("show.bs.collapse")
if(n.default(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(n.default(e).not(this._selector),"hide"),i||n.default(e).data(x,null))
var a=this._getDimension()
n.default(this._element).removeClass(P).addClass(F),this._element.style[a]=0,this._triggerArray.length&&n.default(this._triggerArray).removeClass(R).attr("aria-expanded",!0),this.setTransitioning(!0)
var s="scroll"+(a[0].toUpperCase()+a.slice(1)),u=l.getTransitionDurationFromElement(this._element)
n.default(this._element).one(l.TRANSITION_END,function(){n.default(o._element).removeClass(F).addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),n.default(o._element).trigger("shown.bs.collapse")}).emulateTransitionEnd(u),this._element.style[a]=this._element[s]+"px"}}},e.hide=function(){var t=this
if(!this._isTransitioning&&n.default(this._element).hasClass(L)){var e=n.default.Event("hide.bs.collapse")
if(n.default(this._element).trigger(e),!e.isDefaultPrevented()){var i=this._getDimension()
this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",l.reflow(this._element),n.default(this._element).addClass(F).removeClass("collapse show")
var o=this._triggerArray.length
if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=l.getSelectorFromElement(a)
null!==s&&(n.default([].slice.call(document.querySelectorAll(s))).hasClass(L)||n.default(a).addClass(R).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]=""
var u=l.getTransitionDurationFromElement(this._element)
n.default(this._element).one(l.TRANSITION_END,function(){t.setTransitioning(!1),n.default(t._element).removeClass(F).addClass(P).trigger("hidden.bs.collapse")}).emulateTransitionEnd(u)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){n.default.removeData(this._element,x),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},M,t)).toggle=Boolean(t.toggle),l.typeCheckConfig(O,t,q),t},e._getDimension=function(){return n.default(this._element).hasClass(B)?B:"height"},e._getParent=function(){var e,i=this
l.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent)
var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(o))
return n.default(r).each(function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])}),e},e._addAriaAndCollapsedClass=function(t,e){var i=n.default(t).hasClass(L)
e.length&&n.default(e).toggleClass(R,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=l.getSelectorFromElement(t)
return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this),o=i.data(x),a=r({},M,i.data(),"object"==typeof e&&e?e:{})
if(!o&&a.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(a.toggle=!1),o||(o=new t(this,a),i.data(x,o)),"string"==typeof e){if(void 0===o[e])throw new TypeError('No method named "'+e+'"')
o[e]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return M}}]),t}()
n.default(document).on("click.bs.collapse.data-api",H,function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var e=n.default(this),i=l.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i))
n.default(o).each(function(){var t=n.default(this),i=t.data(x)?"toggle":e.data()
Q._jQueryInterface.call(t,i)})}),n.default.fn[O]=Q._jQueryInterface,n.default.fn[O].Constructor=Q,n.default.fn[O].noConflict=function(){return n.default.fn[O]=j,Q._jQueryInterface}
var W="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,U=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(W&&navigator.userAgent.indexOf(t[e])>=0)return 1
return 0}(),V=W&&window.Promise?function(t){var e=!1
return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1
return function(){e||(e=!0,setTimeout(function(){e=!1,t()},U))}}
function Y(t){return t&&"[object Function]"==={}.toString.call(t)}function z(t,e){if(1!==t.nodeType)return[]
var n=t.ownerDocument.defaultView.getComputedStyle(t,null)
return e?n[e]:n}function K(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function X(t){if(!t)return document.body
switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body
case"#document":return t.body}var e=z(t),n=e.overflow,i=e.overflowX,o=e.overflowY
return/(auto|scroll|overlay)/.test(n+o+i)?t:X(K(t))}function G(t){return t&&t.referenceNode?t.referenceNode:t}var $=W&&!(!window.MSInputMethodContext||!document.documentMode),J=W&&/MSIE 10/.test(navigator.userAgent)
function Z(t){return 11===t?$:10===t?J:$||J}function tt(t){if(!t)return document.documentElement
for(var e=Z(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent
var i=n&&n.nodeName
return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===z(n,"position")?tt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function et(t){return null!==t.parentNode?et(t.parentNode):t}function nt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange()
r.setStart(i,0),r.setEnd(o,0)
var a,s,l=r.commonAncestorContainer
if(t!==l&&e!==l||i.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&tt(a.firstElementChild)!==a?tt(l):l
var u=et(t)
return u.host?nt(u.host,e):nt(t,et(e).host)}function it(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName
if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement
return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function ot(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom"
return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function rt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Z(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function at(t){var e=t.body,n=t.documentElement,i=Z(10)&&getComputedStyle(n)
return{height:rt("Height",e,n,i),width:rt("Width",e,n,i)}}var st=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},lt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ut=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}
function dt(t){return ft({},t,{right:t.left+t.width,bottom:t.top+t.height})}function ct(t){var e={}
try{if(Z(10)){e=t.getBoundingClientRect()
var n=it(t,"top"),i=it(t,"left")
e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?at(t.ownerDocument):{},a=r.width||t.clientWidth||o.width,s=r.height||t.clientHeight||o.height,l=t.offsetWidth-a,u=t.offsetHeight-s
if(l||u){var f=z(t)
l-=ot(f,"x"),u-=ot(f,"y"),o.width-=l,o.height-=u}return dt(o)}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Z(10),o="HTML"===e.nodeName,r=ct(t),a=ct(e),s=X(t),l=z(e),u=parseFloat(l.borderTopWidth),f=parseFloat(l.borderLeftWidth)
n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0))
var d=dt({top:r.top-a.top-u,left:r.left-a.left-f,width:r.width,height:r.height})
if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=parseFloat(l.marginTop),h=parseFloat(l.marginLeft)
d.top-=u-c,d.bottom-=u-c,d.left-=f-h,d.right-=f-h,d.marginTop=c,d.marginLeft=h}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=it(e,"top"),o=it(e,"left"),r=n?-1:1
return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(d,e)),d}function pt(t){if(!t||!t.parentElement||Z())return document.documentElement
for(var e=t.parentElement;e&&"none"===z(e,"transform");)e=e.parentElement
return e||document.documentElement}function mt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?pt(t):nt(t,G(e))
if("viewport"===i)r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=ht(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:it(n),s=e?0:it(n,"left")
return dt({top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r})}(a,o)
else{var s=void 0
"scrollParent"===i?"BODY"===(s=X(K(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i
var l=ht(s,a,o)
if("HTML"!==s.nodeName||function t(e){var n=e.nodeName
if("BODY"===n||"HTML"===n)return!1
if("fixed"===z(e,"position"))return!0
var i=K(e)
return!!i&&t(i)}(a))r=l
else{var u=at(t.ownerDocument),f=u.height,d=u.width
r.top+=l.top-l.marginTop,r.bottom=f+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var c="number"==typeof(n=n||0)
return r.left+=c?n:n.left||0,r.top+=c?n:n.top||0,r.right-=c?n:n.right||0,r.bottom-=c?n:n.bottom||0,r}function gt(t){return t.width*t.height}function _t(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===t.indexOf("auto"))return t
var a=mt(n,i,r,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},l=Object.keys(s).map(function(t){return ft({key:t},s[t],{area:gt(s[t])})}).sort(function(t,e){return e.area-t.area}),u=l.filter(function(t){var e=t.width,i=t.height
return e>=n.clientWidth&&i>=n.clientHeight}),f=u.length>0?u[0].key:l[0].key,d=t.split("-")[1]
return f+(d?"-"+d:"")}function vt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return ht(n,i?pt(e):nt(e,G(n)),i)}function bt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0)
return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function yt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"}
return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Et(t,e,n){n=n.split("-")[0]
var i=bt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",u=r?"width":"height"
return o[a]=e[a]+e[l]/2-i[l]/2,o[s]=n===s?e[s]-i[u]:e[yt(s)],o}function wt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Tt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t.name===n})
var i=wt(t,function(t){return t.name===n})
return t.indexOf(i)}(t,0,n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=t.function||t.fn
t.enabled&&Y(n)&&(e.offsets.popper=dt(e.offsets.popper),e.offsets.reference=dt(e.offsets.reference),e=n(e,t))}),e}function Ct(t,e){return t.some(function(t){var n=t.name
return t.enabled&&n===e})}function St(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t
if(void 0!==document.body.style[r])return r}return null}function Nt(t){var e=t.ownerDocument
return e?e.defaultView:window}function Dt(t,e,n,i){n.updateBound=i,Nt(t).addEventListener("resize",n.updateBound,{passive:!0})
var o=X(t)
return function t(e,n,i,o){var r="BODY"===e.nodeName,a=r?e.ownerDocument.defaultView:e
a.addEventListener(n,i,{passive:!0}),r||t(X(a.parentNode),n,i,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function At(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function kt(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&At(e[n])&&(i="px"),t.style[n]=e[n]+i})}var It=W&&/Firefox/i.test(navigator.userAgent)
function Ot(t,e,n){var i=wt(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order})
if(!o){var r="`"+e+"`",a="`"+n+"`"
console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var xt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],jt=xt.slice(3)
function Lt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=jt.indexOf(t),i=jt.slice(n+1).concat(jt.slice(0,n))
return e?i.reverse():i}var Pt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1]
if(i){var o=t.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",f={start:ut({},l,r[l]),end:ut({},l,r[l]+r[u]-a[u])}
t.offsets.popper=ft({},a,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,o=t.placement,r=t.offsets,a=r.popper,s=r.reference,l=o.split("-")[0]
return n=At(+i)?[+i,0]:function(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=t.split(/(\+|\-)/).map(function(t){return t.trim()}),s=a.indexOf(wt(a,function(t){return-1!==t.search(/,|\s/)}))
a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a]
return(u=u.map(function(t,i){var o=(1===i?!r:r)?"height":"width",a=!1
return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2]
return r?0===a.indexOf("%")?dt("%p"===a?n:i)[e]/100*r:"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r:r:t}(t,o,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){At(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))})}),o}(i,a,s,l),"left"===l?(a.top+=n[0],a.left-=n[1]):"right"===l?(a.top+=n[0],a.left+=n[1]):"top"===l?(a.left+=n[0],a.top-=n[1]):"bottom"===l&&(a.left+=n[0],a.top+=n[1]),t.popper=a,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||tt(t.instance.popper)
t.instance.reference===n&&(n=tt(n))
var i=St("transform"),o=t.instance.popper.style,r=o.top,a=o.left,s=o[i]
o.top="",o.left="",o[i]=""
var l=mt(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed)
o.top=r,o.left=a,o[i]=s,e.boundaries=l
var u=e.priority,f=t.offsets.popper,d={primary:function(t){var n=f[t]
return f[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(f[t],l[t])),ut({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=f[n]
return f[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(f[n],l[t]-("right"===t?f.width:f.height))),ut({},n,i)}}
return u.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary"
f=ft({},f,d[e](t))}),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height"
return n[s]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[u]),n[l]>r(i[s])&&(t.offsets.popper[l]=r(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n
if(!Ot(t.instance.modifiers,"arrow","keepTogether"))return t
var i=e.element
if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t
var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),u=l?"height":"width",f=l?"Top":"Left",d=f.toLowerCase(),c=l?"left":"top",h=l?"bottom":"right",p=bt(i)[u]
s[h]-p<a[d]&&(t.offsets.popper[d]-=a[d]-(s[h]-p)),s[d]+p>a[h]&&(t.offsets.popper[d]+=s[d]+p-a[h]),t.offsets.popper=dt(t.offsets.popper)
var m=s[d]+s[u]/2-p/2,g=z(t.instance.popper),_=parseFloat(g["margin"+f]),v=parseFloat(g["border"+f+"Width"]),b=m-t.offsets.popper[d]-_-v
return b=Math.max(Math.min(a[u]-p,b),0),t.arrowElement=i,t.offsets.arrow=(ut(n={},d,Math.round(b)),ut(n,c,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(Ct(t.instance.modifiers,"inner"))return t
if(t.flipped&&t.placement===t.originalPlacement)return t
var n=mt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=yt(i),r=t.placement.split("-")[1]||"",a=[]
switch(e.behavior){case"flip":a=[i,o]
break
case"clockwise":a=Lt(i)
break
case"counterclockwise":a=Lt(i,!0)
break
default:a=e.behavior}return a.forEach(function(s,l){if(i!==s||a.length===l+1)return t
i=t.placement.split("-")[0],o=yt(i)
var u=t.offsets.popper,f=t.offsets.reference,d=Math.floor,c="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),h=d(u.left)<d(n.left),p=d(u.right)>d(n.right),m=d(u.top)<d(n.top),g=d(u.bottom)>d(n.bottom),_="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===r&&h||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),y=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&h||!v&&"start"===r&&g||!v&&"end"===r&&m),E=b||y;(c||_||E)&&(t.flipped=!0,(c||_)&&(i=a[l+1]),E&&(r="end"===r?"start":"start"===r?"end":r),t.placement=i+(r?"-"+r:""),t.offsets.popper=ft({},t.offsets.popper,Et(t.instance.popper,t.offsets.reference,t.placement)),t=Tt(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n)
return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),t.placement=yt(e),t.offsets.popper=dt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Ot(t.instance.modifiers,"hide","preventOverflow"))return t
var e=t.offsets.reference,n=wt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries
if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t
t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t
t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=wt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration
void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var a,s,l=void 0!==r?r:e.gpuAcceleration,u=tt(t.instance.popper),f=ct(u),d={position:o.position},c=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,a=Math.floor,s=function(t){return t},l=r(o.width),u=r(i.width),f=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),c=e?f||d||l%2==u%2?r:a:s,h=e?r:s
return{left:c(l%2==1&&u%2==1&&!d&&e?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:c(i.right)}}(t,window.devicePixelRatio<2||!It),h="bottom"===n?"top":"bottom",p="right"===i?"left":"right",m=St("transform")
if(s="bottom"===h?"HTML"===u.nodeName?-u.clientHeight+c.bottom:-f.height+c.bottom:c.top,a="right"===p?"HTML"===u.nodeName?-u.clientWidth+c.right:-f.width+c.right:c.left,l&&m)d[m]="translate3d("+a+"px, "+s+"px, 0)",d[h]=0,d[p]=0,d.willChange="transform"
else{var g="bottom"===h?-1:1,_="right"===p?-1:1
d[h]=s*g,d[p]=a*_,d.willChange=h+", "+p}var v={"x-placement":t.placement}
return t.attributes=ft({},v,t.attributes),t.styles=ft({},d,t.styles),t.arrowStyles=ft({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n
return kt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&kt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=vt(o,e,t,n.positionFixed),a=_t(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return e.setAttribute("x-placement",a),kt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Ft=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
st(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=V(this.update.bind(this)),this.options=ft({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(ft({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=ft({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return ft({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&Y(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update()
var r=this.options.eventsEnabled
r&&this.enableEventListeners(),this.state.eventsEnabled=r}return lt(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
t.offsets.reference=vt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=_t(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Et(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Tt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Ct(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[St("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=Dt(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var t,e
this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Nt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}.call(this)}}]),t}()
Ft.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ft.placements=xt,Ft.Defaults=Pt
var Rt=Ft,Bt="dropdown",Ht="bs.dropdown",Mt=n.default.fn[Bt],qt=new RegExp("38|40|27"),Qt="disabled",Wt="show",Ut="dropdown-menu-right",Vt="hide.bs.dropdown",Yt="hidden.bs.dropdown",zt="click.bs.dropdown.data-api",Kt="keydown.bs.dropdown.data-api",Xt='[data-toggle="dropdown"]',Gt=".dropdown-menu",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Jt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Zt=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype
return e.toggle=function(){if(!this._element.disabled&&!n.default(this._element).hasClass(Qt)){var e=n.default(this._menu).hasClass(Wt)
t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||n.default(this._element).hasClass(Qt)||n.default(this._menu).hasClass(Wt))){var i={relatedTarget:this._element},o=n.default.Event("show.bs.dropdown",i),r=t._getParentFromElement(this._element)
if(n.default(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&e){if(void 0===Rt)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
var a=this._element
"parent"===this._config.reference?a=r:l.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&n.default(r).addClass("position-static"),this._popper=new Rt(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===n.default(r).closest(".navbar-nav").length&&n.default(document.body).children().on("mouseover",null,n.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),n.default(this._menu).toggleClass(Wt),n.default(r).toggleClass(Wt).trigger(n.default.Event("shown.bs.dropdown",i))}}},e.hide=function(){if(!this._element.disabled&&!n.default(this._element).hasClass(Qt)&&n.default(this._menu).hasClass(Wt)){var e={relatedTarget:this._element},i=n.default.Event(Vt,e),o=t._getParentFromElement(this._element)
n.default(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),n.default(this._menu).toggleClass(Wt),n.default(o).toggleClass(Wt).trigger(n.default.Event(Yt,e)))}},e.dispose=function(){n.default.removeData(this._element,Ht),n.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this
n.default(this._element).on("click.bs.dropdown",function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=r({},this.constructor.Default,n.default(this._element).data(),t),l.typeCheckConfig(Bt,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element)
e&&(this._menu=e.querySelector(Gt))}return this._menu},e._getPlacement=function(){var t=n.default(this._element.parentNode),e="bottom-start"
return t.hasClass("dropup")?e=n.default(this._menu).hasClass(Ut)?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":n.default(this._menu).hasClass(Ut)&&(e="bottom-end"),e},e._detectNavbar=function(){return n.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={}
return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets,t._element)),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),r({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this).data(Ht)
if(i||(i=new t(this,"object"==typeof e?e:null),n.default(this).data(Ht,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"')
i[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var i=[].slice.call(document.querySelectorAll(Xt)),o=0,r=i.length;o<r;o++){var a=t._getParentFromElement(i[o]),s=n.default(i[o]).data(Ht),l={relatedTarget:i[o]}
if(e&&"click"===e.type&&(l.clickEvent=e),s){var u=s._menu
if(n.default(a).hasClass(Wt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&n.default.contains(a,e.target))){var f=n.default.Event(Vt,l)
n.default(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&n.default(document.body).children().off("mouseover",null,n.default.noop),i[o].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),n.default(u).removeClass(Wt),n.default(a).removeClass(Wt).trigger(n.default.Event(Yt,l)))}}}},t._getParentFromElement=function(t){var e,n=l.getSelectorFromElement(t)
return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||n.default(e.target).closest(Gt).length):!qt.test(e.which))&&!this.disabled&&!n.default(this).hasClass(Qt)){var i=t._getParentFromElement(this),o=n.default(i).hasClass(Wt)
if(o||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!o||27===e.which||32===e.which)return 27===e.which&&n.default(i.querySelector(Xt)).trigger("focus"),void n.default(this).trigger("click")
var r=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t){return n.default(t).is(":visible")})
if(0!==r.length){var a=r.indexOf(e.target)
38===e.which&&a>0&&a--,40===e.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Jt}}]),t}()
n.default(document).on(Kt,Xt,Zt._dataApiKeydownHandler).on(Kt,Gt,Zt._dataApiKeydownHandler).on(zt+" keyup.bs.dropdown.data-api",Zt._clearMenus).on(zt,Xt,function(t){t.preventDefault(),t.stopPropagation(),Zt._jQueryInterface.call(n.default(this),"toggle")}).on(zt,".dropdown form",function(t){t.stopPropagation()}),n.default.fn[Bt]=Zt._jQueryInterface,n.default.fn[Bt].Constructor=Zt,n.default.fn[Bt].noConflict=function(){return n.default.fn[Bt]=Mt,Zt._jQueryInterface}
var te="bs.modal",ee=n.default.fn.modal,ne="modal-open",ie="fade",oe="show",re="modal-static",ae="hidden.bs.modal",se="show.bs.modal",le="focusin.bs.modal",ue="resize.bs.modal",fe="click.dismiss.bs.modal",de="keydown.dismiss.bs.modal",ce="mousedown.dismiss.bs.modal",he=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe={backdrop:!0,keyboard:!0,focus:!0,show:!0},me={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ge=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype
return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this
if(!this._isShown&&!this._isTransitioning){var i=n.default.Event(se,{relatedTarget:t})
n.default(this._element).trigger(i),i.isDefaultPrevented()||(this._isShown=!0,n.default(this._element).hasClass(ie)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),n.default(this._element).on(fe,'[data-dismiss="modal"]',function(t){return e.hide(t)}),n.default(this._dialog).on(ce,function(){n.default(e._element).one("mouseup.dismiss.bs.modal",function(t){n.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this
if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=n.default.Event("hide.bs.modal")
if(n.default(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1
var o=n.default(this._element).hasClass(ie)
if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),n.default(document).off(le),n.default(this._element).removeClass(oe),n.default(this._element).off(fe),n.default(this._dialog).off(ce),o){var r=l.getTransitionDurationFromElement(this._element)
n.default(this._element).one(l.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return n.default(t).off(".bs.modal")}),n.default(document).off(le),n.default.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},pe,t),l.typeCheckConfig("modal",t,me),t},e._triggerBackdropTransition=function(){var t=this,e=n.default.Event("hidePrevented.bs.modal")
if(n.default(this._element).trigger(e),!e.isDefaultPrevented()){var i=this._element.scrollHeight>document.documentElement.clientHeight
i||(this._element.style.overflowY="hidden"),this._element.classList.add(re)
var o=l.getTransitionDurationFromElement(this._dialog)
n.default(this._element).off(l.TRANSITION_END),n.default(this._element).one(l.TRANSITION_END,function(){t._element.classList.remove(re),i||n.default(t._element).one(l.TRANSITION_END,function(){t._element.style.overflowY=""}).emulateTransitionEnd(t._element,o)}).emulateTransitionEnd(o),this._element.focus()}},e._showElement=function(t){var e=this,i=n.default(this._element).hasClass(ie),o=this._dialog?this._dialog.querySelector(".modal-body"):null
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),n.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&l.reflow(this._element),n.default(this._element).addClass(oe),this._config.focus&&this._enforceFocus()
var r=n.default.Event("shown.bs.modal",{relatedTarget:t}),a=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,n.default(e._element).trigger(r)}
if(i){var s=l.getTransitionDurationFromElement(this._dialog)
n.default(this._dialog).one(l.TRANSITION_END,a).emulateTransitionEnd(s)}else a()},e._enforceFocus=function(){var t=this
n.default(document).off(le).on(le,function(e){document!==e.target&&t._element!==e.target&&0===n.default(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this
this._isShown?n.default(this._element).on(de,function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()}):this._isShown||n.default(this._element).off(de)},e._setResizeEvent=function(){var t=this
this._isShown?n.default(window).on(ue,function(e){return t.handleUpdate(e)}):n.default(window).off(ue)},e._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){n.default(document.body).removeClass(ne),t._resetAdjustments(),t._resetScrollbar(),n.default(t._element).trigger(ae)})},e._removeBackdrop=function(){this._backdrop&&(n.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,i=n.default(this._element).hasClass(ie)?ie:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),n.default(this._backdrop).appendTo(document.body),n.default(this._element).on(fe,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())}),i&&l.reflow(this._backdrop),n.default(this._backdrop).addClass(oe),!t)return
if(!i)return void t()
var o=l.getTransitionDurationFromElement(this._backdrop)
n.default(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){n.default(this._backdrop).removeClass(oe)
var r=function(){e._removeBackdrop(),t&&t()}
if(n.default(this._element).hasClass(ie)){var a=l.getTransitionDurationFromElement(this._backdrop)
n.default(this._backdrop).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(he)),i=[].slice.call(document.querySelectorAll(".sticky-top"))
n.default(e).each(function(e,i){var o=i.style.paddingRight,r=n.default(i).css("padding-right")
n.default(i).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),n.default(i).each(function(e,i){var o=i.style.marginRight,r=n.default(i).css("margin-right")
n.default(i).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")})
var o=document.body.style.paddingRight,r=n.default(document.body).css("padding-right")
n.default(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}n.default(document.body).addClass(ne)},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(he))
n.default(t).each(function(t,e){var i=n.default(e).data("padding-right")
n.default(e).removeData("padding-right"),e.style.paddingRight=i||""})
var e=[].slice.call(document.querySelectorAll(".sticky-top"))
n.default(e).each(function(t,e){var i=n.default(e).data("margin-right")
void 0!==i&&n.default(e).css("margin-right",i).removeData("margin-right")})
var i=n.default(document.body).data("padding-right")
n.default(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},e._getScrollbarWidth=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},t._jQueryInterface=function(e,i){return this.each(function(){var o=n.default(this).data(te),a=r({},pe,n.default(this).data(),"object"==typeof e&&e?e:{})
if(o||(o=new t(this,a),n.default(this).data(te,o)),"string"==typeof e){if(void 0===o[e])throw new TypeError('No method named "'+e+'"')
o[e](i)}else a.show&&o.show(i)})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return pe}}]),t}()
n.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e,i=this,o=l.getSelectorFromElement(this)
o&&(e=document.querySelector(o))
var a=n.default(e).data(te)?"toggle":r({},n.default(e).data(),n.default(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var s=n.default(e).one(se,function(t){t.isDefaultPrevented()||s.one(ae,function(){n.default(i).is(":visible")&&i.focus()})})
ge._jQueryInterface.call(n.default(e),a,this)}),n.default.fn.modal=ge._jQueryInterface,n.default.fn.modal.Constructor=ge,n.default.fn.modal.noConflict=function(){return n.default.fn.modal=ee,ge._jQueryInterface}
var _e=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],ve=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,be=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
function ye(t,e,n){if(0===t.length)return t
if(n&&"function"==typeof n)return n(t)
for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t,n){var i=r[t],a=i.nodeName.toLowerCase()
if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue"
var s=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[a]||[])
s.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase()
if(-1!==e.indexOf(n))return-1===_e.indexOf(n)||Boolean(ve.test(t.nodeValue)||be.test(t.nodeValue))
for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(i[o].test(n))return!0
return!1})(t,l)||i.removeAttribute(t.nodeName)})},s=0,l=r.length;s<l;s++)a(s)
return i.body.innerHTML}var Ee="tooltip",we="bs.tooltip",Te=n.default.fn.tooltip,Ce=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Se=["sanitize","whiteList","sanitizeFn"],Ne="fade",De="show",Ae="show",ke="hover",Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Oe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},xe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},je={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Le=function(){function t(t,e){if(void 0===Rt)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype
return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,i=n.default(t.currentTarget).data(e)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),n.default(t.currentTarget).data(e,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(n.default(this.getTipElement()).hasClass(De))return void this._leave(null,this)
this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),n.default.removeData(this.element,this.constructor.DATA_KEY),n.default(this.element).off(this.constructor.EVENT_KEY),n.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&n.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this
if("none"===n.default(this.element).css("display"))throw new Error("Please use show on visible elements")
var e=n.default.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){n.default(this.element).trigger(e)
var i=l.findShadowRoot(this.element),o=n.default.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element)
if(e.isDefaultPrevented()||!o)return
var r=this.getTipElement(),a=l.getUID(this.constructor.NAME)
r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&n.default(r).addClass(Ne)
var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,u=this._getAttachment(s)
this.addAttachmentClass(u)
var f=this._getContainer()
n.default(r).data(this.constructor.DATA_KEY,this),n.default.contains(this.element.ownerDocument.documentElement,this.tip)||n.default(r).appendTo(f),n.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Rt(this.element,r,this._getPopperConfig(u)),n.default(r).addClass(De),n.default(r).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&n.default(document.body).children().on("mouseover",null,n.default.noop)
var d=function(){t.config.animation&&t._fixTransition()
var e=t._hoverState
t._hoverState=null,n.default(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)}
if(n.default(this.tip).hasClass(Ne)){var c=l.getTransitionDurationFromElement(this.tip)
n.default(this.tip).one(l.TRANSITION_END,d).emulateTransitionEnd(c)}else d()}},e.hide=function(t){var e=this,i=this.getTipElement(),o=n.default.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==Ae&&i.parentNode&&i.parentNode.removeChild(i),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),n.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()}
if(n.default(this.element).trigger(o),!o.isDefaultPrevented()){if(n.default(i).removeClass(De),"ontouchstart"in document.documentElement&&n.default(document.body).children().off("mouseover",null,n.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,n.default(this.tip).hasClass(Ne)){var a=l.getTransitionDurationFromElement(i)
n.default(i).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r()
this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){n.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||n.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement()
this.setElementContent(n.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),n.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=ye(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?n.default(e).parent().is(t)||t.empty().append(e):t.text(n.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this
return r({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={}
return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t.config.offset(e.offsets,t.element)),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:l.isElement(this.config.container)?n.default(this.config.container):n.default(document).find(this.config.container)},e._getAttachment=function(t){return Ie[t.toUpperCase()]},e._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach(function(e){if("click"===e)n.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)})
else if("manual"!==e){var i=e===ke?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=e===ke?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
n.default(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(o,t.config.selector,function(e){return t._leave(e)})}}),this._hideModalHandler=function(){t.element&&t.hide()},n.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var i=this.constructor.DATA_KEY;(e=e||n.default(t.currentTarget).data(i))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),n.default(t.currentTarget).data(i,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":ke]=!0),n.default(e.getTipElement()).hasClass(De)||e._hoverState===Ae?e._hoverState=Ae:(clearTimeout(e._timeout),e._hoverState=Ae,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ae&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var i=this.constructor.DATA_KEY;(e=e||n.default(t.currentTarget).data(i))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),n.default(t.currentTarget).data(i,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":ke]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},e._getConfig=function(t){var e=n.default(this.element).data()
return Object.keys(e).forEach(function(t){-1!==Se.indexOf(t)&&delete e[t]}),"number"==typeof(t=r({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l.typeCheckConfig(Ee,t,this.constructor.DefaultType),t.sanitize&&(t.template=ye(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},e._cleanTipClass=function(){var t=n.default(this.getTipElement()),e=t.attr("class").match(Ce)
null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation
null===t.getAttribute("x-placement")&&(n.default(t).removeClass(Ne),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this),o=i.data(we),r="object"==typeof e&&e
if((o||!/dispose|hide/.test(e))&&(o||(o=new t(this,r),i.data(we,o)),"string"==typeof e)){if(void 0===o[e])throw new TypeError('No method named "'+e+'"')
o[e]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Oe}},{key:"NAME",get:function(){return Ee}},{key:"DATA_KEY",get:function(){return we}},{key:"Event",get:function(){return je}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return xe}}]),t}()
n.default.fn.tooltip=Le._jQueryInterface,n.default.fn.tooltip.Constructor=Le,n.default.fn.tooltip.noConflict=function(){return n.default.fn.tooltip=Te,Le._jQueryInterface}
var Pe="bs.popover",Fe=n.default.fn.popover,Re=new RegExp("(^|\\s)bs-popover\\S+","g"),Be=r({},Le.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=r({},Le.DefaultType,{content:"(string|element|function)"}),Me={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},qe=function(t){var e,i
function r(){return t.apply(this,arguments)||this}i=t,(e=r).prototype=Object.create(i.prototype),e.prototype.constructor=e,a(e,i)
var s=r.prototype
return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(t){n.default(this.getTipElement()).addClass("bs-popover-"+t)},s.getTipElement=function(){return this.tip=this.tip||n.default(this.config.template)[0],this.tip},s.setContent=function(){var t=n.default(this.getTipElement())
this.setElementContent(t.find(".popover-header"),this.getTitle())
var e=this._getContent()
"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var t=n.default(this.getTipElement()),e=t.attr("class").match(Re)
null!==e&&e.length>0&&t.removeClass(e.join(""))},r._jQueryInterface=function(t){return this.each(function(){var e=n.default(this).data(Pe),i="object"==typeof t?t:null
if((e||!/dispose|hide/.test(t))&&(e||(e=new r(this,i),n.default(this).data(Pe,e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"')
e[t]()}})},o(r,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Be}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return Pe}},{key:"Event",get:function(){return Me}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return He}}]),r}(Le)
n.default.fn.popover=qe._jQueryInterface,n.default.fn.popover.Constructor=qe,n.default.fn.popover.noConflict=function(){return n.default.fn.popover=Fe,qe._jQueryInterface}
var Qe="scrollspy",We="bs.scrollspy",Ue=n.default.fn[Qe],Ve="active",Ye="position",ze=".nav, .list-group",Ke={offset:10,method:"auto",target:""},Xe={offset:"number",method:"string",target:"(string|element)"},Ge=function(){function t(t,e){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,n.default(this._scrollElement).on("scroll.bs.scrollspy",function(t){return i._process(t)}),this.refresh(),this._process()}var e=t.prototype
return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":Ye,i="auto"===this._config.method?e:this._config.method,o=i===Ye?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,r=l.getSelectorFromElement(t)
if(r&&(e=document.querySelector(r)),e){var a=e.getBoundingClientRect()
if(a.width||a.height)return[n.default(e)[i]().top+o,r]}return null}).filter(Boolean).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){n.default.removeData(this._element,We),n.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},Ke,"object"==typeof t&&t?t:{})).target&&l.isElement(t.target)){var e=n.default(t.target).attr("id")
e||(e=l.getUID(Qe),n.default(t.target).attr("id",e)),t.target="#"+e}return l.typeCheckConfig(Qe,t,Xe),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},e._activate=function(t){this._activeTarget=t,this._clear()
var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),i=n.default([].slice.call(document.querySelectorAll(e.join(","))))
i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass(Ve),i.addClass(Ve)):(i.addClass(Ve),i.parents(ze).prev(".nav-link, .list-group-item").addClass(Ve),i.parents(ze).prev(".nav-item").children(".nav-link").addClass(Ve)),n.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(Ve)}).forEach(function(t){return t.classList.remove(Ve)})},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this).data(We)
if(i||(i=new t(this,"object"==typeof e&&e),n.default(this).data(We,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"')
i[e]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Ke}}]),t}()
n.default(window).on("load.bs.scrollspy.data-api",function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var i=n.default(t[e])
Ge._jQueryInterface.call(i,i.data())}}),n.default.fn[Qe]=Ge._jQueryInterface,n.default.fn[Qe].Constructor=Ge,n.default.fn[Qe].noConflict=function(){return n.default.fn[Qe]=Ue,Ge._jQueryInterface}
var $e="bs.tab",Je=n.default.fn.tab,Ze="active",tn=".active",en="> li > .active",nn=function(){function t(t){this._element=t}var e=t.prototype
return e.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&n.default(this._element).hasClass(Ze)||n.default(this._element).hasClass("disabled")||this._element.hasAttribute("disabled"))){var e,i,o=n.default(this._element).closest(".nav, .list-group")[0],r=l.getSelectorFromElement(this._element)
if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?en:tn
i=(i=n.default.makeArray(n.default(o).find(a)))[i.length-1]}var s=n.default.Event("hide.bs.tab",{relatedTarget:this._element}),u=n.default.Event("show.bs.tab",{relatedTarget:i})
if(i&&n.default(i).trigger(s),n.default(this._element).trigger(u),!u.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,o)
var f=function(){var e=n.default.Event("hidden.bs.tab",{relatedTarget:t._element}),o=n.default.Event("shown.bs.tab",{relatedTarget:i})
n.default(i).trigger(e),n.default(t._element).trigger(o)}
e?this._activate(e,e.parentNode,f):f()}}},e.dispose=function(){n.default.removeData(this._element,$e),this._element=null},e._activate=function(t,e,i){var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?n.default(e).children(tn):n.default(e).find(en))[0],a=i&&r&&n.default(r).hasClass("fade"),s=function(){return o._transitionComplete(t,r,i)}
if(r&&a){var u=l.getTransitionDurationFromElement(r)
n.default(r).removeClass("show").one(l.TRANSITION_END,s).emulateTransitionEnd(u)}else s()},e._transitionComplete=function(t,e,i){if(e){n.default(e).removeClass(Ze)
var o=n.default(e.parentNode).find("> .dropdown-menu .active")[0]
o&&n.default(o).removeClass(Ze),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}n.default(t).addClass(Ze),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),l.reflow(t),t.classList.contains("fade")&&t.classList.add("show")
var r=t.parentNode
if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&n.default(r).hasClass("dropdown-menu")){var a=n.default(t).closest(".dropdown")[0]
if(a){var s=[].slice.call(a.querySelectorAll(".dropdown-toggle"))
n.default(s).addClass(Ze)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this),o=i.data($e)
if(o||(o=new t(this),i.data($e,o)),"string"==typeof e){if(void 0===o[e])throw new TypeError('No method named "'+e+'"')
o[e]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}()
n.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),nn._jQueryInterface.call(n.default(this),"show")}),n.default.fn.tab=nn._jQueryInterface,n.default.fn.tab.Constructor=nn,n.default.fn.tab.noConflict=function(){return n.default.fn.tab=Je,nn._jQueryInterface}
var on="bs.toast",rn=n.default.fn.toast,an="show",sn="showing",ln="click.dismiss.bs.toast",un={animation:!0,autohide:!0,delay:500},fn={animation:"boolean",autohide:"boolean",delay:"number"},dn=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype
return e.show=function(){var t=this,e=n.default.Event("show.bs.toast")
if(n.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade")
var i=function(){t._element.classList.remove(sn),t._element.classList.add(an),n.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))}
if(this._element.classList.remove("hide"),l.reflow(this._element),this._element.classList.add(sn),this._config.animation){var o=l.getTransitionDurationFromElement(this._element)
n.default(this._element).one(l.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},e.hide=function(){if(this._element.classList.contains(an)){var t=n.default.Event("hide.bs.toast")
n.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains(an)&&this._element.classList.remove(an),n.default(this._element).off(ln),n.default.removeData(this._element,on),this._element=null,this._config=null},e._getConfig=function(t){return t=r({},un,n.default(this._element).data(),"object"==typeof t&&t?t:{}),l.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this
n.default(this._element).on(ln,'[data-dismiss="toast"]',function(){return t.hide()})},e._close=function(){var t=this,e=function(){t._element.classList.add("hide"),n.default(t._element).trigger("hidden.bs.toast")}
if(this._element.classList.remove(an),this._config.animation){var i=l.getTransitionDurationFromElement(this._element)
n.default(this._element).one(l.TRANSITION_END,e).emulateTransitionEnd(i)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each(function(){var i=n.default(this),o=i.data(on)
if(o||(o=new t(this,"object"==typeof e&&e),i.data(on,o)),"string"==typeof e){if(void 0===o[e])throw new TypeError('No method named "'+e+'"')
o[e](this)}})},o(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"DefaultType",get:function(){return fn}},{key:"Default",get:function(){return un}}]),t}()
n.default.fn.toast=dn._jQueryInterface,n.default.fn.toast.Constructor=dn,n.default.fn.toast.noConflict=function(){return n.default.fn.toast=rn,dn._jQueryInterface},t.Alert=d,t.Button=v,t.Carousel=I,t.Collapse=Q,t.Dropdown=Zt,t.Modal=ge,t.Popover=qe,t.Scrollspy=Ge,t.Tab=nn,t.Toast=dn,t.Tooltip=Le,t.Util=l,Object.defineProperty(t,"__esModule",{value:!0})})
