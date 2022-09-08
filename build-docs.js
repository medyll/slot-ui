import fs, { mkdir } from 'fs';
import path from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const srcPackage = path.join(__dirname, 'package');
const srcLibDir = path.join(__dirname, 'src', 'lib');
const dirPath = path.join('src', 'lib', 'sitedata');
const libShort = '$lib';

let fileHead = '';

mkdir(dirPath, { recursive: true }, () => {});

const getAllFiles = function (dirPath, fragment = 'demo.svelte', arrayOfFiles = []) {
	let files = fs.readdirSync(dirPath);
	let cleanPath = dirPath.replace(srcLibDir, '');

	files.forEach(function (file) {
		const tDir = dirPath.replace(path.join(__dirname), '');

		if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
			arrayOfFiles = getAllFiles(path.join(dirPath, file), fragment, arrayOfFiles);
		} else {
			if (file.includes(fragment)) {
				// console.log(fragment,path.join(cleanPath, file))
				arrayOfFiles.push(path.join(cleanPath, file));
			}
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

/** convert object to text file content  export const = [{}] */
function createObject(fileList, exportName = 'slotUiComponentList') {
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

/** writes .md and api.md from packageDir  */
function createMethods(fileList) {
	mkdir(dirPath + '/api', { recursive: true }, () => {});
	let keyDone = {};

	let objImport = [];
	let objObj = [];
	let objApiImport = [];
	let objApiObj = [];
 
	fileList.forEach((file) => {
		try {
			const data = fs.readFileSync(file, 'utf8');
			let newData = data.replace(/declare/g, '');
			let frag = data.match(/__propDef:([^.]*)};([^.]*)export/gm);

			const comp = file.split('\\').slice(-1)[0].split('.')[0];
			const newContent = frag?.[0]?.replace(/export/gm, '');

			const src = ('$lib/sitedata/api/' + comp + '.md').replace(/\\/g, '/');
			const srcApiFull = ('$lib/sitedata/api/' + comp + '.api.md').replace(/\\/g, '/');

			if (!keyDone[comp.toLowerCase()] &&  !file.toLowerCase().includes('demo') &&  !file.toLowerCase().includes('preview')) {
				objImport.push(`import ${comp}ReadMe from "${src}"`);
				objObj.push(`${comp.toLowerCase()}:${comp}ReadMe`);
				// if (!newContent) newContent = data; // console.log({file, frag,data});; //newContent = data; //

				fs.writeFileSync(
					dirPath + '/api/' + comp + '.md',
					newContent ? '```typescript \r\n' + newContent + '\r\n ```' : 'error !!'
				);

				objApiImport.push(`import ${comp}ApiReadMe from "${srcApiFull}"`);
				objApiObj.push(`${comp.toLowerCase()}Api:${comp}ApiReadMe`);

				fs.writeFileSync(
					dirPath + '/api/' + comp + '.api.md',
					'```'+data+ '\r\n ```'
				);

				keyDone[comp.toLowerCase()] = true;
			}
		} catch (e) {}
	}); 
}

function createReadme(fileList) {
	mkdir(dirPath + '/api', { recursive: true }, () => {});
	let keyDone = {};

	let objImport = [];
	let objObj = [];
	let objApiImport = [];
	let objApiObj = [];

	fileList.forEach((file) => { 
		try {
			const data = fs.readFileSync(file, 'utf8');
			let newData = data.replace(/declare/g, '');
			let frag = data.match(/__propDef:([^.]*)};([^.]*)export/gm);

			const comp = file.split('\\').slice(-1)[0].split('.')[0];
			const newContent = frag?.[0]?.replace(/export/gm, '');
			
			const src = ('$lib/sitedata/api/' + comp + '.md').replace(/\\/g, '/');
			const srcApiFull = ('$lib/sitedata/api/' + comp + '.api.md').replace(/\\/g, '/');

			if (!keyDone[comp.toLowerCase()] &&  !file.toLowerCase().includes('demo') &&  !file.toLowerCase().includes('preview')) {
				objImport.push(`import ${comp}ReadMe from "${src}"`);
				objObj.push(`${comp.toLowerCase()}:${comp}ReadMe`); 

			 

				objApiImport.push(`import ${comp}ApiReadMe from "${srcApiFull}"`);
				objApiObj.push(`${comp.toLowerCase()}Api:${comp}ApiReadMe`);
				 

				keyDone[comp.toLowerCase()] = true;
			}
		} catch (e) {}
	}); 
	// write catalog object
	const finalObj = `export const componentReadMe = {${objObj.join(',\r\n')}}`;
	const finalApiObj = `export const componentApiReadMe = {${objApiObj.join(',\r\n')}}`;

	fs.writeFileSync(dirPath + '/api/index.ts', objImport.join(';\r\n') + ';\r\n\r\n' + finalObj);
	fs.writeFileSync(dirPath + '/api/indexApiFull.ts', objApiImport.join(';\r\n') + ';\r\n\r\n' + finalApiObj);
}

// create a file


const resultProps = getAllFiles(srcPackage, 'svelte.d.ts');
// write methods from packaged components 
createMethods(resultProps);
console.log(dirPath, 'component.api.md and component.md creation');
createReadme(resultProps);
console.log(dirPath, 'index files for component.api.md and component.md');

const result = getAllFiles(srcLibDir,'demo.svelte');
const resultPreview = getAllFiles(srcLibDir, 'preview.svelte');
// write component list
fs.writeFileSync(
	dirPath + '/componentList.ts',
	createFile(result) + ' \r\n ' + createObject(result, 'slotUiComponentList')
);
console.log(dirPath, 'Documentation files created into /componentList.ts');

fs.writeFileSync(
	dirPath + '/componentPreviewList.ts',
	createFile(resultPreview) + ' \r\n ' + createObject(resultPreview, 'slotUiComponentPreviewList')
);
console.log(dirPath, 'Preview files created into /componentPreviewList.ts');
