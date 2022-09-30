

#!/usr/bin/env node

import fsx from "fs-extra";
import path from 'path'
import prompt from "prompt";
import colors from "@colors/colors/safe.js";

const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Missing command, exiting');
    process.exit(1); 
  }

const command = args?.[0];

console.log(import.meta.url);
/* var filename = path.basename(__filename);
console.log(filename); */
 

console.log(colors.green("-----------------------------"));
console.log(colors.green("- slotui publish script "));
console.log(colors.green("-----------------------------"));

var run = function (cmd) {
    var child = exec(cmd, function (error, stdout, stderr) {
      if (stderr !== null) {
        console.log("" + stderr);
      }
      if (stdout !== null) {
        console.log("" + stdout);
      }
      if (error !== null) {
        console.log("" + error);
      }
    });
  };

switch (command) {
  case "--publish":
  case "--install-css":
    /** import cssfabric files */
    // install();
    break;
}
 


exec('npm version 0.1.88-dev && npm run package   && npm publish ./package && npm run make-docs && git commit -a -m "chore: ver 0.1.88-dev" && git push');
