// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import t from"./../assert/is-function.js";import n from"./../assert/is-plain-object.js";import e from"./../assert/has-own-property.js";import i from"./index-of.js";var o=n,s=e,u=i,a=["values","indices","*"];function l(r,t){return o(t)?(s(t,"thisArg")&&(r.thisArg=t.thisArg),s(t,"returns")&&(r.returns=t.returns,-1===u(a,r.returns))?new TypeError('invalid option. `returns` option must be one of the following: "'+a.join('", "')+'". Option: `'+r.returns+"`."):null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var f=e;function p(r,t,n){var e,i,o,s,u,a;for(e=t.thisArg,o=r.length,i={},a=0;a<o;a++)u=r[a],s=n.call(e,u,a),f(i,s)?i[s].push(u):i[s]=[u];return i}var m=e;function c(r,t,n){var e,i,o,s,u;for(e=t.thisArg,o=r.length,i={},u=0;u<o;u++)s=n.call(e,r[u],u),m(i,s)?i[s].push(u):i[s]=[u];return i}var h=e;function v(r,t,n){var e,i,o,s,u,a;for(e=t.thisArg,o=r.length,i={},a=0;a<o;a++)u=r[a],s=n.call(e,u,a),h(i,s)?i[s].push([a,u]):i[s]=[[a,u]];return i}var g=r,w=t,d=l,j=p,b=c,A=v;function y(r,t,n){var e,i,o;if(!g(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(e={returns:"values"},2===arguments.length)o=t;else{if(i=d(e,t))throw i;o=n}if(!w(o))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+o+"`.");return"values"===e.returns?j(r,e,o):"indices"===e.returns?b(r,e,o):A(r,e,o)}var E=y;export default E;
//# sourceMappingURL=group-by.js.map