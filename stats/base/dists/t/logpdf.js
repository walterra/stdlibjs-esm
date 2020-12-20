// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/betaln.js";import o from"./../../../../math/base/special/sqrt.js";import e from"./../../../../math/base/special/pow.js";import n from"./../../../../math/base/special/ln.js";import s from"./../../../../utils/constant-function.js";var i=t,m=a,f=o,p=e,u=n;function l(r,t){var a;return i(r)||i(t)||t<=0?NaN:(a=u(f(t))+m(t/2,.5),(1+t)/2*u(t/(t+p(r,2)))-a)}var c=s,b=t,j=a,N=o,h=e,v=n;function d(r){var t,a;return b(r)||r<=0?c(NaN):(a=v(N(r))+j(r/2,.5),t=(1+r)/2,function(o){if(b(o))return NaN;return t*v(r/(r+h(o,2)))-a})}var y=r,q=l,w=d;y(q,"factory",w);export default q;
//# sourceMappingURL=logpdf.js.map