// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-array.js";var n=r;function t(r,e){var a=e[0];return n(a)&&(r.push(a.length),t(r,a)),r}function e(r,t,a,u,i){var o,f,l;for(o=t[a],l=0;l<u.length;l++){if(f=u[l],!n(f)||f.length!==o)return a;if(i&&(f=e(r,t,a+1,f,a+1<r-1))<r)return f}return r}function a(r){var a,u;if(!n(r))throw new TypeError("invalid argument. Must provide an array. Value: `"+r+"`.");return t(a=[r.length],r),(u=a.length)>1&&(a.length=e(u,a,1,r,u>2)),a}var u=a;export default u;
//# sourceMappingURL=shape.js.map