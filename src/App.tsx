import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Product from '@components/Product'
import './App.scss'

export const ProductContext = React.createContext<boolean>(true)

function App() {
  return(
    <>
    <h1>Shop app</h1>
    <nav>
    <Link className="navButton" to="/sell">Sell</Link>
    <Link className="navButton" to="/">Storage</Link>
    <Link className="navButton" to="/buy">Buy</Link>
    </nav>
    <Routes>
    <Route path="/sell"
           element={
             <ProductContext.Provider value={true}></ProductContext.Provider>
           }
    />
    <Route path="/"
            element={
              <ProductContext.Provider value={false}></ProductContext.Provider>      
            }
     />
     <Route path="/buy"
            element={
              <ProductContext.Provider value={true}></ProductContext.Provider>
            }
     />
    </Routes>
    </>
  )
}

export default App
