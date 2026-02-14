import "@/app/page.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";






export default function Home() {
  


  return (
    <>
      <CssBaseline />
      <Container fixed>
        {/* Descrição inicial */}
        <Box
          className="Box-desc"
          sx={{
            outline:"black",
            
            outlineColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 2,
            marginTop: 4, // 32px de margem no topo, mais suave
            minHeight: "40vh", // garante que fique no mínimo 40% da altura da viewport
          }}
        >

            <span className="MuiBox-root NOME">
              <b> Projeto Sorteador de Cidades</b>
            </span>
        

          <h2 className="Desc">
            Projeto com objetivo inicial de sortear uma cidade aleatória do Brasil, para melhorar o raio de repertório de cidades,
             para iniciar uma conversa, visando oferecer o produto. 
            <br />
            visando a
          </h2>
        </Box>

        {/* Título de experiências */}
    

        {/* Cards lado a lado com espaçamento e responsividade */}

        
      </Container>
    </>
  );
}
