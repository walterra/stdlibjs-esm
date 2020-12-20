// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../number/float64/base/to-float32.js";var n=e;function t(r,e,t,a){var o,f,u,i,l,m,p;if(m=r-e,r<=0||m<=0)return NaN;if(1===r||0===a)return 0;for(o=t[f=a<0?(1-r)*a:0],f+=a,u=0,p=2;p<=r;p++)i=t[f],o=n(o+i),l=n(n(p*i)-o),u=n(u+n(n(n(1/(p*(p-1)))*l)*l)),f+=a;return n(u/m)}var a=e;function o(r,e,n,t,o){var f,u,i,l,m,p,v;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===t)return 0;for(f=n[o],u=o+t,i=0,v=2;v<=r;v++)l=n[u],f=a(f+l),m=a(a(v*l)-f),i=a(i+a(a(a(1/(v*(v-1)))*m)*m)),u+=t;return a(i/p)}var f=r,u=t,i=o;f(u,"ndarray",i);export default u;
//# sourceMappingURL=svarianceyc.js.map