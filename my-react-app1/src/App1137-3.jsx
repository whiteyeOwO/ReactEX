import { useState } from "react"

function App(){

  const [inputUserName,setInputUserName] = useState("文字方塊");
  const arrCity = ["台北","新北","桃園","台中","台南","高雄"];
  const arrList = ["HTML","CSS","JS"];
  const[checkList, setCheckList] = useState([]);
  const handleCheckList = (e) => {
    if(e.target.checked){
      setCheckList([...checkList,e.target.value]);
    }
    else{
      setCheckList(checkList.filter((list) => {
        return list !== e.target.value;
      }));
    }
  }
  
  return(
    <>
      <h1>React-表單</h1>
      <hr />
      <label htmlFor="usernme">使用者名稱</label>
      <input type="text" name="usernme" id="usernme"  value={inputUserName} onChange={(e) => {
        setInputUserName(e.target.value);
      }}/>
      <br />
      <label htmlFor="city">縣市名</label>
      <select name="city" id="city">
        <option value="">請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }
      </select>
      <br />
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" name="isCheck" id="isCheck" />
      <br />
      {
        arrList.map((list) => {
          return <div key={list}>
          <label htmlFor={list}>{list}</label>
          <input type="checkbox" name={list} id={list} value= {list} onChange={handleCheckList}/>
          </div>
        })
      }
        {checkList}
    </>
  )
}

export default App /* 重要 */
