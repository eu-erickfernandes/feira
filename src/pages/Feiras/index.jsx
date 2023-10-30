import { useContext } from "react"
import { FeiraContext } from "../../common/context/Feira"
import { Link } from "react-router-dom"

const Feiras = () => {
    const {
        feiras
    } = useContext(FeiraContext)

    return(
        <ul>
            {feiras && feiras.map(feira => (
                <li key={ feira.id }>
                    <Link to={ `/feiras/${feira.id}` }>
                        { feira.data }
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Feiras