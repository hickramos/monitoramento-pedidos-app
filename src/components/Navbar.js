import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Sistema de Pedidos</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/cadastro">Cadastro</Link>
                        <Link className="nav-item nav-link" to="/acompanhamento">Acompanhamento</Link>
                        <Link className="nav-item nav-link" to="/caixa">Caixa</Link>
                        <Link className="nav-item nav-link" to="/operacao">Operação</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar