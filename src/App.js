import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cadastro from "./components/Cadastro";
import Acompanhamento from "./components/Acompanhamento";
import Caixa from "./components/Caixa";
import Operacao from "./components/Operacao";

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar/>
                <br/>
                <div class="container">
                    <Switch>
                        <Route exact path={"/"} component={Acompanhamento}/>
                        <Route path={"/cadastro"} component={Cadastro}/>
                        <Route path={"/acompanhamento"} component={Acompanhamento}/>
                        <Route path={"/caixa"} component={Caixa}/>
                        <Route path={"/operacao"} component={Operacao}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
