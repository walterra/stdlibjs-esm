// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nonnegative-integer.js";import e from"./../assert/is-string.js";import t from"./../constants/math/float64-max-safe-integer.js";var n=r.isPrimitive,i=e.isPrimitive,a=t;function s(r,e){var t,s;if(!i(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!n(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>a)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",s=e;1==(1&s)&&(t+=r),0!==(s>>>=1);)r+=r;return t}var o=s;export default o;
//# sourceMappingURL=repeat.js.map