(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{31:function(e,t,c){},50:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(20),r=c.n(i),o=c(4),s=c.n(o),l=c(8),d=c(5),b=(c(31),c(21)),h=c.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),j="b33da15fb726a97ac2874d63f7df0e4f",u={fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_networks=213"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(j,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")},f=c(0),p=function(){var e,t,c=Object(n.useState)([]),a=Object(d.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(u.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||i.name||i.original_name}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(f.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner__fadeBottom"})]})},v=(c(50),c(22)),m=c(25),g=c.n(m),O=function(e){var t=e.title,c=e.fetchUrl,a=e.isLargeRow,i=Object(n.useState)([]),r=Object(d.a)(i,2),o=r[0],b=r[1],j=Object(n.useState)(""),u=Object(d.a)(j,2),p=u[0],m=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(c);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h1",{className:"title",children:t}),Object(f.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(f.jsx)("img",{className:"row_poster ".concat(a&&"row_posterLarge"),onClick:function(){return function(e){p?m(""):g()(e.title||e.name||e.orignal_name).then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name})}))}),Object(f.jsx)("div",{style:{padding:"40px"},children:p&&Object(f.jsx)(v.a,{videoId:p,opts:{heighr:"390",width:"100%",playerVars:{autoplay:1}}})})]})},_=(c(72),c(73),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(f.jsxs)("div",{className:"nav ".concat(c&&"nav__black"),children:[Object(f.jsx)("img",{className:"nav__logo",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI",alt:"Netflix Logo"}),Object(f.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar logo"})]})});var x=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(_,{}),Object(f.jsx)(p,{}),Object(f.jsx)(O,{title:"NETFLIX ORIGINALS",fetchUrl:u.fetchNetflixOriginals,isLargeRow:!0}),Object(f.jsx)(O,{title:"Trending Now",fetchUrl:u.fetchTrending}),Object(f.jsx)(O,{title:"Top Rated",fetchUrl:u.fetchTopRatedMovies}),Object(f.jsx)(O,{title:"Action Movies",fetchUrl:u.fetchActionMovies}),Object(f.jsx)(O,{title:"Comedy Movies",fetchUrl:u.fetchComedyMovies}),Object(f.jsx)(O,{title:"Horror Movies",fetchUrl:u.fetchHorrorMovies}),Object(f.jsx)(O,{title:"Romance Movies",fetchUrl:u.fetchRomanceMovies})]})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d95e3afd.chunk.js.map