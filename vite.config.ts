import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,  // 타입을 별도의 엔트리로 추가
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts', // 번들링할 엔트리 파일
      name: 'BootstrapThemePlugin',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // React 및 ReactDOM을 외부 의존성으로 설정
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
