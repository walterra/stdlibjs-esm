// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import t from"./../assert/is-function.js";var e=r,n=t;function a(r,t,a,i){var o,l,u;if(!e(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(!n(a))throw new TypeError("invalid argument. Third argument must be a function. Value:`"+a+"`.");for(l=t,u=(o=r.length)-1;u>=0;u--)l=a.call(i,l,r[u],u,r),o!==r.length&&(u+=r.length-o,o=r.length);return l}var i=a;export default i;
//# sourceMappingURL=reduce-right.js.map