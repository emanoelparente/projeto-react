
import './App.css';
import NavbarFinancas from './components/header';
import SaldoAtual from './components/saldoConta';

import CardNovoLancamento from './features/novo-lancamento/cardNovoLancamento';
import CardDividasPagar from './features/dividas-pagar/cardDividasPagar';
import CardExtratoFinanceiro from './features/extrato-financeiro/CardExtratoFinanceiro';
import CardOrcamentoMensal from './features/orcamento-mensal/cardOrcamentoMensal';
import CardValoresReceber from './features/valoresReceber/cardValoresReceber';
import CardRelatorios from './features/relatorio-financeiro/cardRelatorios';

import ModalNovoLancamento from './features/novo-lancamento/modalNovoLancamento';

import ExtratoFinanceiroPage from './features/extrato-financeiro/ExtratoFinanceiroPage';
import DividasPagar from './features/dividas-pagar/dividasPagar';
import ValoresReceber from './features/valoresReceber/valoresReceber';
import OrcamentoMensal from './features/orcamento-mensal/orcamentoMensal';
import Relatorios from './features/relatorio-financeiro/relatorios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ModalProvider } from './context/ModalContext';

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

