// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";var t=r.isPrimitive,i=48,e=57,n=65,f=70,o=97,u=102;function a(r){var a,s,v;if(!t(r))return!1;if(!(a=r.length))return!1;for(v=0;v<a;v++)if((s=r.charCodeAt(v))<i||s>e&&s<n||s>f&&s<o||s>u)return!1;return!0}var s=a;export default s;
//# sourceMappingURL=is-hex-string.js.map