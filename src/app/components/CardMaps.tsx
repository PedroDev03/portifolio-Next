"use client";
import { Badge, Box, Button, Card, HStack } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../assets/logo_maps.jpg"
import Link from 'next/link'
import Modo from "@/app/Funcoes/ModoNavegador";


export default function CardMaps() {
  const isDarkMode = Modo();
    return (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
       

    <Image
      objectFit="cover"
      width={220}
      src={logo}
      alt="Pokelogo"       
    />
  

    <Box>
      <Card.Body>
        <Card.Title mb="2">Sorteador de cidades</Card.Title>
        <Card.Description fontSize={16}>
          Projeto realizado em Next.js, utilizando chakra.ui como biblioteca, consumindo os dados necessários da API do IBGE para os dados das cidades.
        </Card.Description>
        <HStack mt="4">
          <Badge>IBGE</Badge>
          <Badge>API</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Link href="/Maps">
        <Button  
        color={isDarkMode ? "black" : "White"}
        bg={isDarkMode ? "White" : "Black"}
        padding={5}
        _hover={{ bg: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black"}}
       ><b>Ir para projeto</b></Button>
       </Link>
       <Link href="/ReadmeMaps">
           <Button 
            color={isDarkMode ? "black" : "White"} 
           _hover={{ bg: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black"}}
            bg={isDarkMode ? "White" : "Black"}
            marginLeft={5}
            fontSize={15}
            padding={1}
           ><b>Ver ReadMe</b></Button>
      </Link>
      </Card.Footer>
    </Box>
  </Card.Root>
)

}