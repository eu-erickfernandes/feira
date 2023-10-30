import { useContext, useState } from "react"
import Botao from "../../../components/Botao"
import Input from "../../../components/Input"
import { ProdutoContext } from "../../../common/context/Produto"
import { FeiraContext } from "../../../common/context/Feira"
import styles from './FormularioFeira.module.css'
import Formulario from "../../../components/Formulario"
import { useNavigate } from "react-router-dom"

const FormularioFeira = () => {
    const navigate = useNavigate()

    const { 
        nome, 
        setNome, 
        preco, 
        setPreco,
    } = useContext(ProdutoContext)

    const {
        produtos,
        adicionaProduto,
        adicionaFeira,
    } = useContext(FeiraContext)

    const handleSubmitProduto = () => {
        adicionaProduto({
            nome: nome,
            preco: Number.parseFloat(preco),
            quantidade: 1,
        })

        setNome('')
        setPreco(0)
    }

    const handleSubmitFeira = () => {
        adicionaFeira({
            data: new Intl.DateTimeFormat().format(new Date()),
            produtos: produtos,
        })
        navigate('/feiras')
    }

    return(
        <div className={ styles.containerFormulario }>  
            <h2>Adicione os produtos da feira</h2>
        
            <Formulario onSubmit={ handleSubmitProduto }>
                <Input 
                    label='Nome'
                    name='nome'
                    value={ nome }
                    onChange={ setNome }
                    placeholder='Ex: Queijo'
                />

                <Input 
                    label='Preço'
                    name='preco'
                    value={ preco }
                    onChange={ setPreco }
                    mascara='moeda'
                />

                <Botao>Adicionar</Botao>
            </Formulario>

            <Formulario onSubmit={ handleSubmitFeira }>
                <Botao>Salvar Feira</Botao>
            </Formulario>
        </div>
    )
}

export default FormularioFeira