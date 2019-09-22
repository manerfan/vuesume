<!-- 版权信息 -->

<template>
    <a :style="{color: color, 'font-size': size + 'em'}" href="https://github.com/manerfan/vuesume/blob/master/LICENSE" target="_blank">
        © {{year}} 林舍|Maner·Fan All rights reserved
    </a>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        data: () => {
            return {
                year: new Date().getFullYear(),
            };
        },
        props: {
            color: String,
            size: Number,
        },
    })
    export default class Copyrights extends Vue {
    }
</script>
