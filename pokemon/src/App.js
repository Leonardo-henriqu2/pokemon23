import React, {useEffect, useState} from 'react';
import './style.css'


function App() {
  const [pokemon, setPokemon] = useState([]);

 function loadAPI() {
    let url = 'https://pokeapi.co/api/v2/pokemon/totodile';
    fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setPokemon(res)
    })
    .catch(err => console.log(err));
  }

  useEffect(()=> {

    loadAPI();

},[]);
 
return (
    <div className='container'>
      <header>
        <strong>Pokemon 2023</strong>
      </header>
      <div classNome='form'>
        <form>
          <input placeholder="Pokemon"></input>
          <button>Pesquisar</button>
        </form>
      </div>

      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>Name: {pokemon.name}</div>
        <div>Nº {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}Kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>

  );
}
export default App;
