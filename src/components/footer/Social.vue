<!-- 社交 -->

<template>
    <div class="social" :style="{'font-size': size + 'em'}">
        <!-- github -->
        <a :style="{color: color}" href="https://github.com/manerfan" target="_blank"><a-icon type="github" /></a>
        <!-- 微信 -->
        <a-popover arrowPointAtCenter>
            <template slot="content"><WeChatPopover/></template>
            <a :style="{color: color}"><a-icon type="wechat" /></a>
        </a-popover>
        <!-- twitter -->
        <a :style="{color: color}" href="https://twitter.com/manerfan_china" target="_blank"><a-icon type="twitter" /></a>
        <!-- linkedin -->
        <a :style="{color: color}" href="https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/" target="_blank"><a-icon type="linkedin" /></a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import WeChatPopover from '@/components/footer/WeChatPopover.vue';

    @Component({
        components: {
            WeChatPopover,
        },
        props: {
            color: String,
            size: Number,
        },
    })
    export default class Social extends Vue {
    }
</script>

<style scoped lang="scss">
    .social {
        &>* {
            margin: 0.5em;
        }
    }
</style>

