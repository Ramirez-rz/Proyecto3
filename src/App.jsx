import {useEffect,useState} from 'react';
import './App.css'
import RightControl from './components/RightControl';
import LeftControl from './components/LeftControl';
import useFetch from './hooks/useFetch';
import Screen from './components/screen';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  //Handle Direction
  const[position, setPosition] = useState(0);
  const handleDirection = (direction) => {
  console.log(direction);

  if (direction === 'right') {
    setPosition((prev) => prev + 1);
  } else if (direction === 'left') {
    setPosition((prev) => prev - 1);
  }
};

  return (
    <div className='w-[100%] h-[900px]  flex items-center justify-center'>
      <div>
        <div className='flex'>
      </div>

      <div className='flex'>
        <LeftControl handleDirection={handleDirection} />
        <Screen pokemones={pokemones} position={position}/>
        <RightControl handleDirection={handleDirection} />
        </div>
      </div>

    </div>
    
    
  );
}

export default App;

