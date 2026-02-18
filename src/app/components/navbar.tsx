"use client";
import "@/app/components/NavBarStyle.css";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import Logo from "@/app/assets/icon2.png";


export default function NavBar() {

  const [OpenProj, setOpenProj] = useState<boolean>(false);



    const cliqueProj = () => {
      setOpenProj(!OpenProj);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Verifica se o clique foi fora do menu e do botão
        const target = event.target as HTMLElement;
        if (!target.closest(".Botao-Projetos") && !target.closest(".dropdown-menu")) {
       
          setOpenProj(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);


  return (
    <div className="Navbar">
      <a className="home-icon" href="/">
         <Image src={Logo} alt="Botão de imagem" width="52" />
       </a>
      <div className="dropdown">
        <button className="Botao-Projetos" onClick={cliqueProj}>
          <b>Projetos</b>
        </button>
        
        <Link href="/Contato">
              <button className="Botao-Contato">
               <b>Contato</b>
            </button>
            </Link>

               {OpenProj && (
                
               <div className="dropdown-menu">
                  <ul>
                  <Link href="/pokedex">
                    <li>
                    <b>Pokedex</b>
                    </li> 
                    </Link>
                    <Link href="/Funcionarios">
                    <li>
                    <b>Funcionarios</b>
                    </li> 
                    </Link>
                    <Link href="/Maps">
                    <li>
                    <b>Sorteador</b>
                    </li> 
                    </Link>
                  </ul>                 
                </div>
            
                      )}
       
      </div>
      
    </div>
  );
}