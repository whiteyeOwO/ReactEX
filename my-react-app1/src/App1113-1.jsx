import "./App.css"
import ShowContent from "./ShowContent.jsx"
import ShowContent2 from "./ShowContent2.jsx"

function App(){
 
  return(
    <>
      <header>
          <img src="./public/images/banner.jpg" alt="" />
      </header>
      <div className="texts">
        <ShowContent />
      </div>
      <div className="textBig"><h1>讓學習成為一種習慣</h1></div>
      <div>
        <div className="recommand">
          <h1>推薦課程</h1>
        </div>
        <div className="card">
          <ShowContent2/>
        </div>
      </div>
      <footer className="textFooter"><p>&copy; 2024/11/12 朱尹華</p></footer>
    </>
  )
}

export default App /* 重要 */
