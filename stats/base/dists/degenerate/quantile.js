// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import n from"./../../../../math/base/assert/is-nan.js";import t from"./../../../../utils/constant-function.js";var o=n;function a(r,n){return o(r)||r<0||r>1?NaN:n}var e=t,i=n;function u(r){return i(r)?e(NaN):function(n){if(i(n)||n<0||n>1)return NaN;return r}}var f=r,s=a,m=u;f(s,"factory",m);export default s;
//# sourceMappingURL=quantile.js.map