import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  Home,
  AddCircle,
  PieChart,
  AttachMoney,
  ReceiptLong,
  BarChart,
  Settings,
  Logout,
  HelpOutline,
  Policy,
  School,
  Description,
  ChevronLeft,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../../../context/ModalContext";
import { useAuth } from "../../../context/AuthContext";
import "./NavbarAppFinancas.css";

const menuItems = [
  { label: "Home", icon: <Home />, path: "/home" },
  { label: "Novo lançamento", icon: <AddCircle />, action: "abrirModal" }, // ação especial
  { label: "Orçamento mensal", icon: <PieChart />, path: "/orcamento-mensal" },
  { label: "Dívidas a pagar", icon: <AttachMoney />, path: "/dividas-pagar" },
  { label: "Valores a receber", icon: <AttachMoney />, path: "/valores-a-receber" },
  { label: "Extrato financeiro", icon: <ReceiptLong />, path: "/extrato-financeiro" },
  { label: "Relatórios", icon: <BarChart />, path: "/relatorios" },
];

const extraItems = [
  { label: "Ajuda", icon: <HelpOutline />, path: "/ajuda" },
  { label: "Termos de uso", icon: <Description />, path: "/termos-de-uso" },
  { label: "Política de privacidade", icon: <Policy />, path: "/politica-de-privacidade" },
  { label: "Educação financeira", icon: <School />, path: "/educacao" },
];

const NavbarAppFinancas = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const { abrirModal } = useModal();
  const { logout } = useAuth();

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleItemClick = (item) => {
    if (item.action === "abrirModal") {
      abrirModal("novoLancamento");
    } else if (item.path) {
      navigate(item.path);
    }
    handleDrawerClose();
  };

  const isActive = (path) => location.pathname === path;




  return (
    <AppBar position="static">
      <Toolbar className="header">
        {/* lado esquerdo */}
        <Box className="left-box">
          <Link to="/home">
            <Home className="home-icon" />
          </Link>
        </Box>

        {/* título central */}
        <Box className="center-box">
          <h1 className="titulo-central-texto">Finanças pessoais</h1>
        </Box>

        {/* lado direito */}
        <Box className="right-box">
          <IconButton onClick={handleDrawerOpen} className="perfil-icon">
            {isMobile
              ? <MenuIcon sx={{ color: "#ffffffff" }} />
              : <AccountCircle sx={{ color: "#ffffffff" }} />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer lateral */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "#77AF51",
            color: "white",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* botão fechar */}
          <IconButton
            onClick={handleDrawerClose}
            sx={{ alignSelf: "flex-end", color: "white" }}
          >
            <ChevronLeft />
          </IconButton>

          {/* menu principal */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleItemClick(item)}
                sx={{
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                  mx: 1,
                  mb: 1,
                  bgcolor: isActive(item.path) ? "white" : "transparent",
                  color: isActive(item.path) ? "#77AF51" : "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemIcon
                  sx={{ color: isActive(item.path) ? "#77AF51" : "white" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />

          {/* extras */}
          <List>
            {extraItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.path}
                onClick={handleDrawerClose}
                sx={{
                  borderRadius: "50px",
                  mx: 1,
                  mb: 1,
                  fontSize: "0.85rem",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: "0.8rem" }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />

          {/* Configurações e Sair no final */}
          <Box sx={{ mt: "auto" }}>
            <List>
              <ListItem
                button
                component={Link}
                to="/configuracoes"
                onClick={handleDrawerClose}
                sx={{
                  borderRadius: "50px",
                  mx: 1,
                  mb: 1,
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItem>

              <ListItem
                button
                onClick={handleLogout}
                sx={{
                  borderRadius: "50px",
                  mx: 1,
                  mb: 1,
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavbarAppFinancas;
