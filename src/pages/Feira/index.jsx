import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FeiraContext } from "../../common/context/Feira"

const Feira = () => {
    const navigate = useNavigate()

    const id = Number.parseInt(useParams().id)

    const [feira, setFeira] = useState({})

    const {
        feiras
    } = useContext(FeiraContext)

    useEffect(() => {
        console.log(id)
        setFeira(feiras.find(feira => feira.id === id))
        
        if(!feira)
            navigate('/404')
        
    }, [])

    return(
        <>
            <h1 className="app__titulo">Feira #{ feira.id }</h1>

            <p>{ feira.data }</p>
        </>
    )
}

export default Feira