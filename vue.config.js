module.exports = {
    pwa: {
        name: 'Glow',
        themeColor: '#1D4ED8',
        msTileColor: '#404040',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#1D4ED8',

        manifestOptions: {
            name: 'Global Weather',
            short_name: 'Glow',
            description: 'Free Catalouge Restaurant for you',
            orientation: 'portrait',
            display: 'standalone',
            start_url: '/index.html',
            background_color: '#404040',
            theme_color: '#1D4ED8',
        },
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
        },
    },
};
