import { Routes, Route, Link } from 'react-router-dom'
import { ProductManagerContext } from '@utils/productManagerContext'
import { ProductContext } from '@utils/productContext'
import Render from '@components/RenderMemo'
import './App.scss'

function App() {

  return(
    <>
    <h1>Shop app</h1>
    <br />
    <hr />
    <br />
    <nav>
    <Link className='navButton'
          to="/sell">Sell</Link>

    <Link className='navButton'
          to="/">Storage</Link>

    <Link className='navButton'
          to="/buy">Buy</Link>
    </nav>
    <Routes>
    <Route path="/sell"
           element={
             <ProductContext.Provider value={true}>
              <Render target='sell' />
             </ProductContext.Provider>
           }
    />
    <Route path="/"
            element={
              <ProductContext.Provider value={false}>
                <Render target='storage' />
              </ProductContext.Provider>      
            }
     />
     <Route path="/buy"
            element={
              <ProductContext.Provider value={true}>
                <Render  target='buy' />
              </ProductContext.Provider>
            }
     />
    </Routes>
    </>
  )
}

export default App
