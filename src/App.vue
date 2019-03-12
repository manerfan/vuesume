<template>
    <div id="app">
        <Banner msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import Banner from './components/Banner.vue'

    export default {
        name: 'app',
        components: {
            Banner
        }
    }
</script>
