
import './App.css';
import { useAuth } from './context/AuthContext';

import NavbarAppFinancas from './components/shared/navbar-app-financas/NavbarAppFinancas';
import SaldoAtual from './components/shared/saldo-atual/SaldoAtual';

import NovoLancamentoCard from './features/novo-lancamento/components/NovoLancamentoCard';
import DividasPagarCard from './features/dividas-pagar/components/DividasPagarCard';
import ExtratoFinanceiroCard from './features/extrato-financeiro/components/ExtratoFinanceiroCard';
import OrcamentoMensalCard from './features/orcamento-mensal/components/OrcamentoMensalCard';
import ValoresReceberCard from './features/valores-receber/components/ValoresReceberCard';
import RelatoriosFinanceirosCard from './features/relatorio-financeiro/components/RelatoriosFinanceirosCard';

import NovoLancamentoModal from './features/novo-lancamento/components/NovoLancamentoModal';

import ExtratoFinanceiroPage from './features/extrato-financeiro/pages/ExtratoFinanceiroPage';
import DividasPagarPage from './features/dividas-pagar/pages/DividasPagarPage';
import ValoresReceberPage from './features/valores-receber/pages/ValoresReceberPage';
import OrcamentoMensalPage from './features/orcamento-mensal/pages/OrcamentoMensalPage';
import RelatoriosFinanceirosPage from './features/relatorio-financeiro/pages/RelatoriosFinanceirosPage';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';


import LoginPage from "./features/auth/pages/LoginPage";
import CadastroPage from "./features/auth/pages/CadastroPage";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ModalProvider } from './context/ModalContext';

import theme from './theme';

import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';


function App() {
const { usuario } = useAuth(); // agora você pode usar para redirecionar
  return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <Router>
              <NavbarAppFinancas />
              <Routes>
                <Route
                  path="/home"
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

                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />

                <Route path="/extrato-financeiro" element={<ExtratoFinanceiroPage />} />
                <Route path="/dividas-pagar" element={<DividasPagarPage />} />
                <Route path="/valores-a-receber" element={<ValoresReceberPage />} />
                <Route path="/relatorios" element={<RelatoriosFinanceirosPage />} />
                <Route path="/orcamento-mensal" element={<OrcamentoMensalPage />} />

                <Route
                  path="/"
                  element={
                    usuario ? <Navigate to="/home" /> : <Navigate to="/login" />
                  }
                />


                {/* Adicione mais rotas aqui conforme necessário */}
              </Routes>
            </Router>
          </ModalProvider>
        </ThemeProvider>
      </AuthProvider>
  );
    }

export default App;

