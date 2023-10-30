import { createContext, useContext, useState } from "react";
import { FeiraContext } from "./Feira";

export const ProdutoContext = createContext()
ProdutoContext.displayName = 'Produto'

export const ProdutoProvider = ({ children }) => {
    const { 
        produtos, 
        setProdutos 
    } = useContext(FeiraContext)
    // const [produtos, setProdutos] = useState([])

    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [quantidade, setQuantidade] = useState(1)

    // const adicionaProduto = (produto) => {
    //     setProdutos([...produtos, produto])
    // }

    const mudaQuantidade = (id, qtd) => {
        setProdutos(produtos.map(produto => {
            if(produto.id === id){
                produto.quantidade += qtd
                
                if(produto.quantidade === 0)
                    produto.quantidade = 1
            }

            return produto
        }))
    }

    return (
        <ProdutoContext.Provider 
            value={{
                id,
                setId, 
                nome, 
                setNome, 
                preco, 
                setPreco, 
                quantidade, 
                setQuantidade,
                // produtos,
                // adicionaProduto,
                mudaQuantidade
            }}>
            
            { children }

        </ProdutoContext.Provider>
    )
}