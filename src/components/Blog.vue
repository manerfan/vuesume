<!-- 最近的文章 -->

<template>
    <div class="content news" id="blog">
        <ContentTitle title="News" sub-title="Latest News"/>
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}"/>
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}"/>
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}"/>
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ContentTitle from '@/components/content/ContentTitle.vue';
    import {mapGetters} from 'vuex';

    import axios from 'axios';

    @Component({
        components: {
            ContentTitle,
        },
        computed: {
            ...mapGetters(['blog']),
            getRss() {
                return this.$store.getters.blog.rss;
            },
        },
        watch: {
            getRss(rss) {
                this.initBlog(rss);
            }
        },
        created() {
            this.initBlog(this.$store.getters.blog.rss);
        },
    })
    export default class Blog extends Vue {
        private parser = new Parser();

        private initBlog(rss?: string) {
            if (!rss) {
                return;
            }

            axios.get<string>(rss).then(({data}) => {
                console.log(data)
            });
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
</style>
