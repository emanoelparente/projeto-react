
import './App.css';
import NavbarFinancas from './components/header';
import SaldoAtual from './components/saldoConta';

import CardNovoLancamento from './components/cards/cardNovoLancamento';
import CardDividasPagar from './components/cards/cardDividasPagar';
import CardExtratoFinanceiro from './features/extratoFinanceiro/CardExtratoFinanceiro';
import CardOrcamentoMensal from './components/cards/cardOrcamentoMensal';
import CardValoresReceber from './components/cards/cardValoresReceber';
import CardRelatorios from './components/cards/cardRelatorios';

import ModalNovoLancamento from './features/novoLancamento/modalNovoLancamento';

import ExtratoFinanceiroPage from './features/extratoFinanceiro/ExtratoFinanceiroPage';
import DividasPagar from './pages/dividasPagar';
import ValoresReceber from './pages/valoresReceber';
import OrcamentoMensal from './features/orcamentoMensal/orcamentoMensal';
import Relatorios from './features/relatorioFinanceiro/relatorios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ModalProvider } from './context/modalContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Router>
          <NavbarFinancas />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SaldoAtual />
                  <div className="card-container">
                    <CardNovoLancamento />
                    <ModalNovoLancamento />
                    <CardDividasPagar />
                    <CardExtratoFinanceiro />
                    <CardOrcamentoMensal />
                    <CardValoresReceber />
                    <CardRelatorios />
                  </div>
                </>
              }
            />
            <Route path="/extrato-financeiro" element={<ExtratoFinanceiroPage />} />
            <Route path="/dividas-pagar" element={<DividasPagar />} />
            <Route path="/valores-a-receber" element={<ValoresReceber />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/orcamento-mensal" element={<OrcamentoMensal />} />

            {/* Adicione mais rotas aqui conforme necessário */}
          </Routes>
        </Router>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

