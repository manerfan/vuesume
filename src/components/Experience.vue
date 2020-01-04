<!-- 经历 -->

<template>
    <div class="content" id="experience">
        <ModuleHeader :title="experience.header.title" :sub-title="experience.header.subtitle"/>
        <a-timeline>
            <a-timeline-item v-for="card in experience.cards" v-bind:key="card.title + card.subTitle">
                <a-card data-aos="fade-in" class="experience-card" :bordered="true" style="width: 100%">
                    <template slot="title">
                        <h1 class="title">{{card.title}}</h1>
                        <span class="sub-title">{{card.subTitle}}</span>
                    </template>
                    <vue-markdown>{{card.md}}</vue-markdown>
                </a-card>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import {Module} from '@/api/user_interface';
    // tslint:disable-next-line:no-var-requires
    import VueMarkdown from 'vue-markdown';

    @Component({
        components: {
            ModuleHeader,
            VueMarkdown,
        },
        computed: {
            experience(): Module {
                return this.$store.getters.getModule('experience');
            },
        },
    })
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .experience-card {
        .title {
            width: 100%;
            font-size: 1rem;
            overflow: scroll;
        }

        .sub-title {
            width: 100%;
            font-size: .5rem;
        }
    }
</style>
