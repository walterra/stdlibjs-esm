// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-names.js";import o from"./get-prototype-of.js";import t from"./../assert/is-nonenumerable-property.js";import e from"./../assert/has-own-property.js";var p=r,s=o,n=t,m=e;function a(r){var o,t,e,a,f,i;if(null==r)return[];e=Object(r),o=[],t={};do{for(a=p(e),i=0;i<a.length;i++)f=a[i],!1===m(t,f)&&n(e,f)&&o.push(f),t[f]=!0;e=s(e)}while(e);return o}var f=a;export default f;
//# sourceMappingURL=nonenumerable-property-names-in.js.map