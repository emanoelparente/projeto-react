import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

import "./AuthCard.css";

const AuthCard = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState(""); // para o cadastro

    const { login } = useAuth(); // pega função do contexto

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLoginMode) {
            login(email, senha); // login simulado
        } else {
            console.log("Registrando (simulado):", { nome, email, senha });
            setIsLoginMode(true); // volta para tela de login após cadastro
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
                                <p className="email-instruction" style={{color: 'blue'}}>Esqueceu sua senha?</p>



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
