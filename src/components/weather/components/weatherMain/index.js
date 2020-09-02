import * as React from 'react';
import { WiHumidity, WiStrongWind, WiRain } from "react-icons/wi";

const WeatherMain = ({ infos }) => {

    console.log(infos.default.list[0].pop);

    return (
        <main className="w-full h-calc relative flex flex-col justify-around align-center text-white">
            <div className="flex justify-center">
                <div className="w-auto h-auto h-auto text-6xl relative text-center">{infos.default.list[0].main.temp}°</div>
                <img src={`http://openweathermap.org/img/wn/${infos.default.list[0].weather[0].icon}@2x.png`} alt="weather"/>
            </div>
            <div className="w-full h-6 relative flex justify-around text-3xl">
                <div className="flex w-auto h-auto flex-col justify-center align-center">
                    <p className="flex justify-center"><WiRain /></p>
                    <p className="text-xl">{infos.default.list[0].pop} %</p>
                </div>
                <div className="flex w-auto h-auto flex-col justify-center align-center">
                    <p className="flex justify-center"><WiHumidity /></p>
                    <p className="text-xl">{infos.default.list[0].main.humidity} %</p>
                </div>
                <div className="flex w-auto h-auto flex-col justify-center align-center">
                    <p className="flex justify-center"><WiStrongWind /></p>
                    <p className="text-xl">{infos.default.list[0].wind.speed} m/s</p>
                </div>
            </div>
        </main>
    );
};

export default WeatherMain;