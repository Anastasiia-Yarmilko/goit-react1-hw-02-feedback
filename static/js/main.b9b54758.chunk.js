(this["webpackJsonpgoit-react1-hw-02-feedback"]=this["webpackJsonpgoit-react1-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),i=(a(14),a(9)),o=a(3),d=a(4),b=a(6),l=a(5),j=(a(15),a(2)),u=a.n(j),h=a(0);function v(e){var t=e.title,a=e.children,c=e.className;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("section",{className:c,children:a})]})}v.PropsType={title:u.a.string,className:u.a.string};var p=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).countTotalFeedbacks=function(){return e.props.state.good+e.props.state.neutral+e.props.state.bad},e.countPositiveFeedbackPercent=function(){return Math.round(e.props.state.good/e.countTotalFeedbacks()*100)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedbacks(),t=this.props.state,a=t.good,c=t.neutral,n=t.bad;return 0===e?Object(h.jsx)(v,{title:"Statistics",className:"statistics",children:Object(h.jsx)("div",{children:"No feedback given"})}):Object(h.jsxs)(v,{title:"Statistics",className:"statistics",children:[Object(h.jsxs)("div",{children:["Good: ",a," "]}),Object(h.jsxs)("div",{children:["Neutral: ",c]}),Object(h.jsxs)("div",{children:["Bad: ",n]}),Object(h.jsxs)("div",{children:["Total: ",e]}),Object(h.jsxs)("div",{children:["Positive feedback: ",this.countPositiveFeedbackPercent()," %"]})]})}}]),a}(c.Component),O=p,f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:a,children:e},e)}))})};f.PropsType={options:u.a.arrayOf(u.a.string),onLeaveFeedback:u.a.func};var k=f,x=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{title:"Please, leave feedback",className:"feedback"}),Object(h.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback}),Object(h.jsx)(O,{state:this.state})]})}}]),a}(c.Component);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b9b54758.chunk.js.map