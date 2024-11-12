
function Component(){
  return <h1>React</h1>
}


function App() {

  const listItem = [
    <Component key="0"/>,
    <Component key="1"/>,
    <Component key="2"/>,
  ]

  const listBooks = [
    {bookName: "HTML",id:"book1"},
    {bookName: "CSS",id:"book2"},
    {bookName: "JAVASCRIPT",id:"book3"},
  ]

  const filterBooks = listBooks.filter((book) => {
    /* if (book.bookName !== "CSS"){
      return true;
    } */
    // 三元運算子的判斷式(只能單層判斷)
    // 判斷式?條件成立:條件不成立
    return book.bookName !== "CSS" ? true : false
  })

  return (

    <div>

      {listItem}
      <hr/>
      {
        listBooks.map((book) => {
          return <div key={book.id}>
            {book.bookName}
          </div>
        })
      }
      <hr/>
      {
        filterBooks.map((book) => {
          return <div key={book.id}>
            {book.bookName}
          </div>
        })
      }

    </div>

  )
}

export default App /* 重要 */
