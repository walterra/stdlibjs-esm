// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import n from"./../../utils/define-nonenumerable-read-write-accessor.js";import o from"./../../assert/is-plain-object.js";import r from"./../../assert/is-boolean.js";import i from"./../../assert/has-own-property.js";import a from"./../../utils/constant-function.js";import s from"./../../utils/noop.js";import p from"./../../array/to-json.js";import d from"./box-muller.js";import u from"./improved-ziggurat.js";var m="improved-ziggurat",f=!0,l={name:m,copy:f},c={};c["box-muller"]=d,c["improved-ziggurat"]=u;var y=e,g=t,v=n,h=o,b=r.isPrimitive,j=i,w=a,E=s,L=p,N=l,O=c;function P(e){var t,n,o;if(t={name:N.name,copy:N.copy},arguments.length){if(!h(e))throw new TypeError("invalid argument. Must provide an object. Value: `"+e+"`.");if(j(e,"name")&&(t.name=e.name),j(e,"prng")){if(t.prng=e.prng,void 0===t.prng)throw new TypeError("invalid option. `prng` option cannot be undefined. Option: `"+t.prng+"`.")}else if(j(e,"state")){if(t.state=e.state,void 0===t.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+t.state+"`.")}else if(j(e,"seed")&&(t.seed=e.seed,void 0===t.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+t.seed+"`.");if(j(e,"copy")&&(t.copy=e.copy,!b(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.")}if(void 0===(o=O[t.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+t.name+"`.");return n=void 0===t.prng?void 0===t.state?void 0===t.seed?o.factory():o.factory({seed:t.seed}):o.factory({state:t.state,copy:t.copy}):o.factory({prng:t.prng}),y(m,"NAME","randn"),t.prng?(y(m,"seed",null),y(m,"seedLength",null),v(m,"state",w(null),E),y(m,"stateLength",null),y(m,"byteLength",null),y(m,"toJSON",w(null))):(g(m,"seed",r),g(m,"seedLength",i),v(m,"state",p,d),g(m,"stateLength",a),g(m,"byteLength",s),y(m,"toJSON",u)),y(m,"PRNG",n.PRNG),m;function r(){return n.seed}function i(){return n.seedLength}function a(){return n.stateLength}function s(){return n.byteLength}function p(){return n.state}function d(e){n.state=e}function u(){var e={type:"PRNG"};return e.name=m.NAME+"-"+n.NAME,e.state=L(n.state),e.params=[],e}function m(){return n()}}var T=P,z=T(),G=e,M=z,R=P;G(M,"factory",R);export default M;
//# sourceMappingURL=randn.js.map