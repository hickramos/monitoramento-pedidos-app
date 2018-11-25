import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selecionarPedidos} from '../actions/pedidoActions'
import {bindActionCreators} from 'redux'
import AcompanhamentoList from './pedido/AcompanhamentoList'
import Footer from "./Footer"

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
                    <AcompanhamentoList pedidos={this.props.pedidos}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        pedidos: state.pedidos.list
    }
}

function mapDispatchToProps(dispatch) {
    bindActionCreators({selecionarPedidos}, dispatch);
}

export default connect(mapStateProps, mapDispatchToProps)(Acompanhamento)