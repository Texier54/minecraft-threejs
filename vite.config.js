import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/minecraft-threejs/' : '', // Remplace par le nom de ton repo GitHub
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: 'index.html',
                craftList: 'craftList.html'
            }
        }
    }
});