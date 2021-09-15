<template>
  <div class="w-full">
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos possimus
        quas optio assumenda necessitatibus, harum qui. Repellat distinctio saepe temporibus
        accusamus hic officia totam non dolor incidunt. Odit, praesentium.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
};
</script>
