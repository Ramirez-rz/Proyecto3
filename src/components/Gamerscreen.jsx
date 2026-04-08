import React from 'react';

const GameScreen = ({ myPokeSelection, pcPokeSelection }) => { 
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
        </div>

        <p>VS</p>

        <div className="flex flex-col items-center">
          <img
            src={pcPokeSelection?.sprites?.front_default}
            alt={pcPokeSelection?.name}
            className="w-25 h-25 border-2"
          />
          <p>{pcPokeSelection?.name}</p>
        </div>
      </div>
    </>
  );
};

export default GameScreen;