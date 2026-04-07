const Screen = ({pokemones}) => {
    return (
        <>
            <div className="w-[450px] h-[200px] border-4 border-solid rounded-[10px]">
                {pokemones?.map((pokemon,i) => {
                    return <img key={i} src={pokemon?.sprites?.front_default} className="w-40 h-40"/>
})}
            </div>
        
        </>
    )
}

export default Screen