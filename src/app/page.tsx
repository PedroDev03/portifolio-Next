"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Styles"./page.css";
import pokelogo from "../public/assets/pokelogo.png"; // Certifique-se de mover a imagem para a pasta `public`

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
  const [data, setData] = useState<PokemonData | null>(null);
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

  const imageshiny = data?.sprites?.front_shiny || pokelogo;
  const actualImage = data?.sprites?.front_default || pokelogo;
  const verify = data?.types?.[0]?.type?.name || data?.types?.[1]?.type?.name || '';
  const habilidade = data?.abilities?.[0]?.ability?.name || '';

  return (
    <div className="container">
      <div className="texto">Digite o nome do Pokémon desejado: </div>
      <div class="card" style={{
        backgroundColor:(saberTipo(verify) ) }}>
        <div className="header-card">
          <div className="input-area">
            <input type="text" onChange={handleInputChange} />
            <div className="tipo">Tipo: {verify ? data.types[0].type.name : '' || verify ? data.types[1].type.name : ''}</div>
          </div>

    
    
          <img
           alt={pokemonshiny ? "Shiny" : "Normal"}
           src={pokemonshiny ? Imageshiny : actualImage}
           onClick={() => setPokemonshiny(!pokemonshiny)}
        />
       </div>

       <div className="card-info">
        {pokemonshiny && data.name ? <div className="aviso-shiny">shiny</div> : ''}
          <p>Nome: {data.name}</p>
          <p>altura: {data.height ? data.height/10  + ' m' : ''}  </p>
          <p>peso: {data.weight ? data.weight/10  + ' kg' : ''} </p>
          <p>habilidade: {habilidade ? data.abilities[0].ability.name : ''}</p>
          {/* Exibindo os tipos do Pokémon */}
        </div>
      </div>
    </div>
    
  );
}
