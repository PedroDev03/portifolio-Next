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
          <Box className="Box"
            sx={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "initial",
              alignItems: "start",
              // backgroundColor: "#f5f5f5", // exemplo de cor de fundo
              padding: 2,
              marginTop:10 // exemplo de padding
            }}
          >
          
            <div style={{ marginBottom: "16px" }}>
              
              <h2 className="MuiTypography-root MuiTypography-h2 OLA">Olá,</h2>
       
              <h2 className="h2-1">Me chamo
              <span className="MuiBox-root NOME"><b>Pedro Soares,</b></span>
              </h2>
              <br></br>
              <h2 className="Desc">Tenho 21 anos e atualmente estou cursando o 6º período pela Universidade Estadual de Goiás, <span className="MuiBox-root Dev">Desenvolvedor Front-End 
                </span> com foco em criar soluções eficientes e elegantes para aplicações web através das tecnologias mais atuais do mercado como: <br></br> ReactJS, NextJS, TypeScript, JavaScript, HTML e CSS.; 
              <br></br><br></br>
                 Resido na cidade de Anápolis - Goiás
              

              </h2>
         
            
              

              </div>


            {/* <button style={{ padding: "8px 16px", cursor: "pointer" }}>
              Clique aqui
            </button> */}
          </Box>


          {/* <CardMui className="exp"variant="outlined">
            <h2 class="MuiTypography-root MuiTypography-h2 OLA">Experiência</h2>
            <h2 className="h2-1">Estágio em Desenvolvimento Web</h2>
            <h2 className="Desc">Desenvolvimento de aplicativos web, utilizando ReactJS, NextJS, HTML, CSS, JavaScript, TypeScript, MySQL, Git, GitHub, entre outras tecnologias. </h2>
          </CardMui>
   

       */} 
       
       
       
       
       </Container>


    
    </>
  );
}
