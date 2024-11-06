import MyComponent from "./Component/MyComponent"

function App() {

  /* function MyComponent2() {
    return (
      <h1>???</h1>
    )
  }
  ***不建議使用*** */
  return (
    <div>
        <MyComponent></MyComponent>
        {/* <MyComponent2/> */}
    </div>

  )
}

export default App /* 重要 */
