function E_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pm={exports:{}},La={},Rm={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),C_=Symbol.for("react.portal"),x_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),Xf=Symbol.iterator;function O_(e){return e===null||typeof e!="object"?null:(e=Xf&&e[Xf]||e["@@iterator"],typeof e=="function"?e:null)}var Am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Dm={};function vi(e,t,n){this.props=e,this.context=t,this.refs=Dm,this.updater=n||Am}vi.prototype.isReactComponent={};vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mm(){}Mm.prototype=vi.prototype;function nd(e,t,n){this.props=e,this.context=t,this.refs=Dm,this.updater=n||Am}var rd=nd.prototype=new Mm;rd.constructor=nd;Om(rd,vi.prototype);rd.isPureReactComponent=!0;var Zf=Array.isArray,Lm=Object.prototype.hasOwnProperty,id={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Lm.call(t,r)&&!Fm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:e,key:o,ref:s,props:i,_owner:id.current}}function D_(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function od(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function M_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jf=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M_(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zo:case C_:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ll(s,0):r,Zf(i)?(n="",e!=null&&(n=e.replace(Jf,"$&/")+"/"),Ns(i,t,n,"",function(u){return u})):i!=null&&(od(i)&&(i=D_(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Jf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zf(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ll(o,a);s+=Ns(o,t,n,l,i)}else if(l=O_(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ll(o,a++),s+=Ns(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function os(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function L_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Ts={transition:null},F_={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:id};function jm(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:os,forEach:function(e,t,n){os(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return os(e,function(){t++}),t},toArray:function(e){return os(e,function(t){return t})||[]},only:function(e){if(!od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=vi;$.Fragment=x_;$.Profiler=k_;$.PureComponent=nd;$.StrictMode=S_;$.Suspense=P_;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;$.act=jm;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Om({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=id.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Lm.call(t,l)&&!Fm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:T_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N_,_context:e},e.Consumer=e};$.createElement=zm;$.createFactory=function(e){var t=zm.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:I_,render:e}};$.isValidElement=od;$.lazy=function(e){return{$$typeof:A_,_payload:{_status:-1,_result:e},_init:L_}};$.memo=function(e,t){return{$$typeof:R_,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};$.unstable_act=jm;$.useCallback=function(e,t){return $e.current.useCallback(e,t)};$.useContext=function(e){return $e.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};$.useEffect=function(e,t){return $e.current.useEffect(e,t)};$.useId=function(){return $e.current.useId()};$.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return $e.current.useMemo(e,t)};$.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};$.useRef=function(e){return $e.current.useRef(e)};$.useState=function(e){return $e.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return $e.current.useTransition()};$.version="18.3.1";Rm.exports=$;var C=Rm.exports;const b=Im(C),Cu=E_({__proto__:null,default:b},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=C,j_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,U_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function Bm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$_.call(t,r)&&!W_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:j_,type:e,key:o,ref:s,props:i,_owner:U_.current}}La.Fragment=B_;La.jsx=Bm;La.jsxs=Bm;Pm.exports=La;var k=Pm.exports,xu={},$m={exports:{}},ct={},Um={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,L){var j=P.length;P.push(L);e:for(;0<j;){var ue=j-1>>>1,ge=P[ue];if(0<i(ge,L))P[ue]=L,P[j]=ge,j=ue;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],j=P.pop();if(j!==L){P[0]=j;e:for(var ue=0,ge=P.length,rs=ge>>>1;ue<rs;){var Xn=2*(ue+1)-1,Ml=P[Xn],Zn=Xn+1,is=P[Zn];if(0>i(Ml,j))Zn<ge&&0>i(is,Ml)?(P[ue]=is,P[Zn]=j,ue=Zn):(P[ue]=Ml,P[Xn]=j,ue=Xn);else if(Zn<ge&&0>i(is,j))P[ue]=is,P[Zn]=j,ue=Zn;else break e}}return L}function i(P,L){var j=P.sortIndex-L.sortIndex;return j!==0?j:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,m=!1,p=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function w(P){if(p=!1,y(P),!m)if(n(l)!==null)m=!0,Ol(N);else{var L=n(u);L!==null&&Dl(w,L.startTime-P)}}function N(P,L){m=!1,p&&(p=!1,v(O),O=-1),h=!0;var j=f;try{for(y(L),d=n(l);d!==null&&(!(d.expirationTime>L)||P&&!St());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var ge=ue(d.expirationTime<=L);L=e.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),y(L)}else r(l);d=n(l)}if(d!==null)var rs=!0;else{var Xn=n(u);Xn!==null&&Dl(w,Xn.startTime-L),rs=!1}return rs}finally{d=null,f=j,h=!1}}var T=!1,R=null,O=-1,H=5,U=-1;function St(){return!(e.unstable_now()-U<H)}function ki(){if(R!==null){var P=e.unstable_now();U=P;var L=!0;try{L=R(!0,P)}finally{L?Ni():(T=!1,R=null)}}else T=!1}var Ni;if(typeof g=="function")Ni=function(){g(ki)};else if(typeof MessageChannel<"u"){var Yf=new MessageChannel,w_=Yf.port2;Yf.port1.onmessage=ki,Ni=function(){w_.postMessage(null)}}else Ni=function(){_(ki,0)};function Ol(P){R=P,T||(T=!0,Ni())}function Dl(P,L){O=_(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,Ol(N))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var j=f;f=L;try{return P()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=f;f=P;try{return L()}finally{f=j}},e.unstable_scheduleCallback=function(P,L,j){var ue=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ue+j:ue):j=ue,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=j+ge,P={id:c++,callback:L,priorityLevel:P,startTime:j,expirationTime:ge,sortIndex:-1},j>ue?(P.sortIndex=j,t(u,P),n(l)===null&&P===n(u)&&(p?(v(O),O=-1):p=!0,Dl(w,j-ue))):(P.sortIndex=ge,t(l,P),m||h||(m=!0,Ol(N))),P},e.unstable_shouldYield=St,e.unstable_wrapCallback=function(P){var L=f;return function(){var j=f;f=L;try{return P.apply(this,arguments)}finally{f=j}}}})(Wm);Um.exports=Wm;var V_=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=C,ot=V_;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,oo={};function xr(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(oo[e]=t,e=0;e<t.length;e++)Vm.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function G_(e){return Su.call(th,e)?!0:Su.call(eh,e)?!1:Q_.test(e)?th[e]=!0:(eh[e]=!0,!1)}function K_(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q_(e,t,n,r){if(t===null||typeof t>"u"||K_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function ad(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sd,ad);Ae[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sd,ad);Ae[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sd,ad);Ae[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ld(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q_(t,n,i,r)&&(n=null),r||i===null?G_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Tu=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),nh=Symbol.iterator;function Ti(e){return e===null||typeof e!="object"?null:(e=nh&&e[nh]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Fl;function Bi(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var zl=!1;function jl(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bi(e):""}function Y_(e){switch(e.tag){case 5:return Bi(e.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Or:return"Fragment";case Ar:return"Portal";case ku:return"Profiler";case ud:return"StrictMode";case Nu:return"Suspense";case Tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qm:return(e.displayName||"Context")+".Consumer";case Hm:return(e._context.displayName||"Context")+".Provider";case cd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dd:return t=e.displayName||null,t!==null?t:Iu(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return Iu(e(t))}catch{}}return null}function X_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(t);case 8:return t===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Km(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z_(e){var t=Km(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function as(e){e._valueTracker||(e._valueTracker=Z_(e))}function qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Km(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pu(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ym(e,t){t=t.checked,t!=null&&ld(e,"checked",t,!1)}function Ru(e,t){Ym(e,t);var n=Ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,Ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ih(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $i=Array.isArray;function Vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if($i(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ln(n)}}function Xm(e,t){var n=Ln(t.value),r=Ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ls,Jm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ls.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function so(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(e){J_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qi[t]=Qi[e]})});function e0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qi.hasOwnProperty(e)&&Qi[e]?(""+t).trim():t+"px"}function t0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e1=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(e,t){if(t){if(e1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function fd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zu=null,Hr=null,Qr=null;function ah(e){if(e=$o(e)){if(typeof zu!="function")throw Error(x(280));var t=e.stateNode;t&&(t=$a(t),zu(e.stateNode,e.type,t))}}function n0(e){Hr?Qr?Qr.push(e):Qr=[e]:Hr=e}function r0(){if(Hr){var e=Hr,t=Qr;if(Qr=Hr=null,ah(e),t)for(e=0;e<t.length;e++)ah(t[e])}}function i0(e,t){return e(t)}function o0(){}var Bl=!1;function s0(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return i0(e,t,n)}finally{Bl=!1,(Hr!==null||Qr!==null)&&(o0(),r0())}}function ao(e,t){var n=e.stateNode;if(n===null)return null;var r=$a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ju=!1;if(sn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{ju=!1}function t1(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,$s=null,Us=!1,Bu=null,n1={onError:function(e){Gi=!0,$s=e}};function r1(e,t,n,r,i,o,s,a,l){Gi=!1,$s=null,t1.apply(n1,arguments)}function i1(e,t,n,r,i,o,s,a,l){if(r1.apply(this,arguments),Gi){if(Gi){var u=$s;Gi=!1,$s=null}else throw Error(x(198));Us||(Us=!0,Bu=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function a0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lh(e){if(Sr(e)!==e)throw Error(x(188))}function o1(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lh(i),e;if(o===r)return lh(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function l0(e){return e=o1(e),e!==null?u0(e):null}function u0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=u0(e);if(t!==null)return t;e=e.sibling}return null}var c0=ot.unstable_scheduleCallback,uh=ot.unstable_cancelCallback,s1=ot.unstable_shouldYield,a1=ot.unstable_requestPaint,ce=ot.unstable_now,l1=ot.unstable_getCurrentPriorityLevel,hd=ot.unstable_ImmediatePriority,d0=ot.unstable_UserBlockingPriority,Ws=ot.unstable_NormalPriority,u1=ot.unstable_LowPriority,f0=ot.unstable_IdlePriority,Fa=null,Wt=null;function c1(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:h1,d1=Math.log,f1=Math.LN2;function h1(e){return e>>>=0,e===0?32:31-(d1(e)/f1|0)|0}var us=64,cs=4194304;function Ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ui(a):(o&=s,o!==0&&(r=Ui(o)))}else s=n&~i,s!==0?r=Ui(s):o!==0&&(r=Ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function p1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Mt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=p1(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function h0(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function g1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function p0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var m0,md,g0,v0,y0,Uu=!1,ds=[],xn=null,Sn=null,kn=null,lo=new Map,uo=new Map,vn=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(t.pointerId)}}function Pi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$o(t),t!==null&&md(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y1(e,t,n,r,i){switch(t){case"focusin":return xn=Pi(xn,e,t,n,r,i),!0;case"dragenter":return Sn=Pi(Sn,e,t,n,r,i),!0;case"mouseover":return kn=Pi(kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return lo.set(o,Pi(lo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,uo.set(o,Pi(uo.get(o)||null,e,t,n,r,i)),!0}return!1}function _0(e){var t=ir(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=a0(n),t!==null){e.blockedOn=t,y0(e.priority,function(){g0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fu=r,n.target.dispatchEvent(r),Fu=null}else return t=$o(n),t!==null&&md(t),e.blockedOn=n,!1;t.shift()}return!0}function dh(e,t,n){Is(e)&&n.delete(t)}function _1(){Uu=!1,xn!==null&&Is(xn)&&(xn=null),Sn!==null&&Is(Sn)&&(Sn=null),kn!==null&&Is(kn)&&(kn=null),lo.forEach(dh),uo.forEach(dh)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,Uu||(Uu=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,_1)))}function co(e){function t(i){return Ri(i,e)}if(0<ds.length){Ri(ds[0],e);for(var n=1;n<ds.length;n++){var r=ds[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Ri(xn,e),Sn!==null&&Ri(Sn,e),kn!==null&&Ri(kn,e),lo.forEach(t),uo.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&vn.shift()}var Gr=fn.ReactCurrentBatchConfig,Hs=!0;function b1(e,t,n,r){var i=G,o=Gr.transition;Gr.transition=null;try{G=1,gd(e,t,n,r)}finally{G=i,Gr.transition=o}}function w1(e,t,n,r){var i=G,o=Gr.transition;Gr.transition=null;try{G=4,gd(e,t,n,r)}finally{G=i,Gr.transition=o}}function gd(e,t,n,r){if(Hs){var i=Wu(e,t,n,r);if(i===null)Xl(e,t,r,Qs,n),ch(e,r);else if(y1(i,e,t,n,r))r.stopPropagation();else if(ch(e,r),t&4&&-1<v1.indexOf(e)){for(;i!==null;){var o=$o(i);if(o!==null&&m0(o),o=Wu(e,t,n,r),o===null&&Xl(e,t,r,Qs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var Qs=null;function Wu(e,t,n,r){if(Qs=null,e=fd(r),e=ir(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=a0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qs=e,null}function b0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case hd:return 1;case d0:return 4;case Ws:case u1:return 16;case f0:return 536870912;default:return 16}default:return 16}}var _n=null,vd=null,Ps=null;function w0(){if(Ps)return Ps;var e,t=vd,n=t.length,r,i="value"in _n?_n.value:_n.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ps=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fs(){return!0}function fh(){return!1}function dt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fs:fh,this.isPropagationStopped=fh,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fs)},persist:function(){},isPersistent:fs}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=dt(yi),Bo=ae({},yi,{view:0,detail:0}),E1=dt(Bo),Ul,Wl,Ai,za=ae({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(Ul=e.screenX-Ai.screenX,Wl=e.screenY-Ai.screenY):Wl=Ul=0,Ai=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),hh=dt(za),C1=ae({},za,{dataTransfer:0}),x1=dt(C1),S1=ae({},Bo,{relatedTarget:0}),Vl=dt(S1),k1=ae({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),N1=dt(k1),T1=ae({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=dt(T1),P1=ae({},yi,{data:0}),ph=dt(P1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O1[e])?!!t[e]:!1}function _d(){return D1}var M1=ae({},Bo,{key:function(e){if(e.key){var t=R1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=dt(M1),F1=ae({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=dt(F1),z1=ae({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),j1=dt(z1),B1=ae({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=dt(B1),U1=ae({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W1=dt(U1),V1=[9,13,27,32],bd=sn&&"CompositionEvent"in window,Ki=null;sn&&"documentMode"in document&&(Ki=document.documentMode);var H1=sn&&"TextEvent"in window&&!Ki,E0=sn&&(!bd||Ki&&8<Ki&&11>=Ki),gh=" ",vh=!1;function C0(e,t){switch(e){case"keyup":return V1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Q1(e,t){switch(e){case"compositionend":return x0(t);case"keypress":return t.which!==32?null:(vh=!0,gh);case"textInput":return e=t.data,e===gh&&vh?null:e;default:return null}}function G1(e,t){if(Dr)return e==="compositionend"||!bd&&C0(e,t)?(e=w0(),Ps=vd=_n=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return E0&&t.locale!=="ko"?null:t.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K1[e.type]:t==="textarea"}function S0(e,t,n,r){n0(r),t=Gs(t,"onChange"),0<t.length&&(n=new yd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qi=null,fo=null;function q1(e){L0(e,0)}function ja(e){var t=Fr(e);if(qm(t))return e}function Y1(e,t){if(e==="change")return t}var k0=!1;if(sn){var Hl;if(sn){var Ql="oninput"in document;if(!Ql){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Ql=typeof _h.oninput=="function"}Hl=Ql}else Hl=!1;k0=Hl&&(!document.documentMode||9<document.documentMode)}function bh(){qi&&(qi.detachEvent("onpropertychange",N0),fo=qi=null)}function N0(e){if(e.propertyName==="value"&&ja(fo)){var t=[];S0(t,fo,e,fd(e)),s0(q1,t)}}function X1(e,t,n){e==="focusin"?(bh(),qi=t,fo=n,qi.attachEvent("onpropertychange",N0)):e==="focusout"&&bh()}function Z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(fo)}function J1(e,t){if(e==="click")return ja(t)}function eb(e,t){if(e==="input"||e==="change")return ja(t)}function tb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:tb;function ho(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Su.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eh(e,t){var n=wh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wh(n)}}function T0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?T0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=Bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bs(e.document)}return t}function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nb(e){var t=I0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&T0(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Eh(n,o);var s=Eh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rb=sn&&"documentMode"in document&&11>=document.documentMode,Mr=null,Vu=null,Yi=null,Hu=!1;function Ch(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||Mr==null||Mr!==Bs(r)||(r=Mr,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&ho(Yi,r)||(Yi=r,r=Gs(Vu,"onSelect"),0<r.length&&(t=new yd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Gl={},P0={};sn&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ba(e){if(Gl[e])return Gl[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in P0)return Gl[e]=t[n];return e}var R0=Ba("animationend"),A0=Ba("animationiteration"),O0=Ba("animationstart"),D0=Ba("transitionend"),M0=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){M0.set(e,t),xr(t,[e])}for(var Kl=0;Kl<xh.length;Kl++){var ql=xh[Kl],ib=ql.toLowerCase(),ob=ql[0].toUpperCase()+ql.slice(1);Qn(ib,"on"+ob)}Qn(R0,"onAnimationEnd");Qn(A0,"onAnimationIteration");Qn(O0,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(D0,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Sh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i1(r,t,void 0,e),e.currentTarget=null}function L0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Sh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Sh(i,a,u),o=l}}}if(Us)throw e=Bu,Us=!1,Bu=null,e}function J(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var r=e+"__bubble";n.has(r)||(F0(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),F0(n,e,r,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[ps]){e[ps]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(sb.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,Yl("selectionchange",!1,t))}}function F0(e,t,n,r){switch(b0(t)){case 1:var i=b1;break;case 4:i=w1;break;default:i=gd}n=i.bind(null,t,n,e),i=void 0,!ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ir(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}s0(function(){var u=o,c=fd(n),d=[];e:{var f=M0.get(e);if(f!==void 0){var h=yd,m=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":h=L1;break;case"focusin":m="focus",h=Vl;break;case"focusout":m="blur",h=Vl;break;case"beforeblur":case"afterblur":h=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=j1;break;case R0:case A0:case O0:h=N1;break;case D0:h=$1;break;case"scroll":h=E1;break;case"wheel":h=W1;break;case"copy":case"cut":case"paste":h=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=mh}var p=(t&4)!==0,_=!p&&e==="scroll",v=p?f!==null?f+"Capture":null:f;p=[];for(var g=u,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,v!==null&&(w=ao(g,v),w!=null&&p.push(mo(g,w,y)))),_)break;g=g.return}0<p.length&&(f=new h(f,m,null,n,c),d.push({event:f,listeners:p}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Fu&&(m=n.relatedTarget||n.fromElement)&&(ir(m)||m[an]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?ir(m):null,m!==null&&(_=Sr(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(p=hh,w="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(p=mh,w="onPointerLeave",v="onPointerEnter",g="pointer"),_=h==null?f:Fr(h),y=m==null?f:Fr(m),f=new p(w,g+"leave",h,n,c),f.target=_,f.relatedTarget=y,w=null,ir(c)===u&&(p=new p(v,g+"enter",m,n,c),p.target=y,p.relatedTarget=_,w=p),_=w,h&&m)t:{for(p=h,v=m,g=0,y=p;y;y=Ir(y))g++;for(y=0,w=v;w;w=Ir(w))y++;for(;0<g-y;)p=Ir(p),g--;for(;0<y-g;)v=Ir(v),y--;for(;g--;){if(p===v||v!==null&&p===v.alternate)break t;p=Ir(p),v=Ir(v)}p=null}else p=null;h!==null&&kh(d,f,h,p,!1),m!==null&&_!==null&&kh(d,_,m,p,!0)}}e:{if(f=u?Fr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var N=Y1;else if(yh(f))if(k0)N=eb;else{N=Z1;var T=X1}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=J1);if(N&&(N=N(e,u))){S0(d,N,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Au(f,"number",f.value)}switch(T=u?Fr(u):window,e){case"focusin":(yh(T)||T.contentEditable==="true")&&(Mr=T,Vu=u,Yi=null);break;case"focusout":Yi=Vu=Mr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Ch(d,n,c);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":Ch(d,n,c)}var R;if(bd)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Dr?C0(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(E0&&n.locale!=="ko"&&(Dr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Dr&&(R=w0()):(_n=c,vd="value"in _n?_n.value:_n.textContent,Dr=!0)),T=Gs(u,O),0<T.length&&(O=new ph(O,e,null,n,c),d.push({event:O,listeners:T}),R?O.data=R:(R=x0(n),R!==null&&(O.data=R)))),(R=H1?Q1(e,n):G1(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(c=new ph("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}L0(d,t)})}function mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ao(e,n),o!=null&&r.unshift(mo(e,o,i)),o=ao(e,t),o!=null&&r.push(mo(e,o,i))),e=e.return}return r}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ao(n,o),l!=null&&s.unshift(mo(n,l,a))):i||(l=ao(n,o),l!=null&&s.push(mo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ab=/\r\n?/g,lb=/\u0000|\uFFFD/g;function Nh(e){return(typeof e=="string"?e:""+e).replace(ab,`
`).replace(lb,"")}function ms(e,t,n){if(t=Nh(t),Nh(e)!==t&&n)throw Error(x(425))}function Ks(){}var Qu=null,Gu=null;function Ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,ub=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,cb=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(e){return Th.resolve(null).then(e).catch(db)}:qu;function db(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),co(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),Ut="__reactFiber$"+_i,go="__reactProps$"+_i,an="__reactContainer$"+_i,Yu="__reactEvents$"+_i,fb="__reactListeners$"+_i,hb="__reactHandles$"+_i;function ir(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ih(e);e!==null;){if(n=e[Ut])return n;e=Ih(e)}return t}e=n,n=e.parentNode}return null}function $o(e){return e=e[Ut]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function $a(e){return e[go]||null}var Xu=[],zr=-1;function Gn(e){return{current:e}}function ee(e){0>zr||(e.current=Xu[zr],Xu[zr]=null,zr--)}function X(e,t){zr++,Xu[zr]=e.current,e.current=t}var Fn={},Fe=Gn(Fn),Ge=Gn(!1),dr=Fn;function ti(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function qs(){ee(Ge),ee(Fe)}function Ph(e,t,n){if(Fe.current!==Fn)throw Error(x(168));X(Fe,t),X(Ge,n)}function z0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,X_(e)||"Unknown",i));return ae({},n,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,dr=Fe.current,X(Fe,e),X(Ge,Ge.current),!0}function Rh(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=z0(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,ee(Ge),ee(Fe),X(Fe,e)):ee(Ge),X(Ge,n)}var Zt=null,Ua=!1,Jl=!1;function j0(e){Zt===null?Zt=[e]:Zt.push(e)}function pb(e){Ua=!0,j0(e)}function Kn(){if(!Jl&&Zt!==null){Jl=!0;var e=0,t=G;try{var n=Zt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Ua=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(e+1)),c0(hd,Kn),i}finally{G=t,Jl=!1}}return null}var jr=[],Br=0,Xs=null,Zs=0,ht=[],pt=0,fr=null,Jt=1,en="";function Jn(e,t){jr[Br++]=Zs,jr[Br++]=Xs,Xs=e,Zs=t}function B0(e,t,n){ht[pt++]=Jt,ht[pt++]=en,ht[pt++]=fr,fr=e;var r=Jt;e=en;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Jt=1<<32-Mt(t)+i|n<<i|r,en=o+e}else Jt=1<<o|n<<i|r,en=e}function Ed(e){e.return!==null&&(Jn(e,1),B0(e,1,0))}function Cd(e){for(;e===Xs;)Xs=jr[--Br],jr[Br]=null,Zs=jr[--Br],jr[Br]=null;for(;e===fr;)fr=ht[--pt],ht[pt]=null,en=ht[--pt],ht[pt]=null,Jt=ht[--pt],ht[pt]=null}var it=null,nt=null,ne=!1,Rt=null;function $0(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:Jt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function Zu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ju(e){if(ne){var t=nt;if(t){var n=t;if(!Ah(e,t)){if(Zu(e))throw Error(x(418));t=Nn(n.nextSibling);var r=it;t&&Ah(e,t)?$0(r,n):(e.flags=e.flags&-4097|2,ne=!1,it=e)}}else{if(Zu(e))throw Error(x(418));e.flags=e.flags&-4097|2,ne=!1,it=e}}}function Oh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function gs(e){if(e!==it)return!1;if(!ne)return Oh(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ku(e.type,e.memoizedProps)),t&&(t=nt)){if(Zu(e))throw U0(),Error(x(418));for(;t;)$0(e,t),t=Nn(t.nextSibling)}if(Oh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?Nn(e.stateNode.nextSibling):null;return!0}function U0(){for(var e=nt;e;)e=Nn(e.nextSibling)}function ni(){nt=it=null,ne=!1}function xd(e){Rt===null?Rt=[e]:Rt.push(e)}var mb=fn.ReactCurrentBatchConfig;function Oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vs(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dh(e){var t=e._init;return t(e._payload)}function W0(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Rn(v,g),v.index=0,v.sibling=null,v}function o(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,g,y,w){return g===null||g.tag!==6?(g=su(y,v.mode,w),g.return=v,g):(g=i(g,y),g.return=v,g)}function l(v,g,y,w){var N=y.type;return N===Or?c(v,g,y.props.children,w,y.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mn&&Dh(N)===g.type)?(w=i(g,y.props),w.ref=Oi(v,g,y),w.return=v,w):(w=zs(y.type,y.key,y.props,null,v.mode,w),w.ref=Oi(v,g,y),w.return=v,w)}function u(v,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=au(y,v.mode,w),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function c(v,g,y,w,N){return g===null||g.tag!==7?(g=ur(y,v.mode,w,N),g.return=v,g):(g=i(g,y),g.return=v,g)}function d(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=su(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ss:return y=zs(g.type,g.key,g.props,null,v.mode,y),y.ref=Oi(v,null,g),y.return=v,y;case Ar:return g=au(g,v.mode,y),g.return=v,g;case mn:var w=g._init;return d(v,w(g._payload),y)}if($i(g)||Ti(g))return g=ur(g,v.mode,y,null),g.return=v,g;vs(v,g)}return null}function f(v,g,y,w){var N=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:a(v,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ss:return y.key===N?l(v,g,y,w):null;case Ar:return y.key===N?u(v,g,y,w):null;case mn:return N=y._init,f(v,g,N(y._payload),w)}if($i(y)||Ti(y))return N!==null?null:c(v,g,y,w,null);vs(v,y)}return null}function h(v,g,y,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(y)||null,a(g,v,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ss:return v=v.get(w.key===null?y:w.key)||null,l(g,v,w,N);case Ar:return v=v.get(w.key===null?y:w.key)||null,u(g,v,w,N);case mn:var T=w._init;return h(v,g,y,T(w._payload),N)}if($i(w)||Ti(w))return v=v.get(y)||null,c(g,v,w,N,null);vs(g,w)}return null}function m(v,g,y,w){for(var N=null,T=null,R=g,O=g=0,H=null;R!==null&&O<y.length;O++){R.index>O?(H=R,R=null):H=R.sibling;var U=f(v,R,y[O],w);if(U===null){R===null&&(R=H);break}e&&R&&U.alternate===null&&t(v,R),g=o(U,g,O),T===null?N=U:T.sibling=U,T=U,R=H}if(O===y.length)return n(v,R),ne&&Jn(v,O),N;if(R===null){for(;O<y.length;O++)R=d(v,y[O],w),R!==null&&(g=o(R,g,O),T===null?N=R:T.sibling=R,T=R);return ne&&Jn(v,O),N}for(R=r(v,R);O<y.length;O++)H=h(R,v,O,y[O],w),H!==null&&(e&&H.alternate!==null&&R.delete(H.key===null?O:H.key),g=o(H,g,O),T===null?N=H:T.sibling=H,T=H);return e&&R.forEach(function(St){return t(v,St)}),ne&&Jn(v,O),N}function p(v,g,y,w){var N=Ti(y);if(typeof N!="function")throw Error(x(150));if(y=N.call(y),y==null)throw Error(x(151));for(var T=N=null,R=g,O=g=0,H=null,U=y.next();R!==null&&!U.done;O++,U=y.next()){R.index>O?(H=R,R=null):H=R.sibling;var St=f(v,R,U.value,w);if(St===null){R===null&&(R=H);break}e&&R&&St.alternate===null&&t(v,R),g=o(St,g,O),T===null?N=St:T.sibling=St,T=St,R=H}if(U.done)return n(v,R),ne&&Jn(v,O),N;if(R===null){for(;!U.done;O++,U=y.next())U=d(v,U.value,w),U!==null&&(g=o(U,g,O),T===null?N=U:T.sibling=U,T=U);return ne&&Jn(v,O),N}for(R=r(v,R);!U.done;O++,U=y.next())U=h(R,v,O,U.value,w),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?O:U.key),g=o(U,g,O),T===null?N=U:T.sibling=U,T=U);return e&&R.forEach(function(ki){return t(v,ki)}),ne&&Jn(v,O),N}function _(v,g,y,w){if(typeof y=="object"&&y!==null&&y.type===Or&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ss:e:{for(var N=y.key,T=g;T!==null;){if(T.key===N){if(N=y.type,N===Or){if(T.tag===7){n(v,T.sibling),g=i(T,y.props.children),g.return=v,v=g;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mn&&Dh(N)===T.type){n(v,T.sibling),g=i(T,y.props),g.ref=Oi(v,T,y),g.return=v,v=g;break e}n(v,T);break}else t(v,T);T=T.sibling}y.type===Or?(g=ur(y.props.children,v.mode,w,y.key),g.return=v,v=g):(w=zs(y.type,y.key,y.props,null,v.mode,w),w.ref=Oi(v,g,y),w.return=v,v=w)}return s(v);case Ar:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=au(y,v.mode,w),g.return=v,v=g}return s(v);case mn:return T=y._init,_(v,g,T(y._payload),w)}if($i(y))return m(v,g,y,w);if(Ti(y))return p(v,g,y,w);vs(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,y),g.return=v,v=g):(n(v,g),g=su(y,v.mode,w),g.return=v,v=g),s(v)):n(v,g)}return _}var ri=W0(!0),V0=W0(!1),Js=Gn(null),ea=null,$r=null,Sd=null;function kd(){Sd=$r=ea=null}function Nd(e){var t=Js.current;ee(Js),e._currentValue=t}function ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kr(e,t){ea=e,Sd=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Sd!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(ea===null)throw Error(x(308));$r=e,ea.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var or=null;function Td(e){or===null?or=[e]:or.push(e)}function H0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Td(t)):(n.next=i.next,i.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function Id(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ln(e,n)}return i=r.interleaved,i===null?(t.next=t,Td(r)):(t.next=i.next,i.next=t),r.interleaved=t,ln(e,n)}function As(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pd(e,n)}}function Mh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ta(e,t,n,r){var i=e.updateQueue;gn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,p=a;switch(f=t,h=n,p.tag){case 1:if(m=p.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=p.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=ae({},d,f);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=s,e.lanes=s,e.memoizedState=d}}function Lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Uo={},Vt=Gn(Uo),vo=Gn(Uo),yo=Gn(Uo);function sr(e){if(e===Uo)throw Error(x(174));return e}function Pd(e,t){switch(X(yo,t),X(vo,e),X(Vt,Uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Du(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Du(t,e)}ee(Vt),X(Vt,t)}function ii(){ee(Vt),ee(vo),ee(yo)}function G0(e){sr(yo.current);var t=sr(Vt.current),n=Du(t,e.type);t!==n&&(X(vo,e),X(Vt,n))}function Rd(e){vo.current===e&&(ee(Vt),ee(vo))}var ie=Gn(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eu=[];function Ad(){for(var e=0;e<eu.length;e++)eu[e]._workInProgressVersionPrimary=null;eu.length=0}var Os=fn.ReactCurrentDispatcher,tu=fn.ReactCurrentBatchConfig,hr=0,se=null,fe=null,ye=null,ra=!1,Xi=!1,_o=0,gb=0;function Oe(){throw Error(x(321))}function Od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Dd(e,t,n,r,i,o){if(hr=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Os.current=e===null||e.memoizedState===null?bb:wb,e=n(r,i),Xi){o=0;do{if(Xi=!1,_o=0,25<=o)throw Error(x(301));o+=1,ye=fe=null,t.updateQueue=null,Os.current=Eb,e=n(r,i)}while(Xi)}if(Os.current=ia,t=fe!==null&&fe.next!==null,hr=0,ye=fe=se=null,ra=!1,t)throw Error(x(300));return e}function Md(){var e=_o!==0;return _o=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function Ct(){if(fe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,fe=e;else{if(e===null)throw Error(x(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function bo(e,t){return typeof t=="function"?t(e):t}function nu(e){var t=Ct(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,se.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,zt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ru(e){var t=Ct(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zt(o,t.memoizedState)||(He=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function K0(){}function q0(e,t){var n=se,r=Ct(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,He=!0),r=r.queue,Ld(Z0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,wo(9,X0.bind(null,n,r,i,t),void 0,null),Ee===null)throw Error(x(349));hr&30||Y0(n,t,i)}return i}function Y0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function X0(e,t,n,r){t.value=n,t.getSnapshot=r,J0(t)&&eg(e)}function Z0(e,t,n){return n(function(){J0(t)&&eg(e)})}function J0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function eg(e){var t=ln(e,1);t!==null&&Lt(t,e,1,-1)}function Fh(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=_b.bind(null,se,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tg(){return Ct().memoizedState}function Ds(e,t,n,r){var i=$t();se.flags|=e,i.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function Wa(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(fe!==null){var s=fe.memoizedState;if(o=s.destroy,r!==null&&Od(r,s.deps)){i.memoizedState=wo(t,n,o,r);return}}se.flags|=e,i.memoizedState=wo(1|t,n,o,r)}function zh(e,t){return Ds(8390656,8,e,t)}function Ld(e,t){return Wa(2048,8,e,t)}function ng(e,t){return Wa(4,2,e,t)}function rg(e,t){return Wa(4,4,e,t)}function ig(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function og(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4,4,ig.bind(null,t,e),n)}function Fd(){}function sg(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ag(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lg(e,t,n){return hr&21?(zt(n,t)||(n=h0(),se.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function vb(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=tu.transition;tu.transition={};try{e(!1),t()}finally{G=n,tu.transition=r}}function ug(){return Ct().memoizedState}function yb(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cg(e))dg(t,n);else if(n=H0(e,t,n,r),n!==null){var i=Be();Lt(n,e,r,i),fg(n,t,r)}}function _b(e,t,n){var r=Pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cg(e))dg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,s)){var l=t.interleaved;l===null?(i.next=i,Td(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=H0(e,t,i,r),n!==null&&(i=Be(),Lt(n,e,r,i),fg(n,t,r))}}function cg(e){var t=e.alternate;return e===se||t!==null&&t===se}function dg(e,t){Xi=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pd(e,n)}}var ia={readContext:Et,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},bb={readContext:Et,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:zh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4194308,4,ig.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yb.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Fh,useDebugValue:Fd,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Fh(!1),t=e[0];return e=vb.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=$t();if(ne){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),Ee===null)throw Error(x(349));hr&30||Y0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,zh(Z0.bind(null,r,o,e),[e]),r.flags|=2048,wo(9,X0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ee.identifierPrefix;if(ne){var n=en,r=Jt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_o++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wb={readContext:Et,useCallback:sg,useContext:Et,useEffect:Ld,useImperativeHandle:og,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:ag,useReducer:nu,useRef:tg,useState:function(){return nu(bo)},useDebugValue:Fd,useDeferredValue:function(e){var t=Ct();return lg(t,fe.memoizedState,e)},useTransition:function(){var e=nu(bo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:K0,useSyncExternalStore:q0,useId:ug,unstable_isNewReconciler:!1},Eb={readContext:Et,useCallback:sg,useContext:Et,useEffect:Ld,useImperativeHandle:og,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:ag,useReducer:ru,useRef:tg,useState:function(){return ru(bo)},useDebugValue:Fd,useDeferredValue:function(e){var t=Ct();return fe===null?t.memoizedState=e:lg(t,fe.memoizedState,e)},useTransition:function(){var e=ru(bo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:K0,useSyncExternalStore:q0,useId:ug,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Pn(e),o=nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tn(e,o,i),t!==null&&(Lt(t,e,i,r),As(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Pn(e),o=nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tn(e,o,i),t!==null&&(Lt(t,e,i,r),As(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=Pn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tn(e,i,r),t!==null&&(Lt(t,e,r,n),As(t,e,r))}};function jh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ho(n,r)||!ho(i,o):!0}function hg(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=Ke(t)?dr:Fe.current,r=t.contextTypes,o=(r=r!=null)?ti(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function nc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Id(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=Ke(t)?dr:Fe.current,i.context=ti(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Va.enqueueReplaceState(i,i.state,null),ta(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t){try{var n="",r=t;do n+=Y_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function iu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cb=typeof WeakMap=="function"?WeakMap:Map;function pg(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,hc=r),rc(e,t)},n}function mg(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rc(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function $h(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fb.bind(null,e,t,n),t.then(e,e))}function Uh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e)}var xb=fn.ReactCurrentOwner,He=!1;function ze(e,t,n,r){t.child=e===null?V0(t,null,n,r):ri(t,e.child,n,r)}function Vh(e,t,n,r,i){n=n.render;var o=t.ref;return Kr(t,i),r=Dd(e,t,n,r,o,i),n=Md(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ne&&n&&Ed(t),t.flags|=1,ze(e,t,r,i),t.child)}function Hh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Hd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gg(e,t,o,r,i)):(e=zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(s,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=Rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function gg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ho(o,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,un(e,t,i)}return ic(e,t,n,r,i)}function vg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Wr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Wr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(Wr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(Wr,et),et|=r;return ze(e,t,i,n),t.child}function yg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ic(e,t,n,r,i){var o=Ke(n)?dr:Fe.current;return o=ti(t,o),Kr(t,i),n=Dd(e,t,n,r,o,i),r=Md(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ne&&r&&Ed(t),t.flags|=1,ze(e,t,n,i),t.child)}function Qh(e,t,n,r,i){if(Ke(n)){var o=!0;Ys(t)}else o=!1;if(Kr(t,i),t.stateNode===null)Ms(e,t),hg(t,n,r),nc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=Ke(n)?dr:Fe.current,u=ti(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bh(t,s,r,u),gn=!1;var f=t.memoizedState;s.state=f,ta(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ge.current||gn?(typeof c=="function"&&(tc(t,n,c,r),l=t.memoizedState),(a=gn||jh(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Q0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:It(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=Ke(n)?dr:Fe.current,l=ti(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Bh(t,s,r,l),gn=!1,f=t.memoizedState,s.state=f,ta(t,r,s,i);var m=t.memoizedState;a!==d||f!==m||Ge.current||gn?(typeof h=="function"&&(tc(t,n,h,r),m=t.memoizedState),(u=gn||jh(t,n,u,r,f,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return oc(e,t,n,r,o,i)}function oc(e,t,n,r,i,o){yg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Rh(t,n,!1),un(e,t,o);r=t.stateNode,xb.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ri(t,e.child,null,o),t.child=ri(t,null,a,o)):ze(e,t,a,o),t.memoizedState=r.state,i&&Rh(t,n,!0),t.child}function _g(e){var t=e.stateNode;t.pendingContext?Ph(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ph(e,t.context,!1),Pd(e,t.containerInfo)}function Gh(e,t,n,r,i){return ni(),xd(i),t.flags|=256,ze(e,t,n,r),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function bg(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ie,i&1),e===null)return Ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ga(s,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ac(n),t.memoizedState=sc,e):zd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sb(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Rn(a,o):(o=ur(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ac(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=sc,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zd(e,t){return t=Ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,n,r){return r!==null&&xd(r),ri(t,e.child,null,n),e=zd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sb(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=iu(Error(x(422))),ys(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ga({mode:"visible",children:r.children},i,0,null),o=ur(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ri(t,e.child,null,s),t.child.memoizedState=ac(s),t.memoizedState=sc,o);if(!(t.mode&1))return ys(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(x(419)),r=iu(o,r,void 0),ys(e,t,s,r)}if(a=(s&e.childLanes)!==0,He||a){if(r=Ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ln(e,i),Lt(r,e,i,-1))}return Vd(),r=iu(Error(x(421))),ys(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=Nn(i.nextSibling),it=t,ne=!0,Rt=null,e!==null&&(ht[pt++]=Jt,ht[pt++]=en,ht[pt++]=fr,Jt=e.id,en=e.overflow,fr=t),t=zd(t,r.children),t.flags|=4096,t)}function Kh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ec(e.return,t,n)}function ou(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kh(e,n,t);else if(e.tag===19)Kh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ou(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ou(t,!0,n,null,o);break;case"together":ou(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kb(e,t,n){switch(t.tag){case 3:_g(t),ni();break;case 5:G0(t);break;case 1:Ke(t.type)&&Ys(t);break;case 4:Pd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?bg(e,t,n):(X(ie,ie.current&1),e=un(e,t,n),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,vg(e,t,n)}return un(e,t,n)}var Eg,lc,Cg,xg;Eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lc=function(){};Cg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(Vt.current);var o=null;switch(n){case"input":i=Pu(e,i),r=Pu(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=Ou(e,i),r=Ou(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}Mu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};xg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Di(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nb(e,t,n){var r=t.pendingProps;switch(Cd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Ke(t.type)&&qs(),De(t),null;case 3:return r=t.stateNode,ii(),ee(Ge),ee(Fe),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(gc(Rt),Rt=null))),lc(e,t),De(t),null;case 5:Rd(t);var i=sr(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)Cg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return De(t),null}if(e=sr(Vt.current),gs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ut]=t,r[go]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":rh(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":oh(r,o),J("invalid",r)}Mu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ms(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ms(r.textContent,a,e),i=["children",""+a]):oo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&J("scroll",r)}switch(n){case"input":as(r),ih(r,o,!0);break;case"textarea":as(r),sh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ut]=t,e[go]=r,Eg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Lu(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":rh(e,r),i=Pu(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),J("invalid",e);break;case"textarea":oh(e,r),i=Ou(e,r),J("invalid",e);break;default:i=r}Mu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?t0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(e,l):typeof l=="number"&&so(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&J("scroll",e):l!=null&&ld(e,o,l,s))}switch(n){case"input":as(e),ih(e,r,!1);break;case"textarea":as(e),sh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)xg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=sr(yo.current),sr(Vt.current),gs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ms(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return De(t),null;case 13:if(ee(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&nt!==null&&t.mode&1&&!(t.flags&128))U0(),ni(),t.flags|=98560,o=!1;else if(o=gs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ut]=t}else ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),o=!1}else Rt!==null&&(gc(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?pe===0&&(pe=3):Vd())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return ii(),lc(e,t),e===null&&po(t.stateNode.containerInfo),De(t),null;case 10:return Nd(t.type._context),De(t),null;case 17:return Ke(t.type)&&qs(),De(t),null;case 19:if(ee(ie),o=t.memoizedState,o===null)return De(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Di(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=na(e),s!==null){for(t.flags|=128,Di(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ce()>si&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304)}else{if(!r)if(e=na(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return De(t),null}else 2*ce()-o.renderingStartTime>si&&n!==1073741824&&(t.flags|=128,r=!0,Di(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ce(),t.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return Wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Tb(e,t){switch(Cd(t),t.tag){case 1:return Ke(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ii(),ee(Ge),ee(Fe),Ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rd(t),null;case 13:if(ee(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ie),null;case 4:return ii(),null;case 10:return Nd(t.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var _s=!1,Me=!1,Ib=typeof WeakSet=="function"?WeakSet:Set,I=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function uc(e,t,n){try{n()}catch(r){le(e,t,r)}}var qh=!1;function Pb(e,t){if(Qu=Hs,e=I0(),wd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gu={focusedElem:e,selectionRange:n},Hs=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var p=m.memoizedProps,_=m.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?p:It(t.type,p),_);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return m=qh,qh=!1,m}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&uc(t,n,o)}i=i.next}while(i!==r)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sg(e){var t=e.alternate;t!==null&&(e.alternate=null,Sg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[go],delete t[Yu],delete t[fb],delete t[hb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kg(e){return e.tag===5||e.tag===3||e.tag===4}function Yh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}var Ie=null,Pt=!1;function hn(e,t,n){for(n=n.child;n!==null;)Ng(e,t,n),n=n.sibling}function Ng(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Me||Ur(n,t);case 6:var r=Ie,i=Pt;Ie=null,hn(e,t,n),Ie=r,Pt=i,Ie!==null&&(Pt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Pt?(e=Ie,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),co(e)):Zl(Ie,n.stateNode));break;case 4:r=Ie,i=Pt,Ie=n.stateNode.containerInfo,Pt=!0,hn(e,t,n),Ie=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&uc(n,t,s),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Me&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,hn(e,t,n),Me=r):hn(e,t,n);break;default:hn(e,t,n)}}function Xh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ib),t.forEach(function(r){var i=jb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,Pt=!1;break e;case 3:Ie=a.stateNode.containerInfo,Pt=!0;break e;case 4:Ie=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Ie===null)throw Error(x(160));Ng(o,s,i),Ie=null,Pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Bt(e),r&4){try{Zi(3,e,e.return),Ha(3,e)}catch(p){le(e,e.return,p)}try{Zi(5,e,e.return)}catch(p){le(e,e.return,p)}}break;case 1:kt(t,e),Bt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(kt(t,e),Bt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var i=e.stateNode;try{so(i,"")}catch(p){le(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ym(i,o),Lu(a,s);var u=Lu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?t0(i,d):c==="dangerouslySetInnerHTML"?Jm(i,d):c==="children"?so(i,d):ld(i,c,d,u)}switch(a){case"input":Ru(i,o);break;case"textarea":Xm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Vr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Vr(i,!!o.multiple,o.defaultValue,!0):Vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[go]=o}catch(p){le(e,e.return,p)}}break;case 6:if(kt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){le(e,e.return,p)}}break;case 3:if(kt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(p){le(e,e.return,p)}break;case 4:kt(t,e),Bt(e);break;case 13:kt(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($d=ce())),r&4&&Xh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||c,kt(t,e),Me=u):kt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(d=I=c;I!==null;){switch(f=I,h=f.child,f.tag){case 0:case 11:case 14:case 15:Zi(4,f,f.return);break;case 1:Ur(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(p){le(r,n,p)}}break;case 5:Ur(f,f.return);break;case 22:if(f.memoizedState!==null){Jh(d);continue}}h!==null?(h.return=f,I=h):Jh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",s))}catch(p){le(e,e.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){le(e,e.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),Bt(e),r&4&&Xh(e);break;case 21:break;default:kt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(so(i,""),r.flags&=-33);var o=Yh(e);fc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Yh(e);dc(e,a,s);break;default:throw Error(x(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rb(e,t,n){I=e,Ig(e)}function Ig(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_s;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=_s;var u=Me;if(_s=s,(Me=l)&&!u)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?ep(i):l!==null?(l.return=s,I=l):ep(i);for(;o!==null;)I=o,Ig(o),o=o.sibling;I=i,_s=a,Me=u}Zh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):Zh(e)}}function Zh(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Me||t.flags&512&&cc(t)}catch(f){le(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Jh(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function ep(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(l){le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){le(t,i,l)}}var o=t.return;try{cc(t)}catch(l){le(t,o,l)}break;case 5:var s=t.return;try{cc(t)}catch(l){le(t,s,l)}}}catch(l){le(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var Ab=Math.ceil,oa=fn.ReactCurrentDispatcher,jd=fn.ReactCurrentOwner,bt=fn.ReactCurrentBatchConfig,W=0,Ee=null,de=null,Pe=0,et=0,Wr=Gn(0),pe=0,Eo=null,pr=0,Qa=0,Bd=0,Ji=null,We=null,$d=0,si=1/0,Xt=null,sa=!1,hc=null,In=null,bs=!1,bn=null,aa=0,eo=0,pc=null,Ls=-1,Fs=0;function Be(){return W&6?ce():Ls!==-1?Ls:Ls=ce()}function Pn(e){return e.mode&1?W&2&&Pe!==0?Pe&-Pe:mb.transition!==null?(Fs===0&&(Fs=h0()),Fs):(e=G,e!==0||(e=window.event,e=e===void 0?16:b0(e.type)),e):1}function Lt(e,t,n,r){if(50<eo)throw eo=0,pc=null,Error(x(185));jo(e,n,r),(!(W&2)||e!==Ee)&&(e===Ee&&(!(W&2)&&(Qa|=n),pe===4&&yn(e,Pe)),qe(e,r),n===1&&W===0&&!(t.mode&1)&&(si=ce()+500,Ua&&Kn()))}function qe(e,t){var n=e.callbackNode;m1(e,t);var r=Vs(e,e===Ee?Pe:0);if(r===0)n!==null&&uh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uh(n),t===1)e.tag===0?pb(tp.bind(null,e)):j0(tp.bind(null,e)),cb(function(){!(W&6)&&Kn()}),n=null;else{switch(p0(r)){case 1:n=hd;break;case 4:n=d0;break;case 16:n=Ws;break;case 536870912:n=f0;break;default:n=Ws}n=Fg(n,Pg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pg(e,t){if(Ls=-1,Fs=0,W&6)throw Error(x(327));var n=e.callbackNode;if(qr()&&e.callbackNode!==n)return null;var r=Vs(e,e===Ee?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=la(e,r);else{t=r;var i=W;W|=2;var o=Ag();(Ee!==e||Pe!==t)&&(Xt=null,si=ce()+500,lr(e,t));do try{Mb();break}catch(a){Rg(e,a)}while(!0);kd(),oa.current=o,W=i,de!==null?t=0:(Ee=null,Pe=0,t=pe)}if(t!==0){if(t===2&&(i=$u(e),i!==0&&(r=i,t=mc(e,i))),t===1)throw n=Eo,lr(e,0),yn(e,r),qe(e,ce()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ob(i)&&(t=la(e,r),t===2&&(o=$u(e),o!==0&&(r=o,t=mc(e,o))),t===1))throw n=Eo,lr(e,0),yn(e,r),qe(e,ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:er(e,We,Xt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=$d+500-ce(),10<t)){if(Vs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qu(er.bind(null,e,We,Xt),t);break}er(e,We,Xt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Mt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ab(r/1960))-r,10<r){e.timeoutHandle=qu(er.bind(null,e,We,Xt),r);break}er(e,We,Xt);break;case 5:er(e,We,Xt);break;default:throw Error(x(329))}}}return qe(e,ce()),e.callbackNode===n?Pg.bind(null,e):null}function mc(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=la(e,t),e!==2&&(t=We,We=n,t!==null&&gc(t)),e}function gc(e){We===null?We=e:We.push.apply(We,e)}function Ob(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~Bd,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function tp(e){if(W&6)throw Error(x(327));qr();var t=Vs(e,0);if(!(t&1))return qe(e,ce()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=$u(e);r!==0&&(t=r,n=mc(e,r))}if(n===1)throw n=Eo,lr(e,0),yn(e,t),qe(e,ce()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,We,Xt),qe(e,ce()),null}function Ud(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(si=ce()+500,Ua&&Kn())}}function mr(e){bn!==null&&bn.tag===0&&!(W&6)&&qr();var t=W;W|=1;var n=bt.transition,r=G;try{if(bt.transition=null,G=1,e)return e()}finally{G=r,bt.transition=n,W=t,!(W&6)&&Kn()}}function Wd(){et=Wr.current,ee(Wr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ub(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:ii(),ee(Ge),ee(Fe),Ad();break;case 5:Rd(r);break;case 4:ii();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Nd(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(Ee=e,de=e=Rn(e.current,null),Pe=et=t,pe=0,Eo=null,Bd=Qa=pr=0,We=Ji=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}or=null}return e}function Rg(e,t){do{var n=de;try{if(kd(),Os.current=ia,ra){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ra=!1}if(hr=0,ye=fe=se=null,Xi=!1,_o=0,jd.current=null,n===null||n.return===null){pe=1,Eo=t,de=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Uh(s);if(h!==null){h.flags&=-257,Wh(h,s,a,o,t),h.mode&1&&$h(o,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var p=new Set;p.add(l),t.updateQueue=p}else m.add(l);break e}else{if(!(t&1)){$h(o,u,t),Vd();break e}l=Error(x(426))}}else if(ne&&a.mode&1){var _=Uh(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Wh(_,s,a,o,t),xd(oi(l,a));break e}}o=l=oi(l,a),pe!==4&&(pe=2),Ji===null?Ji=[o]:Ji.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=pg(o,l,t);Mh(o,v);break e;case 1:a=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(In===null||!In.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=mg(o,a,t);Mh(o,w);break e}}o=o.return}while(o!==null)}Dg(n)}catch(N){t=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Ag(){var e=oa.current;return oa.current=ia,e===null?ia:e}function Vd(){(pe===0||pe===3||pe===2)&&(pe=4),Ee===null||!(pr&268435455)&&!(Qa&268435455)||yn(Ee,Pe)}function la(e,t){var n=W;W|=2;var r=Ag();(Ee!==e||Pe!==t)&&(Xt=null,lr(e,t));do try{Db();break}catch(i){Rg(e,i)}while(!0);if(kd(),W=n,oa.current=r,de!==null)throw Error(x(261));return Ee=null,Pe=0,pe}function Db(){for(;de!==null;)Og(de)}function Mb(){for(;de!==null&&!s1();)Og(de)}function Og(e){var t=Lg(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Dg(e):de=t,jd.current=null}function Dg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tb(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}else if(n=Nb(n,t,et),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function er(e,t,n){var r=G,i=bt.transition;try{bt.transition=null,G=1,Lb(e,t,n,r)}finally{bt.transition=i,G=r}return null}function Lb(e,t,n,r){do qr();while(bn!==null);if(W&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(g1(e,o),e===Ee&&(de=Ee=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bs||(bs=!0,Fg(Ws,function(){return qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bt.transition,bt.transition=null;var s=G;G=1;var a=W;W|=4,jd.current=null,Pb(e,n),Tg(n,e),nb(Gu),Hs=!!Qu,Gu=Qu=null,e.current=n,Rb(n),a1(),W=a,G=s,bt.transition=o}else e.current=n;if(bs&&(bs=!1,bn=e,aa=i),o=e.pendingLanes,o===0&&(In=null),c1(n.stateNode),qe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=hc,hc=null,e;return aa&1&&e.tag!==0&&qr(),o=e.pendingLanes,o&1?e===pc?eo++:(eo=0,pc=e):eo=0,Kn(),null}function qr(){if(bn!==null){var e=p0(aa),t=bt.transition,n=G;try{if(bt.transition=null,G=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,aa=0,W&6)throw Error(x(331));var i=W;for(W|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Zi(8,c,o)}var d=c.child;if(d!==null)d.return=c,I=d;else for(;I!==null;){c=I;var f=c.sibling,h=c.return;if(Sg(c),c===u){I=null;break}if(f!==null){f.return=h,I=f;break}I=h}}}var m=o.alternate;if(m!==null){var p=m.child;if(p!==null){m.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}var g=e.current;for(I=g;I!==null;){s=I;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,I=y;else e:for(s=g;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ha(9,a)}}catch(N){le(a,a.return,N)}if(a===s){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(W=i,Kn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{G=n,bt.transition=t}}return!1}function np(e,t,n){t=oi(n,t),t=pg(e,t,1),e=Tn(e,t,1),t=Be(),e!==null&&(jo(e,1,t),qe(e,t))}function le(e,t,n){if(e.tag===3)np(e,e,n);else for(;t!==null;){if(t.tag===3){np(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=oi(n,e),e=mg(t,e,1),t=Tn(t,e,1),e=Be(),t!==null&&(jo(t,1,e),qe(t,e));break}}t=t.return}}function Fb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Pe&n)===n&&(pe===4||pe===3&&(Pe&130023424)===Pe&&500>ce()-$d?lr(e,0):Bd|=n),qe(e,t)}function Mg(e,t){t===0&&(e.mode&1?(t=cs,cs<<=1,!(cs&130023424)&&(cs=4194304)):t=1);var n=Be();e=ln(e,t),e!==null&&(jo(e,t,n),qe(e,n))}function zb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mg(e,n)}function jb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Mg(e,n)}var Lg;Lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,kb(e,t,n);He=!!(e.flags&131072)}else He=!1,ne&&t.flags&1048576&&B0(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ms(e,t),e=t.pendingProps;var i=ti(t,Fe.current);Kr(t,n),i=Dd(null,t,r,e,i,n);var o=Md();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,Ys(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(t),i.updater=Va,t.stateNode=i,i._reactInternals=t,nc(t,r,e,n),t=oc(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&Ed(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$b(r),e=It(r,e),i){case 0:t=ic(null,t,r,e,n);break e;case 1:t=Qh(null,t,r,e,n);break e;case 11:t=Vh(null,t,r,e,n);break e;case 14:t=Hh(null,t,r,It(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),ic(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Qh(e,t,r,i,n);case 3:e:{if(_g(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Q0(e,t),ta(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=oi(Error(x(423)),t),t=Gh(e,t,r,n,i);break e}else if(r!==i){i=oi(Error(x(424)),t),t=Gh(e,t,r,n,i);break e}else for(nt=Nn(t.stateNode.containerInfo.firstChild),it=t,ne=!0,Rt=null,n=V0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){t=un(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return G0(t),e===null&&Ju(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ku(r,i)?s=null:o!==null&&Ku(r,o)&&(t.flags|=32),yg(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&Ju(t),null;case 13:return bg(e,t,n);case 4:return Pd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ri(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Vh(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,X(Js,r._currentValue),r._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!Ge.current){t=un(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=nn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ec(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(x(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ec(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kr(t,n),i=Et(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=It(r,t.pendingProps),i=It(r.type,i),Hh(e,t,r,i,n);case 15:return gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Ms(e,t),t.tag=1,Ke(r)?(e=!0,Ys(t)):e=!1,Kr(t,n),hg(t,r,i),nc(t,r,i,n),oc(null,t,r,!0,e,n);case 19:return wg(e,t,n);case 22:return vg(e,t,n)}throw Error(x(156,t.tag))};function Fg(e,t){return c0(e,t)}function Bb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Bb(e,t,n,r)}function Hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $b(e){if(typeof e=="function")return Hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cd)return 11;if(e===dd)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Hd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Or:return ur(n.children,i,o,t);case ud:s=8,i|=8;break;case ku:return e=vt(12,n,t,i|2),e.elementType=ku,e.lanes=o,e;case Nu:return e=vt(13,n,t,i),e.elementType=Nu,e.lanes=o,e;case Tu:return e=vt(19,n,t,i),e.elementType=Tu,e.lanes=o,e;case Gm:return Ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hm:s=10;break e;case Qm:s=9;break e;case cd:s=11;break e;case dd:s=14;break e;case mn:s=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=vt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Ga(e,t,n,r){return e=vt(22,e,r,t),e.elementType=Gm,e.lanes=n,e.stateNode={isHidden:!1},e}function su(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ub(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qd(e,t,n,r,i,o,s,a,l){return e=new Ub(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(o),e}function Wb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zg(e){if(!e)return Fn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Ke(n))return z0(e,n,t)}return t}function jg(e,t,n,r,i,o,s,a,l){return e=Qd(n,r,!0,e,i,o,s,a,l),e.context=zg(null),n=e.current,r=Be(),i=Pn(n),o=nn(r,i),o.callback=t??null,Tn(n,o,i),e.current.lanes=i,jo(e,i,r),qe(e,r),e}function Ka(e,t,n,r){var i=t.current,o=Be(),s=Pn(i);return n=zg(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(i,t,s),e!==null&&(Lt(e,i,s,o),As(e,i,s)),s}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gd(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function Vb(){return null}var Bg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kd(e){this._internalRoot=e}qa.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Ka(e,t,null,null)};qa.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Ka(null,e,null,null)}),t[an]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=v0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&_0(e)}};function qd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Hb(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ua(s);o.call(u)}}var s=jg(t,r,e,0,null,!1,!1,"",ip);return e._reactRootContainer=s,e[an]=s.current,po(e.nodeType===8?e.parentNode:e),mr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ua(l);a.call(u)}}var l=Qd(e,0,!1,null,null,!1,!1,"",ip);return e._reactRootContainer=l,e[an]=l.current,po(e.nodeType===8?e.parentNode:e),mr(function(){Ka(t,l,n,r)}),l}function Xa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ua(s);a.call(l)}}Ka(t,s,e,i)}else s=Hb(n,t,e,i,r);return ua(s)}m0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ui(t.pendingLanes);n!==0&&(pd(t,n|1),qe(t,ce()),!(W&6)&&(si=ce()+500,Kn()))}break;case 13:mr(function(){var r=ln(e,1);if(r!==null){var i=Be();Lt(r,e,1,i)}}),Gd(e,1)}};md=function(e){if(e.tag===13){var t=ln(e,134217728);if(t!==null){var n=Be();Lt(t,e,134217728,n)}Gd(e,134217728)}};g0=function(e){if(e.tag===13){var t=Pn(e),n=ln(e,t);if(n!==null){var r=Be();Lt(n,e,t,r)}Gd(e,t)}};v0=function(){return G};y0=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};zu=function(e,t,n){switch(t){case"input":if(Ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$a(r);if(!i)throw Error(x(90));qm(r),Ru(r,i)}}}break;case"textarea":Xm(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};i0=Ud;o0=mr;var Qb={usingClientEntryPoint:!1,Events:[$o,Fr,$a,n0,r0,Ud]},Mi={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gb={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=l0(e),e===null?null:e.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||Vb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Fa=ws.inject(Gb),Wt=ws}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(t))throw Error(x(200));return Wb(e,t,null,n)};ct.createRoot=function(e,t){if(!qd(e))throw Error(x(299));var n=!1,r="",i=Bg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qd(e,1,!1,null,null,n,!1,r,i),e[an]=t.current,po(e.nodeType===8?e.parentNode:e),new Kd(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=l0(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return mr(e)};ct.hydrate=function(e,t,n){if(!Ya(t))throw Error(x(200));return Xa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!qd(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Bg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jg(t,null,e,1,n??null,i,!1,o,s),e[an]=t.current,po(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qa(t)};ct.render=function(e,t,n){if(!Ya(t))throw Error(x(200));return Xa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(x(40));return e._reactRootContainer?(mr(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};ct.unstable_batchedUpdates=Ud;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ya(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Xa(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(e){console.error(e)}}$g(),$m.exports=ct;var Kb=$m.exports,op=Kb;xu.createRoot=op.createRoot,xu.hydrateRoot=op.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const sp="popstate";function qb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return vc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wg(i)}return Xb(t,n,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ug(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yb(){return Math.random().toString(36).substr(2,8)}function ap(e,t){return{usr:e.state,key:e.key,idx:t}}function vc(e,t,n,r){return n===void 0&&(n=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Za(t):t,{state:n,key:t&&t.key||r||Yb()})}function Wg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Za(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=wn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ca({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=wn.Pop;let _=c(),v=_==null?null:_-u;u=_,l&&l({action:a,location:p.location,delta:v})}function f(_,v){a=wn.Push;let g=vc(p.location,_,v);u=c()+1;let y=ap(g,u),w=p.createHref(g);try{s.pushState(y,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(w)}o&&l&&l({action:a,location:p.location,delta:1})}function h(_,v){a=wn.Replace;let g=vc(p.location,_,v);u=c();let y=ap(g,u),w=p.createHref(g);s.replaceState(y,"",w),o&&l&&l({action:a,location:p.location,delta:0})}function m(_){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof _=="string"?_:Wg(_);return g=g.replace(/ $/,"%20"),Xe(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let p={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sp,d),l=_,()=>{i.removeEventListener(sp,d),l=null}},createHref(_){return t(i,_)},createURL:m,encodeLocation(_){let v=m(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:h,go(_){return s.go(_)}};return p}var lp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lp||(lp={}));function Zb(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Za(t):t,i=Qg(r.pathname||"/",n);if(i==null)return null;let o=Vg(e);Jb(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=dw(i);s=lw(o[a],l)}return s}function Vg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vg(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:sw(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Hg(o.path))i(o,s,l)}),t}function Hg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Jb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ew=/^:[\w-]+$/,tw=3,nw=2,rw=1,iw=10,ow=-2,up=e=>e==="*";function sw(e,t){let n=e.split("/"),r=n.length;return n.some(up)&&(r+=ow),t&&(r+=nw),n.filter(i=>!up(i)).reduce((i,o)=>i+(ew.test(o)?tw:o===""?rw:iw),r)}function aw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function lw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=uw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Yr([i,c.pathname]),pathnameBase:fw(Yr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Yr([i,c.pathnameBase]))}return o}function uw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:h}=c;if(f==="*"){let p=a[d]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}const m=a[d];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function cw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ug(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ug(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Yr=e=>e.join("/").replace(/\/\/+/g,"/"),fw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function hw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gg=["post","put","patch","delete"];new Set(Gg);const pw=["get",...Gg];new Set(pw);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}const mw=C.createContext(null),gw=C.createContext(null),Kg=C.createContext(null),Ja=C.createContext(null),Wo=C.createContext({outlet:null,matches:[],isDataRoute:!1}),qg=C.createContext(null);function Yd(){return C.useContext(Ja)!=null}function vw(){return Yd()||Xe(!1),C.useContext(Ja).location}const yw=C.createContext(null);function _w(e){let t=C.useContext(Wo).outlet;return t&&C.createElement(yw.Provider,{value:e},t)}function bw(e,t){return ww(e,t)}function ww(e,t,n,r){Yd()||Xe(!1);let{navigator:i}=C.useContext(Kg),{matches:o}=C.useContext(Wo),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=vw(),c;if(t){var d;let _=typeof t=="string"?Za(t):t;l==="/"||(d=_.pathname)!=null&&d.startsWith(l)||Xe(!1),c=_}else c=u;let f=c.pathname||"/",h=f;if(l!=="/"){let _=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=Zb(e,{pathname:h}),p=kw(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Yr([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Yr([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&p?C.createElement(Ja.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:wn.Pop}},p):p}function Ew(){let e=Pw(),t=hw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const Cw=C.createElement(Ew,null);class xw extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Wo.Provider,{value:this.props.routeContext},C.createElement(qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sw(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(mw);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Wo.Provider,{value:t},r)}function kw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Xe(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:h}=n,m=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let h,m=!1,p=null,_=null;n&&(h=a&&d.route.id?a[d.route.id]:void 0,p=d.route.errorElement||Cw,l&&(u<0&&f===0?(m=!0,_=null):u===f&&(m=!0,_=d.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,f+1)),g=()=>{let y;return h?y=p:m?y=_:d.route.Component?y=C.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,C.createElement(Sw,{match:d,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement(xw,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var yc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yc||{});function Nw(e){let t=C.useContext(gw);return t||Xe(!1),t}function Tw(e){let t=C.useContext(Wo);return t||Xe(!1),t}function Iw(e){let t=Tw(),n=t.matches[t.matches.length-1];return n.route.id||Xe(!1),n.route.id}function Pw(){var e;let t=C.useContext(qg),n=Nw(yc.UseRouteError),r=Iw(yc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Rw(e){return _w(e.context)}function js(e){Xe(!1)}function Aw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:o,static:s=!1,future:a}=e;Yd()&&Xe(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:s,future:da({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Za(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:m="default"}=r,p=C.useMemo(()=>{let _=Qg(c,l);return _==null?null:{location:{pathname:_,search:d,hash:f,state:h,key:m},navigationType:i}},[l,c,d,f,h,m,i]);return p==null?null:C.createElement(Kg.Provider,{value:u},C.createElement(Ja.Provider,{children:n,value:p}))}function Ow(e){let{children:t,location:n}=e;return bw(_c(t),n)}new Promise(()=>{});function _c(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,_c(r.props.children,o));return}r.type!==js&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_c(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Dw="6";try{window.__reactRouterVersion=Dw}catch{}const Mw="startTransition",cp=Cu[Mw];function Lw(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=qb({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(d=>{u&&cp?cp(()=>l(d)):l(d)},[l,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.createElement(Aw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var dp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dp||(dp={}));var fp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fp||(fp={}));const Fw="data:image/svg+xml,%3csvg%20width='324'%20height='240'%20viewBox='0%200%20324%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='layer1'%3e%3cg%20id='logo'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20from='0.90'%20to='1'%20dur='2s'%20repeatCount='1'%20/%3e%3cg%20id='book'%3e%3cg%20id='right-book'%3e%3cpath%20id='path15'%20d='M267.682%200.536987L267.238%20131.336L281.989%20144.346'%20fill='%23022B61'/%3e%3cpath%20id='path18'%20d='M281.716%20143.927C215.284%20163.709%20196.65%20181.034%20162.801%20198.155C187.507%20178.631%20178.086%20163.884%20267.91%20131.273'%20fill='%23022B61'/%3e%3cpath%20id='rect7'%20d='M171.295%2060.5823C170.775%2023.5393%20241.11%209.02673%20241.11%209.02673L247.554%20118.582C247.554%20118.582%20180.414%20163.239%20168.073%20207.731C154.959%20255.007%20172.059%20115.027%20171.295%2060.5823Z'%20fill='%230c4a6e'/%3e%3c/g%3e%3cg%20id='left-book'%3e%3cpath%20id='path20'%20d='M56.8113%200L57.255%20130.799L42.5046%20143.809'%20fill='%23022B61'/%3e%3cpath%20id='path21'%20d='M42.7775%20143.39C109.209%20163.172%20127.843%20180.497%20161.692%20197.618C136.986%20178.094%20146.407%20163.347%2056.5829%20130.736'%20fill='%23022B61'/%3e%3cpath%20id='path22'%20d='M153.198%2060.0453C153.718%2023.0023%2083.3833%208.48975%2083.3833%208.48975L76.9388%20118.045C76.9388%20118.045%20144.079%20162.702%20156.42%20207.194C169.534%20254.47%20152.434%20114.49%20153.198%2060.0453Z'%20fill='%230c4a6e'/%3e%3c/g%3e%3c/g%3e%3cg%20id='okrag'%3e%3cpath%20id='path5'%20d='M159.5%2031C138.554%2031%20117.813%2033.2704%2098.4617%2037.6816C79.1102%2042.0928%2061.527%2048.5584%2046.716%2056.7093C31.9051%2064.8601%2020.1564%2074.5366%2012.1408%2085.1862C4.12529%2095.8358%20-0.000171448%20107.25%205.34397e-09%20118.777C0.0591403%20134.74%208.97967%20147.937%2024%20161.594C19.6314%20154.238%2014.0512%20151.76%2013.6725%20144C12.2795%20139.831%2012.2218%20123.012%2012.1408%20118.777C12.1415%2098.5434%2028.7175%2088.9822%2055.4958%2074.6751C82.274%2060.368%20118.593%2052.3303%20156.463%2052.3303C194.333%2052.3303%20230.651%2060.368%20257.43%2074.6751C284.208%2088.9822%20299.252%20108.387%20299.253%20128.62C299.242%20140.035%20294.437%20151.303%20285.192%20161.594C281.011%20169.59%20271.393%20175.154%20263%20182C279.612%20173.771%20296.106%20165.712%20305.2%20154.476C314.295%20143.24%20318.996%20131.077%20319%20118.777C319%20107.25%20314.875%2095.8358%20306.859%2085.1862C298.844%2074.5366%20287.095%2064.8601%20272.284%2056.7093C257.473%2048.5584%20239.89%2042.0928%20220.538%2037.6816C201.187%2033.2704%20180.446%2031%20159.5%2031Z'%20fill='%23FEFEFE'/%3e%3cpath%20id='path4'%20d='M159.492%2040.1651C138.547%2040.1651%20117.807%2042.2671%2098.4569%2046.3511C79.1063%2050.4351%2061.524%2056.421%2046.7137%2063.9673C31.9035%2071.5135%2020.1554%2080.4722%2012.1402%2090.3318C4.12509%20100.191%20-0.00017144%20110.759%205.34371e-09%20121.431C0.0417946%20137.795%209.77914%20153.772%2027.9375%20167.27C46.0959%20180.768%2071.8293%20191.159%20101.77%20197.081C88.3378%20193.985%2075.934%20189.78%2065.0273%20184.626C48.9979%20178.016%2036.0924%20169.748%2027.2196%20160.404C18.3468%20151.06%2013.7224%20140.867%2013.6719%20130.544C13.7068%20119.445%2019.0291%20108.505%2029.2073%2098.6137C39.3855%2088.7219%2054.133%2080.1559%2072.2539%2073.6104C96.3653%2063.7845%20126.005%2058.4483%20156.514%2058.4405C187.157%2058.4526%20216.917%2063.84%20241.076%2073.7491C259.082%2080.3028%20273.725%2088.8563%20283.827%2098.721C293.929%20108.586%20299.208%20119.486%20299.238%20130.544C299.231%20140.684%20294.811%20150.705%20286.277%20159.925C277.744%20169.145%20265.297%20177.348%20249.783%20183.976C230.744%20193.196%20207.143%20199.406%20181.691%20201.894C219.768%20199.167%20254.629%20189.523%20279.856%20174.738C305.084%20159.953%20318.979%20141.022%20318.984%20121.431C318.985%20110.759%20314.859%20100.191%20306.844%2090.3318C298.829%2080.4722%20287.081%2071.5135%20272.271%2063.9673C257.46%2056.421%20239.878%2050.4351%20220.527%2046.3511C201.177%2042.2671%20180.437%2040.1651%20159.492%2040.1651Z'%20fill='%232B7C97'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var Yg={exports:{}},Xg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=C;function zw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jw=typeof Object.is=="function"?Object.is:zw,Bw=Vo.useSyncExternalStore,$w=Vo.useRef,Uw=Vo.useEffect,Ww=Vo.useMemo,Vw=Vo.useDebugValue;Xg.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=$w(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=Ww(function(){function l(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&s.hasValue){var m=s.value;if(i(m,h))return d=m}return d=h}if(m=d,jw(c,h))return m;var p=r(h);return i!==void 0&&i(m,p)?m:(c=h,d=p)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=Bw(e,o[0],o[1]);return Uw(function(){s.hasValue=!0,s.value=a},[a]),Vw(a),a};Yg.exports=Xg;var Hw=Yg.exports,rt="default"in Cu?b:Cu,hp=Symbol.for("react-redux-context"),pp=typeof globalThis<"u"?globalThis:{};function Qw(){if(!rt.createContext)return{};const e=pp[hp]??(pp[hp]=new Map);let t=e.get(rt.createContext);return t||(t=rt.createContext(null),e.set(rt.createContext,t)),t}var zn=Qw(),Gw=()=>{throw new Error("uSES not initialized!")};function Xd(e=zn){return function(){return rt.useContext(e)}}var Zg=Xd(),Jg=Gw,Kw=e=>{Jg=e},qw=(e,t)=>e===t;function Yw(e=zn){const t=e===zn?Zg:Xd(e),n=(r,i={})=>{const{equalityFn:o=qw,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();rt.useRef(!0);const f=rt.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,s.stabilityCheck]),h=Jg(l.addNestedSub,a.getState,u||a.getState,f,o);return rt.useDebugValue(h),h};return Object.assign(n,{withTypes:()=>n}),n}var Zd=Yw();function Xw(e){e()}function Zw(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Xw(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var mp={notify(){},get:()=>[]};function Jw(e,t){let n,r=mp,i=0,o=!1;function s(p){c();const _=r.subscribe(p);let v=!1;return()=>{v||(v=!0,_(),d())}}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return o}function c(){i++,n||(n=e.subscribe(l),r=Zw())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=mp)}function f(){o||(o=!0,c())}function h(){o&&(o=!1,d())}const m={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:h,getListeners:()=>r};return m}var e2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t2=typeof navigator<"u"&&navigator.product==="ReactNative",n2=e2||t2?rt.useLayoutEffect:rt.useEffect;function r2({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=rt.useMemo(()=>{const u=Jw(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),a=rt.useMemo(()=>e.getState(),[e]);n2(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||zn;return rt.createElement(l.Provider,{value:s},n)}var i2=r2;function ev(e=zn){const t=e===zn?Zg:Xd(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var o2=ev();function s2(e=zn){const t=e===zn?o2:ev(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Jd=s2();Kw(Hw.useSyncExternalStoreWithSelector);function me(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}me(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},E.apply(this,arguments)};function fa(e){return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fa(e)}var a2=/^\s+/,l2=/\s+$/;function A(e,t){if(t=t||{},(e=e||"")instanceof A)return e;if(!(this instanceof A))return new A(e,t);var n=function(r){var i={r:0,g:0,b:0},o=1,s=null,a=null,l=null,u=!1,c=!1;typeof r=="string"&&(r=function(m){m=m.replace(a2,"").replace(l2,"").toLowerCase();var p,_=!1;if(bc[m])m=bc[m],_=!0;else if(m=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(p=Tt.rgb.exec(m))?{r:p[1],g:p[2],b:p[3]}:(p=Tt.rgba.exec(m))?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=Tt.hsl.exec(m))?{h:p[1],s:p[2],l:p[3]}:(p=Tt.hsla.exec(m))?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=Tt.hsv.exec(m))?{h:p[1],s:p[2],v:p[3]}:(p=Tt.hsva.exec(m))?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=Tt.hex8.exec(m))?{r:Je(p[1]),g:Je(p[2]),b:Je(p[3]),a:wp(p[4]),format:_?"name":"hex8"}:(p=Tt.hex6.exec(m))?{r:Je(p[1]),g:Je(p[2]),b:Je(p[3]),format:_?"name":"hex"}:(p=Tt.hex4.exec(m))?{r:Je(p[1]+""+p[1]),g:Je(p[2]+""+p[2]),b:Je(p[3]+""+p[3]),a:wp(p[4]+""+p[4]),format:_?"name":"hex8"}:(p=Tt.hex3.exec(m))?{r:Je(p[1]+""+p[1]),g:Je(p[2]+""+p[2]),b:Je(p[3]+""+p[3]),format:_?"name":"hex"}:!1}(r)),fa(r)=="object"&&(qt(r.r)&&qt(r.g)&&qt(r.b)?(d=r.r,f=r.g,h=r.b,i={r:255*te(d,255),g:255*te(f,255),b:255*te(h,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):qt(r.h)&&qt(r.s)&&qt(r.v)?(s=Vi(r.s),a=Vi(r.v),i=function(m,p,_){m=6*te(m,360),p=te(p,100),_=te(_,100);var v=Math.floor(m),g=m-v,y=_*(1-p),w=_*(1-g*p),N=_*(1-(1-g)*p),T=v%6;return{r:255*[_,w,y,y,N,_][T],g:255*[N,_,_,w,y,y][T],b:255*[y,y,N,_,_,w][T]}}(r.h,s,a),u=!0,c="hsv"):qt(r.h)&&qt(r.s)&&qt(r.l)&&(s=Vi(r.s),l=Vi(r.l),i=function(m,p,_){var v,g,y;function w(R,O,H){return H<0&&(H+=1),H>1&&(H-=1),H<1/6?R+6*(O-R)*H:H<.5?O:H<2/3?R+(O-R)*(2/3-H)*6:R}if(m=te(m,360),p=te(p,100),_=te(_,100),p===0)v=g=y=_;else{var N=_<.5?_*(1+p):_+p-_*p,T=2*_-N;v=w(T,N,m+1/3),g=w(T,N,m),y=w(T,N,m-1/3)}return{r:255*v,g:255*g,b:255*y}}(r.h,s,l),u=!0,c="hsl"),r.hasOwnProperty("a")&&(o=r.a));var d,f,h;return o=tv(o),{ok:u,format:r.format||c,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:o}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function gp(e,t,n){e=te(e,255),t=te(t,255),n=te(n,255);var r,i,o=Math.max(e,t,n),s=Math.min(e,t,n),a=(o+s)/2;if(o==s)r=i=0;else{var l=o-s;switch(i=a>.5?l/(2-o-s):l/(o+s),o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,l:a}}function vp(e,t,n){e=te(e,255),t=te(t,255),n=te(n,255);var r,i,o=Math.max(e,t,n),s=Math.min(e,t,n),a=o,l=o-s;if(i=o===0?0:l/o,o==s)r=0;else{switch(o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,v:a}}function yp(e,t,n,r){var i=[Ot(Math.round(e).toString(16)),Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function _p(e,t,n,r){return[Ot(nv(r)),Ot(Math.round(e).toString(16)),Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16))].join("")}function u2(e,t){t=t===0?0:t||10;var n=A(e).toHsl();return n.s-=t/100,n.s=el(n.s),A(n)}function c2(e,t){t=t===0?0:t||10;var n=A(e).toHsl();return n.s+=t/100,n.s=el(n.s),A(n)}function d2(e){return A(e).desaturate(100)}function f2(e,t){t=t===0?0:t||10;var n=A(e).toHsl();return n.l+=t/100,n.l=el(n.l),A(n)}function h2(e,t){t=t===0?0:t||10;var n=A(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),A(n)}function p2(e,t){t=t===0?0:t||10;var n=A(e).toHsl();return n.l-=t/100,n.l=el(n.l),A(n)}function m2(e,t){var n=A(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,A(n)}function g2(e){var t=A(e).toHsl();return t.h=(t.h+180)%360,A(t)}function bp(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=A(e).toHsl(),r=[A(e)],i=360/t,o=1;o<t;o++)r.push(A({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function v2(e){var t=A(e).toHsl(),n=t.h;return[A(e),A({h:(n+72)%360,s:t.s,l:t.l}),A({h:(n+216)%360,s:t.s,l:t.l})]}function y2(e,t,n){t=t||6,n=n||30;var r=A(e).toHsl(),i=360/n,o=[A(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(A(r));return o}function _2(e,t){t=t||6;for(var n=A(e).toHsv(),r=n.h,i=n.s,o=n.v,s=[],a=1/t;t--;)s.push(A({h:r,s:i,v:o})),o=(o+a)%1;return s}A.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=tv(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=vp(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=vp(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=gp(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=gp(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return yp(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,i,o){var s=[Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16)),Ot(Math.round(r).toString(16)),Ot(nv(i))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*te(this._r,255))+"%",g:Math.round(100*te(this._g,255))+"%",b:Math.round(100*te(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*te(this._r,255))+"%, "+Math.round(100*te(this._g,255))+"%, "+Math.round(100*te(this._b,255))+"%)":"rgba("+Math.round(100*te(this._r,255))+"%, "+Math.round(100*te(this._g,255))+"%, "+Math.round(100*te(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(b2[yp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+_p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=A(e);n="#"+_p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return A(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(f2,arguments)},brighten:function(){return this._applyModification(h2,arguments)},darken:function(){return this._applyModification(p2,arguments)},desaturate:function(){return this._applyModification(u2,arguments)},saturate:function(){return this._applyModification(c2,arguments)},greyscale:function(){return this._applyModification(d2,arguments)},spin:function(){return this._applyModification(m2,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(y2,arguments)},complement:function(){return this._applyCombination(g2,arguments)},monochromatic:function(){return this._applyCombination(_2,arguments)},splitcomplement:function(){return this._applyCombination(v2,arguments)},triad:function(){return this._applyCombination(bp,[3])},tetrad:function(){return this._applyCombination(bp,[4])}},A.fromRatio=function(e,t){if(fa(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Vi(e[r]));e=n}return A(e,t)},A.equals=function(e,t){return!(!e||!t)&&A(e).toRgbString()==A(t).toRgbString()},A.random=function(){return A.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},A.mix=function(e,t,n){n=n===0?0:n||50;var r=A(e).toRgb(),i=A(t).toRgb(),o=n/100;return A({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},A.readability=function(e,t){var n=A(e),r=A(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},A.isReadable=function(e,t,n){var r,i,o=A.readability(e,t);switch(i=!1,(r=function(s){var a,l;return a=((s=s||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(s.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:a,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},A.mostReadable=function(e,t,n){var r,i,o,s,a=null,l=0;i=(n=n||{}).includeFallbackColors,o=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=A.readability(e,t[u]))>l&&(l=r,a=A(t[u]));return A.isReadable(e,a,{level:o,size:s})||!i?a:(n.includeFallbackColors=!1,A.mostReadable(e,["#fff","#000"],n))};var bc=A.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},b2=A.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(bc);function tv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function te(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function el(e){return Math.min(1,Math.max(0,e))}function Je(e){return parseInt(e,16)}function Ot(e){return e.length==1?"0"+e:""+e}function Vi(e){return e<=1&&(e=100*e+"%"),e}function nv(e){return Math.round(255*parseFloat(e)).toString(16)}function wp(e){return Je(e)/255}var pn,Es,Cs,Tt=(Es="[\\s|\\(]+("+(pn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+pn+")[,|\\s]+("+pn+")\\s*\\)?",Cs="[\\s|\\(]+("+pn+")[,|\\s]+("+pn+")[,|\\s]+("+pn+")[,|\\s]+("+pn+")\\s*\\)?",{CSS_UNIT:new RegExp(pn),rgb:new RegExp("rgb"+Es),rgba:new RegExp("rgba"+Cs),hsl:new RegExp("hsl"+Es),hsla:new RegExp("hsla"+Cs),hsv:new RegExp("hsv"+Es),hsva:new RegExp("hsva"+Cs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function qt(e){return!!Tt.CSS_UNIT.exec(e)}me(`.atom-rli-bounding-box {
  --color-r: 50;
  --color-g: 205;
  --color-b: 50;
  font-size: 16px;
  position: relative;
  color: rgb(var(--color-r), var(--color-g), var(--color-b));
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-throbber {
  position: relative;
  z-index: 1;
  width: 5em;
  height: 5em;
  transform: perspective(500px) rotateX(-24deg) rotateY(20deg) rotateZ(30deg);
  transform-style: preserve-3d;
}
.atom-rli-bounding-box .atom-throbber .inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  -webkit-animation: atomSpin var(--rli-animation-duration, 1.8s) var(--rli-animation-function, linear) infinite;
          animation: atomSpin var(--rli-animation-duration, 1.8s) var(--rli-animation-function, linear) infinite;
  display: inline-block;
  transform-origin: center center;
  position: relative;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit:nth-of-type(1) {
  --orbit-color: var(--disc3-color);
  -webkit-animation: rotate calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
          animation: rotate calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit:nth-of-type(2) {
  --orbit-color: var(--disc2-color);
  -webkit-animation: rotateAtomDisc2 calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
          animation: rotateAtomDisc2 calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit:nth-of-type(3) {
  --orbit-color: var(--disc1-color);
  -webkit-animation: rotateAtomDisc3 calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
          animation: rotateAtomDisc3 calc(var(--rli-animation-duration, 1.8s) / 0.2625) var(--rli-animation-function, linear) infinite;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit {
  position: absolute;
  border-radius: 50%;
  border: 0.3em solid var(--orbit-color, currentColor);
  display: inline-block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 2%;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit.nucleus-holder {
  border: 0.3em solid transparent;
}
.atom-rli-bounding-box .atom-throbber .inner .orbit.nucleus-holder .nucleus {
  --color-invert-r: calc(200 - var(--color-r));
  --color-invert-g: calc(200 - var(--color-g));
  --color-invert-b: calc(200 - var(--color-b));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.8em;
  height: 0.8em;
  display: inline-block;
  border-radius: 50%;
  background-color: currentColor;
  box-shadow: inset 0 0 0.1333333333em rgba(var(--color-r), var(--color-g), var(--color-b), 0.16), inset 0.1333333333em 0 0.2133333333em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 1), inset -0.1333333333em 0 0.2133333333em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 1), inset 0.1333333333em 0 0.8em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 1), inset -0.1333333333em 0 0.8em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 1), 0 0 0.1333333333em rgba(var(--color-r), var(--color-g), var(--color-b), 0.16), -0.0266666667em 0 0.5925925926em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 0.44), 0.0266666667em 0 0.5925925926em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 0.44);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

/* @keyframes spin-atom {
  0% {
    transform: rotateX(360deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg);
  }
} */
@-webkit-keyframes atomSpin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes atomSpin {
  to {
    transform: rotate(1turn);
  }
}
@-webkit-keyframes rotateAtomDisc2 {
  from {
    transform: rotateX(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(90deg) rotateZ(360deg);
  }
}
@keyframes rotateAtomDisc2 {
  from {
    transform: rotateX(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(90deg) rotateZ(360deg);
  }
}
@-webkit-keyframes rotateAtomDisc3 {
  from {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(90deg) rotateZ(360deg);
  }
}
@keyframes rotateAtomDisc3 {
  from {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(90deg) rotateZ(360deg);
  }
}`);var xe=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var o=n.fontSize;i=function(s,a){var l={};for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&a.indexOf(u)<0&&(l[u]=s[u]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(s);c<u.length;c++)a.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(s,u[c])&&(l[u[c]]=s[u[c]])}return l}(n,["fontSize"]),r=o}return{fontSize:r,styles:i}},w2={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Se=function(e){var t=e.className,n=e.text,r=e.textColor,i=e.staticText;return n?b.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:E(E({},i&&w2),r&&{color:r,mixBlendMode:"unset"})},typeof n=="string"&&n.length?n:"loading"):null},ke=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(t),o=i+r*(i/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:t}},Pr=A("rgb(50, 205, 50)").toRgb();b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.8s").animationPeriod,l=C.useCallback(function(){var c,d,f,h;if(n.current){var m=Array.from({length:3},function(_,v){return"--".concat("orbit"+(v+1)+"-","color")});(c=n.current)===null||c===void 0||c.style.removeProperty("--color-r"),(d=n.current)===null||d===void 0||d.style.removeProperty("--color-g"),(f=n.current)===null||f===void 0||f.style.removeProperty("--color-b");for(var p=0;p<m.length;p++)(h=n.current)===null||h===void 0||h.style.removeProperty(m[p])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length;if(h<=0)return f;try{var m=A(c[0]);if(!m.isValid())throw new Error("invalid color");var p=m.toRgb();f["--color-r"]=p.r,f["--color-g"]=p.g,f["--color-b"]=p.b}catch{console.warn("Possibly an invalid color( ".concat(c[0]," ) passed to Atom loader!")),f["--color-r"]=Pr.r,f["--color-g"]=Pr.g,f["--color-b"]=Pr.b}for(var _=0;_<h&&!(_>=3);_++){var v="orbit".concat(_+1),g=c[_];f["--".concat(v,"-color")]=g}return f}try{var y=A(c);if(!y.isValid())throw new Error("invalid color");p=y.toRgb(),f["--color-r"]=p.r,f["--color-g"]=p.g,f["--color-b"]=p.b}catch{console.warn("Invalid color( ".concat(JSON.stringify(c)," ) passed to Atom indicator!")),f["--color-r"]=Pr.r,f["--color-g"]=Pr.g,f["--color-b"]=Pr.b}return f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u)},b.createElement("span",{className:"rli-d-i-b atom-throbber",style:E({},i)},b.createElement("span",{className:"rli-d-i-b inner"},b.createElement("span",{className:"orbit nucleus-holder"},b.createElement("span",{className:"nucleus"})),b.createElement("span",{className:"orbit"}),b.createElement("span",{className:"orbit"}))),b.createElement(Se,{className:"atom-text",staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))});me(`.commet-rli-bounding-box {
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
}
.commet-rli-bounding-box .commet-throbber {
  width: 6em;
  height: 6em;
  color: rgb(50, 205, 50);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.commet-rli-bounding-box .commet-throbber .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper {
  position: absolute;
  width: var(--ring-dimensions);
  height: var(--ring-dimensions);
  -webkit-animation: commetSpin var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
          animation: commetSpin var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper > .ringball-holder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper .ring {
  border-radius: 50%;
  border-style: solid;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring1 {
  --bg-color: var(--ring1-color, currentColor);
  --ring-dimensions: 100%;
  -webkit-animation-direction: normal;
          animation-direction: normal;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring1 > .ring {
  border-color: var(--bg-color) transparent transparent var(--bg-color);
  border-width: 0.25em 0.25em 0em 0em;
  transform: rotateZ(-44deg);
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring1 > .ringball-holder::before {
  content: "";
  position: absolute;
  width: 0.4667em;
  height: 0.4667em;
  top: -0.054175em;
  left: 50%;
  background-color: var(--bg-color);
  border-radius: 50%;
  box-shadow: 0 0 0.3em 0.03em var(--bg-color), 0 0 1.4em 0.16em var(--bg-color);
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring2 {
  --bg-color: var(--ring2-color, currentColor);
  --ring-dimensions: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring2 > .ring {
  border-color: var(--bg-color) var(--bg-color) transparent transparent;
  border-width: 0.25em 0em 0em 0.25em;
  transform: rotateZ(134deg);
}
.commet-rli-bounding-box .commet-throbber .ring-wrapper.ring2 > .ringball-holder::before {
  content: "";
  position: absolute;
  width: 0.4667em;
  height: 0.4667em;
  right: -0.054175em;
  bottom: 50%;
  background-color: var(--bg-color);
  border-radius: 50%;
  box-shadow: 0 0 0.3em 0.03em var(--bg-color), 0 0 1.4em 0.16em var(--bg-color);
}

@-webkit-keyframes commetSpin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes commetSpin {
  to {
    transform: rotate(1turn);
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c,d;if(n.current){var f=Array.from({length:2},function(m,p){return"--".concat("ring"+(p+1)+"-","color")});(c=n.current)===null||c===void 0||c.style.removeProperty("color");for(var h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length;f.color=c[0];for(var m=0;m<h&&!(m>=2);m++){var p="ring".concat(m+1);f["--".concat(p,"-color")]=c[m]}return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b commet-throbber",ref:n,style:E(E({},u),i)},b.createElement(Se,{className:"commet-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}),b.createElement("span",{className:"rli-d-i-b ring-wrapper ring1"},b.createElement("span",{className:"rli-d-i-b ring "}),b.createElement("span",{className:"rli-d-i-b ringball-holder"})),b.createElement("span",{className:"rli-d-i-b ring-wrapper ring2"},b.createElement("span",{className:"rli-d-i-b ring "}),b.createElement("span",{className:"rli-d-i-b ringball-holder"}))))});me(`.bubble-dotted-rli-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.bubble-dotted-rli-bounding-box .bubble-dotted-throbber {
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
  display: inline-block;
  color: rgb(50, 205, 50);
}
.bubble-dotted-rli-bounding-box .bubble-dotted-throbber .bubble-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.bubble-dotted-rli-bounding-box .bubble-dotted-throbber .bubble-dot-matter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc((var(--elem-pos) - 1) * 30deg));
}
.bubble-dotted-rli-bounding-box .bubble-dotted-throbber .bubble-dot-matter::before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  -webkit-animation-name: bubbleDots;
          animation-name: bubbleDots;
  -webkit-animation-duration: var(--rli-animation-duration, 1.2s);
          animation-duration: var(--rli-animation-duration, 1.2s);
  -webkit-animation-timing-function: var(--rli-animation-function, ease-in-out);
          animation-timing-function: var(--rli-animation-function, ease-in-out);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * (12 - (var(--elem-pos) - 1)) * -1);
          animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * (12 - (var(--elem-pos) - 1)) * -1);
}

@-webkit-keyframes bubbleDots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes bubbleDots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`);var E2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b bubble-dotted-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b bubble-dotted-throbber",ref:n,style:E(E({},u),i)},Array.from({length:12}).map(function(c,d){return b.createElement("span",{key:d,className:"rli-d-i-b bubble-dot-matter",style:{"--elem-pos":"".concat(d+1)}})}),b.createElement(Se,{className:"bubble-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};me(`.disc-rli-bounding-box {
  font-size: 16px;
  display: inline-block;
}
.disc-rli-bounding-box .disc-throbber {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.disc-rli-bounding-box .disc-throbber .disc-ring {
  width: 100%;
  height: 100%;
  border-width: 0.38em;
  border-style: solid;
  border-color: currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  -webkit-animation-name: discSpin;
          animation-name: discSpin;
  -webkit-animation-duration: var(--rli-animation-duration, 1s);
          animation-duration: var(--rli-animation-duration, 1s);
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.disc-rli-bounding-box .disc-throbber .disc-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes discSpin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes discSpin {
  to {
    transform: rotate(1turn);
  }
}`);var C2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b disc-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b disc-throbber",ref:n,style:E(E({},u),i)},b.createElement("span",{className:"rli-d-i-b disc-ring"}),b.createElement(Se,{className:"disc-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};me(`.dot-rli-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.dot-rli-bounding-box .fading-dot-throbber {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.dot-rli-bounding-box .fading-dot-throbber .fading-dot-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.dot-rli-bounding-box .fading-dot-throbber .fading-dot-matter {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(calc((var(--elem-pos) - 1) * 30deg));
}
.dot-rli-bounding-box .fading-dot-throbber .fading-dot-matter::before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  -webkit-animation-name: fadeDots;
          animation-name: fadeDots;
  -webkit-animation-duration: var(--rli-animation-duration, 1.2s);
          animation-duration: var(--rli-animation-duration, 1.2s);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: var(--rli-animation-function, ease-in-out);
          animation-timing-function: var(--rli-animation-function, ease-in-out);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * (12 - (var(--elem-pos) - 1)) * -1);
          animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * (12 - (var(--elem-pos) - 1)) * -1);
}

@-webkit-keyframes fadeDots {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes fadeDots {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}`);var x2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b dot-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b fading-dot-throbber",ref:n,style:E(E({},u),i)},Array.from({length:12}).map(function(c,d){return b.createElement("span",{key:"fading-dot-".concat(d),className:"rli-d-i-b fading-dot".concat(d+1," fading-dot-matter"),style:{"--elem-pos":"".concat(d+1)}})}),b.createElement(Se,{className:"fading-dot-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};me(`.split-disc-rli-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.split-disc-rli-bounding-box .split-disc-throbber {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: rgb(50, 205, 50);
}
.split-disc-rli-bounding-box .split-disc-throbber .split-disc-ring {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.38em;
  border-style: solid;
  border-color: var(--split1-color, var(--splits-color, currentColor)) transparent var(--split2-color, var(--splits-color, currentColor)) transparent;
  background-color: transparent;
  -webkit-animation-name: splitDiscSpin;
          animation-name: splitDiscSpin;
  -webkit-animation-duration: var(--rli-animation-duration, 1.2s);
          animation-duration: var(--rli-animation-duration, 1.2s);
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.split-disc-rli-bounding-box .split-disc-throbber .split-disc-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes splitDiscSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes splitDiscSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`);var S2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length;f["--splits-color"]=c[0],f.color=c[0];for(var m=0;m<h&&!(m>=2);m++){var p="split".concat(m+1);f["--".concat(p,"-color")]=c[m]}return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b split-disc-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b split-disc-throbber",ref:n,style:E(E({},u),i)},b.createElement("span",{className:"rli-d-i-b split-disc-ring"}),b.createElement(Se,{className:"split-disc-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};me(`.track-disc-rli-bounding-box {
  font-size: 16px;
  display: inline-block;
}
.track-disc-rli-bounding-box .track-disc-throbber {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.track-disc-rli-bounding-box .track-disc-throbber .track-disc-ring {
  width: 100%;
  height: 100%;
  border-width: 0.38em;
  border-style: solid;
  border-radius: 50%;
  border-color: var(--track-path-color, #eeeeee);
  border-top-color: currentColor;
  box-sizing: border-box;
  -webkit-animation-name: trackDiscSpin;
          animation-name: trackDiscSpin;
  -webkit-animation-duration: var(--rli-animation-duration, 1s);
          animation-duration: var(--rli-animation-duration, 1s);
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.track-disc-rli-bounding-box .track-disc-throbber .track-disc-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes trackDiscSpin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes trackDiscSpin {
  to {
    transform: rotate(1turn);
  }
}
/* 

$spinner-color: red !default;
$spinner-background-color: #eee !default;
$spinner-stroke: 2px !default;
$spinner-diameter: 40px !default;
$spinner-sides: 1 !default;

@mixin spinner(
  $color: $spinner-color,
  $background-color: $spinner-background-color,
  $stroke: $spinner-stroke,
  $diameter: $spinner-diameter,
  $sides: $spinner-sides
) {
  border: $stroke solid $background-color;
  font-size: $diameter;
  width: 1em;
  height: 1em;
  border-radius: .5em;
  @include box-sizing(border-box);
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top-color: $color;
  @if $sides >= 2 {
    border-right-color: $color;
  }
  @if $sides >= 3 {
    border-bottom-color: $color;
  }
}

.spinner {
  @include spinner();
}

@keyframes spin {
  to {
    @include transform(rotate(360deg));
  }
}


*/`);var k2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=C.useCallback(function(){var c,d;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"),(d=n.current)===null||d===void 0||d.style.removeProperty("--track-path-color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0],m=c[1];return h&&(f.color=h),m&&(f["--track-path-color"]=m),f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b track-disc-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b track-disc-throbber",ref:n,style:E(E({},u),i)},b.createElement("span",{className:"rli-d-i-b track-disc-ring"}),b.createElement(Se,{className:"track-disc-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};b.memo(function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?b.createElement(x2,E({},e)):n==="bubble-dotted"?b.createElement(E2,E({},e)):n==="disc"?b.createElement(C2,E({},e)):n==="split-disc"?b.createElement(S2,E({},e)):n==="track-disc"?b.createElement(k2,E({},e)):null});me(`.foursquare-rli-bounding-box {
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  overflow: visible;
}
.foursquare-rli-bounding-box .foursquare-throbber {
  --dimension-unit: 4;
  height: calc(var(--dimension-unit) * 1em);
  width: calc(var(--dimension-unit) * 1em);
  color: rgb(50, 205, 50);
  font-size: 1em;
  position: relative;
  z-index: 0;
}
.foursquare-rli-bounding-box .foursquare-throbber .squares-container {
  height: inherit;
  width: inherit;
  color: currentColor;
  position: relative;
  -webkit-animation: fourSquareExpand var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite;
          animation: fourSquareExpand var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-throbber .foursquare-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  z-index: -2;
}
.foursquare-rli-bounding-box .foursquare-throbber .square {
  position: absolute;
  width: calc(var(--dimension-unit) / 2 * 1em);
  height: calc(var(--dimension-unit) / 2 * 1em);
  border-radius: 3px;
  background-color: currentColor;
  -webkit-animation-name: fourSquareSquareSpin;
          animation-name: fourSquareSquareSpin;
  -webkit-animation-duration: var(--rli-animation-duration, 1s);
          animation-duration: var(--rli-animation-duration, 1s);
  -webkit-animation-timing-function: var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98));
          animation-timing-function: var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98));
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.foursquare-rli-bounding-box .foursquare-throbber .square.square1 {
  background-color: var(--square1-color, currentColor);
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-throbber .square.square2 {
  background-color: var(--square2-color, currentColor);
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-throbber .square.square3 {
  background-color: var(--square3-color, currentColor);
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-throbber .square.square4 {
  background-color: var(--square4-color, currentColor);
  bottom: 0;
  right: 0;
}

@-webkit-keyframes fourSquareExpand {
  0% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  10% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  50% {
    width: calc(var(--dimension-unit) * 1em + 2em);
    height: calc(var(--dimension-unit) * 1em + 2em);
  }
  90% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  100% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
}

@keyframes fourSquareExpand {
  0% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  10% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  50% {
    width: calc(var(--dimension-unit) * 1em + 2em);
    height: calc(var(--dimension-unit) * 1em + 2em);
  }
  90% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  100% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
}
@-webkit-keyframes fourSquareSquareSpin {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes fourSquareSquareSpin {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=C.useCallback(function(){var c,d;if(n.current){var f=Array.from({length:4},function(m,p){return"--".concat("square"+(p+1)+"-","color")});(c=n.current)===null||c===void 0||c.style.removeProperty("color");for(var h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length;f.color=c[0];for(var m=0;m<h&&!(m>=4);m++){var p="square".concat(m+1);f["--".concat(p,"-color")]=c[m]}return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b foursquare-throbber",ref:n,style:E(E({},u),i)},b.createElement("span",{className:"rli-d-i-b squares-container"},b.createElement("span",{className:"square square1"}),b.createElement("span",{className:"square square2"}),b.createElement("span",{className:"square square3"}),b.createElement("span",{className:"square square4"})),b.createElement(Se,{className:"foursquare-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))});me(`.mosaic-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  color: rgb(50, 205, 50);
}
.mosaic-rli-bounding-box .mosaic-throbber {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube {
  background-color: currentColor;
  -webkit-animation-name: mosaicAnimate;
          animation-name: mosaicAnimate;
  -webkit-animation-duration: var(--rli-animation-duration, 1.3s);
          animation-duration: var(--rli-animation-duration, 1.3s);
  -webkit-animation-timing-function: var(--rli-animation-function, ease-in-out);
          animation-timing-function: var(--rli-animation-function, ease-in-out);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube1 {
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube2 {
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube3 {
  grid-area: c;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube4 {
  grid-area: d;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube5 {
  grid-area: e;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube6 {
  grid-area: f;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube7 {
  grid-area: g;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube8 {
  grid-area: h;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-throbber .mosaic-cube9 {
  grid-area: i;
  -webkit-animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
          animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@-webkit-keyframes mosaicAnimate {
  0%, 70%, 100% {
    transform: scale(1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale(0, 0);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes mosaicAnimate {
  0%, 70%, 100% {
    transform: scale(1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale(0, 0);
    transform: scale3D(0, 0, 1);
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.3s").animationPeriod,l=Math.round(parseFloat(a)/9*100)/100;l+="s";var u=C.useCallback(function(){var d;n.current&&((d=n.current)===null||d===void 0||d.style.removeProperty("color"))},[n.current]),c=function(d,f){var h={};if(!d)return f(),h;if(d instanceof Array){var m=d[0];return h.color=m,h}return h.color=d,h}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",u);return b.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),c)},b.createElement("span",{className:"rli-d-i-b mosaic-throbber",style:E(E({},l&&{"--mosaic-skip-interval":l}),i)},b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),b.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))});me(`.riple-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
}
.riple-rli-bounding-box .riple-throbber {
  display: inline-block;
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-throbber .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-throbber .riple {
  --border-width: 0.25em;
  position: absolute;
  border-width: var(--border-width);
  border-style: solid;
  border-color: currentColor;
  opacity: 1;
  border-radius: 50%;
  -webkit-animation: rippling var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite;
          animation: rippling var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite;
}
.riple-rli-bounding-box .riple-throbber .riple:nth-child(2) {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}

@-webkit-keyframes rippling {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}

@keyframes rippling {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s})},b.createElement("span",{className:"rli-d-i-b riple-throbber",ref:n,style:E(E({},u),i)},b.createElement("span",{className:"rli-d-i-b riple"}),b.createElement("span",{className:"rli-d-i-b riple"}),b.createElement(Se,{className:"riple-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))});me(`.pulsate-rli-bounding-box {
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: rgb(50, 205, 50);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 5em;
  height: 1.5em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  -moz-column-gap: 0.12em;
       column-gap: 0.12em;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-bounce {
  width: 0.96em;
  height: 0.96em;
  background-color: currentColor;
  border-radius: 50%;
  display: inline-block;
  -webkit-animation-name: pulsateDotBlink;
          animation-name: pulsateDotBlink;
  -webkit-animation-duration: var(--rli-animation-duration, 1.3s);
          animation-duration: var(--rli-animation-duration, 1.3s);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: var(--rli-animation-function, ease-in-out);
          animation-timing-function: var(--rli-animation-function, ease-in-out);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-bounce1 {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
  background-color: var(--pulsateDot1-color, currentColor);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-bounce2 {
  -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
  background-color: var(--pulsateDot2-color, currentColor);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-bounce3 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
  background-color: var(--pulsateDot3-color, currentColor);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes pulsateDotBlink {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes pulsateDotBlink {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`);var N2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.3s").animationPeriod,l=C.useCallback(function(){var c,d;if(n.current){var f=Array.from({length:3},function(m,p){return"--pulsateDot".concat(p+1,"-color")});(c=n.current)===null||c===void 0||c.style.removeProperty("color");for(var h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length,m=c[0];f.color=m;for(var p=0;p<h&&!(p>=3);p++)f["--pulsateDot".concat(p+1,"-color")]=c[p];return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u)},b.createElement("span",{className:"rli-d-i-b pulsate-indicator",style:E({},i)},b.createElement("span",{className:"rli-d-i-b pulsate-bounce pulsate-bounce1"}),b.createElement("span",{className:"rli-d-i-b pulsate-bounce pulsate-bounce2"}),b.createElement("span",{className:"rli-d-i-b pulsate-bounce pulsate-bounce3"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};me(`.brick-stack-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: rgb(50, 205, 50);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 1.96em;
  height: 1.96em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: no-repeat radial-gradient(circle closest-side, var(--brick1-color, currentColor) 0% 75%, rgba(0, 0, 0, 0) 95%) 0 0, no-repeat radial-gradient(circle closest-side, var(--brick2-color, currentColor) 0% 75%, rgba(0, 0, 0, 0) 95%) 0 100%, no-repeat radial-gradient(circle closest-side, var(--brick3-color, currentColor) 0% 75%, rgba(0, 0, 0, 0) 95%) 100% 100%;
  background-size: 40% 40%;
  -webkit-animation-name: stackBricks;
          animation-name: stackBricks;
  -webkit-animation-duration: var(--rli-animation-duration, 1s);
          animation-duration: var(--rli-animation-duration, 1s);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: var(--rli-animation-function, ease-out);
          animation-timing-function: var(--rli-animation-function, ease-out);
}

@-webkit-keyframes stackBricks {
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}

@keyframes stackBricks {
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}`);var T2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=C.useCallback(function(){var c,d;if(n.current){var f=Array.from({length:3},function(m,p){return"--brick".concat(p+1,"-color")});(c=n.current)===null||c===void 0||c.style.removeProperty("color");for(var h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length,m=c[0];f.color=m;for(var p=0;p<h&&!(p>=3);p++)f["--brick".concat(p+1,"-color")]=c[p];return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u)},b.createElement("span",{className:"rli-d-i-b brick-stack-indicator",style:E({},i)},b.createElement("span",{className:" rli-d-i-b brick-stack"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};me(`.windmill-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: rgb(50, 205, 50);
}
.windmill-rli-bounding-box .windmill-indicator {
  width: 1.875em;
  height: 1.875em;
  display: block;
  position: relative;
  margin: 0 auto;
}
.windmill-rli-bounding-box .windmill-indicator .windmill {
  position: absolute;
  display: inline-block;
  left: 0.625em;
  width: 0.625em;
  height: 0.625em;
  border-radius: 50%;
  background-color: var(--windmill-dot1-color, currentColor);
  transform-origin: 50% 150%;
  -webkit-animation-name: windmillSpin;
          animation-name: windmillSpin;
  -webkit-animation-duration: var(--rli-animation-duration, 1.4s);
          animation-duration: var(--rli-animation-duration, 1.4s);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
}
.windmill-rli-bounding-box .windmill-indicator .windmill::before, .windmill-rli-bounding-box .windmill-indicator .windmill::after {
  content: "";
  display: inline-block;
  position: absolute;
}
.windmill-rli-bounding-box .windmill-indicator .windmill::before {
  left: -86.60254%;
  top: 150%;
  width: 0.625em;
  height: 0.625em;
  border-radius: 50%;
  background-color: var(--windmill-dot2-color, currentColor);
}
.windmill-rli-bounding-box .windmill-indicator .windmill::after {
  left: 86.60254%;
  top: 150%;
  width: 0.625em;
  height: 0.625em;
  border-radius: 50%;
  background-color: var(--windmill-dot3-color, currentColor);
}

@-webkit-keyframes windmillSpin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes windmillSpin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}`);var I2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size).fontSize,i=e==null?void 0:e.easing,o=ke(e==null?void 0:e.speedPlus,"1.4s").animationPeriod,s=C.useCallback(function(){var l,u;if(n.current){var c=Array.from({length:3},function(f,h){return"--windmill-dot".concat(h+1,"-color")});(l=n.current)===null||l===void 0||l.style.removeProperty("color");for(var d=0;d<c.length;d++)(u=n.current)===null||u===void 0||u.style.removeProperty(c[d])}},[n.current]),a=function(l,u){var c={};if(!l)return u(),c;if(l instanceof Array){var d=l.length,f=l[0];c.color=f;for(var h=0;h<d&&!(h>=3);h++)c["--windmill-dot".concat(h+1,"-color")]=l[h];return c}return c.color=l,c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",s);return b.createElement("span",{ref:n,className:"rli-d-i-b windmill-rli-bounding-box",style:E(E(E(E({},r&&{fontSize:r}),o&&{"--rli-animation-duration":o}),i&&{"--rli-animation-function":i}),a)},b.createElement("span",{className:"rli-d-i-b windmill-indicator"},b.createElement("span",{className:"windmill"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};me(`.bob-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: rgb(50, 205, 50);
}
.bob-rli-bounding-box .bob-indicator {
  width: 3.84em;
  height: 1.92em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 0.96em;
  height: 100%;
  display: grid;
  -webkit-animation-name: bobMovement;
          animation-name: bobMovement;
  -webkit-animation-duration: var(--rli-animation-duration, 1.2s);
          animation-duration: var(--rli-animation-duration, 1.2s);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
  -webkit-animation-delay: calc(var(--delay, 0) * 0.4s);
          animation-delay: calc(var(--delay, 0) * 0.4s);
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: -0.5;
  background: radial-gradient(circle at center, var(--bob-dot1-color, currentColor) 0% 58%, rgba(0, 0, 0, 0) 68%) center/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: 0;
  transform: translateX(150%);
  background: radial-gradient(circle at center, var(--bob-dot2-color, currentColor) 0% 58%, rgba(0, 0, 0, 0) 68%) center/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: 0.5;
  transform: translateX(300%);
  background: radial-gradient(circle at center, var(--bob-dot3-color, currentColor) 0% 58%, rgba(0, 0, 0, 0) 68%) center/100% 50% no-repeat;
}

@-webkit-keyframes bobMovement {
  20% {
    background-position: 50% 0%;
  }
  40% {
    background-position: 50% 100%;
  }
  60% {
    background-position: 50% 25%;
  }
  80% {
    background-position: 50% 50%;
  }
}

@keyframes bobMovement {
  20% {
    background-position: 50% 0%;
  }
  40% {
    background-position: 50% 100%;
  }
  60% {
    background-position: 50% 25%;
  }
  80% {
    background-position: 50% 50%;
  }
}`);var P2=function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=C.useCallback(function(){var c,d;if(n.current){var f=Array.from({length:3},function(m,p){return"--bob-dot".concat(p+1,"-color")});(c=n.current)===null||c===void 0||c.style.removeProperty("color");for(var h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])}},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c.length,m=c[0];f.color=m;for(var p=0;p<h&&!(p>=3);p++)f["--bob-dot".concat(p+1,"-color")]=c[p];return f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u)},b.createElement("span",{className:"bob-indicator",style:E({},i)},b.createElement("span",{className:"bobbing"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))},R2=b.memo(function(e){var t=Object(e).variant,n=t===void 0?"pulsate":t;return n==="pulsate"?b.createElement(N2,E({},e)):n==="brick-stack"?b.createElement(T2,E({},e)):n==="windmill"?b.createElement(I2,E({},e)):n==="bob"?b.createElement(P2,E({},e)):null});me(`.blink-blur-rli-bounding-box {
  --color-base: 50, 205, 50;
  font-size: 16px;
  color: rgb(var(--color-base));
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  width: 12em;
  height: 3em;
  position: relative;
  color: currentColor;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  position: absolute;
  top: 50%;
  display: block;
  width: 2em;
  height: 2.5em;
  border-radius: 4px;
  background-color: transparent;
  will-change: box-shadow;
  transform: skewX(-20deg) translate(-100%, -50%);
  box-shadow: 2.4em 0 0px rgba(var(--shape1-color-base, var(--color-base)), 1), 4.8em 0 3px rgba(var(--shape2-color-base, var(--color-base)), 0), 7.2em 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.6), 9.6em 0 9px rgba(var(--shape4-color-base, var(--color-base)), 0.4), 12em 0 12px rgba(var(--shape5-color-base, var(--color-base)), 0.2);
  -webkit-animation-duration: var(--rli-animation-duration, 2s);
          animation-duration: var(--rli-animation-duration, 2s);
  -webkit-animation-timing-function: var(--rli-animation-function, linear);
          animation-timing-function: var(--rli-animation-function, linear);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@-webkit-keyframes sweepingBlinkBlur {
  0% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 12.9px rgba(var(--shape5-color-base, var(--color-base)), 0.14);
  }
  10% {
    box-shadow: 2.4em 0 0px rgba(var(--shape1-color-base, var(--color-base)), 1), 4.8em 0 3px rgba(var(--shape2-color-base, var(--color-base)), 0), 7.2em 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.6), 9.6em 0 9px rgba(var(--shape4-color-base, var(--color-base)), 0.4), 12em 0 12px rgba(var(--shape5-color-base, var(--color-base)), 0.2);
  }
  20% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0.8), 4.8em 0 0px rgba(var(--shape2-color-base, var(--color-base)), 1), 7.2em 0 3px rgba(var(--shape3-color-base, var(--color-base)), 0), 9.6em 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.6), 12em 0 9px rgba(var(--shape5-color-base, var(--color-base)), 0.4);
  }
  30% {
    box-shadow: 2.4em 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.6), 4.8em 0 3px rgba(var(--shape2-color-base, var(--color-base)), 0.8), 7.2em 0 0px rgba(var(--shape3-color-base, var(--color-base)), 1), 9.6em 0 3px rgba(var(--shape4-color-base, var(--color-base)), 0), 12em 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.6);
  }
  40% {
    box-shadow: 2.4em 0 9px rgba(var(--shape1-color-base, var(--color-base)), 0.4), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 3px rgba(var(--shape3-color-base, var(--color-base)), 0.8), 9.6em 0 0px rgba(var(--shape4-color-base, var(--color-base)), 1), 12em 0 3px rgba(var(--shape5-color-base, var(--color-base)), 0);
  }
  50% {
    box-shadow: 2.4em 0 12px rgba(var(--shape1-color-base, var(--color-base)), 0.2), 4.8em 0 9px rgba(var(--shape2-color-base, var(--color-base)), 0.4), 7.2em 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.6), 9.6em 0 3px rgba(var(--shape4-color-base, var(--color-base)), 0.8), 12em 0 0px rgba(var(--shape5-color-base, var(--color-base)), 1);
  }
  60% {
    box-shadow: 2.4em 0 12.9px rgba(var(--shape1-color-base, var(--color-base)), 0.14), 4.8em 0 12px rgba(var(--shape2-color-base, var(--color-base)), 0.2), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.6), 12em 0 3px rgba(var(--shape5-color-base, var(--color-base)), 0.8);
  }
  70% {
    box-shadow: 2.4em 0 12px rgba(var(--shape1-color-base, var(--color-base)), 0.2), 4.8em 0 12.9px rgba(var(--shape2-color-base, var(--color-base)), 0.14), 7.2em 0 12px rgba(var(--shape3-color-base, var(--color-base)), 0.2), 9.6em 0 9px rgba(var(--shape4-color-base, var(--color-base)), 0.4), 12em 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.6);
  }
  80% {
    box-shadow: 2.4em 0 9px rgba(var(--shape1-color-base, var(--color-base)), 0.4), 4.8em 0 12px rgba(var(--shape2-color-base, var(--color-base)), 0.2), 7.2em 0 12.9px rgba(var(--shape3-color-base, var(--color-base)), 0.14), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 9px rgba(var(--shape5-color-base, var(--color-base)), 0.4);
  }
  90% {
    box-shadow: 2.4em 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.6), 4.8em 0 9px rgba(var(--shape2-color-base, var(--color-base)), 0.4), 7.2em 0 12px rgba(var(--shape3-color-base, var(--color-base)), 0.2), 9.6em 0 12.9px rgba(var(--shape4-color-base, var(--color-base)), 0.14), 12em 0 12px rgba(var(--shape5-color-base, var(--color-base)), 0.2);
  }
  100% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0.8), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 12.9px rgba(var(--shape5-color-base, var(--color-base)), 0.14);
  }
}

@keyframes sweepingBlinkBlur {
  0% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 12.9px rgba(var(--shape5-color-base, var(--color-base)), 0.14);
  }
  10% {
    box-shadow: 2.4em 0 0px rgba(var(--shape1-color-base, var(--color-base)), 1), 4.8em 0 3px rgba(var(--shape2-color-base, var(--color-base)), 0), 7.2em 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.6), 9.6em 0 9px rgba(var(--shape4-color-base, var(--color-base)), 0.4), 12em 0 12px rgba(var(--shape5-color-base, var(--color-base)), 0.2);
  }
  20% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0.8), 4.8em 0 0px rgba(var(--shape2-color-base, var(--color-base)), 1), 7.2em 0 3px rgba(var(--shape3-color-base, var(--color-base)), 0), 9.6em 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.6), 12em 0 9px rgba(var(--shape5-color-base, var(--color-base)), 0.4);
  }
  30% {
    box-shadow: 2.4em 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.6), 4.8em 0 3px rgba(var(--shape2-color-base, var(--color-base)), 0.8), 7.2em 0 0px rgba(var(--shape3-color-base, var(--color-base)), 1), 9.6em 0 3px rgba(var(--shape4-color-base, var(--color-base)), 0), 12em 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.6);
  }
  40% {
    box-shadow: 2.4em 0 9px rgba(var(--shape1-color-base, var(--color-base)), 0.4), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 3px rgba(var(--shape3-color-base, var(--color-base)), 0.8), 9.6em 0 0px rgba(var(--shape4-color-base, var(--color-base)), 1), 12em 0 3px rgba(var(--shape5-color-base, var(--color-base)), 0);
  }
  50% {
    box-shadow: 2.4em 0 12px rgba(var(--shape1-color-base, var(--color-base)), 0.2), 4.8em 0 9px rgba(var(--shape2-color-base, var(--color-base)), 0.4), 7.2em 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.6), 9.6em 0 3px rgba(var(--shape4-color-base, var(--color-base)), 0.8), 12em 0 0px rgba(var(--shape5-color-base, var(--color-base)), 1);
  }
  60% {
    box-shadow: 2.4em 0 12.9px rgba(var(--shape1-color-base, var(--color-base)), 0.14), 4.8em 0 12px rgba(var(--shape2-color-base, var(--color-base)), 0.2), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.6), 12em 0 3px rgba(var(--shape5-color-base, var(--color-base)), 0.8);
  }
  70% {
    box-shadow: 2.4em 0 12px rgba(var(--shape1-color-base, var(--color-base)), 0.2), 4.8em 0 12.9px rgba(var(--shape2-color-base, var(--color-base)), 0.14), 7.2em 0 12px rgba(var(--shape3-color-base, var(--color-base)), 0.2), 9.6em 0 9px rgba(var(--shape4-color-base, var(--color-base)), 0.4), 12em 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.6);
  }
  80% {
    box-shadow: 2.4em 0 9px rgba(var(--shape1-color-base, var(--color-base)), 0.4), 4.8em 0 12px rgba(var(--shape2-color-base, var(--color-base)), 0.2), 7.2em 0 12.9px rgba(var(--shape3-color-base, var(--color-base)), 0.14), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 9px rgba(var(--shape5-color-base, var(--color-base)), 0.4);
  }
  90% {
    box-shadow: 2.4em 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.6), 4.8em 0 9px rgba(var(--shape2-color-base, var(--color-base)), 0.4), 7.2em 0 12px rgba(var(--shape3-color-base, var(--color-base)), 0.2), 9.6em 0 12.9px rgba(var(--shape4-color-base, var(--color-base)), 0.14), 12em 0 12px rgba(var(--shape5-color-base, var(--color-base)), 0.2);
  }
  100% {
    box-shadow: 2.4em 0 3px rgba(var(--shape1-color-base, var(--color-base)), 0.8), 4.8em 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.6), 7.2em 0 9px rgba(var(--shape3-color-base, var(--color-base)), 0.4), 9.6em 0 12px rgba(var(--shape4-color-base, var(--color-base)), 0.2), 12em 0 12.9px rgba(var(--shape5-color-base, var(--color-base)), 0.14);
  }
}`);var Yt=A("rgb(50, 205, 50)").toRgb();b.memo(function(e){var t,n=C.useRef(null),r=C.useRef(null),i=xe(e==null?void 0:e.style,e==null?void 0:e.size),o=i.styles,s=i.fontSize,a=e==null?void 0:e.easing,l=ke(e==null?void 0:e.speedPlus,"2s").animationPeriod;C.useEffect(function(){var d=r==null?void 0:r.current;return d&&(d.style.animationName="sweepingBlinkBlur"),function(){d&&(d.style.willChange="auto")}},[]);var u=C.useCallback(function(){var d;if(n.current)for(var f=Array.from({length:7},function(m,p){return"--".concat(p?"shape"+p+"-":"","color-base")}),h=0;h<f.length;h++)(d=n.current)===null||d===void 0||d.style.removeProperty(f[h])},[n.current]),c=function(d,f){var h={};if(!d)return f(),h;if(d instanceof Array&&d.length>0){try{var m=A(d[0]);if(!m.isValid())throw new Error("invalid color");var p=m.toRgb();h["--color-base"]="".concat(p.r,", ").concat(p.g,", ").concat(p.b)}catch{console.warn("Possibly an invalid color( ".concat(JSON.stringify(d[0])," ) passed to BlinkBlur loader!")),h["--color-base"]="".concat(Yt.r,", ").concat(Yt.g,", ").concat(Yt.b)}for(var _=d.length,v=0;v<_&&!(v>5);v++){var g="shape".concat(v+1);try{if(!(y=A(d[v])).isValid())throw new Error("invalid color");p=y.toRgb(),h["--".concat(g,"-color-base")]="".concat(p.r,", ").concat(p.g,", ").concat(p.b)}catch{console.warn("Possibly an invalid color( ".concat(d[v]," ) in BlinkBlur loader!")),h["--".concat(g,"-color-base")]="".concat(Yt.r,", ").concat(Yt.g,", ").concat(Yt.b)}}return h}try{if(typeof d!="string")throw new Error("Color unprocessable");var y;if(!(y=A(d)).isValid())throw new Error("invalid color");p=y.toRgb(),h["--color-base"]="".concat(p.r,", ").concat(p.g,", ").concat(p.b)}catch{console.warn("Possibly an invalid color( ".concat(JSON.stringify(d)," ) passed to BlinkBlur loader!")),h["--color-base"]="".concat(Yt.r,", ").concat(Yt.g,", ").concat(Yt.b)}return h}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",u);return b.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",ref:n,style:E(E(E(E({},s&&{fontSize:s}),l&&{"--rli-animation-duration":l}),a&&{"--rli-animation-function":a}),c)},b.createElement("span",{className:"rli-d-i-b blink-blur-indicator",style:E({},o)},b.createElement("span",{ref:r,className:"blink-blur-shape"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))});me(`.trophy-spin-rli-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: rgb(50, 205, 50);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: currentColor;
  -webkit-animation: trophyBlade var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, bgPlay calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite;
          animation: trophyBlade var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, bgPlay calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:not(:last-of-type) {
  margin-bottom: 0.06em;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(8) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(7) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(6) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(5) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(4) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(3) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(2) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-child(1) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
          animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-text {
  color: currentColor;
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}

@-webkit-keyframes trophyBlade {
  from {
    transform: rotateY(0deg) rotateX(-20deg);
  }
  to {
    transform: rotateY(360deg) rotateX(-20deg);
  }
}

@keyframes trophyBlade {
  from {
    transform: rotateY(0deg) rotateX(-20deg);
  }
  to {
    transform: rotateY(360deg) rotateX(-20deg);
  }
}
@-webkit-keyframes bgPlay {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(0.59);
  }
  51% {
    filter: opacity(0.5);
  }
  70% {
    filter: opacity(0.7);
  }
  100% {
    filter: opacity(1);
  }
}
@keyframes bgPlay {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(0.59);
  }
  51% {
    filter: opacity(0.5);
  }
  70% {
    filter: opacity(0.7);
  }
  100% {
    filter: opacity(1);
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"2.5s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b trophy-spin-rli-bounding-box",ref:n,style:E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u)},b.createElement("span",{className:"rli-d-i-b trophy-spin-indicator",style:E({},i)},b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"}),b.createElement("span",{className:"blade"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))});me(`.slab-rli-bounding-box {
  font-size: 16px;
  color: rgb(50, 205, 50);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4.4em;
  margin: 0 auto;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  margin-bottom: -1.3em;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  -webkit-animation: slabMove var(--rli-animation-duration, 4s) var(--rli-animation-function, linear) infinite;
          animation: slabMove var(--rli-animation-duration, 4s) var(--rli-animation-function, linear) infinite;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -3);
          animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -3);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -2);
          animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -2);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  -webkit-animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -1);
          animation-delay: calc(var(--rli-animation-duration, 4s) / 4 * -1);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}

@-webkit-keyframes slabMove {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-48%) rotateX(0deg);
    opacity: 1;
  }
  90% {
    transform: translateY(-422%) rotateX(0deg);
    opacity: 0.1;
  }
  100% {
    transform: translateY(-480%) rotateX(0deg);
    opacity: 0;
  }
}

@keyframes slabMove {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-48%) rotateX(0deg);
    opacity: 1;
  }
  90% {
    transform: translateY(-422%) rotateX(0deg);
    opacity: 0.1;
  }
  100% {
    transform: translateY(-480%) rotateX(0deg);
    opacity: 0;
  }
}`);b.memo(function(e){var t,n=C.useRef(null),r=xe(e==null?void 0:e.style,e==null?void 0:e.size),i=r.styles,o=r.fontSize,s=e==null?void 0:e.easing,a=ke(e==null?void 0:e.speedPlus,"4s").animationPeriod,l=C.useCallback(function(){var c;n.current&&((c=n.current)===null||c===void 0||c.style.removeProperty("color"))},[n.current]),u=function(c,d){var f={};if(!c)return d(),f;if(c instanceof Array){var h=c[0];return f.color=h,f}return f.color=c,f}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",l);return b.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",ref:n,style:E(E(E(E(E({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),s&&{"--rli-animation-function":s}),u),i)},b.createElement("span",{className:"rli-d-i-b slab-indicator"},b.createElement("span",{className:"slabs-wrapper"},b.createElement("span",{className:"slab"}),b.createElement("span",{className:"slab"}),b.createElement("span",{className:"slab"}),b.createElement("span",{className:"slab"}))),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))});me(`.lifeline-rli-bounding-box {
  font-size: 16px;
  isolation: isolate;
}
.lifeline-rli-bounding-box .lifeline-throbber {
  color: rgb(50, 205, 50);
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-throbber svg.rli-lifeline-svg {
  visibility: hidden;
  overflow: hidden;
}
.lifeline-rli-bounding-box .lifeline-throbber .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}`);b.memo(function(e){var t,n=C.useRef(null),r=C.useRef(null),i=C.useRef(null),o=xe(e==null?void 0:e.style,e==null?void 0:e.size),s=o.styles,a=o.fontSize,l=e==null?void 0:e.easing,u=ke(e==null?void 0:e.speedPlus,"2s").animationPeriod,c=C.useCallback(function(){var f;n.current&&((f=n.current)===null||f===void 0||f.style.removeProperty("color"))},[n.current]),d=function(f,h){var m={};if(!f)return h(),m;if(f instanceof Array){var p=f[0];return m.color=p,m}return m.color=f,m}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"",c);return C.useEffect(function(){if(r.current){var f=r.current,h=f.parentElement,m=f.getTotalLength(),p=m/2,_=.94*p,v=.06*p;f.style.strokeDasharray="".concat(_," ").concat(v),f.style.strokeDashoffset="".concat(m),h&&(h.style.visibility="visible"),f.getBoundingClientRect();var g=new KeyframeEffect(f,[{strokeDashoffset:"".concat(m)},{strokeDashoffset:"0"}],{duration:1e3*parseFloat("2s"),iterations:1/0,easing:l||"linear"}),y=new Animation(g,document.timeline);i.current=y,y.play()}return function(){i.current=null}},[]),C.useEffect(function(){var f;try{i.current&&((f=i.current.effect)===null||f===void 0||f.updateTiming({duration:1e3*parseFloat(u),easing:l}))}catch(h){console.warn(h==null?void 0:h.message)}},[l,u]),b.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:E(E(E({},a&&{fontSize:a}),u&&{"--rli-animation-duration":u}),l&&{"--rli-animation-function":l})},b.createElement("span",{ref:n,className:"rli-d-i-b lifeline-throbber",style:E(E({},d),s)},b.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet",className:"rli-pulse-svg"},b.createElement("path",{ref:r,stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"0.18em",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"})),b.createElement(Se,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))});const A2=()=>{const e=Zd(t=>t.working.isWorking);return k.jsx("div",{children:e&&k.jsxs("span",{children:[k.jsx(R2,{color:"#022B61",size:"medium",text:"",textColor:""})," "]})})};function O2(){return k.jsxs("div",{children:[k.jsx("nav",{className:"bg-white border-gray-200",children:k.jsxs("div",{className:"max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4",children:[k.jsxs("a",{href:"#",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[k.jsx("img",{src:Fw,className:"h-12",alt:"Flowbite Logo"}),k.jsx("span",{className:"self-center text-2xl font-semibold whitespace-nowrap text-sky-900",children:"Twój organizer"}),k.jsx(A2,{})]}),k.jsxs("button",{"data-collapse-toggle":"navbar-default",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200","aria-controls":"navbar-default","aria-expanded":"false",children:[k.jsx("span",{className:"sr-only",children:"Open main menu"}),k.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:k.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),k.jsx("div",{className:"hidden w-full md:block md:w-auto",id:"navbar-default",children:k.jsxs("ul",{className:"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white",children:[k.jsx("li",{children:k.jsx("a",{href:"/",className:"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-sky-900 md:p-0","aria-current":"page",children:"Strona główna"})}),k.jsx("li",{children:k.jsx("a",{href:"/#/listy-zadan",className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-900 md:p-0",children:"Listy Zadań"})})]})})]})}),k.jsx("main",{children:k.jsx("div",{className:"h-50vh",children:k.jsx(Rw,{})})}),k.jsx("footer",{className:"flex items-center justify-center h-16",children:k.jsx("p",{className:"text-gray-300",children:"057178"})})]})}const D2="data:image/svg+xml,%3csvg%20width='324'%20height='247'%20viewBox='0%200%20324%20247'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='layer1'%3e%3cg%20id='logo'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20from='0.90'%20to='1'%20dur='2s'%20repeatCount='1'%20/%3e%3cg%20id='book'%3e%3cg%20id='right-book'%3e%3cpath%20id='path15'%20d='M267.682%200.536987L267.238%20131.336L281.989%20144.346'%20fill='%23022B61'/%3e%3cpath%20id='path18'%20d='M281.716%20143.927C215.284%20163.709%20196.65%20181.034%20162.801%20198.155C187.507%20178.631%20178.086%20163.884%20267.91%20131.273'%20fill='%23022B61'/%3e%3cpath%20id='rect7'%20d='M171.295%2060.5823C170.775%2023.5393%20241.11%209.02673%20241.11%209.02673L247.554%20118.582C247.554%20118.582%20180.414%20163.239%20168.073%20207.731C154.959%20255.007%20172.059%20115.027%20171.295%2060.5823Z'%20fill='%230c4a6e'/%3e%3c/g%3e%3cg%20id='left-book'%3e%3cpath%20id='path20'%20d='M56.8113%200L57.255%20130.799L42.5046%20143.809'%20fill='%23022B61'/%3e%3cpath%20id='path21'%20d='M42.7775%20143.39C109.209%20163.172%20127.843%20180.497%20161.692%20197.618C136.986%20178.094%20146.407%20163.347%2056.5829%20130.736'%20fill='%23022B61'/%3e%3cpath%20id='path22'%20d='M153.198%2060.0453C153.718%2023.0023%2083.3833%208.48975%2083.3833%208.48975L76.9388%20118.045C76.9388%20118.045%20144.079%20162.702%20156.42%20207.194C169.534%20254.47%20152.434%20114.49%20153.198%2060.0453Z'%20fill='%230c4a6e'/%3e%3c/g%3e%3c/g%3e%3cg%20id='okrag'%3e%3cpath%20id='path5'%20d='M159.5%2031C138.554%2031%20117.813%2033.2704%2098.4617%2037.6816C79.1102%2042.0928%2061.527%2048.5584%2046.716%2056.7093C31.9051%2064.8601%2020.1564%2074.5366%2012.1408%2085.1862C4.12529%2095.8358%20-0.000171448%20107.25%205.34397e-09%20118.777C0.0591403%20134.74%208.97967%20147.937%2024%20161.594C19.6314%20154.238%2014.0512%20151.76%2013.6725%20144C12.2795%20139.831%2012.2218%20123.012%2012.1408%20118.777C12.1415%2098.5434%2028.7175%2088.9822%2055.4958%2074.6751C82.274%2060.368%20118.593%2052.3303%20156.463%2052.3303C194.333%2052.3303%20230.651%2060.368%20257.43%2074.6751C284.208%2088.9822%20299.252%20108.387%20299.253%20128.62C299.242%20140.035%20294.437%20151.303%20285.192%20161.594C281.011%20169.59%20271.393%20175.154%20263%20182C279.612%20173.771%20296.106%20165.712%20305.2%20154.476C314.295%20143.24%20318.996%20131.077%20319%20118.777C319%20107.25%20314.875%2095.8358%20306.859%2085.1862C298.844%2074.5366%20287.095%2064.8601%20272.284%2056.7093C257.473%2048.5584%20239.89%2042.0928%20220.538%2037.6816C201.187%2033.2704%20180.446%2031%20159.5%2031Z'%20fill='%23FEFEFE'/%3e%3cpath%20id='path4'%20d='M159.492%2040.1651C138.547%2040.1651%20117.807%2042.2671%2098.4569%2046.3511C79.1063%2050.4351%2061.524%2056.421%2046.7137%2063.9673C31.9035%2071.5135%2020.1554%2080.4722%2012.1402%2090.3318C4.12509%20100.191%20-0.00017144%20110.759%205.34371e-09%20121.431C0.0417946%20137.795%209.77914%20153.772%2027.9375%20167.27C46.0959%20180.768%2071.8293%20191.159%20101.77%20197.081C88.3378%20193.985%2075.934%20189.78%2065.0273%20184.626C48.9979%20178.016%2036.0924%20169.748%2027.2196%20160.404C18.3468%20151.06%2013.7224%20140.867%2013.6719%20130.544C13.7068%20119.445%2019.0291%20108.505%2029.2073%2098.6137C39.3855%2088.7219%2054.133%2080.1559%2072.2539%2073.6104C96.3653%2063.7845%20126.005%2058.4483%20156.514%2058.4405C187.157%2058.4526%20216.917%2063.84%20241.076%2073.7491C259.082%2080.3028%20273.725%2088.8563%20283.827%2098.721C293.929%20108.586%20299.208%20119.486%20299.238%20130.544C299.231%20140.684%20294.811%20150.705%20286.277%20159.925C277.744%20169.145%20265.297%20177.348%20249.783%20183.976C230.744%20193.196%20207.143%20199.406%20181.691%20201.894C219.768%20199.167%20254.629%20189.523%20279.856%20174.738C305.084%20159.953%20318.979%20141.022%20318.984%20121.431C318.985%20110.759%20314.859%20100.191%20306.844%2090.3318C298.829%2080.4722%20287.081%2071.5135%20272.271%2063.9673C257.46%2056.421%20239.878%2050.4351%20220.527%2046.3511C201.177%2042.2671%20180.437%2040.1651%20159.492%2040.1651Z'%20fill='%232B7C97'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";function M2(){return k.jsx("div",{className:"App",children:k.jsxs("header",{className:"App-header",children:[k.jsx("img",{src:D2,className:"App-logo",alt:"logo"}),k.jsx("p",{className:"title self-center text-5xl font-semibold whitespace-nowrap text-sky-900",children:"Twój organizer"}),k.jsx("p",{className:"title2 self-center text-4xl m-5 font-semibold font-custom-italic whitespace-nowrap text-[#2B7C97] ",children:"Zawsze pod ręką!"})]})})}var Ep={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(e,t){if(!e)throw bi(t)},bi=function(e){return new Error("Firebase Database ("+rv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},L2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(iv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):L2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new F2;const f=o<<2|a>>4;if(r.push(f),u!==64){const h=a<<4&240|u>>2;if(r.push(h),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class F2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ov=function(e){const t=iv(e);return ef.encodeByteArray(t,!0)},ha=function(e){return ov(e).replace(/\./g,"")},wc=function(e){try{return ef.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(e){return Co(void 0,e)}function Co(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!j2(n)||(e[n]=Co(e[n],t[n]));return e}function j2(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=()=>B2().__FIREBASE_DEFAULTS__,U2=()=>{if(typeof process>"u"||typeof Ep>"u")return;const e=Ep.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},W2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wc(e[1]);return t&&JSON.parse(t)},V2=()=>{try{return $2()||U2()||W2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sv=()=>{var e;return(e=V2())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ha(JSON.stringify(n)),ha(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function av(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q2())}function lv(){return typeof self=="object"&&self.self===self}function G2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uv(){return rv.NODE_ADMIN===!0}function K2(){try{return typeof indexedDB=="object"}catch{return!1}}function q2(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="FirebaseError";class wi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Y2,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?X2(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new wi(i,a,r)}}function X2(e,t){return e.replace(Z2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Z2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e){return JSON.parse(e)}function he(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=xo(wc(o[0])||""),n=xo(wc(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},J2=function(e){const t=cv(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},eE=function(e){const t=cv(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function gr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Ec(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function pa(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Cc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Cp(o)&&Cp(s)){if(!Cc(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):d<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function rE(e,t){const n=new iE(e,t);return n.subscribe.bind(n)}class iE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=lu),i.error===void 0&&(i.error=lu),i.complete===void 0&&(i.complete=lu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function lu(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=n===0?"none":"no more than "+n),i){const o=e+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function Ye(e,t){return`${e} failed: ${t} argument `}function _e(e,t,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Ye(e,t)+"must be a valid function.")}function xp(e,t,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(Ye(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,S(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},nl=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return e&&e._delegate?e._delegate:e}class cn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ve;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lE(t))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tr){return this.instances.has(t)}getOptions(t=tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tr){return this.component?this.component.multipleInstances?t:tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aE(e){return e===tr?void 0:e}function lE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=[];var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const dv={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},uE=K.INFO,cE={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},dE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=cE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rl{constructor(t){this.name=t,this._logLevel=uE,this._logHandler=dE,this._userLogHandler=null,nf.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}function fE(e){nf.forEach(t=>{t.setLogLevel(e)})}function hE(e,t){for(const n of nf){let r=null;t&&t.level&&(r=dv[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&e({level:K[o].toLowerCase(),message:a,args:s,type:i.name})}}}const pE=(e,t)=>t.some(n=>e instanceof n);let Sp,kp;function mE(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,Sc=new WeakMap,hv=new WeakMap,uu=new WeakMap,rf=new WeakMap;function vE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(An(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&fv.set(n,e)}).catch(()=>{}),rf.set(t,e),t}function yE(e){if(Sc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Sc.set(e,t)}let kc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _E(e){kc=e(kc)}function bE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cu(this),t,...n);return hv.set(r,t.sort?t.sort():[t]),An(r)}:gE().includes(e)?function(...t){return e.apply(cu(this),t),An(fv.get(this))}:function(...t){return An(e.apply(cu(this),t))}}function wE(e){return typeof e=="function"?bE(e):(e instanceof IDBTransaction&&yE(e),pE(e,mE())?new Proxy(e,kc):e)}function An(e){if(e instanceof IDBRequest)return vE(e);if(uu.has(e))return uu.get(e);const t=wE(e);return t!==e&&(uu.set(e,t),rf.set(t,e)),t}const cu=e=>rf.get(e);function EE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=An(s);return r&&s.addEventListener("upgradeneeded",l=>{r(An(s.result),l.oldVersion,l.newVersion,An(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const CE=["get","getKey","getAll","getAllKeys","count"],xE=["put","add","delete","clear"],du=new Map;function Np(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(du.get(t))return du.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=xE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return du.set(t,o),o}_E(e=>({...e,get:(t,n,r)=>Np(t,n)||e.get(t,n,r),has:(t,n)=>!!Np(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ma="@firebase/app",Nc="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new rl("@firebase/app"),NE="@firebase/app-compat",TE="@firebase/analytics-compat",IE="@firebase/analytics",PE="@firebase/app-check-compat",RE="@firebase/app-check",AE="@firebase/auth",OE="@firebase/auth-compat",DE="@firebase/database",ME="@firebase/database-compat",LE="@firebase/functions",FE="@firebase/functions-compat",zE="@firebase/installations",jE="@firebase/installations-compat",BE="@firebase/messaging",$E="@firebase/messaging-compat",UE="@firebase/performance",WE="@firebase/performance-compat",VE="@firebase/remote-config",HE="@firebase/remote-config-compat",QE="@firebase/storage",GE="@firebase/storage-compat",KE="@firebase/firestore",qE="@firebase/vertexai-preview",YE="@firebase/firestore-compat",XE="firebase",ZE="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]",JE={[ma]:"fire-core",[NE]:"fire-core-compat",[IE]:"fire-analytics",[TE]:"fire-analytics-compat",[RE]:"fire-app-check",[PE]:"fire-app-check-compat",[AE]:"fire-auth",[OE]:"fire-auth-compat",[DE]:"fire-rtdb",[ME]:"fire-rtdb-compat",[LE]:"fire-fn",[FE]:"fire-fn-compat",[zE]:"fire-iid",[jE]:"fire-iid-compat",[BE]:"fire-fcm",[$E]:"fire-fcm-compat",[UE]:"fire-perf",[WE]:"fire-perf-compat",[VE]:"fire-rc",[HE]:"fire-rc-compat",[QE]:"fire-gcs",[GE]:"fire-gcs-compat",[KE]:"fire-fst",[YE]:"fire-fst-compat",[qE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,ai=new Map,li=new Map;function So(e,t){try{e.container.addComponent(t)}catch(n){vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pv(e,t){e.container.addOrOverwriteComponent(t)}function ui(e){const t=e.name;if(li.has(t))return vr.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,e);for(const n of Bn.values())So(n,e);for(const n of ai.values())So(n,e);return!0}function mv(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function eC(e,t,n=jn){mv(e,t).clearInstance(n)}function gv(e){return e.options!==void 0}function tC(e){return e.settings!==void 0}function nC(){li.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new tl("app","Firebase",rC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vv=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends vv{constructor(t,n,r,i){const o=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,s={name:r,automaticDataCollectionEnabled:o};if(t.apiKey!==void 0)super(t,s,i);else{const a=t;super(a.options,s,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,rn(ma,Nc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(t){this.isDeleted||(this._refCount++,t!==void 0&&this._finalizationRegistry.register(t,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){af(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw wt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=ZE;function sf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jn,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=sv()),!n)throw wt.create("no-options");const o=Bn.get(i);if(o){if(Cc(n,o.options)&&Cc(r,o.config))return o;throw wt.create("duplicate-app",{appName:i})}const s=new tf(i);for(const l of li.values())s.addComponent(l);const a=new vv(n,r,s);return Bn.set(i,a),a}function oC(e,t){if(lv())throw wt.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===void 0&&(t.automaticDataCollectionEnabled=!1);let n;gv(e)?n=e.options:n=e;const r=Object.assign(Object.assign({},t),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((c,d)=>Math.imul(31,c)+d.charCodeAt(0)|0,0);if(t.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw wt.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(r)),s=ai.get(o);if(s)return s.incRefCount(t.releaseOnDeref),s;const a=new tf(o);for(const u of li.values())a.addComponent(u);const l=new iC(n,t,o,a);return ai.set(o,l),l}function sC(e=jn){const t=Bn.get(e);if(!t&&e===jn&&sv())return sf();if(!t)throw wt.create("no-app",{appName:e});return t}function aC(){return Array.from(Bn.values())}async function af(e){let t=!1;const n=e.name;Bn.has(n)?(t=!0,Bn.delete(n)):ai.has(n)&&e.decRefCount()<=0&&(ai.delete(n),t=!0),t&&(await Promise.all(e.container.getProviders().map(r=>r.delete())),e.isDeleted=!0)}function rn(e,t,n){var r;let i=(r=JE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}ui(new cn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function yv(e,t){if(e!==null&&typeof e!="function")throw wt.create("invalid-log-argument");hE(e,t)}function _v(e){fE(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="firebase-heartbeat-database",uC=1,ko="firebase-heartbeat-store";let fu=null;function bv(){return fu||(fu=EE(lC,uC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})})),fu}async function cC(e){try{const n=(await bv()).transaction(ko),r=await n.objectStore(ko).get(wv(e));return await n.done,r}catch(t){if(t instanceof wi)vr.warn(t.message);else{const n=wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});vr.warn(n.message)}}}async function Tp(e,t){try{const r=(await bv()).transaction(ko,"readwrite");await r.objectStore(ko).put(t,wv(e)),await r.done}catch(n){if(n instanceof wi)vr.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function wv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=1024,fC=30*24*60*60*1e3;class hC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ip();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=fC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ip(),{heartbeatsToSend:r,unsentEntries:i}=pC(this._heartbeatsCache.heartbeats),o=ha(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ip(){return new Date().toISOString().substring(0,10)}function pC(e,t=dC){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Pp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K2()?q2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pp(e){return ha(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(e){ui(new cn("platform-logger",t=>new SE(t),"PRIVATE")),ui(new cn("heartbeat",t=>new hC(t),"PRIVATE")),rn(ma,Nc,e),rn(ma,Nc,"esm2017"),rn("fire-js","")}gC("");const vC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wi,SDK_VERSION:of,_DEFAULT_ENTRY_NAME:jn,_addComponent:So,_addOrOverwriteComponent:pv,_apps:Bn,_clearComponents:nC,_components:li,_getProvider:mv,_isFirebaseApp:gv,_isFirebaseServerApp:tC,_registerComponent:ui,_removeServiceInstance:eC,_serverApps:ai,deleteApp:af,getApp:sC,getApps:aC,initializeApp:sf,initializeServerApp:oC,onLog:yv,registerVersion:rn,setLogLevel:_v},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(t,n){this._delegate=t,this.firebase=n,So(t,new cn("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),af(this._delegate)))}_getService(t,n=jn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=jn){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){So(this._delegate,t)}_addOrOverwriteComponent(t){pv(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rp=new tl("app-compat","Firebase",_C);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:rn,setLogLevel:_v,onLog:yv,apps:null,SDK_VERSION:of,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:vC}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete t[u]}function i(u){if(u=u||jn,!st(t,u))throw Rp.create("no-app",{appName:u});return t[u]}i.App=e;function o(u,c={}){const d=sf(u,c);if(st(t,d.name))return t[d.name];const f=new e(d,n);return t[d.name]=f,f}function s(){return Object.keys(t).map(u=>t[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(ui(u)&&u.type==="PUBLIC"){const f=(h=i())=>{if(typeof h[d]!="function")throw Rp.create("invalid-app-argument",{appName:c});return h[d]()};u.serviceProps!==void 0&&Co(f,u.serviceProps),n[d]=f,e.prototype[d]=function(...h){return this._getService.bind(this,c).apply(this,u.multipleInstances?h:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){const e=bC(yC);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Ev,extendNamespace:t,createSubscribe:rE,ErrorFactory:tl,deepExtend:Co});function t(n){Co(e,n)}return e}const wC=Ev();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new rl("@firebase/app-compat"),EC="@firebase/app-compat",CC="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(e){rn(EC,CC,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(lv()&&self.firebase!==void 0){Ap.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Ap.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Xr=wC;xC();var SC="firebase",kC="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr.registerVersion(SC,kC,"app-compat");var Op={};const Dp="@firebase/database",Mp="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cv="";function xv(e){Cv=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),he(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:xo(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return st(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new NC(t)}}catch{}return new TC},ar=Sv("localStorage"),Tc=Sv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new rl("@firebase/database"),kv=function(){let e=1;return function(){return e++}}(),Nv=function(e){const t=sE(e),n=new nE;n.update(t);const r=n.digest();return ef.encodeByteArray(r)},Ho=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ho.apply(null,r):typeof r=="object"?t+=he(r):t+=r,t+=" "}return t};let cr=null,Lp=!0;const Tv=function(e,t){S(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Zr.logLevel=K.VERBOSE,cr=Zr.log.bind(Zr),t&&Tc.set("logging_enabled",!0)):typeof e=="function"?cr=e:(cr=null,Tc.remove("logging_enabled"))},we=function(...e){if(Lp===!0&&(Lp=!1,cr===null&&Tc.get("logging_enabled")===!0&&Tv(!0)),cr){const t=Ho.apply(null,e);cr(t)}},Qo=function(e){return function(...t){we(e,...t)}},Ic=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ho(...e);Zr.error(t)},Qt=function(...e){const t=`FIREBASE FATAL ERROR: ${Ho(...e)}`;throw Zr.error(t),new Error(t)},Le=function(...e){const t="FIREBASE WARNING: "+Ho(...e);Zr.warn(t)},IC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},il=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},PC=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$n="[MIN_NAME]",dn="[MAX_NAME]",kr=function(e,t){if(e===t)return 0;if(e===$n||t===dn)return-1;if(t===$n||e===dn)return 1;{const n=Fp(e),r=Fp(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},RC=function(e,t){return e===t?0:e<t?-1:1},Li=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+he(t))},lf=function(e){if(typeof e!="object"||e===null)return he(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=he(t[r]),n+=":",n+=lf(e[t[r]]);return n+="}",n},Iv=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ce(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Pv=function(e){S(!il(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},AC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DC(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const MC=new RegExp("^-?(0*)\\d{1,10}$"),LC=-2147483648,FC=2147483647,Fp=function(e){if(MC.test(e)){const t=Number(e);if(t>=LC&&t<=FC)return t}return null},Ei=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Le("Exception was thrown by user callback.",n),t},Math.floor(0))}},zC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},to=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(t)}}class Jr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Jr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="5",Rv="v",Av="s",Ov="r",Dv="f",Mv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lv="ls",Fv="p",Pc="ac",zv="websocket",jv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ar.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ar.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function $C(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function $v(e,t,n){S(typeof t=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(t===zv)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===jv)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);$C(e)&&(n.ns=e.namespace);const i=[];return Ce(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.counters_={}}incrementCounter(t,n=1){st(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return z2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu={},pu={};function cf(e){const t=e.toString();return hu[t]||(hu[t]=new UC),hu[t]}function WC(e,t){const n=e.toString();return pu[n]||(pu[n]=t()),pu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ei(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="start",HC="close",QC="pLPCommand",GC="pRTLPCB",Uv="id",Wv="pw",Vv="ser",KC="cb",qC="seg",YC="ts",XC="d",ZC="dframe",Hv=1870,Qv=30,JC=Hv-Qv,ex=25e3,tx=3e4;class En{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qo(t),this.stats_=cf(n),this.urlFn=l=>(this.appCheckToken&&(l[Pc]=this.appCheckToken),$v(n,jv,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VC(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tx)),PC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new df((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===zp)this.id=a,this.password=l;else if(s===HC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zp]="t",r[Vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rv]=uf,this.transportSessionId&&(r[Av]=this.transportSessionId),this.lastSessionId&&(r[Lv]=this.lastSessionId),this.applicationId&&(r[Fv]=this.applicationId),this.appCheckToken&&(r[Pc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(r[Ov]=Dv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){En.forceAllow_=!0}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){return En.forceAllow_?!0:!En.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AC()&&!OC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ov(n),i=Iv(r,JC);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZC]="t",r[Uv]=t,r[Wv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=he(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class df{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kv(),window[QC+this.uniqueCallbackIdentifier]=t,window[GC+this.uniqueCallbackIdentifier]=n,this.myIFrame=df.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Uv]=this.myID,t[Wv]=this.myPW,t[Vv]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qv+r.length<=Hv;){const s=this.pendingSegs.shift();r=r+"&"+qC+i+"="+s.seg+"&"+YC+i+"="+s.ts+"&"+XC+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ex)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=16384,rx=45e3;let ga=null;typeof MozWebSocket<"u"?ga=MozWebSocket:typeof WebSocket<"u"&&(ga=WebSocket);class gt{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qo(this.connId),this.stats_=cf(n),this.connURL=gt.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[Rv]=uf,typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(s[Ov]=Dv),n&&(s[Av]=n),r&&(s[Lv]=r),i&&(s[Pc]=i),o&&(s[Fv]=o),$v(t,zv,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ar.set("previous_websocket_failure",!0);try{let r;uv(),this.mySock=new ga(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ga!==null&&!gt.forceDisallow_}static previouslyFailed(){return ar.isInMemoryStorage||ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){ar.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xo(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(S(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iv(n,nx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rx))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[En,gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=gt&&gt.isAvailable();let r=n&&!gt.previouslyFailed();if(t.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gt];else{const i=this.transports_=[];for(const o of ci.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);ci.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ci.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=6e4,ox=5e3,sx=10*1024,ax=100*1024,mu="t",jp="d",lx="s",Bp="r",ux="e",$p="o",Up="a",Wp="n",Vp="p",cx="h";class dx{constructor(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qo("c:"+this.id+":"),this.transportManager_=new ci(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=to(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ax?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(mu in t){const n=t[mu];n===Up?this.upgradeIfSecondaryHealthy_():n===Bp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Li("t",t),r=Li("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Li("t",t),r=Li("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Li(mu,t);if(jp in t){const r=t[jp];if(n===cx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lx?this.onConnectionShutdown_(r):n===Bp?this.onReset_(r):n===ux?Ic("Server Error: "+r):n===$p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ic("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),uf!==r&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),to(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ix))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):to(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ox))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(t){this.allowedEvents_=t,this.listeners_={},S(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){S(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Kv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!av()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(t){return S(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=32,Qp=768;class Q{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function V(){return new Q("")}function F(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Un(e){return e.pieces_.length-e.pieceNum_}function q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Q(e.pieces_,t)}function ff(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function fx(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function No(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function qv(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Q(t,0)}function re(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Q)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function z(e){return e.pieceNum_>=e.pieces_.length}function je(e,t){const n=F(e),r=F(t);if(n===null)return t;if(n===r)return je(q(e),q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function hx(e,t){const n=No(e,0),r=No(t,0);for(let i=0;i<n.length&&i<r.length;i++){const o=kr(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function hf(e,t){if(Un(e)!==Un(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function yt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Un(e)>Un(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class px{constructor(t,n){this.errorPrefix_=n,this.parts_=No(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nl(this.parts_[r]);Yv(this)}}function mx(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=nl(t),Yv(e)}function gx(e){const t=e.parts_.pop();e.byteLength_-=nl(t),e.parts_.length>0&&(e.byteLength_-=1)}function Yv(e){if(e.byteLength_>Qp)throw new Error(e.errorPrefix_+"has a key path longer than "+Qp+" bytes ("+e.byteLength_+").");if(e.parts_.length>Hp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hp+") or object contains a cycle "+nr(e))}function nr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends Kv{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pf}getInitialEvent(t){return S(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=1e3,vx=60*5*1e3,Gp=30*1e3,yx=1.3,_x=3e4,bx="server_kill",Kp=3;class on extends Gv{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=vx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!uv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pf.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(he(o)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Ve,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),S(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&st(t,"w")){const r=gr(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||eE(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=J2(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+he(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Ic("Unrecognized action received from server: "+he(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_x&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new dx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Le(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(bx)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&Le(d),l())}}}interrupt(t){we("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){we("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Ec(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>lf(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Q(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){we("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kp&&(this.reconnectDelay_=Gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){we("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Cv.replace(/\./g,"-")]=1,av()?t["framework.cordova"]=1:G2()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=va.getInstance().currentlyOnline();return Ec(this.interruptReasons_)&&t}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new B(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new B($n,t),i=new B($n,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class Xv extends ol{static get __EMPTY_NODE(){return xs}static set __EMPTY_NODE(t){xs=t}compare(t,n){return kr(t.name,n.name)}isDefinedOn(t){throw bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return B.MIN}maxPost(){return new B(dn,xs)}makePost(t,n){return S(typeof t=="string","KeyIndex indexValue must always be a string."),new B(t,xs)}toString(){return".key"}}const Ht=new Xv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class be{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??be.RED,this.left=i??Qe.EMPTY_NODE,this.right=o??Qe.EMPTY_NODE}copy(t,n,r,i,o){return new be(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class wx{copy(t,n,r,i,o){return this}insert(t,n,r){return new be(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(t,n=Qe.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Qe(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(t){return new Qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,be.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ss(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ss(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ss(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ss(this.root_,null,this.comparator_,!0,t)}}Qe.EMPTY_NODE=new wx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(e,t){return kr(e.name,t.name)}function mf(e,t){return kr(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;function Cx(e){Rc=e}const Zv=function(e){return typeof e=="number"?"number:"+Pv(e):"string:"+e},Jv=function(e){if(e.isLeafNode()){const t=e.val();S(typeof t=="string"||typeof t=="number"||typeof t=="object"&&st(t,".sv"),"Priority must be a string or number.")}else S(e===Rc||e.isEmpty(),"priority of unexpected type.");S(e===Rc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qp;class ve{constructor(t,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jv(this.priorityNode_)}static set __childrenNodeConstructor(t){qp=t}static get __childrenNodeConstructor(){return qp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ve(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return z(t)?this:F(t)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=F(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Un(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Zv(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Pv(this.value_):t+=this.value_,this.lazyHash_=Nv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ve.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ve.__childrenNodeConstructor?-1:(S(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),o=ve.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey,ty;function xx(e){ey=e}function Sx(e){ty=e}class kx extends ol{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?kr(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(dn,new ve("[PRIORITY-POST]",ty))}makePost(t,n){const r=ey(t);return new B(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new kx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=Math.log(2);class Tx{constructor(t){const n=o=>parseInt(Math.log(o)/Nx,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ya=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new be(f,d.node,be.BLACK,null,null);{const h=parseInt(c/2,10)+l,m=i(l,h),p=i(h+1,u);return d=e[h],f=n?n(d):d,new be(f,d.node,be.BLACK,m,p)}},o=function(l){let u=null,c=null,d=e.length;const f=function(m,p){const _=d-m,v=d;d-=m;const g=i(_+1,v),y=e[_],w=n?n(y):y;h(new be(w,y.node,p,null,g))},h=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));p?f(_,be.BLACK):(f(_,be.BLACK),f(_,be.RED))}return c},s=new Tx(e.length),a=o(s);return new Qe(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;const Rr={};class tn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return S(Rr&&Z,"ChildrenNode.ts has not been loaded"),gu=gu||new tn({".priority":Rr},{".priority":Z}),gu}get(t){const n=gr(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Qe?n:null}hasIndex(t){return st(this.indexSet_,t.toString())}addIndex(t,n){S(t!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(B.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=ya(r,t.getCompare()):a=Rr;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new tn(c,u)}addToIndexes(t,n){const r=pa(this.indexes_,(i,o)=>{const s=gr(this.indexSet_,o);if(S(s,"Missing index implementation for "+o),i===Rr)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),ya(a,s.getCompare())}else return Rr;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new B(t.name,a))),l.insert(t,t.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(t,n){const r=pa(this.indexes_,i=>{if(i===Rr)return i;{const o=n.get(t.name);return o?i.remove(new B(t.name,o)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;class D{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jv(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zi||(zi=new D(new Qe(mf),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(t){return this.children_.isEmpty()?this:new D(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?zi:n}}getChild(t){const n=F(t);return n===null?this:this.getImmediateChild(n).getChild(q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(S(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new B(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?zi:this.priorityNode_;return new D(i,s,o)}}updateChild(t,n){const r=F(t);if(r===null)return n;{S(F(t)!==".priority"||Un(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Z,(s,a)=>{n[s]=a.val(t),r++,o&&D.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Zv(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":Nv(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new B(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new B(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new B(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,B.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,B.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Go?-1:0}withIndex(t){if(t===Ht||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ht||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Ht?null:this.indexMap_.get(t.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ix extends D{constructor(){super(new Qe(mf),D.EMPTY_NODE,tn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return D.EMPTY_NODE}isEmpty(){return!1}}const Go=new Ix;Object.defineProperties(B,{MIN:{value:new B($n,D.EMPTY_NODE)},MAX:{value:new B(dn,Go)}});Xv.__EMPTY_NODE=D.EMPTY_NODE;ve.__childrenNodeConstructor=D;Cx(Go);Sx(Go);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=!0;function oe(e,t=null){if(e===null)return D.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),S(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new ve(n,oe(t))}if(!(e instanceof Array)&&Px){const n=[];let r=!1;if(Ce(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(s,l)))}}),n.length===0)return D.EMPTY_NODE;const o=ya(n,Ex,s=>s.name,mf);if(r){const s=ya(n,Z.getCompare());return new D(o,oe(t),new tn({".priority":s},{".priority":Z}))}else return new D(o,oe(t),tn.Default)}else{let n=D.EMPTY_NODE;return Ce(e,(r,i)=>{if(st(e,r)&&r.substring(0,1)!=="."){const o=oe(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(oe(t))}}xx(oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends ol{constructor(t){super(),this.indexPath_=t,S(!z(t)&&F(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?kr(t.name,n.name):o}makePost(t,n){const r=oe(t),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const t=D.EMPTY_NODE.updateChild(this.indexPath_,Go);return new B(dn,t)}toString(){return No(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx extends ol{compare(t,n){const r=t.node.compareTo(n.node);return r===0?kr(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(t,n){const r=oe(t);return new B(n,r)}toString(){return".value"}}const vf=new Rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(e){return{type:"value",snapshotNode:e}}function di(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function To(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Io(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ax(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.index_=t}updateChild(t,n,r,i,o,s){S(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(To(n,a)):S(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(di(n,r)):s.trackChildChange(Io(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Z,(i,o)=>{n.hasChild(i)||r.trackChildChange(To(i,o))}),n.isLeafNode()||n.forEachChild(Z,(i,o)=>{if(t.hasChild(i)){const s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(Io(i,o,s))}else r.trackChildChange(di(i,o))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?D.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t){this.indexedFilter_=new yf(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Po.getStartPost_(t),this.endPost_=Po.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,o,s){return this.matches(new B(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)}updateFullNode(t,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const o=this;return n.forEachChild(Z,(s,a)=>{o.matches(new B(s,a))||(i=i.updateImmediateChild(s,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Po(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,o,s){return this.rangedFilter_.matches(new B(n,r))||(r=D.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(f,h)=>d(h,f)}else s=this.index_.getCompare();const a=t;S(a.numChildren()===this.limit_,"");const l=new B(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:s(f,l);if(c&&!r.isEmpty()&&h>=0)return o!=null&&o.trackChildChange(Io(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(To(n,d));const p=a.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(di(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}}else return r.isEmpty()?t:c&&s(u,l)>=0?(o!=null&&(o.trackChildChange(To(u.name,u.node)),o.trackChildChange(di(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$n}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const t=new sl;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Dx(e){return e.loadsAllData()?new yf(e.getIndex()):e.hasLimit()?new Ox(e):new Po(e)}function Mx(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Lx(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Ac(e,t,n){const r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Fx(e,t,n){let r;return e.index_===Ht||n?r=Ac(e,t,n):r=Ac(e,t,dn),r.startAfterSet_=!0,r}function Oc(e,t,n){const r=e.copy();return r.endSet_=!0,t===void 0&&(t=null),r.indexEndValue_=t,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function zx(e,t,n){let r;return e.index_===Ht||n?r=Oc(e,t,n):r=Oc(e,t,$n),r.endBeforeSet_=!0,r}function al(e,t){const n=e.copy();return n.index_=t,n}function Yp(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Z?n="$priority":e.index_===vf?n="$value":e.index_===Ht?n="$key":(S(e.index_ instanceof gf,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=he(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=he(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+he(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=he(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+he(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Xp(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Z&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Gv{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qo("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(S(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=_a.getListenId_(t,r),a={};this.listens_[s]=a;const l=Yp(t._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(o,d,!1,r),gr(this.listens_,s)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=_a.getListenId_(t,n);delete this.listens_[r]}get(t){const n=Yp(t._queryParams),r=t._path.toString(),i=new Ve;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+tE(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xo(a.responseText)}catch{Le("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){return{value:null,children:new Map}}function Ci(e,t,n){if(z(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=F(t);e.children.has(r)||e.children.set(r,ba());const i=e.children.get(r);t=q(t),Ci(i,t,n)}}function Dc(e,t){if(z(t))return e.value=null,e.children.clear(),!0;if(e.value!==null){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(Z,(r,i)=>{Ci(e,new Q(r),i)}),Dc(e,t)}}else if(e.children.size>0){const n=F(t);return t=q(t),e.children.has(n)&&Dc(e.children.get(n),t)&&e.children.delete(n),e.children.size===0}else return!0}function Mc(e,t,n){e.value!==null?n(t,e.value):Bx(e,(r,i)=>{const o=new Q(t.toString()+"/"+r);Mc(i,o,n)})}function Bx(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=10*1e3,Ux=30*1e3,Wx=5*60*1e3;class Vx{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $x(t);const r=Zp+(Ux-Zp)*Math.random();to(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Ce(t,(i,o)=>{o>0&&st(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),to(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function _f(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wf(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=_f()}operationForChild(t){if(z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(t));return new wa(V(),n,this.revert)}}else return S(F(this.path)===t,"operationForChild called for unrelated child."),new wa(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n){this.source=t,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(t){return z(this.path)?new Ro(this.source,V()):new Ro(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(t){return z(this.path)?new yr(this.source,V(),this.snap.getImmediateChild(t)):new yr(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(t){if(z(this.path)){const n=this.children.subtree(new Q(t));return n.isEmpty()?null:n.value?new yr(this.source,V(),n.value):new fi(this.source,V(),n)}else return S(F(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new fi(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(z(t))return this.isFullyInitialized()&&!this.filtered_;const n=F(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function Qx(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(Ax(s.childName,s.snapshotNode))}),ji(e,i,"child_removed",t,r,n),ji(e,i,"child_added",t,r,n),ji(e,i,"child_moved",o,r,n),ji(e,i,"child_changed",t,r,n),ji(e,i,"value",t,r,n),i}function ji(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>Kx(e,a,l)),s.forEach(a=>{const l=Gx(e,a,o);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function Gx(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Kx(e,t,n){if(t.childName==null||n.childName==null)throw bi("Should only compare child_ events.");const r=new B(t.childName,t.snapshotNode),i=new B(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(e,t){return{eventCache:e,serverCache:t}}function no(e,t,n,r){return ll(new Wn(t,n,r),e.serverCache)}function ry(e,t,n,r){return ll(e.eventCache,new Wn(t,n,r))}function Ea(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _r(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const qx=()=>(vu||(vu=new Qe(RC)),vu);class Y{constructor(t,n=qx()){this.value=t,this.children=n}static fromObject(t){let n=new Y(null);return Ce(t,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(z(t))return null;{const r=F(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(q(t),n);return o!=null?{path:re(new Q(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(z(t))return this;{const n=F(t),r=this.children.get(n);return r!==null?r.subtree(q(t)):new Y(null)}}set(t,n){if(z(t))return new Y(n,this.children);{const r=F(t),o=(this.children.get(r)||new Y(null)).set(q(t),n),s=this.children.insert(r,o);return new Y(this.value,s)}}remove(t){if(z(t))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=F(t),r=this.children.get(n);if(r){const i=r.remove(q(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new Y(null):new Y(this.value,o)}else return this}}get(t){if(z(t))return this.value;{const n=F(t),r=this.children.get(n);return r?r.get(q(t)):null}}setTree(t,n){if(z(t))return n;{const r=F(t),o=(this.children.get(r)||new Y(null)).setTree(q(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new Y(this.value,s)}}fold(t){return this.fold_(V(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(re(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,V(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(t))return null;{const o=F(t),s=this.children.get(o);return s?s.findOnPath_(q(t),re(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,V(),n)}foreachOnPath_(t,n,r){if(z(t))return this;{this.value&&r(n,this.value);const i=F(t),o=this.children.get(i);return o?o.foreachOnPath_(q(t),re(n,i),r):new Y(null)}}foreach(t){this.foreach_(V(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.writeTree_=t}static empty(){return new Ft(new Y(null))}}function ro(e,t,n){if(z(t))return new Ft(new Y(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=je(i,t);return o=o.updateChild(s,n),new Ft(e.writeTree_.set(i,o))}else{const i=new Y(n),o=e.writeTree_.setTree(t,i);return new Ft(o)}}}function Lc(e,t,n){let r=e;return Ce(n,(i,o)=>{r=ro(r,re(t,i),o)}),r}function Jp(e,t){if(z(t))return Ft.empty();{const n=e.writeTree_.setTree(t,new Y(null));return new Ft(n)}}function Fc(e,t){return Nr(e,t)!=null}function Nr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(je(n.path,t)):null}function em(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{t.push(new B(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new B(r,i.value))}),t}function On(e,t){if(z(t))return e;{const n=Nr(e,t);return n!=null?new Ft(new Y(n)):new Ft(e.writeTree_.subtree(t))}}function zc(e){return e.writeTree_.isEmpty()}function hi(e,t){return iy(V(),e.writeTree_,t)}function iy(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(S(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=iy(re(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(re(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e,t){return ly(t,e)}function Yx(e,t,n,r,i){S(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ro(e.visibleWrites,t,n)),e.lastWriteId=r}function Xx(e,t,n,r){S(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Lc(e.visibleWrites,t,n),e.lastWriteId=r}function Zx(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Jx(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);S(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&eS(a,r.path)?i=!1:yt(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return tS(e),!0;if(r.snap)e.visibleWrites=Jp(e.visibleWrites,r.path);else{const a=r.children;Ce(a,l=>{e.visibleWrites=Jp(e.visibleWrites,re(r.path,l))})}return!0}else return!1}function eS(e,t){if(e.snap)return yt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&yt(re(e.path,n),t))return!0;return!1}function tS(e){e.visibleWrites=oy(e.allWrites,nS,V()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function nS(e){return e.visible}function oy(e,t,n){let r=Ft.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)yt(n,s)?(a=je(n,s),r=ro(r,a,o.snap)):yt(s,n)&&(a=je(s,n),r=ro(r,V(),o.snap.getChild(a)));else if(o.children){if(yt(n,s))a=je(n,s),r=Lc(r,a,o.children);else if(yt(s,n))if(a=je(s,n),z(a))r=Lc(r,V(),o.children);else{const l=gr(o.children,F(a));if(l){const u=l.getChild(q(a));r=ro(r,V(),u)}}}else throw bi("WriteRecord should have .snap or .children")}}return r}function sy(e,t,n,r,i){if(!r&&!i){const o=Nr(e.visibleWrites,t);if(o!=null)return o;{const s=On(e.visibleWrites,t);if(zc(s))return n;if(n==null&&!Fc(s,V()))return null;{const a=n||D.EMPTY_NODE;return hi(s,a)}}}else{const o=On(e.visibleWrites,t);if(!i&&zc(o))return n;if(!i&&n==null&&!Fc(o,V()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(yt(u.path,t)||yt(t,u.path))},a=oy(e.allWrites,s,t),l=n||D.EMPTY_NODE;return hi(a,l)}}}function rS(e,t,n){let r=D.EMPTY_NODE;const i=Nr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Z,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=On(e.visibleWrites,t);return n.forEachChild(Z,(s,a)=>{const l=hi(On(o,new Q(s)),a);r=r.updateImmediateChild(s,l)}),em(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=On(e.visibleWrites,t);return em(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function iS(e,t,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=re(t,n);if(Fc(e.visibleWrites,o))return null;{const s=On(e.visibleWrites,o);return zc(s)?i.getChild(n):hi(s,i.getChild(n))}}function oS(e,t,n,r){const i=re(t,n),o=Nr(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=On(e.visibleWrites,i);return hi(s,r.getNode().getImmediateChild(n))}else return null}function sS(e,t){return Nr(e.visibleWrites,t)}function aS(e,t,n,r,i,o,s){let a;const l=On(e.visibleWrites,t),u=Nr(l,V());if(u!=null)a=u;else if(n!=null)a=hi(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let h=f.getNext();for(;h&&c.length<i;)d(h,r)!==0&&c.push(h),h=f.getNext();return c}else return[]}function lS(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function Ca(e,t,n,r){return sy(e.writeTree,e.treePath,t,n,r)}function Ef(e,t){return rS(e.writeTree,e.treePath,t)}function tm(e,t,n,r){return iS(e.writeTree,e.treePath,t,n,r)}function xa(e,t){return sS(e.writeTree,re(e.treePath,t))}function uS(e,t,n,r,i,o){return aS(e.writeTree,e.treePath,t,n,r,i,o)}function Cf(e,t,n){return oS(e.writeTree,e.treePath,t,n)}function ay(e,t){return ly(re(e.treePath,t),e.writeTree)}function ly(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Io(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,To(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,di(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Io(r,t.snapshotNode,i.oldSnap));else throw bi("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const uy=new dS;class xf{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cf(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),o=uS(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(e){return{filter:e}}function hS(e,t){S(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),S(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function pS(e,t,n,r,i){const o=new cS;let s,a;if(n.type===Dt.OVERWRITE){const u=n;u.source.fromUser?s=jc(e,t,u.path,u.snap,r,i,o):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!z(u.path),s=Sa(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===Dt.MERGE){const u=n;u.source.fromUser?s=gS(e,t,u.path,u.children,r,i,o):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=Bc(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Dt.ACK_USER_WRITE){const u=n;u.revert?s=_S(e,t,u.path,r,i,o):s=vS(e,t,u.path,u.affectedTree,r,i,o)}else if(n.type===Dt.LISTEN_COMPLETE)s=yS(e,t,n.path,r,o);else throw bi("Unknown operation type: "+n.type);const l=o.getChanges();return mS(t,s,l),{viewCache:s,changes:l}}function mS(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Ea(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ny(Ea(t)))}}function cy(e,t,n,r,i,o){const s=t.eventCache;if(xa(r,n)!=null)return t;{let a,l;if(z(n))if(S(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=_r(t),c=u instanceof D?u:D.EMPTY_NODE,d=Ef(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{const u=Ca(r,_r(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,o)}else{const u=F(n);if(u===".priority"){S(Un(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=t.serverCache.getNode();const d=tm(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=s.getNode()}else{const c=q(n);let d;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const f=tm(r,n,s.getNode(),l);f!=null?d=s.getNode().getImmediateChild(u).updateChild(c,f):d=s.getNode().getImmediateChild(u)}else d=Cf(r,u,t.serverCache);d!=null?a=e.filter.updateChild(s.getNode(),u,d,c,i,o):a=s.getNode()}}return no(t,a,s.isFullyInitialized()||z(n),e.filter.filtersNodes())}}function Sa(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),h,null)}else{const h=F(n);if(!l.isCompleteForPath(n)&&Un(n)>1)return t;const m=q(n),_=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),h,_,m,uy,null)}const d=ry(t,u,l.isFullyInitialized()||z(n),c.filtersNodes()),f=new xf(i,d,o);return cy(e,d,n,i,f,a)}function jc(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new xf(i,t,o);if(z(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=no(t,u,!0,e.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=no(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),h=a.getNode().getImmediateChild(d);let m;if(z(f))m=r;else{const p=c.getCompleteChild(d);p!=null?ff(f)===".priority"&&p.getChild(qv(f)).isEmpty()?m=p:m=p.updateChild(f,r):m=D.EMPTY_NODE}if(h.equals(m))l=t;else{const p=e.filter.updateChild(a.getNode(),d,m,f,c,s);l=no(t,p,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function nm(e,t){return e.eventCache.isCompleteForChild(t)}function gS(e,t,n,r,i,o,s){let a=t;return r.foreach((l,u)=>{const c=re(n,l);nm(t,F(c))&&(a=jc(e,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=re(n,l);nm(t,F(c))||(a=jc(e,a,c,u,i,o,s))}),a}function rm(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Bc(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;z(n)?u=r:u=new Y(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const h=t.serverCache.getNode().getImmediateChild(d),m=rm(e,h,f);l=Sa(e,l,new Q(d),m,i,o,s,a)}}),u.children.inorderTraversal((d,f)=>{const h=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!h){const m=t.serverCache.getNode().getImmediateChild(d),p=rm(e,m,f);l=Sa(e,l,new Q(d),p,i,o,s,a)}}),l}function vS(e,t,n,r,i,o,s){if(xa(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sa(e,t,n,l.getNode().getChild(n),i,o,a,s);if(z(n)){let u=new Y(null);return l.getNode().forEachChild(Ht,(c,d)=>{u=u.set(new Q(c),d)}),Bc(e,t,n,u,i,o,a,s)}else return t}else{let u=new Y(null);return r.foreach((c,d)=>{const f=re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Bc(e,t,n,u,i,o,a,s)}}function yS(e,t,n,r,i){const o=t.serverCache,s=ry(t,o.getNode(),o.isFullyInitialized()||z(n),o.isFiltered());return cy(e,s,n,r,uy,i)}function _S(e,t,n,r,i,o){let s;if(xa(r,n)!=null)return t;{const a=new xf(r,t,i),l=t.eventCache.getNode();let u;if(z(n)||F(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Ca(r,_r(t));else{const d=t.serverCache.getNode();S(d instanceof D,"serverChildren would be complete if leaf node"),c=Ef(r,d)}c=c,u=e.filter.updateFullNode(l,c,o)}else{const c=F(n);let d=Cf(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,q(n),a,o):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,D.EMPTY_NODE,q(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Ca(r,_r(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||xa(r,V())!=null,no(t,u,s,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yf(r.getIndex()),o=Dx(r);this.processor_=fS(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(D.EMPTY_NODE,a.getNode(),null),c=new Wn(l,s.isFullyInitialized(),i.filtersNodes()),d=new Wn(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=ll(d,c),this.eventGenerator_=new Hx(this.query_)}get query(){return this.query_}}function wS(e){return e.viewCache_.serverCache.getNode()}function ES(e){return Ea(e.viewCache_)}function CS(e,t){const n=_r(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!z(t)&&!n.getImmediateChild(F(t)).isEmpty())?n.getChild(t):null}function im(e){return e.eventRegistrations_.length===0}function xS(e,t){e.eventRegistrations_.push(t)}function om(e,t,n){const r=[];if(n){S(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(t){let i=[];for(let o=0;o<e.eventRegistrations_.length;++o){const s=e.eventRegistrations_[o];if(!s.matches(t))i.push(s);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function sm(e,t,n,r){t.type===Dt.MERGE&&t.source.queryId!==null&&(S(_r(e.viewCache_),"We should always have a full cache before handling merges"),S(Ea(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=pS(e.processor_,i,t,n,r);return hS(e.processor_,o.viewCache),S(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,dy(e,o.changes,o.viewCache.eventCache.getNode(),null)}function SS(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(o,s)=>{r.push(di(o,s))}),n.isFullyInitialized()&&r.push(ny(n.getNode())),dy(e,r,n.getNode(),t)}function dy(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return Qx(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;class fy{constructor(){this.views=new Map}}function kS(e){S(!ka,"__referenceConstructor has already been defined"),ka=e}function NS(){return S(ka,"Reference.ts has not been loaded"),ka}function TS(e){return e.views.size===0}function Sf(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return S(o!=null,"SyncTree gave us an op for an invalid query."),sm(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(sm(s,t,n,r));return o}}function hy(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let a=Ca(n,i?r:null),l=!1;a?l=!0:r instanceof D?(a=Ef(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const u=ll(new Wn(a,l,!1),new Wn(r,i,!1));return new bS(t,u)}return s}function IS(e,t,n,r,i,o){const s=hy(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),xS(s,n),SS(s,n)}function PS(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Vn(e);if(i==="default")for(const[l,u]of e.views.entries())s=s.concat(om(u,n,r)),im(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||o.push(u.query));else{const l=e.views.get(i);l&&(s=s.concat(om(l,n,r)),im(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Vn(e)&&o.push(new(NS())(t._repo,t._path)),{removed:o,events:s}}function py(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Dn(e,t){let n=null;for(const r of e.views.values())n=n||CS(r,t);return n}function my(e,t){if(t._queryParams.loadsAllData())return cl(e);{const r=t._queryIdentifier;return e.views.get(r)}}function gy(e,t){return my(e,t)!=null}function Vn(e){return cl(e)!=null}function cl(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;function RS(e){S(!Na,"__referenceConstructor has already been defined"),Na=e}function AS(){return S(Na,"Reference.ts has not been loaded"),Na}let OS=1;class am{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Y(null),this.pendingWriteTree_=lS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kf(e,t,n,r,i){return Yx(e.pendingWriteTree_,t,n,r,i),i?xi(e,new yr(_f(),t,n)):[]}function DS(e,t,n,r){Xx(e.pendingWriteTree_,t,n,r);const i=Y.fromObject(n);return xi(e,new fi(_f(),t,i))}function Cn(e,t,n=!1){const r=Zx(e.pendingWriteTree_,t);if(Jx(e.pendingWriteTree_,t)){let o=new Y(null);return r.snap!=null?o=o.set(V(),!0):Ce(r.children,s=>{o=o.set(new Q(s),!0)}),xi(e,new wa(r.path,o,n))}else return[]}function Ko(e,t,n){return xi(e,new yr(bf(),t,n))}function MS(e,t,n){const r=Y.fromObject(n);return xi(e,new fi(bf(),t,r))}function LS(e,t){return xi(e,new Ro(bf(),t))}function FS(e,t,n){const r=Nf(e,n);if(r){const i=Tf(r),o=i.path,s=i.queryId,a=je(o,t),l=new Ro(wf(s),a);return If(e,o,l)}else return[]}function Ta(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&(t._queryIdentifier==="default"||gy(s,t))){const l=PS(s,t,n,r);TS(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(o,(f,h)=>Vn(h));if(c&&!d){const f=e.syncPointTree_.subtree(o);if(!f.isEmpty()){const h=BS(f);for(let m=0;m<h.length;++m){const p=h[m],_=p.query,v=by(e,p);e.listenProvider_.startListening(io(_),Ao(e,_),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(io(t),null):u.forEach(f=>{const h=e.queryToTagMap.get(fl(f));e.listenProvider_.stopListening(io(f),h)}))}$S(e,u)}return a}function vy(e,t,n,r){const i=Nf(e,r);if(i!=null){const o=Tf(i),s=o.path,a=o.queryId,l=je(s,t),u=new yr(wf(a),l,n);return If(e,s,u)}else return[]}function zS(e,t,n,r){const i=Nf(e,r);if(i){const o=Tf(i),s=o.path,a=o.queryId,l=je(s,t),u=Y.fromObject(n),c=new fi(wf(a),l,u);return If(e,s,c)}else return[]}function $c(e,t,n,r=!1){const i=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(i,(f,h)=>{const m=je(f,i);o=o||Dn(h,m),s=s||Vn(h)});let a=e.syncPointTree_.get(i);a?(s=s||Vn(a),o=o||Dn(a,V())):(a=new fy,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=D.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,m)=>{const p=Dn(m,V());p&&(o=o.updateImmediateChild(h,p))}));const u=gy(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=fl(t);S(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=US();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}const c=ul(e.pendingWriteTree_,i);let d=IS(a,t,n,c,o,l);if(!u&&!s&&!r){const f=my(a,t);d=d.concat(WS(e,t,f))}return d}function dl(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=je(s,t),u=Dn(a,l);if(u)return u});return sy(i,t,o,n,!0)}function jS(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=je(u,n);r=r||Dn(c,d)});let i=e.syncPointTree_.get(n);i?r=r||Dn(i,V()):(i=new fy,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=r!=null,s=o?new Wn(r,!0,!1):null,a=ul(e.pendingWriteTree_,t._path),l=hy(i,t,a,o?s.getNode():D.EMPTY_NODE,o);return ES(l)}function xi(e,t){return yy(t,e.syncPointTree_,null,ul(e.pendingWriteTree_,V()))}function yy(e,t,n,r){if(z(e.path))return _y(e,t,n,r);{const i=t.get(V());n==null&&i!=null&&(n=Dn(i,V()));let o=[];const s=F(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=ay(r,s);o=o.concat(yy(a,l,u,c))}return i&&(o=o.concat(Sf(i,e,r,n))),o}}function _y(e,t,n,r){const i=t.get(V());n==null&&i!=null&&(n=Dn(i,V()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=ay(r,s),c=e.operationForChild(s);c&&(o=o.concat(_y(c,a,l,u)))}),i&&(o=o.concat(Sf(i,e,r,n))),o}function by(e,t){const n=t.query,r=Ao(e,n);return{hashFn:()=>(wS(t)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?FS(e,n._path,r):LS(e,n._path);{const o=DC(i,n);return Ta(e,n,null,o)}}}}function Ao(e,t){const n=fl(t);return e.queryToTagMap.get(n)}function fl(e){return e._path.toString()+"$"+e._queryIdentifier}function Nf(e,t){return e.tagToQueryMap.get(t)}function Tf(e){const t=e.indexOf("$");return S(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Q(e.substr(0,t))}}function If(e,t,n){const r=e.syncPointTree_.get(t);S(r,"Missing sync point for query tag that we're tracking");const i=ul(e.pendingWriteTree_,t);return Sf(r,n,i,null)}function BS(e){return e.fold((t,n,r)=>{if(n&&Vn(n))return[cl(n)];{let i=[];return n&&(i=py(n)),Ce(r,(o,s)=>{i=i.concat(s)}),i}})}function io(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(AS())(e._repo,e._path):e}function $S(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=fl(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function US(){return OS++}function WS(e,t,n){const r=t._path,i=Ao(e,t),o=by(e,n),s=e.listenProvider_.startListening(io(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)S(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!z(u)&&c&&Vn(c))return[cl(c).query];{let f=[];return c&&(f=f.concat(py(c).map(h=>h.query))),Ce(d,(h,m)=>{f=f.concat(m)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(io(c),Ao(e,c))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Pf(n)}node(){return this.node_}}class Rf{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=re(this.path_,t);return new Rf(this.syncTree_,n)}node(){return dl(this.syncTree_,this.path_)}}const VS=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},lm=function(e,t,n){if(!e||typeof e!="object")return e;if(S(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return HS(e[".sv"],t,n);if(typeof e[".sv"]=="object")return QS(e[".sv"],t);S(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},HS=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+e)}},QS=function(e,t,n){e.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=t.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},wy=function(e,t,n,r){return Of(t,new Rf(n,e),r)},Af=function(e,t,n){return Of(e,new Pf(t),n)};function Of(e,t,n){const r=e.getPriority().val(),i=lm(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=lm(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new ve(a,oe(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new ve(i))),s.forEachChild(Z,(a,l)=>{const u=Of(l,t.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function hl(e,t){let n=t instanceof Q?t:new Q(t),r=e,i=F(n);for(;i!==null;){const o=gr(r.node.children,i)||{children:{},childCount:0};r=new Df(i,r,o),n=q(n),i=F(n)}return r}function Tr(e){return e.node.value}function Mf(e,t){e.node.value=t,Uc(e)}function Ey(e){return e.node.childCount>0}function GS(e){return Tr(e)===void 0&&!Ey(e)}function pl(e,t){Ce(e.node.children,(n,r)=>{t(new Df(n,e,r))})}function Cy(e,t,n,r){n&&!r&&t(e),pl(e,i=>{Cy(i,t,!0,r)}),n&&r&&t(e)}function KS(e,t,n){let r=e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function qo(e){return new Q(e.parent===null?e.name:qo(e.parent)+"/"+e.name)}function Uc(e){e.parent!==null&&qS(e.parent,e.name,e)}function qS(e,t,n){const r=GS(n),i=st(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Uc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Uc(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/[\[\].#$\/\u0000-\u001F\u007F]/,XS=/[\[\].#$\u0000-\u001F\u007F]/,yu=10*1024*1024,ml=function(e){return typeof e=="string"&&e.length!==0&&!YS.test(e)},xy=function(e){return typeof e=="string"&&e.length!==0&&!XS.test(e)},ZS=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),xy(e)},Oo=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!il(e)||e&&typeof e=="object"&&st(e,".sv")},Gt=function(e,t,n,r){r&&t===void 0||Yo(Ye(e,"value"),t,n)},Yo=function(e,t,n){const r=n instanceof Q?new px(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+nr(r));if(typeof t=="function")throw new Error(e+"contains a function "+nr(r)+" with contents = "+t.toString());if(il(t))throw new Error(e+"contains "+t.toString()+" "+nr(r));if(typeof t=="string"&&t.length>yu/3&&nl(t)>yu)throw new Error(e+"contains a string greater than "+yu+" utf8 bytes "+nr(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(Ce(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!ml(s)))throw new Error(e+" contains an invalid key ("+s+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mx(r,s),Yo(e,a,r),gx(r)}),i&&o)throw new Error(e+' contains ".value" child '+nr(r)+" in addition to actual children.")}},JS=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const o=No(r);for(let s=0;s<o.length;s++)if(!(o[s]===".priority"&&s===o.length-1)){if(!ml(o[s]))throw new Error(e+"contains an invalid key ("+o[s]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(hx);let i=null;for(n=0;n<t.length;n++){if(r=t[n],i!==null&&yt(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Sy=function(e,t,n,r){const i=Ye(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];Ce(t,(s,a)=>{const l=new Q(s);if(Yo(i,a,re(n,l)),ff(l)===".priority"&&!Oo(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),JS(i,o)},Lf=function(e,t,n){if(il(t))throw new Error(Ye(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Oo(t))throw new Error(Ye(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Xo=function(e,t,n,r){if(n!==void 0&&!ml(n))throw new Error(Ye(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Do=function(e,t,n,r){if(!xy(n))throw new Error(Ye(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ek=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Do(e,t,n)},_t=function(e,t){if(F(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},ky=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!ml(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZS(n))throw new Error(Ye(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gl(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!hf(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ny(e,t,n){gl(e,n),Ty(e,r=>hf(r,t))}function at(e,t,n){gl(e,n),Ty(e,r=>yt(r,t)||yt(t,r))}function Ty(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(nk(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function nk(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();cr&&we("event: "+n.toString()),Ei(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="repo_interrupt",rk=25;class ik{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new Df,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ok(e,t,n){if(e.stats_=cf(e.repoInfo_),e.forceRestClient_||zC())e.server_=new _a(e.repoInfo_,(r,i,o,s)=>{um(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>cm(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new on(e.repoInfo_,t,(r,i,o,s)=>{um(e,r,i,o,s)},r=>{cm(e,r)},r=>{sk(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=WC(e.repoInfo_,()=>new Vx(e.stats_,e.server_)),e.infoData_=new jx,e.infoSyncTree_=new am({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ko(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Ff(e,"connected",!1),e.serverSyncTree_=new am({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);at(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function Py(e){const n=e.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zo(e){return VS({timestamp:Py(e)})}function um(e,t,n,r,i){e.dataUpdateCount++;const o=new Q(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=pa(n,u=>oe(u));s=zS(e.serverSyncTree_,o,l,i)}else{const l=oe(n);s=vy(e.serverSyncTree_,o,l,i)}else if(r){const l=pa(n,u=>oe(u));s=MS(e.serverSyncTree_,o,l)}else{const l=oe(n);s=Ko(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=pi(e,o)),at(e.eventQueue_,a,s)}function cm(e,t){Ff(e,"connected",t),t===!1&&uk(e)}function sk(e,t){Ce(t,(n,r)=>{Ff(e,n,r)})}function Ff(e,t,n){const r=new Q("/.info/"+t),i=oe(n);e.infoData_.updateSnapshot(r,i);const o=Ko(e.infoSyncTree_,r,i);at(e.eventQueue_,r,o)}function vl(e){return e.nextWriteId_++}function ak(e,t,n){const r=jS(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const o=oe(i).withIndex(t._queryParams.getIndex());$c(e.serverSyncTree_,t,n,!0);let s;if(t._queryParams.loadsAllData())s=Ko(e.serverSyncTree_,t._path,o);else{const a=Ao(e.serverSyncTree_,t);s=vy(e.serverSyncTree_,t._path,o,a)}return at(e.eventQueue_,t._path,s),Ta(e.serverSyncTree_,t,n,null,!0),o},i=>(Si(e,"get for query "+he(t)+" failed: "+i),Promise.reject(new Error(i))))}function zf(e,t,n,r,i){Si(e,"set",{path:t.toString(),value:n,priority:r});const o=Zo(e),s=oe(n,r),a=dl(e.serverSyncTree_,t),l=Af(s,a,o),u=vl(e),c=kf(e.serverSyncTree_,t,l,u,!0);gl(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),(f,h)=>{const m=f==="ok";m||Le("set at "+t+" failed: "+f);const p=Cn(e.serverSyncTree_,u,!m);at(e.eventQueue_,t,p),Hn(e,i,f,h)});const d=Bf(e,t);pi(e,d),at(e.eventQueue_,d,[])}function lk(e,t,n,r){Si(e,"update",{path:t.toString(),value:n});let i=!0;const o=Zo(e),s={};if(Ce(n,(a,l)=>{i=!1,s[a]=wy(re(t,a),oe(l),e.serverSyncTree_,o)}),i)we("update() called with empty data.  Don't do anything."),Hn(e,r,"ok",void 0);else{const a=vl(e),l=DS(e.serverSyncTree_,t,s,a);gl(e.eventQueue_,l),e.server_.merge(t.toString(),n,(u,c)=>{const d=u==="ok";d||Le("update at "+t+" failed: "+u);const f=Cn(e.serverSyncTree_,a,!d),h=f.length>0?pi(e,t):t;at(e.eventQueue_,h,f),Hn(e,r,u,c)}),Ce(n,u=>{const c=Bf(e,re(t,u));pi(e,c)}),at(e.eventQueue_,t,[])}}function uk(e){Si(e,"onDisconnectEvents");const t=Zo(e),n=ba();Mc(e.onDisconnect_,V(),(i,o)=>{const s=wy(i,o,e.serverSyncTree_,t);Ci(n,i,s)});let r=[];Mc(n,V(),(i,o)=>{r=r.concat(Ko(e.serverSyncTree_,i,o));const s=Bf(e,i);pi(e,s)}),e.onDisconnect_=ba(),at(e.eventQueue_,V(),r)}function ck(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{r==="ok"&&Dc(e.onDisconnect_,t),Hn(e,n,r,i)})}function dm(e,t,n,r){const i=oe(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(o,s)=>{o==="ok"&&Ci(e.onDisconnect_,t,i),Hn(e,r,o,s)})}function dk(e,t,n,r,i){const o=oe(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),(s,a)=>{s==="ok"&&Ci(e.onDisconnect_,t,o),Hn(e,i,s,a)})}function fk(e,t,n,r){if(Ec(n)){we("onDisconnect().update() called with empty data.  Don't do anything."),Hn(e,r,"ok",void 0);return}e.server_.onDisconnectMerge(t.toString(),n,(i,o)=>{i==="ok"&&Ce(n,(s,a)=>{const l=oe(a);Ci(e.onDisconnect_,re(t,s),l)}),Hn(e,r,i,o)})}function hk(e,t,n){let r;F(t._path)===".info"?r=$c(e.infoSyncTree_,t,n):r=$c(e.serverSyncTree_,t,n),Ny(e.eventQueue_,t._path,r)}function Wc(e,t,n){let r;F(t._path)===".info"?r=Ta(e.infoSyncTree_,t,n):r=Ta(e.serverSyncTree_,t,n),Ny(e.eventQueue_,t._path,r)}function Ry(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Iy)}function pk(e){e.persistentConnection_&&e.persistentConnection_.resume(Iy)}function Si(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),we(n,...t)}function Hn(e,t,n,r){t&&Ei(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function mk(e,t,n,r,i,o){Si(e,"transaction on "+t);const s={path:t,update:n,onComplete:r,status:null,order:kv(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=jf(e,t,void 0);s.currentInputSnapshot=a;const l=s.update(a.val());if(l===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{Yo("transaction failed: Data returned ",l,s.path),s.status=0;const u=hl(e.transactionQueueTree_,t),c=Tr(u)||[];c.push(s),Mf(u,c);let d;typeof l=="object"&&l!==null&&st(l,".priority")?(d=gr(l,".priority"),S(Oo(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(dl(e.serverSyncTree_,t)||D.EMPTY_NODE).getPriority().val();const f=Zo(e),h=oe(l,d),m=Af(h,a,f);s.currentOutputSnapshotRaw=h,s.currentOutputSnapshotResolved=m,s.currentWriteId=vl(e);const p=kf(e.serverSyncTree_,t,m,s.currentWriteId,s.applyLocally);at(e.eventQueue_,t,p),yl(e,e.transactionQueueTree_)}}function jf(e,t,n){return dl(e.serverSyncTree_,t,n)||D.EMPTY_NODE}function yl(e,t=e.transactionQueueTree_){if(t||_l(e,t),Tr(t)){const n=Oy(e,t);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gk(e,qo(t),n)}else Ey(t)&&pl(t,n=>{yl(e,n)})}function gk(e,t,n){const r=n.map(u=>u.currentWriteId),i=jf(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=je(t,c.path);o=o.updateChild(d,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Si(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Cn(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();_l(e,hl(e.transactionQueueTree_,t)),yl(e,e.transactionQueueTree_),at(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Ei(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Le("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}pi(e,t)}},s)}function pi(e,t){const n=Ay(e,t),r=qo(n),i=Oy(e,n);return vk(e,i,r),r}function vk(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=je(n,l.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Cn(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rk)c=!0,d="maxretry",i=i.concat(Cn(e.serverSyncTree_,l.currentWriteId,!0));else{const f=jf(e,l.path,s);l.currentInputSnapshot=f;const h=t[a].update(f.val());if(h!==void 0){Yo("transaction failed: Data returned ",h,l.path);let m=oe(h);typeof h=="object"&&h!=null&&st(h,".priority")||(m=m.updatePriority(f.getPriority()));const _=l.currentWriteId,v=Zo(e),g=Af(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=g,l.currentWriteId=vl(e),s.splice(s.indexOf(_),1),i=i.concat(kf(e.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Cn(e.serverSyncTree_,_,!0))}else c=!0,d="nodata",i=i.concat(Cn(e.serverSyncTree_,l.currentWriteId,!0))}at(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}_l(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Ei(r[a]);yl(e,e.transactionQueueTree_)}function Ay(e,t){let n,r=e.transactionQueueTree_;for(n=F(t);n!==null&&Tr(r)===void 0;)r=hl(r,n),t=q(t),n=F(t);return r}function Oy(e,t){const n=[];return Dy(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Dy(e,t,n){const r=Tr(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pl(t,i=>{Dy(e,i,n)})}function _l(e,t){const n=Tr(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Mf(t,n.length>0?n:void 0)}pl(t,r=>{_l(e,r)})}function Bf(e,t){const n=qo(Ay(e,t)),r=hl(e.transactionQueueTree_,t);return KS(r,i=>{_u(e,i)}),_u(e,r),Cy(r,i=>{_u(e,i)}),n}function _u(e,t){const n=Tr(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(S(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(S(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Cn(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Mf(t,void 0):n.length=o+1,at(e.eventQueue_,qo(t),i);for(let s=0;s<r.length;s++)Ei(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function _k(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Le(`Invalid query segment '${n}' in query '${e}'`)}return t}const Vc=function(e,t){const n=bk(e),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bv(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Q(n.pathString)}},bk=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=yk(e.substring(c,d)));const f=_k(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wk=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=fm.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=fm.charAt(t[i]);return S(s.length===20,"nextPushId: Length should be 20."),s}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Ly{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ek=class{constructor(t,n){this._repo=t,this._path=n}cancel(){const t=new Ve;return ck(this._repo,this._path,t.wrapCallback(()=>{})),t.promise}remove(){_t("OnDisconnect.remove",this._path);const t=new Ve;return dm(this._repo,this._path,null,t.wrapCallback(()=>{})),t.promise}set(t){_t("OnDisconnect.set",this._path),Gt("OnDisconnect.set",t,this._path,!1);const n=new Ve;return dm(this._repo,this._path,t,n.wrapCallback(()=>{})),n.promise}setWithPriority(t,n){_t("OnDisconnect.setWithPriority",this._path),Gt("OnDisconnect.setWithPriority",t,this._path,!1),Lf("OnDisconnect.setWithPriority",n);const r=new Ve;return dk(this._repo,this._path,t,n,r.wrapCallback(()=>{})),r.promise}update(t){_t("OnDisconnect.update",this._path),Sy("OnDisconnect.update",t,this._path);const n=new Ve;return fk(this._repo,this._path,t,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:ff(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const t=Xp(this._queryParams),n=lf(t);return n==="{}"?"default":n}get _queryObject(){return Xp(this._queryParams)}isEqual(t){if(t=ft(t),!(t instanceof Ze))return!1;const n=this._repo===t._repo,r=hf(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fx(this._path)}}function bl(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function qn(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ht){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==$n)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==dn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===Z){if(t!=null&&!Oo(t)||n!=null&&!Oo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(e.getIndex()instanceof gf||e.getIndex()===vf,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function wl(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class xt extends Ze{constructor(t,n){super(t,n,new sl,!1)}get parent(){const t=qv(this._path);return t===null?null:new xt(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}let El=class Hc{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Q(t),r=br(this.ref,t);return new Hc(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Hc(i,br(this.ref,r),Z)))}hasChild(t){const n=new Q(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Kt(e,t){return e=ft(e),e._checkNotDeleted("ref"),t!==void 0?br(e._root,t):e._root}function hm(e,t){e=ft(e),e._checkNotDeleted("refFromURL");const n=Vc(t,e._repo.repoInfo_.nodeAdmin);ky("refFromURL",n);const r=n.repoInfo;return!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host&&Qt("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Kt(e,n.path.toString())}function br(e,t){return e=ft(e),F(e._path)===null?ek("child","path",t):Do("child","path",t),new xt(e._repo,re(e._path,t))}function Fy(e,t){e=ft(e),_t("push",e._path),Gt("push",t,e._path,!0);const n=Py(e._repo),r=wk(n),i=br(e,r),o=br(e,r);let s;return t!=null?s=Cl(o,t).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function zy(e){return _t("remove",e._path),Cl(e,null)}function Cl(e,t){e=ft(e),_t("set",e._path),Gt("set",t,e._path,!1);const n=new Ve;return zf(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ck(e,t){e=ft(e),_t("setPriority",e._path),Lf("setPriority",t);const n=new Ve;return zf(e._repo,re(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function xk(e,t,n){if(_t("setWithPriority",e._path),Gt("setWithPriority",t,e._path,!1),Lf("setWithPriority",n),e.key===".length"||e.key===".keys")throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new Ve;return zf(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function xl(e,t){Sy("update",t,e._path);const n=new Ve;return lk(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Uf(e){e=ft(e);const t=new $f(()=>{}),n=new Jo(t);return ak(e._repo,e,n).then(r=>new El(r,new xt(e._repo,e._path),e._queryParams.getIndex()))}class Jo{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new My("value",this,new El(t.snapshotNode,new xt(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Ly(this,t,n):null}matches(t){return t instanceof Jo?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sl{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Ly(this,t,n):null}createEvent(t,n){S(t.childName!=null,"Child events should have a childName.");const r=br(new xt(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new My(t.type,this,new El(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Sl?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function es(e,t,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Wc(e._repo,e,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const s=new $f(n,o||void 0),a=t==="value"?new Jo(s):new Sl(t,s);return hk(e._repo,e,a),()=>Wc(e._repo,e,a)}function Qc(e,t,n,r){return es(e,"value",t,n,r)}function pm(e,t,n,r){return es(e,"child_added",t,n,r)}function mm(e,t,n,r){return es(e,"child_changed",t,n,r)}function gm(e,t,n,r){return es(e,"child_moved",t,n,r)}function vm(e,t,n,r){return es(e,"child_removed",t,n,r)}function ym(e,t,n){let r=null;const i=n?new $f(n):null;t==="value"?r=new Jo(i):t&&(r=new Sl(t,i)),Wc(e._repo,e,r)}class jt{}class jy extends jt{constructor(t,n){super(),this._value=t,this._key=n,this.type="endAt"}_apply(t){Gt("endAt",this._value,t._path,!0);const n=Oc(t._queryParams,this._value,this._key);if(wl(n),qn(n),t._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(t._repo,t._path,n,t._orderByCalled)}}function Sk(e,t){return Xo("endAt","key",t),new jy(e,t)}class kk extends jt{constructor(t,n){super(),this._value=t,this._key=n,this.type="endBefore"}_apply(t){Gt("endBefore",this._value,t._path,!1);const n=zx(t._queryParams,this._value,this._key);if(wl(n),qn(n),t._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(t._repo,t._path,n,t._orderByCalled)}}function Nk(e,t){return Xo("endBefore","key",t),new kk(e,t)}class By extends jt{constructor(t,n){super(),this._value=t,this._key=n,this.type="startAt"}_apply(t){Gt("startAt",this._value,t._path,!0);const n=Ac(t._queryParams,this._value,this._key);if(wl(n),qn(n),t._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ze(t._repo,t._path,n,t._orderByCalled)}}function Tk(e=null,t){return Xo("startAt","key",t),new By(e,t)}class Ik extends jt{constructor(t,n){super(),this._value=t,this._key=n,this.type="startAfter"}_apply(t){Gt("startAfter",this._value,t._path,!1);const n=Fx(t._queryParams,this._value,this._key);if(wl(n),qn(n),t._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ze(t._repo,t._path,n,t._orderByCalled)}}function Pk(e,t){return Xo("startAfter","key",t),new Ik(e,t)}class Rk extends jt{constructor(t){super(),this._limit=t,this.type="limitToFirst"}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(t._repo,t._path,Mx(t._queryParams,this._limit),t._orderByCalled)}}function Ak(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Rk(e)}class Ok extends jt{constructor(t){super(),this._limit=t,this.type="limitToLast"}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(t._repo,t._path,Lx(t._queryParams,this._limit),t._orderByCalled)}}function Dk(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ok(e)}class Mk extends jt{constructor(t){super(),this._path=t,this.type="orderByChild"}_apply(t){bl(t,"orderByChild");const n=new Q(this._path);if(z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new gf(n),i=al(t._queryParams,r);return qn(i),new Ze(t._repo,t._path,i,!0)}}function Lk(e){if(e==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(e==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(e==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Do("orderByChild","path",e),new Mk(e)}class Fk extends jt{constructor(){super(...arguments),this.type="orderByKey"}_apply(t){bl(t,"orderByKey");const n=al(t._queryParams,Ht);return qn(n),new Ze(t._repo,t._path,n,!0)}}function zk(){return new Fk}class jk extends jt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(t){bl(t,"orderByPriority");const n=al(t._queryParams,Z);return qn(n),new Ze(t._repo,t._path,n,!0)}}function Bk(){return new jk}class $k extends jt{constructor(){super(...arguments),this.type="orderByValue"}_apply(t){bl(t,"orderByValue");const n=al(t._queryParams,vf);return qn(n),new Ze(t._repo,t._path,n,!0)}}function Uk(){return new $k}class Wk extends jt{constructor(t,n){super(),this._value=t,this._key=n,this.type="equalTo"}_apply(t){if(Gt("equalTo",this._value,t._path,!1),t._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(t._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new jy(this._value,this._key)._apply(new By(this._value,this._key)._apply(t))}}function Vk(e,t){return Xo("equalTo","key",t),new Wk(e,t)}function Nt(e,...t){let n=ft(e);for(const r of t)n=r._apply(n);return n}kS(xt);RS(xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FIREBASE_DATABASE_EMULATOR_HOST",Gc={};let Qk=!1;function Gk(e,t,n,r){e.repoInfo_=new Bv(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function $y(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=Vc(o,i),a=s.repoInfo,l,u;typeof process<"u"&&Op&&(u=Op[Hk]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=Vc(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Jr(Jr.OWNER):new BC(e.name,e.options,t);ky("Invalid Firebase Database URL",s),z(s.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=qk(a,e,c,new jC(e.name,n));return new Yk(d,e)}function Kk(e,t){const n=Gc[t];(!n||n[e.key]!==e)&&Qt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ry(e),delete n[e.key]}function qk(e,t,n,r){let i=Gc[t.name];i||(i={},Gc[t.name]=i);let o=i[e.toURLString()];return o&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ik(e,Qk,n,r),i[e.toURLString()]=o,o}let Yk=class{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Qt("Cannot call "+t+" on a deleted database.")}};function Uy(){ci.IS_TRANSPORT_INITIALIZED&&Le("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Xk(){Uy(),En.forceDisallow()}function Zk(){Uy(),gt.forceDisallow(),En.forceAllow()}function Jk(e,t,n,r={}){e=ft(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Jr(Jr.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:H2(r.mockUserToken,e.app.options.projectId);o=new Jr(s)}Gk(i,t,n,o)}function e3(e){e=ft(e),e._checkNotDeleted("goOffline"),Ry(e._repo)}function t3(e){e=ft(e),e._checkNotDeleted("goOnline"),pk(e._repo)}function n3(e,t){Tv(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r3(e){xv(of),ui(new cn("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return $y(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),rn(Dp,Mp,e),rn(Dp,Mp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3={".sv":"timestamp"};function o3(){return i3}function s3(e){return{".sv":{increment:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a3=class{constructor(t,n){this.committed=t,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function l3(e,t,n){var r;if(e=ft(e),_t("Reference.transaction",e._path),e.key===".length"||e.key===".keys")throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new Ve,s=(l,u,c)=>{let d=null;l?o.reject(l):(d=new El(c,new xt(e._repo,e._path),Z),o.resolve(new a3(u,d)))},a=Qc(e,()=>{});return mk(e._repo,e._path,t,s,a,i),o.promise}on.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};on.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};r3();const u3="@firebase/database-compat",c3="1.0.5";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3=new rl("@firebase/database-compat"),Wy=function(e){const t="FIREBASE WARNING: "+e;d3.warn(t)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=function(e,t,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(Ye(e,t)+"must be a boolean.")},h3=function(e,t,n){if(t!==void 0)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Ye(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(t){this._delegate=t}cancel(t){M("OnDisconnect.cancel",0,1,arguments.length),_e("OnDisconnect.cancel","onComplete",t,!0);const n=this._delegate.cancel();return t&&n.then(()=>t(null),r=>t(r)),n}remove(t){M("OnDisconnect.remove",0,1,arguments.length),_e("OnDisconnect.remove","onComplete",t,!0);const n=this._delegate.remove();return t&&n.then(()=>t(null),r=>t(r)),n}set(t,n){M("OnDisconnect.set",1,2,arguments.length),_e("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(t);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(t,n,r){M("OnDisconnect.setWithPriority",2,3,arguments.length),_e("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(t,n);return r&&i.then(()=>r(null),o=>r(o)),i}update(t,n){if(M("OnDisconnect.update",1,2,arguments.length),Array.isArray(t)){const i={};for(let o=0;o<t.length;++o)i[""+o]=t[o];t=i,Wy("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_e("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(t);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(t,n){this.committed=t,this.snapshot=n}toJSON(){return M("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n){this._database=t,this._delegate=n}val(){return M("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return M("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return M("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return M("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(t){return M("DataSnapshot.child",0,1,arguments.length),t=String(t),Do("DataSnapshot.child","path",t),new Mn(this._database,this._delegate.child(t))}hasChild(t){return M("DataSnapshot.hasChild",1,1,arguments.length),Do("DataSnapshot.hasChild","path",t),this._delegate.hasChild(t)}getPriority(){return M("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(t){return M("DataSnapshot.forEach",1,1,arguments.length),_e("DataSnapshot.forEach","action",t,!1),this._delegate.forEach(n=>t(new Mn(this._database,n)))}hasChildren(){return M("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return M("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return M("DataSnapshot.ref",0,0,arguments.length),new tt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ne{constructor(t,n){this.database=t,this._delegate=n}on(t,n,r,i){var o;M("Query.on",2,4,arguments.length),_e("Query.on","callback",n,!1);const s=Ne.getCancelAndContextArgs_("Query.on",r,i),a=(u,c)=>{n.call(s.context,new Mn(this.database,u),c)};a.userCallback=n,a.context=s.context;const l=(o=s.cancel)===null||o===void 0?void 0:o.bind(s.context);switch(t){case"value":return Qc(this._delegate,a,l),n;case"child_added":return pm(this._delegate,a,l),n;case"child_removed":return vm(this._delegate,a,l),n;case"child_changed":return mm(this._delegate,a,l),n;case"child_moved":return gm(this._delegate,a,l),n;default:throw new Error(Ye("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(t,n,r){if(M("Query.off",0,3,arguments.length),h3("Query.off",t),_e("Query.off","callback",n,!0),xp("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,ym(this._delegate,t,i)}else ym(this._delegate,t)}get(){return Uf(this._delegate).then(t=>new Mn(this.database,t))}once(t,n,r,i){M("Query.once",1,4,arguments.length),_e("Query.once","callback",n,!0);const o=Ne.getCancelAndContextArgs_("Query.once",r,i),s=new Ve,a=(u,c)=>{const d=new Mn(this.database,u);n&&n.call(o.context,d,c),s.resolve(d)};a.userCallback=n,a.context=o.context;const l=u=>{o.cancel&&o.cancel.call(o.context,u),s.reject(u)};switch(t){case"value":Qc(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":pm(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":vm(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":mm(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":gm(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(Ye("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(t){return M("Query.limitToFirst",1,1,arguments.length),new Ne(this.database,Nt(this._delegate,Ak(t)))}limitToLast(t){return M("Query.limitToLast",1,1,arguments.length),new Ne(this.database,Nt(this._delegate,Dk(t)))}orderByChild(t){return M("Query.orderByChild",1,1,arguments.length),new Ne(this.database,Nt(this._delegate,Lk(t)))}orderByKey(){return M("Query.orderByKey",0,0,arguments.length),new Ne(this.database,Nt(this._delegate,zk()))}orderByPriority(){return M("Query.orderByPriority",0,0,arguments.length),new Ne(this.database,Nt(this._delegate,Bk()))}orderByValue(){return M("Query.orderByValue",0,0,arguments.length),new Ne(this.database,Nt(this._delegate,Uk()))}startAt(t=null,n){return M("Query.startAt",0,2,arguments.length),new Ne(this.database,Nt(this._delegate,Tk(t,n)))}startAfter(t=null,n){return M("Query.startAfter",0,2,arguments.length),new Ne(this.database,Nt(this._delegate,Pk(t,n)))}endAt(t=null,n){return M("Query.endAt",0,2,arguments.length),new Ne(this.database,Nt(this._delegate,Sk(t,n)))}endBefore(t=null,n){return M("Query.endBefore",0,2,arguments.length),new Ne(this.database,Nt(this._delegate,Nk(t,n)))}equalTo(t,n){return M("Query.equalTo",1,2,arguments.length),new Ne(this.database,Nt(this._delegate,Vk(t,n)))}toString(){return M("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return M("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(t){if(M("Query.isEqual",1,1,arguments.length),!(t instanceof Ne)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(t._delegate)}static getCancelAndContextArgs_(t,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,_e(t,"cancel",i.cancel,!0),i.context=r,xp(t,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Ye(t,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new tt(this.database,new xt(this._delegate._repo,this._delegate._path))}}class tt extends Ne{constructor(t,n){super(t,new Ze(n._repo,n._path,new sl,!1)),this.database=t,this._delegate=n}getKey(){return M("Reference.key",0,0,arguments.length),this._delegate.key}child(t){return M("Reference.child",1,1,arguments.length),typeof t=="number"&&(t=String(t)),new tt(this.database,br(this._delegate,t))}getParent(){M("Reference.parent",0,0,arguments.length);const t=this._delegate.parent;return t?new tt(this.database,t):null}getRoot(){return M("Reference.root",0,0,arguments.length),new tt(this.database,this._delegate.root)}set(t,n){M("Reference.set",1,2,arguments.length),_e("Reference.set","onComplete",n,!0);const r=Cl(this._delegate,t);return n&&r.then(()=>n(null),i=>n(i)),r}update(t,n){if(M("Reference.update",1,2,arguments.length),Array.isArray(t)){const i={};for(let o=0;o<t.length;++o)i[""+o]=t[o];t=i,Wy("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_t("Reference.update",this._delegate._path),_e("Reference.update","onComplete",n,!0);const r=xl(this._delegate,t);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(t,n,r){M("Reference.setWithPriority",2,3,arguments.length),_e("Reference.setWithPriority","onComplete",r,!0);const i=xk(this._delegate,t,n);return r&&i.then(()=>r(null),o=>r(o)),i}remove(t){M("Reference.remove",0,1,arguments.length),_e("Reference.remove","onComplete",t,!0);const n=zy(this._delegate);return t&&n.then(()=>t(null),r=>t(r)),n}transaction(t,n,r){M("Reference.transaction",1,3,arguments.length),_e("Reference.transaction","transactionUpdate",t,!1),_e("Reference.transaction","onComplete",n,!0),f3("Reference.transaction","applyLocally",r);const i=l3(this._delegate,t,{applyLocally:r}).then(o=>new m3(o.committed,new Mn(this.database,o.snapshot)));return n&&i.then(o=>n(null,o.committed,o.snapshot),o=>n(o,!1,null)),i}setPriority(t,n){M("Reference.setPriority",1,2,arguments.length),_e("Reference.setPriority","onComplete",n,!0);const r=Ck(this._delegate,t);return n&&r.then(()=>n(null),i=>n(i)),r}push(t,n){M("Reference.push",0,2,arguments.length),_e("Reference.push","onComplete",n,!0);const r=Fy(this._delegate,t),i=r.then(s=>new tt(this.database,s));n&&i.then(()=>n(null),s=>n(s));const o=new tt(this.database,r);return o.then=i.then.bind(i),o.catch=i.catch.bind(i,void 0),o}onDisconnect(){return _t("Reference.onDisconnect",this._delegate._path),new p3(new Ek(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,n){this._delegate=t,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Xk,forceLongPolling:Zk}}useEmulator(t,n,r={}){Jk(this._delegate,t,n,r)}ref(t){if(M("database.ref",0,1,arguments.length),t instanceof tt){const n=hm(this._delegate,t.toString());return new tt(this,n)}else{const n=Kt(this._delegate,t);return new tt(this,n)}}refFromURL(t){M("database.refFromURL",1,1,arguments.length);const r=hm(this._delegate,t);return new tt(this,r)}goOffline(){return M("database.goOffline",0,0,arguments.length),e3(this._delegate)}goOnline(){return M("database.goOnline",0,0,arguments.length),t3(this._delegate)}}Mo.ServerValue={TIMESTAMP:o3(),increment:e=>s3(e)};function g3({app:e,url:t,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:o,nodeAdmin:s=!1}){xv(n);const a=new tf("database-standalone"),l=new xc("auth-internal",a);l.setComponent(new cn("auth-internal",()=>r,"PRIVATE"));let u;return i&&(u=new xc("app-check-internal",a),u.setComponent(new cn("app-check-internal",()=>i,"PRIVATE"))),{instance:new Mo($y(e,l,u,t,s),e),namespace:o}}var v3=Object.freeze({__proto__:null,initStandalone:g3});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3=Mo.ServerValue;function _3(e){e.INTERNAL.registerComponent(new cn("database-compat",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("database").getImmediate({identifier:n});return new Mo(i,r)},"PUBLIC").setServiceProps({Reference:tt,Query:Ne,Database:Mo,DataSnapshot:Mn,enableLogging:n3,INTERNAL:v3,ServerValue:y3}).setMultipleInstances(!0)),e.registerVersion(u3,c3)}_3(Xr);const b3={apiKey:"AIzaSyAHFjGgxOmiFPFJ_NrlJ1ysILmZNZ8JTmQ",authDomain:"database-3768a.firebaseapp.com",databaseURL:"https://database-3768a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"database-3768a",storageBucket:"database-3768a.appspot.com",messagingSenderId:"55822245124",appId:"1:55822245124:web:a9397ae03523cfb5694451"};Xr.apps.length?Xr.app():Xr.initializeApp(b3);const Yn=Xr.database(),Vy="FETCH_LISTS",Hy="ADD_LIST",Qy="DELETE_LIST",Gy="ADD_ITEM",Ky="DELETE_ITEM",qy="MARK_COMPLETED",Wf="SET_INPUT_VALUE",w3="FETCH_CATEGORIES",Yy="ADD_CATEGORY",E3="REMOVE_CATEGORY",ts="SET_WORKING",mi="CLEAR_WORKING",ns=()=>({type:ts}),Re=()=>({type:mi}),C3=()=>async e=>{let t=null;const n=Date.now();t=setTimeout(()=>{e(ns())},100);try{const r=await Uf(Kt(Yn,"lists")),o=(r.val()?Object.values(r.val()):[]).map(s=>({...s,elements:s.elements||[],inputValue:""}));e({type:Vy,payload:o})}catch(r){console.error("Error fetching lists:",r)}finally{const r=Date.now()-n;t?(clearTimeout(t),e(Re())):r<100?setTimeout(()=>{e(Re())},100-r):e(Re())}},Xy=()=>{const e=["#ffcce0","#b2f0b2","#cce0ff","#ffffcc","#d9b3ff"];return e[Math.floor(Math.random()*e.length)]},x3=(e,t,n="")=>async r=>{let i=null;const o=Date.now();try{t||(t=Xy()),i=setTimeout(()=>{r(ns())},100);const s=Date.now().toString(),a=Kt(Yn,`lists/${s}`),l={id:s,title:e,color:t,category:n,elements:[],inputValue:""};await Cl(a,l),r({type:Hy,payload:l})}catch(s){console.error("Error adding list:",s)}finally{const s=Date.now()-o;i?(clearTimeout(i),r(Re())):s<100?setTimeout(()=>{r(Re())},100-s):r(Re())}},S3=e=>async t=>{const n=Date.now();let r=null;try{r=setTimeout(()=>{t(ns())},100),await zy(Kt(Yn,`lists/${e}`)),t({type:Qy,payload:e})}catch(i){console.error("Error deleting list:",i),t(Re())}finally{const i=Date.now()-n;i<100?setTimeout(()=>{t(Re())},100-i):t(Re()),r&&clearTimeout(r)}},Zy=e=>async(t,n)=>{const i=n().lists.find(d=>d.id===e);if(!i){console.error(`List with id ${e} not found.`);return}const o=i.inputValue;if(o.trim()==="")return;if(!i.elements){console.error(`List elements for list with id ${e} are not defined.`);return}const s={id:(i.elements.length+1).toString(),title:o,isCompleted:!1},a=[...i.elements,s],l=Date.now();let u=null;const c=100;try{u=setTimeout(()=>{t({type:ts})},c);const d=Kt(Yn,`lists/${e}`);await xl(d,{elements:a}),t({type:Gy,payload:{listId:e,item:s}}),t({type:Wf,payload:{listId:e,inputValue:""}})}catch(d){console.error("Error adding item:",d),t(Re())}finally{const d=Date.now()-l;d<100?setTimeout(()=>{t(Re())},100-d):t(Re()),u&&clearTimeout(u)}},Jy=(e,t)=>async(n,r)=>{const i=Date.now();let o=null;const s=100;try{o=setTimeout(()=>{n({type:ts})},s);const l=r().lists.find(d=>d.id===e);if(!l){console.error(`List with id ${e} not found.`);return}const u=l.elements.filter(d=>d.id!==t),c=Kt(Yn,`lists/${e}`);await xl(c,{elements:u}),n({type:Ky,payload:{listId:e,itemId:t}})}catch(a){console.error("Error deleting item:",a)}finally{const a=Date.now()-i;a<s?setTimeout(()=>{n({type:mi})},s-a):n({type:mi}),o&&clearTimeout(o)}},e_=(e,t,n)=>async(r,i)=>{const s=i().lists.find(d=>d.id===e);if(!s){console.error(`List with id ${e} not found.`);return}const a=s.elements.map(d=>d.id===t?{...d,isCompleted:n}:d),l=Date.now();let u=null;const c=100;try{u=setTimeout(()=>{r({type:ts})},c);const d=Kt(Yn,`lists/${e}`);await xl(d,{elements:a}),r({type:qy,payload:{listId:e,itemId:t,isCompleted:n}})}catch(d){console.error("Error marking item as completed:",d)}finally{const d=Date.now()-l;d<c?setTimeout(()=>{r({type:mi})},c-d):r({type:mi}),u&&clearTimeout(u)}},t_=(e,t)=>({type:Wf,payload:{listId:e,inputValue:t}}),k3=()=>async e=>{const t=Date.now();e(ns());try{const n=Kt(Yn,"categories"),r=await Uf(n),i=[];r.forEach(o=>{const s=o.val();s&&i.push(s.category)}),e({type:"FETCH_CATEGORIES",payload:i})}catch(n){console.error("Error fetching categories:",n)}finally{Date.now()-t<100?e(Re()):setTimeout(()=>e(Re()),100)}},N3=e=>async t=>{let n=null;const r=Date.now();try{n=setTimeout(()=>{t(ns())},100),await Fy(Kt(Yn,"categories"),{category:e}),t({type:Yy,payload:e})}catch(i){console.error("Error adding category:",i)}finally{const i=Date.now()-r;n?(clearTimeout(n),t(Re())):i<100?setTimeout(()=>{t(Re())},100-i):t(Re())}};var n_={exports:{}},T3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I3=T3,P3=I3;function r_(){}function i_(){}i_.resetWarningCache=r_;var R3=function(){function e(r,i,o,s,a,l){if(l!==P3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i_,resetWarningCache:r_};return n.PropTypes=n,n};n_.exports=R3();var A3=n_.exports;const mt=Im(A3);var O3=["color","size","title","className"];function Kc(){return Kc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kc.apply(this,arguments)}function D3(e,t){if(e==null)return{};var n=M3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function M3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Vf=C.forwardRef(function(e,t){var n=e.color,r=e.size,i=e.title,o=e.className,s=D3(e,O3);return b.createElement("svg",Kc({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-plus",o].filter(Boolean).join(" ")},s),i?b.createElement("title",null,i):null,b.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"}))});Vf.propTypes={color:mt.string,size:mt.oneOfType([mt.string,mt.number]),title:mt.string,className:mt.string};Vf.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var L3=["color","size","title","className"];function qc(){return qc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qc.apply(this,arguments)}function F3(e,t){if(e==null)return{};var n=z3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function z3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var kl=C.forwardRef(function(e,t){var n=e.color,r=e.size,i=e.title,o=e.className,s=F3(e,L3);return b.createElement("svg",qc({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-x",o].filter(Boolean).join(" ")},s),i?b.createElement("title",null,i):null,b.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"}))});kl.propTypes={color:mt.string,size:mt.oneOfType([mt.string,mt.number]),title:mt.string,className:mt.string};kl.defaultProps={color:"currentColor",size:"1em",title:null,className:""};const j3=({item:e,listId:t,handleMarkClicked:n,handleRemoveItem:r})=>k.jsxs("div",{className:`flex items-center justify-between p-4 rounded-lg border bg-white ${e.isCompleted?"opacity-70":"opacity-100"}`,children:[k.jsx("input",{type:"checkbox",className:" mr-4 cursor-pointer",checked:e.isCompleted,onChange:()=>n(t,e.id,!e.isCompleted)}),k.jsx("label",{htmlFor:e.id,className:`flex text-base flex-1 cursor-pointer whitespace-normal truncate ${e.isCompleted?"line-through text-gray-500":"text-black"}`,children:e.title}),k.jsx(kl,{className:"text-red-500 cursor-pointer",onClick:()=>r(t,e.id)})]});function Te(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var B3=typeof Symbol=="function"&&Symbol.observable||"@@observable",_m=B3,bu=()=>Math.random().toString(36).substring(7).split("").join("."),$3={INIT:`@@redux/INIT${bu()}`,REPLACE:`@@redux/REPLACE${bu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bu()}`},Ia=$3;function Hf(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function o_(e,t,n){if(typeof e!="function")throw new Error(Te(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Te(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Te(1));return n(o_)(e,t)}let r=e,i=t,o=new Map,s=o,a=0,l=!1;function u(){s===o&&(s=new Map,o.forEach((_,v)=>{s.set(v,_)}))}function c(){if(l)throw new Error(Te(3));return i}function d(_){if(typeof _!="function")throw new Error(Te(4));if(l)throw new Error(Te(5));let v=!0;u();const g=a++;return s.set(g,_),function(){if(v){if(l)throw new Error(Te(6));v=!1,u(),s.delete(g),o=null}}}function f(_){if(!Hf(_))throw new Error(Te(7));if(typeof _.type>"u")throw new Error(Te(8));if(typeof _.type!="string")throw new Error(Te(17));if(l)throw new Error(Te(9));try{l=!0,i=r(i,_)}finally{l=!1}return(o=s).forEach(g=>{g()}),_}function h(_){if(typeof _!="function")throw new Error(Te(10));r=_,f({type:Ia.REPLACE})}function m(){const _=d;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(Te(11));function g(){const w=v;w.next&&w.next(c())}return g(),{unsubscribe:_(g)}},[_m](){return this}}}return f({type:Ia.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:h,[_m]:m}}function U3(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ia.INIT})>"u")throw new Error(Te(12));if(typeof n(void 0,{type:Ia.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Te(13))})}function s_(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{U3(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],h=s[d],m=f(h,a);if(typeof m>"u")throw a&&a.type,new Error(Te(14));u[d]=m,l=l||m!==h}return l=l||r.length!==Object.keys(s).length,l?u:s}}function Pa(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function W3(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Te(15))};const s={getState:i.getState,dispatch:(l,...u)=>o(l,...u)},a=e.map(l=>l(s));return o=Pa(...a)(i.dispatch),{...i,dispatch:o}}}function V3(e){return Hf(e)&&"type"in e&&typeof e.type=="string"}var a_=Symbol.for("immer-nothing"),bm=Symbol.for("immer-draftable"),lt=Symbol.for("immer-state");function At(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var gi=Object.getPrototypeOf;function wr(e){return!!e&&!!e[lt]}function Er(e){var t;return e?l_(e)||Array.isArray(e)||!!e[bm]||!!((t=e.constructor)!=null&&t[bm])||Tl(e)||Il(e):!1}var H3=Object.prototype.constructor.toString();function l_(e){if(!e||typeof e!="object")return!1;const t=gi(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===H3}function Ra(e,t){Nl(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Nl(e){const t=e[lt];return t?t.type_:Array.isArray(e)?1:Tl(e)?2:Il(e)?3:0}function Yc(e,t){return Nl(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u_(e,t,n){const r=Nl(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Q3(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Tl(e){return e instanceof Map}function Il(e){return e instanceof Set}function rr(e){return e.copy_||e.base_}function Xc(e,t){if(Tl(e))return new Map(e);if(Il(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=l_(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[lt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[s]})}return Object.create(gi(e),r)}else{const r=gi(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function Qf(e,t=!1){return Pl(e)||wr(e)||!Er(e)||(Nl(e)>1&&(e.set=e.add=e.clear=e.delete=G3),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Qf(r,!0))),e}function G3(){At(2)}function Pl(e){return Object.isFrozen(e)}var K3={};function Cr(e){const t=K3[e];return t||At(0,e),t}var Lo;function c_(){return Lo}function q3(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function wm(e,t){t&&(Cr("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Zc(e){Jc(e),e.drafts_.forEach(Y3),e.drafts_=null}function Jc(e){e===Lo&&(Lo=e.parent_)}function Em(e){return Lo=q3(Lo,e)}function Y3(e){const t=e[lt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Cm(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[lt].modified_&&(Zc(t),At(4)),Er(e)&&(e=Aa(t,e),t.parent_||Oa(t,e)),t.patches_&&Cr("Patches").generateReplacementPatches_(n[lt].base_,e,t.patches_,t.inversePatches_)):e=Aa(t,n,[]),Zc(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==a_?e:void 0}function Aa(e,t,n){if(Pl(t))return t;const r=t[lt];if(!r)return Ra(t,(i,o)=>xm(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Oa(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),Ra(o,(a,l)=>xm(e,r,i,a,l,n,s)),Oa(e,i,!1),n&&e.patches_&&Cr("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function xm(e,t,n,r,i,o,s){if(wr(i)){const a=o&&t&&t.type_!==3&&!Yc(t.assigned_,r)?o.concat(r):void 0,l=Aa(e,i,a);if(u_(n,r,l),wr(l))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(Er(i)&&!Pl(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Aa(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Oa(e,i)}}function Oa(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Qf(t,n)}function X3(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:c_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Gf;n&&(i=[r],o=Fo);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var Gf={get(e,t){if(t===lt)return e;const n=rr(e);if(!Yc(n,t))return Z3(e,n,t);const r=n[t];return e.finalized_||!Er(r)?r:r===wu(e.base_,t)?(Eu(e),e.copy_[t]=td(r,e)):r},has(e,t){return t in rr(e)},ownKeys(e){return Reflect.ownKeys(rr(e))},set(e,t,n){const r=d_(rr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=wu(rr(e),t),o=i==null?void 0:i[lt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Q3(n,i)&&(n!==void 0||Yc(e.base_,t)))return!0;Eu(e),ed(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return wu(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Eu(e),ed(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=rr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){At(11)},getPrototypeOf(e){return gi(e.base_)},setPrototypeOf(){At(12)}},Fo={};Ra(Gf,(e,t)=>{Fo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Fo.deleteProperty=function(e,t){return Fo.set.call(this,e,t,void 0)};Fo.set=function(e,t,n){return Gf.set.call(this,e[0],t,n,e[0])};function wu(e,t){const n=e[lt];return(n?rr(n):e)[t]}function Z3(e,t,n){var i;const r=d_(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function d_(e,t){if(!(t in e))return;let n=gi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=gi(n)}}function ed(e){e.modified_||(e.modified_=!0,e.parent_&&ed(e.parent_))}function Eu(e){e.copy_||(e.copy_=Xc(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var J3=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(l=o,...u){return s.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&At(6),r!==void 0&&typeof r!="function"&&At(7);let i;if(Er(t)){const o=Em(this),s=td(t,void 0);let a=!0;try{i=n(s),a=!1}finally{a?Zc(o):Jc(o)}return wm(o,r),Cm(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===a_&&(i=void 0),this.autoFreeze_&&Qf(i,!0),r){const o=[],s=[];Cr("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else At(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let r,i;return[this.produce(t,n,(s,a)=>{r=s,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Er(e)||At(8),wr(e)&&(e=f_(e));const t=Em(this),n=td(e,void 0);return n[lt].isManual_=!0,Jc(t),n}finishDraft(e,t){const n=e&&e[lt];(!n||!n.isManual_)&&At(9);const{scope_:r}=n;return wm(r,t),Cm(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Cr("Patches").applyPatches_;return wr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function td(e,t){const n=Tl(e)?Cr("MapSet").proxyMap_(e,t):Il(e)?Cr("MapSet").proxySet_(e,t):X3(e,t);return(t?t.scope_:c_()).drafts_.push(n),n}function f_(e){return wr(e)||At(10,e),h_(e)}function h_(e){if(!Er(e)||Pl(e))return e;const t=e[lt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Xc(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Xc(e,!0);return Ra(n,(r,i)=>{u_(n,r,h_(i))}),t&&(t.finalized_=!1),n}var ut=new J3;ut.produce;ut.produceWithPatches.bind(ut);ut.setAutoFreeze.bind(ut);ut.setUseStrictShallowCopy.bind(ut);ut.applyPatches.bind(ut);ut.createDraft.bind(ut);ut.finishDraft.bind(ut);function e5(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function t5(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function n5(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var Sm=e=>Array.isArray(e)?e:[e];function r5(e){const t=Array.isArray(e[0])?e[0]:e;return n5(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function i5(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var o5=class{constructor(e){this.value=e}deref(){return this.value}},s5=typeof WeakRef<"u"?WeakRef:o5,a5=0,km=1;function ks(){return{s:a5,v:void 0,o:null,p:null}}function Kf(e,t={}){let n=ks();const{resultEqualityCheck:r}=t;let i,o=0;function s(){var d;let a=n;const{length:l}=arguments;for(let f=0,h=l;f<h;f++){const m=arguments[f];if(typeof m=="function"||typeof m=="object"&&m!==null){let p=a.o;p===null&&(a.o=p=new WeakMap);const _=p.get(m);_===void 0?(a=ks(),p.set(m,a)):a=_}else{let p=a.p;p===null&&(a.p=p=new Map);const _=p.get(m);_===void 0?(a=ks(),p.set(m,a)):a=_}}const u=a;let c;if(a.s===km)c=a.v;else if(c=e.apply(null,arguments),o++,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,o!==0&&o--),i=typeof c=="object"&&c!==null||typeof c=="function"?new s5(c):c}return u.s=km,u.v=c,c}return s.clearCache=()=>{n=ks(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function p_(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let o=0,s=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),e5(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=Kf,argsMemoizeOptions:m=[],devModeChecks:p={}}=c,_=Sm(f),v=Sm(m),g=r5(i),y=d(function(){return o++,u.apply(null,arguments)},..._),w=h(function(){s++;const T=i5(g,arguments);return a=y.apply(null,T),a},...v);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:g,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:h})};return Object.assign(r,{withTypes:()=>r}),r}var l5=p_(Kf),u5=Object.assign((e,t=l5)=>{t5(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((s,a,l)=>(s[n[l]]=a,s),{}))},{withTypes:()=>u5});function m_(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var c5=m_(),d5=m_,f5=(...e)=>{const t=p_(...e),n=Object.assign((...r)=>{const i=t(...r),o=(s,...a)=>i(wr(s)?f_(s):s,...a);return Object.assign(o,i),o},{withTypes:()=>n});return n};f5(Kf);var h5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Pa:Pa.apply(null,arguments)};function Rl(e,t){function n(...r){return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>V3(r)&&r.type===e,n}var g_=class Hi extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Hi.prototype)}static get[Symbol.species](){return Hi}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Hi(...t[0].concat(this)):new Hi(...t.concat(this))}};function p5(e){return typeof e=="boolean"}var m5=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new g_;return n&&(p5(n)?s.push(c5):s.push(d5(n.extraArgument))),s},g5="RTK_autoBatch",v_=e=>t=>{setTimeout(t,e)},v5=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:v_(10),y5=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?v5:e.type==="callback"?e.queueNotification:v_(e.timeout),u=()=>{s=!1,o&&(o=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[g5]),o=!i,o&&(s||(s=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},_5=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new g_(e);return r&&i.push(y5(typeof r=="object"?r:void 0)),i},b5=!0;function w5(e){const t=m5(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Hf(n))a=s_(n);else throw new Error(Al(1));let l;typeof r=="function"?l=r(t):l=t();let u=Pa;i&&(u=h5({trace:!b5,...typeof i=="object"&&i}));const c=W3(...l),d=_5(c);let f=typeof s=="function"?s(d):d();const h=u(...f);return o_(a,o,h)}var E5="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",C5=(e=21)=>{let t="",n=e;for(;n--;)t+=E5[Math.random()*64|0];return t},x5=(e,t)=>{if(typeof e!="function")throw new Error(Al(32))},qf="listenerMiddleware",S5=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:o}=e;if(t)i=Rl(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Al(21));return x5(o),{predicate:i,type:t,effect:o}},k5=Object.assign(e=>{const{type:t,predicate:n,effect:r}=S5(e);return{id:C5(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Al(22))}}},{withTypes:()=>k5}),N5=Object.assign(Rl(`${qf}/add`),{withTypes:()=>N5});Rl(`${qf}/removeAll`);var T5=Object.assign(Rl(`${qf}/remove`),{withTypes:()=>T5});function Al(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const I5=[],P5=(e=I5,t)=>{switch(t.type){case Vy:return t.payload;case Hy:return[...e,t.payload];case Qy:return e.filter(n=>n.id!==t.payload);case Gy:{const{listId:n,item:r}=t.payload;return e.map(i=>i.id===n?{...i,elements:[...i.elements,r]}:i)}case Ky:{const{listId:n,itemId:r}=t.payload;return e.map(i=>i.id===n?{...i,elements:i.elements.filter(o=>o.id!==r)}:i)}case qy:{const{listId:n,itemId:r,isCompleted:i}=t.payload;return e.map(o=>o.id===n?{...o,elements:o.elements.map(s=>s.id===r?{...s,isCompleted:i}:s)}:o)}case Wf:{const{listId:n,inputValue:r}=t.payload;return e.map(i=>i.id===n?{...i,inputValue:r}:i)}default:return e}},R5=[],A5=(e=R5,t)=>{switch(t.type){case w3:return t.payload;case Yy:return[...e,t.payload];case E3:return e.filter(n=>n!==t.payload);default:return e}},O5={isWorking:!1},D5=(e=O5,t)=>{switch(t.type){case ts:return{isWorking:!0};case mi:return{isWorking:!1};default:return e}},M5=s_({lists:P5,categories:A5,working:D5}),L5=w5({reducer:M5}),y_=()=>Jd(),F5=({category:e,onRemoveList:t,color:n})=>{const r=n==="#ffffcc"?"text-gray-500":"text-white";return k.jsxs("div",{className:"absolute top-3 right-2",children:[k.jsx("div",{className:`absolute right-8 font-bold whitespace-nowrap opacity-80 ${r}`,children:e}),k.jsx(kl,{className:"w-6 h-6 text-black opacity-70",onClick:t})]})},z5=({listId:e,elements:t})=>{const n=y_();return k.jsx("div",{className:"custom-scrollbar1 h-64 overflow-auto",children:t&&t.map(r=>k.jsx("div",{className:"m-2",children:k.jsx(j3,{item:r,listId:e,handleMarkClicked:(i,o,s)=>n(e_(i,o,s)),handleRemoveItem:(i,o)=>n(Jy(i,o))})},r.id))})},j5=({listId:e,inputValue:t})=>{const n=y_();return k.jsx("div",{className:" left-0 right-0 bottom-0 p-2",children:k.jsxs("div",{className:"flex items-center justify-between ",children:[k.jsx("input",{type:"text",value:t||"",onChange:r=>n(t_(e,r.target.value)),placeholder:"Add a new item...",className:"w-full border-b border-transparent py-2 px-4 pr-10 focus:outline-none bg-transparent input-placeholder"}),k.jsx("button",{onClick:()=>n(Zy(e)),children:k.jsx(Vf,{className:"absolute right-3  bottom-3 text-green-600 w-6 h-6"})})]})})},B5=({list:e,onRemoveList:t,markClicked:n,removeItem:r,addItemToList:i,inputHandlerForList:o})=>{const{id:s,color:a,title:l,elements:u,inputValue:c,category:d}=e;return k.jsx("div",{className:"list m-2 h-45vh min-h-400px flex-0 flex-grow flex-shrink basis-[calc(33.33%-20px)] box-border rounded-lg relative",children:k.jsxs("div",{className:"w-full h-50vh w-50vw hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in",style:{backgroundColor:a},children:[k.jsx(F5,{category:d,onRemoveList:()=>t(s),color:a}),k.jsx("h2",{className:"m-5 mt-8 text-2xl font-bold",children:l}),k.jsx(z5,{listId:s,elements:u||[]}),k.jsx(j5,{listId:s,inputValue:c})]})})},$5=({onAddList:e})=>{const t=Jd(),n=Zd(d=>d.categories),[r,i]=C.useState(""),[o,s]=C.useState(""),[a,l]=C.useState("");C.useEffect(()=>{t(k3())},[t]);const u=d=>{const{name:f,value:h}=d.target;f==="title"&&i(h),f==="color"&&s(h),f==="category"&&l(h)},c=d=>{d.preventDefault(),e(r,o,a),i(""),s(""),l("")};return k.jsxs("form",{className:"w-full flex flex-col gap-2",onSubmit:c,children:[k.jsx("input",{className:"w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500",type:"text",name:"title",value:r,placeholder:"Tytuł listy",onChange:u}),k.jsxs("select",{className:"w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500",value:o,name:"color",onChange:u,children:[k.jsx("option",{value:"",children:"Kolor"}),k.jsx("option",{value:"#ffcce0",children:"Różowy"}),k.jsx("option",{value:"#b2f0b2",children:"Zielony"}),k.jsx("option",{value:"#cce0ff",children:"Niebieski"}),k.jsx("option",{value:"#ffffcc",children:"Żółty"}),k.jsx("option",{value:"#d9b3ff",children:"Fioletowy"})]}),k.jsxs("select",{className:"w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500",value:a,name:"category",onChange:u,children:[k.jsx("option",{value:"",children:"Kategoria"}),n.map((d,f)=>k.jsxs("option",{value:d,children:[d," "]},f))]}),k.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Dodaj listę"})]})},U5=({onAddCategory:e})=>{const[t,n]=C.useState(""),r=o=>{const{name:s,value:a}=o.target;s==="newCategory"&&n(a)},i=o=>{o.preventDefault(),e(t),n("")};return k.jsxs("form",{className:"w-full flex flex-col gap-2",onSubmit:i,children:[k.jsx("input",{className:"w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500",type:"text",name:"newCategory",value:t,placeholder:"Nowa kategoria",onChange:r}),k.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Dodaj kategorię"})]})};var __={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nm=b.createContext&&b.createContext(__),W5=["attr","size","title"];function V5(e,t){if(e==null)return{};var n=H5(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function H5(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function Tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ma(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tm(Object(n),!0).forEach(function(r){Q5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q5(e,t,n){return t=G5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G5(e){var t=K5(e,"string");return typeof t=="symbol"?t:t+""}function K5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b_(e){return e&&e.map((t,n)=>b.createElement(t.tag,Ma({key:n},t.attr),b_(t.child)))}function q5(e){return t=>b.createElement(Y5,Da({attr:Ma({},e.attr)},t),b_(e.child))}function Y5(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=V5(e,W5),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),b.createElement("svg",Da({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ma(Ma({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&b.createElement("title",null,o),e.children)};return Nm!==void 0?b.createElement(Nm.Consumer,null,n=>t(n)):t(__)}function X5(e){return q5({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4h3v1H4v3H3V5H0V4h3V1h1v3zM1 14.5V9h1v5h12V7H8V6h6V4H8V3h6.5l.5.5v11l-.5.5h-13l-.5-.5z"},child:[]}]})(e)}const Z5=()=>{const e=Zd(u=>u.lists),t=Jd();C.useEffect(()=>{t(C3())},[t]);const n=(u,c,d)=>{c||(c=Xy()),u||(u="Nowa lista"),t(x3(u,c,d))},r=u=>{u.trim()!==""&&t(N3(u))},i=u=>{t(S3(u))},o=(u,c)=>{t(Jy(u,c))},s=(u,c,d)=>{t(e_(u,c,d))},a=(u,c)=>{t(t_(c,u.target.value))},l=u=>{const c=e.find(d=>d.id===u);c&&c.inputValue.trim()!==""&&t(Zy(u))};return k.jsxs("div",{className:"flex justify-center",children:[k.jsxs("div",{className:"sidebar relative rounded-lg",children:[k.jsx($5,{onAddList:n}),k.jsx(U5,{onAddCategory:r})]}),k.jsxs("div",{className:"container bg-[#0c4a6e] bg-opacity-5 overflow-auto",children:[e.map(u=>k.jsx(B5,{list:u,onRemoveList:i,markClicked:s,removeItem:o,addItemToList:l,inputHandlerForList:a},u.id)),e.length===0&&k.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-300",children:[k.jsx(X5,{className:"text-9xl"}),k.jsx("p",{className:"font-bold text-lg mt-4",children:"Dodaj swoje listy"})]})]})]})},J5=()=>k.jsx("div",{children:k.jsx(Z5,{})});function eN(){return k.jsx(Lw,{children:k.jsx(Ow,{children:k.jsxs(js,{path:"/",element:k.jsx(O2,{}),children:[k.jsx(js,{index:!0,element:k.jsx(M2,{})}),k.jsx(js,{path:"/#/listy-zadan",element:k.jsx(J5,{})})]})})})}xu.createRoot(document.getElementById("root")).render(k.jsx(b.StrictMode,{children:k.jsx(i2,{store:L5,children:k.jsx(eN,{})})}));
