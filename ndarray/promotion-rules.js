// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../utils/keys.js";import n from"./../assert/has-own-property.js";var i={float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",binary:-1,generic:"generic"},a={float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",binary:-1,generic:"generic"},u={float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",binary:-1,generic:"generic"},o={float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",binary:-1,generic:"generic"},e={float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",binary:-1,generic:"generic"},f={float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",binary:-1,generic:"generic"},l={float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",binary:-1,generic:"generic"},r={float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",binary:"uint8",generic:"generic"},c={float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",binary:"uint8",generic:"generic"},g={float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",binary:-1,generic:"generic"},y={float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:"uint8",uint8c:"uint8",binary:"binary",generic:-1},b={float64:i,float32:a,int32:u,int16:o,int8:e,uint32:f,uint16:l,uint8:r,uint8c:c,generic:g,binary:y},s=t,p=n,m=b;function v(){var t,n,i,a,u,o,e,f,l;for(i={},n=(t=s(m)).length,l=0;l<n;l++){for(u=t[l],e=m[u],a={},f=0;f<n;f++)a[o=t[f]]=e[o];i[u]=a}return i}function h(t,n){var i;return 0===arguments.length?v():p(m,t)&&(i=m[t],p(i,n))?i[n]:null}var j=h;export default j;
//# sourceMappingURL=promotion-rules.js.map