(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(t,e,a){},64:function(t,e,a){},65:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(31),s=a.n(c),i=a(2),o=a(6),l=a(7),h=a(9),d=a(8),j=a(4),p=a.n(j),u=p.a.create({baseURL:"https://art-for-all-app.herokuapp.com",withCredentials:!0});function b(t){if(t.response.data)throw console.log(t.response&&t.response.data),t;throw t}var g={service:u,signup:function(t){return u.post("/api/auth/signup",t).then((function(t){return t.data})).catch(b)},signin:function(t){return u.post("/api/auth/signin",t).then((function(t){return t.data})).catch(b)},isLoggedIn:function(){return u.get("/api/auth/isLoggedIn").then((function(t){return t.data})).catch(b)},logout:function(){return u.get("/api/auth/logout").then((function(t){return t.data})).catch(b)},getItems:function(){return u.get("/api/items").then((function(t){return t.data})).catch(b)}},m=r.a.createContext(),O=a(0),x=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={user:null,isLoggedIn:!1,isLoading:!0},t.setUser=function(e){t.setState({user:e,isLoggedIn:!0})},t.removeUser=function(){t.setState({user:null,isLoggedIn:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;g.isLoggedIn().then((function(e){t.setState({user:e,isLoggedIn:!0,isLoading:!1})})).catch((function(e){t.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var t={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(O.jsx)(m.Provider,{value:t,children:this.props.children})}}]),a}(n.Component),f=a(3),v=a(15),y=function(t){return function(e){return Object(O.jsx)(m.Consumer,{children:function(a){return Object(O.jsx)(t,Object(v.a)(Object(v.a)({},e),{},{context:a}))}})}},k=(a(58),y((function(t){var e=t.context;return console.log("PROPS",t),Object(O.jsxs)("nav",{className:"NavMain",children:[Object(O.jsx)(i.c,{exact:!0,to:"/",children:Object(O.jsx)("img",{className:"logo-nav",src:"https://res.cloudinary.com/dyhiaws3n/image/upload/v1617196271/logo-art-for-all_p07xa6.png",alt:"art for all logo"})}),Object(O.jsx)(i.c,{exact:!0,to:"/",children:Object(O.jsx)("h3",{className:"gallery",children:"Home"})}),Object(O.jsx)("div",{className:"gallery",children:Object(O.jsx)(i.c,{exact:!0,to:"/artworks",children:Object(O.jsx)("h3",{className:"gallery",children:"Gallery"})})}),e.isLoggedIn&&Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("h3",{children:Object(O.jsx)(i.c,{to:"/profile",children:e.user&&e.user.firstName})}),Object(O.jsx)("h3",{className:"logout",onClick:function(){g.logout().then((function(){e.removeUser()})).catch((function(t){console.log(t)}))},children:"Logout"})]}),!e.isLoggedIn&&Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("h3",{children:Object(O.jsx)(i.c,{to:"/signin",children:"Log in"})}),Object(O.jsx)("h3",{children:Object(O.jsx)(i.c,{to:"/signup",children:"Create account"})})]})]})}))),w=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={gallery:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://art-for-all-app.herokuapp.com/api/artworks").then((function(e){t.setState({gallery:e.data}),console.log("THIS.STATE.GALLERY:"),console.log(t.state.gallery)})).catch((function(t){console.log(t)}))}},{key:"randomizeArtwork",value:function(t){var e=Math.floor(t.length*Math.random());console.log("randomIndex:"),console.log(e);var a=t[e];return console.log("randomArtwork :"),console.log(a),a&&console.log(a.pictureUrl),a}},{key:"render",value:function(){console.log("STATE :",this.state);var t=this.randomizeArtwork(this.state.gallery);return console.log("this.state.gallery"),console.log(this.state.gallery),console.log("randomPiece :"),console.log(t),Object(O.jsxs)("div",{className:"home-page-container",children:[Object(O.jsxs)("div",{className:"home-page-child",children:[Object(O.jsx)("h2",{children:"About Art for All"}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"art-share-text",children:[" ","Art is a passion that everyone should share."]}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"At Art for All, our goal is to make that possible. New and experienced artists alike are invited to showcase their art here, at prices that the average art lover can afford."}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"home-page-button",children:Object(O.jsx)(i.b,{to:"/artworks",children:"GALLERY"})})]}),Object(O.jsxs)("div",{className:"home-page-child",children:[Object(O.jsx)("h2",{children:"We recommend"}),Object(O.jsx)("div",{children:t&&Object(O.jsx)(i.b,{to:"/artworks",children:Object(O.jsx)("img",{src:t.pictureUrl,alt:t.title})})})]})]})}}]),a}(r.a.Component),N=a(14),C=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={email:"",password:""},t.handleChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(N.a)({},a,n))},t.handleSubmit=function(e){e.preventDefault(),g.signin(t.state).then((function(e){t.props.context.setUser(e)})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"render",value:function(){return this.props.context.user?Object(O.jsx)(f.a,{to:"/"}):Object(O.jsx)("div",{className:"sign-up-in-container",children:Object(O.jsxs)("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{className:"sign-up-in-fields",htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",id:"email",name:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{className:"sign-up-in-fields",htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",id:"password",name:"password"}),Object(O.jsx)("button",{className:"button",children:"Submit"})]})})}}]),a}(n.Component),A=Object(f.g)(y(C)),S=function(t){return Object(O.jsx)(A,{})},U=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={email:"",password:"",firstName:""},t.handleChange=function(e){var a=e.target.value,n=e.target.name;t.setState(Object(N.a)({},n,a))},t.handleSubmit=function(e){e.preventDefault(),g.signup(t.state).then((function(e){t.props.context.setUser(e)})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"render",value:function(){return this.props.context.user?Object(O.jsx)(f.a,{to:"/"}):Object(O.jsx)("div",{className:"sign-up-in-container",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.firstName,type:"text",id:"firstName",name:"firstName"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"}),Object(O.jsx)("button",{className:"button",children:"Submit"})]})})}}]),a}(n.Component),D=Object(f.g)(y(U)),F=function(t){return Object(O.jsx)(D,{})},I=a(34),L=y((function(t){var e=t.component,a=t.context,n=Object(I.a)(t,["component","context"]);return a.isLoading?null:a.isLoggedIn?Object(O.jsx)(f.b,Object(v.a)(Object(v.a)({},n),{},{render:function(t){return Object(O.jsx)(e,Object(v.a)({},t))}})):Object(O.jsx)(f.a,{to:"/signin"})})),E=a(33),T=y(function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={purchasedArts:[],createdArts:[]},t.deleteArtwork=function(e){console.log(e),p.a.delete("https://art-for-all-app.herokuapp.com"+"/api/artworks/".concat(e)).then((function(a){console.log(a.data);var n=Object(E.a)(t.state.createdArts).filter((function(t){return t._id!==e}));t.setState({createdArts:n})})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://art-for-all-app.herokuapp.com/api/myhistory/purchasedArt",{withCredentials:!0}).then((function(e){console.log(e.data),t.setState({purchasedArts:e.data})})).catch((function(t){console.log(t)})),p.a.get("https://art-for-all-app.herokuapp.com/api/myhistory/createdArt",{withCredentials:!0}).then((function(e){console.log(e.data),t.setState({createdArts:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return console.log(this.props.context),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"add-artwork-button",children:Object(O.jsx)(i.b,{to:"/artworks/create",children:"Add artwork"})}),Object(O.jsxs)("div",{className:"history-container",children:[Object(O.jsxs)("div",{className:"history-child",children:[Object(O.jsx)("h1",{children:"PURCHASED ARTS"})," ",this.state.purchasedArts.map((function(t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[" ",t.purchasedArt[0].title]}),Object(O.jsx)("img",{className:"history-painting-image",src:t.purchasedArt[0].pictureUrl,alt:t.purchasedArt[0].title})]},t._id)}))]}),Object(O.jsxs)("div",{className:"history-child",children:[Object(O.jsx)("h1",{children:"CREATED ARTS"})," ",this.state.createdArts.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:e.title}),Object(O.jsx)("img",{className:"history-painting-image",src:e.pictureUrl,alt:e.title}),Object(O.jsx)("button",{className:"button",children:Object(O.jsx)(i.b,{to:"/artworks/edit/".concat(e._id),children:"Edit"})}),Object(O.jsx)("button",{className:"button",onClick:function(){return t.deleteArtwork(e._id)},children:"Delete"})]},e._id)}))]})]})]})}}]),a}(n.Component)),R=y((function(t){var e=t.context;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Hello ",e.user.firstName,"!"]}),Object(O.jsx)("div",{children:Object(O.jsx)(T,{})})]})})),M=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={artistName:"",pictureUrl:"",title:"",description:"",larg:0,lng:0,price:0},t.handleChange=function(e){var a=e.target.name;t.setState(Object(N.a)({},a,e.target.value))},t.handleImage=function(e){var a=e.target.files[0];console.log(a),t.setState({pictureUrl:a})},t.handleSubmit=function(e){e.preventDefault(),console.log("handle submit is working");var a=new FormData;a.append("artistName",t.state.artistName),a.append("pictureUrl",t.state.pictureUrl),a.append("title",t.state.title),a.append("description",t.state.description),a.append("larg",t.state.larg),a.append("lng",t.state.lng),a.append("price",t.state.price),p.a.post("https://art-for-all-app.herokuapp.com/api/artworks/",a,{withCredentials:!0}).then((function(e){t.props.history.push("/profile")})).catch((function(e){console.log(e),t.setState({message:e.response.data.message})}))},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("form",{onSubmit:this.handleSubmit,enctype:"multipart/form-data",children:Object(O.jsxs)("div",{className:"create-edit-container",children:[Object(O.jsx)("h1",{children:" Add an artpiece "}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"artistName",children:"Artist Name:"}),Object(O.jsx)("input",{id:"artistName",onChange:this.handleChange,value:this.state.artistName,name:"artistName",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"pictureUrl",children:"Image"}),Object(O.jsx)("input",{id:"pictureUrl",name:"pictureUrl",onChange:this.handleImage,type:"file"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"title",children:"Artwork Title:"}),Object(O.jsx)("input",{id:"title",onChange:this.handleChange,value:this.state.title,name:"title",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{id:"description",onChange:this.handleChange,value:this.state.description,name:"description",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"larg",children:"Width"}),Object(O.jsx)("input",{id:"larg",onChange:this.handleChange,value:this.state.larg,name:"larg",type:"number"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"lng",children:"Height"}),Object(O.jsx)("input",{id:"lng",onChange:this.handleChange,value:this.state.lng,name:"lng",type:"number"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"price",children:"Price"}),Object(O.jsx)("input",{id:"price",onChange:this.handleChange,value:this.state.price,name:"price",type:"number"})]}),Object(O.jsx)("button",{children:"Submit"})]})})}}]),a}(n.Component),P=Object(f.g)(M),_=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={gallery:[]},t.deleteArtwork=function(e){console.log(e),p.a.delete("https://art-for-all-app.herokuapp.com"+"/api/artworks/".concat(e)).then((function(a){console.log(a.data);var n=t.state.gallery.filter((function(t){return t._id!==e}));t.setState({gallery:n})})).catch((function(t){console.log(t)}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://art-for-all-app.herokuapp.com/api/artworks",{withCredentials:!0}).then((function(e){t.setState({gallery:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"gallery-page-title",children:"Art Gallery"}),Object(O.jsx)("div",{className:"gallery-container-single-artpiece",children:this.state.gallery.map((function(t){return Object(O.jsxs)("div",{className:"gallery-single-artpiece",children:[Object(O.jsx)(i.b,{to:"/artworks/".concat(t._id),children:Object(O.jsx)("img",{src:t.pictureUrl,alt:""})}),Object(O.jsx)("p",{className:"gallery-art-title",children:t.title}),Object(O.jsxs)("p",{className:"gallery-page-artist",children:["By ",t.artistName]}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{className:"button",children:Object(O.jsx)(i.b,{to:"/artworks/".concat(t._id),children:"Details"})})})]},t._id)}))})]})}}]),a}(r.a.Component);var H=Object(f.g)(y((function(t){var e,a,n,c=t.context;console.log("HIDDEN BUTTON PROPS",t),t.context.user&&(a=t.creator,n=t.context.user._id,console.log("FROM HIDDEN BUTTONS userId :",n),console.log("FROM HIDDEN BUTTONS creator :",a),e=n===a?(console.log("As you see ^ , They are the same"),!0):(console.log("They are not the same"),!1));return console.log("context.user :",c.user),Object(O.jsx)("div",{children:Object(O.jsxs)(r.a.Fragment,{children:[e&&Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"You put this item for sale."}),Object(O.jsx)("button",{className:"button",children:Object(O.jsx)(i.b,{to:"/artworks/edit/".concat(t.id),children:"Edit"})}),Object(O.jsx)("button",{className:"button",onClick:function(){return e=t.id,console.log("ID FROM DELETE:",e),console.log("Deleting..."),void p.a.delete("https://art-for-all-app.herokuapp.com"+"/api/artworks/".concat(e)).then((function(e){console.log("FROM DELETE PROPS :",t),t.history.push("/profile")})).catch((function(t){console.log(t)}));var e},children:"Delete"})]}),!e&&Object(O.jsx)("p",{children:"Another user put this item for sale. Consider buying it!"})]})})}))),B=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={artwork:null},t.handleClick=function(e){console.log("click"),console.log(e);var a=t.props.match.params.id;console.log(a),p.a.post("https://art-for-all-app.herokuapp.com"+"/api/onepiece/".concat(a),{},{withCredentials:!0}).then((function(e){t.props.history.push("/artworks/purchased")})).catch((function(e){console.log(e),t.setState({message:e.response.data.message})}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;p.a.get("https://art-for-all-app.herokuapp.com"+"/api/artworks/".concat(e)).then((function(e){t.setState({artwork:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return console.log("FROM ONEPIECE this.state.artwork :",this.state.artwork),null===this.state.artwork?Object(O.jsx)("div",{children:"Loading..."}):Object(O.jsx)("div",{className:"single-container-single-artpiece",children:Object(O.jsxs)("div",{className:"single-artpiece-child",children:[Object(O.jsx)("img",{src:this.state.artwork.pictureUrl,alt:this.state.artwork.title}),Object(O.jsx)("h2",{className:"single-page-title",children:this.state.artwork.title}),Object(O.jsxs)("p",{className:"single-page-artist",children:["By ",this.state.artwork.artistName]}),Object(O.jsx)("p",{className:"single-page-description",children:this.state.artwork.description}),Object(O.jsxs)("p",{className:"single-page-description",children:["Dimensions: width ",this.state.artwork.dimensions[1]," cm, height"," ",this.state.artwork.dimensions[0]," cm"]}),Object(O.jsxs)("p",{className:"single-page-description",children:[this.state.artwork.price," \u20ac"]}),Object(O.jsx)("button",{className:"button",onClick:this.handleClick,children:"BUY"}),Object(O.jsx)(H,{id:this.state.artwork._id,creator:this.state.artwork.creator})]})})}}]),a}(r.a.Component),G=Object(f.g)(B),W=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={artistName:"",pictureUrl:"",title:"",description:"",larg:0,lng:0,price:0},t.handleSubmit=function(e){e.preventDefault();var a=t.props.match.params.id,n=new FormData;n.append("artistName",t.state.artistName),n.append("pictureUrl",t.state.pictureUrl),n.append("title",t.state.title),n.append("description",t.state.description),n.append("larg",t.state.larg),n.append("lng",t.state.lng),n.append("price",t.state.price),p.a.patch("https://art-for-all-app.herokuapp.com"+"/api/artworks/edit/".concat(a),n,{withCredentials:!0}).then((function(e){t.props.history.push("/profile")})).catch((function(t){console.log(t)}))},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(N.a)({},n,r))},t.handleImage=function(e){var a=e.target.files[0];console.log(a),t.setState({pictureUrl:a})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props);var e=this.props.match.params.id;p.a.get("https://art-for-all-app.herokuapp.com"+"/api/artworks/".concat(e),{withCredentials:!0}).then((function(e){var a=e.data;t.setState({artistName:a.artistName,pictureUrl:a.pictureUrl,title:a.title,description:a.description,larg:a.dimensions[1],lng:a.dimensions[0],price:a.price})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"create-edit-container",children:[Object(O.jsx)("h1",{children:" Edit your artwork "}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,enctype:"multipart/form-data",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"artistName",children:"Artist Name:"}),Object(O.jsx)("input",{id:"artistName",onChange:this.handleChange,value:this.state.artistName,name:"artistName",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"pictureUrl",children:"Image"}),Object(O.jsx)("input",{id:"pictureUrl",name:"pictureUrl",onChange:this.handleImage,type:"file"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"title",children:"Artwork Title:"}),Object(O.jsx)("input",{id:"title",onChange:this.handleChange,value:this.state.title,name:"title",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{id:"description",onChange:this.handleChange,value:this.state.description,name:"description",type:"text"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"larg",children:"Width"}),Object(O.jsx)("input",{id:"larg",onChange:this.handleChange,value:this.state.larg,name:"larg",type:"number"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"lng",children:"Height"}),Object(O.jsx)("input",{id:"lng",onChange:this.handleChange,value:this.state.lng,name:"lng",type:"number"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"price",children:"Price"}),Object(O.jsx)("input",{id:"price",onChange:this.handleChange,value:this.state.price,name:"price",type:"number"})]}),Object(O.jsx)("button",{className:"button",children:"Submit"})]})]})}}]),a}(n.Component),Y=Object(f.g)(W),z=function(){return Object(O.jsxs)("div",{className:"buy-confirmation-container",children:[Object(O.jsx)("h1",{children:"Thank you!"}),Object(O.jsx)("p",{children:"We appreciate your purchase."}),Object(O.jsx)("p",{children:"The artist will be in touch soon with shipping details."}),Object(O.jsxs)("p",{children:[Object(O.jsx)(i.c,{exact:!0,to:"/profile",children:Object(O.jsx)("h3",{children:"Back to your profile"})}),Object(O.jsx)(i.c,{exact:!0,to:"/artworks",children:Object(O.jsx)("h3",{children:"See the Gallery"})})]})]})};var J=Object(f.g)((function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(k,{}),Object(O.jsxs)(f.d,{children:[Object(O.jsx)(f.b,{exact:!0,path:"/",component:w}),Object(O.jsx)(f.b,{exact:!0,path:"/signin",component:S}),Object(O.jsx)(f.b,{exact:!0,path:"/signup",component:F}),Object(O.jsx)(f.b,{exact:!0,path:"/artworks/create",component:P}),Object(O.jsx)(f.b,{exact:!0,path:"/artworks/edit/:id",component:Y}),Object(O.jsx)(f.b,{exact:!0,path:"/artworks",component:_}),Object(O.jsx)(f.b,{exact:!0,path:"/artworks/purchased",component:z}),Object(O.jsx)(L,{exact:!0,path:"/artworks/:id",component:G}),Object(O.jsx)(L,{exact:!0,path:"/profile",component:R})]})]})}));a(64),a(65);s.a.render(Object(O.jsx)(i.a,{children:Object(O.jsx)(x,{children:Object(O.jsx)(J,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d0b5eee6.chunk.js.map