module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-param-reassign': 0,
        // 'import/no-unresolved': 'off',
        // 'global-require': 0,
    },
};
