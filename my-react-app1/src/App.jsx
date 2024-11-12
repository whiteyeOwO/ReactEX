import "./App.css"



function App(){
    
  return(
    <>
      <header>
          <img src="./public/images/banner.jpg" alt="" />
      </header>
      <div className="texts">
        <div className="textsCh">
          <h1>教學影音</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, .</p>
          </div>
        <div className="textsCh">
          <h1>良性互動</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, ex fugit eos. Sint in unde quidem, </p>
        </div>
        <div className="textsCh">
          <h1>趨勢分享</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, ex fugit eos. Sint in unde quidem, recusandae consequuntur dolor sapiente vel veniam, laboriosam reiciendis adipisci quaerat. Reprehenderit.</p>
        </div>
      </div>
      <div className="textBig"><h1>讓學習成為一種習慣</h1></div>
      <div>
        <div className="recommand">
          <h1>推薦課程</h1>
        </div>
        <div className="card">
          <article>
            <figure>
              <img src="./public/images/unity.jpg" alt="" />
            </figure>
            <h2>Unity 5</h2>
            <p className="card-contant">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, </p>
            <div className="cardName">
              <p>講師:XXX</p>
              <p>影音課程時數 : XX小時</p>
            </div>
            <div className="price">          
              <p><span className="price1">原價NT$ 1600</span><span className="price2">NT$ 1200</span></p>
            </div> 
            <div className="pay"><a href="">付款上課去</a></div>
          </article>
          <article>
            <figure>
              <img src="./public/images/gamesalad.jpg" alt="" />
            </figure>
            <h2>GameSalad 2D遊戲製作</h2>
            <p className="card-contant">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores,</p>
            <div className="cardName">
              <p>講師:XXX</p>
              <p>影音課程時數 : XX小時</p>
            </div>
            <div className="price">
            <p><span className="price1">原價NT$ 3200</span><span className="price2">NT$ 1600</span></p>
            </div>
            <div className="pay"><a href="">付款上課去</a></div>
          </article>
          <article>
            <figure>
              <img src="./public/images/gwd.jpg" alt="" />
            </figure>
            <h2>Google Web Design</h2>
            <p className="card-contant">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores,</p>
            <div className="cardName">
              <p>講師:XXX</p>
              <p>影音課程時數 : XX小時</p>
            </div>
            <div className="price">
            <p><span className="price1">原價NT$ 6600</span><span className="price2">NT$ 3600</span></p>
            </div>
            <div className="pay"><a href="">付款上課去</a></div>
          </article>
        </div>
      </div>
      <footer className="textFooter"><p>&copy; 2024/11/12 朱尹華</p></footer>
    </>
  )
}

export default App /* 重要 */
