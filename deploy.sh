echo --- Deploying to gh-pages ---
yarn deploy

echo --- Checking out gh-pages ---
git checkout gh-pages
git pull

echo --- Moving files to ./tylerreece ---
rm -rf build
mkdir tylerreece
mv static favicon.ico manifest.json ./tylerreece

echo --- Adding CNAME ---
touch CNAME
echo tylerreece.tech > CNAME

echo --- Committing files ---
git add tylerreece/ static/ favicon.ico manifest.json
git commit -m "Moved files to ./tylerreece"

echo --- Pushing new files to gh-pages ---
git push
git reset --hard
git checkout master
