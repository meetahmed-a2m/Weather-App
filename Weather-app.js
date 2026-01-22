



function weatherFunction()
{

const cityInfo = document.querySelector("#cityname").value
// const cityInfo = cityInfoBox.value;

fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityInfo}`)

.then((packedData)=> 
{
   if(!packedData.ok)
    {
       throw new Error("No Valid City Name Found")
    }
     return packedData.json();
})
    .then((CityData)=>
    {      
        console.log(CityData);       
                 
        const iconUrl = "https:" + CityData.current.condition.icon; 

      document.getElementById("weatherIcon").src = iconUrl;

        const weatherInfo= document.querySelector("#weatherInfo") 
        weatherInfo.innerHTML= `<br>🌡️ Temperature in ${cityInfo} is ${CityData.current.temp_c} °C but it feels like ${CityData.current.feelslike_c} °C <br>🌡️ Fahrenheit: ${CityData.current.temp_f} °F
        <br> 🍃 Wind Speed : ${CityData.current.wind_mph} <br> ☁️ Weather: ${CityData.current.condition.text}  <br> 💧 Humidity Status: ${CityData.current.humidity}% 
        <br> 🌍 Country: ${CityData.location.region}, ${CityData.location.country} <br> ⏰ Current Time: ${CityData.location.localtime} <br><br>Thank you for checking 😊`



    })

    .catch(errorInfo =>  weatherInfo.innerHTML= `<br>${errorInfo.message}`)


}


