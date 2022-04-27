yarn standard-version --release-as $1
git add .
git commit -m "chore(releas) [ci skip]"
git tag $2
git push -q https://${GITHUB_TOKEN}@github.com/HarrisonHenri/myskills.git staging --tags