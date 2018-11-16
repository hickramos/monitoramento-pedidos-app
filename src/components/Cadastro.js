import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {criarPedido} from '../actions/pedidoActions'
import PedidoForm from './pedido/PedidoForm'

class Cadastro extends Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="jumbotron text-center col-12">
                        <h1>Cadastro de Pedidos</h1>
                    </div>
                </div>
                <div className="row">
                    <PedidoForm onSubmit={this.props.criarPedido} />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({criarPedido}, dispatch);
}

export default connect(null, mapDispatchToProps)(Cadastro)