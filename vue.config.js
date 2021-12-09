/* eslint-disable no-undef */

module.exports = {
    publicPath: '/', // process.env.NODE_ENV === 'production' ? '/portfolio/glow' : '/',
    pwa: {
        name: 'Glow',
        themeColor: '#1D4ED8',
        msTileColor: '#404040',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#1D4ED8',

        manifestOptions: {
            name: 'Global Weather',
            short_name: 'Glow',
            description: 'Weather forecast for any location on Earth',
            orientation: 'any',
            display: 'standalone',
            start_url: '/index.html',
            background_color: '#404040',
            theme_color: '#1D4ED8',
        },
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
            exclude: [
                /\.map$/,
            ],
        },
    },
};
