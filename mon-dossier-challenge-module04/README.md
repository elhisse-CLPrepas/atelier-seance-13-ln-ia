# Mon dossier challenge — Module 04

Référence pédagogique LN-IA pour les séances **13 à 16**, à partir du guide produit en séance 12. Les exemples du formateur sont fictifs ; les modèles candidat restent à compléter et la validation appartient au pilote humain.

## Ouvrir le module

- **Site GitHub Pages :** https://elhisse-clprepas.github.io/mon-dossier-challenge-module04/
- **Présentation locale :** [OUVRIR-MODULE-04.html](OUVRIR-MODULE-04.html), à ouvrir par double-clic en conservant tout le dossier.
- **Dépôt autonome :** https://github.com/elhisse-CLPrepas/mon-dossier-challenge-module04

| Séance | Accès en ligne | Fiche de travail |
|---|---|---|
| S13 — Comprendre | [Ouvrir S13](https://elhisse-clprepas.github.io/mon-dossier-challenge-module04/OUVRIR-MODULE-04.html#seance-13) | [Comprendre le processus](04-communication/comprendre-processus-communication.md) |
| S14 — Manipuler | [Ouvrir S14](https://elhisse-clprepas.github.io/mon-dossier-challenge-module04/OUVRIR-MODULE-04.html#seance-14) | [Message court](04-communication/message-court-projet.md) |
| S15 — Automatiser | [Ouvrir S15](https://elhisse-clprepas.github.io/mon-dossier-challenge-module04/OUVRIR-MODULE-04.html#seance-15) | [Règles d’automatisation](04-communication/comprendre-regles-automatisation.md) |
| S16 — Produire | [Ouvrir S16](https://elhisse-clprepas.github.io/mon-dossier-challenge-module04/OUVRIR-MODULE-04.html#seance-16) | [Variantes et contrôles](04-communication/variantes-communication-projet.md) |

## Retrouver les ressources

- `00-pilotage/` : calendrier, conduite et objectifs.
- `03-sources/` : fiche source et liens du projet de référence.
- `04-communication/` : fiches à compléter pour chaque séance.
- `05-automatisation/` : observations Python et Jupyter.
- `06-ressources/` : guides, affiches, documents et démonstrations.
- `07-portfolio/` : modèles de preuves.

Dans la présentation, ouvrir **Guide S12 et expériences** : liens du projet en ligne, consultation locale V1/V2/journal, trois expériences interactives et accès Python/Jupyter. Suivre [le parcours guidé](06-ressources/demo/parcours-guide-s12-s13.md).

Les sauvegardes présentes dans `06-ressources/sauvegardes/` restent locales et sont exclues de Git. Les exemples ne constituent pas des preuves personnelles.

## Versionner et publier les prochaines séances

Ce dossier possède son propre dépôt Git, indépendant du dépôt parent de l’atelier S13. Exécuter les commandes **depuis ce dossier** :

```powershell
git status
git add .
git diff --cached --stat
git commit -m "Actualiser les supports de la séance 14"
git push origin main
```

Relire les fichiers sélectionnés avant le commit. Conserver les informations confidentielles et les traces personnelles hors du dossier public.

GitHub Pages publie la racine `/` de la branche `main`. Le fichier `.nojekyll` conserve les ressources statiques ; `index.html` ouvre la présentation en gardant l’ancre de séance. Aucune installation ni compilation n’est nécessaire. Le déploiement se suit dans l’onglet **Actions** du dépôt.

L’ancienne copie du dossier dans le dépôt `atelier-seance-13-ln-ia` reste un instantané historique. Cette version autonome est désormais la référence à mettre à jour.
