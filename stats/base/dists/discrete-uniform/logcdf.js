// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-integer.js";import n from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/floor.js";import o from"./../../../../math/base/special/ln.js";import e from"./../../../../constants/math/float64-ninf.js";import s from"./../../../../utils/constant-function.js";var i=t,f=n,m=a,u=o,p=e;function l(r,t,n){return f(r)||f(t)||f(n)||!i(t)||!i(n)||t>n?NaN:r<t?p:r>=n?0:u(m(r)-t+1)-u(n-t+1)}var c=s,j=t,N=n,b=a,h=o,v=e;function d(r,t){var n,a;return N(r)||N(t)||!j(r)||!j(t)||r>t?c(NaN):(a=r-1,n=h(t-r+1),function(o){if(N(o))return NaN;if(o<r)return v;if(o>=t)return 0;return h(b(o)-a)-n})}var y=r,g=l,x=d;y(g,"factory",x);export default g;
//# sourceMappingURL=logcdf.js.map