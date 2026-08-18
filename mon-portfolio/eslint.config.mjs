import eslintPluginAstro from 'eslint-plugin-astro'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // 1. Règles de base TypeScript
  ...tseslint.configs.recommended,

  // 2. Règles de base Vue 3
  ...pluginVue.configs['flat/recommended'],

  // 3. Règles Astro
  ...eslintPluginAstro.configs.recommended,

  // 4. Désactivation des règles conflictuelles avec Prettier
  eslintConfigPrettier,

  // 5. Configuration spécifique pour les fichiers .vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        // C'est cette ligne qui dit à Vue d'utiliser TypeScript pour lire le code
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
