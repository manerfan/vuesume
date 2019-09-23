<!-- 页脚 -->

<template>
    <a-row class="footer" type="flex" justify="center" align="middle" :gutter="2">
        <!-- 版权 -->
        <a-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6"><Copyrights color="ghostwhite" :size="1"/></a-col>
        <!-- 头像 -->
        <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
            <a-popover arrowPointAtCenter>
                <template slot="content"><Badge/></template>
                <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                    <img alt="林舍|Maner·Fan" draggable="false" src="../assets/avatar.jpg"/>
                </span>
            </a-popover>
        </a-col>
        <!-- 社交 -->
        <a-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6"><Social color="ghostwhite" :size="1.5" /></a-col>
        <!-- 徽章 -->
        <!-- 追求页面加载速度，放入Avatar中，这里暂时不展示 -->
        <!-- <a-col :span="24"><Badge/></a-col> -->
    </a-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Copyrights from '@/components/footer/Copyrights.vue';
    import Social from '@/components/footer/Social.vue';

    @Component({
        components: {
            Copyrights,
            Social,
            Badge: () => import('@/components/footer/Badge.vue'),
        },
    })
    export default class Footer extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .footer {
        &>div{
            margin: 1rem auto;
        }

        background: #303030;

        .avatar {
            width: 60px;
            height: 60px;
            line-height: 60px;
        }
    }
</style>
