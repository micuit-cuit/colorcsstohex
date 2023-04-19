#!/bin/bash

# Récupération du nom du répertoire courant
repo_name=$(basename $(git rev-parse --show-toplevel))

# Ajout des fichiers modifiés à l'index
git add .
# Récupération des fichiers modifiés
files=$(git diff --name-only)
echo "Fichiers modifiés : $files"
# Générer le message de commit
message="Modification de "
for file in $files; do
    message+="$file "
done

# Création d'un commit avec un message
echo "Commit : $message"