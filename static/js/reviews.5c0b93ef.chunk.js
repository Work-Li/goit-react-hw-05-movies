"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[912],{457:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),c=n(791),a=n(871),i=n(635),o={title:"Reviews_title__k4Aww",review:"Reviews_review__a4183",author:"Reviews_author__+jR0D"},u=n(184);function s(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],f=n[1];return(0,c.useEffect)((function(){i.IR(e).then((function(e){f(e.results)}))}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h5",{className:o.title,children:"Reviews"}),(0,u.jsx)("ul",{children:0!==s.length?s.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,u.jsxs)("li",{className:o.review,children:[(0,u.jsxs)("p",{className:o.author,children:["Author: ",n]}),(0,u.jsx)("p",{className:o.text,children:r})]},t)})):(0,u.jsx)("p",{children:"We haven't any reviews yet"})})]})}},635:function(e,t,n){n.d(t,{wr:function(){return f},$z:function(){return h},IR:function(){return l},o7:function(){return v},JK:function(){return d}});var r=n(861),c=n(757),a=n.n(c),i="https://api.themoviedb.org/3",o="16600ad2b0f485ce73541bf9aac86f47";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function e(){var t,n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"/trending/movie/day?api_key=").concat(o))}function h(e){return u("".concat(i,"/movie/").concat(e,"?api_key=").concat(o))}function l(e){return u("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}function v(e){return u("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o))}function d(e){return u("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(o,"&include_adult=false"))}}}]);
//# sourceMappingURL=reviews.5c0b93ef.chunk.js.map