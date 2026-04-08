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
    if(!list) return;
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
  
    Promise.all(plist).then((values) => {
      console.log('promesa values', values);
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  return (
    <div className='w-[100%] h-[900px]  flex items-center justify-center'>
      <div>
        <div className='flex'>
        <h1 className='text-3xl font-bold underline '>NINTENDO</h1>
      </div>

      <div className='flex'>
        <LeftControl />
        <Screen pokemones={pokemones}/>
        <RightControl />
        </div>
      </div>

    </div>
    
    
  );
}

export default App;

// function App() {
//   const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
//   const { data, loading, error } = useFetch(url)

//   console.log(data)

//   return (
//     <>
//     <div className='flex'>
//       <h1 className='text-3xl font-bold underline '>NINTENDO</h1>
//     </div>

//     <div className='flex'>
//       <LeftControl />
//       <Screen pokemones={data?.results}/>
//       <RightControl />
//     </div>
//     </>

//   )
// }

// export default App

