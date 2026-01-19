



function weatherFunction()
{

const cityInfoBox = document.querySelector("#cityname")
const cityInfo = cityInfoBox.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&appid=771fa99984f7f60bcda45e1ae02c85c9&units=metric`)

.then((packedData)=> 
{
return packedData.json();
})
.then((CityData)=>
    {      
        const weatherInfo= document.querySelector("#weatherInfo") 
        weatherInfo.innerHTML= `<br> ${cityInfo} 🌡️ temperature is ${CityData.main.temp} °C <br> But it feels like ${CityData.main.feels_like} °C 
        <br> Wind Speed 🍃: ${CityData.wind.speed} <br> Weather ☁️: ${CityData.weather[0].description}  <br> Humidity Status: ${CityData.main.humidity} 
        <br> Country 🌍: ${CityData.sys.country} <br><br>Thank you for checking 😊`
   }
    
)



}


