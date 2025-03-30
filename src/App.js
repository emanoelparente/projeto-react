import logo from './logo.svg';
import './App.css';
import NavbarFinancas from './components/cabecalho';

function App() {
  return (
    <div className="App">
      <NavbarFinancas></NavbarFinancas>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and aaaaggg save to reload.
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

export default App;
