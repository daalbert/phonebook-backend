(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(16),o=t.n(c),a=t(7),u=t(3),i=t(0),d=function(e){var n=e.person,t=e.removePerson;return Object(i.jsxs)("div",{children:[n.name," ",n.number,"\xa0",Object(i.jsx)("button",{onClick:t,children:"delete"})]})},s=function(e){var n=e.persons,t=e.removePersonId;return n.map((function(e){return Object(i.jsx)(d,{person:e,removePerson:function(){return t(e.id)}},e.id)}))},b=t(4),l=1,j=2,h=function(e){var n,t=e.message,r=e.type;if(null===t)return null;var c=r===j?j:l,o=(n={},Object(b.a)(n,l,{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}),Object(b.a)(n,j,{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}),n);return Object(i.jsx)("div",{style:o[c],children:t})},f=t(5),p=t.n(f),m="/api/persons",O={getAll:function(){return p.a.get(m).then((function(e){return e.data}))},create:function(e){return p.a.post(m,e).then((function(e){return e.data}))},update:function(e,n){return p.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return p.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}},g=function(e){var n=e.addPerson,t=e.handleNameChange,r=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:t})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.handleChange;return Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{onChange:n})]})},v=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),d=Object(u.a)(o,2),b=d[0],f=d[1],p=Object(r.useState)(""),m=Object(u.a)(p,2),v=m[0],w=m[1],S=Object(r.useState)(""),y=Object(u.a)(S,2),C=y[0],k=y[1],P=Object(r.useState)(null),N=Object(u.a)(P,2),E=N[0],A=N[1],B=Object(r.useState)(l),D=Object(u.a)(B,2),I=D[0],R=D[1];Object(r.useEffect)((function(){O.getAll().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){null!==E&&setTimeout((function(){A(null),R(l)}),5e3)}),[E]);var z=C?t.filter((function(e){return e.name.match(new RegExp(C,"i"))})):t;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(h,{message:E,type:I}),Object(i.jsx)(x,{handleChange:function(e){return k(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(g,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));n?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&O.update(n.id,Object(a.a)(Object(a.a)({},n),{},{number:v})).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),A("Updated ".concat(b))})).catch((function(e){console.log(e.response.data),R(j),A(e.response.data.error)})):O.create({name:b,number:v}).then((function(e){c(t.concat(e)),A("Added ".concat(b))})).catch((function(e){console.log(e.response.data),R(j),A(e.response.data.error)}))},handleNameChange:function(e){return f(e.target.value)},handleNumberChange:function(e){return w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(s,{persons:z,removePersonId:function(e){window.confirm("Delete ".concat(t.find((function(n){return n.id===e})).name))&&O.remove(e).then((function(){A("Deleted ".concat(t.find((function(n){return n.id===e})).name)),c(t.filter((function(n){return n.id!==e})))})).catch((function(e){return console.log(e)}))}})]})};o.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e16040c3.chunk.js.map