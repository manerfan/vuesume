import Vue from 'vue';
import Vuex from 'vuex';
import data from '@/api/data';
import {UserData} from '@/api/interfaces';

Vue.use(Vuex);

const DEFAULT_TITLE = 'vuesume';
const DEFAULT_CONTENT = '--';

export default new Vuex.Store({
    state: {
        title: DEFAULT_TITLE,
        banner: {
            title: DEFAULT_CONTENT,
            desc: [DEFAULT_CONTENT],
        },
        const: {
          wechatImgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/UTKaj6IibSJeVf4kvWV3NIDTtwoAeq9EZZgSpSnIUVjpSlibFXlIz5YgPrNgmocqN0MttcNrZAZRO6o8vT2zB04Q/0?wx_fmt=png',
        },
    },
    getters: {
        title(state, content): string {
          return `${state.title || DEFAULT_TITLE} - ${content || ''}`;
        },
        banner(state): object {
            return state.banner || {};
        },
        const(state): object {
            return state.const || {};
        },
    },
    mutations: {
        init(state, userData) {
            state.title = userData.title || DEFAULT_TITLE;
            state.banner = userData.banner;
        },
    },
    actions: {
        init({commit}) {
            data.init((userData: UserData) => {
                commit('init', userData);
            });
        },
    },
});
