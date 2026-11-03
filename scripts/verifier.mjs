import {buildTrace,buildIndex} from '../src/portfolio.js'
import assert from 'node:assert/strict'
import {readFile,stat} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {Script} from 'node:vm'
const root=new URL('../',import.meta.url)
const read=(p)=>readFile(new URL(p,root),'utf8')
const data=JSON.parse(await read('src/seance.json'))
const mandatory=['accueil','presentation','methode','demonstration','atelier','prompts','flashcards','quiz','validation','portfolio','ressources']
assert.deepEqual(data.rubriques.map(x=>x[0]),mandatory)
assert.equal(data.slides.length,18);assert.equal(data.cards.length,8);assert.equal(data.quiz.length,6)
assert.equal(data.prompts.length,4);assert.equal(data.questions.length,6)
for (const [,choices,i,why] of data.quiz){assert(i>=0&&i<choices.length);assert(why.length>20)}
for (const [p,rel] of [['dist/index.html','dist/'],['OUVRIR-SEANCE-13.html','']]){
 const html=await read(p)
 assert.equal((html.match(/<section id="/g)||[]).length,11)
 for(const id of mandatory)assert(html.includes('id="'+id+'"')&&html.includes('href="#'+id+'"'))
 assert(html.includes('property="og:image"')&&html.includes('name="description"')&&html.includes('name="twitter:card"'))
 const ld=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(ld.inLanguage,'fr')
 const links=[...html.matchAll(/\b(?:href|src)="(\.\/[^"#]+)"/g)].map(x=>x[1])
 const unique=new Set(links)
 for(const href of unique){const f=await stat(new URL(rel+href.slice(2),root));assert(f.isFile()&&f.size>0,href)}
 const resources=[...new Set([...html.matchAll(/href="\.\/(?:public\/)?(ressources\/[^"]+)"/g)].map(m=>m[1]))]
 assert.equal(resources.length,22)
 assert(!/<(?:script|link)[^>]+(?:src|href)="https?:[^"]+\.(?:js|css)"/i.test(html))
 if(!rel){
  assert(!/<script[^>]+src=|type="module"/.test(html))
  const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1]
  new Script(script)
 }
 console.log(p+' : 11 rubriques et '+resources.length+' supports locaux vérifiés.')
}
const sheet=await readFile(new URL('src/vendor/bootstrap.min.css',root))
const gitHash=createHash('sha1').update('blob '+sheet.length+'\0').update(sheet).digest('hex')
console.log('Bootstrap local : empreinte Git '+gitHash)
console.log('18 diapositives, 8 cartes, 6 questions et 4 prompts. Contrôles terminés.')

const values={source:'Guide V2 à relire',extrait:'Conserver V1 et V2',decision:'Remplacer la garantie par un fait.'}
const trace=buildTrace(values,[true,false,false,false],data),entry=buildIndex(values)
assert(trace.includes(values.source)&&trace.includes(values.decision)&&trace.includes('- [x]')&&trace.includes('[À compléter]'))
assert(entry.includes('../04-communication/comprendre-processus-communication.md')&&entry.includes(values.extrait)&&entry.includes('[en attente]'))
assert.equal(await new Blob([trace],{type:'text/markdown;charset=utf-8'}).text(),trace)
console.log('Exports de la trace et de l’entrée de preuve vérifiés sur une fiche fictive.')
