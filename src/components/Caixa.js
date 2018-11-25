import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selecionarPedidos} from '../actions/pedidoActions'
import {bindActionCreators} from 'redux';
import CaixaList from './pedido/CaixaList';

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
                    <CaixaList pedidos={this.props.pedidos}/>
                </div>
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

export default connect(mapStateProps, mapDispatchToProps)(Caixa)