import{co as g,cd as r}from"./recipes-DUNZXxlT.js";for(const[f,d]of Object.entries(g)){let t=document.createElement("div");t.classList.add("craft");let c=document.createElement("div");c.classList.add("grid");for(let a=0;a<3;a++)for(let s=0;s<3;s++){let l=document.createElement("div");l.classList.add("slot");const m=d.pattern[a][s];if(m){let o=document.createElement("img");const u=r(m);o.src=u.icon,o.width=43,l.append(o)}c.append(l)}t.append(c);let e=document.createElement("div"),n=document.createElement("div");e.classList.add("slot");let i=document.createElement("img");const p=r(d.output.id);i.src=p.icon,i.width=43,n.innerHTML=d.output.quantity,n.classList.add("slot-quantity"),e.append(i),e.append(n),t.append(e),document.getElementById("listing").append(t)}
