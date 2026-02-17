const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const locationEl = document.getElementById("location");
const temperatureEl = document.querySelector(".temprature");
const descriptionEl = document.querySelector(".weather-description");
const weatherIcon = document.querySelector(".weather-icon");
const dateEl = document.querySelector(".date-time");

const apiKey = "37efe2e06dfaba0279abad1be789e80e";
dateEl.innerText = new Date().toLocaleDateString('en-US', { weekday: 'long' }) +'  |  ' + new Date().toLocaleString();
searchButton.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city){
    // console.log("Fetching weather data for: " + city);
    const response = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
    const data = await response.json();
    console.log(data);

    // basic error handling
    if (!data || data.error) {
        descriptionEl.innerText = data && data.error && data.error.info ? data.error.info : 'Unable to fetch weather data.';
        locationEl.innerText = '';
        temperatureEl.innerText = '';
        return;
    }

    // populate main fields
    locationEl.innerText = `${data.location.name}, ${data.location.country}`;
    temperatureEl.innerHTML = `${data.current.temperature}&#8451;`;
    descriptionEl.innerText = Array.isArray(data.current.weather_descriptions) ? data.current.weather_descriptions[0] : (data.current.weather_descriptions || '');

    // populate details section (Feels Like, Wind Speed, Visibility)
    const detailsEl = document.querySelector('.details');
    if (detailsEl) {
        const detailPs = detailsEl.querySelectorAll('p');
        if (detailPs.length >= 3) {
            detailPs[0].innerText = `Feels Like: ${data.current.feelslike ?? data.current.temperature}°C`;
            detailPs[1].innerText = `Wind Speed: ${data.current.wind_speed ?? data.current.wind_kph ?? 0} km/h`;
            detailPs[2].innerText = `Visibility: ${data.current.visibility ?? 0} km`;
        }
    }

    // populate footer forecast cards (use forecast if available, otherwise repeat current)
    const forecastEls = document.querySelectorAll('.tomorrow-temprature');
    forecastEls.forEach((el, idx) => {
        const dayEl = el.querySelector('.days');
        const tempNumEl = el.querySelector('.temprature-number');
        const dayWeatherEl = el.querySelector('.days-weather');

        const d = new Date();
        // show today + idx (you can change to idx+1 for tomorrow first)
        d.setDate(d.getDate() + idx);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
        if (dayEl) dayEl.innerText = dayName;

        if (data.forecast) {
            const dateKey = d.toISOString().split('T')[0];
            const f = data.forecast[dateKey];
            if (f) {
                tempNumEl.innerText = `${f.avgtemp ?? f.maxtemp ?? f.mintemp ?? data.current.temperature}°C`;
                // dayWeatherEl.innerText = f.condition ?? (Array.isArray(f.weather_descriptions) ? f.weather_descriptions[0] : '') || (Array.isArray(data.current.weather_descriptions) ? data.current.weather_descriptions[0] : '');
            } else {
                tempNumEl.innerText = `${data.current.temperature}°C`;
                dayWeatherEl.innerText = Array.isArray(data.current.weather_descriptions) ? data.current.weather_descriptions[0] : (data.current.weather_descriptions || '');
            }
        } else {
            tempNumEl.innerText = `${data.current.temperature}°C`;
            dayWeatherEl.innerText = Array.isArray(data.current.weather_descriptions) ? data.current.weather_descriptions[0] : (data.current.weather_descriptions || '');
        }
    });
}
