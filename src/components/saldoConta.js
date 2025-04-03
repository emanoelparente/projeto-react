import React from "react";
import { Box, Typography } from "@mui/material";

const SaldoAtual = ({ saldo }) => {
    return (
        <Box
        sx={{
            backgroundColor: "#d4a373",
            marginTop: "5%",
          }}>
        

            {/* Label */}
            <Box sx={{ backgroundColor: "#ffc8dd", padding: "8px 0" }}>
                <Typography variant="h6" color="textPrimary">
                    Saldo atual
                </Typography>
            </Box>

            {/* Saldo */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#a2d2ff",
                    padding: "8px 0"
                }}
            >

                <Typography variant="h5" color="textPrimary">R$</Typography>
                <Typography variant="h5" color="textPrimary" textAlign="right">
                    {saldo}
                </Typography>
            </Box>
        </Box>
    );
};

export default SaldoAtual;
