import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import sveld  from 'sveld';
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

async function generateTypeDefinitions() {
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

    //console.log(ComponentParser)

	try {
		sveld.sveld({
			input: './src/lib/svelte-index.js',
			verbose: true,
			glob: true,
			types: false,
			json: true,
			jsonOptions: {
				outDir: `${config.outDir}`
			},
			markdown: false,
			markdownOptions: {
				outDir: './src/md',
				write: true
			}
		});
	} catch (err) {
		console.error(err);
		// try running with svelte2tsx, descriptions will be missing
	}
}

const config = {
	outDir: './src/docs/generated'
};

function main() {

	fs.mkdirSync(config.outDir, { recursive: true });
	/* fs.mkdirSync(dtsDir, { recursive: true });
	fs.readdirSync(svelteFilesDir)
		.filter((f) => f.endsWith('.svelte'))
		.forEach((f) => { 
		}); */

	generateTypeDefinitions();
}

main();
