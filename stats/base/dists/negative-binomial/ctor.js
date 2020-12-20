// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../assert/is-probability.js";import r from"./../../../../utils/define-property.js";import e from"./../../../../utils/define-nonenumerable-read-only-property.js";import i from"./../../../../utils/define-nonenumerable-read-only-accessor.js";import o from"./../../../../assert/is-positive-number.js";import n from"./kurtosis.js";import s from"./mean.js";import p from"./mode.js";import u from"./skewness.js";import m from"./stdev.js";import f from"./variance.js";import a from"./cdf.js";import l from"./logpmf.js";import h from"./mgf.js";import c from"./pmf.js";import b from"./quantile.js";var y=t.isPrimitive,d=r,v=e,j=i,w=o.isPrimitive,g=n,k=s,E=p,T=u,V=m,q=f,x=a,M=l,P=h,N=c,S=b;function z(t){return x(t,this.r,this.p)}function A(t){return M(t,this.r,this.p)}function B(t){return P(t,this.r,this.p)}function C(t){return N(t,this.r,this.p)}function D(t){return S(t,this.r,this.p)}function F(){var t,r;if(!(this instanceof F))return 0===arguments.length?new F:new F(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!w(t=arguments[0]))throw new TypeError("invalid argument. Number of trials until experiment is stopped `r` must be a positive number. Value: `"+t+"`");if(!y(r))throw new TypeError("invalid argument. Success probability `p` must be a number between 0 and 1. Value: `"+r+"`")}else t=1,r=.5;return d(this,"r",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!w(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),d(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!y(t))throw new TypeError("invalid value. Must be a number between 0 and 1. Value: `"+t+"`");r=t}}),this}j(F.prototype,"kurtosis",(function(){return g(this.r,this.p)})),j(F.prototype,"mean",(function(){return k(this.r,this.p)})),j(F.prototype,"mode",(function(){return E(this.r,this.p)})),j(F.prototype,"skewness",(function(){return T(this.r,this.p)})),j(F.prototype,"stdev",(function(){return V(this.r,this.p)})),j(F.prototype,"variance",(function(){return q(this.r,this.p)})),v(F.prototype,"cdf",z),v(F.prototype,"logpmf",A),v(F.prototype,"mgf",B),v(F.prototype,"pmf",C),v(F.prototype,"quantile",D);var G=F;export default G;
//# sourceMappingURL=ctor.js.map