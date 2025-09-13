import { Tabs } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import "@/app/Contato/page.css";
import Link from "next/link";

export default function Contato() {
  return (
    <Tabs.Root defaultValue="members" className="center-wrapper">
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

  <Tabs.Content value="linkedin" className="TabsContent">
    Clique para ser redirecionado:
    <Link
      href="https://www.linkedin.com/in/pedro-soares-dev/"
      className="btn-LinkedIn"
    >
      LinkedIn
    </Link>
  </Tabs.Content>

  <Tabs.Content value="email" className="TabsContent">
    Email: pedroaugustor03@gmail.com
    <br />
    Clique para ser redirecionado:
    <Link
      href="mailto:pedroaugustor03@email.com?subject=Contato%20via%20Site%20Portifolio&body=Olá,%20Pedro!"
      className="btn-LinkedIn"
    >
      E-mail
    </Link>
  </Tabs.Content>

  <Tabs.Content value="tasks" className="TabsContent">
    obrigado por acessar!!
  </Tabs.Content>
</Tabs.Root>
  );
}
