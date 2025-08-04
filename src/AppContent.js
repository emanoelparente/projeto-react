// AppContent.js
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import { useMediaQuery, Box } from '@mui/material';
import { useState } from 'react';

import NavbarAppFinancas from './components/shared/navbar-app-financas/NavbarAppFinancas';
import NavbarAppFinancasVertical from './components/shared/navbar-app-financas/NavbarAppFinancasVertical';
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
import RedefinirSenhaPage from './features/auth/pages/RedefinirSenhaPage';
import ConfiguracoesPage from './features/settings/pages/ConfiguracoesPage';

function AppContent() {
    const { usuario } = useAuth();
    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/cadastro', '/recupera-senha', '/redefinir-senha'];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    const isLargeScreen = useMediaQuery('(min-width:1000px)');

    const [menuAberto, setMenuAberto] = useState(true);
    const [bloquearAutoExpandir, setBloquearAutoExpandir] = useState(false);

    const fecharMenu = () => {
        setMenuAberto(false);
        setBloquearAutoExpandir(true);
        setTimeout(() => setBloquearAutoExpandir(false), 300);
    };

    const larguraMenu = !shouldHideNavbar && isLargeScreen ? (menuAberto ? 230 : 70) : 0;

    return (
        <>
            {!shouldHideNavbar && isLargeScreen && (
                <NavbarAppFinancasVertical
                    menuAberto={menuAberto}
                    setMenuAberto={setMenuAberto}
                    bloquearAutoExpandir={bloquearAutoExpandir}
                    fecharMenu={fecharMenu}
                />
            )}
            {!shouldHideNavbar && !isLargeScreen && <NavbarAppFinancas />}

            <Box
                sx={{
                    marginLeft: `${larguraMenu}px`,
                    transition: 'margin-left 0.3s',
                    padding: 2,
                }}
            >
                <Routes>
                    <Route path="/login" element={<AuthPage />} />
                    <Route path="/cadastro" element={<AuthPage />} />
                    <Route path="/recupera-senha" element={<RecuperaSenhaPage />} />
                    <Route path="/redefinir-senha" element={<RedefinirSenhaPage />} />
                    <Route path="/home" element={<PrivateRoute><><SaldoAtual /><div className="card-container"><NovoLancamentoCard /><NovoLancamentoModal /><DividasPagarCard /><ExtratoFinanceiroCard /><OrcamentoMensalCard /><ValoresReceberCard /><RelatoriosFinanceirosCard /></div></></PrivateRoute>} />
                    <Route path="/extrato-financeiro" element={<PrivateRoute><ExtratoFinanceiroPage /></PrivateRoute>} />
                    <Route path="/dividas-pagar" element={<PrivateRoute><DividasPagarPage /></PrivateRoute>} />
                    <Route path="/valores-a-receber" element={<PrivateRoute><ValoresReceberPage /></PrivateRoute>} />
                    <Route path="/relatorios" element={<PrivateRoute><RelatoriosFinanceirosPage /></PrivateRoute>} />
                    <Route path="/orcamento-mensal" element={<PrivateRoute><OrcamentoMensalPage /></PrivateRoute>} />
                    <Route path="/configuracoes" element={<PrivateRoute><ConfiguracoesPage /></PrivateRoute>} />

                    <Route path="/" element={usuario ? <Navigate to="/home" /> : <Navigate to="/login" />} />
                    
                </Routes>
            </Box>
        </>
    );
}

export default AppContent;
