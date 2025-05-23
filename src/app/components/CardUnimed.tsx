import "./CardInfopharma.css";
import { Button, Card, Text } from "@chakra-ui/react"
import logo from "../assets/logo_fundo_transparente.png"
import Image from "next/image"



export default function CardUnimed() {
  
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image  className="logo"
      style={{ padding : "5px" , width:"300px", marginBottom:"50px", marginTop:"70px"}}
   
      src={logo}
        alt="logo"
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
)}