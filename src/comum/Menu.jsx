import React, { Component } from 'react';
import './../App.css';
import Logo from './Logo'

class Menu extends Component {
    clickMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    
    render() {
        return <div id="menuFull">
            <nav className="topnav" id="myTopnav">
                <Logo/>
                <a href="">Seleções</a>
                <a href="">Grêmio</a>
                <a href="">Inter</a>
                <a href="">Brasileiros</a>
                <a href="">Argentinos</a>
                <a href="">Espanhóis</a>
                <a href="">Ingleses</a>
                <a href="">Italianos</a>
                <a href="">Outros</a>
                <a href="javascript:void(0);"  className="icon" onClick={this.clickMenu}>&#9776;</a>
            </nav>
        </div>        
    }
}

export default Menu;