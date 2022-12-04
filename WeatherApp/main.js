const API_Key = "1674fe49ce8caad4acdd3c2c5c332c8a";

const DAYS_OF_THE_WEEK = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

const getCitiesUsingGeolocation = async (searchText)=>{
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${API_Key}`)
  // http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${API_Key}
  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  return response.json();
}

const getCurrentweatherData = async () => {
  const city = "pune";
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
  return response.json()
}

const getHourlyForcast = async ({ name: city }) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`);
  const data = await response.json();
  return data.list.map(forcast => {
    const { main: { temp, temp_max, temp_min }, dt, dt_txt, weather: [{ description, icon }] } = forcast;
    return { temp, temp_max, temp_min, dt, dt_txt, description, icon }
  })
}

const formatTmprature = (temp) => `${temp?.toFixed(1)}°`;
const createIconUrl = (icon) => ` http://openweathermap.org/img/wn/${icon}@2x.png`

const loadCurrentForcast = ({ name, main: { temp, temp_max, temp_min }, weather: [{ description }] }) => {
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

const loadHourlyForcast = ({main:{temp: tempNow}, weather:[{icon: iconNow}]}, hourlyForcast) => {
  // console.log(hourlyForcast);
  const timeFormater = Intl.DateTimeFormat("en", {
    hour12:true, hour:"numeric"
  })
  let dataFor12Hours = hourlyForcast.slice(2, 14);
  const hourlyContainer = document.querySelector('.hourly-container');
  let innerHTMLString = 
  ` <article>
    <h3 class="time">Now</h3>
    <img class="icon" src="${createIconUrl(iconNow)}">
    <p class="hourly-temp">${formatTmprature(tempNow)}</p>
    </article>`
    ;

  for (let { temp, icon, dt_txt } of dataFor12Hours) {

    innerHTMLString += ` <article>
    <h3 class="time">${timeFormater.format(new Date(dt_txt))}</h3>
    <img class="icon" src="${createIconUrl(icon)}">
    <p class="hourly-temp">${formatTmprature(temp)}</p>
    </article>`
  }
  hourlyContainer.innerHTML = innerHTMLString;
}

const calculateDayWiseForcast = (hourlyForcast) => {
  let dayWiseForcast = new Map();

  for (let Forcast of hourlyForcast) {
    const [date] = Forcast.dt_txt.split(" ");
    const dayOfTheWeek = DAYS_OF_THE_WEEK[new Date(date).getDay()]
    console.log(dayOfTheWeek);
    if (dayWiseForcast.has(dayOfTheWeek)) {
      let forcastForTheDay = dayWiseForcast.get(dayOfTheWeek);
      forcastForTheDay.push(Forcast);
      dayWiseForcast.set(dayOfTheWeek, forcastForTheDay)
    } else {
      dayWiseForcast.set(dayOfTheWeek, [Forcast])
    }
  }
  console.log(dayWiseForcast);
  for(let [key, value] of dayWiseForcast){
    let minTemperatures = Math.min(...Array.from(value, val=> val.temp_min));
    let maxTemperatures = Math.max(...Array.from(value, val=> val.temp_max));

    dayWiseForcast.set(key, {minTemperatures, maxTemperatures, icon: value.find(v=> v.icon).icon})
  }
  console.log(dayWiseForcast);
  return dayWiseForcast;
}

const loadFiveDayForcast = (hourlyForcast) => {
  console.log(hourlyForcast);
  const dayWiseForcast = calculateDayWiseForcast(hourlyForcast);
  const container = document.querySelector(".five-day-forcast-container");
  let dayWiseInfo = "";

  Array.from(dayWiseForcast).map(([day, {minTemperatures, maxTemperatures, icon}], index)=>{
    
    if(index < 5){
      dayWiseInfo += `<article class="day-wise-forcast">
                          <h3 class="day">${index === 0? "Today" : day}</h3>
                          <img class="icon" src="${createIconUrl(icon)}" alt="icon for the forcast">
                          <p class="min-temp">${formatTmprature(minTemperatures)}</p>
                          <p class="max-temp">${formatTmprature(maxTemperatures)}</p>
                      </article>`;
    }
  });
  container.innerHTML = dayWiseInfo;
}

const loadFeelLike = ({ main: { feels_like } }) => {
  let container = document.querySelector("#feels-like");
  container.querySelector(".feels-like-temp").textContent = formatTmprature(feels_like);

}

const loadHumidity = ({ main: { humidity } }) => {
  let container = document.querySelector("#humidity");
  container.querySelector(".humidity-value").textContent = `${humidity} %`;

}

function debounce(func){
  let timer;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      console.log("debaunce")
      func.apply(this, args)
    }, 500)
  }
}

const onSearchChange = async (event)=>{
  let { value } = event.target;
  const listOfCities = await getCitiesUsingGeolocation(value);
  let options = "";
  for(let {lat, lon, name, state, country} of listOfCities){
    options += ` <option data-city-details='${JSON.stringify(lat, lon, name)}' value="${name}, ${state}, ${country}"></option>`;
  }
  document.querySelector("#cities").innerHTML = options;
}

const debaunceSearch = debounce((event)=>onSearchChange(event))

document.addEventListener("DOMContentLoaded", async () => {

  const searchInput = document.querySelector('#search');
  searchInput.addEventListener("input",debaunceSearch);

  const currentWeather = await getCurrentweatherData();
  loadCurrentForcast(currentWeather)
  const hourlyForcast = await getHourlyForcast(currentWeather);
  loadHourlyForcast(currentWeather, hourlyForcast);
  loadFiveDayForcast(hourlyForcast);
  loadFeelLike(currentWeather);
  loadHumidity(currentWeather);
})