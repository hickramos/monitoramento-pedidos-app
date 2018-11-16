import React, {Component} from 'react'

class Descriptions extends Component {
    render() {
        return (
            <div className="row">
                <h4 className="col-12">Legenda</h4>
                <br/>
                <br/>
                <table className="col-6">
                    <tr>
                        <td><i className="fas fa-circle fa-2x status-novo"></i></td>
                        <td>Pedido Novo</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-circle fa-2x status-preparado"></i></td>
                        <td>Pedido sendo Preparado</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-circle fa-2x status-conferencia"></i></td>
                        <td>Pedido em Conferência</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                        <td>Pedido preparado para Pagamento</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Descriptions