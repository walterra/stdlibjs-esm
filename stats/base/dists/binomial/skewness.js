// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/assert/is-nonnegative-integer.js";import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";import s from"./../../../../constants/math/float64-pinf.js";var e=t,o=a,m=r,n=s;function i(t,a){return o(t)||o(a)||a<0||a>1||!e(t)||t===n?NaN:(1-2*a)/m(t*a*(1-a))}var f=i;export default f;
//# sourceMappingURL=skewness.js.map