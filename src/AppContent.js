// AppContent.js
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import PrivateRoute from './routes/PrivateRoute'; // 👈 novo import

import NavbarAppFinancas from './components/shared/navbar-app-financas/NavbarAppFinancas';
import SaldoAtual from './components/shared/saldo-atual/SaldoAtual';

import NovoLancamentoCard from './features/novo-lancamento/components/NovoLancamentoCard';
import NovoLancamentoModal from './features/novo-lancamento/components/NovoLancamentoModal';
import DividasPagarCard from './features/dividas-pagar/components/DividasPagarCard';
import ExtratoFinanceiroCard from './features/extrato-financeiro/components/ExtratoFinanceiroCard';
import OrcamentoMensalCard from './features/orcamento-mensal/components/OrcamentoMensalCard';
import ValoresReceberCard from './features/valores-receber/components/ValoresReceberCard';
import RelatoriosFinanceirosCard from './features/relatorio-financeiro/components/RelatoriosFinanceirosCard';

import AuthPage from './features/auth/pages/AuthPage';

import ExtratoFinanceiroPage from './features/extrato-financeiro/pages/ExtratoFinanceiroPage';
import DividasPagarPage from './features/dividas-pagar/pages/DividasPagarPage';
import ValoresReceberPage from './features/valores-receber/pages/ValoresReceberPage';
import RelatoriosFinanceirosPage from './features/relatorio-financeiro/pages/RelatoriosFinanceirosPage';
import OrcamentoMensalPage from './features/orcamento-mensal/pages/OrcamentoMensalPage';
import RecuperaSenhaPage from './features/auth/pages/RecuperaSenhaPage';

function AppContent() {
    const { usuario } = useAuth();
    const location = useLocation();

    const hideNavbarRoutes = ['/login', '/cadastro'];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <NavbarAppFinancas />}
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/cadastro" element={<AuthPage />} />

                {/* Rota protegida: /home */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
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
                        </PrivateRoute>
                    }
                />

                {/* Outras rotas protegidas */}
                <Route
                    path="/extrato-financeiro"
                    element={
                        <PrivateRoute>
                            <ExtratoFinanceiroPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dividas-pagar"
                    element={
                        <PrivateRoute>
                            <DividasPagarPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/valores-a-receber"
                    element={
                        <PrivateRoute>
                            <ValoresReceberPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/relatorios"
                    element={
                        <PrivateRoute>
                            <RelatoriosFinanceirosPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/orcamento-mensal"
                    element={
                        <PrivateRoute>
                            <OrcamentoMensalPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/recupera-senha"
                    element={
                        <RecuperaSenhaPage />
                    }
                />

                {/* Redirecionamento baseado no login */}
                <Route path="/" element={usuario ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            </Routes>
        </>
    );
}

export default AppContent;
