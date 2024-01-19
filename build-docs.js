import fs, { mkdir } from 'fs';
import path from 'path';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const srcPackage = path.join(__dirname, 'dist');
const srcLibDir = path.join(__dirname, 'src', 'lib');

const dirPath = path.join('src',  'sitedata');
// const dirPath = path.join('src','sitedata');
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
				 console.log(fragment,path.join(cleanPath, file))
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
			const comp = dotToCamelCase(fl).split('\\').slice(-1).toString()?.replace(/\./g, '');
			const src = libShort + fl.replace(/\\/g, '/');
			return `import ${dotToCamelCase(comp)} from "${src}";\rexport {${dotToCamelCase(comp)}} ; `;
		})
		.join('\r\n');
}

/** convert object to text file content  export const = [{}] */
/** @deprecated  */
function createObject(fileList, exportName = 'slotUiComponentList') {
	const start = `export const ${exportName} = [ `;
	const middle = fileList
		?.map((fl) => {
			const group = fl.split('\\')[1];
			const comp = dotToCamelCase(fl).split('\\').slice(-1).toString()?.replace(/\./g, '');
			const compName = dotToCamelCase(fl).split('\\').slice(-1)[0].split('.')[0];
			const code = compName.toLowerCase();

			const src = fl.replace(/\\/g, '/');

			return `{name:"${compName}",code:"${code}",component:${comp},group:"${group}"}`;
		})
		.join(',\r\n');

	const end = ' ] ';

	return start + middle + end;
}

/** convert object to text file content  export const = [{}] */
function createComponentList(fileList, exportName = 'slotUiComponentList') {
	const start = `export const ${exportName} = { `;
	const middle = fileList
		?.map((fl) => {
			const group = fl.split('\\')[1];
			const comp = fl.split('\\').slice(-1).toString()?.replace(/\./g, '');
			const compName = fl.split('\\').slice(-1)[0].split('.')[0];
			const code = compName.toLowerCase();

			const src = fl.replace(/\\/g, '/');

			return `${code}:{name:"${compName}",code:"${code}",group:"${group}"}`;
		})
		.join(',\r\n');

	const end = ' } as const';

	return start + middle + end;
}
function dotToCamelCase(str) {
	return str.replace(/\.(\w)/g, function (match, letter) {
		return letter.toUpperCase();
	});
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
			// if (comp.includes("Tree"))

			let frag = data.match(/__propDef:([^.]*)};([^.]*)export/gm);

			const pathc = [...file.split('\\').slice(0, -1)].join('\\').split('\\dist')[1];
			const comp = file.split('\\').slice(-1)[0].split('.')[0];
			const newContent = frag?.[0]?.replace(/export/gm, '');

			const pathApi = srcLibDir + pathc + '\\' + comp + '.api.md';
			const srcApi = ('$lib' + pathc + '\\' + comp + '.api.md').replace(/\\/g, '/');
			const pathDoc = srcLibDir + pathc + '\\' + comp + '.md';
			const srcDoc = ('$lib' + pathc + '\\' + comp + '.md').replace(/\\/g, '/');

			const collectedComps = [];
			//console.log(pathc, srcApi, srcDoc)
			if (
				!keyDone[comp.toLowerCase()] &&
				!file.toLowerCase().includes('demo') &&
				!file.toLowerCase().includes('preview')
			) {
				objImport.push(`import ${comp}ReadMe from "${srcDoc}";\r export {${comp}ReadMe};`);
				objObj.push(`${comp.toLowerCase()}:${comp}ReadMe`);

				collectedComps.push(`${comp}ReadMe`);

				objApiImport.push(`import ${comp}ApiReadMe from "${srcApi}"`);
				objApiObj.push(`${comp.toLowerCase()}Api:${comp}ApiReadMe`);

				// array uniques
				objObj.filter((v, i, a) => a.indexOf(v) === i);
				objImport.filter((v, i, a) => a.indexOf(v) === i);
				objApiImport.filter((v, i, a) => a.indexOf(v) === i);
				objApiObj.filter((v, i, a) => a.indexOf(v) === i);

				fs.writeFileSync(pathApi, '```' + data + '\r\n ```');

				fs.writeFileSync(pathDoc, newContent ? '```ts \r\n' + newContent + '\r\n ```' : 'missing');
				/* fs.writeFileSync(
					pathc + '\\' + comp + '.api.md',
					'```' + data + '\r\n ```'
				); */
				keyDone[comp.toLowerCase()] = true;
			}
		} catch (e) {
			// console.log(e)
		}
	});
	// write catalog object
	const finalObj = `export const componentReadMe = {${objObj.join(',\r\n')}}`;
	const finalApiObj = `export const componentApiReadMe = {${objApiObj.join(',\r\n')}}`;

	objApiImport = objApiImport.filter((v, i, a) => a.indexOf(v) === i);

	fs.writeFileSync(dirPath + '/api/indexApi.ts', objImport.join(';\r\n') + ';\r\n\r\n' + finalObj);
	fs.writeFileSync(
		dirPath + '/api/indexApiFull.ts',
		objApiImport.join(';\r\n') + ';\r\n\r\n' + finalApiObj
	);
}

