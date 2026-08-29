import React from 'react'
import { ProductContext } from '@utils/productContext'
import useCounter from '@utils/useCounter'
import { ProductManagerContext } from '@utils/productManagerContext'
import { type Target } from '@utils/productManager'

type ProductProps = {
  name : string
  price : number
  image : string
  target : Target
}

const Product = ({ name, price, image, target } : ProductProps) => {

  const manager = React.useContext(ProductManagerContext)

    if (!manager) {
        throw new Error('Product must be inside ProductManagerContext')
    }
 
  const {count, plus, minus} = useCounter()
  const showButtons = React.useContext(ProductContext)
  const product = React.useMemo( () =>
    manager.create(name,price,image), [name,price,image]
  )

  return (

    <div className="product">
    <img src={image} />
    <h2>{name}</h2>
    <p>{price}$ {count > 0 && <>x {count}</>}</p>
    {showButtons &&
      <>
        <button id="add" onClick={() => plus()}>+</button>
        {count > 0 && <>
          <button id="remove" onClick={() => minus()}>-</button>
          <button id="confirm" onClick={() => manager.add(target,product)}>✓</button>
          </>
      }
      </>
    }
    </div>
  )
}

export default Product
