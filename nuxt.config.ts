// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/app.css'],
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/fonts', '@nuxt/eslint'],
  content: {
    build: {
      markdown: {
        highlight: {
          // Get the themes from here: https://shiki.style/themes
          theme: 'dracula',
          langs: [
            'c',
            'cpp',
            'java',
            'ruby',
            'python',
            'elixir',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'mdc',
            'md',
            'yaml',
          ],
        },
      },
    },
  },
});
