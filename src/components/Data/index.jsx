import React, {useState, useEffect} from "react";
import axios from "axios";
import { Block, SerchBlock, ListBlock, Search, Pod, Image, Name, Loading } from './styles'

let offset = 0;

const SearchComponent = () => {
  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  console.log('1', isLoading)
  const getData = async() => {
      setIsLoading(true)
       await axios
       .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
       //Pasamos el nombre del array (results)
       .then(({ data }) => {
         console.log('2', isLoading)
         const newData =[];
         data.results.forEach( (d) => newData.push(d.name));
         console.log(data.results);  
         setData((oldData) => [...oldData, ...newData]);
        })
        setIsLoading(false)
        offset += 10;
    }

    
    //ejecutamos  setSearch y rescatmos los cambios del input
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
    
    //Definimos una constante, si no ingresa nada !search, pasamos data [] si no  realizamos el filtrado
    const results = !search ? data : data.filter( x => x.toLowerCase().includes(search.toLocaleLowerCase()))
    
    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >=
         e.target.documentElement.scrollHeight){
            getData()
         }
    }
    
    useEffect( () => { 
        getData();
        window.addEventListener('scroll', handleScroll)
    },[])


  return (
    <Block>
        <SerchBlock>
            <Search onChange={handleSearchChange} placeholder="Filtar... " type='text' />
        </SerchBlock>
        {/* LLamamos a la const results */}
        <ListBlock>
        {results.map((y, i) =>
            <Pod key={i}>
              <Image alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${y}.jpg`}/>
              <Name>{y}</Name>
            </Pod>
        )}
          {isLoading && <Loading />}
        </ListBlock>
    </Block>
  )
}

export default SearchComponent