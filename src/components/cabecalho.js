import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
    <AppBar position="static" sx={{ backgroundColor: "#77af51" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo à esquerda */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo-dinheirinho-letra-branca.png"
            alt="logo"
            style={{ height: 50 }}
          />
        </Box>

        {/* Título Central */}
        <Box textAlign="center">
          <img
            src="/images/logo-dinheirinho-letra-branca.png"
            alt="logo"
            style={{ height: 40 }}
          />
          <Typography variant="h6" sx={{ color: "white" }}>
            Finanças Pessoais
          </Typography>
        </Box>

        {/* Menu Perfil */}
        <Box>
          <IconButton onClick={handleMenu} color="inherit">
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
