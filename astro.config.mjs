// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    site: "https://hello.deploy.afuzzy.cloud",
    vite: {
        preview: {
            host: '0.0.0.0',
            allowedHosts: true
        }
    }
});