import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

import LoginForm from "./LoginForm";
import Register from "./RegisterForm";

import "./AuthCard.css";

const AuthCard = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoginMode) {
            login(email, senha);
        } else {
            console.log("Registrando (simulado):", { nome, email, senha });
            setIsLoginMode(true);
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
                <div className={`auth-side login-side ${isLoginMode ? "active" : "inactive"}`}>
                    {isLoginMode ? (
                        <LoginForm
                            email={email}
                            senha={senha}
                            setEmail={setEmail}
                            setSenha={setSenha}
                            handleSubmit={handleSubmit}
                            switchToRegister={() => setIsLoginMode(false)}
                        />
                    ) : (
                        <div className="conteudo-cadastro">
                            <img src="/images/logo-feasy-verde.svg" alt="LOGO FEASY" className="logomarca-login" />
                            <h2 style={{ color: "#3A3A3A" }}>Bem vindo de volta!</h2>
                            <p>Já tem uma conta? Faça login para entrar</p>
                            <button className="btn-toggle" onClick={() => setIsLoginMode(true)}>
                                LOGIN
                            </button>
                        </div>
                    )}
                </div>

                <div className={`auth-side register-side ${!isLoginMode ? "active" : "inactive"}`}>
                    {!isLoginMode ? (
                        <Register
                            nome={nome}
                            email={email}
                            senha={senha}
                            setNome={setNome}
                            setEmail={setEmail}
                            setSenha={setSenha}
                            handleSubmit={handleSubmit}
                            switchToLogin={() => setIsLoginMode(true)}
                        />
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
