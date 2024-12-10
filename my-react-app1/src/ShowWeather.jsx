
import { IoUmbrellaSharp } from "react-icons/io5";

export default function ShowWeather({ city }) {
    return (
        <div className="content">
            {
                city.weatherElement[0].time.map((time, index) => {
                    return (
                        <div className="item2" key={index}>
                            <p>{new Date(time.startTime).toLocaleString(undefined, { day: "numeric" })}</p>
                            <p>
                                {new Date(time.startTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}<br />
                                ~<br />
                                {new Date(time.endTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}
                            </p>
                            <p>
                                <img src={`./public/images/weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                            </p>
                            <p>{time.parameter.parameterName}</p>
                            <p><IoUmbrellaSharp/>{city.weatherElement[4].time[index].parameter.parameterName}%</p>
                        </div>
                    )
                })

            }
        </div>
    )
}