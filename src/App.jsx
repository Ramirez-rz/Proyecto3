import './App.css'
import RightControl from './components/RightControl';
import LeftControl from './components/LeftControl';
import useFetch from './hooks/useFetch';
import Screen from './components/screen';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const { data, loading, error } = useFetch(url)

  console.log(data)

  return (
    <>
    <div className='flex'>
      <h1 className='text-3xl bg-green-500 font-bold underline rounded-[10px]'>NINTENDO</h1>
    </div>

    <div className='flex'>
      <LeftControl />
      <Screen pokemones={data?.results}/>
      <RightControl />
    </div>
    </>

  )
}

export default App

