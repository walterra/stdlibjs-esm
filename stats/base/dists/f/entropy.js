// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/special/digamma.js";import m from"./../../../../math/base/special/gammaln.js";import r from"./../../../../math/base/assert/is-nan.js";import s from"./../../../../math/base/special/ln.js";var t=a,e=m,i=r,o=s;function p(a,m){var r,s,p,n;return i(a)||i(m)||a<=0||m<=0?NaN:(r=(a+m)/2,s=a/2,p=m/2,n=o(m/a)+e(s)+e(p)-e(r),n+=(1-s)*t(s),n+=(-1-p)*t(p),n+=r*t(r))}var n=p;export default n;
//# sourceMappingURL=entropy.js.map