import React from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Home,
  AddCircle,
  AccountCircle,
  PieChart,
  AttachMoney,
  BarChart,
  ReceiptLong,
  Menu as MenuIcon,
  ChevronLeft,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavbarAppFinancasVertical.css";

const menuItems = [
  { label: "Home", icon: <Home />, path: "/home" },
  { label: "Novo lançamento", icon: <AddCircle />, path: "/novo-lancamento" },
  { label: "Orçamento mensal", icon: <PieChart />, path: "/orcamento-mensal" },
  { label: "Dívidas a pagar", icon: <AttachMoney />, path: "/dividas-pagar" },
  { label: "Valores a receber", icon: <AttachMoney />, path: "/valores-a-receber" },
  { label: "Extrato financeiro", icon: <ReceiptLong />, path: "/extrato-financeiro" },
  { label: "Relatórios", icon: <BarChart />, path: "/relatorios" },
];

const NavbarAppFinancasVertical = ({ menuAberto, toggleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const larguraMenu = menuAberto ? 230 : 70;

  return (
    <Box
      className="navbar-vertical"
      sx={{
        width: `${larguraMenu}px`,
        transition: "width 0.3s",
        backgroundColor: "#77af51",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1000,
        padding: "16px 8px",
      }}
    >
      {/* Topo com botão e logo */}
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: menuAberto ? "space-between" : "center",
            px: 1,
          }}
        >
          {menuAberto && (
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "white", ml: 1 }}
            >
              Feasy
            </Typography>
          )}
          <IconButton onClick={toggleMenu} sx={{ color: "white" }}>
            {menuAberto ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Saldo */}
        <Box sx={{ mt: 3, textAlign: menuAberto ? "left" : "center", px: 1 }}>
          <Typography variant="caption" sx={{ color: "white", fontSize: "0.65rem" }}>
            SALDO
          </Typography>
          <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}>
            R$ 152.500,75
          </Typography>
        </Box>

        {/* Itens do menu */}
        <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Box
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1,
                  py: 1,
                  borderRadius: "6px",
                  cursor: "pointer",
                  backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                  color: "white",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <Tooltip title={item.label} placement="right" disableHoverListener={menuAberto}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {item.icon}
                  </Box>
                </Tooltip>
                {menuAberto && <Typography variant="body2">{item.label}</Typography>}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Ícone de perfil no rodapé */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Tooltip title="Perfil">
          <IconButton sx={{ color: "white", width: 48, height: 48 }}>
            <AccountCircle sx={{ fontSize: 36 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default NavbarAppFinancasVertical;
