import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import {Module, UserData, Banner} from '@/api/user_interface';
import _ from 'lodash';

Vue.use(Vuex);

const DEFAULT_TITLE = '林舍';
const DEFAULT_MODULE = {display: false, anchor: {id: '', icon: '', name: ''}, header: {title: '', subtitle: ''}};

function find(modules: Module[], id: string) {
    return _.find(modules, (module) => module.anchor.id === id) || DEFAULT_MODULE;
}

export default new Vuex.Store<UserData>({
    state: {
        title: DEFAULT_TITLE,
        social: {},
        banner: {
            anchor: {
                id: 'banner',
                icon: 'home',
                name: 'Home',
            },
        },
        modules: [],
    },
    getters: {
        title(state): string {
            return state.title || DEFAULT_TITLE;
        },
        social(state): object {
            return state.social || {};
        },
        menus(state): object[] {
            // 找到可展示的模块
            const modules = _.concat([state.banner], _.filter(state.modules, (module) => module.display));
            // 将模块中用于menu的字段抽出
            return _.map(modules, (module) => module.anchor);
        },
        moduleIds(state): string[] {
            // 找到可展示的模块
            const modules = _.filter(state.modules, (module) => module.display);
            // 将模块中用于menu的字段抽出
            return _.map(modules, (module) => module.anchor.id);
        },
        banner(state): Banner {
            return state.banner || {};
        },
        getModule: (state: UserData) => (id: string) => {
           return find(state.modules, id);
        },
    },
    mutations: {
        init(state, userData) {
            state.title = userData.title || DEFAULT_TITLE;
            state.social = userData.social;
            state.banner = userData.banner;
            state.modules = userData.modules;

            if (DEFAULT_TITLE === document.title) {
                document.title = state.title;
            }
        },
    },
    actions: {
        init({commit}) {
            api.init((userData: UserData) => {
                commit('init', userData);
            });
        },
    },
});
