"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{900:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var c=e(885),a=e(791),r=e(871),o=e(635),i="Cast_cast__8aoft",s="Cast_person__ecB2n",u="Cast_title__MnxtY",f="Cast_image__OutwE",_="Cast_text__ZpdF6",l=e(184);function p(){var t=(0,r.UO)().movieId,n=(0,a.useState)([]),e=(0,c.Z)(n,2),p=e[0],h=e[1];return(0,a.useEffect)((function(){o.o7(t).then((function(t){h(t.cast)}))}),[t]),(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)("h5",{className:u,children:"Cast"}),(0,l.jsx)("ul",{className:i,children:p.map((function(t){var n=t.id,e=t.profile_path,c=t.name,a=t.character;return(0,l.jsxs)("li",{className:s,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e),alt:{name:c},className:f}),(0,l.jsxs)("p",{className:_,children:["Character: ",a]}),(0,l.jsx)("p",{className:_,children:c})]},n)}))})]})}},635:function(t,n,e){e.d(n,{wr:function(){return f},$z:function(){return _},IR:function(){return l},o7:function(){return p},JK:function(){return h}});var c=e(861),a=e(757),r=e.n(a),o="https://api.themoviedb.org/3",i="16600ad2b0f485ce73541bf9aac86f47";function s(){return u.apply(this,arguments)}function u(){return u=(0,c.Z)(r().mark((function t(){var n,e,c,a=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(n,e);case 4:if(!(c=t.sent).ok){t.next=11;break}return t.next=8,c.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function f(){return s("".concat(o,"/trending/movie/day?api_key=").concat(i))}function _(t){return s("".concat(o,"/movie/").concat(t,"?api_key=").concat(i))}function l(t){return s("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function p(t){return s("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i))}function h(t){return s("".concat(o,"/search/movie?query=").concat(t,"&api_key=").concat(i,"&include_adult=false"))}}}]);
//# sourceMappingURL=cast.023f0123.chunk.js.map