"use client";
import { useState, useEffect } from "react";
// Apenas importe os componentes que você realmente vai usar
import { Box, Button, Card, CardBody, CardFooter, Center, Heading, Stack, Text } from "@chakra-ui/react";



interface Cidades {
    id: number;
    nome: string;
    microrregiao: {
        mesorregiao: {
            UF: {
                id: number;
                sigla: string;
                nome: string;
                regiao: {
                    id: number;
                    nome: string;
                };
            };
        };
    };

}




export default function CardCidade() {

    const [Data, setData] = useState<Cidades[]>([]);
    const [randomCity, setRandomCity] = useState<Cidades | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pharmacies, setPharmacies] = useState<Lugar[]>([]);

    useEffect(() => {


        const fetchData = async () => {

            try {
                const response = await fetch(
                    "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
                );

                if (response.ok) {
                    const jsonData: Cidades[] = await response.json();
                    setData(jsonData);
                }
                else {
                    setData([]);
                    console.log("nenhum dado");
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }

        }
        fetchData();
    }, []);

    const handleGetRandomCity = () => {
 
        if (Data.length > 0) {
            const randomIndex = Math.floor(Math.random() * Data.length);
            setRandomCity(Data[randomIndex]);
    
        }
    };


const LinkDrogMap = <a target="blank" href={`https://www.google.com/maps/search/Farmácias+${randomCity?.nome}+${randomCity?.microrregiao.mesorregiao.UF.sigla}`} style={{color: 'indigo', fontWeight: 'bold'}} ><u> Clique aqui</u></a>



 

    if (isLoading) {
        return <p>Carregando lista de cidades...</p>;
    }




    return (
        <>

                  
        {/* <ul>
            {Data?.slice(0, 10).map((cidade) =>
            <li key={cidade.id}>
                {cidade.nome} 
            </li>
            )}
        </ul> */}


<Box
  position="fixed"
  top="0"
  left="0"
  width="100%"
  height="100%"
  zIndex={-1} // fica atrás de tudo
>
  <img
    src="/background-login2.png"
    alt="Fundo"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</Box>

<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="80vh"
>
            <Card.Root
             maxW="sm" overflow="hidden" marginTop={0} shadowColor={"black"}
              boxShadow="xs" backgroundColor={"white"} color={"black"}              
             >
                <Card.Body gap="2">
                    <Card.Title style={{ textAlign: "center", fontWeight:'bolder' }}>Sorteador de cidades </Card.Title>

                    {randomCity && (
                        <div>
                            <h2 style={{ marginTop: '20px', fontSize:'15px'}}><b>Cidade Sorteda:</b></h2>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '15px'  }}>
                                {randomCity.nome} - {randomCity.microrregiao.mesorregiao.UF.sigla}
                            </p>
                            <p style={{ marginTop:'10px', fontSize:'20px' }}>Drogarias na cidade {randomCity.nome}<br></br> pelo Google maps: {LinkDrogMap}</p><br></br>
                          
                            <p></p>
                        </div>
                    )}
                        
            

                        
            

                </Card.Body>
                <Card.Footer gap="1" style={{ display: 'flex', justifyContent: 'center' }} >
                    <Button variant="solid" 
                    onClick={handleGetRandomCity}
                     style={{
                        fontSize:'15px', 
                        textAlign:'center', 
                        width:'210px'
                        }} 
                        backgroundColor={"Black"}
                         color={"white"}
                            _hover={{
                                 bg: "gray.300",
                                  color: "black"
                                }}
                         >
                            <b>Sortear uma cidade aleatória</b>
                         </Button>
              
                </Card.Footer>
            </Card.Root>
</Box>
        </>
    );

}