const pr=(id,cat,type,dims,price,f,s,m,nf,na,df,da,x)=>Object.assign({id,cat,type,dims,price,def:{f,s,m},name:{fr:nf,ar:na},desc:{fr:df,ar:da}},x||{});
/* ===== STAR MENUISERIES — données du site (modifiez ici prix, produits, couleurs) ===== */
const STAR = {
  phone: '+33 7 84 88 50 23', wa: '33784885023', email: 'islamefh2@gmail.com',
  rate: 150, // 1 € = 150 DA (taux modifiable)
  colors: [
    {id:'ivoire', hex:'#f1ede4', fr:'Blanc ivoire', ar:'أبيض عاجي'},
    {id:'sable',  hex:'#cdbba0', fr:'Sable',        ar:'رملي'},
    {id:'sauge',  hex:'#8a9a86', fr:'Vert sauge',   ar:'أخضر مريمي'},
    {id:'nuit',   hex:'#1f2c45', fr:'Bleu nuit',    ar:'أزرق ليلي'},
    {id:'bordeaux',hex:'#5b1f2a',fr:'Bordeaux',     ar:'عنابي'},
    {id:'graphite',hex:'#43464b',fr:'Graphite',     ar:'رمادي فحمي'},
    {id:'noir',   hex:'#17171a', fr:'Noir mat',     ar:'أسود'},
    {id:'champagne',hex:'#c9a96a',fr:'Champagne',   ar:'شامبانيا'}
  ],
  mats: [
    {id:'mat',      fr:'Laqué mat',     ar:'طلاء مطفي', rough:.75, metal:0,   grain:0},
    {id:'brillant', fr:'Laqué brillant',ar:'طلاء لامع', rough:.1,  metal:.15, grain:0},
    {id:'chene',    fr:'Bois chêne',    ar:'خشب البلوط',rough:.55, metal:0,   grain:1},
    {id:'noyer',    fr:'Bois noyer',    ar:'خشب الجوز', rough:.5,  metal:0,   grain:2}
  ],
  cats: {
    cuisine:{fr:'Meubles de cuisine', ar:'أثاث المطبخ',  n:'1', sub:{fr:'Cuisines sur mesure, façades et caissons au choix',ar:'مطابخ حسب الطلب مع اختيار الواجهات والهياكل'}},
    salon:  {fr:'Meubles de salon',   ar:'أثاث الصالون', n:'2', sub:{fr:'Meubles TV, buffets et rangements raffinés',ar:'طاولات تلفاز وبوفيهات وخزائن أنيقة'}},
    entree: {fr:"Meubles d'entrée",   ar:'أثاث المدخل',  n:'3', sub:{fr:"Consoles, miroirs et meubles à chaussures",ar:'كونسولات ومرايا وخزائن أحذية'}},
    chambre:{fr:'Meubles de chambre', ar:'أثاث غرف النوم',n:'4', sub:{fr:'Lits, dressings et chevets',ar:'أسرّة وخزائن ملابس وطاولات جانبية'}}
  },
  // dims en mètres [largeur, hauteur, profondeur] — 'image' optionnel : image:'images/mon-meuble.jpg'
  products: [
    pr('k1','cuisine','cuisine',[3.2,2.2,.6],4900,'ivoire','graphite','mat','Cuisine Impériale','مطبخ إمبراطوري','Cuisine linéaire, plan de travail en pierre.','مطبخ خطي بسطح عمل حجري.'),
    pr('k2','cuisine','cuisine',[2.4,2.2,.6],3600,'sauge','ivoire','mat','Cuisine Éclat','مطبخ إكلات','Version compacte, élégante et fonctionnelle.','نسخة مدمجة أنيقة وعملية.'),
    pr('k3','cuisine','ilot',[2.0,.92,1.0],2800,'nuit','champagne','brillant','Îlot Signature','جزيرة سيغنتشر','Îlot central avec tabourets et plan pierre.','جزيرة مركزية مع كراسي وسطح حجري.'),
    pr('k4','cuisine','cuisine',[2.8,2.2,.6],4200,'noir','noir','brillant','Cuisine Opale','مطبخ أوبال','Noir profond laqué, poignées laiton.','أسود عميق لامع بمقابض نحاسية.'),
    pr('k5','cuisine','cuisine',[3.6,2.2,.6],5400,'sable','chene','chene','Cuisine Aurore','مطبخ أورورا','Grande cuisine chêne et sable pour les familles.','مطبخ كبير من البلوط والرمل للعائلات.'),
    pr('k6','cuisine','ilot',[2.4,.92,1.1],3300,'bordeaux','graphite','mat','Îlot Galaxie','جزيرة غالاكسي','Îlot généreux, bordeaux et graphite.','جزيرة واسعة بلون عنابي ورمادي.'),
    pr('s1','salon','cab',[2.2,.55,.42],1290,'ivoire','ivoire','noyer','Meuble TV Opéra','طاولة تلفاز أوبرا','Meuble TV sur pieds dorés, quatre portes.',"طاولة تلفاز بأرجل ذهبية وأربعة أبواب.",{cols:4,rows:1,legs:1}),
    pr('s2','salon','cab',[1.8,.9,.45],1690,'nuit','nuit','brillant','Buffet Versailles','بوفيه فرساي','Buffet trois portes, laque profonde.','بوفيه بثلاثة أبواب وطلاء عميق.',{cols:3,rows:1,legs:1}),
    pr('s3','salon','shelf',[1.6,2.1,.38],2190,'ivoire','chene','chene','Bibliothèque Constellation','مكتبة كونستليشن','Bibliothèque ouverte, cinq étagères.','مكتبة مفتوحة بخمسة رفوف.'),
    pr('s4','salon','table',[1.1,.42,.6],690,'champagne','noir','mat','Table basse Orion','طاولة أوريون','Table basse avec tablette basse et pieds dorés.','طاولة منخفضة برف سفلي وأرجل ذهبية.'),
    pr('s5','salon','shelf',[1.0,1.9,.4],1590,'bordeaux','noyer','noyer','Vitrine Cristal','فاترينة كريستال','Vitrine élégante pour vos plus belles pièces.','فاترينة أنيقة لأجمل مقتنياتك.'),
    pr('s6','salon','cab',[2.6,.5,.45],1790,'graphite','noyer','mat','Meuble TV Galaxie','طاولة تلفاز غالاكسي','Long meuble TV cinq portes.','طاولة تلفاز طويلة بخمسة أبواب.',{cols:5,rows:1,legs:1}),
    pr('e1','entree','cab',[1,.85,.35],890,'sable','sable','mat',"Meuble d'entrée Miroir",'خزانة مدخل بمرآة','Meuble à chaussures avec grand miroir laiton.','خزانة أحذية مع مرآة كبيرة بإطار نحاسي.',{cols:2,rows:1,legs:1,mirror:1}),
    pr('e2','entree','cab',[1.2,.85,.35],720,'ivoire','ivoire','chene','Console Palais','كونسول القصر','Console à quatre tiroirs pour un hall soigné.','كونسول بأربعة أدراج لمدخل راقٍ.',{cols:2,rows:2,legs:1}),
    pr('e3','entree','bench',[1.2,.48,.4],540,'nuit','champagne','mat','Banc Vénus','مقعد فينوس','Banc d\'entrée avec assise rembourrée.','مقعد مدخل بجلسة مبطنة.'),
    pr('e4','entree','rack',[1.2,1.9,.35],980,'sauge','ivoire','mat','Porte-manteau Atlas','حامل معاطف أطلس','Panneau, patères laiton et banc.','لوحة بخطافات نحاسية مع مقعد.'),
    pr('e5','entree','cab',[.8,1.2,.3],620,'graphite','graphite','mat','Chaussures Saphir','خزانة أحذية سفير','Meuble à chaussures haut et fin.','خزانة أحذية عالية ورفيعة.',{cols:2,rows:3}),
    pr('e6','entree','cab',[1.4,.8,.32],850,'bordeaux','champagne','brillant','Console Étoile','كونسول ستار','Console à trois portes avec pieds dorés.','كونسول بثلاثة أبواب وأرجل ذهبية.',{cols:3,rows:1,legs:1,mirror:1}),
    pr('c1','chambre','bed',[1.9,1.25,2.1],1890,'bordeaux','noyer','mat','Lit Majesté','سرير الجلالة','Grande tête de lit et chevets assortis.','رأس سرير كبير مع طاولتين جانبيتين.'),
    pr('c2','chambre','cab',[2.4,2.4,.62],2890,'ivoire','champagne','brillant','Dressing Royal','خزانة ملابس ملكية','Armoire quatre portes, hauteur plafond.','خزانة بأربعة أبواب بارتفاع السقف.',{cols:4,rows:1}),
    pr('c3','chambre','cab',[1.3,.9,.5],1190,'sable','chene','chene','Commode Lune','دولاب لونا','Commode à six tiroirs.','دولاب بستة أدراج.',{cols:2,rows:3,legs:1}),
    pr('c4','chambre','cab',[.5,.5,.4],320,'nuit','champagne','mat','Chevet Étoile','طاولة جانبية ستار','Chevet deux tiroirs, pieds dorés.','طاولة جانبية بدرجين وأرجل ذهبية.',{cols:1,rows:2,legs:1}),
    pr('c5','chambre','cab',[1.1,.78,.45],990,'ivoire','noyer','mat','Coiffeuse Aurore','تسريحة أورورا','Coiffeuse avec miroir encadré de laiton.','تسريحة بمرآة بإطار نحاسي.',{cols:2,rows:1,legs:1,mirror:1}),
    pr('c6','chambre','bed',[1.6,1.1,2.0],1590,'sauge','chene','chene','Lit Céleste','سرير سيليست','Lit 160 cm, tête sauge et cadre chêne.','سرير 160 سم برأس أخضر وإطار بلوط.')
  ]
};
STAR.products.forEach(p=>{ if(!STAR.colors.find(c=>c.id===p.def.s)) p.def.s='ivoire'; });
