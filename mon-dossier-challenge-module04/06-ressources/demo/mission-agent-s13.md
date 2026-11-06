# Confier une mission de lecture à un agent IA

Vendredi 6 novembre 2026. Fiche pour le formateur et les binômes. La simulation est réalisable avec la fiche source et le relevé des sorties du pack.

## Du Module 03 au Module 04

En S12, le candidat avait organisé une V1, une V2 et un journal de corrections. En S13, il donne à un agent un objectif limité dans ce dossier. Dans un environnement où il dispose d’un outil de lecture, un agent peut retrouver un passage, s’en servir pour rédiger, comparer le brouillon à la source et signaler un écart. Le formateur autorise uniquement la lecture de l’extrait fictif. L’agent s’arrête à la remise de deux propositions.

| Acteur | Ce qu’il fait dans la séance | Ce que le groupe observe |
|---|---|---|
| Candidat | Choisit le destinataire et l’action. | Une demande précise et une seule action finale. |
| Assistant en conversation | Reformule un extrait collé par le formateur. | Une proposition que l’on peut lire et corriger. |
| Agent doté de lecture | Suit la mission, consulte la source désignée, enchaîne rédaction et comparaison. | Deux brouillons, leurs appuis et les points à revoir. |
| Python | Assemble les champs puis compte les caractères. | Un résultat reproductible pour les mêmes entrées. |
| Jupyter | Présente les explications, les cellules et leurs sorties. Le noyau Python exécute le code. | Le groupe prédit une sortie avant son affichage. |
| Formateur et candidat | Confrontent le texte aux passages G1 et J1. | Une correction motivée. La décision de validation revient au pilote. |

## Mission prête à copier sur le cas fictif

> Tu assistes un formateur. Utilise uniquement les passages G1 et J1 de la fiche collée ci-dessous. Travaille en lecture seule. Repère d’abord un fait dans chaque passage. Propose ensuite deux messages pour des formateurs débutants. Termine chacun par « Souhaitez-vous voir un extrait du journal de corrections ? ». Relis chaque affirmation et indique à côté du brouillon son repère G1 ou J1. Si une affirmation manque d’appui, range-la dans les points à revoir et retire-la du message. Rends seulement les faits repérés, les deux brouillons et tes contrôles. Arrête-toi à la remise de ce résultat. Le pilote garde la décision.

Coller uniquement le contenu fictif de `fiche-source-s12.md`. Le travail reste sans API, accès réseau, identifiants, liste de contacts, modification du guide ni envoi.

## Conduire la comparaison sur écran

1. Affichez le brouillon A, puis le B dans `sorties-observees.md`. Ce sont deux exemples rédigés pour la simulation. Le second contient volontairement une erreur.
2. Demandez à un binôme de surligner la promesse dans B et de chercher sa source. Un autre binôme repère l’action finale.
3. Affichez les deux comptes de caractères. Les deux messages passent le seuil de l’exercice. Demandez comment cette observation peut coexister avec une erreur de fond dans B.
4. Remplacez la promesse par le fait J1. Le groupe doit pouvoir répondre à « Qu’avez-vous retiré, que pouvez-vous prouver et qui doit relire ? ».

## Réinvestir la mission du vendredi au lundi

| Séance | Ce que l’agent peut aider à faire sur les données fictives | Décision du candidat |
|---|---|---|
| S13 · Comprendre | Repérer deux faits et proposer deux brouillons. | Revenir au passage source et expliquer la correction. |
| S14 · Manipuler | Reformuler le premier texte humain en trois tons. | Choisir le canal et justifier une formulation. |
| S15 · Approfondir | Suggérer une règle et deux cas de test. | Choisir ce que la règle peut vérifier et ce qui exige une lecture. |
| S16 · Produire | Aider à interpréter une sortie ou suggérer une correction sur un cas fictif. | Relancer soi-même le notebook local, rouvrir le fichier et vérifier le texte conservé. |

## Si la connexion ou le noyau manque

Projetez le relevé déjà exécuté et lisez les exemples comme des cartes papier. Demandez au groupe de prédire l’indication à 400 puis 401 caractères. Faites écrire la correction et sa justification. Inscrivez comme observation « comparaison commentée ». L’exécution du formateur peut être reprise plus tard sur un poste équipé. La preuve individuelle reste l’explication écrite par le candidat.
