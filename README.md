# Atelier LN-IA — Séance 13 : du guide au message

Support du Challenge 100 Jours Automne 2026, Module 04 : communication assistée et automatisation progressive. Séance prévue le **vendredi 6 novembre 2026**, sur 90 minutes avec un prolongement possible de 30 minutes.

Le candidat part de son guide S12, choisit un fait vérifiable, rédige un message et explique une correction humaine. Les exemples fournis sont fictifs ; les sorties restent des brouillons à relire. La validation pédagogique appartient au pilote.

## Ouvrir l’atelier immédiatement

1. Conserver l’ensemble du dossier extrait, notamment `public/`.
2. Ouvrir [OUVRIR-SEANCE-13.html](OUVRIR-SEANCE-13.html) dans un navigateur.
3. Choisir « Projeter la séance ». Les flèches changent de diapositive et Échap ferme la projection.
4. Retrouver les documents dans [public/ressources](public/ressources/).

Cette utilisation ne nécessite ni installation npm ni connexion pour les supports inclus. Le fichier HTML à double-clic dépend encore de `public/` pour ses téléchargements. Les réponses sont conservées dans le navigateur utilisé : exporter les traces avant de changer de poste ou de profil.

Lire [COMMENCER-ICI.md](COMMENCER-ICI.md) pour les consignes d’animation.

## Organisation du dossier

| Chemin | Rôle |
|---|---|
| `src/seance.json` | Contenu pédagogique : calendrier, diapositives, quiz, prompts et champs. |
| `src/atelier.html` | Gabarit de la page. |
| `src/main.js`, `src/portfolio.js`, `src/style.css` | Interactions, exports Markdown et présentation. |
| `src/vendor/` | Bootstrap fourni localement. |
| `public/ressources/` | 22 supports : documents, projection, démonstration, sources et modèles. |
| `public/assets/` | Logos et favicon. |
| `scripts/` | Préparation HTML, génération autonome et contrôles. |
| `index.html` | Page générée à partir du gabarit et du contenu. |
| `dist/` | Site compilé fourni, destiné à un serveur statique. |
| `OUVRIR-SEANCE-13.html` | Version à double-clic générée après compilation. |
| `docs/` | Historique et rapport de contrôle. |
| `licenses/` | Licence et provenance de Bootstrap. |

Modifier les sources dans `src/` et les ressources dans `public/`, puis reconstruire. Les modifications directes des fichiers générés sont écrasées à la reconstruction.

## Développer et reconstruire

Prérequis déclaré : Node.js `^20.19.0 || >=22.12.0`. Le poste contrôlé dispose de Node.js 24.12.0 et npm 11.6.2. Vite est fixé à la version 8.3.5 après mise à jour corrective lors de la préparation GitHub.

Dans PowerShell, depuis ce dossier :

```powershell
npm.cmd ci
npm.cmd run dev
```

Ouvrir l’adresse affichée par Vite (port configuré : 5173). L’installation nécessite l’accès au registre npm. `dev` écoute sur toutes les interfaces réseau ; `preview` écoute sur l’interface locale.

```powershell
npm.cmd run build
npm.cmd run check
npm.cmd run preview
```

`build` régénère `index.html`, construit `dist/`, puis produit `OUVRIR-SEANCE-13.html`. `check` contrôle les fichiers livrés et les fonctions d’export ; il peut être exécuté sans installer Vite si les fichiers compilés sont déjà présents. Il ne reconstruit pas le projet.

Sur ce poste, `npm.ps1` est bloqué par la politique PowerShell : utiliser `npm.cmd` sans modifier cette politique. Dans un terminal compatible, `npm` peut remplacer `npm.cmd`.

Pour rejouer la démonstration sans dépendance Python supplémentaire :

```powershell
python public/ressources/demo/demonstration-s13.py
```

Le script affiche des exemples préparés ; il ne lit ni n’écrit de fichier. Un notebook avec sorties enregistrées est également fourni dans le même dossier.

## État du contrôle au 3 novembre 2026

- `npm.cmd run check` : réussi, avec 11 rubriques, 22 supports locaux, 18 diapositives, 8 cartes, 6 questions de quiz et 4 prompts.
- Export de la trace et de l’entrée de portfolio : assertions réussies sur données fictives.
- Démonstration Python : exécutée ; brouillons A/B de 177/144 caractères, seuil de 400 accepté et 401 signalé.
- Contrôle initial : aucun dépôt Git détecté. Le dépôt a ensuite été initialisé sur `main` pour la préparation GitHub.
- Les dépendances ont ensuite été installées et la compilation et les contrôles rejoués avec succès. Après mise à jour corrective, l’audit npm ne signale aucune vulnérabilité.
- Navigation réelle, rendu des documents, remplissage du PDF, interface Jupyter et persistance des saisies restent à vérifier sur le poste d’animation.

