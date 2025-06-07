import React from "react";
import { Container, Box } from "@mui/material";
import RedefinirSenhaForm from "../../auth/components/RedefinirSenhaForm";

const RedefinirSenhaPage = () => {
    return (
        <div className="auth-page-background"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-login-signup.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Container maxWidth="sm" >
                <Box mt={10}>
                    <RedefinirSenhaForm />
                </Box>
            </Container>
        </div>
    );
};

export default RedefinirSenhaPage;
