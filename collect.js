import fsx from 'fs-extra';
// import path from 'path';
import micromatch from 'micromatch';

/**
 * @typedef {Object} FileInfo
 * @property {string} path - Le chemin du fichier.
 * @property {string} file - Le nom du fichier.
 * @property {string} moduleName - Le nom du module, sans extension.
 */

/**
 * 
 * @param {string} directory  
 * @param {string} target 
 * @returns  {Array.<FileInfo>}
 */
function recursiveListSvelteFile(directory, target) {
    // return all .svelte files in the directory and subdirectories
    let files = fsx.readdirSync(directory);
    let svelteFiles = [];
    files.forEach((file) => {
        if (fsx.statSync(path.join(directory, file)).isDirectory()) {
            svelteFiles = svelteFiles.concat(recursiveListSvelteFile(path.join(directory, file), target));
        } else {
            if (!micromatch.contains(file, [
                '*index.ts',
                '*.demo.svelte',
                '*Demo.svelte',
                '*preview.svelte',
                '*sitedata*',
                '*.md',
                '*wip*',
                '*Example.svelte',
                '*indexApi*',
                '*Readme*',
            ])) {

                let cleanPath = path.join(directory, file).replace(target, '');
                 
                svelteFiles.push({
                    path: cleanPath,
                    file: file,
                    moduleName: file.replace(/\.[^/.]+$/, "")
                });

               // console.log(file)
            }
        }
    });
    return svelteFiles;
}

/**
 * 
 * @param {Array.<FileInfo>} fileInfoList 
 */
function writeExportFromFileInfoList(fileInfoList) {
    let exportString = '';
    fileInfoList.forEach((fileInfo) => {
        let file = fileInfo.file;
        let moduleName = fileInfo.moduleName;
        let path = fileInfo.path.replace(/\\/g, '/').replace('.ts', '.js');
        let isSvelteFile = file.endsWith('.svelte');
        
        if (!isSvelteFile) {
            exportString += `export * from '.${path}';\n`;
        } else {
            exportString += `export { default as ${moduleName} } from '.${path}';\n`;
        }
    });
    fsx.writeFileSync('./src/lib/index.js', exportString);
}


let fileInfoList = recursiveListSvelteFile('./src/lib', path.join('src', 'lib'));
writeExportFromFileInfoList(fileInfoList);


console.log(fileInfoList)