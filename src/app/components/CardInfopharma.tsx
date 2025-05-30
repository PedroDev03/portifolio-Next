import "./CardInfopharma.css";
import { Card, Text } from "@chakra-ui/react"
import logo from "../assets/logoinfopharma.png"
import Image from "next/image"



export default function Cardinfo() {
  
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
      className="logo"
      src={logo}
        alt="logo"
      />
      <Card.Body gap="2">
        <Card.Title style={{ fontSize: "30px" }}>Infopharma</Card.Title>
        <Card.Description style={{ fontSize: "18px" }}>
          Assistente de suporte técnico para o sistema InfoPharma, com o objetivo de auxiliar os usuários na utilização do sistema e resolver problemas técnicos.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
        <b>Assistente de Suporte Técnico</b>
        </Text>
      </Card.Body>
  
    </Card.Root>
)}