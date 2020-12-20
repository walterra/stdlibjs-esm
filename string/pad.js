// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nonnegative-integer.js";import t from"./../assert/is-string.js";import i from"./repeat.js";import e from"./../math/base/special/floor.js";import n from"./../math/base/special/ceil.js";import a from"./left-pad.js";import o from"./right-pad.js";import p from"./../math/base/special/abs.js";import s from"./../constants/math/float64-max-safe-integer.js";import m from"./../assert/is-plain-object.js";import g from"./../assert/has-own-property.js";import l from"./../assert/is-boolean.js";var d=m,u=g,h=t.isPrimitive,f=l.isPrimitive;function v(r,t){return d(t)?u(t,"lpad")&&(r.lpad=t.lpad,!h(r.lpad))?new TypeError("invalid option. `lpad` option must be a string primitive. Option: `"+r.lpad+"`."):u(t,"rpad")&&(r.rpad=t.rpad,!h(r.rpad))?new TypeError("invalid option. `rpad` option must be a string primitive. Option: `"+r.rpad+"`."):u(t,"centerRight")&&(r.centerRight=t.centerRight,!f(r.centerRight))?new TypeError("invalid option. `centerRight` option must be a boolean primitive. Option: `"+r.centerRight+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}var b=r.isPrimitive,c=t.isPrimitive,w=i,j=e,R=n,E=a,y=o,T=p,O=s,x=v;function P(r,t,i){var e,n,a,o,p,s,m,g,l;if(!c(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!b(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(t>O)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length. Value: `"+t+"`.");if(s={},arguments.length>2&&(m=x(s,i)))throw m;if(s.lpad&&s.rpad)return 0===(l=(t-r.length)/2)?r:((g=j(l))!==l&&(a=!0),l<0?(n=l=j(T(l)),e=r.length-l,a&&(s.centerRight?e-=1:n+=1),r.substring(n,e)):(n=R(l/s.lpad.length),p=w(s.lpad,n),e=R(l/s.rpad.length),o=w(s.rpad,e),n=l=g,e=l,a&&(s.centerRight?n+=1:e+=1),(p=p.substring(0,n))+r+(o=o.substring(0,e))));if(s.lpad)return(g=E(r,t,s.lpad)).substring(g.length-t);if(s.rpad)return y(r,t,s.rpad).substring(0,t);if(void 0===s.rpad)return y(r,t," ").substring(0,t);throw new RangeError("invalid argument. At least one padding option must have a length greater than 0. Left padding: `"+s.lpad+"`. Right padding: `"+s.rpad+"`.")}var V=P;export default V;
//# sourceMappingURL=pad.js.map