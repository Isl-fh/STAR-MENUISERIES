let lang = localStorage.getItem('lang') || 'fr';
let cur  = localStorage.getItem('cur')  || 'EUR';
const D = {
fr:{home:'Accueil',ret:'Retour',photo:'Photo',demo_t:'Choisissez la couleur, voyez le résultat',demo_s:'Façades, côtés, matières : chaque détail se règle sur la page du produit, en 3D.',contact:'Contact',order:'Commander',hero_t:"L'art du meuble sur mesure",hero_s:"Cuisines, salons, entrées et chambres conçus par nos menuisiers. Visualisez chaque pièce en 3D et choisissez vos teintes.",
 discover:'Découvrir la collection',cats:'Nos univers',feat:'Pièces signature',from:'À partir de',view3d:'Voir en 3D',pieces:'modèles',
 v1:'Sur mesure',v1t:"Chaque meuble est dimensionné selon votre pièce, à la main, dans notre atelier.",v2:'Matières nobles',v2t:'Chêne, noyer, laques profondes et laiton : des finitions pensées pour durer.',v3:'Livraison soignée',v3t:'Livraison en France et en Algérie, avec montage par nos équipes.',
 drag:'Glissez pour tourner · molette pour zoomer',front:'Face',side:'Côté',top:'Dessus',back:'Arrière',iso:'3/4',auto:'Rotation',
 facade:'Couleur des façades',sides:'Couleur des côtés',mat:'Matière',dims:'Dimensions (L × H × P)',back_cat:'Retour à la catégorie',
 order_t:'Votre commande',summary:'Récapitulatif',model:'Modèle',qty:'Quantité',total:'Total',name:'Nom complet',phone:'Téléphone',email:'E-mail',addr:'Adresse de livraison',city:'Ville',country:'Pays',notes:'Précisions (dimensions, délais…)',
 send_mail:'Envoyer la commande par e-mail',send_wa:'Envoyer par WhatsApp',sent:"Votre messagerie s'ouvre avec la commande prête à envoyer. Merci de votre confiance.",
 contact_t:'Parlons de votre projet',contact_s:'Une idée, une mesure, un devis : écrivez-nous, nous répondons rapidement.',tel:'Téléphone',wa_l:'WhatsApp',mail:'E-mail',
 ast_t:'Assistance STAR',ast_s:'Réponse sur WhatsApp',ast_hi:"Bonjour ! Comment pouvons-nous vous aider ?",q1:'Demander un devis',q2:'Suivre ma commande',q3:'Dimensions sur mesure',q4:'Délais de livraison',ast_ph:'Écrire votre message…',
 ast_m1:'Bonjour, je souhaite un devis.',ast_m2:'Bonjour, je souhaite suivre ma commande.',ast_m3:'Bonjour, je souhaite un meuble sur mesure.',ast_m4:'Bonjour, quels sont vos délais de livraison ?',
 foot:'Menuiserie d\'exception, créée avec passion.',nav:'Navigation',rights:'Tous droits réservés.',none:'Aucun produit.',wa_prod:'Bonjour, je suis intéressé par'},
ar:{home:'الرئيسية',ret:'رجوع',photo:'صورة',demo_t:'اختر اللون وشاهد النتيجة',demo_s:'الواجهات والجوانب والخامات: كل تفصيل يُضبط في صفحة المنتج بتقنية ثلاثية الأبعاد.',contact:'اتصل بنا',order:'اطلب الآن',hero_t:'فنّ الأثاث حسب الطلب',hero_s:'مطابخ وصالونات ومداخل وغرف نوم يصنعها نجّارونا. شاهد كل قطعة ثلاثية الأبعاد واختر ألوانها.',
 discover:'اكتشف المجموعة',cats:'عوالمنا',feat:'قطع مميّزة',from:'ابتداءً من',view3d:'عرض ثلاثي الأبعاد',pieces:'نماذج',
 v1:'حسب الطلب',v1t:'كل قطعة تُصمَّم بقياسات غرفتك وتُصنع يدويًا في ورشتنا.',v2:'خامات فاخرة',v2t:'بلوط وجوز وطلاء عميق ونحاس: تشطيبات صُنعت لتدوم.',v3:'توصيل عناية',v3t:'توصيل إلى فرنسا والجزائر مع التركيب من فريقنا.',
 drag:'اسحب للتدوير · العجلة للتكبير',front:'أمامي',side:'جانبي',top:'علوي',back:'خلفي',iso:'3/4',auto:'دوران',
 facade:'لون الواجهات',sides:'لون الجوانب',mat:'الخامة',dims:'الأبعاد (ع × ا × ع)',back_cat:'العودة إلى الفئة',
 order_t:'طلبك',summary:'ملخص الطلب',model:'النموذج',qty:'الكمية',total:'المجموع',name:'الاسم الكامل',phone:'الهاتف',email:'البريد الإلكتروني',addr:'عنوان التوصيل',city:'المدينة',country:'البلد',notes:'ملاحظات (القياسات، المواعيد…)',
 send_mail:'أرسل الطلب بالبريد الإلكتروني',send_wa:'أرسل عبر واتساب',sent:'سيفتح بريدك مع الطلب جاهزًا للإرسال. شكرًا لثقتك.',
 contact_t:'لنتحدث عن مشروعك',contact_s:'فكرة أو قياس أو عرض سعر: راسلنا وسنردّ بسرعة.',tel:'الهاتف',wa_l:'واتساب',mail:'البريد',
 ast_t:'مساعدة ستار',ast_s:'الرد عبر واتساب',ast_hi:'مرحبًا! كيف يمكننا مساعدتك؟',q1:'طلب عرض سعر',q2:'متابعة طلبي',q3:'قياسات خاصة',q4:'مدة التوصيل',ast_ph:'اكتب رسالتك…',
 ast_m1:'مرحبًا، أرغب في عرض سعر.',ast_m2:'مرحبًا، أرغب في متابعة طلبي.',ast_m3:'مرحبًا، أرغب في أثاث حسب الطلب.',ast_m4:'مرحبًا، ما هي مدة التوصيل؟',
 foot:'نجارة استثنائية صُنعت بشغف.',nav:'التصفح',rights:'جميع الحقوق محفوظة.',none:'لا توجد منتجات.',wa_prod:'مرحبًا، أنا مهتم بـ'}
};
const tr = k => D[lang][k] || k;
const L = o => o[lang];
const price = e => cur==='EUR' ? Math.round(e).toLocaleString('fr-FR')+' €' : Math.round(e*STAR.rate).toLocaleString('fr-FR')+' DA';
const waLink = t => 'https://wa.me/'+STAR.wa+'?text='+encodeURIComponent(t);
const qs = k => new URLSearchParams(location.search).get(k);
const catPage = {cuisine:'cuisine.html',salon:'salon.html',entree:'entree.html',chambre:'chambre.html'};

