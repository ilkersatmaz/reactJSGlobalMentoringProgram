module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/all",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'eslint-plugin'
    ],
    "rules": {
        'import/no-commonjs': 'off',
        'filenames/match-regex': 'off',
        'i18n-text/no-en': 'off',
        'eslint-plugin/prefer-placeholders': 'off',
        'eslint-plugin/test-case-shorthand-strings': 'off',
        'eslint-plugin/require-meta-docs-url': 'off',
        "quotes": [
            "error",
            "single"
        ],

    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // It will default to "latest" and warn if missing, and to "detect" in the future
            "flowVersion": "0.53" // Flow version
          },
    }
}
