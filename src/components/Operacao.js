import React, {Component} from 'react'
import Footer from "./Footer";

class Operacao extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="jumbotron text-center col-12">
                        <h1>Avançar Status do Pedido</h1>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Cliente</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center">
                                <button><i className="fas fa-external-link-square-alt fa-2x"></i></button>
                                <button><i className="fas fa-forward fa-2x"></i></button>
                                <button><i className="fas fa-times-circle fa-2x"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-conferencia"></i></td>
                            <td className="text-center">
                                <button><i className="fas fa-external-link-square-alt fa-2x"></i></button>
                                <button><i className="fas fa-forward fa-2x"></i></button>
                                <button><i className="fas fa-times-circle fa-2x"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-preparado"></i></td>
                            <td className="text-center">
                                <button><i className="fas fa-external-link-square-alt fa-2x"></i></button>
                                <button><i className="fas fa-forward fa-2x"></i></button>
                                <button><i className="fas fa-times-circle fa-2x"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-novo"></i></td>
                            <td className="text-center">
                                <button><i className="fas fa-external-link-square-alt fa-2x"></i></button>
                                <button><i className="fas fa-forward fa-2x"></i></button>
                                <button><i className="fas fa-times-circle fa-2x"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-novo"></i></td>
                            <td className="text-center">
                                <button><i className="fas fa-external-link-square-alt fa-2x"></i></button>
                                <button><i className="fas fa-forward fa-2x"></i></button>
                                <button><i className="fas fa-times-circle fa-2x"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Operacao