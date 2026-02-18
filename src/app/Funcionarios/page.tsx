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

export default function ListaFuncionarios() {
  // Dados fictícios para visualização
  const funcionarios = [
    { id: 1, nome: "pedroteste25", email: "pedroteste25@smarttruck.com" },
    { id: 2, nome: "admin", email: "admin@smarttruck.com" },
        { id: 3, nome: "maria", email: "maria@smarttruck.com" }
  ];

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
          {funcionarios.map((func) => (
            <HStack key={func.id} justify="space-between" align="center" w="full">
              
              {/* Informações do Usuário (Esquerda) */}
              <HStack gap={4}>
                <Box 
                  p={2} 
                  border="1px solid" 
                  borderColor="blue.500" 
                  borderRadius="md"
                  color="blue.500"
                >
                  <LuUser size={24} />
                </Box>
                
                <Stack gap={0}>
                  <Text fontWeight="bold" color="gray.800" fontSize="md">
                    {func.nome}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    {func.email}
                  </Text>
                </Stack>
              </HStack>

              {/* Ações (Direita): Editar e Desativar preservados e ajustados para cada linha */}
              <HStack gap={3}>
                <Button 
                  variant="ghost" 
                  size="xs" 
                  color="gray.600"
                  fontWeight="normal"
                  className="hover:text-blue-600"
                >
                  <LuPencil style={{ marginRight: '4px' }} />
                  editar
                </Button>

                <Button 
                  variant="outline" 
                  size="xs" 
                  borderColor="gray.300"
                  color="gray.700"
                  px={4}
                  className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                >
                  <LuBan style={{ marginRight: '6px' }} />
                  Desativar
                </Button>
              </HStack>
            </HStack>
          ))}
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