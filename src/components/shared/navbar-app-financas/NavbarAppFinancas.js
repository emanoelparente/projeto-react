// NavbarFinancas.js
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
import { Link, useLocation } from "react-router-dom";
import "./NavbarAppFinancas.css";


const NavbarAppFinancas = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const logoRef = useRef(null);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (logoRef.current) logoRef.current.blur();
  }, []);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const titulosPorRota = {
    "/": "Financas pessoais",
    "/extrato-financeiro": "Extrato financeiro",
    "/dividas-pagar": "Dívidas a pagar",
    "/valores-a-receber": "Valores a receber",
    "/relatorios": "Relatórios Financeiros",
    "/orcamento-mensal": "Orçamento mensal",
  };

  const titulo = titulosPorRota[location.pathname] || "";
  const isHome = location.pathname === "/";

  return (
    <AppBar position="static">
      <Toolbar className="header">
        {/* Lado esquerdo */}
        <Box className="left-box">
          {isHome ? (
            <Link to="/">
              <img
                ref={logoRef}
                src="../images/logo-feasy-branco.svg"
                alt="logo"
                className="logo-esquerda"
              />
            </Link>
          ) : (
            <Link to="/">
              <HomeIcon className="home-icon" />
            </Link>
          )}
        </Box>

        {/* Título central */}
        <Box className="center-box">
          <h1 className="titulo-central-texto">{titulo}</h1>
        </Box>

        {/* Lado direito - menu */}
        <Box className="right-box">
          <IconButton onClick={handleMenu} className="perfil-icon">
            {isMobile ? (
              <MenuIcon className="icone" />
            ) : (
              <AccountCircle className="icone" />
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>Configurações</MenuItem>
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={() => (window.location.href = "/logout")}>
              Sair
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarAppFinancas;






/**import "../components/header.css"; */