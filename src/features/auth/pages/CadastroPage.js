import React from "react";
import AuthCard from "../components/AuthCard";

const CadastroPage = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Cadastrar usuário...");
    };

    return (


        <div
            className="auth-card-background"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-login-signup.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh', // <- faz ocupar toda a tela
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AuthCard
                title="Criar uma conta"
                buttonText="LOGIN"
                onSubmit={handleRegister}
            >
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirmar senha" required />
                <button type="submit" className="btn-submit">REGISTRAR</button>
            </AuthCard>
        </div>






    );
};

export default CadastroPage;
