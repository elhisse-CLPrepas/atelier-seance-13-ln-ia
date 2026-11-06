# Sorties observées de la démonstration S13

Fiche à projeter si le poste de démonstration est indisponible. Les deux formulations ont été préparées pour simuler les sorties d’un agent. Le comptage et l’assemblage ont été exécutés localement.

## Avant d’afficher la correction

Lisez les deux brouillons ci-dessous. Quelle phrase de B faut-il retirer ? Cherchez son appui dans G1 et J1. Prédisez si la règle de longueur peut détecter ce problème.

## Relevé du script Python

```text
S13 · Démonstration fictive du formateur · BROUILLONS — À RELIRE

1. Lire la source et choisir un public
Guide : Produire avec l’IA sous responsabilité humaine — Guide pratique
Statut : V2 — À RELIRE / NON VALIDÉE
Public de cet exercice : Formateurs qui débutent en production assistée par IA
G1 · La V2 demande de conserver les deux versions et de comparer leur contenu.
J1 · Le journal présente les corrections avant et après et en donne les raisons.

2. Afficher le gabarit Python
« Produire avec l’IA sous responsabilité humaine — Guide pratique ». La V2 demande de conserver les deux versions et de comparer leur contenu. Souhaitez-vous voir un extrait du journal de corrections ?

3. Comparer deux sorties d’agent simulées et préparées
Brouillon A : Vous relisez un support produit avec l’IA. Le journal présente les corrections avant et après et en donne les raisons. Souhaitez-vous voir un extrait du journal de corrections ?
177 caractères | Longueur acceptable | action écrite repérée 1 fois
Brouillon B : Vous relisez un support produit avec l’IA. Ce guide garantit un document sans erreur. Souhaitez-vous voir un extrait du journal de corrections ?
144 caractères | Longueur acceptable | action écrite repérée 1 fois
Essais du seuil pédagogique (aperçu de S15)
400 caractères : Longueur acceptable
401 caractères : À raccourcir

4. Montrer l'arbitrage humain préparé
Avant : Ce guide garantit un document sans erreur.
Après : Le journal présente les corrections avant et après et en donne les raisons.
Motif : le journal conserve les corrections. Il ne promet aucun résultat.
Brouillon B corrigé : Vous relisez un support produit avec l’IA. Le journal présente les corrections avant et après et en donne les raisons. Souhaitez-vous voir un extrait du journal de corrections ?
Statut du message : BROUILLON — À RELIRE
```

## Rejouer devant les candidats

Dans le dossier de ces fichiers, lancez `python demonstration-s13.py` ou `py -3 demonstration-s13.py` sous Windows. Pour l’affichage par étapes, ouvrez le notebook dans Jupyter ou dans VS Code, choisissez le noyau Python 3 et exécutez les quatre cellules dans l’ordre.

Pour la préparation, le script et les quatre cellules du notebook ont été exécutés en Python. Le texte obtenu, les deux comptes de caractères, les essais à 400 et 401 et la correction de B ont été comparés. Les cellules conservent leurs sorties.

## Mise en commun avant S14

Faites répondre oralement à « Le contrôle a-t-il mesuré la longueur ou vérifié le sens de la promesse ? ». Recueillez le passage source, le premier message et la décision expliquée du candidat dans `04-communication/comprendre-processus-communication.md`. Le relevé ci-dessus documente la démonstration du formateur.
