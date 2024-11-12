
function App(){

  const person = {
    s1:{
      name: "小明",
      age: 10,
    },
    s2:{
      name: "小鎂",
      age: 11,
    },
  }

  const {s1,s2} = person;/* const [s1...other] = person; */
    
  return(
    <>
      <div>{s1.name}</div>
      <div>{s2.name}</div>
    </>
  )
}

export default App /* 重要 */
