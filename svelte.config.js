import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {sx4uPreprocess} from './src/use/sx4u/sx4uPreprocess.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            aliases: [
                ['sx4u', 'sx4uLanguage'],
            ],
            sx4uLanguage(args) {
                return sx4uPreprocess.render(args)
            },
        }),
    ],

    kit: {
        adapter: adapter(),
        // hydrate the <div id="svelte"> element in src/app.html
    }
};

export default config;