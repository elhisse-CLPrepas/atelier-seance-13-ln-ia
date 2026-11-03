# Mise à jour des supports de la séance 13
Édition d’automne · 6 novembre 2026 · Version 1.0 · Relecture pédagogique du pilote attendue.

## Sources examinées

L’archive fournie comprend 69 entrées, dont 6 répertoires et 63 fichiers. On y trouve les packs Word V3 et V4 sous deux formes, un diaporama d’été de 24 vues avec PDF, un support HTML, trois affiches, deux familles de prompts et de résultats ainsi qu’un script Python et un notebook. Les fichiers temporaires Office et le cache Python sont identifiables dans le décompte des fichiers. Le lot V4 d’été porte son propre statut pédagogique.

Le cas d’automne est tiré du pack de démonstration S12 sur le rôle de l’humain dans la production avec l’IA. Le guide « Produire avec l’IA sous responsabilité humaine » porte le statut V2 à relire. L’archive reprend ses deux versions et le journal duquel proviennent les corrections. Les données de ce cas sont fictives.

## Correspondance entre été et automne

| Supports d’été | Édition d’automne dans le pack | Travail effectué |
|---|---|---|
| Programme et guide formateur S13 | Conducteur Word/PDF et présent document | Dates du 6, 9, 13 et 16 novembre. Séance S13 minutée en six séquences. Entrée par la production réelle du dossier de démonstration S12. |
| Dossier complet Word V3/V4, index, fiche de compréhension | Conducteur, fiche candidat modifiable ou remplissable, repères techniques | Regroupement des usages formateur, candidat, contrôle et portfolio. Les doublons des deux éditions d’été restent dans la source d’origine. |
| Diaporama d’été et présentation HTML | Diaporama automne de 18 vues, notes dans PowerPoint, version PDF et atelier Vite à 11 rubriques | Deux brouillons confrontés à des passages du guide S12, mission d’agent lecteur, correction et restitution orale. |
| Cas Samira et corrigés des prompts | Cas principal guide S12 et journal, Samira en solution de remplacement, quatre prompts de séance et démonstration en cinq étapes | Preuve du fait conservé, action unique et motif de la correction. Distinction entre sortie d’agent simulée et mission connectée facultative. |
| Guides et affiches de découverte Python/Jupyter | Fiche Repères, script, notebook et sorties enregistrées | Un même cas de démonstration. Les exemples d’origine employaient des données et des seuils différents. L’automne harmonise le seuil pédagogique à 400 caractères. |
| Affiche datée de juillet et analyses des zones | Affiche datée du 6 novembre et visuel d’accueil LN-IA | Nouveau calendrier, logo fourni et palette marine/or tirée des ateliers S06 et S10 d’automne. |
| Ressources de contrôle et trace portfolio | Rubriques Validation et Portfolio, deux gabarits Markdown et fiche candidat | Le quiz sert de retour pédagogique. L’autoévaluation et l’export ne prononcent aucune validation. |
| Anciens rapports datés, archives ZIP internes, fichiers de verrouillage et cache de compilation | Présent bilan et sources de la nouvelle édition | Les fichiers techniques ou historiques n’entrent pas dans le parcours candidat. |

## Choix d’animation

Les packs d’automne S06 et S10 ont fourni le modèle de navigation et les couleurs. Leur palette marine #071b33, bleu #0b2b50 et or #d6a64e est reprise avec des fonds clairs. La capsule de cinq minutes placée dans les ressources permet d’introduire le rôle de l’agent à la fin du Module 03.

La S13 reste une séance de compréhension. Le formateur peut exécuter Python et le notebook. Le candidat explique les rôles et produit sa trace. La manipulation individuelle du notebook intervient en S16.

## Vérifications et limites

- Les trois documents Word et les PDF correspondants ont été rendus et examinés. La fiche candidat comporte 19 champs PDF. Une saisie avec accents a été enregistrée et rouverte.
- Le diaporama PowerPoint et les 18 pages du PDF ont été comparés après rendu. Chaque diapositive PowerPoint possède des notes d’animation.
- Le script Python et les quatre cellules du notebook ont été exécutés en Python. Leurs sorties concordent. Le schéma du notebook a été vérifié. L’ouverture de l’interface Jupyter sur le poste du formateur reste à effectuer avant projection.
- Le script local retrouve 177 caractères pour A et 144 pour B. L’essai à 400 passe, l’essai à 401 déclenche une alerte. La vérification de la promesse demande une lecture humaine du journal.
- La commande `npm run check` vérifie la structure du pack, la navigation, les supports locaux, les métadonnées et les cardinalités des activités. Le dossier compilé et la version autonome sont fournis.
- Avant usage, le pilote choisit le support à projeter et teste les téléchargements sur son navigateur. Une trace de démonstration reste distincte d’une preuve d’apprentissage observée.

## Références pour la préparation

- Sources pédagogiques d’été. [Dépôt du Module 04](https://github.com/elhisse-CLPrepas/challenge-01-juin-2026/tree/07689197cca41f5c14240cb135dec2f67e4ac3ea/05-PROGRAMME-PEDAGOGIQUE/MODULE-04)
- Distinction entre workflow à étapes fixes et agent outillé. [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- Environnement de notebooks. [Project Jupyter](https://jupyter.org/)
- Fonctions de l’extension en environnement de développement. [Documentation Codex](https://developers.openai.com/codex/ide/features/)
- Composants et styles intégrés. [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Compilation et chemins en hébergement statique. [Vite](https://vite.dev/guide/static-deploy.html)
