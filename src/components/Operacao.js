import React, {Component} from 'react'
import Footer from "./Footer";
import OperacaoList from "./pedido/OperacaoList"
import {bindActionCreators} from "redux";
import {selecionarPedidos} from "../actions/pedidoActions";
import connect from "react-redux/es/connect/connect";

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
                    <OperacaoList pedidos={this.props.pedidos}/>
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


export default connect(mapStateProps, mapDispatchToProps)(Operacao)