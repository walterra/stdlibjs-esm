// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/exp.js";import o from"./../../../../math/base/special/pow.js";import e from"./../../../../math/base/special/ln.js";import n from"./../../../../utils/constant-function.js";var s=t,i=a,m=o,f=e;function p(r,t,a){return s(r)||s(t)||s(a)||t<=0||a<0||a>1||r>=-f(a)?NaN:m((1-a)*i(r)/(1-a*i(r)),t)}var u=n,c=t,l=a,j=o,N=e;function b(r,t){return c(r)||c(t)||r<=0||t<0||t>1?u(NaN):function(a){if(a>=-N(t))return NaN;return j((1-t)*l(a)/(1-t*l(a)),r)}}var h=r,d=p,v=b;h(d,"factory",v);export default d;
//# sourceMappingURL=mgf.js.map