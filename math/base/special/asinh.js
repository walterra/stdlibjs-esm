// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-infinite.js";import t from"./../assert/is-nan.js";import o from"./log1p.js";import s from"./sqrt.js";import m from"./../../../constants/math/float64-ln-two.js";import i from"./ln.js";var n=r,a=t,f=o,p=s,e=m,j=i,l=1/(1<<28),u=1<<28;function v(r){var t,o,s;return a(r)||n(r)?r:(r<0&&(r=-r,t=!0),s=r<l?r:r>u?j(r)+e:r>2?j(2*r+1/(p(r*r+1)+r)):f(r+(o=r*r)/(1+p(1+o))),t?-s:s)}var c=v;export default c;
//# sourceMappingURL=asinh.js.map