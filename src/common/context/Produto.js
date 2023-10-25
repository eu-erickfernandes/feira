import { createContext, useState } from "react";

export const ProdutoContext = createContext()
ProdutoContext.displayName = 'Produto'

export const ProdutoProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [quantidade, setQuantidade] = useState(1)

    return (
        <ProdutoContext.Provider 
            value={{ 
                nome, 
                setNome, 
                preco, 
                setPreco, 
                quantidade, 
                setQuantidade 
            }}>
            
            { children }

        </ProdutoContext.Provider>
    )
}