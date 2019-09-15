<template>
    <div class="home">
        <Banner></Banner>
        <Menu></Menu>
        <Information></Information>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Banner from '@/components/Banner.vue';
    import Menu from '@/components/Menu.vue';
    import About from '@/components/Abount.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {
            Banner,
            Menu,
            Information: About,
            Footer,
        },
    })
    export default class Home extends Vue {
    }
</script>
