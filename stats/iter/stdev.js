// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-iterator-like.js";import e from"./../../assert/has-own-property.js";import t from"./../../assert/is-number.js";import i from"./../incr/stdev.js";var a=r,o=e,n=t.isPrimitive,m=i;function s(r,e){var t,i;if(!a(r))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+r+"`.");if(arguments.length>1){if(!n(e))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+e+"`.");t=m(e)}else t=m();for(;"number"==typeof(i=r.next()).value?t(i.value):o(i,"value")&&t(NaN),!i.done;);return t()}var u=s;export default u;
//# sourceMappingURL=stdev.js.map