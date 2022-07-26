import React, {useState, useEffect} from "react";
import axios from "axios";
import { Block, SerchBlock, ListBlock, Search, Pod, Image, Name, Loading } from './styles'

const SearchComponent = () => {

    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState("");


    const getData = async() => {
       axios
       .get('https://pokeapi.co/api/v2/pokemon?limit=200')
       //Pasamos el nombre del array (results)
       .then(re => setData(re.data.results))
    }

    //ejecutamos  setSearch y rescatmos los cambios del input
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    //Definimos una constante, si no ingresa nada !search, pasamos data [] si no  realizamos el filtrado
    const results = !search ? data : data.filter( x => x.name.toLowerCase().includes(search.toLocaleLowerCase()))


    useEffect( () => { getData(); },[])


  return (
    <Block>
        <SerchBlock>
            <Search onChange={handleSearchChange} placeholder="Filtar... " type='text' />
        </SerchBlock>
        {/* LLamamos a la const results */}
        {results.map((y, i) => 
        <ListBlock>
            <Pod key={i}>
              <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${y.name}.jpg`}/>
              <Name>{i} {y.name}</Name>
            </Pod>
            <Loading />
        </ListBlock>
        )}
    </Block>
  )
}

export default SearchComponent