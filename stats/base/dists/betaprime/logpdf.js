// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/special/betaln.js";import a from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/log1p.js";import o from"./../../../../math/base/special/ln.js";import e from"./../../../../constants/math/float64-ninf.js";import s from"./../../../../utils/constant-function.js";var i=t,m=a,f=n,p=o,u=e;function l(r,t,a){var n;return m(r)||m(t)||m(a)||t<=0||a<=0?NaN:r<=0?u:(n=(t-1)*p(r),n-=(t+a)*f(r),n-=i(t,a))}var c=s,j=t,b=a,v=n,N=o,h=e;function d(r,t){var a;return b(r)||b(t)||r<=0||t<=0?c(NaN):(a=j(r,t),function(n){var o;if(b(n))return NaN;if(n<=0)return h;return o=(r-1)*N(n),o-=(r+t)*v(n),o-=a})}var y=r,g=l,x=d;y(g,"factory",x);export default g;
//# sourceMappingURL=logpdf.js.map