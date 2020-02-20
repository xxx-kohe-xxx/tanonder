import Axios from 'axios'
const OK = 200
const BASE_URL = 'http://tanonder.test'

export const state = () => ({
  products: null,
  apiStatus: null
})

export const getters = {
  products: state => state.products ? state.products : ''
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setApiStatus (state, apiStatus) {
    state.apiStatus = apiStatus
  }
}

export const actions = {
  // 商品一覧取得API
  async getProducts (context) {
    context.commit('setApiStatus', null)
    const url = BASE_URL + '/api/products'
    const response = await Axios.get(url)

    if (response.status === OK) {
      context.commit('setApiStatus', true)
      context.commit('setProducts', response.data)
      return false
    }

    // context.commit('setApiStatus',false)
    // if (response.status === INTERNAL_SERVER_ERROR) {
    //   context.commit('setErrorMessages', response.data.errors)
    // } else {
    //   context.commit('')
    // }
  }
}
