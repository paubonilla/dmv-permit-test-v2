(this["webpackJsonpdmv-permit-test"]=this["webpackJsonpdmv-permit-test"]||[]).push([[0],{15:function(e,t,n){e.exports=n(24)},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(7),a=n.n(r),s=(n(20),n(1)),l=n(2);function u(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return u=function(){return e},e}function h(){var e=Object(s.a)(["\n  padding: 3rem 0;\n"]);return h=function(){return e},e}function c(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n      list-style: none;\n  }\n"]);return c=function(){return e},e}function d(){var e=Object(s.a)(["\n  position: absolute;\n  padding: 3rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return d=function(){return e},e}function f(){var e=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  margin: 0 auto;\n"]);return f=function(){return e},e}var g=l.a.div(f()),w=l.a.div(d()),p=l.a.div(c()),y=Object(l.a)(p)(h()),m=l.a.div(u()),v=(n(23),n(11)),b=n(12),k=n(14),q=n(13),E=[{id:0,question:"You should increase the distance between your vehicle and the vehicle ahead when you:",options:["Are following a small passenger vehicle.","Are being tailgated by another driver.","Are driving more slowly than the posted speed limit."],answer:"Are being tailgated by another driver."},{id:1,question:"In which of the following scenarios should your wheels not be pointed straight ahead?",options:["When waiting to make a left turn at a traffic light.","When parked on a hill or sloping driveway.","When parked on the side of a level roadway where there is no curb."],answer:"When parked on a hill or sloping driveway."},{id:2,question:"If a truck or bus is making a right turn where you also need to make a right turn, you should:",options:["Quickly turn before the truck or bus is able to.","Wait until the truck or bus turns before you turn.","Squeeze between the truck or bus and the curb."],answer:"Wait until the truck or bus turns before you turn."},{id:3,question:"\n        When being followed by a tailgater, which of the following will help you avoid being hit from behind?",options:["Merging into another lane","Decreasing your following distance","Changing lanes frequently"],answer:"Decreasing your following distance"},{id:4,question:"When you see this sign, you:",options:["Are approaching a railroad crossing and should prepare to stop.","Will always stop at the upcoming railroad crossing.","Should stop and wait for a signal before crossing the railroad tracks."],answer:"Are approaching a railroad crossing and should prepare to stop."},{id:5,question:"When driving under snowy or icy conditions:",options:["It is safe to use your cruise control.","Make speed and directional changes more gradually than you would otherwise.","Drive as you would under normal conditions."],answer:"Make speed and directional changes more gradually than you would otherwise."},{id:6,question:"A broken yellow centerline means that:",options:["Passing is not permitted.","Passing on the right is permitted when the way ahead is clear.","Passing on the left is permitted when the way ahead is clear."],answer:"Passing on the left is permitted when the way ahead is clear."},{id:7,question:"When driving in fog, rain, or snow, use:",options:["Low beams.","High beams.","Fog lights only."],answer:"Low beams."},{id:8,question:"\n        Which of these statements is true about changing lanes?",options:["You only need to turn and look over your right shoulder for lane changes to the right or left.","Look over your right shoulder for a right lane change and your left shoulder for a left lane change.","Vehicles with two outside mirrors do not have blind spots."],answer:"Look over your right shoulder for a right lane change and your left shoulder for a left lane change."},{id:9,question:"It is illegal for a person 21 years of age or older to drive with a blood alcohol concentration (BAC) that is ___ or higher...",options:[".08%",".10%",".05%"],answer:".08%"},{id:10,question:"You must notify the DMV within 5 days if..",options:["Sell or transfer your vehicle","Are cited for traffic violation","Paint your vehicle a different color"],answer:"Sell or transfer your vehicle"},{id:11,question:"At dawn or dusk, or in rain or snow, it can be hard to see and be seen. A good way to let other drivers know you are there is to turn...",options:["Up the instrument panel lights","On your parking lights","On your headlights"],answer:"On your headlights"},{id:12,question:"When changing lanes on a freeway, you should..",options:["Signal for at least 5 seconds","Slow down before you start to change lanes","Assume there is enough space for your vehicle, if you signal first"],answer:"Assume there is enough space for your vehicle, if you signal first"},{id:13,question:"You are driving in a city street and see an emergency vehicle with flashing lights behind you. What do you do?",options:["Drive to the right edge of the road and slow down","Drive to the right edge of the road and stop","Stay in you lane, slow down, and let it pass"],answer:"Drive to the right edge of the road and stop"},{id:14,question:"Large trucks turning right onto a street with two lanes in each direction...",options:["May complete their turn in either the left or right lane","Often have to use part of the left lane to complete the turn","Must stay in the right lane at all times"],answer:"Often have to use part of the left lane to complete the turn"},{id:15,question:"You are driving on a one-way street. You may turn left onto another one-way street:",options:["Only if a sign permits the turn","If traffic on the street is moving to the left","If traffic on the street is moving to the right"],answer:"If traffic on the street is moving to the left"},{id:16,question:"You want to pass a bicyclist riding on the edge of your lane, You:",options:["Must Honk your horn before passing the bicyclist","Must not squeeze past the bicyclist","Must not pass the bicyclist for any reason"],answer:"Must not squeeze past the bicyclist"},{id:17,question:"You should not start across an intersection if you know you will block the intersection when the light turns red:",options:["Under any circumstances","Unless you entered the intersection on a yellow light","Unless you entered the intersection on a green light"],answer:"Under any circumstances"},{id:18,question:"",options:[""],answer:""},{id:19,question:"",options:[""],answer:""},{id:20,question:"",options:[""],answer:""}],x=function(e){Object(k.a)(n,e);var t=Object(q.a)(n);function n(e){var o;return Object(v.a)(this,n),(o=t.call(this,e)).loadQuiz=function(){var e=o.state.currentIndex;o.setState((function(){return{question:E[e].question,options:E[e].options,answer:E[e].answer}}))},o.nextQuestionHandler=function(){var e=o.state,t=e.userAnswer,n=e.answer,i=e.score;t===n&&o.setState({score:i+1}),o.setState({currentIndex:o.state.currentIndex+1})},o.checkAnswer=function(e){o.setState({userAnswer:e,disabled:!1})},o.finishHandler=function(){o.state.currentIndex===E.length-1&&o.setState({quizEnd:!0})},o.state={userAnswer:null,currentIndex:0,options:[],quizEnd:!1,score:0,disabled:!0},o}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!==t.currentIndex&&this.setState((function(){return{disabled:!0,question:E[n].question,options:E[n].options,answer:E[n].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.question,o=t.options,r=t.currentIndex,a=t.userAnswer;return t.quizEnd?i.a.createElement("div",null,i.a.createElement("h1",null,"The final score is ",this.state.score," points"),i.a.createElement("p",null,"The correct answers"),i.a.createElement("ul",null,E.map((function(e,t){return i.a.createElement("li",{className:"options",key:t},e.answer)})))):i.a.createElement(y,null,i.a.createElement(m,null,i.a.createElement("h2",null,n),i.a.createElement("span",null,"Question ".concat(r+1," of ").concat(E.length)),o.map((function(t){return i.a.createElement("p",{key:t.id,className:"options ".concat(a===t?"selected":null),onClick:function(){return e.checkAnswer(t)}},t)})),r<E-1&&i.a.createElement("button",{disabled:this.state.disabled,onClick:this.nextQuestionHandler},"Next Question"),r===E.length-1&&i.a.createElement("button",{onClick:this.state.finishHandler,disabled:this.state.disabled},"Finish")))}}]),n}(o.Component);var A=function(){return i.a.createElement(g,null,i.a.createElement(w,null,i.a.createElement("h1",null,"DMV Permit Practice Test"),i.a.createElement(p,null,i.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.35f9a402.chunk.js.map