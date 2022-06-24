import fs, { mkdir } from 'fs';
import path from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const srcPackage = path.join(__dirname, 'package');
const srcLibDir = path.join(__dirname, 'src', 'lib');
const dirPath = path.join('src', 'sitedata');
const libShort = '$lib';

let fileHead = '';

const getAllFiles = function (dirPath, arrayOfFiles = [], fragment = 'demo.svelte') {
	let files = fs.readdirSync(dirPath);
	let cleanPath = dirPath.replace(srcLibDir, '');

	files.forEach(function (file) {
		const tDir = dirPath.replace(path.join(__dirname), '');

		if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
			arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles, fragment);
		} else {
			if (file.includes(fragment)) arrayOfFiles.push(path.join(cleanPath, file));
		}
	});

	return arrayOfFiles;
};

const dirTree = (filename) => {
	const stats = fs.lstatSync(filename);
	const info = {
		path: filename,
		name: path.basename(filename)
	};

	if (stats.isDirectory()) {
		info.type = 'folder';
		info.children = fs.readdirSync(filename).map((child) => {
			return dirTree(`${filename}/${child}`);
		});
	} else {
		fileHead += 'import ';
		info.type = 'file';
	}
	return info;
};

function createFile(fileList) {
	return fileList
		?.map((fl) => {
			const comp = fl.split('\\').slice(-1).toString()?.replace(/\./g, '');
			const src = libShort + fl.replace(/\\/g, '/');
			return `import ${comp} from "${src}"; `;
		})
		.join('\r\n');
}

function createObject(fileList) {
	const start = 'export const slotUiComponentList = [ ';
	const middle = fileList
		?.map((fl) => {
			const comp = fl.split('\\').slice(-1).toString()?.replace(/\./g, '');
			const compName = fl.split('\\').slice(-1)[0].split('.')[0];
			const code = compName.toLowerCase();

			const src = fl.replace(/\\/g, '/');

			return `{name:"${compName}",code:"${code}",component:${comp}}`;
		})
		.join(',\r\n');

	const end = ' ] ';

	return start + middle + end;
}

function createMethods(fileList) {
	fileList.forEach((file) => { 
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			let newData = data.replace(/declare/g,'')
			let frag = data.match(/__propDef:([^.]*)};([^.]*)export/gm) ;

			const comp = file.split('\\').slice(-1)[0].split('.')[0]
			const newContent = frag?.[0]?.replace(/export/gm,'');
			/* console.log(file.replace(srcPackage,'---')) */
			/* console.log(frag?.[0]?.replace(/export/gm,'')) */
			console.log(comp)
			 
			fs.writeFileSync(
				dirPath + '/api/'+comp+'.md',
				newContent ? "```typescript \r\n" + newContent + "\r\n ```" : 'error !!'
			);
		});
	});
}

// create a file

const result = getAllFiles(srcLibDir);
const resultProps = getAllFiles(srcPackage, [], 'svelte.d.ts');

createMethods(resultProps);

//console.log(resultProps);

fs.writeFileSync(
	dirPath + '/componentList.ts',
	createFile(result) + ' \r\n ' + createObject(result)
);

console.log(dirPath, 'Documentation files created into /componentList.ts');
