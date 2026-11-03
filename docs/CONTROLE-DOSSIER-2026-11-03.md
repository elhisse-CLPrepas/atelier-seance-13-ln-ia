# Contrôle du dossier — 3 novembre 2026

## Conclusion

Le pack S13 livré passe ses contrôles automatiques et sa démonstration Python. La prochaine action est une répétition sur le poste d’animation avant le 6 novembre, avec relecture pédagogique du pilote. S14 est prévue le 9 novembre ; son cadrage est présent dans le prompt maître, mais son pack complet n’est pas fourni ici.

## Contrôles réalisés

| Contrôle | Observation vérifiable | Limite ou suite |
|---|---|---|
| Structure et scripts | Lecture de `package.json`, des trois scripts `.mjs`, des modules principaux et des documents de démarrage. | Aucun fichier `AGENTS.md` trouvé dans le dossier ou aux niveaux parents examinés. |
| Version du poste | Node.js 24.12.0 ; npm 11.6.2. | Version Node compatible avec la contrainte déclarée. |
| `npm.cmd run check` | Commande terminée avec succès. Deux pages contrôlées : `dist/index.html` et `OUVRIR-SEANCE-13.html`. | Vérification statique et assertions ; aucune interaction dans un navigateur. |
| Supports | 22 liens de supports locaux par page contrôlée, fichiers présents et non vides. | Présence ne signifie pas validation du rendu ou du contenu de chaque pièce. |
| Contenu | 11 rubriques, 18 diapositives, 8 cartes, 6 questions de quiz et 4 prompts. | Pas de validation pédagogique prononcée. |
| Exports | Assertions de génération et conservation du texte Markdown réussies sur fiche fictive. | Téléchargement réel et réouverture depuis le navigateur à tester. |
| Python | Exécution du script fourni : A = 177 caractères, B = 144 ; 400 accepté, 401 signalé. | Interface Jupyter et exécution du notebook non testées pendant ce contrôle. |
| Encodage | Lecture UTF-8 des sources françaises correcte. | L’affichage par défaut du terminal déforme certains accents ; aucune conversion des fichiers n’a été appliquée. |
| Reproductibilité | `package-lock.json` présent ; absence de `node_modules`. | Installation et compilation non exécutées ; synchronisation sources/dist non établie. |
| Historique | `git status` indique que ce dossier n’est pas un dépôt Git. | Pas de comparaison avec un état antérieur. |

## Point pratique relevé

La commande `npm run check` via `npm.ps1` est bloquée par la politique d’exécution PowerShell du poste. La même vérification réussit avec `npm.cmd run check`. Le README documente cette méthode sans changement de configuration système.

## Vérifications restant à effectuer

1. Ouvrir la version à double-clic sur le poste de projection : navigation, clavier, notes et téléchargements.
2. Remplir une fiche fictive, recharger la page, exporter les deux fichiers Markdown et les rouvrir.
3. Tester le PDF remplissable et le notebook si leur utilisation est prévue.
4. Pour modifier le site : installer les dépendances, reconstruire et relancer le contrôle avant utilisation de la nouvelle version.
5. Faire relire le guide V2 et les messages par le pilote, puis recueillir les observations réelles des candidats pendant S13.

Le rapport antérieur `MISE-A-JOUR-S13.md` décrit d’autres vérifications documentaires. Elles n’ont pas été répétées ici. Les liens externes n’ont pas été contrôlés. Aucun document Office/PDF n’a été rendu visuellement pendant cette intervention.

## Fichiers ajoutés

- `README.md` : ouverture, structure, commandes, état vérifié, prochaine étape et calendrier.
- Le présent rapport : preuves du contrôle et limites.

Les sources pédagogiques et les fichiers livrés n’ont pas été modifiés.
