import path from 'node:path'
import {defineConfig} from 'vitest/config'
import { preview } from '@vitest/browser-preview'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    test: {
        include: ['./**/__tests__/*.test.{tsx,ts}'],
        setupFiles: ['./setupTests.ts'],
        pool: 'threads',
        environment : 'jsdom',
        root: path.resolve('.'),
        alias: {
            '@': path.resolve('.', 'src'),
        },
        exclude: ['**/node_modules/**'],
        // browser: {
        //     enabled: true,
        //     provider: preview(),
        //     instances: [
        //         {browser: 'chromium'}
        //     ]
        // },
        maxWorkers: 4,
    },
    server: {
        host: '127.0.0.1',
    }
})