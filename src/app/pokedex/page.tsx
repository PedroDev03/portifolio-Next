"use client";
import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";
import "@/app/pokedex/page.css";
import pokelogo from "@/app/assets/pokelogo.png";

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}

export default function Home() {
  const [Data, setData] = useState<PokemonData | null>(null);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonShiny, setPokemonShiny] = useState<boolean>(false);


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setPokemonName(name.toLowerCase());
  };

  useEffect(() => {
    
  if (!pokemonName) {
    setData(null); // Reseta os dados quando o input estiver vazio
    return; // Sai da função antes de chamar a API
  }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
  
        if (response.ok) {
          const jsonData: PokemonData = await response.json();
          setData(jsonData);
        } else {
          setData(null); // Reseta se não encontrar o Pokémon
          console.error("Pokémon não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
  
    // Faz o fetch somente se houver um nome de Pokémon
    if (pokemonName) {
      const debounceTimeout = setTimeout(fetchData, 500); // 500ms de debounce
      return () => clearTimeout(debounceTimeout);
    }
  }, [pokemonName]);
  
  

 

  const typeColors: { [key: string]: string } = {
    fire: "orangered",
    water: "dodgerblue",
    grass: "green",
    flying: "gray",
    ice: "lightskyblue",
    fairy: "lightpink",
    dark: "darkslateblue",
    poison: "purple",
    ground: "brown",
    psychic: "rgb(228, 177, 185)",
    bug: "lightgreen",
    ghost: "darkorchid",
    steel: "darkgrey",
    dragon: "coral",
    rock: "darkslategrey",
    electric: "gold",
    fighting: "goldenrod",
  };

  const saberTipo = (verify: string) => {
    return typeColors[verify] || "white";
  };

  const imageshiny = Data?.sprites?.front_shiny || pokelogo;
  const actualImage = Data?.sprites?.front_default || pokelogo;
  const verify = Data?.types?.[0]?.type?.name || Data?.types?.[1]?.type?.name || "";
  const habilidade = Data?.abilities?.[0]?.ability?.name || "";
   


  // Retorno do componente
  return (
    <div className="container">

      <div className="texto">Digite o nome do Pokémon desejado: </div>
      <div
        className="card"
        style={{
          backgroundColor: saberTipo(verify),
        }}
      >

       {/*  cabeçalho do card*/}

        <div className="header-card">
          <div className="input">
            <input className="input-area" type="text"
             placeholder="    digite aqui" 
             onChange={handleInputChange}
             style={{ 
              padding: "2px", 
              paddingLeft: "8px",
             }} 
             />


           {/*  tipo pokemon */}

            <div className="tipo">
              Tipo:{null}
              {verify
                ? Data?.types[0]?.type.name ||
                 Data?.types[1]?.type.name
                : ""}
            </div>
            

            </div>

        {/*   botao shiny */}

            {actualImage == pokelogo ? ("") : (
              <button className="btn-shiny"
               onClick={() => setPokemonShiny(!pokemonShiny)}>
                Shiny
               </button>
            )}


          {/*   imagem card */}


          <Image className="card-image"
            alt={pokemonShiny ? "Shiny" : "Normal"}
            src={pokemonShiny ? imageshiny : actualImage}
            width={250}
            height={250}
            onClick={() => setPokemonShiny(!pokemonShiny)}
          />
          
        </div>


       {/*   informações do card */}

        <div className="card-info">
          {pokemonShiny && Data?.name ? (
          <h1 className="aviso-shiny">shiny</h1>
          ) : ("")}
          <p>Nome: {Data?.name}</p>
          <p>altura: {Data?.height ? Data.height / 10 + " m" : ""} </p>
          <p>peso: {Data?.weight ? Data.weight / 10 + " kg" : ""} </p>
          <p>
            habilidade: {habilidade ? Data?.abilities[0].ability.name : ""}
          </p>
        </div>


      </div>
    </div>
  );
}
