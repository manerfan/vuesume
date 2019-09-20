<template>
    <div class="content news" id="news">
        <div class="heading">
            <a-row><a-col :span="24"><span>News</span></a-col></a-row>
            <a-row><a-col :span="24"><h2>Latest News</h2></a-col></a-row>
        </div>
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
        <a-skeleton data-aos="fade-right" active avatar :paragraph="{rows: 4}" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        components: {
        },
        computed: {
            ...mapGetters([]),
        },
    })
    export default class News extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
</style>
