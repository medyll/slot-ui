import adapter from "@sveltejs/adapter-static"
import path from 'path'
import preprocess from 'svelte-preprocess';
import {sx4uPreprocess} from './src/lib/uses/sx4u/sx4uPreprocess.js';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
  
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
    }
};

export default config;
