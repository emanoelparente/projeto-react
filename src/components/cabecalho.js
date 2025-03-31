import React from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "../components/cabecalho.css"; // Importa o CSS

const NavbarFinancas = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className="cabecalho">
        {/* Logo à esquerda */}
        <Box>
          <img
            src="../images/logo-feasy-branco.svg"
            alt="logo"
            className="logo-esquerda"
          />
        </Box>

        {/* Título Central */}
        <Box textAlign="center">
          <img
            src="../images/logo-feasy-branco.svg"
            alt="logo"
            className="logo-meio"
          />
          <h6 className="logo-meio">Finanças Pessoais</h6>
        </Box>

        {/* Menu Perfil */}
        <Box>
          <IconButton onClick={handleMenu} className="perfil-icon">
            <AccountCircle />
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
            <MenuItem onClick={() => (window.location.href = "/logout")}>Sair</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarFinancas;
