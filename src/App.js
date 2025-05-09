
import './App.css';
import NavbarFinancas from './components/shared/header';
import SaldoAtual from './components/shared/saldoConta';

import NovoLancamentoCard from './features/novo-lancamento/NovoLancamentoCard';
import DividasPagarCard from './features/dividas-pagar/DividasPagarCard';
import ExtratoFinanceiroCard from './features/extrato-financeiro/ExtratoFinanceiroCard';
import CardOrcamentoMensal from './features/orcamento-mensal/cardOrcamentoMensal';
import CardValoresReceber from './features/valores-receber/cardValoresReceber';
import CardRelatorios from './features/relatorio-financeiro/cardRelatorios';

import ModalNovoLancamento from './features/novo-lancamento/modalNovoLancamento';

import ExtratoFinanceiroPage from './features/extrato-financeiro/ExtratoFinanceiroPage';
import DividasPagarPage from './features/dividas-pagar/DividasPagarPage';
import ValoresReceber from './features/valores-receber/valoresReceber';
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
                    <NovoLancamentoCard />
                    <ModalNovoLancamento />
                    <DividasPagarCard />
                    <ExtratoFinanceiroCard />
                    <CardOrcamentoMensal />
                    <CardValoresReceber />
                    <CardRelatorios />
                  </div>
                </>
              }
            />
            <Route path="/extrato-financeiro" element={<ExtratoFinanceiroPage />} />
            <Route path="/dividas-pagar" element={<DividasPagarPage />} />
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

