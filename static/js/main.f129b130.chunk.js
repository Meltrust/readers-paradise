(this["webpackJsonpreaders-paradise"]=this["webpackJsonpreaders-paradise"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);c(45),c(46);var a=c(1),s=c.n(a),n=c(20),r=c.n(n),o=c(10),l=c(11),i=c(3),b=c(16),d=c(39),j=c(40),m=c.n(j),u=c(41),p=c(9),x=c(12),O=c.n(x),h=c(21),v=c(22),f=c.n(v),y="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi",N="7bITS9pnop0z4L5ssJm1",g="bookStore/books/ADD_BOOK",k="bookStore/books/REMOVE_BOOK",w="bookStore/books/LOAD_BOOKS",S={books:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{books:[].concat(Object(p.a)(e.books),[t.payload])};case k:return{books:e.books.filter((function(e){return e.id!==t.payload}))};case w:return{books:t.payload};default:return e}},C=Object(b.combineReducers)({booksReducer:E}),R=Object(b.createStore)(C,Object(d.composeWithDevTools)(Object(b.applyMiddleware)(m.a,u.a))),D=c(2),B=function(){return Object(D.jsxs)("div",{className:"mt-5 container",children:[Object(D.jsx)("div",{className:"pt-5 pt-md-0",children:"Under construction"}),Object(D.jsx)(l.b,{to:"/",className:"text-header",exact:!0,children:"back"})]})},A=(c(98),c(99),c(110)),M=function(e){var t=e.id,c=e.title,a=e.author,s=e.category,n=e.currentProgress,r=e.bookLenght,l=Object(o.b)(),i=Math.round(n/r*100);return Object(D.jsx)("div",{className:"card pe-md-5",children:Object(D.jsxs)("div",{className:"row mx-0 py-4 justify-content-between align-items-center ps-4 pe-5 ",children:[Object(D.jsxs)("div",{className:"col-md-6",children:[Object(D.jsx)("p",{className:"fw-bold opacity-50 mb-0 text-category",children:s}),Object(D.jsx)("p",{className:"fw-bold robotoslab fs-2 mb-0",children:c}),Object(D.jsx)("button",{type:"button",className:"border-0 bg-white p-0 mb-3 text-1",children:a}),Object(D.jsxs)("div",{className:"row row-cols-auto mx-0 g-0",children:[Object(D.jsx)("button",{type:"button",className:" border-0 bg-white text-1",children:"Comments"}),Object(D.jsx)("div",{className:"line-v px-0 mx-md-3 mx-1"}),Object(D.jsx)("button",{type:"button",className:" border-0 bg-white text-1",onClick:function(){return l((e=t,function(){var t=Object(h.a)(O.a.mark((function t(c){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={item_id:e},t.next=3,f.a.delete("".concat(y,"/apps/").concat(N,"/books/").concat(e),a);case 3:c({type:k,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Remove"}),Object(D.jsx)("div",{className:"line-v px-0 mx-md-3 mx-1"}),Object(D.jsx)("button",{type:"button",className:" border-0 bg-white text-1",children:"Edit"})]})]}),Object(D.jsx)("div",{className:"col-md-3 d-flex flex-column justify-content-center",children:Object(D.jsxs)("div",{className:"row row-cols-auto mx-0 g-0 justify-content-center align-items-center py-3 py-md-0",children:[Object(D.jsx)("div",{className:"col-2 col-md-5",children:Object(D.jsx)(A.a,{className:"w-75",variant:"determinate",value:i})}),Object(D.jsxs)("div",{className:"col-7",children:[Object(D.jsxs)("p",{className:"fs-2 mb-0",children:[i,"%"]}),Object(D.jsx)("p",{className:"opacity-50 small mb-2",children:"Completed"})]})]})}),Object(D.jsxs)("div",{className:"col-md-2 robotoslab",children:[Object(D.jsx)("p",{className:"mb-2 opacity-50",children:"CURRENT CHAPTER"}),Object(D.jsxs)("p",{children:["Chapter"," ",n]}),Object(D.jsx)("button",{type:"button",className:"btn btn-primary px-3",children:Object(D.jsx)("span",{className:"opacity-50 small",children:"UPDATE PROGRESS"})})]})]})})},P=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.booksReducer.books}));return Object(a.useEffect)((function(){e(function(){var e=Object(h.a)(O.a.mark((function e(t){var c,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(y,"/apps/").concat(N,"/books"));case 2:c=e.sent,a=[],s=Object.keys(c.data),Object.values(c.data).forEach((function(e,t){var c=e[0],n=c.title.split("&&&"),r={title:n[0],author:n[1],id:s[t],category:c.category};a.push(r)})),t({type:w,payload:a});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(D.jsxs)("div",{children:[Object(D.jsx)("ul",{className:"list-unstyled row mx-0 g-0 gy-3",children:t.map((function(e){var t=Math.floor(10*Math.random())+1,c=Math.floor(10*Math.random()+t);return Object(D.jsx)("li",{children:Object(D.jsx)(M,{id:e.id,title:e.title,author:e.author,category:e.category,currentProgress:t,bookLenght:c})},e.id)}))}),Object(D.jsx)("div",{className:"line-h my-5"})]})},T=c(8),q=c(111),K=function(){var e=Object(o.b)(),t=Object(a.useState)(""),c=Object(T.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(T.a)(r,2),i=l[0],b=l[1],d=Object(a.useState)("Fantasy"),j=Object(T.a)(d,2),m=j[0],u=j[1],p=function(t){if(""===s||""===i){var c=document.getElementById("errPlace"),a=document.createElement("small");a.textContent="All fields are required",a.classList.add("text-black-50","mt-3","error"),null===document.querySelector(".error")&&c.append(a)}else e((r=t,function(){var e=Object(h.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={item_id:"".concat(r.id),title:"".concat(r.title,"&&&").concat(r.author),category:"".concat(r.category)},e.next=3,f.a.post("".concat(y,"/apps/").concat(N,"/books"),c);case 3:t({type:g,payload:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),b(""),n(""),u("Fantasy"),null!==document.querySelector(".error")&&document.querySelector(".error").remove();var r};return Object(D.jsxs)("div",{className:"px-3 pt- pb-md-5 mb-md-5",children:[Object(D.jsx)("h2",{className:"h4 fw-bold text-muted",children:" ADD NEW BOOK"}),Object(D.jsxs)("form",{className:"row mx-0 g-0 justify-content-between pb-5 pb-md-0",id:"",children:[Object(D.jsx)("div",{className:"col-md-3",children:Object(D.jsx)("input",{type:"text",className:"form-control",placeholder:"Book title",value:s,onChange:function(e){return n(e.target.value)},required:!0})}),Object(D.jsx)("div",{className:"col-md-3",children:Object(D.jsx)("input",{type:"text",className:"form-control",placeholder:"Book author",value:i,onChange:function(e){return b(e.target.value)},required:!0})}),Object(D.jsx)("div",{className:"col-md-3",children:Object(D.jsxs)("select",{className:"col-3 form-select try ",value:m,onChange:function(e){return u(e.target.value)},children:[Object(D.jsx)("option",{children:"Fantasy"}),Object(D.jsx)("option",{children:"Science Fiction"}),Object(D.jsx)("option",{children:"Education"}),Object(D.jsx)("option",{children:"Thriller"}),Object(D.jsx)("option",{children:"Horror"}),Object(D.jsx)("option",{children:"Classics"})]})}),Object(D.jsx)("div",{className:"col-md-2 pb-5 pb-md-0",children:Object(D.jsx)("button",{type:"submit",className:"btn btn-primary w-100",onClick:function(e){e.preventDefault();var t={id:Object(q.a)(),title:s,author:i,category:m};e.preventDefault(),p(t)},children:Object(D.jsx)("span",{className:"font-robotoslab small px-3",children:"ADD BOOK"})})})]}),Object(D.jsx)("div",{id:"errPlace"})]})};var L=function(){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(P,{}),Object(D.jsx)(K,{})]})},_=c(42),F=c(43),I=function(){return Object(D.jsx)("header",{className:"border-bottom py-2 bg-white mb-3 mb-md-5",children:Object(D.jsx)("nav",{className:"navbar navbar-expand-md bg-white py-md-3 px-md-5 align-items-center justify-content-center ",children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("span",{className:"navbar-brand text-primary fw-bold fs-3 pe-md-3",children:"Reader's Paradise"}),Object(D.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(D.jsx)(_.a,{style:{fontSize:"25px"}})}),Object(D.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarNav",children:[Object(D.jsxs)("ul",{className:"navbar-nav align-items-end line fw-light lh-1 position-relative nav-items-top",children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(l.c,{to:"/",className:"nav-link main-nav-links me-4 text-black-50",children:"BOOKS"})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(l.c,{to:"categories",className:"nav-link  main-nav-links text-black-50 ",exact:!0,children:"CATEGORIES"})})]}),Object(D.jsx)("div",{className:"",children:Object(D.jsx)(F.a,{className:"text-primary center-block",style:{fontSize:"2.5rem"}})})]})]})})})};r.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(o.a,{store:R,children:Object(D.jsx)(l.a,{basename:"/readers-paradise",children:Object(D.jsxs)("div",{className:"container-fluid min-vh-100 bg-light",children:[Object(D.jsx)(I,{}),Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{path:"/",element:Object(D.jsx)(L,{})}),Object(D.jsx)(i.a,{path:"categories",element:Object(D.jsx)(B,{})})]})]})})})}),document.getElementById("root"))},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.f129b130.chunk.js.map