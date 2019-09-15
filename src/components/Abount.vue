<template>
    <div class="content about" id="about" style="height: 2000px">
        <h1>Information</h1>
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
