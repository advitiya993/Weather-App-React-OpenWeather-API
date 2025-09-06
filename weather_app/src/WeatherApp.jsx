import {useState} from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"New Delhi",
        feels_Like:24.84,
        temp: 25,
        tempMin:25,
        tempMax:25,
        humidity:42,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            {/* weather info is passed to infoBox page as a prop */}
            <InfoBox info={weatherInfo}/>
        </div>
    )
}