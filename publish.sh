#!/bin/bash
yarn standard-version -- --first-release
git add .
git commit -m "chore(release): [ci skip]"
git push -q https://${GITHUB_TOKEN}@github.com/HarrisonHenri/myskills.git staging --tags