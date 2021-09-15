<template>
  <div id="app" class="font-sans">
      <AppHeader />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="mx-10 my-20">
        <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
};
</script>
