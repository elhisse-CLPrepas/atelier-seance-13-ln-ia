import {readFile,writeFile} from 'node:fs/promises'
import path from 'node:path'
const base=new URL('../',import.meta.url)
const get=p=>readFile(new URL(p,base),'utf8')
let html=await get('dist/index.html')
const script=html.match(/<script\b[^>]*\bsrc="([^"]+\.js)"[^>]*><\/script>/)
const css=html.match(/<link\b[^>]*\bhref="([^"]+\.css)"[^>]*>/)
if(!script||!css)throw new Error('Ressources Vite introuvables')
const js=(await get('dist/'+script[1])).replace(/<\/script/gi,'<\\/script')
const style=(await get('dist/'+css[1])).replace(/\/\*# sourceMappingURL=[\s\S]*?\*\//g,'')
html=html.replace(script[0],'').replace(css[0],()=>'<style>'+style+'</style>').replace('</body>',()=>'<script>'+js+'</script></body>')
html=html.replaceAll('="./ressources/','="./public/ressources/').replaceAll('="./assets/','="./public/assets/')
for (const [name,mime] of [['logo-web.webp','image/webp'],['favicon.png','image/png']]){
 const pic=(await readFile(new URL('public/assets/'+name,base))).toString('base64')
 html=html.replaceAll('./public/assets/'+name,'data:'+mime+';base64,'+pic)
}
await writeFile(new URL('OUVRIR-SEANCE-13.html',base),html)
console.log('OUVRIR-SEANCE-13.html est prêt pour un double-clic après extraction.')
