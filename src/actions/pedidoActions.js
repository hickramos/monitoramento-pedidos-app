import axios from 'axios'
import {reset as resetForm} from 'redux-form'

const urlPedidos = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
    pedido.status = {
        id: "novo"
    };
    
    return dispatch => {
        axios.post(urlPedidos, pedido)
            .then(request => {
                dispatch(resetForm('pedidoForm'))
                dispatch({type: 'CADASTRO_PEDIDO_SUCESSO'})
            })
    }
}

export function selecionarPedidos() {
    return dispatch => {
        listarPedidos(dispatch, 'CARREGAR_PEDIDOS_SUCESSO');
    }
}

export function avancarPedido(pedido) {
    // Altera o status
    if(pedido.status.id === "novo") {
        pedido.status.id = "preparado";
    } else if(pedido.status.id === "preparado"){
        pedido.status.id = "conferencia";
    } else if(pedido.status.id === "conferencia"){
        pedido.status.id = "pagamento";
    }

    return dispatch =>{
        atualizarPedido(dispatch, 'AVANCAR_PEDIDO_SUCESSO', pedido);
    }
}

export function finalizarPedido(pedido) {
    pedido.status.id = 'pronto';

    return dispatch => {
        atualizarPedido(dispatch, 'FINALIZAR_PEDIDO_SUCESSO', pedido);
    }
}

export function cancelarPedido(pedido) {
    pedido.status.id = 'excluido';

    return dispatch => {
        atualizarPedido(dispatch, 'CANCELAR_PEDIDO_SUCESSO', pedido);
    }
}

function atualizarPedido(dispatch, action, pedido){
    const urlPedido = urlPedidos + "/" + pedido.id;
    
    // atualiza o pedido
    axios.put(urlPedido, pedido).then(pedido => {
        listarPedidos(dispatch, action);
    });
}

function listarPedidos(dispatch, action) {
    axios.get(urlPedidos).then(pedidos => {
        dispatch(pedidosSuccess(action, pedidos.data))
    })
}

function pedidosSuccess(action, pedidos){
    return {type: action, pedidos}
}