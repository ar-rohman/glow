import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        // Home Page
        homePageTitle: 'Current weather forecast',
        lastUpdated: 'Last updated',
        moreDetails: 'More details',
        feelLike: 'Feel Like',
        pressure: 'Pressure',
        windSpeed: 'Wind Speed',
        humidity: 'Humidity',
        cloudiness: 'Cloudiness',
        visibility: 'Visibility',
        timezone: 'Timezone',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        latitude: 'Latitude',
        longitude: 'Longitude',

        // Detail page
        detailPageTitle: 'Weather forecast for',
        hourly: 'Hourly',
        daily: 'Daily',

        // Hourly page
        hourlyPageTitle: 'Hourly weather forecast for',
        uvIndex: 'UV Index',
        dewPoint: 'Dew Point',

        // Daily page
        dailyPageTitle: 'Daily weather forecast for',
        moonrise: 'Moonrise',
        moonset: 'Moonsets',

        // Favorite page
        favoritePageTitle: 'Favorite Locations',
        noFavorite: 'There are no favorite locations',

        // Setting page
        location: 'Location',
        locationInfo: 'Set default location used at home page, the default location is',
        locationInputPlaceholder: 'Type location then press enter key...',
        saveLocation: 'Save location',
        temperature: 'Temperature',
        theme: 'Theme',
        language: 'Language',
        systemDefault: 'System default',
        dark: 'Dark',
        light: 'Light',
        isFound: 'is found!',
        isNotFound: 'isn\'t found!',

        // About page
        aboutDesc: 'Glow (stands for Global Weather) is an application that provides weather data from any location on Earth.',
        dataSource: 'All weather data taken from',
        developedBy: 'Developed by',
        version: 'Version',
        copyright: 'Copyright',

        // Search Page
        removeFavorite: 'Remove from favorite',
        addFavorite: 'Add to favorite',

        // Search Components
        searchInputPlaceholder: 'Search city...',

        // NavMenu Components
        home: 'Home',
        favorite: 'Favorite',
        setting: 'Setting',
        about: 'About',

        // Modal Components
        modalTitle: 'Delete location',
        deleteMessage1: 'Are you sure you want to delete',
        deleteMessage2: ' city?',
        deleteMessage3: 'This action cannot be undone.',
        delete: 'Delete',
        cancel: 'Cancel',

        // Alert
        alertSuccess: 'Success!',
        defaultLocationMessage: 'Default location changed to',
        removeFavoriteMsg: 'removed from favorite',
        addFavoriteMsg: 'added to favorite',

        // Error message
        error: 'Something went wrong, please try again',
        keywordNotFoud1: 'Sorry, we can\'t found city with keyword',
        keywordNotFoud2: 'please try another keywords.',
        pageNotFound: 'Sorry, the page you requested could not be found.',
    },
    id: {
        // Home page
        homePageTitle: 'Prakiraan cuaca saat ini',
        lastUpdated: 'Pembaruan terakhir',
        moreDetails: 'Selengkapnya',
        feelLike: 'Terasa Seperti',
        pressure: 'Tekanan',
        windSpeed: 'Kecapatan Angin',
        humidity: 'Kelembaban',
        cloudiness: 'Awan',
        visibility: 'Jarak Pandang',
        timezone: 'Zona Waktu',
        sunrise: 'Matahari Terbit',
        sunset: 'Matahari Terbenam',
        latitude: 'Garis Lintang',
        longitude: 'Garis Bujur',

        // Detail page
        detailPageTitle: 'Prakiraan cuaca untuk',
        hourly: 'Per Jam',
        daily: 'Per Hari',

        // Hourly page
        hourlyPageTitle: 'Prakiraan cuaca per jam untuk',
        uvIndex: 'Indeks UV',
        dewPoint: 'Titik Embun',

        // Daily page
        dailyPageTitle: 'Prakiraan cuaca per hari untuk',
        moonrise: 'Bulan Terbit',
        moonset: 'Bulan Terbenam',

        // Favorite page
        favoritePageTitle: 'Lokasi Favorit',
        noFavorite: 'Tidak ada lokasi favorit',

        // Setting page
        location: 'Lokasi',
        locationInfo: 'Atur lokasi bawaan yang digunakan pada halaman beranda, lokasi bawaan adalah',
        locationInputPlaceholder: 'Tulis lokasi kemudian tekan tombol enter...',
        saveLocation: 'Simpan lokasi',
        temperature: 'Suhu',
        theme: 'Tema',
        language: 'Bahasa',
        systemDefault: 'Bawaan sistem',
        dark: 'Gelap',
        light: 'Terang',
        isFound: 'ditemukan!',
        isNotFound: 'tidak ditemukan!',

        // About page
        aboutDesc: 'Glow (singkatan dari Global Weather) adalah sebuah aplikasi yang menyediakan data cuaca dari berbagai lokasi di bumi.',
        dataSource: 'Semua data cuaca di ambil dari',
        developedBy: 'Dikembangkan oleh',
        version: 'Versi',
        copyright: 'Hak Cipta',

        // Search Page
        removeFavorite: 'Hapus dari favorit',
        addFavorite: 'Tambahkan ke favorit',

        // Search Components
        searchInputPlaceholder: 'Cari kota...',

        // NavMenu Components
        home: 'Beranda',
        favorite: 'Favorit',
        setting: 'Pengaturan',
        about: 'Tentang',

        // Modal Components
        modalTitle: 'Hapus lokasi',
        deleteMessage1: 'Apakah anda yakin akan menghapus kota',
        deleteMessage2: '?',
        deleteMessage3: 'Tindakan ini tidak dapat dibatalkan.',
        delete: 'Hapus',
        cancel: 'Batal',

        // Alert
        alertSuccess: 'Sukses!',
        defaultLocationMessage: 'Lokasi bawaan diganti ke',
        removeFavoriteMsg: 'dihapus dari daftar favorit',
        addFavoriteMsg: 'ditambahkan ke daftar favorit',

        // Error message
        error: 'Terjadi kesalahan, silahkan coba kembali',
        keywordNotFoud1: 'Maaf, tidak ditemukan kota dengan kata kunci',
        keywordNotFoud2: 'silahkan gunakan kata kunci lain.',
        pageNotFound: 'Maaf, Halaman tidak ditemukan.',
    },
};
const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
