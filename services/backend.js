import { api, publicApi } from '@/services/api'

//FOR TEST
import axios from 'axios'

export default {
  login(payload) {
    const loginInfo = publicApi.post('/login', payload);
    loginInfo.then((data) => {
      console.log(data.data)
      api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`
    })
    return loginInfo
  },
  recoverPassword(email) {
    return publicApi.post('/client/reset_password/request', email);
  },
  resetPassword(payload) {
    return publicApi.post('/client/reset_password', payload);
  },
  registerDriver(payload) {
    return publicApi.post('/registro-repartidor', payload);
  },
  registerClient(payload) {
    return publicApi.post('/registro-negocio', payload);
  },
}
