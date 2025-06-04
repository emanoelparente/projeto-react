import React from "react";
import { Link } from 'react-router-dom';
import { TextField, InputAdornment } from '@mui/material';
import { MailOutline, LockOutlined } from '@mui/icons-material';

const LoginForm = ({ email, senha, setEmail, setSenha, handleSubmit, switchToRegister }) => (
    <>
        <h1 className="brand">Faça login no feasy</h1>

        <div className="social-login">
            <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
            <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
        </div>

        <p className="email-instruction">Ou use seu e-mail para se conectar</p>

        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="E-mail"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52, // altura total do campo
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px', // reduzido o padding vertical
                        fontSize: '1rem',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#777',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutline sx={{ fontSize: 20, color: '#aaa' }} /> {/* Ícone menor e mais claro */}
                        </InputAdornment>
                    ),
                }}
            />

            <TextField
                fullWidth
                variant="outlined"
                placeholder="Senha"

                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                sx={{
                    backgroundColor: 'white',
                    mt: 0.9, // margem superior
                    mb: 1.5, // margem inferior
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52, // altura total do campo
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px', // reduzido o padding vertical
                        fontSize: '1rem',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#777',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlined sx={{ fontSize: 20, color: '#aaa' }} />
                        </InputAdornment>
                    ),
                }}
            />


            <div className="forgot-password-link">
                <Link to="/recupera-senha">Esqueceu sua senha?</Link>
            </div>

            <button type="submit" className="btn-submit">ENTRAR</button>

            <p className="mobile-only-switch">
                Ainda não tem conta? <span onClick={switchToRegister}>Criar conta</span>
            </p>
        </form>
    </>
);

export default LoginForm;
