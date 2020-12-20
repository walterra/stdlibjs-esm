// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/pow.js";import a from"./../../../../math/base/special/ln.js";import o from"./../../../../constants/math/float64-pinf.js";import i from"./../../../../constants/math/float64-ninf.js";import s from"./../../../../utils/constant-function.js";var e=t,f=n,m=a,p=o,u=i;function c(r,t,n){var a;return e(t)||e(n)||t<=0||n<=0?NaN:r<0||r===p||r===u?u:0===r?1===t?m(t/n):u:(a=r/n,m(t/n)+(t-1)*m(a)-f(a,t))}var l=s,j=t,v=n,h=a,b=o,N=i;function d(r,t){var n;return j(r)||j(t)||r<=0||t<=0?l(NaN):(n=h(r/t),function(a){var o;if(a<0)return N;if(a===b||a===N)return N;if(0===a)return 1===r?h(r/t):N;return n+(r-1)*h(o=a/t)-v(o,r)})}var y=r,w=c,x=d;y(w,"factory",x);export default w;
//# sourceMappingURL=logpdf.js.map