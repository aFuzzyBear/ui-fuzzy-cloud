// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: "https://hello.deploy.afuzzy.cloud",
    vite: {
        preview: {
            allowedHosts: ['hello.deploy.afuzzy.cloud', 'localhost'],
        }
    }
});
