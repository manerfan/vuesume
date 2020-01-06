<!-- 首屏banner -->

<template>
    <div class="banner" id="banner">
        <!-- 加载层 -->
        <div class="bg back"><h1>林小二奋笔疾书...</h1></div>
        <!-- 脚贴 -->
        <div class="fork-me">
            <a class="fork-me-link" href="https://github.com/manerfan/vuesume/wiki" target="_blank">
                <span class="fork-me-text">Docs On GitHub</span>
            </a>
        </div>
        <!-- 背景层 -->
        <div data-aos="fade-in" class="bg"></div>
        <!-- 内容层 -->
        <div data-aos="fade-in" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar.jpg">
            </span>
            <div>
                <h1>{{banner.title || '林中小舍'}}</h1>
                <h3 class="typer white">
                    鄙人，
                    <vue-typer :text="banner.desc || '林舍'" :type-delay='200' eraseStyle='select-all'></vue-typer>
                </h3>
            </div>
        </div>
        <a data-aos="fade-in" class="scroll-next animated infinite bounce" href="#anchor-next" v-smooth-scroll>
            <a-icon type="double-right"/>
        </a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    // tslint:disable-next-line:no-var-requires
    import {VueTyper} from 'vue-typer';

    @Component({
        components: {
            VueTyper,
            Badge: () => import('@/components/footer/Badge.vue'),
        },
        computed: {
            ...mapGetters(['banner']),
        },
    })
    export default class Banner extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/fork';

    .banner {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;
        overflow-x: hidden;

        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: $--color-cyan url("../assets/bg_banner.jpg") no-repeat center center scroll;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;

            .back {
                z-index: -2;
            }

            h1 {
                display: block;
                margin-top: 45vh;
                color: $--font-color;
                font-size: 2em;
                text-shadow: 0 0 5px $--color-gray;
            }
        }

        .desc {
            margin-bottom: 20vh;

            * {
                display: block;
                margin: auto;
                color: $--font-color;
                text-shadow: 0 0 5px rgba(0, 0, 0, .5);
            }

            .avatar {
                z-index: -1;
                width: 160px;
                height: 160px;
                line-height: 160px;
                box-shadow: 0 0 10px rgba(0, 0, 0, .5);
            }

            h1 {
                font-size: 3em;
                margin: 3rem auto 1rem;
            }

            h3 {
                font-size: 1.5em;

                .vue-typer {
                    display: inline-block;
                }
            }

            @media screen and (max-width: $--screen-sm-min) {
                h1 {
                    font-size: 2.3em;
                }

                h3 {
                    font-size: 1.3em;
                }
            }
        }

        .scroll-next {
            position: absolute;
            display: inline-block;
            width: 100%;
            padding: 2rem 0;
            bottom: 1vh;
            font-size: 1.5rem;
            color: $--font-color;
            animation-duration: 2s;
            animation-delay: 1s;

            * {
                transform: rotate(45deg);
            }
        }
    }
</style>
