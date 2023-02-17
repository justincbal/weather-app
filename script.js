// API KEY: 9b50b63f50fa87d1454de0dd998b0a14
// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9b50b63f50fa87d1454de0dd998b0a14
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=9b50b63f50fa87d1454de0dd998b0a14

/*
    UNITS:
    Fahrenheit = imperial
    Celsius = metric

    Temperature: 
    Feels like:
    High: 
    Low: 

*/
const srchBtn = document.querySelector('.srchBtn');
const error = document.querySelector('.error');

class Location {
    constructor(obj) {
        this._location = obj.name;
        this._type = obj.weather[0].main;
        this._temp = obj.main.temp;
        this._feels = obj.main.feels_like;
        this._min = obj.main.temp_min;
        this._max = obj.main.temp_max;
        this._humidity = obj.main.humidity;
        this._wind = obj.wind.speed;
        this._icon = obj.weather[0].icon;
    }
}

// Handle string cleanup
function cleanUp(str) {
    return str.trim();
}

// Handle search event
srchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('#search');
    const searchVal = cleanUp(searchInput.value);
    searchInput.value = '';
    
    // Use API
    getWeatherAtLoc(searchVal);

})

// FETCH INFO FROM OPENWEATHER API
const getWeatherAtLoc = async (loc) => {
    try {
        error.style.display = 'none';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=9b50b63f50fa87d1454de0dd998b0a14`, {mode: "cors"});
        const dataRes = await response.json();
        console.log(JSON.stringify(dataRes));
        createObj(dataRes);
    }
    catch(err) {
        console.log(err);
        error.style.display = 'block';
    }

}

// CREATE OBJECT THAT STORES INFORMATION
function createObj(res) {
    const weatherObj = new Location(res);
    updatePage(weatherObj);
    console.log(weatherObj);
}

// Apply to page
function updatePage(obj) {
    const locationHeading = document.querySelector('.locationHeading');
    const weatherType = document.querySelector('.weatherType');
    const tmp = document.querySelector('.tmp');
    const fltmp = document.querySelector('.fltmp');
    const high = document.querySelector('.high');
    const low = document.querySelector('.low');
    const humid = document.querySelector('.humid');
    const winds = document.querySelector('.winds');
    const icon = document.querySelector('.img');

    locationHeading.textContent = obj._location;
    weatherType.textContent = obj._type;
    tmp.textContent = `${obj._temp} °C`;
    fltmp.textContent = `${obj._feels} °C`;
    high.textContent = `${obj._max} °C`
    low.textContent = `${obj._min} °C`;
    humid.textContent = `${obj._humidity} %`;
    winds.textContent = `${obj._wind} mph`;
    icon.src = `http://openweathermap.org/img/wn/${obj._icon}@2x.png`


}