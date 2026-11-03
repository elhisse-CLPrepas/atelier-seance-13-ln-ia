import './vendor/bootstrap.min.css'
import './style.css'
import content from './seance.json'
import {buildTrace,buildIndex} from './portfolio.js'

const $=selector=>document.querySelector(selector)
const $$=selector=>Array.from(document.querySelectorAll(selector))
const pad=n=>String(n).padStart(2,'0')
const storageKey='lnia.s13.automne2026.v1'
let saved={}
try {saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{}} catch {}
const state={fields:{},criteria:Array(content.criteres.length).fill(false),quiz:Array(content.quiz.length).fill(null)}
for(const [id] of content.champs){if(typeof saved.fields?.[id]==='string')state.fields[id]=saved.fields[id].slice(0,3000)}
state.criteria=state.criteria.map((_,i)=>saved.criteria?.[i]===true)
state.quiz=state.quiz.map((_,i)=>Number.isInteger(saved.quiz?.[i])&&saved.quiz[i]>=0&&saved.quiz[i]<content.quiz[i][1].length?saved.quiz[i]:null)
let toastTimer
function tell(message){$('#toast').textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{$('#toast').textContent=''},2600)}
function persist(){
 try{localStorage.setItem(storageKey,JSON.stringify(state));$('#save-state').textContent='Brouillon conservé dans ce navigateur. Téléchargez la trace pour la garder dans votre dossier.'}
 catch{$('#save-state').textContent='Cette fenêtre ne peut pas mémoriser les réponses. Téléchargez la trace avant de la fermer.'}
}
function route(initial=false){
 const key=location.hash.slice(1)
 const page=content.rubriques.find(s=>s[0]===key)??content.rubriques[0]
 $$('.page').forEach(sec=>{sec.classList.toggle('is-active',sec.id===page[0])})
 $$('[data-nav]').forEach(a=>{if(a.dataset.nav===page[0])a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})
 $('#crumb-page').textContent=page[1];$('#menu-toggle').setAttribute('aria-expanded','false')
 if(page[0]==='portfolio')refreshProof()
 if(!initial){window.scrollTo({top:0,behavior:'instant'});$('#contenu').focus({preventScroll:true})}
}
$('#menu-toggle').addEventListener('click',e=>e.currentTarget.setAttribute('aria-expanded',String(e.currentTarget.getAttribute('aria-expanded')!=='true')))
window.addEventListener('hashchange',()=>route())
$$('[data-nav]').forEach(item=>item.addEventListener('click',()=>$('#menu-toggle').setAttribute('aria-expanded','false')))

const dlg=$('#projection');let slide=0,notes=false
function drawSlide(){
 const [title,lead,items,note]=content.slides[slide]
 $('#slide-no').textContent='DIAPOSITIVE '+pad(slide+1)+' / '+pad(content.slides.length)
 $('#slide-title').textContent=title;$('#slide-lead').textContent=lead
 $('#slide-items').replaceChildren(...items.map(t=>{const el=document.createElement('li');el.textContent=t;return el}))
 $('#slide-notes').textContent='Pour le formateur · '+note;$('#slide-notes').hidden=!notes
 $('#slide-note-toggle').setAttribute('aria-pressed',String(notes))
 $('#slide-back').disabled=slide===0;$('#slide-forward').disabled=slide===content.slides.length-1
}
function shiftSlide(i){slide=Math.max(0,Math.min(i,content.slides.length-1));drawSlide()}
$$('[data-slide]').forEach(b=>b.addEventListener('click',()=>{notes=false;shiftSlide(Number(b.dataset.slide));dlg.showModal();$('#project-close').focus()}))
$('#slide-forward').onclick=()=>shiftSlide(slide+1);$('#slide-back').onclick=()=>shiftSlide(slide-1)
$('#slide-note-toggle').onclick=()=>{notes=!notes;drawSlide()}
$('#project-close').onclick=()=>dlg.close()
$('#project-full').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(dlg.requestFullscreen)await dlg.requestFullscreen();else tell('Utilisez le mode plein écran de votre navigateur.')}catch{tell('Le mode projection reste disponible dans cette fenêtre.')}}
dlg.addEventListener('close',()=>{if(document.fullscreenElement===dlg)document.exitFullscreen().catch(()=>{});notes=false})
document.addEventListener('fullscreenchange',()=>$('#project-full').textContent=document.fullscreenElement?'Quitter le plein écran':'Plein écran')
document.addEventListener('keydown',e=>{if(!dlg.open)return;const map={ArrowRight:slide+1,ArrowLeft:slide-1,Home:0,End:content.slides.length-1};if(Object.hasOwn(map,e.key)){e.preventDefault();shiftSlide(map[e.key])}})

