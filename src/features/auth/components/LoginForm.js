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
        sx={{ backgroundColor: 'white', borderRadius: 1.5 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline color="action" />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Senha"
        margin="normal"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        sx={{ backgroundColor: 'white', borderRadius: 1.5 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlined color="action" />
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
