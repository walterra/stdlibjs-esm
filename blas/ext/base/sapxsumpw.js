// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../number/float64/base/to-float32.js";import t from"./../../../math/base/special/floor.js";var f=e,o=t,n=128;function a(r,e,t,i,u){var m,l,p,s,v,b,d,c,j,y,h,x,g;if(r<=0)return 0;if(1===r||0===i)return f(e+t[u]);if(m=u,r<8){for(h=0,g=0;g<r;g++)h=f(h+f(e+t[m])),m+=i;return h}if(r<=n){for(l=f(e+t[m]),p=f(e+t[m+i]),s=f(e+t[m+2*i]),v=f(e+t[m+3*i]),b=f(e+t[m+4*i]),d=f(e+t[m+5*i]),c=f(e+t[m+6*i]),j=f(e+t[m+7*i]),m+=8*i,y=r%8,g=8;g<r-y;g+=8)l=f(l+f(e+t[m])),p=f(p+f(e+t[m+i])),s=f(s+f(e+t[m+2*i])),v=f(v+f(e+t[m+3*i])),b=f(b+f(e+t[m+4*i])),d=f(d+f(e+t[m+5*i])),c=f(c+f(e+t[m+6*i])),j=f(j+f(e+t[m+7*i])),m+=8*i;for(h=f(f(f(l+p)+f(s+v))+f(f(b+d)+f(c+j)));g<r;g++)h=f(h+f(e+t[m])),m+=i;return h}return x=o(r/2),f(a(x-=x%8,e,t,i,m)+a(r-x,e,t,i,m+x*i))}var i=e,u=a;function m(r,e,t,f){var o,n,a;if(r<=0)return 0;if(1===r||0===f)return i(e+t[0]);if(o=f<0?(1-r)*f:0,r<8){for(n=0,a=0;a<r;a++)n=i(n+i(e+t[o])),o+=f;return n}return u(r,e,t,f,o)}var l=r,p=m,s=a;l(p,"ndarray",s);export default p;
//# sourceMappingURL=sapxsumpw.js.map