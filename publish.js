

exec('npm run package && npm run make-docs && git commit -a -m "chore: ver 0.1.82" && git push && git tag 0.1.82 && git push --tags && git push && npm publish ./package');
