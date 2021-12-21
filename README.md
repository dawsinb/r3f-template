this r3f template uses an asset map to handle load screen progress

by default it generates an assetmap based on the images and models directories on start and build
additional directories can be added to the asset map by adding them as args to the "assetMap" script in package.json

***do not have unused files in directories that the asset map builds from or else loading will be forever stuck***

for files not handled via the defaultLoadingManager of three.js dispatch an `'assetLoad'` event once the asset is finished loading with the url of the file as the detail of the event