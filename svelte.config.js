import adapter from "@sveltejs/adapter-static"
import path from 'path'
import preprocess from 'svelte-preprocess';
import {sx4uPreprocess} from './src/lib/uses/sx4u/sx4uPreprocess.js';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            aliases: [['sx4u', 'sx4uLanguage']],
            sx4uLanguage(args) {
                return sx4uPreprocess.render(args);
            }
        })
    ],    
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
		paths: {
			// change below to your repo name
			// base: dev ? "" : "",
		},
        prerender: {
            default: true
        },
        package: {
            dir: 'package',
            emitTypes: true,
            exports: (filepath) => true
        },
        vite: {
            resolve: {alias:{
                '$scripts': path.resolve('./src/lib/scripts'),
                '$engine': path.resolve('./src/lib/engine'),
                '$uses': path.resolve('./src/lib/uses'),
                '$types': path.resolve('./src/lib/types'),
            }},
            server: {
                fs: {
                    // Allow serving files from one level up to the project root
                    // allow: ['..']
                }
            },
            optimizeDeps: {
                include: ['highlight.js', 'highlight.js/lib/core']
            },            
        },
        
    }
};

export default config;
