module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-var": 1
    }
};