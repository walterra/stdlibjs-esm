// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/floor.js";var t=a,o=r;function s(a){return t(a)||a<0?NaN:0===a?0:o(a+1/3-.02/a)}var e=s;export default e;
//# sourceMappingURL=median.js.map