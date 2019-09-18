import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// ant 样式
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 动画
import 'animate.css';

import './styles/main.scss';
import './styles/typer.scss';

// 平滑滚动
// tslint:disable-next-line:no-var-requires
import VueSmoothScroll from 'vue2-smooth-scroll';

// 滚动动画
// tslint:disable-next-line:no-var-requires
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true, // 只展示一次动画
});

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueSmoothScroll);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

store.dispatch('init');
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = store.getters.title(to.meta.title);
    }
    next();
});
