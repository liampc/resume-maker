(this["webpackJsonpresume-maker"]=this["webpackJsonpresume-maker"]||[]).push([[0],{16:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),l=t(7),i=t.n(l),d=(t(16),t(4)),s=t.n(d),h=(t(18),t(19),t(0));var r=function(e){return Object(h.jsx)("a",{className:"link",href:"#".concat(e.link),children:e.link})};var u=function(){var e=["Contact","Education","Experience","Skills","Certifications"].map((function(e){return Object(h.jsx)(r,{link:e},s()())}));return Object(h.jsxs)("header",{className:"header container",children:[Object(h.jsxs)("div",{className:"header__toggle hide-for-desktop",onClick:function(){document.querySelectorAll(".toToggle").forEach((function(e){e.classList.contains("open")?e.classList.remove("open"):e.classList.add("open")}))},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]}),Object(h.jsx)("h1",{children:"Resume Maker"}),Object(h.jsx)("nav",{className:"header__nav hide-for-mobile",children:e}),Object(h.jsx)("div",{className:"header__overlay toToggle",children:e})]})},o=t(2),j=t(6),b=t(8),p=t(9),x=t(3),v=t(11),O=t(10);t(21);var C=function(e){return Object(h.jsxs)("div",{className:"input",children:[Object(h.jsxs)("label",{htmlFor:e.name,children:[" ",e.name,": "]}),Object(h.jsx)("input",{className:"input__box",name:e.name,type:e.type,onChange:e.handleChange,value:e.value})]})};var m=function(e){return Object(h.jsxs)("div",{id:"Contact",className:"card Contact to-hide",children:[Object(h.jsx)("h2",{children:e.header}),Object(h.jsx)(C,{name:"Name",type:"text",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Name||""}),Object(h.jsx)(C,{name:"Address",type:"text",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Address||""}),Object(h.jsx)(C,{name:"Email",type:"email",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Email||""}),Object(h.jsx)(C,{name:"Phone",type:"number",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Phone||""}),Object(h.jsx)(C,{name:"Website",type:"text",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Website||""}),Object(h.jsx)(C,{name:"LinkedIn",type:"text",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.LinkedIn||""}),Object(h.jsx)(C,{name:"Other",type:"text",handleChange:function(n){return e.handleChange(n,"Contact")},value:e.value.Other||""})]})};var f=function(e){return Object(h.jsxs)("div",{id:"Education",className:"card Education to-hide",children:[Object(h.jsx)("h2",{children:e.header}),Object(h.jsx)(C,{name:"School",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.School||""}),Object(h.jsx)(C,{name:"Course",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Course||""}),Object(h.jsx)(C,{name:"Year",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Year||""}),Object(h.jsx)("span",{onClick:function(){return e.handleClick(e.header)},className:"add to-hide",children:"+"}),Object(h.jsx)("span",{onClick:function(){return e.handleUpdate(e.header)},className:"update hide",children:"Update"})]})};var k=function(e){return Object(h.jsxs)("div",{id:"Experience",className:"card Experience to-hide",children:[Object(h.jsx)("h2",{children:e.header}),Object(h.jsx)(C,{name:"Company",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Company||""}),Object(h.jsx)(C,{name:"Address",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Address||""}),Object(h.jsx)(C,{name:"Position",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Position||""}),Object(h.jsx)(C,{name:"Year",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Year||""}),Object(h.jsx)(C,{name:"Tasks",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Tasks||""}),Object(h.jsx)("span",{onClick:function(){return e.handleClick(e.header)},className:"add to-hide",children:"+"}),Object(h.jsx)("span",{onClick:function(){return e.handleUpdate(e.header)},className:"update hide",children:"Update"})]})};var g=function(e){return Object(h.jsxs)("div",{id:"Skills",className:"card Skills to-hide",children:[Object(h.jsx)("h2",{children:e.header}),Object(h.jsx)(C,{name:"Skill",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Skill||""}),Object(h.jsx)("span",{onClick:function(){return e.handleClick(e.header)},className:"add to-hide",children:"+"}),Object(h.jsx)("span",{onClick:function(){return e.handleUpdate(e.header)},className:"update hide",children:"Update"})]})};var E=function(e){return Object(h.jsxs)("div",{id:"Certifications",className:"card Certifications to-hide",children:[Object(h.jsx)("h2",{children:e.header}),Object(h.jsx)(C,{name:"Certificate",type:"text",handleChange:function(n){return e.handleChange(n,e.header)},value:e.value.Certificate||""}),Object(h.jsx)("span",{onClick:function(){return e.handleClick(e.header)},className:"add to-hide",children:"+"}),Object(h.jsx)("span",{onClick:function(){return e.handleUpdate(e.header)},className:"update hide",children:"Update"})]})};var _=function(e){var n=e.value,t=n.Contact,a=n.Education,c=n.AllEducation,l=n.Experience,i=n.AllExperience,d=n.Skills,r=n.AllSkills,u=n.Certifications,o=n.AllCertifications;return Object(h.jsxs)("div",{className:"preview to-hide hide",children:[Object(h.jsxs)("div",{className:"preview__container container",children:[Object(h.jsx)("h2",{children:t.Name}),Object(h.jsxs)("div",{className:"preview__section contact-section",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.Address}),Object(h.jsx)("p",{children:t.Email}),Object(h.jsx)("p",{children:t.Phone})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.Website}),Object(h.jsx)("p",{children:t.LinkedIn}),Object(h.jsx)("p",{children:t.Other})]})]}),Object(h.jsxs)("div",{className:"preview__section",children:[Object(h.jsx)("h3",{children:0==a.length&&0==c.length?"":"Education"}),0==a.length&&0==c.length?"":Object(h.jsx)("hr",{}),c.map((function(n,t){if(n.School||n.Course)return Object(h.jsxs)("div",{className:"preview__card",children:[Object(h.jsx)("span",{onClick:function(n){return e.handleDelete(n,t,"Education")},className:"preview__update hide",children:" Delete"}),Object(h.jsx)("span",{onClick:function(n){return e.handleEdit(n,t,"Education")},className:"preview__update hide",children:" Edit"}),Object(h.jsx)("p",{children:n.School}),Object(h.jsx)("p",{children:n.Course}),Object(h.jsx)("p",{children:n.Year})]},s()())}))]}),Object(h.jsxs)("div",{className:"preview__section",children:[Object(h.jsx)("h3",{children:0==l.length&&0==i.length?"":"Experience"}),0==l.length&&0==i.length?"":Object(h.jsx)("hr",{}),i.map((function(n,t){if(n.Company||n.Position)return Object(h.jsxs)("div",{className:"preview__card",children:[Object(h.jsx)("span",{onClick:function(n){return e.handleDelete(n,t,"Experience")},className:"preview__update hide",children:" Delete"}),Object(h.jsx)("span",{onClick:function(n){return e.handleEdit(n,t,"Experience")},className:"preview__update hide",children:" Edit"}),Object(h.jsx)("p",{children:n.Company}),Object(h.jsx)("p",{children:n.Address}),Object(h.jsx)("p",{children:n.Position}),Object(h.jsx)("p",{children:n.Year}),Object(h.jsx)("p",{children:n.Tasks})]},s()())}))]}),Object(h.jsxs)("div",{className:"preview__section",children:[Object(h.jsx)("h3",{children:0==d.length&&0==r.length?"":"Skills"}),0==d.length&&0==r.length?"":Object(h.jsx)("hr",{}),r.map((function(n,t){if(n.Skill)return Object(h.jsxs)("div",{className:"preview__card",children:[Object(h.jsx)("span",{onClick:function(n){return e.handleDelete(n,t,"Skills")},className:"preview__update hide",children:" Delete"}),Object(h.jsx)("span",{onClick:function(n){return e.handleEdit(n,t,"Skills")},className:"preview__update hide",children:" Edit"}),Object(h.jsx)("p",{children:n.Skill})]},s()())}))]}),Object(h.jsxs)("div",{className:"preview__section",children:[Object(h.jsx)("h3",{children:0==u.length&&0==o.length?"":"Certifications"}),0==u.length&&0==o.length?"":Object(h.jsx)("hr",{}),o.map((function(n,t){if(n.Certificate)return Object(h.jsxs)("div",{className:"preview__card",children:[Object(h.jsx)("span",{onClick:function(n){return e.handleDelete(n,t,"Certifications")},className:"preview__update hide",children:" Delete"}),Object(h.jsx)("span",{onClick:function(n){return e.handleEdit(n,t,"Certifications")},className:"preview__update hide",children:" Edit"}),Object(h.jsx)("p",{children:n.Certificate})]},s()())}))]})]}),Object(h.jsxs)("div",{className:"preview__buttons",children:[Object(h.jsx)("button",{className:"button",value:"edit",onClick:e.handleSubmit,children:"Back"}),Object(h.jsx)("button",{className:"btn__edit button",value:"edit",onClick:e.showEdit,children:"Edit"})]})]})};var N=function(e){return Object(h.jsxs)("main",{className:"main",children:[Object(h.jsxs)("form",{children:[Object(h.jsx)(m,{header:"Contact",handleChange:e.handleChange,value:e.value.Contact,handleClick:e.handleClick}),Object(h.jsx)(f,{header:"Education",handleChange:e.handleChange,value:e.value.Education,handleClick:e.handleClick,handleUpdate:e.handleUpdate}),Object(h.jsx)(k,{header:"Experience",handleChange:e.handleChange,value:e.value.Experience,handleClick:e.handleClick,handleUpdate:e.handleUpdate}),Object(h.jsx)(g,{header:"Skills",handleChange:e.handleChange,value:e.value.Skills,handleClick:e.handleClick,handleUpdate:e.handleUpdate}),Object(h.jsx)(E,{header:"Certifications",handleChange:e.handleChange,value:e.value.Certifications,handleClick:e.handleClick,handleUpdate:e.handleUpdate}),Object(h.jsx)("button",{className:"button to-hide",onClick:e.handleSubmit,children:"Preview"})]}),Object(h.jsx)(_,{value:e.value,handleSubmit:e.handleSubmit,handleEdit:e.handleEdit,handleDelete:e.handleDelete,showEdit:e.showEdit})]})},S=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;return Object(b.a)(this,t),(e=n.call(this)).state={Contact:[],Education:[],AllEducation:[],Experience:[],AllExperience:[],Skills:[],AllSkills:[],Certifications:[],AllCertifications:[]},e.handleChange=e.handleChange.bind(Object(x.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(x.a)(e)),e.handleClick=e.handleClick.bind(Object(x.a)(e)),e.handleEdit=e.handleEdit.bind(Object(x.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(x.a)(e)),e.showEdit=e.showEdit.bind(Object(x.a)(e)),e.handleDelete=e.handleDelete.bind(Object(x.a)(e)),e}return Object(p.a)(t,[{key:"handleChange",value:function(e,n){var t=e.target,a=t.name,c=t.value;this.setState((function(e){return Object(o.a)({},n,Object(j.a)(Object(j.a)({},e[n]),{},Object(o.a)({},a,c)))}))}},{key:"handleClick",value:function(e){var n=this;this.setState((function(t){var a;return a={},Object(o.a)(a,"All".concat(e),t["All".concat(e)].concat(n.state[e])),Object(o.a)(a,e,[]),a}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),document.querySelectorAll(".to-hide").forEach((function(e){e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}))}},{key:"handleEdit",value:function(e,n,t){var a=this,c=document.querySelector(".".concat(t)),l=document.querySelector(".add"),i=document.querySelectorAll(".update");c.classList.remove("hide"),l.classList.add("hide"),i.forEach((function(e){e.classList.remove("hide")})),this.setState((function(e){var c,l=e["All".concat(t)].map((function(e,c){return c==n?a.state[t]:e}));return c={},Object(o.a)(c,t,e["All".concat(t)][n]),Object(o.a)(c,"All".concat(t),l),Object(o.a)(c,"updateIndex",n),c}))}},{key:"handleUpdate",value:function(e){var n=this,t=this.state.updateIndex;this.setState((function(a){var c,l=a["All".concat(e)].map((function(a,c){return c==t?n.state[e]:a}));return c={},Object(o.a)(c,"All".concat(e),l),Object(o.a)(c,e,[]),c}));var a=document.querySelector(".".concat(e)),c=document.querySelectorAll(".update");a.classList.add("hide"),c.forEach((function(e){e.classList.add("hide")}))}},{key:"handleDelete",value:function(e,n,t){this.setState((function(e){var a=e["All".concat(t)].filter((function(e,t){return t!=n}));return Object(o.a)({},"All".concat(t),a)}))}},{key:"showEdit",value:function(){document.querySelectorAll(".preview__update").forEach((function(e){e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}))}},{key:"render",value:function(){return Object(h.jsx)(N,{value:this.state,handleChange:this.handleChange,handleClick:this.handleClick,handleUpdate:this.handleUpdate,handleSubmit:this.handleSubmit,handleEdit:this.handleEdit,handleDelete:this.handleDelete,showEdit:this.showEdit})}}]),t}(a.Component);var y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{}),Object(h.jsx)(S,{})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.56e64dcb.chunk.js.map