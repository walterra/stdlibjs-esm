// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../constants/math/int8-max.js";import n from"./../constants/math/uint8-max.js";import a from"./../constants/math/int16-max.js";import r from"./../constants/math/uint16-max.js";import o from"./../constants/math/int32-max.js";import s from"./../constants/math/uint32-max.js";import m from"./../constants/math/float16-pinf.js";import i from"./../constants/math/float32-pinf.js";import e from"./../constants/math/float64-pinf.js";var c=t,u=n,f=a,p=r,h=o,l=s,j=m,x=i,d=e;function v(t){switch(t){case"float64":return d;case"int32":return h;case"uint32":return l;case"float32":return x;case"int8":return c;case"uint8":case"uint8c":return u;case"int16":return f;case"uint16":return p;case"float16":return j;default:throw new TypeError("invalid argument. Must provide a recognized type. Value: `"+t+"`.")}}var w=v;export default w;
//# sourceMappingURL=type-max.js.map