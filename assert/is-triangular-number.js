// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./is-integer.js";import i from"./../math/base/special/sqrt.js";import t from"./../math/base/special/floor.js";var o=e.isPrimitive,a=i,n=t;function s(r){var e,i;return!!o(r)&&(e=n(a(i=8*r+1)+.5))*e===i}var m=e.isObject,f=i,u=t;function p(r){var e,i;return!!m(r)&&(i=8*r.valueOf()+1,(e=u(f(i)+.5))*e===i)}var v=s,l=p;function c(r){return v(r)||l(r)}var j=r,b=c,d=s,O=p;j(b,"isPrimitive",d),j(b,"isObject",O);export default b;
//# sourceMappingURL=is-triangular-number.js.map