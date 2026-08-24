import React from 'react'
import useCounter from '@utils/useCounter'

type ProductProps = {
  name : string
  price : number
  image : string
  isSell : boolean
}

const Product = ({name,price,image} : ProductProps) => {
 
  const {count, plus, minus} = useCounter(0)
  const showButtons = React.useContext(ProductContext)

  return (

    <div className="product">
    <img src={image} />
    <h2>{name}</h2>
    <p>{price}$ {count > 0 && <>x {count}</>}</p>
    {showButtons &&
      <button id="add" onClick={() => plus()}>+</button>
      {count > 0 && <>
        <button id="remove" onClick={() => minus()}>-</button>
        <button id="confirm">✓</button>
        </>
      }
    }
    </div>
  )
}

export default Product
