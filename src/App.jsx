import {useEffect,useState} from 'react';
import './App.css'
import RightControl from './components/RightControl';
import LeftControl from './components/LeftControl';
import useFetch from './hooks/useFetch';
import Screen from './components/screen';
import GameScreen from './components/Gamerscreen';
import PokemonDetail from './components/PrevS';


function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);
  const [pokemones, setPokemones] = useState([]);
  const [myPokeSelection, setMyPokeSelection] = useState(null); 
  const [pcPokeSelection, setPcPokeSelection] = useState(null); 
  const [showGameScreen, setShowGameScreen] = useState(false); 

  const getListPokemones = () => {
    if (!data?.results) return;
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
      setPokemones(values);
    });
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
    const computerSelection = () => {
    const rnd = getRandomInt(1, 101)
    const pc = pokemones.find((p) => p.id === rnd);
    setPcPokeSelection(pc);
    console.log(pc)

  };

  useEffect(() => {
  if (data?.results) {
    getListPokemones();
  }
}, [data]);

  //Handle Direction
  const[position, setPosition] = useState(1);
  const handleDirection = (direction) => {
  console.log(direction);

  if (direction === 'right' && position < pokemones.length) {
      setPosition((prev) => prev + 1);
    } else if (direction === 'left' && position > 1) { 
      setPosition((prev) => prev - 1);
    }
};
  const handleSelection = () => { 
    const selectPokemon = pokemones.find((p) => p.id === position);
    setMyPokeSelection(selectPokemon);
    computerSelection(); 
    setShowGameScreen(true); 
  };

  const currentPokemon = pokemones.find((p) => p.id === position);

  return (
    <div className='w-[100%] h-[900px]  flex items-center justify-center bg-black'>
      <div>
        <div className='flex'>
        </div>

        <div className='flex relative'> {}
          <LeftControl handleDirection={handleDirection} />
          <Screen pokemones={pokemones} position={position}/> 
          {showGameScreen && (
            <div className='absolute left-[100px] top-0'>
              <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection} />
            </div>
          )}
          <RightControl handleSelection={handleSelection} /> {}
        </div>
      </div>
      <div className='w-[90%] h-[500px] flex items-center justify-center bg-black text-white'>
          <PokemonDetail actual={currentPokemon ? [currentPokemon] : []} />
      </div>
    </div>
    
  );
}

export default App;