function card(p){
  return `<a class="card" href="produit.html?id=${p.id}"><div class="thumb">${p.image?`<img src="${p.image}" alt="">`:illus(p)}<em>3D</em></div>
  <div class="in"><h3>${L(p.name)}</h3><p>${L(p.desc)}</p><div class="price">${tr('from')} ${price(p.price)}</div></div></a>`;
}
function shell(){
  const cats = Object.keys(STAR.cats), here = location.pathname.split('/').pop() || 'index.html';
  const links = [['index.html',tr('home')],...cats.map(c=>[catPage[c],L(STAR.cats[c])]),['contact.html',tr('contact')]]
    .map(([h,t])=>`<a href="${h}" class="${here===h?'on':''}">${t}</a>`).join('');
  document.getElementById('hdr').innerHTML = `<header class="top"><div class="wrap bar">
   <a href="index.html" class="logo"><i>✦</i><span>STAR<small>MENUISERIES</small></span></a>
   <nav class="main" id="nv">${links}</nav>
   <div class="tools"><button class="${lang==='fr'?'on':''}" onclick="setLang('fr')">FR</button><button class="${lang==='ar'?'on':''}" onclick="setLang('ar')">عربي</button>
   <span class="flags" title="Algérie · Türkiye">${flag('dz')}${flag('tr')}</span><select aria-label="Devise" onchange="setCur(this.value)"><option value="EUR"${cur==='EUR'?' selected':''}>€ EUR</option><option value="DZD"${cur==='DZD'?' selected':''}>DA DZD</option></select>
   <button class="burger" onclick="document.getElementById('nv').classList.toggle('open')">☰</button></div></div></header>`;
  const links2 = cats.map(c=>`<a href="${catPage[c]}">${L(STAR.cats[c])}</a>`).join('');
  document.getElementById('ftr').innerHTML = `<footer><div class="wrap"><div class="fg">
   <div><div class="logo"><i>✦</i><span>STAR<small>MENUISERIES</small></span></div><p style="margin-top:14px">${tr('foot')}</p></div>
   <div><h4>${tr('nav')}</h4>${links2}</div>
   <div><h4>${tr('contact')}</h4><a href="tel:+33784885023" dir="ltr">${STAR.phone}</a><a href="mailto:${STAR.email}">${STAR.email}</a><a href="${waLink('')}" target="_blank" rel="noopener">WhatsApp</a></div></div>
   <div class="copy">© ${new Date().getFullYear()} STAR MENUISERIES — ${tr('rights')}</div></div></footer>
   <div id="ast"><div id="astp"><header>${tr('ast_t')}<small>${tr('ast_s')} · ${STAR.phone}</small></header>
   <div class="msg"><p>${tr('ast_hi')}</p></div>
   <div class="qs">${[1,2,3,4].map(i=>`<button onclick="window.open(waLink(tr('ast_m${i}')),'_blank')">${tr('q'+i)}</button>`).join('')}</div>
   <div class="ain"><input id="ain" placeholder="${tr('ast_ph')}" onkeydown="if(event.key==='Enter')astSend()"><button onclick="astSend()" aria-label="Envoyer">➤</button></div></div>
   <button aria-label="WhatsApp" onclick="document.getElementById('astp').classList.toggle('open')">💬</button></div>`;
  const bk=document.getElementById('bk');if(bk&&!/index\.html$|\/$/.test(location.pathname))bk.innerHTML=`<div class="back"><button class="backbtn" onclick="goBack()">${lang==='ar'?'→':'←'} ${tr('ret')}</button></div>`;
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=tr(e.dataset.i18n));
}
function astSend(){const v=document.getElementById('ain').value.trim();window.open(waLink(v||tr('ast_hi')),'_blank')}
function paint(){
  document.documentElement.lang = lang; document.documentElement.dir = lang==='ar'?'rtl':'ltr';
  const open = document.getElementById('astp')?.classList.contains('open');
  shell(); if(open) document.getElementById('astp').classList.add('open');
  if(window.onStar) window.onStar();
}
function setLang(l){lang=l;localStorage.setItem('lang',l);paint()}
function setCur(c){cur=c;localStorage.setItem('cur',c);paint()}
function boot(fn){window.onStar=fn;paint()}

function goBack(){if(history.length>1)history.back();else location.href=window.BACK||'index.html'}
