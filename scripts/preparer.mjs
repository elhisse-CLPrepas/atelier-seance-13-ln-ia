import { readFile, writeFile } from 'node:fs/promises'
const d = JSON.parse(await readFile(new URL('../src/seance.json', import.meta.url), 'utf8'))
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const digits = n => String(n).padStart(2,'0')
const headings = {
  presentation:['Projection collective','La présentation','Dix-huit diapositives pour conduire le groupe du guide S12 à la preuve de compréhension. Ouvrez une diapositive ou démarrez au début.'],
  methode:['Avant les outils','Six questions pour cadrer le message','Ouvrez chaque question. Comparez votre réponse à l’exemple construit pour un public de formateurs débutants.'],
  demonstration:['Cas fictif du Module 03','Du passage source à la correction','Suivez cinq étapes à projeter. L’agent travaille sur le guide et son journal. Le candidat décide de la formulation qu’il peut justifier.'],
  atelier:['Pratique accompagnée','Ma fiche de compréhension','Utilisez votre guide S12 sur votre poste ou le cas fictif de Samira. Conservez une information vérifiable, rédigez votre version et expliquez une décision.'],
  prompts:['Quatre missions à copier','Donner une mission à l’IA','Choisissez le rôle adapté. Précisez les fichiers disponibles, le résultat attendu et le moment où l’assistant doit rendre la main.'],
  flashcards:['Mémorisation active','Les cartes de la séance','Répondez à voix haute avant de retourner la carte. Utilisez-les à deux pour préparer la restitution.'],
  quiz:['Vérification formative','Six décisions à prendre','Choisissez une réponse par situation. L’explication vous aidera à identifier le point à reprendre avant S14.'],
  validation:['Revue avant S14','Expliquer sa décision','Préparez la revue en cochant ce que vous êtes capable de montrer à votre partenaire ou au formateur.'],
  portfolio:['Preuve de compréhension','Classer la trace de S13','Reliez la source, le message et votre correction. Les fichiers téléchargés peuvent être relus dans un éditeur de texte.'],
  ressources:['Supports de la séance','Les ressources à emporter','Les documents de cette liste sont inclus dans le pack. Utilisez le PDF pour projeter ou imprimer, et les fichiers modifiables pour préparer votre intervention.']
}
const icons = {
 home:'M3 10 12 3l9 7v10h-6v-7H9v7H3z',play:'M7 4l13 8-13 8z',compass:'M19 5l-4 10-10 4 4-10z',layers:'M2 8l10-5 10 5-10 5zM3 12l9 5 9-5M3 16l9 5 9-5',edit:'M4 19l4-1L20 6l-3-3L5 15zM13 6l4 4',braces:'M9 3H7v6l-3 3 3 3v6h2M15 3h2v6l3 3-3 3v6h-2',cards:'M7 5h13v14H7zM4 8H2v13h13v-1',help:'M8 8a4 4 0 0 1 8 0c0 3-4 3-4 7m0 4h.01',check:'M3 12l6 6L21 5',folder:'M2 6h7l2 3h11v11H2z',book:'M3 5h6l3 2 3-2h6v14h-6l-3 2-3-2H3zM12 7v14'
}
const svg = k=>'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="'+icons[k]+'"/></svg>'
const groups=[
['Animer et projeter',[
 ['projection/seance-13-du-guide-au-message.pptx','Présentation éditable','PPTX'],['projection/seance-13-du-guide-au-message.pdf','Présentation à projeter','PDF'],['documents/conducteur-formateur-s13.pdf','Conducteur formateur · 90 minutes','PDF'],['documents/conducteur-formateur-s13.docx','Conducteur formateur modifiable','DOCX'],['atelier/affiche-s13.png','Affiche de la séance du 6 novembre','PNG']
]],['Remettre aux candidats',[
 ['documents/fiche-candidat-s13.pdf','Fiche candidat à remplir ou imprimer','PDF'],['documents/fiche-candidat-s13.docx','Fiche candidat modifiable','DOCX'],['documents/reperes-agents-python-jupyter-s13.pdf','Repères sur les agents, Python et Jupyter','PDF'],['documents/reperes-agents-python-jupyter-s13.docx','Repères techniques modifiables','DOCX'],['atelier/comprendre-processus-communication.md','Modèle de trace S13','MD'],['atelier/preuves-module-04.md','Entrée du portfolio à compléter','MD']
]],['Rejouer la démonstration',[
 ['demo/fiche-source-s12.md','Fiche source pour le cas fictif','MD'],['demo/mission-agent-s13.md','Mission de lecture pour un agent','MD'],['demo/demonstration-s13.py','Script Python exécutable','PY'],['demo/demonstration-s13.ipynb','Notebook Jupyter avec sorties','IPYNB'],['demo/sorties-observees.md','Relevé des sorties observées','MD']
]],['Retrouver les sources pédagogiques',[
 ['sources/guide-pratique-v1.md','Guide S12 · première version','MD'],['sources/guide-pratique-v2-a-relire.md','Guide S12 · V2 à relire','MD'],['sources/journal-corrections-v1-v2.md','Journal S12 · cinq corrections décrites','MD'],['sources/prompt-maitre-module-04.md','Prompt maître de conduite du Module 04','MD'],['atelier/prompts-seance-13.md','Les quatre prompts de la séance','MD'],['atelier/capsule-fin-module-03.md','Capsule de clôture S12 · introduire les agents','MD']
]]]
const values={}
values.nav=d.rubriques.map(([id,t,icon],n)=>'<a href="#'+id+'" data-nav="'+id+'">'+svg(icon)+'<span>'+t+'</span><small>'+digits(n+1)+'</small></a>').join('')
values.calendar=d.cal.map(([n,date,v,copy],i)=>'<article class="session '+(i===0?'current':'')+'"><small>S'+n+' / '+date+'</small><h3>'+v+'</h3><p>'+copy+'</p></article>').join('')
values.slideindex=d.slides.map(([t],i)=>'<button class="s-index" data-slide="'+i+'"><span>'+digits(i+1)+'</span><b>'+escape(t)+'</b><i aria-hidden="true">↗</i></button>').join('')
values.questions=d.questions.map(([a,b,c],i)=>'<details class="qcard"><summary><small>'+digits(i+1)+' / '+a+'</small><b>'+escape(b)+'</b><i aria-hidden="true">+</i></summary><p>'+escape(c)+'</p></details>').join('')
values.roles=d.roles.map(([a,b])=>'<div><b>'+a+'</b><p>'+escape(b)+'</p></div>').join('')
values.demobuttons=['Lire la source','Borner la mission','Comparer','Vérifier','Corriger'].map((a,i)=>'<button type="button" data-demo="'+i+'"><small>'+digits(i+1)+'</small> '+a+'</button>').join('')
values.fields=d.champs.map(([id,label,hint],i)=>'<div class="formfield '+([0,1,8,9,10].includes(i)?'wide':'')+'"><label for="f-'+id+'">'+digits(i+1)+' &nbsp; '+escape(label)+'</label>'+(i===1||i>=8?'<textarea class="form-control" rows="2" ':'<input class="form-control" type="text" ')+'id="f-'+id+'" name="'+id+'" maxlength="3000" placeholder="'+escape(hint)+'">'+(i===1||i>=8?'</textarea>':'')+'</div>').join('')
values.prompts=d.prompts.map(([a,b,c],i)=>'<article class="promptcard"><small>'+a+'</small><h3>'+b+'</h3><p id="prompt-'+i+'">'+escape(c)+'</p><button class="mini" data-copy="'+i+'">Copier le prompt ⧉</button></article>').join('')
values.quiz=d.quiz.map(([q,options],i)=>'<fieldset class="quizq"><legend><span>'+digits(i+1)+'</span> '+escape(q)+'</legend>'+options.map((s,k)=>'<label><input class="form-check-input" type="radio" value="'+k+'" name="q'+i+'"> <span>'+escape(s)+'</span></label>').join('')+'<p class="qfeedback" id="feedback-'+i+'" hidden></p></fieldset>').join('')
values.criteria=d.criteres.map((c,i)=>'<label class="criterion"><input class="form-check-input" type="checkbox" data-criterion="'+i+'"> <span>'+escape(c)+'</span></label>').join('')
values.resources=groups.map(([title,entries])=>'<div class="resource-group"><h3>'+title+'</h3><div class="downloads">'+entries.map(([p,t,fmt])=>'<a href="./ressources/'+p+'" download><span class="format">'+fmt+'</span><span>'+escape(t)+'</span><b aria-hidden="true">↓</b></a>').join('')+'</div></div>').join('')
for(const [id,[k,title,intro]] of Object.entries(headings))values['head:'+id]='<div class="section-head"><p class="eyebrow"><i></i> '+escape(k.toUpperCase())+'</p><h2 id="titre-'+id+'">'+escape(title)+'</h2><p>'+escape(intro)+'</p></div>'
let baseURL
if (process.env.ATELIER_PUBLIC_URL) {
  baseURL=new URL(process.env.ATELIER_PUBLIC_URL)
  if(!['http:','https:'].includes(baseURL.protocol)) throw new Error('ATELIER_PUBLIC_URL doit être une URL HTTP(S) publique')
  if(!baseURL.pathname.endsWith('/')) baseURL.pathname+='/'
}
values.ogimage=baseURL?escape(new URL('ressources/atelier/affiche-s13.png',baseURL).href):'./ressources/atelier/affiche-s13.png'
values.canonical=baseURL?'<link rel="canonical" href="'+escape(baseURL.href)+'"><meta property="og:url" content="'+escape(baseURL.href)+'">':''
values.jsonld=JSON.stringify({'@context':'https://schema.org','@type':'LearningResource',name:'Du guide au message — séance 13',inLanguage:'fr',educationalLevel:'Initiation',learningResourceType:'Atelier de formation',timeRequired:'PT90M',author:{'@type':'Person',name:'Abderrahman El Hisse'},isPartOf:{'@type':'Course',name:'Challenge 100 Jours — Apprendre à produire avec l’IA'},...(baseURL?{url:baseURL.href}:{})}).replaceAll('<','\\u003c')
const tmpl=await readFile(new URL('../src/atelier.html',import.meta.url),'utf8')
const page=tmpl.replace(/\{\{([a-z:]+)\}\}/g,(_,k)=>{if(!(k in values))throw new Error('Clé inconnue '+k);return values[k]})
await writeFile(new URL('../index.html',import.meta.url),page)
