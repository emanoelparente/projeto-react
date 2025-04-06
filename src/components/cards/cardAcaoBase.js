// components/cards/CardAcaoBase.js
import React from "react";
import { Box, Card, CardHeader, CardContent } from "@mui/material";

const CardAcaoBase = ({
    titulo = "INSERIR TÍTULO",
    corHeader = "#495057",
    corBody = "#adb5bd",
    iconeSrc,
    onClick,
}) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: "pointer",
                backgroundColor: "transparent",
                width: "100%",
                maxWidth: 275,
                margin: "0 auto",
            }}
        >
            <Card elevation={3} sx={{ backgroundColor: "transparent" }}>
                <CardHeader
                    title={titulo.toUpperCase()}
                    titleTypographyProps={{
                        fontSize: "0.9rem",
                    }}
                    sx={{
                        backgroundColor: corHeader,
                        color: "white",
                        textAlign: "center",
                        padding: "3%",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                    }}
                />
                <CardContent
                    sx={{
                        backgroundColor: corBody,
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "0px",
                        paddingTop: "0px",
                        border: `1px solid ${corHeader}`,
                        borderTop: "none",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                    }}
                >
                    {iconeSrc ? (
                        <img
                            src={iconeSrc}
                            alt={titulo}
                            style={{ width: 60, height: 60, marginTop: "20px", marginBottom: "-10px"}}
                        />
                    ) : (
                        // Placeholder genérico
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                backgroundColor: "#ccc",
                                borderRadius: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                color: "#666",
                            }}
                        >
                            ÍCONE
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardAcaoBase;
