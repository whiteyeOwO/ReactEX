import MyComponent from "./Component/MyComponent"
import "./App.css"

function App() {

  const strName = "030";
  /* function MyComponent2() {
    return (
      <h1>???</h1>
    )
  }
  ***不建議使用*** */
  return (
    <div>
      <h1 className = "Myh1" style={{
        color: "red",
        backgroundColor: "yellow",
        width: "300px",
      }}>{strName}, 你好</h1>
      <label htmlFor="userName">請輸入: </label>
      <input type="text" id="userName" placeholder={strName} />
      <MyComponent></MyComponent>
        {/* <MyComponent2/> */}
    </div>

  )
}

export default App /* 重要 */
