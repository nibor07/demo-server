(this["webpackJsonpdemo-cliente"]=this["webpackJsonpdemo-cliente"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(25),a(26),a(2)),s=a(3),i=a(4);function u(){var e=Object(s.a)(["\n    background-color: rgb(0, 113, 206);\n    font-size: 8pt;\n    color: #fff;\n"]);return u=function(){return e},e}function d(){var e=Object(s.a)(["\n    width: 152px; \n    height: 35px; \n    margin-top: 12px; \n    margin-bottom: 6px;\n"]);return d=function(){return e},e}var m=i.a.img(d()),p=i.a.div(u()),f=function(e){var t=e.setProductos,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],s=c[1];return r.a.createElement(p,{className:"col-xs-8"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/catalogo/"},r.a.createElement(m,{alt:"Lider Logo",src:"https://www.lider.cl/catalogo/images/lider-logo.svg"}))),r.a.createElement("div",null,r.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),o.trim().length>0&&(t((function(e){return[o]})),s(""))}},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{name:"search",value:o,className:"form-control",type:"text",placeholder:"Buscar por Producto",onChange:function(e){s(e.target.value)}}))))))};function g(){var e=Object(s.a)(["\n    background-color: #041e42;\n    font-size: 8pt;\n    color: #fff;\n"]);return g=function(){return e},e}var E=i.a.div(g()),v=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null,r.a.createElement("span",null,"Servicio al cliente de Lider.cl: WhatsApp",r.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=56957211492&text=Hola!%20Tengo%20una%20consulta"},"+56957211492"),"| Horario: de lunes a viernes de 8:00 a 22:00 y s\xe1bado, domingo y festivos de 9:00 a 22:00")))},b=a(5),h=a.n(b),N=a(18),j=a(19),k=a.n(j).a.create({baseURL:"https://demo-servidor.herokuapp.com"}),x=function(){var e=Object(N.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("PR==>producto: ",t),e.prev=1,e.next=4,k.get("/api/search",{params:{query:t}});case 4:n=e.sent,console.log("respuesta: ",n.data.productos),console.log("respuesta: ",n.data.codigo),console.log("respuesta: ",n.data.isPalindromo),n&&"00"===n.data.codigo&&(a=n.data.productos.map((function(e){return{id:e.id,brand:e.brand,description:e.description,url:e.image?e.image:"",isDescuento:n.data.isPalindromo,precioConDescuento:Math.round(e.price),price:n.data.isPalindromo?2*e.price:e.price}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return console.log("productos:",a),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.producto,a="https://"+t.url;return r.a.createElement("div",{className:"col-md-4 mb-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:a,alt:a}),r.a.createElement("h1",{className:"card-header"},t.brand," ",r.a.createElement("span",{className:"description"}," ",t.description)),t.isDescuento?r.a.createElement("div",null,r.a.createElement("div",null," ",t.price,"  ")," ",t.precioConDescuento,r.a.createElement("div",null," ",t.price,"  ")):r.a.createElement("div",null,r.a.createElement("p",null," ",t.price,"  "),r.a.createElement("p",null," ",t.price," ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-light",onClick:function(){}},"Agregar"))))},w=function(e){var t=e.producto,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){x(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,o=a.loading;return console.log("data=>",c),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),o&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(O,{key:e.id,producto:e})})))):r.a.createElement("div",{className:"styled__NoResultsText-sc-1w20d9o-5 dTOjoM"},"No encontramos resultados para tu b\xfasqueda de ",r.a.createElement("span",null,t," "))},y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return console.log("URL: ","https://demo-servidor.herokuapp.com"),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(f,{setProductos:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(w,{key:e,producto:e})}))))};o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1d523e02.chunk.js.map