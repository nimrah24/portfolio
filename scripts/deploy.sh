#!/usr/bin/env sh
# Builds the site and publishes dist/ to the gh-pages branch (GitHub Pages).
set -e
npm run build
touch dist/.nojekyll
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" commit -q -m "Deploy portfolio"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
echo "Deployed: https://nimrah24.github.io/portfolio/"
