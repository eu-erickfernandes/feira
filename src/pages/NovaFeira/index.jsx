import { useContext } from "react"
import ListaProdutos from "../../components/ListaProdutos"
import FormularioFeira from "./FormularioFeira"
import { FeiraContext } from "../../common/context/Feira"


const NovaFeira = () => {
    const {
        produtos
    } = useContext(FeiraContext)
    return(
        <>
            <h1 className='app__titulo'>Nova feira</h1>

            <FormularioFeira />

            <ListaProdutos 
                produtos={ produtos }
            />
        </>
    )
}

export default NovaFeira