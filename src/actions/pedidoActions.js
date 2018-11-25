import axios from 'axios'
import {reset as resetForm} from 'redux-form'

const urlPedidos = 'http://localhost:3004/pedidos';

export function criarPedido(pedido){
    pedido.status = {
        id : "novo"
    };
    return dispatch => {
        axios.post(urlPedidos, pedido)
        .then(request => {
            dispatch(resetForm('pedidoForm'))
            dispatch({type: 'CADASTRO_PEDIDO_SUCESSO'})
        })
    }

}

export function selecionarPedidos(){
    return dispatch => {
        axios.get(urlPedidos)
        .then(pedidos => {
            dispatch(selecionarPedidosSuccess(pedidos.data))
        })
    }
}

export function selecionarPedidosSuccess(pedidos){
    return {type: 'CARREGAR_PEDIDOS_SUCESSO', pedidos}
}

export function finalizarPedido(pedido){
    pedido.status.id = 'pronto';

    return dispatch => {
        axios.put(urlPedidos+"/"+pedido.id, pedido)
        .then(pedido => {
            axios.get(urlPedidos)
            .then(pedidos => {
                dispatch(finalizarPedidosSuccess(pedidos.data))
            })
        });
    } 
}

export function finalizarPedidosSuccess(pedidos){
    return {type: 'FINALIZAR_PEDIDO_SUCESSO', pedidos}
}