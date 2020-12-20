// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../utils/define-property.js";import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../../utils/define-nonenumerable-read-only-accessor.js";import i from"./../../../../assert/is-positive-number.js";import o from"./../../../../assert/is-number.js";import n from"./../../../../assert/is-nan.js";import s from"./entropy.js";import u from"./kurtosis.js";import m from"./mean.js";import p from"./median.js";import a from"./mode.js";import f from"./skewness.js";import h from"./stdev.js";import b from"./variance.js";import c from"./cdf.js";import l from"./logcdf.js";import d from"./logpdf.js";import y from"./mgf.js";import j from"./pdf.js";import v from"./quantile.js";var g=t,w=r,k=e,E=i.isPrimitive,T=o.isPrimitive,V=n,q=s,M=u,P=m,x=p,L=a,S=f,z=h,A=b,B=c,C=l,D=d,F=y,G=j,H=v;function I(t){return B(t,this.mu,this.beta)}function J(t){return C(t,this.mu,this.beta)}function K(t){return D(t,this.mu,this.beta)}function N(t){return F(t,this.mu,this.beta)}function O(t){return G(t,this.mu,this.beta)}function Q(t){return H(t,this.mu,this.beta)}function R(){var t,r;if(!(this instanceof R))return 0===arguments.length?new R:new R(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!T(r=arguments[0])||V(r))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+r+"`");if(!E(t))throw new TypeError("invalid argument. Scale parameter `beta` must be a positive number. Value: `"+t+"`")}else r=0,t=1;return g(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!T(t)||V(t))throw new TypeError("invalid value. Must be a number primitive. Value: `"+t+"`");r=t}}),g(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!E(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),this}k(R.prototype,"entropy",(function(){return q(this.mu,this.beta)})),k(R.prototype,"kurtosis",(function(){return M(this.mu,this.beta)})),k(R.prototype,"mean",(function(){return P(this.mu,this.beta)})),k(R.prototype,"median",(function(){return x(this.mu,this.beta)})),k(R.prototype,"mode",(function(){return L(this.mu,this.beta)})),k(R.prototype,"skewness",(function(){return S(this.mu,this.beta)})),k(R.prototype,"stdev",(function(){return z(this.mu,this.beta)})),k(R.prototype,"variance",(function(){return A(this.mu,this.beta)})),w(R.prototype,"cdf",I),w(R.prototype,"logcdf",J),w(R.prototype,"logpdf",K),w(R.prototype,"mgf",N),w(R.prototype,"pdf",O),w(R.prototype,"quantile",Q);var U=R;export default U;
//# sourceMappingURL=ctor.js.map