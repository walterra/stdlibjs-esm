// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import s from"./assert/has-own-property.js";import t from"./utils/define-read-only-property.js";import o from"./datasets/afinn-96.js";import a from"./datasets/afinn-111.js";import r from"./datasets/anscombes-quartet.js";import m from"./datasets/berndt-cps-wages-1985.js";import e from"./datasets/cdc-nchs-us-births-1969-1988.js";import i from"./datasets/cdc-nchs-us-births-1994-2003.js";import _ from"./datasets/cdc-nchs-us-infant-mortality-bw-1915-2013.js";import S from"./datasets/cmudict.js";import p from"./datasets/dale-chall-new.js";import d from"./datasets/emoji.js";import O from"./datasets/emoji-code-picto.js";import n from"./datasets/emoji-picto-code.js";import A from"./datasets/female-first-names-en.js";import f from"./datasets/fivethirtyeight-ffq.js";import E from"./datasets/frb-sf-wage-rigidity.js";import I from"./datasets/harrison-boston-house-prices.js";import N from"./datasets/harrison-boston-house-prices-corrected.js";import T from"./datasets/herndon-venus-semidiameters.js";import j from"./datasets/img-acanthus-mollis.js";import R from"./datasets/img-airplane-from-above.js";import c from"./datasets/img-allium-oreophilum.js";import M from"./datasets/img-black-canyon.js";import C from"./datasets/img-dust-bowl-home.js";import l from"./datasets/img-french-alpine-landscape.js";import u from"./datasets/img-locomotion-house-cat.js";import h from"./datasets/img-locomotion-nude-male.js";import P from"./datasets/img-march-pastoral.js";import D from"./datasets/img-nagasaki-boats.js";import H from"./datasets/liu-negative-opinion-words-en.js";import L from"./datasets/liu-positive-opinion-words-en.js";import U from"./datasets/male-first-names-en.js";import g from"./datasets/minard-napoleons-march.js";import w from"./datasets/moby-dick.js";import G from"./datasets/month-names-en.js";import v from"./datasets/nightingales-rose.js";import W from"./datasets/pace-boston-house-prices.js";import b from"./datasets/primes-100k.js";import y from"./datasets/savoy-stopwords-fin.js";import B from"./datasets/savoy-stopwords-fr.js";import F from"./datasets/savoy-stopwords-ger.js";import V from"./datasets/savoy-stopwords-it.js";import Y from"./datasets/savoy-stopwords-por.js";import k from"./datasets/savoy-stopwords-sp.js";import K from"./datasets/savoy-stopwords-swe.js";import J from"./datasets/sotu.js";import q from"./datasets/spache-revised.js";import Q from"./datasets/spam-assassin.js";import x from"./datasets/ssa-us-births-2000-2014.js";import z from"./datasets/standard-card-deck.js";import X from"./datasets/stopwords-en.js";import Z from"./datasets/suthaharan-multi-hop-sensor-network.js";import $ from"./datasets/suthaharan-single-hop-sensor-network.js";import ss from"./datasets/us-states-abbr.js";import ts from"./datasets/us-states-capitals.js";import os from"./datasets/us-states-capitals-names.js";import as from"./datasets/us-states-names.js";import rs from"./datasets/us-states-names-capitals.js";var ms=t,es={};ms(es,"AFINN_96",o),ms(es,"AFINN_111",a),ms(es,"ANSCOMBES_QUARTET",r),ms(es,"BERNDT_CPS_WAGES_1985",m),ms(es,"CDC_NCHS_US_BIRTHS_1969_1988",e),ms(es,"CDC_NCHS_US_BIRTHS_1994_2003",i),ms(es,"CDC_NCHS_US_INFANT_MORTALITY_BW_1915_2013",_),ms(es,"CMUDICT",S),ms(es,"DALE_CHALL_NEW",p),ms(es,"EMOJI",d),ms(es,"EMOJI_CODE_PICTO",O),ms(es,"EMOJI_PICTO_CODE",n),ms(es,"FEMALE_FIRST_NAMES_EN",A),ms(es,"FIVETHIRTYEIGHT_FFQ",f),ms(es,"FRB_SF_WAGE_RIGIDITY",E),ms(es,"HARRISON_BOSTON_HOUSE_PRICES",I),ms(es,"HARRISON_BOSTON_HOUSE_PRICES_CORRECTED",N),ms(es,"HERNDON_VENUS_SEMIDIAMETERS",T),ms(es,"IMG_ACANTHUS_MOLLIS",j),ms(es,"IMG_AIRPLANE_FROM_ABOVE",R),ms(es,"IMG_ALLIUM_OREOPHILUM",c),ms(es,"IMG_BLACK_CANYON",M),ms(es,"IMG_DUST_BOWL_HOME",C),ms(es,"IMG_FRENCH_ALPINE_LANDSCAPE",l),ms(es,"IMG_LOCOMOTION_HOUSE_CAT",u),ms(es,"IMG_LOCOMOTION_NUDE_MALE",h),ms(es,"IMG_MARCH_PASTORAL",P),ms(es,"IMG_NAGASAKI_BOATS",D),ms(es,"LIU_NEGATIVE_OPINION_WORDS_EN",H),ms(es,"LIU_POSITIVE_OPINION_WORDS_EN",L),ms(es,"MALE_FIRST_NAMES_EN",U),ms(es,"MINARD_NAPOLEONS_MARCH",g),ms(es,"MOBY_DICK",w),ms(es,"MONTH_NAMES_EN",G),ms(es,"NIGHTINGALES_ROSE",v),ms(es,"PACE_BOSTON_HOUSE_PRICES",W),ms(es,"PRIMES_100K",b),ms(es,"SAVOY_STOPWORDS_FIN",y),ms(es,"SAVOY_STOPWORDS_FR",B),ms(es,"SAVOY_STOPWORDS_GER",F),ms(es,"SAVOY_STOPWORDS_IT",V),ms(es,"SAVOY_STOPWORDS_POR",Y),ms(es,"SAVOY_STOPWORDS_SP",k),ms(es,"SAVOY_STOPWORDS_SWE",K),ms(es,"SOTU",J),ms(es,"SPACHE_REVISED",q),ms(es,"SPAM_ASSASSIN",Q),ms(es,"SSA_US_BIRTHS_2000_2014",x),ms(es,"STANDARD_CARD_DECK",z),ms(es,"STOPWORDS_EN",X),ms(es,"SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK",Z),ms(es,"SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK",$),ms(es,"US_STATES_ABBR",ss),ms(es,"US_STATES_CAPITALS",ts),ms(es,"US_STATES_CAPITALS_NAMES",os),ms(es,"US_STATES_NAMES",as),ms(es,"US_STATES_NAMES_CAPITALS",rs);var is=s,_s=es;function Ss(s){var t,o;for(t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o+1];if(is(_s,s))return _s[s].apply(null,t);throw new RangeError("invalid value. Unsupported/unrecognized dataset name. Value: `"+s+"`.")}var ps=Ss;export default ps;
//# sourceMappingURL=datasets.js.map