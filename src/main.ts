import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// ant 样式
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// markdown
// tslint:disable-next-line:no-var-requires
import VueMarkdown from 'vue-markdown';

// 动画
import 'animate.css';

// 平滑滚动
// tslint:disable-next-line:no-var-requires
import VueSmoothScroll from 'vue2-smooth-scroll';

// 滚动动画
// tslint:disable-next-line:no-var-requires
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true, // 只展示一次动画
    offset: 50,
    delay: 100,
    duration: 1000,
});

// 自定义样式
import './styles/main.scss';
import './styles/typer.scss';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueSmoothScroll);
Vue.use(VueMarkdown);

store.dispatch('init');
router.beforeEach((to, from, next) => {
    document.title = store.getters.title + (to.meta.title ? ' - ' + to.meta.title : '');
    next();
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
