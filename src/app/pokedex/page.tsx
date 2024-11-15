"use client";

import { useState, useEffect, ChangeEvent } from "react";
import "@/app/page.css";
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

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (response.ok) {
        const jsonData: PokemonData = await response.json();
        setData(jsonData);
        console.log(response.status);
      } else {
        setData(null); // Reseta se não encontrar o Pokémon
        console.error("Pokémon não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    if (pokemonName) fetchData();
  }, [pokemonName]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setPokemonName(name.toLowerCase());
  };

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
  const verify = Data?.types?.[0]?.type?.name || Data?.types?.[1]?.type?.name || '';
  const habilidade = Data?.abilities?.[0]?.ability?.name || '';

  return (
    <div className="container">
      <div className="texto">Digite o nome do Pokémon desejado: </div>
      <div className="card" style={{
        backgroundColor:(saberTipo(verify) ) }}>
        <div className="header-card">
          <div className="input-area">
            <input type="text" onChange={handleInputChange} />
            <div className="tipo">Tipo: {verify ? Data?.types[0].type.name : "" || verify ? Data?.types[1].type.name : ''}</div>
          </div>

    
    
          <img
           alt={pokemonShiny ? "Shiny" : "Normal"}
           src={pokemonShiny ? imageshiny : actualImage}
           onClick={() => setPokemonShiny(!pokemonShiny)}
        />
       </div>

       <div className="card-info">
        {pokemonShiny && Data?.name ? <div className="aviso-shiny">shiny</div> : ''}
          <p>Nome: {Data?.name}</p>
          <p>altura: {Data?.height ? Data.height/10  + ' m' : ''}  </p>
          <p>peso: {Data?.weight ? Data.weight/10  + ' kg' : ''} </p>
          <p>habilidade: {habilidade ? Data?.abilities[0].ability.name : ''}</p>
          {/* Exibindo os tipos do Pokémon */}
        </div>
      </div>
    </div>
    
  );
}
