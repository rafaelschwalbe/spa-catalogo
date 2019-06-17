import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './comum/Menu';
import ColecaoProdutos from './comum/ColecaoProdutos'

function App() {
  return (
    <div>
      {/* <HelloWorld nome="Rafael"/>
      <HelloWorld nome="Teste"/> */}
      <Menu/>
      <ColecaoProdutos/>
    
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

    </div>
  );
}

export default App;
