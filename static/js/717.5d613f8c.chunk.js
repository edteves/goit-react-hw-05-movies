"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{717:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),s=r(757),c=r.n(s),u=r(791),i=r(689),o=r(87),p=r(714),l="Button_button__wiIYs",f=r(184),v=function(e){var t=e.text;return(0,f.jsx)("button",{className:l,type:"button",children:t})},h=r(784),d={movieDetailsContainer:"MoviesDetailsPage_movieDetailsContainer__ucG-5"},x=function(){var e,t,r=(0,i.UO)().movieId,s=(0,u.useState)(),l=(0,a.Z)(s,2),x=l[0],m=l[1],j=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Y5)(r);case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[r]),x?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{to:j,children:(0,f.jsx)(v,{text:"\u2b05 Go back"})}),(0,f.jsxs)("div",{className:d.movieDetailsContainer,children:[(0,f.jsx)("img",{className:d.image,src:x.poster_path?"https://image.tmdb.org/t/p/w500".concat(x.poster_path):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:x.title}),(0,f.jsxs)("div",{className:d.movieDetailsWrap,children:[(0,f.jsx)("h1",{children:x.title}),(0,f.jsxs)("h4",{children:["User score: ",Math.round(10*x.vote_average),"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:x.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:x.genres.map((function(e){return(0,f.jsxs)("span",{children:[" ",e.name]},e.id)}))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsx)(o.rU,{to:"cast",children:(0,f.jsx)(v,{text:"Cast"})}),(0,f.jsx)(o.rU,{to:"reviews",children:(0,f.jsx)(v,{text:"Reviews"})}),(0,f.jsx)("hr",{}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)(h.a,{}),children:(0,f.jsx)(i.j3,{})})]}):(0,f.jsx)(h.a,{})}},714:function(e,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return o},mv:function(){return i},uV:function(){return p},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"e51149a0011976f4432cf59329496ccb"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=717.5d613f8c.chunk.js.map