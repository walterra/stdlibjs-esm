// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/exp.js";import r from"./../../../../math/base/special/ln.js";import s from"./../../../../constants/math/float64-sqrt-two-pi.js";var o=t,m=a,e=r,i=s;function p(t,a){return o(t)||o(a)||a<=0?NaN:e(a*m(t+.5)*i)}var n=p;export default n;
//# sourceMappingURL=entropy.js.map