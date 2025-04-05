
import logo from './logo.svg';
import './App.css';
import NavbarFinancas from './components/cabecalho';
import SaldoAtual from './components/saldoConta';
import CardNovoLancamento from './components/cards/cardNovoLancamento';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {

  const handleNovoLancamentoClick = () => {
    console.log("Novo lançamento clicado!");
    // ou navega, abre modal, etc.
  };



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarFinancas />
        <SaldoAtual />
        <div className="card-container">
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          <CardNovoLancamento onClick={handleNovoLancamentoClick} />
          {/* Adicione quantos cards quiser */}
        </div>

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
    </ThemeProvider>
  );
}

export default App;
