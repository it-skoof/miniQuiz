import path from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
export default defineConfig(({mode}) => ({
    mode: mode ? mode : 'development', 
    root: path.resolve('.'),
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
        alias: {
            '@': path.resolve('.', 'src'),
            '@atoms': path.resolve('.', 'src', 'atoms'),
        }
    },
    plugins: [
        react(), federation({
            name: 'miniQuiz',
            filename: 'miniQuiz.js',
            exposes: {
                './App': './src/App.tsx'
            },
            shared: ['react', 'react-dom'],
            
        })],
    preview: {
        port: 5173,
        cors: true,
        headers: {
            'access-control-allow-origin': '*'
        }
    },
    server: {
        hmr: true,
        host: '0.0.0.0',
        cors: true,
        headers: {
            'access-control-allow-origin': '*'
        }
    }
}))