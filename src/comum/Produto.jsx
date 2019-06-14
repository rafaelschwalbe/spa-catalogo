import React from 'react';
import city from '../imagens/city.jpg';

export default class Produto extends React.Component {
    render() {
        return <div className="produto">
            <a className="legendaProduto" title={this.props.nome} href="preencherhref"><img className="imgProduto" alt="logo" src={city}></img></a>
            <p>Olá {this.props.nome}</p>
        </div>;
    }
}

Produto.propTypes = {
    //nome: React.PropTypes.string.isRequired
}