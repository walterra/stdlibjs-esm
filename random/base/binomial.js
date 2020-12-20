// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../utils/define-nonenumerable-read-only-accessor.js";import t from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../assert/is-plain-object.js";import i from"./../../assert/is-function.js";import o from"./../../assert/has-own-property.js";import s from"./../../utils/constant-function.js";import a from"./../../utils/noop.js";import u from"./../../math/base/assert/is-nan.js";import m from"./../../math/base/assert/is-positive-integer.js";import f from"./../../math/base/assert/is-probability.js";import p from"./mt19937.js";import l from"./../../array/to-json.js";import c from"./../../assert/is-positive-integer.js";import g from"./../../assert/is-probability.js";import b from"./../../math/base/special/floor.js";import d from"./../../math/base/special/signum.js";import h from"./../../math/base/special/sqrt.js";import j from"./../../math/base/special/abs.js";import v from"./../../math/base/special/ln.js";import y from"./../../math/base/special/pow.js";var w=c.isPrimitive,L=g.isPrimitive;function N(r,e){return w(r)?L(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}function E(r,e,t){var n,i=0;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}var O=y,T=1/12,P=1/360,V=1/1260;function G(r){var e;switch(r){case 0:return.08106146679532726;case 1:return.04134069595540929;case 2:return.02767792568499834;case 3:return.02079067210376509;case 4:return.01664469118982119;case 5:return.01387612882307075;case 6:return.01189670994589177;case 7:return.01041126526197209;case 8:return.009255462182712733;case 9:return.00833056343336287;default:return e=O(r+=1,2),(T-(P-V/e)/e)/r}}var R=b,S=d,A=h,J=j,M=v,q=G,x=1/6;function z(r,e,t){var n,i,o,s,a,u,m,f,p,l,c,g,b,d,h,j,v,y,w,L,N,E,O,T,P,V;for(m=e-(L=R((e+1)*t))+1,f=(e+1)*(E=t/(N=1-t)),b=.0248*(d=1.15+2.53*(o=A(s=e*t*N)))-.0873+.01*t,h=e*t+.5,n=(2.83+5.1/d)*o,i=.86*(g=.92-4.2/d),v=(L+.5)*M((L+1)/(E*m)),v+=q(L)+q(e-L);;){if((P=r())<=i)return E=(T=P/g-.43)*(2*b/(.5-J(T))+d)+h,R(E);if(P>=g?T=r()-.5:(T=.5*S(T=P/g-.93)-T,P=g*r()),p=.5-J(T),!((w=R(T*(2*b/p+d)+h))<0||w>e))if(P=P*n/(b/(p*p)+d),(l=J(w-L))>15){if(P=M(P),a=l/s,u=(l/3+.625)*l,u+=x,P<(O=-l*l/(2*s))-(a*=(u/=s)+.5))return w;if(P<=O+a&&(V=v+(e+1)*M(m/(c=e-w+1)),V+=(w+.5)*M(c*E/(w+1)),P<=(V+=-(q(w)+q(e-w)))))return w}else{if(j=1,L<w)for(y=L;y<=w;y++)j*=f/y-E;else if(L>w)for(y=w;y<=L;y++)P*=f/y-E;if(P<=j)return w}}}var F=E,k=z;function B(r,e,t){return t>.5?e-B(r,e,1-t):e*t<10?F(r,e,t):k(r,e,t)}var C=r,D=e,H=t,I=n,K=i,Q=o,U=s,W=a,X=u,Y=m,Z=f,$=p.factory,_=l,rr=N,er=B;function tr(){var r,e,t,n,i,o;if(0===arguments.length)e=$();else if(1===arguments.length){if(!I(r=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Q(r,"prng")){if(!K(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$(r)}else{if(n=rr(i=arguments[0],o=arguments[1]))throw n;if(arguments.length>2){if(!I(r=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Q(r,"prng")){if(!K(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$(r)}else e=$()}return C(t=void 0===i?g:c,"NAME","binomial"),r&&r.prng?(C(t,"seed",null),C(t,"seedLength",null),H(t,"state",U(null),W),C(t,"stateLength",null),C(t,"byteLength",null),C(t,"toJSON",U(null)),C(t,"PRNG",e)):(D(t,"seed",s),D(t,"seedLength",a),H(t,"state",f,p),D(t,"stateLength",u),D(t,"byteLength",m),C(t,"toJSON",l),C(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function m(){return e.byteLength}function f(){return e.state}function p(r){e.state=r}function l(){var r={type:"PRNG"};return r.name=t.NAME,r.state=_(e.state),r.params=void 0===i?[]:[i,o],r}function c(){return er(e,i,o)}function g(r,t){return X(r)||X(t)||!Y(r)||!Z(t)?NaN:er(e,r,t)}}var nr=tr,ir=nr(),or=r,sr=ir,ar=tr;or(sr,"factory",ar);export default sr;
//# sourceMappingURL=binomial.js.map