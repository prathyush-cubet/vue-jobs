import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            jobs:[]
        }
    },
    mutations: {
        saveJob(state, payload) {
            state.jobs.push(payload)
        }
    },
    actions: {
        saveJob(context, payload) {
            context.commit(payload)
        }
    },
    getters: {
        getJob(state, jobId) {
            return state.jobs.filter(todo => todo.id==jobId)
        }
    }
});

export default store;