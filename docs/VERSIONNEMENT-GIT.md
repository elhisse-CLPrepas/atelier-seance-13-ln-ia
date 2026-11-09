# Versionnement de l’atelier 13

Le dépôt de cet atelier est `https://github.com/elhisse-CLPrepas/atelier-seance-13-ln-ia`, sur la branche `main`.

Depuis la racine de l’atelier :

```powershell
git status
git diff --stat
git add <chemins-des-fichiers-a-enregistrer>
git diff --cached --stat
git diff --cached --check
git commit -m "Décrire le changement réalisé"
git push origin main
```

Les dossiers `tmp/`, `node_modules/`, `dist/`, les sauvegardes locales et les fichiers `.env` sont exclus. Conserver les données confidentielles hors du dépôt public.

## Dossier Module 04

`mon-dossier-challenge-module04` possède également son propre dépôt Git. Dans le dépôt de l’atelier, ses fichiers sont suivis comme une copie, et non comme un sous-module. Son historique Git interne n’est pas ajouté.

Un commit dans l’atelier n’enregistre et ne publie pas de commit dans le dépôt autonome du Module 04. Vérifier le dépôt actif avec `git rev-parse --show-toplevel` avant chaque commit.

## Vérifications

Pour les changements du site, lancer `npm run check` et `npm run build`. Le workflow `.github/workflows/pages.yml` construit et déploie le site lors d’un push sur `main`.

## État pédagogique à conserver

Les traces S13 distinguent les exemples fournis, les choix de l’assistant et les observations réellement effectuées. Aucune exécution Python/Jupyter ni validation humaine ne peut être déduite du commit.

Au moment du rangement du 9 novembre 2026, le notebook de démonstration comporte des modifications de travail, dont une mention « V2 — lu & VALIDÉE », tandis que le guide source reste « V2 — À RELIRE / NON VALIDÉE ». Ces modifications sont conservées ; elles ne constituent pas une attestation de validation du guide. Certaines sorties conservées du notebook peuvent correspondre à un état antérieur du code.
