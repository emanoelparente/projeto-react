
import './App.css';
import NavbarAppFinancas from './components/shared/navbar-app-financas/NavbarAppFinancas';
import SaldoAtual from './components/shared/saldo-atual/SaldoAtual';

import NovoLancamentoCard from './features/novo-lancamento/components/NovoLancamentoCard';
import DividasPagarCard from './features/dividas-pagar/components/DividasPagarCard';
import ExtratoFinanceiroCard from './features/extrato-financeiro/components/ExtratoFinanceiroCard';
import OrcamentoMensalCard from './features/orcamento-mensal/components/OrcamentoMensalCard';
import ValoresReceberCard from './features/valores-receber/ValoresReceberCard';
import RelatoriosFinanceirosCard from './features/relatorio-financeiro/RelatoriosFinanceirosCard';

import NovoLancamentoModal from './features/novo-lancamento/components/NovoLancamentoModal';

import ExtratoFinanceiroPage from './features/extrato-financeiro/pages/ExtratoFinanceiroPage';
import DividasPagarPage from './features/dividas-pagar/pages/DividasPagarPage';
import ValoresReceberPage from './features/valores-receber/ValoresReceberPage';
import OrcamentoMensalPage from './features/orcamento-mensal/pages/OrcamentoMensalPage';
import RelatoriosFinanceirosPage from './features/relatorio-financeiro/RelatoriosFinanceirosPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ModalProvider } from './context/ModalContext';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Router>
          <NavbarAppFinancas />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SaldoAtual />
                  <div className="card-container">
                    <NovoLancamentoCard />
                    <NovoLancamentoModal />
                    <DividasPagarCard />
                    <ExtratoFinanceiroCard />
                    <OrcamentoMensalCard />
                    <ValoresReceberCard />
                    <RelatoriosFinanceirosCard />
                  </div>
                </>
              }
            />
            <Route path="/extrato-financeiro" element={<ExtratoFinanceiroPage />} />
            <Route path="/dividas-pagar" element={<DividasPagarPage />} />
            <Route path="/valores-a-receber" element={<ValoresReceberPage />} />
            <Route path="/relatorios" element={<RelatoriosFinanceirosPage />} />
            <Route path="/orcamento-mensal" element={<OrcamentoMensalPage />} />

            {/* Adicione mais rotas aqui conforme necessário */}
          </Routes>
        </Router>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

