this r3f template uses an asset map to handle load screen progress

an asset map is generated on build from all files in the `/public/assets` directory

***do not have unused files in the assets directory or else loading will be forever stuck***
it will expect to load more assets than you actually do

for files not handled via the defaultLoadingManager of three.js dispatch an `'assetLoad'` event once the asset is finished loading with the url of the file as the detail of the event