// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/pow.js";import e from"./../../../../utils/constant-function.js";var o=t,a=n;function i(r,t,n){return o(r)||o(t)||o(n)||t<=0||n<=0?NaN:r<=0?0:r>=1?1:1-a(1-a(r,t),n)}var f=e,u=t,s=n;function m(r,t){return u(r)||u(t)||r<=0||t<=0?f(NaN):function(n){if(u(n))return NaN;if(n<=0)return 0;if(n>=1)return 1;return 1-s(1-s(n,r),t)}}var p=r,c=i,l=m;p(c,"factory",l);export default c;
//# sourceMappingURL=cdf.js.map