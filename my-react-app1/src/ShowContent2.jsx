function ShowContent2(){

    const contentClass = [
      {
        id:1,
        imgs:"./public/images/unity.jpg",
        title:"Unity 5",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores,",
        teacher:"講師:XXX",
        time:"影音課程時數 : XX小時",
        price1:"原價NT$ 1600",
        price2:"NT$ 1200",
      },
      { 
        id:2,
        imgs:"./public/images/gamesalad.jpg",
        title:"GameSalad 2D遊戲製作",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores,",
        teacher:"講師:XXX",
        time:"影音課程時數 : XX小時",
        price1:"原價NT$ 3200",
        price2:"NT$ 1600",
      },
      {
        id:3,
        imgs:"./public/images/gwd.jpg",
        title:"Google Web Design",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores,",
        teacher:"講師:XXX",
        time:"影音課程時數 : XX小時",
        price1:"原價NT$ 6600",
        price2:"NT$ 3600",
      },
    ]

    return(
      <>
        {contentClass.map((item) =>{
          return(
            <article key={item.id}>
            <figure>
              <img src={item.imgs} alt="" />
            </figure>
            <h2>{item.title}</h2>
            <p className="card-contant">{item.desc}</p>
            <div className="cardName">
              <p>{item.teacher}</p>
              <p>{item.time}</p>
            </div>
            <div className="price">
            <p><span className="price1">{item.price1}</span><span className="price2">{item.price2}</span></p>
            </div>
            <div className="pay"><a href="">付款上課去</a></div>
          </article>
            )
        })}
      </>
    )
  }

  export default ShowContent2