Voir le [rapport de contrôle](docs/CONTROLE-DOSSIER-2026-11-03.md) pour la portée et les limites. Le bilan historique [MISE-A-JOUR-S13.md](docs/MISE-A-JOUR-S13.md) rapporte des vérifications antérieures ; elles ne constituent pas de nouveaux essais sur ce poste.

## Prochaine étape : répéter S13, puis préparer S14

Avant le **6 novembre**, réaliser une répétition sur le navigateur et le poste de projection :

1. Relire le guide V2 et le journal dans `public/ressources/sources/` ; conserver le statut « V2 à relire » tant que le pilote n’a pas décidé.
2. Ouvrir la projection, parcourir les diapositives et tester les téléchargements utiles.
3. Remplir une fiche fictive, exporter la trace et le portfolio, puis rouvrir les fichiers téléchargés. Tester la conservation des réponses après rechargement.
4. Essayer le PDF candidat et le notebook si ces supports seront utilisés ; prévoir les sorties enregistrées comme solution de secours.
5. Recueillir en séance la trace `04-communication/comprendre-processus-communication.md`, preuve `preuve-13-processus-communication-assistee`, puis consigner l’observation réelle dans le portfolio candidat `07-portfolio/preuves-module-04.md`.

Ces chemins désignent le dossier de travail de chaque candidat, et non des répertoires déjà créés à la racine de cet atelier.

La séance suivante est **S14 — Manipuler, lundi 9 novembre 2026** : produire une version humaine, comparer et corriger trois variantes, choisir un canal et expliquer son choix. Préparer le livrable candidat `04-communication/message-court-projet.md`, associé à `preuve-14-message-projet-et-variantes`. Le cadrage figure dans [le prompt maître du Module 04](public/ressources/sources/prompt-maitre-module-04.md). Ce dossier fournit le pack S13 et le cadrage de la suite ; il ne constitue pas un pack S14 complet.

| Séance | Date | Suite prévue |
|---|---|---|
| S13 — Comprendre | Vendredi 6 novembre 2026 | Relier la source au message et expliquer une correction. |
| S14 — Manipuler | Lundi 9 novembre 2026 | Comparer la version humaine et trois variantes. |
| S15 — Approfondir | Vendredi 13 novembre 2026 | Expliquer une règle, ses tests et sa limite humaine. |
| S16 — Produire | Lundi 16 novembre 2026 | Exécuter le notebook, corriger et rouvrir un export. |

## Hébergement éventuel

Après décision du pilote, publier le contenu de `dist/` sur un hébergement statique. Pour générer les métadonnées avec l’adresse publique réelle avant compilation :

```powershell
$env:ATELIER_PUBLIC_URL = Read-Host "URL publique du dossier"
npm.cmd run build
npm.cmd run check
```

Aucun hébergement ni envoi n’a été effectué pendant le contrôle initial du 3 novembre.

## Versionnement et GitHub Pages

Le dépôt cible est https://github.com/elhisse-CLPrepas/atelier-seance-13-ln-ia.
La branche principale est `main`. Les dépendances, secrets locaux et le dossier généré `dist/` sont exclus de Git. Les sources, supports et le fichier à double-clic sont conservés dans le dépôt.

Le workflow `.github/workflows/pages.yml` installe les dépendances verrouillées, reconstruit le site, exécute les contrôles et publie uniquement `dist/`. Il se déclenche à chaque push sur `main` ou manuellement depuis Actions. Dans les paramètres GitHub du dépôt, la source Pages doit être **GitHub Actions**.

Adresse prévue : https://elhisse-clprepas.github.io/atelier-seance-13-ln-ia/.

Après une modification :

```powershell
npm.cmd run build
npm.cmd run check
git status
git add .
git diff --cached --stat
git commit -m "Décrire la modification"
git push
```

Vérifier ensuite la réussite du workflow dans l’onglet Actions. Pour un travail plus important, créer une branche avec `git switch -c nom-de-la-modification`, puis proposer une pull request vers `main`.

## Dossier de référence du Module 04

Ouvrir [le dossier Module 04](mon-dossier-challenge-module04/README.md) ou directement [la présentation commune aux séances 13 à 16](mon-dossier-challenge-module04/OUVRIR-MODULE-04.html). Le dossier comprend le guide S12, les démonstrations, les fiches et le portfolio. Il est suivi dans ce dépôt ; ses sauvegardes locales sont exclues.
