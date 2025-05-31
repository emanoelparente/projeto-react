import React from "react";

const Register = ({ nome, email, senha, setNome, setEmail, setSenha, handleSubmit, switchToLogin }) => (
    <>
        <h2 className="brand">Criar uma conta</h2>

        <div className="social-login">
            <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
            <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
        </div>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
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
            <input
                type="password"
                placeholder="Confirmar senha"
                required
            />
            <button type="submit" className="btn-submit">REGISTRAR</button>
            <p className="mobile-only-switch">Já tem uma conta? <span onClick={switchToLogin}>Fazer login</span></p>
        </form>
    </>
);

export default Register;
