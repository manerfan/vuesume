<template>
    <div class="banner">
        <div class="bg"></div>
        <div class="mask"></div>
        <div class="title">

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
    .banner {
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
    }
</style>
