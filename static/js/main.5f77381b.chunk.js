(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(5),l=n.n(o),u=n(8),m=n(6),s=n(19),i=n(20),b=n(24),p=n(21),f=n(43),d=n(4),E=Object(d.b)("@contacts/localstorage"),O=Object(d.b)("@contacts/add",(function(e,t){return{payload:{name:e,number:t,id:Object(f.a)()}}})),v=Object(d.b)("@contacts/delete"),h=Object(d.b)("@contacts/value",(function(e){return{payload:e.target.value}})),g=n(22),j=n(41),y=(n(36),function(e){var t=e.submitForm,n=e.name,a=e.contactInputValue,o=e.number,l=Object(c.useState)(!1),u=Object(g.a)(l,2),m=u[0],s=u[1];return Object(c.useEffect)((function(){s(!0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{in:m,classNames:"title",timeout:500,mountOnEnter:!0},r.a.createElement("h2",{className:"title"},"Phonebook")),r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("span",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_name",type:"text",name:"name",value:n,onChange:a}),r.a.createElement("br",null),r.a.createElement("span",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_number",type:"text",name:"number",value:o,onChange:a}),r.a.createElement("br",null),r.a.createElement("button",{className:"submit_btn",type:"submit"},"Add contact")))}),N=n(42),k=(n(37),{inputValue:h,deleteContact:v}),C=Object(u.b)((function(e){return{filter:e.contacts.filter,contacts:e.contacts.items}}),k)((function(e){var t=e.filter,n=e.contacts,a=e.inputValue,c=e.deleteContact,o=function(){return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))};return r.a.createElement(r.a.Fragment,null,o().length>1&&r.a.createElement("div",{className:"search-container"},r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:a})),r.a.createElement("div",{className:"search_info"},r.a.createElement(N.a,{component:"ul",className:"contact_list"},o().map((function(e){return r.a.createElement(j.a,{key:e.id,classNames:"list__item",timeout:800},r.a.createElement("li",{className:"contact_item",key:e.id},e.name," : ",e.number,r.a.createElement("button",{className:"delete_btn",type:"button",onClick:function(){return c(e.id)}},"Delete")))})))))})),F=(n(38),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",value:!1},e.contactInputValue=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e.submitForm=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r=n.value;e.props.contacts.find((function(t){return t.name===e.state.name}))?e.toggle(r):(e.props.addContact(a,c),e.setState({name:"",number:""}))},e.toggle=function(t){e.setState({value:!t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.props.readFromLocal(JSON.parse(e))}},{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,c=t.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{in:c,classNames:"alert",timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("button",{className:"alert",onClick:function(){e.toggle(!0)}},"".concat(n," alredy exist"))),r.a.createElement(y,{submitForm:this.submitForm,name:n,contactInputValue:this.contactInputValue,number:a}),r.a.createElement(C,null))}}]),n}(c.Component)),S={addContact:O,readFromLocal:E},_=Object(u.b)((function(e){return{contacts:e.contacts.items}}),S)(F),w=n(3),I=n(23),x=Object(d.c)([],(a={},Object(m.a)(a,E,(function(e,t){return t.payload})),Object(m.a)(a,O,(function(e,t){var n=t.payload;return[].concat(Object(I.a)(e),[n])})),Object(m.a)(a,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),V=Object(d.c)("",Object(m.a)({},h,(function(e,t){return t.payload}))),D=Object(w.c)({items:x,filter:V}),J=Object(d.a)({reducer:{contacts:D}});l.a.render(r.a.createElement(u.a,{store:J},r.a.createElement(_,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5f77381b.chunk.js.map