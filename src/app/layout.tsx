"use client";
import { useState, useEffect } from "react";
import NavBar from "@/app/components/navbar";
import Footer from "./components/footer";
import { Provider } from "@/components/ui/provider"; // Certifique-se de que o Provider esteja configurado

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Garantir que o código só rode no cliente
  useEffect(() => {
    setMounted(true); // Atualiza o estado após a montagem
  }, []);

  if (!mounted) {
    return null; // Retorna null ou um componente de fallback enquanto o cliente está sendo montado
  }

  return (
    <html lang="en"> {/* Ou use uma lógica condicional aqui para alternar entre 'dark' e 'light' */}
     
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfólio</title>

      </head>
      <body className="flex flex-col min-h-screen">

  
          <Provider>
          <NavBar />

          <main className="flex-grow">{children} </main>
          
          <Footer />
        </Provider>
       
      </body>


    </html>
  );
}
