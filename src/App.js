
import './App.css';
import NavbarFinancas from './components/cabecalho';
import SaldoAtual from './components/saldoConta';
import CardNovoLancamento from './components/cards/cardNovoLancamento';
import CardDividaPagar from './components/cards/cardDividasPagar';
import CardAcaoBase from './components/cards/cardAcaoBase';
import CardExtratoFinanceiro from './components/cards/cardExtratoFinanceiro';
import CardOrcamentoMensal from './components/cards/cardOrcamentoMensal';
import CardValoresReceber from './components/cards/cardValoresReceber';
import CardRelatorios from './components/cards/cardRelatorios';
import { ThemeProvider } from '@mui/material/styles';
import NovoLancamento from './components/Forms/novoLancamento';
import { ModalProvider } from './context/modalContext'; // se criou esse contexto
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <div className="App">
          <NavbarFinancas />
          <SaldoAtual />
          <div className="card-container">
            <CardNovoLancamento/>
            <NovoLancamento />
            <CardDividaPagar/>
            <CardExtratoFinanceiro/>
            <CardOrcamentoMensal/>
            <CardValoresReceber/>
            <CardRelatorios/>
          </div>
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
