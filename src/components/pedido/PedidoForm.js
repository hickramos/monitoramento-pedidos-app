import React from 'react'
import { reduxForm, Field } from 'redux-form'

let PedidoForm = (props) => {
    const {handleSubmit} = props

    return(<form onSubmit={handleSubmit} className="col-12">
        <div className="form-group">
            <h4>Nome</h4>
            <Field component="input" type="text" className="form-control" placeholder="Nome" />
        </div>
        <div className="form-group">
            <h4>CPF</h4>
            <Field component="input" type="number" className="form-control" placeholder="CPF"/>
        </div>
        <div className="form-group">
            <h4>Descrição do Pedido</h4>
            <textarea type="text" className="form-control" placeholder="Descrição do Pedido"></textarea>
        </div>
        <span className="offset-8"></span>
        <button type="submit" className="btn btn-primary col-4">Registrar</button>
    </form>)
}

export default reduxForm({form: 'pedidoForm'})(PedidoForm)