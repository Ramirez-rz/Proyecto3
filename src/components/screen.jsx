const Screen = ({pokemones}) => {
    return (
        <>
            <div className="w-[450px] h-[200px] border-4 border-solid rounded-[10px]">
                {pokemones?.map((pokemon) => (
                    <p>{pokemon.name}</p>
                ))}
            </div>
        
        </>
    )
}

export default Screen