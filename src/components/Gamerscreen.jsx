import React from 'react';
import {useEffect,useState} from 'react';

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}




const GameScreen = ({ myPokeSelection, pcPokeSelection }) => {
  const random1=getRandomInt(50,100);
  const random2=getRandomInt(50,100);
  const random3=getRandomInt(50,100);
  const random4=getRandomInt(50,100);
  const randomDm=getRandomInt(50,100);

   //Health player
  const [pcHP, setPcHP] = useState(100);
  const [myHP, setmyHP] = useState(100);

  // const playerHp=myHP-randomDm
  // setmyHP(playerHp)

  

  const Healthplayer = (Health) =>{
    console.log(Health);
    const EnemyHp=pcHP-Health
    setPcHP(EnemyHp);
    const playerHp=myHP-randomDm
    setmyHP(playerHp)
  };

  return (
    <>
      <div className="w-[450px] h-[250px] border-4 border-solid bg-black text-white flex items-center justify-around">
        <div className="flex flex-col items-center">
          <img
            src={myPokeSelection?.sprites?.front_default}
            alt={myPokeSelection?.name}
            className="w-25 h-25 border-2"
          />
          <p>{myPokeSelection?.name}</p>
          <div className='w-25 h-5 border-2 text-white flex items-center justify-around'>
            <div className='bg-green-500 h-4 flex items-center justify-around' style={{width: myHP}}>
              <p>{myHP}</p>
            </div>
          </div>
        </div>

        <p>VS</p>

        <div className="flex flex-col items-center">
          <img
            src={pcPokeSelection?.sprites?.front_default}
            alt={pcPokeSelection?.name}
            className="w-25 h-25 border-2"
          />
          <p>{pcPokeSelection?.name}</p>
          <div className='w-25 h-5 border-2 text-white flex items-center justify-around'>
            <div className='bg-green-500 h-4 flex items-center justify-around' style={{width: pcHP}}>
              <p>{pcHP}</p>
            </div> 
          </div>
        </div>


        <div>
          <div className="w-[180px] h-[100%] bg-black text-white flex items-center justify-around text-[14px]">
            <div className="grid grid-cols-2 gap-1">
              <div className="border-2 p-2">
                <p className="capitalize">
                  {myPokeSelection?.moves?.[0]?.move?.name}
                </p>
                <p>Attack: {random1}</p>
                <button onClick={() => Healthplayer(random1)} className="border border-white">Choose 1</button>
              </div>
              <div className="border-2 p-2">
                <p className="capitalize">
                  {myPokeSelection?.moves?.[1]?.move?.name}
                </p>
                <p>Attack: {random2}</p>
                <button onClick={() => Healthplayer(random2)} className="border border-white">Choose 2</button>
              </div>
              <div className="border-2 p-2">
                <p className="capitalize">
                  {myPokeSelection?.moves?.[2]?.move?.name}
                </p>
                <p>Attack: {random3}</p>
                <button onClick={() => Healthplayer(random3)} className="border border-white">Choose 3</button>
              </div>
              <div className="border-2 p-2">
                <p className="capitalize">
                  {myPokeSelection?.moves?.[3]?.move?.name}
                </p>
                <p>Attack: {random4}</p>
                <button onClick={() => Healthplayer(random4)} className="border border-white">Choose 4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameScreen;