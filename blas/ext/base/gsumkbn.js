// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/special/abs.js";var n=e;function a(r,e,a){var t,f,o,i,u,m;if(r<=0)return 0;if(1===r||0===a)return e[0];for(f=a<0?(1-r)*a:0,t=0,u=0,m=0;m<r;m++)i=t+(o=e[f]),n(t)>=n(o)?u+=t-i+o:u+=o-i+t,t=i,f+=a;return t+u}var t=e;function f(r,e,n,a){var f,o,i,u,m,p;if(r<=0)return 0;if(1===r||0===n)return e[a];for(o=a,f=0,m=0,p=0;p<r;p++)u=f+(i=e[o]),t(f)>=t(i)?m+=f-u+i:m+=i-u+f,f=u,o+=n;return f+m}var o=r,i=a,u=f;o(i,"ndarray",u);var m=i;export default m;
//# sourceMappingURL=gsumkbn.js.map