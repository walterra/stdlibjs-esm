// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/pow.js";var t=a,s=r;function e(a,r){return t(a)||a<1||t(r)||r<1||1===a&&1===r?NaN:s((a-1)/(a*r-1),1/a)}var o=e;export default o;
//# sourceMappingURL=mode.js.map