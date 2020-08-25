import * as Cookie from 'js-cookie'
import * as cookieparser from 'cookieparser'
import $backend from '@/services/backend'

export const state = () => ({
  token: undefined,
  user: {
    id: '',
    first_name: '',
    last_name: '',
    profile_type: '',
    email: ''
  },
  is_menu_visible: true,
})

export const getters = {}

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_AUTH(state, payload) {
    if (payload === null) {
      for (const item in state.user) {
        state.user[item] = null
      }
    } else {
      for (const item in state.user) {
        state.user[item] = payload.user[item]
      }
    }
  },
  SET_MENU_VISIBILITY(state, payload) {
    state.is_menu_visible = payload;
  },
}

export const actions = {
  setAuth({ commit }, payload) {
    commit('SET_TOKEN', payload.token)
    commit('SET_AUTH', payload)
  },
  setMenuVisibility({ commit }, payload) {
    commit('SET_MENU_VISIBILITY', payload); 
  },
  logOut({ commit }, { req }) {
    Cookie.remove('auth')
    commit('SET_TOKEN', null)
    commit('SET_AUTH', null)
    this.app.router.push({ path: '/login' })
  },
  nuxtClientInit({ commit } ) {
    if (Cookie.get()) {
      if (Cookie.get().auth) {
        const user = JSON.parse(Cookie.get().auth)
        commit('SET_TOKEN', user.token)
        commit('SET_AUTH', user)
      }
    }
  }
}
