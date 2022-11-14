import './pokeCard.css'
import { Pokepop } from '../index'
import { useState } from "react";
import POKEMON from '../../constants/Interfaces';




const PokeCard = function (props: { pokeData: POKEMON, key: number }) {
  const style = `thumb-container ${props.pokeData.type}`;
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={style}>
      <div className="number">
        <small>#0{props.pokeData.id}</small>
      </div>
      <img src={props.pokeData.image} alt={props.pokeData.name} />
      <div className="detail-wrapper">
        <h3>{props.pokeData.name}</h3>
        <small>Type : {props.pokeData.type}</small>
        <button className="pokeinfo"
          onClick={() => setShow(!show)}>
          {show === true ? "Know less..." : "Know more..."}
        </button>
        {show === true ? (
          <Pokepop
            name={props.pokeData.name}
            type={props.pokeData.type}
            id={props.pokeData.id }
            image={ props.pokeData.image}
            height={props.pokeData.height}
            weight={props.pokeData.weight}
            stat_name={props.pokeData.stat_name}
            stat_base={props.pokeData.stat_base}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PokeCard;