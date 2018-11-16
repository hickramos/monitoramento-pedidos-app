import React, {Component} from 'react'
import Footer from "./Footer";

class Caixa extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="jumbotron text-center col-12">
                        <h1>Caixa</h1>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Cliente</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Finalizar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center"><i className="fas fa-forward fa-2x"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center"><i className="fas fa-forward fa-2x"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center"><i className="fas fa-forward fa-2x"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center"><i className="fas fa-forward fa-2x"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                            <td className="text-center"><i className="fas fa-forward fa-2x"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Caixa