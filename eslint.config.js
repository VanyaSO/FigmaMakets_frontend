import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': tseslint,
            prettier: prettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...prettierConfig.rules,
            'prettier/prettier': ['error', { usePrettierrc: true }],
            'react/react-in-jsx-scope': 'off',
            'quotes': ['error', 'double', { avoidEscape: true }],
            'jsx-quotes': ['error', 'prefer-double'],
            'semi': ['error', 'always'],
            'no-mixed-spaces-and-tabs': 'error',
            'no-console': 'warn',
            'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
        },
    },
    {
        ignores: ['dist'],
    },
];
