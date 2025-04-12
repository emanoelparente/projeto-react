import React from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "../components/cabecalho.css"; // Importa o CSS
import { Link } from "react-router-dom";


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
                    <Link to="/">
                        <img
                            src="../images/logo-feasy-branco.svg"
                            alt="logo"
                            className="logo-esquerda"
                            style={{ cursor: "pointer" }} // opcional, só pra indicar que é clicável
                        />
                    </Link>
                </Box>


                {/* Título Central */}
                <Box textAlign="center">
                    <img
                        src="../images/logo-feasy-branco.svg"
                        alt="logo"
                        className="logo-meio"
                    />
                    <h1>Finanças pessoais</h1>
                </Box>

                {/* Menu Perfil */}
                <Box>
                    <IconButton onClick={handleMenu} className="perfil-icon">
                        <AccountCircle sx={{ fontSize: 40, color: "white" }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}>
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
