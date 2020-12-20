// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./../../assert/is-number.js";import i from"./../../math/base/assert/is-nan.js";var t=r.isPrimitive,n=e.isPrimitive,a=i;function u(r,e,i){var u,f,s,m,o,l,v,g,p,b,h,N;if(!t(r))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.");if(u=new Array(2*r),h=r-1,p=0,g=-1,b=0,arguments.length>1){if(!n(e))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+e+"`.");if(!n(i))throw new TypeError("invalid argument. Third argument must be a number primitive. Value: `"+i+"`.");return l=e,v=i,d}return l=0,v=0,w;function w(e,i){var t,n,w,d;if(0===arguments.length)return 0===b?null:1===b?0:b<r?p/(b-1):p/h;if(N=2*(g=(g+1)%r),a(e)||a(i))b=r,p=NaN;else{if(b<r)return u[N]=e,u[N+1]=i,l+=(s=e-l)/(b+=1),p+=s*(i-(v+=(i-v)/b)),1===b?0:p/(b-1);if(1===b)return 0;if(a(u[N])||a(u[N+1])){for(b=1,l=e,v=i,p=0,w=0;w<r;w++)if((d=2*w)!==N){if(t=u[d],n=u[d+1],a(t)||a(n)){b=r,p=NaN;break}l+=(s=t-l)/(b+=1),p+=s*(n-(v+=(n-v)/b))}}else!1===a(p)&&(f=u[N]-l,m=u[N+1]-v,p+=(s=e-l)*(o=i-v)-f*m-(s-f)*(o-m)/r,l+=(s-f)/r,v+=(o-m)/r)}return u[N]=e,u[N+1]=i,p/h}function d(e,i){var t,n;if(0===arguments.length)return 0===b?null:b<r?p/b:p/r;if(N=2*(g=(g+1)%r),a(e)||a(i))b=r,p=NaN;else{if(b<r)return u[N]=e,u[N+1]=i,(p+=(e-l)*(i-v))/(b+=1);if(a(u[N])||a(u[N+1])){for(p=0,t=0;t<r;t++)if((n=2*t)!==N){if(a(u[n])||a(u[n+1])){b=r,p=NaN;break}p+=(u[n]-l)*(u[n+1]-v)}}else!1===a(p)&&(p+=(e-l)*(i-v)-(u[N]-l)*(u[N+1]-v))}return u[N]=e,u[N+1]=i,p/r}}var f=u;export default f;
//# sourceMappingURL=mcovariance.js.map