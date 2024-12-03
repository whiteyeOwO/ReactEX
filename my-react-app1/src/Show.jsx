function Show() {

    return (
        <>
            {
                (async () => {
                    const data = await axios.get("");

                    const {location} = data.data.cwaopendata.dataset.location;


                    // locationName => 縣市名
                    // elementName => Wx => 天氣概況
                    // elementName => PoP => 降雨率

                    {location.map((city) => {
                        return (
                            <div key={city.locationName}>
                                <h1><strong>{city.locationName}</strong></h1>
                            </div>
                        )
                    })}

                })()
            }
        </>
    )
}

export default Show