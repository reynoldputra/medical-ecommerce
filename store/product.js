import axios from 'axios'
import {defineStore} from 'pinia'

const url = "http://localhost:8000"

export const useProductStore = defineStore('product', {
  state: () => ({
    product : [],
    input : ''
  }),
  actions: {
    async getKeyword(text) {
      const _res = await axios.post(`${url}/keyword`, {
        input : text        
      }) 
      return _res.data.data
    },
    async getProduct(){
      const _res = await axios.get(`${url}/product`)
      return _res.data.data
    }
  }
})
