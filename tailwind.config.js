const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: colors.trueGray,
            },
            boxShadow: {
                'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fill, minmax(5rem, 1fr))',
            },
            inset: {
                center: 'calc(50% - (24rem / 2))',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-focus'],
            backgroundColor: ['group-focus', 'checked'],
            backgroundImage: ['checked'],
            borderColor: ['checked'],
            boxShadow: ['dark'],
        },
    },
    plugins: [
        forms,
    ],
};
