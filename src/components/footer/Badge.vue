<!-- Github 徽章 https://shields.io/ -->

<template>
    <div>
        <!-- license -->
        <a href="https://github.com/manerfan/vuesume/blob/master/LICENSE" target="_blank">
            <img alt="GitHub" src="https://img.shields.io/github/license/manerfan/vuesume">
        </a>
        <!-- 版本号 -->
        <a href="https://github.com/manerfan/vuesume/" target="_blank">
            <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/manerfan/vuesume">
        </a>
        <!-- stars -->
        <a href="https://github.com/manerfan/vuesume/" target="_blank">
            <img alt="GitHub stars" src="https://img.shields.io/github/stars/manerfan/vuesume">
        </a>
        <!-- fork -->
        <a href="https://github.com/manerfan/vuesume/fork" target="_blank">
            <img alt="GitHub forks" src="https://img.shields.io/github/forks/manerfan/vuesume">
        </a>
        <!-- 下载 -->
        <a href="https://github.com/manerfan/vuesume/releases" target="_blank">
            <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/manerfan/vuesume/total">
        </a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Badge extends Vue {
    }
</script>

<style scoped lang="scss">
    a {
        margin: 0.5em;
    }
</style>
