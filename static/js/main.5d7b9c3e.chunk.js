(window["webpackJsonplearning-aug-2019-complete-react-developer"]=window["webpackJsonplearning-aug-2019-complete-react-developer"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(4),s=a(6),h=a(5),i=a(1),u=a(7),d=(a(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"character",src:"https://robohash.org/".concat(e.character.id,"?set=set1")}),r.a.createElement("h1",null,e.character.name),r.a.createElement("p",null,e.character.email))}),m=(a(14),function(e){return r.a.createElement("div",{className:"card-list"},e.characters.map(function(e){return r.a.createElement(d,{key:e.id,character:e})}))}),p=(a(15),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),f=(a(16),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={characters:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({characters:t})})}}]),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.characters,a=e.searchField,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Characters Rolodex"),r.a.createElement(p,{placeholder:"search characters",handleChange:this.handleChange,value:this.state.searchField}),r.a.createElement(m,{characters:n}))}}]),t}(n.Component));l.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5d7b9c3e.chunk.js.map