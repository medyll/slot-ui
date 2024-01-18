import fs from 'fs';
import path from 'path';
import svelte2tsx from 'svelte2tsx';
import ts from 'typescript';

function extractTypes(svelteFilePath, tsxDirPath) {
	const svelteCode = fs.readFileSync(svelteFilePath, 'utf-8');
	const tsxCode = svelte2tsx(svelteCode);
	const tsxFilePath = path.join(tsxDirPath, path.basename(svelteFilePath, '.svelte') + '.tsx');
	fs.writeFileSync(tsxFilePath, tsxCode);
}

function generateTypeDefinitions(tsxDirPath, dtsDirPath) {
    const tsConfig = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json');
    const tsConfigContent = ts.readConfigFile(tsConfig, ts.sys.readFile).config;
    const tsCompilerOptions = ts.parseJsonConfigFileContent(tsConfigContent, ts.sys, './').options;
    tsCompilerOptions.declaration = true; // Enable generation of .d.ts files
    tsCompilerOptions.emitDeclarationOnly = true; // Only emit .d.ts files and no .js files
    const program = ts.createProgram(
        fs.readdirSync(tsxDirPath).map((f) => path.join(tsxDirPath, f)),
        tsCompilerOptions
    );
    program.emit(); // Emit the .d.ts files

    // Move the generated .d.ts files to the desired directory
    fs.readdirSync(tsxDirPath)
        .filter((f) => f.endsWith('.d.ts'))
        .forEach((f) => {
            const sourcePath = path.join(tsxDirPath, f);
            const destPath = path.join(dtsDirPath, f);
            fs.renameSync(sourcePath, destPath);
        });
}

function main() {
	const svelteFilesDir = './src/lib';
	const tsxDir = './.tmp-tsx';
	const dtsDir = './types-nope';
	fs.mkdirSync(tsxDir, { recursive: true });
	fs.mkdirSync(dtsDir, { recursive: true });
	fs.readdirSync(svelteFilesDir)
		.filter((f) => f.endsWith('.svelte'))
		.forEach((f) => extractTypes(path.join(svelteFilesDir, f), tsxDir));
	generateTypeDefinitions(tsxDir, dtsDir);
	fs.rmdirSync(tsxDir, { recursive: true });
}

main();
