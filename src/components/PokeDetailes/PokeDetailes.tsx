import POKEMON from '../../constants/Interfaces';
import './PokeDetailes.css'

const Pokepop = function(props:{
    name :string,
    type: string,
    id: number,
    image: string,
    weight:number,height:number,
    stat_name:string,stat_base:number}) {

    //const PokeDetailes=function(props :POKEMON){
    //console.log(poke);
  return (
    <div className="desc">
      <p>
        <b>Height</b> is <b>{props.height * 10} cm.</b>
      </p>
  
      <p>
        <b>Weight</b> is <b>{props.weight * 0.1} kg</b>
      </p>
  
      <h3>Stat</h3>
  
      <p>
        <b>
          {props.stat_name} : {props.stat_base}
        </b>
      </p>
  
     
    </div>
    )
  }
  
  export default Pokepop;