function extractPropDefFromString(fileContent) {
	const propDefRegex = /__propDef:\s*({[\s\S]+?});/g;
	const propDefMatch = propDefRegex.exec(fileContent);

	if (!propDefMatch) {
		throw new Error('__propDef not found in string');
	}

	const propDefString = propDefMatch[1];

	const propsRegex = /props:\s*({[\s\S]+?}),/g;
	const propsMatch = propsRegex.exec(propDefString);

	if (!propsMatch) {
		throw new Error('props not found in __propDef');
	}

	const propsString = propsMatch[1];
	const props = eval(`(${propsString})`);

	const eventsRegex = /events:\s*({[\s\S]+?}),/g;
	const eventsMatch = eventsRegex.exec(propDefString);

	if (!eventsMatch) {
		throw new Error('events not found in __propDef');
	}

	const eventsString = eventsMatch[1];
	const events = eval(`(${eventsString})`);

	const slotsRegex = /slots:\s*({[\s\S]+?})/g;
	const slotsMatch = slotsRegex.exec(propDefString);

	if (!slotsMatch) {
		throw new Error('slots not found in __propDef');
	}

	const slotsString = slotsMatch[1];
	const slots = eval(`(${slotsString})`);

	const result = {
		props,
		events,
		slots
	};

	return result;
}

function fromPropDefStringToJSON(str = '') {
	const startIndex = str.indexOf('declare const __propDef: {');
	const endIndex = str.lastIndexOf('};');
	const relevantStr = str.substring(startIndex, endIndex + 3);
	const lines = relevantStr.split('\n');

	const props = {};
	const events = {};
	const slots = {};
	let currentSection = 'props'; // can be  "props" | "events" | "slots"
	let currentComment = ''; // to store the comment of the current property

	for (const line of lines) {
		if (line.includes('props: {')) {
			currentSection = 'props';
		} else if (line.includes('events: {')) {
			currentSection = 'events';
		} else if (line.includes('slots: {')) {
			currentSection = 'slots';
		} else if (line.includes('};')) {
			break;
		} else if (line.trim().startsWith('/**')) {
			currentComment = line
				.trim()
				.replace(/\/\*\*\s*/, '')
				.replace(/\s*\*\//, '');
		} else {
			let [key, value = ''] = line
				.trim()
				.replace(/;/, '')
				.split(':')
				.map((v) => v.trim());

			const typeMatch = value.match(/\w+/);

			let type = 'any';
			let defaultValue = '';
			let optional = false;

			if (key.includes('?')) {
				optional = true;
				key = key.replace('?', '');
			}

			if (typeMatch) {
				type = typeMatch[0];
				const defaultValueMatch = value.match(/=.*/);
				if (defaultValueMatch) {
					defaultValue = defaultValueMatch[0].replace(/=\s*/, '');
				}
			}
			if (currentSection === 'props') {
				props[key] = { type, defaultValue, comments: currentComment, optional };
				currentComment = '';
			} else if (currentSection === 'events') {
				events[key] = { type, comments: currentComment };
				currentComment = '';
			} else if (currentSection === 'slots') {
				slots[key] = { type, comments: currentComment };
				currentComment = '';
			}
		}
	}

	return { props, events, slots };
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

			const src = ('$sitedata/api/' + comp + '.md').replace(/\\/g, '/');
			const srcApiFull = ('$sitedata/api/' + comp + '.api.md').replace(/\\/g, '/');

			if (
				!keyDone[comp.toLowerCase()] &&
				!file.toLowerCase().includes('demo') &&
				!file.toLowerCase().includes('preview')
			) {
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

	fs.writeFileSync(dirPath + '/api/indexApi.ts', objImport.join(';\r\n') + ';\r\n\r\n' + finalObj);
	fs.writeFileSync(
		dirPath + '/api/indexApiFull.ts',
		objApiImport.join(';\r\n') + ';\r\n\r\n' + finalApiObj
	);
}

// create a file

const resultProps = getAllFiles(srcPackage, 'svelte.d.ts');
// write methods from packaged components
// createMethods(resultProps);
console.log(dirPath, 'component.api.md and component.md creation');
// createReadme(resultProps);
console.log(dirPath, 'index files for component.api.md and component.md');

const result = getAllFiles(srcLibDir, 'demo.svelte');
// console.log(result)
const resultPreview = getAllFiles(srcLibDir, 'preview.svelte');
// write old component list
fs.writeFileSync(
	dirPath + '/componentList.ts',
	createFile(result) + ' \r\n ' + createObject(result, 'slotUiComponentList')
);
// write new component list
fs.writeFileSync(
	path.join('src', 'lib') + '/slotuiCatalog.ts',
	//dirPath + '/slotuiCatalog.ts',
	createComponentList(result, 'slotuiCatalog')
);
console.log(dirPath, 'Documentation files created into /componentList.ts');

fs.writeFileSync(
	dirPath + '/componentPreviewList.ts',
	createFile(resultPreview) + ' \r\n ' + createObject(resultPreview, 'slotUiComponentPreviewList')
);
console.log(dirPath, 'Preview files created into /componentPreviewList.ts');
