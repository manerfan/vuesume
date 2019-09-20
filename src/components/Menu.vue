<template>
    <a-layout>
        <a-layout-content>

        </a-layout-content>
        <a-layout-footer>

        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        components: {},
        computed: {
            ...mapGetters([]),
        },
    })
    export default class Menu extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';


</style>
