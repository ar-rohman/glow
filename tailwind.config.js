const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: colors.trueGray,
            },
        },
    },
    variants: {
        extend: {
            display: ['group-focus'],
            backgroundColor: ['group-focus', 'checked'],
            backgroundImage: ['checked'],
            borderColor: ['checked'],
            // opacity: ['disabled'],
            // backgroundColor: ['active'],
        },
    },
    plugins: [
        forms,
    ],
};
