// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import t from"./../assert/is-function.js";var e=r,n=t;function o(r,t,o){var a,i,u;if(!e(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(!n(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");for(i=r.length,a={},u=0;u<i;u++)a[t.call(o,r[u],u)]=r[u];return a}var a=o;export default a;
//# sourceMappingURL=key-by.js.map