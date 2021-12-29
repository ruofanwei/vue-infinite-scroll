import { createStore } from 'vuex'

export interface State{
    count: number
}

export const store = createStore<State>({
    state(){
        return{
            count: 1,
        }
    },

    mutations:{
        add(state, amount){
            state.count += amount
        }
    }


})