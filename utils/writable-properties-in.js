// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-symbols.js";import o from"./property-names.js";import t from"./get-prototype-of.js";import e from"./../assert/has-own-property.js";import p from"./../assert/is-writable-property.js";var s=r,m=o,f=t,i=e,a=p;function n(r){var o,t,e,p,n,l;if(null==r)return[];e=Object(r),o={},t=[];do{for(p=m(e),l=0;l<p.length;l++)n=p[l],!1===i(o,n)&&a(e,n)&&t.push(n),o[n]=!0;for(p=s(e),l=0;l<p.length;l++)n=p[l],!1===i(o,n)&&a(e,n)&&t.push(n),o[n]=!0;e=f(e)}while(e);return t}var l=n;export default l;
//# sourceMappingURL=writable-properties-in.js.map