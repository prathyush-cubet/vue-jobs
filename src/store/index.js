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
        getJob(jobId) {
            return this.$store.jobs.filter(todo => todo.id==jobId)
        }
    }
});

export default store;