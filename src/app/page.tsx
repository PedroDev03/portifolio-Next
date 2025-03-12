import "@/app/page.css";
import Card from "@/app/components/Card";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>


        <CssBaseline />
        <Container fixed>
          <Box className="Box"
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "initial",
              alignItems: "start",
              backgroundColor: "#f5f5f5", // exemplo de cor de fundo
              padding: 2,
              marginTop:10 // exemplo de padding
            }}
          >
          
            <div style={{ marginBottom: "16px" }}>
              
              <h2 class="MuiTypography-root MuiTypography-h2 OLA">Olá,</h2>
       
              <h2 className="h2-1">Me chamo
              <span class="MuiBox-root NOME"><b>Pedro Soares,</b></span>
              </h2>
              <br></br>
              <h2 className="Desc">Tenho 20 anos e atualmente estou cursando o 6º período pela Universidade Estadual de Goiás, <span class="MuiBox-root Dev">Desenvolvedor Front-End </span> com foco em criar soluções eficientes e elegantes para applicações web; 
              <br></br>
                 Resido na cidade de Anápolis - Goiás
              

              </h2>
         
            
              

              </div>


            {/* <button style={{ padding: "8px 16px", cursor: "pointer" }}>
              Clique aqui
            </button> */}
          </Box>
        </Container>

      {/* <Card /> 
      */}
    </>
  );
}
