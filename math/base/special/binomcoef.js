// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-integer.js";import t from"./../assert/is-nan.js";import i from"./../assert/is-odd.js";import e from"./round.js";var f=r,n=t,o=i,s=e;function u(r,t){var i,e;if(n(r)||n(t))return NaN;if(!f(r)||!f(t))return NaN;if(t<0)return 0;if(r<0)return i=u(-r+t-1,t),o(t)&&(i=-i),i;if(t>r)return 0;if(0===t||t===r)return 1;if(1===t||t===r-1)return r;for(r-t<t&&(t=r-t),i=r,e=2;e<=t;e++)i*=(r-e+1)/e;return f(i)?i:s(i)}var a=u;export default a;
//# sourceMappingURL=binomcoef.js.map