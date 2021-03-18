import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    // localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置します。
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      // Stateを更新する
      state.lists.push({ title: payload.title, cards:[] })
    },    
  },
  actions: {
    addlist(context, payload) {
      // MutationsをCommit（実行）する
      context.commit('addlist', payload)
    },   
  },
  getters: {
  }
})

// データの状態を更新後にlocalStorageへデータの状態を保存しています
// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれます。
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store