

function App() {

  function say(){
    alert("HELLO");
  }

  const say2 = () =>{
    alert("HI");
  }

  return (
    <div>
      <button onClick={function(){alert("哈囉")}}>按鈕</button>
      <button onClick={say}>按鈕</button>
      <button onClick={say2}>按鈕</button>
    </div>

  )
}

export default App /* 重要 */
