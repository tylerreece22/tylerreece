yarn deploy
git checkout gh-pages
git pull
mkdir tylerreece
mv ./static ./favicon.ico ./manifest.json ./tylerreece
git add .
git commit -m "Moved files to ./tylerreece"
git push
