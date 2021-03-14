
//function to get the data  ()fetchWeatherData 
api.openweathermap.org  /e8c63061c510248574e04ae013f36914

/* 
function addNew(){
    for (let i = 0; i <= x; i++) {// xis the number of times to run the loop
    const newDivR + i = document.createElement('div');
    newDivR + i.setAttribute('class', 'row')
    newDivR + i.setAttribute('id', 'row-' + i)
    document.container.appendChild(newDivR + i);
    const newDivC + i = document.createElemet('div');
    newDivC + i.setAttribute('class', 'col')
    newDivC + i.setAttribute('id', 'col-' + i)
    document.newDiv-R(i).appendChild(newDivC + i)
    }
}
*/

const getWeather = document.getElementById('getWeather');
let data = '';
let zip = '';
let errorText = '';

getWeather.addEventListener('click', getInfo);

function getInfo() {
    document.getElementById('errorAlert').classList.add('d-none');
    zip = document.getElementById('zip').value;
    const API_key = 'e8c63061c510248574e04ae013f36914'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${API_key}`;
    fetch(apiUrl)
    .then(function (response) { // pulls the data (the response) from the API
        return response.json(); // converts the data into a JSON format
    })
    .then(function (json) { //creates a function passing the JSON info as an argument
        data = json; // creates a variable containing the JSON info
        console.log(data);
        renderWeather();
    })
    .catch(function(error) {
        console.log('Error:', error);
        errorText = error.message;
        document.getElementById('errorAlert').classList.remove('d-none');
        document.getElementById('errorAlert').innerHTML = `Not a valid ZIP code.<br> Please try again.<br>&{errorText}`;
    });
}

function renderWeather() {
    document.getElementById('weatherInfo').classList.remove('d-none');
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('kelvin').innerHTML = `<h5>Kelvin</h5>${Math.round(data.main.temp)}`;
    document.getElementById('fahrenheit').innerHTML = `<h5>Fahrenheit</h5>${fahrenheit(data.main.temp)}`;
    document.getElementById('celsius').innerHTML = `<h5>Celsius</h5>${celsius(data.main.temp)}`;
    document.getElementById('condition').innerHTML = `Your current weather <br><strong>${data.weather[0].main}</strong><br><em>with ${data.weather[0].description}</em>`;

}

function fahrenheit(x) {
    return Math.round((x - 273.15) * (9/5) + 32); 
}

function celsius(x) {
    return Math.round(x - 273.15)
}
