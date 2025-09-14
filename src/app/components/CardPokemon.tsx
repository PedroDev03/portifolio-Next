"use client";
import { Badge, Box, Button, Card, HStack } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../assets/pokelogo.png"
import Link from 'next/link'
import Modo from "@/app/Funcoes/ModoNavegador";


export default function Cardpokemon() {

  const isDarkMode = Modo();
    return (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
       

    <Image
      objectFit="cover"
      width={650}
      src={logo}
      alt="Pokelogo"       
    />
  

    <Box>
      <Card.Body>
        <Card.Title mb="2">Pokedéx</Card.Title>
        <Card.Description fontSize={16}>
          Projeto realizado em Next.js, utilizando chakra.ui como biblioteca, consumindo os dados necessários da API PokeApi.
        </Card.Description>
        <HStack mt="4">
          <Badge>Pokemon</Badge>
          <Badge>API</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Link href="/pokedex">
        <Button  
        color={isDarkMode ? "black" : "White"}
        bg={isDarkMode ? "White" : "Black"} 
        padding={5}
        _hover={{ bg: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black"}}
       ><b>Ir para projeto</b></Button>
        </Link>
      </Card.Footer>
    </Box>
  </Card.Root>
)

}