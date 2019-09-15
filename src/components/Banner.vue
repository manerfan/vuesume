<template>
    <div class="banner">
        <div class="bg"></div>
        <div class="mask"></div>
        <div class="title">
            <h2>鄙人 xzy</h2>
            <h4>码农一枚，长期从事ABC开发</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../styles/variable";

    .banner {
        display: flex;
        position: relative;
        width: 100%;
        height: 100vh;

        .bg, .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .bg {
            z-index: -2;
            background: rgb(0, 0, 0) url("../assets/bg_banner.jpeg") no-repeat center center fixed;
            background-size: cover;
            filter: blur(2px);
        }

        .mask {
            z-index: -1;
            background-color: rgb(0, 0, 0, 0.6);
        }

        .title {
            margin: auto;
            text-align: center;
            font-weight: bold;
            color: $--font-color;
            border: $--font-color solid 1px;
            border-radius: 4px;
            position: relative;
            align-self: center;

            h2 {
                margin-bottom: 0;
            }

            h4 {
                margin-top: 0;
            }

            // 超小屏
            @media (max-width: $--screen-sm-min) {
                h2 {
                    font-size: 32px;
                }
                h4 {
                    font-size: 24px;
                }
                width: 95%;
            }

            // 小屏
            @media (min-width: $--screen-sm-min) {
                h2 {
                    font-size: 48px;
                }
                h4 {
                    font-size: 28px;
                }
                width: 90%;
            }

            // 中大屏
            @media (min-width: $--screen-md-min) {
                h2 {
                    font-size: 64px;
                }
                h4 {
                    font-size: 32px;
                }
                width: 80%;
            }

            max-width: 960px;
        }
    }
</style>
