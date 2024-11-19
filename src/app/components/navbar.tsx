"use client";
import "@/app/components/NavBarStyle.css";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [Open, setOpen] = useState<boolean>(false);
  const [OpenProj, setOpenProj] = useState<boolean>(false);





    const clique = () => {
      setOpen(!Open);
      setOpenProj(!OpenProj);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Verifica se o clique foi fora do menu e do botão
        const target = event.target as HTMLElement;
        if (!target.closest(".dropdown") && !target.closest(".Botao-Projetos")) {
          setOpen(false);
          setOpenProj(!OpenProj);
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
        <button className="Botao-Projetos" onClick={clique}>
          <b>Projetos</b>
        </button>
        <button className="Botao-Contato" onClick={clique}>
          <b>Contato</b>
        </button>
               {Open && (
               <div className="dropdown-menu">
                    <ul>
                    <li>Pokedex</li>
                  </ul>
                </div>
                      )}
      </div>
    </div>
  );
}