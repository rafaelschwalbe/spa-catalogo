import React, { Component } from 'react';
import logo from '../logo.svg';
import './../App.css';

class Logo extends Component {
    render() {        
        return <div className="logo">
            <a className="legendaLogo" title="" href="preencherhref">
                <img className="imgLogo" alt="logo" src={logo}></img>
            </a>
        </div>;
    }
}

export default Logo;