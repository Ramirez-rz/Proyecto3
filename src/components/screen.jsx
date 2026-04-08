const Screen = ({pokemones}) => {
    return (
        <>
            <div className="w-[450px] h-[250px] overflow-y-auto border-4 border-solid bg-black flex flex-wrap justify-center">
                {pokemones?.map((pokemon,i) => {
                    return <img key={i} src={pokemon?.sprites?.front_default} className="w-40 h-40 border-2"/>
})}
            </div>
        
        </>
    )
}

export default Screen