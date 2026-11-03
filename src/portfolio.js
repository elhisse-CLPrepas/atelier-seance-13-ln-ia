const value=(fields,id)=>(fields[id]??'').trim()||'[À compléter]'
export function buildTrace(fields,selection,content){
 const out=['# Comprendre le processus de communication','', 'Séance 13 · Vendredi 6 novembre 2026','Preuve : preuve-13-processus-communication-assistee','Statut de la rédaction : BROUILLON — À RELIRE','']
 for(const [id,label] of content.champs)out.push('## '+label,value(fields,id),'')
 out.push('## Autoévaluation',...content.criteres.map((c,i)=>'- ['+(selection[i]?'x':' ')+'] '+c),'','Décision du pilote : en attente.','')
 return out.join('\n')
}
export function buildIndex(fields){return ['# Entrée à ajouter au portfolio du Module 04','','Séance du 6 novembre 2026 · S13','Preuve : preuve-13-processus-communication-assistee','Trace : ../04-communication/comprendre-processus-communication.md','Source indiquée : '+value(fields,'source'),'Passage : '+value(fields,'extrait'),'Décision du candidat et raison : '+value(fields,'decision'),'Observation du pilote : [à renseigner après observation]','Date et décision du pilote : [en attente]',''].join('\n')}
