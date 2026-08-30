import React from 'react'
import { ProductManagerContext } from '@utils/productManagerContext'
import Product from './Product.tsx'
import { type Target } from '@utils/productManager'

type RenderProp = {
  target : Target
}

const Render = ({ target } : RenderProp) => {

  const manager = React.useContext(ProductManagerContext)

  let memory

  switch(target){
    case 'storage': memory = manager?.storage
    break;
    case 'sell' : memory = manager?.sell
    break;
    case 'buy' : memory = manager?.buy
  }

  return (
    <main>
      {memory?.map(product => (
        <Product key={product.id} 
                 name={product.name}
                 price={product.price}
                 image={product.image}
        />
      ))}
    </main>
  )

}
