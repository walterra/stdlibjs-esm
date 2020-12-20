// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../vendor/debug.js";import i from"./../assert/is-string-array.js";import n from"./../assert/is-function.js";import a from"./../utils/copy.js";import o from"./read-file.js";import s from"./../math/base/special/pow.js";import t from"./../utils/keys.js";var d=100,f=18e5,l={max_retries:d,max_delay:f},u=s;function m(e,r){var i=u(2,e)-1;return i>r&&(i=r),i}var c=clearTimeout,g=t,y=c;function p(e){var r,i;for(r=g(e),i=0;i<r.length;i++)y(e[r[i]])}var v=r,h=i.primitives,E=n,w=a,b=o,x=l,j=m,T=p,R=v("read-file-list:async"),F=x.max_retries,_=x.max_delay;function A(e,r,i){var n,a,o,s,t,d,f,l;if(!h(e))throw new TypeError("invalid argument. First argument must be a string array. Value: `"+e+"`.");if(arguments.length<3?(t={},f=r):(t=w(r),f=i),!E(f))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+f+"`.");for(d=e.length,a=new Array(d),n={},s=0,R("Reading %d files...",d),l=0;l<d;l++)R("Reading file: %s (%d of %d).",e[l],l+1,d),b(e[l],t,u(l));function u(r){var i,f,l;function u(){delete n[r],R("Reading file: %s (%d of %d). Retry: %d of %d.",f,l,d,i,F),b(f,t,c)}function c(e,t){var c;if(!o)return e?(R("Encountered an error when reading %s (%d of %d). Error: %s",f,l,d,e.message),"EMFILE"===e.code||"ENFILE"===e.code?(i+=1)>F?(R("Maximum number of retries exceeded. Too many open files."),m(e=new Error("max retries exceeded. Too many open files."))):(c=j(i,_),R("Too many open files. Will retry reading file %d of %d in %s seconds.",l,d,c/1e3),void(n[r]=setTimeout(u,c))):m(e)):(R("Successfully read file: %s (%d of %d).",f,l,d),a[r]={file:f,data:t},R("Read %d of %d files.",s+=1,d),s===d?m():void 0);R("An error has already been returned. Discarding data for file: %s (%d of %d).",f,l,d)}return f=e[r],l=r+1,i=0,c}function m(e){if(T(n),e)return o=!0,f(e);R("Successfully read all files."),f(null,a)}}var S=r,V=o.sync,k=i.primitives,I=S("read-file-list:sync");function L(e,r){var i,n,a,o,s;if(!k(e))throw new TypeError("invalid argument. First argument must be a string array. Value: `"+e+"`.");for(n=arguments.length>1?r:{},o=e.length,i=new Array(o),I("Reading %d files...",o),s=0;s<o;s++){if(I("Reading file: %s (%d of %d).",e[s],s+1,o),(a=V(e[s],n))instanceof Error)return I("Encountered an error when reading file: %s (%d of %d). Error: %s",e[s],s,o,a.message),a;I("Successfully read file: %s (%d of %d).",e[s],s,o),i[s]={file:e[s],data:a}}return I("Finished reading files."),i}var M=e,C=A,D=L;M(C,"sync",D);export default C;
//# sourceMappingURL=read-file-list.js.map