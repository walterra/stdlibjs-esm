// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-names.js";import t from"./../assert/is-writable-property.js";var e=r,o=t;function n(r){var t,n,a;if(null==r)return[];for(t=e(Object(r)),a=0,n=0;n<t.length;n++)o(r,t[n])&&(t[a]=t[n],a+=1);return t.length=a,t}var a=n;export default a;
//# sourceMappingURL=writable-property-names.js.map