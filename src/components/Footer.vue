<template>
    <a-row class="footer" type="flex" justify="center" align="middle" :gutter="2">
        <a-col :xs="24" :sm="8" :md="6" :lg="4" :xl="4">
            <a href="https://github.com/manerfan/vuesume/blob/master/LICENSE" target="_blank" style="font-size: 1em;">
                © 2019 Maner·Fan All rights reserved</a>
        </a-col>
        <a-col :xs="24" :sm="6" :md="4" :lg="2" :xl="4">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar.jpg">
            </span>
        </a-col>
        <a-col class="social" :xs="24" :sm="8" :md="6" :lg="4" :xl="4">
            <a href="https://github.com/manerfan/vuesume" target="_blank"><a-icon type="github" /></a>
            <a-popover arrowPointAtCenter>
                <template slot="content">
                    <img style="width: 360px; max-width: 80vw; height: auto;" src="../assets/wechat.png">
                </template>
                <a><a-icon type="wechat" /></a>
            </a-popover>
            <a href="https://twitter.com/manerfan_china" target="_blank"><a-icon type="twitter" /></a>
            <a href="https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/" target="_blank"><a-icon type="linkedin" /></a>
        </a-col>
        <a-col class="social" :span="24">
            <a href="https://github.com/manerfan/vuesume/blob/master/LICENSE" target="_blank">
                <img alt="GitHub" src="https://img.shields.io/github/license/manerfan/vuesume">
            </a>
            <a href="https://github.com/manerfan/vuesume/" target="_blank">
                <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/manerfan/vuesume">
            </a>
            <a href="https://github.com/manerfan/vuesume/" target="_blank">
                <img alt="GitHub stars" src="https://img.shields.io/github/stars/manerfan/vuesume">
            </a>
            <a href="https://github.com/manerfan/vuesume/fork" target="_blank">
                <img alt="GitHub forks" src="https://img.shields.io/github/forks/manerfan/vuesume">
            </a>
            <a href="https://github.com/manerfan/vuesume/releases" target="_blank">
                <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/manerfan/vuesume/total">
            </a>
        </a-col>
    </a-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        data: () => {
            return {
                year: new Date().getFullYear(),
            };
        },
    })
    export default class Footer extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .footer {
        &>div{
            margin: 1rem auto;
        }

        color: ghostwhite;

        a {
            font-size: 1.5em;
            color: ghostwhite;
            margin: 0.5em;
        }

        .avatar {
            width: 60px;
            height: 60px;
            line-height: 60px;
        }
    }
</style>
