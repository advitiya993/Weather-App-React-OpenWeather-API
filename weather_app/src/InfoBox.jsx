import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){

    const INIT_URL="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1676573201503-f1f0354bb387?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // let info={
    //     city:"New Delhi",
    //     feelsLike:24.84,
    //     temp: 25,
    //     tempMin:25,
    //     tempMax:25,
    //     humidity:42,
    //     weather:"haze",
    // };
    return(
        <div className="InfoBox">
            {/* <h3>Weather Info - {info.weather}</h3> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 
                    ? RAIN_URL 
                    : info.temp>15
                    ? HOT_URL
                    : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity>80 
                    ? <ThunderstormIcon/> 
                    : info.temp>15
                    ? <WbSunnyIcon/>
                    : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_Like}&deg;C</p>


                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}