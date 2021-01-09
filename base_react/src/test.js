import React, { useRef, useState } from 'react'

function App() {
  const clickCount = useRef(0)

  const [count, setCount] = useState(0)

  function click1() {
    setCount(count + 1)
  }

  function click2() {
    setTimeout(() => {
      console.log('count:::', count)
    }, 1000);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={click1}>add1</button>
      <button onClick={click2}>click</button>
    </div>
  )

}

export default App