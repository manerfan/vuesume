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
    },
    getters: {
        title(state, content): string {
          return `${state.title || DEFAULT_TITLE} - ${content || ''}`;
        },
        banner(state): object {
            return state.banner || {};
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
