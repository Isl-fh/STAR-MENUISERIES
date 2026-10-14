(function(){const c=document.getElementById('sky');if(!c)return;const x=c.getContext('2d');let w,h,S=[],sh=[],mx=0;
function rs(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;S=Array.from({length:Math.round(w*h/14000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5+.3,p:Math.random()*6,z:Math.random()*.9+.1}))}
addEventListener('resize',rs);rs();c.parentElement.addEventListener('mousemove',e=>mx=e.clientX/w-.5);
setInterval(()=>sh.push({x:Math.random()*w,y:Math.random()*h*.4,l:0}),2600);
(function f(t){x.clearRect(0,0,w,h);S.forEach(s=>{x.globalAlpha=.4+.6*Math.abs(Math.sin(t/900+s.p));x.fillStyle=s.r>1.3?'#f6dc8f':'#fff';x.beginPath();x.arc(s.x+mx*30*s.z,s.y,s.r,0,7);x.fill()});
sh=sh.filter(s=>s.l<1);sh.forEach(s=>{s.l+=.02;const a=s.x+s.l*260,b=s.y+s.l*140,g=x.createLinearGradient(a-90,b-50,a,b);g.addColorStop(0,'transparent');g.addColorStop(1,'#fff');x.globalAlpha=1-s.l;x.strokeStyle=g;x.lineWidth=2;x.beginPath();x.moveTo(a-90,b-50);x.lineTo(a,b);x.stroke()});requestAnimationFrame(f)})(0)})();
