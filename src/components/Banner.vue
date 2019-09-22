<template>
    <div class="banner" id="banner">
        <div class="bg-bottom">
            <h1 class="animated infinite pulse">加载中...</h1>
        </div>
        <div class="bg"></div>
        <div class="fork-me">
            <a class="fork-me-link" href="https://github.com/manerfan/vuesume">
                <span class="fork-me-text">Docs On GitHub</span>
            </a>
        </div>
        <div data-aos="fade-in" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar.jpg">
            </span>
            <div data-aos="fade-in">
                <h1>{{banner.title}}</h1>
                <h3 class="typer-white">
                    鄙人，
                    <vue-typer :text='banner.desc' :type-delay='200' eraseStyle='select-all'></vue-typer>
                </h3>
            </div>
        </div>
        <a data-aos="fade-in" class="scroll-next animated infinite bounce" href="#about" v-smooth-scroll>
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

        .bg-bottom, .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
        }

        .bg-bottom {
            background-color: #fff0e6;
            h1 {
                display: none;
                margin-top: 40vh;
            }
        }

        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: rgb(0, 0, 0) url("../assets/bg_banner.jpg") no-repeat center center fixed;
            background-size: cover;
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
