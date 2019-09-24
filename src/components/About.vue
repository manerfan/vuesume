<!-- 关于 -->

<template>
    <div class="content about" id="about">
        <ModuleHeader :title="about.header.title" :sub-title="about.header.subtitle" />
        <ModuleSkeleton :display="true" :number="2" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
            ModuleHeader,
            ModuleSkeleton,
        },
        computed: {
            ...mapGetters(['about']),
        },
    })
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
</style>
