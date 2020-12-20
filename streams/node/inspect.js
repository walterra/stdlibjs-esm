// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../vendor/process.js";import r from"./../../vendor/readable-stream.js";import o from"./../../assert/is-function.js";import i from"./../../utils/copy.js";import n from"./../../utils/inherit.js";import a from"./../../utils/define-nonenumerable-property.js";import s from"./../../assert/is-plain-object.js";import l from"./../../assert/has-own-property.js";import p from"./../../assert/is-boolean.js";import d from"./../../assert/is-nonnegative-number.js";import m from"./../../vendor/debug.js";var u=!1,f=!1,b=!1,c={objectMode:u,allowHalfOpen:f,readableObjectMode:b},h=s,j=l,g=p.isPrimitive,w=d.isPrimitive;function v(e,t){return h(t)?j(t,"objectMode")&&(e.objectMode=t.objectMode,!g(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):j(t,"readableObjectMode")&&(e.readableObjectMode=t.readableObjectMode,!g(e.readableObjectMode))?new TypeError("invalid option. `readableObjectMode` option must be a primitive boolean. Option: `"+e.readableObjectMode+"`."):j(t,"allowHalfOpen")&&(e.allowHalfOpen=t.allowHalfOpen,!g(e.allowHalfOpen))?new TypeError("invalid option. `allowHalfOpen` option must be a primitive boolean. Option: `"+e.allowHalfOpen+"`."):j(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!w(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}var y=m,O=y("inspect-stream"),M=r.Transform,_=o,k=i,E=n,T=a,x=e,H=c,W=v,C=O;function S(e,t,r){this._idx+=1,C("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",e.toString(),t,this._idx),this._inspect.call(null,e,this._idx),this.push(e),r()}function V(e){C("Flushing the stream..."),e()}function J(e){var r;return this._destroyed?(C("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,t.nextTick((function(){e&&(C("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),r.emit("error",e));C("Closing the stream..."),r.emit("close")})),this)}function N(e,t){var r,o,i;if(!(this instanceof N))return arguments.length>1?new N(e,t):new N(e);if(o=k(H),arguments.length>1){if(r=t,i=W(o,e))throw i}else r=e;if(!_(r))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+r+"`.");return o.writableObjectMode=!0,C("Creating a transform stream configured with the following options: %s.",JSON.stringify(o)),M.call(this,o),T(this,"_destroyed",!1),T(this,"_idx",-1),x(this,"_inspect",r),this}E(N,M),x(N.prototype,"_transform",S),x(N.prototype,"_flush",V),x(N.prototype,"destroy",J);var P=s,A=i,F=N;function I(e,t){var r,o;if(arguments.length>1){if(!P(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");r=A(e),o=t}else r={},o=e;return r.objectMode=!0,new F(r,o)}var R=s,q=i,z=N;function B(e){var t;if(arguments.length){if(!R(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");t=q(e)}else t={};return r;function r(e){return new z(t,e)}}var D=e,G=N,K=I,L=B;D(G,"objectMode",K),D(G,"factory",L);export default G;
//# sourceMappingURL=inspect.js.map