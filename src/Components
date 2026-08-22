import React from 'react'

type ProductProps = {
  id : string
  name : string
  price : number
  img : string
}

const Product = ({id,name,price,img} : ProductProps) => {
 
  const [selected,setSelected] = React.useState(false)
  const [count,setCount] = React.useState(0)

  const Click = () => {
    if(selected === false){
      setSelected(true)
    }
  }

  return (
    <div className="product" style={{backgroundImage : `url(${img})`}}>
    <h2>{name}</h2>
    <p>{price}$ {count > 0 && <>x {count}</>}</p>
    <button id="add" onClick={() => {Click(),setCount(count + 1)}}>+</button>
    {count > 0 && <>
      <button id="remove" onClick={count > 0 && setCount(count - 1)}>-</button>
      <button id="confirm">✓</button>
      </>
    }
    </div>
  )
}

export default Product
