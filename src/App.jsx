import { useState } from 'react'
function App() {
  let [count, setCount] = useState(0)
  function add() {
    console.log("clicked");
      count= count+1;
      setCount(count)
  }
  function sub() {
    console.log("clicked");
    count= count - 1;
    setCount(count)
}
  return (
    <>
      <div>
     <h3>This is my Counter App</h3>
     <h1>Counter {count}</h1>
     <button onClick={add}>+</button>
     <button onClick={sub}>-</button>
      </div>    
    </>
  )
}

export default App
