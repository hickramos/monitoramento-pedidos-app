import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {finalizarPedido} from '../../actions/pedidoActions'

const CaixaList = (props) => {
    const {pedidos} = props
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Nome do Cliente</th>
                <th className="text-center">Status</th>
                <th className="text-center">Finalizar</th>
            </tr>
            </thead>
            <tbody>
            {pedidos.filter(pedido => pedido.status.id === 'pagamento').length > 0 ?
                pedidos
                    .filter(pedido => pedido.status.id === 'pagamento')
                    .map(pedido => {
                        return (
                            <tr key={pedido.id}>
                                <td>{pedido.nome}</td>
                                <td className="text-center">
                                    <i className={"fas fa-circle fa-2x status-" + pedido.status.id}></i>
                                </td>
                                <td className="text-center">
                                    <button onClick={() => props.finalizarPedido(pedido)}>
                                        <i className="fas fa-forward fa-2x"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    }) :
                <tr>
                    <td colSpan="3">Nenhum pedido encontrado.</td>
                </tr>
            }
            </tbody>
        </table>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({finalizarPedido}, dispatch)
}

export default connect(null, mapDispatchToProps)(CaixaList)