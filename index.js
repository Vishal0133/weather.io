const apiKey="4e5967b635ea6478a64681e31951e6cc";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else{
        var data=await response.json();
        const weatherIcon=document.querySelector(".weather-icon");
    
      document.querySelector('.city-name').innerHTML=data.name;
      document.querySelector('.temp').innerHTML=Math.ceil(data.main.temp)+ "°C";
      document.querySelector('.humidity').innerHTML=data.main.humidity+ "%";
      document.querySelector('.wind').innerHTML=data.wind.speed+ " km/hr";
      //console.log(data);
      if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./clouds.png";
    
      }
      else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./clear.png";
        
      }
      else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./rain.png";
        
      }
      else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./drizzle.png";
        
      }
      else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./mist.png";
        
      }
      document.querySelector(".weather").style.display="block";
      document.querySelector('.error').style.display="none";
    }

   
  
}


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

searchBtn.addEventListener("click",()=>{

    let city=searchBox.value;
    city.toLowerCase();
    checkWeather(city);
})