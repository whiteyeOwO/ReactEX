import { useEffect } from "react"


function App(){

  useEffect(() => {
    let p1 = document.getElementById("p1");
    p1.addEventListener("mouseover",() => {
      p1.style.color = "blue";
      p1.style.fontWeight = "bold";
    });
    p1.addEventListener("mouseout",() => {
      p1.style.color = "";
      p1.style.fontWeight = "";
    });

    let p2 = document.getElementById("p2");
    p2.addEventListener("mouseover",() => {
      p2.textContent = "改變";
    });
    p2.addEventListener("mouseout",() => {
      p2.textContent = "變回來";
    });

    const h1 = document.getElementById("h1");
    let isClick = false;
    h1.addEventListener("click",(e) => {
        if (isClick == false){
            e.target.textContent = "成功改變";
            e.target.style.color = "blue";
            isClick = true;
        }
        else {
            e.target.textContent = "改變回來";
            e.target.style.color = "";
            isClick = false;
        }
    });
  },[]);

  return(
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2">變內容</p>
    </>
  )
}

export default App /* 重要 */
