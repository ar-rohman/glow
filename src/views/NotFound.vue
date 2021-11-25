<template>
    <div>
        <ErrorPage v-bind="errorData" />
    </div>
</template>

<script>
import ErrorPage from '@/components/ErrorPage.vue';

export default {
    name: 'NotFound',
    components: {
        ErrorPage,
    },
    data() {
        return {
            errorData: {
                cod: 404,
            },
        };
    },
};
</script>
