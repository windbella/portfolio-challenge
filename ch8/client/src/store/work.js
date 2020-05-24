import axios from 'axios';

const work = {
    namespaced: true,
    state: {
        status: 'INIT',
        list: [],
        tags: [],
    },
    getters: {
        mainList: (state) => state.list.filter((item) => item.content.isMain),
        activeList: (state) => {
            if (state.tags.reduce((acc, cur) => acc + (cur.isActive ? 1 : 0), 0) > 0) {
                const tags = state.tags.filter((item) => item.isActive).map((item) => item.name);
                return state.list
                    .filter((item) => item.content.tags.some((tag) => tags.includes(tag)));
            }
            return state.list;
        },
    },
    mutations: {
        setStatus(state, payload) {
            state.status = payload.status;
        },
        setList(state, payload) {
            state.list = payload.list;
        },
        setTags(state) {
            state.tags = Array.from(new Set(state.list.map((item) => item.content.tags)
                .flat()))
                .map((item) => ({ name: item, isActive: false }));
        },
        toggleTag(state, payload) {
            state.tags = state.tags.map((item) => {
                if (item.name === payload.name) {
                    return {
                        ...item,
                        isActive: !item.isActive,
                    };
                }
                return item;
            });
        },
    },
    actions: {
        async load({ commit }) {
            const baseUrl = process.env.VUE_APP_BASE_URL;
            commit('setStatus', { status: 'WAITING' });
            try {
                const response = await axios.get('/api/v1/works');
                commit('setList', {
                    list: response.data.map((item) => ({
                        id: item.id,
                        content: {
                            ...item.content,
                            image: `${baseUrl}${item.content.image}`,
                        },
                    })),
                });
                commit('setTags');
                commit('setStatus', { status: 'SUCCESS' });
            } catch (e) {
                commit('setStatus', { status: 'FAILURE' });
            }
        },
        toggleTag({ commit }, payload) {
            commit('toggleTag', payload);
        },
    },
};

export default work;
