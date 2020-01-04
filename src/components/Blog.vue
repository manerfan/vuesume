<!-- 最近的文章 -->

<template>
    <div class="content blog" id="blog">
        <ModuleHeader :title="blog.header.title" :sub-title="blog.header.subtitle"/>
        <ModuleSkeleton :display="loading" :number="2"/>
        <a-list v-if="!loading && ((rss || {}).items || []).length > 0" itemLayout="vertical" size="large"
                :dataSource="((rss || {}).items || []).slice(0, 10)">
            <a-list-item data-aos="fade-in" slot="renderItem" slot-scope="item" key="item.guid">
                <a-list-item-meta>
                    <a-avatar slot="avatar" :src="item.thumbnail" icon="book"/>
                    <a class="title" slot="title" :href="item.link" target="_blank">{{item.title | decode}}</a>
                    <template slot="description">
                        <div class="description">
                            <a :href="item.link" target="_blank">{{item.author}}</a>
                            <span class="pub-date">{{item.pubDate}}</span>
                            <span class="tag"><a-tag v-for="category in item.categories" v-bind:key="category">{{category}}</a-tag></span>
                        </div>
                    </template>
                </a-list-item-meta>
                <span class="desc">{{item.description | decode | sub}} ...</span>
            </a-list-item>
        </a-list>
        <a-empty v-if="!loading && ((rss || {}).items || []).length < 1"/>
        <a-button :block="true" type="link" v-if="!!(blog.blog)" :href="blog.blog" target="_blank">更多</a-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';

    import api from '@/api';
    import {Rss} from '@/api/rss_interface';
    import {Module} from '@/api/user_interface';

    @Component({
        components: {
            ModuleHeader,
            ModuleSkeleton,
        },
        computed: {
            blog(): Module {
                return this.$store.getters.getModule('blog');
            },
        },
        created() {
            (this as any).initBlog(this.$store.getters.getModule('blog').rss);
        },
        filters: {
            decode(content: string) {
                const el = document.createElement(`el-${new Date().getTime()}`);
                el.innerHTML = content;
                return el.innerText;
            },
            sub(content: string) {
                return content.substr(0, 120);
            },
        },
    })
    export default class Blog extends Vue {
        private loading = true;
        private rss: Rss = {};

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
                    this.loading = false;
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
            padding-left: 0em;
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
