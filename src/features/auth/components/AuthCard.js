import React, { useState } from "react";

import "./AuthCard.css";

const AuthCard = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoginMode) {
            console.log("Logando usuário...");
        } else {
            console.log("Registrando usuário...");
        }
    };

    return (
        <div
            className="auth-page-background"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-login-signup.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="auth-container fixed-mode">
                {/* Login à esquerda */}
                <div className={`auth-side login-side ${isLoginMode ? "active" : "inactive"}`}>
                    {isLoginMode ? (
                        <>
                            <h1 className="brand">Faça login no feasy</h1>

                            {/* Seção de login social */}
                            <div className="social-login">
                                <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
                                <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
                            </div>

                            <p className="email-instruction">Ou use seu e-mail para se conectar</p>


                            <form onSubmit={handleSubmit}>
                                <input type="email" placeholder="E-mail" required />
                                <input type="password" placeholder="Senha" required />
                                <button type="submit" className="btn-submit">ENTRAR</button>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="conteudo-cadastro">
                                <img src="/images/logo-feasy-verde.svg" alt="LOGO FEASY" className="logomarca-login" />
                                <h2 style={{ color: "#3A3A3A" }}>Bem vindo de volta!</h2>
                                <p>Já tem uma conta? Faça login para entrar</p>
                                <button className="btn-toggle" onClick={() => setIsLoginMode(true)}>
                                    LOGIN
                                </button>
                            </div>
                        </>
                    )}
                </div>


                {/* Cadastro à direita */}
                <div className={`auth-side register-side ${!isLoginMode ? "active" : "inactive"}`}>
                    {!isLoginMode ? (
                        <>
                            <h2 className="brand">Criar uma conta</h2>

                            <div className="social-login">
                                <img src="/images/google-icon.svg" alt="Login com Google" className="social-icon" />
                                <img src="/images/facebook-icon.svg" alt="Login com Facebook" className="social-icon" />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Nome" required />
                                <input type="email" placeholder="E-mail" required />
                                <input type="password" placeholder="Senha" required />
                                <input type="password" placeholder="Confirmar senha" required />
                                <button type="submit" className="btn-submit">REGISTRAR</button>
                            </form>
                        </>
                    ) : (
                        <div className="conteudo-cadastro">
                            <img src="/images/logo-feasy-verde.svg" alt="LOGO FEASY" className="logomarca-login" />
                            <h2 style={{ color: "#3A3A3A" }}>Novo por aqui?</h2>
                            <p>Cadastre-se e comece a controlar sua vida financeira.</p>
                            <button className="btn-toggle" onClick={() => setIsLoginMode(false)}>
                                CRIAR UMA CONTA
                            </button>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
