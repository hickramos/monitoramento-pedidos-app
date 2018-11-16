import React, {Component} from 'react'
import Footer from "./Footer";

class Acompanhamento extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="jumbotron text-center col-12">
                        <h1>Acompanhamento dos Pedidos</h1>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Cliente</th>
                            <th className="text-center">Tempo em espera</th>
                            <th className="text-center">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-pagamento"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-conferencia"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-preparado"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-novo"></i></td>
                        </tr>
                        <tr>
                            <td>Cliente</td>
                            <td className="text-center"> 10 min</td>
                            <td className="text-center"><i className="fas fa-circle fa-2x status-novo"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Acompanhamento