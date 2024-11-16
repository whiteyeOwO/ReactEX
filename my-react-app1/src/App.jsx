import { useState } from "react"

function App(){
  const [name , setName] = useState("1113");
  function changeText(e){
    setName(e.target.value);
  }
  return(
    <>
      <h2>目前文字方塊的內容:{name}</h2>
      請輸入姓名:<input type="text" value={name} onChange={changeText} />
    </>
  )
}

export default App /* 重要 */
