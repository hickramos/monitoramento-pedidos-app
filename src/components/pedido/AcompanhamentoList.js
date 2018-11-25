import React from 'react';

const AcompanhamentoList = ({pedidos}) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Nome do Cliente</th>
                <th className="text-center">Tempo em espera</th>
                <th className="text-center">Status</th>
            </tr>
            </thead>
            <tbody>
            {pedidos.filter(pedido => pedido.status.id !== 'excluido' && pedido.status.id !== 'pronto').length > 0 ?
                pedidos.map(pedido => {
                    return (
                        <tr key={pedido.id}>
                            <td>{pedido.nome}</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center">
                                <i className={"fas fa-circle fa-2x status-" + pedido.status.id}></i>
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

export default AcompanhamentoList;