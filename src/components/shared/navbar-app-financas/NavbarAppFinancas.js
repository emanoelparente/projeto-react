import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarAppFinancas.css";

const NavbarAppFinancas = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  const titulosPorRota = {
    "/home": "Finanças pessoais",
    "/extrato-financeiro": "Extrato financeiro",
    "/dividas-pagar": "Dívidas a pagar",
    "/valores-a-receber": "Valores a receber",
    "/relatorios": "Relatórios Financeiros",
    "/orcamento-mensal": "Orçamento mensal",
  };

  const titulo = titulosPorRota[location.pathname] || "";
  const isHome = location.pathname === "/home";

  return (
    <AppBar position="static">
      <Toolbar className="header">
        {/* Lado esquerdo */}
        <Box className="left-box">
          {isHome ? (
            <Link to="/home">
              <img
                src="../images/logo-feasy-fb.svg"
                alt="logo"
                className="logo-esquerda"
              />
            </Link>
          ) : (
            <Link to="/home">
              <HomeIcon className="home-icon" />
            </Link>
          )}
        </Box>

        {/* Título central */}
        <Box className="center-box">
          <h1 className="titulo-central-texto">{titulo}</h1>
        </Box>

        {/* Lado direito - saldo + menu */}
        <Box
          className="right-box"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          {/* Caixa de saldo */}
          <Box
            sx={{
              position: "relative",
              backgroundColor: "transparent",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "4px",
              minWidth: "100px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "-10px",
                left: "8px",
                color: "white",
                fontSize: "0.65rem",
                padding: "0 4px",
                borderRadius: "4px",
              }}
            >
              Saldo
            </Box>
            <Box sx={{ fontSize: "0.9rem" }}>R$ 1.234,56</Box>
          </Box>

          {/* Botão que abre Drawer */}
          <IconButton onClick={handleDrawerOpen} className="perfil-icon">
            {isMobile ? <MenuIcon /> : <AccountCircle className="icone" />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer lateral */}
      {/* Drawer lateral */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            backgroundColor: "#2e7d32", // verde
            color: "white",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            width: 260,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Botão fechar */}
          <IconButton onClick={handleDrawerClose} sx={{ alignSelf: "flex-end", color: "white" }}>
            <ChevronLeftIcon />
          </IconButton>

          {/* Itens principais */}
          <List>
            <ListItem
              button
              component={Link}
              to="/novo-lancamento"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/novo-lancamento" ? "white" : "transparent",
                color: location.pathname === "/novo-lancamento" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Novo Lançamento" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/orcamento-mensal"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/orcamento-mensal" ? "white" : "transparent",
                color: location.pathname === "/orcamento-mensal" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Orçamento Mensal" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/dividas-pagar"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/dividas-pagar" ? "white" : "transparent",
                color: location.pathname === "/dividas-pagar" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Dívidas a Pagar" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/valores-a-receber"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/valores-a-receber" ? "white" : "transparent",
                color: location.pathname === "/valores-a-receber" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Valores a Receber" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/extrato-financeiro"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/extrato-financeiro" ? "white" : "transparent",
                color: location.pathname === "/extrato-financeiro" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Extrato Financeiro" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/relatorios"
              onClick={handleDrawerClose}
              sx={{
                bgcolor: location.pathname === "/relatorios" ? "white" : "transparent",
                color: location.pathname === "/relatorios" ? "green" : "white",
                borderRadius: "12px",
                mb: 1,
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Relatórios" />
            </ListItem>
          </List>

          {/* Divider */}
          <Box sx={{ flexGrow: 1 }} />
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

          {/* Links secundários */}
          <List sx={{ fontSize: "0.85rem" }}>
            <ListItem button component={Link} to="/ajuda" onClick={handleDrawerClose}>
              <ListItemText primary="Ajuda" />
            </ListItem>
            <ListItem button component={Link} to="/termos-uso" onClick={handleDrawerClose}>
              <ListItemText primary="Termos de Uso" />
            </ListItem>
            <ListItem button component={Link} to="/politica-privacidade" onClick={handleDrawerClose}>
              <ListItemText primary="Política de Privacidade" />
            </ListItem>
            <ListItem button component={Link} to="/educacao-financeira" onClick={handleDrawerClose}>
              <ListItemText primary="Educação Financeira" />
            </ListItem>
          </List>

          {/* Configurações e Sair */}
          <List>
            <ListItem
              button
              component={Link}
              to="/configuracoes"
              onClick={handleDrawerClose}
              sx={{
                borderRadius: "12px",
                mb: 1,
                bgcolor: location.pathname === "/configuracoes" ? "white" : "transparent",
                color: location.pathname === "/configuracoes" ? "green" : "white",
              }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Configurações" />
            </ListItem>
            <ListItem button onClick={handleLogout} sx={{ borderRadius: "12px" }}>
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Box>
      </Drawer>


    </AppBar>
  );
};

export default NavbarAppFinancas;
