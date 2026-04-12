const PokemonDetail = ({ actual }) => {
  const pokemon = actual?.length > 0 ? actual[0] : null;

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  return (
    <div className="w-full h-full bg-black text-white border-4 border-solid overflow-y-auto p-4">
      <div className="flex flex-col items-center">
        <p className="text-2xl capitalize">
          {pokemon?.name}
        </p>
        <div className="flex items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center">
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon?.name}
              className="w-32 h-32 border-2"
            />
            <p>Front</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={pokemon?.sprites?.back_default}
              alt={pokemon?.name}
              className="w-32 h-32 border-2"
            />
            <p>Back</p>
          </div>
        </div>
        <div className="w-full mt-6">
          <p className="text-xl mb-3">Moves</p>
          <div className="grid grid-cols-2 gap-3">
            {pokemon?.moves?.slice(0, 10)?.map((item, index) => (
              <div key={index} className="border-2 p-2">
                <p className="capitalize">
                  {item?.move?.name}
                </p>
                <p> 
                  Attack: {getRandomInt(50, 100)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;