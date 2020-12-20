// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../vendor/events.js";import t from"./../../../vendor/debug.js";import r from"./../../../utils/define-property.js";import n from"./../../../utils/define-read-only-property.js";import a from"./../../../utils/copy.js";import i from"./../../../utils/keys.js";import o from"./../../../assert/is-plain-object.js";import s from"./../../../assert/has-own-property.js";import u from"./../../../assert/is-nonnegative-integer.js";import l from"./../../../assert/is-boolean.js";import p from"./../../../vendor/virtual-dom/h.js";var f=0,h=0,v=!1,m={translateX:f,translateY:h,autoRender:v},d=u.isPrimitive;function g(e){return d(e)?null:new TypeError("invalid value. `translateX` must be a nonnegative integer. Value: `"+e+".`")}var c=u.isPrimitive;function b(e){return c(e)?null:new TypeError("invalid value. `translateY` must be a nonnegative integer. Value: `"+e+".`")}var w=l.isPrimitive;function y(e){return w(e)?null:new TypeError("invalid value. `autoRender` must be a boolean primitive. Value: `"+e+".`")}var _=g,R=b,j=y,X={translateX:_,translateY:R,autoRender:j},Y=i,V=o,E=s,N=X,O=Y(N);function C(e,t){var r,n,a,i;if(!V(t))return new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");for(i=0;i<O.length;i++)if(n=O[i],E(t,n)){if(a=t[n],r=N[n](a))return r;e[n]=a}return null}var T="change",P="change",x="change",J={translateX:T,translateY:P,autoRender:x},S=J;function k(e){return S[e]}var A=t,D=k,G=g,M=A("graph:set:translate-x"),q=D("translateX");function z(e){var t=G(e);if(t)throw t;M("Current value: %d.",this._translateX),this._translateX=e,M("New Value: %d.",this._translateX),this.emit(q)}function B(){return this._translateX}var F=t,H=k,I=b,K=F("graph:set:translate-y"),L=H("translateY");function Q(e){var t=I(e);if(t)throw t;K("Current value: %d.",this._translateY),this._translateY=e,K("New Value: %d.",this._translateY),this.emit(L)}function U(){return this._translateY}var W=t,Z=k,$=y,ee=W("canvas:set:auto-render"),te=Z("autoRender");function re(e){var t=$(e);if(t)throw t;ee("Current value: %d.",this._autoRender),this._autoRender=e,ee("New Value: %d.",this._autoRender),this.emit(te)}function ne(){return this._autoRender}var ae=t,ie=p,oe=ae("graph:render"),se="g";function ue(){var e,t;return oe("Rendering..."),e={namespace:"http://www.w3.org/2000/svg",property:"graph",className:"graph",attributes:{transform:"translate("+this.translateX+","+this.translateY+")"}},oe("Generating a virtual DOM tree (%s) with properties: %s.",se,JSON.stringify(e)),t=ie(se,e,[]),this.emit("_render",t),t}var le=e.EventEmitter,pe=t,fe=r,he=n,ve=a,me=m,de=C,ge=z,ce=B,be=Q,we=U,ye=re,_e=ne,Re=ue,je=pe("graph:main");function Xe(e){var t,r,n;if(!(this instanceof Xe))return new Xe(e);if(t=this,r=ve(me),n=de(r,e))throw n;return je("Creating an instance with the following configuration: %s.",JSON.stringify(r)),le.call(this),fe(this,"_translateX",{configurable:!1,enumerable:!1,writable:!0,value:r.translateX}),fe(this,"_translateY",{configurable:!1,enumerable:!1,writable:!0,value:r.translateY}),fe(this,"_autoRender",{configurable:!1,enumerable:!1,writable:!0,value:r.autoRender}),this.on("change",(function(){je("Received a change event."),t._autoRender&&t.render()})),this.on("_render",(function(){var e,r;for(je("Received a render event. Re-emitting..."),(e=new Array(arguments.length+1))[0]="render",r=0;r<arguments.length;r++)e[r+1]=arguments[r];t.emit.apply(t,e)})),this}Xe.prototype=Object.create(le.prototype),Xe.prototype.constructor=Xe,fe(Xe.prototype,"translateX",{configurable:!1,enumerable:!0,set:ge,get:ce}),fe(Xe.prototype,"translateY",{configurable:!1,enumerable:!0,set:be,get:we}),fe(Xe.prototype,"autoRender",{configurable:!1,enumerable:!0,set:ye,get:_e}),he(Xe.prototype,"render",Re);var Ye=Xe;export default Ye;
//# sourceMappingURL=graph.js.map