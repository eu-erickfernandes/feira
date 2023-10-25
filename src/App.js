import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import ListaProdutos from './components/ListaProdutos';
import { ProdutoProvider } from './common/context/Produto'

function App() {
  // const produtos = [
  //   {
  //     nome: 'Queijo',
  //     preco: 123.45,
  //     quantidade: 1
  //   },

  //   {
  //     nome: 'Grão de Bico',
  //     preco: 678.90,
  //     quantidade: 2
  //   }
  // ]

  // const [carrinho, setCarrinho] = useState(produtos)

  // const [nome, setNome] = useState('')
  // const [preco, setPreco] = useState(0)

  // const handleSubmit = (evento) => {
  //   evento.preventDefault()

  //   const produto = {
  //     nome: nome,
  //     preco: preco,
  //     quantidade: 0
  //   }

  //   setCarrinho([...carrinho, produto])
  // }

  return (
    <ProdutoProvider>
      <h1>Feira</h1>
      
      <h2>Adicionar produto</h2>
      
      <Formulario />

      <h2>Produtos 0</h2>

      {/* <ul>
        {carrinho.map((produto) => (
          <li>
            <span>{ produto.nome } - { produto.preco }</span>

            <div>
              <button>+</button>
              <span>{ produto.quantidade }</span>
              <button>-</button>
            </div>
          </li>
        ))}
      </ul> */}

      <ListaProdutos />

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div> */}
    </ProdutoProvider>
  );
}

export default App;
