import React, { useRef, useEffect } from "react";
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
  Settings,
} from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../../../context/ModalContext";
import { useAuth } from "../../../context/AuthContext";
import "./NavbarAppFinancasVertical.css";

const menuItems = [
  { label: "Home", icon: <Home />, path: "/home" },
  { label: "Novo lançamento", icon: <AddCircle />, action: "abrirModal" }, // ação especial
  { label: "Orçamento mensal", icon: <PieChart />, path: "/orcamento-mensal" },
  { label: "Dívidas a pagar", icon: <AttachMoney />, path: "/dividas-pagar" },
  { label: "Valores a receber", icon: <AttachMoney />, path: "/valores-a-receber" },
  { label: "Extrato financeiro", icon: <ReceiptLong />, path: "/extrato-financeiro" },
  { label: "Relatórios", icon: <BarChart />, path: "/relatorios" },
];

const NavbarAppFinancasVertical = ({ menuAberto, setMenuAberto }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef();
  const { abrirModal } = useModal(); // hook do contexto do modal
  const larguraMenu = menuAberto ? 230 : 50;

  const toggleMenu = () => {
    setMenuAberto(false);
  };

  const handleMouseEnter = () => {
    if (!menuAberto) setMenuAberto(true);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    if (item.action === "abrirModal") {
      abrirModal(); // abre o modal de novo lançamento
    } else if (item.path) {
      navigate(item.path); // navega para rota
    }
  };

  return (
    <Box
      ref={menuRef}
      className="navbar-vertical"
      onMouseEnter={handleMouseEnter}
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
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      {/* Topo */}
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
        <Box
          sx={{
            mt: 3,
            textAlign: menuAberto ? "left" : "center",
            paddingLeft: menuAberto ? "10px" : "0px",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "white", fontSize: "0.65rem" }}
          >
            SALDO
          </Typography>
          {menuAberto && (
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}
            >
              R$ 152.500,755
            </Typography>
          )}
        </Box>

        {/* Menu */}
        <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Box
                key={item.label}
                className={`menu-item-wrapper ${isActive ? "ativo-wrapper" : ""
                  }`}
                onClick={() => handleItemClick(item)}
              >
                <Box className={`menu-item ${isActive ? "ativo" : ""}`}>
                  <Tooltip title={!menuAberto ? item.label : ""} placement="right">
                    <Box
                      sx={{ display: "flex", alignItems: "center", fontSize: "24px" }}
                    >
                      {item.icon}
                    </Box>
                  </Tooltip>
                  {menuAberto && (
                    <Typography sx={{
                      fontSize: "0.85rem",
                      fontWeight: 200,
                    }}>{item.label}</Typography>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Rodapé */}

      <Box sx={{ mt: 2 }}>
        {/* Linha divisória depois do último item do menu */}
        <Box sx={{ px: 1 }}>
          <Box sx={{ height: "1px", backgroundColor: "#ffffff55", mb: 1 }} />
        </Box>

        {/* Links de rodapé */}
        {menuAberto && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, px: 2 }}>
            <Typography
              variant="caption"
              sx={{ color: "white", cursor: "pointer", fontSize: "0.75rem" }}
              onClick={() => navigate("/ajuda")}
            >
              Ajuda
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "white", cursor: "pointer", fontSize: "0.75rem" }}
              onClick={() => navigate("/termos")}
            >
              Termos de Uso
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "white", cursor: "pointer", fontSize: "0.75rem" }}
              onClick={() => navigate("/privacidade")}
            >
              Política de Privacidade
            </Typography>
          </Box>
        )}

        {/* Ícone de sair alinhado à direita */}
        <Box
  sx={{
    display: "flex",
    flexDirection: menuAberto ? "row" : "column",
    justifyContent: menuAberto ? "space-between" : "center",
    alignItems: "center",
    px: 1.5,
    mt: 2,
    mb: 1,
    gap: menuAberto ? 0 : 2, // espaçamento entre os ícones empilhados
  }}
>
  {/* Configurações */}
  <Box
    onClick={() => navigate("/configuracoes")}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      cursor: "pointer",
      '&:hover': { opacity: 0.8 },
      flexDirection: menuAberto ? "row" : "column",
    }}
  >
    <Settings sx={{ fontSize: 20, color: "white" }} />
    {menuAberto && (
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.8rem" }}
      >
        Configurações
      </Typography>
    )}
  </Box>

  {/* Sair */}
  <Box
    onClick={logout}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      cursor: "pointer",
      '&:hover': { opacity: 0.8 },
      flexDirection: menuAberto ? "row" : "column",
    }}
  >
    <Logout sx={{ fontSize: 20, color: "white" }} />
    {menuAberto && (
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.8rem" }}
      >
        Sair
      </Typography>
    )}
  </Box>
</Box>





      </Box>


    </Box>
  );
};

export default NavbarAppFinancasVertical;
