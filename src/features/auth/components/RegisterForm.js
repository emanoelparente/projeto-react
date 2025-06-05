import React from "react";
import { TextField, InputAdornment } from '@mui/material';
import { MailOutline, LockOutlined, PersonOutline } from '@mui/icons-material';

const Register = ({ nome, email, senha, setNome, setEmail, setSenha, handleSubmit, switchToLogin }) => (
    <>
        <h2 className="brand">Criar uma conta</h2>

        <div className="social-login">
            <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
            <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
        </div>

        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                sx={{
                    backgroundColor: 'white',
                    mt: 0.9,
                    mb: 1,
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52,
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px',
                        fontSize: '1rem',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#777',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonOutline sx={{ fontSize: 20, color: '#aaa' }} />
                        </InputAdornment>
                    ),
                }}
            />

            <TextField
                fullWidth
                variant="outlined"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                    backgroundColor: 'white',
                    mt: 0.9,
                    mb: 1,
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52,
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px',
                        fontSize: '1rem',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#777',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutline sx={{ fontSize: 20, color: '#aaa' }} />
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
                required
                sx={{
                    backgroundColor: 'white',
                    mt: 0.9,
                    mb: 1,
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52,
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px',
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

            <TextField
                fullWidth
                variant="outlined"
                placeholder="Confirmar senha"
                type="password"
                required
                sx={{
                    backgroundColor: 'white',
                    mt: 0.9,
                    mb: 1,
                    borderRadius: 1.5,
                    '& .MuiInputBase-root': {
                        height: 52,
                    },
                    '& .MuiInputBase-input': {
                        padding: '6px 10px',
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

            <button type="submit" className="btn-submit">REGISTRAR</button>
            <p className="mobile-only-switch">
                Já tem uma conta? <span onClick={switchToLogin}>Fazer login</span>
            </p>
        </form>
    </>
);

export default Register;
