


import fsx from "fs-extra";
import path from 'path'
import prompt from "prompt";
import colors from "@colors/colors/safe.js";
import {exec} from 'child_process';
import {series} from 'async';

const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Missing command, exiting');
    process.exit(1); 
  }

const command = args?.[0];

console.log(colors.green("- slotui publish script "));

var run = function (cmd) {
    return exec(cmd, function (error, stdout, stderr) {
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
  case "--ver":
    let ver = args?.[1]
    if(!ver)console.error('Missing command, exiting');
    console.log(`npm version ${ver} && npm run package   && npm publish ./package && npm run make-docs && git commit -a -m "chore: ver ${ver}" && git push && git push --tags`)
      if(ver) run(`npm version ${ver} && npm run package   && npm publish ./package && npm run make-docs && git commit -a -m "chore: ver ${ver}" && git push && git push --tags`);

    break;
}