(function(){"use strict";var t={8973:function(t,e,r){var a=r(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},s=[],n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"nav-bar"}},[e("div",{staticClass:"bg-gray-800",attrs:{as:"nav"}},[e("div",{staticClass:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},[e("div",{staticClass:"relative flex h-16 items-center justify-between"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"}),e("div",{staticClass:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},[e("div",{staticClass:"hidden sm:ml-6 sm:block"},[e("div",{staticClass:"flex space-x-4"},[e("router-link",{staticClass:"text-white py-1",attrs:{to:"/",id:"products-link"}},[e("h1",[t._v("GARDEN FRESH")])]),e("router-link",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/products"}},[t._v("Products")]),t.loggedIn?e("router-link",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/"}},[e("button",{on:{click:t.logout}},[t._v("Logout")])]):e("router-link",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/signup"}},[t._v("SignUp")]),t.loggedIn?e("router-link",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/cart"}},[t._v("Shopping Cart")]):e("router-link",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/login"}},[t._v("LogIn")])],1)])])])])])])},i=[],l=(r(7658),{name:"NavBar",data(){return{loggedIn:!1}},methods:{logout(){localStorage.clear(),this.$router.push("/login"),this.$router.go()}},mounted(){let t=localStorage.getItem("user-info");t&&(this.loggedIn=!0)}}),d=l,u=r(1001),c=(0,u.Z)(d,n,i,!1,null,"6485a8f2",null),p=c.exports,m={name:"App",components:{NavBar:p}},g=m,f=(0,u.Z)(g,o,s,!1,null,null,null),v=f.exports,h=r(2631),x=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"page-wrap"}},[e("h1",[t._v("Shopping Cart")]),e("ProductsList",{attrs:{products:t.cartItems},on:{"remove-from-cart":function(e){return t.removeFromCart(e)}}}),e("h3",{attrs:{id:"total-price"}},[t._v("Total: ₹"+t._s(t.totalPrice))]),e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},[t._v("Proceed to Checkout")])],1)},y=[],b=r(6943),w=function(){var t=this,e=t._self._c;return t.products.length>0?e("div",t._l(t.products,(function(r){return e("ProductsListItem",{key:r.id,attrs:{product:r},on:{"remove-from-cart":function(e){return t.$emit("remove-from-cart",e)}}})})),1):e("p",[t._v("You haven't added anything to your cart yet!")])},_=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-container"},[e("img",{staticClass:"product-image",attrs:{src:t.product.imageUrl}}),e("div",{staticClass:"details-wrap"},[e("h3",[t._v(t._s(t.product.name))]),e("p",[t._v("Price: ₹"+t._s(t.product.price))]),e("p",[t._v("Quantity: "+t._s(t.product.quantity))])]),e("button",{staticClass:"remove-button bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",on:{click:function(e){return t.$emit("remove-from-cart",t.product.pid)}}},[t._v("Remove From Cart")])])},P=[],k={name:"ProductsListItem",props:["product"]},I=k,Z=(0,u.Z)(I,C,P,!1,null,"d700a21a",null),S=Z.exports,j={name:"ProductsList",props:["products"],components:{ProductsListItem:S}},N=j,$=(0,u.Z)(N,w,_,!1,null,null,null),L=$.exports,O={name:"CartPage",components:{ProductsList:L},data(){return{cartItems:[]}},computed:{totalPrice(){return this.cartItems.reduce(((t,e)=>t+Number(e.price)),0)}},methods:{async removeFromCart(t){const e=await b.Z["delete"](`/api/cart/${t}`);this.cartItems=e.data}},async created(){const t=await b.Z.get("/api/cart"),e=t.data;this.cartItems=e}},E=O,U=(0,u.Z)(E,x,y,!1,null,"9acfcb46",null),q=U.exports,F=function(){var t=this,e=t._self._c;return e("div",[t.product?e("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg",attrs:{id:"page-wrap"}},[e("img",{staticClass:"h-full w-full object-cover object-center lg:h-full lg:w-full m-auto",attrs:{src:t.product.imageUrl}}),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"flex justify-around"},[e("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.product.name))]),e("div",[e("h3",[t._v("₹"+t._s(t.product.price))]),e("p",[t._v(" "+t._s(t.product.quantity))])])]),e("p",{staticClass:"py-10 text-gray-700 text-base"},[t._v(" "+t._s(t.product.description)+" ")])]),e("div",[t.itemIsInCart||t.showSuccessMessage?t._e():e("button",{staticClass:"black-button text-white",attrs:{id:"add-to-cart"},on:{click:t.addToCart}},[t._v("Add to Cart")]),!t.itemIsInCart&&t.showSuccessMessage?e("button",{staticClass:"green-button",attrs:{id:"add-to-cart"}},[t._v("Succesfully Added to cart!")]):t._e(),t.itemIsInCart?e("button",{staticClass:"grey-button",attrs:{id:"add-to-cart"}},[t._v("Item already in cart!")]):t._e()])]):e("NotFoundPage")],1)},T=[],z=function(){var t=this;t._self._c;return t._m(0)},H=[function(){var t=this,e=t._self._c;return e("main",{staticClass:"grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8"},[e("div",{staticClass:"text-center"},[e("p",{staticClass:"text-base font-semibold text-indigo-600"},[t._v("404")]),e("h1",{staticClass:"mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"},[t._v("Page not found")]),e("p",{staticClass:"mt-6 text-base leading-7 text-gray-600"},[t._v("Sorry, we couldn’t find the page you’re looking for.")])])])}],A={name:"NotFoundPage"},M=A,B=(0,u.Z)(M,z,H,!1,null,"7880e0ce",null),D=B.exports,G={name:"ProductDetailPage",components:{NotFoundPage:D},data(){return{product:{},cartItems:[],showSuccessMessage:!1}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.pid===this.product.pid))}},methods:{async addToCart(){await b.Z.post("/api/cart",{productId:this.$route.params.id}),this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/products")}),1500)}},async created(){const t=await b.Z.get(`/api/products/${this.$route.params.id}`),e=t.data;this.product=e;const r=await b.Z.get("/api/cart");this.cartItems=r.data}},R=G,J=(0,u.Z)(R,F,T,!1,null,"793d5c99",null),Q=J.exports,W=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},[e("div",{staticClass:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},t._l(t.products,(function(r){return e("div",{key:r.pid,staticClass:"group relative"},[e("router-link",{attrs:{to:"/products/"+r.pid}},[e("div",[e("div",{staticClass:"min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"},[e("img",{staticClass:"h-full w-full object-cover object-center lg:h-full lg:w-full",attrs:{src:r.imageUrl,alt:"image"}})]),e("div",{staticClass:"mt-4 flex justify-between"},[e("div",[e("h3",{staticClass:"text-sm text-gray-700"},[e("a",{attrs:{href:r.href}},[t._v(" "+t._s(r.name)+" ")])]),e("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(t._s(r.quantity))])]),e("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("₹"+t._s(r.price))])])])]),e("button",{staticClass:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",on:{click:function(e){return t.addToCart(r.pid)}}},[t._v(" Add to Cart ")])],1)})),0)])])])},Y=[],K={name:"ProductsPage",components:{},data(){return{products:[]}},methods:{async addToCart(t){await b.Z.post(`/api/cart/${t}`,{productId:this.$route.params.id})}},async created(){const t=await b.Z.get("/api/products"),e=t.data;this.products=e}},V=K,X=(0,u.Z)(V,W,Y,!1,null,null,null),tt=X.exports,et=function(){var t=this,e=t._self._c;return e("div",[e("HomeComponent")],1)},rt=[],at=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},ot=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white"},[e("div",{staticClass:"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},[e("h2",{staticClass:"text-2xl font-bold tracking-tight text-gray-900"},[t._v("Hello User, Welcome to Garden Fresh")])])])}],st={__name:"HomeComponent",setup(t){return{__sfc:!0}}},nt=st,it=(0,u.Z)(nt,at,ot,!1,null,null,null),lt=it.exports,dt={name:"SignUp",components:{HomeComponent:lt}},ut=dt,ct=(0,u.Z)(ut,et,rt,!1,null,null,null),pt=ct.exports,mt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},[e("div",{staticClass:"w-full max-w-md space-y-8"},[t._m(0),e("div",{staticClass:"mt-8 space-y-6"},[e("div",{staticClass:"-space-y-px rounded-md shadow-sm"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{name:"name",type:"text",autocomplete:"name",required:"",placeholder:"Enter Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{name:"email",type:"email",autocomplete:"email",required:"",placeholder:"Enter Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{name:"password",type:"password",autocomplete:"current-password",required:"",placeholder:"Enter Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{name:"phone",type:"text",autocomplete:"phone",required:"",placeholder:"Enter Phone no."},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{name:"gender",type:"text",autocomplete:"gender",required:"",placeholder:"Enter Gender"},domProps:{value:t.gender},on:{input:function(e){e.target.composing||(t.gender=e.target.value)}}})])]),e("div",[e("button",{staticClass:"group relative flex w-full justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",attrs:{type:"submit"},on:{click:t.signUp}},[t._v(" Sign Up ")])])])])]),e("p",[t._v(t._s(t.error))])])},gt=[function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"},[t._v("Create an account ")])])}],ft={name:"SignUp",data(){return{name:"",email:"",password:"",phone:"",gender:"",error:""}},methods:{async signUp(){if(""==this.name)this.error="Name cannot be empty";else if(""==this.email)this.error="Email cannot be empty";else if(""==this.password)this.error="Password cannot be empty";else{let t=await b.Z.post("api/users",{email:this.email,password:this.password,name:this.name,gender:this.gender,phone:this.phone});201==t.status&&this.$router.push("/login")}}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push("/")}},vt=ft,ht=(0,u.Z)(vt,mt,gt,!1,null,null,null),xt=ht.exports,yt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},[e("div",{staticClass:"w-full max-w-md space-y-8"},[t._m(0),e("div",{staticClass:"mt-8 space-y-6"},[e("div",{staticClass:"-space-y-px rounded-md shadow-sm"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{id:"email-address",name:"email",type:"email",autocomplete:"email",required:"",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),e("div",[e("button",{staticClass:"group relative flex w-full justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",attrs:{type:"submit"},on:{click:t.login}},[t._v(" Log in ")])])])])]),e("p",[t._v(t._s(t.error))])])},bt=[function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"},[t._v("Log in to your account ")])])}],wt={name:"LogIn",data(){return{email:"",password:"",error:""}},methods:{async login(){let t={email:this.email,password:this.password},e=await b.Z.post("api/login",t);console.warn(e.data),"login failed"==e.data.title?this.error="Invalid Credentials":(localStorage.setItem("user-info",JSON.stringify(e.data.user)),this.error="",this.$router.push("/"),this.$router.go())}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push("/")}},_t=wt,Ct=(0,u.Z)(_t,yt,bt,!1,null,null,null),Pt=Ct.exports;a.ZP.use(h.ZP);const kt=[{path:"/products",name:"Products",component:tt},{path:"/products/:id",name:"ProductDetail",component:Q},{path:"/cart",name:"Cart",component:q},{path:"/",name:"HomePage",component:pt},{path:"*",name:"NotFoundPage",component:D},{path:"/signup",name:"SignUp",component:xt},{path:"/login",name:"LogIn",component:Pt}],It=new h.ZP({mode:"history",base:"/",routes:kt});var Zt=It;a.ZP.config.productionTip=!1,new a.ZP({router:Zt,render:t=>t(v)}).$mount("#app")}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],s=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(i=!1,s<n&&(n=s));if(i){t.splice(u--,1);var d=o();void 0!==d&&(e=d)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],i=a[1],l=a[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r)}for(e&&e(a);d<n.length;d++)s=n[d],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(8973)}));a=r.O(a)})();
//# sourceMappingURL=app.32ac5e27.js.map