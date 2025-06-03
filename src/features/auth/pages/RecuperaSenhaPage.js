import React from "react";
import { Container, Box } from "@mui/material";
import RecuperaSenhaForm from "../../auth/components/RecuperaSenhaForm";

const RecuperaSenhaPage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <RecuperaSenhaForm />
      </Box>
    </Container>
  );
};

export default RecuperaSenhaPage;
