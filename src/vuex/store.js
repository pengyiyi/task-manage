import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 应用初始状态
const state = {
  //  count: 10
    taskid:'原始',
    index:0,
    Sir:"赵振华"
}

// 定义所需的 mutations
const mutations = {
    setTaskId: (state, name) => {
        state.taskid = name
    },
}

// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations,
})
