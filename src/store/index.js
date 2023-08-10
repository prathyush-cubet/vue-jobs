import { createStore } from 'vuex'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import {auth} from '../firebase';

const store = createStore({
    state() {
        return {
            jobs:[],
            user: {
                loggedIn: false,
                data: null
            }
        }
    },
    mutations: {
        saveJob(state, payload) {
            state.jobs.push(payload)
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        saveJob(context, payload) {
            context.commit(payload)
        },
        async register(context, { email, password, name}){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
                response.user.updateProfile({displayName: name})
            } else {
                throw new Error('Unable to register user')
            }
        },

        async logIn(context, { email, password }){
          const response = await signInWithEmailAndPassword(auth, email, password)
          if (response) {
              context.commit('SET_USER', response.user)
          } else {
              throw new Error('login failed')
          }
        },

        async logOut(context){
            //await signOut(auth)
            context.commit('SET_USER', null)
        },

        async fetchUser(context ,user) {
            context.commit("SET_LOGGED_IN", user !== null);
            if (user) {
            context.commit("SET_USER", {
                displayName: user.displayName,
                email: user.email
            });
            } else {
            context.commit("SET_USER", null);
            }
        }
    },
    getters: {
        getJob(state, jobId) {
            return state.jobs.filter(todo => todo.id==jobId)
        },
        user(state){
            return state.user
        }
    }
});

export default store;