(this["webpackJsonpkindly-website"]=this["webpackJsonpkindly-website"]||[]).push([[0],{24:function(e,t,s){},43:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(10),i=s.n(a),r=s(19),l=(s(43),s(7)),o=s(9),d=s(16),j=s(59),h=s(37),b=s(60),x=s(58),m=(s(23),s(24),s(18)),u=s.n(m),g=s(20),p=s(56),O=s(57),y=s.p+"static/media/icon-msg-good.402a4758.svg",f=s.p+"static/media/icon-msg-bad.a9f111e9.svg",w=s(32),v=s.n(w),N=s(0);v.a.config();var k="https://script.google.com/macros/s/AKfycbwrgRzXXxSLEHK2GIjG8HqAMXy1PW9gqRK5ywrHCb7B_1IcEfoe3jWxQdexq5MWw7XK7g/exec",K=[["I thought the movie was great. I liked it, but not the scary parts. Those freaked me out.","What did you think?"],["Should we meet at the library?"," Does that sound okay?"],["Was the presentation okay?","I couldn't tell..."],["I don't really have friends yet and I don't know why."],["omg did you see what he was wearing today?","wasn't it ugly?!"],["that weirdo from the party last week is here. she's so stupid.","I mean, who even likes her?"]],C=function(){return K[Math.floor(Math.random()*K.length)]};var I=function(e){var t=Object(n.useState)(),s=Object(o.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(C()),l=Object(o.a)(r,2),d=l[0],h=l[1],x=Object(n.useState)(2),m=Object(o.a)(x,2),w=m[0],v=m[1],K=Object(n.useRef)(w),I=Object(n.useRef)(null);Object(n.useEffect)((function(){K.current=w}),[w]),Object(n.useEffect)((function(){function e(){window.parent.postMessage({width:I.current.clientWidth,height:I.current.clientHeight},"*")}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var S=function(e,t){e.preventDefault();var s=document.getElementById("kindly-status");i.a.render(E,s),s.style.backgroundColor="grey";var n=new FormData;n.append("text",c),n.append("intent",t),n.append("row",K.current),fetch(k,{method:"POST",body:n}).then(function(){var e=Object(g.a)(u.a.mark((function e(t){var s,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:"error"===(s=e.sent).result&&(console.log("Something went wrong"),console.log(s.error)),a(""),n=document.getElementById("kindly-status"),i.a.render(W,n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(g.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Something went wrong"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},E=Object(N.jsx)("table",{style:{height:"80px"},className:"w-100",children:Object(N.jsx)("tbody",{children:Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{className:"align-middle text-center",children:[Object(N.jsx)(p.a,{animation:"border",variant:"light",size:"sm"}),"\xa0\xa0 Results loading \u2026 hang tight!"]})})})}),A=Object(N.jsx)("table",{children:Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"px-3",rowSpan:"2",children:Object(N.jsx)("img",{src:y,alt:"Good Message",width:"80"})}),Object(N.jsx)("td",{className:"text-start align-top",children:"Your message looks great! Good to send!"})]}),e.contribute&&Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{className:"text-start align-top",children:[Object(N.jsx)("span",{style:{fontSize:"0.9em"},children:"DO YOU AGREE?"}),Object(N.jsx)(b.a,{variant:"outline-light",className:"btn-small ml-3",style:{boxShadow:"none",float:"right"},onClick:function(e){return S(e,"yes")},children:"NO"}),Object(N.jsx)(b.a,{variant:"outline-light",className:"btn-small mx-3",style:{boxShadow:"none",float:"right"},onClick:function(e){return S(e,"no")},children:"YES"})]})})]})}),F=Object(N.jsx)("table",{children:Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"px-3",rowSpan:"2",children:Object(N.jsx)("img",{src:f,alt:"Bad Message",width:"80"})}),Object(N.jsx)("td",{className:"text-start align-top",children:"Hmm \u2026 maybe reconsider this message?"})]}),e.contribute&&Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{className:"text-start align-top",children:[Object(N.jsx)("span",{style:{fontSize:"0.9em"},children:"DO YOU AGREE?"}),Object(N.jsx)(b.a,{variant:"outline-light",className:"btn-small ml-3",style:{boxShadow:"none",float:"right"},onClick:function(e){return S(e,"no")},children:"NO"}),Object(N.jsx)(b.a,{variant:"outline-light",className:"btn-small mx-3",style:{boxShadow:"none",float:"right"},onClick:function(e){return S(e,"yes")},children:"YES"})]})})]})}),T=Object(N.jsx)("table",{style:{height:"80px"},className:"w-100",children:Object(N.jsx)("tbody",{children:Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{className:"align-middle text-center",children:["An error occurred.",Object(N.jsx)("br",{}),"Try again later."]})})})}),W=Object(N.jsx)("table",{style:{height:"80px"},className:"w-100",children:Object(N.jsx)("tbody",{children:Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{className:"align-middle text-center",children:["Thank you, your contribution has been recorded.",Object(N.jsx)("br",{}),"Do you want to contribute again?"]})})})});return Object(N.jsxs)("div",{ref:I,children:[Object(N.jsxs)(j.a,{children:[Object(N.jsx)(j.a.Header,{className:"text-blue p-4",children:Object(N.jsx)("table",{className:"w-100",children:Object(N.jsx)("tbody",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("b",{children:e.contribute?"Contribute to Kindly":"Kindly Test Message"})}),Object(N.jsx)("td",{className:"text-end",children:Object(N.jsx)(b.a,{variant:"outline-primary",className:"btn-small",style:{boxShadow:"none"},onClick:function(){h(C())},children:"GENERATE NEW"})})]})})})}),Object(N.jsxs)(j.a.Body,{className:"p-4",children:[d&&d.map((function(e,t){return Object(N.jsx)("div",{className:"chat-bubble w-75 text-start",children:e},t)})),Object(N.jsx)(O.a.Group,{className:"",controlId:"exampleForm.ControlTextarea1",children:Object(N.jsx)(O.a.Control,{as:"textarea",placeholder:"How would you respond? Type here*",rows:3,className:"shadow-none p-3 mt-4",style:{borderRadius:"20px 20px 0 0",resize:"none",border:0},value:c,onChange:function(e){return a(e.target.value)}})}),Object(N.jsx)("div",{className:"text-end",style:{backgroundColor:"#fff",borderRadius:"0 0 20px 20px",padding:".5rem"},children:Object(N.jsx)(b.a,{variant:"primary",className:"btn-small",style:{marginTop:0},onClick:function(t){t.preventDefault();var s=document.getElementById("kindly-status");if(i.a.render(E,s),s.style.backgroundColor="#000",s.style.visibility="visible",e.contribute){var n=new FormData;n.append("text",c),fetch(k,{method:"POST",body:n}).then(function(){var e=Object(g.a)(u.a.mark((function e(t){var s,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:s=e.sent,n=parseInt(s.row),v(n),"error"===s.result&&(console.log("Something went wrong"),console.log(s.error));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(g.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Something went wrong"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}fetch("https://kindly-api.azurewebsites.net/detect",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:c})}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),parseFloat(e.result.offensive)>parseFloat(e.result["not-offensive"])?(i.a.render(F,s),s.style.backgroundColor="#ff9f40"):(i.a.render(A,s),s.style.backgroundColor="#46c66d")})).catch((function(e){i.a.render(T,s),s.style.backgroundColor="#880808",console.error("Error:",e)}))},children:"Check with Kindly"})})]})]}),!e.contribute&&Object(N.jsxs)("div",{style:{fontStyle:"italic",marginTop:"0.6em",fontSize:"0.85em"},children:["* Please do not enter personally identifiable information.",Object(N.jsx)("br",{}),"\xa0\xa0This form does not store any data."]}),Object(N.jsx)("div",{id:"kindly-status",className:"text-white",children:E})]})},S=s.p+"static/media/icon-arrow-down-white.b548ce01.svg",E=s.p+"static/media/icon-arrow-down-blue.afeaff4e.svg",A=s.p+"static/media/icon-send.dd942669.svg",F=s.p+"static/media/unicef-logo.dd47353a.png",T=s.p+"static/media/check-with-kindly.0333fbb1.svg",W=s.p+"static/media/check-message.e9ecc7bf.svg",R=s.p+"static/media/send-final-message.c106c5b2.svg",z=s.p+"static/media/view-feedback.21f269d5.svg",D=s.p+"static/media/kindly-privacy.7a278a64.svg",M=s.p+"static/media/kindly-open-source.6a23f78d.svg",B=s.p+"static/media/kindly-empowerment.7150b99b.svg";function G(e){var t="",s="";return e.feedback?s=e.toxic?"cornerOrange":"cornerGreen":t="roundBottomCorners",Object(N.jsxs)(j.a,{className:"cover-rectangle "+t+" "+s+" "+e.addClasses,style:{top:e.top,left:e.left,zIndex:e.zindex},children:[Object(N.jsx)(j.a.Header,{children:Object(N.jsx)("table",{children:Object(N.jsx)("tbody",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"cover-text",children:e.text}),Object(N.jsx)("td",{className:"align-bottom",children:Object(N.jsx)("img",{src:A,className:"Iconsend",alt:"Inactive Submit Button"})})]})})})}),Object(N.jsx)(h.a,{in:e.feedback,children:e.toxic?Object(N.jsx)(j.a.Body,{className:"msgBad",children:Object(N.jsx)("table",{children:Object(N.jsx)("tbody",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"pr-2",children:Object(N.jsx)("img",{src:f,alt:"Bad Message",width:"50",style:{marginRight:".6em"}})}),Object(N.jsxs)("td",{className:"text-start align-top",children:["Hmm \u2026 maybe",Object(N.jsx)("br",{}),"reconsider this",Object(N.jsx)("br",{}),"message?"]})]})})})}):Object(N.jsx)(j.a.Body,{className:"msgGood",children:Object(N.jsx)("table",{children:Object(N.jsx)("tbody",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("img",{src:y,alt:"Good Message",width:"50",style:{marginRight:".6em"}})}),Object(N.jsxs)("td",{className:"text-start align-top",children:["Your message",Object(N.jsx)("br",{}),"looks great!",Object(N.jsx)("br",{}),"Good to send!"]})]})})})})})]})}var P={background:"background-blue",title:"text-white",margin:"whiteMargin",text:"text-blue",arrowDown:S},H={background:"background-light-blue",title:"text-blue",margin:"blueMargin",text:"text-white",arrowDown:E};var U=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(P),i=Object(o.a)(a,2),r=i[0],l=i[1],j=Object(n.useState)({}),h=Object(o.a)(j,2),m=h[0],u=h[1],g=Object(n.useState)({width:void 0,height:void 0,top:void 0,left:void 0}),p=Object(o.a)(g,2),O=p[0],y=p[1],f=Object(n.useRef)(null);function w(e){c(e),e?(l(P),u({"--original-bg-color":"#fff","--original-color":"#1955d5"})):(l(H),u({"--original-bg-color":"#1955d5","--original-color":"#fff"}))}return Object(n.useEffect)((function(){function e(){var e=window.getComputedStyle(f.current);y({width:parseInt(f.current.clientWidth),height:parseInt(f.current.clientHeight),top:parseInt(e.getPropertyValue("margin-top")),left:parseInt(e.getPropertyValue("margin-left"))}),console.log(f.current.clientWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(N.jsxs)("main",{children:[Object(N.jsxs)("div",{className:"cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column text-center "+r.background,children:[Object(N.jsxs)("div",{className:"cover-cover mx-auto mt-auto",ref:f,children:[Object(N.jsxs)("div",{className:"cover-title "+r.title,children:["See how messages can",Object(N.jsx)("br",{}),"be rethought, Kindly"]}),Object(N.jsxs)("div",{className:"buttonWrapper mt-3 mx-auto "+r.margin,children:[Object(N.jsx)("input",{type:"radio",className:"btn-check",name:"options-outlined",id:"success-outlined",autoComplete:"off",checked:s,onChange:function(){return w(1)}}),Object(N.jsx)("label",{className:"btn btn-outline-light btn-original",for:"success-outlined",style:m,children:"ORIGINAL MESSAGE"}),"\xa0\xa0\xa0",Object(N.jsx)("input",{type:"radio",className:"btn-check btn-kindly",name:"options-outlined",id:"danger-outlined",autoComplete:"off",checked:!s,onChange:function(){return w(0)}}),Object(N.jsx)("label",{className:"btn btn-outline-light btn-kindly",for:"danger-outlined",children:"APPLY KINDLY"})]})]}),Object(N.jsx)("footer",{className:"cover-footer mt-auto",children:Object(N.jsxs)(d.a,{to:"#about",className:"text-decoration-none "+r.title,children:[Object(N.jsx)("span",{children:"Learn about Kindly"}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{src:s?S:E,className:"icon-arrow-down",alt:"Downward Arrow"})]})}),Object(N.jsxs)("div",{className:"background container-fluid vh-100",children:[Object(N.jsx)(G,{text:Object(N.jsx)("span",{children:"ur\xa0so\xa0ugly"}),feedback:!s,toxic:!0,top:O.top/2-60+"px",left:O.left-10+"px"}),Object(N.jsx)(G,{text:Object(N.jsxs)("span",{children:["omg\xa0did\xa0you\xa0see\xa0what",Object(N.jsx)("br",{}),"they\xa0did\xa0yesterday?!",Object(N.jsx)("br",{}),"what\xa0idiots"]}),feedback:!s,toxic:!0,top:1.2*O.top+O.height+"px",left:O.left+"px"}),Object(N.jsx)(G,{text:Object(N.jsx)("span",{children:"Cool!\xa0See\xa0you\xa0there!"}),feedback:!s,toxic:!1,top:O.top+20+"px",left:O.left/1.8-120+"px",addClasses:"d-none d-md-block"}),Object(N.jsx)(G,{text:Object(N.jsxs)("span",{children:["umm\xa0yeah\xa0I\xa0think",Object(N.jsx)("br",{}),"that\xa0will\xa0be\xa0okay"]}),feedback:!s,toxic:!1,top:O.top+O.height+40+"px",left:O.left+O.width-140+"px"}),Object(N.jsx)(G,{text:Object(N.jsx)("span",{children:"No\xa0that's\xa0so\xa0dumb"}),feedback:!s,toxic:!0,top:O.top+O.height-60+"px",left:O.left+O.width+"px",zindex:10,addClasses:"d-none d-md-block"}),Object(N.jsx)(G,{text:Object(N.jsxs)("span",{children:["Yesterday's\xa0movie\xa0was",Object(N.jsx)("br",{}),"great\xa0I\xa0liked\xa0it,\xa0but\xa0not",Object(N.jsx)("br",{}),"the\xa0scary\xa0parts.\xa0Those",Object(N.jsx)("br",{}),"just\xa0freak\xa0me\xa0out"]}),feedback:!s,toxic:!1,top:O.top/1.7-80+"px",left:1.5*O.left+O.width-200+"px"})]})]}),Object(N.jsx)("div",{className:"p-5 cover-unicef",id:"about",children:Object(N.jsx)("div",{className:"container-lg",children:Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5",children:[Object(N.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(N.jsx)("img",{src:F,width:"490",alt:"UNICEF Logo",className:"d-block mx-auto img-fluid",loading:"lazy"})}),Object(N.jsx)("div",{className:"col-lg-3 offset-lg-2",children:Object(N.jsx)("p",{className:"lead text-lg-start text-center",children:"Kindly is the product of a collaboration between UNICEF and Gitanjali Rao, a young innovator."})})]})})}),Object(N.jsx)("div",{className:"py-4",children:Object(N.jsxs)("div",{className:"container-lg p-5",children:[Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5 flex-row-reverse",children:[Object(N.jsx)("div",{className:"col-lg-5",children:Object(N.jsx)("img",{src:T,alt:"Check With Kindly",className:"w-100"})}),Object(N.jsxs)("div",{className:"col-lg-5 offset-1",children:[Object(N.jsx)("h1",{children:"Kindly is an API that uses Machine Learning to identify 'toxic' messages."}),Object(N.jsx)("p",{style:{fontSize:"1.2em"},children:"Kindly evaluates messages before they are sent and offers users the chance to modify them."}),Object(N.jsx)("p",{style:{fontSize:"1.2em"},children:"Kindly aims to make children feel safer by leveraging the latest advances in technology and by empowering children to solve this pressing challenge."})]})]}),Object(N.jsx)("footer",{className:"cover-footer mt-auto mx-auto text-center",children:Object(N.jsxs)(d.a,{to:"#test-kindly",className:"text-decoration-none text-blue",children:[Object(N.jsx)("span",{children:"Test Kindly"}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{src:E,className:"icon-arrow-down",alt:"Downward Arrow"})]})})]})}),Object(N.jsx)("div",{className:"py-4 background-blue text-white",id:"test-kindly",children:Object(N.jsxs)("div",{className:"container-lg",children:[Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5 mb-5",children:[Object(N.jsxs)("div",{className:"col-lg-5 offset-lg-1 text-lg-start text-center px-5",children:[Object(N.jsx)("h1",{className:"mb-5",children:"Kindly aims to end cyberbullying, one message at a time."}),Object(N.jsx)("p",{className:"lead",children:"Test Kindly for yourself!"}),Object(N.jsx)("p",{children:"Reply to the message and check your entry with Kindly to see if your message is toxic or considered cyberbullying."})]}),Object(N.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(N.jsx)(I,{})})]}),Object(N.jsx)("footer",{className:"cover-footer mt-5 mx-auto text-center",children:Object(N.jsxs)(d.a,{to:"#how-kindly-works",className:"text-decoration-none text-white",children:[Object(N.jsx)("span",{children:"How Kindly works"}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{src:S,className:"icon-arrow-down",alt:"Downward Arrow"})]})})]})}),Object(N.jsx)("div",{className:"p-5 background-light-blue text-blue",id:"how-kindly-works",children:Object(N.jsx)("div",{className:"container-lg",children:Object(N.jsx)("div",{className:"row align-items-center pt-5 pb-3",children:Object(N.jsxs)("div",{className:"col-md-8 text-center mx-auto",children:[Object(N.jsx)("h1",{className:"pb-3",children:"Don't just test, but improve Kindly!"}),Object(N.jsx)("p",{className:"px-2",children:"Contribute to Kindly's understanding of message intent by submitting any sentence with Kindly and flagging if it has a cyberbullying intent or not."}),Object(N.jsx)(b.a,{variant:"outline-light",style:{minWidth:"12em"},className:"my-3",href:"/contribute",children:"Contribute\xa0\xa0>"})]})})})}),Object(N.jsx)("div",{className:"p-5",id:"how-kindly-works",children:Object(N.jsxs)("div",{className:"container-lg",children:[Object(N.jsx)("div",{className:"row align-items-center pt-5 pb-3",children:Object(N.jsxs)("div",{className:"col-lg-7 text-center mx-auto",children:[Object(N.jsxs)("h1",{className:"",children:["Think ",Object(N.jsx)("i",{children:"Grammerly"}),",",Object(N.jsx)("br",{})," but for cyberbullying"]}),Object(N.jsx)("p",{className:"text-grey",children:"When integrated with existing text-based platforms, Kindly allows users to check and edit their messages for toxic intent."})]})}),Object(N.jsxs)("div",{className:"row px-lg-5 pb-5 align-items-start",children:[Object(N.jsxs)("div",{className:"col-lg-3 text-center mx-auto px-5 mt-4 mt-md-0",children:[Object(N.jsx)("img",{src:W,alt:"Check the message",className:"pl-3"}),Object(N.jsx)("p",{children:Object(N.jsx)("b",{children:"Check the message"})}),Object(N.jsx)("p",{children:"Users prompt Kindly to evaluate their message draft for toxic text or cyberbullying intent"})]}),Object(N.jsxs)("div",{className:"col-lg-3 text-center mx-auto mt-4 mt-md-0",children:[Object(N.jsx)("img",{src:z,alt:"View Feedback"}),Object(N.jsx)("p",{children:Object(N.jsx)("b",{children:"View feedback"})}),Object(N.jsx)("p",{children:"Feedback on the message offers users the chance to edit their original message"})]}),Object(N.jsxs)("div",{className:"col-lg-3 text-center mx-auto px-5 mt-4 mt-md-0",children:[Object(N.jsx)("img",{src:R,alt:"Send Final Message",className:"pr-3"}),Object(N.jsx)("p",{children:Object(N.jsx)("b",{children:"Send final message"})}),Object(N.jsx)("p",{children:"Users choose to send the final message after seeing and/or responding to the feedback"})]})]}),Object(N.jsx)("footer",{className:"cover-footer mt-auto mx-auto text-center",children:Object(N.jsxs)(d.a,{to:"#why-kindly",className:"text-decoration-none text-blue",children:[Object(N.jsx)("span",{children:"Why Kindly?"}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{src:E,className:"icon-arrow-down",alt:"Downward Arrow"})]})})]})}),Object(N.jsx)("div",{className:"p-5 background-black",children:Object(N.jsx)("div",{className:"container-lg",children:Object(N.jsx)("div",{className:"row align-items-center g-5 py-5",children:Object(N.jsx)("div",{className:"col-lg-7 text-center mx-auto text-white text-center",children:Object(N.jsx)("h2",{children:"One-third of the globe\u2019s youth is bullied. It affects everyone: those who are bullied, those who bully others, and those who witness bullying. And it doesn\u2019t stop in the physical world. It happens online, too."})})})})}),Object(N.jsxs)("div",{className:"container-lg p-5",id:"why-kindly",children:[Object(N.jsx)("div",{className:"row align-items-center g-5 py-5",children:Object(N.jsxs)("div",{className:"col-lg-7 text-center mx-auto",children:[Object(N.jsx)("h1",{className:"",children:"Kindly is a uniquely qualified solution to eliminate cyberbullying"}),Object(N.jsx)("p",{className:"text-grey",children:"Partners Gitanjali Rao and UNICEF provide the principles that make Kindly an excellent digital tool that empowers children."})]})}),Object(N.jsxs)("div",{className:"row align-items-center",children:[Object(N.jsx)("div",{className:"col-lg-4 text-center mx-auto",children:Object(N.jsx)("img",{src:D,alt:"Children's data privacy",className:"img-fluid px-5 px-md-0"})}),Object(N.jsxs)("div",{className:"col-lg-5 mx-auto",children:[Object(N.jsx)("p",{className:"unicef-blue-section-header",children:"Protection of childen's rights and data"}),Object(N.jsxs)("p",{children:["To take full account of children\u2019s issues and rights online, UNICEF has developed a ",Object(N.jsx)("a",{href:"https://www.unicef.org/globalinsight/reports/better-governance-childrens-data-manifesto",target:"_blank",rel:"noreferrer",children:"Manifesto"})," for data governance to protect children\u2019s data and their rights and prioritize children\u2019s best interests. Thus, UNICEF is uniquely positioned to provide strong child data protection guarantees and offer a trusted digital public good that puts children first."]})]})]}),Object(N.jsxs)("div",{className:"row align-items-center px-md-5 flex-row-reverse mt-4",children:[Object(N.jsx)("div",{className:"col-lg-4 text-center mx-auto w-80",children:Object(N.jsx)("img",{src:M,alt:"Open-source solution",className:"img-fluid px-5 px-md-0"})}),Object(N.jsxs)("div",{className:"col-lg-5 mx-auto",children:[Object(N.jsx)("p",{className:"unicef-blue-section-header",children:"An open-source solution for anyone to contribute to"}),Object(N.jsx)("p",{children:"By developing Kindly as an open-source solution, UNICEF encourages and empowers children to be part of the solution to a challenge that many of them face directly. Kindly provides systems of iterative improvement that allow the tool to meet the specific needs of different communities."})]})]}),Object(N.jsxs)("div",{className:"row align-items-center px-md-5 mt-4",children:[Object(N.jsx)("div",{className:"col-lg-4 text-center mx-auto",children:Object(N.jsx)("img",{src:B,alt:"Empower anyone to contribute",className:"img-fluid px-5 px-md-0"})}),Object(N.jsxs)("div",{className:"col-lg-5 mx-auto mt-3",children:[Object(N.jsx)("p",{className:"unicef-blue-section-header",children:"Engaging children directly in a solution to cyberbullying"}),Object(N.jsx)("p",{children:"While similar services to Kindly exist in the market, they do not engage children in the way Kindly aims to. Kindly  gives children themselves the power to eliminate cyberbullying by checking their messages, and centers their own safety and protections in the solution."})]})]})]}),Object(N.jsx)("div",{className:"container-lg p-5",children:Object(N.jsx)("div",{className:"row align-items-center g-5 py-5",children:Object(N.jsxs)("div",{className:"col-lg-7 mx-auto",children:[Object(N.jsx)("h2",{className:"text-lg-start text-center",children:"Frequently Asked Questions"}),Object(N.jsx)(x.a,{className:"pb-3 pt-4",children:Object(N.jsxs)(x.a.Item,{eventKey:"0",children:[Object(N.jsx)(x.a.Header,{children:"How does Kindly integrate into existing platforms?"}),Object(N.jsxs)(x.a.Body,{children:["Kindly offers a public API that any online service provider can leverage to integrate with their existing product offering. It is as simple as sending any message that the user is typing to that API endpoint, and process the response to provide feedback to the user on whether that user-generated content is fine to post, or the user should reconsider their language before posting. Contact ",Object(N.jsx)("a",{href:"mailto:kindly@unicef.org",rel:"noreferrer",children:"kindly@unicef.org"})," with any technical questions around the integration possibilities."]})]})}),Object(N.jsx)(x.a,{className:"pb-3",children:Object(N.jsxs)(x.a.Item,{eventKey:"0",children:[Object(N.jsx)(x.a.Header,{children:"Who is Kindly made for?"}),Object(N.jsx)(x.a.Body,{children:"Kindly was created for children between the ages of 10 and 18 years in an effort to end cyberbullying and make them feel safer. Kindly can be integrated with any platform that provides text-based services (such as chat interface, email platform, etc.) to benefit children, globally. While the current version is available in English, more languages are envisioned in the future."})]})}),Object(N.jsx)(x.a,{className:"pb-3",children:Object(N.jsxs)(x.a.Item,{eventKey:"0",children:[Object(N.jsx)(x.a.Header,{children:"What are Kindly\u2019s child protection and safety policies?"}),Object(N.jsxs)(x.a.Body,{children:["Kindly\u2019s open-source API does not collect any user data. It is supported by UNICEF's strong ",Object(N.jsx)("a",{href:"https://www.unicef.org/supply/documents/policy-conduct-promoting-protection-and-safeguarding-children",target:"_blank",rel:"noreferrer",children:"Child Safeguarding"})," standards that promote the protection and safeguarding of all children. It is also supported by UNICEF\u2019s ",Object(N.jsx)("a",{href:"https://www.unicef.org/supply/documents/unicef-policy-personal-data-protection",target:"_blank",rel:"noreferrer",children:"Data Protection"})," standards that ensure that individuals' privacy rights are honored and their data appropriately protected. However, if someone wishes to contribute to the training data set, they can do so through our ",Object(N.jsx)("i",{children:"Contribute Page"}),". Before being added to the training open data set, the data will be anonymized and reviewed by trusted UNICEF staff to maintain appropriate privacy measures."]})]})}),Object(N.jsx)(x.a,{className:"pb-3",children:Object(N.jsxs)(x.a.Item,{eventKey:"0",children:[Object(N.jsx)(x.a.Header,{children:"How can I get involved with Kindly?"}),Object(N.jsxs)(x.a.Body,{children:["We\u2019d love to have you! To keep up with Kindly\u2019s progress and latest developments, access the ",Object(N.jsx)("a",{href:"https://github.com/unicef/kindly",target:"_blank",rel:"noreferrer",children:"API repository"}),". You can also contact Kindly\u2019s team via email at ",Object(N.jsx)("a",{href:"mailto:kindly@unicef.org",target:"_blank",rel:"noreferrer",children:"kindly@unicef.org"}),"."]})]})})]})})}),Object(N.jsx)("div",{className:"p-5 background-blue text-white",children:Object(N.jsxs)("div",{className:"container-lg p-5",children:[Object(N.jsx)("div",{className:"row align-items-center g-5 py-5",children:Object(N.jsx)("div",{className:"col-lg-7 mx-auto text-center",children:Object(N.jsx)("h2",{className:"px-5",children:"Join us in ending cyberbullying!"})})}),Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5",children:[Object(N.jsxs)("div",{className:"col-lg-4 mx-auto text-center",children:[Object(N.jsx)("p",{className:"lead",children:"Contribute data"}),Object(N.jsx)("p",{children:"Teach Kindly to recognize cyberbullying by submitting text and evaluating feedback"}),Object(N.jsx)(b.a,{variant:"outline-light",style:{minWidth:"12em"},href:"/contribute",children:"Contribute"})]}),Object(N.jsxs)("div",{className:"col-lg-4 mx-auto text-center",children:[Object(N.jsx)("p",{className:"lead",children:"Stay updated"}),Object(N.jsx)("p",{children:"Keep up with Kindly\u2019s progress by accessing the UNICEF/Kindly software repository"}),Object(N.jsx)(b.a,{variant:"outline-light",style:{minWidth:"12em"},href:"https://github.com/unicef/kindly",target:"_blank",rel:"noreferrer",children:"Software Repository"})]}),Object(N.jsxs)("div",{className:"col-lg-4 mx-auto text-center pt-5 pt-lg-0",children:[Object(N.jsx)("p",{className:"lead",children:"Learn more"}),Object(N.jsx)("p",{children:"Connect with Kindly to learn more about Kindly or to explore a partnership role with us"}),Object(N.jsx)(b.a,{variant:"outline-light",style:{minWidth:"12em"},href:"mailto:kindly@unicef.org",rel:"noreferrer",children:"Email us"})]})]})]})}),Object(N.jsx)("div",{className:"p-5 background-black text-white",children:Object(N.jsx)("div",{className:"container-lg",children:Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5",children:[Object(N.jsxs)("div",{className:"col-4 mx-auto",children:[Object(N.jsx)("h1",{children:"Kindly"}),Object(N.jsx)("p",{children:"Kindly is the product of innovator Gitanjali Rao and UNICEF's collaboration"})]}),Object(N.jsxs)("div",{className:"col-3 mx-auto text-white",children:[Object(N.jsx)("div",{className:"row mb-3",children:Object(N.jsx)(d.a,{to:"#test-kindly",className:"text-decoration-none text-white ",children:"Learn"})}),Object(N.jsx)("div",{className:"row mb-3",children:Object(N.jsx)(d.a,{to:"/contribute",className:"text-decoration-none text-white ",children:"Contribute data"})}),Object(N.jsx)("div",{className:"row mb-3",children:Object(N.jsx)("a",{href:"https://github.com/unicef/kindly",className:"text-decoration-none text-white",target:"_blank",rel:"noreferrer",children:"Software Repository"})}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("a",{className:"text-decoration-none text-white",href:"mailto:kindly@unicef.org",rel:"noreferrer",children:"Contact"})})]})]})})})]})};var L=function(){return Object(N.jsx)(I,{})};var Y=function(){return Object(N.jsx)("div",{className:"p-5 background-black text-white",children:Object(N.jsx)("div",{className:"container-lg",children:Object(N.jsxs)("div",{className:"row align-items-center g-5 py-5",children:[Object(N.jsxs)("div",{className:"col-4 mx-auto",children:[Object(N.jsx)("h1",{children:"Kindly"}),Object(N.jsx)("p",{children:"Kindly is the product of innovator Gitanjali Rao and UNICEF's collaboration"})]}),Object(N.jsxs)("div",{className:"col-3 mx-auto text-white",children:[Object(N.jsx)("div",{className:"row mb-4",children:Object(N.jsx)(d.a,{to:"#test-kindly",className:"text-decoration-none text-white ",children:"Test Kindly"})}),Object(N.jsx)("div",{className:"row mb-4",children:Object(N.jsx)("a",{href:"https://github.com/unicef/kindly",className:"text-decoration-none text-white",target:"_blank",rel:"noreferrer",children:"Access Software Repository"})}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("a",{className:"text-decoration-none text-white",href:"mailto:kindly@unicef.org",rel:"noreferrer",children:"Contact Kindly"})})]})]})})})},_=s.p+"static/media/icon-arrow-left-lightblue.9e0095dd.svg",q=s.p+"static/media/good-interaction.93528908.svg";var J=function(){return Object(N.jsxs)("main",{children:[Object(N.jsxs)("div",{className:"text-center background-light-blue text-blue",children:[Object(N.jsxs)("div",{className:"cover-cover mx-auto mt-auto row g-5",children:[" ",Object(N.jsxs)("div",{className:"col-lg-5 offset-lg-1 text-lg-start text-center px-5",children:[Object(N.jsx)("div",{className:"pb-3",children:Object(N.jsxs)("a",{href:"/",className:"nav-link-kindly",children:[Object(N.jsx)("img",{src:_,className:"icon-arrow-down",alt:"Downward Arrow"}),"\xa0\xa0Learn about kindly"]})}),Object(N.jsx)("h1",{className:"my-5",children:"Contribute by training Kindly's data"}),Object(N.jsx)("p",{className:"lead",children:"After testing a string of text with Kindly, indicate if your entry contained cyberbullying or a toxic intent to improve Kindly's understanding."}),Object(N.jsxs)("div",{className:"mt-5",style:{fontStyle:"italic",fontSize:"0.9em"},children:[Object(N.jsx)("b",{children:"Please note:"})," Anything typed and tested in the message box will be collected, reviewed, and added to Kindly's public data set. Do not enter personally identifiable information."]})]}),Object(N.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(N.jsx)(I,{contribute:!0})})]}),Object(N.jsx)("footer",{className:"cover-footer mt-5 mx-auto text-center pb-4",children:Object(N.jsxs)(d.a,{to:"#why-contribute",className:"text-decoration-none",children:[Object(N.jsx)("span",{children:"Why contribute?"}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{src:E,className:"icon-arrow-down",alt:"Downward Arrow"})]})})]}),Object(N.jsx)("div",{className:"p-5",id:"why-contribute",children:Object(N.jsxs)("div",{className:"container-lg",children:[Object(N.jsx)("div",{className:"row align-items-center pt-5 pb-3",children:Object(N.jsxs)("div",{className:"col-lg-7 text-center mx-auto",children:[Object(N.jsx)("img",{src:q,alt:"Send Final Message",className:"pr-3"}),Object(N.jsx)("h3",{children:"Inspire improved online interactions"}),Object(N.jsx)("p",{children:"Messages that are sent between Kindly\u2019s users will contain less cyberbullying because of your contributions, which improve Kindly\u2019s data and its ability to provide feedback."})]})}),Object(N.jsx)("div",{className:"row align-items-center pt-5 pb-3",children:Object(N.jsxs)("div",{className:"col-lg-7 text-center mx-auto",children:[Object(N.jsx)("img",{src:R,alt:"Send Final Message",className:"pr-3"}),Object(N.jsx)("h3",{children:"Be part of the solution to cyberbullying"}),Object(N.jsx)("p",{children:"Kindly is a proactive solution to the pressing issue of cyberbullying. You can help train and improve a tool that will stop toxic messages before they are sent."})]})})]})}),Object(N.jsx)(Y,{})]})},V=function(){return Object(N.jsxs)(l.c,{children:[" ",Object(N.jsx)(l.a,{exact:!0,path:"/",component:U}),Object(N.jsx)(l.a,{exact:!0,path:"/form",component:L}),Object(N.jsx)(l.a,{exact:!0,path:"/contribute",component:J})]})};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(r.a,{basename:"https://kindly.unicef.io",children:Object(N.jsx)(V,{})})}),document.body)}},[[54,1,2]]]);
//# sourceMappingURL=main.65dc6aff.chunk.js.map