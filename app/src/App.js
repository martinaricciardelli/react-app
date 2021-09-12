import Header from "./components/Header"
import "./components/estilos/Card.css"
import ItemListContainer from "./components/ItemListContainer" 

const App = () => {
    return (
      <>
        <Header titulo= "Helados Vanilla JS"/>
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