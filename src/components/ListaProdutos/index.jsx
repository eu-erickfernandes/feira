import { useContext } from "react"
import { FeiraContext } from "../../common/context/Feira"
import ItemProduto from "./ItemProduto"
import styles from './ListaProduto.module.css'

const ListaProdutos = ({ produtos }) => {
    return(
        <div className={ styles.containerLista }>
            <h2>Produtos ({ produtos.length })</h2>

            {produtos.length > 0 ? 
                <>
                    <p className={ styles.lista__subtotal }><b>Subtotal:</b> { produtos.reduce((soma, produto) => soma += (produto.preco * produto.quantidade), 0) }</p>

                    <ul className={ styles.lista }>
                        {produtos.map(produto => (
                            <ItemProduto 
                                key={ produto.id }
                                id={ produto.id }
                                nome={ produto.nome }
                                preco={ produto.preco }
                                quantidade={ produto.quantidade }
                            />
                        ))}
                    </ul>
                </>
            : 
                <span>Nenhum produto Cadastrado</span>
            }
        </div>
    )
}

export default ListaProdutos