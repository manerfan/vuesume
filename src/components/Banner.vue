<template>
    <div class="banner" id="banner">
        <div class="bg"></div>
        <div data-aos="fade-up" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar.jpg">
            </span>
            <h1>{{banner.title}}</h1>a
            <h3 class="typer-white">
                鄙人，
                <vue-typer :text='banner.desc' :type-delay='200' eraseStyle='select-all'></vue-typer>
            </h3>
        </div>
        <a class="scroll-next animated infinite bounce" href="#about" v-smooth-scroll>
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

    .banner {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;

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
                font-size: 3rem;
                margin: 3rem auto 1rem;
            }

            h3 {
                font-size: 1.5rem;

                .vue-typer {
                    display: inline-block;
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
