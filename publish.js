

exec('npm run package && npm run make-docs && git commit -a -m "chore: ver 0.1.81" && git push && npm publish ./package');
