import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    INSERT_USER(state, userData) {
      state.users.push(userData);
    },
    DELETE_USER(state, userData) {
      let index = state.users.indexOf(userData);
      state.users.splice(index, 1);
    },
  },
  actions: {
    insertUser({ commit }, userData) {
      commit("INSERT_USER", userData);
    },
    DeleteUser({ commit }, userData) {
      commit("DELETE_USER", userData);
    },
  },
  getters: {
    getUser(state) {
      return state.users;
    },
  },
});
