import { useEffect } from "react";

function App(){

  useEffect(() => {
      let btn1 = document.getElementById("btn1");
      btn1.addEventListener("click", () => {
        let p1 = document.getElementById("p1");
        p1.style.color = "blue";
      });    
  },[]);

  return(
    <>
      <h1>useEffect</h1>
      <hr />
      <p id="p1">AAAAA</p>
      <button id="btn1">變色</button> 
    </>
  )
}

export default App /* 重要 */
