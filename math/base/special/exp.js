// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./trunc.js";import n from"./../../../constants/math/float64-ninf.js";import o from"./../../../constants/math/float64-pinf.js";import a from"./ldexp.js";function f(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)}var m=a,s=f;function e(r,t,n){var o,a,f;return f=(o=r-t)-(a=o*o)*s(a),m(1-(t-o*f/(2-f)-r),n)}var i=r,p=t,u=n,c=o,j=e,v=.6931471803691238,l=1.9082149292705877e-10,d=1.4426950408889634,h=709.782712893384,x=-745.1332191019411,b=1/(1<<28),g=-b;function k(r){var t;return i(r)||r===c?r:r===u?0:r>h?c:r<x?0:r>g&&r<b?1+r:(t=p(r<0?d*r-.5:d*r+.5),j(r-t*v,t*l,t))}var q=k;export default q;
//# sourceMappingURL=exp.js.map