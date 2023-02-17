// API KEY: 9b50b63f50fa87d1454de0dd998b0a14
// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9b50b63f50fa87d1454de0dd998b0a14
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=9b50b63f50fa87d1454de0dd998b0a14

/*
    UNITS:
    Fahrenheit = imperial
    Celsius = metric
*/

// class location {
//     constructor(loc, )
// }

const getWeatherAtLoc = async (loc) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&APPID=9b50b63f50fa87d1454de0dd998b0a14`, {mode: "cors"});
    const dataRes = await response.json();
    console.log(JSON.stringify(dataRes));
}

getWeatherAtLoc('Toronto, Ontario');