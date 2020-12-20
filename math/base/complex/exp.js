// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../special/copysign.js";import t from"./../special/sincos.js";import o from"./../assert/is-nan.js";import s from"./../assert/is-infinite.js";import a from"./../special/exp.js";import i from"./../../../constants/math/float64-pinf.js";import n from"./../../../constants/math/float64-ninf.js";var m=r,f=t,p=o,e=s,c=a,N=i,j=n;function l(r,t,o){var s,a;return p(t)?(r[0]=NaN,r[1]=0===o?o:t):e(o)?t===N?(r[0]=-t,r[1]=NaN):t===j?(r[0]=-0,r[1]=m(0,o)):(r[0]=NaN,r[1]=NaN):(a=c(t),0===o?(r[0]=a,r[1]=o):(f(r,o),s=r[0],r[0]=r[1]*a,r[1]=s*a)),r}var u=l;function v(r,t,o){return 2===arguments.length?u([0,0],r,t):u(r,t,o)}var h=v;export default h;
//# sourceMappingURL=exp.js.map