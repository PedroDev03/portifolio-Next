"use client";
import {
  Button,
  Box,
  Heading,
  Stack,
  HStack,
  Text,
  Separator,
} from "@chakra-ui/react"
import { LuUser, LuUserPlus, LuPencil, LuBan } from "react-icons/lu"
import Link from 'next/link'
import { useState, useEffect } from "react";
import { NextResponse } from 'next/server';


interface Funcionario{
  id: number;
  nome: String;
  setor: number;
  funcao: number;
}

export default function ListaFuncionarios() {
  // Dados fictícios para visualização
const [Data,setData] = useState<Funcionario | null>(null);

useEffect(() =>{
const fetchdata = async() => {
  try{
    const response = await fetch('/app/API/funcionario/route')
    if(response.ok){
     
      const jsonData: Funcionario = await response.json();
      setData(jsonData);
    }
  }
  catch(error){
    console.error("Erro ao buscar dados:", error);
  }
}},[])
  
  return (
    <div className="flex justify-center items-center  p-4">
      
      <Box 
        bg="white" 
        w="full" 
        maxW="750px" 
        borderRadius="md" 
        boxShadow="2xl" 
        p={8}
      >
        {/* Cabeçalho: Título e Botão lado a lado mantidos conforme sua estrutura */}
        <HStack justify="space-between" align="center" mb={6}>
          <Heading size="md" color="gray.800" fontWeight="bold">
            lista de usuarios
          </Heading>
          
        <Link href="/Funcionarios/Cadastro">
          <Button 
          as="span"
            variant="outline" 
            size="sm" 
            borderColor="gray.300"
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            <LuUserPlus style={{ marginRight: '8px' }} />
            Novo Funcionário
          </Button>
          </Link>
        </HStack>

        <Separator mb={6} />

        {/* Lista de Funcionários */}
      <Stack gap={8}>
          {/* O MAP CORRIGIDO */}
          {Data && Data.length > 0 ? (
            Data.map((func: Funcionario) => (
              <HStack key={func.id} justify="space-between" align="center" w="full">
                
                <HStack gap={4}>
                  <Box p={2} border="1px solid" borderColor="blue.500" borderRadius="md" color="blue.500">
                    <LuUser size={24} />
                  </Box>
                  
                  <Stack gap={0}>
                    <Text fontWeight="bold" color="gray.800" fontSize="md">
                      {func.nome}
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      {/* Note que aqui usamos setor ou funcao conforme sua interface */}
                      {func.funcao} | Setor: {func.setor}
                    </Text>
                  </Stack>
                </HStack>

                <HStack gap={3}>
                  <Button variant="ghost" size="xs" color="gray.600" className="hover:text-blue-600">
                    <LuPencil style={{ marginRight: '4px' }} />
                    editar
                  </Button>

                  <Button 
                    variant="outline" 
                    size="xs" 
                    borderColor="gray.300" 
                    color="gray.700" 
                    className="hover:bg-red-50 hover:text-red-600"
                  >
                    <LuBan style={{ marginRight: '6px' }} />
                    Desativar
                  </Button>
                </HStack>
              </HStack>
            ))
          ) : (
            <Text color="gray.500" textAlign="center">Nenhum funcionário encontrado.</Text>
          )}
        </Stack>
        <Separator mt={10} mb={4} />

        {/* Paginação mantida conforme seu código */}
        <HStack justify="center" gap={2}>
          <Button size="xs" variant="solid" bg="gray.100" color="black" px={3}>1</Button>
          <Button size="xs" variant="outline" px={3}>2</Button>
          <Button size="xs" variant="outline" px={3}>3</Button>
          <Text color="gray.400" fontSize="xs">...</Text>
        </HStack>
      </Box>
    </div>
  )
}