cd ./gd-tek
npm run build
cd ..
rm main-*
rm styles-*
rm polyfills-*
rm index.html
rm favicon.ico
rm -R assets
cp -R ./gd-tek/dist/gd-tek/browser/* ./
