<template>
    <a-affix>
        <a-layout class="layout-menu">
            <div class="header">
                <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                    <img draggable="false" src="../assets/avatar.jpg">
                </span>
                <span>{{banner.title}}</span>
            </div>
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
            <a-layout-footer class="footer">
                <a-row type="flex" justify="center" align="middle" :gutter="2">
                    <a-col span="24">
                        <a href="https://github.com/manerfan" target="_blank"><a-icon type="github" /></a>
                        <a-popover arrowPointAtCenter>
                            <template slot="content">
                                <img style="width: 360px; max-width: 80vw; height: auto;" src="https://mmbiz.qpic.cn/mmbiz_png/UTKaj6IibSJeVf4kvWV3NIDTtwoAeq9EZZgSpSnIUVjpSlibFXlIz5YgPrNgmocqN0MttcNrZAZRO6o8vT2zB04Q/0?wx_fmt=png">
                            </template>
                            <a><a-icon type="wechat" /></a>
                        </a-popover>
                        <a href="https://twitter.com/manerfan_china" target="_blank"><a-icon type="twitter" /></a>
                        <a href="https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/" target="_blank"><a-icon type="linkedin" /></a>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center" align="middle" :gutter="2">
                    <a-col span="24">
                        <a class="copy-rights" href="https://github.com/manerfan/vuesume/blob/master/LICENSE" target="_blank" style="font-size: 1em;">
                            © 2019 Maner·Fan All rights reserved</a>
                    </a-col>
                </a-row>
            </a-layout-footer>
        </a-layout>
    </a-affix>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        components: {},
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

            a {
                font-size: 1.2em;
                margin: 0.5em;

                &.copy-rights {
                    font-size: .6em !important;
                }
            }
        }
    }
</style>
