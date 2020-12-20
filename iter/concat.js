// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../assert/is-function.js";import o from"./../assert/is-iterator-like.js";import t from"./../assert/has-own-property.js";import n from"./../symbol/iterator.js";var i=r,u=e,a=o,f=t,s=n;function l(){var r,e,o,t,n,p;if((o=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(r=[],p=0;p<o;p++){if(!a(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");r.push(arguments[p])}if(i(t={},"next",m),i(t,"return",v),s){for(p=0;p<o;p++)if(!u(r[p][s])){n=!0;break}n||i(t,s,d)}return e=r[0],n=!1,p=0,t;function m(){var t;if(n)return{done:!0};for(;(t=e.next()).done;){if((p+=1)===o)return n=!0,f(t,"value")?{value:t.value,done:!0}:{done:!0};if(e=r[p],f(t,"value"))break}return{value:t.value,done:!1}}function v(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var e,t;for(e=[],t=0;t<o;t++)e.push(r[t][s]());return l.apply(null,e)}}var p=l;export default p;
//# sourceMappingURL=concat.js.map