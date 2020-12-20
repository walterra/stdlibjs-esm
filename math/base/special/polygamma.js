// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../vendor/debug.js";import t from"./../assert/is-nonnegative-integer.js";import o from"./factorial.js";import n from"./trigamma.js";import e from"./digamma.js";import a from"./signum.js";import m from"./ldexp.js";import i from"./floor.js";import s from"./trunc.js";import f from"./riemann-zeta.js";import u from"./abs.js";import c from"./min.js";import p from"./../../../constants/math/float64-pinf.js";import l from"./../../../constants/math/float64-ninf.js";import j from"./../../../constants/math/float64-max.js";import v from"./../../../constants/math/float64-pi.js";import g from"./gammaln.js";import d from"./exp.js";import h from"./pow.js";import N from"./ln.js";import x from"./../../../constants/math/float64-max-ln.js";import w from"./bernoulli.js";import y from"./../../../constants/math/float64-ln-two.js";import b from"./../../../constants/math/float64-eps.js";import E from"./../tools/evalpoly.js";import S from"./cospi.js";import z from"./sinpi.js";import A from"./../../../constants/math/float64-ln-pi.js";var T=r,k=w,q=o,B=g,C=u,D=d,F=h,G=N,H=x,I=y,J=b,K=T("polygamma"),L=1e6,M=172;function O(r,t){var o,n,e,a,m,i;if(r+t===t)return 1===r?1/t:r*G(t)<H&&r<M?(1&r?1:-1)*q(r-1)*F(t,-r):(1&r?1:-1)*D(B(r)-r*G(t));if(n=t*t,0===(o=r>M&&r*r>H?0:q(r-1)*F(t,-r-1))?(o=B(r)-(r+1)*G(t),a=D(o+G(r+2*t)-I),o+=G(r*(r+1))-I-G(t),o=D(o)):(a=o*(r+2*t)/2,o*=r*(r+1)/2,o/=t),0===a)return a;for(i=1;e=o*k(2*i),!(C(e/(a+=e))<J);)if(o*=(r+(m=2*(i+=1))-2)*(r-1+m),o/=(m-1)*m,o/=n,i>L)return K("Series did not converge, closest value was: %d.",a),NaN;return r-1&1&&(a=-a),a}var P=r,Q=o,R=g,U=s,V=d,W=h,X=N,Y=x,Z=O,$=P("polygamma"),_=1e6,rr=19;function tr(r,t){var o,n,e,a,m,i,s;if(m=r,(e=.4*rr+4*r-U(t))>_)return $("Exceeded maximum series evaluations when evaluated at n = %d and x = %d",r,t),NaN;if(o=-m-1,a=0,0,X((s=t)+e)*o>-Y){for(i=1;i<=e;i++)a+=W(s,o),s+=1;a*=Q(r)}else for(i=1;i<=e;i++)n=X(s)*o+R(r+1),a+=V(n),s+=1;return r-1&1&&(a=-a),a+Z(r,s)}function or(r){return 0===r?-2:-4*r-2}function nr(r){return 0===r?16:16+8*r}function er(r){return 0===r?-16:r*(-16*r-88)-16}function ar(r){return 0===r?272:272+r*(416+32*r)}function mr(r){return 0===r?-272:r*(r*(-64*r-1824)-2880)-272}function ir(r){return 0===r?7936:7936+r*(24576+r*(7680+128*r))}function sr(r){return 0===r?-7936:r*(r*(r*(-256*r-31616)-185856)-137216)-7936}function fr(r){return 0===r?353792:353792+r*(1841152+r*(1304832+r*(128512+512*r)))}function ur(r){return 0===r?-353792:r*(r*(r*(r*(-1024*r-518656)-8728576)-21253376)-9061376)-353792}function cr(r){return 0===r?22368256:22368256+r*(175627264+r*(222398464+r*(56520704+r*(2084864+2048*r))))}var pr=r,lr=E,jr=g,vr=a,gr=S,dr=z,hr=u,Nr=d,xr=h,wr=N,yr=x,br=p,Er=l,Sr=A,zr=v,Ar=or,Tr=nr,kr=er,qr=ar,Br=mr,Cr=ir,Dr=sr,Fr=fr,Gr=ur,Hr=cr,Ir=pr("polygamma"),Jr=1e6,Kr=9.869604401089358,Lr=31.00627668029982,Mr=97.40909103400244,Or=306.01968478528147,Pr=961.3891935753045,Qr=3020.2932277767923,Rr=9488.531016070574,Ur=29809.09933344621,Vr=93648.04747608303,Wr=294204.0179738906,Xr=924269.1815233742,Yr=[[-1]];function Zr(r){var t,o;for(t=new Array(r),o=0;o<r;o++)t[o]=0;return t}function $r(r){var t,o,n,e,a,m,i,s,f;for(i=Yr.length-1;i<r-1;i++)for(o=((e=(a=i+2|0)-1|0)-(t=1&i|0))/2|0,n=(e+1-(t?0:1))/2|0,Yr.push(Zr(n+1)),s=0;s<=o;s++)f=((m=2*s+t|0)+1)/2|0,Yr[i+1][f]+=(m-a)*Yr[i][s]/(a-1),m&&(f=(m-1)/2|0,Yr[i+1][f]+=-m*Yr[i][s]/(a-1))}function _r(r,t,o){var n,e,a,m,i,s;switch(s=hr(t)<hr(o)?dr(t):dr(o),i=gr(t),r){case 1:return-zr/(s*s);case 2:return 2*Kr*i/xr(s,3);case 3:return Lr*Ar(i*i)/xr(s,4);case 4:return Mr*i*Tr(i*i)/xr(s,5);case 5:return Or*kr(i*i)/xr(s,6);case 6:return Pr*i*qr(i*i)/xr(s,7);case 7:return Qr*Br(i*i)/xr(s,8);case 8:return Rr*i*Cr(i*i)/xr(s,9);case 9:return Ur*Dr(i*i)/xr(s,10);case 10:return Vr*i*Fr(i*i)/xr(s,11);case 11:return Wr*Gr(i*i)/xr(s,12);case 12:return Xr*i*Hr(i*i)/xr(s,13)}return r/2>Jr?(Ir("The value of `n` is so large that we're unable to compute the result in reasonable time."),NaN):((e=r-1)>=Yr.length&&$r(r),m=lr(Yr[e],i*i),1&e&&(m*=i),0===m?m:(n=r*Sr,0===s?m>=0?br:Er:(n-=wr(hr(s))*(r+1),(n+=jr(r)+wr(hr(m)))>yr?m>=0?br:Er:(a=Nr(n)*vr(m),s<0&&r+1&1&&(a*=-1),a))))}var rt=r,tt=o,ot=f,nt=u,et=h,at=l,mt=p,it=b,st=j,ft=rt("polygamma"),ut=1e6;function ct(r,t){var o,n,e,a,m,i,s;if(e=tt(r),o=1,0===(n=et(t,r+1)))return mt;if((n=1/n)>2/it)return 1&r?i/n<e?mt:n*e:i/n<e?at:-n*e;for(m=n,s=0;m+=a=o*ot(s+r+1),!(nt(a)<nt(m*it));)if(o*=-t*(r+(s+=1))/s,s>ut)return ft("Series did not converge, best value is %d.",m),NaN;return st/e<m?mt:(m*=e,1&r?m:-m)}var pt=r,lt=t,jt=o,vt=n,gt=e,dt=a,ht=m,Nt=i,xt=s,wt=f,yt=u,bt=c,Et=p,St=l,zt=j,At=v,Tt=tr,kt=O,qt=_r,Bt=ct,Ct=pt("polygamma"),Dt=19;function Ft(r,t){var o,n;return lt(r)?0===r?gt(t):1===r?vt(t):t<0?Nt(t)===t?1&xt(t)?Et:(Ct("Evaluation at negative integer: %d.",t),NaN):(o=Ft(r,n=1-t)+At*qt(r,n,t),1&r?-o:o):t<bt(5/r,.25)?Bt(r,t):t>.4*Dt+4*r?kt(r,t):1===t?(1&r?1:-1)*jt(r)*wt(r+1):.5===t?(o=(1&r?1:-1)*jt(r)*wt(r+1),yt(o)>=ht(zt,-r-1)?1===dt(o)?Et:St:o*=ht(1,r+1)-1):Tt(r,t):NaN}var Gt=Ft;export default Gt;
//# sourceMappingURL=polygamma.js.map