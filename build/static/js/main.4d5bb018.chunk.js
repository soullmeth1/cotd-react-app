(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a(67),c=a(68),o=a(69),l=a(12),u=a(5),h=a(6),m=a(7),p=a(8);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.addToOrder(e.props.index)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.fish,t=e.image,a=e.name,n=e.desc,s=e.price,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},d(s))),r.a.createElement("p",null,n),r.a.createElement("button",{disabled:!i,onClick:this.handleClick},i?"Add To Cart":"Sold Out"))}}]),a}(n.Component),b=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},y=a(15),E=a.n(y),O=a(22),j=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).name=r.a.createRef(),e.price=r.a.createRef(),e.status=r.a.createRef(),e.desc=r.a.createRef(),e.image=r.a.createRef(),e.createFish=function(t){var a={name:e.name.current.value,price:e.price.current.value,status:e.status.current.value,desc:e.desc.current.value,image:e.image.current.value};t.preventDefault(),e.props.addFish(a),t.currentTarget.reset()},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{ref:this.name,type:"text",name:"name",placeholder:"Name"}),r.a.createElement("input",{ref:this.price,type:"text",name:"price",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.status,id:"status"},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{ref:this.desc,name:"desc",id:"desc"}),r.a.createElement("input",{ref:this.image,type:"text",name:"image",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"Add Fish"))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=t.currentTarget.name,n={[a]:"price"===a?Number(t.currentTarget.value):t.currentTarget.value};e.props.updateFish(e.props.index,n)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.fish,a=e.index,n=e.removeFish;return r.a.createElement("form",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:t.name,onChange:this.handleChange}),r.a.createElement("input",{type:"number",name:"price",placeholder:"Price",value:t.price,onChange:this.handleChange}),r.a.createElement("select",{name:"status",value:t.status,onChange:this.handleChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",value:t.desc,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"image",placeholder:"Image",value:t.image,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",onClick:function(){return n(a)}},"Remove Fish"))}}]),a}(n.Component),w=a(16),S=a.n(w),F=S.a.initializeApp({apiKey:"AIzaSyDCZ-VkkshocTUM5HyrpQyErlrombrTvHg",authDomain:"catch-of-the-day-a8059.firebaseapp.com",projectId:"catch-of-the-day-a8059",storageBucket:"catch-of-the-day-a8059.appspot.com",messagingSenderId:"537737760177",appId:"1:537737760177:web:b7fff871c001df32b84190",measurementId:"G-6HM5480T9L"}),C=F.database(),N=F.auth(),x=new S.a.auth.GoogleAuthProvider,I=new S.a.auth.GithubAuthProvider,T=new S.a.auth.FacebookAuthProvider,A=C,D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleLogOut=function(){N.signOut().then((function(e){return console.log("logging out",e)})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login First!"),r.a.createElement("button",{onClick:function(){return e.props.authenticate("Gighub")},className:"github"},"Login With Github"),r.a.createElement("button",{onClick:function(){return e.props.authenticate("Google")},className:"twitter"},"Login With Google"),r.a.createElement("button",{onClick:function(){return e.props.authenticate("Facebook")},className:"facebook"},"Login With Facebook"))}}]),a}(n.Component),G=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(O.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.ref("".concat(e.props.storeId)).once("value");case 2:return t.next=4,t.sent.toJSON();case 4:if((n=t.sent).owner){t.next=8;break}return t.next=8,A.ref("".concat(e.props.storeId,"/owner")).set(a.user.uid);case 8:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){N.signInWithPopup("Facebook"===t?T:"Github"===t?I:x).then(e.authHandler)},e.logout=Object(O.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this.props,t=e.fishes,a=e.addFish,n=e.updateFish,s=e.removeFish,i=e.loadSampleFishes,c=r.a.createElement("button",{onClick:this.logout},"Sign Out");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, You are not the valid owner!"),c):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),c,Object.keys(t).map((function(e){return r.a.createElement(k,{key:e,index:e,removeFish:s,updateFish:n,fish:t[e]})})),r.a.createElement(j,{addFish:a}),r.a.createElement("button",{onClick:i},"Load Sample Fishes")):r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{authenticate:this.authenticate}))}}]),a}(n.Component),L=a(17),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(L.TransitionGroup,{className:"order",component:"ul"},t.map((function(t){var a=e.props.fishes[t],n=e.props.order[t],s="available"===(null===a||void 0===a?void 0:a.status);return a?s?r.a.createElement(L.CSSTransition,{key:t,classNames:"order",timeout:{enter:250,exit:250}},r.a.createElement("li",{key:t},r.a.createElement(L.TransitionGroup,{component:"span",className:"count"},r.a.createElement(L.CSSTransition,{key:n,classNames:"count",timeout:{enter:20050,exit:20050}},r.a.createElement("span",null,n))," lbs ".concat(a.name," ").concat(d(n*a.price))),r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"\xd7"))):r.a.createElement("li",{key:t},"Sorry, ",a?a.name:"fish"," is no longer available."):null}))),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,d(a))))}}]),a}(n.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},H=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(l.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:P})},e.addToOrder=function(t){var a=Object(l.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:Object(l.a)({},a)})},e.removeFromOrder=function(t){var a=Object(l.a)({},e.state.order);delete a[t],e.setState({order:Object(l.a)({},a)})},e.updateFish=function(t,a){e.setState({fishes:Object(l.a)({},e.state.fishes,{[t]:Object(l.a)({},e.state.fishes[t],{},a)})})},e.removeFish=function(t){var a=Object(l.a)({},e.state.fishes);delete a[t],e.setState({fishes:a})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a=localStorage.getItem(t.storeId);a&&this.setState({order:JSON.parse(a)}),A.ref("".concat(t.storeId,"/fishes")).on("value",(function(t){var a=t.val();a&&e.setState({fishes:a})}))}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;Object.keys(this.state.fishes).length&&A.ref("".concat(e.storeId,"/fishes")).set(this.state.fishes),localStorage.setItem(e.storeId,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t,a){return r.a.createElement(g,{key:t,index:t,fish:e.state.fishes[t],addToOrder:e.addToOrder})})))),r.a.createElement(M,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(G,{addFish:this.addFish,removeFish:this.removeFish,updateFish:this.updateFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId}))}}]),a}(r.a.Component);var R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},J=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{ref:this.myInput,type:"text",required:!0,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store"))}}]),a}(r.a.Component);var W=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:J}),r.a.createElement(o.a,{path:"/store/:storeId",component:H}),r.a.createElement(o.a,{component:R})))};a(61);Object(s.render)(r.a.createElement(W,null),document.getElementById("main"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4d5bb018.chunk.js.map