import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import NavbarAppFinancas from './components/shared/navbar-app-financas/NavbarAppFinancas';
import SaldoAtual from './components/shared/saldo-atual/SaldoAtual';

import NovoLancamentoCard from './features/novo-lancamento/components/NovoLancamentoCard';
import NovoLancamentoModal from './features/novo-lancamento/components/NovoLancamentoModal';
import DividasPagarCard from './features/dividas-pagar/components/DividasPagarCard';
import ExtratoFinanceiroCard from './features/extrato-financeiro/components/ExtratoFinanceiroCard';
import OrcamentoMensalCard from './features/orcamento-mensal/components/OrcamentoMensalCard';
import ValoresReceberCard from './features/valores-receber/components/ValoresReceberCard';
import RelatoriosFinanceirosCard from './features/relatorio-financeiro/components/RelatoriosFinanceirosCard';


import AuthCard from './features/auth/components/AuthCard';

import ExtratoFinanceiroPage from './features/extrato-financeiro/pages/ExtratoFinanceiroPage';
import DividasPagarPage from './features/dividas-pagar/pages/DividasPagarPage';
import ValoresReceberPage from './features/valores-receber/pages/ValoresReceberPage';
import RelatoriosFinanceirosPage from './features/relatorio-financeiro/pages/RelatoriosFinanceirosPage';
import OrcamentoMensalPage from './features/orcamento-mensal/pages/OrcamentoMensalPage';

function AppContent() {
    const { usuario } = useAuth();
    const location = useLocation();

    const hideNavbarRoutes = ['/login', '/cadastro'];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <NavbarAppFinancas />}
            <Routes>
                <Route path="/login" element={<AuthCard />} />
                <Route path="/cadastro" element={<AuthCard />} />

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
                <Route path="/extrato-financeiro" element={<ExtratoFinanceiroPage />} />
                <Route path="/dividas-pagar" element={<DividasPagarPage />} />
                <Route path="/valores-a-receber" element={<ValoresReceberPage />} />
                <Route path="/relatorios" element={<RelatoriosFinanceirosPage />} />
                <Route path="/orcamento-mensal" element={<OrcamentoMensalPage />} />
                <Route
                    path="/"
                    element={usuario ? <Navigate to="/home" /> : <Navigate to="/login" />}
                />
            </Routes>
        </>
    );
}

export default AppContent;
