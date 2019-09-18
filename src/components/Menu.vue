<template>
    <div class="menu">
        <a-affix>
            <a-menu mode="horizontal" :selectable="false" theme="dark">
                <a-menu-item>
                    <a href="#banner" v-smooth-scroll><a-icon type="home" />Home</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="#about" v-smooth-scroll><a-icon type="user" />About Me</a>
                </a-menu-item>
            </a-menu>
        </a-affix>
    </div>
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
