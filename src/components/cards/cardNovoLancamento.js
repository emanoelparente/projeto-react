import React from "react";
import { Box, Card, CardHeader, CardContent } from "@mui/material";

const CardNovoLancamento = ({ onClick }) => {
  return (
    <Box
      id="cardLancamento"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        backgroundColor: "transparent",
        width: "100%",
        maxWidth: 300, // ajuste opcional
        margin: "0 auto",
      }}
    >
      <Card elevation={3} sx={{ backgroundColor: "transparent" }}>
        <CardHeader
          title="Novo lançamento"
          sx={{
            backgroundColor: "#5D8165",
            color: "white",
            textAlign: "center",
            padding: "5%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#C0D7C5",
            display: "flex",
            justifyContent: "center",
            padding: 0,
            border: "1px solid #5D8165",
            borderTop: "none",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <img
            src="../images/novo-lancamento.svg"
            alt="Novo lançamento"
            style={{ width: 80, height: 80 }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardNovoLancamento;
