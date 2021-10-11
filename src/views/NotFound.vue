<template>
    <div>
        <ErrorPage />
    </div>
</template>

<script>
import ErrorPage from '@/components/ErrorPage.vue';

export default {
    name: 'NotFound',
    components: {
        ErrorPage,
    },
};
</script>
