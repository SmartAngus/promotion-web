/*! For license information please see 870.a67205a0a614d1ca5ec0.js.LICENSE.txt */
(self.webpackChunkreact_web=self.webpackChunkreact_web||[]).push([[870],{8787:(e,t,n)=>{"use strict";n.d(t,{E:()=>o,Y:()=>a});var r=n(3355),o=(0,r.b)("success","processing","error","default","warning"),a=(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},1790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(6610),o=n(5991),a=n(3349),c=n(379),i=n(4144),l=n(7294),s=n(4958),u=n(2550),f=n(5164),d=0,m={};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=d++,r=t;function o(){(r-=1)<=0?(e(),delete m[n]):m[n]=(0,f.Z)(o)}return m[n]=(0,f.Z)(o),n}p.cancel=function(e){void 0!==e&&(f.Z.cancel(m[e]),delete m[e])},p.ids=m;var v,y=n(6032),b=n(6159);function g(e){return!e||null===e.offsetParent||e.hidden}function h(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var E=function(e){(0,c.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).containerRef=l.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var r,o;if(!(!t||g(t)||t.className.indexOf("-leave")>=0)){var c=e.props.insertExtraNode;e.extraNode=document.createElement("div");var i=(0,a.Z)(e).extraNode,l=e.context.getPrefixCls;i.className="".concat(l(""),"-click-animating-node");var u=e.getAttributeName();if(t.setAttribute(u,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&h(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){i.style.borderColor=n;var f=(null===(r=t.getRootNode)||void 0===r?void 0:r.call(t))||t.ownerDocument,d=f instanceof Document?f.body:null!==(o=f.firstChild)&&void 0!==o?o:f;v=(0,s.h)("\n      [".concat(l(""),"-click-animating-without-extra-node='true']::after, .").concat(l(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:d})}c&&t.appendChild(i),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!g(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),p.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=p((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!l.isValidElement(r))return r;var o=e.containerRef;return(0,u.Yr)(r)&&(o=(0,u.sQ)(r.ref,e.containerRef)),(0,b.Tm)(r,{ref:o})},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),v&&(v.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return l.createElement(y.C,null,this.renderWave)}}]),n}(l.Component);E.contextType=y.E_},331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(6156),o=n(2122),a=n(8481),c=n(7294),i=n(4184),l=n.n(i),s=n(8423),u=n(4549),f=n(6032),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const m=function(e){var t,n=e.prefixCls,a=e.className,i=e.checked,s=e.onChange,u=e.onClick,m=d(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,c.useContext(f.E_).getPrefixCls)("tag",n),v=l()(p,(t={},(0,r.Z)(t,"".concat(p,"-checkable"),!0),(0,r.Z)(t,"".concat(p,"-checkable-checked"),i),t),a);return c.createElement("span",(0,o.Z)({},m,{className:v,onClick:function(e){null==s||s(!i),null==u||u(e)}}))};var p=n(8787),v=n(1790),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},b=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(p.E.join("|"),")$")),h=function(e,t){var n,i=e.prefixCls,d=e.className,m=e.style,p=e.children,h=e.icon,E=e.color,k=e.onClose,C=e.closeIcon,Z=e.closable,x=void 0!==Z&&Z,N=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=c.useContext(f.E_),O=w.getPrefixCls,S=w.direction,T=c.useState(!0),P=(0,a.Z)(T,2),j=P[0],I=P[1];c.useEffect((function(){"visible"in N&&I(N.visible)}),[N.visible]);var A=function(){return!!E&&(b.test(E)||g.test(E))},L=(0,o.Z)({backgroundColor:E&&!A()?E:void 0},m),R=A(),M=O("tag",i),_=l()(M,(n={},(0,r.Z)(n,"".concat(M,"-").concat(E),R),(0,r.Z)(n,"".concat(M,"-has-color"),E&&!R),(0,r.Z)(n,"".concat(M,"-hidden"),!j),(0,r.Z)(n,"".concat(M,"-rtl"),"rtl"===S),n),d),W=function(e){e.stopPropagation(),null==k||k(e),e.defaultPrevented||"visible"in N||I(!1)},D="onClick"in N||p&&"a"===p.type,V=(0,s.Z)(N,["visible"]),Y=h||null,H=Y?c.createElement(c.Fragment,null,Y,c.createElement("span",null,p)):p,U=c.createElement("span",(0,o.Z)({},V,{ref:t,className:_,style:L}),H,x?C?c.createElement("span",{className:"".concat(M,"-close-icon"),onClick:W},C):c.createElement(u.Z,{className:"".concat(M,"-close-icon"),onClick:W}):null);return D?c.createElement(v.Z,null,U):U},E=c.forwardRef(h);E.displayName="Tag",E.CheckableTag=m;const k=E},1051:(e,t,n)=>{"use strict";n(7057)},1913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});n(1051);var r=n(331),o=(n(7057),n(2122)),a=n(6156),c=n(8481),i=n(7294),l=n(4549),s=n(5873),u=n(7119),f=n(8628),d=n(1627),m=n(8819),p=n(8855),v=n(847),y=n(3061),b=n(444),g=n(4184),h=n.n(g),E=n(6032);var k=n(6610),C=n(5991),Z=n(379),x=n(4144),N=function(e){(0,Z.Z)(n,e);var t=(0,x.Z)(n);function n(){var e;return(0,k.Z)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,C.Z)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,r=e.children,o=this.state,a=o.error,c=o.info,l=c&&c.componentStack?c.componentStack:null,s=void 0===t?(a||"").toString():t,u=void 0===n?l:n;return a?i.createElement(j,{type:"error",message:s,description:i.createElement("pre",null,u)}):r}}]),n}(i.Component),w=n(6159),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},S={success:m.Z,info:v.Z,error:y.Z,warning:p.Z},T={success:s.Z,info:f.Z,error:d.Z,warning:u.Z},P=function(e){var t,n=e.description,r=e.prefixCls,s=e.message,u=e.banner,f=e.className,d=void 0===f?"":f,m=e.style,p=e.onMouseEnter,v=e.onMouseLeave,y=e.onClick,g=e.afterClose,k=e.showIcon,C=e.closable,Z=e.closeText,x=e.action,N=O(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),P=i.useState(!1),j=(0,c.Z)(P,2),I=j[0],A=j[1],L=i.useRef(),R=i.useContext(E.E_),M=R.getPrefixCls,_=R.direction,W=M("alert",r),D=function(e){var t;A(!0),null===(t=N.onClose)||void 0===t||t.call(N,e)},V=!!Z||C,Y=function(){var e=N.type;return void 0!==e?e:u?"warning":"info"}(),H=!(!u||void 0!==k)||k,U=h()(W,"".concat(W,"-").concat(Y),(t={},(0,a.Z)(t,"".concat(W,"-with-description"),!!n),(0,a.Z)(t,"".concat(W,"-no-icon"),!H),(0,a.Z)(t,"".concat(W,"-banner"),!!u),(0,a.Z)(t,"".concat(W,"-rtl"),"rtl"===_),t),d),$=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(N);return i.createElement(b.Z,{visible:!I,motionName:"".concat(W,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:g},(function(e){var t,r,c=e.className,u=e.style;return i.createElement("div",(0,o.Z)({ref:L,"data-show":!I,className:h()(U,c),style:(0,o.Z)((0,o.Z)({},m),u),onMouseEnter:p,onMouseLeave:v,onClick:y,role:"alert"},$),H?(t=N.icon,r=(n?T:S)[Y]||null,t?(0,w.wm)(t,i.createElement("span",{className:"".concat(W,"-icon")},t),(function(){return{className:h()("".concat(W,"-icon"),(0,a.Z)({},t.props.className,t.props.className))}})):i.createElement(r,{className:"".concat(W,"-icon")})):null,i.createElement("div",{className:"".concat(W,"-content")},i.createElement("div",{className:"".concat(W,"-message")},s),i.createElement("div",{className:"".concat(W,"-description")},n)),x?i.createElement("div",{className:"".concat(W,"-action")},x):null,V?i.createElement("button",{type:"button",onClick:D,className:"".concat(W,"-close-icon"),tabIndex:0},Z?i.createElement("span",{className:"".concat(W,"-close-text")},Z):i.createElement(l.Z,null)):null)}))};P.ErrorBoundary=N;const j=P;var I=n(3949);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const R=function(){var e=A((0,i.useState)([]),2),t=e[0],n=e[1];return(0,i.useEffect)((function(){(0,I.wY)("/wkylin/angular-json-server/react").then((function(e){return n(e.data)})).catch((function(e){}))}),[]),i.createElement(i.Fragment,null,i.createElement(j,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),i.createElement("h5",{style:{margin:"30px 0 5px 0"}},"技术栈："),t.map((function(e,t){return i.createElement(r.Z,{key:t,color:"success"},"React: v17.0.2")})))}}}]);