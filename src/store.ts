import Vue from 'vue';
import Vuex from 'vuex';
import data from '@/api/data';
import {Module, UserData, Banner} from '@/api/interfaces';
import _ from 'lodash';

Vue.use(Vuex);

const DEFAULT_TITLE = '林舍';
const DEFAULT_MODULE = {display: false, anchor: {id: '', icon: ''}, header: {title: '', subtitle: ''}};

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
            },
            header: {
                title: 'home',
                subtitle: 'home',
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
            return _.map(modules, (module) => {
                return {
                    id: module.anchor.id,
                    icon: module.anchor.icon,
                    title: module.header.title,
                };
            });
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
        about(state): Module {
            return find(state.modules, 'about');
        },
        blog(state): Module {
            return find(state.modules, 'blog');
        },
    },
    mutations: {
        init(state, userData) {
            state.title = userData.title || DEFAULT_TITLE;
            state.social = userData.social;
            state.banner = userData.banner;
            state.modules = userData.modules;
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
