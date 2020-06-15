(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),r=a.n(o),s=a(47),c=a(48),m=a(49);var i=function({children:e}){return l.a.createElement("div",{className:"jumbotron text-center"},e)},u=a(5),d=a.n(u),h=function(){return d.a.get("/api/books")},p=function(e){return d.a.delete("/api/books/"+e)},E=function(e){return d.a.post("/api/books",e)},v=function(e){return d.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)};var b=function({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)};var f=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",{className:"searchlabel"}," ",l.a.createElement("h3",null,"Enter a search parameter")),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{className:"form-control",value:e.search,type:"text",name:"search",placeholder:"Enter a book name",onChange:e.handleInputChange})),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"submitBtn btn btn-info",type:"Submit",onClick:e.handleFormSubmit},"Submit")))))};a(39);var k=e=>l.a.createElement("div",null,e.books.map(t=>l.a.createElement("div",{className:"row justify-content-md-center m-4 p-4 border",key:t.id},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{id:"picandbtn"},l.a.createElement("img",{src:t.image,alt:t.title}),l.a.createElement("p",{className:"my-2"},l.a.createElement("strong",null,t.title)),l.a.createElement("p",null,l.a.createElement("strong",null,"by ",t.authors)),l.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Basic example"},l.a.createElement("button",{type:"button",className:"btn btn-info",id:t.id,onClick:t=>e.saveBook(t)},"Save")),l.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},l.a.createElement("a",{href:t.infoLink,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"More Info")))),l.a.createElement("div",{className:""},t.description)))));class g extends n.Component{constructor(...e){super(...e),this.state={query:"",books:[]},this.handleInputChange=e=>{const t=e.target.value;this.setState({query:t})},this.saveBook=e=>{e.preventDefault();let t=this.state.books.filter(t=>t.id===e.target.id);t=t[0],E(t).then(alert("Book saved")).catch(e=>console.log(e))},this.handleFormSubmit=e=>{e.preventDefault(),v(this.state.query).then(e=>{let t=e.data.items;t=t.map(e=>(e={id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,infoLink:e.volumeInfo.infoLink,image:e.volumeInfo.imageLinks.thumbnail},console.log(e),e)),this.setState({books:t})}).catch(e=>console.log(e))}}render(){return l.a.createElement(b,{fluid:!0},l.a.createElement(i,null,l.a.createElement("h2",null,"Search for Books and Save Ones you want to look at later")),l.a.createElement(f,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),this.state.books.length?l.a.createElement("div",null,l.a.createElement("h3",null,"Search Results"),l.a.createElement(k,{books:this.state.books,saveBook:this.saveBook})):l.a.createElement("h3",null,"No Search Results to Display"))}}var N=g;a(40);var B=e=>l.a.createElement("div",null,e.savedBookData.map(t=>l.a.createElement("div",{className:"row justify-content-md-center m-4 p-4 border",key:t._id},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{id:"picandbtn"},l.a.createElement("img",{src:t.image,alt:t.title}),l.a.createElement("p",{className:"my-2"},l.a.createElement("strong",null,t.title)),l.a.createElement("p",null,l.a.createElement("strong",null,"by ",t.authors)),l.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Basic example"},l.a.createElement("button",{type:"button",className:"btn btn-info",id:t._id,onClick:()=>e.deleteBook(t._id)},"Delete")),l.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},l.a.createElement("a",{href:t.infoLink,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("button",{type:"button",className:"btn btn-info"},"More Info")))),l.a.createElement("div",{className:""},t.description)))));class y extends n.Component{constructor(...e){super(...e),this.state={savedBookData:[]},this.loadBooks=()=>{h().then(e=>this.setState({savedBookData:e.data})).catch(e=>console.log(e))},this.deleteBook=e=>{p(e).then(e=>this.loadBooks()).catch(e=>console.log(e))}}componentDidMount(){this.loadBooks()}render(){return l.a.createElement(b,{fluid:!0},l.a.createElement(i,null,l.a.createElement("h1",null,"Saved Books")),this.state.savedBookData.length?l.a.createElement("div",null,l.a.createElement("h3",null,"Saved Books"),l.a.createElement(B,{savedBookData:this.state.savedBookData,deleteBook:this.deleteBook})):l.a.createElement("h3",null,"No Saved Books to Display"))}}var S=y;var x=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-info"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Book Search"),l.a.createElement("ul",{className:"nav justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved"))))};var D=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(c.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:N}),l.a.createElement(m.a,{exact:!0,path:"/saved",component:S}),l.a.createElement(m.a,{exact:!0,path:"/saved:id",component:S}))))};r.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b0594283.chunk.js.map