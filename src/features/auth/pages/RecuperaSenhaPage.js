import React from "react";
import { Container, Box } from "@mui/material";
import RecuperaSenhaForm from "../../auth/components/RecuperaSenhaForm";

const RecuperaSenhaPage = () => {
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
                    <RecuperaSenhaForm />
                </Box>
            </Container>
        </div>
    );
};

export default RecuperaSenhaPage;
