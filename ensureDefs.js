
import fs from "fs-extra";
import path from 'path';
import mm from 'micromatch';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const srcPackage = path.join(__dirname, 'package');
const srcLibDir = path.join(__dirname, 'src', 'lib');

const getAllFiles = function (dirPath, fragment = '.svelte', arrayOfFiles = []) {
    let files = fs.readdirSync(dirPath);
    let cleanPath = dirPath.replace(srcLibDir, '');

    files.forEach(function (file) {
        const tDir = dirPath.replace(path.join(__dirname), '');

        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            // console.log('directory : ',file)
            arrayOfFiles = getAllFiles(path.join(dirPath, file), fragment, arrayOfFiles);

        } else {
            if (file.includes(fragment) && !file.includes('preview') && !file.includes('wip') && !file.includes('demo') && !file.includes('.ts') && !file.includes('.js') && !file.includes('css')) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });
    return arrayOfFiles;
};


const allFiles = getAllFiles(srcLibDir);

// console.log(allFiles)

// clean old index
for (const filePath of allFiles) {
    const file = filePath.split('\\').slice(-1).toString();
    const path = filePath.replace(file, '')
    
    const indexContent = await fs.readFile(path + '/index.ts', 'utf8');
    if (indexContent?.includes('generated') || !indexContent?.length) await fs.writeFile(path + '/index.ts', '/** slotui generated definition file */\r\n');

}
// forge new ones
for (const filePath of allFiles) {
    const file = filePath.split('\\').slice(-1).toString();
    const path = filePath.replace(file, '')

    await fs.ensureFile(path + '/index.ts');
    fs.ensureFile(path + '/index.ts', async (err) => {
        if (err) return
        // content read
        try {
            const indexContent = await fs.readFile(path + '/index.ts', 'utf8');
            const fileName = file.split('.')[0]
            const finFile = file.replace('.ts', '.js')
            //
            let content =
                `import ${fileName} from "./${finFile}";
export * from "./${finFile}";
export {${fileName}};
`
            if (!indexContent?.includes(finFile)) {
                console.log('done index for ', finFile)
                await fs.appendFile(path + '/index.ts', content)
            } else {
                 await fs.writeFile (path + '/index.ts','')
                  //  await fs.remove (path + '/index.ts')
            }

        } catch (e) {
            console.log(e)
        }
    })
}