import React from 'react'

function useCounter() {
  const [count,setCount] = React.useState(0)

  const plus = (n = 1) => {
    setCount(prev => prev + n)
  }

  const minus = (n = 1) => {
    setCount(prev => prev - n)
  }

  return { count, plus, minus }
}

export default useCounter
