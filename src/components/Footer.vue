<template>
    <div class="fotter">
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .footer {
        display: flex;
        justify-content: center;

        .fab {
            font-size: 24px;
        }
    }
</style>
