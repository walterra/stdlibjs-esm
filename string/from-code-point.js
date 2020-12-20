// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nonnegative-integer.js";import e from"./../assert/is-collection.js";import n from"./../constants/string/unicode-max.js";import o from"./../constants/string/unicode-max-bmp.js";var t=r.isPrimitive,i=e,a=n,s=o,m=String.fromCharCode,d=65536,f=55296,p=56320,u=1023;function c(r){var e,n,o,c,g;if(1===(e=arguments.length)&&i(r))e=(o=arguments[0]).length;else for(o=new Array(e),g=0;g<e;g++)o[g]=arguments[g];if(0===e)throw new Error("insufficient input arguments. Must provide either an array of code points or one or more code points as separate arguments.");for(n="",g=0;g<e;g++){if(c=o[g],!t(c))throw new TypeError("invalid argument. Must provide valid code points (nonnegative integers). Value: `"+c+"`.");if(c>a)throw new RangeError("invalid argument. Must provide a valid code point (cannot exceed max). Value: `"+c+"`.");n+=c<=s?m(c):m(((c-=d)>>10)+f,(c&u)+p)}return n}var g=c;export default g;
//# sourceMappingURL=from-code-point.js.map