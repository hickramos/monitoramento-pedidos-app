import React from 'react';

const CaixaList = ({pedidos}) => {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nome do Cliente</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Finalizar</th>
                </tr>
            </thead>
            <tbody>
                {pedidos
                    .filter(pedido => pedido.status.id === 'pagamento')
                    .map(pedido => {
                        return(
                            <tr>
                                <td>{pedido.nome}</td>
                                <td className="text-center">
                                    <i className={"fas fa-circle fa-2x status-"+pedido.status.id}></i>
                                </td>
                                <td className="text-center">
                                    <i className="fas fa-forward fa-2x"></i>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CaixaList;