import { useContext } from "react"
import Botao from "../Botao"
import Input from "./Input"
import { ProdutoContext } from "../../common/context/Produto"

const Formulario = () => {
    const { 
        nome, 
        setNome, 
        preco, 
        setPreco, 
        quantidade, 
        setQuantidade 
    } = useContext(ProdutoContext)

    return(
        <form >
            <Input 
                label='Nome'
                name='nome'
                type='text'
                value={ nome }
                onChange={ setNome }
            />

            <Input 
                label='Preço'
                name='preco'
                type='number'
                value={ preco }
                onChange={ setPreco }
            />

            <Botao>Salvar</Botao>
        </form>
    )
}

export default Formulario