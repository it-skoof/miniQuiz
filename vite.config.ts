import path from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => ({
    mode: mode ? mode : 'development', 
    root: path.resolve('.'),
    build: {
        rolldownOptions: {
            output: {
                entryFileNames: 'main.[hash:8].js'
            }
        }
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
        alias: {
            '@': path.resolve('.', 'src'),
            '@atoms': path.resolve('.', 'src', 'atoms'),
        }
    },
    plugins: [react()],
    server: {
        hmr: true,
        host: mode === 'development' ? '127.0.0.1' : 'localhost'
    }
}))