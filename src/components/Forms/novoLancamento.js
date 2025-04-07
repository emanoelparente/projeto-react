import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useModal } from "../../context/modalContext";

const NovoLancamento = () => {
  const { modalAberto, fecharModal } = useModal();

  return (
    <Modal open={modalAberto} onClose={fecharModal}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        width: 500,
        maxWidth: '90%',
      }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Novo Lançamento
        </Typography>
        {/* seu formulário aqui */}
      </Box>
    </Modal>
  );
};

export default NovoLancamento;
