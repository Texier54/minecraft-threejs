import{ci as L,cd as p}from"./recipes-CWqT4FQZ.js";for(const[u,d]of Object.entries(L)){let t=document.createElement("div");t.classList.add("craft");let n=document.createElement("h2");n.classList.add("title"),n.innerHTML=u,t.append(n);let c=document.createElement("div");c.classList.add("grid");for(let l=0;l<3;l++)for(let s=0;s<3;s++){let o=document.createElement("div");o.classList.add("slot");const r=d.pattern[l][s];if(r){let m=document.createElement("img");const E=p(r);m.src=E.icon,m.width=43,o.append(m)}c.append(o)}t.append(c);let e=document.createElement("div"),i=document.createElement("div");e.classList.add("slot");let a=document.createElement("img");const g=p(d.output.id);a.src=g.icon,a.width=43,i.innerHTML=d.output.quantity,i.classList.add("slot-quantity"),e.append(a),e.append(i),t.append(e),document.getElementById("listing").append(t)}
