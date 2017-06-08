import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //
    appId: '2fed940c46c4615e1ca90155c8db82782f9ec03a09d4f8b5d22568456ab2c821',
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  getters: {
    //
    appId: (state) => {
      return state.appId
    },
    photos: (state) => {
      return state.photos
    },
    perPage: (state) => {
      return state.perPage
    },
    currentPage: (state) => {
      return state.currentPage
    },
  },
  mutations: {
    //
  },
  actions: {
    //
  },
});
