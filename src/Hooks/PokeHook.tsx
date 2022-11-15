
import { useEffect, useState } from 'react'

interface poketypes {
    name: any
}

const PokeHook = ( { name }: any) => {

    const [pokemonData, setPokemonData] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setLoading(true)
            setPokemonData(json.results)
        })
        setLoading(false)
    }, [])

    if(!pokemonData) return null

    return (
        <h1>
            {name}
        </h1>
    )
}

export default PokeHook