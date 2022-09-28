

exec('npm version 0.1.85-dev && npm run package   && npm publish ./package && npm run make-docs && git commit -a -m "chore: ver 0.1.85-dev" && git push && git push --tags');
