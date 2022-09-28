

exec('npm run package && npm run make-docs && git commit -a -m "chore: ver 0.1.84" && git push && git tag 0.1.84 && git push --tags && npm publish ./package');
