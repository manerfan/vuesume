import Vue from 'vue';
import Vuex from 'vuex';
import data from '@/api/data';
import {UserData} from '@/api/interfaces';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        banner: {
            title: '--',
            desc: ['--'],
        },
    },
    getters: {
        banner(state): object {
            return state.banner || {};
        },
    },
    mutations: {
        init(state, userData) {
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
