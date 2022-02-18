const path = require('path');
const preprocess = require('svelte-preprocess');
const replaceFileExtension = (filePath, newExtension) => {
    const {name, root, dir} = path.parse(filePath);
    return path.format({
        name,
        root,
        dir,
        ext: newExtension
    });
};

module.exports = {
    core: {
        builder: 'webpack5'
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
    framework: '@storybook/svelte',
    svelteOptions: {
        preprocess: [
            preprocess({
                aliases: [['sx4u', 'sx4uLanguage']],
                sx4uLanguage(args) {
                    return import('../src/lib/uses/sx4u/sx4uPreprocess.js').render(args); //  sx4uPreprocess.render(args);
                }
            })
        ]
    },
    webpackFinal: async (config) => {
        // Find the plugin instance that needs to be mutated
        const virtualModulesPlugin = config.plugins.find(
            (plugin) => plugin.constructor.name === 'VirtualModulesPlugin'
        );
        // Change the file extension to .cjs for all files that end with "generated-stories-entry.js"
        virtualModulesPlugin._staticModules = Object.fromEntries(
            Object.entries(virtualModulesPlugin._staticModules).map(([key, value]) => {
                if (key.endsWith('generated-stories-entry.js')) {
                    return [replaceFileExtension(key, '.cjs'), value];
                }
                return [key, value];
            })
        );
        // Change the entry points to point to the appropriate .cjs files
        config.entry = config.entry.map((entry) => {
            if (entry.endsWith('generated-stories-entry.js')) {
                return replaceFileExtension(entry, '.cjs');
            }
            return entry;
        });
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                svelte: path.resolve(__dirname, '..', 'node_modules', 'svelte')
            },
            mainFields: ['svelte', 'browser', 'module', 'main']
        };

        config.module.rules.push({
            resolve: {
                fullySpecified: false,
                extensions: ['.js', '.ts']
            }
        });

        return config;
    }
};
