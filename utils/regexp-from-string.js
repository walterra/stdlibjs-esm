// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";import e from"./../regexp/regexp.js";var i=r.isPrimitive,t=e;function n(r){if(!i(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");return(r=t.exec(r))?new RegExp(r[1],r[2]):null}var s=n;export default s;
//# sourceMappingURL=regexp-from-string.js.map