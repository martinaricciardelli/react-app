import Nav from "./components/NavBar"
import "./components/estilos/Card.css"

const App = () => {
    return (
    <>
      <header>
        <h1 className="logo">Helados Vanilla JS </h1>
        <Nav/>
      </header> 
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