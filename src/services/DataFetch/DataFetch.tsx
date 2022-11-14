import CONSTS from '../../constants';
import POKEMON from '../../constants/Interfaces';
import React, { useEffect, useState, useRef} from "react";




  function DataFetch() : POKEMON[] {
    interface PokemonList{
        name: string, url:string
      };
      
      const [allPokemons, setAllPokemons] = useState<POKEMON[]>([]);
      const effectrun =useRef(0);
    
    
      const getAllPokemons = async (url:string) => {
        const res = await fetch(url)
        const data = await res.json()
     
     
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
              setAllPokemons( currentList => [...currentList, currentPoke])
            })
           }
           catch (error){
             console.log("error", error);
           }
        };
        //console.log(data);
        createPokemonObject(data.results)
       //return allPokemons;
      };

      useEffect(( )=> {
        if(effectrun.current === 0)
           getAllPokemons(CONSTS.url)
        effectrun.current = effectrun.current + 1;
      }, []);

      return allPokemons;
  }

  export default DataFetch; 