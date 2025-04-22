import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        plugins: {
            import: importPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "never",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "import/no-duplicates": "error",
            "import/newline-after-import": "error",
        },
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs["recommended"].rules,
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...reactPlugin.configs["recommended"].rules,
            ...reactHooksPlugin.configs["recommended"].rules,
            ...jsxA11yPlugin.configs["recommended"].rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-curly-spacing": ["error", { when: "never" }],
            "no-console": "warn",
            "react/display-name": "off",
        },
    },
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            "prettier/prettier": [
                "warn",
                {},
                {
                    usePrettierrc: true,
                },
            ],
        },
    },
];
