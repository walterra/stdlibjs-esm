// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import a from"./../../math/base/special/floor.js";var e=a;function n(r,a,n){var o,t,f;return r<=0?NaN:(o=n<0?(1-r)*n:0,(t=r/2)===(f=e(t))?(a[o+f*n]+a[o+(f-1)*n])/2:a[o+f*n])}var o=a;function t(r,a,e,n){var t,f;return r<=0?NaN:(t=r/2)===(f=o(t))?(a[n+f*e]+a[n+(f-1)*e])/2:a[n+f*e]}var f=r,i=n,u=t;f(i,"ndarray",u);export default i;
//# sourceMappingURL=dmediansorted.js.map