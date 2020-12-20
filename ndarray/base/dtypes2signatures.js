// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-array-like-object.js";import e from"./../../assert/is-string.js";import t from"./../../assert/is-nonnegative-integer.js";var n=r,i=e.isPrimitive,a=t.isPrimitive;function s(r,e,t){var s,o,u,g,m,h,l;if(!n(r))throw new TypeError("invalid argument. First argument must be an array-like object containing strings. Value: `"+r+"`.");if(!a(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(!a(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(0===(s=r.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(s%(g=e+t)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],u=[],m=2*g,l=2*e,h=0;h<=m;h++)0===h?h===l?u.push("() => ("):u.push("("):h===m?h===l?u.push(") => ()"):u.push(")"):h===l?u.push(") => ("):h%2==1?u.push(""):u.push(", ");for(h=0;h<s;h++){if(!i(r[h]))throw new TypeError("invalid argument. First argument must be an array-like object containing strings. Value: `"+r+"`.");u[2*(l=h%g)+1]=r[h],l===g-1&&o.push(u.join(""))}return o}var o=s;export default o;
//# sourceMappingURL=dtypes2signatures.js.map