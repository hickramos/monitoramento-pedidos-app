import React, {Component} from 'react'

class Cadastro extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="jumbotron text-center col-12">
                        <h1>Cadastro de Pedidos</h1>
                    </div>
                </div>
                <div className="row">
                    <form className="col-12">
                        <div className="form-group">
                            <h4>Nome</h4>
                            <input type="text" className="form-control" placeholder="Nome"/>
                        </div>
                        <div className="form-group">
                            <h4>CPF</h4>
                            <input type="number" className="form-control" placeholder="CPF"/>
                        </div>
                        <div className="form-group">
                            <h4>Descrição do Pedido</h4>
                            <textarea type="text" className="form-control" placeholder="Descrição do Pedido"></textarea>
                        </div>
                        <span className="offset-8"></span>
                        <button type="submit" className="btn btn-primary col-4">Registrar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Cadastro