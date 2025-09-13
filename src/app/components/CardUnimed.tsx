"use client";
import "./CardUnimed.css";
import { Card, Text } from "@chakra-ui/react"
import logo from "../assets/logo_fundo_transparente.png"
import Image from "next/image"
import logo_claro from "../assets/logo_unimed_claro.png"
import { useState, useEffect } from "react";


export default function CardUnimed() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(media.matches);

    // opcional: escuta mudanças de tema
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);
  return (
    <>


<Card.Root maxW="sm" overflow="hidden">
      <Image
      alt="logo"
      
      src={isDarkMode ? logo : logo_claro}
      width={300}
      height={150}
      style={{
        padding: isDarkMode ? '16px' : '10px',
        marginTop: isDarkMode ? '70px' : '-40px',
        marginBottom: isDarkMode ? '-30px' : '70px'
      }}
      

     
      
      />
      <Card.Body gap="2">
        <Card.Title style={{ fontSize: "30px" }}>Unimed Anápolis</Card.Title>
        <Card.Description style={{ fontSize: "18px" }}>
          atividades front-end utilizando a tecnologia react, suporte ao usuário com sistema interno e pequena parte de infraestrutura.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          <b>Estágiário de t.i</b>
        </Text>
      </Card.Body>
    </Card.Root>
 


    </>
)}
