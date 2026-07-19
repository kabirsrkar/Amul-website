#!/bin/bash
# Push script to deploy files to GitHub

echo "=========================================="
echo "Pushing Amul website project to GitHub..."
echo "=========================================="

# Check if git is initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "chore: setup vercel deployment and initial commit"
    git branch -M main
    git remote add origin https://github.com/kabirsrkar/Amul-website.git
fi

# Attempt to push
git push -u origin main

if [ $? -eq 0 ]; then
    echo "=========================================="
    echo " SUCCESS! Project files pushed to GitHub."
    echo "=========================================="
else
    echo "=========================================="
    echo " PUSH FAILED!"
    echo "------------------------------------------"
    echo "If you got a password/token prompt:"
    echo "1. GitHub no longer accepts account passwords."
    echo "2. Please use a Personal Access Token (PAT) as your password."
    echo "   To get one: GitHub Settings -> Developer Settings -> Personal Access Tokens"
    echo "=========================================="
fi
