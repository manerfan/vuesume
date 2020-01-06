<!-- 整体的框架 -->

<template>
    <a-layout>
        <!-- 首屏 -->
        <a-layout-header class="layout-header"><Banner/></a-layout-header>
        <!-- 内容 -->
        <a-layout>
            <!-- 菜单 -->
            <a-layout-sider class="layout-sider" width="320"><a-affix><Menu/></a-affix></a-layout-sider>
            <!-- 正文部分 -->
            <a-layout class="layout-content">
                <!-- 小屏侧边栏抽屉按钮 -->
                <a-affix>
                    <a-button :class="{'sider-menu-trigger': true, 'drawer-closed': !menuDrawerVisible, 'drawer-open': menuDrawerVisible}"
                            shape="circle" size="large" :icon="menuDrawerVisible ? 'arrow-left' : 'bars'" @click="toggleMenuDrawer"></a-button>
                </a-affix>
                <!-- 正文锚点 -->
                <a-layout-content><div id="anchor-next"></div></a-layout-content>
                <!-- 根据配置动态模块的内容和顺序 -->
                <a-layout-content v-for="id in moduleIds" v-bind:key="id">
                    <About v-if="id === 'about'"/>
                    <Blog v-if="id === 'blog'"/>
                    <Experience v-if="id === 'experience'"/>
                </a-layout-content>
                <!-- 页脚 -->
                <a-layout-footer><Footer/></a-layout-footer>
            </a-layout>
        </a-layout>

        <!-- 小屏侧边栏抽屉 -->
        <a-drawer placement="left" :closable="true" :visible="menuDrawerVisible" @close="onMenuDrawerClose">
            <Menu @menuClick="onMenuDrawerClose" />
        </a-drawer>
    </a-layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    import Banner from '@/components/Banner.vue';
    import Menu from '@/components/Menu.vue';
    import About from '@/components/About.vue';
    import Experience from '@/components/Experience.vue';
    import Blog from '@/components/Blog.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {
            Banner,
            Menu,
            About,
            Experience,
            Blog,
            Footer,
        },
        computed: {
            ...mapGetters(['moduleIds']),
        },
    })
    export default class Home extends Vue {
        private menuDrawerVisible = false;

        private toggleMenuDrawer() {
            this.menuDrawerVisible = !this.menuDrawerVisible;
        }

        private onMenuDrawerClose() {
            this.menuDrawerVisible = false;
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .layout-header {
        z-index: 0;
        height: 100vh;
        overflow: auto;
        padding: 0;
    }

    .layout-content {
        position: relative;
    }

    .sider-menu-trigger {
        position: absolute;
        top: 20px;
        z-index: 99999;


        &.drawer-closed {
            left: 20px;
        }

        &.drawer-open {
            left: 276px;
        }
    }

    @media screen and (max-width: $--screen-sm-min) {
        .layout-sider {
            display: none;
        }
    }

    @media screen and (min-width: $--screen-sm-min) {
        .sider-menu-trigger {
            display: none;
        }

        .layout-sider {
            box-shadow: 1px 0 5px #e0e0e0;
            z-index: 999;
        }
    }
</style>
