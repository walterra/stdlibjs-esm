// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-iterator-like.js";import e from"./../assert/has-own-property.js";var t=r,a=e;function o(r){var e,o;if(!t(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");for(;;){if((o=r.next()).done){if(a(o,"value"))return o.value;break}e=o.value}return e}var i=o;export default i;
//# sourceMappingURL=last.js.map