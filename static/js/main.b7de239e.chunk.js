(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=a(9),i=a(2),u=a(8),o=a.n(u),m=Object(n.createContext)(),d=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),l=Object(i.a)(a,2),r=l[0],u=l[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);var d=Object(n.useState)(null),f=Object(i.a)(d,2),E=f[0],b=f[1];return c.a.createElement(m.Provider,{value:{tasks:r,addTask:function(e){u([].concat(Object(s.a)(r),[{title:e,id:o()()}]))},removeTask:function(e){u(r.filter((function(t){return t.id!==e})))},clearList:function(){u([])},findItem:function(e){var t=r.find((function(t){return t.id===e}));b(t)},editTask:function(e,t){var a=r.map((function(a){return a.id===t?{title:e,id:t}:a}));console.log(a),u(a),b(null)},editItem:E}},e.children)},f=function(e){var t=e.task,a=Object(n.useContext)(m),l=a.removeTask,r=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title," "),c.a.createElement("div",null,c.a.createElement("button",{className:"btn-delete task-btn",onClick:function(){return l(t.id)}},c.a.createElement("i",{className:"fas fa-trash-alt"}))," ",c.a.createElement("button",{className:"btn-edit task-btn",onClick:function(){return r(t.id)}},c.a.createElement("i",{className:"fas fa-pen"}))))},E=function(){var e=Object(n.useContext)(m).tasks;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(f,{task:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"Belum Ada Tugas"))},b=function(){var e=Object(n.useContext)(m),t=e.addTask,a=e.clearList,l=e.editTask,r=e.editItem,s=Object(n.useState)(""),u=Object(i.a)(s,2),o=u[0],d=u[1];return Object(n.useEffect)((function(){r?(d(r.title),console.log(r)):d("")}),[r]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r?l(o,r.id):(t(o),d(""))},className:"form"},c.a.createElement("input",{type:"text",placeholder:"Apa Tugasmu Hari Ini...",value:o,onChange:function(e){d(e.target.value)},required:!0,className:"task-input"}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn"},r?"Edit Task":"Add Task"),c.a.createElement("button",{className:"btn clear-btn",onClick:a},"Clear")))},k=(a(17),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Tugasku Hari Ini"))}),p=function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(k,null),c.a.createElement("div",{className:"main"},c.a.createElement(b,null),c.a.createElement(E,null)))))};r.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b7de239e.chunk.js.map