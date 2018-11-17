const INITIAL_STATE = {
    list:[]
}

export default function pedidoReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "CADASTRO_PEDIDO":
            return {...state, pedido: action}
        case "CARREGAR_PEDIDOS_SUCESSO":
            return {...state, list: action.pedidos}
        default:
            return state
    }
}