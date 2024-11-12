
function SecondComponent(){
  return(
    <>
      <h1>我是SecondComponent</h1>
    </>
  )
}

function MyComponent({children}) {
  return(
    <>
      我是MyComponent
      {children}
    </>
  )
}

function App(){
  return(
    <>
      <MyComponent>
          <SecondComponent></SecondComponent>
      </MyComponent>
    </>
  )
}

export default App /* 重要 */
