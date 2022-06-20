import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
export interface State {
  count: number,
  foo: string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('')

// 创建store实例
export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: 'Hi'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})