// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../assert/has-own-property.js";import o from"./../../assert/is-positive-number.js";import i from"./../../assert/is-plain-object.js";import s from"./../../assert/is-uint32array.js";import a from"./../../assert/is-boolean.js";import p from"./../../math/base/assert/is-nan.js";import m from"./../../assert/is-function.js";import u from"./../../utils/constant-function.js";import l from"./../../utils/noop.js";import f from"./chisquare.js";import g from"./improved-ziggurat.js";import c from"./../../blas/base/gcopy.js";import y from"./../../array/uint32.js";import d from"./../../utils/copy.js";import h from"./../../array/to-json.js";import b from"./../../math/base/special/sqrt.js";var v=t,w=e,j=r,E=n,T=o.isPrimitive,L=i,N=s,O=a.isPrimitive,A=p,P=m,V=u,G=l,M=f.factory,R=g.factory,U=c,q=y,F=d,J=h,S=b;function x(){var t,e,r,n,o,i,s,a;if(s=!0,0===arguments.length)r=R(o={copy:!1});else if(1===arguments.length)if(L(arguments[0])){if(E(o=arguments[0],"copy")&&!O(o.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+o.copy+"`.");if(E(o,"prng")){if(!P(o.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+o.prng+"`.");r=R({prng:o.prng})}else{if(E(o,"state")&&!N(o.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+o.state+"`.");!1===(o=F(o,1)).copy?s=!1:o.state&&(o.state=U(o.state.length,o.state,1,new q(o.state.length),1)),o.copy=!1,r=R(o)}}else{if(!T(a=arguments[0]))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+a+"`.");r=R(o={copy:!1})}else{if(!T(a=arguments[0]))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+a+"`.");if(!L(o=arguments[1]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+o+"`.");if(E(o,"copy")&&!O(o.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+o.copy+"`.");if(E(o,"prng")){if(!P(o.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+o.prng+"`.");r=R({prng:o.prng})}else{if(E(o,"state")&&!N(o.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+o.state+"`.");!1===(o=F(o,1)).copy?s=!1:o.state&&(o.state=U(o.state.length,o.state,1,new q(o.state.length),1)),o.copy=!1,r=R(o)}}return o&&o.prng?t=void 0===a?M({prng:o.prng}):M(a,{prng:o.prng}):(o.state?e=o.state:(e=r.state,r.state=e),t=void 0===a?M({state:e,copy:!1}):M(a,{state:e,copy:!1})),i=void 0===a?d:y,n=r.PRNG,v(i,"NAME","t"),o&&o.prng?(v(i,"seed",null),v(i,"seedLength",null),j(i,"state",V(null),G),v(i,"stateLength",null),v(i,"byteLength",null),v(i,"toJSON",V(null))):(w(i,"seed",p),w(i,"seedLength",m),j(i,"state",f,g),w(i,"stateLength",u),w(i,"byteLength",l),v(i,"toJSON",c)),v(i,"PRNG",n),i;function p(){return n.seed}function m(){return n.seedLength}function u(){return n.stateLength}function l(){return n.byteLength}function f(){return n.state}function g(t){if(!N(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");s&&(t=U(t.length,t,1,new q(t.length),1)),n.state=t}function c(){var t={type:"PRNG"};return t.name=i.NAME,t.state=J(n.state),t.params=void 0===a?[]:[a],t}function y(){return r()/S(t()/a)}function d(e){return A(e)||e<=0?NaN:r()/S(t(e)/e)}}var z=x,k=z(),B=t,C=k,D=x;B(C,"factory",D);export default C;
//# sourceMappingURL=t.js.map