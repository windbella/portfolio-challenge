const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
        ],
        index: 1,
    },
    mutations: {
        add(state) {
            state.index += 1;
            state.list.push({ key: state.index });
        },
    },
    actions: {
        test({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000 * 0.5);
        },
    },
};

export default work;
