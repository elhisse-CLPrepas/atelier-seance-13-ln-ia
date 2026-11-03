# Animer la séance 13 du vendredi 6 novembre 2026

Challenge 100 Jours Automne 2026 · Module 04 · Communication assistée et automatisation progressive  
Prof. Abderrahman El Hisse · Séance de compréhension · 90 minutes, prolongement de 30 minutes disponible.

## Ouvrir la séance

1. Extrayez tout le ZIP sur votre ordinateur. Sous Windows, choisissez « Extraire tout ».
2. Dans le dossier `atelier-seance-13-ln-ia`, ouvrez `OUVRIR-SEANCE-13.html` dans un navigateur. Gardez le dossier `public` à côté pour accéder aux documents.
3. Cliquez sur « Projeter la séance ». Les flèches du clavier changent de diapositive. Échap ferme la projection. « Notes formateur » affiche les indications à l’écran, à utiliser pendant la préparation.
4. Pour projeter sans navigateur, ouvrez le PowerPoint avec ses notes ou son équivalent PDF dans `public/ressources/projection/`.

## Avant le vendredi 6 novembre

- Ouvrez le guide V2 et le journal V1/V2 dans `public/ressources/sources/`. Repérez la ligne « Forme — accessibilité ». La source porte le statut V2 à relire.
- Lisez le conducteur, préparez la fiche candidat et affichez la première question. Les fichiers Word et PDF se trouvent dans `public/ressources/documents/`. Le PDF candidat accepte la saisie dans ses champs et s’imprime sur deux pages.
- Essayez le script ou le notebook sur les données fictives du dossier `public/ressources/demo/`. Le relevé des sorties permet la projection sur un poste sans Python ni Jupyter.
- Prévoyez une copie de la fiche de Samira pour les candidats sans guide S12. Le conducteur et la rubrique Atelier décrivent ce cas fictif.

## Démarrer M04

| Semaine | Séance | Date | Travail et trace |
|---|---|---|---|
| 07 | S13 · Comprendre | Vendredi 6 novembre | Montrer le passage S12, écrire un message et expliquer une décision. |
| 07 | S14 · Manipuler | Lundi 9 novembre | Rédiger la version humaine puis comparer et corriger trois variantes. |
| 08 | S15 · Approfondir | Vendredi 13 novembre | Expliquer une règle et repérer une affirmation courte absente de la source. |
| 08 | S16 · Produire | Lundi 16 novembre | Exécuter un notebook guidé, corriger un brouillon et rouvrir l’export. |

## Ouvrir, démontrer et recueillir

Question d’ouverture à poser au groupe. « Si votre lecteur ne voyait que trois lignes de votre guide S12, que devrait-il comprendre et quelle action pourrait-il faire ensuite ? »

Projetez les brouillons A et B dans la rubrique Démonstration. Demandez à un candidat de montrer la phrase qui soutient chacun d’eux. Le guide et son journal justifient la comparaison V1/V2. Demandez au candidat de remplacer « Ce guide garantit un document sans erreur » par un fait qu’il peut retrouver et de conserver une seule action.

Avant S14, recueillez la trace `04-communication/comprendre-processus-communication.md` sous l’identifiant `preuve-13-processus-communication-assistee`. Demandez au candidat de montrer la source, de relire son message et de justifier une correction. Ajoutez l’observation réelle à `07-portfolio/preuves-module-04.md`. La validation pédagogique relève du pilote.

Les saisies restent dans le navigateur utilisé. Exportez la trace après le travail. Sur un poste partagé, utilisez un profil distinct par candidat ou effacez les saisies de cette séance après export.

## Modifier, compiler ou héberger

Le projet utilise Vite 8.2.1, Bootstrap 5.3.8 fourni localement et du JavaScript modulaire. La construction inclut les onze rubriques en HTML, les fichiers CSS et JS compilés, les métadonnées SEO et les ressources téléchargeables.

Dans le dossier du projet, avec Node.js 24 ou une version compatible :

```sh
npm ci
npm run dev
```

Pour reconstruire le dossier statique `dist/` et la version à double-clic :

```sh
npm run build
npm run check
npm run preview
```

L’installation des outils de développement utilise le registre npm. L’animation avec le fichier à double-clic, les documents et le dossier compilé fonctionne hors ligne. Les matériaux éditables sont dans `src/`, les ressources dans `public/`. Modifiez le gabarit `src/atelier.html` ou le contenu `src/seance.json`, puis recompilez.

Pour un hébergement décidé par le pilote, copiez le contenu de `dist/` dans le répertoire de publication. Afin de produire une URL canonique et des images de partage absolues, définissez la variable `ATELIER_PUBLIC_URL` avec l’URL réelle du dossier avant la compilation. Sous PowerShell, exécutez `$env:ATELIER_PUBLIC_URL = Read-Host "URL publique du dossier"`, puis `npm run build`. L’archive locale contient le titre, la description, les balises Open Graph, la carte de partage et la donnée structurée LearningResource. Aucune adresse de publication n’est présumée.

Le bilan des mises à jour et des contrôles figure dans `docs/MISE-A-JOUR-S13.md`. Les sources et licences techniques se trouvent dans `licenses/`.
