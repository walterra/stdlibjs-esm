// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-function.js";import n from"./../assert/is-iterator-like.js";import o from"./../assert/has-own-property.js";import t from"./../symbol/iterator.js";var a=e,u=r,l=n,i=o,s=t;function p(e){var r,n,o,t;if(!l(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);return o=0,t=-1,a(n={},"next",m),a(n,"return",f),s&&u(e[s])&&a(n,s,d),n;function m(){var n;return 2===o?{done:!0}:1===o?(t+=1)>=r.length?(o=2,{done:!0}):{value:r[t],done:!1}:(n=e.next()).done?(o=1,i(n,"value")?{value:n.value,done:!1}:(t+=1)>=r.length?(o=2,{done:!0}):{value:r[t],done:!1}):{value:n.value,done:!1}}function f(e){return o=2,arguments.length?{value:e,done:!0}:{done:!0}}function d(){var n,o;for(n=[e[s]()],o=0;o<r.length;o++)n.push(r[o]);return p.apply(null,n)}}var m=p;export default m;
//# sourceMappingURL=push.js.map