import React from 'react'

type Product = {
  id : string
  name : string
  price : number
  image : string
}

type Command = 'storage' | 'sell' | 'buy'

const Manager = () => {
  const [storage,setStorage] = React.useState<Product>([])
  const [sell,setSell] = React.useState<Product>([])
  const [buy,setBuy] = React.useState<Product>([])

  const createProduct = (name : string = '', price : number = 0, image : string = '' ) => {
    const product : Product = {
      id : crypto.randomUUID(),
      name : name,
      price : price,
      image : image,
    }

    return product
  }



}

export default Manager
