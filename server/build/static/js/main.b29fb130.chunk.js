(this["webpackJsonpfood-reviewer"]=this["webpackJsonpfood-reviewer"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a(46)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(29),a(1)),s=a(2),l=a(4),u=a(3),h=(a(30),a(31),a(15)),m=a.n(h),d=a(22),p=a(6),v=(a(33),a(5)),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);return localStorage.getItem("initialLocation")&&localStorage.getItem("initialLocation"),n.state={term:"",location:"",initialLocation:""},n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(p.a)(n)),n.handleSearch=n.handleSearch.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),""===this.state.location?(this.setState({location:this.state.initialLocation}),this.props.history.push("/search?term=".concat(this.state.term,"&location=").concat(this.state.initialLocation))):this.props.history.push("/search?term=".concat(this.state.term,"&location=").concat(this.state.location))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSearch},r.a.createElement("div",{className:"BigSearchBar-fields"},r.a.createElement("input",{placeholder:"Search by business",onChange:this.handleTermChange}),r.a.createElement("input",{placeholder:"Enter location",onChange:this.handleLocationChange})),r.a.createElement("div",{className:"BigSearchBar-submit"},r.a.createElement("input",{type:"submit",value:"Search"}))))}},{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=9;break}return e.prev=1,e.next=4,navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude,n=e.coords.longitude;return fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=".concat("u5mrF79LEqZx7JFwOyifoKT2a3ILGvRE","&location=").concat(a,"%2C").concat(n,"&outFormat=json&thumbMaps=false")).then(f).then((function(e){var t=e.results[0].locations[0].adminArea5,a=e.results[0].locations[0].adminArea3,n=e.results[0].locations[0].adminArea1;return"".concat(t,", ").concat(a,", ").concat(n)})).then((function(e){t.setState({location:e,initialLocation:e}),localStorage.setItem("initialLocation",e)})).catch((function(e){return console.log(e),{}}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component);function f(e){if(!e.ok)throw Error(e.statusText);return e.json()}var b=Object(v.f)(g),E=a(11),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement("div",{className:"text-container"},r.a.createElement(E.b,{className:"text",to:"/",style:{textDecoration:"none"}},r.a.createElement("h1",null," dish "))),r.a.createElement(b,null))}}]),a}(r.a.Component),w=(a(39),a(40),a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=JSON.stringify(this.props.restaurant);localStorage.setItem("new-tab-data",t),window.open("/restaurant?id=".concat(this.props.restaurant.id),"_blank")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Restaurant"},r.a.createElement("div",{className:"image-container"},this.props.hasClick?r.a.createElement("img",{src:this.props.restaurant.imageUrl,alt:"",onClick:this.handleClick,className:"clickable-img"}):r.a.createElement("img",{src:this.props.restaurant.imageUrl,alt:""})),r.a.createElement("div",{className:"Info-text"},r.a.createElement("div",{className:"Restaurant-name"},this.props.hasClick?r.a.createElement("h1",{onClick:this.handleClick,className:"clickable-h1"}," ",this.props.restaurant.name):r.a.createElement("h1",null," ",this.props.restaurant.name)),r.a.createElement("div",{className:"Restaurant-info"},r.a.createElement("h4",null," ",this.props.restaurant.category),r.a.createElement("h3",null," ",this.props.restaurant.address1),r.a.createElement("h3",null," ",this.props.restaurant.city,", ",this.props.restaurant.state,", ",this.props.restaurant.zipCode)),r.a.createElement("div",{className:"Review-info"},r.a.createElement("h3",null," Average Yelp rating: ",this.props.restaurant.rating," "),r.a.createElement("h3",null," ",this.props.restaurant.reviewCount,"  reviews made"))))}}]),a}(r.a.Component)),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Restaurant-List"},this.props.restaurants.length>0?this.props.restaurants.slice(0,20).map((function(e){return r.a.createElement("div",null,r.a.createElement(w,{restaurant:e,key:e.id,hasClick:!0}))})):r.a.createElement("h1",null," No restaurants found. "))}}]),a}(r.a.Component),j="iQ8pmLEK2Wg8SRHRxvyuCf64FT9gNDJgVZruzws5XGLHpNl3X3reTymr9964LJQR1MqsX8JY0katxpNhDi2gJsPRtq7WEoJvYg2VFd-yYd7jsHFg2XuUAW-PnZrFXnYx";function S(e){if(!e.ok)throw Error(e.statusText);return e.json()}var O={search:function(e,t){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t),{headers:{Authorization:"Bearer ".concat(j)}}).then(S).then((function(e){return e.businesses?e.businesses.map((function(e){return{id:e.id,phone:e.phone,name:e.name,url:e.url,imageUrl:e.image_url,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,country:e.location.country,address:e.location.address1,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})):[]})).catch((function(e){return console.log(e),[]}))},searchById:function(e){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/".concat(e),{headers:{Authorization:"Bearer ".concat(j)}}).then(S).then((function(e){return{id:e.id,phone:e.phone,name:e.name,url:e.url,imageUrl:e.image_url,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,country:e.location.country,address:e.location.address1,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})).catch((function(e){return console.log(e),[]}))}};a(42);var k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r="";localStorage.getItem("initialLocation")&&(r=localStorage.getItem("initialLocation"));var i=window.location.search,c=new URLSearchParams(i),s="";c.has("term")&&(s=c.get("term"));var l="";return c.has("location")&&(l=c.get("location")),n.state={term:s,initialLocation:r,location:l},n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(p.a)(n)),n.handleSearch=n.handleSearch.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){e.preventDefault(),""===this.state.location?(this.setState({location:this.state.initialLocation}),this.props.history.push("/search?term=".concat(this.state.term,"&location=").concat(this.state.initialLocation))):this.props.history.push("/search?term=".concat(this.state.term,"&location=").concat(this.state.location)),window.location.reload(!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"SmallSearchBar-container"},r.a.createElement(E.b,{className:"logo-container",to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"logo-text"},r.a.createElement("h3",{id:"logo"}," d i s h "))),r.a.createElement("form",{className:"searchForm",onSubmit:this.handleSearch},r.a.createElement("div",null,r.a.createElement("input",{className:"SmallSearchBar-fields",placeholder:"Search by business",value:this.state.term,onChange:this.handleTermChange}),r.a.createElement("input",{className:"SmallSearchBar-fields",placeholder:"Enter location",value:this.state.location,onChange:this.handleLocationChange}),r.a.createElement("input",{className:"SmallSearchBar-submit",type:"submit",value:"Search"}))))}}]),a}(r.a.Component);var N=Object(v.f)(k),L=window.location.search,_=new URLSearchParams(L),R=_.get("term"),x=_.get("location"),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={restaurants:[],isLoading:!1},n.searchYelp=n.searchYelp.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"searchYelp",value:function(e,t){var a=this;O.search(e,t).then((function(e){a.setState({restaurants:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Search-results"},r.a.createElement(N,null),r.a.createElement("div",{className:"content"},this.state.isLoading?r.a.createElement("h1",null," Loading... "):r.a.createElement("div",null,r.a.createElement("h1",{id:"Header"}," Top results in ",x,":"),r.a.createElement(C,{restaurants:this.state.restaurants}))))}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),O.search(R,x).then((function(t){e.setState({restaurants:t,isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){}}]),a}(r.a.Component),D=(a(43),a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dish_name:"",dish_rating:"",dish_description:"",dish_img_path:"",user:"",errors:!1},n.handleNameChange=n.handleNameChange.bind(Object(p.a)(n)),n.handleUserChange=n.handleUserChange.bind(Object(p.a)(n)),n.handleRatingChange=n.handleRatingChange.bind(Object(p.a)(n)),n.handleDescriptionChange=n.handleDescriptionChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleNameChange",value:function(e){this.setState({dish_name:e.target.value})}},{key:"handleRatingChange",value:function(e){this.setState({dish_rating:e.target.value})}},{key:"handleDescriptionChange",value:function(e){this.setState({dish_description:e.target.value})}},{key:"handleUserChange",value:function(e){this.setState({user:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({errors:!1});var a=new Date,n=String(a.getDate()).padStart(2,"0"),r=String(a.getMonth()+1).padStart(2,"0"),i=a.getFullYear();a=i+"-"+r+"-"+n;var c={review_id:0,restaurant_id:this.props.restaurantId,user_id:this.state.user,review_date:a,dish_name:this.state.dish_name,dish_rating:this.state.dish_rating,dish_description:this.state.dish_description,dish_img_path:this.state.dish_img_path};fetch("/review",{method:"post",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return 200!=e.status&&t.setState({errors:!0}),e.json()})).then((function(e){t.state.errors||window.location.reload(!1)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Review-Form"},r.a.createElement("h1",null,"Review a dish!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{id:"name",placeholder:"Name of dish",onChange:this.handleNameChange}),r.a.createElement("input",{id:"user",placeholder:"Your name",onChange:this.handleUserChange}),r.a.createElement("input",{id:"rating",placeholder:"Rating (out of 5)",onChange:this.handleRatingChange}),r.a.createElement("textarea",{id:"description",placeholder:"How was it?",onChange:this.handleDescriptionChange})),r.a.createElement("div",null,r.a.createElement("input",{id:"submit",type:"submit",value:"Post"}),this.state.errors&&r.a.createElement("h4",null,"Error in submitting form"))))}}]),a}(r.a.Component)),B=(a(45),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Review"},r.a.createElement("h1",null,this.props.review.dish_name,": ",this.props.review.dish_rating),r.a.createElement("h3",null,this.props.review.dish_description),r.a.createElement("h4",null,this.props.review.user_id,", ",this.props.review.review_date.slice(0,10)))}}]),a}(r.a.Component)),T=window.location.search,U=new URLSearchParams(T).get("id"),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=localStorage.getItem("new-tab-data");if(r){console.log("foundin local storage");var i=JSON.parse(r);n.state={restaurant:i,isLoading:!1,reviews:[]},localStorage.removeItem("new-tab-data")}else n.state={restaurant:"",isLoading:!1,reviews:[]};return n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Review-page"},r.a.createElement(N,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Form-display"},r.a.createElement(D,{restaurantId:U})),r.a.createElement("div",{className:"Restaurant-display"},this.state.isLoading?r.a.createElement("h1",null," Loading... "):r.a.createElement(w,{restaurant:this.state.restaurant,hasClick:!1}))),this.state.reviews.length?this.state.reviews.map((function(e){return r.a.createElement(B,{review:e,key:e.review_id})})):r.a.createElement("h1",{id:"none"},"Be the first to review a dish!"))}},{key:"componentDidMount",value:function(){var e=this;""===this.state.restaurant&&(this.setState({isLoading:!0}),O.searchById(U).then((function(t){e.setState({restaurant:t,isLoading:!1})}))),fetch("/review/restaurantId/".concat(U)).then((function(e){return e.json()})).then((function(t){e.setState({reviews:t.reverse()})})).catch((function(e){return console.log(e)}))}}]),a}(r.a.Component),A=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SidePage"},r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("p",null,"A website to review dishes from restaurants. See what to order at your next outing!"),r.a.createElement("p",null," Website made by Daniel Liu, undergraduate Yale 2023. App utilizes Yelp API and MapQuest API."),r.a.createElement("p",null," Please see the contact page for questions/suggestions. "))))}}]),a}(r.a.Component)),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SidePage"},r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("p",null," You can reach me through: "),r.a.createElement("ul",null,r.a.createElement("li",null,"dclliu@gmail.com"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dclliu",target:"_blank"},"LinkedIn"))))))}}]),a}(r.a.Component),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/about"},r.a.createElement(A,null)),r.a.createElement(v.a,{path:"/contact"},r.a.createElement(P,null)),r.a.createElement(v.a,{path:"/search"},r.a.createElement(I,null)),r.a.createElement(v.a,{path:"/restaurant"},r.a.createElement(Y,null)),r.a.createElement(v.a,{exact:!0,path:"/"}," ",r.a.createElement(y,null)," ")),r.a.createElement("div",{className:"footer"},r.a.createElement("h4",null,"2020 Daniel Liu"),r.a.createElement("div",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.b,{to:"about"}," About ")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"contact"},"Contact"))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b29fb130.chunk.js.map