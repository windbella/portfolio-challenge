module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    ignorePatterns: ['!.eslintrc.js'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 'off',
        'import/order': 'off',
        'no-use-before-define': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
