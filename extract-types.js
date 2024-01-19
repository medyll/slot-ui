import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import sveld from 'sveld';
// const { ComponentParser } = sveld
import glob from 'glob';
// import * as pkg from './package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function dotToCamelCase(str) {
	return str.replace(/\.(\w)/g, function (match, letter) {
		return letter.toUpperCase();
	});
}

/**
 * generate the indexApi.ts file
 * @deprecated
 */
async function createMethods() {
	const svelteFiles = glob.sync('./src/lib/**/*.md');
	const excludePatterns = ['.preview', '.demo', '.wip', '.js'];

	const indexContent = svelteFiles
		.map((file) => {
			if (excludePatterns.some((pattern) => file.includes(pattern))) return;
			file = file.replace('./src/lib/', '$lib/');
			return `export { default as ${dotToCamelCase(path.basename(file, '.md'))} } from '${file}';`;
		})
		.filter((f) => f)
		.join('\n');

	fs.writeFileSync(path.join(__dirname, 'src/sitedata/api/indexApi.ts'), indexContent);
	//fs.writeFileSync(path.join(__dirname, 'src/lib/slotuiCatalog.ts'), `export const slotuiCatalog = {${indexContent}} as const`);
}

/**
 * generate the slotuiCatalog.ts file
 */
async function slotUiCatalogB() {
	const svelteFiles = glob.sync('./src/lib/**/*.svelte');
	const excludePatterns = ['.preview', '.demo', '.wip', '.js'];

	const indexContent = svelteFiles
		.map((file) => {
			if (excludePatterns.some((pattern) => file.includes(pattern))) return;
			const group = file.split('/')[3];
			const comp = file.split('\\').slice(-1).toString()?.replace(/\./g, '');
			const compName = file.split('/').slice(-1)[0].split('.')[0];
			const code = compName.toLowerCase();
			return `${code}:{name:"${compName}",code:"${code}",group:"${group}",dir:"${group}"},`;
		})
		.filter((f) => f)
		.join('\n');

	// write file
	fs.writeFileSync(
		path.join(__dirname, 'src/sitedata/slotuiCatalog.ts'),
		`export const slotuiCatalog = {${indexContent}} as const`
	);
}

 

async function generateSvelteIndex() {
	const svelteFiles = glob.sync('./src/lib/**/*.svelte');

	const indexContent = svelteFiles
		.map((file) => {
			file = file.replace('./src/lib/', '$lib/');
			if (!file) return;
			if (file.includes('.preview')) return;
			if (file.includes('.demo')) return;
			if (file.includes('.wip')) return;
			if (file.includes('.js')) return;
			return `export { default as ${path.basename(file, '.svelte')} } from '${file}';`;
		})
		.filter((f) => f)
		.join('\n');

	fs.writeFileSync(path.join(__dirname, 'src/lib/svelte-index.js'), indexContent);
	fs.writeFileSync(path.join(__dirname, `${config.sitedata}/slotuiComponents.ts`), indexContent);

	//console.log(ComponentParser)

	try {
		sveld.sveld({
			input: './src/lib/svelte-index.js',
			verbose: false,
			glob: true,
			types: false,
			json: true,
			jsonOptions: {
				outDir: `${config.slotuiDefs}`
			},
			markdown: false,
			markdownOptions: {
				outDir: './src/sitedata',
				write: true
			}
		});

		const jsonFiles = glob.sync(`${config.slotuiDefs}/*.json`);
		const jsonDir = jsonFiles
			.map((file) => {
				return `export { default as ${dotToCamelCase( 
					path.basename(file, '.json')
				)} } from './${path.basename(file, '.json')}.json';`;
			})
			.filter((f) => f)
			.join('\n');

		fs.writeFileSync(path.join(__dirname, `${config.slotuiDefs}/index.js`), jsonDir);
	} catch (err) {
		console.error(err);
		// try running with svelte2tsx, descriptions will be missing
	}
}

const config = {
	sitedata: './src/sitedata',
	slotuiDefs: './src/sitedata/slotuiDefs',
};

function main() {
	fs.mkdirSync(config.slotuiDefs, { recursive: true });
	/* fs.mkdirSync(dtsDir, { recursive: true });
	fs.readdirSync(svelteFilesDir)
		.filter((f) => f.endsWith('.svelte'))
		.forEach((f) => { 
		}); */
	createMethods();
	slotUiCatalogB();
	generateSvelteIndex();
}

main();
