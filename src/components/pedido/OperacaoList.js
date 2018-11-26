import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {cancelarPedido, avancarPedido} from '../../actions/pedidoActions'

const OperacaoList = (props) => {
    const {pedidos} = props
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Nome do Cliente</th>
                <th className="text-center">Status</th>
                <th className="text-center">Ações</th>
            </tr>
            </thead>
            <tbody>
            {pedidos.filter(pedido => pedido.status.id !== 'excluido' && pedido.status.id !== 'pronto').length > 0 ?
                pedidos
                .filter(pedido => pedido.status.id !== 'excluido' && pedido.status.id !== 'pronto')
                .map(pedido => {
                    return (
                        <tr key={pedido.id}>
                            <td>{pedido.nome}</td>
                            <td className="text-center"><i
                                className={"fas fa-circle fa-2x status-" + pedido.status.id}></i></td>
                            <td className="text-center">
                                <button onClick={() => props.visualizarPedido(pedido)}>
                                    <i className="fas fa-external-link-square-alt fa-2x"></i>
                                </button>
                                {
                                    pedido.status.id !== "pagamento" 
                                        ?<button onClick={() => props.avancarPedido(pedido)}>
                                            <i className="fas fa-forward fa-2x"></i>
                                        </button>
                                        :""

                                }
                                <button onClick={() => props.cancelarPedido(pedido)}>
                                    <i className="fas fa-times-circle fa-2x"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }) :
                <tr>
                    <td colSpan="3">Nenhum pedido encontrado</td>
                </tr>
            }
            </tbody>
        </table>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({cancelarPedido, avancarPedido}, dispatch)
}

export default connect(null, mapDispatchToProps)(OperacaoList);