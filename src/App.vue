<template>
    <div id="app">
        <Banner class="shadow"/>
        <Footer class="shadow content"/>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Banner,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    #app {
        .shadow {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }

        .content {
            padding: 1rem;
        }
    }
</style>
