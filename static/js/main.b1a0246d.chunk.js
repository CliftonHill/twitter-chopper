(this["webpackJsonptwitter-chopper-v2"]=this["webpackJsonptwitter-chopper-v2"]||[]).push([[0],{40:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=n(26),i=n(21),u=n(13);function s(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Twitter Chopper"),r.a.createElement("h2",null,"Chop your post into tweet-size pieces."))}function m(){return r.a.createElement("footer",null,"\xa9 2020 by Clifton Hill",r.a.createElement("br",null),"Contact info - ",r.a.createElement("a",{href:"https://github.com/cliftonhill"},"GitHub")," / ",r.a.createElement("a",{href:"https://cliftonhill.github.io"},"Web Dev Portfolio"),r.a.createElement("br",null),r.a.createElement("span",{className:"small"},'"Twitter" and "tweet" are trademarks of Twitter, Inc.'))}var f=n(66),h=n(31),b=n.n(h),p=n(65),d=n(67);function x(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"visibility"},r.a.createElement(d.a,{in:e.reveal},r.a.createElement(p.a,{onClick:e.clear},"Clear All"))),r.a.createElement("form",{id:"create-area"},r.a.createElement("textarea",{onClick:e.expand,onChange:e.event,name:"input",value:e.content,type:"text",rows:e.rows,placeholder:"Type your 280+ character post here..."}),r.a.createElement("br",null),r.a.createElement("span",{className:"char-count"},e.length," ",e.estimate)," ",r.a.createElement(d.a,{in:e.length>280&&"true"},r.a.createElement(f.a,{onClick:e.action,disabled:e.buttonStat,title:"Chop!"},r.a.createElement(b.a,{style:{fontSize:"2rem"}})))))}var E=n(32),v=n.n(E);function y(e){return r.a.createElement("div",{className:"tweet",id:"t"+e.id},r.a.createElement("span",{className:"tweetText"},e.content),r.a.createElement("div",{className:"char-count"},r.a.createElement("span",{title:"character count"},e.length),r.a.createElement(p.a,{variant:"outlined",id:"b"+e.id,onClick:function(){e.copyBtn(e.id)},title:"copy tweet"},r.a.createElement(v.a,{fontSize:"inherit"}))))}function g(){var e=Object(a.useState)({text:"",chars:"",estTweets:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),f=Object(u.a)(l,2),h=f[0],b=f[1],p=Object(a.useState)("1"),d=Object(u.a)(p,2),E=d[0],v=d[1],g=Object(a.useState)(!0),w=Object(u.a)(g,2),j=w[0],O=w[1],S=Object(a.useState)(!1),C=Object(u.a)(S,2),T=C[0],k=C[1],q=Object(a.useState)(!1),N=Object(u.a)(q,2),z=N[0],B=N[1];function H(e){var t="#t".concat(e," .tweetText"),n=document.querySelector(t).innerText;navigator.clipboard.writeText(n),document.querySelector(t).style.backgroundColor="yellow",setTimeout((function(){return document.querySelector(t).style.backgroundColor="initial"}),200)}return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("main",null,r.a.createElement(x,{expand:function(){T||(v(5),k(!0))},rows:E,clear:function(){console.log("clear all"),b([]),c({text:"",chars:"",estTweets:""}),O(!0),v(5),document.querySelector("#create-area textarea").style.color="#4a93ff",document.querySelector("#create-area textarea").focus()},event:function(e){var t=e.target.value.length;c({text:e.target.value,chars:t,estTweets:"| \u2248"+Math.ceil(t/275)+" tweets"}),t>220&&v(10),t>500&&v(15),O(!(t>280)),t>5720&&O(!0)},content:n.text,length:n.chars,estimate:n.estTweets,action:function(){h.length>0&&b([]),document.querySelector(".visibility").style.visibility="visible";for(var e=0,t=0;n.text.length-t>273;t=e){var a=t+273;if(" "===n.text[a]||n.text[a]===/[.?!:;-]]/&&" "===n.text[a+1]||n.text[a]===/[\n\r]/)!function(){console.log("1st");var e=n.text.slice(t,a).trim();b((function(t){return[].concat(Object(o.a)(t),[{text:e}])}))}();else{console.log("else");for(var r=a;" "!==n.text[r];r--)" "===n.text[r-1]&&function(){a=r-1;var t=n.text.slice(e,a).trim();b((function(e){return[].concat(Object(o.a)(e),[{text:t}])}))}()}e=a}if(e+273>n.text.length){console.log("made it");var c=n.text.slice(e).trim();b((function(e){return[].concat(Object(o.a)(e),[{text:c}])}))}document.querySelector("#create-area textarea").style.color="gray",B(!0),function(){function e(e,t){return 0===e||e+1<t?"\u2026":""}function t(e){return e>0?"\u2026":""}b((function(n){return n.map((function(a,r){return Object(i.a)(Object(i.a)({},a),{},{text:t(r)+a.text+e(r,n.length)+"\n".concat(r+1,"/").concat(n.length)})}))})),b((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{chars:e.text.length})}))}))}()},buttonStat:j,reveal:z}),h.map((function(e,t){return r.a.createElement(y,{key:t,id:t,content:e.text,length:e.chars,copyBtn:H})}))),r.a.createElement(m,null))}l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b1a0246d.chunk.js.map