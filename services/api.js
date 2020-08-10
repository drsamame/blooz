import axios from 'axios';

const api = axios.create({
  baseURL: 'https://private-c96a26-blooz.apiary-mock.com/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  } 
})

const publicApi = axios.create({
  baseURL: 'https://private-c96a26-blooz.apiary-mock.com/',
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  } 
})

export default ({store}) => {
  const token = store.state.token;
  if(token !== undefined){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}


export {api, publicApi}