import styles from './App.module.css'
import Formulario from './components/Formulario';
import ListaProdutos from './components/ListaProdutos';
import { ProdutoProvider } from './common/context/Produto'

function App() {
  return (
    <div className={ styles.containerApp }>
      <ProdutoProvider>
        <h1 className={ styles.app__titulo }>Feira</h1>
        
        <Formulario />
        <ListaProdutos />
      </ProdutoProvider>
    </div>
  );
}

export default App;
