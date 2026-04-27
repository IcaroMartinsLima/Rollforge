import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,

  {
    ignores: ["node_modules", ".expo", "android", "ios", "dist"],
  },

  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];