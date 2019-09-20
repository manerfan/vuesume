<template>
    <div class="content about" id="about">
        <a-row>
            <a-col :span="24"><span class="heading">Information</span></a-col>
        </a-row>
        <a-row>
            <a-col :span="24"><h2 class="heading">About Me</h2></a-col>
        </a-row>
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
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';
</style>
