// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../utils/define-nonenumerable-read-only-property.js";import r from"./../../../symbol/iterator.js";import t from"./../../base/special/nonfibonacci.js";import n from"./../../../assert/is-plain-object.js";import i from"./../../../assert/has-own-property.js";import o from"./../../../assert/is-nonnegative-integer.js";var a=n,s=i,u=o.isPrimitive;function m(e,r){return a(r)?s(r,"iter")&&(e.iter=r.iter,!u(r.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+r.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}var p=e,l=r,f=t,v=m;function c(e){var r,t,n,i,o;if(r={iter:1e308},arguments.length&&(i=v(r,e)))throw i;return o=0,p(t={},"next",a),p(t,"return",s),l&&p(t,l,u),t;function a(){return o+=1,n||o>r.iter?{done:!0}:{value:f(o),done:!1}}function s(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return c(r)}}var d=c;export default d;
//# sourceMappingURL=nonfibonacci.js.map