import React, { Component } from 'react';
//import logo from './logo.svg';
import './../App.css';

import Produto from './Produto';

class ColecaoProdutos extends Component {
    render() {
        const listaProdutos = ["camisa0", "camisa1", "camisa2", "camisa3", "camisa4", "camisa5", "camisa6", "Lucas", "Tableless", "Leitor", "Maria", "João", "Ana"];
        
        return <div className="catalogo">
            {listaProdutos.map((n, i) => <Produto nome={n} key={i}/>)}
        </div>;
    }
}

export default ColecaoProdutos;