import { useState } from "react"
import "./components/estilos/Card.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {


    return (
      <>
        <NavBar/>
        <ItemListContainer mensaje="¡Bienvenidx a Helados Vanilla JS!" />
      </>
    )
}

export default App;


/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}


 */