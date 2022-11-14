

/*interface Stat{
    stat_name: string,
    stat_base: number
  };
  
  interface PokemonData{
    name: string,
    type: string,
    id: number,
    image: string,
    height: number,
    weight: number,
    
  };
  type POKEMON = PokemonData & Stat;
*/

interface POKEMON{
  name: string,
    type: string,
    id: number,
    image: string,
    height: number,
    weight: number,
    stat_name: string,
    stat_base: number
}
  
export default POKEMON; 