<!-- 最近的文章 -->

<template>
    <div class="content blog" id="blog">
        <ModuleHeader :title="blog.header.title" :sub-title="blog.header.subtitle"/>
        <ModuleSkeleton :display="loading" :number="2"/>
        <a-list itemLayout="vertical" size="large" :dataSource="(rss || {}).items || []">
            <a-list-item slot="renderItem" slot-scope="item, index" key="item.guid">
                <a-list-item-meta>
                    <a-avatar slot="avatar" :src="item.thumbnail" icon="book" />
                    <a class="title" slot="title" :href="item.link" target="_blank">{{item.title}}</a>
                    <template slot="description">
                        <div class="description">
                            <a :href="item.link" target="_blank">{{item.author}}</a>
                            <span class="pub-date">{{item.pubDate}}</span>
                            <span class="tag"><a-tag v-for="category in item.categories" v-bind:key="category">{{category}}</a-tag></span>
                        </div>
                    </template>
                </a-list-item-meta>
                <span class="desc">{{desc(index).substr(0, 120)}} ...</span>
            </a-list-item>
        </a-list>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
    import {mapGetters} from 'vuex';

    import api from '@/api';
    import {Rss} from "@/api/rss_interface";

    @Component({
        components: {
            ModuleHeader,
            ModuleSkeleton,
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
        private loading = true;
        private rss: Rss = {};

        private desc(index: number) {
            const el = document.createElement('desc' + index);
            el.innerHTML = ((this.rss || {}).items || [])[index].description;
            return el.innerText;
        }

        private initBlog(rss?: string) {
            if (!rss) {
                return;
            }

            this.loading = true;

            api.rss(
                rss,
                (r) => {
                    this.rss = r;
                },
                () => {
                    this.loading = false;
                },
                (e) => {
                    console.error(e);
                });
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .blog {
        .description {
            * {
                margin-right: 4px;
            }

            .title {
                color: $--selection-color
            }

            .pub-date {
                color: $--color-gray;
            }
        }
        .desc {
            color: $--color-gray;
            padding-left: 2em;
            display: inline-block;
        }

        @media screen and (max-width: $--screen-sm-min) {
            .description {
                .tag {
                    display: block;
                }
            }

            .desc {
                display: none;
            }
        }
    }
</style>
