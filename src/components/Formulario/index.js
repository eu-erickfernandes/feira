import { useContext, useState } from "react"
import Botao from "../Botao"
import Input from "./Input"
import { ProdutoContext } from "../../common/context/Produto"
import styles from './Formulario.module.css'

const Formulario = () => {
    const [idTemp, setIdTemp] = useState(1)
    const { 
        nome, 
        setNome, 
        preco, 
        setPreco,
        adicionaProduto
    } = useContext(ProdutoContext)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        adicionaProduto({
            id: idTemp,
            nome: nome,
            preco: Number.parseFloat(preco),
            quantidade: 1,
        })

        setIdTemp(idTemp + 1)
        setNome('')
        setPreco(0)
    }

    return(
        <div className={ styles.containerFormulario }>  
            <h2>Adicionar produto</h2>
        
            <form className={ styles.formulario } onSubmit={ handleSubmit }>
                <Input 
                    label='Nome'
                    name='nome'
                    type='text'
                    value={ nome }
                    onChange={ setNome }
                    placeholder='Ex: Queijo'
                />

                <Input 
                    label='Preço'
                    name='preco'
                    type='number'
                    value={ preco }
                    onChange={ setPreco }
                />

                <Botao>Adicionar</Botao>
            </form>
        </div>
    )
}

export default Formulario