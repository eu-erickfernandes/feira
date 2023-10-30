import './App.css'
import { ProdutoProvider } from './common/context/Produto'
import NovaFeira from './pages/NovaFeira';
import { FeiraProvider } from './common/context/Feira'
import { BrowserRouter, Link, Route, Router, Routes, Switch } from 'react-router-dom';
import Feiras from './pages/Feiras';
import Feira from './pages/Feira';

function App() {
  return (
    <div className='containerApp'>
      <BrowserRouter>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/feiras">Feiras</Link>
                </li>

                <li>
                  <Link to="/nova_feira">Nova feira</Link>
                </li>
              </ul>
            </nav>
          </header>

          <FeiraProvider>
            <ProdutoProvider>
              <Routes>
                  <Route path='/nova_feira' element={ <NovaFeira/> } />
                  <Route path='/feiras' element={ <Feiras/> } />
                  <Route path='/feiras/:id' element={ <Feira/> } />

                  <Route path='*' element={ <h1>Página não encontrada</h1> }/>
              </Routes>
            </ProdutoProvider>
          </FeiraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
