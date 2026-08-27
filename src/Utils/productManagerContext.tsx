import React from 'react'
import useProductManager from './productManager'

export const ProductManagerContext = React.createContext<
    ReturnType<typeof useProductManager> | null
>(null)
