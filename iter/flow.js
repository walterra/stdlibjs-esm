// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../utils/define-nonenumerable-property.js";import e from"./../assert/is-object.js";import n from"./../assert/is-function.js";import o from"./../assert/is-iterator-like.js";import i from"./../utils/keys.js";import s from"./../symbol/iterator.js";var a=t,u=r,f=e,p=n,l=o,c=i,h=s;function m(t){var r,e,n,o;if(!f(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");function i(t){if(!(this instanceof i))return new i(t);if(!l(t))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+t+"`.");return a(this,"_source",t),u(this,"_done",!1),this}function s(t){return function(){var r,e,n;if(!(this instanceof i))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");for(r=[this._source],n=0;n<arguments.length;n++)r.push(arguments[n]);if(e=t.apply(null,r),l(e))return new i(e);return e}}for(a(i.prototype,"next",(function(){if(!(this instanceof i))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done?{done:!0}:this._source.next()})),a(i.prototype,"return",(function(t){if(!(this instanceof i))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done=!0,arguments.length?{value:t,done:!0}:{done:!0}})),h&&a(i.prototype,h,(function(){return this})),r=c(t),o=0;o<r.length;o++){if(n=t[e=r[o]],!p(n))throw new TypeError("invalid argument. Object property values must be functions. Key: `"+e+"`. Value: `"+n+"`.");a(i.prototype,e,s(n))}return i}var d=m;export default d;
//# sourceMappingURL=flow.js.map