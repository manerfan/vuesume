<!-- 社交 -->

<template>
    <div class="social" :style="{'font-size': size + 'em'}">
        <!-- github -->
        <a :style="{color: color}" :href="social['github'] || 'https://github.com/manerfan'" target="_blank"><a-icon type="github" /></a>
        <!-- 微信 -->
        <a-popover arrowPointAtCenter>
            <template slot="content"><img style="width: 360px; max-width: 80vw; height: auto;"  alt="林中小舍" src="../../assets/wechat.jpg"/></template>
            <a :style="{color: color}"><a-icon type="wechat" /></a>
        </a-popover>
        <!-- twitter -->
        <a :style="{color: color}" :href="social['twitter'] || 'https://twitter.com/manerfan_china'" target="_blank"><a-icon type="twitter" /></a>
        <!-- linkedin -->
        <a :style="{color: color}" :href="social['linkedin'] || 'https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/'" target="_blank"><a-icon type="linkedin" /></a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
        },
        props: {
            color: String,
            size: Number,
        },
        computed: {
            ...mapGetters(['social']),
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

