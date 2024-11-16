import { useState } from "react"


function App(){
  const [num , setNum] = useState (0);
  function btnClick(){
    setNum(num+5);
  }
  return(
    <>
    <h2>目前值:{num}</h2>
      <button onClick={() => {
        setNum(num+1);
      }}>+1</button>
      <button onClick={btnClick}>+5</button>
    </>
  )
}

export default App /* 重要 */
