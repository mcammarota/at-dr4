import { createStore } from 'vuex'

export default createStore ({
    state: {
        pedidos: [],
    },

    getters: {
        pedidos: (state) => state.pedidos
    },

    mutations: {
        cadastrarPedido: (state, pedido) =>{
            state.pedidos.push(pedido)
        },
    },
    
    actions: {
        async cadastrarPedido(context, pedido) {
            context.commit('cadastrarPedido', pedido)
        }
    }
})