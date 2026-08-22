import React from 'react'

function useCounter() {
  const [count,setCount] = React.useState(0)

  const plus = (n = 1) => {
    setCount(count + n)
  }

  const minus = (n = 1) => {
    setCount(count - n)
  }

  return { count, plus, minus }
}

export default useCounter()
