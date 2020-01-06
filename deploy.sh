yarn deploy
git checkout gh-pages
git pull
rm -rf build node_modules .idea
mkdir tylerreece
mv ./static ./tylerreece
mv ./favicon.ico ./tylerreece
mv ./manifest.json ./tylerreece
touch CNAME
echo tylerreece.tech > CNAME
git add .
git commit -m "Moved files to ./tylerreece"
git push
