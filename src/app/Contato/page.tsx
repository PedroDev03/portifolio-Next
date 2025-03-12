import { Tabs } from "@chakra-ui/react"
import {  LuFolder, LuUser } from "react-icons/lu"
import "@/app/Contato/page.css"
import Link from "next/link"

export default function Contato(){

      return (
        <Tabs.Root defaultValue="members" className="container">
          <Tabs.List className="contatos">
            <Tabs.Trigger value="linkedin" className="linkedin">
              <LuUser />
              LinkedIn
            </Tabs.Trigger>
            <Tabs.Trigger value="email" className="e-mail">
                 <LuUser />  
              e-mail
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks" className="user">
                <LuUser />  
                Recado!
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="linkedin">
            Clique para ser redirecionado: 
             <br></br>
        
             <button className="btn-LinkedIn">
            <Link href="https://www.linkedin.com/in/pedro-soares-dev/"
            > 
             LinkedIn
            </Link>
            </button>
            </Tabs.Content>
          <Tabs.Content value="email">
          Email : pedroaugustor03@gmail.com
          <br></br>
          Clique para ser redirecionado: 
          <br></br>
          <button className="btn-email">
            <Link href="mailto:pedroaugustor03@email.com?subject=Contato%20via%20Site%20Portifolio&body=Olá,%20Pedro!"
            >
             E-mail
            </Link>
            </button>
            </Tabs.Content>
          <Tabs.Content value="tasks">
            obrigado por acessar!!
          </Tabs.Content>
        </Tabs.Root>
      );

    }
    
