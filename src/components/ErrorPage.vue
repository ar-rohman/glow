<template>
    <div class="flex flex-col justify-center items-center h-screen -my-20">
        <div class="flex items-center">
            <div class="bg-red-200 rounded-full p-3 text-red-500 dark:bg-red-600
                dark:text-dark-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732
                        4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <div class="text-2xl ml-4 font-bold">
                <p>{{ errorCode }} {{ errorType }}</p>
            </div>
        </div>
        <div class="mt-4 max-w-sm text-center">
            {{ errorMessage | ucfirst }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
    props: {
        cod: {
            default: '',
        },
        message: {
            default: '',
        },
    },
    data() {
        return {
            errorCode: '',
            errorType: '',
            errorMessage: '',
        };
    },
    created() {
        this.httpStatus();
    },
    watch: {
        cod: {
            handler: 'httpStatus',
            immediate: true,
        },
        message: {
            handler: 'httpStatus',
            immediate: true,
        },
    },
    methods: {
        httpStatus() {
            this.errorCode = this.cod;
            if (Number(this.cod) === 400) {
                this.errorType = 'Bad Request';
                this.errorMessage = 'There was a problem with your request';
            } else if (Number(this.cod) === 401) {
                this.errorType = 'Unauthorized';
                this.errorMessage = 'Sorry, your request could not be processed';
            } else if (Number(this.cod) === 404) {
                this.errorType = 'Not Found';
                this.errorMessage = this.message || 'Sorry, the page you requested are not found.';
            } else if (Number(this.cod) === 429) {
                this.errorType = 'Too Many Requests';
                this.errorMessage = 'Sorry, we have recieved too many requests and reached our limit, please try again in one minute.';
            } else if (Number(this.cod) === 500) {
                this.errorType = 'Internal Server Error';
                this.errorMessage = this.message;
            } else if (Number(this.cod) === 502) {
                this.errorType = 'Bad Gateway';
                this.errorMessage = this.message;
            } else if (Number(this.cod) === 503) {
                this.errorType = 'Service Unavailable';
                this.errorMessage = this.message;
            } else if (Number(this.cod) === 504) {
                this.errorType = 'Gateway Timeout';
                this.errorMessage = this.message;
            } else if (!navigator.onLine) {
                this.errorType = 'No Internet Connection';
                this.errorMessage = 'Please check your internet connection and try again.';
            } else {
                this.errorType = 'Unknown Error';
                this.errorMessage = this.message;
            }
        },
    },
};
</script>
