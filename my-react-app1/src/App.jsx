import $ from "jquery"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    $(".anime").on("mouseenter", function() {
      $(this).addClass("imgScale");
    });

    $(".anime").on("mouseout", function() {
      $(this).removeClass("imgScale");
    });
  }, [])

  return (
    <>
      <div className="wrap">
        <a href="#" className="anime">
          <img src="./public/images/01.jpg "alt="" />
        </a>
      </div>
    </>
  )
}

export default App /* 重要 */
