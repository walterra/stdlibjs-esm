// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/ln.js";var t=a,s=r;function e(a){var r;return t(a)||a<=0||a>=1?NaN:(r=1-a,(-a*s(a)-r*s(r))/a)}var m=e;export default m;
//# sourceMappingURL=entropy.js.map