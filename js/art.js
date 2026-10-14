/* Illustrations des produits (affichées tant que vous n'avez pas ajouté vos photos) + drapeaux */
const stp=(cx,cy,r)=>'M'+[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.42:r;return (cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}).join('L')+'z';
function flag(c){const v='viewBox="0 0 24 16" width="26" height="17" role="img"';
 return c==='dz'?`<svg ${v} aria-label="Algérie"><rect width="12" height="16" fill="#006233"/><rect x="12" width="12" height="16" fill="#fff"/><circle cx="12" cy="8" r="4.4" fill="#d21034"/><circle cx="13.2" cy="8" r="3.6" fill="#fff"/><path d="${stp(13.4,8,2.4)}" fill="#d21034"/></svg>`
 :`<svg ${v} aria-label="Türkiye"><rect width="24" height="16" fill="#e30a17"/><circle cx="8.6" cy="8" r="4" fill="#fff"/><circle cx="9.8" cy="8" r="3.2" fill="#e30a17"/><path d="${stp(12.8,8,2)}" fill="#fff"/></svg>`}
function illus(p,o){
 const def=Object.assign({},p.def,o||{}), hx=id=>(STAR.colors.find(c=>c.id===id)||STAR.colors[0]).hex;
 const F=hx(def.f),S=hx(def.s),wood=def.m==='chene'||def.m==='noyer',gloss=def.m==='brillant',u='i'+p.id+def.f+def.s+def.m,t=p.type,G='#c9a35a';
 const [W,H,D]=p.dims.map(v=>v*100), k=Math.min(255/(W+D*.45),(t==='bed'?185:178)/(H+(p.mirror?85:0)))*.95, y0=252;
 const w=W*k,h=H*k,d=D*k,dx=d*.45,dy=d*.3,fx=200-(w+dx)/2;
 const pal={cuisine:['#1f1a14','#0e0c0a','#2b231a'],salon:['#171a22','#0b0c10','#241f19'],entree:['#1f1a19','#0e0c0b','#2a211c'],chambre:['#1b1822','#0c0b10','#251f1b']}[p.cat];
 const R=(x,y,a,b,f,e)=>`<rect x="${x}" y="${y}" width="${a}" height="${b}" fill="${f}" ${e||''}/>`;
 const cu=(x,y,a,b,dd,f,sc,top)=>{const X=dd*.45,Y=dd*.3,side=`M${x+a} ${y}l${X} ${-Y}v${b}l${-X} ${Y}z`,tp=`M${x} ${y}l${X} ${-Y}h${a}l${-X} ${Y}z`;
  return `<path d="${side}" fill="${sc}"/><path d="${tp}" fill="${top||sc}"/><path d="${tp}" fill="#fff" opacity=".22"/>`+R(x,y,a,b,f)
  +(wood?R(x,y,a,b,`url(#g${u})`)+`<path d="${side}" fill="url(#g${u})"/>`:'')+(gloss?`<path d="M${x+a*.12} ${y}h${a*.22}l${-a*.1} ${b}h${-a*.22}z" fill="#fff" opacity=".16"/>`:'')};
 const doors=(x,y,a,b,c,r)=>{let o='';const L='stroke="rgba(0,0,0,.3)"';
  for(let i=1;i<c;i++)o+=`<path d="M${x+a/c*i} ${y}v${b}" ${L}/>`;for(let j=1;j<r;j++)o+=`<path d="M${x} ${y+b/r*j}h${a}" ${L}/>`;
  for(let i=0;i<c;i++)for(let j=0;j<r;j++){const cw=a/c,ch=b/r;o+=r>1?R(x+cw*(i+.5)-cw*.13,y+ch*j+ch*.18,cw*.26,2.2,G):R(x+cw*(i+(i%2?.1:.9))-1,y+ch*.3,2.2,Math.min(ch*.4,28),G)}return o};
 const legs=(n)=>[fx+4,fx+w-6].map(x=>R(x,y0-n,3.5,n,G)).join('');
 let s=`<defs><linearGradient id="w${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${pal[0]}"/><stop offset="1" stop-color="${pal[1]}"/></linearGradient>
 <pattern id="g${u}" width="16" height="7" patternUnits="userSpaceOnUse"><path d="M0 3Q8 0 16 3" stroke="#3b2208" stroke-opacity=".22" fill="none"/></pattern><radialGradient id="s${u}"><stop offset="0" stop-color="#e3c585" stop-opacity=".34"/><stop offset="1" stop-color="#e3c585" stop-opacity="0"/></radialGradient></defs>
 <rect width="400" height="300" fill="url(#w${u})"/><ellipse cx="200" cy="165" rx="210" ry="145" fill="url(#s${u})"/>${R(0,y0,400,300-y0,pal[2],'opacity=".95"')}<path d="M0 ${y0}h400" stroke="#d8bd85" stroke-opacity=".25"/>
 <path d="${stp(354,40,7)}" fill="#d8bd85" opacity=".7"/>
 <ellipse cx="${200+dx/2}" cy="${y0+3}" rx="${(w+dx)/2+12}" ry="8" fill="#000" opacity=".6"/>`;
 if(t==='cuisine'){const bh=84*k,ww=(w-90*k)/2;
  s+=R(fx+dx*.35,y0-150*k,w,66*k,'#8a7a60','opacity=".16"');
  [0,1].forEach(i=>{const x=fx+i*(w-ww);s+=cu(x+dx*.35,y0-220*k-dy*.35,ww,70*k,35*k,F,S)+doors(x+dx*.35,y0-220*k-dy*.35,ww,70*k,Math.max(1,Math.round(ww/(45*k))),1)});
  s+=`<path d="M${fx+w/2-38*k+dx*.35} ${y0-152*k}h${76*k}l${-16*k} ${-24*k}h${-44*k}z" fill="${G}"/>`
  +cu(fx,y0-bh,w,bh,d,F,S)+doors(fx,y0-bh,w,bh,Math.round(W/60),2)+cu(fx-3,y0-bh-5,w+6,5,d+4,'#2a2a2c','#1c1c1e')}
 else if(t==='ilot'){const bh=84*k;s+=cu(fx,y0-bh,w,bh,d,F,S)+doors(fx,y0-bh,w,bh,Math.round(W/60),2)+cu(fx-4,y0-bh-6,w+8,6,d+6,'#2a2a2c','#1c1c1e');
  [.2,.5,.8].forEach(a=>{const cx=fx+w*a;s+=`<path d="M${cx-8} ${y0-48*k}l-3 ${48*k+4}M${cx+8} ${y0-48*k}l3 ${48*k+4}" stroke="${G}" stroke-width="2"/>`+`<ellipse cx="${cx}" cy="${y0-48*k}" rx="13" ry="5" fill="${F}"/><ellipse cx="${cx}" cy="${y0-50*k}" rx="13" ry="4" fill="#fff" opacity=".25"/>`})}
 else if(t==='bed'){s+=R(fx+dx-6,y0-dy-H*k,w+12,H*k-35*k,F)+(wood?R(fx+dx-6,y0-dy-H*k,w+12,H*k-35*k,`url(#g${u})`):'')+R(fx+dx-6,y0-dy-H*k-3,w+12,4,G)
  +cu(fx,y0-35*k,w,35*k,d,S,S)+cu(fx+5,y0-60*k,w-10,25*k,d-12,'#efe7d7','#d9cdb5')
  +[.2,.55].map(a=>`<rect x="${fx+w*a+dx*.55}" y="${y0-60*k-dy-14*k}" width="${w*.25}" height="${22*k}" rx="7" fill="#fbf7ee" stroke="#d9cdb5"/>`).join('')}
 else if(t==='shelf'){s+=cu(fx,y0-h,w,h,d,F,S)+R(fx+5,y0-h+5,w-10,h-10,'#2d2318','opacity=".92"');const n=4,bc=['#8a2b3c','#2c4a7a','#c9a35a','#5f7f5f','#e8dcc4'];
  for(let i=0;i<n;i++){const yy=y0-h+5+(h-10)/n*(i+1);s+=R(fx+5,yy-3,w-10,4,F);
   for(let j=0;j<Math.floor(w/16);j++)if((i+j)%3)s+=R(fx+9+j*14,yy-3-(18+(j*7+i*5)%16),8+(j%3)*2,18+(j*7+i*5)%16,bc[(i+j)%5])}}
 else if(t==='table'||t==='bench'){const top=t==='bench'?'#efe7d7':F;s+=legs(h)+cu(fx,y0-h,w,10*k+3,d,top,S,top)+cu(fx+8,y0-h*.4,w-16,4*k+2,d-10,S,S)}
 else if(t==='rack'){s+=R(fx+dx*.4,y0-H*k,w,H*k-48*k,F)+(wood?R(fx+dx*.4,y0-H*k,w,H*k-48*k,`url(#g${u})`):'')+R(fx+dx*.4,y0-H*k,w,5,G);
  for(let i=0;i<5;i++)s+=`<circle cx="${fx+dx*.4+w*(i+.5)/5}" cy="${y0-H*k+32*k}" r="3.5" fill="${G}"/>`;
  s+=cu(fx,y0-45*k,w,45*k,d,F,S)+doors(fx,y0-45*k,w,45*k,2,1)+cu(fx,y0-50*k,w,5*k,d,'#efe7d7','#d9cdb5')}
 else{const lg=p.legs?12*k:5*k;
  if(p.mirror)s+=R(fx+dx*.4+w*.07,y0-lg-h-82*k,w*.86,80*k,'#dbe7ee',`stroke="${G}" stroke-width="3"`)+`<path d="M${fx+w*.2} ${y0-lg-h-8}l${w*.12} ${-70*k}h${w*.1}l${-w*.12} ${70*k}z" fill="#fff" opacity=".5"/>`;
  s+=cu(fx,y0-lg-h,w,h,d,F,S)+doors(fx,y0-lg-h,w,h,p.cols||2,p.rows||1)+(p.legs?legs(lg):R(fx+2,y0-lg,w-2,lg,'#161616'))}
 return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name.fr}">${s}</svg>`}
