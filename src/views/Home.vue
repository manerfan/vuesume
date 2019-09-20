<template>
    <a-layout>
        <a-layout-header class="header"><Banner/></a-layout-header>
        <a-layout>
            <a-affix><a-layout-sider breakpoint="md" collapsedWidth="0"><Menu/></a-layout-sider></a-affix>
            <a-layout>
                <a-layout-content><About/></a-layout-content>
                <a-layout-content><News/></a-layout-content>
                <a-layout-footer><Footer/></a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Banner from '@/components/Banner.vue';
    import Menu from '@/components/Menu.vue';
    import About from '@/components/About.vue';
    import News from '@/components/News.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {
            Banner,
            Menu,
            About,
            News,
            Footer,
        },
    })
    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">
    .header {
        z-index: 0;
        height: 100vh;
        overflow: auto;
        padding: 0;
    }
</style>