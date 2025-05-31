import React from "react";

const LoginForm = ({ email, senha, setEmail, setSenha, handleSubmit, switchToRegister }) => (
    <>
        <h1 className="brand">Faça login no feasy</h1>

        <div className="social-login">
            <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
            <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
        </div>

        <p className="email-instruction">Ou use seu e-mail para se conectar</p>

        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <p className="email-instruction" style={{ color: '#163f23', cursor: 'pointer' }}>Esqueceu sua senha?</p>

            <button type="submit" className="btn-submit">ENTRAR</button>
            <p className="mobile-only-switch">
                Ainda não tem conta? <span onClick={switchToRegister}>Criar conta</span>
            </p>
        </form>
    </>
);

export default LoginForm;
