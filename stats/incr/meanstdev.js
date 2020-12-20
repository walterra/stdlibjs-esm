// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-array-like-object.js";import t from"./../../math/base/assert/is-nan.js";import a from"./../../math/base/special/sqrt.js";var e=r,n=t,s=a;function i(r){var t,a,i,o,u;if(0===arguments.length)t=[0,0];else{if(!e(r))throw new TypeError("invalid argument. Output argument must be an array-like object. Value: `"+r+"`.");t=r}return o=0,i=0,u=0,l;function l(r){return 0===arguments.length?0===u?null:(t[0]=i,1===u?(n(o)?t[1]=NaN:t[1]=0,t):(t[1]=s(o/(u-1)),t)):(o+=(a=r-i)*(r-(i+=a/(u+=1))),t[0]=i,u<2?(n(o)?t[1]=NaN:t[1]=0,t):(t[1]=s(o/(u-1)),t))}}var o=i;export default o;
//# sourceMappingURL=meanstdev.js.map