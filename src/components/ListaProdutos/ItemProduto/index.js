import { useContext } from "react"
import { ProdutoContext } from "../../../common/context/Produto"
import styles from './ItemProduto.module.css'

const ItemProduto = ({ id, nome, preco, quantidade }) => {
    const { mudaQuantidade } = useContext(ProdutoContext)

    const aumentaQuantidade = () => {
        mudaQuantidade(id, 1)
    }

    const diminuiQuantidade = () => {
        mudaQuantidade(id, -1)
    }

    return(
        <li className={ styles.item }>
            <span>{id} - { nome } - { preco }</span>

            <div className={ styles.containerBotoes }>
                <button onClick={ diminuiQuantidade } disabled={ quantidade === 1 }>-</button>

                <span>{ quantidade }</span>

                <button onClick={ aumentaQuantidade }>+</button>
            </div>
        </li>
    )
}

export default ItemProduto