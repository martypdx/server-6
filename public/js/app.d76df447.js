(function(e){function t(t){for(var o,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0086":function(e,t,n){},"034f":function(e,t,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"0a4b":function(e,t,n){},1950:function(e,t,n){},"1c84":function(e,t,n){"use strict";var o=n("6edd"),r=n.n(o);r.a},"1da8":function(e,t,n){"use strict";var o=n("1950"),r=n.n(o);r.a},2803:function(e,t,n){},"297c":function(e,t,n){e.exports=n.p+"img/bacon-heart.b99cc1ed.jpg"},"2d60":function(e,t,n){},"2ea9":function(e,t,n){"use strict";var o=n("6cde"),r=n.n(o);r.a},"2fe3":function(e,t,n){"use strict";var o=n("90e6"),r=n.n(o);r.a},3661:function(e,t,n){"use strict";var o=n("ef3b"),r=n.n(o);r.a},"555a":function(e,t,n){e.exports=n.p+"img/icon.d2eece8f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{user:e.user,onSignOut:e.handleSignOut}}),n("RouterView",{attrs:{updateCoreData:e.updateCoreData,workoutSet:e.workoutSet,programSet:e.programSet,movements:e.movements,muscles:e.muscles,muscleMovements:e.muscleMovements,user:e.user,onUser:e.handleUser,handleAddLog:e.handleAddLog,handleAddWorkout:e.handleAddWorkout,handleRemoveWorkout:e.handleRemoveWorkout,handleRemoveExercise:e.handleRemoveExercise,handleUpdateLog:e.handleUpdateLog}}),n("Footer")],1)},a=[],i=(n("7f7f"),n("ac6a"),"/api"),c="".concat(i,"/auth"),u="".concat(i,"/movements"),l="".concat(i,"/programs"),d="".concat(i,"/me/workouts"),m="".concat(i,"/me/logs"),f="".concat(i,"/muscles");function h(e){return e.ok?e.json():e.json().then(function(e){throw e.error})}var p="";function v(){var e={"Content-Type":"application/json"};return p&&(e["Authorization"]=p),e}function g(e){return fetch("".concat(c,"/signup"),{method:"POST",headers:v(),body:JSON.stringify(e)}).then(h).then(function(e){return b(e),e})}function _(e){return fetch("".concat(c,"/signin"),{method:"POST",headers:v(),body:JSON.stringify(e)}).then(h).then(function(e){return b(e),e})}function b(e){p=e.id,window.localStorage.setItem("user",JSON.stringify(e))}function w(){p="",window.localStorage.removeItem("user")}function k(){var e=window.localStorage.getItem("user");if(!e)return null;var t=JSON.parse(e);return p=t.id,t}function x(){return fetch(f,{headers:v()}).then(h)}function y(){return fetch(u,{headers:v()}).then(h)}function S(){return fetch(l,{headers:v()}).then(h)}function C(){return fetch(d,{headers:v()}).then(h)}function O(e){return fetch(d,{method:"POST",headers:v(),body:JSON.stringify(e)}).then(h)}function A(e){return fetch(d,{method:"DELETE",headers:v(),body:JSON.stringify(e)}).then(h)}function E(e){return fetch(m,{method:"POST",headers:v(),body:JSON.stringify(e)}).then(h)}function L(e){return fetch(m,{method:"PUT",headers:v(),body:JSON.stringify(e)}).then(h)}function U(e){return fetch(m,{method:"DELETE",headers:v(),body:JSON.stringify(e)}).then(h)}var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("RouterLink",{staticClass:"branding",attrs:{to:"/"}}),n("div",{staticClass:"center"},[n("h1",[e._v("Maximum Intensity")]),n("nav",[n("RouterLink",{staticClass:"nav",attrs:{to:"/"}},[e._v("Home")]),n("RouterLink",{staticClass:"nav",attrs:{to:"/about"}},[e._v("About")]),e.user?n("RouterLink",{staticClass:"nav",attrs:{to:"/dashboard"}},[e._v("Dashboard")]):e._e(),e.user?e._e():n("RouterLink",{staticClass:"nav",attrs:{to:"/auth"}},[e._v("Sign In")]),e.user?n("a",{staticClass:"nav",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.onSignOut(t)}}},[e._v("Sign Out")]):e._e()],1)]),e.user?n("p",{attrs:{id:"current-user"}},[e._v("User: "+e._s(e.user.email))]):e._e()],1)},R=[],j={props:{user:Object,onSignOut:Function}},W=j,F=(n("ef2b"),n("2877")),T=Object(F["a"])(W,M,R,!1,null,"669ae518",null);T.options.__file="Header.vue";var $=T.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",[o("img",{attrs:{alt:"logo",src:n("555a")}}),o("p",[e._v("© Team BigCat - 2018")])])}],D={},I=D,J=(n("90f4"),Object(F["a"])(I,N,P,!1,null,"2041d673",null));J.options.__file="Footer.vue";var H=J.exports,K={name:"app",components:{Header:$,Footer:H},data:function(){return{user:null,workoutSet:[],programSet:[],movements:[],muscles:[],muscleMovements:{}}},created:function(){this.user=k(),this.updateCoreData()},computed:{selectedMuscleMovements:function(){return null}},methods:{handleUser:function(e){this.user=e},handleSignOut:function(){w(),this.user=null,this.$router.push("/")},getMuscleMovements:function(){var e=this;this.muscles.forEach(function(t){e.muscleMovements[t.name]=[]}),this.movements.forEach(function(t){e.muscleMovements[t.muscle].push(t)}),console.log("MUSCLE MOVEMENTS",this.muscleMovements)},updateCoreData:function(){var e=this;this.loading=!0,this.error=null,C().then(function(t){e.workoutSet=t,console.log("WORKOUT SET",e.workoutSet),e.loading=!1}).catch(function(t){e.error=t.message,e.loading=!1}),S().then(function(t){e.programSet=t,console.log("PROGRAM SET",e.programSet),e.loading=!1}).catch(function(t){e.error=t.message,e.loading=!1}),y().then(function(t){e.movements=t,console.log("MOVEMENTS",e.movements),e.loading=!1}).then(function(){x().then(function(t){e.muscles=t,console.log("MUSCLES",e.muscles),e.loading=!1}).then(function(){e.getMuscleMovements()})}).catch(function(t){e.error=t.message,e.loading=!1})},handleAddWorkout:function(e){var t=this;O(e).then(function(e){console.log("getback",e)}).then(function(){C().then(function(e){t.workoutSet=e,console.log("WORKOUT SET",t.workoutSet),t.loading=!1}).catch(function(e){t.error=e.message,t.loading=!1})}),console.log("workout added")},handleRemoveWorkout:function(e){var t=this;confirm("Are you sure you want to remove the workout on ".concat(e.date,"?"))&&A({id:e.id}).then(function(){C().then(function(e){t.workoutSet=e,console.log("WORKOUT SET",t.workoutSet),t.loading=!1}).catch(function(e){t.error=e.message,t.loading=!1})})},handleRemoveExercise:function(e){var t=this;if(confirm("Are you sure you want to remove this exercise?")){var n=[];e.forEach(function(e){n.push(U({id:e}))}),Promise.all(n).then(function(){C().then(function(e){t.workoutSet=e,console.log("WORKOUT SET",t.workoutSet),t.loading=!1}).catch(function(e){t.error=e.message,t.loading=!1})})}},handleAddLog:function(e){var t=this;E(e).then(function(){C().then(function(e){t.workoutSet=e,console.log("WORKOUT SET",t.workoutSet),t.loading=!1}).catch(function(e){t.error=e.message,t.loading=!1})})},handleRemoveLog:function(e){if(confirm("Are you sure you want to remove this log?"))return console.log("removing log with id",e),U(e)},handleUpdateLog:function(e){var t=this;return L(e).then(function(){C().then(function(e){t.workoutSet=e,console.log("WORKOUT SET",t.workoutSet),t.loading=!1}).catch(function(e){t.error=e.message,t.loading=!1})})}}},V=K,B=(n("034f"),Object(F["a"])(V,s,a,!1,null,null,null));B.options.__file="App.vue";var G=B.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e.user?e._e():n("h2",{staticClass:"center"},[n("router-link",{staticClass:"call-to-action",attrs:{to:"/auth"}},[e._v("Get Started")])],1),e.user?n("h2",{staticClass:"center"},[n("router-link",{staticClass:"call-to-action",attrs:{to:"/dashboard"}},[e._v("Get After It")])],1):e._e()])},z=[],Y={props:{user:Object},data:function(){return{proof:"\n        \n      "}}},Q=Y,X=(n("f112"),Object(F["a"])(Q,q,z,!1,null,"34bc91ae",null));X.options.__file="Home.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",[e._v("About")]),n("p",[e._v("\n    The Starting Strength System makes use of the body's most basic movement patterns – barbell exercises that involve all the body’s muscle mass – utilized over the longest effective range of motion and loaded progressively, to force the adaptations necessary for increased strength.\n  ")]),n("p",[e._v("\n    Unlike other popular exercise protocols, Starting Strength is a training system – a long-term process designed for getting stronger over time, not a random collection of exercises that just make you hot, sweaty, sore, confused, and tired today.\n  ")])])}],ne={},oe=ne,re=(n("a7bf"),Object(F["a"])(oe,ee,te,!1,null,"25c1082c",null));re.options.__file="About.vue";var se=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.label))]),n("button",{on:{click:function(t){e.type=e.isSignUp?"signIn":"signUp"}}},[e._v("\n    "+e._s(e.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up")+"\n  ")]),n("div",{staticClass:"auth-form"},[n("pre",[e._v(e._s(e.error))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("FormControl",{attrs:{label:"email"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"email-input",domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),n("FormControl",{attrs:{label:"password"}},["checkbox"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.password)?e._i(e.credentials.password,null)>-1:e.credentials.password},on:{change:function(t){var n=e.credentials.password,o=t.target,r=!!o.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);o.checked?a<0&&e.$set(e.credentials,"password",n.concat([s])):a>-1&&e.$set(e.credentials,"password",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.credentials,"password",r)}}}):"radio"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:e._q(e.credentials.password,null)},on:{change:function(t){e.$set(e.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:e.show?"text":"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){e.show=!e.show}}},[e._v("\n          "+e._s(e.show?"Hide":"Show")+"\n        ")])]),n("FormControl",[n("button",{attrs:{type:"submit"}},[e._v("\n          "+e._s(e.label)+"\n        ")])])],1)])])},ie=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-control"},[n("label",[e._v("\n    "+e._s(e.label)+"\n  ")]),n("div",[e._t("default")],2)])},ue=[],le={props:{label:String}},de=le,me=(n("d872"),Object(F["a"])(de,ce,ue,!1,null,null,null));me.options.__file="FormControl.vue";var fe=me.exports,he={props:{onUser:Function,updateCoreData:Function},components:{FormControl:fe},data:function(){return{credentials:{email:"",password:""},show:!1,type:"signIn",error:null}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},watch:{type:function(e,t){e!==t&&(this.error=null)}},methods:{handleSubmit:function(){var e=this;this.error=null;var t=this.isSignUp?g:_;t(this.credentials).then(function(t){e.onUser(t),e.updateCoreData(),console.log(t),e.$router.push("/dashboard")}).catch(function(t){e.error=t})}}},pe=he,ve=(n("7d67"),Object(F["a"])(pe,ae,ie,!1,null,"39ac4623",null));ve.options.__file="Auth.vue";var ge=ve.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"users"},[e.users?n("ul",{staticClass:"list"},e._l(e.users,function(e,t){return n("User",{key:t,attrs:{user:e}})})):n("p",[e._v("Loading users...")])])},be=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("div",{staticClass:"title"},[n("h3",[e._v("User: "+e._s(e.user.email))])])])},ke=[],xe={props:{user:Object}},ye=xe,Se=(n("1da8"),Object(F["a"])(ye,we,ke,!1,null,"0e6693ea",null));Se.options.__file="User.vue";var Ce=Se.exports,Oe={data:function(){return{users:null}},created:function(){},components:{User:Ce}},Ae=Oe,Ee=(n("2ea9"),Object(F["a"])(Ae,_e,be,!1,null,"3c726578",null));Ee.options.__file="Users.vue";var Le=Ee.exports,Ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Me=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("h2",[e._v("You are now logged out!")]),o("p",{staticClass:"center"},[e._v("\n    It was nice to see you! Don't forget about your goals!\n  ")]),o("img",{attrs:{src:n("297c")}})])}],Re={data:function(){return{proof:"\n        \n      "}}},je=Re,We=(n("dda5"),Object(F["a"])(je,Ue,Me,!1,null,"5f023d74",null));We.options.__file="Logout.vue";var Fe=We.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",{staticClass:"dashboard-title"},[e._v("Add A New Workout")]),n("AddWorkout",{attrs:{programSet:e.programSet,handleAddWorkout:e.handleAddWorkout}}),n("div",{staticClass:"workout-cards"},[n("h2",{staticClass:"dashboard-title"},[e._v("Workout List")]),n("ul",e._l(e.workoutSet,function(t,o){return n("WorkoutCard",{key:o,staticClass:"workout-card",attrs:{workout:t,movements:e.movements,muscles:e.muscles,muscleMovements:e.muscleMovements,exercises:t.exercises,handleAddLog:e.handleAddLog,handleAddWorkout:e.handleAddWorkout,handleRemoveWorkout:e.handleRemoveWorkout,handleRemoveExercise:e.handleRemoveExercise,handleUpdateLog:e.handleUpdateLog}})}))])],1)},$e=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"workout-card"},[n("div",{staticClass:"card-header"},[n("p",{staticClass:"date"},[e._v(e._s(e.workoutDate.toLocaleString()))]),n("button",{staticClass:"remove-workout",on:{click:e.onWorkoutRemove}},[e._v("x")])]),n("AddExercise",{attrs:{movements:e.movements,muscles:e.muscles,workout:e.workout,muscleMovements:e.muscleMovements,handleAddLog:e.handleAddLog}}),e._l(e.exercises,function(t,o){return n("ExerciseCounter",{key:o,attrs:{exercise:t,workout:e.workout,workoutIndex:o,handleRemoveExercise:e.handleRemoveExercise,handleUpdateLog:e.handleUpdateLog}})})],2)},Pe=[],De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"add-exercise"},[n("FormControl",{attrs:{label:"Add Exercise"}},[n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Muscles"}},[e.muscleMovements?n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMuscle,expression:"selectedMuscle"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedMuscle=t.target.multiple?n:n[0]}}},e._l(e.muscles,function(t){return n("option",{key:t.id},[e._v("\n            "+e._s(t.name)+"\n          ")])})):e._e()]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Movements"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMovement,expression:"selectedMovement"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedMovement=t.target.multiple?n:n[0]}}},e._l(e.muscleMovements[this.selectedMuscle],function(t){return n("option",{key:t.id,attrs:{movement:t,name:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Sets"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.sets,expression:"sets"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sets=t.target.multiple?n:n[0]}}},e._l([1,2,3,4,5,6,7,8,9,10],function(t){return n("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Reps"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"reps"}],staticClass:"pulldown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.reps=t.target.multiple?n:n[0]}}},e._l([1,2,3,4,5,6,7,8,9,10],function(t){return n("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}))]),n("FormControl",{staticClass:"exercise-selector",attrs:{label:"Weight"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{id:"weight",required:""},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}})])],1),n("button",{on:{click:function(t){return t.preventDefault(),e.onExerciseAdd(t)}}},[e._v("Add")])],1)},Ie=[],Je=(n("7514"),{props:{movements:Array,muscles:Array,muscleMovements:Object,workout:Object,handleAddLog:Function},components:{FormControl:fe},data:function(){return{selectedMuscle:"abdominals",selectedMovement:null,sets:null,reps:null,weight:null}},methods:{onExerciseAdd:function(){var e=this,t={workout_id:this.workout.id,movement_id:this.movements.find(function(t){return t.name===e.selectedMovement}).id,attempted:this.reps,completed:0,weight:this.weight};console.log("adding log...",t,"for",this.sets,"number of times");for(var n=0;n<this.sets;n++)this.handleAddLog(t)}}}),He=Je,Ke=(n("9bd8"),Object(F["a"])(He,De,Ie,!1,null,null,null));Ke.options.__file="AddExercise.vue";var Ve=Ke.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(e._s(e.exercise.movement.toUpperCase()))]),n("div",{staticClass:"set"},e._l(e.exercise.sets,function(t,o){return n("LogButton",{key:o,attrs:{set:t,handleUpdateLog:e.handleUpdateLog,index:o}})})),n("button",{staticClass:"remove-exercise",on:{click:e.onExerciseRemove}},[e._v("x")])])},Ge=[],qe=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"set__checkbox",class:{set__checkbox__completed:!this.bubbleDark},on:{click:function(t){e.onLogUpdate(e.index)}}},[e._v(" \n  "+e._s(e.bubbleVal)+"\n\n")])}),ze=[],Ye={props:{handleUpdateLog:Function,set:Object,index:Number},computed:{setList:function(){return this.workout.exercises[this.workoutIndex].sets},bubbleVal:function(){return 0===this.set.completed?this.set.attempted:this.set.completed===this.set.attempted?0:this.set.attempted-this.set.completed},bubbleDark:function(){return this.set.completed!==this.set.attempted}},methods:{markAsCompleted:function(e){console.log("i will mark a log as completed","index is",e)},onLogUpdate:function(){console.log("index",this.index),this.set.completed<this.set.attempted?this.set.completed++:this.set.completed===this.set.attempted&&(this.set.completed=0);var e={id:this.set.logId,attempted:this.set.attempted,completed:this.set.completed,weight:this.set.weight};console.log(this.set),this.handleUpdateLog(e)}}},Qe=Ye,Xe=(n("b15f"),Object(F["a"])(Qe,qe,ze,!1,null,null,null));Xe.options.__file="LogButton.vue";var Ze=Xe.exports,et={components:{LogButton:Ze},props:{exercise:Object,workout:Object,workoutIndex:Number,handleRemoveExercise:Function,handleUpdateLog:Function},computed:{setList:function(){return this.workout.exercises[this.workoutIndex].sets}},methods:{onExerciseRemove:function(){var e=[];this.setList.forEach(function(t){return e.push(t.logId)}),this.handleRemoveExercise(e)}}},tt=et,nt=(n("9949"),Object(F["a"])(tt,Be,Ge,!1,null,null,null));nt.options.__file="ExerciseCounter.vue";var ot=nt.exports,rt={props:{movements:Array,muscles:Array,muscleMovements:Object,exercises:Array,workout:Object,handleAddLog:Function,handleRemoveExercise:Function,handleUpdateLog:Function,handleRemoveWorkout:Function},components:{AddExercise:Ve,ExerciseCounter:ot},computed:{workoutDate:function(){return new Date(this.workout.date)}},methods:{onWorkoutRemove:function(){this.handleRemoveWorkout(this.workout)}}},st=rt,at=(n("1c84"),Object(F["a"])(st,Ne,Pe,!1,null,null,null));at.options.__file="WorkoutCard.vue";var it=at.exports,ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-workout"},[n("form",[n("FormControl",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedProgram,expression:"selectedProgram"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedProgram=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v("No Template")]),e._l(e.programSet,function(t){return n("option",{key:t.id+t.name,attrs:{program:t,name:t.name},domProps:{value:t.id}},[e._v("\n              "+e._s(t.name)+"\n        ")])})],2)]),n("button",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.onWorkoutAdd(t)}}},[e._v("Begin Workout")])],1)])},ut=[],lt={props:{handleAddWorkout:Function,programSet:Array},components:{FormControl:fe},data:function(){return{selectedProgram:""}},methods:{onWorkoutAdd:function(){var e=this.selectedProgram?this.programFinder(this.selectedProgram).id:null;console.log("Id is ",e),console.log("going to api",JSON.stringify({id:e})),this.handleAddWorkout({id:e})},programFinder:function(e){return this.programSet.find(function(t){return t.id=e})}}},dt=lt,mt=(n("3661"),Object(F["a"])(dt,ct,ut,!1,null,"59d2cfa8",null));mt.options.__file="AddWorkout.vue";var ft=mt.exports,ht={props:{workoutSet:Array,programSet:Array,movements:Array,muscles:Array,muscleMovements:Object,handleAddLog:Function,handleAddWorkout:Function,handleRemoveExercise:Function,handleRemoveLog:Function,handleUpdateLog:Function,handleRemoveWorkout:Function},created:function(){},components:{WorkoutCard:it,AddWorkout:ft}},pt=ht,vt=(n("2fe3"),Object(F["a"])(pt,Te,$e,!1,null,null,null));vt.options.__file="Dashboard.vue";var gt=vt.exports,_t=new r["a"]({routes:[{path:"/",component:Z},{path:"/about",component:se},{path:"/dashboard",component:gt},{path:"/auth",component:ge},{path:"/users",component:Le},{path:"/logout",component:Fe},{path:"*",redirect:"/"}]});n("db43");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].component("RouterLink",o["a"].component("router-link")),o["a"].component("RouterView",o["a"].component("router-view")),new o["a"]({router:_t,render:function(e){return e(G)}}).$mount("#app")},"6cde":function(e,t,n){},"6edd":function(e,t,n){},"6f4f":function(e,t,n){},"7d67":function(e,t,n){"use strict";var o=n("ad9d"),r=n.n(o);r.a},"90e6":function(e,t,n){},"90f4":function(e,t,n){"use strict";var o=n("0a4b"),r=n.n(o);r.a},"96d6":function(e,t,n){},9949:function(e,t,n){"use strict";var o=n("cf24"),r=n.n(o);r.a},"9bd8":function(e,t,n){"use strict";var o=n("96d6"),r=n.n(o);r.a},a7bf:function(e,t,n){"use strict";var o=n("0086"),r=n.n(o);r.a},ad9d:function(e,t,n){},b15f:function(e,t,n){"use strict";var o=n("2803"),r=n.n(o);r.a},bec0:function(e,t,n){},c21b:function(e,t,n){},c9b6:function(e,t,n){},cf24:function(e,t,n){},d872:function(e,t,n){"use strict";var o=n("2d60"),r=n.n(o);r.a},db43:function(e,t,n){},dda5:function(e,t,n){"use strict";var o=n("c9b6"),r=n.n(o);r.a},ef2b:function(e,t,n){"use strict";var o=n("bec0"),r=n.n(o);r.a},ef3b:function(e,t,n){},f112:function(e,t,n){"use strict";var o=n("6f4f"),r=n.n(o);r.a}});
//# sourceMappingURL=app.d76df447.js.map