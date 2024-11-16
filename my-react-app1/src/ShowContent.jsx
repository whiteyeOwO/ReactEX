function ShowContent() {

    const contentData = [
        {
            id: 1,
            title: "教學影音",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, .",
        },
        {
            id: 2,
            title: "良性互動",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, ex fugit eos. Sint in unde quidem,",
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem consequuntur asperiores, ex fugit eos. Sint in unde quidem, recusandae consequuntur dolor sapiente vel veniam, laboriosam reiciendis adipisci quaerat. Reprehenderit.",
        },
    ]

    return (
        <>
            {contentData.map((item) => {
                return (
                    <div className="textsCh" key={item.id}>
                        <h1><strong>{item.title}</strong></h1>
                        <p>{item.desc}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ShowContent