const demo=[
 ['Lire le guide et ouvrir le journal','G1 indique de garder V1 et V2 et de comparer leur contenu. J1 met en regard les corrections et leurs raisons. Le cas fictif s’adresse ici à des formateurs débutants.','Guide V2 · étape 5 / Journal · ligne Forme','<div class="demopair"><div><strong>PASSAGE G1</strong>« Conserver V1 et V2 sous deux noms distincts et comparer leur contenu. »</div><div><strong>PASSAGE J1</strong>Le journal remplace « épistémologie du modèle » par « ce que l’IA sait ou ne sait pas vérifier ».</div></div>'],
 ['Donner un mandat de lecture','Mission de l’agent : retrouver deux faits dans les deux fichiers fictifs, citer le passage et signaler toute information absente. Le rapport de lecture met fin à la mission.','Lecture seule · deux fichiers · aucun envoi','<div class="demopair"><div><strong>PROPOSITION À LA MAIN</strong>Nous avons gardé deux versions et noté les corrections.</div><div><strong>ACTION UNIQUE</strong>Souhaitez-vous voir un extrait du journal de corrections ?</div></div>'],
 ['Confronter deux réponses simulées','Ces formulations sont préparées pour la démonstration. Demandez au groupe laquelle comporte une affirmation impossible à étayer.','Deux brouillons intégrés · simulation hors ligne','<div class="demopair"><div><strong>BROUILLON A</strong>Vous relisez un support produit avec l’IA. Le journal présente les corrections avant et après et en donne les raisons. Souhaitez-vous voir un extrait du journal de corrections ?</div><div><strong>BROUILLON B</strong>Vous relisez un support produit avec l’IA. Ce guide garantit un document sans erreur. Souhaitez-vous voir un extrait du journal de corrections ?</div></div>'],
 ['Observer ce que Python mesure','Dans le notebook, exécutez les quatre cellules préparées. Le script compte les caractères et repère l’action écrite. Les deux textes passent le test. Quelle information faut-il encore examiner ?','Sorties du script fourni · seuil des 400 caractères','<div class="demopair"><div><strong>A · 177 CARACTÈRES</strong>Action repérée une fois. Le journal soutient le contenu.</div><div><strong>B · 144 CARACTÈRES</strong>Action repérée une fois. La garantie reste sans appui.</div></div>'],
 ['Corriger le message et garder la raison','Le candidat remplace la garantie par le fait J1. Il garde le statut « brouillon à relire » et distingue sa correction de la décision de validation.','Arbitrage pédagogique préparé · à expliquer à voix haute','<div class="demopair"><div><strong>AVANT</strong>Ce guide garantit un document sans erreur.</div><div><strong>APRÈS</strong>Le journal présente les corrections avant et après et en donne les raisons.</div></div>']
]
let step=0
function showDemo(n){
 step=Math.min(Math.max(0,n),demo.length-1)
 const [t,p,ref,detail]=demo[step];const el=$('#demo-panel');el.replaceChildren()
 for(const [tag,txt,cl] of [['small','ÉTAPE '+pad(step+1)+' / 05','src-ref'],['h3',t,''],['p',p,'']]){
   const e=document.createElement(tag);e.className=cl;e.textContent=txt;el.append(e)
 }
 el.insertAdjacentHTML('beforeend',detail)
 const foot=document.createElement('p');foot.className='src-ref mt-3 mb-0';foot.textContent=ref;el.append(foot)
 $$('[data-demo]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.demo)===step)))
 $('#demo-prev').disabled=step===0;$('#demo-next').disabled=step===demo.length-1
}
$$('[data-demo]').forEach(b=>b.onclick=()=>showDemo(Number(b.dataset.demo)))
$('#demo-prev').onclick=()=>showDemo(step-1);$('#demo-next').onclick=()=>showDemo(step+1)
function lengthCheck(){const n=Array.from($('#length-input').value).length;$('#length-result').textContent=n+' caractère'+(n===1?'':'s')+' · '+(n>400?'À raccourcir':'Longueur acceptable')+' · fidélité à vérifier'}
$('#length-input').oninput=lengthCheck;$$('[data-length]').forEach(b=>b.onclick=()=>{$('#length-input').value='A'.repeat(Number(b.dataset.length));lengthCheck()})

let flash=0,flipped=false
function showCard(){
 const [q,a]=content.cards[flash];$('#flash-count').textContent='CARTE '+pad(flash+1)+' / '+pad(content.cards.length)
 $('#flash-q').textContent=q;$('#flash-a').textContent=a;$('#flash-a').hidden=!flipped
 $('#flip').textContent=flipped?'Masquer la réponse':'Révéler la réponse';$('#flip').setAttribute('aria-expanded',String(flipped))
 $('#flash-prev').disabled=flash===0;$('#flash-next').disabled=flash===content.cards.length-1
}
$('#flip').onclick=()=>{flipped=!flipped;showCard()};$('#flash-next').onclick=()=>{flash++;flipped=false;showCard()};$('#flash-prev').onclick=()=>{flash--;flipped=false;showCard()}

$$('[data-copy]').forEach(b=>b.onclick=async()=>{
 const text=content.prompts[Number(b.dataset.copy)][2];let success=false
 try{await navigator.clipboard.writeText(text);success=true}catch{}
 if(!success){const sel=window.getSelection(),range=document.createRange();range.selectNodeContents($('#prompt-'+b.dataset.copy));sel.removeAllRanges();sel.addRange(range);try{success=document.execCommand('copy')}catch{}if(success)sel.removeAllRanges()}
 tell(success?'Prompt copié.':'Texte sélectionné. Utilisez Ctrl+C ou Copier.')
})

function cleanQuizFeedback(){
 $$('.qfeedback').forEach(e=>e.hidden=true);$('#quiz-result').textContent='Six décisions à examiner. Vous recevez une explication pour chacune après correction.'
}
$('#quiz-form').addEventListener('change',e=>{if(e.target.name?.startsWith('q')){state.quiz[Number(e.target.name.slice(1))]=Number(e.target.value);cleanQuizFeedback();persist()}})
state.quiz.forEach((v,i)=>{if(v!==null)$('#quiz-form input[name="q'+i+'"][value="'+v+'"]').checked=true})
$('#quiz-form').onsubmit=e=>{
 e.preventDefault();let good=0,answered=0
 content.quiz.forEach(([,choices,correct,why],i)=>{
  const resp=state.quiz[i],fb=$('#feedback-'+i);fb.hidden=false;fb.className='qfeedback'
  if(resp===null){fb.textContent='Sans réponse · choisissez une option pour cette situation.';return}
  answered++;if(resp===correct){good++;fb.classList.add('good');fb.textContent='Réponse juste. '+why}
  else{fb.classList.add('retry');fb.textContent='À reprendre. Réponse attendue : '+choices[correct]+'. '+why}
 })
 $('#quiz-result').textContent=good+' / '+content.quiz.length+' réponses justes · '+answered+' situations traitées. Le résultat est formatif. La décision du pilote se fonde sur la trace expliquée.'
}
$('#quiz-reset').onclick=()=>{$('#quiz-form').reset();state.quiz.fill(null);$$('#quiz-form input').forEach(el=>el.checked=false);cleanQuizFeedback();persist()}

function checkLabels(){const n=state.criteria.filter(Boolean).length;$('#check-count').textContent=n+' / '+content.criteres.length+' points déclarés par le candidat. Décision du pilote en attente.'}
$$('[data-criterion]').forEach((el,i)=>{el.checked=state.criteria[i];el.onchange=()=>{state.criteria[i]=el.checked;persist();checkLabels();refreshProof()}})
for(const [id] of content.champs){
 const el=$('#f-'+id);el.value=state.fields[id]??'';el.oninput=()=>{state.fields[id]=el.value;persist();refreshProof()}
}
$('#worksheet').onsubmit=e=>e.preventDefault()
$('#ask-erase').onclick=()=>{$('#erase-confirm').hidden=false;$('#erase-no').focus()}
$('#erase-no').onclick=()=>{$('#erase-confirm').hidden=true;$('#ask-erase').focus()}
$('#erase-yes').onclick=()=>{
 state.fields={};state.criteria.fill(false);state.quiz.fill(null)
 for(const [id] of content.champs)$('#f-'+id).value=''
 $$('[data-criterion], #quiz-form input').forEach(input=>input.checked=false)
 try{localStorage.removeItem(storageKey)}catch{}
 cleanQuizFeedback();checkLabels();refreshProof();$('#erase-confirm').hidden=true
 $('#save-state').textContent='Les saisies de cette séance ont été effacées dans ce navigateur.'
 $('#ask-erase').focus();tell('Fiche S13 remise à zéro.')
}
const getTrace=()=>buildTrace(state.fields,state.criteria,content)
const getIndex=()=>buildIndex(state.fields)
const downloadURLs={trace:null,index:null}
function refreshProof(){
 const trace=getTrace(), index=getIndex()
 $('#proof-preview').textContent=trace
 for(const [type,body] of Object.entries({trace,index})){
  const previous=downloadURLs[type]
  downloadURLs[type]=URL.createObjectURL(new Blob([body],{type:'text/markdown;charset=utf-8'}))
  $$('[data-export="'+type+'"]').forEach(link=>link.href=downloadURLs[type])
  if(previous)setTimeout(()=>URL.revokeObjectURL(previous),1000)
 }
}
$('#copy-proof').onclick=async()=>{
 try {await navigator.clipboard.writeText(getTrace());tell('Trace copiée.')}
 catch {const s=window.getSelection(),r=document.createRange();r.selectNodeContents($('#proof-preview'));s.removeAllRanges();s.addRange(r);tell('Trace sélectionnée. Utilisez Ctrl+C ou Copier.')}
}
route(true);showDemo(0);showCard();checkLabels();refreshProof();lengthCheck()
