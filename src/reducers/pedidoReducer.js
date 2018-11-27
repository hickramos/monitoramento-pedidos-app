import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    list:[]
}

export default function pedidoReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case actionTypes.CADASTRO_PEDIDO_SUCESSO:
            return {...state, pedido: action}
        case actionTypes.CARREGAR_PEDIDOS_SUCESSO:
        case actionTypes.FINALIZAR_PEDIDO_SUCESSO:
        case actionTypes.AVANCAR_PEDIDO_SUCESSO:
        case actionTypes.CANCELAR_PEDIDO_SUCESSO:
            return {...state, list: action.pedidos}
        case actionTypes.VISUALIZAR_PEDIDO_SUCCESO:
            return state 
        default:
            return state
    }
}