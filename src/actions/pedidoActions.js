import axios from 'axios'
import {reset as resetForm} from 'redux-form'

export function criarPedido(pedido){
    pedido.id = 11;
    pedido.status = {
        id : "novo"
    };
    return dispatch => {
        axios.post('http://localhost:3004/pedidos', pedido)
        .then(request => {
            dispatch(resetForm('pedidoForm'))
            dispatch({type: 'CADASTRO_PEDIDO_SUCESSO'})
        })
    }
}

export function selecionarPedidos(){
    return dispatch => {
        axios.get('http://localhost:3004/pedidos')
        .then(pedidos => {
            dispatch(selecionarPedidosSuccess(pedidos.data))
        })
    }
}

export function selecionarPedidosSuccess(pedidos){
    return {type: 'CARREGAR_PEDIDOS_SUCESSO', pedidos}
}