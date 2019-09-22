<!-- 菜单 -->

<template>
    <a-affix>
        <a-layout class="layout-menu">
            <!-- 头像 -->
            <div class="header">
                <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                    <img draggable="false" src="../assets/avatar.jpg">
                </span>
                <span>{{banner.title}}</span>
            </div>
            <!-- 菜单 -->
            <a-layout-content class="menu">
                <a-menu>
                    <a-menu-item>
                        <a-icon type="home" />
                        <a v-smooth-scroll href="#banner" @click="closeMenuDrawer">Home</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a-icon type="user" />
                        <a v-smooth-scroll href="#about" @click="closeMenuDrawer">About</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a-icon type="notification" />
                        <a v-smooth-scroll href="#news" @click="closeMenuDrawer">News</a>
                    </a-menu-item>
                </a-menu>
            </a-layout-content>
            <!-- 菜单页脚 -->
            <a-layout-footer class="footer">
                <!-- 社交 -->
                <a-row type="flex" justify="center" align="middle" :gutter="2">
                    <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2"/></a-col>
                </a-row>
                <!-- 版权 -->
                <a-row type="flex" justify="center" align="middle" :gutter="2">
                    <a-col span="24"><Copyrights color="rgb(136,136,136)" :size=".6"/></a-col>
                </a-row>
            </a-layout-footer>
        </a-layout>
    </a-affix>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Copyrights from '@/components/footer/Copyrights.vue';
    import Social from '@/components/footer/Social.vue';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
            Copyrights,
            Social,
        },
        computed: {
            ...mapGetters(['banner']),
        },
    })
    export default class Menu extends Vue {
        private closeMenuDrawer() {
            this.$emit('menuClick');
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .layout-menu {
        width: 100%;
        height: 100vh;
        text-align: center;

        .header, .menu, .footer {
            background-color: white !important;
        }

        .header {
            margin: 2rem auto;
            .avatar {
                width: 80px;
                height: 80px;
                line-height: 80px;
            }
            span {
                display: block;
                margin-top: .5rem;
                font-size: 1.2em;
                font-weight: 500;
                color: $--color-gray;
            }
        }

        .menu {
            * {
                font-size: 1em;
            }

            a {
                display: inline;
            }
        }

        .footer {
            padding: 10px;
            margin-bottom: 1rem;
            * {
                color: $--color-gray;
            }

            & > div {
                margin: .5rem auto;
            }
        }
    }
</style>
