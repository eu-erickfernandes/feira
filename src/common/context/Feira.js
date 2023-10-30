import { createContext, useEffect, useState } from "react";

export const FeiraContext = createContext()
FeiraContext.displayName = 'Feira'

export const FeiraProvider = ({ children }) => {
    const FEIRA_INIT = [
        {
            id: 0,
            data: '30/03/1999',
            produtos: [
                {
                    id: 0,
                    nome: 'Queijo',
                    preco: 8.99,
                    quantidade: 3
                }
            ]
        }
    ]

    const [idTempFeira, setIdTempFeira] = useState(1)
    const [idTempProduto, setIdTempProduto] = useState(1)

    const [feiras, setFeiras] = useState(FEIRA_INIT)

    const [id, setId] = useState(0)
    const [data, setData] = useState('')
    const [total, setTotal] = useState(0)

    const [produtos, setProdutos] = useState([])

    const adicionaFeira = (feira) => {
        feira.id = idTempFeira
        setFeiras([...feiras, feira])
        setIdTempFeira(idTempFeira + 1)
        setProdutos([])
    }

    const adicionaProduto = (produto) => {
        produto.id = idTempProduto
        setProdutos([...produtos, produto])
        setIdTempProduto(idTempProduto + 1)
    }

    // const mudaQuantidadeProduto = (id, qtd) => {
    //     setProdutos(produtos.map(produto => {
    //         if(produto.id === id){
    //             produto.quantidade += qtd
                
    //             if(produto.quantidade === 0)
    //                 produto.quantidade = 1
    //         }

    //         return produto
    //     }))
    // }

    return (
        <FeiraContext.Provider
            value={{
                id,
                setId,
                data,
                setData,
                produtos,
                setProdutos,
                adicionaProduto,
                // mudaQuantidadeProduto,
                adicionaFeira,
                feiras
            }}
        >
            { children }
        </FeiraContext.Provider>
    )
}