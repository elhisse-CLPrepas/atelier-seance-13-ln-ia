"""Démonstration LN-IA du vendredi 6 novembre 2026, à utiliser par le formateur.

Exécuter « python demonstration-s13.py » dans ce dossier (ou « py -3 » sous
Windows). Les exemples sont préparés et fictifs. Ce programme Python 3
affiche du texte dans le terminal. Il ne lit ni n'écrit de fichier.
"""

TITRE = "Produire avec l’IA sous responsabilité humaine — Guide pratique"
STATUT = "V2 — À RELIRE / NON VALIDÉE"
PUBLIC = "Formateurs qui débutent en production assistée par IA"
FAIT_GUIDE = "La V2 demande de conserver les deux versions et de comparer leur contenu."
FAIT_JOURNAL = "Le journal présente les corrections avant et après et en donne les raisons."
ACTION = "Souhaitez-vous voir un extrait du journal de corrections ?"
PROMESSE = "Ce guide garantit un document sans erreur."
SEUIL = 400


def assembler(titre, fait, action):
    """Assemble les trois champs dans un ordre choisi par le formateur."""
    return f"« {titre} ». {fait} {action}"


def verifier_longueur(texte, seuil=SEUIL):
    """Les espaces et la ponctuation comptent parmi les caractères."""
    return "À raccourcir" if len(texte) > seuil else "Longueur acceptable"


def diagnostic(texte, action):
    return (
        f"{len(texte)} caractères | {verifier_longueur(texte)} | "
        f"action écrite repérée {texte.count(action)} fois"
    )


def main():
    print("S13 · Démonstration fictive du formateur · BROUILLONS — À RELIRE")
    print("\n1. Lire la source et choisir un public")
    print(f"Guide : {TITRE}\nStatut : {STATUT}\nPublic de cet exercice : {PUBLIC}")
    print(f"G1 · {FAIT_GUIDE}\nJ1 · {FAIT_JOURNAL}")
    print("\n2. Afficher le gabarit Python")
    print(assembler(TITRE, FAIT_GUIDE, ACTION))

    print("\n3. Comparer deux sorties d’agent simulées et préparées")
    exemples = {
        "A": f"Vous relisez un support produit avec l’IA. {FAIT_JOURNAL} {ACTION}",
        "B": f"Vous relisez un support produit avec l’IA. {PROMESSE} {ACTION}",
    }
    for nom, texte in exemples.items():
        print(f"Brouillon {nom} : {texte}")
        print(diagnostic(texte, ACTION))
    print("Essais du seuil pédagogique (aperçu de S15)")
    for taille in (400, 401):
        print(f"{taille} caractères : {verifier_longueur('x' * taille)}")

    print("\n4. Montrer l'arbitrage humain préparé")
    print(f"Avant : {PROMESSE}\nAprès : {FAIT_JOURNAL}")
    print("Motif : le journal conserve les corrections. Il ne promet aucun résultat.")
    choix_corrige = exemples["B"].replace(PROMESSE, FAIT_JOURNAL)
    print(f"Brouillon B corrigé : {choix_corrige}")
    print("Statut du message : BROUILLON — À RELIRE")


if __name__ == "__main__":
    main()
