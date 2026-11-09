# Observer Python et Jupyter en S13

Statut : À COMPLÉTER

1. Ouvrir la démonstration fictive dans 06-ressources/demo.
2. Repérer une variable, un gabarit et une condition.
3. Prédire le résultat d’une modification du public ou de l’action.
4. Observer le résultat si le formateur exécute la cellule ; sinon indiquer « sorties préparées consultées ».
5. Expliquer pourquoi un texte court peut rester faux.

Prédiction théorique proposée par l’assistant à la demande du participant (non testée) : si la valeur de `ACTION` est remplacée avant l’assemblage, la nouvelle action apparaîtra dans les messages qui utilisent cette variable. Leur longueur pourra changer et le contrôle pourra afficher « À raccourcir » si elle dépasse 400 caractères. Dans ce script, modifier seulement `PUBLIC` changera la ligne présentant le public, mais pas les messages : le gabarit `assembler(titre, fait, action)` n’utilise pas cette variable.

Repères dans `../06-ressources/demo/demonstration-s13.py` : variable `ACTION` ; gabarit `return f"« {titre} ». {fait} {action}"` ; condition `len(texte) > seuil` dans `verifier_longueur`.

Observation réelle : aucune exécution déclarée par le participant. Aucun résultat d’exécution ni consultation de sorties préparées n’est attesté. Comparaison prédiction/résultat : À EFFECTUER.
Rôle de Python : exécuter les instructions d’assemblage et les contrôles programmés ; il ne vérifie pas ici la vérité des affirmations.
Rôle de Jupyter : présenter le code, les explications et les sorties des cellules lorsqu’elles sont exécutées ; aucune exécution du notebook n’est attestée ici.
Décision qui reste humaine : confronter les affirmations aux sources, choisir une formulation et décider d’une éventuelle diffusion.

Pourquoi un texte court peut rester faux : le contrôle de longueur compte les caractères ; une affirmation sans preuve peut respecter le seuil. Une longueur acceptable ne démontre ni la vérité ni la validation humaine.

Les explications ci-dessus proviennent de l’assistant ; elles ne constituent pas une démonstration de compréhension personnelle du participant. Statut de l’observation pratique : À COMPLÉTER.

Le notebook S16 communication-assistee.ipynb sera préparé et vérifié avant S16. Le notebook fourni dans les ressources est une démonstration S13 distincte.
