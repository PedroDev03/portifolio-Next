"use client";
import "@/app/components/NavBarStyle.css";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [Open, setOpen] = useState<boolean>(false);
  const [OpenProj, setOpenProj] = useState<boolean>(false);


  const cliqueCont = () => {
    setOpen(!Open);
  };


    const cliqueProj = () => {
      setOpenProj(!OpenProj);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Verifica se o clique foi fora do menu e do botão
        const target = event.target as HTMLElement;
        if (!target.closest(".dropdown") && !target.closest(".Botao-Projetos")) {
          setOpen(false);
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
      <div className="dropdown">
        <button className="Botao-Projetos" onClick={cliqueProj}>
          <b>Projetos</b>
        </button>
        <button className="Botao-Contato" onClick={cliqueCont}>
          <b>Contato</b>
        </button>
               {OpenProj && (
               <div className="dropdown-menu">
                    <ul>
                    <li><a>Pokedex</a></li>
                  </ul>
                </div>
                      )}
      </div>
    </div>
  );
}