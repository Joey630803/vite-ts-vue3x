import { createStore } from 'vuex'
 
const store = createStore({
  state: {  
	  count:1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  getters: {
  }
})

export default store