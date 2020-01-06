yarn deploy
git checkout gh-pages && git pull
rm -rf build
mkdir tylerreece && mv static favicon.ico manifest.json ./tylerreece
touch CNAME && echo tylerreece.tech > CNAME
git add tylerreece/ static/ favicon.ico manifest.json
git commit -m "Moved files to ./tylerreece"
git push
git reset --hard
git checkout master
