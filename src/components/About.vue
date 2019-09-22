<!-- 关于 -->

<template>
    <div class="content about" id="about">
        <ContentTitle title="Information" sub-title="About Me" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ContentTitle from '@/components/content/ContentTitle.vue';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
            ContentTitle,
        },
        computed: {
            ...mapGetters([]),
        },
    })
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
</style>
