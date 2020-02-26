import Axios from 'axios'
const OK = 200
const BASE_URL = 'http://tanonder.test'

const axiosBase = Axios.create({
  baseURL: 'http://tanonder.test',
  headers: {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  },
  responseType: 'json'
})

export const state = () => ({
  username: null,
  apiStatus: null
})

export const getters = {
  username: state => state.username ? state.username : ''
}

export const mutations = {
  setUsername (state, username) {
    state.username = username
  },
  setApiStatus (state, apiStatus) {
    state.apiStatus = apiStatus
  }
}

export const actions = {
  // 名前登録API
  async register (context, username) {
    context.commit('setApiStatus', null)
    const url = BASE_URL + '/api/register/'
    console.log('action: ' + username)
    // const response = await Axios.post(url, username)
    const response = await axiosBase.post('/api/register', username)
    console.log(response)
  }
}
