
import "./App.css"
import { IoUmbrellaSharp } from "react-icons/io5";

function App() {


  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="row">

          <div className="col">
            <div className="card">
              <div className="card-title">
                台北市
              </div>
              <div className="card-body">
                <div className="row2">

                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6點<br />
                      ~<br />
                      下午6點
                    </p>
                    <p>
                      <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p><IoUmbrellaSharp />10%</p>
                  </div>

                  <div className="col2">
                    <p>3日</p>
                    <p>
                      上午6點<br />
                      ~<br />
                      下午6點
                    </p>
                    <p>
                      <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p><IoUmbrellaSharp />10%</p>
                  </div>

                  <div className="col2">
                    <p>4日</p>
                    <p>
                      上午6點<br />
                      ~<br />
                      下午6點
                    </p>
                    <p>
                      <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p><IoUmbrellaSharp />10%</p>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="col">
              <div className="card">
                <div className="card-title">
                  新北市
                </div>
                <div className="card-body">
                  <div className="row2">

                    <div className="col2">
                      <p>2日</p>
                      <p>
                        上午6點<br />
                        ~<br />
                        下午6點
                      </p>
                      <p>
                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                      </p>
                      <p>晴時多雲</p>
                      <p><IoUmbrellaSharp />10%</p>
                    </div>

                    <div className="col2">
                      <p>3日</p>
                      <p>
                        上午6點<br />
                        ~<br />
                        下午6點
                      </p>
                      <p>
                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                      </p>
                      <p>晴時多雲</p>
                      <p><IoUmbrellaSharp />10%</p>
                    </div>

                    <div className="col2">
                      <p>4日</p>
                      <p>
                        上午6點<br />
                        ~<br />
                        下午6點
                      </p>
                      <p>
                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                      </p>
                      <p>晴時多雲</p>
                      <p><IoUmbrellaSharp />10%</p>
                    </div>

                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App /* 重要 */
