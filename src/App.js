import "./components/estilos/Card.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CartWidget from "./components/CartWidget/CartWidget"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
//import ItemCount from "./components/ItemCount/ItemCount"


const App = () => {


    return (
      <>
      <BrowserRouter>
          <NavBar/>
          <p className="mensaje">"¡Bienvenidx a Helados Vanilla JS!"</p>
          {/*<ItemCount stock={10} initial={1} onAdd={()=>{}}/>*/}
          <ItemListContainer/>   
          <Switch>
            <Route path="/" component={ItemListContainer}/>
            <Route path="/seccion/:id" component={ItemListContainer}/>
            <Route path="/cart" component={CartWidget}/>
          </Switch>
          <ItemDetailContainer/>
      </BrowserRouter>    
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