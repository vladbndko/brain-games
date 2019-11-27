install:
	sudo npm install

start:
	npx babel-node src/bin/brain-games.js

prePublish:
	npm publish --dry-run