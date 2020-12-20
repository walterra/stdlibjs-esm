// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../assert/is-nan.js";import r from"./../../../number/float64/base/get-high-word.js";import o from"./../../../number/float64/base/set-high-word.js";import n from"./../../../constants/math/float64-pinf.js";import f from"./../../../constants/math/float64-ninf.js";import e from"./../../../constants/math/float64-exponent-bias.js";import a from"./../../../constants/math/float64-half-ln-two.js";function i(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}var s=t,m=r,u=o,l=n,p=f,h=e,j=a,c=i,b=709.782712893384,d=.6931471803691238,g=1.9082149292705877e-10,v=1.4426950408889634,w=38.816242111356935,x=1.0397207708399179;function k(t){var r,o,n,f,e,a,i,k,q,y,z,A;if(t===l||s(t))return t;if(t===p)return-1;if(0===t)return t;if(t<0?(o=!0,i=-t):(o=!1,i=t),i>=w){if(o)return-1;if(i>=b)return l}if(e=0|m(i),i>j)i<x?o?(n=t+d,f=-g,A=-1):(n=t-d,f=g,A=1):(A=o?v*t-.5:v*t+.5,n=t-(y=A|=0)*d,f=y*g),q=n-(t=n-f)-f;else{if(e<1016070144)return t;A=0}return z=(k=t*(r=.5*t))*(((a=1+k*c(k))-(y=3-a*r))/(6-t*y)),0===A?t-(t*z-k):(z=t*(z-q)-q,z-=k,-1===A?.5*(t-z)-.5:1===A?t<-.25?-2*(z-(t+.5)):1+2*(t-z):A<=-2||A>56?(n=m(i=1-(z-t))+(A<<20)|0,(i=u(i,n))-1):(y=1,A<20?i=(y=u(y,n=1072693248-(2097152>>A)|0))-(z-t):(i=t-(z+(y=u(y,n=h-A<<20|0))),i+=1),n=m(i)+(A<<20)|0,u(i,n)))}var q=k;export default q;
//# sourceMappingURL=expm1.js.map