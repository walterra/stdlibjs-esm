// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../string/lowercase.js";import t from"./../string/replace.js";import i from"./is-string.js";var e=r,n=t,o=i.isPrimitive,s=/[^a-z0-9]/g;function a(r,t){return r<t?-1:r===t?0:1}function m(r,t){if(!o(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");return!!o(t)&&(r=e(r),r=n(r,s,""),t=e(t),t=n(t,s,""),r.length===t.length&&(r=r.split("").sort(a).join(""))===(t=t.split("").sort(a).join("")))}var g=m;export default g;
//# sourceMappingURL=is-anagram.js.map