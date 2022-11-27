const API_Key ="1674fe49ce8caad4acdd3c2c5c332c8a";

const getCurrentweatherData = async()=>{
    const city= "pune";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    return response.json()
}

const getHourlyForcast = async ({name: city}) =>{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`);
  const data = await response.json();
  return data.list.map(forcast=>{
    const {main:{temp, temp_max, temp_min}, dt, dt_txt, weather:[{description, icon}] }= forcast;
    return {temp, temp_max, temp_min,dt, dt_txt, description, icon}
  })
}

const formatTmprature = (temp)=>`${temp?.toFixed(1)}°`;
const createIconUrl = (icon) => ` http://openweathermap.org/img/wn/${icon}@2x.png`

const loadCurrentForcast = ({name, main:{temp, temp_max, temp_min}, weather:[{description}]})=>{
    const currentForcastElement = document.querySelector("#current-forcast")
    currentForcastElement.querySelector(".city").textContent = name;
    currentForcastElement.querySelector(".temp").textContent = formatTmprature(temp);
    currentForcastElement.querySelector(".description").textContent = description;
    currentForcastElement.querySelector(".min-max-temp").textContent = `H; ${formatTmprature(temp_max)} L:${formatTmprature(temp_min)}`;
    // <h1>City Name</h1>
    //             <p class="temp">Tem</p>
    //             <p class="description">Dscription</p>
    //             <p class="min-max-temp">High Low</p>
}

const loadHourlyForcast = (hourlyForcast)=>{
  console.log(hourlyForcast);
  let dataFor12Hours = hourlyForcast.slice(1, 13);
  const hourlyContainer = document.querySelector('.hourly-container');
  let innerHTMLString = '';

  for(let {temp, icon, dt_txt} of dataFor12Hours){
    innerHTMLString += ` <article>
    <h2 class="time">${dt_txt.split(" ")[1]}</h2>
    <img class="icon" src="${createIconUrl(icon)}">
    <p class="hourly-temp">${formatTmprature(temp)}</p>
    </article>`
  }
  hourlyContainer.innerHTML = innerHTMLString;
}

document.addEventListener("DOMContentLoaded", async()=>{
  const currentWeather = await  getCurrentweatherData();
  loadCurrentForcast(currentWeather)
  const hourlyForcast = await getHourlyForcast(currentWeather);
  loadHourlyForcast(hourlyForcast)
})