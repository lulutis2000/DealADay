(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{160:function(e,t,a){e.exports=a.p+"static/media/alarm-24px.284a1b39.svg"},255:function(e,t,a){},308:function(e,t,a){e.exports=a(489)},313:function(e,t,a){},315:function(e,t,a){},435:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),c=a.n(l),s=(a(313),a(19)),i=a(20),o=a(21),u=a(22),m=a(23),d=a(80),h=(a(314),a(315),a(27)),p=a(47),g=a.n(p),E=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.email;return t.service.post("/signup",{username:a,password:n,email:r}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/auth"),withCredentials:!0})},f=a(38),v=a(33),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,"Hola, ",this.props.loggedInUser.username,"!"):r.a.createElement(r.a.Fragment,null,"Hola, invitad@");return this.props.loggedInUser?r.a.createElement(f.a,{sticky:"top",expand:"lg",variant:"dark",className:"navbarFooter"},r.a.createElement(f.a.Brand,{href:"/"},r.a.createElement("img",{alt:"",src:"../../../icons/2.svg",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"ml-auto"},r.a.createElement(v.a.Link,{as:"div"}," ",r.a.createElement(h.b,{to:"/"},"Inicio")),r.a.createElement(v.a.Link,{as:"div"}," ",r.a.createElement(h.b,{to:"/profile"},"Perfil")),r.a.createElement(v.a.Link,{onClick:this.logout},"Cerrar sesi\xf3n"),r.a.createElement(v.a.Link,{as:"div"},e)))):r.a.createElement(f.a,{sticky:"top",expand:"lg",variant:"dark",className:"navbarFooter"},r.a.createElement(f.a.Brand,{href:"/"},r.a.createElement("img",{alt:"",src:"../../../icons/2.svg",width:"30",height:"30",className:"d-inline-block align-top"})),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"ml-auto"},r.a.createElement(v.a.Link,{as:"div"}," ",r.a.createElement(h.b,{to:"/"},"Inicio")),r.a.createElement(v.a.Link,{as:"div"}," ",r.a.createElement(h.b,{to:"/login"},"Inicio sesi\xf3n")),r.a.createElement(v.a.Link,{as:"div"}," ",r.a.createElement(h.b,{to:"/signup"},"Registro")),r.a.createElement(v.a.Link,{as:"div"},e))))}}]),t}(n.Component),C=a(30),y=a(507),U=a(508),D=a(501),S=a(505),j=a(499),O=a(62),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.postUser=function(){a.services.login(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement("h1",null,"Inicio de sesi\xf3n"),r.a.createElement(y.a,{placeholder:!0},r.a.createElement(U.a,{columns:2,relaxed:"very",stackable:!0},r.a.createElement(U.a.Column,null,r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Input,{icon:"user",iconPosition:"left",label:"Usuario",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Usuario"}),r.a.createElement(D.a.Input,{icon:"lock",iconPosition:"left",label:"Contrase\xf1a",placeholder:"Contrase\xf1a",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement(S.a,{type:"submit",content:"Login",primary:!0}))),r.a.createElement(U.a.Column,{verticalAlign:"middle"},r.a.createElement(S.a,{as:"a",href:"/signup",link:!0,content:"Registrarse",icon:"signup",size:"big"}))),r.a.createElement(j.a,{vertical:!0},"O")))}}]),t}(n.Component),k=a(510),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.postUser=function(){a.services.signup(a.state).then((function(e){a.setState({username:"",password:"",email:""}),a.props.setTheUser(e)})).catch((function(e){return console.log({err:e})})),console.log(a.props),a.props.history.push("/login")},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:"",email:""},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(k.a,{textAlign:"center",size:"huge"},"Registrarse"),r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Field,{required:!0},r.a.createElement("label",null,"Nombre de Usuario:"),r.a.createElement("input",{placeholder:"Nombre de usuario",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(D.a.Field,{required:!0},r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{placeholder:"Contrase\xf1a",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(D.a.Field,{required:!0},r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(D.a.Checkbox,{inline:!0,label:"Acepto los terminos y condiciones",required:!0}),r.a.createElement(S.a,{type:"submit"},"Registrarme")))}}]),t}(n.Component),x=function e(){var t=this;Object(s.a)(this,e),this.postDeal=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.getDealsApproved=function(){return t.service.get("/getDealsApproved").then((function(e){return e.data}))},this.getDealsPending=function(){return t.service.get("/getDealsPending").then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/profile"),withCredentials:!0})},A=function e(){var t=this;Object(s.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.handleUploadAvatar=function(e){return t.service.post("/upload/avatar",e).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/files"),withCredentials:!0})},L=a(76),F=a.n(L),N=a(104),T=a(17),P=a(46),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).finishAction=function(){a.props.closeModal()},a.postDeal=function(){a.ProfileServices.postDeal(a.state.deal).then((function(){return a.finishAction()})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({deal:Object(N.a)({},a.state.deal,Object(C.a)({},n,r))})},a.handleSubmit=function(e){e.preventDefault(),a.postDeal()},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),a.FilesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState({deal:Object(N.a)({},a.state.deal,{imageUrl:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.ProfileServices=new x,a.FilesServices=new A,a.state={deal:{name:"",category:"",description:"",imageUrl:"",externalUrl:"",price:"",author:a.props.loggedInUser._id}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{onSubmit:this.handleSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Nombre"),r.a.createElement(T.a.Control,{type:"text",name:"name",value:this.state.deal.name,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Categor\xeda"),r.a.createElement(T.a.Control,{as:"select",name:"category",onChange:this.handleChange,value:"Choose..."},r.a.createElement("option",null,"Elegir..."),r.a.createElement("option",null,"Monitores"),r.a.createElement("option",null,"Televisores"),r.a.createElement("option",null,"Port\xe1tiles")))," ",r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Descripci\xf3n"),r.a.createElement(T.a.Control,{as:"textarea",rows:"3",type:"text",name:"description",value:this.state.deal.description,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Precio"),r.a.createElement(T.a.Control,{type:"number",name:"price",value:this.state.deal.price,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Enlace externo"),r.a.createElement(T.a.Control,{type:"text",name:"externalUrl",value:this.state.deal.externalUrl,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null," Imagen ")," ",r.a.createElement(T.a.Control,{type:"file",name:"imageUrl",onChange:this.handleFileUpload})," "),r.a.createElement(P.a,{variant:"dark",type:"submit"}," ","Crear nuevo chollo!"," ")," ")}}]),t}(n.Component),M=(a(255),a(160)),R=a.n(M),G=a(161),z=a(49),B=a(63),H=a(115),q=a(45),V=a(198),Q=function(e){var t=e.name,a=(e.description,e.price),n=e.imageUrl,l=e._id,c=(e.likes,e.created_at),s=e.author;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,null,r.a.createElement(q.a,{className:"cardSpacing",border:"warning",style:{width:"18rem"}},r.a.createElement(q.a.Img,{variant:"top",className:"imgDeals rounded",src:"".concat(n)}),r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Title,null,t.length<35?"".concat(t):"".concat(t.substring(0,35),"...")),r.a.createElement(q.a.Text,null),r.a.createElement(q.a.Text,null,r.a.createElement("span",{style:{color:"orange"}},a,"\u20ac")," ",r.a.createElement("strike",{style:{color:"red"}},(1.15*a).toFixed(2),"\u20ac")),r.a.createElement(P.a,{as:"div",variant:"light",size:"sm"},r.a.createElement(h.b,{to:"/deals/".concat(l)},"Detalles"))),r.a.createElement(q.a.Footer,null,r.a.createElement(B.a,null,r.a.createElement(z.a,null,r.a.createElement(G.a,{as:"a",image:!0},r.a.createElement("img",{src:s.avatar}),s.username)),r.a.createElement(z.a,null,r.a.createElement(H.a,{className:"icons",src:R.a}),r.a.createElement("small",{className:"text-muted"},F()(c).subtract(6,"days").calendar())))))))},J=a(105),K=a(298),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).closeModal=function(){return a.setState({showmodal:!1})},a.openModal=function(){return a.setState({showmodal:!0})},a.getDealsApproved=function(){a.state.searchDeals="Aprobados",a.ProfServices.getDealsApproved().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.getDealsPending=function(){a.state.searchDeals="Pendientes",a.ProfServices.getDealsPending().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),a.FilesServices.handleUploadAvatar(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url)})).catch((function(e){return console.log(e)}))},a.state={deals:[],searchDeals:"",showmodal:!1},a.ProfServices=new x,a.FilesServices=new A,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(K.a,{circular:!0,name:"avatar",src:this.props.loggedInUser.avatar}),r.a.createElement(k.a.Content,null,"Bienvenido ",this.props.loggedInUser.username),r.a.createElement("small",null,"Miembro desde ",F()(this.props.loggedInUser.created_at).format("L"))),r.a.createElement(B.a,null,r.a.createElement("br",null),r.a.createElement("div",{class:"col-md-6"},r.a.createElement("ul",{class:"list-group"},r.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(h.b,{to:"#",onClick:this.openModal},"Crear nuevo chollo")),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(h.b,{to:"#",onClick:this.getDealsApproved},"Ver chollos publicados"),r.a.createElement("span",{className:"badge badge-primary badge-pill"},this.state.deals.length)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(h.b,{to:"#",onClick:this.getDealsPending},"Ver chollos pendientes de aprobacion"),r.a.createElement("span",{className:"badge badge-primary badge-pill"},"1")),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null," Cambiar Avatar ")," ",r.a.createElement(T.a.Control,{type:"file",name:"imageUrl",onChange:this.handleFileUpload})," ")))),r.a.createElement("div",{class:"col-md-6"},"Prueba")),r.a.createElement("div",{className:"row"},this.state.deals.map((function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(Q,Object.assign({key:e._id},e)))})))),r.a.createElement(J.a,{show:this.state.showmodal,onHide:this.closeModal},r.a.createElement(J.a.Body,null,r.a.createElement("h3",null,"Nuevo chollo"),r.a.createElement("hr",null),r.a.createElement(_,{loggedInUser:this.props.loggedInUser,closeModal:this.closeModal}))))}}]),t}(n.Component),W=function e(){var t=this;Object(s.a)(this,e),this.getAllDeals=function(){return t.service.get("/getAllDeals").then((function(e){return e.data}))},this.getFilterDeals=function(e){return t.service.post("/getFilterDeals",{input:e}).then((function(e){return e.data}))},this.getDealDetails=function(e){return t.service.get("/getOneDeal/".concat(e)).then((function(e){return e.data}))},this.getDealCreator=function(e){return t.service.get("/getDealCreator/".concat(e)).then((function(e){return e.data}))},this.giveLike=function(e){return t.service.get("/giveLike/".concat(e)).then((function(e){return e.data}))},this.giveDislike=function(e){return t.service.get("/giveDislike").then((function(e){return e.data}))},this.editDeal=function(e,a){return t.service.post("/edit/".concat(a),e).then((function(e){return e.data}))},this.deleteDeal=function(e){return t.service.post("/delete/".concat(e)).then((function(e){return e.data}))},this.getSimilarDeals=function(e){return t.service.post("/getSimilarDeals",{cat:e}).then((function(e){return e.data}))},this.changeDealStatus=function(e,a){return t.service.post("/changeDealStatus/".concat(e),{deal:a}).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/deals"),withCredentials:!0})},Z=function e(){var t=this;Object(s.a)(this,e),this.getDealsbyCategory=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/category"),withCredentials:!0})},Y=a(96),$=a(89),ee=a(506),te=a(504),ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target.value;a.setState({search:t},(function(){return a.props.dealFilter(a.state.search)}))},a.handleSubmit=function(e){e.preventDefault();var t=e.target.dataset.id;a.setState({search:t},(function(){return a.props.dealFilter(a.state.search)}))},a.state={search:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{expand:"lg",variant:"dark",className:"navbarSearch"},r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav",className:"between"},r.a.createElement(T.a,{inline:!0},r.a.createElement(Y.a,{type:"text",name:"search",onChange:this.handleChange,value:this.state.search,placeholder:"Buscar chollo!",className:"mr-sm-2"}),r.a.createElement(P.a,{variant:"outline-info",onClick:this.handleSubmit},"Search")),r.a.createElement(v.a,{className:"ml-center"},r.a.createElement($.a,{style:{margin:"0px 10px"}},r.a.createElement($.a.Toggle,{className:!0,variant:"info",id:"dropdown-basic"},"Categorias"),r.a.createElement($.a.Menu,null,r.a.createElement($.a.Item,{href:"/category/Port\xe1tiles"},"Port\xe1tiles"),r.a.createElement($.a.Item,{href:"/category/Televisores"},"Televisores"),r.a.createElement($.a.Item,{href:"/category/Tarjetas Gr\xe1ficas"},"Tarjetas Gr\xe1ficas")))),r.a.createElement(v.a,{className:"justify-content-end",style:{fontSize:"10px"}},r.a.createElement(ee.a.Group,{size:"tiny",color:"blue"},r.a.createElement(ee.a,null,r.a.createElement(ee.a.Value,null,this.props.dealsNumber),r.a.createElement(ee.a.Label,null,"Chollos")),r.a.createElement(ee.a,null,r.a.createElement(ee.a.Value,null,"22"),r.a.createElement(ee.a.Label,null,"Usuarios")))),r.a.createElement(v.a,null,r.a.createElement(te.a,{horizontal:!0},r.a.createElement(te.a.Item,null,r.a.createElement(K.a,{avatar:!0,src:"https://res.cloudinary.com/dpercx1rl/image/upload/v1583929813/deals/1%20%281%29.png.png"}),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Luis"),"Top Contributor")),r.a.createElement(te.a.Item,null,r.a.createElement(K.a,{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/christian.jpg"}),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Juan"),"Top Writter")),r.a.createElement(te.a.Item,null,r.a.createElement(K.a,{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/matt.jpg"}),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"David"),"Top Rated User"))))))}}]),t}(n.Component),ne=a(288),re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.match?a.getDealsbyCategory():a.getAllDeals()},a.getAllDeals=function(){a.DealServices.getAllDeals().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.getFilterDeals=function(e){a.DealServices.getFilterDeals(e).then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.getDealsbyCategory=function(){a.CategoryService.getDealsbyCategory(a.props.match.params.id).then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.state={deals:[]},a.DealServices=new W,a.CategoryService=new Z,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O.a,{style:{textAlign:"center"}},r.a.createElement(ae,{dealFilter:this.getFilterDeals,dealsNumber:this.state.deals.length}),this.state.deals.length?r.a.createElement(B.a,{style:{justifyContent:"center"}},this.state.deals.map((function(t){return r.a.createElement(Q,Object.assign({user:e.props.loggedInUser,key:t._id},t))}))):r.a.createElement(ne.a,{animation:"border",variant:"warning"}))}}]),t}(n.Component),le=function e(){var t=this;Object(s.a)(this,e),this.getAllComments=function(e){return t.service.post("/getAllComments/".concat(e)).then((function(e){return e.data}))},this.createComment=function(e){return t.service.post("/create-comment",e).then((function(e){return e.data}))},this.deleteComment=function(e){return t.service.post("/delete-comment",e).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://dealaday.herokuapp.com/api","/comments"),withCredentials:!0})},ce=(a(435),a(513)),se=a(70),ie=function(e){var t=e.name,a=e.price,n=e.imageUrl,l=e._id;e.likes,e.externalUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"item"},r.a.createElement("div",{class:"image"},r.a.createElement("img",{src:n})),r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"header"},t),r.a.createElement("div",{class:"meta"},r.a.createElement(ce.a,{icon:"star",defaultRating:3,maxRating:4})),r.a.createElement("span",{style:{color:"orange"}},a,"\u20ac"),r.a.createElement("br",null),r.a.createElement(S.a,{size:"mini",as:"a",href:"/deals/".concat(l),target:"_blank",basic:!0,color:"blue",animated:!0},r.a.createElement(S.a.Content,{visible:!0},"Ver"),r.a.createElement(S.a.Content,{hidden:!0},r.a.createElement(se.a,{name:"arrow right"}))))))},oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).finishAction=function(e){a.props.update(),a.props.closeModal()},a.editDeal=function(){a.DealServices.editDeal(a.state.deal,a.props.match.params.id).then((function(e){a.finishAction(e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({deal:Object(N.a)({},a.state.deal,Object(C.a)({},n,r))})},a.handleSubmit=function(e){e.preventDefault(),a.editDeal()},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),a.FilesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState({deal:Object(N.a)({},a.state.deal,{imageUrl:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.DealServices=new W,a.FilesServices=new A,a.state={deal:{name:a.props.deal.name,category:a.props.deal.category,description:a.props.deal.description,imageUrl:a.props.deal.imageUrl,externalUrl:a.props.deal.externalUrl,price:a.props.deal.price}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{onSubmit:this.handleSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Nombre"),r.a.createElement(T.a.Control,{type:"text",name:"name",value:this.state.deal.name,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Descripci\xf3n"),r.a.createElement(T.a.Control,{as:"textarea",rows:"3",type:"text",name:"description",value:this.state.deal.description,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Categor\xeda"),r.a.createElement(T.a.Control,{as:"select",name:"category",onChange:this.handleChange,value:this.state.deal.category},r.a.createElement("option",null,"Elegir..."),r.a.createElement("option",null,"Monitores"),r.a.createElement("option",null,"Televisores"),r.a.createElement("option",null,"Port\xe1tiles"))),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Imagen"),r.a.createElement(T.a.Control,{type:"text",name:"image",value:this.state.deal.imageUrl,onChange:this.handleChange}),r.a.createElement(T.a.Control,{type:"file",name:"imageUrl",onChange:this.handleFileUpload})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Precio"),r.a.createElement(T.a.Control,{type:"number",name:"price",value:this.state.deal.price,onChange:this.handleChange})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Enlace externo"),r.a.createElement(T.a.Control,{type:"text",name:"externalUrl",value:this.state.deal.externalUrl,onChange:this.handleChange})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a,{type:"submit",positive:!0},"Editar"),r.a.createElement(S.a.Or,null),r.a.createElement(S.a,null,"Cancelar")))}}]),t}(n.Component),ue=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).finishAction=function(){a.props.update(),a.setState({comment:{content:""}})},a.createComment=function(){a.CommentsServices.createComment(a.state.comment).then((function(){return a.finishAction()})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=(t.name,t.value);a.setState({comment:{author:a.props.user._id,deal:a.props.match.params.id,content:n}})},a.handleSubmit=function(e){e.preventDefault(),a.createComment()},a.CommentsServices=new le,a.state={comment:{author:a.props.user._id,deal:a.props.match.params.id,content:""}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{onSubmit:this.handleSubmit,reply:!0},r.a.createElement(D.a.TextArea,{onChange:this.handleChange,name:"content",value:this.state.comment.content,placeholder:"\xbfQue piensas?"}),r.a.createElement(S.a,{type:"submit",content:"Comentar",labelPosition:"left",icon:"edit",primary:!0}))}}]),t}(n.Component),me=a(503),de=0,he=new le,pe=function(e){var t=e._id,a=e.content,n=e.author,l=e.created_at,c=e.update,s=e.user;return r.a.createElement(me.a.Group,null,r.a.createElement(me.a,null,r.a.createElement(me.a.Avatar,{src:n.avatar}),r.a.createElement(me.a.Content,null,r.a.createElement(me.a.Author,{as:"a"},n.username),r.a.createElement(me.a.Metadata,null,F()(l).format("lll")," ",(s._id==n._id||"admin"==s.role)&&r.a.createElement(se.a,{"data-id":t,onClick:function(e){var t;de=e.target.dataset,t=de,he.deleteComment(t).then((function(){return c()})).catch((function(e){return console.log("ha ido mal",e)}))},circular:!0,name:"trash alternate outline",size:"small",className:"red users icon"})),r.a.createElement(me.a.Text,null,a," "),r.a.createElement(me.a.Actions,null,r.a.createElement(me.a.Action,null," ")))))},ge=a(162),Ee=a(511),fe=a(500),ve=a(502),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).closeModal=function(){return a.setState({showmodal:!1})},a.openModal=function(){return a.setState({showmodal:!0})},a.show=function(){return a.setState({open:!0})},a.handleConfirm=function(){a.DealServices.deleteDeal(a.props.match.params.id).then((function(){a.setState({open:!1}),a.props.history.push("/")}))},a.handleCancel=function(){return a.setState({open:!1})},a.componentDidMount=function(){a.getOneDeal(),a.getAllComments(),a.getSimilarDeals()},a.getOneDeal=function(){a.DealServices.getDealDetails(a.props.match.params.id).then((function(e){a.setState({deal:e}),a.getSimilarDeals()})).catch((function(e){return console.log(e)}))},a.getAllComments=function(){a.CommentServices.getAllComments(a.props.match.params.id).then((function(e){return a.setState({comments:e})})).catch((function(e){return console.log(e)}))},a.getSimilarDeals=function(){a.DealServices.getSimilarDeals(a.state.deal.category).then((function(e){for(var t=0;t<e.length;t++)e[t]._id==a.props.match.params.id&&e.splice(t,1);e.length>4&&e.splice(4,e.length),a.setState({similarDeals:e})})).catch((function(e){return console.log(e)}))},a.giveLike=function(){a.DealServices.giveLike(a.props.match.params.id).then((function(){return a.getOneDeal()}))},a.changeDealStatus=function(){var e="";e="pending"==a.state.deal.status?"active":"pending",a.DealServices.changeDealStatus(a.props.match.params.id,e).then((function(){return a.getOneDeal}))},a.state={deal:{},similarDeals:[],comments:[],showmodal:!1,open:!1},a.DealServices=new W,a.CommentServices=new le,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.Section,{as:"a",href:"/",link:!0},"Home"),r.a.createElement(Ee.a.Divider,null),r.a.createElement(Ee.a.Section,{as:"a",href:"/category/".concat(this.state.deal.category)},this.state.deal.category," "),r.a.createElement(Ee.a.Divider,null),r.a.createElement(Ee.a.Section,{active:!0},this.state.deal.name)),r.a.createElement(O.a,{className:"dealDescription"},r.a.createElement(B.a,null,r.a.createElement(z.a,{md:{span:6}},r.a.createElement(B.a,null,r.a.createElement(z.a,{style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{as:"div",labelPosition:"right"},r.a.createElement(S.a,{onClick:this.giveLike,color:"red"},r.a.createElement(se.a,{name:"heart"}),"Like"),r.a.createElement(G.a,{as:"a",basic:!0,color:"red",pointing:"left"},this.state.deal.likes&&this.state.deal.likes.length)),r.a.createElement(H.a,{className:"icons",src:R.a}),r.a.createElement("small",{className:"text-muted"},"3 mins ago"),r.a.createElement("h4",null,this.state.deal.name),r.a.createElement("span",{style:{color:"orange"}},this.state.deal.price,"\u20ac")," ",r.a.createElement("strike",{style:{color:"red"}},(1.15*this.state.deal.price).toFixed(2),"\u20ac"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{as:"a",href:this.state.deal.externalUrl,target:"_blank",basic:!0,color:"blue",animated:!0},r.a.createElement(S.a.Content,{visible:!0},"Llevame al chollo"),r.a.createElement(S.a.Content,{hidden:!0},r.a.createElement(se.a,{name:"arrow right"})))),r.a.createElement(z.a,null,r.a.createElement("img",{className:"rounded dealDescriptionImg",src:this.state.deal.imageUrl,alt:this.state.deal.title}),r.a.createElement(k.a,{textAlign:"center",size:"medium"},"Comp\xe1rtelo en las redes"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(S.a,{circular:!0,color:"facebook",icon:"facebook"}),r.a.createElement(S.a,{circular:!0,color:"twitter",icon:"twitter"}),r.a.createElement(S.a,{circular:!0,color:"youtube",icon:"youtube"}),r.a.createElement(S.a,{circular:!0,color:"instagram",icon:"instagram"})))),r.a.createElement(k.a,{as:"h3",dividing:!0},"Descripci\xf3n"),r.a.createElement("p",null,this.state.deal.description),r.a.createElement(k.a,{as:"h3",dividing:!0},"Comentarios"),this.state.comments.map((function(t){return r.a.createElement(pe,Object.assign({update:e.getAllComments,key:t._id},t,{user:e.props.loggedInUser}))})),this.props.loggedInUser?r.a.createElement(ue,Object.assign({update:this.getAllComments},this.props,{user:this.props.loggedInUser})):null,this.state.deal.video?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{as:"h3",dividing:!0},"Video Reviews:"),r.a.createElement(fe.a,{id:"eIw5b7VCIuU",placeholder:"https://i.ytimg.com/vi/eIw5b7VCIuU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC44fuQaNQ5fAr5JSiOyRlv0rpNXA",source:"youtube"})," "):null),r.a.createElement(z.a,{md:{span:5,offset:1}},r.a.createElement(k.a,{as:"h3",dividing:!0},"Quiz\xe1s te interese"),r.a.createElement("div",{class:"ui items"},this.state.similarDeals.map((function(t){return r.a.createElement(ie,Object.assign({user:e.props.loggedInUser,key:t._id},t))}))),"admin"===this.props.loggedInUser.role?r.a.createElement(ge.a,null,r.a.createElement(q.a,null,r.a.createElement(q.a.Header,null,r.a.createElement(ge.a.Toggle,{as:S.a,variant:"link",eventKey:"0"},"Admin Options")),r.a.createElement(ge.a.Collapse,{eventKey:"0"},r.a.createElement(q.a.Body,null,r.a.createElement(h.b,{to:"#",onClick:this.openModal},"Editar"),r.a.createElement("br",null),r.a.createElement(h.b,{to:"#",onClick:this.changeDealStatus},"Cambiar estado publicaci\xf3n"),r.a.createElement("br",null),r.a.createElement(h.b,{to:"#",onClick:this.show},"Eliminar"))))):null))),r.a.createElement(J.a,{show:this.state.showmodal,onHide:this.closeModal},r.a.createElement(J.a.Body,null,r.a.createElement("h3",null,"Editar chollo"),r.a.createElement("hr",null),r.a.createElement(oe,Object.assign({},this.props,{deal:this.state.deal,update:this.getOneDeal,loggedInUser:this.props.loggedInUser,closeModal:this.closeModal})))),r.a.createElement(ve.a,{className:"modalPop",open:this.state.open,header:"Confirmar borrado",content:"Al pulsar en aceptar, la oferta ser\xe1 eliminada y ser\xe1s redirigido a la p\xe1gina principal",cancelButton:"Cancelar",confirmButton:"Eliminar",onCancel:this.handleCancel,onConfirm:this.handleConfirm,size:"small"}))}}]),t}(n.Component),Ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"footerPos",bg:"warning",variant:"dark"},r.a.createElement(v.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/"},r.a.createElement("p",null,"\xa9 Deal a Day 2020 All Rights Reserved"))))}}]),t}(n.Component),ye=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({loggedInUser:t})})).catch((function(){return e.setState({loggedInUser:!1})}))},e.state={loggedInUser:!1},e.services=new E,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(re,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(d.b,{path:"/signup",render:function(t){return r.a.createElement(I,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(d.b,{path:"/login",render:function(t){return r.a.createElement(w,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(d.b,{path:"/profile",render:function(){return e.state.loggedInUser?r.a.createElement(X,{loggedInUser:e.state.loggedInUser}):r.a.createElement(d.a,{to:"/"})}}),r.a.createElement(d.b,{path:"/deals/:id",render:function(t){return r.a.createElement(be,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(d.b,{path:"/category/:id",render:function(t){return r.a.createElement(re,Object.assign({loggedInUser:e.state.loggedInUser},t))}})),r.a.createElement(Ce,null))}}]),t}(n.Component);a(488);c.a.render(r.a.createElement(h.a,null,r.a.createElement(ye,null)),document.getElementById("root"))}},[[308,1,2]]]);
//# sourceMappingURL=main.f2c6cfff.chunk.js.map