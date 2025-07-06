import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarAppFinancas.css";

const NavbarAppFinancas = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const logoRef = useRef(null);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (logoRef.current) logoRef.current.blur();
  }, []);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
                ref={logoRef}
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
              display: { xs: "none", sm: "block" }, // esconde em telas muito pequenas
            }}
          >
            {/* "Label" estilo shrink */}
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

            <Box sx={{ fontSize: "0.9rem" }}>
              R$ 1.234,56
            </Box>
          </Box>

          {/* Ícone de perfil/menu */}
          <IconButton
            onClick={handleMenu}
            className="perfil-icon"
          >

            {isMobile ? (
              <MenuIcon/>
            ) : (
              <AccountCircle className="icone" />
            )}
          </IconButton>

          {/* Menu dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>Configurações</MenuItem>
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarAppFinancas;
