import './home.css'
import React, { useEffect, useState, useRef} from "react";
import{PokeCard} from '../../components/index'
import CONSTS from '../../constants/index';
import POKEMON from '../../constants/Interfaces';

//import DataFetch from '../../services/index';


function Home() {

  interface PokemonList{
    name: string, url:string
  };
  
  const [allPokemons, setAllPokemons] = useState<POKEMON[]>([]);
  const [loadMore, setLoadMore] = useState<string>("");
  const effectrun =useRef(0);


  const getAllPokemons = async (url:string) => {
    const res = await fetch(url)
    const data = await res.json()
 
    if(data.next !== ""){
      setLoadMore(data.next);
     }
     else setLoadMore("");
 
    async function createPokemonObject(results:Array<PokemonList>)  {
      try{
        results.forEach( async pokemon => {
          const url = CONSTS.url+'/'+pokemon.name;
          const res = await fetch(url)
          let data =  await res.json()
          let currentPoke : POKEMON =  {name :data?.name, type:data?.types[0].type.name, 
          id: data?.id,
          image: data?.sprites.other.dream_world.front_default,
          height: data?.height,
          weight: data?.weight,
          stat_name: data?.stats[0].stat.name,
          stat_base: data?.stats[0].base_stat}
          //console.log(currentPoke);
          setAllPokemons( currentList => [...currentList, currentPoke])
          //await allPokemons.sort((a, b) => a.id - b.id)
        })
       }
       catch (error){
         console.log("error", error);
       }
    };
    //console.log(data);
    createPokemonObject(data.results)
   
  };
  

useEffect(( )=> {
  if(effectrun.current === 0)
     getAllPokemons(CONSTS.url)
  effectrun.current = effectrun.current + 1;
}, []);

//console.log(allPokemons);
    return (
      <div className="app-container">
      
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons && allPokemons.map((pokemon) => (
            
            <PokeCard
             key={pokemon.id}
             pokeData = {pokemon}
            />
            
          ))}
        </div>
        <button className="load-more" 
          onClick={() => getAllPokemons(loadMore)}>
          More Pokemons
        </button>
      </div>
    </div>
  );
  }
  
  export default Home;