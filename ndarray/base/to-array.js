// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
function r(n,t,e,u,f,a){var i,o,h,l,v;if(a>=t.length)return n[u];for(h=[],l=t[a],i=e[a],v=0;v<l;v++)o=r(n,t,e,u,f,a+1),h.push(o),u+=i;return h}var n=r;function t(r,t,e,u,f){var a;if(0===t.length)return[];for(a=0;a<t.length;a++)if(0===t[a])return[];return n(r,t,e,u,f,0)}var e=t;export default e;
//# sourceMappingURL=to-array.js.map