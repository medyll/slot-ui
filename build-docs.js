import fs, { mkdir } from 'fs';
import path from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const srcPackage = path.join(__dirname, 'package');
const srcLibDir = path.join(__dirname, 'src', 'lib');
const dirPath = path.join('src', 'lib','sitedata');
const libShort = '$lib';

let fileHead = '';

mkdir(dirPath,{recursive:true},()=>{});

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

function createObject(fileList, exportName="slotUiComponentList") {
	const start = `export const ${exportName} = [ `;
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
	mkdir(dirPath + '/api',{recursive:true},()=>{});
	let keyDone = {}
	let objImport = [];
	let objObj = [];
	fileList.forEach((file) => {
		try {
			const data = fs.readFileSync(file, 'utf8');
			let newData = data.replace(/declare/g, '');
			let frag = data.match(/__propDef:([^.]*)};([^.]*)export/gm);

			const comp = file.split('\\').slice(-1)[0].split('.')[0];
			const newContent = frag?.[0]?.replace(/export/gm, '');
			const src = ('$lib/sitedata/api/' + comp + '.md').replace(/\\/g, '/');
			if (!keyDone[comp.toLowerCase()] && !comp.toLowerCase().includes('demo')) {
				objImport.push(`import ${comp}ReadMe from "${src}"`);
				objObj.push(`${comp.toLowerCase()}:${comp}ReadMe`);
				keyDone[comp.toLowerCase()] = true
			}

			fs.writeFileSync(
				dirPath + '/api/' + comp + '.md',
				newContent ? '```typescript \r\n' + newContent + '\r\n ```' : 'error !!'
			);
		} catch (e) {}
	});
	// write catalog object
	const finalObj = `export const componentReadMe = {${objObj.join(',\r\n')}}`;
	fs.writeFileSync(dirPath + '/api/index.ts', objImport.join(';\r\n') + ';\r\n\r\n' + finalObj);
}

// create a file

const result = getAllFiles(srcLibDir);
const resultPreview = getAllFiles(srcLibDir,[],'preview');
const resultProps = getAllFiles(srcPackage, [], 'svelte.d.ts');

// write methods from packaged components
createMethods(resultProps);

// write component list
fs.writeFileSync(
	dirPath + '/componentList.ts',
	createFile(result) + ' \r\n ' + createObject(result,"slotUiComponentList")
);

console.log(dirPath, 'Documentation files created into /componentList.ts');
fs.writeFileSync(
	dirPath + '/componentPreviewList.ts',
	createFile(resultPreview) + ' \r\n ' + createObject(resultPreview,"slotUiComponentPreviewList")
);
console.log(dirPath, 'Preview files created into /componentPreviewList.ts');
