import "@/app/page.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Cardinfo from "./components/CardInfopharma";
import CardUnimed from "./components/CardUnimed";
import CardPokemon from "./components/CardPokemon"

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        {/* Descrição inicial */}
        <Box
          className="Box-desc"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 2,
            marginTop: 4, // 32px de margem no topo, mais suave
            minHeight: "40vh", // garante que fique no mínimo 40% da altura da viewport
          }}
        >
          <h2 className="MuiTypography-root MuiTypography-h2 OLA">Olá,</h2>

          <h2 className="h2-1">
            Me chamo
            <span className="MuiBox-root NOME">
              <b> Pedro Soares,</b>
            </span>
          </h2>

          <h2 className="Desc">
            Tenho 21 anos e atualmente estou cursando o 6º período pela Universidade Estadual de Goiás,
            <span className="MuiBox-root Dev"> Desenvolvedor Front-End</span> com foco em criar soluções eficientes e elegantes para aplicações web através das tecnologias mais atuais do mercado como: <br />
            ReactJS, NextJS, TypeScript, JavaScript, HTML e CSS.
            <br />
            <br />
            Resido na cidade de Anápolis - Goiás
          </h2>
        </Box>

        {/* Título de experiências */}
        <h2 className="MuiTypography-root MuiTypography-h2 XP" style={{ marginTop: "3rem" }}>
          Experiências
        </h2>

        {/* Cards lado a lado com espaçamento e responsividade */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "5rem",
            justifyContent: "start",
          }}
        >
          <Box sx={{ minWidth: 280, flexGrow: 1 }}>
            <Cardinfo />
          </Box>
          <Box sx={{ minWidth: 280, flexGrow: 1 }}>
            <CardUnimed />
          </Box>
        </Box>


     <h2 className="MuiTypography-root MuiTypography-h2 XP" style={{ marginTop: "3rem" }}>
          Projetos
        </h2>
              <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "5rem",
            justifyContent: "start",
          }}
        >
               <Box sx={{ minWidth: 280, flexGrow: 1 }}>
            <CardPokemon />
          </Box>
        </Box>
        
      </Container>
    </>
  );
}
