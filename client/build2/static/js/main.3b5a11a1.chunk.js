(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(28),r=a.n(s),c=(a(37),a(38),a(4)),i=a(12),o=a(31),p=a(9),u=a(10),m=a(13),h=a(11),E=a(14),g=a(5),k=a.n(g);var d=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).Petsranking=function(){var e=Object(o.a)(a.state.pets);e=function(e,t){for(var a=0;a<e.length-1;a++)for(var n=0;n<e.length-1-a;n++)if(e[n][t]>e[n+1][t]){var l=e[n];e[n]=e[n+1],e[n+1]=l}return e}(e,"type"),a.setState({pets:e})},a.getPets=function(){k.a.get("/pets").then(function(e){a.setState({pets:e.data.pets},function(){a.rankPets()})}).catch(function(e){console.log(e)})},a.componentDidMount=function(){k.a.get("/pets").then(function(e){a.setState({pets:e.data.pets})}).catch(function(e){console.log(e)})},a.state={pets:[]},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"These pets are looking for a home!"),l.a.createElement(c.b,{to:"/pets/new"},"Add a pet to the shelter"),l.a.createElement("fieldset",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.state.pets.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(c.b,{to:"/pet/"+e._id},l.a.createElement("button",null,"Details")),l.a.createElement(c.b,{to:"/pet/"+e._id+"/edit"},l.a.createElement("button",null,"Edit"))))})))))}}]),t}(n.Component),f=a(2),b=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){k.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.changeName=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{description:e.target.value})})},a.changeSkill1=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill1:e.target.value})})},a.changeSkill2=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill2:e.target.value})})},a.changeSkill3=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill3:e.target.value})})},a.update=function(e){e.preventDefault(),k.a.put("/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){console.log(e),e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{}},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Edit this pet"),l.a.createElement("form",{onSubmit:this.update},l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.name,onChange:this.changeName}),this.state.errors.name?l.a.createElement("span",null,this.state.errors.name.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.type,onChange:this.changeType}),this.state.errors.type?l.a.createElement("span",null,this.state.errors.type.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.description,onChange:this.changeDescription}),this.state.errors.description?l.a.createElement("span",null," \xa0 ",this.state.errors.description.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skills:"),l.a.createElement("p",null,"Skill1: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill1,onChange:this.changeSkill1}),this.state.errors.skill1?l.a.createElement("span",null,"\xa0 ",this.state.errors.skill1.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill2: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill2,onChange:this.changeSkill2}),this.state.errors.skill2?l.a.createElement("span",null," \xa0 ",this.state.errors.skill2.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill3: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill3,onChange:this.changeSkill3}),this.state.errors.skill3?l.a.createElement("span",null,this.state.errors.skill3.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit"},"Edit pet")," \xa0\xa0"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"Cancel")))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).changeName=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{description:e.target.value})})},a.changeSkill1=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill1:e.target.value})})},a.changeSkill2=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill2:e.target.value})})},a.changeSkill3=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{skill3:e.target.value})})},a.create=function(e){e.preventDefault(),k.a.post("/pets",a.state.pet).then(function(e){console.log(e),e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{}},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Know of a pet needing a loving home?"),l.a.createElement("form",{onSubmit:this.create},l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeName}),this.state.errors.name?l.a.createElement("span",null,this.state.errors.name.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeType}),this.state.errors.type?l.a.createElement("span",null,this.state.errors.type.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeDescription}),this.state.errors.description?l.a.createElement("span",null," \xa0 ",this.state.errors.description.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skills:"),l.a.createElement("p",null,"Skill1: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill1}),this.state.errors.skill1?l.a.createElement("span",null,"\xa0 ",this.state.errors.skill1.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill2: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill2}),this.state.errors.skill2?l.a.createElement("span",null," \xa0 ",this.state.errors.skill2.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill3: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill3}),this.state.errors.skill3?l.a.createElement("span",null,this.state.errors.skill3.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit"},"Add Pet")," \xa0\xa0",l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"Cancel"))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){k.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.likePet=function(e){e.preventDefault();a.state.pet.likes;a.setState({pet:Object(f.a)({},a.state.pet,{likes:1})},function(){k.a.put("/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){console.log(e),e.data.errors&&a.setState({errors:e.data.errors.errors})}).catch(function(e){console.log(e)})}),a.setState({isliked:!0})},a.delete=function(e){k.a.delete("/pets/".concat(a.props.match.params._id)).then(function(e){a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{},isliked:!1},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Details about ",this.state.pet.name),l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.name)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("span",null," ",this.state.pet.type)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("span",null,this.state.pet.description)),l.a.createElement("p",null,"Skill1:",this.state.pet.skill1?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill1,l.a.createElement("br",null)):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill2:",this.state.pet.skill2?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill2,l.a.createElement("br",null)):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill3:",this.state.pet.skill3?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill3,l.a.createElement("br",null)):l.a.createElement("span",null)),l.a.createElement("p",null,"Likes: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.likes)),l.a.createElement("button",{type:"submit",onClick:this.likePet,disabled:this.state.isliked,id:"likebutton"},"Like this pet")," \xa0\xa0",l.a.createElement("button",{onClick:this.delete},"Adopt this pet!"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"Home"))))}}]),t}(n.Component);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(c.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:d}),l.a.createElement(i.a,{path:"/pets/new",component:S}),l.a.createElement(i.a,{path:"/pet/:_id/edit",component:b}),l.a.createElement(i.a,{exact:!0,path:"/pet/:_id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.3b5a11a1.chunk.js.map