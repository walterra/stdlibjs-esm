// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import a from"./../assert/is-integer.js";var t=[0,0,1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136,5768,10609,19513,35890,66012,121415,223317,410744,755476,1389537,2555757,4700770,8646064,15902591,29249425,53798080,98950096,181997601,334745777,615693474,1132436852,2082876103,3831006429,7046319384,12960201916,23837527729,43844049029,80641778674,148323355432,272809183135,501774317241,922906855808,1697490356184,3122171529233,5742568741225,0x99b36012952,19426970897100,35731770264967,65720971788709,0x6df08059d9f8,0xca35cf00a924,408933139743937,752145307699165,0x4ea34736b35c2,0x90a3317d5c260,4680045560037375,8607945812375585],e=r,s=a,f=t,i=63;function n(r){return e(r)||!1===s(r)||r<0||r>i?NaN:f[r]}var o=n;export default o;
//# sourceMappingURL=tribonacci.js.map