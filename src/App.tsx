import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Product from '@components/Product'
import useProductManager from '@utils/productManager'
import { ProductManagerContext } from '@utils/productManagerContext'
import { ProductContext } from '@utils/productContext'
import './App.scss'

function App() {

  const manager = useProductManager()

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
              <ProductManagerContext.Provider value={manager}></ProductManagerContext.Provider>
             </ProductContext.Provider>
           }
    />
    <Route path="/"
            element={
              <ProductContext.Provider value={false}>
                <ProductManagerContext.Provider value={manager}></ProductManagerContext.Provider>
              </ProductContext.Provider>      
            }
     />
     <Route path="/buy"
            element={
              <ProductContext.Provider value={true}>
                <ProductManagerContext.Provider value={manager}></ProductManagerContext.Provider>
              </ProductContext.Provider>
            }
     />
    </Routes>
    </>
  )
}

export default App
