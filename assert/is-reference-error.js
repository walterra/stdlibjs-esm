// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/get-prototype-of.js";import e from"./../utils/type-of.js";import o from"./is-error.js";var t=r,f=e,i=o;function n(r){if("object"!=typeof r||null===r)return!1;if(r instanceof ReferenceError)return!0;if(i(r))for(;r;){if("referenceerror"===f(r))return!0;r=t(r)}return!1}var u=n;export default u;
//# sourceMappingURL=is-reference-error.js.map