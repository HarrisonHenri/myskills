#!/bin/bash
yarn standard-version --release-as $1 --verbose
git add .
git add CHANGELOG.md
git commit -m "chore(release): $2 [ci skip]"
git push -q https://${GITHUB_TOKEN}@github.com/HarrisonHenri/myskills.git staging --tags