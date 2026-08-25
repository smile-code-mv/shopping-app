import React from 'react'

type Product = {
  id : string
  name : string
  price : number
  image : string
}

type Target = 'storage' | 'sell' | 'buy'

const Manager = () => {
  const [storage,setStorage] = React.useState<Product[]>([])
  const [sell,setSell] = React.useState<Product[]>([])
  const [buy,setBuy] = React.useState<Product[]>([])

  const create = (name : string = '', price : number = 0, image : string = '' ) => {
    const product : Product = {
      id : crypto.randomUUID(),
      name : name,
      price : price,
      image : image,
    }

    return product
  }

  const add = (command : Target, product : Product) => {

    switch(command){
      case 'storage' : setStorage(prev => [...prev, product])
      break
      case 'sell' : setSell(prev => [...prev, product])
      break
      case 'buy' : setBuy(prev => [...prev, product])
      break
    }
  }

  const remove = (command : Target, product : Product) => {

     switch(command){
       case 'storage' : setStorage(prev =>
                                   prev.filter(data => data.id !== product.id))
       break
       case 'sell' : setSell(prev =>
                             prev.filter(data => data.id !== product.id))
       break
       case 'buy' : setBuy(prev =>
                           prev.filter(data => data.id !== product.id))
       break
     }
   }

   const move = (from : Target, to : Target, product : Product) => {

     remove(from,product)
     add(to,product)
   }


  return { create, add, remove, move }

}

export default Manager
