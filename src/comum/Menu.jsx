import React, { Component } from 'react';
import './../App.css';
import Logo from './Logo'

class Menu extends Component {
    render() {        
        return <div className="menu" id="myTopnav">
            <Logo/>
            <nav>
                <ul className="ulMenu">
                    <li className="liMenu"><a className="aMenu" href="">Seleções</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Grêmio</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Inter</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Brasileiros</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Argentinos</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Espanhóis</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Ingleses</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Italianos</a></li>
                    <li className="liMenu"><a className="aMenu" href="">Outros</a></li>
                </ul>
            </nav>
        </div>;
    }
}

export default Menu;