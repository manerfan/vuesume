import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'animate.css';

import './styles/main.scss';
import './styles/typer.scss';

Vue.config.productionTip = false;

Vue.use(Antd);

store.dispatch('init');

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
